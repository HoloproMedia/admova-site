// Admova — illustration d'un article : une photo Unsplash et un graphique.
// Utilisé par nouvel-article.mjs (chaque lundi) et illustrer-existants.mjs.
// Node 20, aucune dépendance.
//
// Secrets : ANTHROPIC_API_KEY (obligatoire), UNSPLASH_ACCESS_KEY (pour la photo).
// Sans clé Unsplash, l'article reçoit seulement le graphique.
//
// Règle absolue du graphique : chaque valeur affichée doit figurer mot pour
// mot dans le texte de l'article. Sinon, aucun graphique n'est inséré.

import fs from 'node:fs';
import path from 'node:path';

const NB = '\u00A0', AP = '\u2019';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const UTM = 'utm_source=admova&utm_medium=referral';

const texteDe = (html) => {
  const a = html.indexOf('<article'), b = html.indexOf('</article>');
  const zone = a >= 0 && b > a ? html.slice(a, b) : html;
  return zone.replace(/<[^>]+>/g, ' ').replace(/&nbsp;|\u00A0|\u202F/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
};
// « 29,7 Md€ », « 29,7 Md€ » et « 29,7Md€ » sont la même valeur
const norm = (s) => String(s).replace(/[\s\u00A0\u202F]/g, '').replace(/[’']/g, "'").toLowerCase();

async function claude({ key, model, prompt, max = 900 }) {
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model, max_tokens: max, messages: [{ role: 'user', content: prompt }] }),
  });
  if (!r.ok) throw new Error('API Anthropic ' + r.status + ' ' + (await r.text()));
  const t = (await r.json()).content.map((c) => c.text || '').join('');
  return JSON.parse(t.slice(t.indexOf('{'), t.lastIndexOf('}') + 1));
}

// ---------- 1. Ce que Claude propose : une requête photo et un graphique ----------
async function proposer({ key, model, texte, motcle }) {
  return claude({ key, model, max: 1200, prompt: `Voici un article du site d'Admova (régie publicitaire mobile et TV connectée géolocalisée).
Mot-clé : ${motcle || '—'}

ARTICLE :
${texte.slice(0, 9000)}

Tâche 1 — photo. Propose une requête de recherche Unsplash EN ANGLAIS, 2 à 5 mots, qui illustre le sujet de façon concrète et chaleureuse (lieu, objet, scène de ville, écran, commerce). Pas de nom de marque, pas de logo, pas de visage en gros plan.

Tâche 2 — graphique. Si, et seulement si, l'article cite au moins 2 chiffres comparables (même unité ou même nature), construis un graphique en barres horizontales.
- "valeur" : recopie le chiffre EXACTEMENT comme il est écrit dans l'article, avec son unité (ex. "961 M€", "+24,7 %", "15 à 30 km").
- "nombre" : la valeur numérique utilisée pour la longueur de la barre (pour une fourchette, prends le maximum ; un pourcentage négatif reste négatif).
- "libelle" : court, 1 à 4 mots, tiré de l'article.
- "source" : la source citée dans l'article, sinon "Admova".
- N'invente AUCUN chiffre. Si les chiffres ne se comparent pas, mets "graphique": null.

Réponds UNIQUEMENT par ce JSON :
{"photo":"requête","graphique":{"titre":"phrase courte avec point final","unite":"ce que mesurent les barres","barres":[{"libelle":"...","valeur":"...","nombre":0}],"source":"..."}}` });
}

function valider(g, texte) {
  if (!g || !Array.isArray(g.barres)) return null;
  const T = norm(texte);
  const barres = g.barres
    .filter((b) => b && b.libelle && b.valeur && Number.isFinite(Number(b.nombre)))
    .filter((b) => T.includes(norm(b.valeur)));          // le chiffre doit être dans l'article
  if (barres.length < 2) return null;
  return { titre: String(g.titre || 'En chiffres.'), unite: String(g.unite || ''), source: String(g.source || 'Admova'), barres: barres.slice(0, 6) };
}

// ---------- 2. La photo Unsplash ----------
async function photo({ requete, unsplashKey, dejaUtilisees }) {
  if (!unsplashKey || !requete) return null;
  const h = { Authorization: 'Client-ID ' + unsplashKey, 'Accept-Version': 'v1' };
  const u = 'https://api.unsplash.com/search/photos?' + new URLSearchParams({ query: requete, orientation: 'landscape', content_filter: 'high', per_page: '15' });
  const r = await fetch(u, { headers: h });
  if (!r.ok) { console.error('Unsplash', r.status, await r.text()); return null; }
  const p = ((await r.json()).results || []).find((x) => !dejaUtilisees.has(x.id) && x.width >= 1600);
  if (!p) return null;
  // Exigence Unsplash : signaler le téléchargement
  try { await fetch(p.links.download_location, { headers: h }); } catch (e) {}
  return { id: p.id, raw: p.urls.raw, alt: p.alt_description || p.description || requete, auteur: p.user.name, profil: p.user.links.html, couleur: p.color || '#F6F1E7' };
}

async function altFrancais({ key, model, alt, sujet }) {
  try {
    const r = await claude({ key, model, max: 200, prompt: `Traduis cette description de photo en français, en une phrase sobre de 6 à 14 mots, sans point final, sans « image de » ni « photo de ». Contexte de l'article : ${sujet}.\nDescription : ${alt}\nRéponds UNIQUEMENT par {"alt":"..."}` });
    return String(r.alt || alt);
  } catch (e) { return alt; }
}

// ---------- 3. Le rendu HTML ----------
function figurePhoto(p) {
  const src = (w) => `${p.raw}&w=${w}&q=78&fm=webp&fit=crop&crop=entropy&ar=16:9`;
  return `    <figure data-illu="photo" style="margin:6px 0 4px;display:flex;flex-direction:column;gap:10px">
      <img src="${esc(src(1200))}" srcset="${esc(src(760))} 760w, ${esc(src(1200))} 1200w, ${esc(src(1600))} 1600w" sizes="(max-width: 820px) 100vw, 760px" width="1600" height="900" alt="${esc(p.alt)}" fetchpriority="high" decoding="async" style="display:block;width:100%;height:auto;aspect-ratio:16 / 9;object-fit:cover;border-radius:12px;background:${esc(p.couleur)}">
      <figcaption style="font-size:12.5px;line-height:1.5;color:#807D75">Photo${NB}: <a href="${esc(p.profil)}?${UTM}" rel="noopener" style="color:#5B6371">${esc(p.auteur)}</a> sur <a href="https://unsplash.com/?${UTM}" rel="noopener" style="color:#5B6371">Unsplash</a></figcaption>
    </figure>`;
}

function figureGraphique(g) {
  const max = Math.max(...g.barres.map((b) => Math.abs(Number(b.nombre)))) || 1;
  const lignes = g.barres.map((b, i) => {
    const n = Number(b.nombre), pct = Math.max(4, Math.round((Math.abs(n) / max) * 100));
    const neg = n < 0, fort = i === 0 && !neg;
    return `        <div style="display:grid;grid-template-columns:minmax(0,150px) minmax(0,1fr) auto;gap:14px;align-items:center">
          <span style="font-size:14px;font-weight:600;line-height:1.35;color:#0A0A0A">${esc(b.libelle)}</span>
          <span style="height:12px;border-radius:6px;background:#F6F1E7;overflow:hidden"><span style="display:block;height:100%;width:${pct}%;border-radius:6px;background:${neg ? '#807D75' : fort ? '#D85A1A' : '#E8A06C'}"></span></span>
          <span style="font-family:inherit;font-variant-numeric:tabular-nums;font-size:14px;font-weight:700;color:${neg ? '#5C5A54' : '#B8460F'};white-space:nowrap">${esc(b.valeur)}</span>
        </div>`;
  }).join('\n');
  const resume = g.barres.map((b) => `${b.libelle} : ${b.valeur}`).join(' ; ');
  return `    <figure data-illu="graphique" role="group" aria-label="${esc(g.titre + ' ' + resume)}" style="margin:10px 0 6px;background:#ffffff;border:1px solid #EFF0F2;border-radius:12px;padding:26px 26px 22px;display:flex;flex-direction:column;gap:18px">
      <div style="display:flex;flex-direction:column;gap:6px">
        <span style="font-size:11.5px;font-weight:700;letter-spacing:1.3px;text-transform:uppercase;color:#B8480F">En chiffres</span>
        <span style="font-size:19px;font-weight:800;line-height:1.3;letter-spacing:-0.4px;color:#0A0A0A">${esc(g.titre)}</span>
        ${g.unite ? `<span style="font-size:13.5px;line-height:1.5;color:#5B6371">${esc(g.unite)}</span>` : ''}
      </div>
      <div style="display:flex;flex-direction:column;gap:14px">
${lignes}
      </div>
      <figcaption style="padding-top:12px;border-top:1px solid #F1F2F4;font-size:12.5px;line-height:1.5;color:#807D75">Source${NB}: ${esc(g.source)}</figcaption>
    </figure>`;
}

// ---------- 4. Insertion dans la page ----------
export async function illustrer(html, { key, model, unsplashKey, motcle, sujet, registre }) {
  const fichierReg = registre || path.join(process.cwd(), 'scripts/photos.json');
  const utilisees = new Set(fs.existsSync(fichierReg) ? JSON.parse(fs.readFileSync(fichierReg, 'utf8')) : []);
  const aPhoto = html.includes('data-illu="photo"'), aGraph = html.includes('data-illu="graphique"');
  const bilan = { photo: aPhoto ? 'déjà présente' : 'aucune', graphique: aGraph ? 'déjà présent' : 'aucun' };
  if (aPhoto && aGraph) return { html, bilan };

  const texte = texteDe(html);
  const prop = await proposer({ key, model, texte, motcle });

  if (!aPhoto) {
    const p = await photo({ requete: prop.photo, unsplashKey, dejaUtilisees: utilisees });
    if (p) {
      p.alt = await altFrancais({ key, model, alt: p.alt, sujet: sujet || motcle || '' });
      const ancre = html.match(/<p[^>]*>Publié le <time[\s\S]*?<\/p>/);
      if (ancre) {
        html = html.replace(ancre[0], ancre[0] + '\n' + figurePhoto(p));
        utilisees.add(p.id);
        fs.writeFileSync(fichierReg, JSON.stringify([...utilisees], null, 2));
        bilan.photo = `${p.auteur} (Unsplash, requête « ${prop.photo} »)`;
      }
    } else if (!unsplashKey) bilan.photo = 'aucune : secret UNSPLASH_ACCESS_KEY absent';
  }

  if (!aGraph) {
    const g = valider(prop.graphique, texte);
    if (g) {
      const a = html.indexOf('<article');
      let n = 0, i = a;
      while (n < 2 && i >= 0) { i = html.indexOf('<h2', i + 1); n++; }
      if (i > a) {
        const debut = html.lastIndexOf('\n', i) + 1;
        html = html.slice(0, debut) + figureGraphique(g) + '\n' + html.slice(debut);
        bilan.graphique = `« ${g.titre} » — ${g.barres.map((b) => b.valeur).join(', ')}`;
      }
    } else bilan.graphique = 'aucun : pas assez de chiffres comparables cités dans l' + AP + 'article';
  }
  return { html, bilan };
}

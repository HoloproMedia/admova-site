// Admova — rédaction automatique d'un article hebdomadaire.
// Lancé chaque lundi par .github/workflows/seo-hebdo.yml.
// Node 20, aucune dépendance. Nécessite le secret ANTHROPIC_API_KEY.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SITE = 'https://admova.fr';
const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-5';
const KEY = process.env.ANTHROPIC_API_KEY;
if (!KEY) { console.error('ANTHROPIC_API_KEY manquant.'); process.exit(1); }

const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const write = (p, s) => { fs.mkdirSync(path.dirname(path.join(ROOT, p)), { recursive: true }); fs.writeFileSync(path.join(ROOT, p), s); };

const sujets = JSON.parse(read('scripts/sujets.json'));
const articles = JSON.parse(read('scripts/articles.json'));
const faits = new Set(articles.map(a => a.slug));
const sujet = sujets.find(s => !faits.has(s.slug) && !fs.existsSync(path.join(ROOT, s.slug)));
if (!sujet) { console.log('Tous les sujets de scripts/sujets.json sont traités. Ajoutez-en de nouveaux.'); process.exit(0); }

const today = new Date();
const DATE = today.toISOString().slice(0, 10);
const MOIS = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
const DATE_FR = `${today.getUTCDate()} ${MOIS[today.getUTCMonth()]} ${today.getUTCFullYear()}`;

const FAITS_ADMOVA = `
- Admova est une régie publicitaire mobile et TV connectée géolocalisée, marque du groupe HOLOPRO Média (Chambéry), fondée en 2019.
- Publicité plein écran (interstitiel 9:16) dans plus de 1 600 applications mobiles (Leboncoin, Vinted, L'Équipe…).
- TV connectée : replay de TF1, M6, W9 et chaînes gratuites en streaming (Molotov, Samsung TV Plus, Pluto TV, Rakuten TV).
- Ciblage GPS au mètre près autour de chaque point de vente ; aucune impression hors zone.
- 267 campagnes déployées, plus de 120 enseignes clientes (KFC, McDonald's, Burger King, E.Leclerc, BMW, AXA).
- Création du visuel incluse, mise en ligne en 48 h. Couverture : France, Belgique, Suisse, Luxembourg, Canada.
- Rayons indicatifs : restauration et immobilier 500 m à 2 km ; commerce 1 à 3 km ; santé et services 3 à 8 km ; hôtellerie 10 à 20 km ; automobile 15 à 30 km.
- Marché France 2026 (WPP Media, This Year Next Year, juin 2026) : 29,7 Md€ (+4,9 %) ; TV connectée 961 M€ (+24,7 %) ; TV linéaire −7,9 % ; retail media 1,66 Md€ (+9,2 %).`;

const prompt = `Tu rédiges un article pour le site d'Admova, en français.

Sujet : ${sujet.sujet}
Mot-clé principal : ${sujet.motcle}

Faits autorisés (n'utilise AUCUN autre chiffre, AUCUN nom de client non listé) :${FAITS_ADMOVA}

Règles d'écriture :
- Vouvoiement. « Vous » pour le lecteur, « nous » ou « Admova » pour l'entreprise.
- Phrases courtes et factuelles. Interdits : révolutionnaire, leader, innovant, ultra-ciblé, incontournable, point d'exclamation, emoji.
- Titres de section courts, avec point final. Pas de majuscule à chaque mot.
- Si tu cites un chiffre de marché, indique la source dans le champ "note" du bloc.
- 500 à 800 mots au total, 4 ou 5 blocs. Le mot-clé principal apparaît dans le h1, le chapô et au moins un h2.
- Dernier bloc : comment Admova répond au sujet, sans formule commerciale.
- Le h1 fait 70 caractères au maximum : ne recopie jamais le sujet mot pour mot.
- Chaque h2 fait 60 caractères au maximum : un titre court, pas une phrase entière.
- N'attribue jamais à Admova une méthode, un outil ou une mesure absents des faits autorisés (groupe témoin, suivi des visites en magasin, taux de conversion…). Un principe général du marché peut être expliqué, en précisant qu'il ne s'agit pas d'une offre Admova.

Réponds UNIQUEMENT par un objet JSON valide, sans texte autour :
{"kicker":"1 à 2 mots","h1":"titre avec point final","title":"titre SEO de 55 à 65 caractères se terminant par — Admova","desc":"meta description de 140 à 160 caractères","lead":"chapô de 1 ou 2 phrases","blocks":[{"h2":"...","ps":["..."],"ul":["..."],"table":{"head":["..."],"rows":[["..."]]},"note":"..."}]}
Dans chaque bloc, "ul", "table" et "note" sont facultatifs (mets [] ou null).`;

const res = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: { 'content-type': 'application/json', 'x-api-key': KEY, 'anthropic-version': '2023-06-01' },
  body: JSON.stringify({ model: MODEL, max_tokens: 4000, messages: [{ role: 'user', content: prompt }] }),
});
if (!res.ok) { console.error('Erreur API', res.status, await res.text()); process.exit(1); }
const data = await res.json();
const txt = data.content.map(c => c.text || '').join('');
const a = JSON.parse(txt.slice(txt.indexOf('{'), txt.lastIndexOf('}') + 1));

// ---------- typographie française ----------
const NB = '\u00A0', AP = '\u2019';
const fix = (s) => String(s || '')
  .replace(/'/g, AP)
  .replace(/(\d) (\d{3})(?!\d)/g, '$1' + NB + '$2')
  .replace(/(\d) (h|km|m|%|M€|Md€|minutes|secondes|jours|semaines|ans|mois)(?![\wà-ÿ])/g, '$1' + NB + '$2')
  .replace(/ ([?:!;])/g, NB + '$1');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const je = (s) => String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"');

const slug = sujet.slug;
const URL_ = `${SITE}/${slug}`;
const P = 'margin:0;font-size:17px;line-height:1.75;color:#5B6371';
const table = (t) => `<div style="overflow-x:auto;border:1px solid #EFF0F2;border-radius:12px"><table style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.5;min-width:420px"><thead><tr>${t.head.map(c => `<th style="text-align:left;padding:13px 16px;background:#F6F1E7;color:#0A0A0A;font-weight:700;border-bottom:1px solid #EFF0F2">${esc(fix(c))}</th>`).join('')}</tr></thead><tbody>${t.rows.map(r => `<tr>${r.map((c, i) => `<td style="padding:12px 16px;border-bottom:1px solid #F1F2F4;color:${i === 0 ? '#0A0A0A' : '#5B6371'};font-weight:${i === 0 ? 600 : 400}">${esc(fix(c))}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

const corps = [`    <p style="margin:0;font-size:13px;font-weight:600;color:#5B6371">Publié le <time datetime="${DATE}">${DATE_FR}</time> · Admova</p>`]
  .concat(a.blocks.map(b => [
    `      <h2 style="margin:12px 0 0;font-size:26px;font-weight:800;line-height:1.2;letter-spacing:-0.7px;color:#0A0A0A">${esc(fix(b.h2))}</h2>`,
    ...(b.ps || []).map(p => `      <p style="${P}">${esc(fix(p))}</p>`),
    (b.ul && b.ul.length) ? `      <ul style="margin:0;padding-left:22px;display:flex;flex-direction:column;gap:8px">${b.ul.map(u => `<li style="font-size:17px;line-height:1.7;color:#5B6371">${esc(fix(u))}</li>`).join('')}</ul>` : '',
    (b.table && b.table.head && b.table.rows) ? '      ' + table(b.table) : '',
    b.note ? `      <p style="margin:0;font-size:13.5px;line-height:1.6;color:#5B6371">${esc(fix(b.note))}</p>` : '',
  ].filter(Boolean).join('\n'))).join('\n');

const liees = articles.slice(-3).reverse().map(r => `    <a data-flink href="/${r.slug}/" style="font-size:17px;font-weight:700;line-height:1.4;color:#0A0A0A">${esc(r.h1)}</a>`).join('\n');

const h1 = fix(a.h1), lead = fix(a.lead), desc = String(a.desc).replace(/'/g, AP), title = String(a.title).replace(/'/g, AP);
let page = read('scripts/modele-article.html');
const rep = { '%%URL%%': URL_, '%%TITLE%%': esc(title), '%%DESC%%': esc(desc), '%%H1%%': esc(h1), '%%LEAD%%': esc(lead), '%%DATE%%': DATE, '%%KICKER%%': esc(fix(a.kicker)), '%%ARTICLE%%': corps, '%%RELATED%%': liees };
for (const [k, v] of Object.entries(rep)) page = page.split(k).join(v);
// dans le JSON-LD, les valeurs doivent être échappées pour JSON et non pour HTML
page = page.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, (m) => m.split(esc(h1)).join(je(h1)).split(esc(desc)).join(je(desc)).split(esc(title)).join(je(title)));
if (/%%[A-Z0-9]+%%/.test(page)) { console.error('Marqueur non remplacé dans le gabarit.'); process.exit(1); }
write(`${slug}/index.html`, page);

// ---------- sitemap ----------
let sm = read('sitemap.xml');
if (!sm.includes(`<loc>${URL_}</loc>`)) {
  const hl = ['fr-FR', 'fr-BE', 'fr-CH', 'fr-LU', 'fr-CA', 'fr', 'x-default'].map(l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${URL_}"/>`).join('\n');
  sm = sm.replace('</urlset>', `  <url>\n    <loc>${URL_}</loc>\n    <lastmod>${DATE}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n${hl}\n  </url>\n</urlset>`);
  sm = sm.replace(/(<loc>https:\/\/admova\.fr\/ressources<\/loc>\s*<lastmod>)[^<]+/, `$1${DATE}`);
  write('sitemap.xml', sm);
}

// ---------- llms.txt ----------
for (const f of ['llms.txt', 'llms-full.txt']) {
  if (!fs.existsSync(path.join(ROOT, f))) continue;
  let l = read(f);
  const ligne = `- [${h1.replace(/\.$/, '')}](${URL_}) : ${desc}`;
  if (!l.includes(URL_)) {
    l = l.includes('## Ressources') ? l.replace(/(## Ressources\n\n[^\n]*\n)/, `$1${ligne}\n`) : l + `\n## Ressources\n\n${ligne}\n`;
    write(f, l);
  }
}

// ---------- page Ressources ----------
let idx = read('ressources/index.html');
const carte = `    <a data-card="" href="/${slug}/" style="background:#ffffff;border:1px solid #EFF0F2;border-radius:12px;padding:28px;display:flex;flex-direction:column;gap:12px">
      <span style="font-size:12px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#B8480F">${esc(fix(a.kicker))}</span>
      <h2 style="margin:0;font-size:21px;font-weight:800;line-height:1.3;letter-spacing:-0.4px;color:#0A0A0A">${esc(h1)}</h2>
      <p style="margin:0;font-size:15px;line-height:1.65;color:#5B6371">${esc(lead)}</p>
      <span style="margin-top:auto;font-size:14px;font-weight:600;color:#B8480F">Lire l${AP}article</span>
    </a>`;
if (!idx.includes(`href="/${slug}/"`)) {
  idx = idx.replace('<!-- cartes -->', `<!-- cartes -->\n${carte}`);
  idx = idx.replace('"blogPost":[', `"blogPost":[{"@id":"${URL_}#article"},`);
  write('ressources/index.html', idx);
}

// ---------- registre + résumé pour la pull request ----------
articles.push({ slug, h1 });
write('scripts/articles.json', JSON.stringify(articles, null, 2));

const mots = corps.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
const resume = `## Nouvel article : ${h1}

**Adresse** : ${URL_}
**Mot-clé principal** : ${sujet.motcle}
**Longueur** : environ ${mots} mots

**Titre (onglet Google)** : ${title}
**Description (résultat Google)** : ${desc}

### Chapô
${lead}

### Sections
${a.blocks.map(b => '- ' + fix(b.h2)).join('\n')}

### Mis à jour automatiquement
- \`${slug}/index.html\` créé
- \`sitemap.xml\`, \`llms.txt\` et la page Ressources mis à jour

### Avant de cliquer « Merge »
Ouvrez l'aperçu Netlify ci-dessous, relisez l'article, et vérifiez qu'aucun chiffre ni nom de client n'a été inventé.
`;
write('.seo-resume.md', resume);
console.log(resume);
if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `titre=${h1.replace(/\n/g, ' ')}\nslug=${slug}\n`);

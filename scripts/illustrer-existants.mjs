// Admova — illustre en une fois tous les articles déjà publiés.
// Lancé à la main par .github/workflows/illustrer-articles.yml.
// Un article déjà illustré est laissé tel quel : relancer ne crée pas de doublon.

import fs from 'node:fs';
import path from 'node:path';
import { illustrer } from './illustrer.mjs';

const ROOT = process.cwd();
const KEY = process.env.ANTHROPIC_API_KEY;
const UNSPLASH = process.env.UNSPLASH_ACCESS_KEY;
const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-5';
if (!KEY) { console.error('ANTHROPIC_API_KEY manquant.'); process.exit(1); }
if (!UNSPLASH) console.warn('UNSPLASH_ACCESS_KEY absent : seuls les graphiques seront ajoutés.');

const BASE = ['marche-tv-connectee-2026', 'geofencing-geociblage-geolocalisation', 'rayon-de-diffusion-par-secteur', 'tv-connectee-ou-tv-lineaire', 'campagne-reseau-franchises', 'publicite-interstitielle-mobile'];
const reg = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts/articles.json'), 'utf8'));
const slugs = [...new Set([...BASE, ...reg.map((a) => a.slug)])].filter((s) => fs.existsSync(path.join(ROOT, s, 'index.html')));

const lignes = [];
const modifies = [];
for (const slug of slugs) {
  const f = path.join(ROOT, slug, 'index.html');
  const avant = fs.readFileSync(f, 'utf8');
  try {
    const h1 = (avant.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, slug])[1].replace(/<[^>]+>/g, '').trim();
    const { html, bilan } = await illustrer(avant, { key: KEY, model: MODEL, unsplashKey: UNSPLASH, sujet: h1 });
    if (html !== avant) { fs.writeFileSync(f, html); modifies.push(`${slug}/index.html`); }
    lignes.push(`| ${h1} | ${bilan.photo} | ${bilan.graphique} |`);
    console.log(slug, '→', bilan);
  } catch (e) {
    lignes.push(`| ${slug} | erreur | ${String(e.message).slice(0, 80)} |`);
    console.error(slug, e);
  }
}

const resume = `## Articles illustrés

${modifies.length} article(s) modifié(s) sur ${slugs.length}.

| Article | Photo | Graphique |
|---|---|---|
${lignes.join('\n')}

### Avant de cliquer « Merge »
Ouvrez l'aperçu Netlify. Pour chaque article, vérifiez que la photo correspond au sujet, et que chaque chiffre du graphique figure bien dans le texte (le robot le contrôle, mais une relecture reste la règle).
`;
fs.writeFileSync(path.join(ROOT, '.seo-resume.md'), resume);
console.log(resume);
if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `nb=${modifies.length}\n`);

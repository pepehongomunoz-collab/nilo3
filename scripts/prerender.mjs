/**
 * Post-build prerender: renders the app for each language into static HTML so
 * search engines and AI crawlers (which often don't run JS) get full content.
 *
 * Pipeline (see package.json "build"):
 *   1. vite build                → dist/ (client bundle + index.html template)
 *   2. vite build --ssr ...      → dist-ssr/entry-server.js
 *   3. node scripts/prerender.mjs → dist/index.html, dist/en/index.html, dist/pt/index.html
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render, seoMeta, buildJsonLd, languagePath, LANGUAGES, SITE_URL } = await import(
  pathToFileURL(ssrEntry).href
);

const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const escapeText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const setMetaContent = (html, attr, key, value) =>
  html.replace(
    new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`),
    `$1${escapeAttr(value)}$2`
  );

const hreflangLinks = [
  ...LANGUAGES.map(
    (l) => `<link rel="alternate" hreflang="${seoMeta[l].hreflang}" href="${SITE_URL}${languagePath(l)}" />`
  ),
  `<link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />`,
].join('\n  ');

for (const lang of LANGUAGES) {
  const m = seoMeta[lang];
  const url = SITE_URL + languagePath(lang);
  const appHtml = await render(lang);

  let html = template;
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${m.htmlLang}">`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeText(m.title)}</title>`);
  html = setMetaContent(html, 'name', 'description', m.description);
  html = setMetaContent(html, 'property', 'og:url', url);
  html = setMetaContent(html, 'property', 'og:locale', m.ogLocale);
  html = setMetaContent(html, 'property', 'og:title', m.ogTitle);
  html = setMetaContent(html, 'property', 'og:description', m.ogDescription);
  html = setMetaContent(html, 'name', 'twitter:url', url);
  html = setMetaContent(html, 'name', 'twitter:title', m.ogTitle);
  html = setMetaContent(html, 'name', 'twitter:description', m.ogDescription);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);

  const jsonLd = JSON.stringify(buildJsonLd(lang)).replace(/</g, '\\u003c');
  html = html.replace(
    '<!--app-head-->',
    `${hreflangLinks}\n  <script type="application/ld+json">${jsonLd}</script>`
  );
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const outDir = lang === 'es' ? distDir : path.join(distDir, lang);
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(path.join(outDir, 'index.html'), html);
  console.log(`✓ prerendered ${languagePath(lang)} (${(html.length / 1024).toFixed(1)} KB)`);
}

await fs.rm(path.join(root, 'dist-ssr'), { recursive: true, force: true });

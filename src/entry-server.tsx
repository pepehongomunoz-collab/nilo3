import { prerender } from 'react-dom/static';
import { StrictMode } from 'react';
import App from './App';
import { WebPromo } from './pages/WebPromo';
import { LanguageProvider } from './context/LanguageContext';
import type { Language } from './context/LanguageContext';

export { WEB_PROMO_PATH } from './lib/routes';
export { seoMeta, buildJsonLd, languagePath, LANGUAGES, SITE_URL } from './i18n/seo';

/**
 * Server entry used only at build time (scripts/prerender.mjs) to generate
 * static HTML per language so crawlers (Google, GPTBot, ClaudeBot, PerplexityBot)
 * receive real content instead of an empty <div id="root">.
 */
export async function render(language: Language): Promise<string> {
  const { prelude } = await prerender(
    <StrictMode>
      <LanguageProvider initialLanguage={language}>
        <App />
      </LanguageProvider>
    </StrictMode>
  );

  return new Response(prelude).text();
}

export async function renderWebPromo(): Promise<string> {
  const { prelude } = await prerender(
    <StrictMode>
      <WebPromo />
    </StrictMode>
  );

  return new Response(prelude).text();
}

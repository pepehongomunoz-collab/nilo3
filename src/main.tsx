import { StrictMode, type ReactNode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import { WEB_PROMO_PATH } from './lib/routes';

// La landing de anuncios no necesita Three.js ni GSAP: cada página carga solo su bundle.
async function loadPage(): Promise<ReactNode> {
  if (window.location.pathname.startsWith(WEB_PROMO_PATH.slice(0, -1))) {
    const { WebPromo } = await import('./pages/WebPromo');
    return <WebPromo />;
  }

  const [{ default: App }, { LanguageProvider }] = await Promise.all([
    import('./App'),
    import('./context/LanguageContext'),
  ]);
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
}

const container = document.getElementById('root')!;
const app = <StrictMode>{await loadPage()}</StrictMode>;

// Production HTML is prerendered (scripts/prerender.mjs) → hydrate it.
// In dev the root is empty → regular client render.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}

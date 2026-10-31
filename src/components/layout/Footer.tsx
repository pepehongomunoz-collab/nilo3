import { useState } from 'react';
import { Logo } from '../ui/Logo';
import { company } from '../../data/company';
import { footerLinks } from '../../data/navigation';
import { LegalModal } from '../ui/LegalModal';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../i18n/translations';
import { trackPixelEvent } from '../../lib/pixel';
import { seoMeta, languagePath, LANGUAGES } from '../../i18n/seo';

const languageNames = { es: 'Español', en: 'English', pt: 'Português' } as const;

/**
 * standalone: fuera de la home (p. ej. la landing de anuncios). Los anchors apuntan
 * a la home y el selector de idioma navega en vez de cambiar el estado en el lugar.
 */
export function Footer({ standalone = false }: { standalone?: boolean }) {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const { language, setLanguage } = useLanguage();
  const t = getTranslation(language).footer;
  const navT = getTranslation(language).nav;
  const anchor = (href: string) => (standalone && href.startsWith('#') ? `${languagePath(language)}${href}` : href);

  const dynamicCompanyLinks = [
    { name: navT.about, href: '#manifesto', external: false },
    { name: navT.projects, href: '#cases', external: false },
    { name: navT.process, href: '#process', external: false },
    { name: navT.contact, href: '#contact', external: false },
    { name: navT.support, href: 'https://support.nilotech.com.ar', external: true },
  ];

  return (
    <>
      <footer className="border-t border-white/[0.04] bg-void">
        {/* Big statement */}
        <div className="site-container py-24 md:py-32">
          <p className="font-display text-section text-zinc-500 leading-[1.1] max-w-4xl">
            {t.statementLine1}
            <br />
            <span className="text-zinc-300">{t.statementLine2}</span>
          </p>
        </div>

        {/* Links grid */}
        <div className="site-container pb-12">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-8 pb-12 border-b border-white/[0.04]">
            <div className="col-span-2 md:col-span-4">
              <Logo size="md" className="mb-4" />
              <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
                {seoMeta[language].entity}
              </p>
            </div>

            <div className="md:col-span-3">
              <h2 className="section-label mb-4">{t.servicesHeader}</h2>
              <ul className="space-y-2.5">
                {t.servicesLinks.map((serviceName, idx) => {
                  const href = footerLinks.services[idx]?.href || '#services';
                  return (
                    <li key={serviceName}>
                      <a href={anchor(href)} className="text-sm text-zinc-500 hover:text-white transition-colors link-underline">
                        {serviceName}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h2 className="section-label mb-4">{t.companyHeader}</h2>
              <ul className="space-y-2.5">
                {dynamicCompanyLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={anchor(link.href)}
                      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-sm text-zinc-500 hover:text-white transition-colors link-underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <h2 className="section-label mb-4">{t.contactHeader}</h2>
              <ul className="space-y-2.5 text-sm text-zinc-500">
                <li>
                  <a
                    href={`mailto:${company.email}`}
                    onClick={() => trackPixelEvent('Contact', { method: 'email', location: 'footer' })}
                    className="hover:text-white transition-colors link-underline"
                  >
                    {company.email}
                  </a>
                </li>
                <li>
                  <a
                    href={company.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackPixelEvent('Contact', { method: 'whatsapp', location: 'footer' })}
                    className="hover:text-white transition-colors link-underline"
                  >
                    {company.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={company.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors link-underline"
                  >
                    LinkedIn
                  </a>
                  <span className="text-zinc-700 mx-2">·</span>
                  <a
                    href={company.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors link-underline"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={company.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors link-underline"
                  >
                    {company.address.street}, {company.location}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
            <p className="text-zinc-500 text-xs">
              &copy; {new Date().getFullYear()} {company.name}. {t.rights}
            </p>
            <nav aria-label="Idioma / Language" className="flex gap-4 text-xs text-zinc-500">
              {LANGUAGES.map((lang) => (
                <a
                  key={lang}
                  href={languagePath(lang)}
                  hrefLang={seoMeta[lang].hreflang}
                  lang={seoMeta[lang].htmlLang}
                  aria-current={lang === language ? 'page' : undefined}
                  onClick={(e) => {
                    if (standalone) return;
                    e.preventDefault();
                    setLanguage(lang);
                  }}
                  className={lang === language ? 'text-zinc-200' : 'hover:text-zinc-200 transition-colors'}
                >
                  {languageNames[lang]}
                </a>
              ))}
            </nav>
            <div className="flex gap-6 text-xs text-zinc-500">
              <button
                onClick={() => setLegalModalType('privacy')}
                className="hover:text-zinc-200 transition-colors focus:outline-none"
              >
                {t.privacy}
              </button>
              <button
                onClick={() => setLegalModalType('terms')}
                className="hover:text-zinc-200 transition-colors focus:outline-none"
              >
                {t.terms}
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </>
  );
}


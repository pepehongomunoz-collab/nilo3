import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { SITE_URL, seoMeta, languagePath, languageFromPath } from '../i18n/seo';


export type Language = 'es' | 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'nilotech_lang';

/**
 * The URL is the source of truth for the language (/, /en/, /pt/) so each
 * version is indexable and matches the prerendered HTML (no hydration mismatch).
 */
export const LanguageProvider: React.FC<{ children: ReactNode; initialLanguage?: Language }> = ({
  children,
  initialLanguage,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (initialLanguage) return initialLanguage;
    if (typeof window !== 'undefined') return languageFromPath(window.location.pathname);
    return 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
      const path = languagePath(lang);
      if (window.location.pathname !== path) {
        window.history.pushState({ lang }, '', path + window.location.hash);
      }
    }
  };

  // Keep state in sync with browser back/forward navigation
  useEffect(() => {
    const onPop = () => setLanguageState(languageFromPath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    const m = seoMeta[language];
    document.documentElement.lang = m.htmlLang;
    document.title = m.title;

    const setAttr = (selector: string, attr: string, value: string) => {
      const el = document.head.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };
    const url = SITE_URL + languagePath(language);
    setAttr('meta[name="description"]', 'content', m.description);
    setAttr('link[rel="canonical"]', 'href', url);
    // Open Graph
    setAttr('meta[property="og:title"]', 'content', m.ogTitle);
    setAttr('meta[property="og:description"]', 'content', m.ogDescription);
    setAttr('meta[property="og:url"]', 'content', url);
    setAttr('meta[property="og:locale"]', 'content', m.ogLocale);
    // Twitter
    setAttr('meta[name="twitter:title"]', 'content', m.ogTitle);
    setAttr('meta[name="twitter:description"]', 'content', m.ogDescription);
    setAttr('meta[name="twitter:url"]', 'content', url);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

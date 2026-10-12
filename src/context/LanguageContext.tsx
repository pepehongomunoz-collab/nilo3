import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';


export type Language = 'es' | 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'nilotech_lang';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY) as Language;
      if (saved && ['es', 'en', 'pt'].includes(saved)) {
        return saved;
      }
    }
    return 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
    // Sync social preview meta tags with the active language
    const meta: Record<Language, { title: string; description: string }> = {
      es: {
        title: 'Nilotech — Partner Tecnológico · Productos Digitales',
        description: 'Diseñamos el software que mueve empresas. Productos digitales, automatización e IA aplicada.',
      },
      en: {
        title: 'Nilotech — Technology Partner · Digital Products',
        description: 'We build the software that drives businesses. Digital products, automation and applied AI.',
      },
      pt: {
        title: 'Nilotech — Parceiro Tecnológico · Produtos Digitais',
        description: 'Projetamos o software que move empresas. Produtos digitais, automação e IA aplicada.',
      },
    };
    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.head.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };
    const metaAttr = (sel: string, attr: string) =>
      meta[language].title && setMeta(sel, attr, meta[language].title);
    // Open Graph
    setMeta('meta[property="og:title"]', 'content', meta[language].title);
    setMeta('meta[property="og:description"]', 'content', meta[language].description);
    // Twitter
    setMeta('meta[name="twitter:title"]', 'content', meta[language].title);
    setMeta('meta[name="twitter:description"]', 'content', meta[language].description);
    // Document title
    document.title = meta[language].title + ' · Software a Medida';
    void metaAttr;
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

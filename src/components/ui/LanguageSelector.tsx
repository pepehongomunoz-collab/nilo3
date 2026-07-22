import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import type { Language } from '../../context/LanguageContext';


const languages: { code: Language; label: string; flag: string; short: string }[] = [
  { code: 'es', label: 'Español', flag: '🇪🇸', short: 'ES' },
  { code: 'en', label: 'English', flag: '🇺🇸', short: 'EN' },
  { code: 'pt', label: 'Português', flag: '🇧🇷', short: 'PT' },
];

export function LanguageSelector({ className = '' }: { className?: string }) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative inline-block ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Cambiar idioma / Switch language"
        aria-expanded={isOpen}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-signal/40 transition-all duration-300 focus-ring"
      >
        <Globe className="w-3.5 h-3.5 text-signal" />
        <span className="text-sm">{currentLang.flag}</span>
        <span className="font-display uppercase tracking-widest">{currentLang.short}</span>
        <ChevronDown
          className={`w-3 h-3 text-zinc-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-signal' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 mt-2 w-44 py-1.5 rounded-xl bg-void-900/95 backdrop-blur-2xl border border-white/10 shadow-2xl z-50 overflow-hidden"
          >
            <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest text-zinc-500 border-b border-white/[0.05] mb-1">
              Idioma / Language
            </div>
            {languages.map((lang) => {
              const isSelected = lang.code === language;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium transition-colors ${
                    isSelected
                      ? 'bg-signal/10 text-signal font-semibold'
                      : 'text-zinc-300 hover:bg-white/[0.05] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-signal" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

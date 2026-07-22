import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { LanguageSelector } from '../ui/LanguageSelector';
import { useLenis } from '../../hooks/useLenis';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../i18n/translations';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();
  const { language } = useLanguage();
  const t = getTranslation(language).nav;

  const dynamicNavLinks = [
    { name: t.about, href: '#manifesto' },
    { name: t.projects, href: '#cases' },
    { name: t.services, href: '#services' },
    { name: t.process, href: '#process' },
    { name: t.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false);
    const target = document.getElementById(href.replace('#', ''));
    if (target) {
      if (lenis) {
        lenis.scrollTo(target, { offset: -80 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only-focusable fixed top-4 left-4 z-[100] px-4 py-2 bg-signal text-void-950 rounded-full font-semibold text-sm focus-ring"
      >
        {t.skip}
      </a>

      <nav
        aria-label={t.aria}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-void/70 backdrop-blur-2xl border-b border-white/[0.04]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="site-container">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a
              href="#"
              aria-label="Nilotech — Inicio"
              onClick={(e) => {
                e.preventDefault();
                if (lenis) lenis.scrollTo(0);
                else window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Logo size="md" />
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {dynamicNavLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="link-underline px-4 py-2 text-sm font-medium text-zinc-500 hover:text-white transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Desktop Actions (Language Selector + CTA) */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSelector />
              <Button size="sm" onClick={() => scrollTo('#contact')}>
                {t.startProject}
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-3">
              <LanguageSelector />
              <button
                className="text-zinc-400 hover:text-white p-2 focus-ring rounded-lg"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? t.closeMenu : t.openMenu}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden fixed inset-0 top-[60px] bg-void/95 backdrop-blur-2xl z-40"
            >
              <div className="site-container py-12 flex flex-col gap-2">
                {dynamicNavLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => scrollTo(link.href)}
                    className="text-left py-4 text-2xl font-display font-bold text-zinc-300 hover:text-white border-b border-white/[0.04] transition-colors"
                  >
                    {link.name}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="pt-8 flex flex-col gap-4"
                >
                  <Button size="lg" className="w-full" onClick={() => scrollTo('#contact')}>
                    {t.startProject}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}


import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../i18n/translations';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const { language } = useLanguage();
  const t = getTranslation(language).faq;

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-section relative">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          <div className="lg:col-span-5">
            <SectionLabel>{t.label}</SectionLabel>
            <h2 className="font-display text-section text-white mt-4">
              {t.title}
            </h2>
          </div>
        </div>

        {/* Accordion */}
        <div className="border-t border-white/[0.04]">
          {t.items.map((item) => (
            <div
              key={item.id}
              className="border-b border-white/[0.04]"
            >
              <button
                onClick={() => toggle(item.id)}
                className="w-full py-8 flex items-center justify-between gap-8 group text-left focus-ring"
                aria-expanded={openId === item.id}
              >
                <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-signal transition-colors">
                  {item.question}
                </h3>
                <div className="shrink-0 w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center group-hover:border-signal/30 transition-colors">
                  {openId === item.id ? (
                    <Minus className="w-4 h-4 text-signal" />
                  ) : (
                    <Plus className="w-4 h-4 text-zinc-500 group-hover:text-signal transition-colors" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 max-w-3xl">
                      <p className="text-zinc-400 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

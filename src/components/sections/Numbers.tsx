import { useRef, useEffect } from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { gsap, ScrollTrigger } from '../../lib/gsap';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../i18n/translations';

const baseNumbers = [
  { value: 15, suffix: '+' },
  { value: 100, suffix: '%' },
  { value: 95, suffix: '+' },
  { value: 24, suffix: 'h' },
];

export function Numbers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const t = getTranslation(language).numbers;

  const numbersData = baseNumbers.map((num, i) => ({
    ...num,
    label: t.items[i]?.label || '',
  }));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const counters = container.querySelectorAll('.counter-value');

    counters.forEach((counter, i) => {
      const target = numbersData[i].value;

      gsap.fromTo(
        counter,
        { innerText: '0' },
        {
          innerText: target,
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter,
            start: 'top 85%',
            once: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (container.contains(st.trigger as Element)) {
          st.kill();
        }
      });
    };
  }, [language]);

  return (
    <section ref={containerRef} className="py-section relative">
      {/* Full-width bar with different bg */}
      <div className="bg-surface/50 border-y border-white/[0.03] py-20 md:py-28">
        <div className="site-container">
          <SectionLabel className="mb-8 block text-center">{t.label}</SectionLabel>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {numbersData.map((num) => (
              <div key={num.label} className="text-center">
                <div className="font-display text-5xl md:text-6xl font-bold text-white mb-2">
                  <span className="counter-value">0</span>
                  <span className="text-signal">{num.suffix}</span>
                </div>
                <div className="text-sm text-zinc-600">{num.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


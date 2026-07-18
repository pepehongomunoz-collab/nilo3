import { useRef, useEffect } from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { gsap, ScrollTrigger } from '../../lib/gsap';

const numbers = [
  { value: 15, suffix: '+', label: 'Proyectos entregados' },
  { value: 100, suffix: '%', label: 'Desarrollo a medida' },
  { value: 95, suffix: '+', label: 'Lighthouse Score' },
  { value: 24, suffix: 'h', label: 'Tiempo de respuesta' },
];

export function Numbers() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const counters = container.querySelectorAll('.counter-value');

    counters.forEach((counter, i) => {
      const target = numbers[i].value;

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
  }, []);

  return (
    <section ref={containerRef} className="py-section relative">
      {/* Full-width bar with different bg */}
      <div className="bg-surface/50 border-y border-white/[0.03] py-20 md:py-28">
        <div className="site-container">
          <SectionLabel className="mb-8 block text-center">Resultados</SectionLabel>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {numbers.map((num) => (
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

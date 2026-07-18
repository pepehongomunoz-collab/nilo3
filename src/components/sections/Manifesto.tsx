import { useGSAP } from '../../hooks/useGSAP';
import { gsap } from '../../lib/gsap';

const phrases = [
  'No somos una agencia de diseño.',
  'No somos una software factory.',
  'Somos ingenieros de producto.',
  'Resolvemos problemas de negocio complejos mediante código limpio y arquitecturas escalables.',
];

export function Manifesto() {
  const containerRef = useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll('.manifesto-phrase');

    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          filter: 'blur(10px)',
          y: 30,
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: `${(i / phrases.length) * 80}% center`,
            end: `${((i + 0.8) / phrases.length) * 80 + 10}% center`,
            scrub: 1,
          },
        }
      );

      // Fade out previous phrases
      if (i > 0) {
        gsap.to(items[i - 1], {
          opacity: 0.15,
          filter: 'blur(3px)',
          scrollTrigger: {
            trigger: container,
            start: `${((i) / phrases.length) * 80}% center`,
            end: `${((i + 0.5) / phrases.length) * 80}% center`,
            scrub: 1,
          },
        });
      }
    });
  });

  return (
    <section
      id="manifesto"
      ref={containerRef}
      className="relative"
      style={{ minHeight: `${phrases.length * 80}vh` }}
    >
      <div className="sticky top-0 min-h-screen flex items-center">
        <div className="site-container w-full py-20">
          <div className="max-w-4xl mx-auto space-y-16 md:space-y-20">
            {phrases.map((phrase, i) => (
              <p
                key={i}
                className="manifesto-phrase font-display text-section text-white opacity-0"
                style={{ willChange: 'opacity, filter, transform' }}
              >
                {i === phrases.length - 1 ? (
                  <>
                    Resolvemos problemas de negocio complejos mediante{' '}
                    <span className="text-signal">código limpio y arquitecturas escalables.</span>
                  </>
                ) : (
                  phrase
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

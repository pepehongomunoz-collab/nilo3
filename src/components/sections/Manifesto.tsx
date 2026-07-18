import { useGSAP } from '../../hooks/useGSAP';
import { gsap } from '../../lib/gsap';

const phrases = [
  'No somos una agencia de diseño.',
  'No somos una software factory.',
  'Somos ingenieros de producto.',
  'Transformamos desafíos en software escalable.',
];

export function Manifesto() {
  const containerRef = useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll('.manifesto-phrase');

    // Set initial state
    gsap.set(items, { opacity: 0.1, filter: 'blur(10px)', y: 40 });

    items.forEach((item) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          end: 'bottom 15%',
          scrub: 1,
        },
      });

      tl.to(item, { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.4, ease: 'none' })
        .to(item, { opacity: 1, duration: 0.2 }) // hold
        .to(item, { opacity: 0.1, filter: 'blur(10px)', y: -20, duration: 0.4, ease: 'none' });
    });
  });

  return (
    <section
      id="manifesto"
      ref={containerRef}
      className="py-section relative"
    >
      <div className="site-container w-full">
        <div className="max-w-4xl mx-auto space-y-24 md:space-y-32 py-20">
          {phrases.map((phrase, i) => (
            <p
              key={i}
              className="manifesto-phrase font-display text-section text-white text-center md:text-left"
              style={{ willChange: 'opacity, filter, transform' }}
            >
              {i === phrases.length - 1 ? (
                <>
                  Transformamos ideas en{' '}
                  <span className="text-signal">soluciones digitales.</span>
                </>
              ) : (
                phrase
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { gsap } from '../../lib/gsap';
import { useLenis } from '../../hooks/useLenis';
import { SplitText } from '../ui/SplitText';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../i18n/translations';

export function CallToAction() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const lenis = useLenis();
  const { language } = useLanguage();
  const t = getTranslation(language).cta;

  useEffect(() => {
    const headline = headlineRef.current;
    if (!headline) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const chars = headline.querySelectorAll('.cta-char');

    gsap.fromTo(
      chars,
      { y: '100%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 0.8,
        stagger: 0.02,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: headline,
          start: 'top 80%',
        },
      }
    );
  }, [language]);

  const scrollToContact = () => {
    const target = document.getElementById('contact');
    if (target) {
      if (lenis) {
        lenis.scrollTo(target, { offset: -80 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-section relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255, 210, 0, 0.03) 0%, transparent 70%)',
        }}
      />

      <div className="site-container relative z-10 text-center">

        <h2
          ref={headlineRef}
          className="font-display text-4xl md:text-6xl lg:text-hero font-bold text-white mb-12 max-w-5xl mx-auto leading-tight"
        >
          <SplitText key={language} type="chars" charClassName="cta-char">
            {t.headline}
          </SplitText>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button size="lg" onClick={scrollToContact}>
            {t.button}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}


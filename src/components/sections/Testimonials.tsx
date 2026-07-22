import { motion } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../i18n/translations';

export function Testimonials() {
  const { language } = useLanguage();
  const t = getTranslation(language).testimonials;

  return (
    <section id="testimonials" className="py-section relative">
      <div className="site-container">
        <div className="mb-20 md:mb-28">
          <SectionLabel>{t.label}</SectionLabel>
          <h2 className="font-display text-section text-white mt-4 max-w-2xl">
            {t.title}
          </h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {t.items.map((testimonial, i) => (
            <motion.blockquote
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
              style={{ marginLeft: i % 2 === 1 ? 'auto' : '0' }}
            >
              {/* Quote mark */}
              <span className="text-signal/20 font-display text-8xl leading-none select-none block mb-4">
                "
              </span>

              <p className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-white leading-snug mb-8 -mt-12">
                {testimonial.quote}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface border border-white/[0.04] flex items-center justify-center">
                  <span className="text-sm font-bold text-signal">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{testimonial.author}</div>
                  <div className="text-xs font-mono text-zinc-600">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}


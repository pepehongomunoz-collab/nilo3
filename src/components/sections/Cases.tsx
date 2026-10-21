import { motion } from 'framer-motion';
import { cases } from '../../data/cases';
import { SectionLabel } from '../ui/SectionLabel';
import { ExternalLink } from 'lucide-react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap } from '../../lib/gsap';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../i18n/translations';

export function Cases() {
  const { language } = useLanguage();
  const t = getTranslation(language).cases;

  const containerRef = useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    // Image clip-path reveals
    const images = container.querySelectorAll('.case-image');
    images.forEach((img) => {
      gsap.fromTo(
        img,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 80%',
            end: 'top 40%',
            scrub: 1,
          },
        }
      );
    });

    // Text reveals
    const texts = container.querySelectorAll('.case-text');
    texts.forEach((text) => {
      gsap.fromTo(
        text,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: text,
            start: 'top 85%',
          },
        }
      );
    });
  }, [language]);

  return (
    <section id="cases" ref={containerRef} className="py-section relative">
      <div className="site-container">
        <div className="mb-20 md:mb-28">
          <SectionLabel>{t.label}</SectionLabel>
          <h2 className="font-display text-section text-white mt-4 max-w-3xl">
            {t.title}
            <br />
            <span className="text-zinc-600">{t.subtitle}</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 md:mb-32">
          {t.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border-l border-white/[0.06] pl-6"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-zinc-600 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Case studies */}
        <div className="space-y-32 md:space-y-44">
          {t.items.map((translatedProject, index) => {
            const originalProject = cases.find((c) => c.id === translatedProject.id) || cases[index];
            return (
              <article key={translatedProject.id} className="group">
                {/* Asymmetric layout — alternating */}
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}>
                  {/* Image */}
                  <div className={`${index % 2 === 0 ? 'lg:col-span-7' : 'lg:col-span-7 lg:col-start-6'}`}>
                    {(() => {
                      const ImageWrapper = originalProject.url ? 'a' : 'div';
                      const linkProps = originalProject.url
                        ? { href: originalProject.url, target: '_blank', rel: 'noopener noreferrer' }
                        : {};
                      return (
                        <ImageWrapper
                          {...linkProps}
                          className="case-image block relative aspect-[16/10] rounded-xl overflow-hidden bg-surface group/img"
                        >
                          {originalProject.image ? (
                            <img
                              src={originalProject.image}
                              alt={`${translatedProject.title} — ${translatedProject.category} | Nilotech`}
                              width="1280"
                              height="800"
                              loading="lazy"
                              decoding="async"
                              className={`absolute inset-0 w-full h-full opacity-90 transition-transform duration-1000 group-hover:scale-105 ${
                                translatedProject.category.includes('Android') || translatedProject.category.includes('Aplicación') || translatedProject.category.includes('App')
                                  ? 'object-contain p-6 md:p-12 drop-shadow-2xl scale-110'
                                  : 'object-cover object-top'
                              }`}
                            />
                          ) : (
                            <div
                              className="absolute inset-0 flex items-center justify-center transition-transform duration-1000 group-hover:scale-105"
                              style={{
                                background:
                                  'radial-gradient(ellipse at 30% 20%, rgba(255,210,0,0.06) 0%, transparent 60%),' +
                                  'radial-gradient(ellipse at 70% 80%, rgba(255,107,53,0.05) 0%, transparent 60%),' +
                                  'linear-gradient(135deg, #141419 0%, #0C0C10 100%)',
                              }}
                            >
                              <div className="flex flex-col items-center gap-4">
                                <div className="w-20 h-20 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md flex items-center justify-center">
                                  <span className="font-display text-3xl font-bold text-signal/80">
                                    {translatedProject.title
                                      .split(' ')
                                      .slice(0, 2)
                                      .map((w) => w.charAt(0))
                                      .join('')
                                      .toUpperCase()}
                                  </span>
                                </div>
                                <span className="text-xs font-mono tracking-wider text-zinc-600 uppercase">
                                  {originalProject.image ? '' : 'Case study'}
                                </span>
                              </div>
                            </div>
                          )}
                          {/* Subtle overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-void-950/80 via-void-950/20 to-transparent pointer-events-none" />

                          {/* Category badge */}
                          <div className="absolute top-5 left-5 z-10">
                            <span className="text-xs font-mono tracking-wider uppercase text-signal/90 bg-void/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-signal/20">
                              {translatedProject.category}
                            </span>
                          </div>

                          {/* Hover chip for live project */}
                          {originalProject.url && (
                            <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-void/90 backdrop-blur-md text-signal text-xs font-mono border border-signal/30 shadow-lg">
                                <span>{language === 'pt' ? 'Abrir site' : language === 'en' ? 'Open site' : 'Abrir sitio'}</span>
                                <ExternalLink className="w-3 h-3" />
                              </span>
                            </div>
                          )}
                        </ImageWrapper>
                      );
                    })()}
                  </div>

                  {/* Content */}
                  <div className={`case-text ${index % 2 === 0 ? 'lg:col-span-5' : 'lg:col-span-5 lg:col-start-1 lg:row-start-1'}`}>
                    <span className="font-mono text-sm text-zinc-700 mb-3 block">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                      {translatedProject.title}
                    </h3>
                    <p className="text-zinc-500 leading-relaxed mb-6">
                      {translatedProject.description}
                    </p>

                    {/* KPI highlight */}
                    <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-white/[0.04]">
                      <span className="font-display text-4xl font-bold text-signal">{originalProject.kpi.value}</span>
                      <span className="text-sm text-zinc-500">{translatedProject.kpiLabel}</span>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {originalProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono text-zinc-600 bg-white/[0.02] border border-white/[0.04] px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Live link button */}
                    {originalProject.url && (
                      <a
                        href={originalProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-signal/30 bg-signal/5 hover:bg-signal/15 hover:border-signal text-signal text-xs font-mono tracking-wider uppercase transition-all duration-300 group/btn"
                      >
                        <span>
                          {language === 'pt'
                            ? 'Ver projeto online'
                            : language === 'en'
                            ? 'Visit live project'
                            : 'Ver proyecto online'}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


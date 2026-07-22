import { motion } from 'framer-motion';
import { cases, portfolioStats } from '../../data/cases';
import { SectionLabel } from '../ui/SectionLabel';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap } from '../../lib/gsap';

export function Cases() {
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
  });

  return (
    <section id="cases" ref={containerRef} className="py-section relative">
      <div className="site-container">
        <div className="mb-20 md:mb-28">
          <SectionLabel>Proyectos</SectionLabel>
          <h2 className="font-display text-section text-white mt-4 max-w-3xl">
            Productos que hablan
            <br />
            <span className="text-zinc-600">por sí solos.</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 md:mb-32">
          {portfolioStats.map((stat, i) => (
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
          {cases.map((project, index) => (
            <article key={project.id} className="group">
              {/* Asymmetric layout — alternating */}
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}>
                {/* Image */}
                <div className={`${index % 2 === 0 ? 'lg:col-span-7' : 'lg:col-span-7 lg:col-start-6'}`}>
                  <div
                    className="case-image relative aspect-[16/10] rounded-xl overflow-hidden bg-surface"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className={`absolute inset-0 w-full h-full opacity-90 transition-transform duration-1000 group-hover:scale-105 ${
                        project.category === 'Aplicación Android'
                          ? 'object-contain p-6 md:p-12 drop-shadow-2xl scale-110'
                          : 'object-cover object-top'
                      }`}
                    />
                    {/* Subtle overlay for text contrast if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-void-950/80 via-void-950/20 to-transparent pointer-events-none" />
                    
                    {/* Category badge */}
                    <div className="absolute top-5 left-5 z-10">
                      <span className="text-xs font-mono tracking-wider uppercase text-signal/90 bg-void/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-signal/20">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`case-text ${index % 2 === 0 ? 'lg:col-span-5' : 'lg:col-span-5 lg:col-start-1 lg:row-start-1'}`}>
                  <span className="font-mono text-sm text-zinc-700 mb-3 block">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* KPI highlight */}
                  <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-white/[0.04]">
                    <span className="font-display text-4xl font-bold text-signal">{project.kpi.value}</span>
                    <span className="text-sm text-zinc-500">{project.kpi.label}</span>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-zinc-600 bg-white/[0.02] border border-white/[0.04] px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

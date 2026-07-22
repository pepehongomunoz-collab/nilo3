import { motion } from 'framer-motion';
import { Marquee } from '../ui/Marquee';
import { SectionLabel } from '../ui/SectionLabel';
import { techCategories, techMarquee } from '../../data/technologies';
import { Phone3D } from '../ui/Phone3D';
import uiPhoneImg from '../../assets/images/3d/ui_phone_app.png';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../i18n/translations';

export function TechStack() {
  const { language } = useLanguage();
  const t = getTranslation(language).tech;

  const categoryMap: Record<string, string> = {
    'Frontend': t.categories.frontend,
    'Backend': t.categories.backend,
    'Datos': t.categories.data,
    'Cloud & DevOps': t.categories.cloud,
    'IA & ML': t.categories.ai,
    'Mobile': t.categories.mobile,
  };

  return (
    <section id="technologies" className="py-section relative overflow-hidden">
      {/* Marquee rows */}
      <div className="mb-20 md:mb-28 space-y-3">
        <Marquee speed={40} className="opacity-[0.35]">
          <div className="flex gap-6 pr-6">
            {techMarquee.map((tech, i) => (
              <span
                key={`a-${i}`}
                className="shrink-0 font-mono text-sm text-zinc-700 border border-white/[0.03] px-5 py-2.5 rounded-full whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </Marquee>

        <Marquee speed={35} reverse className="opacity-[0.25]">
          <div className="flex gap-6 pr-6">
            {[...techMarquee].reverse().map((tech, i) => (
              <span
                key={`b-${i}`}
                className="shrink-0 font-mono text-sm text-zinc-700 border border-white/[0.03] px-5 py-2.5 rounded-full whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Content */}
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24 items-center">
          <div className="lg:col-span-5 relative z-10">
            <SectionLabel>{t.label}</SectionLabel>
            <h2 className="font-display text-section text-white mt-4 mb-6">
              {t.title}
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-lg">
              {t.subtitle}
            </p>
          </div>
          <div className="lg:col-span-7 flex justify-center lg:justify-end relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-signal/10 blur-[120px] rounded-full pointer-events-none" />
            <Phone3D imageSrc={uiPhoneImg} className="scale-75 md:scale-90 lg:scale-100 origin-center" />
          </div>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl border border-white/[0.04] bg-void-900/50 p-6 hover:border-white/[0.08] transition-all duration-500 group"
            >
              <h3 className="font-display text-lg font-bold text-white mb-5 group-hover:text-signal transition-colors duration-300">
                {categoryMap[category.name] || category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono text-zinc-500 bg-white/[0.02] border border-white/[0.03] px-3 py-1.5 rounded-full transition-colors duration-200 hover:border-signal/20 hover:text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


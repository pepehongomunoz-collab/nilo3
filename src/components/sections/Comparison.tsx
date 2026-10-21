import { motion } from 'framer-motion';
import { Check, X, Sparkles, DollarSign, Users, Zap, Shield, Headphones } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../i18n/translations';

const featureIcons: Record<string, React.ReactNode> = {
  pricing: <DollarSign className="w-4 h-4 text-signal" />,
  team: <Users className="w-4 h-4 text-signal" />,
  speed: <Zap className="w-4 h-4 text-signal" />,
  ownership: <Shield className="w-4 h-4 text-signal" />,
  support: <Headphones className="w-4 h-4 text-signal" />,
};

export function Comparison() {
  const { language } = useLanguage();
  const t = getTranslation(language).comparison;

  return (
    <section id="comparison" className="py-section relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-signal/[0.03] blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <SectionLabel>{t.label}</SectionLabel>
          <h2 className="font-display text-section text-white mt-4 tracking-tight">
            {t.title}
          </h2>
          <p className="mt-5 text-base md:text-lg text-zinc-400 font-sans leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Desktop Comparison Table (md+) */}
        <div className="hidden md:block">
          <div className="rounded-2xl border border-white/[0.08] bg-void/80 backdrop-blur-md overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 border-b border-white/[0.08] items-stretch text-left">
              <div className="col-span-3 p-6 flex items-end">
                <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
                  Factor / Criterio
                </span>
              </div>

              {/* Nilotech Column Header (Highlighted) */}
              <div className="col-span-4 p-6 bg-signal/[0.07] border-x border-signal/30 relative">
                <div className="absolute -top-[1px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-signal to-transparent" />
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-signal text-black font-bold">
                    <Sparkles className="w-3 h-3 fill-black" />
                    {t.badgeRecommended}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white flex items-center gap-2">
                  {t.colNilotech}
                </h3>
              </div>

              {/* Traditional Agency */}
              <div className="col-span-3 p-6 flex flex-col justify-end border-r border-white/[0.08]">
                <h3 className="font-display text-lg font-semibold text-zinc-300">
                  {t.colAgency}
                </h3>
              </div>

              {/* Freelancer */}
              <div className="col-span-2 p-6 flex flex-col justify-end">
                <h3 className="font-display text-lg font-semibold text-zinc-400">
                  {t.colFreelancer}
                </h3>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-white/[0.06]">
              {t.features.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="grid grid-cols-12 items-stretch transition-colors hover:bg-white/[0.015]"
                >
                  {/* Feature Title */}
                  <div className="col-span-3 p-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center shrink-0 border border-white/[0.06]">
                      {featureIcons[item.id] || <Sparkles className="w-4 h-4 text-signal" />}
                    </div>
                    <span className="font-display font-medium text-white text-sm lg:text-base">
                      {item.title}
                    </span>
                  </div>

                  {/* Nilotech Value (Highlighted) */}
                  <div className="col-span-4 p-6 bg-signal/[0.04] border-x border-signal/25 flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-signal/20 text-signal flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <p className="text-sm lg:text-base text-zinc-100 font-sans leading-relaxed">
                      {item.nilotech}
                    </p>
                  </div>

                  {/* Agency Value */}
                  <div className="col-span-3 p-6 border-r border-white/[0.08] flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400/80 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <p className="text-sm text-zinc-400 font-sans leading-relaxed">
                      {item.agency}
                    </p>
                  </div>

                  {/* Freelancer Value */}
                  <div className="col-span-2 p-6 flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-400/80 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <p className="text-sm text-zinc-400 font-sans leading-relaxed">
                      {item.freelancer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View (Cards) */}
        <div className="md:hidden space-y-6">
          {t.features.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/[0.08] bg-surface/60 backdrop-blur-sm p-6 overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/[0.06]">
                <div className="w-8 h-8 rounded-lg bg-surface-elevated flex items-center justify-center shrink-0 border border-white/[0.08]">
                  {featureIcons[item.id] || <Sparkles className="w-4 h-4 text-signal" />}
                </div>
                <h3 className="font-display font-bold text-white text-lg">
                  {item.title}
                </h3>
              </div>

              {/* Nilotech card row */}
              <div className="p-4 rounded-xl bg-signal/[0.08] border border-signal/30 mb-3">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-display font-bold text-signal text-sm flex items-center gap-1.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                    {t.colNilotech}
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-wider bg-signal text-black px-2 py-0.5 rounded-full font-bold">
                    {t.badgeRecommended}
                  </span>
                </div>
                <p className="text-sm text-white leading-relaxed">
                  {item.nilotech}
                </p>
              </div>

              {/* Agency card row */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] mb-2.5">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 block mb-1">
                  {t.colAgency}
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.agency}
                </p>
              </div>

              {/* Freelancer card row */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 block mb-1">
                  {t.colFreelancer}
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.freelancer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

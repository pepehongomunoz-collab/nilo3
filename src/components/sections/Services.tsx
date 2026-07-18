import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { services } from '../../data/services';
import { SectionLabel } from '../ui/SectionLabel';

export function Services() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="services" className="py-section relative">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          <div className="lg:col-span-5">
            <SectionLabel>Servicios</SectionLabel>
            <h2 className="font-display text-section text-white mt-4">
              Qué construimos.
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <p className="text-zinc-500 text-lg leading-relaxed max-w-lg">
              Cada servicio resuelve un problema real. Sin servicios genéricos,
              sin paquetes predefinidos — soluciones diseñadas para tu contexto.
            </p>
          </div>
        </div>

        {/* Accordion */}
        <div className="border-t border-white/[0.04]">
          {services.map((service) => (
            <div
              key={service.id}
              className="border-b border-white/[0.04]"
            >
              <button
                onClick={() => toggle(service.id)}
                className="w-full py-8 flex items-center justify-between gap-8 group text-left focus-ring"
                aria-expanded={openId === service.id}
              >
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="font-mono text-sm text-zinc-700 group-hover:text-signal transition-colors w-8">
                    {service.index}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-signal transition-colors">
                    {service.title}
                  </h3>
                </div>
                <div className="shrink-0 w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center group-hover:border-signal/30 transition-colors">
                  {openId === service.id ? (
                    <Minus className="w-4 h-4 text-signal" />
                  ) : (
                    <Plus className="w-4 h-4 text-zinc-500 group-hover:text-signal transition-colors" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openId === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 pl-14 md:pl-[4.5rem]">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
                        <div>
                          <p className="text-zinc-400 leading-relaxed mb-6">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs font-mono text-zinc-600 bg-white/[0.02] border border-white/[0.04] px-3 py-1 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="section-label mb-3 block">Incluye</span>
                          <ul className="space-y-2">
                            {service.capabilities.map((cap) => (
                              <li key={cap} className="flex items-center gap-3 text-sm text-zinc-400">
                                <span className="w-1 h-1 bg-signal rounded-full shrink-0" />
                                {cap}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

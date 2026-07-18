import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionLabel } from '../ui/SectionLabel';
import { company } from '../../data/company';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const emailjs = (window as Window & { emailjs?: { sendForm: (...args: unknown[]) => Promise<{ text: string }> } }).emailjs;

    if (!emailjs) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(
      'service_bnvn7b9',
      'template_wif78ek',
      formRef.current,
      'zN5poxSAc6404Q5HP'
    )
      .then(() => {
        setSubmitStatus('success');
        formRef.current?.reset();
      })
      .catch(() => {
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-section relative">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Info */}
          <div>
            <SectionLabel>Contacto</SectionLabel>
            <h2 className="font-display text-section text-white mt-4 mb-6">
              Tu próximo producto
              <br />
              <span className="text-zinc-600">empieza acá.</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-12 max-w-md">
              Contanos sobre tu proyecto. Analizamos tus necesidades y te respondemos en menos de 24 horas.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <a href={`mailto:${company.email}`} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg border border-white/[0.04] bg-surface flex items-center justify-center text-zinc-600 group-hover:text-signal group-hover:border-signal/20 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="section-label mb-0.5">Email</div>
                  <div className="text-sm text-zinc-400 group-hover:text-white transition-colors">{company.email}</div>
                </div>
              </a>

              <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg border border-white/[0.04] bg-surface flex items-center justify-center text-zinc-600 group-hover:text-signal group-hover:border-signal/20 transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="section-label mb-0.5">WhatsApp</div>
                  <div className="text-sm text-zinc-400 group-hover:text-white transition-colors">{company.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg border border-white/[0.04] bg-surface flex items-center justify-center text-zinc-600">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="section-label mb-0.5">Ubicación</div>
                  <div className="text-sm text-zinc-400">{company.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="section-label mb-2 block">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-white/[0.08] pb-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-signal/50 transition-colors text-sm"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="section-label mb-2 block">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-white/[0.08] pb-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-signal/50 transition-colors text-sm"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="section-label mb-2 block">Servicio de interés</label>
                <select
                  id="service"
                  name="service"
                  className="w-full bg-transparent border-b border-white/[0.08] pb-3 text-white focus:outline-none focus:border-signal/50 transition-colors text-sm appearance-none"
                >
                  <option className="bg-void">Productos Digitales</option>
                  <option className="bg-void">Software a Medida</option>
                  <option className="bg-void">Automatización</option>
                  <option className="bg-void">Integraciones</option>
                  <option className="bg-void">IA Aplicada</option>
                  <option className="bg-void">Desarrollo Web</option>
                  <option className="bg-void">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="section-label mb-2 block">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/[0.08] pb-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-signal/50 transition-colors resize-none text-sm"
                  placeholder="Contanos sobre tu proyecto..."
                />
              </div>

              <div className="pt-4">
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    'Enviar mensaje'
                  )}
                </Button>
              </div>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 text-signal bg-signal/5 p-4 rounded-xl border border-signal/10">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm">Mensaje enviado. Te contactamos en menos de 24 horas.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 text-warm bg-warm/5 p-4 rounded-xl border border-warm/10">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm">Error al enviar. Intentá de nuevo o escribinos por WhatsApp.</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

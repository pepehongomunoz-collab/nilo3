import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionLabel } from '../ui/SectionLabel';
import { company } from '../../data/company';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslation } from '../../i18n/translations';

const COOLDOWN_SECONDS = 30;

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const lastSubmitTimeRef = useRef<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'rate-limited'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { language } = useLanguage();
  const t = getTranslation(language).contact;
  const servicesList = getTranslation(language).services.items;

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // 1. Anti-spam: Honeypot check
    const formData = new FormData(formRef.current);
    const honeypot = formData.get('_gotcha');
    if (honeypot) {
      setSubmitStatus('success');
      formRef.current.reset();
      return;
    }

    // 2. Client-side Rate Limiting (Cooldown)
    const now = Date.now();
    const elapsedSeconds = (now - lastSubmitTimeRef.current) / 1000;
    if (lastSubmitTimeRef.current > 0 && elapsedSeconds < COOLDOWN_SECONDS) {
      const waitTime = Math.ceil(COOLDOWN_SECONDS - elapsedSeconds);
      setSubmitStatus('rate-limited');
      setErrorMessage(t.rateLimitMessage(waitTime));
      return;
    }

    // 3. Env variables check
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus('error');
      setErrorMessage(t.errorMessage);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    emailjs
      .sendForm(serviceId, templateId, formRef.current, { publicKey })
      .then(() => {
        setSubmitStatus('success');
        lastSubmitTimeRef.current = Date.now();
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setSubmitStatus('error');
        setErrorMessage(t.errorMessage);
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
            <SectionLabel>{t.label}</SectionLabel>
            <h2 className="font-display text-section text-white mt-4 mb-6">
              {t.titlePart1}
              <br />
              <span className="text-zinc-600">{t.titlePart2}</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-12 max-w-md">
              {t.subtitle}
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <a href={`mailto:${company.email}`} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg border border-white/[0.04] bg-surface flex items-center justify-center text-zinc-600 group-hover:text-signal group-hover:border-signal/20 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="section-label mb-0.5">{t.emailLabel}</div>
                  <div className="text-sm text-zinc-400 group-hover:text-white transition-colors">{company.email}</div>
                </div>
              </a>

              <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg border border-white/[0.04] bg-surface flex items-center justify-center text-zinc-600 group-hover:text-signal group-hover:border-signal/20 transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="section-label mb-0.5">{t.phoneLabel}</div>
                  <div className="text-sm text-zinc-400 group-hover:text-white transition-colors">{company.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg border border-white/[0.04] bg-surface flex items-center justify-center text-zinc-600">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="section-label mb-0.5">{t.locationLabel}</div>
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
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="section-label mb-2 block">{t.nameLabel}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    maxLength={100}
                    className="w-full bg-transparent border-b border-white/[0.08] pb-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-signal/50 transition-colors text-sm"
                    placeholder={t.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="section-label mb-2 block">{t.emailFieldLabel}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    maxLength={100}
                    className="w-full bg-transparent border-b border-white/[0.08] pb-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-signal/50 transition-colors text-sm"
                    placeholder={t.emailPlaceholder}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="section-label mb-2 block">Servicio</label>
                <select
                  id="service"
                  name="service"
                  className="w-full bg-transparent border-b border-white/[0.08] pb-3 text-white focus:outline-none focus:border-signal/50 transition-colors text-sm appearance-none"
                >
                  {servicesList.map((svc) => (
                    <option key={svc.id} className="bg-void" value={svc.title}>
                      {svc.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="section-label mb-2 block">{t.messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  maxLength={2000}
                  className="w-full bg-transparent border-b border-white/[0.08] pb-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-signal/50 transition-colors resize-none text-sm"
                  placeholder={t.messagePlaceholder}
                />
              </div>

              <div className="pt-4">
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {t.submitting}
                    </span>
                  ) : (
                    t.submitButton
                  )}
                </Button>
              </div>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 text-signal bg-signal/5 p-4 rounded-xl border border-signal/10">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm">{t.successMessage}</span>
                </div>
              )}

              {(submitStatus === 'error' || submitStatus === 'rate-limited') && (
                <div className="flex items-center gap-3 text-warm bg-warm/5 p-4 rounded-xl border border-warm/10">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm">{errorMessage || t.errorMessage}</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


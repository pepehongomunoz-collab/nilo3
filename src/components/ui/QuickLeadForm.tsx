import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { trackPixelEvent } from '../../lib/pixel';

type Status = 'idle' | 'sending' | 'success' | 'error';

interface QuickLeadFormProps {
  /** Producto de la consulta; aparece en el asunto del mail */
  service: string;
  /** Referencia del anuncio (?ref=), si la visita vino de uno */
  adRef?: string | null;
  className?: string;
}

const inputClass =
  'w-full rounded-xl border border-white/10 bg-void-950/60 px-4 py-3 text-[15px] text-white placeholder:text-zinc-500 transition-colors focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal/40';

export function QuickLeadForm({ service, adRef = null, className = '' }: QuickLeadFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const business = String(data.get('business') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();

    if (phone.replace(/\D/g, '').length < 8) {
      setStatus('error');
      setError('Revisá el número: necesitamos un WhatsApp con código de área.');
      return;
    }

    setStatus('sending');
    setError('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          service,
          message: [`Rubro: ${business}`, adRef ? `Anuncio: ${adRef}` : null].filter(Boolean).join('\n'),
          website: String(data.get('website') ?? ''),
        }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || 'No pudimos enviar tus datos.');

      setStatus('success');
      form.reset();
      trackPixelEvent('Lead', { content_name: service, method: 'form', ...(adRef ? { ad_ref: adRef } : {}) });
    } catch (err) {
      console.error('[QuickLeadForm] Error al enviar:', err);
      setStatus('error');
      setError('No pudimos enviar tus datos. Probá de nuevo o escribinos por WhatsApp.');
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className={`flex flex-col items-center gap-3 rounded-2xl border border-signal/30 bg-signal/10 px-6 py-8 text-center ${className}`}
      >
        <CheckCircle2 size={32} className="text-signal" aria-hidden="true" />
        <p className="text-lg font-semibold">¡Listo! Recibimos tus datos.</p>
        <p className="text-sm text-zinc-400">Te escribimos por WhatsApp a la brevedad.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-describedby="lead-form-help"
      className={`mx-auto w-full max-w-xl text-left ${className}`}
    >
      <p id="lead-form-help" className="mb-4 text-center text-sm text-zinc-400">
        ¿Preferís que te escribamos nosotros? Dejanos tus datos.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className="mb-1.5 block text-sm font-medium text-zinc-300">
            Nombre
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            required
            maxLength={80}
            autoComplete="given-name"
            placeholder="Tu nombre"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lead-business" className="mb-1.5 block text-sm font-medium text-zinc-300">
            Rubro
          </label>
          <input
            id="lead-business"
            name="business"
            type="text"
            required
            maxLength={80}
            autoComplete="organization"
            placeholder="Ej: peluquería, contador"
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="lead-phone" className="mb-1.5 block text-sm font-medium text-zinc-300">
            WhatsApp
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            maxLength={25}
            autoComplete="tel"
            placeholder="Ej: 11 2345 6789"
            className={inputClass}
          />
        </div>
      </div>

      {/* Honeypot: oculto para personas, los bots lo completan */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="lead-website">No completar</label>
        <input id="lead-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div aria-live="polite" className="min-h-[1.5rem]">
        {status === 'error' && <p className="mt-3 text-sm text-red-400">{error}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group mt-3 inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/15 px-7 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-signal hover:text-signal disabled:cursor-wait disabled:opacity-70 focus-ring"
      >
        {status === 'sending' ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Enviando…
          </>
        ) : (
          <>
            Quiero que me escriban
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-zinc-500">
        Usamos tus datos solo para responder esta consulta.
      </p>
    </form>
  );
}

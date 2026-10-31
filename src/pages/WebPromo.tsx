import { createContext, useContext, useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Eye,
  Globe,
  MessageCircle,
  Rocket,
  Search,
  Smartphone,
  Sparkles,
  Store,
} from 'lucide-react';
import { Footer } from '../components/layout/Footer';
import { Navbar } from '../components/layout/Navbar';
import { LanguageContext } from '../context/LanguageContext';
import { MegaphoneHero } from '../components/ui/MegaphoneHero';
import { extraSites, publishedSites, type PromoSite } from '../data/promoSites';
import { company } from '../data/company';
import { testimonials } from '../data/testimonials';
import { trackPixelCustomEvent, trackPixelEvent } from '../lib/pixel';

const WHATSAPP_MESSAGE = 'Quiero más info del Plan Emprendedor';

/**
 * Referencia del anuncio que trajo al visitante (utm_content o utm_campaign del link de Meta).
 * Viaja en el mensaje de WhatsApp para saber qué anuncio generó cada conversación.
 */
function readAdRef(): string | null {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get('utm_content') ?? params.get('utm_campaign');
  if (!raw) return null;
  const ref = raw.replace(/[^\w-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40);
  return ref || null;
}

function whatsappHrefFor(ref: string | null) {
  const text = ref ? `${WHATSAPP_MESSAGE} (ref. ${ref})` : WHATSAPP_MESSAGE;
  return `${company.whatsapp}?text=${encodeURIComponent(text)}`;
}

// Se completa después de hidratar para no desfasar el HTML prerenderizado
const AdRefContext = createContext<string | null>(null);

function useWhatsApp(location: string) {
  const ref = useContext(AdRefContext);
  return {
    href: whatsappHrefFor(ref),
    onClick: () => trackPixelEvent('Contact', { method: 'whatsapp', location, ...(ref ? { ad_ref: ref } : {}) }),
  };
}

const includes = [
  { icon: Smartphone, title: 'Diseño profesional para celular', text: 'Se ve bien en cualquier pantalla, que es donde te buscan tus clientes.' },
  { icon: Store, title: 'Tu negocio bien presentado', text: 'Quiénes son, qué ofrecen y por qué elegirlos, claro y en una sola página.' },
  { icon: MessageCircle, title: 'Botón de WhatsApp o formulario', text: 'Que te escriban con un toque, sin vueltas.' },
  { icon: Globe, title: 'Dominio + hosting por 1 año', text: 'Incluidos de regalo. Tu web con nombre propio desde el primer día.' },
  { icon: Search, title: 'SEO básico', text: 'Preparada para aparecer en Google y en los buscadores con IA.' },
];

const steps = [
  { icon: MessageCircle, title: 'Nos escribís por WhatsApp', text: 'Y nos contás qué hace tu negocio.' },
  { icon: Eye, title: 'Te mostramos el diseño', text: 'Ves cómo quedaría tu web antes de pagar nada.', highlight: true },
  { icon: Sparkles, title: 'Si te gusta, la terminamos', text: 'Con 2 rondas de cambios incluidas para ajustar los detalles.' },
  { icon: Rocket, title: 'En 5 días está online', text: 'Con tu dominio, lista para compartir.' },
];

// Actualizar a mano cada mes. Pasado `until` el aviso se oculta solo para no mostrar un dato vencido.
const SPOTS = { left: 10, month: 'noviembre', until: '2026-11-30' };

const marqueeItems = ['Primero la ves', 'Después pagás', 'Online en 5 días', 'Dominio + hosting de regalo'];

const PROMO_LANGUAGE = { language: 'es' as const, setLanguage: () => {} };

const faqs = [
  { q: '¿Tengo que pagar algo antes de ver el diseño?', a: 'No. Primero te mostramos cómo quedaría tu web. Si te gusta, avanzamos. El plan incluye 2 rondas de cambios en total.' },
  { q: '¿Cuánto cuesta el Plan Emprendedor?', a: '$300.000 por una web de una página como las de arriba, y lo podés pagar en 2 cuotas de $150.000. Incluye dominio y hosting por 1 año. El "desde" es porque, si sumás funciones como turnos, un cotizador o una tienda, eso se presupuesta aparte.' },
  { q: '¿Y después del primer año?', a: 'El dominio y el hosting se renuevan por $60.000 al año. No hay otros costos fijos.' },
  { q: '¿Cuánto tarda?', a: 'Una vez que aprobás el diseño, en 5 días tu web está online.' },
  { q: '¿Qué necesito para empezar?', a: 'Contarnos qué hace tu negocio y, si tenés, tu logo y algunas fotos. Si te falta algo, lo vemos juntos.' },
  { q: '¿Y si necesito algo más, como turnos online, un cotizador o una tienda?', a: 'También lo hacemos. Contanos qué necesitás y te pasamos un presupuesto aparte.' },
];

// En celular los ejemplos son un carrusel horizontal; desde sm, grilla.
const SITE_LIST =
  'wp-reveal -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3';

// En fondo amarillo el anillo de foco amarillo no se ve: se usa uno negro.
const darkFocus =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-void-950 focus-visible:ring-offset-2 focus-visible:ring-offset-signal';

function WhatsAppCta({
  location,
  onYellow = false,
  className = '',
}: {
  location: string;
  onYellow?: boolean;
  className?: string;
}) {
  const colors = onYellow
    ? `bg-void-950 text-signal hover:bg-void-700 ${darkFocus}`
    : 'bg-signal text-void-950 hover:bg-signal-dim focus-ring';
  const whatsapp = useWhatsApp(location);
  return (
    <a
      href={whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={whatsapp.onClick}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-[15px] font-semibold transition-all hover:-translate-y-0.5 ${colors} ${className}`}
    >
      <MessageCircle size={18} aria-hidden="true" />
      WhatsApp
      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </a>
  );
}

function SiteCard({ site }: { site: PromoSite }) {
  return (
    <li className="w-[82%] shrink-0 snap-start sm:w-auto">
      <a
        href={site.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block overflow-hidden rounded-2xl border border-white/[0.06] bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-[#A66BFF]/60 hover:shadow-[0_20px_50px_-20px_rgba(166,107,255,0.45)] focus-ring"
      >
        <div className="aspect-[16/10] overflow-hidden bg-void-800">
          <img
            src={site.image}
            alt={`Web de ${site.title}`}
            loading="lazy"
            width={960}
            height={600}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
        <div className="flex items-center justify-between gap-4 p-5">
          <div>
            <p className="font-display font-semibold">{site.title}</p>
            <p className="mt-1 text-sm text-zinc-400">{site.category}</p>
          </div>
          <ArrowRight size={18} className="shrink-0 text-zinc-500 transition-all group-hover:translate-x-1 group-hover:text-[#C4A1FF]" aria-hidden="true" />
        </div>
      </a>
    </li>
  );
}

function SpotsLeft({ className = '', dark = false }: { className?: string; dark?: boolean }) {
  const [expired, setExpired] = useState(false);
  useEffect(() => {
    setExpired(Date.now() > new Date(`${SPOTS.until}T23:59:59-03:00`).getTime());
  }, []);
  if (expired) return null;
  return (
    <p className={`flex items-center gap-2 text-sm font-semibold ${dark ? 'text-zinc-200' : 'text-void-950'} ${className}`}>
      <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7C3AED] opacity-60 motion-reduce:hidden" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#7C3AED]" />
      </span>
      Quedan {SPOTS.left} lugares para {SPOTS.month}
    </p>
  );
}

function Testimonials() {
  return (
    <section aria-labelledby="testimonios-title" className="px-3 md:px-6">
      <div className="relative overflow-hidden rounded-[2rem] bg-signal py-16 text-void-950 md:rounded-[2.5rem] md:py-24">
        <div className="site-container">
          <h2 id="testimonios-title" className="wp-reveal font-display text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-[0.95] tracking-tight">
            Lo que dicen <span className="inline-block -rotate-1 rounded-xl bg-[#7C3AED] px-3 text-white">nuestros clientes</span>
          </h2>
          <p className="mt-4 text-sm font-medium text-void-950/70 md:hidden">Deslizá para leer más.</p>
          <ul className="wp-reveal -mx-6 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
            {testimonials.map((t, i) => (
              <li
                key={t.id}
                className={`flex w-[85%] shrink-0 snap-start flex-col justify-between rounded-2xl p-6 md:w-auto md:p-7 ${
                  i === 1 ? 'bg-[#7C3AED] text-white' : 'bg-void-950 text-white'
                }`}
              >
                <blockquote>
                  <span className={`font-display text-5xl font-black leading-none ${i === 1 ? 'text-signal' : 'text-[#A66BFF]'}`} aria-hidden="true">
                    “
                  </span>
                  <p className="mt-1 text-[17px] leading-relaxed">{t.quote}</p>
                </blockquote>
                <p className="mt-6 text-sm">
                  <span className="font-semibold">{t.author}</span>
                  <span className={i === 1 ? 'text-white/80' : 'text-zinc-400'}> · {t.role}, {t.company}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function HeroArt() {
  return (
    <MegaphoneHero />
  );
}

function PriceBadge({ className = '' }: { className?: string }) {
  return (
    <div className={`grid h-32 w-32 place-items-center rounded-full bg-[#A66BFF] text-void-950 shadow-xl md:h-36 md:w-36 ${className}`} aria-hidden="true">
      <svg viewBox="0 0 100 100" className="wp-spin col-start-1 row-start-1 h-full w-full">
        <defs>
          <path id="wp-ring" d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
        </defs>
        <text className="fill-void-950 font-mono text-[7.4px] font-bold uppercase tracking-[0.1em]">
          <textPath href="#wp-ring">Plan Emprendedor ✦ Online en 5 días ✦</textPath>
        </text>
      </svg>
      <div className="col-start-1 row-start-1 text-center leading-none">
        <span className="block text-[10px] font-semibold uppercase tracking-wider">Desde</span>
        <span className="font-display text-xl font-black md:text-2xl">$300k</span>
      </div>
    </div>
  );
}

// Cualquier clic del nav o del footer que no sea WhatsApp saca al visitante de la landing
function useTrackLandingExits(rootRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest('a, button');
      if (!link || !link.closest('nav, footer')) return;
      const href = link.getAttribute('href') ?? '';
      if (href.includes('wa.me') || link.getAttribute('aria-controls') === 'mobile-menu') return;
      const label = (link.textContent ?? '').trim().slice(0, 40) || link.getAttribute('aria-label') || 'link';
      trackPixelCustomEvent('LandingExit', { link: label, area: link.closest('footer') ? 'footer' : 'nav' });
    };
    root.addEventListener('click', onClick);
    return () => root.removeEventListener('click', onClick);
  }, [rootRef]);
}

export function WebPromo() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [adRef, setAdRef] = useState<string | null>(null);
  useEffect(() => setAdRef(readAdRef()), []);
  useTrackLandingExits(rootRef);

  return (
    <AdRefContext.Provider value={adRef}>
    <div ref={rootRef} className="min-h-screen overflow-x-clip bg-void text-white">
      {/* Nav oficial del sitio; el CTA es WhatsApp y los links llevan a la home */}
      <LanguageContext.Provider value={PROMO_LANGUAGE}>
        <Navbar
          standalone
          cta={
            <a
              href={whatsappHrefFor(adRef)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackPixelEvent('Contact', { method: 'whatsapp', location: 'web_promo_header', ...(adRef ? { ad_ref: adRef } : {}) })
              }
              className="inline-flex items-center justify-center gap-2 rounded-full bg-signal px-4 py-2 text-sm font-semibold text-void-950 transition-colors hover:bg-signal-dim focus-ring"
            >
              <MessageCircle size={16} aria-hidden="true" />
              WhatsApp
            </a>
          }
        />
      </LanguageContext.Provider>

      <main id="main-content" className="pt-[72px] lg:pt-[76px]">
        {/* Hero: lienzo amarillo con el cursor violeta derritiéndose */}
        <section className="px-3 pt-3 md:px-6 md:pt-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-signal text-void-950 md:rounded-[2.5rem]">
            {/* Grilla sutil de "mesa de diseño" */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#09090B_1px,transparent_1px),linear-gradient(90deg,#09090B_1px,transparent_1px)] [background-size:48px_48px]"
              aria-hidden="true"
            />

            {/* Celular: etiqueta y título → animación → texto y CTA. Escritorio: texto a la izquierda, animación a la derecha */}
            <div className="site-container relative grid gap-4 pb-20 pt-8 sm:pt-12 md:pb-28 md:pt-16 lg:grid-cols-[1.25fr_1fr] lg:grid-rows-[1fr_auto_auto_1fr] lg:gap-x-4 lg:gap-y-0">
              <div className="relative z-20 lg:col-start-1 lg:row-start-2">
                <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-void-950 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-signal sm:tracking-[0.15em]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A66BFF]" aria-hidden="true" />
                  Plan Emprendedor · Nilotech
                </p>
                <h1 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] font-black uppercase leading-[0.92] tracking-[-0.045em]">
                  Ves tu web
                  <br />
                  primero.
                  <br />
                  <span className="mt-2 inline-block -rotate-2 rounded-2xl bg-[#7C3AED] px-3 pb-1 text-white md:px-5">
                    Pagás después.
                  </span>
                </h1>
              </div>

              <div className="relative mx-auto -my-2 h-[260px] w-[290px] sm:my-0 sm:h-[360px] sm:w-[340px] lg:col-start-2 lg:row-span-4 lg:row-start-1 lg:h-[560px] lg:w-[500px] lg:self-center lg:-translate-y-8 xl:translate-x-24">
                <PriceBadge className="absolute -left-10 top-0 z-20 scale-[0.7] sm:-left-6 sm:top-10 sm:scale-100 lg:left-12 lg:top-10 lg:scale-125" />
                <HeroArt />
              </div>

              <div className="relative z-20 lg:col-start-1 lg:row-start-3">
                <p className="max-w-xl lg:mt-7 text-lg font-medium leading-relaxed text-void-950/80">
                  Te mostramos el diseño de tu página antes de cobrarte. Si te gusta, la terminamos y en 5 días está
                  online, con dominio y hosting por 1 año de regalo.
                </p>
                <p className="mt-4 text-base font-semibold">
                  Desde $300.000 <span className="font-normal text-void-950/70">o 2 cuotas de $150.000</span>
                </p>
                <SpotsLeft className="mt-6" />
                <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center">
                  <WhatsAppCta location="web_promo_hero" onYellow />
                  <a
                    href="#ejemplos"
                    className={`inline-flex items-center gap-2 self-start rounded-md py-2 font-semibold underline decoration-[#7C3AED] decoration-2 underline-offset-4 ${darkFocus}`}
                  >
                    Ver webs que hicimos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Franja violeta en movimiento */}
        <div className="relative z-10 -mt-8 py-6" aria-hidden="true">
          <div className="-mx-4 -rotate-2 overflow-hidden bg-[#A66BFF] py-4 text-void-950 shadow-[0_20px_60px_-20px_rgba(166,107,255,0.6)] md:py-5">
            <div className="flex w-max animate-marquee [--marquee-duration:28s]">
              {[0, 1].map((copy) => (
                <ul key={copy} className="flex shrink-0">
                  {[...marqueeItems, ...marqueeItems].map((item, i) => (
                    <li key={`${copy}-${i}`} className="flex items-center gap-6 pr-6 font-display text-2xl font-black uppercase tracking-tight md:text-4xl">
                      {item}
                      <span className="text-void-950/60">✦</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* Incluye */}
        <section aria-labelledby="incluye-title" className="py-16 md:py-24">
          <div className="site-container">
            <h2 id="incluye-title" className="wp-reveal font-display text-[clamp(2rem,5vw,3.5rem)] font-black uppercase tracking-tight">
              Qué incluye
            </h2>

            {/* Lo esencial, destacado en violeta */}
            <div className="wp-reveal relative mt-10 overflow-hidden rounded-[2rem] bg-[#A66BFF] p-8 text-void-950 md:p-12">
              <Eye
                size={220}
                strokeWidth={1}
                className="pointer-events-none absolute -bottom-10 -right-6 text-void-950/10 md:-right-2"
                aria-hidden="true"
              />
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em]">Lo esencial</p>
              <p className="mt-4 max-w-2xl font-display text-[clamp(1.6rem,3.5vw,2.75rem)] font-black leading-[1.05] tracking-tight">
                Ves tu web diseñada antes de pagar un peso. Si no te convence, no avanzamos.
              </p>
            </div>

            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {includes.map(({ icon: Icon, title, text }) => (
                <li
                  key={title}
                  className="wp-reveal group flex gap-4 rounded-2xl border border-white/[0.06] bg-surface p-5 transition-colors hover:border-[#A66BFF]/50 sm:block sm:p-6"
                >
                  <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-signal-soft text-signal transition-colors group-hover:bg-[#A66BFF]/15 group-hover:text-[#C4A1FF]">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold leading-snug sm:mt-5">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400 sm:mt-2">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cómo funciona */}
        <section aria-labelledby="pasos-title" className="border-t border-white/[0.06] py-16 md:py-24">
          <div className="site-container">
            <h2 id="pasos-title" className="wp-reveal font-display text-[clamp(2rem,5vw,3.5rem)] font-black uppercase tracking-tight">
              Cómo funciona
            </h2>
            <ol className="mt-10 grid gap-4 md:grid-cols-4">
              {steps.map(({ icon: Icon, title, text, highlight }, i) => (
                <li
                  key={title}
                  className={`wp-reveal relative flex gap-5 overflow-hidden rounded-2xl p-5 md:block md:p-6 ${
                    highlight ? 'bg-[#A66BFF] text-void-950' : 'border border-white/[0.06]'
                  }`}
                >
                  <span
                    className={`w-12 shrink-0 font-display text-5xl font-black leading-none md:w-auto md:text-6xl ${highlight ? 'text-void-950/25' : 'text-white/[0.08]'}`}
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <Icon size={22} className={`mt-4 hidden md:block ${highlight ? '' : 'text-signal'}`} aria-hidden="true" />
                    <h3 className="font-display text-lg font-semibold md:mt-4">{title}</h3>
                    <p className={`mt-1.5 text-sm leading-relaxed md:mt-2 ${highlight ? 'text-void-950/80' : 'text-zinc-400'}`}>{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Testimonials />

        {/* Ejemplos */}
        <section id="ejemplos" aria-labelledby="ejemplos-title" className="scroll-mt-20 border-t border-white/[0.06] py-16 md:py-24">
          <div className="site-container">
            <h2 id="ejemplos-title" className="wp-reveal font-display text-[clamp(2rem,5vw,3.5rem)] font-black uppercase tracking-tight">
              Webs que ya <span className="text-[#C4A1FF]">están funcionando</span>
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-400">
              Negocios y profesionales como vos. Entrá y mirá cómo quedaron.
              <span className="sm:hidden"> Deslizá para ver más.</span>
            </p>
            <h3 className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
              Incluidas en el plan <span className="normal-case tracking-normal text-zinc-400">· clientes reales, online</span>
            </h3>
            <ul className={`mt-5 ${SITE_LIST}`}>
              {publishedSites.map((site) => (
                <SiteCard key={site.url} site={site} />
              ))}
            </ul>

            <h3 className="mt-16 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
              ¿Necesitás algo más?{' '}
              <span className="normal-case tracking-normal text-zinc-400">· tiendas online, apps y cotizadores, con presupuesto aparte</span>
            </h3>
            <ul className={`mt-5 ${SITE_LIST}`}>
              {extraSites.map((site) => (
                <SiteCard key={site.url} site={site} />
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-title" className="border-t border-white/[0.06] py-16 md:py-24">
          {/* En escritorio: título fijo a la izquierda y preguntas a la derecha */}
          <div className="site-container grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2 id="faq-title" className="wp-reveal font-display text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-[0.95] tracking-tight">
                Preguntas frecuentes
              </h2>
              <p className="mt-5 hidden max-w-sm text-zinc-400 lg:block">
                ¿Tenés otra duda? Escribinos por WhatsApp y la vemos juntos.
              </p>
              <WhatsAppCta location="web_promo_faq" className="mt-8 hidden lg:inline-flex" />
            </div>
            <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md py-5 font-medium focus-ring lg:py-6 lg:text-lg [&::-webkit-details-marker]:hidden">
                    {q}
                    <ChevronDown size={18} className="shrink-0 text-zinc-500 transition-transform group-open:rotate-180 group-open:text-[#C4A1FF]" aria-hidden="true" />
                  </summary>
                  <p className="-mt-2 max-w-2xl pb-5 leading-relaxed text-zinc-400 lg:pb-6">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="px-3 pb-6 md:px-6">
          <div className="wp-reveal relative overflow-hidden rounded-[2rem] bg-void-800 px-6 py-16 text-center md:rounded-[2.5rem] md:py-24">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A66BFF] opacity-25 blur-[120px]"
              aria-hidden="true"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl font-display text-[clamp(2rem,5vw,3.75rem)] font-black uppercase leading-[0.95] tracking-tight">
                ¿Querés ver cómo quedaría <span className="text-signal">tu web?</span>
              </h2>
              <ul className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-zinc-300">
                {['Sin pagar antes de ver el diseño', 'Online en 5 días', 'Dominio + hosting incluidos'].map((item) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <Check size={16} className="text-[#C4A1FF]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <SpotsLeft className="mt-8 justify-center" dark />
              <WhatsAppCta location="web_promo_footer" className="mt-5" />
            </div>
          </div>
        </section>
      </main>

      {/* Idioma fijo: el LanguageProvider pisaría el título y la descripción de esta página */}
      <LanguageContext.Provider value={PROMO_LANGUAGE}>
        {/* Espacio para que la barra fija de celular no tape el final del footer */}
        <div className="pb-20 md:pb-0">
          <Footer standalone />
        </div>
      </LanguageContext.Provider>

      {/* Barra fija en celular: el CTA siempre a mano */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.06] bg-void/90 p-3 backdrop-blur-xl md:hidden">
        <a
          href={whatsappHrefFor(adRef)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackPixelEvent('Contact', { method: 'whatsapp', location: 'web_promo_sticky', ...(adRef ? { ad_ref: adRef } : {}) })
          }
          className="flex items-center justify-center gap-2 rounded-full bg-signal py-3.5 font-semibold text-void-950 focus-ring"
        >
          <MessageCircle size={18} aria-hidden="true" />
          Quiero ver mi web
        </a>
      </div>
    </div>
    </AdRefContext.Provider>
  );
}

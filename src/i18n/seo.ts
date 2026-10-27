import type { Language } from '../context/LanguageContext';
import { getTranslation } from './translations';
import { company } from '../data/company';

export const SITE_URL = 'https://nilotech.online';
export const LANGUAGES: Language[] = ['es', 'en', 'pt'];

interface SeoMeta {
  htmlLang: string;
  hreflang: string;
  ogLocale: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  /** Short, factual "what is Nilotech" sentence — used by LLMs/answer engines. */
  entity: string;
}

export const seoMeta: Record<Language, SeoMeta> = {
  es: {
    htmlLang: 'es-AR',
    hreflang: 'es',
    ogLocale: 'es_AR',
    title: 'Desarrollo de Software a Medida en Buenos Aires | Nilotech',
    description:
      'Nilotech desarrolla software a medida, apps, automatizaciones e integraciones con IA para empresas. Presupuesto cerrado, equipo senior y entregas semanales. Buenos Aires.',
    ogTitle: 'Nilotech — Software a medida que reduce costos y automatiza tu operativa',
    ogDescription:
      'Diseñamos el software que mueve empresas. Productos digitales, automatización e IA aplicada.',
    entity:
      'Nilotech es una empresa de desarrollo de software a medida con base en Buenos Aires, Argentina, fundada en 2020. Diseña y construye productos digitales, sistemas internos, automatizaciones de procesos, integraciones entre plataformas y soluciones de IA aplicada para empresas de Argentina y Latinoamérica.',
  },
  en: {
    htmlLang: 'en',
    hreflang: 'en',
    ogLocale: 'en_US',
    title: 'Custom Software Development & Automation | Nilotech',
    description:
      'Nilotech builds custom software, apps, process automation and AI integrations for businesses. Fixed quotes, senior team and weekly deliveries. Based in Buenos Aires.',
    ogTitle: 'Nilotech — Custom software that cuts costs and automates operations',
    ogDescription:
      'We build the software that drives businesses. Digital products, automation and applied AI.',
    entity:
      'Nilotech is a custom software development company based in Buenos Aires, Argentina, founded in 2020. It designs and builds digital products, internal systems, process automation, platform integrations and applied AI solutions for companies in Latin America and worldwide.',
  },
  pt: {
    htmlLang: 'pt-BR',
    hreflang: 'pt',
    ogLocale: 'pt_BR',
    title: 'Desenvolvimento de Software Sob Medida | Nilotech',
    description:
      'A Nilotech desenvolve software sob medida, apps, automação de processos e integrações com IA para empresas. Orçamento fechado, equipe sênior e entregas semanais.',
    ogTitle: 'Nilotech — Software sob medida que reduz custos e automatiza sua operação',
    ogDescription:
      'Projetamos o software que move empresas. Produtos digitais, automação e IA aplicada.',
    entity:
      'A Nilotech é uma empresa de desenvolvimento de software sob medida com sede em Buenos Aires, Argentina, fundada em 2020. Projeta e constrói produtos digitais, sistemas internos, automação de processos, integrações entre plataformas e soluções de IA aplicada para empresas da América Latina.',
  },
};

export function languagePath(lang: Language): string {
  return lang === 'es' ? '/' : `/${lang}/`;
}

export function languageFromPath(pathname: string): Language {
  const seg = pathname.split('/').filter(Boolean)[0];
  return seg === 'en' || seg === 'pt' ? seg : 'es';
}

/** JSON-LD @graph for a language version of the home page. */
export function buildJsonLd(lang: Language): Record<string, unknown> {
  const t = getTranslation(lang);
  const m = seoMeta[lang];
  const pageUrl = SITE_URL + languagePath(lang);
  const orgId = `${SITE_URL}/#organization`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': orgId,
        name: company.name,
        url: SITE_URL + '/',
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/icon-512.png`,
          width: 512,
          height: 512,
        },
        image: `${SITE_URL}/og-image.png`,
        description: m.entity,
        slogan: t.hero.titlePart1 + ' ' + t.hero.titlePart2 + ' ' + t.hero.titlePart3,
        foundingDate: company.founded,
        email: company.email,
        telephone: company.phone,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: company.address.street,
          addressLocality: company.address.city,
          addressRegion: company.address.region,
          postalCode: company.address.postalCode,
          addressCountry: company.address.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: company.geo.latitude,
          longitude: company.geo.longitude,
        },
        hasMap: company.googleMaps,
        areaServed: [
          { '@type': 'Country', name: 'Argentina' },
          { '@type': 'AdministrativeArea', name: 'Provincia de Buenos Aires' },
          { '@type': 'City', name: 'Quilmes' },
          { '@type': 'City', name: 'Buenos Aires' },
          { '@type': 'Place', name: 'Latinoamérica' },
          { '@type': 'Place', name: 'Worldwide' },
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: company.email,
          telephone: company.phone,
          availableLanguage: ['Spanish', 'English', 'Portuguese'],
          areaServed: ['AR', 'LATAM'],
        },
        sameAs: [company.instagram, company.linkedin, company.googleMaps, company.whatsapp],
        knowsAbout: [
          'Software a medida',
          'Custom software development',
          'Automatización de procesos',
          'Integraciones de APIs',
          'Inteligencia artificial aplicada',
          'Desarrollo web',
          'Aplicaciones móviles',
          'React',
          'TypeScript',
          'Node.js',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: t.services.title,
          itemListElement: t.services.items.map((s) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: s.title,
              description: s.description,
              provider: { '@id': orgId },
              areaServed: 'AR',
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL + '/',
        name: company.name,
        inLanguage: ['es-AR', 'en', 'pt-BR'],
        publisher: { '@id': orgId },
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: m.title,
        description: m.description,
        inLanguage: m.htmlLang,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': orgId },
        primaryImageOfPage: `${SITE_URL}/og-image.png`,
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        inLanguage: m.htmlLang,
        mainEntity: t.faq.items.map((q) => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: { '@type': 'Answer', text: q.answer },
        })),
      },
      {
        '@type': 'HowTo',
        '@id': `${pageUrl}#process`,
        inLanguage: m.htmlLang,
        name: `${t.process.title} | ${company.name}`,
        description: t.process.subtitle,
        totalTime: 'P8W',
        step: t.process.steps.map((step, idx) => ({
          '@type': 'HowToStep',
          position: idx + 1,
          name: `${step.number}. ${step.title}`,
          text: step.description,
          url: `${pageUrl}#process`,
          itemListElement: step.deliverables.map((item, dIdx) => ({
            '@type': 'HowToDirection',
            position: dIdx + 1,
            text: item,
          })),
        })),
      },
    ],
  };
}

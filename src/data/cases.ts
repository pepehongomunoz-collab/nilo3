import lubriImg from '../assets/images/cases/Lubri.webp';
import appClubImg from '../assets/images/cases/AppClub.webp';
import psicoImg from '../assets/images/cases/psico.webp';

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  challenge: string;
  result: string;
  technologies: string[];
  kpi: { value: string; label: string };
  image?: string;
  url?: string;
}

export const cases: CaseStudy[] = [
  {
    id: 'eden',
    title: 'Lubricentro Eden',
    category: 'E-commerce & ERP',
    description: 'Plataforma integral B2B/B2C diseñada para automatizar la operación comercial. Incluye tienda digital interactiva, punto de venta (POS), gestión de inventario en tiempo real y un módulo financiero para la administración económica del negocio.',
    challenge: 'Operativa fragmentada entre ventas presenciales y digitales, con procesos administrativos y control de stock manuales.',
    result: 'Centralización operativa total, automatizando la facturación y reduciendo el tiempo de gestión administrativa.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'REST APIs'],
    kpi: { value: '-65%', label: 'Tiempo administrativo' },
    image: lubriImg,
  },
  {
    id: 'newbery',
    title: 'App Club Jorge Newbery',
    category: 'Aplicación Android',
    description: 'Ecosistema móvil de gestión institucional y deportiva. Arquitectura multi-rol (Directivos, Técnicos, Tutores, Jugadores) con acceso centralizado a fixtures, formaciones, noticias, y un sistema de carnet digital interactivo. Integra módulo de cobranzas y tienda oficial.',
    challenge: 'Descoordinación en la comunicación interna, gestión de categorías ineficiente y procesos de cobranza manuales.',
    result: 'Digitalización absoluta del club, agilizando el pago de cuotas y unificando la comunicación deportiva y administrativa.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Node.js', 'MercadoPago'],
    kpi: { value: '-80%', label: 'Cobranza manual' },
    image: appClubImg,
  },
  {
    id: 'psicologa',
    title: 'Landing Page Clínica',
    category: 'Landing Page',
    description: 'Landing page de alto rendimiento orientada a conversión. Arquitectura de información diseñada para destacar metodologías clínicas y servicios terapéuticos. Incluye integración fluida con canales de contacto y agenda.',
    challenge: 'Falta de presencia digital profesional que refleje la calidad de la metodología de trabajo.',
    result: 'Canal de adquisición digital optimizado, con tiempos de carga casi instantáneos y alta retención de usuarios.',
    technologies: ['React', 'Next.js', 'Framer Motion', 'Tailwind', 'Vite'],
    kpi: { value: '+180%', label: 'Consultas online' },
    image: psicoImg,
  },
  // ── Placeholders (sin captura dedicada) ──
  // EDItAR: reemplazar por casos reales cuando estén disponibles.
  {
    id: 'pos-pyme',
    title: 'POS Pyme',
    category: 'Sistema a Medida',
    description: 'Punto de venta y gestión de stock para una cadena de 4 locales. Facturación electrónica, reportes en tiempo real y sincronización multi-sucursal.',
    challenge: 'Ventas dispersas entre sucursales, sin visibilidad consolidada de stock ni facturación automática.',
    result: 'Unificación operativa entre 4 locales, facturación 100% electrónica, stock sincronizado en tiempo real.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AFIP API', 'WebSocket'],
    kpi: { value: '4', label: 'Sucursales sincronizadas' },
  },
  {
    id: 'automate-logistics',
    title: 'Logistics Flow',
    category: 'Automatización',
    description: 'Sistema de orquestación de pedidos que conecta el e-commerce del cliente con su ERP y 3 transportistas. Ruteo automático y notificaciones a los compradores.',
    challenge: 'Carga manual de cada envío en 3 sistemas distintos, errores de ruteo y tickets de soporte por falta de tracking.',
    result: 'Eliminación del 90% de la carga manual. Tracking en tiempo real para el comprador y reducción de tickets.',
    technologies: ['Node.js', 'Redis', 'REST APIs', 'Webhooks', 'Cron'],
    kpi: { value: '-90%', label: 'Carga manual' },
  },
  {
    id: 'payments-gateway',
    title: 'Payments Hub',
    category: 'Integración',
    description: 'Capa de integración con 5 pasarelas de pago (MercadoPago, Stripe, PayPal, Naranja X, TodoPago) con fallback automático y conciliación bancaria.',
    challenge: 'Una sola pasarela con alta tasa de rechazos y conciliación manual al cierre de cada día.',
    result: 'Tasa de aprobación +18% por fallback inteligente. Conciliación automática al cierre del día.',
    technologies: ['Node.js', 'GraphQL', 'PostgreSQL', 'BullMQ', 'TypeScript'],
    kpi: { value: '+18%', label: 'Aprobación de pagos' },
  },
  {
    id: 'ai-assistant',
    title: 'AI Assistant B2B',
    category: 'IA Aplicada',
    description: 'Asistente conversacional para un proveedor B2B. Responde consultas de catálogo, stock y estado de pedido integrándose al ERP vía API. Escalado a WhatsApp + web.',
    challenge: 'Volumen alto de consultas repetitivas saturando al equipo comercial. Respuestas demoradas fuera del horario laboral.',
    result: 'Atención 24/7, 70% de consultas resueltas sin intervención humana, triage automático al equipo comercial.',
    technologies: ['OpenAI', 'LangChain', 'Node.js', 'WhatsApp API', 'Pinecone'],
    kpi: { value: '70%', label: 'Auto-resolución' },
  },
  {
    id: 'corporate-site',
    title: 'Site Corporativo FinTech',
    category: 'Desarrollo Web',
    description: 'Sitio corporativo para una fintech con foco en conversión de leads B2B. Blog técnico con MDX, optimización SEO avanzada y A/B testing de hero.',
    challenge: 'Sitio anterior con Lighthouse 45, sin captura de leads y mal posicionamiento orgánico.',
    result: 'Lighthouse 98+ en todos los Core Web Vitals, leads cualificados +210% en 4 meses.',
    technologies: ['Next.js', 'MDX', 'Tailwind', 'Vercel Analytics', 'Schema.org'],
    kpi: { value: '+210%', label: 'Leads cualificados' },
  },
];

export const portfolioStats = [
  { value: '15+', label: 'Proyectos entregados' },
  { value: '100%', label: 'A medida' },
  { value: '<1s', label: 'Tiempo de carga' },
  { value: '24h', label: 'Soporte técnico' },
];

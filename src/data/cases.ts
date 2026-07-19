import lubriImg from '../assets/images/cases/Lubri.png';
import appClubImg from '../assets/images/cases/AppClub.png';
import psicoImg from '../assets/images/cases/psico.png';

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  challenge: string;
  result: string;
  technologies: string[];
  kpi: { value: string; label: string };
  image: string;
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
    kpi: { value: '100%', label: 'Operación centralizada' },
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
    kpi: { value: '4', label: 'Roles integrados' },
    image: appClubImg,
  },
  {
    id: 'psicologa',
    title: 'Landing Page Clínica',
    category: 'Web Institucional',
    description: 'Landing page de alto rendimiento orientada a conversión. Arquitectura de información diseñada para destacar metodologías clínicas y servicios terapéuticos. Incluye integración fluida con canales de contacto y agenda.',
    challenge: 'Falta de presencia digital profesional que refleje la calidad de la metodología de trabajo.',
    result: 'Canal de adquisición digital optimizado, con tiempos de carga casi instantáneos y alta retención de usuarios.',
    technologies: ['React', 'Next.js', 'Framer Motion', 'Tailwind', 'Vite'],
    kpi: { value: '<1s', label: 'Tiempo de carga' },
    image: psicoImg,
  },
];

export const portfolioStats = [
  { value: '15+', label: 'Proyectos entregados' },
  { value: '100%', label: 'A medida' },
  { value: '<1s', label: 'Tiempo de carga' },
  { value: '24h', label: 'Soporte técnico' },
];

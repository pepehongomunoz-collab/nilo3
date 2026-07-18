import siglo21Img from '../assets/images/cases/siglo21.png';
import lufkinImg from '../assets/images/cases/lufkin.png';
import aerolineasImg from '../assets/images/cases/aerolineas.png';

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
    id: 'siglo21',
    title: 'Siglo 21',
    category: 'Plataforma Educativa',
    description: 'Sistema de gestión académica con dashboards en tiempo real, automatización de inscripciones y panel administrativo completo.',
    challenge: 'Procesos manuales que consumían +40 horas semanales del equipo administrativo.',
    result: 'Reducción del 70% en tiempo de gestión. Sistema usado por +200 usuarios diarios.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'REST APIs'],
    kpi: { value: '70%', label: 'menos tiempo operativo' },
    image: siglo21Img,
  },
  {
    id: 'lufkin',
    title: 'Lufkin',
    category: 'E-commerce',
    description: 'Tienda online con checkout optimizado, gestión de inventario en tiempo real e integración con pasarelas de pago locales.',
    challenge: 'Ventas limitadas a showroom físico sin presencia digital efectiva.',
    result: 'Canal digital generando el 35% de las ventas totales en los primeros 3 meses.',
    technologies: ['React', 'Shopify', 'MercadoPago', 'Analytics'],
    kpi: { value: '35%', label: 'de ventas online' },
    image: lufkinImg,
  },
  {
    id: 'aerolineas',
    title: 'Sistema de Gestión Interna',
    category: 'Software a Medida',
    description: 'Plataforma interna de tracking operativo con workflows automáticos, alertas y reportes ejecutivos personalizados.',
    challenge: 'Información fragmentada en hojas de cálculo sin trazabilidad.',
    result: 'Visibilidad completa de operaciones con reportes automáticos diarios.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Firebase'],
    kpi: { value: '100%', label: 'trazabilidad' },
    image: aerolineasImg,
  },
];

export const portfolioStats = [
  { value: '15+', label: 'Proyectos entregados' },
  { value: '100%', label: 'A medida' },
  { value: '<2s', label: 'Tiempo de carga' },
  { value: '24h', label: 'Tiempo de respuesta' },
];

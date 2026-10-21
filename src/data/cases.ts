import esiImg from '../assets/images/cases/esi.webp';
import nutriImg from '../assets/images/cases/nutri.webp';
import appClubImg from '../assets/images/cases/AppClub.webp';
import psicoImg from '../assets/images/cases/psico.webp';
import lumuxImg from '../assets/images/cases/lumux.webp';
import novaImg from '../assets/images/cases/nova.webp';
import nandaImg from '../assets/images/cases/nanda.webp';
import victoriaImg from '../assets/images/cases/victoria.webp';
import celpeImg from '../assets/images/cases/celpe.webp';
import polloImg from '../assets/images/cases/pollo.webp';
import mundoGuauImg from '../assets/images/cases/mundoguau.webp';
import zbImg from '../assets/images/cases/zb.webp';

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
    id: 'esi',
    title: 'ESI en Secundaria',
    category: 'Plataforma Educativa & E-learning',
    description: 'Portal educativo de contenidos y recursos didácticos para docentes y escuelas. Catálogo digital, artículos de blog, cuadernillos descargables y tienda online integrada.',
    challenge: 'Falta de centralización de material pedagógico actualizado y venta manual desorganizada de recursos.',
    result: 'Distribución digital automatizada de contenidos educativos con miles de docentes activos.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'E-commerce API'],
    kpi: { value: '+300%', label: 'Docentes activos' },
    image: esiImg,
    url: 'https://esiensecundaria.com.ar/',
  },
  {
    id: 'newbery',
    title: 'App Club Jorge Newbery',
    category: 'Aplicación Android & Web',
    description: 'Ecosistema móvil de gestión institucional y deportiva. Arquitectura multi-rol con fixtures, formaciones, noticias, carnet digital interactivo, módulo de cuotas y tienda oficial.',
    challenge: 'Descoordinación en la comunicación interna, gestión de categorías ineficiente y cobranza manual.',
    result: 'Digitalización absoluta del club, agilizando el pago de cuotas y unificando la comunicación institucional.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Node.js', 'MercadoPago'],
    kpi: { value: '-80%', label: 'Cobranza manual' },
    image: appClubImg,
    url: 'https://temporary-brisk-cerulean-e6k12zr.vercel.app/',
  },
  {
    id: 'psicologa',
    title: 'Lic. Mayra Biondo — Psicóloga',
    category: 'Landing Page Clínica',
    description: 'Landing page de alta conversión para práctica clínica privada. Arquitectura de información estratégica, presentación de abordajes terapéuticos y canal de agenda directa.',
    challenge: 'Falta de presencia digital profesional que refleje la calidez y el rigor metodológico del consultorio.',
    result: 'Canal de adquisición de pacientes optimizado, carga instantánea y aumento exponencial de primeras consultas.',
    technologies: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS', 'WhatsApp API'],
    kpi: { value: '+180%', label: 'Consultas online' },
    image: psicoImg,
    url: 'https://mayrabiondopsicologa.vercel.app/',
  },
  {
    id: 'lumux',
    title: 'Lumux Detailing',
    category: 'Landing & Booking Premium',
    description: 'Plataforma web de captación para servicio de car detailing premium a domicilio. Cotizador interactivo según estado del vehículo, packs detallados y agenda rápida.',
    challenge: 'Pérdida de clientes potenciales por presupuestos lentos por chat sin estandarización.',
    result: 'Embudos de alta conversión con selección de pack en 3 pasos y agenda directa a domicilio.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'WhatsApp API'],
    kpi: { value: '+120%', label: 'Reservas confirmadas' },
    image: lumuxImg,
    url: 'https://car-detail-omega.vercel.app/',
  },
  {
    id: 'nova',
    title: 'NOVA Obras & Remodelación',
    category: 'Web Corporativa & Cotizador',
    description: 'Sitio institucional con cotizador interactivo de reformas integrales (durlock, pintura, impermeabilizaciones, cerámicos) y portfolio fotográfico antes/después.',
    challenge: 'Dificultad para calificar leads de obra y comunicar plazos de entrega y garantías de forma clara.',
    result: 'Automatización del primer filtro de cotización, duplicando los presupuestos viables aprobados.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    kpi: { value: '+150%', label: 'Presupuestos enviados' },
    image: novaImg,
    url: 'https://lp-remodelaciones.vercel.app/',
  },
  {
    id: 'celpe',
    title: 'Celpe-Bras Simulador',
    category: 'Plataforma EdTech',
    description: 'Plataforma de preparación para el examen oficial de proficiencia en portugués Celpe-Bras. Módulos interactivos de comprensión auditiva y escrita, reproductor de audio/video y temporizador de examen.',
    challenge: 'Los alumnos carecían de un entorno cronometrado que simule exactamente la estructura oficial de la prueba.',
    result: 'Experiencia inmersiva de entrenamiento que incrementa sustancialmente la tasa de aprobación de los candidatos.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Multimedia APIs'],
    kpi: { value: '98%', label: 'Precisión de simulación' },
    image: celpeImg,
    url: 'https://celpe.vercel.app/',
  },
  {
    id: 'victoria',
    title: 'Victoria Emefer — Cuidados',
    category: 'Salud & Enfermería',
    description: 'Landing page para equipo de profesionales de enfermería y cuidado domiciliario. Servicios por etapa vital, testimonios verificados y canal de atención urgente 24/7.',
    challenge: 'Construir confianza digital inmediata para familias que buscan cuidadores de adultos mayores y pacientes.',
    result: 'Tasa de retención superior y contacto inmediato de familias con requerimientos de guardia médica.',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'WhatsApp API'],
    kpi: { value: '+200%', label: 'Contactos directos' },
    image: victoriaImg,
    url: 'https://victoria-emefer.vercel.app/',
  },
  {
    id: 'nanda',
    title: 'Nanda Sacerdotisa',
    category: 'Terapias Holísticas & Cursos',
    description: 'Plataforma de marca personal para tarotista y terapeuta floral. Catálogo de rituales, reserva de sesiones personalizadas y difusión de talleres presenciales y online.',
    challenge: 'Gestión desordenada de turnos y pagos a través de múltiples canales sociales.',
    result: 'Centralización de servicios en un solo lugar con aumento significativo de alumnas en talleres.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Calendly API'],
    kpi: { value: '+250%', label: 'Alumnas y sesiones' },
    image: nandaImg,
    url: 'https://lp-nanda-sacerdotisa.vercel.app/',
  },
  {
    id: 'pollo',
    title: 'Granja El Trébol',
    category: 'E-commerce de Alimentos',
    description: 'Tienda digital de pedidos directos de pollos de campo y huevos frescos de granja. Carrito rápido optimizado para compras recurrentes vecinales y reparto domiciliario.',
    challenge: 'Tomar pedidos manualmente por WhatsApp causaba demoras y errores en la entrega diaria.',
    result: 'Canal de compra automática con confirmación en un click y reducción de errores de preparación a cero.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'WhatsApp Order Flow'],
    kpi: { value: '+40%', label: 'Pedidos semanales' },
    image: polloImg,
    url: 'https://demopolloyhuevo.vercel.app/',
  },
  {
    id: 'zb',
    title: 'Z&B Domótica & Industria',
    category: 'Automatización & IoT',
    description: 'Portal de soluciones de ingeniería en domótica residencial y automatización de procesos industriales. Telemetría de tableros, control unificado y arquitectura de control.',
    challenge: 'Comunicar servicios de alta complejidad técnica a clientes industriales y residenciales premium.',
    result: 'Posicionamiento como integrador tecnológico de referencia con cotizaciones de proyectos de gran escala.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js / 3D'],
    kpi: { value: '100%', label: 'Control centralizado' },
    image: zbImg,
    url: 'https://zb-three-pearl.vercel.app/',
  },
  {
    id: 'mundoguau',
    title: 'Mundo Guau',
    category: 'Veterinaria & Pet Shop',
    description: 'Sitio integral con agenda digital para peluquería canina, turnos veterinarios y tienda de accesorios y nutrición especializada.',
    challenge: 'Turnera telefónica saturada y pérdida de turnos por inasistencias sin recordatorios.',
    result: 'Digitalización del 90% de las reservas y venta cruzada de accesorios y alimentos en la misma visita.',
    technologies: ['React', 'Tailwind CSS', 'WhatsApp API'],
    kpi: { value: '+90%', label: 'Turnos autogestionados' },
    image: mundoGuauImg,
    url: 'https://mundo-guau.vercel.app/',
  },
  {
    id: 'nutri',
    title: 'Nutrición Integral +40',
    category: 'Landing & Método Nutricional',
    description: 'Landing page para método nutricional personalizado enfocado en mujeres de más de 40 años. Transformaciones verificadas, propuesta paso a paso y consulta inicial gratuita.',
    challenge: 'Poca claridad en la propuesta de valor y dificultad para generar confianza y agendamiento de primeras consultas.',
    result: 'Embudos de alta conversión con testimonios reales y agenda directa de consultas gratuitas.',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Calendly API'],
    kpi: { value: '+220%', label: 'Consultas agendadas' },
    image: nutriImg,
    url: 'https://nutricionista-lime-three.vercel.app/',
  },
];

export const portfolioStats = [
  { value: '15+', label: 'Proyectos entregados' },
  { value: '100%', label: 'A medida' },
  { value: '<1s', label: 'Tiempo de carga' },
  { value: '24h', label: 'Soporte técnico' },
];

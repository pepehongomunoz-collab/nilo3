export interface Service {
  id: string;
  index: string;
  title: string;
  description: string;
  capabilities: string[];
  technologies: string[];
}

export const services: Service[] = [
  {
    id: 'digital-products',
    index: '01',
    title: 'Productos Digitales',
    description: 'Diseñamos y construimos plataformas, apps y herramientas desde cero. Arquitectura sólida, interfaces impecables, experiencias que escalan.',
    capabilities: ['Diseño de producto', 'Desarrollo full-stack', 'UX/UI', 'Prototipado', 'Lanzamiento'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'custom-software',
    index: '02',
    title: 'Software a Medida',
    description: 'Sistemas internos, ERPs, CRMs y herramientas operativas diseñadas para tu flujo de trabajo. Software que se adapta a vos, no al revés.',
    capabilities: ['Análisis de procesos', 'Arquitectura', 'Desarrollo', 'Integración', 'Mantenimiento'],
    technologies: ['React', 'TypeScript', 'Node.js', 'REST APIs', 'PostgreSQL'],
  },
  {
    id: 'automation',
    index: '03',
    title: 'Automatización',
    description: 'Eliminamos tareas manuales y repetitivas. Workflows automáticos que liberan tiempo de tu equipo y reducen errores humanos.',
    capabilities: ['Mapeo de procesos', 'Integración de APIs', 'Workflows', 'Reportes automáticos', 'Alertas'],
    technologies: ['Node.js', 'Python', 'Zapier', 'Make', 'Cloud Functions'],
  },
  {
    id: 'integrations',
    index: '04',
    title: 'Integraciones',
    description: 'Conectamos tus plataformas para que hablen entre sí. ERPs, CRMs, pasarelas de pago, logistics — todo sincronizado.',
    capabilities: ['APIs REST/GraphQL', 'Webhooks', 'ETL', 'Sync bidireccional', 'Middleware'],
    technologies: ['REST APIs', 'GraphQL', 'Webhooks', 'AWS', 'Firebase'],
  },
  {
    id: 'applied-ai',
    index: '05',
    title: 'IA Aplicada',
    description: 'Integramos inteligencia artificial cuando realmente agrega valor. No por moda — por resultado. Chatbots, análisis predictivo, procesamiento de datos.',
    capabilities: ['Chatbots inteligentes', 'Análisis predictivo', 'NLP', 'Computer Vision', 'Automatización con IA'],
    technologies: ['OpenAI', 'LangChain', 'Python', 'TensorFlow', 'Vector DBs'],
  },
  {
    id: 'web-development',
    index: '06',
    title: 'Desarrollo Web',
    description: 'Sitios corporativos, e-commerce y landing pages con performance superior. Core Web Vitals en verde, diseño que convierte.',
    capabilities: ['Sitios corporativos', 'E-commerce', 'Landing pages', 'SEO técnico', 'Analytics'],
    technologies: ['React', 'Next.js', 'Tailwind', 'Shopify', 'Vite'],
  },
];

import type { Language } from '../context/LanguageContext';


export interface TranslationSchema {
  nav: {
    skip: string;
    aria: string;
    about: string;
    projects: string;
    services: string;
    process: string;
    contact: string;
    startProject: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    label: string;
    titlePart1: string;
    titlePart2: string;
    titlePart3: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    availableBadge: string;
  };
  manifesto: {
    phrase1: string;
    phrase2: string;
    phrase3: string;
    phrase4Part1: string;
    phrase4Part2: string;
  };
  cases: {
    label: string;
    title: string;
    subtitle: string;
    viewProject: string;
    challenge: string;
    result: string;
    items: Array<{
      id: string;
      title: string;
      category: string;
      description: string;
      challenge: string;
      result: string;
      kpiLabel: string;
    }>;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
  process: {
    label: string;
    title: string;
    subtitle: string;
    deliverablesLabel: string;
    steps: Array<{
      id: string;
      number: string;
      title: string;
      description: string;
      deliverables: string[];
    }>;
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    capabilitiesLabel: string;
    items: Array<{
      id: string;
      index: string;
      title: string;
      description: string;
      capabilities: string[];
    }>;
  };
  tech: {
    label: string;
    title: string;
    subtitle: string;
    categories: {
      frontend: string;
      backend: string;
      data: string;
      cloud: string;
      ai: string;
      mobile: string;
    };
  };
  numbers: {
    label: string;
    items: Array<{
      label: string;
    }>;
  };
  testimonials: {
    label: string;
    title: string;
    items: Array<{
      id: string;
      quote: string;
      author: string;
      role: string;
      company: string;
    }>;
  };
  cta: {
    headline: string;
    button: string;
  };
  contact: {
    label: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    emailFieldLabel: string;
    emailPlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    phoneFieldLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submitting: string;
    successMessage: string;
    errorMessage: string;
    rateLimitMessage: (seconds: number) => string;
  };
  footer: {
    statementLine1: string;
    statementLine2: string;
    description: string;
    servicesHeader: string;
    companyHeader: string;
    contactHeader: string;
    rights: string;
    privacy: string;
    terms: string;
    servicesLinks: string[];
  };
  floatingContact: {
    title: string;
    subtitle: string;
    whatsappButton: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  es: {
    nav: {
      skip: 'Saltar al contenido',
      aria: 'Navegación principal',
      about: 'Nosotros',
      projects: 'Proyectos',
      services: 'Servicios',
      process: 'Proceso',
      contact: 'Contacto',
      startProject: 'Iniciar proyecto',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
    },
    hero: {
      label: 'Partner Tecnológico',
      titlePart1: 'Creamos software que',
      titlePart2: 'impulsa empresas',
      titlePart3: 'al siguiente nivel.',
      subtitle: 'Diseñamos y construimos productos digitales de alto rendimiento con precisión de ingeniería y foco en resultados de negocio.',
      ctaPrimary: 'Iniciar proyecto',
      ctaSecondary: 'Ver proyectos',
      availableBadge: 'Disponibles para nuevos proyectos',
    },
    manifesto: {
      phrase1: 'No somos una agencia de diseño.',
      phrase2: 'No somos una software factory.',
      phrase3: 'Somos ingenieros de producto.',
      phrase4Part1: 'Transformamos ideas en',
      phrase4Part2: 'soluciones digitales.',
    },
    cases: {
      label: 'Casos de éxito',
      title: 'Proyectos destacados',
      subtitle: 'Soluciones a medida diseñadas para generar impacto real y escalabilidad comercial.',
      viewProject: 'Ver caso',
      challenge: 'El desafío',
      result: 'El resultado',
      items: [
        {
          id: 'eden',
          title: 'Lubricentro Eden',
          category: 'E-commerce & ERP',
          description: 'Plataforma integral B2B/B2C diseñada para automatizar la operación comercial. Incluye tienda digital interactiva, punto de venta (POS), gestión de inventario en tiempo real y un módulo financiero para la administración económica del negocio.',
          challenge: 'Operativa fragmentada entre ventas presenciales y digitales, con procesos administrativos y control de stock manuales.',
          result: 'Centralización operativa total, automatizando la facturación y reduciendo el tiempo de gestión administrativa.',
          kpiLabel: 'Operación centralizada',
        },
        {
          id: 'newbery',
          title: 'App Club Jorge Newbery',
          category: 'Aplicación Android',
          description: 'Ecosistema móvil de gestión institucional y deportiva. Arquitectura multi-rol (Directivos, Técnicos, Tutores, Jugadores) con acceso centralizado a fixtures, formaciones, noticias, y un sistema de carnet digital interactivo. Integra módulo de cobranzas y tienda oficial.',
          challenge: 'Descoordinación en la comunicación interna, gestión de categorías ineficiente y procesos de cobranza manuales.',
          result: 'Digitalización absoluta del club, agilizando el pago de cuotas y unificando la comunicación deportiva y administrativa.',
          kpiLabel: 'Roles integrados',
        },
        {
          id: 'psicologa',
          title: 'Landing Page Clínica',
          category: 'Landing Page',
          description: 'Landing page de alto rendimiento orientada a conversión. Arquitectura de información diseñada para destacar metodologías clínicas y servicios terapéuticos. Incluye integración fluida con canales de contacto y agenda.',
          challenge: 'Falta de presencia digital profesional que refleje la calidad de la metodología de trabajo.',
          result: 'Canal de adquisición digital optimizado, con tiempos de carga casi instantáneos y alta retención de usuarios.',
          kpiLabel: 'Tiempo de carga',
        },
      ],
      stats: [
        { value: '15+', label: 'Proyectos entregados' },
        { value: '100%', label: 'A medida' },
        { value: '<1s', label: 'Tiempo de carga' },
        { value: '24h', label: 'Soporte técnico' },
      ],
    },
    process: {
      label: 'Metodología',
      title: 'Cómo trabajamos',
      subtitle: 'Un proceso transparente e iterativo orientado a minimizar riesgos y acelerar el time-to-market.',
      deliverablesLabel: 'Entregables principales:',
      steps: [
        {
          id: 'discovery',
          number: '01',
          title: 'Descubrimiento',
          description: 'Entendemos el problema antes de proponer soluciones. Analizamos procesos, objetivos y restricciones.',
          deliverables: ['Brief validado', 'Scope definido', 'Timeline'],
        },
        {
          id: 'architecture',
          number: '02',
          title: 'Arquitectura',
          description: 'Diseñamos la estructura técnica, elegimos el stack y definimos la base sobre la que se construye todo.',
          deliverables: ['Stack definido', 'Arquitectura', 'Prototipos'],
        },
        {
          id: 'design',
          number: '03',
          title: 'Diseño',
          description: 'Interfaces que priorizan la experiencia del usuario. Cada pantalla tiene propósito y cada interacción tiene intención.',
          deliverables: ['UI/UX', 'Design system', 'Prototipo interactivo'],
        },
        {
          id: 'development',
          number: '04',
          title: 'Desarrollo',
          description: 'Código limpio, modular y escalable. Sprints cortos con entregas incrementales y feedback constante.',
          deliverables: ['Sprints semanales', 'Code reviews', 'CI/CD'],
        },
        {
          id: 'testing',
          number: '05',
          title: 'Testing',
          description: 'Cada feature se prueba antes de salir. Performance, accesibilidad, responsive y edge cases.',
          deliverables: ['QA manual', 'Tests automáticos', 'Performance audit'],
        },
        {
          id: 'launch',
          number: '06',
          title: 'Lanzamiento',
          description: 'Deploy a producción con monitoreo activo. Documentación completa y handoff detallado.',
          deliverables: ['Deploy', 'Documentación', 'Monitoreo'],
        },
        {
          id: 'evolution',
          number: '07',
          title: 'Evolución',
          description: 'El producto no termina en el launch. Iteramos basados en datos reales y feedback de usuarios.',
          deliverables: ['Analytics', 'Iteraciones', 'Soporte continuo'],
        },
      ],
    },
    services: {
      label: 'Capacidades',
      title: 'Lo que hacemos',
      subtitle: 'Construimos soluciones digitales completas de extremo a extremo.',
      capabilitiesLabel: 'Capacidades clave:',
      items: [
        {
          id: 'digital-products',
          index: '01',
          title: 'Productos Digitales',
          description: 'Diseñamos y construimos plataformas, apps y herramientas desde cero. Arquitectura sólida, interfaces impecables, experiencias que escalan.',
          capabilities: ['Diseño de producto', 'Desarrollo full-stack', 'UX/UI', 'Prototipado', 'Lanzamiento'],
        },
        {
          id: 'custom-software',
          index: '02',
          title: 'Software a Medida',
          description: 'Sistemas internos, ERPs, CRMs y herramientas operativas diseñadas para tu flujo de trabajo. Software que se adapta a vos, no al revés.',
          capabilities: ['Análisis de procesos', 'Arquitectura', 'Desarrollo', 'Integración', 'Mantenimiento'],
        },
        {
          id: 'automation',
          index: '03',
          title: 'Automatización',
          description: 'Eliminamos tareas manuales y repetitivas. Workflows automáticos que liberan tiempo de tu equipo y reducen errores humanos.',
          capabilities: ['Mapeo de procesos', 'Integración de APIs', 'Workflows', 'Reportes automáticos', 'Alertas'],
        },
        {
          id: 'integrations',
          index: '04',
          title: 'Integraciones',
          description: 'Conectamos tus plataformas para que hablen entre sí. ERPs, CRMs, pasarelas de pago, logistics — todo sincronizado.',
          capabilities: ['APIs REST/GraphQL', 'Webhooks', 'ETL', 'Sync bidireccional', 'Middleware'],
        },
        {
          id: 'applied-ai',
          index: '05',
          title: 'IA Aplicada',
          description: 'Integramos inteligencia artificial cuando realmente agrega valor. No por moda — por resultado. Chatbots, análisis predictivo, procesamiento de datos.',
          capabilities: ['Chatbots inteligentes', 'Análisis predictivo', 'NLP', 'Computer Vision', 'Automatización con IA'],
        },
        {
          id: 'web-development',
          index: '06',
          title: 'Desarrollo Web',
          description: 'Sitios corporativos, e-commerce y landing pages con performance superior. Core Web Vitals en verde, diseño que convierte.',
          capabilities: ['Sitios corporativos', 'E-commerce', 'Landing pages', 'SEO técnico', 'Analytics'],
        },
        {
          id: 'performance-marketing',
          index: '07',
          title: 'Publicidad Digital',
          description: 'Campañas de performance en Meta Ads orientadas a resultados. Estrategias de pauta digital que maximizan tu retorno de inversión y escalan tus ventas.',
          capabilities: ['Meta Ads', 'Performance Marketing', 'A/B Testing', 'Embudos de conversión'],
        },
      ],
    },
    tech: {
      label: 'Tecnología',
      title: 'Nuestro Stack Tecnológico',
      subtitle: 'Elegimos las mejores tecnologías modernas para garantizar rendimiento, seguridad y mantenibilidad.',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        data: 'Datos',
        cloud: 'Cloud & DevOps',
        ai: 'IA & ML',
        mobile: 'Mobile',
      },
    },
    numbers: {
      label: 'Resultados',
      items: [
        { label: 'Proyectos entregados' },
        { label: 'Desarrollo a medida' },
        { label: 'Lighthouse Score' },
        { label: 'Tiempo de respuesta' },
      ],
    },
    testimonials: {
      label: 'Testimonios',
      title: 'Lo que dicen de nosotros',
      items: [
        {
          id: '1',
          quote: 'Nilotech entendió nuestro problema antes de proponer una solución. El sistema que construyeron transformó nuestra operación.',
          author: 'Celide P.',
          role: 'Directora General',
          company: 'Club Jorge Newbery',
        },
        {
          id: '2',
          quote: 'No solo desarrollaron la tienda — nos ayudaron a pensar la estrategia digital completa. En 3 meses teníamos un canal que genera el 35% de nuestras ventas.',
          author: 'Jorge E.',
          role: 'Gerente Gral',
          company: 'Lubricentro Eden',
        },
        {
          id: '3',
          quote: 'La diferencia con otros proveedores es que Nilotech piensa como partner. No ejecutan — resuelven.',
          author: 'Mayra Biondo',
          role: 'Lic. en Psicología',
          company: 'Psicología Clínica',
        },
      ],
    },
    cta: {
      headline: 'Construyamos algo juntos.',
      button: 'Iniciar proyecto',
    },
    contact: {
      label: 'Contacto',
      titlePart1: 'Tu próximo producto',
      titlePart2: 'empieza acá.',
      subtitle: 'Contanos sobre tu proyecto. Analizamos tus necesidades y te respondemos en menos de 24 horas.',
      emailLabel: 'Email',
      phoneLabel: 'Teléfono',
      locationLabel: 'Ubicación',
      nameLabel: 'Nombre *',
      namePlaceholder: 'Tu nombre o el de tu empresa',
      emailFieldLabel: 'Email *',
      emailPlaceholder: 'tu@email.com',
      companyLabel: 'Empresa / Organización',
      companyPlaceholder: 'Nombre de tu empresa',
      phoneFieldLabel: 'Teléfono',
      phonePlaceholder: '+54 9 11 ...',
      messageLabel: '¿En qué te podemos ayudar? *',
      messagePlaceholder: 'Contanos sobre tu proyecto, objetivos, plazos o cualquier detalle relevante...',
      submitButton: 'Enviar mensaje',
      submitting: 'Enviando...',
      successMessage: '¡Mensaje enviado con éxito! Nos pondremos en contacto en breve.',
      errorMessage: 'Error al enviar. Intentá de nuevo o escribinos por WhatsApp.',
      rateLimitMessage: (sec: number) => `Por favor esperá ${sec} segundos antes de enviar otro mensaje.`,
    },
    footer: {
      statementLine1: 'Tecnología con propósito.',
      statementLine2: 'Resultados que importan.',
      description: 'Diseñamos y construimos productos digitales con precisión de ingeniería.',
      servicesHeader: 'Servicios',
      companyHeader: 'Empresa',
      contactHeader: 'Contacto',
      rights: 'Todos los derechos reservados.',
      privacy: 'Privacidad',
      terms: 'Términos',
      servicesLinks: [
        'Productos Digitales',
        'Software a Medida',
        'Automatización',
        'Integraciones',
        'IA Aplicada',
        'Publicidad Digital',
      ],
    },
    floatingContact: {
      title: 'Hablemos de tu proyecto',
      subtitle: 'Respuesta en menos de 2 horas laborables. Nivel ejecutivo garantizado.',
      whatsappButton: 'Contactar por WhatsApp',
    },
  },
  en: {
    nav: {
      skip: 'Skip to content',
      aria: 'Main navigation',
      about: 'About Us',
      projects: 'Projects',
      services: 'Services',
      process: 'Process',
      contact: 'Contact',
      startProject: 'Start a project',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    hero: {
      label: 'Technology Partner',
      titlePart1: 'We build software that',
      titlePart2: 'propels businesses',
      titlePart3: 'to the next level.',
      subtitle: 'We design and engineer high-performance digital products with engineering precision and focus on business results.',
      ctaPrimary: 'Start a project',
      ctaSecondary: 'View projects',
      availableBadge: 'Available for new projects',
    },
    manifesto: {
      phrase1: 'We are not a design agency.',
      phrase2: 'We are not a software factory.',
      phrase3: 'We are product engineers.',
      phrase4Part1: 'We transform ideas into',
      phrase4Part2: 'digital solutions.',
    },
    cases: {
      label: 'Success Stories',
      title: 'Featured Projects',
      subtitle: 'Tailored solutions designed to generate real impact and commercial scalability.',
      viewProject: 'View case',
      challenge: 'The Challenge',
      result: 'The Result',
      items: [
        {
          id: 'eden',
          title: 'Lubricentro Eden',
          category: 'E-commerce & ERP',
          description: 'Comprehensive B2B/B2C platform designed to automate commercial operations. Includes an interactive digital store, POS system, real-time inventory management, and a financial module.',
          challenge: 'Fragmented operations between in-person and digital sales, with manual administrative and stock control processes.',
          result: 'Total operational centralization, automating invoicing and reducing administrative management time.',
          kpiLabel: 'Centralized Operation',
        },
        {
          id: 'newbery',
          title: 'Jorge Newbery Club App',
          category: 'Android App',
          description: 'Mobile ecosystem for institutional and sports management. Multi-role architecture (Executives, Coaches, Tutors, Players) with centralized access to fixtures, digital membership card, and payments.',
          challenge: 'Lack of coordination in internal communication, inefficient category management, and manual fee collection processes.',
          result: 'Complete digitalization of the club, streamlining fee payments and unifying sports and administrative communication.',
          kpiLabel: 'Integrated Roles',
        },
        {
          id: 'psicologa',
          title: 'Clinical Landing Page',
          category: 'Landing Page',
          description: 'High-performance conversion-oriented landing page. Information architecture designed to showcase clinical methodologies and therapeutic services.',
          challenge: 'Lack of a professional digital presence reflecting the quality of the therapeutic methodology.',
          result: 'Optimized digital acquisition channel with near-instant load times and high user retention.',
          kpiLabel: 'Load time',
        },
      ],
      stats: [
        { value: '15+', label: 'Projects delivered' },
        { value: '100%', label: 'Custom built' },
        { value: '<1s', label: 'Load time' },
        { value: '24h', label: 'Technical support' },
      ],
    },
    process: {
      label: 'Methodology',
      title: 'How We Work',
      subtitle: 'A transparent and iterative process aimed at minimizing risk and accelerating time-to-market.',
      deliverablesLabel: 'Key deliverables:',
      steps: [
        {
          id: 'discovery',
          number: '01',
          title: 'Discovery',
          description: 'We understand the problem before proposing solutions. We analyze processes, goals, and constraints.',
          deliverables: ['Validated brief', 'Defined scope', 'Timeline'],
        },
        {
          id: 'architecture',
          number: '02',
          title: 'Architecture',
          description: 'We design the technical structure, select the stack, and define the core foundation for everything built.',
          deliverables: ['Defined stack', 'Architecture', 'Prototypes'],
        },
        {
          id: 'design',
          number: '03',
          title: 'Design',
          description: 'User-centric interfaces. Every screen has a purpose and every interaction has intent.',
          deliverables: ['UI/UX', 'Design system', 'Interactive prototype'],
        },
        {
          id: 'development',
          number: '04',
          title: 'Development',
          description: 'Clean, modular, and scalable code. Short sprints with incremental releases and continuous feedback.',
          deliverables: ['Weekly sprints', 'Code reviews', 'CI/CD'],
        },
        {
          id: 'testing',
          number: '05',
          title: 'Testing',
          description: 'Every feature is thoroughly tested. Performance, accessibility, responsiveness, and edge cases.',
          deliverables: ['Manual QA', 'Automated tests', 'Performance audit'],
        },
        {
          id: 'launch',
          number: '06',
          title: 'Launch',
          description: 'Production deployment with active monitoring. Complete documentation and detailed handoff.',
          deliverables: ['Deploy', 'Documentation', 'Monitoring'],
        },
        {
          id: 'evolution',
          number: '07',
          title: 'Evolution',
          description: 'The product does not end at launch. We iterate based on real data and user feedback.',
          deliverables: ['Analytics', 'Iterations', 'Ongoing support'],
        },
      ],
    },
    services: {
      label: 'Capabilities',
      title: 'What We Do',
      subtitle: 'We build complete, end-to-end digital solutions.',
      capabilitiesLabel: 'Key capabilities:',
      items: [
        {
          id: 'digital-products',
          index: '01',
          title: 'Digital Products',
          description: 'We design and build platforms, apps, and tools from scratch. Solid architecture, flawless interfaces, scalable experiences.',
          capabilities: ['Product design', 'Full-stack development', 'UX/UI', 'Prototyping', 'Launch'],
        },
        {
          id: 'custom-software',
          index: '02',
          title: 'Custom Software',
          description: 'Internal systems, ERPs, CRMs, and operational tools designed around your workflow. Software that adapts to you.',
          capabilities: ['Process analysis', 'Architecture', 'Development', 'Integration', 'Maintenance'],
        },
        {
          id: 'automation',
          index: '03',
          title: 'Automation',
          description: 'We eliminate manual and repetitive tasks. Automated workflows that free up team time and reduce human error.',
          capabilities: ['Process mapping', 'API integration', 'Workflows', 'Automated reports', 'Alerts'],
        },
        {
          id: 'integrations',
          index: '04',
          title: 'Integrations',
          description: 'We connect your platforms so they communicate seamlessly. ERPs, CRMs, payment gateways, logistics — synchronized.',
          capabilities: ['REST/GraphQL APIs', 'Webhooks', 'ETL', 'Bidirectional sync', 'Middleware'],
        },
        {
          id: 'applied-ai',
          index: '05',
          title: 'Applied AI',
          description: 'We integrate artificial intelligence where it truly adds value. Focus on results, not hype. Chatbots, predictive analytics, data processing.',
          capabilities: ['Smart chatbots', 'Predictive analytics', 'NLP', 'Computer Vision', 'AI automation'],
        },
        {
          id: 'web-development',
          index: '06',
          title: 'Web Development',
          description: 'Corporate websites, e-commerce, and landing pages with superior performance. Green Core Web Vitals, conversion-focused design.',
          capabilities: ['Corporate sites', 'E-commerce', 'Landing pages', 'Technical SEO', 'Analytics'],
        },
        {
          id: 'performance-marketing',
          index: '07',
          title: 'Digital Advertising',
          description: 'Performance campaigns on Meta Ads focused on ROI. Ad strategies that maximize returns and scale sales.',
          capabilities: ['Meta Ads', 'Performance Marketing', 'A/B Testing', 'Conversion funnels'],
        },
      ],
    },
    tech: {
      label: 'Technology',
      title: 'Our Tech Stack',
      subtitle: 'We select the best modern technologies to ensure performance, security, and maintainability.',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        data: 'Data',
        cloud: 'Cloud & DevOps',
        ai: 'AI & ML',
        mobile: 'Mobile',
      },
    },
    numbers: {
      label: 'Results',
      items: [
        { label: 'Projects delivered' },
        { label: 'Custom development' },
        { label: 'Lighthouse Score' },
        { label: 'Response time' },
      ],
    },
    testimonials: {
      label: 'Testimonials',
      title: 'What Clients Say',
      items: [
        {
          id: '1',
          quote: 'Nilotech understood our problem before suggesting a solution. The system they built transformed our entire operation.',
          author: 'Celide P.',
          role: 'General Director',
          company: 'Jorge Newbery Club',
        },
        {
          id: '2',
          quote: 'They did not just develop the online store — they helped us craft our entire digital strategy. Within 3 months it generated 35% of our total sales.',
          author: 'Jorge E.',
          role: 'General Manager',
          company: 'Lubricentro Eden',
        },
        {
          id: '3',
          quote: 'The difference with other vendors is that Nilotech thinks like a true partner. They do not just execute — they solve.',
          author: 'Mayra Biondo',
          role: 'Clinical Psychologist',
          company: 'Clinical Psychology',
        },
      ],
    },
    cta: {
      headline: 'Let\'s build something together.',
      button: 'Start a project',
    },
    contact: {
      label: 'Contact',
      titlePart1: 'Your next product',
      titlePart2: 'starts here.',
      subtitle: 'Tell us about your project. We analyze your requirements and respond within 24 hours.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      nameLabel: 'Name *',
      namePlaceholder: 'Your name or company name',
      emailFieldLabel: 'Email *',
      emailPlaceholder: 'you@company.com',
      companyLabel: 'Company / Organization',
      companyPlaceholder: 'Your company name',
      phoneFieldLabel: 'Phone',
      phonePlaceholder: '+1 ...',
      messageLabel: 'How can we help you? *',
      messagePlaceholder: 'Tell us about your project, goals, timelines or any relevant details...',
      submitButton: 'Send message',
      submitting: 'Sending...',
      successMessage: 'Message sent successfully! We will get in touch shortly.',
      errorMessage: 'Error sending message. Please try again or reach out via WhatsApp.',
      rateLimitMessage: (sec: number) => `Please wait ${sec} seconds before sending another message.`,
    },
    footer: {
      statementLine1: 'Technology with purpose.',
      statementLine2: 'Results that matter.',
      description: 'We design and build digital products with engineering precision.',
      servicesHeader: 'Services',
      companyHeader: 'Company',
      contactHeader: 'Contact',
      rights: 'All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms',
      servicesLinks: [
        'Digital Products',
        'Custom Software',
        'Automation',
        'Integrations',
        'Applied AI',
        'Digital Ads',
      ],
    },
    floatingContact: {
      title: 'Let\'s talk about your project',
      subtitle: 'Response within 2 business hours. Executive tier service guaranteed.',
      whatsappButton: 'Contact via WhatsApp',
    },
  },
  pt: {
    nav: {
      skip: 'Pular para o conteúdo',
      aria: 'Navegação principal',
      about: 'Sobre Nós',
      projects: 'Projetos',
      services: 'Serviços',
      process: 'Processo',
      contact: 'Contato',
      startProject: 'Iniciar projeto',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
    },
    hero: {
      label: 'Parceiro Tecnológico',
      titlePart1: 'Criamos software que',
      titlePart2: 'impulsa empresas',
      titlePart3: 'ao próximo nível.',
      subtitle: 'Projetamos e desenvolvemos produtos digitais de alto desempenho com precisão de engenharia e foco em resultados de negócios.',
      ctaPrimary: 'Iniciar projeto',
      ctaSecondary: 'Ver projetos',
      availableBadge: 'Disponível para novos projetos',
    },
    manifesto: {
      phrase1: 'Não somos uma agência de design.',
      phrase2: 'Não somos uma fábrica de software.',
      phrase3: 'Somos engenheiros de produto.',
      phrase4Part1: 'Transformamos ideias em',
      phrase4Part2: 'soluções digitais.',
    },
    cases: {
      label: 'Casos de Sucesso',
      title: 'Projetos Em Destaque',
      subtitle: 'Soluções sob medida desenvolvidas para gerar impacto real e escalabilidade comercial.',
      viewProject: 'Ver caso',
      challenge: 'O Desafio',
      result: 'O Resultado',
      items: [
        {
          id: 'eden',
          title: 'Lubricentro Eden',
          category: 'E-commerce & ERP',
          description: 'Plataforma abrangente B2B/B2C para automatizar a operação comercial. Inclui loja digital interativa, sistema de PDV, gestão de estoque em tempo real e módulo financeiro.',
          challenge: 'Operações fragmentadas entre vendas presenciais e digitais, com processos administrativos e controle de estoque manuais.',
          result: 'Centralização operacional total, automatizando o faturamento e reduzindo o tempo de gestão administrativa.',
          kpiLabel: 'Operação centralizada',
        },
        {
          id: 'newbery',
          title: 'App Club Jorge Newbery',
          category: 'Aplicativo Android',
          description: 'Ecossistema móvel para gestão institucional e esportiva. Arquitetura multi-função (Diretores, Técnicos, Tutores, Jogadores) com acesso centralizado a jogos, carteirinha digital e cobranças.',
          challenge: 'Falta de coordenação na comunicação interna, gestão ineficiente de categorias e cobrança manual de mensalidades.',
          result: 'Digitalização completa do clube, agilizando o pagamento de mensalidades e unificando a comunicação esportiva e administrativa.',
          kpiLabel: 'Funções integradas',
        },
        {
          id: 'psicologa',
          title: 'Landing Page Clínica',
          category: 'Landing Page',
          description: 'Landing page de alto desempenho orientada para conversão. Arquitetura de informação criada para destacar metodologias clínicas e serviços terapêuticos.',
          challenge: 'Falta de presença digital profissional que refletisse a qualidade da metodologia terapêutica.',
          result: 'Canal de aquisição digital otimizado, com tempos de carregamento quase instantâneos e alta retenção de usuários.',
          kpiLabel: 'Tempo de carga',
        },
      ],
      stats: [
        { value: '15+', label: 'Projetos entregues' },
        { value: '100%', label: 'Sob medida' },
        { value: '<1s', label: 'Tempo de carga' },
        { value: '24h', label: 'Suporte técnico' },
      ],
    },
    process: {
      label: 'Metodologia',
      title: 'Como Trabalhamos',
      subtitle: 'Um processo transparente e iterativo focado em minimizar riscos e acelerar o time-to-market.',
      deliverablesLabel: 'Principais entregáveis:',
      steps: [
        {
          id: 'discovery',
          number: '01',
          title: 'Descoberta',
          description: 'Entendemos o problema antes de propor soluções. Analisamos processos, objetivos e restrições.',
          deliverables: ['Briefing validado', 'Escopo definido', 'Cronograma'],
        },
        {
          id: 'architecture',
          number: '02',
          title: 'Arquitetura',
          description: 'Desenhamos a estrutura técnica, escolhemos a tecnologia e definimos a base sobre a qual tudo é construído.',
          deliverables: ['Tecnologias definidas', 'Arquitetura', 'Protótipos'],
        },
        {
          id: 'design',
          number: '03',
          title: 'Design',
          description: 'Interfaces focadas na experiência do usuário. Cada tela tem um propósito e cada interação uma intenção.',
          deliverables: ['UI/UX', 'Design system', 'Protótipo interativo'],
        },
        {
          id: 'development',
          number: '04',
          title: 'Desenvolvimento',
          description: 'Código limpo, modular e escalável. Sprints curtos com entregas incrementais e feedback contínuo.',
          deliverables: ['Sprints semanais', 'Code reviews', 'CI/CD'],
        },
        {
          id: 'testing',
          number: '05',
          title: 'Testes',
          description: 'Cada funcionalidade é exaustivamente testada. Desempenho, acessibilidade, responsividade e casos de borda.',
          deliverables: ['QA manual', 'Testes automáticos', 'Auditoria de performance'],
        },
        {
          id: 'launch',
          number: '06',
          title: 'Lançamento',
          description: 'Publicação em produção com monitoramento ativo. Documentação completa e entrega detalhada.',
          deliverables: ['Deploy', 'Documentação', 'Monitoramento'],
        },
        {
          id: 'evolution',
          number: '07',
          title: 'Evolução',
          description: 'O produto não termina no lançamento. Iteramos com base em dados reais e feedback dos usuários.',
          deliverables: ['Analytics', 'Iterações', 'Suporte contínuo'],
        },
      ],
    },
    services: {
      label: 'Capacidades',
      title: 'O Que Fazemos',
      subtitle: 'Construímos soluções digitais completas de ponta a ponta.',
      capabilitiesLabel: 'Principais capacidades:',
      items: [
        {
          id: 'digital-products',
          index: '01',
          title: 'Produtos Digitais',
          description: 'Projetamos e construímos plataformas, aplicativos e ferramentas do zero. Arquitetura sólida, interfaces impecáveis, experiências escaláveis.',
          capabilities: ['Design de produto', 'Desenvolvimento full-stack', 'UX/UI', 'Prototipagem', 'Lançamento'],
        },
        {
          id: 'custom-software',
          index: '02',
          title: 'Software Sob Medida',
          description: 'Sistemas internos, ERPs, CRMs e ferramentas operacionais projetadas para o seu fluxo de trabalho. Software que se adapta a você.',
          capabilities: ['Análise de processos', 'Arquitetura', 'Desenvolvimento', 'Integração', 'Manutenção'],
        },
        {
          id: 'automation',
          index: '03',
          title: 'Automação',
          description: 'Eliminamos tarefas manuais e repetitivas. Fluxos automáticos que liberam tempo da sua equipe e reduzem erros humanos.',
          capabilities: ['Mapeamento de processos', 'Integração de APIs', 'Workflows', 'Relatórios automáticos', 'Alertas'],
        },
        {
          id: 'integrations',
          index: '04',
          title: 'Integrações',
          description: 'Conectamos suas plataformas para que se comuniquem perfeitamente. ERPs, CRMs, gateways de pagamento, logística — tudo sincronizado.',
          capabilities: ['APIs REST/GraphQL', 'Webhooks', 'ETL', 'Sincronização bidirecional', 'Middleware'],
        },
        {
          id: 'applied-ai',
          index: '05',
          title: 'IA Aplicada',
          description: 'Integramos inteligência artificial quando ela realmente agrega valor. Foco em resultados reais. Chatbots, análise preditiva, processamento de dados.',
          capabilities: ['Chatbots inteligentes', 'Análise preditiva', 'NLP', 'Visão Computacional', 'Automação com IA'],
        },
        {
          id: 'web-development',
          index: '06',
          title: 'Desenvolvimento Web',
          description: 'Sites corporativos, e-commerce e landing pages com desempenho superior. Core Web Vitals no verde, design focado em conversão.',
          capabilities: ['Sites corporativos', 'E-commerce', 'Landing pages', 'SEO técnico', 'Analytics'],
        },
        {
          id: 'performance-marketing',
          index: '07',
          title: 'Publicidade Digital',
          description: 'Campanhas de performance no Meta Ads focadas em resultados. Estratégias que maximizam seu retorno sobre o investimento e escalam vendas.',
          capabilities: ['Meta Ads', 'Performance Marketing', 'Testes A/B', 'Funis de conversão'],
        },
      ],
    },
    tech: {
      label: 'Tecnologia',
      title: 'Nosso Stack Tecnológico',
      subtitle: 'Selecionamos as melhores tecnologias modernas para garantir desempenho, segurança e fácil manutenção.',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        data: 'Dados',
        cloud: 'Cloud & DevOps',
        ai: 'IA & ML',
        mobile: 'Mobile',
      },
    },
    numbers: {
      label: 'Resultados',
      items: [
        { label: 'Projetos entregues' },
        { label: 'Desenvolvimento sob medida' },
        { label: 'Lighthouse Score' },
        { label: 'Tempo de resposta' },
      ],
    },
    testimonials: {
      label: 'Depoimentos',
      title: 'O Que Dizem Sobre Nós',
      items: [
        {
          id: '1',
          quote: 'A Nilotech entendeu nosso problema antes de propor uma solução. O sistema construído transformou nossa operação.',
          author: 'Celide P.',
          role: 'Diretora Geral',
          company: 'Club Jorge Newbery',
        },
        {
          id: '2',
          quote: 'Não apenas desenvolveram a loja — nos ajudaram a pensar a estratégia digital completa. Em 3 meses, o canal gerava 35% das nossas vendas.',
          author: 'Jorge E.',
          role: 'Gerente Geral',
          company: 'Lubricentro Eden',
        },
        {
          id: '3',
          quote: 'A diferença em relação a outros fornecedores é que a Nilotech pensa como parceira. Não apenas executam — eles resolvem.',
          author: 'Mayra Biondo',
          role: 'Psicóloga Clínica',
          company: 'Psicologia Clínica',
        },
      ],
    },
    cta: {
      headline: 'Vamos construir algo juntos.',
      button: 'Iniciar projeto',
    },
    contact: {
      label: 'Contato',
      titlePart1: 'Seu próximo produto',
      titlePart2: 'começa aqui.',
      subtitle: 'Fale conosco sobre o seu projeto. Analisamos suas necessidades e respondemos em menos de 24 horas.',
      emailLabel: 'Email',
      phoneLabel: 'Telefone',
      locationLabel: 'Localização',
      nameLabel: 'Nome *',
      namePlaceholder: 'Seu nome ou da sua empresa',
      emailFieldLabel: 'Email *',
      emailPlaceholder: 'voce@empresa.com',
      companyLabel: 'Empresa / Organização',
      companyPlaceholder: 'Nome da sua empresa',
      phoneFieldLabel: 'Telefone',
      phonePlaceholder: '+55 11 ...',
      messageLabel: 'Como podemos ajudar? *',
      messagePlaceholder: 'Fale sobre o seu projeto, objetivos, prazos ou qualquer detalhe relevante...',
      submitButton: 'Enviar mensagem',
      submitting: 'Enviando...',
      successMessage: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      errorMessage: 'Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.',
      rateLimitMessage: (sec: number) => `Aguarde ${sec} segundos antes de enviar outra mensagem.`,
    },
    footer: {
      statementLine1: 'Tecnologia com propósito.',
      statementLine2: 'Resultados que importam.',
      description: 'Projetamos e construímos produtos digitais com precisão de engenharia.',
      servicesHeader: 'Serviços',
      companyHeader: 'Empresa',
      contactHeader: 'Contato',
      rights: 'Todos os direitos reservados.',
      privacy: 'Privacidade',
      terms: 'Termos',
      servicesLinks: [
        'Produtos Digitais',
        'Software Sob Medida',
        'Automação',
        'Integrações',
        'IA Aplicada',
        'Publicidade Digital',
      ],
    },
    floatingContact: {
      title: 'Vamos falar sobre o seu projeto',
      subtitle: 'Resposta em menos de 2 horas úteis. Garantia de atendimento executivo.',
      whatsappButton: 'Contatar via WhatsApp',
    },
  },
};

export function getTranslation(lang: Language): TranslationSchema {
  return translations[lang] || translations.es;
}

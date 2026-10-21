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
    support: string;
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
    scrollHint: string;
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
  faq: {
    label: string;
    title: string;
    items: Array<{
      id: string;
      question: string;
      answer: string;
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
    serviceFieldLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submitting: string;
    successMessage: string;
    errorMessage: string;
    // Inline validation messages
    nameErrorRequired: string;
    nameErrorShort: string;
    emailErrorRequired: string;
    emailErrorInvalid: string;
    messageErrorRequired: string;
    messageErrorShort: string;
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
      support: 'Soporte',
      startProject: 'Iniciar proyecto',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
    },
    hero: {
      label: 'Partner Tecnológico',
      titlePart1: 'Software a medida que',
      titlePart2: 'reduce costos y',
      titlePart3: 'automatiza tu operativa.',
      subtitle: 'Diseñamos y construimos sistemas que eliminan tareas manuales, conectan tus plataformas y medimos el impacto en tu negocio. ROI verificable.',
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
      subtitle: 'Soluciones reales diseñadas para generar impacto medible y escalabilidad comercial.',
      viewProject: 'Visitar sitio web',
      challenge: 'El desafío',
      result: 'El resultado',
      items: [
        {
          id: 'esi',
          title: 'ESI en Secundaria',
          category: 'Plataforma Educativa & E-learning',
          description: 'Portal educativo de contenidos y recursos didácticos para docentes y escuelas. Catálogo digital, artículos de blog, cuadernillos descargables y tienda online integrada.',
          challenge: 'Falta de centralización de material pedagógico actualizado y venta manual desorganizada de recursos.',
          result: 'Distribución digital automatizada de contenidos educativos con miles de docentes activos.',
          kpiLabel: 'Docentes activos',
        },
        {
          id: 'newbery',
          title: 'App Club Jorge Newbery',
          category: 'Aplicación Android & Web',
          description: 'Ecosistema móvil de gestión institucional y deportiva. Arquitectura multi-rol con fixtures, formaciones, noticias, carnet digital interactivo, módulo de cuotas y tienda oficial.',
          challenge: 'Descoordinación en la comunicación interna, gestión de categorías ineficiente y cobranza manual.',
          result: 'Digitalización absoluta del club, agilizando el pago de cuotas y unificando la comunicación institucional.',
          kpiLabel: 'Cobranza manual',
        },
        {
          id: 'psicologa',
          title: 'Lic. Mayra Biondo — Psicóloga',
          category: 'Landing Page Clínica',
          description: 'Landing page de alta conversión para práctica clínica privada. Arquitectura de información estratégica, presentación de abordajes terapéuticos y canal de agenda directa.',
          challenge: 'Falta de presencia digital profesional que refleje la calidez y el rigor metodológico del consultorio.',
          result: 'Canal de adquisición de pacientes optimizado, carga instantánea y aumento exponencial de primeras consultas.',
          kpiLabel: 'Consultas online',
        },
        {
          id: 'lumux',
          title: 'Lumux Detailing',
          category: 'Landing & Booking Premium',
          description: 'Plataforma web de captación para servicio de car detailing premium a domicilio. Cotizador interactivo según estado del vehículo, packs detallados y agenda rápida.',
          challenge: 'Pérdida de clientes potenciales por presupuestos lentos por chat sin estandarización.',
          result: 'Embudos de alta conversión con selección de pack en 3 pasos y agenda directa a domicilio.',
          kpiLabel: 'Reservas confirmadas',
        },
        {
          id: 'nova',
          title: 'NOVA Obras & Remodelación',
          category: 'Web Corporativa & Cotizador',
          description: 'Sitio institucional con cotizador interactivo de reformas integrales (durlock, pintura, impermeabilizaciones, cerámicos) y portfolio fotográfico antes/después.',
          challenge: 'Dificultad para calificar leads de obra y comunicar plazos de entrega y garantías de forma clara.',
          result: 'Automatización del primer filtro de cotización, duplicando los presupuestos viables aprobados.',
          kpiLabel: 'Presupuestos enviados',
        },
        {
          id: 'celpe',
          title: 'Celpe-Bras Simulador',
          category: 'Plataforma EdTech',
          description: 'Plataforma de preparación para el examen oficial de proficiencia en portugués Celpe-Bras. Módulos interactivos de comprensión auditiva y escrita, reproductor de audio/video y temporizador de examen.',
          challenge: 'Los alumnos carecían de un entorno cronometrado que simule exactamente la estructura oficial de la prueba.',
          result: 'Experiencia inmersiva de entrenamiento que incrementa sustancialmente la tasa de aprobación de los candidatos.',
          kpiLabel: 'Precisión de simulación',
        },
        {
          id: 'victoria',
          title: 'Victoria Emefer — Cuidados',
          category: 'Salud & Enfermería',
          description: 'Landing page para equipo de profesionales de enfermería y cuidado domiciliario. Servicios por etapa vital, testimonios verificados y canal de atención urgente 24/7.',
          challenge: 'Construir confianza digital inmediata para familias que buscan cuidadores de adultos mayores y pacientes.',
          result: 'Tasa de retención superior y contacto inmediato de familias con requerimientos de guardia médica.',
          kpiLabel: 'Contactos directos',
        },
        {
          id: 'nanda',
          title: 'Nanda Sacerdotisa',
          category: 'Terapias Holísticas & Cursos',
          description: 'Plataforma de marca personal para tarotista y terapeuta floral. Catálogo de rituales, reserva de sesiones personalizadas y difusión de talleres presenciales y online.',
          challenge: 'Gestión desordenada de turnos y pagos a través de múltiples canales sociales.',
          result: 'Centralización de servicios en un solo lugar con aumento significativo de alumnas en talleres.',
          kpiLabel: 'Alumnas y sesiones',
        },
        {
          id: 'pollo',
          title: 'Granja El Trébol',
          category: 'E-commerce de Alimentos',
          description: 'Tienda digital de pedidos directos de pollos de campo y huevos frescos de granja. Carrito rápido optimizado para compras recurrentes vecinales y reparto domiciliario.',
          challenge: 'Tomar pedidos manualmente por WhatsApp causaba demoras y errores en la entrega diaria.',
          result: 'Canal de compra automática con confirmación en un click y reducción de errores de preparación a cero.',
          kpiLabel: 'Pedidos semanales',
        },
        {
          id: 'zb',
          title: 'Z&B Domótica & Industria',
          category: 'Automatización & IoT',
          description: 'Portal de soluciones de ingeniería en domótica residencial y automatización de procesos industriales. Telemetría de tableros, control unificado y arquitectura de control.',
          challenge: 'Comunicar servicios de alta complejidad técnica a clientes industriales y residenciales premium.',
          result: 'Posicionamiento como integrador tecnológico de referencia con cotizaciones de proyectos de gran escala.',
          kpiLabel: 'Control centralizado',
        },
        {
          id: 'mundoguau',
          title: 'Mundo Guau',
          category: 'Veterinaria & Pet Shop',
          description: 'Sitio integral con agenda digital para peluquería canina, turnos veterinarios y tienda de accesorios y nutrición especializada.',
          challenge: 'Turnera telefónica saturada y pérdida de turnos por inasistencias sin recordatorios.',
          result: 'Digitalización del 90% de las reservas y venta cruzada de accesorios y alimentos en la misma visita.',
          kpiLabel: 'Turnos autogestionados',
        },
        {
          id: 'nutri',
          title: 'Nutrición Integral +40',
          category: 'Landing & Método Nutricional',
          description: 'Landing page para método nutricional personalizado enfocado en mujeres de más de 40 años. Transformaciones verificadas, propuesta paso a paso y consulta inicial gratuita.',
          challenge: 'Poca claridad en la propuesta de valor y dificultad para generar confianza y agendamiento de primeras consultas.',
          result: 'Embudos de alta conversión con testimonios reales y agenda directa de consultas gratuitas.',
          kpiLabel: 'Consultas agendadas',
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
      scrollHint: 'Desplazá para explorar',
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
    faq: {
      label: 'Preguntas frecuentes',
      title: 'Antes de escribirnos, quizá te preguntás esto',
      items: [
        {
          id: 'price',
          question: '¿Cuánto cuesta un proyecto de software a medida?',
          answer: 'El costo se define con presupuesto cerrado antes de iniciar el desarrollo, variando según el alcance técnico, las integraciones y los plazos requeridos. La estimación inicial es 100% gratuita. Garantizamos una inversión fija sin horas adicionales ni costos ocultos, permitiendo previsibilidad financiera total para tu empresa.',
        },
        {
          id: 'timeline',
          question: '¿En cuánto tiempo está listo un MVP funcionando?',
          answer: 'Un MVP funcional y listo para producción se entrega entre 6 y 12 semanas, con avances tangibles testeables desde la segunda semana. Trabajamos con sprints ágiles de 7 días y entregas incrementales, asegurando un time-to-market acelerado sin esperar meses para validar el producto.',
        },
        {
          id: 'quality',
          question: '¿Por qué Nilotech y no una software factory tradicional?',
          answer: 'Garantizamos atención técnica directa con ingenieros senior estables de inicio a fin, sin rotación de desarrolladores ni tercerización a perfiles junior. Hablás directo con quien escribe tu código y contás con soporte post-lanzamiento con respuesta garantizada en menos de 24 horas.',
        },
        {
          id: 'ownership',
          question: '¿Quién es el dueño del código fuente y la infraestructura?',
          answer: 'El cliente es 100% propietario del código fuente, la propiedad intelectual y la infraestructura cloud desde el primer día. Entregamos repositorios Git completos, documentación técnica, pruebas automatizadas y despliegue sin ataduras ni costos recurrentes de licencias propietarias.',
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
      serviceFieldLabel: 'Servicio',
      messageLabel: '¿En qué te podemos ayudar? *',
      messagePlaceholder: 'Contanos sobre tu proyecto, objetivos, plazos o cualquier detalle relevante...',
      submitButton: 'Enviar mensaje',
      submitting: 'Enviando...',
      successMessage: '¡Mensaje enviado con éxito! Nos pondremos en contacto en breve.',
      errorMessage: 'Error al enviar. Intentá de nuevo o escribinos por WhatsApp.',
      nameErrorRequired: 'El nombre es obligatorio.',
      nameErrorShort: 'El nombre es demasiado corto.',
      emailErrorRequired: 'El email es obligatorio.',
      emailErrorInvalid: 'Ingresá un email válido.',
      messageErrorRequired: 'Contanos sobre tu proyecto.',
      messageErrorShort: 'Agregá un poco más de detalle.',
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
        'Desarrollo Web',
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
      support: 'Support',
      startProject: 'Start a project',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    hero: {
      label: 'Technology Partner',
      titlePart1: 'Custom software that',
      titlePart2: 'cuts costs and',
      titlePart3: 'automates your operations.',
      subtitle: 'We design and build systems that eliminate manual work, connect your platforms and let us measure the business impact. Verifiable ROI.',
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
      subtitle: 'Real solutions designed to deliver measurable impact and commercial scalability.',
      viewProject: 'Visit live site',
      challenge: 'The Challenge',
      result: 'The Result',
      items: [
        {
          id: 'esi',
          title: 'ESI en Secundaria',
          category: 'Educational & E-learning Platform',
          description: 'Educational portal for teaching materials and lesson plans. Digital catalog, pedagogical blog, downloadable workbooks, and integrated digital store.',
          challenge: 'Fragmented teaching resources and disorganized manual distribution of lesson materials.',
          result: 'Automated distribution of educational content serving thousands of active teachers.',
          kpiLabel: 'Active educators',
        },
        {
          id: 'newbery',
          title: 'Jorge Newbery Club App',
          category: 'Android & Web App',
          description: 'Mobile ecosystem for institutional and sports management. Multi-role architecture with fixtures, rosters, news, interactive digital membership ID, fee collection, and official store.',
          challenge: 'Lack of coordination in internal communication, inefficient category management, and manual fee collection processes.',
          result: 'Complete digitalization of the club, streamlining fee payments and unifying institutional communication.',
          kpiLabel: 'Manual collections',
        },
        {
          id: 'psicologa',
          title: 'Lic. Mayra Biondo — Psychologist',
          category: 'Clinical Landing Page',
          description: 'High-performance conversion-oriented landing page for private clinical practice. Strategic information architecture, clinical methodologies showcase, and direct scheduling channel.',
          challenge: 'Lack of a professional digital presence reflecting the quality and methodological rigor of the practice.',
          result: 'Optimized patient acquisition channel with instant load times and exponential growth in new patient inquiries.',
          kpiLabel: 'Online inquiries',
        },
        {
          id: 'lumux',
          title: 'Lumux Detailing',
          category: 'Landing & Booking Premium',
          description: 'High-conversion acquisition platform for mobile premium car detailing. Interactive package estimator based on vehicle condition and instant booking flow.',
          challenge: 'Lost leads caused by slow, unstandardized chat-based manual quoting.',
          result: 'High-converting funnel with 3-step package selection and direct on-site booking.',
          kpiLabel: 'Confirmed bookings',
        },
        {
          id: 'nova',
          title: 'NOVA Works & Remodeling',
          category: 'Corporate Web & Estimator',
          description: 'Corporate website featuring an interactive quoting tool for comprehensive home renovations (drywall, painting, waterproofing, tile work) and before/after gallery.',
          challenge: 'Difficulty qualifying construction leads and communicating delivery deadlines and warranties clearly.',
          result: 'Automated initial qualification, doubling the number of viable approved estimates.',
          kpiLabel: 'Quotes delivered',
        },
        {
          id: 'celpe',
          title: 'Celpe-Bras Simulator',
          category: 'EdTech Platform',
          description: 'Preparation platform for the official Celpe-Bras Portuguese proficiency exam. Interactive listening and writing modules, audio/video player, and exam timer.',
          challenge: 'Students lacked a timed practice environment replicating the official exam structure.',
          result: 'Immersive simulation platform substantially improving student pass rates.',
          kpiLabel: 'Simulation accuracy',
        },
        {
          id: 'victoria',
          title: 'Victoria Emefer — Healthcare',
          category: 'Healthcare & Nursing',
          description: 'Landing page for home healthcare and nursing professionals. Age-stage specialized services, verified testimonials, and 24/7 urgent contact channel.',
          challenge: 'Building immediate digital trust with families seeking care for elderly and recovering patients.',
          result: 'Higher retention rate and instant connection with families requiring care services.',
          kpiLabel: 'Direct contacts',
        },
        {
          id: 'nanda',
          title: 'Nanda Sacerdotisa',
          category: 'Holistic & Courses',
          description: 'Personal brand platform for tarot reader and flower essence therapist. Ritual catalog, 1-on-1 booking, and online/in-person workshops hub.',
          challenge: 'Scattered bookings and payment management across multiple social channels.',
          result: 'Unified service hub generating significant growth in workshop enrollments.',
          kpiLabel: 'Students & sessions',
        },
        {
          id: 'pollo',
          title: 'Granja El Trébol',
          category: 'Food E-commerce',
          description: 'Direct digital ordering store for free-range poultry and farm-fresh eggs. Fast checkout tailored for local recurring purchases and home delivery.',
          challenge: 'Taking orders manually over WhatsApp caused daily fulfillment delays and errors.',
          result: 'One-click automated order stream with zero daily fulfillment errors.',
          kpiLabel: 'Weekly orders',
        },
        {
          id: 'zb',
          title: 'Z&B Home Automation & Industry',
          category: 'Automation & IoT',
          description: 'Engineering solutions portal for residential home automation and industrial process control. Control panel telemetry, unified dashboards, and IoT architecture.',
          challenge: 'Communicating high-complexity engineering solutions to premium residential and industrial clients.',
          result: 'Positioned as the leading technological integrator with large-scale contract bids.',
          kpiLabel: 'Unified control',
        },
        {
          id: 'mundoguau',
          title: 'Mundo Guau',
          category: 'Veterinary & Pet Shop',
          description: 'Full-featured pet care platform with digital booking for grooming, veterinary appointments, and specialized pet nutrition store.',
          challenge: 'Overloaded phone scheduling and lost appointments from unconfirmed bookings.',
          result: '90% of bookings self-managed online, driving cross-sales during clinic visits.',
          kpiLabel: 'Self-scheduled visits',
        },
        {
          id: 'nutri',
          title: 'Integral Nutrition +40',
          category: 'Health & Nutrition Landing',
          description: 'High-converting landing page for a personalized nutrition method tailored to women over 40. Verified transformations, structured plan overview, and free initial consultation funnel.',
          challenge: 'Lack of brand positioning and friction in booking initial evaluation calls.',
          result: 'Optimized conversion funnel with real client stories and automated calendar scheduling.',
          kpiLabel: 'Booked consultations',
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
      scrollHint: 'Scroll to explore',
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
    faq: {
      label: 'FAQ',
      title: 'Before reaching out, you might be wondering',
      items: [
        {
          id: 'price',
          question: 'How much does a custom software project cost?',
          answer: 'Project costs are established with a fixed-price contract prior to kickoff, determined by technical scope, integrations, and target milestones. Initial scoping and architecture estimates are 100% free with zero hidden hourly fees or budget surprises, giving your business complete financial predictability.',
        },
        {
          id: 'timeline',
          question: 'How quickly can our software be deployed to production?',
          answer: 'A production-ready MVP typically launches within 6 to 12 weeks, with interactive testable releases delivered starting from week two. We operate on 7-day agile sprints with weekly demos and continuous deployment to maximize time-to-market.',
        },
        {
          id: 'quality',
          question: 'Why choose Nilotech over a large software factory?',
          answer: 'We provide dedicated senior engineering leadership from start to finish, eliminating developer turnover and junior handoffs. Clients communicate directly with technical decision-makers and receive post-launch SLA support in under 24 hours.',
        },
        {
          id: 'ownership',
          question: 'Who owns the source code and cloud infrastructure?',
          answer: 'You maintain 100% ownership of all source code, intellectual property, and cloud accounts from day one. We deliver clean Git repositories, technical documentation, automated test suites, and zero proprietary lock-in or recurring vendor licensing fees.',
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
      serviceFieldLabel: 'Service',
      messageLabel: 'How can we help you? *',
      messagePlaceholder: 'Tell us about your project, goals, timelines or any relevant details...',
      submitButton: 'Send message',
      submitting: 'Sending...',
      successMessage: 'Message sent successfully! We will get in touch shortly.',
      errorMessage: 'Error sending message. Please try again or reach out via WhatsApp.',
      nameErrorRequired: 'Name is required.',
      nameErrorShort: 'Name is too short.',
      emailErrorRequired: 'Email is required.',
      emailErrorInvalid: 'Please enter a valid email.',
      messageErrorRequired: 'Tell us about your project.',
      messageErrorShort: 'Please add a little more detail.',
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
        'Web Development',
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
      support: 'Suporte',
      startProject: 'Iniciar projeto',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
    },
    hero: {
      label: 'Parceiro Tecnológico',
      titlePart1: 'Software sob medida que',
      titlePart2: 'reduz custos e',
      titlePart3: 'automatiza sua operação.',
      subtitle: 'Projetamos e construímos sistemas que eliminam trabalho manual, conectam suas plataformas e medem o impacto no negócio. ROI verificável.',
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
      subtitle: 'Soluções reais desenvolvidas para gerar impacto mensurável e escalabilidade comercial.',
      viewProject: 'Visitar site',
      challenge: 'O Desafio',
      result: 'O Resultado',
      items: [
        {
          id: 'esi',
          title: 'ESI en Secundaria',
          category: 'Plataforma Educativa & E-learning',
          description: 'Portal educacional de conteúdos e materiais pedagógicos para professores e escolas. Catálogo digital, artigos de blog, apostilas para download e loja integrada.',
          challenge: 'Materiais pedagógicos descentralizados e distribuição manual desorganizada de recursos escolares.',
          result: 'Distribuição digital automatizada de materiais didáticos para milhares de educadores ativos.',
          kpiLabel: 'Professores ativos',
        },
        {
          id: 'newbery',
          title: 'App Club Jorge Newbery',
          category: 'Aplicativo Android & Web',
          description: 'Ecossistema móvel para gestão institucional e esportiva. Arquitetura multi-função com acesso centralizado a jogos, carteirinha digital, mensalidades e loja oficial.',
          challenge: 'Falta de coordenação na comunicação interna, gestão ineficiente de categorias e cobrança manual de mensalidades.',
          result: 'Digitalização completa do clube, agilizando o pagamento de mensalidades e unificando a comunicação institucional.',
          kpiLabel: 'Cobrança manual',
        },
        {
          id: 'psicologa',
          title: 'Lic. Mayra Biondo — Psicóloga',
          category: 'Landing Page Clínica',
          description: 'Landing page de alto desempenho orientada para conversão para consultório clínico. Arquitetura estratégica, metodologias terapêuticas e agendamento direto.',
          challenge: 'Falta de presença digital profissional que refletisse a qualidade da metodologia terapêutica.',
          result: 'Canal de aquisição otimizado, com tempos de carregamento instantâneos e alta taxa de novas consultas.',
          kpiLabel: 'Consultas online',
        },
        {
          id: 'lumux',
          title: 'Lumux Detailing',
          category: 'Landing & Booking Premium',
          description: 'Plataforma de captação para car detailing premium em domicílio. Orçador interativo por estado do veículo, pacotes completos e agendamento imediato.',
          challenge: 'Perda de clientes potenciais devido a orçamentos lentos por chat sem padronização.',
          result: 'Funil de alta conversão com escolha de pacote em 3 passos e agendamento em domicílio.',
          kpiLabel: 'Reservas confirmadas',
        },
        {
          id: 'nova',
          title: 'NOVA Obras & Reformas',
          category: 'Web Corporativa & Orçador',
          description: 'Site institucional com orçador interativo de reformas completas (drywall, pintura, impermeabilização, revestimentos) e portfólio antes/depois.',
          challenge: 'Dificuldade para qualificar leads de obras e comunicar prazos e garantias com clareza.',
          result: 'Automatização do primeiro filtro de orçamento, duplicando as propostas viáveis aprovadas.',
          kpiLabel: 'Orçamentos enviados',
        },
        {
          id: 'celpe',
          title: 'Simulador Celpe-Bras',
          category: 'Plataforma EdTech',
          description: 'Plataforma de preparação para o exame oficial Celpe-Bras. Módulos interativos de compreensão oral e escrita, reprodutor multimídia e cronômetro oficial.',
          challenge: 'Estudantes não tinham um ambiente cronometrado simulando exatamente a prova oficial.',
          result: 'Experiência imersiva de treino que elevou expressivamente a taxa de aprovação dos alunos.',
          kpiLabel: 'Precisão da simulação',
        },
        {
          id: 'victoria',
          title: 'Victoria Emefer — Cuidados',
          category: 'Saúde & Enfermagem',
          description: 'Landing page para equipe de enfermagem e assistência domiciliar. Serviços por faixa etária, depoimentos verificados e canal de emergência 24/7.',
          challenge: 'Construir confiança digital imediata para famílias em busca de cuidadores de idosos e convalescentes.',
          result: 'Alta retenção e contato imediato de famílias com necessidades urgentes de atendimento.',
          kpiLabel: 'Contatos diretos',
        },
        {
          id: 'nanda',
          title: 'Nanda Sacerdotisa',
          category: 'Terapias Holísticas & Cursos',
          description: 'Plataforma de marca pessoal para taróloga e terapeuta floral. Catálogo de rituais, reservas de sessões e inscrições em cursos e workshops.',
          challenge: 'Gestão desorganizada de horários e pagamentos por diversas redes sociais.',
          result: 'Centralização de serviços em um único portal com forte crescimento de alunas.',
          kpiLabel: 'Alunas e consultas',
        },
        {
          id: 'pollo',
          title: 'Granja El Trébol',
          category: 'E-commerce de Alimentos',
          description: 'Loja virtual para pedidos diretos de frangos caipiras e ovos frescos da granja. Checkout ágil para compras recorrentes de bairro e entrega em domicílio.',
          challenge: 'Receber pedidos manuais pelo WhatsApp gerava atrasos e erros no despacho diário.',
          result: 'Canal de compra automática com confirmação em um clique e redução de erros a zero.',
          kpiLabel: 'Pedidos semanais',
        },
        {
          id: 'zb',
          title: 'Z&B Domótica & Automação',
          category: 'Automação & IoT',
          description: 'Portal de engenharia em domótica residencial e automação de processos industriais. Telemetria de painéis, controle unificado e sistemas IoT.',
          challenge: 'Apresentar soluções técnicas complexas para clientes industriais e residenciais de alto padrão.',
          result: 'Posicionamento como integrador de referência e concorrência em projetos de grande porte.',
          kpiLabel: 'Controle centralizado',
        },
        {
          id: 'mundoguau',
          title: 'Mundo Guau',
          category: 'Veterinária & Pet Shop',
          description: 'Portal completo com agendamento online para banho & tosa, consultas veterinárias e loja de rações e acessórios especializados.',
          challenge: 'Linha telefônica congestionada e perda de horários por faltas sem aviso prévio.',
          result: 'Digitalização de 90% das reservas e aumento de vendas cruzadas durante o atendimento.',
          kpiLabel: 'Agendamentos online',
        },
        {
          id: 'nutri',
          title: 'Nutrição Integral +40',
          category: 'Landing & Método Nutricional',
          description: 'Landing page focada em método nutricional individualizado para mulheres 40+. Transformações reais, apresentação do programa e agendamento de consulta inicial gratuita.',
          challenge: 'Dificuldade em transmitir autoridade clínica e converter visitantes em primeiras consultas agendadas.',
          result: 'Funil de alta conversão com depoimentos verificados e integração direta de agenda de atendimento.',
          kpiLabel: 'Consultas agendadas',
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
      scrollHint: 'Role para explorar',
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
    faq: {
      label: 'Perguntas frequentes',
      title: 'Antes de nos escrever, talvez você se pergunte',
      items: [
        {
          id: 'price',
          question: 'Quanto custa um projeto de software sob medida?',
          answer: 'O investimento é definido com orçamento fechado antes de iniciar, dependendo do escopo técnico, integrações e prazos. A estimativa inicial é 100% gratuita, garantindo previsibilidade financeira total sem horas extras imprevistas nem taxas ocultas.',
        },
        {
          id: 'timeline',
          question: 'Em quanto tempo o software fica pronto para produção?',
          answer: 'Um MVP funcional entra em produção entre 6 e 12 semanas, com entregas testáveis a partir da segunda semana de trabalho. Atuamos em sprints ágeis de 7 dias com validação contínua e time-to-market acelerado.',
        },
        {
          id: 'quality',
          question: 'Por que escolher a Nilotech em vez de uma grande software factory?',
          answer: 'Garantimos atendimento técnico direto com desenvolvedores seniores dedicados do início ao fim, sem rotatividade de equipe ou repasse para iniciantes. Você fala diretamente com quem toma decisões técnicas e conta com suporte pós-lançamento em menos de 24 horas.',
        },
        {
          id: 'ownership',
          question: 'Quem é o proprietário do código-fonte e da infraestrutura?',
          answer: 'O cliente detém 100% da propriedade intelectual, do código-fonte e da infraestrutura em nuvem desde o primeiro dia. Entregamos repositórios Git completos, documentação técnica e implantação sem dependência contratual de licenças proprietárias.',
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
      serviceFieldLabel: 'Serviço',
      messageLabel: 'Como podemos ajudar? *',
      messagePlaceholder: 'Fale sobre o seu projeto, objetivos, prazos ou qualquer detalhe relevante...',
      submitButton: 'Enviar mensagem',
      submitting: 'Enviando...',
      successMessage: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      errorMessage: 'Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.',
      nameErrorRequired: 'O nome é obrigatório.',
      nameErrorShort: 'O nome é muito curto.',
      emailErrorRequired: 'O email é obrigatório.',
      emailErrorInvalid: 'Digite um email válido.',
      messageErrorRequired: 'Conte sobre o seu projeto.',
      messageErrorShort: 'Adicione um pouco mais de detalhe.',
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
        'Desenvolvimento Web',
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

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
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
];

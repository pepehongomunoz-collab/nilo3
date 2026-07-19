export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
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
];

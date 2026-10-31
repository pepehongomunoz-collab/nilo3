import pilarImg from '../assets/images/cases/promo/pilar.webp';
import edenImg from '../assets/images/cases/promo/eden.webp';
import zybImg from '../assets/images/cases/promo/zyb.webp';
import esiImg from '../assets/images/cases/promo/esi.webp';
import psicoImg from '../assets/images/cases/promo/psico.webp';
import aberturasImg from '../assets/images/cases/promo/aberturas.webp';
import cursosImg from '../assets/images/cases/promo/cursos.webp';
import clubImg from '../assets/images/cases/promo/club.webp';
import celpeImg from '../assets/images/cases/promo/celpe.webp';
// La web del club abre directo en el login: se usa la captura de la app.
import clubJnImg from '../assets/images/cases/AppClub.webp';

export interface PromoSite {
  title: string;
  category: string;
  url: string;
  image: string;
}

/** Webs de clientes reales que entran en el Plan Emprendedor (landing de una página, online). */
export const publishedSites: PromoSite[] = [
  { title: 'Lic. Mayra Biondo', category: 'Psicóloga', url: 'https://mayrabiondopsicologa.vercel.app/', image: psicoImg },
  { title: 'Pilar Astroza', category: 'Bienestar integral', url: 'https://www.pilarastroza.com.ar/', image: pilarImg },
  { title: 'Z&B Soluciones Integrales', category: 'Domótica e industria', url: 'https://www.zybsolucionesintegrales.com.ar', image: zybImg },
];

/**
 * Proyectos que exceden el plan (tiendas online, apps, cotizadores, plataformas): se muestran aparte
 * para no prometer eso por el precio base. Se cotizan por separado.
 */
export const extraSites: PromoSite[] = [
  { title: 'Lubricentro Eden', category: 'Cliente · Tienda online de repuestos', url: 'https://lubricentro-eden.com.ar/', image: edenImg },
  { title: 'ESI en Secundaria', category: 'Cliente · Tienda de recursos educativos', url: 'https://esiensecundaria.com.ar/', image: esiImg },
  { title: 'Club Jorge Newbery', category: 'Cliente · App de socios', url: 'https://www.clubjorgenewbery.com.ar', image: clubJnImg },
  { title: 'Aberturas con cotizador', category: 'Demo · Cotizador online', url: 'https://demo-cotizador-online.vercel.app/', image: aberturasImg },
  { title: 'Cursos online', category: 'Demo · Academia con alumnos', url: 'https://demo-cursos-autos.vercel.app/', image: cursosImg },
  { title: 'Club', category: 'Demo · App para clubes', url: 'https://demo-club-gamma.vercel.app/', image: clubImg },
  { title: 'Simulador Celpe-Bras', category: 'Demo · Plataforma educativa', url: 'https://celpe.vercel.app/', image: celpeImg },
];

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { company } from '../../data/company';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-void/90 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-void-900 border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl text-zinc-300 z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Cerrar"
          >
            <X size={20} />
          </button>

          {type === 'privacy' ? (
            <div className="space-y-6 text-sm leading-relaxed">
              <h2 className="font-display text-2xl font-bold text-white mb-2">
                Política de Privacidad
              </h2>
              <p className="text-xs text-zinc-500 font-mono">Última actualización: {new Date().getFullYear()}</p>

              <div className="space-y-4 text-zinc-400">
                <p>
                  En <strong className="text-white">{company.name}</strong> nos tomamos muy en serio la privacidad de nuestros usuarios y clientes. Esta política describe cómo recopilamos, usamos y protegemos la información personal en cumplimiento con la Ley de Protección de Datos Personales N° 25.326 de la República Argentina.
                </p>

                <h3 className="font-display text-base font-semibold text-white pt-2">1. Datos recopilados</h3>
                <p>
                  Recopilamos únicamente los datos que nos proporcionas voluntariamente a través del formulario de contacto o canales directos (Email/WhatsApp), incluyendo: nombre, dirección de correo electrónico, número de teléfono y mensaje del proyecto.
                </p>

                <h3 className="font-display text-base font-semibold text-white pt-2">2. Uso de la información</h3>
                <p>
                  La información recopilada se utiliza exclusivamente para responder a tus consultas comerciales, evaluar propuestas de proyectos de software y mantener la comunicación profesional requerida. No vendemos, alquilamos ni compartimos tus datos personales con terceros para fines publicitarios.
                </p>

                <h3 className="font-display text-base font-semibold text-white pt-2">3. Métrica de uso sin cookies</h3>
                <p>
                  Utilizamos Umami Analytics para medir de forma anónima y agregada el tráfico de nuestro sitio. No utilizamos cookies de rastreo publicitario ni almacenamos datos de identificación personal del visitante.
                </p>

                <h3 className="font-display text-base font-semibold text-white pt-2">4. Derechos del titular de datos</h3>
                <p>
                  Tenés derecho a acceder, rectificar, actualizar o solicitar la supresión de tus datos personales almacenados en nuestras bases de datos enviando un correo electrónico a <a href={`mailto:${company.email}`} className="text-signal underline">{company.email}</a>.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6 text-sm leading-relaxed">
              <h2 className="font-display text-2xl font-bold text-white mb-2">
                Términos y Condiciones de Servicio
              </h2>
              <p className="text-xs text-zinc-500 font-mono">Última actualización: {new Date().getFullYear()}</p>

              <div className="space-y-4 text-zinc-400">
                <p>
                  Bienvenido a <strong className="text-white">{company.name}</strong>. Al acceder y navegar en este sitio web, aceptas los siguientes términos y condiciones de uso.
                </p>

                <h3 className="font-display text-base font-semibold text-white pt-2">1. Propiedad Intelectual</h3>
                <p>
                  Todos los contenidos, diseños, código fuente, logotipos, marcas y elementos gráficos presentados en este sitio web son propiedad exclusiva de {company.name} o cuentan con las licencias correspondientes. Queda prohibida su reproducción o distribución no autorizada.
                </p>

                <h3 className="font-display text-base font-semibold text-white pt-2">2. Cotización y Propuestas Comerciales</h3>
                <p>
                  La información presentada en el sitio tiene carácter informativo. Las propuestas técnicas, alcances, presupuestos y plazos definitivos para la prestación de servicios de software a medida se formalizan mediante contratos específicos acordados entre las partes.
                </p>

                <h3 className="font-display text-base font-semibold text-white pt-2">3. Limitación de Responsabilidad</h3>
                <p>
                  {company.name} realiza sus mejores esfuerzos para garantizar la disponibilidad y correcto funcionamiento del sitio. No nos responsabilizamos por interrupciones temporales ocasionadas por fallas en proveedores de infraestructura o redes externas.
                </p>

                <h3 className="font-display text-base font-semibold text-white pt-2">4. Contacto</h3>
                <p>
                  Si tenés dudas sobre estos términos, podés contactarnos formalmente en <a href={`mailto:${company.email}`} className="text-signal underline">{company.email}</a>.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

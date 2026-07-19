import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { company } from '../../data/company';

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="absolute bottom-20 right-0 w-72 p-6 rounded-2xl bg-void-900/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Subtle top glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-signal to-transparent opacity-50" />
            
            <h3 className="font-display font-bold text-white text-lg mb-2">Hablemos de tu proyecto</h3>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Respuesta en menos de 2 horas laborables. Nivel ejecutivo garantizado.
            </p>
            
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-signal text-void font-medium py-3 px-4 rounded-xl hover:bg-signal/90 transition-colors"
            >
              <MessageCircle size={18} className="fill-void" />
              <span>Contactar por WhatsApp</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full flex items-center justify-center bg-void-900/80 backdrop-blur-md border border-white/10 shadow-lg hover:border-signal/50 hover:shadow-signal/20 transition-all duration-300 group"
      >
        <div className="absolute inset-0 rounded-full bg-signal/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {isOpen ? (
            <X size={24} className="text-zinc-400 group-hover:text-white" />
          ) : (
            <MessageCircle size={24} className="text-zinc-400 group-hover:text-signal" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}

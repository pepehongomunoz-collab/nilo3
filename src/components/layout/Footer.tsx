import { useState } from 'react';
import { Logo } from '../ui/Logo';
import { company } from '../../data/company';
import { footerLinks } from '../../data/navigation';
import { LegalModal } from '../ui/LegalModal';

export function Footer() {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer className="border-t border-white/[0.04] bg-void">
        {/* Big statement */}
        <div className="site-container py-24 md:py-32">
          <p className="font-display text-section text-zinc-800 leading-[1.1] max-w-4xl">
            Tecnología con propósito.
            <br />
            <span className="text-zinc-600">Resultados que importan.</span>
          </p>
        </div>

        {/* Links grid */}
        <div className="site-container pb-12">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-8 pb-12 border-b border-white/[0.04]">
            <div className="col-span-2 md:col-span-4">
              <Logo size="md" className="mb-4" />
              <p className="text-sm text-zinc-600 max-w-xs leading-relaxed">
                {company.description}
              </p>
            </div>

            <div className="md:col-span-3">
              <h4 className="section-label mb-4">Servicios</h4>
              <ul className="space-y-2.5">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-zinc-500 hover:text-white transition-colors link-underline">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="section-label mb-4">Empresa</h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-zinc-500 hover:text-white transition-colors link-underline">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="section-label mb-4">Contacto</h4>
              <ul className="space-y-2.5 text-sm text-zinc-500">
                <li>
                  <a href={`mailto:${company.email}`} className="hover:text-white transition-colors link-underline">
                    {company.email}
                  </a>
                </li>
                <li>
                  <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors link-underline">
                    {company.phone}
                  </a>
                </li>
                <li className="text-zinc-600">{company.location}</li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
            <p className="text-zinc-700 text-xs">
              &copy; {new Date().getFullYear()} {company.name}. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-xs text-zinc-700">
              <button
                onClick={() => setLegalModalType('privacy')}
                className="hover:text-zinc-400 transition-colors focus:outline-none"
              >
                Privacidad
              </button>
              <button
                onClick={() => setLegalModalType('terms')}
                className="hover:text-zinc-400 transition-colors focus:outline-none"
              >
                Términos
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </>
  );
}

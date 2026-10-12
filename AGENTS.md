# Nilotech 3 - Portfolio Web

## Descripción
Portfolio web de Nico (Nilotech). Diseño dark-only, 3 idiomas (ES/EN/PT), con 3D y animaciones.

## Stack
- React 19 + Vite 8 + TypeScript 6 (strict)
- Tailwind CSS 3.4 + autoprefixer + postcss
- Three.js 0.185 + @react-three/fiber 9 + @react-three/drei 10
- GSAP 3.15 + Framer Motion 12 + Lenis 1.3 (smooth scroll)
- Resend (email API)
- lucide-react (iconos)
- oxlint (linter)

## Estructura
```
src/
  App.tsx                    # Root component
  main.tsx                   # Entry point
  context/
    LanguageContext.tsx       # i18n context (ES/EN/PT)
  components/
    ui/                       # Componentes reutilizables (Button, Logo, Marquee, Phone3D, etc.)
    sections/                 # Secciones de la landing (Hero, Services, TechStack, Contact, etc.)
```

## Comandos
- `npm run dev` — Servidor de desarrollo (Vite)
- `npm run build` — Build de producción (tsc -b && vite build)
- `npm run lint` — Linteado con oxlint
- `npm run preview` — Preview del build

## Reglas
- Dark mode únicamente (no hay light mode)
- Toda cadena visible debe soportar 3 idiomas via LanguageContext
- Animaciones: GSAP para scroll-triggered, Framer Motion para micro-interacciones
- 3D siempre con @react-three/fiber (no Three.js raw)
- No usar CSS modules — Tailwind utility classes únicamente
- Responsive mobile-first por defecto

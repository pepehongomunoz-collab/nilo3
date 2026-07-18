import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { LenisContext } from '../../hooks/useLenis';
import { ScrollTrigger } from '../../lib/gsap';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisInstance.on('scroll', ScrollTrigger.update);

    setLenis(lenisInstance);

    function raf(time: number) {
      lenisInstance.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenisInstance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}

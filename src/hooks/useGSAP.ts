import { useRef, useEffect, useCallback } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';

export function useGSAP(
  callback: () => void,
  deps: React.DependencyList = []
) {
  const containerRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedCallback = useCallback(callback, deps);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      memoizedCallback();
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [memoizedCallback]);

  return containerRef;
}

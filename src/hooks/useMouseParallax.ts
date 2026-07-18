import { useState, useEffect, useRef } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export function useMouseParallax(intensity: number = 0.02) {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  const targetRef = useRef<MousePosition>({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      targetRef.current = {
        x: (e.clientX - cx) * intensity,
        y: (e.clientY - cy) * intensity,
      };
    };

    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (targetRef.current.x - prev.x) * 0.08,
        y: prev.y + (targetRef.current.y - prev.y) * 0.08,
      }));
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [intensity]);

  return position;
}

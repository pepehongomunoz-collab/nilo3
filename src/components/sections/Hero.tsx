import { useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { SectionLabel } from '../ui/SectionLabel';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import { gsap } from '../../lib/gsap';
import { useLenis } from '../../hooks/useLenis';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const mouse = useMouseParallax(0.015);
  const lenis = useLenis();

  // Canvas geometric animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Draw subtle geometric lines
      ctx.strokeStyle = 'rgba(255, 210, 0, 0.04)';
      ctx.lineWidth = 1;

      // Rotating arcs
      for (let i = 0; i < 3; i++) {
        const radius = 200 + i * 140;
        const startAngle = time * (0.3 + i * 0.1) + (i * Math.PI) / 3;
        const endAngle = startAngle + Math.PI * 0.6;

        ctx.beginPath();
        ctx.arc(cx, cy, radius, startAngle, endAngle);
        ctx.stroke();
      }

      // Cross lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < 6; i++) {
        const angle = (time * 0.2) + (i * Math.PI) / 3;
        const length = 600;

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(
          cx + Math.cos(angle) * length,
          cy + Math.sin(angle) * length
        );
        ctx.stroke();
      }

      // Corner accent marks
      const markSize = 20;
      ctx.strokeStyle = 'rgba(255, 210, 0, 0.06)';
      ctx.lineWidth = 1;

      // Top-left
      const offset = 80;
      ctx.beginPath();
      ctx.moveTo(offset, offset + markSize);
      ctx.lineTo(offset, offset);
      ctx.lineTo(offset + markSize, offset);
      ctx.stroke();

      // Bottom-right
      ctx.beginPath();
      ctx.moveTo(canvas.width - offset, canvas.height - offset - markSize);
      ctx.lineTo(canvas.width - offset, canvas.height - offset);
      ctx.lineTo(canvas.width - offset - markSize, canvas.height - offset);
      ctx.stroke();

      // Pulsing dot at center
      const dotSize = 2 + Math.sin(time * 2) * 1;
      ctx.fillStyle = 'rgba(255, 210, 0, 0.15)';
      ctx.beginPath();
      ctx.arc(cx, cy, dotSize, 0, Math.PI * 2);
      ctx.fill();

      animationId = requestAnimationFrame(draw);
    };

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
      draw();
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // GSAP text reveal animation
  useEffect(() => {
    const headline = headlineRef.current;
    if (!headline) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const words = headline.querySelectorAll('.hero-word');

    gsap.set(words, { y: '110%', opacity: 0 });

    const tl = gsap.timeline({ delay: 0.3 });
    tl.to(words, {
      y: '0%',
      opacity: 1,
      duration: 1,
      stagger: 0.08,
      ease: 'expo.out',
    });

    return () => { tl.kill(); };
  }, []);

  const scrollTo = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (target) {
      if (lenis) {
        lenis.scrollTo(target, { offset: -80 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [lenis]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          transform: `translate(${mouse.x * 0.5}px, ${mouse.y * 0.5}px)`,
        }}
      />

      {/* Floating geometric shapes — parallax */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Shape 1 — top right */}
        <div
          className="absolute top-[15%] right-[10%] w-32 h-32 border border-white/[0.03] rounded-xl rotate-12"
          style={{
            transform: `translate(${mouse.x * -1.2}px, ${mouse.y * -1.2}px) rotate(12deg)`,
            transition: 'transform 0.1s linear',
          }}
        />
        {/* Shape 2 — bottom left */}
        <div
          className="absolute bottom-[20%] left-[8%] w-24 h-24 border border-signal/[0.04] rounded-full"
          style={{
            transform: `translate(${mouse.x * 0.8}px, ${mouse.y * 0.8}px)`,
            transition: 'transform 0.1s linear',
          }}
        />
        {/* Shape 3 — center-left */}
        <div
          className="absolute top-[45%] left-[20%] w-2 h-2 bg-signal/20 rounded-full"
          style={{
            transform: `translate(${mouse.x * 2}px, ${mouse.y * 2}px)`,
            transition: 'transform 0.1s linear',
          }}
        />
      </div>

      {/* Gradient fade bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #09090B, transparent)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 site-container w-full text-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SectionLabel className="mb-8 block">
            Product & Engineering Studio
          </SectionLabel>
        </motion.div>

        <h1
          ref={headlineRef}
          className="hero-text font-display text-hero font-bold leading-[1.1] md:leading-[0.95] tracking-tight text-white mb-6 flex flex-wrap justify-center gap-x-[0.2em] gap-y-[0.1em]"
        >
          <div className="overflow-hidden inline-block">
            <span className="hero-word block">Ingeniería</span>
          </div>
          <div className="overflow-hidden inline-block">
            <span className="hero-word block">de</span>
          </div>
          <div className="overflow-hidden inline-block">
            <span className="hero-word block">software</span>
          </div>
          <div className="overflow-hidden inline-block">
            <span className="hero-word block">para</span>
          </div>
          <div className="overflow-hidden inline-block">
            <span className="hero-word block">líderes</span>
          </div>
          <div className="overflow-hidden inline-block">
            <span className="hero-word block">del</span>
          </div>
          <div className="overflow-hidden inline-block">
            <span className="hero-word text-signal block translate-y-[0.05em] scale-90">mercado</span>
          </div>
        </h1>

        <p className="hero-subtitle text-zinc-400 text-lg md:text-xl max-w-lg mx-auto font-medium mb-12">
          Arquitectura digital de alto rendimiento.
          <br />
          Construimos soluciones robustas para problemas complejos.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" onClick={() => scrollTo('contact')}>
            Iniciar proyecto
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollTo('cases')}>
            Ver proyectos
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 rounded-full border border-white/[0.1] flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1 bg-signal/50 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

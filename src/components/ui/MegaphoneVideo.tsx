import { useEffect, useRef, useState } from 'react';

/**
 * Loop de 10 s renderizado en Blender (Cycles, con sombra real): el megáfono grita, se transforma
 * en un celular que muestra una web real y vuelve a ser megáfono. Exportado con transparencia.
 * Safari usa HEVC con alfa; Chrome y Firefox, WebM VP9 con alfa.
 */
export function MegaphoneVideo({ className = '' }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;
    // Solo reproduce mientras está en pantalla (ahorra batería en celular)
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        video.play().catch(() => {
          // Autoplay bloqueado (modo ahorro de energía): queda el póster
        });
      } else {
        video.pause();
      }
    });
    io.observe(video);
    return () => io.disconnect();
  }, [reducedMotion]);

  if (reducedMotion) {
    return <img src="/videos/story-poster.webp" alt="" aria-hidden="true" className={className} />;
  }

  return (
    <video
      ref={videoRef}
      className={className}
      poster="/videos/story-first.webp"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    >
      <source src="/videos/story.mov" type='video/quicktime; codecs="hvc1"' />
      <source src="/videos/story.webm" type="video/webm" />
    </video>
  );
}

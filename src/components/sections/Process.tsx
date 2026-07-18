// Process section with horizontal scroll
import { processSteps } from '../../data/process';
import { SectionLabel } from '../ui/SectionLabel';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap } from '../../lib/gsap';

export function Process() {
  const containerRef = useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    if (!isDesktop) return;

    const track = container.querySelector('.process-track') as HTMLElement;
    const cards = container.querySelectorAll('.process-card');
    const progressBar = container.querySelector('.process-progress') as HTMLElement;

    if (!track || !cards.length) return;

    // Calculate total scroll distance
    const totalWidth = track.scrollWidth - window.innerWidth + 200;

    // Pin and horizontal scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: `+=${totalWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    tl.to(track, {
      x: -totalWidth,
      ease: 'none',
    });

    // Progress bar
    if (progressBar) {
      gsap.to(progressBar, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: `+=${totalWidth}`,
          scrub: 1,
        },
      });
    }

    // Card reveals
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0.3, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: container,
            start: `${(i / cards.length) * 80}% top`,
            end: `${((i + 1) / cards.length) * 80}% top`,
            scrub: 1,
          },
        }
      );
    });
  });

  return (
    <section id="process" ref={containerRef} className="relative bg-surface/30">
      {/* Progress bar */}
      <div className="sticky top-0 z-20 hidden lg:block">
        <div className="h-[2px] bg-white/[0.04] w-full">
          <div
            className="process-progress h-full bg-signal origin-left"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </div>

      {/* Desktop: horizontal scroll */}
      <div className="hidden lg:block overflow-hidden">
        <div className="site-container pt-24 pb-8">
          <SectionLabel>Proceso</SectionLabel>
          <h2 className="font-display text-section text-white mt-4 mb-4">
            Cómo trabajamos.
          </h2>
          <p className="text-zinc-500 max-w-md mb-8">
            Un framework probado que garantiza calidad y transparencia en cada etapa.
          </p>
        </div>

        <div className="process-track flex gap-8 pl-20 pr-[40vw] pb-24 pt-8">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="process-card shrink-0 w-[380px] rounded-xl border border-white/[0.04] bg-void-900/80 p-8 flex flex-col"
              style={{ willChange: 'transform, opacity' }}
            >
              <span className="font-mono text-signal text-sm font-medium mb-6">
                {step.number}
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-6 flex-1">
                {step.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.04]">
                {step.deliverables.map((d) => (
                  <span key={d} className="text-xs font-mono text-zinc-600 bg-white/[0.02] px-2.5 py-1 rounded-full">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="lg:hidden py-section">
        <div className="site-container">
          <SectionLabel>Proceso</SectionLabel>
          <h2 className="font-display text-section text-white mt-4 mb-12">
            Cómo trabajamos.
          </h2>

          <div className="space-y-8">
            {processSteps.map((step, i) => (
              <div key={step.id} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-lg border border-white/[0.06] bg-void-800 flex items-center justify-center shrink-0">
                    <span className="font-mono text-xs font-medium text-signal">{step.number}</span>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="w-px flex-1 bg-white/[0.04] mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-display text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">{step.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.deliverables.map((d) => (
                      <span key={d} className="text-xs font-mono text-zinc-600 bg-white/[0.02] px-2.5 py-1 rounded-full">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

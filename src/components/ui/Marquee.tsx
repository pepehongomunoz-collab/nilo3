import { clsx } from 'clsx';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  speed = 30,
  reverse = false,
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  return (
    <div
      className={clsx(
        'overflow-hidden',
        pauseOnHover && 'group',
        className
      )}
    >
      <div
        className={clsx(
          'flex w-max',
          reverse ? 'animate-marquee-reverse' : 'animate-marquee',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
        style={{ '--marquee-duration': `${speed}s` } as React.CSSProperties}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

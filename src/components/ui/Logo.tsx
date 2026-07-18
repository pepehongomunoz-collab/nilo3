import { clsx } from 'clsx';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo({ size = 'md', className }: LogoProps) {
  const sizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
  };

  return (
    <div className={clsx('font-display font-bold tracking-tight', sizes[size], className)}>
      <span className="text-white">nilo</span>
      <span className="text-signal">tech</span>
    </div>
  );
}

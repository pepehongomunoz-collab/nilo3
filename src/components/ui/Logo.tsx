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

  const imageSizes = {
    sm: 'h-6 w-auto',
    md: 'h-8 w-auto',
    lg: 'h-12 w-auto',
  };

  return (
    <div className={clsx('flex items-center gap-1', className)}>
      <img 
        src="/images/Logo.png" 
        alt="Nilotech Logo" 
        className={imageSizes[size]}
      />
      <div className={clsx('font-display font-bold tracking-tight', sizes[size])}>
        <span className="text-white">Nilo</span>
        <span className="text-signal">tech</span>
      </div>
    </div>
  );
}

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        clsx(
          'relative inline-flex items-center justify-center font-medium transition-all duration-200 focus-ring rounded-full',
          'active:scale-[0.98]',
          {
            // Primary — Signal color
            'bg-signal text-void-950 hover:bg-signal-dim shadow-signal/20 hover:shadow-signal':
              variant === 'primary',
            // Outline
            'border border-white/[0.12] text-zinc-300 hover:text-white hover:border-white/[0.25] hover:bg-white/[0.04]':
              variant === 'outline',
            // Ghost
            'text-zinc-400 hover:text-white hover:bg-white/[0.04]':
              variant === 'ghost',
            // Sizes
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-2.5 text-sm': size === 'md',
            'px-8 py-3.5 text-[15px]': size === 'lg',
          }
        ),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

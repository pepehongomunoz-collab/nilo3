/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#09090B',
          950: '#09090B',
          900: '#0C0C10',
          800: '#141419',
          700: '#1C1C24',
        },
        surface: {
          DEFAULT: '#141419',
          elevated: '#1C1C24',
        },
        signal: {
          DEFAULT: '#E5FF50',
          dim: '#C8E036',
          soft: 'rgba(229,255,80,0.08)',
        },
        warm: '#FF6B35',
      },
      fontFamily: {
        display: ['Satoshi', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.04em', fontWeight: '800' }],
        'section': ['clamp(2rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'subsection': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        'section': 'clamp(8rem, 12vw, 12.5rem)',
      },
      maxWidth: {
        'site': '1440px',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'signal': '0 0 40px rgba(229, 255, 80, 0.12)',
        'signal-lg': '0 0 80px rgba(229, 255, 80, 0.15)',
        'soft': '0 4px 24px -4px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'marquee': 'marquee var(--marquee-duration, 30s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--marquee-duration, 30s) linear infinite',
      },
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

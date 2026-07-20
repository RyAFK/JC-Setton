import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#132022',
          700: '#2b3d40',
          500: '#516568',
        },
        practice: {
          teal: '#0f5c5c',
          'teal-dark': '#0a4444',
          'teal-light': '#e6f2f1',
          gold: '#b6862c',
          'gold-light': '#f6ecd9',
          cream: '#faf8f4',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-body)',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        display: [
          'var(--font-display)',
          'ui-serif',
          'Georgia',
          'serif',
        ],
      },
      fontSize: {
        h1: ['clamp(2.125rem, 1.7rem + 1.8vw, 3.5rem)', { lineHeight: '1.12', letterSpacing: '-0.01em' }],
        h2: ['clamp(1.75rem, 1.55rem + 0.9vw, 2.5rem)', { lineHeight: '1.18', letterSpacing: '-0.005em' }],
        h3: ['clamp(1.375rem, 1.3rem + 0.35vw, 1.75rem)', { lineHeight: '1.28' }],
        body: ['1.125rem', { lineHeight: '1.65' }],
      },
      maxWidth: {
        prose: '68ch',
      },
      boxShadow: {
        card: '0 1px 2px rgba(19,32,34,0.06), 0 8px 24px -8px rgba(19,32,34,0.12)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

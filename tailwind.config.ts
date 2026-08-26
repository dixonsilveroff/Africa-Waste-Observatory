import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#154212',
          container: '#2D5A27',
          'fixed-dim': '#C2E8BE',
        },
        surface: {
          DEFAULT: '#F9F9FF',
          'container-lowest': '#FFFFFF',
          'container-low': '#F1F3FF',
          container: '#E9EDFF',
          'container-high': '#E3E8F8',
          'container-highest': '#DCE2F7',
        },
        'on-surface': {
          DEFAULT: '#141B2B',
          variant: '#525866',
        },
        'outline-variant': 'rgba(196, 199, 215, 0.2)',
        error: {
          DEFAULT: '#BA1A1A',
          container: '#FFDAD6',
        },
        secondary: {
          container: '#E0E7FF',
          'on-container': '#1E1B4B',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-public-sans)', 'sans-serif'],
      },
      boxShadow: {
        ambient: '0 24px 40px rgba(20, 27, 43, 0.04)',
        'ambient-lg': '0 32px 64px rgba(20, 27, 43, 0.08)',
      },
      borderRadius: {
        moderate: '0.375rem',
        editorial: '0.5rem',
      },
    },
  },
  plugins: [],
};

export default config;

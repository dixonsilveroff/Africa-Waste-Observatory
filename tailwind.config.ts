import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#047E37',
          dark: '#036a2e',
        },
        secondary: {
          DEFAULT: '#1D4ED8',
          dark: '#1a3fb0',
        },
        accent: '#FDC047',
        background: '#F3FAF7',
        neutral: '#E2E8F0',
        text: {
          DEFAULT: '#1E293B',
          muted: '#64748B',
          'muted-light': '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-public-sans)'],
      },
      boxShadow: {
        ambient: '0 8px 24px rgba(20, 27, 43, 0.06)',
        'ambient-lg': '0 12px 40px rgba(20, 27, 43, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;

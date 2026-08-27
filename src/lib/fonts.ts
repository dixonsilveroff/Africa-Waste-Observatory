import localFont from 'next/font/local';

export const inter = localFont({
  src: '../../public/fonts/Inter-Variable.woff2',
  variable: '--font-inter',
  display: 'swap',
  weight: '100 900',
});

export const publicSans = localFont({
  src: '../../public/fonts/PublicSans-Variable.woff2',
  variable: '--font-public-sans',
  display: 'swap',
  weight: '100 900',
});

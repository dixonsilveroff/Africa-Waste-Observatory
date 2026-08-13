import type { Metadata } from 'next';
import { inter, publicSans } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Africa Waste Observatory',
    template: '%s | Africa Waste Observatory',
  },
  description:
    "Africa's leading waste intelligence platform delivering verified municipal solid waste data, recycling statistics, policy analysis, and circular economy insights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.variable} ${publicSans.variable}`}>
        {children}
      </body>
    </html>
  );
}

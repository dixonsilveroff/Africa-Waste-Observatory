import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/country-profiles/:path*', destination: '/', permanent: false },
      { source: '/waste-streams/:path*', destination: '/', permanent: false },
      { source: '/innovations/:path*', destination: '/', permanent: false },
      { source: '/policies/:path*', destination: '/', permanent: false },
      { source: '/references/:path*', destination: '/', permanent: false },
      { source: '/privacy.html', destination: '/', permanent: false },
    ];
  },
};

export default withNextIntl(nextConfig);

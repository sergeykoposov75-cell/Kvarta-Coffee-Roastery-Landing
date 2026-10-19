/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/photo-*',
      },
    ],
  },
  experimental: {
    // better-sqlite3 — нативный модуль, выносим из серверного бандла
    serverComponentsExternalPackages: ['better-sqlite3'],
  },
};

export default nextConfig;

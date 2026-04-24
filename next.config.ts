import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // PWA configuration will be handled by next-pwa
  experimental: {
    ppr: false, // Disable Partial Prerendering for PWA compatibility
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'shopifycode.vercel.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Turbopack configuration
  turbopack: {},
};

export default nextConfig;

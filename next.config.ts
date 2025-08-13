import type { NextConfig } from "next";
const { version } = require('./package.json');

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_APP_VERSION: version,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'badminton-gallery.s3.us-east-2.amazonaws.com', 
        pathname: '/products/**',
      },
    ],
    minimumCacheTTL: 604800, // 7 days
    formats: ['image/webp'], // only generate webp
  },
  allowedDevOrigins: ['/_next/*'],
};

export default nextConfig;

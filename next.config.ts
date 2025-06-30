import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'badminton-gallery.s3.us-east-2.amazonaws.com', 
        pathname: '/products/**',
      },
    ]
  }
};

export default nextConfig;

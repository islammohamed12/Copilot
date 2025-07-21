import type { NextConfig } from 'next';

import '@/lib/env';
import withPWA from 'next-pwa';

const nextConfig: NextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '**'
      }
    ]
  }
};

export default withPWA(
  {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  nextConfig
);

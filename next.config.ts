import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    resolveAlias: {
      underscore: 'lodash',
    },
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;

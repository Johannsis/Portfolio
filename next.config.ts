import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  assetPrefix: isProd ? '/portfolio/' : '',
  basePath: isProd ? '/portfolio' : '',
  images: {
    unoptimized: true,
  },
  output: 'export',
  reactStrictMode: true,
};

export default nextConfig;

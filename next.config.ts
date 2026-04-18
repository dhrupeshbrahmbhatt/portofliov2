import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portofliov2',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

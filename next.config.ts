import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure middleware runs reliably across all deployments
  experimental: {
    proxyPrefetch: 'flexible',
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure middleware runs reliably across all deployments
  experimental: {
    middlewarePrefetch: 'flexible',
  },
};

export default nextConfig;

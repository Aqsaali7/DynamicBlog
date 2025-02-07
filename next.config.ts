import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */module , exports: {
    images: {
      domains: ['example.com'], // Allow external images from specific domains
    },
  },

};

export default nextConfig;

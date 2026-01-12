import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailark.com",
      },
      {
        protocol: "https",
        hostname: "cdn.shadcnstudio.com",
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.panelmanage.com",
      },
      {
        protocol: "https",
        hostname: "5e5f8a26d62e3255d96f4410baf43d73.r2.cloudflarestorage.com",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove turbopack.root to avoid filesystem issues
  // Next.js will automatically detect the correct root
};

export default nextConfig;

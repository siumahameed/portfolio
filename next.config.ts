import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.BUILD_STATIC === "true" ? "export" : undefined,
  images: { unoptimized: true },
};

export default nextConfig;

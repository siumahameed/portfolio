import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.BUILD_STATIC === "true" ? "export" : undefined,
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
  images: { unoptimized: true },
};

export default nextConfig;

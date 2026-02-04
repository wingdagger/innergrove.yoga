import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  basePath: process.env.NODE_ENV === "production" ? "/innergrove.yoga" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";
const basePath = isDev ? "" : "/solod";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: basePath || undefined,
};

export default nextConfig;

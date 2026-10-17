import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Cache Components requires every cookies()/headers() read to sit behind a
  // Suspense boundary (or use `use cache: private`) — overkill for this
  // small, fully per-user app where every page is dynamic anyway. Disabled
  // to keep the conventional request-time rendering model.
  cacheComponents: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

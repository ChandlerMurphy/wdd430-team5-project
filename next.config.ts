import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "example.com",
      // add other domains as needed
    ],
  },
};

export default nextConfig;

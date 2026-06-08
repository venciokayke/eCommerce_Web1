import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permite carregar imagens externas da FakeStore API
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },
};

export default nextConfig;

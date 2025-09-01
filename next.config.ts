import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite solicitações em desenvolvimento vindas do proxy da plataforma (ex.: *.fly.dev)
  // Evita falhas de fetch/HMR por origem cruzada no ambiente de preview
  allowedDevOrigins: ["*.fly.dev"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

// En produccion el sitio vive en un subdirectorio de GitHub Pages
// (viccurzio.github.io/portfolio/), asi que todas las rutas van prefijadas.
// En desarrollo el prefijo estorba: hace que localhost:3000 devuelva 404 y
// obliga a acordarse de /portfolio. Por eso solo se aplica al compilar.
const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  // next/link y next/image agregan el prefijo solos; un <a> o un <img> crudo no.
  // Esta variable es la que usa asset() en src/content/site.ts para esos casos.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;

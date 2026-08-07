import type { NextConfig } from "next";

// Se publica en GitHub Pages (viccurzio.github.io/portfolio/): HTML estatico
// en out/ y todas las rutas prefijadas con /portfolio.
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio",
  images: { unoptimized: true },
};

export default nextConfig;

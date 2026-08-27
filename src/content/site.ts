// Direccion publica del sitio. Vive aca y no repetida en cada archivo porque la
// usan tres cosas que tienen que decir lo mismo: los metadatos (para que las
// imagenes y el canonical se resuelvan absolutos), el sitemap y el robots.
export const siteUrl = "https://viccurzio.github.io/portfolio";

// Prefijo de las rutas. Lo define next.config.ts: vacio en desarrollo,
// "/portfolio" al compilar para GitHub Pages.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Para archivos de public/ enlazados a mano. Sin esto el link al CV apunta a
// /CV.pdf en produccion (404) o a /portfolio/CV.pdf en desarrollo (404 tambien).
export function asset(path: string): string {
  return `${basePath}${path}`;
}

// Los dos idiomas del sitio y donde vive cada uno.
//
// El idioma es la ruta, no un estado del navegador: el espanol se sirve en la
// raiz (la URL que ya estaba indexada) y el ingles cuelga de /en. Cada uno es un
// HTML distinto, con su metadata y su texto ya escrito, asi que el buscador los
// ve como dos paginas. Un cambio de idioma resuelto solo con JavaScript habria
// dejado una sola pagina indexable y el contenido en ingles invisible.
//
// Las dos comparten la raiz del App Router para que el cambio no recargue el
// documento; el idioma de cada una lo declara su contenedor (ver PageShell).
export const langs = ["es", "en"] as const;

export type Lang = (typeof langs)[number];

export const defaultLang: Lang = "es";

// A donde lleva el boton de idioma desde cada idioma.
export const otherLang: Record<Lang, Lang> = { es: "en", en: "es" };

// Ruta de cada idioma dentro del sitio, sin el prefijo de GitHub Pages: eso lo
// agrega next/link (o asset(), donde el enlace se arma a mano).
export const langPath: Record<Lang, string> = { es: "/", en: "/en/" };

// Codigo completo para <html lang> y para los metadatos de OpenGraph.
export const htmlLang: Record<Lang, string> = { es: "es", en: "en" };
export const ogLocale: Record<Lang, string> = { es: "es_AR", en: "en_US" };

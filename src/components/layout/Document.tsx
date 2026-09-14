import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import type { ReactNode } from "react";
import { getContent } from "@/content/content";
import { htmlLang, langPath, langs, ogLocale, type Lang } from "@/content/i18n";
import { asset, siteUrl } from "@/content/site";
import { THEME_INIT_SCRIPT } from "./theme";

// El esqueleto del documento HTML. Lo usa la raiz unica del App Router
// (src/app/layout.tsx), que le pasa el idioma por defecto del sitio.
//
// `buildMetadata` sigue tomando el idioma porque cada pagina exporta la suya:
// la raiz declara la espanola y /en la pisa con la inglesa.

// Las dos familias del sitio, las dos libres (SIL Open Font License) y las dos
// inspiradas en pantallas viejas: ninguna letra sale de un juego, solo el estilo.
//
// Press Start 2P es de caja fija y muy ancha: sirve para titulos y controles,
// y se vuelve ilegible en parrafos. VT323 es de tubo, angosta y con altura de
// equis grande: aguanta un texto largo. Por eso una para el cartel y otra para
// leer, y no una sola para todo.
const fontPixel = Press_Start_2P({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: "400",
});

const fontTerm = VT323({
  variable: "--font-term",
  subsets: ["latin"],
  weight: "400",
});

// Las dos versiones de la pagina se declaran entre si: el buscador tiene que
// saber que son la misma pagina en dos idiomas y no dos paginas que compiten.
const languageAlternates = Object.fromEntries(
  langs.map((l) => [htmlLang[l], langPath[l]]),
) as Record<string, string>;

export function buildMetadata(lang: Lang): Metadata {
  const { profile, ui } = getContent(lang);
  // La imagen la genera `npm run og`. Va con URL absoluta: metadataBase tiene
  // el subdirectorio /portfolio, y una ruta que empieza con / lo perderia.
  const image = {
    url: `${siteUrl}/${lang === "en" ? "og-en" : "og"}.png`,
    width: 1200,
    height: 630,
    alt: ui.meta.title,
  };
  return {
    // Sin metadataBase, las URLs de las tarjetas para compartir quedan relativas y
    // el que las lee (WhatsApp, LinkedIn) no sabe resolverlas.
    metadataBase: new URL(siteUrl),
    title: ui.meta.title,
    description: ui.meta.description,
    alternates: {
      canonical: langPath[lang],
      languages: { ...languageAlternates, "x-default": langPath.es },
    },
    // El .ico se declara a mano para que lleve el prefijo del subdirectorio: un
    // navegador que no entienda el SVG pide /favicon.ico en la raiz del dominio,
    // donde en GitHub Pages no hay nada. Los dos salen del mismo mapa de pixeles
    // (npm run favicon).
    icons: {
      icon: [
        { url: asset("/icon.svg"), type: "image/svg+xml" },
        { url: asset("/favicon.ico"), sizes: "48x48" },
      ],
    },
    openGraph: {
      title: ui.meta.title,
      description: ui.meta.shortDescription,
      url: langPath[lang],
      siteName: profile.name,
      locale: ogLocale[lang],
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: ui.meta.title,
      description: ui.meta.shortDescription,
      images: [image.url],
    },
  };
}

export function Document({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html
      lang={htmlLang[lang]}
      className={`${fontPixel.variable} ${fontTerm.variable} h-full`}
      suppressHydrationWarning
    >
      {/* El aviso de la regla es para el router de pages: en el App Router un
          <head> propio en el layout raiz es lo documentado. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        {/* Antes de pintar: fija el tema guardado para que no haya fogonazo. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import { profile } from "@/content/portfolio";
import { asset, siteUrl } from "@/content/site";
import "./globals.css";

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

const title = "Victor Roberto Curzio — Desarrollador Full Stack";
const description =
  "Portfolio de Victor Roberto Curzio: arquitectura de software e integridad de datos con Node.js, TypeScript, React y bases relacionales. CRM, sistemas de gestión y plataformas SaaS. La Plata, Argentina.";
const shortDescription =
  "Arquitectura de software e integridad de datos con Node.js, TypeScript, React y bases relacionales. La Plata, Argentina.";

export const metadata: Metadata = {
  // Sin metadataBase, las URLs de las tarjetas para compartir quedan relativas y
  // el que las lee (WhatsApp, LinkedIn) no sabe resolverlas.
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
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
    title,
    description: shortDescription,
    url: "/",
    siteName: profile.name,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: shortDescription,
  },
};

// Datos estructurados: es la unica forma de que un buscador entienda que esta
// pagina es *una persona* con un puesto y un lugar, y no un texto cualquiera.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  url: siteUrl,
  sameAs: [profile.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "La Plata",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fontPixel.variable} ${fontTerm.variable} h-full`}>
      <body className="min-h-full" suppressHydrationWarning>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}

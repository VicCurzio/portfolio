import { buildMetadata, Document } from "@/components/layout/Document";
import "./globals.css";

// Raiz unica del sitio. Los dos idiomas cuelgan de aca: el espanol en "/" -- la
// URL que ya estaba indexada y la que figura en el CV -- y el ingles en "/en".
//
// Antes habia una raiz por idioma, para que cada <html lang> dijera la verdad.
// El costo era que cambiar de idioma recargaba el documento entero, porque el
// App Router no puede pasar de una raiz a otra sin volver a cargar. Con una sola
// raiz el cambio es una transicion de cliente: no se recarga nada.
//
// A cambio, el `lang` del <html> dice "es" tambien en la pagina en ingles. Lo
// compensa el contenedor de esa pagina, que declara `lang="en"` para todo lo que
// cuelga de el: un lector de pantalla elige bien la voz y el buscador ve el
// idioma del bloque. Los `hreflang` de la metadata siguen declarando las dos
// versiones.
export const metadata = buildMetadata("es");

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Document lang="es">{children}</Document>;
}

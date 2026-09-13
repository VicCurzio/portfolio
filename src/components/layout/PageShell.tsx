import type { ReactNode } from "react";
import { htmlLang, type Lang } from "@/content/i18n";

type PageShellProps = {
  lang: Lang;
  children: ReactNode;
};

export function PageShell({ lang, children }: PageShellProps) {
  return (
    // El `lang` va aca y no solo en el <html>: los dos idiomas comparten la raiz
    // del App Router, asi que el documento declara uno solo. Este contenedor
    // corrige el idioma de todo lo que cuelga de el, que es lo que mira un lector
    // de pantalla para elegir la voz.
    <div className="r-page" lang={htmlLang[lang]}>
      {children}
      {/* Las lineas de barrido van arriba de todo y no reciben clicks. */}
      <div className="r-crt" aria-hidden="true" />
    </div>
  );
}

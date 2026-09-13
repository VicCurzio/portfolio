"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";

type LangSwitchProps = {
  href: string;
  hrefLang: string;
  text: string;
  label: string;
};

export function LangSwitch({ href, hrefLang, text, label }: LangSwitchProps) {
  const router = useRouter();

  // Es un enlace de verdad y funciona sin JavaScript. Lo unico que agrega el
  // click es llevarse el #hash: si estabas leyendo Proyectos, la otra version
  // abre en Proyectos. Las anclas son las mismas en los dos idiomas justamente
  // para que esto sea posible.
  //
  // Con hash o sin el, la navegacion la hace el router: los dos idiomas comparten
  // la raiz del App Router, asi que el cambio no recarga el documento.
  function keepSection(event: MouseEvent<HTMLAnchorElement>) {
    const hash = window.location.hash;
    if (!hash) return;
    event.preventDefault();
    router.push(`${href}${hash}`);
  }

  return (
    <Link
      href={href}
      hrefLang={hrefLang}
      aria-label={label}
      className="r-btn r-btn--sm r-btn--lang"
      onClick={keepSection}
    >
      {text}
    </Link>
  );
}

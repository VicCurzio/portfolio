"use client";

import { useEffect, useRef, useState } from "react";

type EmailLinkProps = {
  email: string;
  label: string;
  copiedText: string;
  className?: string;
  // Si viene, el enlace es una fila del menu de contacto: el rotulo queda fijo
  // y lo que cambia es el valor de la derecha.
  value?: string;
};

// Un mailto: solo funciona si la computadora tiene un programa de correo
// configurado. Quien usa el correo desde el navegador hace click y no pasa
// nada. Por eso, ademas de abrir el correo, el click copia la direccion y lo
// avisa: en el peor caso, el mail ya esta en el portapapeles.
export function EmailLink({ email, label, copiedText, className, value }: EmailLinkProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  function copy() {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(email).then(
      () => {
        setCopied(true);
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setCopied(false), 2200);
      },
      () => {},
    );
  }

  // Los dos textos ocupan la misma celda y solo uno se ve: el ancho queda fijo
  // en el del mas largo, asi el boton no salta al cambiar.
  const swap = (normal: string) => (
    <span className="r-swap">
      <span className={copied ? "is-hidden" : undefined}>{normal}</span>
      <span className={copied ? undefined : "is-hidden"} aria-hidden="true">
        {copiedText}
      </span>
    </span>
  );

  return (
    <a href={`mailto:${email}`} className={className} onClick={copy}>
      {value === undefined ? (
        swap(label)
      ) : (
        <>
          {label}
          <span className="r-menu__value">{swap(value)}</span>
        </>
      )}
      <span className="r-sr" aria-live="polite">
        {copied ? copiedText : ""}
      </span>
    </a>
  );
}

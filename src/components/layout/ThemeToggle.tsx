"use client";

import { useSyncExternalStore } from "react";
import { applyTheme, readTheme, subscribeTheme, type Theme } from "./theme";

type ThemeToggleProps = {
  // Que dice el boton en cada tema. Dice a donde va, no donde esta: es lo que
  // va a pasar al apretarlo.
  light: string;
  dark: string;
  label: string;
};

// El tema no vive en React: vive en el atributo `data-theme` del <html>, que fija
// el script del <head> antes del primer pintado. Este componente lo lee de ahi.
//
// `useSyncExternalStore` es la forma de leer algo que vive afuera de React sin
// romper la hidratacion: el tercer argumento es lo que se usa al renderizar en el
// servidor -- oscuro, igual que el HTML del build -- y el segundo es lo que se lee
// en el navegador. Asi el primer render coincide con el del servidor y el valor
// real aparece sin pasar por un efecto que cambie el estado despues de pintar.
const enServidor = (): Theme => "dark";

export function ThemeToggle({ light, dark, label }: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribeTheme, readTheme, enServidor);

  return (
    <button
      type="button"
      className="intro-replay"
      onClick={() => applyTheme(theme === "dark" ? "light" : "dark")}
      aria-label={label}
    >
      {theme === "dark" ? light : dark}
    </button>
  );
}

// Tema claro y oscuro. El valor vive en el atributo `data-theme` del <html>:
// el CSS solo mira ese atributo, asi que nada en la pagina necesita saber de
// React para pintarse bien.
//
// Sin JavaScript el sitio queda oscuro, que es su identidad. Con JavaScript, el
// script de abajo corre antes del primer pintado y decide: lo que el visitante
// eligio la ultima vez, y si nunca eligio, lo que pide el sistema. Por eso es un
// script suelto en el <head> y no un efecto de React: un efecto corre despues de
// pintar, y ahi ya se vio el fogonazo del tema equivocado.

export type Theme = "light" | "dark";

export const THEME_KEY = "portfolio:theme";

export const THEME_INIT_SCRIPT = `(function(){try{var k=${JSON.stringify(
  THEME_KEY,
)},s=localStorage.getItem(k),t=(s==="light"||s==="dark")?s:(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

export function readTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

export function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    window.localStorage.setItem(THEME_KEY, theme);
  } catch {
    // Modo privado o almacenamiento bloqueado: el tema vale para esta visita.
  }
}

// Avisa cuando cambia `data-theme` en el <html>. Mira el atributo en vez de
// guardar el valor en React porque el atributo es la fuente de verdad: lo fija
// el script del <head> antes del primer pintado, y cualquiera que lo cambie
// -- este boton u otra pestania de la misma sesion -- queda reflejado.
export function subscribeTheme(onChange: () => void): () => void {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

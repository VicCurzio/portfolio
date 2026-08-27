// Convierte el nombre de un proyecto en un id de ancla estable.
//
// No usa expresiones regulares con escapes unicode a proposito: este repo se
// edita con scripts en Windows y los escapes se rompen en el camino. Un mapa
// de acentos explicito hace lo mismo y se lee igual de bien.
const ACCENTS: Record<string, string> = {
  á: "a",
  é: "e",
  í: "i",
  ó: "o",
  ú: "u",
  ü: "u",
  ñ: "n",
};

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .split("")
    .map((ch) => ACCENTS[ch] ?? ch)
    .map((ch) => ((ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9") ? ch : " "))
    .join("")
    .trim()
    .split(" ")
    .filter(Boolean)
    .join("-");
}

export function projectAnchor(name: string): string {
  return `proyecto-${slugify(name)}`;
}

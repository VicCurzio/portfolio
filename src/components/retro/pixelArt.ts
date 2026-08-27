// Pixel art propio, en el estilo de las consolas de 8 bits.
//
// Nada de esto es material de un juego existente: son mapas de pixeles dibujados
// para este sitio. Cada sprite es un array de strings donde cada caracter es un
// pixel y la letra elige el color en la paleta de abajo. Se escribe asi, y no
// como imagen, porque el dibujo entra en el diff de git y se corrige con el
// editor de texto en vez de con un editor de imagenes.

export type Palette = Record<string, string>;

// Paleta acotada a la altura de una NES: pocos colores, saturados, sin degrade.
export const PALETTE: Palette = {
  ".": "transparent",
  k: "#05060c", // contorno / sombra
  h: "#1b1420", // pelo y capucha
  f: "#f0c8a0", // piel
  b: "#2b4a8a", // buzo
  w: "#e8f4ff", // brillo
  s: "#151a2e", // pantalon
  c: "#3fb8c8", // bufanda (el acento del sitio)
  a: "#f7d51d", // ambar (texto de consola)
  x: "currentColor", // los glifos toman el color del contexto
};

// La figura del opening: alguien de espaldas al viento, parado en la terraza.
export const HERO = [
  "....kkkkkk....",
  "...khhhhhhk...",
  "..khhhhhhhhk..",
  "..khffffffhk..",
  "..khfkffkfhk..",
  "..khffffffhk..",
  "...kffffffk...",
  "...kcccccck...",
  "..kcbbbbbbck..",
  ".kbbbbbbbbbbk.",
  ".kbbwwwwwwbbk.",
  ".kbbwwwwwwbbk.",
  ".kbbbbbbbbbbk.",
  "..kbbbbbbbbk..",
  "..kssssssssk..",
  "...kss..ssk...",
  "...kss..ssk...",
  "...kss..ssk...",
  "..kkkk..kkkk..",
  "..kkkk..kkkk..",
];

// La bufanda al viento va aparte para poder animarla sola.
export const SCARF = [
  ".........ccc",
  "....cccccccc",
  "..cccccc....",
  "ccccc.......",
  "..cc........",
];

// Solo la cabeza, para la celda central de la grilla de proyectos.
export const FACE = HERO.slice(0, 8);

// Glifos de 8x8, uno por tipo de proyecto. Usan currentColor.
export const GLYPHS: Record<string, string[]> = {
  Trabajo: [
    "..xxxx..",
    "..x..x..",
    "xxxxxxxx",
    "xxxxxxxx",
    "xxx..xxx",
    "xxxxxxxx",
    "xxxxxxxx",
    ".xxxxxx.",
  ],
  "Producto propio": [
    "...xx...",
    "..xxxx..",
    "..xxxx..",
    ".xxxxxx.",
    "xxxxxxxx",
    "x.xxxx.x",
    "...xx...",
    "..x..x..",
  ],
  Freelance: [
    "....xx..",
    "...xx...",
    "..xx....",
    "..xxxxx.",
    ".....xx.",
    "....xx..",
    "...xx...",
    "..xx....",
  ],
  "Prueba tecnica": [
    "..xxxx..",
    "...xx...",
    "...xx...",
    "..xxxx..",
    ".xxxxxx.",
    "xxxxxxxx",
    "xx.xx.xx",
    ".xxxxxx.",
  ],
  Herramienta: [
    ".x.xx.x.",
    ".xxxxxx.",
    "xxxxxxxx",
    "xx.xx.xx",
    "xx.xx.xx",
    "xxxxxxxx",
    ".xxxxxx.",
    ".x.xx.x.",
  ],
};

// El tipo "Prueba tecnica" llega con tilde desde el contenido; la clave del
// glifo se escribe sin ella para que el archivo no dependa de la codificacion.
export function glyphFor(kind: string): string[] {
  return GLYPHS[kind.replace("é", "e")] ?? GLYPHS.Herramienta;
}

// La marca: una V de 16 por 16, la inicial del apellido. De aca salen el favicon
// y el icono del sitio (scripts/build-favicon.mjs), asi que el dibujo vive en un
// solo lugar: si se corrige, se corrige para los dos.
//
// El trazo baja tres pixeles de ancho y converge de a uno cada dos filas. La
// sombra no esta dibujada: la agrega quien renderiza, corriendo la letra un
// pixel abajo y a la derecha, igual que el `text-shadow` de los titulos.
export const LOGO = [
  "................",
  "................",
  "..www......www..",
  "..www......www..",
  "...www....www...",
  "...www....www...",
  "....www..www....",
  "....www..www....",
  ".....wwwwww.....",
  ".....wwwwww.....",
  "......wwww......",
  "......wwww......",
  ".......ww.......",
  "................",
  "................",
  "................",
];

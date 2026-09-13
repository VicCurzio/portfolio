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

// Glifos de 8x8, uno por tipo de proyecto. Usan currentColor. Las claves son
// las de `ProjectKind` en content/projects.ts: el dibujo depende del tipo de
// proyecto, no del idioma en el que se lo muestre.
export const GLYPHS: Record<string, string[]> = {
  work: [
    "..xxxx..",
    "..x..x..",
    "xxxxxxxx",
    "xxxxxxxx",
    "xxx..xxx",
    "xxxxxxxx",
    "xxxxxxxx",
    ".xxxxxx.",
  ],
  product: [
    "...xx...",
    "..xxxx..",
    "..xxxx..",
    ".xxxxxx.",
    "xxxxxxxx",
    "x.xxxx.x",
    "...xx...",
    "..x..x..",
  ],
  freelance: [
    "....xx..",
    "...xx...",
    "..xx....",
    "..xxxxx.",
    ".....xx.",
    "....xx..",
    "...xx...",
    "..xx....",
  ],
  "tech-test": [
    "..xxxx..",
    "...xx...",
    "...xx...",
    "..xxxx..",
    ".xxxxxx.",
    "xxxxxxxx",
    "xx.xx.xx",
    ".xxxxxx.",
  ],
  tool: [
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

export function glyphFor(kind: string): string[] {
  return GLYPHS[kind] ?? GLYPHS.tool;
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

// La cara mirando a donde se le pida. Los ojos son dos pixeles de contorno
// dentro del ovalo de piel: correrlos una casilla en cada eje da las nueve
// direcciones (las cuatro diagonales incluidas), que es todo lo que un dibujo
// de este tamanio puede decir.
//
// `dx` y `dy` van de -1 a 1: -1 es izquierda y arriba, 1 es derecha y abajo.
//
// Las tres filas del ovalo se rehacen enteras en piel antes de poner los ojos:
// si no, al moverlos quedarian los anteriores pintados y la cara terminaria con
// cuatro ojos.
export function faceLooking(dx: number, dy: number): string[] {
  const fila = 4 + Math.sign(dy);
  const izq = 5 + Math.sign(dx);
  const der = 8 + Math.sign(dx);
  return FACE.map((row, y) => {
    if (y < 3 || y > 5) return row;
    const cells = [...row];
    for (let x = 4; x <= 9; x += 1) cells[x] = "f";
    if (y === fila) {
      cells[izq] = "k";
      cells[der] = "k";
    }
    return cells.join("");
  });
}

// Glifos por proyecto. El tipo de proyecto sirve para agrupar, pero cuando el
// proyecto tiene una imagen propia y obvia -- una pelota, una nota -- decir eso
// vale mas que decir "producto propio". La tabla de abajo pisa al glifo del tipo
// solo donde hay algo mejor que mostrar.

const BALL = [
  "..xxxx..",
  ".x.xx.x.",
  "xx.xx.xx",
  "x.xxxx.x",
  "x.xxxx.x",
  "xx.xx.xx",
  ".x.xx.x.",
  "..xxxx..",
];

const NOTE = [
  "...xxxx.",
  "...x..xx",
  "...x...x",
  "...x..x.",
  "...x....",
  "...x....",
  "xxxx....",
  "xxxx....",
];

// Aerosol, y no un bicho tachado. En ocho por ocho y con un solo color no hay
// pixeles para dibujar el bicho y ademas una marca que se lea como tachadura:
// probamos la diagonal y la equis recortadas del dibujo y las dos lo dejaban
// hecho escombros. El aerosol dice lo mismo -- control de plagas -- y se lee de
// una.
const SPRAY = [
  "...xx...",
  "..xxxx..",
  "..x..x..",
  ".xxxxxx.",
  ".x.xx.x.",
  ".xxxxxx.",
  ".xxxxxx.",
  ".xxxxxx.",
];

const ROBOT = [
  "...xx...",
  ".xxxxxx.",
  ".x.xx.x.",
  ".xxxxxx.",
  "..xxxx..",
  "xxxxxxxx",
  "x.xxxx.x",
  "..x..x..",
];

const PAGE = [
  "xxxxxx..",
  "x.....x.",
  "x......x",
  "x.xxxx.x",
  "x......x",
  "x.xxxx.x",
  "x......x",
  "xxxxxxxx",
];

const PROJECT_GLYPHS: Record<string, string[]> = {
  "Dial Sport": BALL,
  Musik: NOTE,
  "Plagas Out": SPRAY,
  "Bot de WhatsApp": ROBOT,
  Portfolio: PAGE,
};

export function glyphForProject(name: string, kind: string): string[] {
  return PROJECT_GLYPHS[name] ?? glyphFor(kind);
}

// Genera el favicon del sitio a partir del mapa de pixeles de la marca
// (src/components/retro/pixelArt.ts), asi el icono y el pixel art del sitio
// nunca se desincronizan.
//
// Salida:
//   src/app/icon.svg    - lo usan los navegadores modernos, escala sin perder filo
//   src/app/favicon.ico - respaldo para /favicon.ico y para Safari viejo
//
// Correr con: npm run favicon
//
// No usa dependencias: el PNG se arma a mano con zlib, que viene con Node, y el
// ICO no es mas que una cabecera con los PNG pegados atras.

import { deflateSync } from "node:zlib";
import { writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const BG = [5, 6, 12, 255];
const GRID = [22, 40, 52, 255];
const SHADOW = [43, 74, 138, 255];
const BODY = [232, 244, 255, 255];

const SIZE = 16;
const SIZES = [16, 32, 48];

// Dibuja la marca en una grilla de 16 por 16, en el orden en que se apilan las
// capas: fondo, grilla, sombra y letra.
function compose(map) {
  const px = [];
  for (let y = 0; y < SIZE; y += 1) {
    for (let x = 0; x < SIZE; x += 1) {
      const onGrid = x % 4 === 0 || y % 4 === 0;
      px.push(onGrid ? GRID : BG);
    }
  }
  const put = (x, y, color) => {
    if (x < 0 || y < 0 || x >= SIZE || y >= SIZE) return;
    px[y * SIZE + x] = color;
  };
  map.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      if (ch === "w") put(x + 1, y + 1, SHADOW);
    });
  });
  map.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      if (ch === "w") put(x, y, BODY);
    });
  });
  return px;
}

// Amplia por vecino mas cercano: un pixel del dibujo pasa a ser un cuadrado de
// scale por scale. Es la unica forma de que a 48 siga viendose pixel art y no
// una mancha suavizada.
function scaleUp(px, scale) {
  const out = [];
  for (let y = 0; y < SIZE * scale; y += 1) {
    for (let x = 0; x < SIZE * scale; x += 1) {
      out.push(px[Math.floor(y / scale) * SIZE + Math.floor(x / scale)]);
    }
  }
  return out;
}

// --- PNG ---------------------------------------------------------------

const CRC_TABLE = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c;
  }
  return table;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (const byte of buf) c = CRC_TABLE[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([length, body, crc]);
}

function toPng(px, side) {
  // Cada fila lleva adelante un byte que dice como esta filtrada. Cero es "sin
  // filtro": para un dibujo de pocos colores no hay nada que ganar filtrando.
  const raw = Buffer.alloc(side * (side * 4 + 1));
  let at = 0;
  for (let y = 0; y < side; y += 1) {
    raw[at] = 0;
    at += 1;
    for (let x = 0; x < side; x += 1) {
      const [r, g, b, a] = px[y * side + x];
      raw[at] = r;
      raw[at + 1] = g;
      raw[at + 2] = b;
      raw[at + 3] = a;
      at += 4;
    }
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(side, 0);
  ihdr.writeUInt32BE(side, 4);
  ihdr[8] = 8; // bits por canal
  ihdr[9] = 6; // color con transparencia (RGBA)

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

// --- ICO ---------------------------------------------------------------

function toIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2); // 1 = icono
  header.writeUInt16LE(images.length, 4);

  const entries = [];
  let offset = 6 + images.length * 16;
  for (const { side, png } of images) {
    const entry = Buffer.alloc(16);
    entry[0] = side;
    entry[1] = side;
    entry.writeUInt16LE(1, 4); // planos
    entry.writeUInt16LE(32, 6); // bits por pixel
    entry.writeUInt32LE(png.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += png.length;
  }

  return Buffer.concat([header, ...entries, ...images.map((i) => i.png)]);
}

// --- SVG ---------------------------------------------------------------

// Junta los pixeles contiguos del mismo color en un rectangulo, igual que hace
// PixelSprite en el sitio: menos nodos y el mismo dibujo.
function toSvg(px) {
  const rects = [];
  for (let y = 0; y < SIZE; y += 1) {
    let x = 0;
    while (x < SIZE) {
      const color = px[y * SIZE + x];
      let w = 1;
      while (x + w < SIZE && px[y * SIZE + x + w] === color) w += 1;
      const hex = "#" + color.slice(0, 3).map((c) => c.toString(16).padStart(2, "0")).join("");
      rects.push(`<rect x="${x}" y="${y}" width="${w}" height="1" fill="${hex}"/>`);
      x += w;
    }
  }
  return [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">',
    ...rects,
    "</svg>",
    "",
  ].join("");
}

// --- Salida ------------------------------------------------------------

const art = await import(
  pathToFileURL(resolve(root, "src/components/retro/pixelArt.ts")).href
);

const base = compose(art.LOGO);

const images = SIZES.map((side) => ({
  side,
  png: toPng(side === SIZE ? base : scaleUp(base, side / SIZE), side),
}));

await writeFile(resolve(root, "src/app/favicon.ico"), toIco(images));
await writeFile(resolve(root, "src/app/icon.svg"), toSvg(base), "utf8");

console.log(`favicon.ico listo (${SIZES.join(", ")} px) e icon.svg escrito.`);

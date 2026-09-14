// Genera la imagen que muestran LinkedIn, WhatsApp y compania al pegar el link
// del sitio (Open Graph), una por idioma, a partir del mismo contenido y del
// mismo pixel art del sitio.
//
//   npm run og   ->   public/og.png y public/og-en.png  (1200 x 630)
//
// Arma un HTML con el cartel y lo fotografia con Chrome o Edge headless, igual
// que el CV: sin dependencias nuevas. Las fuentes salen de Google Fonts, asi que
// necesita conexion.

import { execFile } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const BROWSERS = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
];

const { HERO, PALETTE } = await import(pathToFileURL(resolve(root, "src/components/retro/pixelArt.ts")).href);
const { profile } = await import(pathToFileURL(resolve(root, "src/content/portfolio.ts")).href);
const { profileText } = await import(pathToFileURL(resolve(root, "src/content/portfolio.en.ts")).href);

const esc = (value) => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// El retrato como SVG de rectangulos, un pixel del mapa por unidad.
function sprite(map) {
  const rects = [];
  map.forEach((row, y) => {
    [...row].forEach((cell, x) => {
      const fill = PALETTE[cell];
      if (fill && fill !== "transparent") rects.push(`<rect x="${x}" y="${y}" width="1" height="1" fill="${fill}"/>`);
    });
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${map[0].length} ${map.length}" shape-rendering="crispEdges">${rects.join("")}</svg>`;
}

const COPY = {
  es: { title: profile.title, line: "Arquitectura de software · Node.js · TypeScript · React", file: "og.png" },
  en: { title: profileText.title, line: "Software architecture · Node.js · TypeScript · React", file: "og-en.png" },
};

function render(lang) {
  const c = COPY[lang];
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=block" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; }
  html, body { width: 1200px; height: 630px; overflow: hidden; }
  body {
    position: relative;
    background-color: #05060c;
    background-image:
      linear-gradient(rgba(63, 184, 200, 0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(63, 184, 200, 0.07) 1px, transparent 1px);
    background-size: 30px 30px;
    font-family: "VT323", monospace;
    color: #e8f4ff;
  }
  .frame { position: absolute; inset: 28px; border: 6px solid #2b4a8a; }
  .text { position: absolute; left: 90px; top: 120px; width: 690px; }
  .name { font-family: "Press Start 2P", monospace; font-size: 66px; line-height: 1.35; text-shadow: 6px 6px 0 #2b4a8a; }
  .name span { display: block; }
  .name .last { color: #3fb8c8; text-shadow: 6px 6px 0 #12495c; }
  .title { margin-top: 34px; font-family: "Press Start 2P", monospace; font-size: 26px; color: #f7d51d; }
  .line { margin-top: 26px; font-size: 31px; white-space: nowrap; color: #bcd4e2; }
  .url { position: absolute; left: 90px; bottom: 70px; font-size: 30px; color: #7f97a6; }
  .hero { position: absolute; right: 100px; top: 110px; width: 294px; height: 420px; filter: drop-shadow(10px 10px 0 rgba(0, 0, 0, 0.6)); }
  .hero svg { width: 100%; height: 100%; }
</style>
</head>
<body>
  <div class="frame"></div>
  <div class="text">
    <h1 class="name"><span>Victor R.</span><span class="last">Curzio</span></h1>
    <p class="title">${esc(c.title)}</p>
    <p class="line">${esc(c.line)}</p>
  </div>
  <p class="url">viccurzio.github.io/portfolio</p>
  <div class="hero">${sprite(HERO)}</div>
</body>
</html>
`;
}

const browser = BROWSERS.find((path) => existsSync(path));
if (!browser) {
  console.log("No encontre Chrome ni Edge para sacar la captura.");
  process.exit(1);
}

// El HTML es intermedio: va a una carpeta temporal, no al repo.
const tmpDir = resolve(tmpdir(), "portfolio-og");
await mkdir(tmpDir, { recursive: true });

for (const lang of ["es", "en"]) {
  const htmlPath = resolve(tmpDir, `og-${lang}.html`);
  const pngPath = resolve(root, "public", COPY[lang].file);
  await writeFile(htmlPath, render(lang), "utf8");
  await execFileAsync(browser, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=1200,630",
    // Tiempo para que lleguen las fuentes antes de la foto.
    "--virtual-time-budget=8000",
    `--screenshot=${pngPath}`,
    pathToFileURL(htmlPath).href,
  ]);
  console.log(`OG:   ${pngPath}`);
}

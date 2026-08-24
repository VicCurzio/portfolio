// Genera el CV en PDF a partir del mismo contenido que alimenta el sitio
// (src/content/portfolio.ts), asi el CV y el portfolio nunca se desincronizan.
//
//   npm run cv
//
// El HTML intermedio queda en cv/CV_Victor_Curzio.html por si hay que
// retocar estilos: abrilo en el browser y recarga, sin volver a imprimir.
//
// La impresion la hace Chrome (o Edge) headless con --print-to-pdf, para no
// sumar puppeteer ni ninguna dependencia al repo.

import { execFile } from "node:child_process";
import { existsSync } from "node:fs";
import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, "cv");
const htmlPath = resolve(outDir, "CV_Victor_Curzio.html");
const pdfPath = resolve(outDir, "CV_Victor_Curzio.pdf");
// El sitio lo ofrece para descargar, asi que la copia publicada se rehace en
// cada build: si vive solo en cv/, el PDF del sitio queda viejo sin avisar.
const publicPdfPath = resolve(root, "public", "CV_Victor_Curzio.pdf");

const BROWSERS = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
];

const esc = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const bare = (url) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

function render({ profile, experience, education, skillGroups, softSkills, languages, courses }) {
  const contact = [
    esc(profile.location),
    `<a href="mailto:${esc(profile.email)}">${esc(profile.email)}</a>`,
    esc(profile.phone),
    `<a href="${esc(profile.linkedin)}">${esc(bare(profile.linkedin))}</a>`,
    `<a href="${esc(profile.github)}">${esc(bare(profile.github))}</a>`,
    `<a href="${esc(profile.website)}">${esc(bare(profile.website))}</a>`,
  ].join('<span class="sep">·</span>');

  const jobs = experience
    .map(
      (job) => `
      <article class="job">
        <header>
          <h3>${esc(job.role)}<span class="at"> — </span>${esc(job.company)}</h3>
          <p class="meta">${esc(job.period)}<span class="sep">·</span>${esc(job.location)}</p>
        </header>
        <ul>${job.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
        <p class="stack"><strong>Stack:</strong> ${job.stack.map(esc).join(" · ")}</p>
      </article>`
    )
    .join("");

  const skills = skillGroups
    .map(
      (group) => `
      <div class="skill-group">
        <h4>${esc(group.title)}</h4>
        <p>${group.items.map(esc).join(" · ")}</p>
      </div>`
    )
    .join("");

  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>${esc(profile.name)} — CV</title>
<style>
  @page { size: A4; margin: 11mm 12mm; }
  * { box-sizing: border-box; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body {
    margin: 0;
    font: 8.7pt/1.34 "Segoe UI", "Helvetica Neue", Arial, sans-serif;
    color: #1b1f24;
  }
  a { color: #1b1f24; text-decoration: none; }
  h1 { font-size: 17.5pt; margin: 0; letter-spacing: -0.01em; }
  .role { font-size: 9.8pt; color: #4a5158; margin: 2pt 0 5pt; font-weight: 600; }
  .contact { font-size: 8.4pt; color: #4a5158; margin: 0; }
  .sep { padding: 0 5pt; color: #b6bcc2; }
  header.top { border-bottom: 1.2pt solid #1b1f24; padding-bottom: 6pt; margin-bottom: 8pt; }
  section { margin-bottom: 8pt; break-inside: avoid; }
  h2 {
    font-size: 8.4pt; text-transform: uppercase; letter-spacing: 0.11em;
    color: #6b7280; margin: 0 0 6pt; padding-bottom: 3pt;
    border-bottom: 0.6pt solid #dfe3e7;
  }
  .summary { margin: 0; text-align: justify; }
  .job { margin-bottom: 7pt; break-inside: avoid; }
  .job h3 { font-size: 9.4pt; margin: 0; }
  .job .at { color: #9aa1a8; font-weight: 400; }
  .meta { font-size: 8.4pt; color: #6b7280; margin: 1pt 0 4pt; }
  .job ul { margin: 0; padding-left: 12pt; }
  .job li { margin-bottom: 1.8pt; text-align: justify; }
  .stack { font-size: 8.6pt; color: #4a5158; margin: 4pt 0 0; }
  .skills { display: grid; grid-template-columns: 1fr 1fr; gap: 4pt 16pt; }
  .skill-group h4 { font-size: 8.6pt; margin: 0 0 1pt; }
  .skill-group p { margin: 0; font-size: 8.8pt; color: #4a5158; }
  .edu { margin: 0 0 4pt; }
  .edu strong { font-size: 9.6pt; }
  .courses { margin: 0; padding-left: 12pt; font-size: 8.8pt; color: #4a5158; }
  .courses li { margin-bottom: 1.4pt; }
  .extra { font-size: 8.8pt; color: #4a5158; margin: 5pt 0 0; }
</style>
</head>
<body>
  <header class="top">
    <h1>${esc(profile.name)}</h1>
    <p class="role">${esc(profile.title)}<span class="sep">·</span>${esc(profile.subtitle)}</p>
    <p class="contact">${contact}</p>
  </header>

  <section>
    <h2>Resumen</h2>
    <p class="summary">${esc(profile.tagline)}</p>
  </section>

  <section>
    <h2>Experiencia</h2>
    ${jobs}
  </section>

  <section>
    <h2>Formación</h2>
    <p class="edu"><strong>${esc(education.degree)}</strong> — ${esc(education.school)}<span class="sep">·</span>${esc(education.period)}</p>
    <ul class="courses">${courses.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
  </section>

  <section>
    <h2>Habilidades</h2>
    <div class="skills">${skills}</div>
    <p class="extra"><strong>Idiomas:</strong> ${languages.map((l) => `${esc(l.name)} — ${esc(l.level)}`).join(" · ")}</p>
    <p class="extra"><strong>Competencias:</strong> ${softSkills.map(esc).join(" · ")}</p>
  </section>
</body>
</html>
`;
}

const browser = BROWSERS.find((path) => existsSync(path));

const content = await import(pathToFileURL(resolve(root, "src/content/portfolio.ts")).href);
await mkdir(outDir, { recursive: true });
await writeFile(htmlPath, render(content), "utf8");
console.log(`HTML: ${htmlPath}`);

if (!browser) {
  console.log(
    "No encontre Chrome ni Edge para imprimir. Abri el HTML y usa Ctrl+P > Guardar como PDF."
  );
  process.exit(0);
}

await execFileAsync(browser, [
  "--headless=new",
  "--disable-gpu",
  "--no-pdf-header-footer",
  `--print-to-pdf=${pdfPath}`,
  pathToFileURL(htmlPath).href,
]);

await mkdir(resolve(root, "public"), { recursive: true });
await copyFile(pdfPath, publicPdfPath);

console.log(`PDF:  ${pdfPath}`);
console.log(`Sitio: ${publicPdfPath}`);

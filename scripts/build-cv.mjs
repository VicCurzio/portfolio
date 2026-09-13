// Genera el CV en PDF a partir del mismo contenido que alimenta el sitio
// (src/content/portfolio.ts y su traduccion portfolio.en.ts), asi el CV y el
// portfolio nunca se desincronizan.
//
//   npm run cv                  -> CV completo en espanol (el sitio publica el Full de cada idioma)
//   npm run cv -- backend en    -> variante y/o idioma puntual
//   npm run cv:all              -> las tres variantes en los dos idiomas
//
// Variantes: full (por defecto), frontend, backend. Idiomas: es (por defecto), en.
// El HTML intermedio queda en cv/ por si hay que retocar estilos: abrilo en el
// browser y recarga, sin volver a imprimir.
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

// El sitio lo ofrece para descargar, asi que la copia publicada se rehace en
// cada build: si vive solo en cv/, el PDF del sitio queda viejo sin avisar.
const publicPdf = (lang) => resolve(root, "public", `CV_Victor_Curzio${lang === "en" ? "_EN" : ""}.pdf`);

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

// Los titulos de seccion son lo unico del CV que no sale del contenido.
const LABELS = {
  es: {
    summary: "Resumen",
    experience: "Experiencia",
    education: "Formación",
    courses: "Cursos",
    skills: "Habilidades",
    languages: "Idiomas",
    softSkills: "Competencias",
  },
  en: {
    summary: "Summary",
    experience: "Experience",
    education: "Education",
    courses: "Courses",
    skills: "Skills",
    languages: "Languages",
    softSkills: "Soft skills",
  },
};

const bare = (url) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

function render({ lang, profile, experience, education, skillGroups, softSkills, languages, courses }) {
  const t = LABELS[lang];
  // Cada dato va en un item que no se parte: si la linea no entra, corta entre
  // items y no en medio de una URL. Se separan en dos lineas (datos y perfiles)
  // para que el corte sea una decision y no lo que sobre del ancho.
  const line = (items) => items.map((item) => `<span class="item">${item}</span>`).join('<span class="sep">·</span>');

  const contactData = line([
    esc(profile.location),
    `<a href="mailto:${esc(profile.email)}">${esc(profile.email)}</a>`,
    esc(profile.phone),
  ]);

  const contactLinks = line([
    `<a href="${esc(profile.linkedin)}">${esc(bare(profile.linkedin))}</a>`,
    `<a href="${esc(profile.github)}">${esc(bare(profile.github))}</a>`,
    `<a href="${esc(profile.website)}">${esc(bare(profile.website))}</a>`,
  ]);

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
<html lang="${lang}">
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
  .contact + .contact { margin-top: 2pt; }
  .contact .item { white-space: nowrap; }
  .sep { padding: 0 5pt; color: #b6bcc2; }
  header.top { border-bottom: 1.2pt solid #1b1f24; padding-bottom: 6pt; margin-bottom: 8pt; }
  section { margin-bottom: 8pt; }
  .job, .skills, .edu, .courses { break-inside: avoid; }
  h2 {
    font-size: 8.4pt; text-transform: uppercase; letter-spacing: 0.11em;
    color: #6b7280; margin: 0 0 6pt; padding-bottom: 3pt;
    border-bottom: 0.6pt solid #dfe3e7;
    break-after: avoid;
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
  .edu { margin: 0 0 6pt; }
  .courses-title { font-size: 8.6pt; margin: 0 0 2pt; }
  .edu strong { font-size: 9.6pt; }
  .courses { margin: 0; padding-left: 12pt; font-size: 8.8pt; color: #4a5158; }
  .courses li { margin-bottom: 1.4pt; }
  .langs { margin: 0; font-size: 8.8pt; color: #4a5158; }
  .extra { font-size: 8.8pt; color: #4a5158; margin: 5pt 0 0; }
</style>
</head>
<body>
  <header class="top">
    <h1>${esc(profile.name)}</h1>
    <p class="role">${esc(profile.title)}<span class="sep">·</span>${esc(profile.subtitle)}</p>
    <p class="contact">${contactData}</p>
    <p class="contact">${contactLinks}</p>
  </header>

  <section>
    <h2>${t.summary}</h2>
    <p class="summary">${esc(profile.tagline)}</p>
  </section>

  <section>
    <h2>${t.experience}</h2>
    ${jobs}
  </section>

  <section>
    <h2>${t.education}</h2>
    <p class="edu"><strong>${esc(education.degree)}</strong> — ${esc(education.school)}<span class="sep">·</span>${esc(education.period)}</p>
    <h4 class="courses-title">${t.courses}</h4>
    <ul class="courses">${courses.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
  </section>

  <section>
    <h2>${t.skills}</h2>
    <div class="skills">${skills}</div>
  </section>

  <section>
    <h2>${t.languages}</h2>
    <p class="langs">${languages.map((l) => `<strong>${esc(l.name)}</strong> — ${esc(l.level)}${l.detail ? ` — ${esc(l.detail)}` : ""}`).join('<span class="sep">·</span>')}</p>
  </section>

  <section>
    <h2>${t.softSkills}</h2>
    <p class="langs">${softSkills.map(esc).join('<span class="sep">·</span>')}</p>
  </section>
</body>
</html>
`;
}

// Arma el contenido en un idioma. Replica la parte de src/content/content.ts
// que usa el CV: ese archivo no se puede importar desde Node porque sus imports
// no llevan extension.
function localize(base, en, lang) {
  if (lang === "es") return { lang, ...base };
  const pick = (table, key, fallback) => table[key] ?? fallback;
  return {
    lang,
    profile: { ...base.profile, ...en.profileText },
    experience: base.experience.map((job) => {
      const tr = en.experienceText[job.company];
      return { ...job, ...(tr ?? {}) };
    }),
    education: { ...base.education, ...en.educationText },
    skillGroups: base.skillGroups.map((group) => ({
      title: pick(en.skillGroupTitles, group.title, group.title),
      items: group.items.map((item) => pick(en.skillItems, item, item)),
    })),
    softSkills: base.softSkills.map((skill) => pick(en.softSkillsText, skill, skill)),
    languages: base.languages.map((entry) => pick(en.languagesText, entry.name, entry)),
    courses: base.courses.map((course) => pick(en.coursesText, course, course)),
  };
}

// Une el contenido con una variante: `highlights` y `stack` se pisan por
// empresa en vez de concatenarse, para poder recortar un trabajo sin tocar el
// contenido general. Cada variante declara sus reemplazos por idioma.
function applyTarget(content, overrides) {
  if (!overrides) return content;
  const jobs = overrides.experience ?? {};
  return {
    ...content,
    profile: { ...content.profile, ...overrides.profile },
    experience: content.experience.map((job) => ({ ...job, ...(jobs[job.company] ?? {}) })),
    education: { ...content.education, ...overrides.education },
    skillGroups: overrides.skillGroups ?? content.skillGroups,
    softSkills: overrides.softSkills ?? content.softSkills,
    languages: overrides.languages ?? content.languages,
    courses: overrides.courses ?? content.courses,
  };
}

const VARIANTS = ["full", "frontend", "backend"];
const LANGS = ["es", "en"];

const args = process.argv.slice(2);
const all = args.includes("all");
const variants = all ? VARIANTS : [args.find((a) => VARIANTS.includes(a)) ?? "full"];
const langs = all ? LANGS : [args.find((a) => LANGS.includes(a)) ?? "es"];

const browser = BROWSERS.find((path) => existsSync(path));
const base = await import(pathToFileURL(resolve(root, "src/content/portfolio.ts")).href);
const en = await import(pathToFileURL(resolve(root, "src/content/portfolio.en.ts")).href);

await mkdir(outDir, { recursive: true });

for (const variant of variants) {
  const target =
    variant === "full"
      ? null
      : (await import(pathToFileURL(resolve(root, "scripts/cv-targets", `${variant}.mjs`)).href)).default;

  for (const lang of langs) {
    const content = applyTarget(localize(base, en, lang), target?.[lang]);
    const suffix = `${target ? `_${target.suffix}` : ""}${lang === "en" ? "_EN" : ""}`;
    const htmlPath = resolve(outDir, `CV_Victor_Curzio${suffix}.html`);
    const pdfPath = resolve(outDir, `CV_Victor_Curzio${suffix}.pdf`);

    await writeFile(htmlPath, render(content), "utf8");
    console.log(`HTML: ${htmlPath}`);

    if (!browser) {
      console.log("No encontre Chrome ni Edge para imprimir. Abri el HTML y usa Ctrl+P > Guardar como PDF.");
      continue;
    }

    await execFileAsync(browser, [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--print-to-pdf=${pdfPath}`,
      pathToFileURL(htmlPath).href,
    ]);
    console.log(`PDF:  ${pdfPath}`);

    // El sitio ofrece el CV completo, cada idioma el suyo.
    if (!target) {
      await mkdir(resolve(root, "public"), { recursive: true });
      await copyFile(pdfPath, publicPdf(lang));
      console.log(`Sitio: ${publicPdf(lang)}`);
    }
  }
}

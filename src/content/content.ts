import type { Lang } from "./i18n";
import { courses, education, experience, languages, profile, skillGroups, softSkills } from "./portfolio";
import * as enProfile from "./portfolio.en";
import { otherRepos, projects, type ProjectKind } from "./projects";
import * as enProjects from "./projects.en";
import { projectAnchor } from "./slug";
import { ui, type Ui } from "./ui";

// El contenido ya resuelto en un idioma: es lo unico que ven los componentes.
// Aca se juntan los datos (portfolio.ts, projects.ts, siempre en espanol) con
// su traduccion (los archivos .en.ts) y con los textos de interfaz (ui.ts).
//
// Las tablas de traduccion son estrictas — no compilan si falta una entrada —
// pero la busqueda se hace por string, asi que en esta capa se las ensancha a
// Record<string, ...>. La garantia se paga una vez, en el archivo de origen.

// Los datos en espanol estan escritos con `as const`, asi que sus tipos son el
// texto exacto ("Desarrollador Full-Stack" y no `string`). Eso es lo que hace
// posibles las tablas de traduccion estrictas, pero aca hay que ensanchar: la
// version en ingles dice otra cosa y sigue siendo el mismo campo.
export type Profile = { [K in keyof typeof profile]: string };
export type Education = { [K in keyof typeof education]: string };

export type Job = {
  company: string;
  role: string;
  period: string;
  location: string;
  stack: readonly string[];
  highlights: readonly string[];
};

export type ProjectView = {
  // El ancla sale siempre del nombre original: asi el link a un proyecto es el
  // mismo en los dos idiomas y cambiar de idioma no rompe el #hash.
  anchor: string;
  name: string;
  kind: ProjectKind;
  kindLabel: string;
  period: string;
  summary: string;
  did: readonly string[];
  how: readonly string[];
  stack: readonly string[];
  links: readonly { label: string; url: string }[];
  repoNote?: string;
  image?: string;
};

export type RepoView = {
  name: string;
  role: string;
  status: string;
  description: string;
  url?: string;
  image?: string;
};

export type Content = {
  lang: Lang;
  ui: Ui;
  profile: Profile;
  experience: readonly Job[];
  education: Education;
  skillGroups: readonly { title: string; items: readonly string[] }[];
  softSkills: readonly string[];
  languages: readonly { name: string; level: string; detail: string; note: string }[];
  courses: readonly string[];
  projects: readonly ProjectView[];
  otherRepos: readonly RepoView[];
};

type JobText = (typeof enProfile.experienceText)[keyof typeof enProfile.experienceText];
type ProjectText = (typeof enProjects.projectsText)[keyof typeof enProjects.projectsText];

const jobText = enProfile.experienceText as Record<string, JobText | undefined>;
const projectText = enProjects.projectsText as Record<string, ProjectText | undefined>;
const linkLabels = enProjects.linkLabels as Record<string, string | undefined>;
const repoRoles = enProjects.repoRoles as Record<string, string | undefined>;
const repoStatuses = enProjects.repoStatuses as Record<string, string | undefined>;
const repoDescriptions = enProjects.repoDescriptions as Record<string, string | undefined>;
const groupTitles = enProfile.skillGroupTitles as Record<string, string | undefined>;
const softText = enProfile.softSkillsText as Record<string, string | undefined>;
const langText = enProfile.languagesText as Record<
  string,
  { name: string; level: string; detail: string; note: string } | undefined
>;
const courseText = enProfile.coursesText as Record<string, string | undefined>;

function build(lang: Lang): Content {
  const t = ui[lang];
  const en = lang === "en";

  return {
    lang,
    ui: t,
    profile: en ? { ...profile, ...enProfile.profileText } : profile,
    experience: experience.map((job) => {
      const tr = en ? jobText[job.company] : undefined;
      return {
        company: job.company,
        stack: job.stack,
        role: tr?.role ?? job.role,
        period: tr?.period ?? job.period,
        location: tr?.location ?? job.location,
        highlights: tr?.highlights ?? job.highlights,
      };
    }),
    education: en ? { ...education, ...enProfile.educationText } : education,
    skillGroups: skillGroups.map((group) => ({
      title: (en ? groupTitles[group.title] : undefined) ?? group.title,
      // Los nombres de tecnologia no se traducen; solo las pocas escritas en
      // prosa tienen entrada en la tabla.
      items: group.items.map((item) => (en ? (enProfile.skillItems[item] ?? item) : item)),
    })),
    softSkills: softSkills.map((skill) => (en ? (softText[skill] ?? skill) : skill)),
    languages: languages.map((entry) => (en ? (langText[entry.name] ?? entry) : entry)),
    courses: courses.map((course) => (en ? (courseText[course] ?? course) : course)),
    projects: projects.map((project) => {
      const p = project as (typeof projects)[number] & {
        links?: readonly { label: string; url: string }[];
        repoNote?: string;
        image?: string;
      };
      const tr = en ? projectText[p.name] : undefined;
      return {
        anchor: projectAnchor(p.name),
        name: tr?.name ?? p.name,
        kind: p.kind,
        kindLabel: t.projects.kinds[p.kind],
        period: tr?.period ?? p.period,
        summary: tr?.summary ?? p.summary,
        did: tr?.did ?? p.did,
        how: tr?.how ?? p.how,
        stack: p.stack,
        links: (p.links ?? []).map((link) => ({
          url: link.url,
          label: (en ? linkLabels[link.label] : undefined) ?? link.label,
        })),
        repoNote: en ? tr?.repoNote : p.repoNote,
        image: p.image,
      };
    }),
    otherRepos: otherRepos.map((repo) => {
      const r = repo as (typeof otherRepos)[number] & { url?: string; image?: string };
      return {
        name: r.name,
        role: (en ? repoRoles[r.role] : undefined) ?? r.role,
        status: (en ? repoStatuses[r.status] : undefined) ?? r.status,
        description: (en ? repoDescriptions[r.name] : undefined) ?? r.description,
        url: r.url,
        image: r.image,
      };
    }),
  };
}

const content: Record<Lang, Content> = { es: build("es"), en: build("en") };

export function getContent(lang: Lang): Content {
  return content[lang];
}

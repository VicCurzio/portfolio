import { getContent } from "@/content/content";
import { htmlLang, langPath, otherLang, type Lang } from "@/content/i18n";
import { PageShell } from "@/components/layout/PageShell";
import { PersonSchema } from "@/components/layout/PersonSchema";
import { Nav } from "@/components/layout/Nav";
import { OpeningIntro } from "@/components/retro/OpeningIntro";
import { ContactFooter } from "@/components/sections/ContactFooter";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FormacionSection } from "@/components/sections/FormacionSection";
import { Hero } from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export function HomePage({ lang }: { lang: Lang }) {
  const { profile, ui } = getContent(lang);
  const other = otherLang[lang];

  return (
    <PageShell lang={lang}>
      {/* La intro se monta encima de la pagina, no en lugar de ella: el
          contenido de abajo existe en el HTML aunque la animacion corra.
          Los textos llegan por props: es un componente de cliente, y con un
          import se llevaria los dos idiomas enteros al JavaScript que baja el
          navegador. */}
      <OpeningIntro
        name={profile.shortName}
        role={profile.title}
        place={profile.location}
        text={ui.intro}
      />
      <Nav
        brand={profile.shortName.split(" ")[0]}
        links={ui.nav.links}
        linkedin={profile.linkedin}
        replayIntro={ui.nav.replayIntro}
        theme={{ ...ui.nav.toTheme, label: ui.nav.themeLabel }}
        lang={{
          href: langPath[other],
          hrefLang: htmlLang[other],
          text: ui.nav.toLang,
          label: ui.nav.langLabel,
        }}
      />
      <main>
        <Hero lang={lang} />
        <ExperienceSection lang={lang} />
        <ProjectsSection lang={lang} />
        <SkillsSection lang={lang} />
        <FormacionSection lang={lang} />
        <ContactFooter lang={lang} />
      </main>
      <PersonSchema lang={lang} />
    </PageShell>
  );
}

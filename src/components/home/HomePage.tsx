import { PageShell } from "@/components/layout/PageShell";
import { Nav } from "@/components/layout/Nav";
import { OpeningIntro } from "@/components/retro/OpeningIntro";
import { ContactFooter } from "@/components/sections/ContactFooter";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FormacionSection } from "@/components/sections/FormacionSection";
import { Hero } from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export function HomePage() {
  return (
    <PageShell>
      {/* La intro se monta encima de la pagina, no en lugar de ella: el
          contenido de abajo existe en el HTML aunque la animacion corra. */}
      <OpeningIntro />
      <Nav />
      <main>
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <FormacionSection />
        <ContactFooter />
      </main>
    </PageShell>
  );
}

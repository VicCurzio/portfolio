import { PageShell } from "@/components/layout/PageShell";
import { Nav } from "@/components/layout/Nav";
import { ContactFooter } from "@/components/sections/ContactFooter";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FormacionSection } from "@/components/sections/FormacionSection";
import { Hero } from "@/components/sections/Hero";
import { SkillsSection } from "@/components/sections/SkillsSection";

export function HomePage() {
  return (
    <PageShell>
      <Nav />
      <main>
        <Hero />
        <ExperienceSection />
        <SkillsSection />
        <FormacionSection />
        <ContactFooter />
      </main>
    </PageShell>
  );
}

import { getContent } from "@/content/content";
import type { Lang } from "@/content/i18n";
import { siteUrl } from "@/content/site";

// Datos estructurados: es la unica forma de que un buscador entienda que esta
// pagina es *una persona* con un puesto y un lugar, y no un texto cualquiera.
//
// Vive en la pagina y no en el Document porque el Document es uno solo para los
// dos idiomas: desde ahi el puesto habria quedado siempre en espaniol, incluso en
// la version en ingles.
export function PersonSchema({ lang }: { lang: Lang }) {
  const { profile } = getContent(lang);

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    url: siteUrl,
    sameAs: [profile.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "La Plata",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
    />
  );
}

import type { MetadataRoute } from "next";
import { htmlLang, langPath, langs } from "@/content/i18n";
import { siteUrl } from "@/content/site";

// Con `output: export` Next exige declararlo estatico de forma explicita:
// sin esto el build falla al recolectar la ruta.
export const dynamic = "force-static";


// Con `output: export` Next escribe esto como sitemap.xml estatico en el build.
// Son dos paginas, una por idioma, y cada una declara a la otra como su
// alternativa: sin eso un buscador puede leerlas como contenido duplicado en
// vez de como la misma pagina en dos idiomas.
const alternates = Object.fromEntries(
  langs.map((lang) => [htmlLang[lang], `${siteUrl}${langPath[lang]}`]),
);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return langs.map((lang) => ({
    url: `${siteUrl}${langPath[lang]}`,
    lastModified,
    changeFrequency: "monthly",
    priority: lang === "es" ? 1 : 0.9,
    alternates: { languages: alternates },
  }));
}

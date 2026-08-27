import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";

// Con `output: export` Next exige declararlo estatico de forma explicita:
// sin esto el build falla al recolectar la ruta.
export const dynamic = "force-static";


// Con `output: export` Next escribe esto como sitemap.xml estatico en el build.
// Es una sola pagina, pero sin sitemap el buscador depende de encontrar el link
// desde otro lado.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

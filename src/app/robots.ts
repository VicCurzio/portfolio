import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";

// Con `output: export` Next exige declararlo estatico de forma explicita:
// sin esto el build falla al recolectar la ruta.
export const dynamic = "force-static";


export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

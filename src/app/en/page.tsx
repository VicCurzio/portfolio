import { HomePage } from "@/components";
import { buildMetadata } from "@/components/layout/Document";

// La metadata de la pagina pisa a la de la raiz campo por campo: titulo,
// descripcion, canonical y alternates quedan en ingles.
export const metadata = buildMetadata("en");

export default function HomeEn() {
  return <HomePage lang="en" />;
}

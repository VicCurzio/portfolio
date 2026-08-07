import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const fontHeading = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const fontBody = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Victor Roberto Curzio — Desarrollador Full Stack",
  description:
    "Portfolio de Victor Roberto Curzio: arquitectura de software e integridad de datos con Node.js, TypeScript, React y bases relacionales. CRM, sistemas de gestión y plataformas SaaS. La Plata, Argentina.",
  openGraph: {
    title: "Victor Roberto Curzio — Desarrollador Full Stack",
    description:
      "Arquitectura de software e integridad de datos con Node.js, TypeScript, React y bases relacionales. La Plata, Argentina.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fontHeading.variable} ${fontBody.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#060910] font-body text-zinc-300">{children}</body>
    </html>
  );
}

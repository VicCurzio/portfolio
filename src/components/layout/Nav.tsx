"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/portfolio";

const links = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Stack" },
  { href: "#formacion", label: "Formación" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-[background,box-shadow,backdrop-filter] duration-300 ${
        scrolled ? "border-b border-white/5 bg-[#060910]/80 shadow-lg shadow-black/20 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a href="#" className="font-display text-lg font-semibold tracking-tight text-white">
          <span className="text-accent">{"// "}</span>
          {profile.shortName.split(" ")[0]}
          <span className="text-white/50">.dev</span>
        </a>
        <ul className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-accent/40 hover:bg-accent/10"
        >
          LinkedIn
        </a>
      </nav>
    </header>
  );
}

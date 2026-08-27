"use client";

import { profile } from "@/content/portfolio";
import { PLAY_INTRO_EVENT } from "@/components/retro/OpeningIntro";

const links = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Stack" },
  { href: "#formacion", label: "Formación" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  return (
    <header className="r-nav">
      <nav className="r-nav__inner">
        <a href="#" className="r-nav__brand">
          <em>{"> "}</em>
          {profile.shortName.split(" ")[0]}
        </a>
        <ul className="r-nav__links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="r-nav__link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="r-nav__side">
          {/* La intro corre sola una vez por sesion; despues queda este boton
              para volver a verla sin recargar. */}
          <button
            type="button"
            className="intro-replay"
            onClick={() => window.dispatchEvent(new Event(PLAY_INTRO_EVENT))}
          >
            Ver intro
          </button>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="r-btn r-btn--sm"
          >
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
}

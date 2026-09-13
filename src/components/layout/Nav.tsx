"use client";

import { PLAY_INTRO_EVENT } from "@/components/retro/OpeningIntro";
import { LangSwitch } from "./LangSwitch";
import { ThemeToggle } from "./ThemeToggle";

type NavProps = {
  brand: string;
  links: readonly { href: string; label: string }[];
  linkedin: string;
  replayIntro: string;
  theme: { light: string; dark: string; label: string };
  lang: { href: string; hrefLang: string; text: string; label: string };
};

export function Nav({ brand, links, linkedin, replayIntro, theme, lang }: NavProps) {
  return (
    <header className="r-nav">
      <nav className="r-nav__inner">
        <a href="#" className="r-nav__brand">
          <em>{"> "}</em>
          {brand}
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
            className="intro-replay r-nav__extra"
            onClick={() => window.dispatchEvent(new Event(PLAY_INTRO_EVENT))}
          >
            {replayIntro}
          </button>
          <ThemeToggle light={theme.light} dark={theme.dark} label={theme.label} />
          <LangSwitch
            href={lang.href}
            hrefLang={lang.hrefLang}
            text={lang.text}
            label={lang.label}
          />
          <a
            href={linkedin}
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

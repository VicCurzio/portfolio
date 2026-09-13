import { getContent } from "@/content/content";
import type { Lang } from "@/content/i18n";
import { asset } from "@/content/site";

export function ContactFooter({ lang }: { lang: Lang }) {
  const { profile, ui } = getContent(lang);
  const t = ui.contact;

  return (
    <footer id="contacto" className="r-section r-footer">
      <div className="r-shell">
        <div className="r-head">
          <h2 className="r-head__title">
            {t.title} <em>{t.titleEm}</em>
          </h2>
          <span className="r-head__bar" aria-hidden="true" />
        </div>
        <p className="r-lead">{t.lead}</p>

        {/* Menu de seleccion: una opcion por linea, con el cursor a la izquierda
            de la que estas apuntando. */}
        <nav className="r-menu" aria-label={t.ariaLabel}>
          <a className="r-menu__item" href={`mailto:${profile.email}`}>
            {t.email}
            <span className="r-menu__value">{profile.email}</span>
          </a>
          <a
            className="r-menu__item"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <span className="r-menu__value">victor-roberto-curzio</span>
          </a>
          <a
            className="r-menu__item"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <span className="r-menu__value">VicCurzio</span>
          </a>
          <a
            className="r-menu__item"
            href={asset(profile.cv)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.cv}
            <span className="r-menu__value">{t.cvValue}</span>
          </a>
        </nav>

        <p className="r-copy">
          {new Date().getFullYear()} {profile.shortName} — {t.madeWith}
        </p>
      </div>
    </footer>
  );
}

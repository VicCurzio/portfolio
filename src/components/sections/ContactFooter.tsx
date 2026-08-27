import { profile } from "@/content/portfolio";
import { asset } from "@/content/site";

export function ContactFooter() {
  return (
    <footer id="contacto" className="r-section r-footer">
      <div className="r-shell">
        <div className="r-head">
          <h2 className="r-head__title">
            Seguir <em>jugando</em>
          </h2>
          <span className="r-head__bar" aria-hidden="true" />
        </div>
        <p className="r-lead">
          Si querés charlar sobre un proyecto, una oportunidad o una colaboración, escribime.
        </p>

        {/* Menu de seleccion: una opcion por linea, con el cursor a la izquierda
            de la que estas apuntando. */}
        <nav className="r-menu" aria-label="Contacto">
          <a className="r-menu__item" href={`mailto:${profile.email}`}>
            Email
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
            Curriculum
            <span className="r-menu__value">CV en PDF</span>
          </a>
        </nav>

        <p className="r-copy">
          {new Date().getFullYear()} {profile.shortName} — hecho con Next.js
        </p>
      </div>
    </footer>
  );
}

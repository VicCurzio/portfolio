import { otherRepos, projects } from "@/content/projects";
import { projectAnchor } from "@/content/slug";
import { StageSelect } from "@/components/retro/StageSelect";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="r-section r-section--alt">
      <div className="r-shell">
        <div className="r-head">
          <h2 className="r-head__title">
            Proyectos <em>y repositorios</em>
          </h2>
          <span className="r-head__bar" aria-hidden="true" />
        </div>
        <p className="r-lead">
          Qué construí en cada uno y con qué criterio técnico lo resolví.
        </p>

        {/* Indice tipo pantalla de seleccion: lleva a la tarjeta, no la
            reemplaza. */}
        <div className="r-grid">
          <StageSelect />
        </div>

        <div className="r-grid r-grid--2">
          {projects.map((p) => (
            <article key={p.name} id={projectAnchor(p.name)} className="r-panel">
              <p className="r-panel__label">{p.kind}</p>
              <h3 className="r-panel__title">{p.name}</h3>
              <p className="r-panel__meta">{p.period}</p>
              <p className="r-panel__text">{p.summary}</p>

              <p className="r-sublabel">Qué hice</p>
              <ul className="r-list">
                {p.did.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>

              <p className="r-sublabel">Cómo lo resolví</p>
              <ul className="r-list r-list--alt">
                {p.how.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="r-tags">
                {p.stack.map((t) => (
                  <span key={t} className="r-tag">
                    {t}
                  </span>
                ))}
              </div>

              {p.links && p.links.length > 0 ? (
                <div className="r-actions">
                  {p.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="r-btn r-btn--ghost r-btn--sm"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              ) : null}
              {p.repoNote ? <p className="r-panel__meta">{p.repoNote}</p> : null}
            </article>
          ))}
        </div>

        <div className="r-grid">
          <div className="r-panel">
            <p className="r-panel__label">Otros repositorios</p>
            <p className="r-panel__text">
              Proyectos de terceros en los que participé como colaborador, y trabajos que quedaron
              frenados.
            </p>

            <ul className="r-repos">
              {otherRepos.map((r) => (
                <li key={r.name} className="r-repo">
                  <p className="r-repo__name">{r.name}</p>
                  <p className="r-repo__meta">
                    {r.role} · {r.status}
                  </p>
                  <p className="r-repo__text">{r.description}</p>
                  {r.url ? (
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="r-btn r-btn--ghost r-btn--sm"
                    >
                      Código
                    </a>
                  ) : (
                    <p className="r-repo__meta">Repositorio privado</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

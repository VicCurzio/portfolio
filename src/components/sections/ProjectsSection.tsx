import { getContent } from "@/content/content";
import type { Lang } from "@/content/i18n";
import { StageSelect } from "@/components/retro/StageSelect";
import Image from "next/image";
import { asset } from "@/content/site";

export function ProjectsSection({ lang }: { lang: Lang }) {
  const { profile, projects, otherRepos, ui } = getContent(lang);
  const t = ui.projects;

  return (
    <section id="proyectos" className="r-section r-section--alt">
      <div className="r-shell">
        <div className="r-head">
          <h2 className="r-head__title">
            {t.title} <em>{t.titleEm}</em>
          </h2>
          <span className="r-head__bar" aria-hidden="true" />
        </div>
        <p className="r-lead">{t.lead}</p>

        {/* Indice tipo pantalla de seleccion: lleva a la tarjeta, no la
            reemplaza. */}
        <div className="r-grid">
          <StageSelect
            items={projects.map((p) => ({
              name: p.name,
              kind: p.kind,
              kindLabel: p.kindLabel,
              period: p.period,
              summary: p.summary,
              anchor: p.anchor,
            }))}
            text={t.stage}
            center={{ name: profile.shortName, role: profile.title }}
          />
        </div>

        {/* Cada proyecto es un <details> con el mismo `name`: el navegador se
            encarga de que solo uno este abierto a la vez, y sin JavaScript
            siguen abriendose a mano desde el titulo. */}
        <div className="r-grid">
          {projects.map((p, i) => (
            <details
              key={p.anchor}
              id={p.anchor}
              name="proyectos"
              className="r-panel r-proj"
              open={i === 0}
            >
              <summary className="r-proj__head">
                <span className="r-proj__name">{p.name}</span>
                <span className="r-proj__kind">{p.kindLabel}</span>
                <span className="r-proj__period">{p.period}</span>
              </summary>

              <div className="r-proj__body">
                {/* La carátula es la primera pantalla del sistema (inicio o login):
                    muestra cómo se ve sin exponer datos de nadie. Carga diferida:
                    en una tarjeta cerrada no se descarga. */}
                {p.image ? (
                  <Image
                    className="r-shot"
                    src={asset(p.image)}
                    alt={`${t.coverAlt} ${p.name}`}
                    width={960}
                    height={600}
                  />
                ) : null}
                <p className="r-panel__text">{p.summary}</p>

                <p className="r-sublabel">{t.did}</p>
                <ul className="r-list">
                  {p.did.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>

                <p className="r-sublabel">{t.how}</p>
                <ul className="r-list r-list--alt">
                  {p.how.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="r-tags">
                  {p.stack.map((tech) => (
                    <span key={tech} className="r-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {p.links.length > 0 ? (
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
              </div>
            </details>
          ))}
        </div>
        <div className="r-grid">
          <div className="r-panel">
            <p className="r-panel__label">{t.others}</p>
            <p className="r-panel__text">{t.othersText}</p>

            <ul className="r-repos">
              {otherRepos.map((r) => (
                <li key={r.name} className="r-repo">
                  {r.image ? (
                    <Image
                      className="r-shot r-shot--sm"
                      src={asset(r.image)}
                      alt={`${t.coverAlt} ${r.name}`}
                      width={960}
                      height={600}
                    />
                  ) : null}
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
                      {t.code}
                    </a>
                  ) : (
                    <p className="r-repo__meta">{t.privateRepo}</p>
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

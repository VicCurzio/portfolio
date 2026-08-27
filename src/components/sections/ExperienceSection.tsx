import { experience } from "@/content/portfolio";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="r-section">
      <div className="r-shell">
        <div className="r-head">
          <h2 className="r-head__title">
            Experiencia <em>profesional</em>
          </h2>
          <span className="r-head__bar" aria-hidden="true" />
        </div>
        <p className="r-lead">
          Proyectos reales en producción: CRM, reservas, integraciones y equipos ágiles.
        </p>

        <ol className="r-grid">
          {experience.map((job, i) => (
            <li key={`${job.company}-${i}`}>
              <article className="r-panel">
                {/* La numeracion va al reves: el trabajo mas reciente primero,
                    con el numero mas alto, como el nivel al que llegaste. */}
                <p className="r-panel__label">Nivel {String(experience.length - i).padStart(2, "0")}</p>
                <h3 className="r-panel__title">{job.role}</h3>
                <p className="r-panel__sub">{job.company}</p>
                <p className="r-panel__meta">
                  {job.period} · {job.location}
                </p>

                <div className="r-tags">
                  {job.stack.map((t) => (
                    <span key={t} className="r-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="r-list">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

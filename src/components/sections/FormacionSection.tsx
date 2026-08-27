import { courses, education, languages } from "@/content/portfolio";

export function FormacionSection() {
  return (
    <section id="formacion" className="r-section">
      <div className="r-shell">
        <div className="r-head">
          <h2 className="r-head__title">
            Formación <em>y cursos</em>
          </h2>
          <span className="r-head__bar" aria-hidden="true" />
        </div>

        <div className="r-grid r-grid--2">
          <div className="r-panel r-panel--lit">
            <p className="r-panel__label">Universitaria</p>
            <h3 className="r-panel__title">{education.degree}</h3>
            <p className="r-panel__sub">{education.school}</p>
            <p className="r-panel__meta">
              {education.period} · {education.location}
            </p>
          </div>

          <div className="r-panel">
            <p className="r-panel__label">Idiomas</p>
            {languages.map((lang) => (
              <div key={lang.name}>
                <h3 className="r-panel__title">
                  {lang.name} — {lang.level}
                </h3>
                <p className="r-panel__text">{lang.note}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="r-sublabel">Formación complementaria</p>
        <ul className="r-list r-list--alt">
          {courses.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

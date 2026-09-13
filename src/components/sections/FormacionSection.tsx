import { getContent } from "@/content/content";
import type { Lang } from "@/content/i18n";

// "lectura y escritura técnica a diario" + "conversación en mejora" ->
// "Lectura y escritura técnica a diario; conversación en mejora."
function languageText(detail: string, note: string) {
  const text = [detail, note].filter(Boolean).join("; ");
  return text ? `${text.charAt(0).toUpperCase()}${text.slice(1)}.` : "";
}

export function FormacionSection({ lang }: { lang: Lang }) {
  const { courses, education, languages, ui } = getContent(lang);
  const t = ui.education;

  return (
    <section id="formacion" className="r-section">
      <div className="r-shell">
        <div className="r-head">
          <h2 className="r-head__title">
            {t.title} <em>{t.titleEm}</em>
          </h2>
          <span className="r-head__bar" aria-hidden="true" />
        </div>

        <div className="r-grid r-grid--2">
          <div className="r-panel">
            <p className="r-panel__label">{t.university}</p>
            <h3 className="r-panel__title">{education.degree}</h3>
            <p className="r-panel__sub">{education.school}</p>
            <p className="r-panel__meta">
              {education.period} · {education.location}
            </p>
          </div>

          <div className="r-panel">
            <p className="r-panel__label">{t.languages}</p>
            {languages.map((entry) => {
              const text = languageText(entry.detail, entry.note);
              return (
                <div key={entry.name}>
                  <h3 className="r-panel__title">
                    {entry.name} — {entry.level}
                  </h3>
                  {text ? <p className="r-panel__text r-panel__text--tight">{text}</p> : null}
                </div>
              );
            })}
          </div>

          <div className="r-panel r-panel--span">
            <p className="r-panel__label">{t.courses}</p>
            <ul className="r-list r-list--alt">
              {courses.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

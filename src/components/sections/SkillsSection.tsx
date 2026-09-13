import { getContent } from "@/content/content";
import type { Lang } from "@/content/i18n";

export function SkillsSection({ lang }: { lang: Lang }) {
  const { skillGroups, softSkills, ui } = getContent(lang);
  const t = ui.skills;

  return (
    <section id="habilidades" className="r-section r-section--alt">
      <div className="r-shell">
        <div className="r-head">
          <h2 className="r-head__title">
            {t.title} <em>{t.titleEm}</em>
          </h2>
          <span className="r-head__bar" aria-hidden="true" />
        </div>
        <p className="r-lead">{t.lead}</p>

        {/* El inventario: cada grupo es una casilla y cada tecnologia, un item. */}
        <div className="r-grid r-grid--3">
          {skillGroups.map((g) => (
            <div key={g.title} className="r-panel">
              <p className="r-panel__label">{g.title}</p>
              <div className="r-tags">
                {g.items.map((item) => (
                  <span key={item} className="r-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="r-grid">
          <div className="r-panel">
            <p className="r-panel__label">{t.soft}</p>
            <div className="r-tags">
              {softSkills.map((s) => (
                <span key={s} className="r-tag r-tag--soft">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

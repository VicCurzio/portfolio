import { skillGroups, softSkills } from "@/content/portfolio";

export function SkillsSection() {
  return (
    <section id="habilidades" className="r-section r-section--alt">
      <div className="r-shell">
        <div className="r-head">
          <h2 className="r-head__title">
            Stack <em>y herramientas</em>
          </h2>
          <span className="r-head__bar" aria-hidden="true" />
        </div>
        <p className="r-lead">
          Tecnologías que uso día a día para construir y mantener productos.
        </p>

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
            <p className="r-panel__label">Habilidades blandas</p>
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

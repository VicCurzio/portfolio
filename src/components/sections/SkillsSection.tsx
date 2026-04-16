import { skillGroups, softSkills } from "@/content/portfolio";

export function SkillsSection() {
  return (
    <section id="habilidades" className="scroll-mt-24 border-y border-white/5 bg-[#05080f]/80 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Stack <span className="text-zinc-500">& herramientas</span>
        </h2>
        <p className="mt-3 max-w-xl text-zinc-400">
          Tecnologías que uso día a día para construir y mantener productos.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-white/5 px-3 py-1.5 text-sm text-zinc-200 ring-1 ring-white/5 transition hover:bg-accent/10 hover:text-white hover:ring-accent/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/8 bg-gradient-to-br from-violet-500/5 to-transparent p-6 md:p-8">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-zinc-500">Soft skills</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {softSkills.map((s) => (
              <span key={s} className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

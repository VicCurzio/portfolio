import { experience } from "@/content/portfolio";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="scroll-mt-24 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Experiencia <span className="text-zinc-500">profesional</span>
        </h2>
        <p className="mt-3 max-w-xl text-zinc-400">
          Proyectos reales en producción: CRM, reservas, integraciones y equipos ágiles.
        </p>

        <div className="relative mt-14 space-y-0">
          <div className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent md:left-[15px]" />
          <ul className="space-y-12">
            {experience.map((job, i) => (
              <li key={`${job.company}-${i}`} className="relative pl-10 md:pl-12">
                <span className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-[#0a0f18] md:left-1">
                  <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(45,212,191,0.8)]" />
                </span>
                <article className="group rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition hover:border-accent/20 hover:bg-white/[0.04] md:p-8">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">{job.role}</h3>
                      <p className="mt-1 text-accent">{job.company}</p>
                      <p className="text-sm text-zinc-500">
                        {job.period} · {job.location}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-black/30 px-2.5 py-1 text-xs font-medium text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-zinc-400">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/80" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

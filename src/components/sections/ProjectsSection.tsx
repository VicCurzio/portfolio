import { otherRepos, projects } from "@/content/projects";

function ExternalIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ProjectsSection() {
  return (
    <section id="proyectos" className="scroll-mt-24 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Proyectos <span className="text-zinc-500">y repositorios</span>
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          Qué construí en cada uno y con qué criterio técnico lo resolví.
        </p>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.name}
              className="flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition hover:border-accent/20 hover:bg-white/[0.04] md:p-8"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <h3 className="font-display text-xl font-semibold text-white">{p.name}</h3>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                  {p.kind}
                </span>
              </div>
              <p className="mt-1 text-sm text-zinc-500">{p.period}</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">{p.summary}</p>

              <div className="mt-6 space-y-5">
                <div>
                  <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Qué hice
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-400">
                    {p.did.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/80" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Cómo lo resolví
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-400">
                    {p.how.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400/70" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-black/30 px-2.5 py-1 text-xs font-medium text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6">
                {p.links && p.links.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {p.links.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-accent/40 hover:bg-accent/10"
                      >
                        {l.label}
                        <ExternalIcon />
                      </a>
                    ))}
                  </div>
                ) : null}
                {p.repoNote ? <p className="mt-3 text-xs text-zinc-600">{p.repoNote}</p> : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/8 bg-white/[0.02] p-6 md:p-8">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Otros repositorios
          </h3>
          <p className="mt-2 text-sm text-zinc-500">
            Proyectos de terceros en los que participé como colaborador, y trabajos que quedaron frenados.
          </p>
          <ul className="mt-6 divide-y divide-white/5">
            {otherRepos.map((r) => (
              <li key={r.name} className="flex flex-col gap-2 py-5 md:flex-row md:items-baseline md:gap-4">
                <div className="flex shrink-0 flex-wrap items-baseline gap-x-2 gap-y-1 md:w-56 md:flex-col md:items-start">
                  <span className="font-display font-semibold text-white">{r.name}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-zinc-400">
                    {r.role}
                  </span>
                  <span className="text-xs text-zinc-600">{r.status}</span>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-zinc-400">{r.description}</p>
                {r.url ? (
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 text-sm text-accent transition hover:text-cyan-300"
                  >
                    Código
                    <ExternalIcon />
                  </a>
                ) : (
                  <span className="shrink-0 text-xs text-zinc-600">Repositorio privado</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

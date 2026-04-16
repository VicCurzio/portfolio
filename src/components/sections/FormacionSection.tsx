import { courses, education, languages } from "@/content/portfolio";

export function FormacionSection() {
  return (
    <section id="formacion" className="scroll-mt-24 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Formación <span className="text-zinc-500">& cursos</span>
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Universitaria</p>
            <h3 className="mt-3 font-display text-2xl font-bold text-white">{education.degree}</h3>
            <p className="mt-2 text-lg text-zinc-300">{education.school}</p>
            <p className="mt-4 text-sm text-zinc-500">
              {education.period} · {education.location}
            </p>
          </div>

          <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Idiomas</p>
            {languages.map((lang) => (
              <div key={lang.name} className="mt-4">
                <p className="font-medium text-white">
                  {lang.name} — <span className="text-zinc-400">{lang.level}</span>
                </p>
                <p className="mt-1 text-sm text-zinc-500">{lang.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-display text-lg font-semibold text-white">Formación complementaria</h3>
          <ul className="mt-4 space-y-3 border-l border-white/10 pl-6">
            {courses.map((c) => (
              <li key={c} className="relative text-sm text-zinc-400 before:absolute before:-left-[25px] before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-violet-500/60">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import { profile } from "@/content/portfolio";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(45,212,191,0.18),transparent)]" />
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {profile.location}
        </p>
        <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl">
          <span className="block">{profile.name}</span>
          <span className="mt-2 block bg-gradient-to-r from-accent via-cyan-300 to-violet-400 bg-clip-text text-transparent sm:mt-3">
            {profile.title}
          </span>
        </h1>
        <p className="mt-4 font-display text-lg font-medium text-zinc-300 md:text-xl">{profile.subtitle}</p>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">{profile.tagline}</p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-[#041018] shadow-lg shadow-accent/25 transition hover:bg-cyan-300"
          >
            Escribime
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-base font-medium text-white transition hover:border-white/30 hover:bg-white/10"
          >
            Ver LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

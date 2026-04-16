import { profile } from "@/content/portfolio";

export function ContactFooter() {
  return (
    <footer id="contacto" className="scroll-mt-24 border-t border-white/10 bg-[#030509] px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Contacto</h2>
        <p className="mt-3 max-w-lg text-zinc-400">
          Si querés charlar sobre un proyecto, una oportunidad o colaboración, escribime.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={`mailto:${profile.email}`}
            className="text-lg font-medium text-accent underline decoration-accent/30 underline-offset-4 transition hover:decoration-accent"
          >
            {profile.email}
          </a>
          <span className="hidden text-zinc-600 sm:inline">·</span>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-lg text-zinc-300 hover:text-white">
            {profile.phone}
          </a>
        </div>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex text-zinc-400 transition hover:text-accent"
        >
          linkedin.com/in/victor-roberto-curzio/ →
        </a>

        <p className="mt-16 border-t border-white/5 pt-8 text-center text-sm text-zinc-600">
          © {new Date().getFullYear()} {profile.shortName}. Hecho con Next.js.
        </p>
      </div>
    </footer>
  );
}

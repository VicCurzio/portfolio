import { getContent } from "@/content/content";
import type { Lang } from "@/content/i18n";
import { asset } from "@/content/site";
import { HERO } from "@/components/retro/pixelArt";
import { PixelSprite } from "@/components/retro/PixelSprite";
import { EmailLink } from "./EmailLink";

export function Hero({ lang }: { lang: Lang }) {
  const { profile, ui } = getContent(lang);
  const t = ui.hero;

  return (
    <section className="r-hero">
      <div className="r-shell">
        <div className="r-hero__grid">
          <div>
            {/* Barra de estado, como la que muestra vidas y puntaje arriba de
                la pantalla: los datos duros de un vistazo. */}
            <p className="r-hud">
              <span>
                <em>{t.zone}</em> {profile.location}
              </span>
              <span>
                <em>{t.role}</em> {profile.subtitle}
              </span>
              <span>
                <em>{t.status}</em> {t.available}
              </span>
            </p>

            <h1 className="r-title">
              <span>Victor R.</span>
              <span>Curzio</span>
            </h1>

            <p className="r-hero__role">{profile.title}</p>
            <p className="r-hero__tagline">{profile.intro}</p>

            <div className="r-actions">
              <EmailLink email={profile.email} label={t.write} copiedText={t.copied} className="r-btn" />
              <a
                href={asset(profile.cv)}
                target="_blank"
                rel="noopener noreferrer"
                className="r-btn r-btn--ghost"
              >
                {t.cv}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="r-btn r-btn--ghost"
              >
                {t.github}
              </a>
            </div>

            <p className="r-scroll-cue">{t.scrollCue}</p>
          </div>

          <PixelSprite map={HERO} className="r-hero__sprite" title={t.portrait} />
        </div>
      </div>
    </section>
  );
}

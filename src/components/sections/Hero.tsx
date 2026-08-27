import { profile } from "@/content/portfolio";
import { asset } from "@/content/site";
import { HERO } from "@/components/retro/pixelArt";
import { PixelSprite } from "@/components/retro/PixelSprite";

export function Hero() {
  return (
    <section className="r-hero">
      <div className="r-shell">
        <div className="r-hero__grid">
          <div>
            {/* Barra de estado, como la que muestra vidas y puntaje arriba de
                la pantalla: los datos duros de un vistazo. */}
            <p className="r-hud">
              <span>
                <em>Zona:</em> {profile.location}
              </span>
              <span>
                <em>Clase:</em> {profile.subtitle}
              </span>
              <span>
                <em>Estado:</em> Disponible
              </span>
            </p>

            <h1 className="r-title">
              <span>Victor R.</span>
              <span>Curzio</span>
            </h1>

            <p className="r-hero__role">{profile.title}</p>
            <p className="r-hero__tagline">{profile.tagline}</p>

            <div className="r-actions">
              <a href={`mailto:${profile.email}`} className="r-btn">
                Escribime
              </a>
              <a
                href={asset(profile.cv)}
                target="_blank"
                rel="noopener noreferrer"
                className="r-btn r-btn--ghost"
              >
                Descargar CV
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="r-btn r-btn--ghost"
              >
                GitHub
              </a>
            </div>

            <p className="r-scroll-cue">Bajá para empezar</p>
          </div>

          <PixelSprite map={HERO} className="r-hero__sprite" title="Retrato en pixel art" />
        </div>
      </div>
    </section>
  );
}

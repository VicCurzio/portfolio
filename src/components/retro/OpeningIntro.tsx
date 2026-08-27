"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { profile } from "@/content/portfolio";
import { HERO, SCARF } from "./pixelArt";
import { PixelSprite } from "./PixelSprite";
import { Skyline, Tower } from "./Skyline";

// Duracion de cada tramo, en milisegundos. Total: nueve segundos. Es corto a
// proposito: el homenaje tiene que caber antes de que alguien se impaciente.
// La unica forma de saltearla es el boton, que esta desde el primer cuadro:
// asi no se corta sola al apoyar una tecla o al tocar la pantalla sin querer.
const CITY_MS = 3400;
const TOWER_MS = 3000;
const TITLE_MS = 2600;
const FADE_MS = 500;

export const PLAY_INTRO_EVENT = "portfolio:play-intro";

type Phase = "city" | "tower" | "title" | "out" | null;

// Posiciones fijas: si fueran aleatorias, el HTML del servidor y el del
// navegador no coincidirian y React protestaria al hidratar.
const STARS = [
  [8, 12, 0],
  [17, 34, 1.1],
  [26, 7, 0.4],
  [35, 22, 1.8],
  [44, 41, 0.9],
  [52, 15, 1.4],
  [61, 30, 0.2],
  [69, 9, 2.1],
  [77, 25, 1.6],
  [84, 44, 0.7],
  [91, 18, 1.2],
  [96, 36, 2.4],
  [13, 48, 1.9],
  [30, 52, 0.6],
  [58, 50, 2.2],
  [73, 55, 1.3],
] as const;

export function OpeningIntro() {
  const [phase, setPhase] = useState<Phase>(null);
  const timers = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  }, []);

  const finish = useCallback(() => {
    clearTimers();
    setPhase("out");
    timers.current.push(window.setTimeout(() => setPhase(null), FADE_MS));
  }, [clearTimers]);

  const start = useCallback(() => {
    clearTimers();
    setPhase("city");
    timers.current.push(window.setTimeout(() => setPhase("tower"), CITY_MS));
    timers.current.push(window.setTimeout(() => setPhase("title"), CITY_MS + TOWER_MS));
    timers.current.push(window.setTimeout(finish, CITY_MS + TOWER_MS + TITLE_MS));
  }, [clearTimers, finish]);

  // Arranca en cada carga de la pagina, salvo que el sistema pida menos
  // movimiento. El boton del nav dispara el evento para volver a verla sin
  // recargar.
  useEffect(() => {
    const quiet = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // El arranque va en un timer y no directo: pintar el primer cuadro y
    // recien despues cambiar de estado evita el render en cascada.
    const boot = quiet ? undefined : window.setTimeout(start, 0);
    window.addEventListener(PLAY_INTRO_EVENT, start);
    return () => {
      if (boot) window.clearTimeout(boot);
      window.removeEventListener(PLAY_INTRO_EVENT, start);
      clearTimers();
    };
  }, [start, clearTimers]);

  // Mientras corre la intro, el fondo no scrollea.
  useEffect(() => {
    if (!phase || phase === "out") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [phase]);

  if (!phase) return null;

  return (
    <div
      className={`intro${phase === "out" ? " intro--out" : ""}`}
      data-phase={phase}
      role="dialog"
      aria-modal="true"
      aria-label="Intro del sitio"
    >
      {phase === "city" ? (
        <div className="intro__scene intro__city">
          <div className="intro__stars">
            {STARS.map(([left, top, delay]) => (
              <span
                key={`${left}-${top}`}
                style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${delay}s` }}
              />
            ))}
          </div>
          <Skyline className="intro__skyline" />
          <div className="intro__credits">
            <p className="intro__credits-kicker">Un sitio de</p>
            <p className="intro__credits-name">{profile.shortName}</p>
            <p className="intro__credits-role">{profile.title}</p>
            <p className="intro__credits-place">{profile.location}</p>
          </div>
        </div>
      ) : null}

      {phase === "tower" ? (
        <div className="intro__scene intro__tower">
          <div className="intro__world">
            <div className="intro__figure">
              <PixelSprite map={SCARF} className="intro__scarf" />
              <PixelSprite map={HERO} className="intro__hero" />
            </div>
            <Tower className="intro__tower-art" />
          </div>
        </div>
      ) : null}

      {(phase === "title" || phase === "out") ? (
        <div className="intro__scene intro__title">
          <span className="intro__flash" />
          <h2 className="intro__logo">
            <span>Victor R.</span>
            <span className="intro__logo-strong">Curzio</span>
          </h2>
          <p className="intro__logo-sub">{profile.title}</p>
          <p className="intro__press">Press Start</p>
        </div>
      ) : null}

      <div className="intro__scanlines" aria-hidden="true" />

      <button type="button" className="intro__skip" onClick={finish}>
        Saltar intro
      </button>
    </div>
  );
}

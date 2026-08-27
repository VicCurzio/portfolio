"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { profile } from "@/content/portfolio";
import { projects } from "@/content/projects";
import { projectAnchor } from "@/content/slug";
import { glyphFor } from "./pixelArt";
import { PixelSprite } from "./PixelSprite";

// Grilla de nueve celdas: los ocho proyectos alrededor y el perfil en el centro.
// Es un indice, no el contenido: cada celda lleva a la tarjeta completa que ya
// esta en la pagina, asi el texto sigue existiendo para un buscador o para
// alguien que entre sin JavaScript.
const CENTER = 4;
const SLOTS = [0, 1, 2, 3, 5, 6, 7, 8];

const cells = Array.from({ length: 9 }, (_, slot) => {
  const index = SLOTS.indexOf(slot);
  return { slot, project: index === -1 ? null : projects[index] ?? null };
});

function scrollTo(id: string | null) {
  const quiet = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const behavior = quiet ? "auto" : "smooth";
  if (!id) {
    window.scrollTo({ top: 0, behavior });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior, block: "start" });
  el.classList.add("stage-hit");
  window.setTimeout(() => el.classList.remove("stage-hit"), 1400);
}

export function StageSelect() {
  const [cursor, setCursor] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  // Las flechas mueven el cursor y dan la vuelta al llegar al borde, como en la
  // pantalla de seleccion de un juego. Enter y espacio los maneja el boton.
  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const row = Math.floor(cursor / 3);
    const col = cursor % 3;
    let next = cursor;
    if (event.key === "ArrowRight") next = row * 3 + ((col + 1) % 3);
    else if (event.key === "ArrowLeft") next = row * 3 + ((col + 2) % 3);
    else if (event.key === "ArrowDown") next = (((row + 1) % 3) * 3) + col;
    else if (event.key === "ArrowUp") next = (((row + 2) % 3) * 3) + col;
    else return;
    event.preventDefault();
    setCursor(next);
    refs.current[next]?.focus();
  }

  const active = cells[cursor]?.project ?? null;

  return (
    <div className="stage">
      <p className="stage__title">Seleccionar proyecto</p>

      <div className="stage__grid" role="group" aria-label="Proyectos" onKeyDown={onKeyDown}>
        {cells.map(({ slot, project }) => {
          const selected = cursor === slot;
          const anchor = project ? projectAnchor(project.name) : null;
          return (
            <button
              key={slot}
              type="button"
              ref={(el) => {
                refs.current[slot] = el;
              }}
              className={`stage__cell${selected ? " is-active" : ""}${slot === CENTER ? " stage__cell--center" : ""}`}
              tabIndex={selected ? 0 : -1}
              onFocus={() => setCursor(slot)}
              onMouseEnter={() => setCursor(slot)}
              onClick={() => scrollTo(anchor)}
            >
              <span className="stage__glyph">
                {project ? (
                  <PixelSprite map={glyphFor(project.kind)} />
                ) : (
                  <PixelSprite map={["..xxxx..", ".x....x.", "x.xxxx.x", "x.x..x.x", "x.xxxx.x", "x......x", ".x....x.", "..xxxx.."]} />
                )}
              </span>
              <span className="stage__name">{project ? project.name : profile.shortName}</span>
            </button>
          );
        })}
      </div>

      <p className="stage__banner" aria-live="polite">
        <span className="stage__banner-name">{active ? active.name : profile.shortName}</span>
        <span className="stage__banner-meta">{active ? `${active.kind} - ${active.period}` : profile.title}</span>
      </p>

      <p className="stage__hint">Flechas para moverte, Enter para entrar. O tocá la celda.</p>
    </div>
  );
}

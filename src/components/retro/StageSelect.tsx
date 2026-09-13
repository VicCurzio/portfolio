"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { faceLooking, glyphForProject } from "./pixelArt";
import { PixelSprite } from "./PixelSprite";

// Grilla de seleccion: los proyectos alrededor y el retrato en el centro.
// Es un indice, no el contenido: cada celda lleva a la tarjeta completa que ya
// esta en la pagina, asi el texto sigue existiendo para un buscador o para
// alguien que entre sin JavaScript.
//
// Los datos llegan por props y no importando el contenido: de las tres lineas
// que muestra cada celda, un import se trae los proyectos enteros -- que ya
// estan en el HTML -- y los suma otra vez al JavaScript que baja el navegador.
// Con dos idiomas eso seria el doble, asi que la regla vale mas que antes.
// La excepcion es el resumen: lo dice el cuadro de dialogo, y es una linea por
// proyecto, no la tarjeta entera.
//
// Las filas salen de los datos: la grilla crece de a tres para que entren
// todos los proyectos mas el retrato, con un minimo de tres filas. Las celdas
// que sobran quedan vacias. Un proyecto nuevo en content/projects.ts aparece
// solo, sin tocar este archivo.
const COLS = 3;

function buildGrid(count: number) {
  const rows = Math.max(3, Math.ceil((count + 1) / COLS));
  // El retrato va al medio de la fila de arriba del medio: con tres filas cae
  // justo en el centro, y con mas sigue quedando rodeado de proyectos.
  const center = Math.floor((rows - 1) / 2) * COLS + 1;
  return { rows, cells: rows * COLS, center };
}

export type StageItem = {
  name: string;
  // El tipo de proyecto viene dos veces: la clave elige el dibujo de la celda,
  // la etiqueta es lo que se lee, ya en el idioma de la pagina.
  kind: string;
  kindLabel: string;
  period: string;
  summary: string;
  anchor: string;
};

export type StageText = {
  title: string;
  groupLabel: string;
  hint: string;
};

function scrollTo(id: string) {
  const quiet = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const behavior = quiet ? "auto" : "smooth";
  const el = document.getElementById(id);
  if (!el) return;
  // Abrir antes de bajar: si no, se scrollea hasta donde estaba la tarjeta
  // cerrada y al expandirse el contenido queda fuera de pantalla. El resto se
  // cierra solo, porque comparten el atributo name.
  if (el instanceof HTMLDetailsElement) el.open = true;
  el.scrollIntoView({ behavior, block: "start" });
  el.classList.add("stage-hit");
  window.setTimeout(() => el.classList.remove("stage-hit"), 1400);
}

// El cuadro de dialogo escribe de a una letra, como en Mega Man X. Tiene que
// ser rapido: se reescribe cada vez que se mueve el cursor, asi que el texto
// entero tarda como mucho TYPE_BUDGET_MS, sea corto o largo.
const TYPE_BUDGET_MS = 1100;
const TYPE_MIN_STEP_MS = 8;
const TYPE_MAX_STEP_MS = 28;

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = () => setReduced(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

// Devuelve cuantas letras del mensaje se ven y como terminarlo de golpe.
// El primer render muestra el texto entero: asi sale del servidor y asi lo ve
// quien entra sin JavaScript. Recien se escribe letra por letra cuando el
// mensaje cambia, o sea cuando alguien mueve el cursor.
function useTypewriter(message: string, reduced: boolean) {
  const [shown, setShown] = useState(message.length);
  const first = useRef(true);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    window.clearInterval(timer.current);
    if (reduced) {
      setShown(message.length);
      return;
    }
    setShown(0);
    const step = Math.min(TYPE_MAX_STEP_MS, Math.max(TYPE_MIN_STEP_MS, TYPE_BUDGET_MS / message.length));
    timer.current = window.setInterval(() => {
      setShown((count) => {
        if (count + 1 >= message.length) window.clearInterval(timer.current);
        return Math.min(count + 1, message.length);
      });
    }, step);
    return () => window.clearInterval(timer.current);
  }, [message, reduced]);

  function finish() {
    window.clearInterval(timer.current);
    setShown(message.length);
  }

  return { shown, done: shown >= message.length, finish };
}

type StageSelectProps = {
  items: readonly StageItem[];
  text: StageText;
  center: { name: string; role: string };
};

export function StageSelect({ items, text, center: portrait }: StageSelectProps) {
  const grid = buildGrid(items.length);
  const cells = Array.from({ length: grid.cells }, (_, slot) => {
    if (slot === grid.center) return { slot, project: null };
    const index = slot < grid.center ? slot : slot - 1;
    return { slot, project: items[index] ?? null };
  });

  const [cursor, setCursor] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  // Las flechas mueven el cursor y dan la vuelta al llegar al borde, como en la
  // pantalla de seleccion de un juego. Enter y espacio los maneja el boton.
  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const rows = grid.rows;
    const row = Math.floor(cursor / COLS);
    const col = cursor % COLS;
    let next = cursor;
    if (event.key === "ArrowRight") next = row * COLS + ((col + 1) % COLS);
    else if (event.key === "ArrowLeft") next = row * COLS + ((col + COLS - 1) % COLS);
    else if (event.key === "ArrowDown") next = (((row + 1) % rows) * COLS) + col;
    else if (event.key === "ArrowUp") next = (((row + rows - 1) % rows) * COLS) + col;
    else return;
    event.preventDefault();
    setCursor(next);
    refs.current[next]?.focus();
  }

  const active = cells[cursor]?.project ?? null;
  const reduced = useReducedMotion();
  const speaker = active ? active.name : portrait.name;
  const meta = active ? `${active.kindLabel} - ${active.period}` : "";
  const message = active ? active.summary : portrait.role;
  const typing = useTypewriter(message, reduced);

  // La cara del centro mira hacia la celda donde esta el cursor: la posicion en
  // la grilla es directamente la direccion de la mirada.
  const mirada = {
    x: (cursor % COLS) - (grid.center % COLS),
    y: Math.floor(cursor / COLS) - Math.floor(grid.center / COLS),
  };

  return (
    <div className="stage">
      <p className="stage__title">{text.title}</p>

      <div className="stage__grid" role="group" aria-label={text.groupLabel} onKeyDown={onKeyDown}>
        {cells.map(({ slot, project }) => {
          const selected = cursor === slot;

          // La celda del centro no lleva a ningun lado: es el retrato, y la
          // mirada ya cuenta donde esta el cursor. Va como div y no como boton
          // para que no prometa un click que no existe -- ni al mouse, ni al
          // teclado, ni a un lector de pantalla.
          if (slot === grid.center) {
            return (
              <div
                key={slot}
                className={`stage__cell stage__cell--center${selected ? " is-active" : ""}`}
                onMouseEnter={() => setCursor(slot)}
              >
                <span className="stage__glyph">
                  <PixelSprite map={faceLooking(mirada.x, mirada.y)} />
                </span>
                <span className="stage__name">{portrait.name}</span>
              </div>
            );
          }

          return (
            <button
              key={slot}
              type="button"
              ref={(el) => {
                refs.current[slot] = el;
              }}
              className={`stage__cell${selected ? " is-active" : ""}`}
              tabIndex={selected ? 0 : -1}
              onFocus={() => setCursor(slot)}
              onMouseEnter={() => setCursor(slot)}
              onClick={(event) => {
                if (!project) return;
                // Como en el juego: con el teclado, si el texto todavia se esta
                // escribiendo, el primer Enter lo completa y el siguiente entra.
                // Con mouse o toque se entra directo: el hover ya arranco el
                // texto, y tragarse ese click se siente como un boton muerto.
                // Un click hecho con Enter o espacio llega con detail en 0.
                if (event.detail === 0 && selected && !typing.done) {
                  typing.finish();
                  return;
                }
                scrollTo(project.anchor);
              }}
            >
              <span className="stage__glyph">
                {project ? <PixelSprite map={glyphForProject(project.name, project.kind)} /> : null}
              </span>
              <span className="stage__name">{project ? project.name : ""}</span>
            </button>
          );
        })}
      </div>

      {/* El cuadro se dibuja letra por letra, pero eso es solo para la vista:
          un lector de pantalla leeria cada letra por separado. Por eso el
          cuadro va oculto para la tecnologia asistiva y el texto entero va
          aparte, en una region que se anuncia sola. */}
      <p className="stage__sr" aria-live="polite">
        {meta ? `${speaker}. ${meta}. ${message}` : `${speaker}. ${message}`}
      </p>

      <div className="stage__dialog" aria-hidden="true">
        <div className="stage__dialog-body">
          <p className="stage__dialog-name">{speaker}</p>
          {meta ? <p className="stage__dialog-meta">{meta}</p> : null}
          <p className="stage__dialog-text">
            {message.slice(0, typing.shown)}
            {/* El resto del texto ocupa su lugar sin verse: el cuadro no cambia
                de alto mientras se escribe y las palabras no saltan de linea. */}
            <span className="stage__dialog-ghost">{message.slice(typing.shown)}</span>
            {typing.done ? <span className="stage__dialog-next" /> : null}
          </p>
        </div>
        <span className="stage__dialog-portrait">
          <PixelSprite map={faceLooking(-1, 0)} />
        </span>
      </div>

      <p className="stage__hint">{text.hint}</p>
    </div>
  );
}

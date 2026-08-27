// Fondo del opening: la ciudad de noche y la torre donde termina el paneo.
// Es SVG y no una imagen porque asi escala a cualquier pantalla sin pesar nada
// ni depender de un asset que haya que versionar.

type Building = { x: number; w: number; h: number };

// Las alturas estan puestas a mano: dos torres altas rompen la linea del
// horizonte y el resto baja en escalones para que el ojo tenga donde apoyarse.
const BUILDINGS: readonly Building[] = [
  { x: 0, w: 26, h: 88 },
  { x: 28, w: 18, h: 132 },
  { x: 48, w: 30, h: 64 },
  { x: 80, w: 22, h: 108 },
  { x: 104, w: 34, h: 156 },
  { x: 140, w: 20, h: 76 },
  { x: 162, w: 28, h: 120 },
  { x: 192, w: 24, h: 92 },
  { x: 218, w: 36, h: 168 },
  { x: 256, w: 20, h: 70 },
  { x: 278, w: 26, h: 116 },
  { x: 306, w: 14, h: 84 },
];

const GROUND = 200;

function windows(b: Building, index: number) {
  const cells = [];
  const cols = Math.max(1, Math.floor((b.w - 6) / 6));
  const rows = Math.max(1, Math.floor((b.h - 10) / 8));
  for (let c = 0; c < cols; c += 1) {
    for (let r = 0; r < rows; r += 1) {
      // Patron fijo: siempre se apagan las mismas ventanas, asi el dibujo no
      // cambia entre el render del servidor y el del navegador.
      const lit = (index * 7 + c * 13 + r * 5) % 4 !== 0;
      if (!lit) continue;
      cells.push(
        <rect
          key={`${c}-${r}`}
          x={b.x + 4 + c * 6}
          y={GROUND - b.h + 6 + r * 8}
          width={3}
          height={4}
          fill="#f7d51d"
          opacity={(index + c + r) % 3 === 0 ? 0.45 : 0.9}
        />,
      );
    }
  }
  return cells;
}

export function Skyline({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 320 ${GROUND}`}
      preserveAspectRatio="xMidYMax slice"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {BUILDINGS.map((b, i) => (
        <g key={b.x}>
          <rect x={b.x} y={GROUND - b.h} width={b.w} height={b.h} fill="#101a3a" />
          <rect x={b.x} y={GROUND - b.h} width={b.w} height={2} fill="#2b4a8a" />
          {windows(b, i)}
        </g>
      ))}
    </svg>
  );
}

// La torre del segundo tramo: una sola columna, vista de cerca, para que el
// paneo tenga referencia de altura mientras sube.
export function Tower({ className }: { className?: string }) {
  const floors = 24;
  return (
    <svg
      viewBox="0 0 64 240"
      preserveAspectRatio="xMidYMin slice"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x={0} y={0} width={64} height={240} fill="#0b1230" />
      <rect x={0} y={0} width={64} height={4} fill="#3fb8c8" />
      <rect x={0} y={4} width={64} height={3} fill="#2b4a8a" />
      {Array.from({ length: floors }, (_, r) => (
        <g key={r}>
          <rect x={0} y={12 + r * 10} width={64} height={1} fill="#05060c" opacity={0.7} />
          {[6, 18, 30, 42, 54].map((x, c) => (
            <rect
              key={x}
              x={x}
              y={14 + r * 10}
              width={4}
              height={5}
              fill="#f7d51d"
              opacity={(r * 3 + c * 7) % 5 === 0 ? 0.15 : 0.7}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

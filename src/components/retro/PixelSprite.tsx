import type { CSSProperties } from "react";
import { PALETTE, type Palette } from "./pixelArt";

type PixelSpriteProps = {
  map: readonly string[];
  palette?: Palette;
  className?: string;
  style?: CSSProperties;
  title?: string;
};

type Run = { x: number; y: number; w: number; fill: string };

// Junta los pixeles contiguos del mismo color en un solo rectangulo. Un sprite
// de 14x20 pasa de 280 nodos a unas 60: menos DOM y el mismo dibujo.
function toRuns(map: readonly string[], palette: Palette): Run[] {
  const runs: Run[] = [];
  map.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      let w = 1;
      while (x + w < row.length && row[x + w] === ch) w += 1;
      const fill = palette[ch];
      if (fill && fill !== "transparent") runs.push({ x, y, w, fill });
      x += w;
    }
  });
  return runs;
}

export function PixelSprite({ map, palette = PALETTE, className, style, title }: PixelSpriteProps) {
  const width = map.reduce((max, row) => Math.max(max, row.length), 0);
  const height = map.length;
  const runs = toRuns(map, palette);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      shapeRendering="crispEdges"
      className={className}
      style={style}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {runs.map((r) => (
        <rect key={`${r.x}-${r.y}-${r.w}`} x={r.x} y={r.y} width={r.w} height={1} fill={r.fill} />
      ))}
    </svg>
  );
}

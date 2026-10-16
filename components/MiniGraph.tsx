import type { GraphSpec } from "@/lib/questionBank";

const SIZE = 200;
const MIN = -8;
const MAX = 8;

const px = (x: number) => ((x - MIN) / (MAX - MIN)) * SIZE;
const py = (y: number) => SIZE - ((y - MIN) / (MAX - MIN)) * SIZE;
const inRange = (v: number) => v >= MIN - 0.01 && v <= MAX + 0.01;

function samplePath(
  fn: (t: number) => [number, number],
  tMin = MIN,
  tMax = MAX
): string {
  let d = "";
  let pen = false;
  for (let t = tMin; t <= tMax + 1e-9; t += 0.1) {
    const [x, y] = fn(t);
    if (inRange(x) && inRange(y)) {
      d += `${pen ? "L" : "M"}${px(x).toFixed(1)},${py(y).toFixed(1)}`;
      pen = true;
    } else {
      pen = false;
    }
  }
  return d;
}

function curvePath(spec: GraphSpec): string {
  switch (spec.kind) {
    case "line": {
      // Endpoints at the vertical edges, clipped against top/bottom.
      const yAt = (x: number) => spec.m * x + spec.b;
      let pts: [number, number][] = [
        [MIN, yAt(MIN)],
        [MAX, yAt(MAX)],
      ];
      const xTop = (MAX - spec.b) / spec.m;
      const xBot = (MIN - spec.b) / spec.m;
      if (spec.m !== 0) {
        if (inRange(xTop)) pts.push([xTop, MAX]);
        if (inRange(xBot)) pts.push([xBot, MIN]);
      }
      pts = pts
        .filter(([x, y]) => inRange(x) && inRange(y))
        .sort((a, b) => a[0] - b[0]);
      return pts
        .map(([x, y], i) => `${i === 0 ? "M" : "L"}${px(x)},${py(y)}`)
        .join("");
    }
    case "parabola":
      return samplePath((t) => [t, spec.a * (t - spec.h) ** 2 + spec.k]);
    case "abs":
      return samplePath((t) => [t, spec.a * Math.abs(t - spec.h) + spec.k]);
    case "cubic":
      return samplePath((t) => [t, spec.a * (t - spec.h) ** 3 + spec.k]);
    case "exp":
      return samplePath((t) => [t, spec.a * spec.b ** t]);
    case "parabolaX":
      return samplePath((t) => [spec.a * (t - spec.k) ** 2 + spec.h, t]);
    case "absX":
      return samplePath((t) => [spec.a * Math.abs(t - spec.k) + spec.h, t]);
    case "sqrt":
      return samplePath((t) => [t, spec.a * Math.sqrt(t - spec.h) + spec.k], spec.h);
    case "cbrt":
      return samplePath((t) => [t, spec.a * Math.cbrt(t - spec.h) + spec.k]);
    default:
      return "";
  }
}

function Curve({ spec }: { spec: GraphSpec }) {
  const stroke = "#0284c7";
  switch (spec.kind) {
    case "vline":
      return (
        <line
          x1={px(spec.x)}
          y1={0}
          x2={px(spec.x)}
          y2={SIZE}
          stroke={stroke}
          strokeWidth={2.5}
        />
      );
    case "hline":
      return (
        <line
          x1={0}
          y1={py(spec.y)}
          x2={SIZE}
          y2={py(spec.y)}
          stroke={stroke}
          strokeWidth={2.5}
        />
      );
    case "circle":
      return (
        <circle
          cx={px(spec.h)}
          cy={py(spec.k)}
          r={(spec.r / (MAX - MIN)) * SIZE}
          fill="none"
          stroke={stroke}
          strokeWidth={2.5}
        />
      );
    case "points":
      return (
        <>
          {spec.points.map(([x, y], i) => (
            <circle key={i} cx={px(x)} cy={py(y)} r={4} fill={stroke} />
          ))}
        </>
      );
    default:
      return (
        <path d={curvePath(spec)} fill="none" stroke={stroke} strokeWidth={2.5} />
      );
  }
}

export default function MiniGraph({ spec }: { spec: GraphSpec }) {
  const gridLines = [];
  for (let i = MIN + 1; i < MAX; i++) {
    gridLines.push(i);
  }
  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className="w-full h-auto"
      role="img"
      aria-hidden="true"
    >
      <rect width={SIZE} height={SIZE} fill="#f8fafc" />
      {gridLines.map((i) => (
        <line
          key={`v${i}`}
          x1={px(i)}
          y1={0}
          x2={px(i)}
          y2={SIZE}
          stroke={i === 0 ? "#94a3b8" : "#e2e8f0"}
          strokeWidth={i === 0 ? 1.5 : 1}
        />
      ))}
      {gridLines.map((i) => (
        <line
          key={`h${i}`}
          x1={0}
          y1={py(i)}
          x2={SIZE}
          y2={py(i)}
          stroke={i === 0 ? "#94a3b8" : "#e2e8f0"}
          strokeWidth={i === 0 ? 1.5 : 1}
        />
      ))}
      {/* Axis arrowheads */}
      <polygon
        points={`${px(0) - 4},${SIZE - 2} ${px(0) + 4},${SIZE - 2} ${px(0)},${SIZE - 7}`}
        fill="#94a3b8"
      />
      <polygon
        points={`${px(0) - 4},2 ${px(0) + 4},2 ${px(0)},7`}
        fill="#94a3b8"
      />
      <polygon
        points={`${SIZE - 7},${py(0) - 4} ${SIZE - 2},${py(0)} ${SIZE - 7},${py(0) + 4}`}
        fill="#94a3b8"
      />
      <polygon points={`7,${py(0) - 4} 2,${py(0)} 7,${py(0) + 4}`} fill="#94a3b8" />
      {/* Axis number labels */}
      {gridLines.map((i) =>
        i !== 0 ? (
          <text
            key={`xl${i}`}
            x={px(i)}
            y={py(0) + 10}
            fontSize={8}
            fill="#64748b"
            textAnchor="middle"
          >
            {i}
          </text>
        ) : null
      )}
      {gridLines.map((i) =>
        i !== 0 ? (
          <text
            key={`yl${i}`}
            x={px(0) - 3}
            y={py(i) + 3}
            fontSize={8}
            fill="#64748b"
            textAnchor="end"
          >
            {i}
          </text>
        ) : null
      )}
      <text
        x={px(0) - 3}
        y={py(0) + 10}
        fontSize={8}
        fill="#64748b"
        textAnchor="end"
      >
        0
      </text>
      <Curve spec={spec} />
    </svg>
  );
}

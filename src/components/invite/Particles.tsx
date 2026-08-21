import { useMemo } from "react";

function useSeeded(count: number, kind: "gold" | "petal") {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const r = (n: number) => ((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1 + 1) % 1;
        return {
          id: `${kind}-${i}`,
          left: `${Math.round(r(1) * 96) + 2}%`,
          size: kind === "gold" ? 2 + r(2) * 3 : 7 + r(2) * 8,
          duration: (kind === "gold" ? 16 : 13) + r(3) * 12,
          delay: -r(4) * 22,
          drift: `${Math.round((r(5) - 0.5) * 160)}px`,
          opacity: 0.35 + r(6) * 0.5,
        };
      }),
    [count, kind],
  );
}

/** Lightweight ambient effects: golden dust rising + marigold petals falling. */
export function Particles({ gold = 14, petals = 8 }: { gold?: number; petals?: number }) {
  const dust = useSeeded(gold, "gold");
  const flowers = useSeeded(petals, "petal");

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden" aria-hidden>
      {dust.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            background: "radial-gradient(circle, oklch(0.94 0.1 88), oklch(0.78 0.14 70 / 0.2))",
            boxShadow: "0 0 8px oklch(0.85 0.14 78 / 0.7)",
            ["--drift" as string]: p.drift,
            animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
            willChange: "transform",
          }}
        />
      ))}
      {flowers.map((p) => (
        <span
          key={p.id}
          className="absolute top-0"
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 0.72,
            opacity: p.opacity * 0.9,
            borderRadius: "60% 40% 55% 45% / 60% 60% 40% 40%",
            background:
              "linear-gradient(140deg, oklch(0.8 0.16 72), oklch(0.66 0.17 48))",
            ["--drift" as string]: p.drift,
            animation: `petalFall ${p.duration}s linear ${p.delay}s infinite`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}

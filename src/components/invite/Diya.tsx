import { cn } from "@/lib/utils";

export function Diya({ className, bright = false }: { className?: string; bright?: boolean }) {
  return (
    <div className={cn("relative", className)} aria-hidden>
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl animate-glow-pulse"
        style={{
          width: bright ? "16rem" : "9rem",
          height: bright ? "16rem" : "9rem",
          background:
            "radial-gradient(circle, oklch(0.85 0.16 72 / 0.7), oklch(0.7 0.15 50 / 0.15) 60%, transparent 70%)",
        }}
      />
      <svg viewBox="0 0 120 90" className="relative w-full">
        <defs>
          <linearGradient id="flame" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="oklch(0.72 0.19 45)" />
            <stop offset="55%" stopColor="oklch(0.86 0.17 78)" />
            <stop offset="100%" stopColor="oklch(0.98 0.06 95)" />
          </linearGradient>
          <linearGradient id="brass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.11 82)" />
            <stop offset="50%" stopColor="oklch(0.58 0.1 68)" />
            <stop offset="100%" stopColor="oklch(0.82 0.1 85)" />
          </linearGradient>
        </defs>
        <g className="animate-flicker" style={{ transformOrigin: "60px 44px" }}>
          <path
            d="M60 4c7 12 12 18 12 27a12 12 0 0 1-24 0c0-9 5-15 12-27z"
            fill="url(#flame)"
          />
        </g>
        <ellipse cx="60" cy="58" rx="40" ry="9" fill="url(#brass)" opacity="0.95" />
        <path d="M20 58c4 14 18 22 40 22s36-8 40-22z" fill="url(#brass)" />
        <ellipse cx="60" cy="58" rx="26" ry="5" fill="oklch(0.4 0.07 60)" opacity="0.55" />
      </svg>
    </div>
  );
}

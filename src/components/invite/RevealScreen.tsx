import { useState } from "react";
import { Diya } from "./Diya";
import { invitation } from "@/data/invitation";
import { cn } from "@/lib/utils";

export function RevealScreen({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  const handle = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(onOpen, 1500);
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bamboo-bg px-6 text-center transition-opacity duration-700",
        opening && "pointer-events-none opacity-0 delay-700",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 50% at 50% 45%, oklch(0.4 0.08 62 / 0.55), transparent 70%)",
        }}
      />

      {/* rangoli that draws itself on tap */}
      <svg
        viewBox="0 0 400 400"
        className="pointer-events-none absolute h-[min(88vw,26rem)] w-[min(88vw,26rem)] opacity-70"
        aria-hidden
      >
        {[150, 120, 90].map((r, i) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke="oklch(0.82 0.12 80 / 0.55)"
            strokeWidth={i === 0 ? 1 : 0.8}
            strokeDasharray={i === 1 ? "6 10" : `${2 * Math.PI * r}`}
            strokeDashoffset={i === 1 ? 0 : 2 * Math.PI * r}
            style={
              opening
                ? { animation: `drawRing ${1 + i * 0.25}s ease-out forwards` }
                : { opacity: 0.25, strokeDashoffset: 0 }
            }
          />
        ))}
        {Array.from({ length: 12 }, (_, i) => (
          <ellipse
            key={i}
            cx="200"
            cy="60"
            rx="7"
            ry="18"
            fill="oklch(0.76 0.16 66 / 0.35)"
            transform={`rotate(${i * 30} 200 200)`}
            style={{
              opacity: opening ? 1 : 0.25,
              transition: `opacity .6s ease ${i * 40}ms`,
            }}
          />
        ))}
      </svg>

      {opening && (
        <span
          className="pointer-events-none absolute h-24 w-24 rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.95 0.1 85 / 0.95), oklch(0.78 0.16 62 / 0.5) 60%, transparent 70%)",
            animation: "burst 1.4s cubic-bezier(0.22,1,0.36,1) forwards",
          }}
          aria-hidden
        />
      )}

      <div className="relative z-10 flex flex-col items-center">
        <Diya className="w-36 sm:w-44" bright={opening} />

        <p className="deva mt-10 text-2xl leading-relaxed gold-text sm:text-3xl">
          {invitation.mantra}
        </p>
        <div className="gold-rule my-6 w-40" />
        <p className="font-display text-lg italic text-cream/80 sm:text-xl">
          A divine celebration awaits...
        </p>

        <button
          onClick={handle}
          className="animate-breathe mt-12 rounded-full border border-gold/60 bg-gradient-to-b from-saffron/25 to-transparent px-10 py-4 text-sm tracking-[0.28em] text-gold-soft uppercase transition-colors active:bg-saffron/30"
        >
          Tap to reveal
        </button>
      </div>
    </div>
  );
}

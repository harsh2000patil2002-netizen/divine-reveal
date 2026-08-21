import { ChevronDown } from "lucide-react";
import { invitation } from "@/data/invitation";

export function Hero() {
  const { hero, greeting, occasion, message } = invitation;

  return (
    <header className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 py-16">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 35%, oklch(0.36 0.07 60 / 0.6), transparent 70%)",
        }}
      />

      <div className="relative w-full max-w-md">
        <div className="animate-soft-float overflow-hidden rounded-[2rem] border border-gold/40 shadow-[var(--shadow-frame)]">
          <img
            src={hero.src}
            alt={hero.alt}
            width={1024}
            height={1280}
            className="h-full w-full object-cover"
            style={{ maxHeight: "56svh" }}
          />
        </div>
        <div
          className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.6rem] blur-2xl"
          style={{ background: "oklch(0.7 0.15 60 / 0.28)" }}
        />
      </div>

      <div className="relative mt-9 max-w-xl text-center">
        <h1 className="deva text-3xl gold-text sm:text-4xl">{greeting}</h1>
        <p className="mt-3 text-xs tracking-[0.35em] text-muted-foreground uppercase">
          {occasion}
        </p>
        <div className="gold-rule mx-auto my-6 w-24" />
        <p className="font-display text-lg leading-relaxed text-cream/85 sm:text-xl">
          {message}
        </p>
      </div>

      <div className="mt-12 flex flex-col items-center gap-2 text-gold/70">
        <span className="text-[0.62rem] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden />
      </div>
    </header>
  );
}

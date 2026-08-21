import { useState } from "react";
import { Share2 } from "lucide-react";
import { Diya } from "./Diya";
import { Reveal } from "./Reveal";
import { invitation } from "@/data/invitation";

export function FinalSection() {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const data = {
      title: `${invitation.occasion} — The ${invitation.familyName} Family`,
      text: invitation.message,
      url,
    };
    try {
      if (navigator.share) {
        await navigator.share(data);
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      /* user dismissed */
    }
  };

  return (
    <section
      className="relative overflow-hidden px-5 py-24 text-center"
      style={{
        background:
          "radial-gradient(80% 60% at 50% 90%, oklch(0.32 0.07 58 / 0.9), oklch(0.16 0.03 52) 75%)",
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center gap-10 opacity-90">
        <Diya className="w-16 translate-y-2" />
        <Diya className="w-20" />
        <Diya className="w-16 translate-y-2" />
      </div>

      <Reveal className="relative mx-auto max-w-xl">
        <h2 className="font-display text-3xl leading-snug gold-text sm:text-5xl">
          Your Presence Will Make
          <br />
          This Celebration Complete.
        </h2>
        <p className="deva mt-8 text-xl text-cream/90 sm:text-2xl">
          🙏 गणपति बप्पा मोरया 🙏
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          We can't wait to celebrate with you.
        </p>

        <button
          onClick={share}
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-saffron to-accent px-9 py-4 text-xs tracking-[0.28em] text-primary-foreground uppercase"
        >
          <Share2 className="h-4 w-4" aria-hidden /> Share Invitation
        </button>

        <p
          className="mt-4 text-xs tracking-[0.2em] text-gold uppercase transition-opacity duration-300"
          style={{ opacity: copied ? 1 : 0 }}
          aria-live="polite"
        >
          Invitation link copied!
        </p>
      </Reveal>

      <div className="h-24" />
    </section>
  );
}

import { useState } from "react";
import { Play, X } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { invitation } from "@/data/invitation";

/** Set `invitation.video.src` to a real URL to play a customer video. */
export function VideoSection() {
  const { video } = invitation;
  const [open, setOpen] = useState(false);

  return (
    <section className="px-5 py-20">
      <SectionTitle>{video.title}</SectionTitle>

      <Reveal delay={120} className="mx-auto mt-12 max-w-2xl">
        <button
          onClick={() => setOpen(true)}
          className="group relative block w-full overflow-hidden rounded-[1.6rem] border border-gold/50 shadow-[var(--shadow-frame)]"
          aria-label={video.label}
        >
          <img
            src={video.poster}
            alt="Family celebration video preview"
            loading="lazy"
            width={1280}
            height={720}
            className="aspect-video w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-deep/45" />
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <span className="animate-breathe flex h-16 w-16 items-center justify-center rounded-full border border-gold/70 bg-deep/60">
              <Play className="ml-1 h-6 w-6 text-gold-soft" aria-hidden />
            </span>
            <span className="text-[0.65rem] tracking-[0.32em] text-gold-soft uppercase">
              {video.label}
            </span>
          </span>
        </button>
      </Reveal>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-deep/90 px-5"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="card-festive relative w-full max-w-lg rounded-2xl p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-muted-foreground"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            {video.src ? (
              <video src={video.src} controls autoPlay className="w-full rounded-xl" />
            ) : (
              <>
                <span className="text-3xl" aria-hidden>
                  🎬
                </span>
                <p className="mt-4 font-display text-2xl text-cream">
                  Your family video will appear here.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Share a short clip and we'll place it right in your invitation.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

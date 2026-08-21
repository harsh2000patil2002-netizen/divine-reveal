import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { invitation } from "@/data/invitation";

/** Swap `invitation.familyPhoto` with the customer's uploaded photo. */
export function FamilySection() {
  const { familyPhoto, familyName, familyNote } = invitation;

  return (
    <section className="relative px-5 py-20">
      <SectionTitle>Celebrating Bappa Together ❤️</SectionTitle>

      <Reveal delay={120} className="mx-auto mt-12 max-w-sm">
        <figure className="animate-soft-float card-festive relative rounded-[1.8rem] p-3 pb-6">
          <div className="overflow-hidden rounded-[1.4rem] border border-gold/40">
            <img
              src={familyPhoto.src}
              alt={familyPhoto.alt}
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover"
            />
          </div>
          <figcaption className="mt-5 text-center">
            <p className="font-display text-2xl text-cream">The {familyName} Family</p>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {familyNote}
            </p>
          </figcaption>
          <span className="absolute -top-3 -left-3 text-2xl opacity-80" aria-hidden>
            🌸
          </span>
          <span className="absolute -right-2 -bottom-2 text-xl opacity-70" aria-hidden>
            🌼
          </span>
        </figure>
      </Reveal>
    </section>
  );
}

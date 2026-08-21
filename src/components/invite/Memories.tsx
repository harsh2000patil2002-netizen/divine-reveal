import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { invitation } from "@/data/invitation";

export function Memories() {
  const [feature, ...rest] = invitation.memories;

  return (
    <section className="px-5 py-20">
      <SectionTitle>Moments With Bappa</SectionTitle>

      <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-5">
        <Reveal className="sm:col-span-3">
          <figure className="group overflow-hidden rounded-[1.6rem] border border-gold/35 shadow-[var(--shadow-frame)]">
            <img
              src={feature.src}
              alt={feature.alt}
              loading="lazy"
              className="h-72 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 sm:h-full"
            />
          </figure>
        </Reveal>

        <div className="grid gap-5 sm:col-span-2 sm:content-start">
          {rest.slice(0, 2).map((m, i) => (
            <Reveal key={m.caption} delay={120 + i * 100}>
              <figure className="rotate-[-1.5deg] rounded-lg bg-cream/95 p-2 pb-7 shadow-[var(--shadow-frame)] even:rotate-[1.5deg]">
                <img
                  src={m.src}
                  alt={m.alt}
                  loading="lazy"
                  className="h-40 w-full rounded-sm object-cover"
                />
                <figcaption className="mt-2 text-center font-display text-sm text-deep">
                  {m.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {rest.slice(2).map((m, i) => (
          <Reveal
            key={m.caption}
            delay={i * 110}
            className={i === 0 ? "sm:col-span-2" : "sm:col-span-3"}
          >
            <figure className="group overflow-hidden rounded-[1.4rem] border border-gold/30">
              <img
                src={m.src}
                alt={m.alt}
                loading="lazy"
                className="h-48 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

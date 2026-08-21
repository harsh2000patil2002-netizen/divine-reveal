import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { invitation } from "@/data/invitation";

export function Schedule() {
  return (
    <section className="px-5 py-20">
      <SectionTitle>The Celebration</SectionTitle>

      <ol className="relative mx-auto mt-12 max-w-xl border-l border-gold/30 pl-6">
        {invitation.schedule.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 110} className="relative pb-8 last:pb-0">
            <span
              className="absolute -left-[1.97rem] top-4 h-2.5 w-2.5 rounded-full bg-gold"
              style={{ boxShadow: "0 0 12px oklch(0.82 0.14 78 / 0.8)" }}
              aria-hidden
            />
            <div className="card-festive flex items-center gap-4 rounded-2xl px-5 py-4 transition-transform duration-300 hover:translate-x-1">
              <span className="text-2xl" aria-hidden>
                {item.icon}
              </span>
              <div className="flex-1">
                <p className="font-display text-xl text-cream">{item.title}</p>
              </div>
              <p className="text-xs tracking-[0.2em] text-gold uppercase">{item.time}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

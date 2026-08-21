import { CalendarDays, Clock, MapPin, CalendarPlus, Navigation } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { invitation } from "@/data/invitation";

export function EventDetails() {
  const { event } = invitation;

  const cards = [
    { icon: CalendarDays, label: "Date", value: event.date },
    { icon: Clock, label: "Time", value: event.time },
    { icon: MapPin, label: "Venue", value: `${event.venueName}\n${event.venueCity}` },
  ];

  const openMaps = () =>
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.mapsQuery)}`,
      "_blank",
      "noopener",
    );

  const addToCalendar = () => {
    const url = new URL("https://calendar.google.com/calendar/render");
    url.searchParams.set("action", "TEMPLATE");
    url.searchParams.set("text", `${invitation.occasion} — ${invitation.familyName} Family`);
    url.searchParams.set("dates", `${event.startISO}/${event.endISO}`);
    url.searchParams.set("location", `${event.venueName}, ${event.venueCity}`);
    url.searchParams.set("details", invitation.message);
    window.open(url.toString(), "_blank", "noopener");
  };

  return (
    <section className="px-5 py-20">
      <SectionTitle>Join Us For The Celebration</SectionTitle>

      <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.label} delay={i * 110}>
            <article className="card-festive h-full rounded-2xl p-7 text-center transition-transform duration-300 hover:-translate-y-1 active:-translate-y-1">
              <c.icon className="mx-auto h-6 w-6 text-gold" aria-hidden />
              <h3 className="mt-4 text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
                {c.label}
              </h3>
              <p className="mt-3 font-display text-xl whitespace-pre-line text-cream">
                {c.value}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
        <button
          onClick={openMaps}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-saffron to-accent px-6 py-4 text-xs tracking-[0.22em] text-primary-foreground uppercase"
        >
          <Navigation className="h-4 w-4" aria-hidden /> View Location
        </button>
        <button
          onClick={addToCalendar}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gold/50 px-6 py-4 text-xs tracking-[0.22em] text-gold-soft uppercase"
        >
          <CalendarPlus className="h-4 w-4" aria-hidden /> Add To Calendar
        </button>
      </Reveal>
    </section>
  );
}

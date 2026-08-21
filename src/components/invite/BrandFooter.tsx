import { invitation } from "@/data/invitation";

export function BrandFooter() {
  return (
    <footer className="border-t border-gold/15 px-5 py-10 text-center">
      <p className="font-display text-xl gold-text">{invitation.brand.name}</p>
      <p className="mt-1 text-xs tracking-[0.18em] text-muted-foreground">
        {invitation.brand.tagline}
      </p>
      <p className="mt-5 text-[0.65rem] tracking-[0.2em] text-muted-foreground/70 uppercase">
        Made with ❤️ for celebrations
      </p>
    </footer>
  );
}

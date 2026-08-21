import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <Reveal className="text-center">
      <h2 className="font-display text-3xl gold-text sm:text-4xl">{children}</h2>
      <div className="gold-rule mx-auto mt-5 w-20" />
    </Reveal>
  );
}

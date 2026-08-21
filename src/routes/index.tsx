import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { RevealScreen } from "@/components/invite/RevealScreen";
import { Particles } from "@/components/invite/Particles";
import { Hero } from "@/components/invite/Hero";
import { EventDetails } from "@/components/invite/EventDetails";
import { FamilySection } from "@/components/invite/FamilySection";
import { Memories } from "@/components/invite/Memories";
import { VideoSection } from "@/components/invite/VideoSection";
import { Schedule } from "@/components/invite/Schedule";
import { FinalSection } from "@/components/invite/FinalSection";
import { BrandFooter } from "@/components/invite/BrandFooter";

const title = "Ganpati Chaturthi 2026 Invitation | FestiveLink";
const description =
  "A living digital Ganpati Chaturthi invitation by FestiveLink — diya reveal, family photos, celebration schedule and venue details.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {!opened && <RevealScreen onOpen={() => setOpened(true)} />}

      {opened && (
        <div className="animate-in fade-in duration-700">
          <Particles />
          <div className="relative z-20">
            <Hero />
            <EventDetails />
            <FamilySection />
            <Memories />
            <VideoSection />
            <Schedule />
            <FinalSection />
            <BrandFooter />
          </div>
        </div>
      )}
    </main>
  );
}

/**
 * FestiveLink — single source of customer-editable content.
 * Swap these values (and the imported images) to personalise the invitation.
 */
import ganpatiHero from "@/assets/ganpati-hero.jpg";
import familyPhoto from "@/assets/family-photo.jpg";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import memory4 from "@/assets/memory-4.jpg";
import memory5 from "@/assets/memory-5.jpg";
import videoThumb from "@/assets/video-thumb.jpg";

export const invitation = {
  brand: {
    name: "FestiveLink",
    tagline: "Not just an invitation. An experience.",
  },
  familyName: "Deshmukh",
  occasion: "Ganpati Chaturthi 2026",
  mantra: "॥ श्री गणेशाय नमः ॥",
  greeting: "गणपति बप्पा मोरया 🙏",
  message:
    "With the blessings of Lord Ganesha, we warmly invite you to celebrate the arrival of Bappa with us.",
  familyNote:
    "Your presence and blessings will make this celebration even more special.",
  hero: { src: ganpatiHero, alt: "Lord Ganesha idol decorated with marigold flowers" },
  familyPhoto: { src: familyPhoto, alt: "The Deshmukh family celebrating Ganesh Chaturthi" },
  event: {
    date: "27 August 2026",
    time: "6:30 PM onwards",
    venueName: "FestiveLink Celebration Hall",
    venueCity: "Pune, Maharashtra",
    mapsQuery: "FestiveLink Celebration Hall, Pune, Maharashtra",
    startISO: "20260827T130000Z",
    endISO: "20260827T170000Z",
  },
  schedule: [
    { icon: "🪔", title: "Ganpati Sthapana", time: "6:30 PM" },
    { icon: "🙏", title: "Aarti", time: "7:30 PM" },
    { icon: "🌸", title: "Mahaprasad", time: "8:00 PM" },
    { icon: "🎶", title: "Bhajan & Celebration", time: "8:30 PM" },
  ],
  memories: [
    { src: memory1, alt: "Row of glowing diyas with flower petals", caption: "Diya lights" },
    { src: memory2, alt: "Modak offering on a banana leaf", caption: "Bappa's modak" },
    { src: memory3, alt: "Flower rangoli with a brass lamp", caption: "Rangoli morning" },
    { src: memory4, alt: "Family performing aarti before the idol", caption: "Sanjh aarti" },
    { src: memory5, alt: "Marigold garlands and banana leaves", caption: "Decorations" },
  ],
  video: {
    /** Set to a real video URL (mp4 / embed) to replace the placeholder. */
    src: null as string | null,
    poster: videoThumb,
    label: "Watch Message",
    title: "A Little Celebration From Our Family",
  },
};

export type Invitation = typeof invitation;

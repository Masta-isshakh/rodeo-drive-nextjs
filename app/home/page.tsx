// app/[lang]/page.tsx (or wherever your home is)
import dynamic from "next/dynamic";
import HeroVideo from "../components/HeroVideo/HeroVideo";

// ✅ Load these after initial render (huge speed win)
const ServicesHighlight = dynamic(
  () => import("../components/ServicesHighlight/ServicesHighlight"),
  { ssr: false }
);

const CinematicShowcase = dynamic(
  () => import("../components/CinematicShowcase/CinematicShowcase"),
  { ssr: false }
);

const Process = dynamic(
  () => import("../components/Process/Process"),
  { ssr: false }
);

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <ServicesHighlight />
      <CinematicShowcase />
      <Process />
    </>
  );
}

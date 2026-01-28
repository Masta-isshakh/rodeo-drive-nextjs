import HeroVideo from "../components/HeroVideo/HeroVideo";
import ServicesHighlight from "../components/ServicesHighlight/ServicesHighlight";
import Process from "../components/Process/Process";
import CinematicShowcase from "../components/CinematicShowcase/CinematicShowcase";

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

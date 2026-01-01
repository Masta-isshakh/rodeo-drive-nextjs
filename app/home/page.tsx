import HeroVideo from '../components/HeroVideo/HeroVideo';
import TrustStrip from '../components/TrustStrip/TrustStrip';
import ServicesHighlight from '../components/ServicesHighlight/ServicesHighlight';
import Process from '../components/Process/Process';
import CinematicShowcase from '../components/CinematicShowcase/CinematicShowcase';
import Rotating3DCar from '../components/Rotating3DCar/Rotating3DCar';

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <TrustStrip />
      <ServicesHighlight />
      <Rotating3DCar />
      <CinematicShowcase />
      <Process />
    </>
  );
}

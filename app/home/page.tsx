import HeroVideo from '../components/HeroVideo/HeroVideo';
import TrustStrip from '../components/TrustStrip/TrustStrip';
import ServicesHighlight from '../components/ServicesHighlight/ServicesHighlight';
import Process from '../components/Process/Process';
import CinematicShowcase from '../components/CinematicShowcase/CinematicShowcase';
import Rotating3DCar from '../components/Rotating3DCar/Rotating3DCar';
import RotatingCarGallery from '../components/RotatingCarGallery/RotatingCarGallery';
import Floating3DCars from '../components/Floating3DCars/Floating3DCars';
import Experience3D from '../components/Experience3D/Experience3D';

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

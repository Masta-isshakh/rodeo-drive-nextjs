import HeroVideo from "@/app/components/HeroVideo/HeroImage";
import ServicesHighlight from "@/app/components/ServicesHighlight/ServicesHighlight";
import CinematicShowcase from "@/app/components/CinematicShowcase/CinematicShowcase";
import Process from "@/app/components/Process/Process";
import PayLaterHero from "../PayLater/PayLaterClient";
import PayLaterClient from "../PayLater/PayLaterClient";
import HeroImage from "@/app/components/HeroVideo/HeroImage";

export default function HomeContent() {
  return (
    <>
      <section>
        <HeroImage />
      </section>

      <section>
        <ServicesHighlight />
      </section>

            <section>
        <PayLaterClient/>
      </section>

      <section>
        <CinematicShowcase />
      </section>

      <section>
        <Process />
      </section>
    </>
  );
}

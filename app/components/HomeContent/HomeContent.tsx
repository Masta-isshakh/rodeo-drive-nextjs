import ServicesHighlight from "@/app/components/ServicesHighlight/ServicesHighlight";
import CinematicShowcase from "@/app/components/CinematicShowcase/CinematicShowcase";
import Process from "@/app/components/Process/Process";
import PayLaterClient from "../PayLater/PayLaterClient";
import HeroImage from "@/app/components/HeroVideo/HeroImage";
import ReviewsProof from "@/app/components/ReviewsProof/ReviewsProof";

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
        <PayLaterClient asPage={false} headingLevel={2} />
      </section>

      <section>
        <CinematicShowcase />
      </section>

      <section>
        <Process />
      </section>

      <section>
        <ReviewsProof />
      </section>
    </>
  );
}

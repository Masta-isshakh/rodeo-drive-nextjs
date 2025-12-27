import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createMasterTimeline(container: HTMLElement) {
  return gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: "+=500%",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    },
  });
}

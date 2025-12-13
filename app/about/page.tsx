import type { Metadata } from "next";
import AboutPageClient from "./AboutPage";

export const metadata: Metadata = {
  title: "About Us | Rodeo Drive Doha",
  description:
    "Learn more about Rodeo Drive Doha, our vision, mission, values and expert team delivering premium automotive services in Qatar.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Rodeo Drive Doha",
    description:
      "Discover our story, mission and values. Premium automotive services in Doha, Qatar.",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}

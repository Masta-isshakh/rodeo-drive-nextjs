import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import "./services.css";

export const metadata: Metadata = {
  title: "Rodeo Drive Services | Premium Car Care in Doha",
  description:
    "Discover Rodeo Drive premium car services in Doha: polishing, ceramic coating, PPF, nano protection, customization and luxury automotive care.",
  keywords: [
    "car services Doha",
    "ceramic coating Qatar",
    "car polishing Doha",
    "PPF protection",
    "luxury car detailing Qatar"
  ],
  openGraph: {
    title: "Rodeo Drive | Premium Automotive Services",
    description:
      "Luxury car care and protection services in Doha, Qatar.",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}

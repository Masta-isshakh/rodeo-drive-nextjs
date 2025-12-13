import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import "./services.css";

export const metadata: Metadata = {
  title: "Rodeo Drive Services | Premium Car Care in Doha",
  description:
    "Discover Rodeo Drive premium car services in Doha: polishing, ceramic coating, PPF, nano protection, customization, and luxury automotive care.",
  keywords: [
    "car services Doha",
    "ceramic coating Qatar",
    "car polishing Doha",
    "PPF protection",
    "luxury car detailing Qatar",
    "paint protection",
    "nano ceramic coating",
    "vehicle customization"
  ],
  openGraph: {
    title: "Rodeo Drive | Premium Automotive Services",
    description:
      "Luxury car care, polishing, PPF, ceramic coating, and protection services in Doha, Qatar.",
    type: "website",
    url: "https://yourdomain.com/services",
    siteName: "Rodeo Drive",
    images: [
      {
        url: "https://mastatiktok.s3.us-east-1.amazonaws.com/video-poster.jpg",
        width: 1200,
        height: 630,
        alt: "Rodeo Drive Premium Car Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodeo Drive | Premium Car Services",
    description:
      "Discover luxury automotive services in Doha including polishing, ceramic coating, PPF, nano protection, and customization.",
    images: ["https://mastatiktok.s3.us-east-1.amazonaws.com/video-poster.jpg"],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}

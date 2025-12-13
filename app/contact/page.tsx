import type { Metadata } from "next";
import ContactPageClient from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | Rodeo Drive Doha",
  description:
    "Contact Rodeo Drive Doha for premium automotive services. Send us a message, call us or reach us on WhatsApp for luxury car care in Qatar.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Rodeo Drive Doha",
    description:
      "Get in touch with Rodeo Drive Doha for premium car detailing and protection services in Qatar.",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}

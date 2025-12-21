"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

const servicesData: Record<string, any> = {
  polish: {
    title: "Polishing",
    image: "/images/services/polish.png",
    description:
      "High-precision machine polishing to restore deep gloss and eliminate imperfections.",
  },
  protection: {
    title: "Ceramic Protection",
    image: "/images/services/protection.png",
    description:
      "Advanced ceramic coating for long-lasting shine and paint protection.",
  },
  wrap: {
    title: "Car Wrapping",
    image: "/images/services/wrap.png",
    description:
      "Premium vinyl wrapping to redefine your vehicle’s identity.",
  },
  interior: {
    title: "Interior Care",
    image: "/images/services/interior.png",
    description:
      "Luxury interior restoration and deep cleaning solutions.",
  },
  smart: {
    title: "Smart Repair",
    image: "/images/services/smart.png",
    description:
      "Precision repairs for scratches, dents and minor damages.",
  },
  ppf: {
    title: "Paint Protection Film",
    image: "/images/services/ppf.png",
    description:
      "Invisible shield protecting your paint from impacts and wear.",
  },
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const service = servicesData[slug as string];

  if (!service) return null;

  return (
    <main className="service-detail page-transition">
      <section className="service-hero">
        <div className="service-hero-image">
          <img src={service.image} alt={service.title} />
        </div>

        <div className="service-hero-content">
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <a href="/contact" className="service-cta">
            {t("service.book_now")}
          </a>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

const serviceImages: Record<string, string> = {
  polish: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
  ceramic_coating:
    "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4",
  protection: "https://images.unsplash.com/photo-1549921296-3f9a3f1f8a9f",
  color_protection:
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  rubberized_paint: "https://images.unsplash.com/photo-1542365887-1b8b6a7f8b5b",
  smart_repair: "https://images.unsplash.com/photo-1549921294-df7c2b93d7f0",
  paintless_dent_repair:
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
  protective_wrap:
    "https://images.unsplash.com/photo-1518655048521-f130df041f66",
  nano_rims: "https://images.unsplash.com/photo-1517863819182-1f4e0f1a8f4d",
  nano_body: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc",
  nano_leather: "https://images.unsplash.com/photo-1520975917670-95f3f7f6d66c",
  front_windshield:
    "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
  black_edition: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759",
  defender_custom:
    "https://images.unsplash.com/photo-1519669556871-1e52aede2b61",
  car_accessories_painting:
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
};

export default function ServicesClient() {
  const { t } = useTranslation();

  const serviceKeys = Object.keys(serviceImages);

  return (
    <main className="services-page">
      {/* HERO */}
      <section className="services-hero">
        <h1 className="hero-title">{t("services.page_title")}</h1>
        <p className="hero-subtitle">{t("services.intro")}</p>
      </section>

      {/* GRID */}
      <section className="services-grid">
        {serviceKeys.map((k) => (
          <article className="service-card" key={k}>
            <Image
              src={serviceImages[k]}
              alt={t(`services.list.${k}`)}
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL="/images/blur-placeholder.jpg"
            />
            <h3>{t(`services.list.${k}`)}</h3>
          </article>
        ))}
      </section>
    </main>
  );
}

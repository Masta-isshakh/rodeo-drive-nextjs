import type { MetadataRoute } from "next";
import { CATALOG } from "./content/catalog2";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rodeodrive.work";

  const items: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/gallery`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/book`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/cookie-policy`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/privacy`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/terms`, changeFrequency: "monthly", priority: 0.3 },
  ];

  for (const s of CATALOG.services) {
    items.push({ url: `${baseUrl}/services/${s.slug}`, changeFrequency: "weekly", priority: 0.85 });
    for (const sub of s.subservices) {
      items.push({ url: `${baseUrl}/services/${s.slug}/${sub.slug}`, changeFrequency: "weekly", priority: 0.75 });
    }
  }
  return items;
}

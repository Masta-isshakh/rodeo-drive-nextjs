// app/sitemap.ts
import type { MetadataRoute } from "next";
import { CATALOG } from "./content/catalog2";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rodeodrive.me";
  const lastModified = new Date();

  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/book", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/gallery", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/cookie-policy", priority: 0.25, changeFrequency: "yearly" as const },
  ];

  const items: MetadataRoute.Sitemap = [];

  // static pages
  for (const r of staticRoutes) {
    items.push({
      url: `${baseUrl}${r.path || "/"}`,
      lastModified,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    });
  }

  // services + subservices (NO /en or /ar)
  for (const s of CATALOG.services) {
    items.push({
      url: `${baseUrl}/services/${s.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    });

    for (const sub of s.subservices) {
      items.push({
        url: `${baseUrl}/services/${s.slug}/${sub.slug}`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.78,
      });
    }
  }

  // dedupe
  const seen = new Set<string>();
  return items.filter((x) => (seen.has(x.url) ? false : (seen.add(x.url), true)));
}

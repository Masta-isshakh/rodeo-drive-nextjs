// app/sitemap.ts
import type { MetadataRoute } from "next";
import { CATALOG } from "./content/catalog2";

export default function sitemap(): MetadataRoute.Sitemap {
  // ✅ Use ONE canonical host everywhere (match your metadataBase)
  const baseUrl = "https://www.rodeodrive.me";

  // ✅ Optional but good: keep a stable lastModified for deployments
  // If you have CI, you can inject BUILD_DATE. Otherwise "new Date()" is fine.
  const lastModified = new Date();

  const langs = ["en", "ar"] as const;

  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const }, // homepage
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

  // ✅ Add homepage root (optional)
  // If you redirect "/" to "/en", keep "/" but also include /en and /ar below.
  items.push({
    url: `${baseUrl}/`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.6,
  });

  // ✅ Add language routes
  for (const lang of langs) {
    for (const r of staticRoutes) {
      items.push({
        url: `${baseUrl}/${lang}${r.path}`,
        lastModified,
        changeFrequency: r.changeFrequency,
        priority: r.priority,
      });
    }
  }

  // ✅ Add services + subservices routes for BOTH languages
  for (const s of CATALOG.services) {
    for (const lang of langs) {
      // Service landing page
      items.push({
        url: `${baseUrl}/${lang}/services/${s.slug}`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.85,
      });

      // Subservice pages
      for (const sub of s.subservices) {
        items.push({
          url: `${baseUrl}/${lang}/services/${s.slug}/${sub.slug}`,
          lastModified,
          changeFrequency: "weekly",
          priority: 0.78,
        });
      }
    }
  }

  // ✅ Optional: dedupe in case of accidental duplicates
  const seen = new Set<string>();
  return items.filter((x) => {
    if (seen.has(x.url)) return false;
    seen.add(x.url);
    return true;
  });
}

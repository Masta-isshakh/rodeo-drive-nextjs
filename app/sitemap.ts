import type { MetadataRoute } from "next";

const SITE_URL = "https://www.rodeodrive.me";

const ROUTES = [
  "", // home
  "/services",
  "/gallery",
  "/about",
  "/faq",
  "/contact",
  "/book",
  "/protection-guide",
  "/privacy",
  "/terms",
  "/cookie-policy",

  // Services sub-pages
  "/services/full-protection-ppf",
  "/services/detailing-coating",
  "/services/window-solar-film",
  "/services/windshield-services",
  "/services/paint-repair-services",
] as const;

const LANGS = ["en", "ar"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const items: MetadataRoute.Sitemap = [];

  for (const lang of LANGS) {
    for (const route of ROUTES) {
      const url = `${SITE_URL}/${lang}${route}`;
      const priority =
        route === "" ? 1.0 : route.startsWith("/services") ? 0.9 : route === "/book" ? 0.8 : 0.7;

      items.push({
        url,
        lastModified: now,
        changeFrequency: "weekly",
        priority,
      });
    }
  }

  return items;
}

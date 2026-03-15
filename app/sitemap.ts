import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/app/content/blog";
import { CATALOG } from "@/app/content/catalog2";
import { SERVICE_AREAS } from "@/app/content/serviceAreas";

const SITE_URL = "https://www.rodeodrive.me";

const STATIC_ROUTES = [
  "", // home
  "/services",
  "/service-areas",
  "/blog",
  "/gallery",
  "/about",
  "/faq",
  "/contact",
  "/book",
  "/paylater",
  "/protection-guide",
  "/watch",
  "/privacy",
  "/terms",
  "/cookie-policy",
] as const;

function buildAllRoutes(): string[] {
  const routes = new Set<string>(STATIC_ROUTES as unknown as string[]);

  for (const service of CATALOG.services) {
    routes.add(`/services/${service.slug}`);

    for (const sub of service.subservices ?? []) {
      routes.add(`/services/${service.slug}/${sub.slug}`);
    }
  }

  for (const post of BLOG_POSTS) {
    routes.add(`/blog/${post.slug}`);
  }

  for (const area of SERVICE_AREAS) {
    routes.add(`/service-areas/${area.slug}`);
  }

  return Array.from(routes);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = buildAllRoutes();

  return routes.flatMap((route) => {
    const enUrl = `${SITE_URL}/en${route}`;
    const arUrl = `${SITE_URL}/ar${route}`;

    const priority =
      route === ""
        ? 1.0
        : route.startsWith("/services")
          ? 0.9
          : route.startsWith("/blog")
            ? 0.75
            : route === "/book"
              ? 0.8
              : 0.7;

    const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] =
      route.startsWith("/services") ? "monthly" : route.startsWith("/blog") ? "weekly" : "weekly";

    const base = {
      lastModified: now,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          "en-QA": enUrl,
          "ar-QA": arUrl,
        },
      },
    } satisfies Omit<MetadataRoute.Sitemap[number], "url">;

    return [
      { url: enUrl, ...base },
      { url: arUrl, ...base },
    ];
  });
}

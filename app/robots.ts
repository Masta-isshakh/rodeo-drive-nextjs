import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.rodeodrive.me";
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api", "/login"] },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

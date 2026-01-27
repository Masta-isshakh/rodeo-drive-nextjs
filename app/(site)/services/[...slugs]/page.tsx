// app/(site)/services/[...slugs]/page.tsx
import React from "react";
import ServiceRouteClient from "./ServiceRoute";
import { CATALOG, Service, Subservice } from "../../../content/catalog2";

function safeSlugArray(input?: string[] | string): string[] {
  if (!input) return [];
  if (Array.isArray(input)) return input;
  return [input];
}

export default function Page({
  params,
}: {
  params: { slugs?: string[] | string };
}) {
  const slugs = safeSlugArray(params.slugs);
  const serviceSlug = slugs[0];
  const subSlug = slugs[1];

  const service: Service | null =
    serviceSlug ? (CATALOG.services as Service[]).find((s) => s.slug === serviceSlug) ?? null : null;

  const sub: Subservice | null =
    service && subSlug ? service.subservices.find((x) => x.slug === subSlug) ?? null : null;

  return <ServiceRouteClient slugs={slugs} service={service} sub={sub} />;
}

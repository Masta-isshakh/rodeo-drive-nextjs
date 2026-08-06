"use client";

// Captures marketing attribution on first paint and on every route change,
// so a visitor who lands on an ad URL and converts several pages later still
// carries that campaign into the CRM.

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { captureAttribution, markSessionStart } from "@/app/lib/attribution";

export default function AttributionTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    markSessionStart();
  }, []);

  useEffect(() => {
    captureAttribution();
  }, [pathname, searchParams]);

  return null;
}

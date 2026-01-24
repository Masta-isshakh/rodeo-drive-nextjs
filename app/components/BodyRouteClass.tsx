"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function BodyRouteClass() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle("route-home", pathname === "/");
  }, [pathname]);

  return null;
}

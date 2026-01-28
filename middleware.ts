import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE = "lang";

function pickLang(req: NextRequest): "en" | "ar" {
  const saved = req.cookies.get(COOKIE)?.value;
  if (saved === "en" || saved === "ar") return saved;

  const accept = (req.headers.get("accept-language") || "").toLowerCase();
  if (accept.startsWith("ar")) return "ar";

  return "en";
}

export function middleware(req: NextRequest) {
  const lang = pickLang(req);

  const res = NextResponse.next();
  // Keep cookie for 1 year
  res.cookies.set(COOKIE, lang, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });

  return res;
}

// Apply to all pages (exclude next assets)
export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE = "lang";
const CANONICAL_HOST = "www.rodeodrive.qa";
const BARE_HOST = "rodeodrive.qa";

/**
 * SEO middleware:
 * - Force www host (rodeodrive.qa -> www.rodeodrive.qa)
 * - Force language prefix (/ -> /en, /services -> /en/services, etc.)
 * - Provide request header x-rd-lang for the root layout to set <html lang dir>
 */
export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const { pathname } = url;

  // Skip Next assets, route handlers, and files with extensions
  const isFile = /\.[a-zA-Z0-9]+$/.test(pathname);
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    isFile
  ) {
    return NextResponse.next();
  }

  // Force canonical host (only in production hosts)
  const host = req.headers.get("host") || "";
  const hostname = host.split(":")[0];
  if (hostname === BARE_HOST) {
    url.hostname = CANONICAL_HOST;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  const parts = pathname.split("/");
  const first = parts[1];
  const isLangPrefixed = first === "en" || first === "ar";

  // Root -> /en
  if (pathname === "/") {
    url.pathname = "/en";
    const res = NextResponse.redirect(url, 308);
    res.cookies.set(COOKIE, "en", { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return res;
  }

  // Non-prefixed -> /en/...
  if (!isLangPrefixed) {
    url.pathname = `/en${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
    const res = NextResponse.redirect(url, 308);
    res.cookies.set(COOKIE, "en", { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return res;
  }

  const lang = first === "ar" ? "ar" : "en";

  // Set cookie + request header so root layout can set <html lang dir>
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-rd-lang", lang);

  const res = NextResponse.next({ request: { headers: requestHeaders } });
  res.cookies.set(COOKIE, lang, { path: "/", maxAge: 60 * 60 * 24 * 365 });
  return res;
}

export const config = {
  // NOTE: this is a normal JS string, so the dot must be escaped as "\\." to
  // reach the regex engine as "\.". With a single backslash it collapsed to
  // ".*..*", which matched every path of 1+ characters and silently excluded
  // the entire site from middleware — so non-prefixed URLs like /services fell
  // through to the [lang] segment and served homepage content at HTTP 200.
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};

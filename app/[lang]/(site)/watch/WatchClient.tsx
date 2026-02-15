"use client";

import { useEffect, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function WatchClient() {
  const router = useRouter();
  const pathname = usePathname();
  const lang: "en" | "ar" = pathname?.split("/")[1] === "ar" ? "ar" : "en";
  const galleryHref = `/${lang}/gallery`;
  const params = useSearchParams();
  const src = params.get("src") || "";

  // Validate the src (basic safety + avoids weird URLs)
  const isValid = useMemo(() => {
    try {
      if (!src) return false;
      const url = new URL(src);

      // Allow your S3 / CloudFront domains (extend if needed)
      return (
        url.hostname.endsWith("amazonaws.com") ||
        url.hostname.includes("cloudfront.net") ||
        url.hostname.includes("s3.") ||
        url.hostname.includes(".s3-")
      );
    } catch {
      return false;
    }
  }, [src]);

  // If invalid URL, go back to gallery after showing a tiny message briefly
  useEffect(() => {
    if (!isValid) {
      const t = window.setTimeout(() => {
        router.replace(galleryHref);
      }, 600);
      return () => window.clearTimeout(t);
    }
  }, [isValid, router]);

  const onBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(galleryHref);
    }
  };

  if (!isValid) {
    return (
      <main
        style={{
          minHeight: "100vh",
          padding: 24,
          background:
            "radial-gradient(1200px 720px at 50% -10%, rgba(255,255,255,0.92), rgba(255,255,255,0.18) 58%, transparent 72%)," +
            "radial-gradient(900px 640px at 18% 18%, rgba(255,255,255,0.68), transparent 62%)," +
            "radial-gradient(900px 660px at 82% 14%, rgba(255,255,255,0.60), transparent 64%)," +
            "linear-gradient(180deg, #c4c4c4 0%, #c4c4c4 46%, #c4c4c4 100%)",
          color: "#0b1222",
          fontFamily: "system-ui",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 18, fontWeight: 900 }}>Invalid video link</div>
          <div style={{ opacity: 0.75, marginTop: 8 }}>
            Redirecting to Gallery…
          </div>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        marginTop: 74,
        minHeight: "100vh",
        padding: 22,
        background:
          "radial-gradient(1200px 720px at 50% -10%, rgba(255,255,255,0.92), rgba(255,255,255,0.18) 58%, transparent 72%)," +
          "radial-gradient(900px 640px at 18% 18%, rgba(255,255,255,0.68), transparent 62%)," +
          "radial-gradient(900px 660px at 82% 14%, rgba(255,255,255,0.60), transparent 64%)," +
          "radial-gradient(980px 720px at 50% 120%, rgba(210,210,210,0.26), transparent 70%)," +
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.12) 0 2px, transparent 2px 14px)," +
          "repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0 2px, transparent 2px 16px)," +
          "linear-gradient(180deg, #c4c4c4 0%, #c4c4c4 46%, #c4c4c4 100%)",
        color: "#0b1222",
        fontFamily: "system-ui",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            marginBottom: 14,
          }}
        >
          <button
            type="button"
            onClick={onBack}
            aria-label="Go back"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 14px",
              borderRadius: 999,
              cursor: "pointer",
              border: "1px solid rgba(11,18,34,0.16)",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(242,244,248,0.90), rgba(232,236,244,0.92))",
              boxShadow: "0 18px 54px rgba(0,0,0,0.10)",
              fontWeight: 950,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontSize: 12,
              color: "rgba(11,18,34,0.90)",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                fontSize: 18,
                lineHeight: 1,
                fontWeight: 900,
                transform: "translateY(-1px)",
              }}
            >
              ←
            </span>
            Back
          </button>
        </div>

        {/* Video frame */}
        <div
          style={{
            borderRadius: 22,
            overflow: "hidden",
            border: "1px solid rgba(11,18,34,0.14)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(242,244,248,0.97), rgba(232,236,244,0.98))",
            boxShadow: "0 26px 80px rgba(0,0,0,0.16)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              background: "black",
            }}
          >
            <video
              src={src}
              controls
              playsInline
              preload="metadata"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                background: "black",
              }}
            />
          </div>

          <div
            style={{
              padding: 14,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
              borderTop: "1px solid rgba(11,18,34,0.10)",
              background:
                "radial-gradient(700px 220px at 30% 0%, rgba(255,255,255,0.70), transparent 65%)," +
                "linear-gradient(180deg, rgba(255,255,255,0.70), rgba(233,237,244,0.92))",
            }}
          >
            <div
              style={{
                fontWeight: 950,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontSize: 12,
                color: "rgba(11,18,34,0.78)",
              }}
            >
              Full Video
            </div>

            <Link
              href={galleryHref}
              style={{
                textDecoration: "none",
                fontWeight: 950,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                fontSize: 12,
                padding: "10px 14px",
                borderRadius: 999,
                border: "1px solid rgba(11,18,34,0.16)",
                background: "rgba(255,255,255,0.70)",
                color: "rgba(11,18,34,0.86)",
              }}
            >
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

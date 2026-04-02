/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
  poweredByHeader: false,

  experimental: {
    // Tree-shake large packages — only the used exports end up in the bundle
    optimizePackageImports: ["gsap", "lucide-react", "framer-motion"],
  },

  images: {
      minimumCacheTTL: 31536000, // 1 year
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.coverr.co" },

      // ✅ ADD YOUR S3 BUCKET DOMAIN
      { protocol: "https", hostname: "mastatiktok.s3.us-east-1.amazonaws.com" },
    ],
  },

async headers() {
  return [
    // Static Next assets (JS/CSS) cache forever
    {
      source: "/_next/static/:path*",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    // Public assets (images in /public)
    {
      source: "/:path*.(avif|webp|png|jpg|jpeg|svg|ico)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    // Keep your existing header
    {
      source: "/:path*",
      headers: [
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    },
  ];
},

};

module.exports = nextConfig;

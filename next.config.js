/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
  poweredByHeader: false,

  experimental: {
    // Tree-shake large packages — only the used exports end up in the bundle
    optimizePackageImports: ["gsap", "lucide-react", "framer-motion"],
  },

  // Amplify Hosting exposes console environment variables to the BUILD, but not
  // to the Next.js SSR Lambda runtime. Listing them here substitutes the values
  // into the compiled output at build time, so /api/lead can read them at
  // runtime regardless of what the Lambda's working directory contains.
  //
  // Only non-secret configuration belongs here — these values are inlined
  // wherever they are referenced. The CRM endpoint is safe to inline because it
  // is protected by IAM: it cannot be called without SigV4-signed credentials.
  // AWS credentials are deliberately NOT listed, so they stay runtime-resolved
  // from the Amplify compute role.
  env: {
    CRM_APPSYNC_ENDPOINT: process.env.CRM_APPSYNC_ENDPOINT ?? "",
    CRM_AWS_REGION: process.env.CRM_AWS_REGION ?? "ap-south-1",
    CRM_LEAD_SOURCE: process.env.CRM_LEAD_SOURCE ?? "Website",
    CRM_LEAD_STATUS: process.env.CRM_LEAD_STATUS ?? "New Lead",
    CRM_LEAD_CREATED_BY: process.env.CRM_LEAD_CREATED_BY ?? "rodeodrive.qa",
    CRM_LEAD_CODE_PREFIX: process.env.CRM_LEAD_CODE_PREFIX ?? "WEB",
    CRM_LEAD_ASSIGNEE: process.env.CRM_LEAD_ASSIGNEE ?? "",
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

async redirects() {
  return [
    // Meta / Facebook "Data deletion instructions URL" is registered without a
    // language prefix. Without this, /data-deletion is swallowed by the [lang]
    // dynamic segment and renders the homepage.
    {
      source: "/data-deletion",
      destination: "/en/data-deletion",
      permanent: true,
    },
  ];
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

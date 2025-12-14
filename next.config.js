/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["c.pxhere.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "mastatiktok.s3.us-east-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;

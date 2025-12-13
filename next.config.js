/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
        { protocol: "https", hostname: "images.unsplash.com" },
  { protocol: "https", hostname: "mastatiktok.s3.us-east-1.amazonaws.com" },
    ],
  },
}

module.exports = nextConfig

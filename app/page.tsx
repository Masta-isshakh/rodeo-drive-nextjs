import HomePageClient from "./home/page";
import { Metadata } from "next";
import { redirect } from "next/navigation";


export const metadata: Metadata = {
  title: "Rodeo Drive | Luxury Car Services in Doha",
  description: "Expert car maintenance, polishing, ceramic coating, and protection services in Doha, Qatar.",
  openGraph: {
    title: "Rodeo Drive | Luxury Car Services",
    description: "Expert car maintenance, polishing, ceramic coating, and protection services in Doha, Qatar.",
    url: "https://yourdomain.com",
    siteName: "Rodeo Drive",
    images: [
      {
        url: "https://mastatiktok.s3.us-east-1.amazonaws.com/video-poster.jpg",
        width: 1200,
        height: 630,
        alt: "Rodeo Drive - Luxury Car Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodeo Drive | Luxury Car Services",
    description: "Expert car maintenance, polishing, ceramic coating, and protection services in Doha, Qatar.",
    images: ["https://mastatiktok.s3.us-east-1.amazonaws.com/video-poster.jpg"],
  },
};

export default function HomePage() {

  // Composant serveur → juste rendu statique / SEO optimisé
  return <HomePageClient />;
  
}

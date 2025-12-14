import type { Metadata } from "next";
import BookApp from "./Book";

export const metadata:Metadata = {
  title: "Book Appointment | Rodeo Drive",
  description: "Prenez rendez-vous avec Rodeo Drive pour un service client personnalisé.",
  openGraph: {
    title: "Book Appointment | Rodeo Drive",
    description: "Prenez rendez-vous avec Rodeo Drive pour un service client personnalisé.",
    url: "https://yourdomain.com/appointment",
    siteName: "Rodeo Drive",
    images: [
      {
        url: "https://yourdomain.com/logo.jpeg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Appointment | Rodeo Drive",
    description: "Prenez rendez-vous avec Rodeo Drive pour un service client personnalisé.",
    images: "https://yourdomain.com/logo.jpeg",
  },
};


export default function Book() {
  return <BookApp />;
}
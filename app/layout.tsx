import "./globals.css";
import type { Metadata } from "next";
import Providers from "./Provider";
import BodyRouteClass from "./components/BodyRouteClass";

export const metadata: Metadata = {
  title: "Rodeo Drive | Luxury Car Detailing in Doha, Qatar",
  description:
    "Premium car detailing, ceramic coating, paint protection, and customization services in Doha.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <BodyRouteClass/>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

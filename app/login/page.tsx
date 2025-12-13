import type { Metadata } from "next";
import LoginPageClient from "./LoginPage";

export const metadata: Metadata = {
  title: "Login | Rodeo Drive",
  description:
    "Secure login to the Rodeo Drive admin and customer area. Access your account to manage premium automotive services.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return <LoginPageClient />;
}

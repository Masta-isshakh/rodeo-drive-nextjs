import type { Metadata } from "next";
import AdminPageClient from "./AdminPage";

export const metadata: Metadata = {
  title: "Admin Dashboard | Rodeo Drive",
  description:
    "Administrative dashboard for managing customer messages and replies at Rodeo Drive.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <AdminPageClient />;
}

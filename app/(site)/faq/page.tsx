// app/[lang]/faq/page.tsx
import FAQClient from "./FaqClient";

type Lang = "en" | "ar";
type FAQCategory =
  | "all"
  | "services"
  | "pricing"
  | "booking"
  | "protection"
  | "quality";

function safeCategory(input?: string): FAQCategory {
  const allowed: FAQCategory[] = [
    "all",
    "services",
    "pricing",
    "booking",
    "protection",
    "quality",
  ];
  return allowed.includes(input as FAQCategory) ? (input as FAQCategory) : "all";
}

export default function FAQPage({
  params,
  searchParams,
}: {
  params: { lang: string };
  searchParams?: { category?: string };
}) {
  const initialLang: Lang = params.lang === "ar" ? "ar" : "en";
  const activeCategory = safeCategory(searchParams?.category);

  return <FAQClient initialLang={initialLang} activeCategory={activeCategory} />;
}

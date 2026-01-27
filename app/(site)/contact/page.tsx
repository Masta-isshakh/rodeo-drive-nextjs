// app/[lang]/contact/page.tsx
import ContactClient from "./ContactClient";
import { cookies, headers } from "next/headers";

type Lang = "en" | "ar";

function detectLanguageFallback(): Lang {
  const c = cookies();
  const cookieLang =
    c.get("lang")?.value ||
    c.get("language")?.value ||
    c.get("NEXT_LOCALE")?.value;

  if (cookieLang) {
    const v = cookieLang.toLowerCase();
    if (v.startsWith("ar")) return "ar";
    if (v.startsWith("en")) return "en";
  }

  const accept = headers().get("accept-language")?.toLowerCase() || "";
  if (accept.includes("ar")) return "ar";
  return "en";
}

export default function ContactPage({ params }: { params: { lang: string } }) {
  const initialLang: Lang =
    params?.lang === "ar"
      ? "ar"
      : params?.lang === "en"
      ? "en"
      : detectLanguageFallback();

  return <ContactClient initialLang={initialLang} />;
}

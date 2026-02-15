// app/(site)/layout.tsx
import GraphicalElements from "@/app/components/GraphicalElements/GraphicalElements";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GraphicalElements />
      {children}
    </>
  );
}

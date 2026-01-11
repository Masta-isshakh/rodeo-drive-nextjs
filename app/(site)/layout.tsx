// app/(site)/layout.tsx
import GraphicalElements from "../components/GraphicalElements/GraphicalElements";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GraphicalElements />
      {children}
    </>
  );
}

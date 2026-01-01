// app/(site)/layout.tsx
import GraphicalElements from "../components/GraphicalElements/GraphicalElements";
import Header from "../components/Header/Header";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GraphicalElements />
      <Header />
      {children}
    </>
  );
}

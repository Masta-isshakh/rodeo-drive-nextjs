import { Suspense } from "react";
import WatchClient from "./WatchClient";

export default function WatchPage() {
  return (
    <Suspense
      fallback={
        <main style={{ minHeight: "100vh", padding: 24, fontFamily: "system-ui" }}>
          Loading…
        </main>
      }
    >
      <WatchClient />
    </Suspense>
  );
}

"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";

const ADMIN_EMAIL = "mastaisshakh@gmail.com";

export default function LoginPageClient() {
  const router = useRouter();

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Authenticator>
        {({ signOut, user }) => {
          const email = user?.signInDetails?.loginId || user?.username || "";

          // Redirection après login
          if (email === ADMIN_EMAIL) {
            router.push("/admin");
          } else {
            router.push("/home");
          }

          return (
            <main style={{ textAlign: "center" }}>
              <h2>Welcome, {email}</h2>
              <button
                onClick={async () => {
                  await signOut?.();
                  router.push("/home");
                }}
                style={{
                  marginTop: "20px",
                  padding: "10px 25px",
                  borderRadius: "6px",
                  background: "#e60000",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Sign out
              </button>
            </main>
          );
        }}
      </Authenticator>
    </div>
  );
}

"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";

export default function LoginPageClient() {
  const router = useRouter();

  return (
    <div>
      <Authenticator>
        {({ signOut, user }) => (
          <main style={{ textAlign: "center" }}>
            <h2>
              Welcome, {user?.signInDetails?.loginId || user?.username}
            </h2>
            <button
              onClick={() => {
                signOut?.();
                router.push("/");
              }}
            >
              Sign out
            </button>
          </main>
        )}
      </Authenticator>
    </div>
  );
}

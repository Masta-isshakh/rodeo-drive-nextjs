"use client";

import { Authenticator } from "@aws-amplify/ui-react";

export default function LoginPageClient() {
  return (
    <div style={{ maxWidth: 420, margin: "80px auto" }}>
      <Authenticator />
    </div>
  );
}

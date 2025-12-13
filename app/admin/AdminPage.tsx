"use client";

import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";
import { getCurrentUser } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import type { Schema } from "@/amplify/data/resource";
import "./admin.css";

const client = generateClient<Schema>();

export default function AdminPageClient() {
  const [messages, setMessages] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const u = await getCurrentUser().catch(() => null);

        if (!u) {
          router.push("/login");
          return;
        }

        setUser(u);

        const list = await client.models.Todo.list();
        setMessages(list.data ?? []);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [router]);

  const reply = async (id: string) => {
    const replyText = prompt("Write reply");
    if (!replyText) return;

    try {
      await client.models.Todo.update({ id, content: replyText });

      const list = await client.models.Todo.list();
      setMessages(list.data ?? []);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="admin-page">
      <h1>Admin</h1>

      {!user ? (
        <p>Redirecting to login...</p>
      ) : (
        <div>
          {messages.map((m) => (
            <div key={m.id} className="admin-message">
              <div>
                <strong>{m.content}</strong>
              </div>
              <div className="admin-reply">
                Reply: {m.reply || "—"}
              </div>
              <button
                className="admin-btn"
                onClick={() => reply(m.id)}
              >
                Reply
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";
import { getCurrentUser } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import type { Schema } from "@/amplify/data/resource";
import "./admin.css";

const client = generateClient<Schema>();
const ADMIN_EMAIL = "mastaisshakh@gmail.com";

export default function AdminPageClient() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const init = async () => {
      try {
        const user = await getCurrentUser();

        const email =
          user?.signInDetails?.loginId ||
          user?.username ||
          "";

        if (email !== ADMIN_EMAIL) {
          router.replace("/");
          return;
        }

        const list = await client.models.Todo.list();
        setMessages(list.data ?? []);
      } catch {
        router.replace("/login");
      } finally {
        setLoading(false);
      }
    };

    init();
  }, [router]);

  const reply = async (id: string) => {
    const replyText = prompt("Write reply");
    if (!replyText) return;

    await client.models.Todo.update({ id, content: replyText });
    const list = await client.models.Todo.list();
    setMessages(list.data ?? []);
  };

  if (loading) return <p>Loading admin panel...</p>;

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>

      {messages.map((m) => (
        <div key={m.id} className="admin-message">
          <strong>{m.content}</strong>

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
  );
}

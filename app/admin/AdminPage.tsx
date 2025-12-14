"use client";

import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";
import { getCurrentUser, signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import type { Schema } from "@/amplify/data/resource";
import "./admin.css";

const client = generateClient<Schema>();
const ADMIN_EMAIL = "mastaisshakh@gmail.com";

export default function AdminPageClient() {
  const [messages, setMessages] = useState<any[]>([]);
  const [appointments, setAppointments] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const u = await getCurrentUser();
        const email = u?.signInDetails?.loginId;

        if (!u || email !== ADMIN_EMAIL) {
          router.push("/home"); // Non-admin → home
          return;
        }
        setUser(u);

        const list = await client.models.Todo.list();
        setMessages(list.data ?? []);

        const appointmentsList = await client.models.Appointment.list();
        setAppointments(appointmentsList.data ?? []);
        setMessages(list.data ?? []);
      } catch (err) {
        console.error(err);
        router.push("/login");
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

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/home"); // Redirection après logout
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>

      {messages.map((m) => (
        <div key={m.id} className="admin-message">
          <div>
            <strong>{m.content}</strong>
          </div>
          <div className="admin-reply">
            Reply: {m.reply || "—"}
          </div>
          <button className="admin-btn" onClick={() => reply(m.id)}>
            Reply
          </button>
        </div>
      ))}


      <h2 style={{ marginTop: "40px" }}>Appointments</h2>
{appointments.length === 0 && <p>No appointments yet.</p>}
{appointments.map((a) => (
  <div key={a.id} className="admin-appointment" style={{ padding: "15px", border: "1px solid #ccc", marginBottom: "10px", borderRadius: "6px" }}>
    <p><strong>Name:</strong> {a.name}</p>
    <p><strong>Email:</strong> {a.email}</p>
    <p><strong>Phone:</strong> {a.phone}</p>
    <p><strong>Date:</strong> {a.date}</p>
    <p><strong>Time:</strong> {a.time}</p>
  </div>
))}

      {/* 🔹 Sign Out Button */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          onClick={handleSignOut}
          style={{
            padding: "12px 30px",
            borderRadius: "6px",
            backgroundColor: "#e60000",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

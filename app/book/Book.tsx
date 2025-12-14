"use client";

import { useState } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>();

export default function BookAppointment() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await client.models.Appointment.create({
        name: form.name,
        email: form.email,
        phone: form.phone,
        date: form.date,
        time: form.time,
      });

          await fetch("/api/sendAppointmentEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

      setSuccess(true);
      setForm({ name: "", email: "", phone: "", date: "", time: "" });
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la réservation, veuillez réessayer.");
    }
  };

  return (
    <div className="appointment-page" style={{ maxWidth: "600px", margin: "50px auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Book an Appointment</h1>

      {success && (
        <div style={{ padding: "15px", marginBottom: "20px", backgroundColor: "#d4edda", color: "#155724", borderRadius: "6px", textAlign: "center" }}>
          Merci pour avoir pris rendez-vous avec Rodeo Drive. Un customer service va vous contacter pour vous assister.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <button type="submit" style={{ padding: "12px", backgroundColor: "#0077cc", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>
          Book
        </button>
      </form>
    </div>
  );
}

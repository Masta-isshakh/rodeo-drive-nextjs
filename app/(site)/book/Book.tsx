"use client";

import { useEffect, useMemo, useState } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const MAX_BOOKINGS_PER_DAY = 10;

// Utilitaire: YYYY-MM-DD local (pas UTC) pour éviter les bugs de timezone
function formatLocalDateYYYYMMDD(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

// Compare uniquement la date (sans heure)
function isDateInPast(dateStr: string) {
  if (!dateStr) return false;
  const todayStr = formatLocalDateYYYYMMDD(new Date());
  return dateStr < todayStr; // comparaison lexicographique OK en YYYY-MM-DD
}

export default function BookAppointment() {
  const client = useMemo(() => generateClient<Schema>(), []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [loading, setLoading] = useState(false);

  // Pour empêcher la sélection de dates passées via l'UI
  const [minDate, setMinDate] = useState<string>("");

  useEffect(() => {
    setMinDate(formatLocalDateYYYYMMDD(new Date()));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMsg("");
    setSuccess(false);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Vérifie le quota (<= 10) pour une date donnée
  const getBookingsCountForDate = async (date: string) => {
    // Si ton modèle a une clé "date" simple (string), ceci suffit
    // NB: certains projets Amplify Gen2 utilisent list({ filter: {...} })
    const { data, errors } = await client.models.Appointment.list({
      filter: { date: { eq: date } },
      // limit peut rester large, mais on peut optimiser:
      // limit: MAX_BOOKINGS_PER_DAY + 1,
    });

    if (errors?.length) {
      throw new Error(errors.map((e) => e.message).join(" | "));
    }

    return data?.length ?? 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setErrorMsg("");

    // 1) Bloquer date passée
    if (isDateInPast(form.date)) {
      setErrorMsg("You cannot book an appointment in the past. Please select a future date.");
      return;
    }

    // (Optionnel mais recommandé) Bloquer si date vide
    if (!form.date) {
      setErrorMsg("Please choose a date.");
      return;
    }

    setLoading(true);

    try {
      // 2) Bloquer si quota journalier atteint
      const count = await getBookingsCountForDate(form.date);
      if (count >= MAX_BOOKINGS_PER_DAY) {
        setErrorMsg("Sorry, this date is fully booked. Please choose another day.");
        setLoading(false);
        return;
      }

      // Création booking
      await client.models.Appointment.create({
        name: form.name,
        email: form.email,
        phone: form.phone,
        date: form.date,
        time: form.time,
      });

      // Email (ne bloque pas booking si échec)
      const res = await fetch("/api/sendAppointmentEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        console.error("Email API failed:", await res.text());
      }

      setSuccess(true);
      setForm({ name: "", email: "", phone: "", date: "", time: "" });
    } catch (err: any) {
      console.error("Booking error:", err);
      setErrorMsg(err?.message ?? "Erreur lors de la réservation, veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="appointment-page"
      style={{ maxWidth: "600px", margin: "120px auto", padding: "20px" }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Book an Appointment
      </h1>

      {success && (
        <div
          style={{
            padding: "15px",
            marginBottom: "20px",
            backgroundColor: "#d4edda",
            color: "#155724",
            borderRadius: "6px",
            textAlign: "center",
          }}
        >
          Thank you! Your appointment has been booked successfully. One of our customer service will call you soon.
        </div>
      )}

      {errorMsg && (
        <div
          style={{
            padding: "12px",
            marginBottom: "20px",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            borderRadius: "6px",
            textAlign: "center",
          }}
        >
          {errorMsg}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
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
          min={minDate} // ✅ empêche de choisir une date passée
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

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "12px",
            backgroundColor: loading ? "#8b0000" : "#8b0000",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: "bold",
          }}
        >
          {loading ? "Booking..." : "Book"}
        </button>
      </form>
    </div>
  );
}

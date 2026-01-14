"use client";

import React, { useEffect, useMemo, useState } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import styles from "./book.module.css";

const MAX_BOOKINGS_PER_DAY = 10;

function formatLocalDateYYYYMMDD(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function isDateInPast(dateStr: string) {
  if (!dateStr) return false;
  const todayStr = formatLocalDateYYYYMMDD(new Date());
  return dateStr < todayStr;
}

// ✅ Convert "14:30" -> "02:30 PM"
function toAmPm(time24: string) {
  if (!time24) return "";
  const [hhStr, mm] = time24.split(":");
  const hh = Number(hhStr);
  if (Number.isNaN(hh) || !mm) return time24;

  const period = hh >= 12 ? "PM" : "AM";
  const hour12 = hh % 12 === 0 ? 12 : hh % 12;
  return `${String(hour12).padStart(2, "0")}:${mm} ${period}`;
}

export default function BookAppointment() {
  const client = useMemo(() => generateClient<Schema>(), []);

  // ✅ Define your service options here (edit as you want)
  const serviceOptions = useMemo(
    () => [
      "Full Protection – PPF",
      "Window Solar Film",
      "Detailing & Coating",
      "Paint & Repair Services",
      "Car Wash Services",
      "Windshield Services",
    ],
    []
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    carModel: "",   // ✅ NEW
    service: "",    // ✅ NEW
    date: "",
    time: "",       // raw 24h from input
  });

  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [minDate, setMinDate] = useState<string>("");

  useEffect(() => {
    setMinDate(formatLocalDateYYYYMMDD(new Date()));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setErrorMsg("");
    setSuccess(false);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const getBookingsCountForDate = async (date: string) => {
    const { data, errors } = await client.models.Appointment.list({
      filter: { date: { eq: date } },
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

    if (isDateInPast(form.date)) {
      setErrorMsg("You cannot book an appointment in the past. Please select a future date.");
      return;
    }

    if (!form.date) {
      setErrorMsg("Please choose a date.");
      return;
    }

    // ✅ Basic required checks (since service is a <select>)
    if (!form.service) {
      setErrorMsg("Please select a service.");
      return;
    }

    setLoading(true);

    try {
      const count = await getBookingsCountForDate(form.date);
      if (count >= MAX_BOOKINGS_PER_DAY) {
        setErrorMsg("Sorry, this date is fully booked. Please choose another day.");
        setLoading(false);
        return;
      }

      // ✅ Convert time to AM/PM before saving
      const timeAmPm = toAmPm(form.time);

      // ✅ Save in DB (time stored as "hh:mm AM/PM")
      await client.models.Appointment.create({
        name: form.name,
        email: form.email,
        phone: form.phone,
        carModel: form.carModel,
        service: form.service,
        date: form.date,
        time: timeAmPm,
      });

      // ✅ Email payload should match what you want to send
      const res = await fetch("/api/sendAppointmentEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          time: timeAmPm, // send AM/PM in email too
        }),
      });

      if (!res.ok) {
        console.error("Email API failed:", await res.text());
      }

      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        carModel: "",
        service: "",
        date: "",
        time: "",
      });
    } catch (err: any) {
      console.error("Booking error:", err);
      setErrorMsg(err?.message ?? "Erreur lors de la réservation, veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.appointmentContainer}>
      <h1>Book an Appointment</h1>

      {success && (
        <div className={styles.successMessage}>
          Thank you! Your appointment has been booked successfully. One of our customer service will call you soon.
        </div>
      )}

      {errorMsg && (
        <div
          className={styles.errorMessage}
        >
          {errorMsg}
        </div>
      )}

      <form className={styles.appointmentForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        {/* ✅ NEW: Car Model */}
        <input
          type="text"
          name="carModel"
          placeholder="Car Model (e.g., Land Cruiser, BMW X5)"
          value={form.carModel}
          onChange={handleChange}
          required
        />

        {/* ✅ NEW: Select Service */}
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a Service
          </option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          min={minDate}
        />

        {/* user chooses time normally, but we store AM/PM */}
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Booking..." : "Book"}
        </button>
      </form>
    </div>
  );
}


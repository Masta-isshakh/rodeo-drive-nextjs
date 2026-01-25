"use client";

import React, { useEffect, useMemo, useState } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import styles from "./book.module.css";

const MAX_BOOKINGS_PER_DAY = 10;

// Business rules
const OPEN_TIME_24 = "09:00";
const CLOSE_TIME_24 = "20:00";

const OPEN_MINUTES = 9 * 60;   // 09:00
const CLOSE_MINUTES = 20 * 60; // 20:00

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

// Friday check (local time)
function isFriday(dateStr: string) {
  if (!dateStr) return false;
  const d = new Date(`${dateStr}T00:00:00`);
  return d.getDay() === 5; // 0 Sun ... 5 Fri ... 6 Sat
}

function parseTimeToMinutes(time24: string) {
  if (!time24) return NaN;
  const [hhStr, mmStr] = time24.split(":");
  const hh = Number(hhStr);
  const mm = Number(mmStr);
  if (Number.isNaN(hh) || Number.isNaN(mm)) return NaN;
  return hh * 60 + mm;
}

function isTimeInRange(time24: string) {
  const mins = parseTimeToMinutes(time24);
  if (Number.isNaN(mins)) return false;
  return mins >= OPEN_MINUTES && mins <= CLOSE_MINUTES;
}

// Convert "14:30" -> "02:30 PM"
function toAmPm(time24: string) {
  if (!time24) return "";
  const [hhStr, mm] = time24.split(":");
  const hh = Number(hhStr);
  if (Number.isNaN(hh) || !mm) return time24;

  const period = hh >= 12 ? "PM" : "AM";
  const hour12 = hh % 12 === 0 ? 12 : hh % 12;
  return `${String(hour12).padStart(2, "0")}:${mm} ${period}`;
}

type MultiSelectProps = {
  label: string;
  options: string[];
  value: string[];
  placeholder?: string;
  onChange: (next: string[]) => void;
};

function MultiSelectDropdown({
  label,
  options,
  value,
  placeholder = "Select services (optional)",
  onChange,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const toggleValue = (opt: string) => {
    if (value.includes(opt)) onChange(value.filter((v) => v !== opt));
    else onChange([...value, opt]);
  };

  const clearAll = () => onChange([]);

  const selectedText =
    value.length === 0 ? placeholder : `${value.length} selected`;

  return (
    <div className={styles.msRoot} ref={rootRef}>
      <label className={styles.msLabel}>{label}</label>

      <button
        type="button"
        className={styles.msButton}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
      >
        <span className={styles.msButtonText}>{selectedText}</span>
        <span className={styles.msChevron} aria-hidden="true">
          ▾
        </span>
      </button>

      {open && (
        <div className={styles.msPanel} role="listbox" aria-multiselectable="true">
          <div className={styles.msPanelHeader}>
            <button
              type="button"
              className={styles.msClear}
              onClick={clearAll}
              disabled={value.length === 0}
            >
              Clear
            </button>

            <button
              type="button"
              className={styles.msDone}
              onClick={() => setOpen(false)}
            >
              Done
            </button>
          </div>

          <div className={styles.msOptions}>
            {options.map((opt) => {
              const checked = value.includes(opt);
              return (
                <label key={opt} className={styles.msOption}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleValue(opt)}
                  />
                  <span>{opt}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}

      {value.length > 0 && (
        <div className={styles.msChips}>
          {value.map((v) => (
            <button
              type="button"
              key={v}
              className={styles.msChip}
              onClick={() => toggleValue(v)}
              title="Remove"
            >
              {v} <span aria-hidden="true">×</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function BookAppointment() {
  const client = useMemo(() => generateClient<Schema>(), []);

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
    carModel: "",
    services: [] as string[],
    date: "",
    time: "",
  });

  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [minDate, setMinDate] = useState<string>("");

  useEffect(() => {
    setMinDate(formatLocalDateYYYYMMDD(new Date()));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMsg("");
    setSuccess(false);
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ✅ Date validation on change (blocks Friday + past)
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextDate = e.target.value;
    setErrorMsg("");
    setSuccess(false);

    if (isDateInPast(nextDate)) {
      setForm((prev) => ({ ...prev, date: "" }));
      setErrorMsg("You cannot book in the past. Please select a future date.");
      return;
    }

    if (isFriday(nextDate)) {
      setForm((prev) => ({ ...prev, date: "" }));
      setErrorMsg("We are closed on Friday. Please choose another day.");
      return;
    }

    setForm((prev) => ({ ...prev, date: nextDate }));
  };

  // ✅ Time validation on change (blocks outside hours)
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextTime = e.target.value;
    setErrorMsg("");
    setSuccess(false);

    if (!isTimeInRange(nextTime)) {
      setForm((prev) => ({ ...prev, time: nextTime }));
      setErrorMsg(`Booking hours are ${OPEN_TIME_24} to ${CLOSE_TIME_24}. Please select a valid time.`);
      return;
    }

    setForm((prev) => ({ ...prev, time: nextTime }));
  };

  const getBookingsCountForDate = async (date: string) => {
    const { data, errors } = await client.models.Appointment.list({
      filter: { date: { eq: date } },
    });

    if (errors?.length) {
      throw new Error(errors.map((er) => er.message).join(" | "));
    }

    return data?.length ?? 0;
  };

  const validateBusinessRules = () => {
    if (!form.date) return "Please choose a date.";
    if (isDateInPast(form.date)) return "You cannot book an appointment in the past. Please select a future date.";
    if (isFriday(form.date)) return "We are closed on Friday. Please choose another day.";

    if (!form.time) return "Please choose a time.";
    if (!isTimeInRange(form.time)) return `Booking hours are ${OPEN_TIME_24} to ${CLOSE_TIME_24}. Please select a valid time.`;

    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setErrorMsg("");

    const ruleError = validateBusinessRules();
    if (ruleError) {
      setErrorMsg(ruleError);
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

      const timeAmPm = toAmPm(form.time);

      await client.models.Appointment.create({
        name: form.name,
        email: form.email,
        phone: form.phone,
        carModel: form.carModel,
        services: form.services,
        date: form.date,
        time: timeAmPm,
      });

      // Email (optional)
      const res = await fetch("/api/sendAppointmentEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          time: timeAmPm,
          servicesText: form.services.length ? form.services.join(", ") : "N/A",
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
        services: [],
        date: "",
        time: "",
      });
    } catch (err: any) {
      console.error("Booking error:", err);
      setErrorMsg(err?.message ?? "Error while booking, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.appointmentContainer}>
      <h1>Book an Appointment</h1>

      <div className={styles.note}>
        Booking hours: <strong>09:00–20:00</strong>. Closed on <strong>Friday</strong>.
      </div>

      {success && (
        <div className={styles.successMessage}>
          Thank you! Your appointment has been booked successfully. One of our customer service will call you soon.
        </div>
      )}

      {errorMsg && <div className={styles.errorMessage}>{errorMsg}</div>}

      <form className={styles.appointmentForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleInputChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleInputChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleInputChange}
          required
        />

        <input
          type="text"
          name="carModel"
          placeholder="Car Model (e.g., Land Cruiser, BMW X5)"
          value={form.carModel}
          onChange={handleInputChange}
          required
        />

        <div className={styles.servicesBlock}>
          <MultiSelectDropdown
            label="Services (optional)"
            options={serviceOptions}
            value={form.services}
            onChange={(next) => setForm((prev) => ({ ...prev, services: next }))}
            placeholder="Select services (optional)"
          />
        </div>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleDateChange}
          required
          min={minDate}
        />

        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleTimeChange}
          required
          min={OPEN_TIME_24}
          max={CLOSE_TIME_24}
          step={900} // 15 minutes
        />

        <button type="submit" disabled={loading}>
          {loading ? "Booking..." : "Book"}
        </button>
      </form>
    </div>
  );
}

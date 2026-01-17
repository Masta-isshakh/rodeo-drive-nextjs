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
    services: [] as string[], // ✅ multiple + can be empty
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

  // ✅ Multi-select handler
  const handleServicesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setErrorMsg("");
    setSuccess(false);

    const selected = Array.from(e.target.selectedOptions).map((o) => o.value);

    // If user selects the empty option, force empty list
    if (selected.includes("")) {
      setForm((prev) => ({ ...prev, services: [] }));
      return;
    }

    setForm((prev) => ({ ...prev, services: selected }));
  };

  const clearServices = () => {
    setForm((prev) => ({ ...prev, services: [] }));
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

    setLoading(true);

    try {
      const count = await getBookingsCountForDate(form.date);
      if (count >= MAX_BOOKINGS_PER_DAY) {
        setErrorMsg("Sorry, this date is fully booked. Please choose another day.");
        setLoading(false);
        return;
      }

      const timeAmPm = toAmPm(form.time);

      // ✅ store services as array (can be empty)
      await client.models.Appointment.create({
        name: form.name,
        email: form.email,
        phone: form.phone,
        carModel: form.carModel,
        services: form.services, // ✅ array
        date: form.date,
        time: timeAmPm,
      });

      // ✅ email: send a readable string (or empty)
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

        {/* ✅ Multi select that can be blank */}
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
          onChange={handleInputChange}
          required
          min={minDate}
        />

        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleInputChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Booking..." : "Book"}
        </button>
      </form>
    </div>
  );
}

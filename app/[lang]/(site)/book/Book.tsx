"use client";

import React, { useEffect, useMemo, useState } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import styles from "./book.module.css";
import { useI18n } from "@/app/lib/i18n";

const MAX_BOOKINGS_PER_DAY = 10;

// Business rules
const OPEN_TIME_24 = "09:00";
const CLOSE_TIME_24 = "20:00";
const OPEN_MINUTES = 9 * 60;
const CLOSE_MINUTES = 20 * 60;

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

function isFriday(dateStr: string) {
  if (!dateStr) return false;
  const d = new Date(`${dateStr}T00:00:00`);
  return d.getDay() === 5; // Fri
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

function toAmPm(time24: string) {
  if (!time24) return "";
  const [hhStr, mm] = time24.split(":");
  const hh = Number(hhStr);
  if (Number.isNaN(hh) || !mm) return time24;

  const period = hh >= 12 ? "PM" : "AM";
  const hour12 = hh % 12 === 0 ? 12 : hh % 12;
  return `${String(hour12).padStart(2, "0")}:${mm} ${period}`;
}

function safeText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

const AR_DIGITS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"] as const;
function toArabicIndic(input: string) {
  return input.replace(/\d/g, (d) => AR_DIGITS[Number(d)]);
}

type MultiSelectProps = {
  label: string;
  options: string[];
  value: string[];
  placeholder: string;
  onChange: (next: string[]) => void;
  ui: { clear: string; done: string; remove: string; selected: string };
  isAr: boolean;
};

function MultiSelectDropdown({
  label,
  options,
  value,
  placeholder,
  onChange,
  ui,
  isAr,
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);

  const l10nDigits = (s: string) => (isAr ? toArabicIndic(s) : s);

  useEffect(() => {
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
    value.length === 0
      ? placeholder
      : `${l10nDigits(String(value.length))} ${ui.selected}`;

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
              {ui.clear}
            </button>

            <button
              type="button"
              className={styles.msDone}
              onClick={() => setOpen(false)}
            >
              {ui.done}
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
              title={ui.remove}
            >
              {v} <span aria-hidden="true">×</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Book() {
  const client = useMemo(() => generateClient<Schema>(), []);
  const { language, t } = useI18n();

  const isAr = language === "ar";
  const dir = isAr ? "rtl" : "ltr";
  const l10nDigits = (s: string) => (isAr ? toArabicIndic(s) : s);

  const bookT = useMemo(() => {
    return (
      (t as any)?.book ??
      (t as any)?.booking ??
      (t as any)?.appointment ??
      {}
    );
  }, [t]);

  const copy = useMemo(() => {
    const openClose = `${OPEN_TIME_24}–${CLOSE_TIME_24}`;
    const openCloseL10n = l10nDigits(openClose);

    return {
      title: safeText(bookT?.title, isAr ? "احجز موعدًا" : "Book an Appointment"),

      notePrefix: safeText(bookT?.notePrefix, isAr ? "ساعات الحجز:" : "Booking hours:"),
      noteHours: safeText(bookT?.noteHours, openCloseL10n),
      noteClosedOn: safeText(bookT?.noteClosedOn, isAr ? "مغلق يوم" : "Closed on"),
      friday: safeText(bookT?.friday, isAr ? "الجمعة" : "Friday"),

      successMessage: safeText(
        bookT?.successMessage,
        isAr
          ? "شكرًا لك! تم حجز موعدك بنجاح. سيتواصل معك أحد فريق خدمة العملاء قريبًا."
          : "Thank you! Your appointment has been booked successfully. One of our customer service will call you soon."
      ),

      phName: safeText(bookT?.phName, isAr ? "اسمك" : "Your Name"),
      phEmail: safeText(bookT?.phEmail, isAr ? "بريدك الإلكتروني" : "Your Email"),
      phPhone: safeText(bookT?.phPhone, isAr ? "رقم الهاتف" : "Phone Number"),
      phCarModel: safeText(
        bookT?.phCarModel,
        isAr ? "موديل السيارة (مثال: لاندكروزر، BMW X5)" : "Car Model (e.g., Land Cruiser, BMW X5)"
      ),

      servicesLabel: safeText(bookT?.servicesLabel, isAr ? "الخدمات (اختياري)" : "Services (optional)"),
      servicesPlaceholder: safeText(
        bookT?.servicesPlaceholder,
        isAr ? "اختر الخدمات (اختياري)" : "Select services (optional)"
      ),

      btnBooking: safeText(bookT?.btnBooking, isAr ? "جارٍ الحجز..." : "Booking..."),
      btnBook: safeText(bookT?.btnBook, isAr ? "احجز" : "Book"),

      errPastShort: safeText(
        bookT?.errPastShort,
        isAr ? "لا يمكنك الحجز في تاريخ سابق. الرجاء اختيار تاريخ قادم." : "You cannot book in the past. Please select a future date."
      ),
      errFridayShort: safeText(
        bookT?.errFridayShort,
        isAr ? "نحن مغلقون يوم الجمعة. الرجاء اختيار يوم آخر." : "We are closed on Friday. Please choose another day."
      ),
      errHours: safeText(
        bookT?.errHours,
        isAr
          ? `ساعات الحجز من ${l10nDigits(OPEN_TIME_24)} إلى ${l10nDigits(CLOSE_TIME_24)}. الرجاء اختيار وقت صحيح.`
          : `Booking hours are ${OPEN_TIME_24} to ${CLOSE_TIME_24}. Please select a valid time.`
      ),

      ruleChooseDate: safeText(bookT?.ruleChooseDate, isAr ? "يرجى اختيار التاريخ." : "Please choose a date."),
      rulePast: safeText(
        bookT?.rulePast,
        isAr ? "لا يمكنك حجز موعد في تاريخ سابق. الرجاء اختيار تاريخ قادم." : "You cannot book an appointment in the past. Please select a future date."
      ),
      ruleFriday: safeText(
        bookT?.ruleFriday,
        isAr ? "نحن مغلقون يوم الجمعة. الرجاء اختيار يوم آخر." : "We are closed on Friday. Please choose another day."
      ),

      ruleChooseTime: safeText(bookT?.ruleChooseTime, isAr ? "يرجى اختيار الوقت." : "Please choose a time."),
      ruleHours: safeText(
        bookT?.ruleHours,
        isAr
          ? `ساعات الحجز من ${l10nDigits(OPEN_TIME_24)} إلى ${l10nDigits(CLOSE_TIME_24)}. الرجاء اختيار وقت صحيح.`
          : `Booking hours are ${OPEN_TIME_24} to ${CLOSE_TIME_24}. Please select a valid time.`
      ),

      errFullyBooked: safeText(
        bookT?.errFullyBooked,
        isAr ? "عذرًا، هذا التاريخ ممتلئ بالكامل. الرجاء اختيار يوم آخر." : "Sorry, this date is fully booked. Please choose another day."
      ),

      errGeneric: safeText(
        bookT?.errGeneric,
        isAr ? "حدث خطأ أثناء الحجز، يرجى المحاولة مرة أخرى." : "Error while booking, please try again."
      ),

      na: safeText(bookT?.na, isAr ? "غير متوفر" : "N/A"),

      serviceOptionsEn: [
        "Full Protection – PPF",
        "Window Solar Film",
        "Detailing & Coating",
        "Paint & Repair Services",
        "Car Wash Services",
        "Windshield Services",
      ],
      serviceOptionsAr: [
        "حماية كاملة – PPF",
        "تظليل/حماية زجاج (سولار)",
        "تفصيل وتلميع + طلاء حماية",
        "دهان وإصلاحات",
        "خدمات غسيل السيارات",
        "خدمات الزجاج الأمامي",
      ],
    };
  }, [bookT, isAr]);

  const serviceOptions = useMemo(() => {
    const fromDict = Array.isArray((bookT as any)?.serviceOptions)
      ? (bookT as any).serviceOptions.filter(Boolean)
      : null;
    if (fromDict) return fromDict;
    return isAr ? copy.serviceOptionsAr : copy.serviceOptionsEn;
  }, [bookT, isAr, copy.serviceOptionsAr, copy.serviceOptionsEn]);

  const uiMulti = useMemo(() => {
    return {
      clear: safeText((bookT as any)?.multiSelect?.clear, isAr ? "مسح" : "Clear"),
      done: safeText((bookT as any)?.multiSelect?.done, isAr ? "تم" : "Done"),
      remove: safeText((bookT as any)?.multiSelect?.remove, isAr ? "إزالة" : "Remove"),
      selected: safeText((bookT as any)?.multiSelect?.selected, isAr ? "تم اختيار" : "selected"),
    };
  }, [bookT, isAr]);

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

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextDate = e.target.value;
    setErrorMsg("");
    setSuccess(false);

    if (isDateInPast(nextDate)) {
      setForm((prev) => ({ ...prev, date: "" }));
      setErrorMsg(copy.errPastShort);
      return;
    }

    if (isFriday(nextDate)) {
      setForm((prev) => ({ ...prev, date: "" }));
      setErrorMsg(copy.errFridayShort);
      return;
    }

    setForm((prev) => ({ ...prev, date: nextDate }));
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextTime = e.target.value;
    setErrorMsg("");
    setSuccess(false);

    if (!isTimeInRange(nextTime)) {
      setForm((prev) => ({ ...prev, time: nextTime }));
      setErrorMsg(copy.errHours);
      return;
    }

    setForm((prev) => ({ ...prev, time: nextTime }));
  };

  const getBookingsCountForDate = async (date: string) => {
    // authMode can be passed here if needed:
    // await client.models.Appointment.list({ filter: { date: { eq: date } }, authMode: "identityPool" })
    const { data, errors } = await client.models.Appointment.list({
      filter: { date: { eq: date } },
    });

    if (errors?.length) {
      throw new Error(errors.map((er) => er.message).join(" | "));
    }
    return data?.length ?? 0;
  };

  const validateBusinessRules = () => {
    if (!form.date) return copy.ruleChooseDate;
    if (isDateInPast(form.date)) return copy.rulePast;
    if (isFriday(form.date)) return copy.ruleFriday;

    if (!form.time) return copy.ruleChooseTime;
    if (!isTimeInRange(form.time)) return copy.ruleHours;

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
        setErrorMsg(copy.errFullyBooked);
        setLoading(false);
        return;
      }

      const timeAmPm = toAmPm(form.time);

      const createRes = await client.models.Appointment.create({
        name: form.name,
        email: form.email,
        phone: form.phone,
        carModel: form.carModel,
        services: form.services,
        date: form.date,
        time: timeAmPm,
      });

      if (createRes.errors?.length) {
        throw new Error(createRes.errors.map((er) => er.message).join(" | "));
      }

      // Email (optional)
      const res = await fetch("/api/sendAppointmentEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          time: timeAmPm,
          servicesText: form.services.length ? form.services.join(", ") : copy.na,
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
      setErrorMsg(err?.message ?? copy.errGeneric);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.appointmentContainer} dir={dir} lang={language}>
      <h1>{copy.title}</h1>

      <div className={styles.note}>
        {copy.notePrefix}{" "}
        <strong>
          <bdi dir="ltr">{copy.noteHours}</bdi>
        </strong>
        . {copy.noteClosedOn} <strong>{copy.friday}</strong>.
      </div>

      {success && <div className={styles.successMessage}>{copy.successMessage}</div>}
      {errorMsg && <div className={styles.errorMessage}>{errorMsg}</div>}

      <form className={styles.appointmentForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder={copy.phName}
          value={form.name}
          onChange={handleInputChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder={copy.phEmail}
          value={form.email}
          onChange={handleInputChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder={copy.phPhone}
          value={form.phone}
          onChange={handleInputChange}
          required
        />

        <input
          type="text"
          name="carModel"
          placeholder={copy.phCarModel}
          value={form.carModel}
          onChange={handleInputChange}
          required
        />

        <div className={styles.servicesBlock}>
          <MultiSelectDropdown
            label={copy.servicesLabel}
            options={serviceOptions}
            value={form.services}
            onChange={(next) => setForm((prev) => ({ ...prev, services: next }))}
            placeholder={copy.servicesPlaceholder}
            ui={uiMulti}
            isAr={isAr}
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
          step={900}
        />

        <button type="submit" disabled={loading}>
          {loading ? copy.btnBooking : copy.btnBook}
        </button>
      </form>
    </div>
  );
}

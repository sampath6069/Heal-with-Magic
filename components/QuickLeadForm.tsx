"use client";

import { useMemo, useState } from "react";
import { contactDetails, siteData } from "@/lib/site-data";

type QuickLeadFormProps = {
  context?: string;
  theme?: "dark" | "light";
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  reassurance?: string;
};

type QuickLeadFormState = {
  name: string;
  phone: string;
  spaceType: string;
  city: string;
};

const initialState: QuickLeadFormState = {
  name: "",
  phone: "",
  spaceType: "",
  city: "",
};

const spaceTypes = ["Home", "Office", "Restaurant", "Retail", "Hotel", "Other"];

export function QuickLeadForm({
  context = "interior project",
  theme = "dark",
  eyebrow = "Free consultation",
  title = "Get a call back from our team.",
  description = "Share four details. We will understand the requirement and suggest the next step.",
  buttonLabel = "Send enquiry",
  reassurance = "No obligation. First discussion is free.",
}: QuickLeadFormProps) {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const isValid = useMemo(() => {
    return Boolean(form.name.trim() && form.phone.trim() && form.spaceType && form.city.trim());
  }, [form]);

  function updateField<K extends keyof QuickLeadFormState>(key: K, value: QuickLeadFormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValid) {
      return;
    }

    const message = [
      `Hello ${siteData.companyName}, I want to discuss ${context}.`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Space type: ${form.spaceType}`,
      `City / area: ${form.city}`,
    ].join("\n");

    setStatus("sending");

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          context,
          source: window.location.pathname,
        }),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }

    window.location.href = `https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  const labelClassName =
    theme === "light"
      ? "mb-2 block text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#6d5432]"
      : "mb-2 block text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[var(--color-gold-bright)]";
  const inputClassName =
    "w-full rounded-[1rem] border border-[rgba(196,154,95,0.24)] bg-white px-4 py-3 text-sm text-[#1f1711] outline-none transition placeholder:text-[#756657] focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[rgba(196,154,95,0.22)]";

  return (
    <form
      onSubmit={handleSubmit}
      data-lead-event="quick_lead_submit"
      className={theme === "light" ? "lead-form-light" : "lead-form-dark"}
    >
      <div>
        <p className={theme === "light" ? "eyebrow text-[#8a693c]" : "eyebrow"}>{eyebrow}</p>
        <h2 className={theme === "light" ? "mt-3 font-display text-3xl text-[#211b16]" : "mt-3 font-display text-3xl text-white"}>
          {title}
        </h2>
        <p className={theme === "light" ? "mt-3 text-sm leading-6 text-[#5f5145]" : "mt-3 text-sm leading-6 text-white/72"}>
          {description}
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`quick-name-${theme}`} className={labelClassName}>
            Name
          </label>
          <input
            id={`quick-name-${theme}`}
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={inputClassName}
            required
            placeholder="Your name"
            type="text"
          />
        </div>
        <div>
          <label htmlFor={`quick-phone-${theme}`} className={labelClassName}>
            Phone
          </label>
          <input
            id={`quick-phone-${theme}`}
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={inputClassName}
            required
            placeholder="Mobile number"
            type="tel"
          />
        </div>
        <div>
          <label htmlFor={`quick-space-${theme}`} className={labelClassName}>
            Space Type
          </label>
          <select
            id={`quick-space-${theme}`}
            value={form.spaceType}
            onChange={(event) => updateField("spaceType", event.target.value)}
            className={inputClassName}
            required
          >
            <option value="">Select</option>
            {spaceTypes.map((spaceType) => (
              <option key={spaceType}>{spaceType}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`quick-city-${theme}`} className={labelClassName}>
            City
          </label>
          <input
            id={`quick-city-${theme}`}
            value={form.city}
            onChange={(event) => updateField("city", event.target.value)}
            className={inputClassName}
            required
            placeholder="Guntur / Hyderabad"
            type="text"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="button-whatsapp border-0" disabled={!isValid || status === "sending"}>
          {status === "sending" ? "Sending..." : buttonLabel}
        </button>
        <span className={theme === "light" ? "text-sm text-[#625346]" : "text-sm text-white/66"}>
          {status === "sent" ? "Saved. Opening WhatsApp..." : status === "error" ? "Opening WhatsApp now." : reassurance}
        </span>
      </div>
    </form>
  );
}

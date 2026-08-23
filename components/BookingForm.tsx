"use client";

import { useMemo, useState } from "react";
import { contactDetails, services, siteData } from "@/lib/site-data";

type FormState = {
  name: string;
  phone: string;
  service: string;
  location: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  service: "",
  location: "",
  budget: "",
  message: "",
};

const formFieldClassName =
  "w-full rounded-[1.25rem] border border-[rgba(95,73,45,0.22)] bg-white px-4 py-3 text-base text-[#241c15] shadow-[0_8px_22px_rgba(0,0,0,0.08)] outline-none transition placeholder:text-[#7b6b5a] focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[rgba(196,154,95,0.18)]";

export function BookingForm() {
  const [form, setForm] = useState<FormState>(initialState);

  const isValid = useMemo(() => {
    return Boolean(form.name.trim() && form.phone.trim() && form.message.trim());
  }, [form]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValid) {
      return;
    }

    const lines = [
      `Hello ${siteData.companyName} team, I would like to book a free consultation.`,
      "",
      `Name: ${form.name}`,
      `Phone / WhatsApp: ${form.phone}`,
      form.service ? `Interested service: ${form.service}` : "",
      form.location ? `Location: ${form.location}` : "",
      form.budget ? `Budget range: ${form.budget}` : "",
      "",
      "Project details:",
      form.message,
    ].filter(Boolean);

    const whatsappUrl = `https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = whatsappUrl;
  }

  return (
    <form onSubmit={handleSubmit} data-lead-event="consultation_submit" className="mt-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="booking-name"
            className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-gold-bright)]"
          >
            Full name
          </label>
          <input
            id="booking-name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            type="text"
            required
            className={formFieldClassName}
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="booking-phone"
            className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-gold-bright)]"
          >
            Phone / WhatsApp
          </label>
          <input
            id="booking-phone"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            type="text"
            required
            className={formFieldClassName}
            placeholder="Best number to reach you"
          />
        </div>

        <div>
          <label
            htmlFor="booking-service"
            className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-gold-bright)]"
          >
            Interested service
          </label>
          <select
            id="booking-service"
            value={form.service}
            onChange={(event) => updateField("service", event.target.value)}
            className={formFieldClassName}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.name} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="booking-location" className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-gold-bright)]">
            Property location
          </label>
          <input
            id="booking-location"
            value={form.location}
            onChange={(event) => updateField("location", event.target.value)}
            type="text"
            className={formFieldClassName}
            placeholder="City / area"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="booking-budget"
          className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-gold-bright)]"
        >
          Approximate budget range
        </label>
        <select
          id="booking-budget"
          value={form.budget}
          onChange={(event) => updateField("budget", event.target.value)}
          className={formFieldClassName}
        >
          <option value="">Select a range</option>
          <option>Below Rs. 5 lakh</option>
          <option>Rs. 5-10 lakh</option>
          <option>Rs. 10-20 lakh</option>
          <option>Above Rs. 20 lakh</option>
          <option>Prefer to discuss</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="booking-message"
          className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-gold-bright)]"
        >
          What do you need help with?
        </label>
        <textarea
          id="booking-message"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          required
          rows={5}
          placeholder="Tell us about the space and what you need help with."
          className={formFieldClassName}
        />
      </div>

      <div className="rounded-[1.4rem] border border-[rgba(196,154,95,0.2)] bg-[rgba(196,154,95,0.08)] px-5 py-4 text-sm leading-7 text-[var(--color-copy)]">
        WhatsApp will open with your details already filled in. Send the message and our team will contact you.
      </div>

      <div className="flex flex-wrap gap-4">
        <button type="submit" className="button-primary border-0" disabled={!isValid}>
          Continue on WhatsApp
        </button>
      </div>
    </form>
  );
}

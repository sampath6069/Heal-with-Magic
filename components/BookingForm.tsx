"use client";

import { useMemo, useState } from "react";
import { contactDetails } from "@/lib/site-data";

type FormState = {
  name: string;
  phone: string;
  email: string;
  focus: string;
  preferredMode: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  focus: "",
  preferredMode: "Free session on WhatsApp",
  message: "",
};

export function BookingForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSuccessRedirecting, setIsSuccessRedirecting] = useState(false);

  const canContinue = useMemo(() => {
    return Boolean(form.name.trim() && form.phone.trim());
  }, [form.name, form.phone]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canContinue || isSubmitting || isSuccessRedirecting) {
      return;
    }

    setSubmitError("");
    setIsSubmitting(true);

    const lines = [
      "Hello Heal with Magic team, I would like to book a free session.",
      "",
      `Name: ${form.name}`,
      `Phone / WhatsApp: ${form.phone}`,
      form.email ? `Email: ${form.email}` : "",
      form.focus ? `Area I need help with: ${form.focus}` : "",
      `Preferred session mode: ${form.preferredMode}`,
      "",
      "Message:",
      form.message || "Not provided",
    ].filter(Boolean);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactDetails.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New free session lead - Heal with Magic",
          _captcha: "false",
          name: form.name,
          phone: form.phone,
          email: form.email || "Not provided",
          focus: form.focus || "Not selected",
          preferredMode: form.preferredMode,
          message: form.message || "Not provided",
        }),
      });

      if (!response.ok) {
        throw new Error("Lead submission failed");
      }

      const url = `https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
      setIsSuccessRedirecting(true);
      window.setTimeout(() => {
        window.location.assign(url);
      }, 900);
    } catch {
      setSubmitError(
        "We could not submit your details just now. Please try again in a moment so your enquiry reaches the team."
      );
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="booking-name"
            className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-plum)]"
          >
            Full name
          </label>
          <input
            id="booking-name"
            type="text"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            required
            autoFocus
            className="w-full rounded-[1.25rem] border border-white/70 bg-white/85 px-4 py-3 text-base text-[var(--color-plum)] outline-none transition focus:border-[var(--color-gold)]"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label
            htmlFor="booking-phone"
            className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-plum)]"
          >
            Phone / WhatsApp
          </label>
          <input
            id="booking-phone"
            type="text"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            required
            className="w-full rounded-[1.25rem] border border-white/70 bg-white/85 px-4 py-3 text-base text-[var(--color-plum)] outline-none transition focus:border-[var(--color-gold)]"
            placeholder="Best number to reach you"
          />
        </div>

        <div>
          <label
            htmlFor="booking-email"
            className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-plum)]"
          >
            Email
          </label>
          <input
            id="booking-email"
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="w-full rounded-[1.25rem] border border-white/70 bg-white/85 px-4 py-3 text-base text-[var(--color-plum)] outline-none transition focus:border-[var(--color-gold)]"
            placeholder="Optional email address"
          />
        </div>

        <div>
          <label
            htmlFor="booking-focus"
            className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-plum)]"
          >
            I need help with
          </label>
          <select
            id="booking-focus"
            value={form.focus}
            onChange={(event) => updateField("focus", event.target.value)}
            className="w-full rounded-[1.25rem] border border-white/70 bg-white/85 px-4 py-3 text-base text-[var(--color-plum)] outline-none transition focus:border-[var(--color-gold)]"
          >
            <option value="">Select one</option>
            <option>Free healing guidance session</option>
            <option>Career and money group healing</option>
            <option>Health and relationships group healing</option>
            <option>Chakra healing</option>
            <option>One-to-one healing</option>
            <option>Emotional healing support</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="booking-mode"
          className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-plum)]"
        >
          Preferred next step
        </label>
        <select
          id="booking-mode"
          value={form.preferredMode}
          onChange={(event) => updateField("preferredMode", event.target.value)}
          className="w-full rounded-[1.25rem] border border-white/70 bg-white/85 px-4 py-3 text-base text-[var(--color-plum)] outline-none transition focus:border-[var(--color-gold)]"
        >
          <option>Free session on WhatsApp</option>
          <option>Guidance before booking</option>
          <option>Program information</option>
          <option>Private one-to-one session details</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="booking-message"
          className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-plum)]"
        >
          Tell us a little more
          <span className="ml-2 text-[10px] tracking-[0.18em] text-[var(--color-muted)]">
            Optional
          </span>
        </label>
        <textarea
          id="booking-message"
          rows={5}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="If you want, share what you are currently going through and what kind of support you are looking for."
          className="w-full rounded-[1.25rem] border border-white/70 bg-white/85 px-4 py-3 text-base text-[var(--color-plum)] outline-none transition focus:border-[var(--color-gold)]"
        />
      </div>

      <div className="rounded-[1.4rem] border border-[var(--color-blush)]/70 bg-[var(--color-ivory)]/80 px-5 py-4 text-sm leading-7 text-[var(--color-muted)]">
        This is a free enquiry step and takes less than one minute. When you continue,
        your details are sent to the team first and then WhatsApp opens with the same
        information already filled in, so you can get a faster and more personal response.
      </div>

      {isSuccessRedirecting ? (
        <div className="rounded-[1.25rem] border border-[rgba(141,106,53,0.18)] bg-[rgba(255,252,245,0.96)] px-5 py-4 text-sm leading-7 text-[var(--color-plum-deep)]">
          Your details were sent successfully. Opening WhatsApp now. If WhatsApp does not open,
          please use the WhatsApp button in the header after this step.
        </div>
      ) : null}

      {submitError ? (
        <div className="rounded-[1.25rem] border border-[rgba(190,92,92,0.2)] bg-[rgba(255,245,245,0.95)] px-5 py-4 text-sm leading-7 text-[#8b4343]">
          {submitError}
        </div>
      ) : null}

      <button
        type="submit"
        className="button-primary border-0 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={!canContinue || isSubmitting || isSuccessRedirecting}
      >
        {isSuccessRedirecting
          ? "Opening WhatsApp..."
          : isSubmitting
            ? "Sending your details..."
            : "Send My Enquiry and Continue to WhatsApp"}
      </button>
    </form>
  );
}

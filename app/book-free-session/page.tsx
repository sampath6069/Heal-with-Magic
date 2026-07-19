import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { PageShell } from "@/components/PageShell";
import { bookingSteps } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Book a Free Session",
  description:
    "Share your details and continue to WhatsApp with a pre-filled booking request for Heal with Magic.",
};

export default function BookFreeSessionPage() {
  return (
    <PageShell
      eyebrow="Book a Free Session"
      title="Book your free session by filling in your details below."
      description="This page is designed to collect your enquiry details first. Once you submit them, the team receives your information by email and then WhatsApp opens with the same details already prepared."
    >
      <section className="section-shell pt-6">
        <div className="grid gap-6">
          <div className="glass-card rounded-[2.5rem] p-8 sm:p-10">
            <h2 className="font-display text-4xl text-[var(--color-plum)]">
              Fill your details
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              Share your details here first. This helps the team receive your enquiry,
              understand what support you need, and then continue the conversation with
              you more smoothly on WhatsApp.
            </p>
            <BookingForm />
          </div>

          <div className="rounded-[2.3rem] bg-[linear-gradient(160deg,rgba(255,255,255,0.9),rgba(246,234,240,0.8))] p-8 shadow-[0_22px_60px_rgba(122,79,106,0.1)]">
            <div className="max-w-3xl">
              <h2 className="font-display text-4xl text-[var(--color-plum)]">
                What happens next
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {bookingSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="gold-outline rounded-[1.6rem] px-5 py-5"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">
                      Step {index + 1}
                    </p>
                    <p className="mt-2 font-display text-2xl text-[var(--color-plum)]">
                      {step.title}
                    </p>
                    <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

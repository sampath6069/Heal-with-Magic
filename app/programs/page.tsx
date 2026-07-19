import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { faqs, getProgramInquiryLink, programs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Heal with Magic healing programs, including 21-day group journeys and one-to-one healing support.",
};

export default function ProgramsPage() {
  return (
    <PageShell
      eyebrow="Programs"
      title="Choose the healing program that fits your present need, budget, and level of support."
      description="These 21-day healing options are designed to make the decision simple. Start with the area where you feel the most emotional weight right now, or choose private support if you want more focused personal guidance."
    >
      <section className="section-shell pt-6">
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {programs.map((program) => (
            <article
              key={program.name}
              className={`flex h-full flex-col rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_22px_60px_rgba(95,86,152,0.09)] ${program.featured ? "ring-2 ring-[rgba(141,106,53,0.26)] shadow-[0_24px_62px_rgba(141,106,53,0.15)]" : ""}`}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-gold)]">
                    {program.duration}
                  </p>
                  {program.featured ? (
                    <span className="inline-flex rounded-full bg-[var(--color-gold)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                      Most Popular
                    </span>
                  ) : null}
                </div>
                <div className="min-w-[180px] rounded-[1.7rem] bg-[linear-gradient(160deg,#df8f7c_0%,#cc775f_100%)] px-5 py-4 text-center text-white shadow-[0_16px_34px_rgba(241,138,105,0.28)]">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/75">
                    Program Price
                  </p>
                  <p className="mt-2 text-4xl font-semibold leading-none">
                    {program.price.replace("Rs. ", "Rs ")}
                  </p>
                </div>
              </div>
              <h2 className="mt-4 font-display text-4xl text-[var(--color-plum)]">
                {program.name}
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                {program.description}
              </p>
              <div className="mt-5 rounded-[1.5rem] bg-[rgba(255,255,255,0.78)] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
                  Best for
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--color-plum)]">
                  {program.idealFor.map((point) => (
                    <li key={point}>- {point}</li>
                  ))}
                </ul>
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-plum-deep)]">
                Outcome: {program.outcome}
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {program.paymentNote ??
                  "After payment, you can also reach out on WhatsApp if you want help with the next step."}
              </p>
              <div className="mt-5 rounded-[1.5rem] border border-[rgba(87,69,127,0.08)] bg-[rgba(248,244,251,0.88)] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
                  What happens next
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-plum)]">
                  Pay securely, message on WhatsApp, receive joining details, and begin your 21-day program with clarity.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href={program.paymentLink}
                  className="button-primary w-full"
                  target="_blank"
                  rel="noreferrer"
                >
                  {program.joinLabel ?? "Secure Your Spot"}
                </Link>
                <Link
                  href={getProgramInquiryLink(program.name)}
                  className="button-secondary w-full"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ask Before Joining
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/70 bg-white/82 p-8 shadow-[0_18px_46px_rgba(95,86,152,0.08)]">
            <p className="eyebrow">Before You Join</p>
            <h2 className="mt-3 font-display text-4xl text-[var(--color-plum)]">
              Choose with confidence, not pressure.
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              If you already know what you need, you can secure your place right away.
              If you are unsure, use the contact or free-session flow first and get guidance before paying.
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              Private one-to-one healing naturally has fewer available openings than group sessions, so earlier enquiry helps.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.slice(0, 4).map((faq) => (
              <details key={faq.question} className="rounded-[1.7rem] border border-white/70 bg-white/85 p-6 shadow-[0_16px_40px_rgba(95,86,152,0.07)]">
                <summary className="cursor-pointer list-none font-display text-2xl text-[var(--color-plum)]">
                  {faq.question}
                </summary>
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

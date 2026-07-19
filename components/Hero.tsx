import Link from "next/link";
import { contactDetails } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(106,81,145,0.22),transparent_22%),radial-gradient(circle_at_85%_12%,rgba(221,177,125,0.2),transparent_20%),radial-gradient(circle_at_78%_72%,rgba(233,205,219,0.24),transparent_22%)]" />
      <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-[rgba(255,255,255,0.42)] blur-3xl" />
      <div className="absolute right-[-5rem] top-10 h-64 w-64 rounded-full bg-[rgba(223,143,124,0.14)] blur-3xl" />
      <div className="section-shell relative pb-8 pt-8 lg:pt-10">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="max-w-3xl space-y-6">
            <p className="eyebrow">Mystical Healing Experience</p>
            <h1 className="font-display text-5xl leading-none text-[var(--color-plum-deep)] sm:text-6xl lg:text-7xl">
              Heal with Magic
            </h1>
            <p className="text-sm uppercase tracking-[0.32em] text-[var(--color-gold)] sm:text-base">
              Gentle healing, manifestation, and transformation
            </p>
            <p className="max-w-2xl font-display text-xl leading-relaxed text-[var(--color-muted)] sm:text-2xl lg:text-3xl">
              Emotional healing support for anyone who wants peace, clarity, and a fresh start.
            </p>
            <p className="max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              If you have been feeling emotionally heavy, blocked in love or money,
              disconnected from yourself, or unsure how to move forward, this is a
              safe space to receive healing, guidance, and your next clear step.
            </p>
            <div className="grid max-w-2xl gap-3 sm:grid-cols-3">
              {[
                "Free session for first enquiry",
                "WhatsApp guidance after booking",
                "Paid 21-day healing programs",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.2rem] border border-white/70 bg-white/70 px-4 py-3 text-center text-sm font-medium text-[var(--color-plum-deep)] shadow-[0_12px_26px_rgba(87,69,127,0.08)]"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href={contactDetails.bookingLink}
                className="button-primary w-full sm:w-auto"
                target="_blank"
                rel="noreferrer"
              >
                Book a Free Session
              </Link>
              <Link href="/programs" className="button-secondary w-full sm:w-auto">
                Explore Programs
              </Link>
            </div>
          </div>

          <div className="glass-card rounded-[2.3rem] p-6 sm:p-8">
            <div className="rounded-[2rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(247,236,242,0.88),rgba(255,247,240,0.94))] p-6 shadow-[0_16px_40px_rgba(109,86,131,0.08)]">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-gold)]">
                Why people choose this space
              </p>
              <h2 className="mt-4 font-display text-4xl text-[var(--color-plum-deep)]">
                A healing experience that feels soft, personal, and easy to begin.
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                You do not need to figure everything out alone first. Start with
                one conversation, share what you are going through, and receive
                guidance toward the right program or private healing support.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Guided by Shamitha Venkat",
                  "Private and group options",
                  "Simple booking process",
                  "Heart-led healing support",
                ].map((item) => (
                  <div
                    key={item}
                    className="gold-outline rounded-[1.4rem] px-4 py-4 text-sm uppercase tracking-[0.18em] text-[var(--color-plum-deep)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

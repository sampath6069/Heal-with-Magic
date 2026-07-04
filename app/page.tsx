import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import {
  contactDetails,
  programs,
  testimonials,
} from "@/lib/site-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Heal with Magic offers gentle healing sessions, 21-day programs, WhatsApp support, and soulful guidance by Shamitha Venkat.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />

        <section className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <p className="eyebrow">About</p>
              <h2 className="font-display text-4xl text-[var(--color-plum)] sm:text-5xl">
                A nurturing space for emotional healing, energetic renewal, and
                conscious manifestation.
              </h2>
              <p className="text-lg leading-8 text-[var(--color-muted)]">
                Heal with Magic offers compassionate support for women who are
                ready to release emotional pain, restore inner balance, and move
                into a more peaceful and empowered life. Each session blends
                intuitive healing with grounded guidance you can carry into your
                everyday world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="button-secondary">
                  Learn More
                </Link>
                <Link href="/contact" className="button-primary">
                  Book a Free Session
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_30px_90px_rgba(105,59,88,0.12)] backdrop-blur">
              <div className="space-y-6">
                <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(247,223,232,0.95),rgba(255,248,241,0.96),rgba(227,208,220,0.92))] p-6">
                  <p className="font-display text-3xl text-[var(--color-plum)]">
                    Signature promise
                  </p>
                  <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
                    Heart-led healing that helps you release the past, reconnect
                    with your worth, and create new chapters with clarity, love,
                    and trust.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "21-day healing programs",
                  "Group healing from Rs. 999",
                  "1:1 healing at Rs. 9999",
                  "Compassionate guidance",
                ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.5rem] border border-[var(--color-blush)]/60 bg-[var(--color-ivory)]/80 px-5 py-4 text-sm uppercase tracking-[0.22em] text-[var(--color-plum)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="rounded-[2.5rem] border border-white/70 bg-white/75 px-6 py-8 shadow-[0_30px_80px_rgba(130,84,113,0.12)] backdrop-blur sm:px-8 lg:px-12 lg:py-12">
            <div className="mb-8 max-w-2xl space-y-3">
              <p className="eyebrow">Programs</p>
              <h2 className="font-display text-4xl text-[var(--color-plum)] sm:text-5xl">
                Healing journeys for focused support and steady transformation.
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {programs.map((program) => (
                <article
                  key={program.name}
                  className="rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(249,239,243,0.92))] p-7 shadow-[0_20px_55px_rgba(95,86,152,0.08)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-gold)]">
                      {program.duration}
                    </p>
                    <p className="rounded-full bg-[var(--color-plum)] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(95,86,152,0.26)]">
                      {program.price}
                    </p>
                  </div>
                  <h3 className="mt-4 font-display text-3xl text-[var(--color-plum)]">
                    {program.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                    {program.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="mb-10 max-w-2xl space-y-3">
            <p className="eyebrow">Testimonials</p>
            <h2 className="font-display text-4xl text-[var(--color-plum)] sm:text-5xl">
              Words from women who felt the shift.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[0_24px_60px_rgba(122,79,106,0.12)]"
              >
                <p className="text-lg leading-8 text-[var(--color-muted)]">
                  "{testimonial.quote}"
                </p>
                <div className="mt-6">
                  <p className="font-display text-2xl text-[var(--color-plum)]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-gold)]">
                    {testimonial.result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2.25rem] bg-[linear-gradient(160deg,rgba(255,248,241,0.96),rgba(248,223,233,0.85),rgba(255,255,255,0.94))] p-8 shadow-[0_30px_80px_rgba(151,113,131,0.18)]">
              <p className="eyebrow">Contact</p>
              <h2 className="mt-3 font-display text-4xl text-[var(--color-plum)] sm:text-5xl">
                Ready to begin your healing journey?
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
                Book a free session, ask a question, or send a WhatsApp message
                to receive warm guidance on the best healing path for you.
              </p>
              <div className="mt-8 space-y-4 text-base text-[var(--color-plum)]">
                <Link href={`mailto:${contactDetails.email}`}>{contactDetails.email}</Link>
                <Link href={contactDetails.whatsappLink} target="_blank" rel="noreferrer">
                  WhatsApp: {contactDetails.phone}
                </Link>
                <Link href={contactDetails.instagramLink} target="_blank" rel="noreferrer">
                  {contactDetails.instagram}
                </Link>
              </div>
            </div>

            <div className="rounded-[2.25rem] border border-white/70 bg-white/80 p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  "Private sessions",
                  "Program applications",
                  "WhatsApp support",
                  "Online worldwide",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-[var(--color-blush)]/70 px-5 py-6 text-center"
                  >
                    <p className="font-display text-2xl text-[var(--color-plum)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-base leading-8 text-[var(--color-muted)]">
                Group healing programs and private 1:1 healing options can be
                discussed directly during enquiry or booking.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href={contactDetails.bookingLink} className="button-primary">
                  Book a Free Session
                </Link>
                <Link href="/contact" className="button-secondary">
                  Contact Page
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

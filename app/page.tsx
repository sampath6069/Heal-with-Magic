import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import {
  contactDetails,
  faqs,
  getProgramInquiryLink,
  programs,
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
              <h2 className="font-display text-4xl text-[var(--color-plum-deep)] sm:text-5xl">
                A nurturing healing space for anyone who wants to feel lighter, calmer, and more in control of life again.
              </h2>
              <p className="text-lg leading-8 text-[var(--color-muted)]">
                Heal with Magic offers compassionate support for people who are
                ready to release emotional pain, restore inner balance, and move
                into a more peaceful and empowered life. Each session blends
                intuitive healing with grounded guidance you can carry into your
                everyday world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="button-secondary">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="glass-card rounded-[2.2rem] p-8">
              <div className="space-y-6">
                <div className="soft-panel rounded-[1.7rem] p-6">
                  <p className="font-display text-3xl text-[var(--color-plum-deep)]">
                    What makes this different
                  </p>
                  <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
                    This is not just motivation. It is guided healing support
                    designed to reduce emotional overwhelm, create inner clarity,
                    and help you take real next steps with more self-trust.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Start with a free first session",
                  "Group healing from Rs. 999",
                  "Private healing support available",
                  "Simple WhatsApp follow-up",
                ].map((item) => (
                    <div
                      key={item}
                      className="gold-outline rounded-[1.5rem] px-5 py-4 text-sm uppercase tracking-[0.22em] text-[var(--color-plum-deep)]"
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
          <div className="mb-8 max-w-3xl space-y-3">
            <p className="eyebrow">Who This Is For</p>
            <h2 className="font-display text-4xl text-[var(--color-plum-deep)] sm:text-5xl">
              You may be in the right place if you are feeling one or more of these right now.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              "You feel emotionally heavy and want peace without pretending everything is fine.",
              "You are facing repeated blocks in money, career, relationships, or self-worth.",
              "You want healing support that feels warm, welcoming, and easy to begin.",
              "You want clear next steps instead of vague spiritual advice.",
            ].map((item) => (
              <article key={item} className="glass-card rounded-[2rem] p-6">
                <p className="text-base leading-8 text-[var(--color-plum-deep)]">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <div className="glass-card rounded-[2.8rem] px-6 py-8 sm:px-8 lg:px-12 lg:py-12">
            <div className="mb-8 max-w-2xl space-y-3">
              <p className="eyebrow">Programs</p>
              <h2 className="font-display text-4xl text-[var(--color-plum-deep)] sm:text-5xl">
                Choose the healing path that matches what you need most right now.
              </h2>
              <p className="text-lg leading-8 text-[var(--color-muted)]">
                Start with a free session if you want guidance first. Choose a paid 21-day program if you already know the area you want support with. Choose one-to-one healing if you want more private and focused personal support.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              {programs.map((program) => (
                <article
                  key={program.name}
                  className={`soft-panel flex h-full flex-col rounded-[2.2rem] p-7 ${program.featured ? "ring-2 ring-[rgba(141,106,53,0.28)] shadow-[0_22px_60px_rgba(141,106,53,0.16)]" : ""}`}
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
                    <div className="min-w-[170px] rounded-[1.6rem] bg-[linear-gradient(160deg,#5f5698_0%,#4c457c_100%)] px-5 py-4 text-center text-white shadow-[0_16px_34px_rgba(87,69,127,0.28)]">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-white/70">
                        Program Price
                      </p>
                      <p className="mt-2 text-4xl font-semibold leading-none">
                        {program.price.replace("Rs. ", "Rs ")}
                      </p>
                    </div>
                  </div>
                  <h3 className="mt-4 font-display text-3xl text-[var(--color-plum-deep)]">
                    {program.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                    {program.description}
                  </p>
                  <div className="mt-5 rounded-[1.5rem] bg-white/70 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
                      Best for
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--color-plum-deep)]">
                      {program.idealFor.map((point) => (
                        <li key={point}>- {point}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-plum)]">
                    Outcome: {program.outcome}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {program.paymentNote ??
                      "After payment, you can continue on WhatsApp to receive joining guidance and the next instructions."}
                  </p>
                  <div className="mt-6 flex flex-col gap-3">
                    <Link
                      href={program.paymentLink}
                      className="button-primary w-full"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {program.joinLabel ?? "Join This Program"}
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
          </div>
        </section>

        <section className="section-shell">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Step 1",
                text: "Book a free session and share what you are currently going through.",
              },
              {
                title: "Step 2",
                text: "Get guidance on the best healing option for your needs and comfort level.",
              },
              {
                title: "Step 3",
                text: "Begin your program or private support with clear next steps and ongoing connection.",
              },
            ].map((item) => (
              <article key={item.title} className="soft-panel rounded-[2rem] p-7">
                <p className="eyebrow">{item.title}</p>
                <h2 className="mt-3 font-display text-3xl text-[var(--color-plum-deep)]">
                  {item.text}
                </h2>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-4">
              <p className="eyebrow">Questions Answered</p>
              <h2 className="font-display text-4xl text-[var(--color-plum-deep)] sm:text-5xl">
                Remove doubts before they become a reason to leave.
              </h2>
              <p className="text-lg leading-8 text-[var(--color-muted)]">
                Most visitors do not need more inspiration. They need clarity,
                safety, and a simple next step. These answers help with that.
              </p>
              <div className="rounded-[1.8rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.92),rgba(247,236,242,0.82))] p-6 shadow-[0_18px_46px_rgba(95,86,152,0.08)]">
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)]">
                  Helpful note
                </p>
                <p className="mt-3 text-base leading-8 text-[var(--color-plum-deep)]">
                  Private one-to-one support is naturally more limited each month,
                  so if that is what you want, the best first step is to book the
                  free session or message on WhatsApp.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="glass-card rounded-[1.8rem] p-6"
                >
                  <summary className="cursor-pointer list-none font-display text-2xl text-[var(--color-plum-deep)]">
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

        <section className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="soft-panel rounded-[2.4rem] p-8">
              <p className="eyebrow">Contact</p>
              <h2 className="mt-3 font-display text-4xl text-[var(--color-plum-deep)] sm:text-5xl">
                Do not leave this page still wondering what to do next.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
                If you are interested but still unsure, start with the free session.
                It is the easiest way to ask questions, explain your situation, and
                receive guidance toward the right healing path.
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

            <div className="glass-card rounded-[2.4rem] p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  "Private sessions",
                  "Program applications",
                  "WhatsApp support",
                  "Online worldwide",
                ].map((item) => (
                  <div
                    key={item}
                    className="gold-outline rounded-[1.5rem] px-5 py-6 text-center"
                  >
                    <p className="font-display text-2xl text-[var(--color-plum-deep)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-base leading-8 text-[var(--color-muted)]">
                You can start with a free session, join a 21-day group program, or
                choose private one-to-one support depending on the depth of support
                you want.
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

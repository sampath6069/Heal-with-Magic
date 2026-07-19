import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { contactDetails } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Heal with Magic by email, WhatsApp, or the enquiry form to book a session or ask about healing programs.",
};

export default function ContactPage() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3001");

  return (
    <PageShell
      eyebrow="Contact"
      title="Use this page for direct contact, paid program joining, or general questions."
      description="If you want to book a free session, use WhatsApp directly to chat with Shamitha. This page is best for direct contact, joining a paid program, or asking questions before you decide."
    >
      <section className="section-shell pt-6">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-8">
            <h2 className="font-display text-4xl text-[var(--color-plum)]">
              Contact details
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-[var(--color-muted)]">
              <p>Name: {contactDetails.name}</p>
              <p>
                Email: <Link href={`mailto:${contactDetails.email}`}>{contactDetails.email}</Link>
              </p>
              <p>
                Phone / WhatsApp:{" "}
                <Link href={contactDetails.whatsappLink} target="_blank" rel="noreferrer">
                  {contactDetails.phone}
                </Link>
              </p>
              <p>
                Instagram:{" "}
                <Link href={contactDetails.instagramLink}>
                  {contactDetails.instagram}
                </Link>
              </p>
            </div>
            <p className="mt-6 text-base leading-8 text-[var(--color-muted)]">
              Use this page if you want to send a direct enquiry, ask a question,
              contact the team on WhatsApp, or join a paid program. If you want
              a free session first, please use WhatsApp directly.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                "General questions",
                "WhatsApp contact",
                "Paid program guidance",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-white/70 bg-white/75 px-4 py-4 text-center text-sm font-semibold text-[var(--color-plum-deep)] shadow-[0_10px_24px_rgba(87,69,127,0.06)]"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={contactDetails.bookingLink}
                className="button-primary"
                target="_blank"
                rel="noreferrer"
              >
                Book a Free Session
              </Link>
              <Link href={contactDetails.whatsappLink} className="button-secondary" target="_blank" rel="noreferrer">
                Ask on WhatsApp
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[linear-gradient(160deg,rgba(255,255,255,0.92),rgba(228,223,249,0.78),rgba(243,216,220,0.7))] p-8">
            <h2 className="font-display text-4xl text-[var(--color-plum)]">
              Join a paid healing program
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              If you already know which program you want, you can pay securely
              here and then continue on WhatsApp for joining guidance and next steps.
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              After payment:
              secure your place, receive WhatsApp confirmation, and get the details needed to begin your 21-day journey.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Pay securely online",
                "Receive WhatsApp confirmation",
                "Get joining details quickly",
                "Ask before joining anytime",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-white/60 bg-white/75 px-4 py-4 text-center text-sm font-semibold text-[var(--color-plum-deep)] shadow-[0_10px_24px_rgba(87,69,127,0.08)]"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="https://rzp.io/rzp/5riZg4o"
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-white/15 bg-[var(--color-plum-deep)] px-4 py-4 text-center text-white shadow-[0_12px_30px_rgba(95,86,152,0.22)]"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-white/85">
                  Career and Money
                </p>
                <p className="mt-3 inline-flex rounded-full bg-white px-4 py-1.5 text-2xl font-semibold text-[var(--color-plum-deep)] shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
                  Pay Rs. 999
                </p>
              </Link>
              <Link
                href="https://rzp.io/rzp/Knio3WE"
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-white/15 bg-[var(--color-plum-deep)] px-4 py-4 text-center text-white shadow-[0_12px_30px_rgba(95,86,152,0.22)]"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-white/85">
                  Health and Relationships
                </p>
                <p className="mt-3 inline-flex rounded-full bg-white px-4 py-1.5 text-2xl font-semibold text-[var(--color-plum-deep)] shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
                  Pay Rs. 999
                </p>
              </Link>
              <Link
                href="https://rzp.io/rzp/BeObdQ12"
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-white/15 bg-[var(--color-coral)] px-4 py-4 text-center text-white shadow-[0_12px_30px_rgba(241,138,105,0.24)]"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-white/85">
                  One-to-One Healing
                </p>
                <p className="mt-3 inline-flex rounded-full bg-white px-4 py-1.5 text-2xl font-semibold text-[var(--color-coral)] shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
                  Pay Rs. 9999
                </p>
              </Link>
              <Link
                href="https://wa.me/919686525789?text=Hello%20Heal%20with%20Magic%20team%2C%0AI%20am%20interested%20in%20the%20%22Chakra%20Healing%22%20program.%0AI%20would%20like%20to%20ask%20about%20joining%20and%20payment%20details."
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-white/15 bg-[var(--color-plum-deep)] px-4 py-4 text-center text-white shadow-[0_12px_30px_rgba(95,86,152,0.22)]"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-white/85">
                  Chakra Healing
                </p>
                <p className="mt-3 inline-flex rounded-full bg-white px-4 py-1.5 text-xl font-semibold text-[var(--color-plum-deep)] shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
                  Ask to Join
                </p>
              </Link>
            </div>

            <div className="mt-8 rounded-[1.7rem] border border-white/60 bg-white/70 p-6 shadow-[0_16px_40px_rgba(95,86,152,0.08)]">
              <h3 className="font-display text-3xl text-[var(--color-plum)]">
                Ask before joining
              </h3>
              <p className="mt-3 text-base leading-8 text-[var(--color-muted)]">
                If you still want to ask a question before paying, use the form below and you will receive a personal response by email.
              </p>
            </div>

            <form
              action={`https://formsubmit.co/${contactDetails.email}`}
              method="POST"
              className="mt-8 space-y-5"
            >
              <input type="hidden" name="_subject" value="Heal with Magic enquiry" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value={`${siteUrl}/contact/success`}
              />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-plum)]"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-[1.25rem] border border-white/70 bg-white/85 px-4 py-3 text-base text-[var(--color-plum)] outline-none transition focus:border-[var(--color-gold)]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-plum)]"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-[1.25rem] border border-white/70 bg-white/85 px-4 py-3 text-base text-[var(--color-plum)] outline-none transition focus:border-[var(--color-gold)]"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-plum)]"
                >
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  className="w-full rounded-[1.25rem] border border-white/70 bg-white/85 px-4 py-3 text-base text-[var(--color-plum)] outline-none transition focus:border-[var(--color-gold)]"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-plum)]"
                >
                  Interested Program or Session
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full rounded-[1.25rem] border border-white/70 bg-white/85 px-4 py-3 text-base text-[var(--color-plum)] outline-none transition focus:border-[var(--color-gold)]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a program or session
                  </option>
                  <option>Group Healing for Career and Money - Rs. 999</option>
                  <option>Group Healing for Health and Relationships - Rs. 999</option>
                  <option>One-to-One Healing - Rs. 9999</option>
                  <option>Chakra Healing - Rs. 1122</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-plum)]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Share what you are currently going through and what kind of support you are looking for."
                  className="w-full rounded-[1.25rem] border border-white/70 bg-white/85 px-4 py-3 text-base text-[var(--color-plum)] outline-none transition focus:border-[var(--color-gold)]"
                />
              </div>

              <button type="submit" className="button-primary border-0">
                Send Enquiry
              </button>
            </form>

            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              Form submissions are sent using FormSubmit. The first submission may
              ask you to activate the form from a confirmation email.
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              By submitting this form, you agree that your details may be used
              to respond to your enquiry and guide you toward the right healing
              session or program.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

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
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  return (
    <PageShell
      eyebrow="Contact"
      title="Begin with a conversation, a booking, or a gentle next step."
      description="Reach out to Shamitha directly to ask questions, enquire about sessions, or discuss which healing program may be right for you."
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
                <Link href={contactDetails.instagramLink} target="_blank" rel="noreferrer">
                  {contactDetails.instagram}
                </Link>
              </p>
            </div>
            <p className="mt-6 text-base leading-8 text-[var(--color-muted)]">
              You can use email or WhatsApp to enquire about private sessions,
              21-day healing programs, or personalized support.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.5rem] bg-[var(--color-plum)] px-4 py-4 text-center text-white shadow-[0_12px_30px_rgba(95,86,152,0.22)]">
                <p className="text-xs uppercase tracking-[0.18em] text-white/80">
                  Career and Money
                </p>
                <p className="mt-2 text-2xl font-semibold">Rs. 999</p>
              </div>
              <div className="rounded-[1.5rem] bg-[var(--color-plum)] px-4 py-4 text-center text-white shadow-[0_12px_30px_rgba(95,86,152,0.22)]">
                <p className="text-xs uppercase tracking-[0.18em] text-white/80">
                  Health and Relationships
                </p>
                <p className="mt-2 text-2xl font-semibold">Rs. 999</p>
              </div>
              <div className="rounded-[1.5rem] bg-[var(--color-coral)] px-4 py-4 text-center text-white shadow-[0_12px_30px_rgba(241,138,105,0.24)]">
                <p className="text-xs uppercase tracking-[0.18em] text-white/80">
                  1:1 Healing
                </p>
                <p className="mt-2 text-2xl font-semibold">Rs. 9999</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={contactDetails.bookingLink} className="button-primary">
                Book a Free Session
              </Link>
              <Link href={contactDetails.whatsappLink} className="button-secondary">
                WhatsApp
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[linear-gradient(160deg,rgba(255,255,255,0.92),rgba(228,223,249,0.78),rgba(243,216,220,0.7))] p-8">
            <h2 className="font-display text-4xl text-[var(--color-plum)]">
              Send a message
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              If you are unsure which program or session is right for you, simply send a
              message with what you are currently struggling with. Guidance can
              then be shared on the most suitable session or program.
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              Session availability, pricing, and next steps can be shared
              personally after your enquiry so the support feels more tailored
              to your needs.
            </p>

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
                  <option>1:1 Healing - Rs. 9999</option>
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

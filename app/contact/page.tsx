import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { consultationOptions, contactDetails, services, siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteData.companyName} for consultations, quotes, and project enquiries.`,
};

export default function ContactPage() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_ENV === "production"
      ? "https://www.designspaceandinfra.com"
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000");
  const formFieldClassName =
    "w-full rounded-[1.25rem] border border-[rgba(95,73,45,0.22)] bg-white px-4 py-3 text-base text-[#241c15] shadow-[0_8px_22px_rgba(0,0,0,0.08)] outline-none transition placeholder:text-[#7b6b5a] focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[rgba(196,154,95,0.18)]";

  return (
    <PageShell
      eyebrow="Contact"
      title="Talk to us about your home or business interior."
      description="Call, WhatsApp, or send your requirement. We will get back to you to discuss the next step."
    >
      <section className="section-shell pt-6">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="grid gap-6">
            <div className="light-panel rounded-[2rem] p-8 sm:p-10">
              <h2 className="font-display text-4xl text-[var(--color-card-ink)]">
                Direct contact
              </h2>
              <div className="mt-6 grid gap-4">
                <div className="rounded-[1.3rem] border border-black/6 bg-white/55 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">Phone</p>
                  <Link
                    href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                    className="mt-2 block text-base leading-7 text-[rgba(33,27,22,0.82)]"
                  >
                    {contactDetails.phone}
                  </Link>
                </div>
                <div className="rounded-[1.3rem] border border-black/6 bg-white/55 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">WhatsApp</p>
                  <Link
                    href={contactDetails.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block text-base leading-7 text-[rgba(33,27,22,0.82)]"
                  >
                    {contactDetails.whatsapp}
                  </Link>
                </div>
                <div className="rounded-[1.3rem] border border-black/6 bg-white/55 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">Email</p>
                  <Link
                    href={`mailto:${contactDetails.email}`}
                    className="mt-2 block break-all text-base leading-7 text-[rgba(33,27,22,0.82)]"
                  >
                    {contactDetails.email}
                  </Link>
                </div>
                <div className="rounded-[1.3rem] border border-black/6 bg-white/55 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">Address</p>
                  <Link
                    href={contactDetails.mapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block text-base leading-7 text-[rgba(33,27,22,0.82)]"
                  >
                    {contactDetails.address}
                  </Link>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href={contactDetails.whatsappLink} className="button-primary" target="_blank" rel="noreferrer">
                  WhatsApp us
                </Link>
                <Link href={contactDetails.mapsLink} className="button-tertiary" target="_blank" rel="noreferrer">
                  Open Map
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/4 p-8">
              <p className="eyebrow">Consultation Options</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {consultationOptions.map((item) => (
                  <div key={item} className="rounded-[1.4rem] border border-white/8 bg-black/18 px-5 py-5">
                    <p className="font-display text-2xl text-[var(--color-ink)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(196,154,95,0.1),rgba(255,255,255,0.03))] p-8">
              <p className="eyebrow">Popular Enquiries</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {services.slice(0, 4).map((service) => (
                  <div key={service.name} className="rounded-[1.4rem] border border-white/8 bg-white/4 px-5 py-5">
                    <p className="font-display text-2xl text-[var(--color-ink)]">{service.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-8 shadow-[0_28px_80px_rgba(0,0,0,0.18)]">
            <h2 className="font-display text-4xl text-[var(--color-ink)]">
              Send an enquiry
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-copy)]">
              Share your property type, location, and requirement. This form is sent directly to our business email.
            </p>

            <form
              action={`https://formsubmit.co/${contactDetails.email}`}
              method="POST"
              data-lead-event="enquiry_submit"
              className="mt-8 space-y-5"
            >
              <input type="hidden" name="_subject" value="Design Space and Infra enquiry" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={`${siteUrl}/contact/success`} />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-gold-bright)]"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className={formFieldClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-gold-bright)]"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={formFieldClassName}
                />
              </div>

              <div>
                <label htmlFor="location" className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-gold-bright)]">Property Location</label>
                <input id="location" name="location" type="text" placeholder="City / area" className={formFieldClassName} />
              </div>

              <div>
                <label htmlFor="budget" className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-gold-bright)]">Approximate Budget</label>
                <select id="budget" name="budget" defaultValue="" className={formFieldClassName}>
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
                  htmlFor="phone"
                  className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-gold-bright)]"
                >
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  required
                  className={formFieldClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-gold-bright)]"
                >
                  Interested Service
                </label>
                <select
                  id="service"
                  name="service"
                  className={formFieldClassName}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option key={service.name}>{service.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-gold-bright)]"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your property, style preference, number of rooms or project scope, and timeline."
                  className={formFieldClassName}
                />
              </div>

              <div className="flex flex-wrap gap-4">
                <button type="submit" className="button-primary border-0">
                  Send Enquiry
                </button>
                <Link href={contactDetails.whatsappLink} className="button-secondary" target="_blank" rel="noreferrer">
                  Prefer WhatsApp?
                </Link>
              </div>
            </form>

            <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
              {contactDetails.formStatus}
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

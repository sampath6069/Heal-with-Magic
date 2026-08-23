import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { QuickLeadForm } from "@/components/QuickLeadForm";
import { ServiceExplorer } from "@/components/ServiceExplorer";
import {
  budgetGuidance,
  buyerProof,
  contactDetails,
  faqs,
  founders,
  simpleProcess,
  stats,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Interior Designers in Guntur & Hyderabad",
  description:
    "Design Space and Infra designs and executes home interiors, commercial interiors, restaurants, hotels, offices, and custom furniture across Andhra Pradesh and Hyderabad.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />

        <ServiceExplorer />

        <ProjectExplorer />

        <section className="section-shell reveal-on-scroll">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-[1.5rem] p-6">
                <p className="font-sans text-4xl font-black text-[var(--color-gold-bright)]">{stat.value}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[var(--color-copy)]">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {buyerProof.map((item) => (
              <div key={item} className="rounded-[1rem] border border-white/10 bg-white/5 px-5 py-4 text-sm leading-6 text-[var(--color-copy)]">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell reveal-on-scroll">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Our Team</p>
              <h2 className="mt-3 font-display text-4xl text-[var(--color-ink)] sm:text-5xl">
                Meet the people behind the work.
              </h2>
            </div>
            <Link href="/about" className="button-tertiary">
              About Our Team
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {founders.map((founder) => (
              <article key={founder.name} className="group grid overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] sm:grid-cols-[0.75fr_1.25fr]">
                <div className="relative min-h-[14rem]">
                  <Image src={founder.image} alt={founder.name} fill sizes="(min-width: 640px) 32vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" style={{ objectPosition: founder.imagePosition }} />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold-bright)]">{founder.role}</p>
                  <h3 className="mt-3 font-display text-3xl text-[var(--color-ink)]">{founder.name}</h3>
                  <p className="mt-2 text-sm text-[var(--color-copy)]">{founder.experience}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell reveal-on-scroll">
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="eyebrow">How We Work</p>
              <h2 className="mt-3 font-display text-4xl text-[var(--color-ink)] sm:text-5xl">
                Simple steps from enquiry to site work.
              </h2>
            </div>
            <div className="grid gap-4 lg:col-span-2">
              {simpleProcess.map((item) => (
                <article key={item.step} className="glass-panel rounded-[1.5rem] p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">{item.step}</p>
                  <h3 className="mt-3 font-display text-3xl text-[var(--color-ink)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell reveal-on-scroll">
          <div className="mb-7 max-w-3xl">
            <p className="eyebrow">Budget Guidance</p>
            <h2 className="mt-3 font-display text-4xl text-[var(--color-ink)] sm:text-5xl">
              We discuss cost after scope is clear.
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-copy)]">
              Interior cost changes with measurements, materials, hardware, furniture, ceiling, lighting, and site condition. These ranges help clients start the right discussion.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {budgetGuidance.map((item) => (
              <article key={item.title} className="light-panel rounded-[1.5rem] p-6">
                <h3 className="font-display text-3xl text-[var(--color-card-ink)]">{item.title}</h3>
                <p className="mt-4 font-semibold text-[#6b4b21]">{item.range}</p>
                <p className="mt-3 text-sm leading-7 text-[rgba(33,27,22,0.76)]">{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell reveal-on-scroll">
          <div className="light-panel rounded-[2.4rem] p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="eyebrow text-[var(--color-gold)]">Let&apos;s Talk</p>
                <h2 className="mt-3 max-w-3xl font-display text-4xl text-[var(--color-card-ink)] sm:text-5xl">
                  Book a free consultation.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(33,27,22,0.78)]">
                  We will understand your requirement, location, space type, budget comfort, and whether a site visit is needed.
                </p>
                <div className="mt-6 grid gap-3 text-sm leading-6 text-[rgba(33,27,22,0.78)]">
                  <p>Call: {contactDetails.phone}</p>
                  <p>WhatsApp: {contactDetails.whatsapp}</p>
                  <p>Email: {contactDetails.email}</p>
                </div>
              </div>
              <QuickLeadForm context="a free consultation" theme="light" />
            </div>
          </div>
        </section>

        <section className="section-shell reveal-on-scroll">
          <div className="mb-7 max-w-3xl">
            <p className="eyebrow">Questions</p>
            <h2 className="mt-3 font-display text-4xl text-[var(--color-ink)] sm:text-5xl">
              Common questions before starting.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <article key={item.question} className="glass-panel rounded-[1.5rem] p-6">
                <h3 className="font-display text-2xl text-[var(--color-ink)]">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

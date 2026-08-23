import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { ServiceExplorer } from "@/components/ServiceExplorer";
import {
  contactDetails,
  founders,
  siteData,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Home",
  description: siteData.description,
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
          <div className="light-panel rounded-[2.4rem] p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="eyebrow text-[var(--color-gold)]">Let&apos;s Talk</p>
                <h2 className="mt-3 max-w-3xl font-display text-4xl text-[var(--color-card-ink)] sm:text-5xl">
                  Let us discuss your interior project.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[rgba(33,27,22,0.78)]">
                  We handle homes, kitchens, offices, renovations, furniture, and
                  commercial spaces across Andhra Pradesh and Hyderabad.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={contactDetails.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="button-whatsapp"
                >
                  WhatsApp Us
                </Link>
                <Link href="/book-free-session" className="button-light">
                  Book a Free Consultation
                </Link>
              </div>
            </div>
            <p className="mt-8 text-sm text-[rgba(33,27,22,0.7)]">
              Speak with {founders[0].name} and the Design Space and Infra team.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import Link from "next/link";
import { projectCaseStudies, siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Photos from selected interior and hospitality projects by ${siteData.companyName}.`,
};

export default function GalleryPage() {
  const galleryImages = projectCaseStudies.flatMap((project) =>
    project.images.map((image) => ({ ...image, projectName: project.name, city: project.city })),
  );

  return (
    <PageShell
      eyebrow="Gallery"
      title="Photos from selected projects."
      description="View available photos from our hotel, restaurant, and commercial interior work."
    >
      <section className="section-shell pt-6">
        <div className="mb-8 max-w-3xl space-y-3">
          <p className="eyebrow">Selected Project Photography</p>
          <h2 className="font-display text-4xl text-[var(--color-charcoal)] sm:text-5xl">
            Hotels, restaurants, and commercial spaces.
          </h2>
          <p className="text-base leading-8 text-[var(--color-muted)]">
            Selected project photos from Guntur, Narasaraopet, and Piduguralla.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <article
              key={image.src}
              className={`glass-panel overflow-hidden rounded-[2rem] ${index === 0 ? "md:col-span-2" : ""}`}
            >
              <div className={`relative ${index === 0 ? "min-h-[28rem]" : "min-h-[20rem]"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes={index === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 50vw"}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,13,11,0.02),rgba(16,13,11,0.62))]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
                    {image.city}
                  </p>
                  <p className="mt-2 font-display text-2xl text-white">{image.projectName}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="light-panel rounded-[2rem] p-8 sm:p-10">
          <p className="eyebrow text-[var(--color-gold)]">Your Project</p>
          <h2 className="mt-3 font-display text-4xl text-[var(--color-card-ink)] sm:text-5xl">Have a space in mind?</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[rgba(33,27,22,0.78)]">Share your location and requirement on WhatsApp. We will guide you on the right next step for your home or commercial project.</p>
          <Link href="/book-free-session" className="button-primary mt-7">Book a Free Consultation</Link>
        </div>
      </section>
    </PageShell>
  );
}

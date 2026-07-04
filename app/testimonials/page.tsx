import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { testimonials } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read simple, heartfelt testimonials that reflect the kind of support offered through Heal with Magic.",
};

export default function TestimonialsPage() {
  return (
    <PageShell
      eyebrow="Testimonials"
      title="Transformation felt in real life, not just in the session."
      description="These placeholder testimonials show the structure for social proof now, and can be swapped for your real client words later."
    >
      <section className="section-shell pt-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name + testimonial.result}
              className="rounded-[2rem] border border-white/70 bg-white/80 p-8"
            >
              <p className="text-lg leading-8 text-[var(--color-muted)]">
                "{testimonial.quote}"
              </p>
              <div className="mt-6">
                <p className="font-display text-3xl text-[var(--color-plum)]">
                  {testimonial.name}
                </p>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-gold)]">
                  {testimonial.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

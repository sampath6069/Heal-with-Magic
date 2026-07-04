import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Shamitha Venkat, certified healer and founder of Heal with Magic.",
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Heal with Magic is a sanctuary for feminine restoration."
      description="This space is designed for women who want to heal gently, grow with intention, and feel supported while creating new chapters in love, confidence, peace, and abundance."
    >
      <section className="section-shell pt-6">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-[0_24px_60px_rgba(122,79,106,0.1)] sm:p-6">
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <Image
                src="/shamitha-venkat-refined.png"
                alt="Portrait of Shamitha Venkat"
                width={1122}
                height={1536}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="px-2 pb-2 pt-5">
              <p className="font-display text-3xl text-[var(--color-plum)]">
                Shamitha Venkat
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[var(--color-gold)]">
                Certified Healer and IT Professional
              </p>
            </div>
          </div>

          <div className="grid gap-6">
          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-8">
            <h2 className="font-display text-4xl text-[var(--color-plum)]">
              Meet Shamitha Venkat
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              Shamitha Venkat is a certified healer who offers a warm,
              compassionate, and heart-led approach to personal transformation.
              She has been mentored by Mithesh Khatri and Indhu Khatri, and her
              work is rooted in helping women heal emotional pain, reconnect
              with their inner strength, and move forward with greater peace and
              clarity.
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              Alongside her healing path, Shamitha also works as an IT
              professional. This blend of intuition and grounded real-world
              experience allows her to support clients with both sensitivity and
              practicality. Her friendly and approachable nature helps create a
              safe space where women can feel comfortable, understood, and
              gently guided through their healing journey.
            </p>
          </div>
          <div className="rounded-[2rem] bg-[linear-gradient(150deg,rgba(248,226,234,0.92),rgba(255,248,241,0.95))] p-8">
            <h2 className="font-display text-4xl text-[var(--color-plum)]">
              Her healing philosophy
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              Heal with Magic was created as a nurturing space where healing
              feels gentle, empowering, and deeply personal. Shamitha believes
              that true transformation begins with love, self-awareness, and the
              willingness to release what no longer serves you.
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              Through every session, her intention is to help clients feel
              lighter, more confident, and more connected to the life they wish
              to create. Whether someone is working through emotional blocks,
              relationship pain, stress, or abundance challenges, her approach
              is always supportive, respectful, and centered on lasting inner
              change.
            </p>
          </div>
        </div>
        </div>
      </section>
    </PageShell>
  );
}

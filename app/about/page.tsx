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
      title="Heal with Magic is a gentle healing space built on trust, warmth, and practical emotional support."
      description="This space is designed for anyone who wants healing that feels compassionate, grounded, and easy to begin while creating new chapters in peace, confidence, love, and abundance."
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
              Mentored by Mithesh Khatri and Indhu Khatri, she created Heal with
              Magic for people who want emotional healing support that feels safe,
              personal, and genuinely caring.
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              Alongside her healing path, Shamitha also works as an IT
              professional. This blend of intuition and grounded real-world
              experience allows her to support clients with both sensitivity and
              practicality. Her friendly and approachable nature helps create a
              safe space where people can feel comfortable, understood, and
              gently guided through their healing journey.
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              Her intention is simple: to help each person feel lighter, more
              emotionally supported, and clearer about the next step forward.
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
          <div className="rounded-[2rem] border border-white/70 bg-white/82 p-8 shadow-[0_18px_46px_rgba(95,86,152,0.08)]">
            <p className="eyebrow">Why people connect with this work</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                "Warm and non-judgmental support",
                "Online guidance that feels personal",
                "A balance of intuition and practicality",
                "Healing paths for love, peace, and abundance",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] bg-[rgba(248,244,251,0.9)] px-5 py-4 text-sm uppercase tracking-[0.16em] text-[var(--color-plum)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>
    </PageShell>
  );
}

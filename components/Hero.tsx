import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(121,110,180,0.38),transparent_35%),radial-gradient(circle_at_15%_25%,rgba(198,220,217,0.2),transparent_24%),radial-gradient(circle_at_85%_18%,rgba(241,138,105,0.16),transparent_22%)]" />
      <div className="section-shell relative pb-8 pt-8 lg:pt-10">
        <div className="max-w-3xl space-y-6">
          <p className="eyebrow">Mystical Healing Experience</p>
          <h1 className="font-display text-5xl leading-none text-[var(--color-plum)] sm:text-6xl lg:text-7xl">
            Heal with Magic
          </h1>
          <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-gold)] sm:text-base">
            Gentle healing, manifestation, and transformation
          </p>
          <p className="max-w-2xl font-display text-xl leading-relaxed text-[var(--color-muted)] sm:text-2xl lg:text-3xl">
            Heal your past. Transform your present. Manifest your future.
          </p>
          <p className="max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
            Step into a calm and supportive healing space designed to help you
            feel lighter, more aligned, and more connected to the life you are
            ready to create.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="/contact" className="button-primary w-full sm:w-auto">
              Book a Free Session
            </Link>
            <Link href="/programs" className="button-secondary w-full sm:w-auto">
              Explore Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export function LogoMark({ mode = "light" }: { mode?: "light" | "dark" }) {
  const titleColor =
    mode === "dark" ? "text-white" : "text-[var(--color-plum-deep)]";
  const subtitleColor =
    mode === "dark" ? "text-[var(--color-gold-soft)]" : "text-[var(--color-gold)]";
  const bodyColor = mode === "dark" ? "text-white/72" : "text-[var(--color-muted)]";

  return (
    <div className="flex items-center gap-4">
      <div className="overflow-hidden rounded-[1.8rem] border border-white/90 bg-white p-2 shadow-[0_22px_48px_rgba(95,86,152,0.16)]">
        <Image
          src="/heal-with-magic-logo-white.jpg"
          alt="Heal with Magic logo"
          width={86}
          height={86}
          className="rounded-[1.2rem]"
          priority
        />
      </div>
      <div className="ornament-line">
        <p className={`font-display text-3xl leading-none sm:text-4xl ${titleColor}`}>
          Heal with Magic
        </p>
        <p className={`mt-1 text-[0.68rem] uppercase tracking-[0.28em] sm:text-[0.72rem] ${subtitleColor}`}>
          Soulful Healing and Transformation
        </p>
        <p className={`mt-1 text-xs ${bodyColor}`}>
          By Shamitha Venkat
        </p>
      </div>
    </div>
  );
}

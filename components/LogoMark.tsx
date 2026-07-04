import Image from "next/image";

export function LogoMark() {
  return (
    <div className="flex items-center gap-4">
      <div className="overflow-hidden rounded-[1.75rem] border border-white/80 bg-white p-2 shadow-[0_18px_40px_rgba(95,86,152,0.14)]">
        <Image
          src="/heal-with-magic-logo-white.jpg"
          alt="Heal with Magic logo"
          width={86}
          height={86}
          className="rounded-[1.2rem]"
          priority
        />
      </div>
      <div>
        <p className="font-display text-3xl leading-none text-[var(--color-plum)] sm:text-4xl">
          Heal with Magic
        </p>
        <p className="mt-1 text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-gold)] sm:text-[0.72rem]">
          Soulful Healing and Transformation
        </p>
        <p className="mt-1 text-xs text-[var(--color-muted)]">
          By Shamitha Venkat
        </p>
      </div>
    </div>
  );
}

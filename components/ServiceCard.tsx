type Service = {
  name: string;
  description: string;
};

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[0_24px_60px_rgba(122,79,106,0.1)]">
      <div className="mb-5 h-14 w-14 rounded-full bg-[linear-gradient(135deg,#f8d8e3,#fff7f0)]" />
      <h3 className="font-display text-3xl text-[var(--color-plum)]">
        {service.name}
      </h3>
      <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
        {service.description}
      </p>
    </article>
  );
}

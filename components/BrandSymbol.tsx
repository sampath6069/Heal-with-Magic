export function BrandSymbol({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 220 140"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gold-gradient" x1="20" y1="10" x2="200" y2="120">
          <stop offset="0%" stopColor="#e5c47b" />
          <stop offset="45%" stopColor="#c8953f" />
          <stop offset="100%" stopColor="#f1d79a" />
        </linearGradient>
      </defs>

      <path
        d="M103 28c0-11 8-18 17-18 8 0 14 5 16 12 2-7 8-12 16-12 10 0 18 7 18 18 0 17-16 26-34 42-19-16-33-25-33-42Z"
        stroke="url(#gold-gradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M29 84c0-24 19-42 42-42 22 0 35 17 49 33 14 16 24 29 40 29 17 0 31-13 31-30 0-18-13-31-31-31-19 0-34 16-49 32"
        stroke="url(#gold-gradient)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M191 84c0 24-19 42-42 42-22 0-35-17-49-33-14-16-24-29-40-29-17 0-31 13-31 30 0 18 13 31 31 31 19 0 34-16 49-32"
        stroke="url(#gold-gradient)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M70 62c10 2 18 10 28 20 3 3 6 6 9 9"
        stroke="url(#gold-gradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M150 62c-10 2-18 10-28 20-3 3-6 6-9 9"
        stroke="url(#gold-gradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}

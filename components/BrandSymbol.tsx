export function BrandSymbol({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 160 160"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="frame-gold" x1="18" y1="18" x2="140" y2="142">
          <stop offset="0%" stopColor="#e2c38a" />
          <stop offset="45%" stopColor="#b69058" />
          <stop offset="100%" stopColor="#8c693d" />
        </linearGradient>
      </defs>

      <rect
        x="18"
        y="18"
        width="124"
        height="124"
        rx="28"
        stroke="url(#frame-gold)"
        strokeWidth="5"
      />
      <path
        d="M48 112V48h34c18 0 30 11 30 28s-12 28-30 28H48Z"
        stroke="url(#frame-gold)"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M80 48v64"
        stroke="url(#frame-gold)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M108 48h6"
        stroke="url(#frame-gold)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M108 112h6"
        stroke="url(#frame-gold)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

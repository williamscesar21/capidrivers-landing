export default function Logo({ size = 40 }) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        className="drop-shadow-[0_0_10px_rgba(0,230,118,0.6)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#00E676" />
            <stop offset="1" stopColor="#00D26A" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="14" fill="#051912" stroke="#00E676" strokeOpacity="0.35" />
        <circle cx="32" cy="28" r="13" fill="url(#lg)" />
        {/* Glasses */}
        <rect x="20" y="24" width="10" height="6" rx="2" fill="#051912" />
        <rect x="34" y="24" width="10" height="6" rx="2" fill="#051912" />
        <rect x="30" y="26" width="4" height="2" fill="#051912" />
        {/* Snout */}
        <ellipse cx="32" cy="34" rx="4.5" ry="2.8" fill="#0B3B2E" />
        {/* Cap */}
        <path d="M19 20 Q32 10 45 20 L45 23 L19 23 Z" fill="#051912" />
        <circle cx="32" cy="16" r="1.8" fill="#F5C518" />
        {/* Car */}
        <path d="M14 50 L50 50 L46 58 L18 58 Z" fill="url(#lg)" opacity="0.85" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display font-black text-lg tracking-tight text-capi-cream">
          CAPI<span className="text-capi-neon">DRIVERS</span>
        </span>
        <span className="text-[10px] uppercase tracking-[0.25em] text-capi-neon/70 mt-0.5">
          24/7 Transfers
        </span>
      </div>
    </div>
  )
}

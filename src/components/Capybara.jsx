/**
 * Capybara mascot with MIB suit, cap and sunglasses.
 * Pure SVG illustration.
 */
export default function Capybara({ size = 220, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 260"
      className={className}
      aria-label="Mascota CAPIDRIVERS"
      role="img"
    >
      <defs>
        <linearGradient id="fur" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#8B5E3C" />
          <stop offset="1" stopColor="#5C3A21" />
        </linearGradient>
        <linearGradient id="suit" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#0f0f10" />
          <stop offset="1" stopColor="#000000" />
        </linearGradient>
        <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#00E676" stopOpacity="0.55" />
          <stop offset="1" stopColor="#00E676" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient glow behind */}
      <circle cx="120" cy="130" r="120" fill="url(#glow)" />

      {/* Body / suit */}
      <path
        d="M60 170 Q60 140 120 140 Q180 140 180 170 L186 250 L54 250 Z"
        fill="url(#suit)"
      />
      {/* Shirt */}
      <path d="M108 150 L120 172 L132 150 L132 200 L108 200 Z" fill="#F5F5F0" />
      {/* Tie */}
      <path d="M118 152 L122 152 L124 170 L120 195 L116 170 Z" fill="#00E676" />
      {/* Lapels */}
      <path d="M108 150 L90 200 L104 200 L118 160 Z" fill="#0a0a0a" />
      <path d="M132 150 L150 200 L136 200 L122 160 Z" fill="#0a0a0a" />

      {/* Head */}
      <ellipse cx="120" cy="100" rx="62" ry="54" fill="url(#fur)" />
      {/* Ears */}
      <ellipse cx="70" cy="66" rx="10" ry="13" fill="#5C3A21" />
      <ellipse cx="170" cy="66" rx="10" ry="13" fill="#5C3A21" />
      <ellipse cx="70" cy="68" rx="5" ry="7" fill="#3a2515" />
      <ellipse cx="170" cy="68" rx="5" ry="7" fill="#3a2515" />

      {/* Cap */}
      <path d="M60 70 Q120 30 180 70 L180 80 L60 80 Z" fill="#0a0a0a" />
      <path d="M60 78 L180 78 L190 92 L50 92 Z" fill="#111" />
      {/* Cap badge */}
      <circle cx="120" cy="60" r="7" fill="#F5C518" />
      <text x="120" y="64" textAnchor="middle" fontFamily="Sora, sans-serif" fontWeight="900" fontSize="9" fill="#051912">C</text>

      {/* Sunglasses */}
      <rect x="72" y="96" width="40" height="18" rx="5" fill="#050505" stroke="#00E676" strokeOpacity="0.3" />
      <rect x="128" y="96" width="40" height="18" rx="5" fill="#050505" stroke="#00E676" strokeOpacity="0.3" />
      <rect x="112" y="102" width="16" height="3" fill="#050505" />
      {/* Glare */}
      <rect x="78" y="100" width="10" height="3" fill="#00E676" opacity="0.7" />
      <rect x="134" y="100" width="10" height="3" fill="#00E676" opacity="0.7" />

      {/* Snout */}
      <ellipse cx="120" cy="128" rx="22" ry="14" fill="#a77b54" />
      {/* Nose */}
      <ellipse cx="120" cy="122" rx="5" ry="3.5" fill="#2a1808" />
      {/* Mouth */}
      <path d="M110 132 Q120 138 130 132" stroke="#2a1808" strokeWidth="1.8" fill="none" strokeLinecap="round" />

      {/* Earpiece (MIB style) */}
      <path d="M176 102 Q190 110 184 130" stroke="#222" strokeWidth="2" fill="none" />
      <circle cx="182" cy="98" r="3" fill="#333" />
    </svg>
  )
}

export default function Divider() {
  return (
    <div className="relative h-24 w-full" aria-hidden="true">
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full opacity-60"
      >
        <defs>
          <linearGradient id="divGrad" x1="0" x2="1">
            <stop offset="0%"   stopColor="#00E676" stopOpacity="0" />
            <stop offset="50%"  stopColor="#00E676" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#00E676" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 50 Q360 20 720 50 T1440 50"
          stroke="url(#divGrad)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  )
}

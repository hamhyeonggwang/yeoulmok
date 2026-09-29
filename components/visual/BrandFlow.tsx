export function BrandFlow({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none relative overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(120,205,232,.20),transparent_35%),radial-gradient(circle_at_55%_78%,rgba(24,159,208,.12),transparent_45%)]" />
      <svg className="flow-a absolute -bottom-[4%] -left-[16%] h-[82%] w-[138%]" viewBox="0 0 1200 470" fill="none" preserveAspectRatio="none">
        <path d="M-30 330C180 160 310 450 510 290C700 138 795 120 930 226C1030 304 1110 285 1240 155V520H-30V330Z" fill="url(#flow1)" />
        <defs>
          <linearGradient id="flow1" x1="32" y1="188" x2="1150" y2="346" gradientUnits="userSpaceOnUse">
            <stop stopColor="#DDF3FA" stopOpacity=".18" />
            <stop offset=".48" stopColor="#5FC2E2" stopOpacity=".34" />
            <stop offset="1" stopColor="#087CAF" stopOpacity=".22" />
          </linearGradient>
        </defs>
      </svg>
      <svg className="flow-b absolute -bottom-[11%] -left-[22%] h-[72%] w-[150%]" viewBox="0 0 1200 420" fill="none" preserveAspectRatio="none">
        <path d="M-60 285C130 168 305 350 474 253C666 143 790 86 934 193C1065 290 1138 262 1260 127" stroke="url(#flow2)" strokeWidth="32" strokeLinecap="round" opacity=".32" />
        <defs>
          <linearGradient id="flow2" x1="20" y1="280" x2="1190" y2="145" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" />
            <stop offset=".5" stopColor="#92D9EE" />
            <stop offset="1" stopColor="#fff" />
          </linearGradient>
        </defs>
      </svg>
      <svg className="absolute right-[7%] top-[9%] h-32 w-32 opacity-80" viewBox="0 0 160 160">
        <circle cx="80" cy="80" r="54" fill="#EAF7FC" />
        <circle cx="80" cy="80" r="35" fill="#fff" fillOpacity=".72" />
      </svg>
    </div>
  );
}

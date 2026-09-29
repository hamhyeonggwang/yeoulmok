import Link from "next/link";

function Wave({ className, opacity = 1 }: { className: string; opacity?: number }) {
  return (
    <svg className={`wave ${className}`} viewBox="0 0 1440 190" preserveAspectRatio="none" aria-hidden="true" style={{opacity}}>
      <defs>
        <linearGradient id={`wg-${className}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fff" stopOpacity=".85" />
          <stop offset="35%" stopColor="#bfe9f8" stopOpacity=".72" />
          <stop offset="72%" stopColor="#5ec7e8" stopOpacity=".62" />
          <stop offset="100%" stopColor="#fff" stopOpacity=".82" />
        </linearGradient>
      </defs>
      <path d="M-80 115 C180 15 310 190 520 105 C720 24 790 32 980 112 C1170 192 1290 54 1520 102 L1520 210 L-80 210 Z" fill={`url(#wg-${className})`} />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-visual" aria-hidden="true" />
      <div className="hero-fade" aria-hidden="true" />
      <Wave className="three" opacity={0.22} />
      <Wave className="two" opacity={0.36} />
      <Wave className="one" opacity={0.58} />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">YEOULMOK</p>
          <h1 className="hero-title">함께 살아가는 일상,<br />그 곁에 <strong>여울목</strong>이 있습니다.</h1>
          <p className="hero-description">지역사회 안에서 일상과 회복을 이어가는<br />정신장애인 남성 공동생활가정입니다.</p>
          <Link href="/about" className="hero-cta focus-ring">여울목 알아보기 <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <div className="hero-side" aria-hidden="true">
        <div className="hero-side-script">흐르는 삶,<br />함께하는 내일</div>
        <div className="hero-side-line" />
        <div className="hero-side-copy">일상이 모여<br />더 나은 내일이 됩니다.</div>
      </div>
    </section>
  );
}

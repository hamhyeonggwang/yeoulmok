import Link from "next/link";

export function AboutPreview() {
  return (
    <section className="about">
      <div className="container about-grid">
        <div className="about-copy">
          <p className="eyebrow">ABOUT YEOULMOK</p>
          <h2 className="about-title">여울목은<br />일상이 이어지는 곳입니다.</h2>
          <p className="about-text">우리의 각자의 속도로 살아가는 일상을 존중하며, 지역사회 안에서 함께 어울려 살아가는 삶을 지원합니다.</p>
          <Link className="outline-link focus-ring" href="/about">기관소개 보기 <span>→</span></Link>
        </div>
        <div className="about-image" role="img" aria-label="잔잔한 물결을 담은 여울목 브랜드 이미지" />
        <div className="about-quote">
          <div className="quote-mark">“</div>
          <div className="quote-text">혼자가 아닌,<br />함께 살아가는 일상.</div>
          <div className="quote-mark" style={{marginTop:4}}>”</div>
          <div className="quote-label">YEOULMOK</div>
        </div>
      </div>
    </section>
  );
}

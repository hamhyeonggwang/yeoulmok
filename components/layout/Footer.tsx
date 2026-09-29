import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-logo"><img src="/brand/logo.png" alt="여울목" /></div>
        <div className="footer-meta">경기도 (주소는 기관 확인 후 반영)<br />© 2026 여울목. All rights reserved.</div>
        <div className="footer-links"><Link href="/about">이용안내</Link><span>|</span><Link href="/">사이트맵</Link><span>|</span><Link href="/contact">연락처</Link></div>
        <div className="footer-slogan">오늘도,<br />좋은 흐름이 이어지기를</div>
      </div>
    </footer>
  );
}

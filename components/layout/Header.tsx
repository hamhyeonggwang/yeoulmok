"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  ["기관소개", "/about"],
  ["프로그램", "/programs"],
  ["후원안내", "/support"],
  ["알림마당", "/board"],
  ["오시는길", "/location"],
  ["문의하기", "/contact"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" aria-label="여울목 홈" className="focus-ring">
          <img src="/brand/logo.png" alt="여울목 정신장애인 남성 공동생활가정" className="brand-logo" />
        </Link>
        <nav className="desktop-nav" aria-label="주요 메뉴">
          {nav.map(([label, href]) => <Link key={href} href={href} className="focus-ring">{label}</Link>)}
        </nav>
        <button className="mobile-menu-button focus-ring" type="button" aria-label="메뉴 열기" aria-expanded={open} onClick={() => setOpen(v => !v)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
        </button>
        <nav className={`mobile-panel ${open ? "open" : ""}`} aria-label="모바일 메뉴">
          {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
      </div>
    </header>
  );
}

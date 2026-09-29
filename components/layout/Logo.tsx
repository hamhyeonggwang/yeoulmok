import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="logo-crop focus-ring" aria-label="여울목 홈으로 이동">
      {/* 원본 공식 로고의 넓은 흰 여백을 CSS viewport로만 잘라 표시합니다. 원본 파일은 변경하지 않습니다. */}
      <img src="/brand/yeoulmok-official-logo.jpg" alt="여울목 정신장애인 남성 공동생활가정" />
    </Link>
  );
}

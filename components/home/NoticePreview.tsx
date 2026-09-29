import Link from "next/link";
import { previewNotices } from "@/content/notices.mock";

export function NoticePreview() {
  return (
    <section className="notice">
      <div className="container notice-grid">
        <div>
          <p className="eyebrow">NOTICE</p>
          <h2 className="notice-title">여울목의 소식을<br />투명하게 전합니다.</h2>
          <p className="notice-copy">고시공고를 포함한 주요 소식을<br />빠르고 정확하게 안내합니다.</p>
          <Link href="/board" className="outline-link notice-link">알림마당 바로가기 <span>→</span></Link>
        </div>
        <div className="notice-list">
          {previewNotices.map(n => (
            <Link href="/board" className="notice-row" key={n.id}>
              <time className="notice-date">{n.publishedAt}</time>
              <span className={`notice-badge ${n.category === "disclosure" ? "disclosure" : ""}`}>{n.category === "disclosure" ? "고시공고" : "공지사항"}</span>
              <span className="notice-name">{n.title}</span>
              <span className="notice-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

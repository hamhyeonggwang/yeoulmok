import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { previewNotices } from "@/content/notices.mock";

export const metadata = { title: "알림마당" };

export default function BoardPage() {
  return (
    <>
      <PageIntro
        eyebrow="NOTICE"
        title="여울목의 소식을 투명하게 전합니다."
        description="공지사항과 고시공고를 한 곳에서 빠르고 명확하게 확인할 수 있도록 구성합니다."
      />
      <Container className="py-20">
        <div className="mb-8 flex flex-wrap gap-2">
          <button className="rounded-full bg-brand-700 px-5 py-2 text-sm font-semibold text-white">전체</button>
          <button className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm">공지사항</button>
          <button className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm">고시공고</button>
        </div>
        <div className="border-t border-black/10">
          {previewNotices.map((n) => (
            <article key={n.id} className="grid gap-2 border-b border-black/[0.08] py-6 md:grid-cols-[120px_100px_1fr]">
              <time className="text-sm text-muted">{n.publishedAt}</time>
              <span className="text-sm font-semibold text-brand-700">{n.category === "disclosure" ? "고시공고" : "공지사항"}</span>
              <h2 className="font-medium">{n.title}</h2>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs leading-5 text-muted">※ 현재 게시물은 디자인 시안용 예시이며 실제 기관 공지가 아닙니다.</p>
      </Container>
    </>
  );
}

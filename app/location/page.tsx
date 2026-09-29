import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";

export const metadata = { title: "오시는 길" };

export default function LocationPage() {
  return (
    <>
      <PageIntro eyebrow="LOCATION" title="여울목으로 오시는 길" description="주소와 교통편을 한눈에 확인할 수 있도록 구성합니다." />
      <Container className="grid gap-8 py-24 md:grid-cols-[1.2fr_.8fr]">
        <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[2rem] border border-brand-100 bg-brand-50">
          <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(8,124,175,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(8,124,175,.08)_1px,transparent_1px)] [background-size:42px_42px]" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-soft">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-brand-700"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/></svg>
          </div>
          <p className="absolute bottom-7 text-xs font-semibold tracking-[.2em] text-brand-700">MAP PREVIEW</p>
        </div>
        <div className="rounded-[2rem] border border-black/[0.08] bg-white p-8 md:p-10">
          <p className="eyebrow">ADDRESS</p>
          <h2 className="mt-5 text-2xl font-semibold">주소 및 교통안내</h2>
          <div className="mt-8 space-y-7 border-t border-black/[0.08] pt-7">
            <div><p className="text-sm text-muted">주소</p><p className="mt-2 font-medium">기관 확인 후 최종 반영</p></div>
            <div><p className="text-sm text-muted">대중교통</p><p className="mt-2 font-medium">지하철 · 버스 안내</p></div>
            <div><p className="text-sm text-muted">주차</p><p className="mt-2 font-medium">주차 안내</p></div>
          </div>
        </div>
      </Container>
    </>
  );
}

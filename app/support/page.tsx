import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";

export const metadata = { title: "후원안내" };

export default function SupportPage() {
  return (
    <>
      <PageIntro
        eyebrow="SUPPORT"
        title="여울목과 함께하는 방법"
        description="여울목의 일상을 함께 만들어가는 후원 방법을 간결하고 명확하게 안내합니다."
      />
      <Container className="grid gap-6 py-24 md:grid-cols-[.9fr_1.1fr]">
        <section className="rounded-[2rem] bg-brand-50 p-8 md:p-10">
          <p className="eyebrow">WITH YEOULMOK</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-.035em]">함께하는 마음이<br />일상으로 이어집니다.</h2>
          <p className="mt-6 max-w-md leading-8 text-muted">후원의 의미와 참여 방법을 소개하는 영역입니다. 최종 문구는 기관 확인 후 반영합니다.</p>
        </section>
        <section className="rounded-[2rem] border border-black/[0.08] bg-white p-8 md:p-10">
          <p className="text-sm font-semibold text-brand-700">후원 안내</p>
          <div className="mt-7 space-y-6 border-t border-black/[0.08] pt-7">
            <div><p className="text-sm text-muted">후원 방법</p><p className="mt-2 text-lg font-medium">기관 확인 후 최종 안내</p></div>
            <div><p className="text-sm text-muted">후원 계좌</p><p className="mt-2 text-lg font-medium">은행 · 계좌번호 · 예금주</p></div>
            <div><p className="text-sm text-muted">후원 문의</p><p className="mt-2 text-lg font-medium">전화 · 이메일</p></div>
          </div>
        </section>
      </Container>
    </>
  );
}

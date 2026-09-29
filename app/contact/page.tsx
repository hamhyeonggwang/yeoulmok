import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export const metadata = { title: "문의하기" };
export default function ContactPage() {
  return <><PageIntro eyebrow="CONTACT" title="궁금한 사항이 있으신가요?" description="개인정보를 수집하는 신청 폼 없이 전화와 이메일 연락처를 안내합니다." /><Container className="grid gap-5 py-24 md:grid-cols-3">{[["전화",site.contact.phone],["이메일",site.contact.email],["문의 가능 시간",site.contact.hours]].map(([k,v])=><div key={k} className="rounded-3xl border border-black/[0.08] bg-white p-8"><p className="text-sm font-semibold text-brand-700">{k}</p><p className="mt-4 text-lg font-medium">{v}</p></div>)}</Container></>;
}

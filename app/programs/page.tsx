import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { programs } from "@/content/programs";

export const metadata = { title: "프로그램" };
export default function ProgramsPage() {
  return <><PageIntro eyebrow="PROGRAMS" title="여울목에서 이어지는 일상" description="하루 일과와 실제 지원 프로그램 자료를 수급한 뒤 상세 콘텐츠를 연결합니다." /><Container className="grid gap-5 py-24 md:grid-cols-3">{programs.map((p)=><article key={p.id} className="rounded-3xl border border-black/[0.08] bg-white p-8"><p className="text-3xl font-semibold text-brand-500">{String(p.order).padStart(2,"0")}</p><h2 className="mt-7 text-2xl font-semibold">{p.title}</h2><p className="mt-4 leading-7 text-muted">{p.description}</p></article>)}</Container></>;
}

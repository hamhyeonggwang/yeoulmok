import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { aboutContent } from "@/content/about";

export const metadata = { title: "기관소개" };
export default function AboutPage() {
  return <><PageIntro eyebrow="ABOUT YEOULMOK" title={aboutContent.heroTitle} description="설립 이념, 운영 철학, 시설 기본정보와 연혁을 담는 페이지입니다." /><Container className="py-24"><h2 className="text-3xl font-semibold">{aboutContent.introTitle}</h2><p className="mt-5 max-w-2xl leading-8 text-muted">{aboutContent.intro}</p></Container></>;
}

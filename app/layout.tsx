import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: { default: "여울목 | 정신장애인 남성 공동생활가정", template: "%s | 여울목" },
  description: "지역사회 안에서 일상과 회복을 이어가는 정신장애인 남성 공동생활가정 여울목의 공식 홈페이지입니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body><Header/><main>{children}</main><Footer/></body></html>;
}

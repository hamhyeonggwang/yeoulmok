import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { EverydaySection } from "@/components/home/EverydaySection";
import { NoticePreview } from "@/components/home/NoticePreview";
import { ExploreSection } from "@/components/home/ExploreSection";
import { ContactBand } from "@/components/home/ContactBand";

export default function HomePage() {
  return <><Hero/><AboutPreview/><EverydaySection/><NoticePreview/><ExploreSection/><ContactBand/></>;
}

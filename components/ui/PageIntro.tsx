import { Container } from "@/components/ui/Container";
import { BrandFlow } from "@/components/visual/BrandFlow";

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-black/[0.05] bg-white py-20 md:py-28">
      <BrandFlow className="absolute -right-[10%] top-0 h-full w-[55%] opacity-50" />
      <Container className="relative">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-title mt-5 max-w-[760px] text-5xl font-semibold md:text-6xl">{title}</h1>
        {description && <p className="mt-6 max-w-[640px] text-[17px] leading-8 text-muted">{description}</p>}
      </Container>
    </section>
  );
}

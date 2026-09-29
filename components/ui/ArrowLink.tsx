import Link from "next/link";

export function ArrowLink({ href, children, variant = "text" }: { href: string; children: React.ReactNode; variant?: "text" | "button" }) {
  const styles = variant === "button"
    ? "inline-flex items-center gap-3 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
    : "inline-flex items-center gap-2 text-sm font-semibold text-brand-700";
  return (
    <Link href={href} className={`focus-ring arrow-shift ${styles}`}>
      <span>{children}</span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

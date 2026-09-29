import Link from "next/link";

const items = [
  { no:"01", title:"일상을 살아갑니다", desc:"스스로 선택하고 주도하는 일상을 만들어가는 과정을 지원합니다.", icon:"home" },
  { no:"02", title:"지역사회와 연결됩니다", desc:"지역사회 속에서 다양한 관계와 경험을 통해 더 넓은 세상과 이어집니다.", icon:"sprout" },
  { no:"03", title:"내일을 준비합니다", desc:"건강한 생활과 자립적인 삶을 위해 지금의 하루를 함께 만들어갑니다.", icon:"sun" },
] as const;

function Icon({name}:{name:string}) {
  if(name === "home") return <svg width="38" height="38" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M8 22 24 9l16 13v17H29V28H19v11H8V22Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>;
  if(name === "sprout") return <svg width="38" height="38" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 40V20M24 25c-9 0-13-6-13-13 8 0 13 5 13 13Zm0 6c10 0 15-7 15-15-9 0-15 6-15 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  return <svg width="38" height="38" viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2"/><path d="M24 5v7M24 36v7M5 24h7M36 24h7M10.5 10.5l5 5M32.5 32.5l5 5M37.5 10.5l-5 5M15.5 32.5l-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>;
}

export function EverydaySection() {
  return (
    <section className="programs">
      <div className="container programs-inner">
        <div className="section-head"><div><p className="eyebrow">OUR PROGRAMS</p><h2 className="section-title">여울목에서 이어지는 일상</h2></div><Link className="section-more" href="/programs">프로그램 더보기 →</Link></div>
        <div className="program-grid">
          {items.map(item => <article className="program-item" key={item.no}><div className="program-number">{item.no}</div><h3 className="program-name">{item.title}</h3><p className="program-desc">{item.desc}</p><div className="program-icon"><Icon name={item.icon}/></div></article>)}
        </div>
      </div>
    </section>
  );
}

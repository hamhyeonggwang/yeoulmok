import Link from "next/link";

const cards = [
  {title:"여울목 알아보기", sub:"기관소개 · 프로그램", href:"/about", type:"book"},
  {title:"후원 알아보기", sub:"후원방법 · 계좌안내", href:"/support", type:"heart"},
  {title:"찾아오는 길", sub:"위치 · 교통안내", href:"/location", type:"pin"},
] as const;
function Icon({type}:{type:string}){
  if(type === "heart") return <svg width="31" height="31" viewBox="0 0 32 32" fill="none"><path d="M16 27S4.5 20.2 4.5 11.8A6.3 6.3 0 0 1 16 8.1a6.3 6.3 0 0 1 11.5 3.7C27.5 20.2 16 27 16 27Z" stroke="currentColor" strokeWidth="1.8"/></svg>;
  if(type === "pin") return <svg width="31" height="31" viewBox="0 0 32 32" fill="none"><path d="M25 13c0 6.4-9 15-9 15S7 19.4 7 13a9 9 0 1 1 18 0Z" stroke="currentColor" strokeWidth="1.8"/><circle cx="16" cy="13" r="3" stroke="currentColor" strokeWidth="1.8"/></svg>;
  return <svg width="31" height="31" viewBox="0 0 32 32" fill="none"><path d="M5 6.5h8.5c2 0 3.5 1.5 3.5 3.5v16c0-2-1.5-3.5-3.5-3.5H5v-16Zm22 0h-8.5c-2 0-3.5 1.5-3.5 3.5v16c0-2 1.5-3.5 3.5-3.5H27v-16Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>;
}
export function ExploreSection(){
  return <section className="explore"><div className="container explore-panel"><div className="explore-heading"><p className="eyebrow">FOR YOU</p><h2 className="explore-title">무엇을 찾고 계신가요?</h2></div><div className="quick-grid">{cards.map(c=><Link className="quick-card" href={c.href} key={c.href}><span className="quick-icon"><Icon type={c.type}/></span><span><span className="quick-label">{c.title}</span><span className="quick-sub">{c.sub}</span></span><span className="quick-arrow">→</span></Link>)}</div></div></section>
}

# 여울목 홈페이지 — Static Build v1

승인된 디자인 시안을 실제 Next.js 구조로 옮긴 **정적 구현 마일스톤**입니다.

## 현재 구현 범위
- 승인된 Hero composition
- Hero 아래 3열 Program editorial layout
- 2열 Notice layout
- About 3열 구성
- Explore / Contact / Footer
- Desktop / Tablet / Mobile responsive layout
- 기관소개, 프로그램, 후원안내, 알림마당, 오시는길, 문의하기 Route 유지
- Mock notice data

## 의도적으로 아직 연결하지 않은 기능
- Supabase PostgreSQL
- Supabase Storage
- 게시판 CRUD / 상세 데이터 연동
- 관리자 Auth
- 실제 기관 연락처/주소/후원계좌

디자인·콘텐츠 최종 확인 후 Supabase 기능을 연결합니다.

## 실행
```bash
npm install
npm run dev
```

## 빌드
```bash
npm run build
npm start
```

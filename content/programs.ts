import type { Program } from "@/lib/types";

// 디자인 검토용 문구입니다. 기관의 실제 프로그램 자료 수급 후 교체합니다.
export const programs: Program[] = [
  {
    id: "everyday",
    order: 1,
    title: "일상을 살아갑니다",
    description: "자신의 하루를 선택하고 만들어가는 일상을 지원합니다.",
  },
  {
    id: "community",
    order: 2,
    title: "지역사회와 연결됩니다",
    description: "지역 안에서 다양한 관계와 경험을 이어갈 수 있도록 지원합니다.",
  },
  {
    id: "tomorrow",
    order: 3,
    title: "내일을 준비합니다",
    description: "보다 주도적인 삶을 준비하는 과정을 함께합니다.",
  },
];

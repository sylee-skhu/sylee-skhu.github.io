import type { Localized } from "../i18n/ui";

export interface ResearchProject {
  /** URL slug; also used as the detail-page route (/projects/<id>). */
  id: string;
  title: Localized;
  funder: Localized;
  role: Localized;
  period: string;
  status: "ongoing" | "completed";
  /** Optional one-line summary shown on the card. */
  summary?: Localized;
  /** Optional longer description shown on the detail page. Split into paragraphs on blank lines. */
  description?: Localized;
  /** Optional related links shown on the detail page. */
  links?: { label: string; href: string }[];
  /** Optional image filename in src/assets/projects/ (thumbnail auto-generated). */
  image?: string;
}

const PI: Localized = { en: "Principal Investigator", ko: "연구책임자" };

/**
 * To add a project, append an entry with a unique `id`. The detail page at
 * /projects/<id> is generated automatically from a fixed template — just fill
 * in `description`, `links`, etc. as needed. No per-project page authoring.
 */
export const projects: ResearchProject[] = [
  {
    id: "vlm-mot",
    title: {
      en: "A Study on Vision-Language-based Multi-Object Tracking",
      ko: "비전-언어 기반 다중 객체 추적에 관한 연구",
    },
    funder: { en: "Sungkonghoe University", ko: "성공회대학교" },
    role: PI,
    period: "2025.09 – 2027.08",
    status: "ongoing",
  },
  {
    id: "industrial-safety-monitoring",
    title: {
      en: "Real-time Monitoring of Hazardous Situations for Industrial Workers using Video-based AI",
      ko: "영상 AI 기반 산업현장 작업자 위험상황 실시간 모니터링 기술",
    },
    funder: { en: "Ministry of SMEs and Startups / TIPA", ko: "중소벤처기업부/중소기업기술정보진흥원" },
    role: PI,
    period: "2024.07 – 2026.12",
    status: "ongoing",
  },
  {
    id: "action-detection-2d-cnn",
    title: {
      en: "Making Action Detection Practical: Leveraging 2D CNNs for Real-Time and Online Applications",
      ko: "행동 탐지의 실용화: 실시간 및 온라인 응용을 위한 2D CNN 활용",
    },
    funder: { en: "Sungkonghoe University", ko: "성공회대학교" },
    role: PI,
    period: "2024.08 – 2025.07",
    status: "completed",
  },
  {
    id: "identity-theft-prevention",
    title: {
      en: "Development of Core Technology for Preventing Identity Theft",
      ko: "명의도용 사고방지를 위한 요소 기술 개발",
    },
    funder: { en: "SECUCHART GLOBAL Co., Ltd.", ko: "시큐차트글로벌(주)" },
    role: PI,
    period: "2023.05 – 2023.12",
    status: "completed",
  },
  {
    id: "context-aware-mot-tst",
    title: {
      en: "A Context-aware Multiple Object Tracking with Temporal Shifted Transformer",
      ko: "Temporal Shifted Transformer를 이용한 상황 인지 다중 물체 추적",
    },
    funder: { en: "Sungkonghoe University", ko: "성공회대학교" },
    role: PI,
    period: "2022.08 – 2023.07",
    status: "completed",
  },
  {
    id: "ai-integration-mot",
    title: {
      en: "Research on AI Integration Technology for Comprehensive Context-aware Multiple Object Tracking",
      ko: "포괄적 맥락 인식 기반 다중 물체 추적을 위한 AI 통합 기술 연구",
    },
    funder: { en: "Ministry of Science and ICT / NRF", ko: "과학기술정보통신부/한국연구재단" },
    role: PI,
    period: "2022.03 – 2024.02",
    status: "completed",
  },
];

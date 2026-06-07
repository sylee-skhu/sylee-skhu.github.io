export interface NewsItem {
  date: string; // YYYY-MM-DD
  type: "publication" | "project";
  en: string;
  ko: string;
}

/** Newest first. To add news, prepend an entry. */
export const news: NewsItem[] = [
  {
    date: "2026-01-18",
    type: "publication",
    en: "“Empowering Transformers Spectrally: Towards Comprehensive Pattern Learning for Image Demoiréing” was accepted to ICASSP 2026 (Barcelona, Spain).",
    ko: "「Empowering Transformers Spectrally: Towards Comprehensive Pattern Learning for Image Demoiréing」 논문이 ICASSP 2026 (스페인 바르셀로나)에 발표 논문으로 채택되었습니다.",
  },
  {
    date: "2025-09-26",
    type: "publication",
    en: "“StoneGAT: A Robust Fall Detection Framework via Skeleton-aware Graph Attention Networks” was accepted to the International Journal of Control, Automation, and Systems (IJCAS).",
    ko: "「StoneGAT: A Robust Fall Detection Framework via Skeleton-aware Graph Attention Networks」 논문이 International Journal of Control, Automation, and Systems (IJCAS)에 게재 승인되었습니다.",
  },
  {
    date: "2025-09-01",
    type: "project",
    en: "A new project, “A Study on Vision-Language-based Multi-Object Tracking,” began, supported by the Sungkonghoe University Research Grant 2025.",
    ko: "새 연구과제 「비전-언어 기반 다중 객체 추적에 관한 연구」를 시작했습니다 (지원: 성공회대학교).",
  },
  {
    date: "2025-08-01",
    type: "publication",
    en: "“StoneGAT: Skeleton-aware Graph Attention Networks for Robust Fall Detection from Single-frame Poses” was accepted to ICCAS 2025 (Incheon, Korea).",
    ko: "「StoneGAT: Skeleton-aware Graph Attention Networks for Robust Fall Detection from Single-frame Poses」 논문이 ICCAS 2025 (대한민국 인천)에 발표 논문으로 채택되었습니다.",
  },
  {
    date: "2025-05-19",
    type: "publication",
    en: "“Feature Refinement with Vision State Space Modules for Tiny Object Detection” was accepted to the Journal of Institute of Control, Robotics and Systems (ICROS).",
    ko: "「Feature Refinement with Vision State Space Modules for Tiny Object Detection」 논문이 제어·로봇·시스템학회 논문지(ICROS)에 게재 승인되었습니다.",
  },
  {
    date: "2024-12-17",
    type: "publication",
    en: "“DeepCampus: A Campus Tour Mobile Application Using Deep Learning-Based Vision Technologies” was accepted to the Transactions of the Korean Institute of Electrical Engineers (KIEE).",
    ko: "「DeepCampus: A Campus Tour Mobile Application Using Deep Learning-Based Vision Technologies」 논문이 대한전기학회 논문지(KIEE)에 게재 승인되었습니다.",
  },
  {
    date: "2024-11-11",
    type: "publication",
    en: "“Making MambaVision Temporal: Leveraging TSM for Efficient Video Understanding” was accepted to ICEIC 2025 (Osaka, Japan).",
    ko: "「Making MambaVision Temporal: Leveraging TSM for Efficient Video Understanding」 논문이 ICEIC 2025 (일본 오사카)에 발표 논문으로 채택되었습니다.",
  },
  {
    date: "2024-08-01",
    type: "project",
    en: "A new project, “Making Action Detection Practical: Leveraging 2D CNNs for Real-Time and Online Applications,” began, supported by the Sungkonghoe University Research Grant 2024.",
    ko: "새 연구과제 「행동 탐지의 실용화: 실시간 및 온라인 응용을 위한 2D CNN 활용」을 시작했습니다 (지원: 성공회대학교).",
  },
  {
    date: "2024-07-01",
    type: "project",
    en: "A new project on real-time video-AI monitoring of hazardous situations for industrial workers began, supported by the Ministry of SMEs and Startups / TIPA (Korea).",
    ko: "새 연구과제 「영상 AI 기반 산업현장 작업자 위험상황 실시간 모니터링 기술」을 시작했습니다 (지원: 중소벤처기업부/중소기업기술정보진흥원).",
  },
  {
    date: "2023-12-12",
    type: "publication",
    en: "“Making TSM Better: Preserving Foundational Philosophy for Efficient Action Recognition” was accepted to ICT Express.",
    ko: "「Making TSM Better: Preserving Foundational Philosophy for Efficient Action Recognition」 논문이 ICT Express에 게재 승인되었습니다.",
  },
  {
    date: "2023-05-01",
    type: "project",
    en: "A new project, “Development of Core Technology for Preventing Identity Theft,” began, supported by SECUCHART GLOBAL Co., Ltd.",
    ko: "새 연구과제 「명의도용 사고방지를 위한 요소 기술 개발」을 시작했습니다 (지원: 시큐차트글로벌(주)).",
  },
  {
    date: "2023-04-14",
    type: "publication",
    en: "“D-TSM: Discriminative Temporal Shift Module for Action Recognition” was accepted to UR 2023 (Hawaii, USA).",
    ko: "「D-TSM: Discriminative Temporal Shift Module for Action Recognition」 논문이 UR 2023 (미국 하와이)에 발표 논문으로 채택되었습니다.",
  },
  {
    date: "2022-10-17",
    type: "publication",
    en: "“Extended Siamese Convolutional Neural Networks for Discriminative Feature Learning” was accepted to the International Journal of Fuzzy Logic and Intelligent Systems (IJFIS).",
    ko: "「Extended Siamese Convolutional Neural Networks for Discriminative Feature Learning」 논문이 International Journal of Fuzzy Logic and Intelligent Systems (IJFIS)에 게재 승인되었습니다.",
  },
  {
    date: "2022-08-01",
    type: "project",
    en: "A new project, “A Context-aware Multiple Object Tracking with Temporal Shifted Transformer,” began, supported by the Sungkonghoe University Research Grant 2022.",
    ko: "새 연구과제 「Temporal Shifted Transformer를 이용한 상황 인지 다중 물체 추적」을 시작했습니다 (지원: 성공회대학교).",
  },
  {
    date: "2022-03-01",
    type: "project",
    en: "A new project on AI integration technology for comprehensive context-aware multiple object tracking began, supported by the Ministry of Science and ICT / NRF.",
    ko: "새 연구과제 「포괄적 맥락 인식 기반 다중 물체 추적을 위한 AI 통합 기술 연구」를 시작했습니다 (지원: 과학기술정보통신부/한국연구재단).",
  },
];

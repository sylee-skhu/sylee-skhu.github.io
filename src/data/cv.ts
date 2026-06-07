import type { Localized } from "../i18n/ui";

export interface EduNote {
  label: Localized;
  value: string;
  href?: string;
}

export interface EduItem {
  degree: Localized;
  institution: Localized;
  period: string;
  notes?: EduNote[];
}

export interface ExpItem {
  role: Localized;
  org: Localized;
  period: string;
  notes?: Localized[];
}

export interface AwardYear {
  year: string;
  items: Localized[];
}

export interface InterestGroup {
  area: Localized;
  items: Localized[];
}

export const education: EduItem[] = [
  {
    degree: { en: "Ph.D. in Electrical & Electronic Engineering", ko: "전기전자공학 박사" },
    institution: { en: "Yonsei University, Seoul, Korea", ko: "연세대학교, 서울" },
    period: "2011.09 – 2018.02",
    notes: [
      {
        label: { en: "Advisor", ko: "지도교수" },
        value: "Prof. Euntai Kim",
        href: "https://cilab.yonsei.ac.kr/",
      },
      {
        label: { en: "Dissertation", ko: "학위논문" },
        value:
          "Deep Neural Network based Discriminative Feature Learning and Its Application to Multiple Object Tracking",
        href: "https://uml.yonsei.ac.kr/search/detail/CATTOT000001892463#",
      },
    ],
  },
  {
    degree: { en: "B.S. in Electrical & Electronic Engineering", ko: "전기전자공학 학사" },
    institution: { en: "Yonsei University, Seoul, Korea", ko: "연세대학교, 서울" },
    period: "2007.03 – 2011.08",
  },
];

export const experience: ExpItem[] = [
  {
    role: { en: "Assistant Professor", ko: "조교수" },
    org: { en: "Sungkonghoe University, Seoul, Korea", ko: "성공회대학교, 서울" },
    period: "2021.09 – present",
    notes: [
      { en: "Division of Future Convergence", ko: "미래융합학부" },
      { en: "Division of Information Technology", ko: "IT융합자율학부" },
    ],
  },
  {
    role: { en: "Senior Researcher", ko: "책임연구원" },
    org: { en: "Samsung Research, Samsung Electronics", ko: "삼성전자 삼성리서치" },
    period: "2018.03 – 2021.08",
    notes: [
      { en: "Robot Center", ko: "로봇센터" },
      { en: "Autonomous Machine Lab", ko: "동작제어랩" },
    ],
  },
];

export const awards: AwardYear[] = [
  {
    year: "2024",
    items: [{ en: "2023 Performance Evaluation Award, Sungkonghoe University", ko: "2023년 업적평가 우수상, 성공회대학교" }],
  },
  {
    year: "2023",
    items: [{ en: "2022 Performance Evaluation Award, Sungkonghoe University", ko: "2022년 업적평가 우수상, 성공회대학교" }],
  },
];

export const interests: InterestGroup[] = [
  {
    area: { en: "Artificial Intelligence", ko: "인공지능" },
    items: [
      { en: "Deep Learning", ko: "딥러닝" },
      { en: "Generative Models", ko: "생성 모델" },
      { en: "Explainable AI", ko: "설명가능 인공지능" },
    ],
  },
  {
    area: { en: "Computer Vision", ko: "컴퓨터 비전" },
    items: [
      { en: "Multiple Object Tracking", ko: "다중 객체 추적" },
      { en: "Action Recognition", ko: "행동 인식" },
    ],
  },
  {
    area: { en: "Industrial Applications", ko: "산업 응용" },
    items: [
      { en: "Intelligent Robot", ko: "지능형 로봇" },
      { en: "Autonomous Driving", ko: "자율주행" },
    ],
  },
];

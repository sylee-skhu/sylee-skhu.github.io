import type { Localized } from "../i18n/ui";

export interface Social {
  name: string;
  href: string;
  icon: "email" | "scholar" | "orcid" | "github" | "linkedin" | "instagram";
}

export const site = {
  name: { en: "Sangyun Lee", ko: "이상윤" } satisfies Localized,
  role: { en: "Assistant Professor", ko: "조교수" } satisfies Localized,
  affiliation: {
    en: "Division of Future Convergence, Sungkonghoe University",
    ko: "성공회대학교 미래융합학부 인공지능전공",
  } satisfies Localized,
  email: "sylee@skhu.ac.kr",
  cvPdf: {
    en: "/pdf/CV_SangyunLee.pdf",
    ko: "/pdf/CV_SangyunLee_KR.pdf",
  } satisfies Localized,
  photo: "/img/sylee.jpg",
  photoCredit: {
    href: "https://www.instagram.com/forget_me_not_91/",
    name: "@forget_me_not_91",
  },
  bio: {
    en: [
      'I\'m an Assistant Professor in the Division of Future Convergence at <a href="https://www.skhu.ac.kr/">Sungkonghoe University</a>, Seoul, Republic of Korea. My research focuses on Artificial Intelligence, Computer Vision, and Robotics — from theoretical foundations to diverse industrial applications. I\'m passionate about integrating these technologies to advance our understanding and capabilities in the field.',
      'Before joining Sungkonghoe University, I was a Senior Researcher at Samsung Research, Samsung Electronics. I received my Ph.D. from Yonsei University in 2018 under the supervision of <a href="https://cilab.yonsei.ac.kr/">Prof. Euntai Kim</a>, with a <a href="https://uml.yonsei.ac.kr/search/detail/CATTOT000001892463#">dissertation</a> titled "Deep Neural Network based Discriminative Feature Learning and Its Application to Multiple Object Tracking."',
      "Outside of research, I enjoy running, playing League of Legends, and exploring the world of wines.",
    ],
    ko: [
      '서울 성공회대학교 <a href="https://www.skhu.ac.kr/">미래융합학부</a> 인공지능전공 조교수입니다. 인공지능, 컴퓨터 비전, 로보틱스를 중심으로 이론적 토대부터 다양한 산업 응용까지 폭넓게 연구하며, 이 기술들을 융합해 분야의 이해와 역량을 넓히는 데 관심이 많습니다.',
      '성공회대학교에 부임하기 전에는 삼성전자 삼성리서치에서 책임연구원으로 근무했습니다. 2018년 연세대학교에서 <a href="https://cilab.yonsei.ac.kr/">김은태 교수님</a>의 지도 아래 박사학위를 받았으며, 학위논문 제목은 <a href="https://uml.yonsei.ac.kr/search/detail/CATTOT000001892463#">「심층 신경망 기반 차별적 특징 학습과 다중 물체 추적으로의 응용」</a>입니다.',
      "연구 외에는 달리기와 리그 오브 레전드, 그리고 와인을 즐깁니다.",
    ],
  },
};

export const socials: Social[] = [
  { name: "Email", href: "mailto:sylee@skhu.ac.kr", icon: "email" },
  { name: "Google Scholar", href: "https://scholar.google.com/citations?user=7ahfpgsAAAAJ", icon: "scholar" },
  { name: "ORCID", href: "https://orcid.org/0000-0003-4842-5668", icon: "orcid" },
  { name: "GitHub", href: "https://github.com/sylee-skhu", icon: "github" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sangyun-lee-434b51125", icon: "linkedin" },
  { name: "Instagram", href: "https://www.instagram.com/sangyun.88", icon: "instagram" },
];

/** Author name highlighted (bolded) in publication lists. */
export const selfName = "Sangyun Lee";

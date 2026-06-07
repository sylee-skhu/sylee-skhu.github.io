export const languages = { en: "English", ko: "한국어" } as const;
export const defaultLang = "en";
export type Lang = keyof typeof languages;

export interface Localized {
  en: string;
  ko: string;
}

export function pick<T>(value: { en: T; ko: T }, lang: Lang): T {
  return value[lang];
}

export const ui = {
  en: {
    "site.name": "Sangyun Lee",
    "nav.home": "Home",
    "nav.publications": "Publications",
    "nav.projects": "Projects",
    "nav.people": "People",
    "nav.courses": "Courses",
    "nav.cv": "CV",
    "nav.news": "News",
    "nav.hobbies": "Hobbies",
    "home.selectedPublications": "Selected Publications",
    "home.viewAllPublications": "View all publications →",
    "home.news": "News",
    "home.viewAllNews": "View all news →",
    "home.photoBy": "Photo by",
    "pub.title": "Publications",
    "pub.description": "Main-author publications only. Reverse chronological order.",
    "pub.abstract": "Abstract",
    "pubtype.all": "All",
    "pubtype.intl_journal": "Int'l Journal",
    "pubtype.domestic_journal": "Domestic Journal",
    "pubtype.intl_conf": "Int'l Conference",
    "pubtype.domestic_conf": "Domestic Conference",
    "projects.title": "Research Projects",
    "projects.description": "Funded research projects as principal investigator.",
    "projects.ongoing": "Ongoing",
    "projects.completed": "Completed",
    "projects.role": "Role",
    "projects.funder": "Funded by",
    "projects.empty": "Project details will be added soon.",
    "projects.viewDetail": "Details →",
    "projects.back": "Back to projects",
    "people.title": "People",
    "people.description": "Dynamic Intelligence Laboratory (DILAB) — members of the research group.",
    "people.pi": "Principal Investigator",
    "people.members": "Members",
    "people.alumni": "Alumni",
    "people.join": "Join us",
    "people.joinText":
      "I'm always looking for motivated students interested in AI, computer vision, and robotics. Feel free to reach out by email.",
    "courses.title": "Courses",
    "courses.description": "Courses I have taught at Sungkonghoe University.",
    "cv.download": "Download PDF",
    "hobbies.title": "Hobbies",
    "hobbies.description": "A few things I enjoy outside research.",
    "hobbies.running": "Running",
    "hobbies.games": "Games",
    "common.present": "Present",
    "footer.builtWith": "Built with Astro.",
    "footer.hostedBy": "Hosted on GitHub Pages.",
    "theme.toggle": "Toggle theme",
    "lang.toggle": "한국어",
  },
  ko: {
    "site.name": "이상윤",
    "nav.home": "홈",
    "nav.publications": "논문",
    "nav.projects": "연구 프로젝트",
    "nav.people": "연구실",
    "nav.courses": "강의",
    "nav.cv": "CV",
    "nav.news": "소식",
    "nav.hobbies": "취미",
    "home.selectedPublications": "주요 논문",
    "home.viewAllPublications": "전체 논문 보기 →",
    "home.news": "소식",
    "home.viewAllNews": "전체 소식 보기 →",
    "home.photoBy": "사진",
    "pub.title": "논문",
    "pub.description": "주저자 논문만 정리했습니다. 최신순으로 정렬했습니다.",
    "pub.abstract": "초록",
    "pubtype.all": "전체",
    "pubtype.intl_journal": "국제학술지",
    "pubtype.domestic_journal": "국내학술지",
    "pubtype.intl_conf": "국제학술대회",
    "pubtype.domestic_conf": "국내학술대회",
    "projects.title": "연구 프로젝트",
    "projects.description": "연구책임자로 수행한 연구과제입니다.",
    "projects.ongoing": "진행 중",
    "projects.completed": "완료",
    "projects.role": "역할",
    "projects.funder": "지원기관",
    "projects.empty": "세부 내용은 추후 업데이트됩니다.",
    "projects.viewDetail": "자세히 →",
    "projects.back": "연구 프로젝트로 돌아가기",
    "people.title": "연구실",
    "people.description": "동적지능융합연구실(DILAB) 구성원입니다.",
    "people.pi": "지도교수",
    "people.members": "구성원",
    "people.alumni": "졸업생",
    "people.join": "함께하기",
    "people.joinText":
      "인공지능, 컴퓨터 비전, 로보틱스에 관심 있는 학생을 언제나 환영합니다. 이메일로 편하게 연락 주세요.",
    "courses.title": "강의",
    "courses.description": "성공회대학교에서 진행한 강의 목록입니다.",
    "cv.download": "PDF 내려받기",
    "hobbies.title": "취미",
    "hobbies.description": "연구 밖에서 즐기는 것들입니다.",
    "hobbies.running": "달리기",
    "hobbies.games": "게임",
    "common.present": "현재",
    "footer.builtWith": "Astro로 제작.",
    "footer.hostedBy": "GitHub Pages 호스팅.",
    "theme.toggle": "테마 전환",
    "lang.toggle": "English",
  },
} as const;

export type UIKey = keyof (typeof ui)["en"];

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split("/");
  if (seg && seg in languages) return seg as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key];
  };
}

/** Build an in-site href for a logical path, localized to `lang`. */
export function localizedPath(path: string, lang: Lang): string {
  const clean = path === "/" ? "" : path;
  return lang === defaultLang ? path || "/" : `/${lang}${clean}`;
}

/** Given the current pathname and language, return the equivalent path in the other language. */
export function alternateLangPath(pathname: string, current: Lang): string {
  if (current === defaultLang) {
    const clean = pathname === "/" ? "" : pathname;
    return `/ko${clean}`;
  }
  const stripped = pathname.replace(/^\/ko/, "");
  return stripped === "" ? "/" : stripped;
}

import type { Localized } from "../i18n/ui";

export interface Course {
  code: string;
  name: string;
}

export interface Term {
  term: Localized;
  items: Course[];
}

export const courses: Term[] = [
  {
    term: { en: "2026 Spring", ko: "2026 봄" },
    items: [
      { code: "FI00007-01", name: "인공지능문제해결" },
      { code: "XE00014-01", name: "인공지능캡스톤디자인" },
      { code: "XE00022-01", name: "인턴십1" },
      { code: "XE00023-01", name: "인턴십2" },
      { code: "XE00024-01", name: "인턴십3" },
      { code: "XE00025-01", name: "인턴십4" },
      { code: "AC00007-03", name: "인권과평화" },
    ],
  },
  {
    term: { en: "2025 Fall", ko: "2025 가을" },
    items: [
      { code: "FI00003-01", name: "데이터사이언스입문" },
      { code: "FI00006-01", name: "오픈소스SW개발" },
      { code: "XE00011-01", name: "인공지능문제해결" },
      { code: "XE00018-01", name: "강화학습" },
      { code: "XE00022-01", name: "인턴십1" },
      { code: "XE00023-01", name: "인턴십2" },
      { code: "XE00024-01", name: "인턴십3" },
      { code: "XE00025-01", name: "인턴십4" },
      { code: "AC00007-04", name: "인권과평화" },
    ],
  },
  {
    term: { en: "2025 Spring", ko: "2025 봄" },
    items: [
      { code: "FI00003-01", name: "데이터사이언스입문" },
      { code: "XE00007-01", name: "확률과랜덤변수" },
      { code: "XE00014-01", name: "인공지능캡스톤디자인" },
      { code: "AC00007-03", name: "인권과평화" },
    ],
  },
  {
    term: { en: "2024 Fall", ko: "2024 가을" },
    items: [
      { code: "XE00001-01", name: "데이터분석입문" },
      { code: "XE00010-01", name: "오픈소스SW개발" },
      { code: "XE00018-01", name: "강화학습" },
    ],
  },
  {
    term: { en: "2024 Spring", ko: "2024 봄" },
    items: [
      { code: "XE00007-01", name: "확률과랜덤변수" },
      { code: "XE00014-01", name: "인공지능캡스톤디자인" },
      { code: "XB00020-01", name: "Python프로젝트" },
      { code: "BF00002-01", name: "Python프로그래밍" },
      { code: "VI00017-01", name: "전공탐색세미나(인공지능전공)" },
      { code: "AK00089-15", name: "대학생활세미나 I" },
    ],
  },
  {
    term: { en: "2023 Fall", ko: "2023 가을" },
    items: [
      { code: "XE00001-01", name: "데이터분석입문" },
      { code: "XE00010-01", name: "오픈소스SW개발" },
      { code: "XE00011-01", name: "인공지능문제해결" },
      { code: "VI00019-01", name: "데이터기초수학1" },
      { code: "AK00060-24", name: "대학생활세미나 II" },
      { code: "AK00060-28", name: "대학생활세미나 II" },
    ],
  },
  {
    term: { en: "2023 Spring", ko: "2023 봄" },
    items: [
      { code: "XE00006-01", name: "딥러닝프레임워크" },
      { code: "XE00007-01", name: "확률과랜덤변수" },
      { code: "VI00001-04", name: "C프로그래밍" },
      { code: "VI00017-01", name: "전공탐색세미나(인공지능전공)" },
      { code: "AC00007-06", name: "인권과평화" },
      { code: "AC00012-24", name: "대학생활세미나 I" },
      { code: "AC00012-28", name: "대학생활세미나 I" },
    ],
  },
  {
    term: { en: "2022 Fall", ko: "2022 가을" },
    items: [
      { code: "XE00001-01", name: "데이터분석입문" },
      { code: "XE00001-02", name: "데이터분석입문" },
      { code: "VI00019-01", name: "데이터기초수학1" },
      { code: "AK00015-01", name: "인공지능과미래사회" },
    ],
  },
  {
    term: { en: "2022 Spring", ko: "2022 봄" },
    items: [
      { code: "XB00025-01", name: "인공지능" },
      { code: "VI00001-04", name: "C프로그래밍" },
      { code: "VI00002-01", name: "Python프로그래밍" },
      { code: "VI00017-01", name: "전공탐색세미나(인공지능전공)" },
      { code: "VI00019-01", name: "데이터기초수학1" },
      { code: "AC00007-07", name: "인권과평화" },
    ],
  },
  {
    term: { en: "2021 Fall", ko: "2021 가을" },
    items: [
      { code: "XB00002-01", name: "자료구조" },
      { code: "XB00026-02", name: "서버구축및형상관리" },
      { code: "VI00001-01", name: "C프로그래밍" },
    ],
  },
];

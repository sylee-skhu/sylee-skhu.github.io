import type { Localized } from "../i18n/ui";

export type Role = "pi" | "phd" | "ms" | "undergrad" | "alumni";

export interface Person {
  name: Localized;
  role: Role;
  title?: Localized;
  photo?: string;
  links?: { label: string; href: string }[];
  note?: Localized;
}

/**
 * To add a lab member, append an entry below. `role` controls the section it
 * appears in (pi / phd / ms / undergrad / alumni). Photos go in /public/img/.
 */
export const people: Person[] = [
  {
    name: { en: "Sangyun Lee", ko: "이상윤" },
    role: "pi",
    title: { en: "Assistant Professor", ko: "조교수" },
    photo: "sylee.jpg",
    links: [
      { label: "Email", href: "mailto:sylee@skhu.ac.kr" },
      { label: "Scholar", href: "https://scholar.google.com/citations?user=7ahfpgsAAAAJ" },
      { label: "GitHub", href: "https://github.com/sylee-skhu" },
    ],
  },
];

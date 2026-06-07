import type { Localized } from "../i18n/ui";

export interface PersonalItem {
  title: Localized;
  subtitle?: Localized;
  category: "running" | "game";
  date: string;
  /** Source image filename in src/assets/personal/ (thumbnail auto-generated). */
  image: string;
}

const PB: Localized = { en: "Personal Best", ko: "개인 최고기록" };

/** Newest first. Just drop one source image in src/assets/personal/ and add an entry. */
export const personal: PersonalItem[] = [
  { title: { en: "Half Marathon", ko: "하프 마라톤" }, subtitle: PB, category: "running", date: "2025-11-16", image: "251116_HALF.jpg" },
  { title: { en: "Full Marathon", ko: "풀 마라톤" }, subtitle: PB, category: "running", date: "2025-03-16", image: "250316_FULL.jpg" },
  { title: { en: "Full Marathon", ko: "풀 마라톤" }, category: "running", date: "2024-11-03", image: "241103_FULL.png" },
  { title: { en: "Full Marathon", ko: "풀 마라톤" }, category: "running", date: "2024-03-17", image: "240317_FULL.jpg" },
  { title: { en: "League of Legends", ko: "리그 오브 레전드" }, category: "game", date: "2023-12-28", image: "231228_LOL.png" },
  { title: { en: "10K", ko: "10K" }, subtitle: PB, category: "running", date: "2023-11-19", image: "231119_10K.jpg" },
  { title: { en: "Full Marathon", ko: "풀 마라톤" }, category: "running", date: "2023-11-05", image: "231105_FULL.png" },
  { title: { en: "Half Marathon", ko: "하프 마라톤" }, category: "running", date: "2023-10-08", image: "231008_HALF.jpg" },
  { title: { en: "Half Marathon", ko: "하프 마라톤" }, category: "running", date: "2023-04-30", image: "230430_HALF.jpg" },
  { title: { en: "Full Marathon", ko: "풀 마라톤" }, category: "running", date: "2023-03-19", image: "230319_FULL.jpg" },
];

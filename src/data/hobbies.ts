import type { Localized } from "../i18n/ui";

export type HobbyCategory = "sports" | "games" | "drinks";

export interface Hobby {
  /** URL slug; detail page at /hobbies/<id> when a gallery/description exists. */
  id: string;
  category: HobbyCategory;
  name: Localized;
  emoji: string;
  /** Short note shown on the card (e.g., personal records, rank). */
  note?: Localized;
  /** Optional longer text for the detail page. */
  description?: Localized;
  /** Pulls a photo gallery from src/data/personal.ts items of this category. */
  gallery?: "running" | "game";
}

/**
 * To add a hobby, append an entry. Cards with a `gallery` or `description`
 * become clickable and get a detail page automatically (fixed template).
 */
export const hobbies: Hobby[] = [
  {
    id: "running",
    category: "sports",
    name: { en: "Running", ko: "달리기" },
    emoji: "🏃",
    note: {
      en: "PB — Full 3:44:40 · Half 1:46:53 · 10K 0:45:45",
      ko: "개인 최고 — 풀 3:44:40 · 하프 1:46:53 · 10K 0:45:45",
    },
    gallery: "running",
  },
  {
    id: "soccer",
    category: "sports",
    name: { en: "Soccer", ko: "축구" },
    emoji: "⚽",
  },
  {
    id: "baseball",
    category: "sports",
    name: { en: "Baseball", ko: "야구" },
    emoji: "⚾",
  },
  {
    id: "lol",
    category: "games",
    name: { en: "League of Legends", ko: "리그 오브 레전드" },
    emoji: "🎮",
    note: { en: "Diamond rank", ko: "다이아몬드 티어" },
    gallery: "game",
  },
  {
    id: "whisky",
    category: "drinks",
    name: { en: "Whisky", ko: "위스키" },
    emoji: "🥃",
  },
  {
    id: "wine",
    category: "drinks",
    name: { en: "Wine", ko: "와인" },
    emoji: "🍷",
  },
  {
    id: "beer",
    category: "drinks",
    name: { en: "Beer", ko: "맥주" },
    emoji: "🍺",
  },
];

export const getHobby = (id: string): Hobby | undefined =>
  hobbies.find((h) => h.id === id);

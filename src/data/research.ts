import type { Localized } from "../i18n/ui";

export interface ResearchVideo {
  type: "youtube" | "vimeo";
  /** YouTube video id (e.g. "dQw4w9WgXcQ") or Vimeo id (e.g. "76979871"). */
  id: string;
  /** Optional caption shown under this video. */
  caption?: Localized;
  /** Optional thumbnail URL. Overrides auto-detection (YouTube: automatic; Vimeo: via oEmbed). */
  poster?: string;
}

export interface ResearchTopic {
  /** URL slug; detail page at /research/<id>. */
  id: string;
  title: Localized;
  /** Short one-liner shown on the card. */
  summary: Localized;
  /** Longer intro shown on the detail page. Split into paragraphs on blank lines. */
  description: Localized;
  /** One or more promo demo videos (YouTube/Vimeo). Leave empty until ready. */
  videos?: ResearchVideo[];
}

/**
 * To add a research topic, append an entry. Attach one or more demo videos via
 * `videos: [...]` once uploaded — the card thumbnail (first video) and the
 * detail-page players fill in automatically.
 *
 *   videos: [
 *     { type: "youtube", id: "VIDEO_ID_1", caption: { en: "Demo 1", ko: "데모 1" } },
 *     { type: "youtube", id: "VIDEO_ID_2" },
 *   ],
 */
export const research: ResearchTopic[] = [
  {
    id: "referring-multi-object-tracking",
    title: { en: "Referring Multi-Object Tracking", ko: "Referring Multi-Object Tracking" },
    summary: { en: "TBD.", ko: "TBD." },
    description: { en: "TBD.", ko: "TBD." },
    videos: [{ type: "vimeo", id: "1200507430" },
             { type: "vimeo", id: "1200513994" },
             { type: "vimeo", id: "1200513996" },],
  },
  {
    id: "image-demoiréing",
    title: { en: "Image Demoiréing", ko: "Image Demoiréing" },
    summary: { en: "TBD.", ko: "TBD." },
    description: { en: "TBD.", ko: "TBD." },
    videos: [{ type: "vimeo", id: "1200507432" }],
  },
  {
    id: "skeleton-online-action-detection",
    title: { en: "Skeleton-based Online Action Detection", ko: "Skeleton-based Online Action Detection" },
    summary: { en: "TBD.", ko: "TBD." },
    description: { en: "TBD.", ko: "TBD." },
    videos: [{ type: "vimeo", id: "1200507429" }],
  },
];

export const getResearchTopic = (id: string): ResearchTopic | undefined =>
  research.find((t) => t.id === id);

/** Embed URL for an iframe player. */
export function videoEmbedUrl(v: ResearchVideo): string {
  return v.type === "youtube"
    ? `https://www.youtube-nocookie.com/embed/${v.id}`
    : `https://player.vimeo.com/video/${v.id}`;
}

/** Thumbnail image URL for cards (YouTube only; undefined otherwise). */
export function videoThumbUrl(v?: ResearchVideo): string | undefined {
  return v && v.type === "youtube" ? `https://img.youtube.com/vi/${v.id}/hqdefault.jpg` : undefined;
}

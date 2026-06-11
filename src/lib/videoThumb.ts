import type { ResearchVideo } from "../data/research";

// Cache resolved Vimeo thumbnails within a single build run.
const cache = new Map<string, string | undefined>();

/**
 * Resolve a card thumbnail URL for a demo video (runs at build time).
 * - An explicit `poster` always wins.
 * - YouTube: predictable thumbnail URL (instant).
 * - Vimeo: no predictable URL, so fetch it once via the oEmbed API. Requires
 *   the video to be public / embeddable; otherwise falls back to a placeholder.
 */
export async function resolveThumb(v?: ResearchVideo): Promise<string | undefined> {
  if (!v) return undefined;
  if (v.poster) return v.poster;
  if (v.type === "youtube") return `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;

  const key = `vimeo:${v.id}`;
  if (cache.has(key)) return cache.get(key);

  let url: string | undefined;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 6000);
    try {
      const res = await fetch(
        `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${v.id}&width=640`,
        { signal: controller.signal },
      );
      if (res.ok) {
        const data = (await res.json()) as { thumbnail_url?: string };
        url = data.thumbnail_url;
      }
    } finally {
      clearTimeout(timer);
    }
  } catch {
    url = undefined;
  }
  cache.set(key, url);
  return url;
}

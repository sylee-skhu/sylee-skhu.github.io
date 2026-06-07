import type { ImageMetadata } from "astro";

/**
 * Maps an image filename to its imported ImageMetadata so Astro's build-time
 * pipeline can generate optimized, resized thumbnails (and WebP) automatically.
 *
 * => You only ever provide ONE source image. Drop it in the right
 *    src/assets/ folder and reference it by filename in the data files;
 *    thumbnails are generated for you. No manual thumbnail step.
 */

type ImgModule = { default: ImageMetadata };

const personalImages = import.meta.glob<ImgModule>(
  "/src/assets/personal/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
  { eager: true },
);
const publicationImages = import.meta.glob<ImgModule>(
  "/src/assets/publications/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
  { eager: true },
);
const peopleImages = import.meta.glob<ImgModule>(
  "/src/assets/people/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
  { eager: true },
);

function lookup(
  map: Record<string, ImgModule>,
  base: string,
  file?: string,
): ImageMetadata | undefined {
  if (!file) return undefined;
  return map[`${base}${file}`]?.default;
}

export const getPersonalImage = (file: string): ImageMetadata | undefined =>
  lookup(personalImages, "/src/assets/personal/", file);

export const getPublicationImage = (file?: string): ImageMetadata | undefined =>
  lookup(publicationImages, "/src/assets/publications/", file);

export const getPeopleImage = (file?: string): ImageMetadata | undefined =>
  lookup(peopleImages, "/src/assets/people/", file);

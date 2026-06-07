/**
 * A small, dependency-free BibTeX parser tailored to this site's papers.bib.
 *
 * It scans `@type{key, field = {value} | "value" | bare, ...}` entries,
 * handles balanced braces and quoted values, and maps the fields used by the
 * site to a typed `Publication`. To add a paper, just append a BibTeX entry to
 * `src/data/papers.bib` — no other code changes are needed.
 *
 * Recognized custom fields:
 *   pub_type = {intl_journal | domestic_journal | intl_conf | domestic_conf}
 *   pdf      = {filename.pdf}   (file placed in /public/pdf/) or a full URL
 *   selected = {true}          (also surfaced on the home page)
 *   preview  = {image.jpg}     (thumbnail in /src/assets/publications/)
 */

export type PubType = "intl_journal" | "domestic_journal" | "intl_conf" | "domestic_conf";

export interface Publication {
  key: string;
  type: string;
  pubType: PubType;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  month?: string;
  pages?: string;
  volume?: string;
  number?: string;
  abstract?: string;
  selected: boolean;
  preview?: string;
  links: { label: string; href: string }[];
}

interface BibEntry {
  type: string;
  key: string;
  fields: Record<string, string>;
}

function isSpace(c: string): boolean {
  return c === " " || c === "\t" || c === "\n" || c === "\r";
}

function readBraced(s: string, start: number): [string, number] {
  let depth = 0;
  let i = start;
  let out = "";
  for (; i < s.length; i++) {
    const ch = s[i];
    if (ch === "{") {
      depth++;
      if (depth === 1) continue;
    } else if (ch === "}") {
      depth--;
      if (depth === 0) {
        i++;
        break;
      }
    }
    out += ch;
  }
  return [out, i];
}

function readQuoted(s: string, start: number): [string, number] {
  let i = start + 1;
  let out = "";
  for (; i < s.length; i++) {
    if (s[i] === '"') {
      i++;
      break;
    }
    out += s[i];
  }
  return [out, i];
}

function readBare(s: string, start: number): [string, number] {
  let i = start;
  let out = "";
  while (i < s.length && s[i] !== "," && s[i] !== "}" && !isSpace(s[i])) {
    out += s[i];
    i++;
  }
  return [out, i];
}

function clean(value: string): string {
  return value
    .replace(/[{}]/g, "")
    .replace(/\\&/g, "&")
    .replace(/~/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeAuthor(a: string): string {
  const name = clean(a);
  if (name.includes(",")) {
    const [last, first] = name.split(",").map((p) => p.trim());
    return `${first} ${last}`.trim();
  }
  return name;
}

function splitAuthors(field: string | undefined): string[] {
  if (!field) return [];
  return field
    .split(/\s+and\s+/i)
    .map(normalizeAuthor)
    .filter(Boolean);
}

const MONTHS: Record<string, number> = {
  jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, june: 6,
  jul: 7, july: 7, aug: 8, sep: 9, sept: 9, oct: 10, nov: 11, dec: 12,
};

function monthIndex(month?: string): number {
  if (!month) return 0;
  const key = month.toLowerCase().slice(0, 3);
  return MONTHS[key] ?? 0;
}

function normalizePubType(raw: string | undefined, entryType: string): PubType {
  const v = (raw || "").toLowerCase().replace(/[\s-]+/g, "_");
  if (v === "intl_journal" || v === "international_journal") return "intl_journal";
  if (v === "domestic_journal" || v === "national_journal") return "domestic_journal";
  if (v === "intl_conf" || v === "intl_conference" || v === "international_conference") return "intl_conf";
  if (v === "domestic_conf" || v === "domestic_conference" || v === "national_conference") return "domestic_conf";
  // Fall back to inference from the BibTeX entry type.
  const e = entryType.toLowerCase();
  const isConf = e.includes("proceedings") || e === "conference";
  return isConf ? "intl_conf" : "intl_journal";
}

export function parseBibtex(input: string): BibEntry[] {
  const entries: BibEntry[] = [];
  const n = input.length;
  let i = 0;
  while (i < n) {
    while (i < n && input[i] !== "@") i++;
    if (i >= n) break;
    i++; // skip '@'
    let type = "";
    while (i < n && /[a-zA-Z]/.test(input[i])) {
      type += input[i];
      i++;
    }
    while (i < n && isSpace(input[i])) i++;
    if (input[i] !== "{") continue;
    i++; // skip '{'
    let key = "";
    while (i < n && input[i] !== "," && input[i] !== "}") {
      key += input[i];
      i++;
    }
    key = key.trim();

    const fields: Record<string, string> = {};
    while (i < n && input[i] !== "}") {
      if (input[i] === "," || isSpace(input[i])) {
        i++;
        continue;
      }
      let name = "";
      while (i < n && /[a-zA-Z0-9_\-]/.test(input[i])) {
        name += input[i];
        i++;
      }
      while (i < n && isSpace(input[i])) i++;
      if (input[i] !== "=") {
        while (i < n && input[i] !== "," && input[i] !== "}") i++;
        continue;
      }
      i++; // skip '='
      while (i < n && isSpace(input[i])) i++;
      let value = "";
      if (input[i] === "{") {
        [value, i] = readBraced(input, i);
      } else if (input[i] === '"') {
        [value, i] = readQuoted(input, i);
      } else {
        [value, i] = readBare(input, i);
      }
      if (name) fields[name.toLowerCase()] = value;
    }
    if (input[i] === "}") i++;
    entries.push({ type, key, fields });
  }
  return entries;
}

function buildLinks(f: Record<string, string>): { label: string; href: string }[] {
  const links: { label: string; href: string }[] = [];
  const doi = f.doi ? clean(f.doi) : "";
  const html = f.html ? clean(f.html) : "";
  const url = f.url ? clean(f.url) : "";
  const primary = html || url || (doi ? (doi.startsWith("http") ? doi : `https://doi.org/${doi}`) : "");
  if (primary) links.push({ label: doi ? "DOI" : "Link", href: primary });
  if (f.pdf) {
    const pdf = clean(f.pdf);
    links.push({ label: "PDF", href: pdf.startsWith("http") ? pdf : `/pdf/${pdf}` });
  }
  if (f.arxiv) links.push({ label: "arXiv", href: `https://arxiv.org/abs/${clean(f.arxiv)}` });
  if (f.code) links.push({ label: "Code", href: clean(f.code) });
  if (f.slides) links.push({ label: "Slides", href: clean(f.slides) });
  if (f.poster) links.push({ label: "Poster", href: clean(f.poster) });
  if (f.website) links.push({ label: "Website", href: clean(f.website) });
  const seen = new Set<string>();
  return links.filter((l) => (seen.has(l.href) ? false : (seen.add(l.href), true)));
}

function toPublication(e: BibEntry): Publication {
  const f = e.fields;
  const venue = clean(f.journal || f.booktitle || f.publisher || "");
  const pages = f.pages ? clean(f.pages).replace(/--/g, "–") : undefined;
  return {
    key: e.key,
    type: e.type.toLowerCase(),
    pubType: normalizePubType(f.pub_type, e.type),
    title: clean(f.title || "Untitled"),
    authors: splitAuthors(f.author),
    venue,
    year: parseInt(clean(f.year || "0"), 10) || 0,
    month: f.month ? clean(f.month) : undefined,
    pages,
    volume: f.volume ? clean(f.volume) : undefined,
    number: f.number ? clean(f.number) : undefined,
    abstract: f.abstract ? clean(f.abstract) : undefined,
    selected: clean(f.selected || "").toLowerCase() === "true",
    preview: f.preview ? clean(f.preview) : undefined,
    links: buildLinks(f),
  };
}

/** Parse the bib source into publications, newest first. */
export function getPublications(bib: string): Publication[] {
  return parseBibtex(bib)
    .filter((e) => e.key && e.fields.title)
    .map(toPublication)
    .sort((a, b) => b.year - a.year || monthIndex(b.month) - monthIndex(a.month));
}

/** Group publications by year (descending), preserving in-year order. */
export function groupByYear(pubs: Publication[]): { year: number; items: Publication[] }[] {
  const groups = new Map<number, Publication[]>();
  for (const p of pubs) {
    if (!groups.has(p.year)) groups.set(p.year, []);
    groups.get(p.year)!.push(p);
  }
  return [...groups.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([year, items]) => ({ year, items }));
}

/** Count publications per type, for filter badges. */
export function countByType(pubs: Publication[]): Record<PubType, number> {
  const counts: Record<PubType, number> = {
    intl_journal: 0,
    domestic_journal: 0,
    intl_conf: 0,
    domestic_conf: 0,
  };
  for (const p of pubs) counts[p.pubType]++;
  return counts;
}

import type { MarkdownHeading } from "astro";
export interface TocItem extends MarkdownHeading {
  subheadings: TocItem[];
}

export default function generateToc(headings: MarkdownHeading[]): TocItem[] {
  if (!headings || !headings.length) {
    return [];
  }

  const toc = [] as TocItem[];
  const parentHeadings = new Map();
  headings.forEach(h => {
    const heading = { ...h, subheadings: [] };
    parentHeadings.set(heading.depth, heading);
    // Change 2 to 1 if your markdown includes your <h1>
    if (heading.depth === 2) {
      toc.push(heading);
    } else {
      parentHeadings.get(heading.depth - 1).subheadings.push(heading);
    }
  });
  return toc;
}

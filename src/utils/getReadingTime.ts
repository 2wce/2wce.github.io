import { toString } from "mdast-util-to-string";
import getReadingTime from "reading-time";

interface Data {
  astro: {
    frontmatter: {
      readingTime: string;
    };
  };
}

export function remarkReadingTime() {
  return function (tree: any, { data }: { data: any }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    data.astro.frontmatter.readingTime = readingTime.text;
  };
}

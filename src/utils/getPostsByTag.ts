import type { CollectionEntry } from "astro:content";
import getSortedPosts from "./getSortedPosts";
import { slugifyAll } from "./slugify";

const getPostsByTag = async (posts: CollectionEntry<"blog">[], tag: string) => {
  if (!posts) {
    return [];
  }

  return getSortedPosts(
    posts.filter(post => slugifyAll(post.data.tags).includes(tag))
  );
};

export default getPostsByTag;

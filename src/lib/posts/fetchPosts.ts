import type { Post } from "./types";
import { parsePosts } from "./validate";

export const JSON_PLACEHOLDER_POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export type FetchPostsResult =
  | { ok: true; posts: Post[] }
  | { ok: false; message: string };

export async function fetchPosts(
  postsUrl: string = JSON_PLACEHOLDER_POSTS_URL,
  fetchImpl: typeof fetch = fetch
): Promise<FetchPostsResult> {
  try {
    const response = await fetchImpl(postsUrl, {
      headers: { Accept: "application/json" },
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      return {
        ok: false,
        message: `Failed to fetch posts (${response.status}).`
      };
    }

    const data: unknown = await response.json();
    const posts = parsePosts(data);

    return { ok: true, posts };
  } catch {
    return { ok: false, message: "Unable to load posts right now." };
  }
}

import type { Post } from "@/lib/posts/types";
import { PostCard } from "./PostCard";

type PostListProps = {
  posts?: Post[];
  error?: string;
};

export function PostList({ posts, error }: PostListProps) {
  if (error) {
    return (
      <p
        role="alert"
        className="rounded-xl border border-red-800/60 bg-red-950/40 p-4 text-red-200"
      >
        {error}
      </p>
    );
  }

  if (!posts || posts.length === 0) {
    return <p className="text-slate-300">No posts found.</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

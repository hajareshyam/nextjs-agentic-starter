import type { Post } from "@/lib/posts/types";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="rounded-xl border border-slate-700 bg-slate-800/60 p-5">
      <p className="text-xs uppercase tracking-wide text-slate-400">Post #{post.id}</p>
      <h2 className="mt-2 text-lg font-medium text-slate-100">{post.title}</h2>
      <p className="mt-2 whitespace-pre-line text-sm text-slate-300">{post.body}</p>
    </article>
  );
}

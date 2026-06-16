import type { Metadata } from "next";
import { PostList } from "@/components/blog";
import { Footer, Header } from "@/components/layout";
import { fetchPosts } from "@/lib/posts/fetchPosts";

export const metadata: Metadata = {
  title: "Blog | Next.js Boilerplate",
  description: "Posts from JSONPlaceholder"
};

export default async function BlogPage() {
  const result = await fetchPosts();

  return (
    <div className="flex min-h-dvh flex-col bg-slate-950 text-slate-50">
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
        <h1 className="mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">Blog</h1>
        <PostList
          posts={result.ok ? result.posts : undefined}
          error={result.ok ? undefined : result.message}
        />
      </main>
      <Footer />
    </div>
  );
}

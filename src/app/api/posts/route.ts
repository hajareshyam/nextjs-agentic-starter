import { NextResponse } from "next/server";
import { fetchPosts } from "@/lib/posts/fetchPosts";

export async function GET() {
  const result = await fetchPosts();

  if (!result.ok) {
    return NextResponse.json({ error: result.message }, { status: 502 });
  }

  return NextResponse.json({ posts: result.posts });
}

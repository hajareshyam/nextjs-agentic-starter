import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import BlogPage from "@/app/blog/page";
import { mockPosts } from "../fixtures/posts";

vi.mock("@/lib/posts/fetchPosts", () => ({
  fetchPosts: vi.fn()
}));

describe("BlogPage integration", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders blog heading and posts when fetch succeeds", async () => {
    const { fetchPosts } = await import("@/lib/posts/fetchPosts");
    vi.mocked(fetchPosts).mockResolvedValue({ ok: true, posts: mockPosts });

    const ui = await BlogPage();
    render(ui);

    expect(screen.getByRole("heading", { level: 1, name: "Blog" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: mockPosts[0].title })).toBeInTheDocument();
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders error state when fetch fails", async () => {
    const { fetchPosts } = await import("@/lib/posts/fetchPosts");
    vi.mocked(fetchPosts).mockResolvedValue({
      ok: false,
      message: "Unable to load posts right now."
    });

    const ui = await BlogPage();
    render(ui);

    expect(screen.getByRole("alert")).toHaveTextContent("Unable to load posts right now.");
  });
});

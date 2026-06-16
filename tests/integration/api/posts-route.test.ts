import { beforeEach, describe, expect, it, vi } from "vitest";
import { GET } from "@/app/api/posts/route";
import { mockPosts } from "../../fixtures/posts";

vi.mock("@/lib/posts/fetchPosts", () => ({
  fetchPosts: vi.fn()
}));

describe("GET /api/posts", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns posts on success", async () => {
    const { fetchPosts } = await import("@/lib/posts/fetchPosts");
    vi.mocked(fetchPosts).mockResolvedValue({ ok: true, posts: mockPosts });

    const response = await GET();

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ posts: mockPosts });
  });

  it("returns 502 when upstream fetch fails", async () => {
    const { fetchPosts } = await import("@/lib/posts/fetchPosts");
    vi.mocked(fetchPosts).mockResolvedValue({
      ok: false,
      message: "Unable to load posts right now."
    });

    const response = await GET();

    expect(response.status).toBe(502);
    await expect(response.json()).resolves.toEqual({
      error: "Unable to load posts right now."
    });
  });
});

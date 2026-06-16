import { describe, expect, it, vi } from "vitest";
import { fetchPosts } from "@/lib/posts/fetchPosts";
import { mockPosts } from "../../../fixtures/posts";

function createFetchResponse(body: unknown, status = 200) {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: async () => body
  } as Response;
}

describe("fetchPosts", () => {
  it("returns parsed posts on success", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(createFetchResponse(mockPosts));

    const result = await fetchPosts("https://example.com/posts", fetchImpl);

    expect(result).toEqual({ ok: true, posts: mockPosts });
    expect(fetchImpl).toHaveBeenCalledWith("https://example.com/posts", {
      headers: { Accept: "application/json" },
      next: { revalidate: 60 }
    });
  });

  it("returns an error when upstream responds with non-2xx status", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(createFetchResponse(null, 500));

    const result = await fetchPosts("https://example.com/posts", fetchImpl);

    expect(result).toEqual({
      ok: false,
      message: "Failed to fetch posts (500)."
    });
  });

  it("returns an error when upstream payload is invalid", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(createFetchResponse([{ id: 1 }]));

    const result = await fetchPosts("https://example.com/posts", fetchImpl);

    expect(result).toEqual({
      ok: false,
      message: "Unable to load posts right now."
    });
  });

  it("returns an error when the network request fails", async () => {
    const fetchImpl = vi.fn().mockRejectedValue(new Error("network down"));

    const result = await fetchPosts("https://example.com/posts", fetchImpl);

    expect(result).toEqual({
      ok: false,
      message: "Unable to load posts right now."
    });
  });
});

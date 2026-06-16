import { describe, expect, it } from "vitest";
import { isPost, parsePosts } from "@/lib/posts/validate";
import { mockPosts, singleMockPost } from "../../../fixtures/posts";

describe("post validation", () => {
  it("accepts a valid post object", () => {
    expect(isPost(singleMockPost)).toBe(true);
  });

  it("rejects objects with missing fields", () => {
    expect(isPost({ id: 1, title: "title", body: "body" })).toBe(false);
    expect(isPost({ userId: 1, title: "title", body: "body" })).toBe(false);
    expect(isPost({ userId: 1, id: 1, body: "body" })).toBe(false);
    expect(isPost({ userId: 1, id: 1, title: "title" })).toBe(false);
  });

  it("rejects non-object values", () => {
    expect(isPost(null)).toBe(false);
    expect(isPost("post")).toBe(false);
  });

  it("parses a valid posts array", () => {
    expect(parsePosts(mockPosts)).toEqual(mockPosts);
  });

  it("rejects non-array responses", () => {
    expect(() => parsePosts({})).toThrow("Posts response must be an array.");
  });

  it("rejects arrays with invalid items", () => {
    expect(() => parsePosts([{ id: 1 }])).toThrow("Posts response contains invalid items.");
  });
});

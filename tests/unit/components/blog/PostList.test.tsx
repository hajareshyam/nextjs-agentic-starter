import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PostList } from "@/components/blog";
import { mockPosts } from "../../../fixtures/posts";

describe("PostList", () => {
  it("renders multiple posts", () => {
    render(<PostList posts={mockPosts} />);

    expect(screen.getByRole("heading", { level: 2, name: mockPosts[0].title })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: mockPosts[1].title })).toBeInTheDocument();
  });

  it("renders empty state when no posts are provided", () => {
    render(<PostList posts={[]} />);

    expect(screen.getByText("No posts found.")).toBeInTheDocument();
  });

  it("renders error state when an error message is provided", () => {
    render(<PostList error="Unable to load posts right now." />);

    expect(screen.getByRole("alert")).toHaveTextContent("Unable to load posts right now.");
  });
});

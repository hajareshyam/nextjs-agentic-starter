import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PostCard } from "@/components/blog";
import { singleMockPost } from "../../../fixtures/posts";

describe("PostCard", () => {
  it("renders post title and body", () => {
    render(<PostCard post={singleMockPost} />);

    expect(screen.getByRole("heading", { level: 2, name: singleMockPost.title })).toBeInTheDocument();
    expect(screen.getByText(/quia et suscipit/)).toBeInTheDocument();
    expect(screen.getByText("Post #1")).toBeInTheDocument();
  });
});

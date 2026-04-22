import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the main hero heading", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Build Faster with Next.js Boilerplate" })
    ).toBeInTheDocument();
  });

  it("renders feature cards", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading", { level: 2, name: "Modern App Router" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Testing Ready" })).toBeInTheDocument();
  });
});

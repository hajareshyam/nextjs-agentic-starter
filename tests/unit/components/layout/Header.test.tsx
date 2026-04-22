import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "@/components/layout";

describe("Header", () => {
  it("renders brand link", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: "Next Boilerplate" })).toHaveAttribute("href", "/");
  });

  it("renders primary navigation links", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: "Features" })).toHaveAttribute("href", "#features");
    expect(screen.getByRole("link", { name: "Getting Started" })).toHaveAttribute(
      "href",
      "#getting-started"
    );
  });
});

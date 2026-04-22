import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "@/components/layout";

describe("Footer", () => {
  it("renders copyright with current year", () => {
    const year = new Date().getFullYear();
    render(<Footer />);
    expect(
      screen.getByText(new RegExp(`© ${year} Next Boilerplate\\. All rights reserved\\.`))
    ).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "@/app/page";

describe("HomePage integration", () => {
  it("renders page shell with header, main content, and footer", () => {
    render(<HomePage />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("links header anchors to sections rendered on page", () => {
    render(<HomePage />);

    const featuresLink = screen.getByRole("link", { name: "Features" });
    const gettingStartedLink = screen.getByRole("link", { name: "Getting Started" });

    expect(featuresLink).toHaveAttribute("href", "#features");
    expect(gettingStartedLink).toHaveAttribute("href", "#getting-started");
    expect(document.getElementById("features")).toBeInTheDocument();
    expect(document.getElementById("getting-started")).toBeInTheDocument();
  });
});

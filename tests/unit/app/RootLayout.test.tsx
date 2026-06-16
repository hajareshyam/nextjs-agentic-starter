import { describe, expect, it } from "vitest";
import { isValidElement } from "react";
import RootLayout, { metadata } from "@/app/layout";

describe("RootLayout", () => {
  it("exports page metadata", () => {
    expect(metadata).toEqual({
      title: "Next.js Boilerplate",
      description: "Basic Next.js app scaffold"
    });
  });

  it("renders an html document shell with children", () => {
    const output = RootLayout({
      children: <main>Content</main>
    });

    expect(isValidElement(output)).toBe(true);
    expect(output.type).toBe("html");
    expect(output.props.lang).toBe("en");

    const body = output.props.children;
    expect(isValidElement(body)).toBe(true);
    expect(body.type).toBe("body");
    expect(body.props.children.props.children).toBe("Content");
  });
});

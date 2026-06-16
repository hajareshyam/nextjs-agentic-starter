import { expect, test } from "@playwright/test";
import { mockPosts } from "../fixtures/posts";

test("blog nav link opens the blog page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Blog" }).click();

  await expect(page).toHaveURL("/blog");
  await expect(page.getByRole("heading", { level: 1, name: "Blog" })).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 2, name: mockPosts[0].title })
  ).toBeVisible();
});

test("blog page loads posts from the live API", async ({ page }) => {
  await page.goto("/blog");

  await expect(page.getByRole("heading", { level: 1, name: "Blog" })).toBeVisible();
  await expect(page.getByText("Post #1", { exact: true })).toBeVisible();
  await expect(page.getByRole("article").first()).toBeVisible();
});

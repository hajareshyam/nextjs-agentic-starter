import { expect, test } from "@playwright/test";

test("home page renders key content and layout sections", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { level: 1, name: "Build Faster with Next.js Boilerplate" })
  ).toBeVisible();
  await expect(page.getByRole("banner")).toBeVisible();
  await expect(page.getByRole("contentinfo")).toBeVisible();
});

test("header links navigate to in-page anchors", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "Features" }).click();
  await expect(page).toHaveURL(/#features$/);

  await page.getByRole("link", { name: "Getting Started" }).click();
  await expect(page).toHaveURL(/#getting-started$/);
});

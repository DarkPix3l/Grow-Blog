import { test, expect } from "@playwright/test";


test("user visit the homepage", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.goto("http://localhost:3000", { timeout: 10000 });
  expect(page).toBeTruthy();

  const title = page.getByText("grow blog/_");
  expect(title).toBeVisible();


  const firstLink = page.getByRole("link").filter({ hasText: "TechCreating Custom Fonts in" });
  await firstLink.click();
  await expect(page).toHaveURL("http://localhost:3000/custom-font");
});

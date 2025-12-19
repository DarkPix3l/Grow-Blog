import { test, expect } from "@playwright/test";

test("user visit the homepage", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.goto("http://localhost:3000", { timeout: 10000 });
  expect(page).toBeTruthy();

  // header
  const logos = page.getByAltText("the Blog's Logo");
  expect(logos).toHaveCount(2);

  await page.getByRole("link", { name: "link1" }).click();
  await page.getByRole("link", { name: "link2" }).click();
  await page.getByRole("link", { name: "link3" }).click();
  await page.getByRole("link", { name: "Change language" }).click();
  await page.getByRole("link", { name: "Toggle theme" }).click();

  //Main title
  const title = page.getByText("grow blog/_");
  expect(title).toBeVisible();

  //description
  const message = page.getByText("A blog platform built for the world.");
  expect(message).toBeVisible();

  //CTA bar
  await page.getByRole("link", { name: "start writing" }).click();
  await page.getByRole("link", { name: "content your way" }).click();

  //Articles section h2
  const latestPosts = page.getByText("Latest Posts");
  expect(latestPosts).toBeVisible();

  //article cards
  const articleCards = page.getByRole("article");
  expect(articleCards).toHaveCount(4);

  const count = await articleCards.count(); //returns number, not locator

  for (let i = 0; i < count; i++) {
    const card = articleCards.nth(i);

    const locators = [
      card.getByTestId("categoryField"),
      card.getByTestId("cardTitle"),
      card.getByAltText("author picture"),
      card.getByText("written by"),
    ];

    for (const locator of locators) {
      await expect(locator).toBeVisible();
    }
  }

  const firstLink = page.getByRole("link").filter({ hasText: "TechCreating Custom Fonts in" });
  await firstLink.click();
  await expect(page).toHaveURL("http://localhost:3000/custom-font");
});

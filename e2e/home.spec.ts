import { test, expect } from '@playwright/test'

test('user visit the homepage', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })

  await page.goto("/", { timeout: 10000 });
  expect(page).toBeTruthy();

    // header
    const logos = page.getByAltText("the Blog's Logo")
    expect(logos).toHaveCount(2)

    await page.getByRole('link', { name: 'link1' }).click()
    await page.getByRole('link', { name: 'link2' }).click()
    await page.getByRole('link', { name: 'link3' }).click()
    await page.getByRole('link', { name: 'Change language' }).click()
    await page.getByRole('link', { name: 'Toggle theme' }).click()

    //Main title
    const title = page.getByText('grow blog/_')
    expect(title).toBeVisible()

    //description
    const message = page.getByText('A blog platform built for the world.')
    expect(message).toBeVisible()

    //CTA bar
    await page.getByRole('link', { name: 'start writing' }).click()
    await page.getByRole('link', { name: 'content your way' }).click()

    //Articles section h2
    const latestPosts = page.getByText('Latest Posts')
    expect(latestPosts).toBeVisible()

    //article cards
    const articleCards = page.getByRole('article')
    expect(articleCards).toHaveCount(4)

    // testing the first card about elements visibility
    await expect(articleCards.getByTestId('categoryField').first()).toBeVisible()
    await expect(articleCards.getByTestId('cardTitle').first()).toBeVisible()
    await expect(articleCards.getByAltText('author picture').first()).toBeVisible()
    await expect(articleCards.getByText('written by').first()).toBeVisible()

    await page.getByRole('link').filter({ hasText: 'tech nextjs custom fonts' }).click()
    await expect(page).toHaveURL('http://localhost:3000/creating-custom-fonts-in-next-js')
})

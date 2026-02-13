import { test, expect } from '@playwright/test'

test('user visit the homepage', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 })

  await page.goto('/', { timeout: 10000 })
  expect(page).toBeTruthy()

  // header
  const header = page.locator('header').filter({ visible: true })
  const logos = header.getByAltText("the Blog's Logo")
  expect(logos).toHaveCount(1)

  await header.getByRole('link', { name: 'Home' }).click()
  await page.getByRole('link', { name: 'Categories' }).click()
  await page.getByRole('link', { name: 'Mood' }).click()
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
  //Unfortunately also the number of the cards can change. Getting the first
  const firstCard = page.getByRole('article').first()

  // testing the first card about elements visibility
  await expect(firstCard.getByTestId('categoryField').first()).toBeVisible()
  await expect(firstCard.getByTestId('cardTitle').first()).toBeVisible()
  await expect(firstCard.getByAltText('author picture').first()).toBeVisible()
  await expect(firstCard.getByText('written by').first()).toBeVisible()

  // I'm replacing the previous link test because the latest posts will always change.
  // Going for a more content-agnostic approach, more suitable for this CMS's "living content."
  const firstLink = firstCard.getByRole('link')
  const href = await firstLink.getAttribute('href')
  await firstLink.click()
  await expect(page).toHaveURL(new RegExp(`${href}`))

  // const footer = page.locator('footer, [role="contentinfo"]');
})

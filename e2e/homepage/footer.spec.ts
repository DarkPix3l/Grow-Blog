// footer.spec.ts
// Focuses on UI visibility and navigation
// Ensures that the navigation sections are visible
// Asserts that there are 3 nav elements
// Checks that each section has a title and a list
// Ensures the <ul> contains 4 list items
// Click test for a list item

import { test, expect } from '@playwright/test'

test.describe('Categories Section Content & Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('it should display Footer content @desktop', async ({ page }) => {
    const footer = page.getByLabel('Site Footer')
    const footerNav = footer.locator('nav')
    await expect(footerNav.first()).toBeVisible()
    await expect(footerNav).toHaveCount(3)
    await expect(footerNav.first().locator('h3')).not.toBeEmpty()
    await expect(footerNav.first().locator('ul')).not.toBeEmpty()
    await expect(footerNav.first().locator('ul > li')).toHaveCount(4)

    const siteName = footer.locator('h3').getByText('Grow Blog')
    await expect(siteName).toBeVisible()
  })

  test('links should click @desktop', async ({ page }) => {
    const footer = page.getByLabel('Site Footer')
    const navigationLink = footer.locator('li').getByText('Home')
    await navigationLink.click()
    await expect(page).toHaveURL('/')
  })
})

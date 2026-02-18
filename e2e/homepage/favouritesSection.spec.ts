// favouritesSection.spec.ts
// Focuses on UI visibility and navigation
// Makes sure the badge is at place
// Makes sure the are five badges

import { test, expect } from '@playwright/test'

test.describe('Favourites Section Content & Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('it should display Favourites Section content @desktop', async ({ page }) => {
    const favouritesSection = page.locator('#favourites_section')
    const badge = favouritesSection.getByTestId('badge')
    await expect(badge.first()).toBeAttached()
    await expect(badge).toHaveCount(5)
  })
})

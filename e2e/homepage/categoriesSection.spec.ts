// categoriesSection.spec.ts
// Focuses on UI visibility and navigation
// Makes sure the mini card layout has all elements at place
// Includes content-agnostic assertions for dynamic CMS data (Latest Posts)
// to ensure test stability as articles and categories change.
// resolve dynamic url problem by getting the href attribute

import { test, expect } from '@playwright/test'

test.describe('Categories Section Content & Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('it should display Categories Section content @desktop', async ({ page }) => {
    const categoriesSection = page.locator('#categories_section')

    const dekoHeading = categoriesSection.getByRole('heading', { name: 'blog', exact: true }).first()
    await expect(dekoHeading).toBeAttached()

    const categoriesHeading = categoriesSection.getByRole('heading', { name: 'Browse by Topic' })
    await expect(categoriesHeading).toBeVisible()
    await expect(categoriesHeading).toHaveText('Browse by Topic')

    const categoriesDescription = categoriesSection.getByText('Looking for something specific?')
    await expect(categoriesDescription).toBeVisible()

    const firstCategory = categoriesSection.getByRole('heading', { name: 'Tech', exact: true })
    const secondCategory = categoriesSection.getByRole('heading', { name: 'Next Js', exact: true })
    const thirdCategory = categoriesSection.getByRole('heading', { name: 'Career', exact: true })

    await expect(firstCategory).toBeVisible()
    await expect(secondCategory).toBeVisible()
    await expect(thirdCategory).toBeVisible()

    //cartegories section cards
    const firstCardBody = categoriesSection.getByRole('article').first()
    await expect(firstCardBody.getByTestId('cardTitle').first()).toBeVisible()
    await expect(firstCardBody.getByAltText('author picture').first()).toBeVisible()
    await expect(firstCardBody.getByText('written by').first()).toBeVisible()
  })

  test('Categories Section Article Card should be clickable @desktop', async ({ page }) => {
    const categoriesSection = page.locator('#categories_section')
    const firstCard = categoriesSection.getByTestId('cardLink').first()

    const href = await firstCard.getAttribute('href')
    await firstCard.click()
    await expect(page).toHaveURL(new RegExp(`${href}`))
  })

  test('it has the deko text not selectable @desktop', async ({ page }) => {
    const categoriesSection = page.locator('#categories_section')
    const dekoHeading = categoriesSection.getByRole('heading', { name: 'blog' })
    await expect(dekoHeading).toHaveCSS('user-select', 'none')
  })
})

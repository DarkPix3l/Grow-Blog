// moodSection.spec.ts
// Focuses on UI visibility and navigation.
// Ensures visibility for section heading, article card elements
// (compact layout), decoration section, and weather widget elements.
// Weather widget elements are tested for structure and the existence of data,
// as the content is generated dynamically.
// Filter specificity for article locators.
// Verifies article cards are clickable
// Verifies decorative elements are non-selectable

import { test, expect } from '@playwright/test'

test.describe('Intro Section Content & Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'commit' })
  })

  test('it should display Mood Section content @desktop', async ({ page }) => {
    const moodSection = page.locator('#mood-section')
    //heading
    const heading = moodSection.getByText('Weather mood Pickup')
    await expect(heading).toBeVisible()
    //description
    const paragraph = moodSection.getByText(/Whether/)
    await expect(paragraph).toBeVisible()

    //article card
    const firstCardBody = moodSection.getByRole('article').filter({ hasText: 'written by' }).first()

    // testing the first card about elements visibility
    await expect(firstCardBody.getByTestId('cardTitle').first()).toBeAttached()
    await expect(firstCardBody.getByAltText('author picture').first()).toBeVisible()
    await expect(firstCardBody.getByText('written by').first()).toBeVisible()
    await expect(firstCardBody.getByText('go to article').first()).toBeVisible()

    //Deko
    const dekoHeading = moodSection.getByText('hsdgjhsfgjs')
    await expect(dekoHeading).toBeAttached()
    await expect(dekoHeading).toHaveClass(/anton/) //right font

    //Weather Widget - has dynamic data
    const weatherWidget = moodSection.locator('article').filter({ has: page.locator('address') })
    //Check Date/Time
    await expect(weatherWidget.locator('h2').first()).not.toBeEmpty()
    await expect(weatherWidget.locator('time').first()).toBeVisible()

    // Check Location (City and Country)
    const address = weatherWidget.locator('address')
    await expect(address).toBeVisible()
    await expect(address.locator('p')).not.toBeEmpty()

    //Check Weather Figure (Icon and Temperature)
    const figure = weatherWidget.locator('figure')
    // Check temperature pattern (Number + °C)
    await expect(figure.locator('h2')).toContainText(/°C/)
    // Check situation text (e.g., "Clear", "Cloudy")
    await expect(figure.locator('figcaption p')).not.toBeEmpty()
    await expect(figure.locator('time')).not.toBeEmpty()
  })

  test('mood Section Article Card should be clickable @desktop', async ({ page }) => {
    const moodSection = page.locator('#mood-section')
    // The sest has difficulty checking the first card due to negative margin overlap. Selecting the 4th instead.
    const secondCard = moodSection.getByTestId('cardLink').nth(3)

    const href = await secondCard.getAttribute('href')
    await secondCard.click()
    await expect(page).toHaveURL(new RegExp(`${href}`))
  })

  test('it has the deko text not selectable @desktop', async ({ page }) => {
    const moodSection = page.locator('#mood-section')
    const dekoHeading = moodSection.getByRole('heading', { name: 'hsdgjhsfgjs' })
    await expect(dekoHeading).toHaveCSS('user-select', 'none')
  })
})

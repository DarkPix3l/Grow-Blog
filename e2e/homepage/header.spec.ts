import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('header should be visible @desktop', async ({ page }) => {
    const header = page.locator('header').filter({ visible: true })
    const logo = header.getByAltText("the Blog's Logo")
    await expect(logo).toHaveCount(1)
    const nav = header.getByRole('navigation')
    await expect(nav).toBeVisible()
    const navButtons = nav.getByRole('link')
    await expect(navButtons).toHaveCount(5)
  })

  test('header links should be clickable @desktop', async ({ page }) => {
    const header = page.locator('header').filter({ visible: true })
    await header.getByAltText("the Blog's Logo").click()
    await expect(page).toHaveURL('/')

    const nav = header.getByRole('navigation')
    await nav.getByRole('link', { name: 'Home' }).click()
    await expect(page).toHaveURL('/#intro_section')

    await nav.getByRole('link', { name: 'Categories' }).click()
    await expect(page).toHaveURL('/#categories_section')

    await page.getByRole('link', { name: 'Mood' }).click()
    await expect(page).toHaveURL('/#mood-section')

    await page.getByRole('link', { name: 'Change language' }).click() //not yet implemented
    await expect(page).toHaveURL('/')

    await page.getByRole('link', { name: 'Toggle theme' }).click()
    const body = page.locator('body')
    await expect(body).toHaveAttribute('data-theme', 'theme-light')
  })
})

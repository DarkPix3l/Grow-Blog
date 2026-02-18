//theme snippet
//Checks: cookie override

import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.emulateMedia({ colorScheme: 'dark' })
  })

  test('cookie preference overrides system settings @desktop', async ({ context, page }) => {
    await page.getByRole('link', { name: 'Toggle theme' }).click()

    const cookies = await context.cookies()
    const themeCookie = cookies.find((c) => c.name === 'theme')

    expect(themeCookie?.value).toBe('theme-light')
  })
})

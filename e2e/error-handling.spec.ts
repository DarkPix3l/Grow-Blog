import { test, expect } from '@playwright/test'

//Route level Failure
// Test Hooks
test.describe('Route Level Error Handling', () => {
    test('should render the not found page', async ({ page }) => {
        await page.goto('/this-slug-is-fake12345')

        await expect(page.locator('text= Back to Home')).toBeVisible()

        // Check that the URL is still the malformed one
        expect(page.url()).toContain('this-slug-is-fake12345')
    })
})

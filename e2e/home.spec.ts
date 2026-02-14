import { test, expect } from '@playwright/test'

test.describe('Homepage Content & Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    await page.goto('/', { timeout: 10000 })
    await expect(page).toBeTruthy()
  })

  test('header should be visible', async ({ page }) => {
    const header = page.locator('header').filter({ visible: true })
    const logo = header.getByAltText("the Blog's Logo")
    await expect(logo).toHaveCount(1)
    const nav = header.getByRole('navigation')
    await expect(nav).toBeVisible
    const navButtons = nav.getByRole('link')
    await expect(navButtons).toHaveCount(5)
  })

  test('header links should be clickable', async ({ page }) => {
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
    await expect(page).toHaveURL('/')
  })

  test('should display Intro Section content', async ({ page }) => {
    //Intro Section
    const introSection = page.locator('#intro_section')
    //Main title
    const mainTitle = introSection.getByText('grow blog/_')
    await expect(mainTitle).toBeVisible()

    //description
    const message = introSection.getByText('A blog platform built for the world.')
    await expect(message).toBeVisible()

    //CTA bar
    const startWriting = introSection.getByRole('link', { name: 'start writing' })
    const contentYourWay = page.getByRole('link', { name: 'content your way' })
    await expect(startWriting).toBeVisible()
    await expect(contentYourWay).toBeVisible()

    //Articles section h2
    const latestPostsHeading = introSection.getByRole('heading', { name: 'Latest Posts' })
    await expect(latestPostsHeading).toBeVisible()
    await expect(latestPostsHeading).toContainText('Latest Posts')

    const paragraph = introSection.getByText('A blog platform built for the world')
    await expect(paragraph).toBeVisible()

    //article cards
    //Unfortunately also the number of the cards can change. Getting the first
    const firstCardBody = page.getByRole('article').first()

    // testing the first card about elements visibility
    await expect(firstCardBody.getByTestId('categoryField').first()).toBeVisible()
    await expect(firstCardBody.getByTestId('cardTitle').first()).toBeVisible()
    await expect(firstCardBody.getByAltText('author picture').first()).toBeVisible()
    await expect(firstCardBody.getByText('written by').first()).toBeVisible()
  })

  test('card should be clickable', async ({ page }) => {
    const firstCard = page.getByTestId('cardLink').first()

    // I'm replacing the previous link test because the latest posts will always change.
    // Going for a more content-agnostic approach, more suitable for this CMS's "living content."
    const href = await firstCard.getAttribute('href')
    await firstCard.click()
    await expect(page).toHaveURL(new RegExp(`${href}`))
  })
})

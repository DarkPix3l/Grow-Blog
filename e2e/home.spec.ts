import { test, expect } from '@playwright/test'

test.describe('Homepage Content & Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('it should display Intro Section content @desktop', async ({ page }) => {
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

  test('first cta link should be clickable @desktop', async ({ page }) => {
    const introSection = page.locator('#intro_section')
    await introSection.getByRole('link', { name: 'start writing' }).click() //page not yet implemented
  })

  test('second cta link should go to about page @desktop', async ({ page }) => {
    const introSection = page.locator('#intro_section')
    const contentYourWay = introSection.getByRole('link', { name: 'content your way' })
    await contentYourWay.click()
    await expect(page).toHaveURL('/about')
  })

  test('Article Card should be clickable @desktop', async ({ page }) => {
    const firstCard = page.getByTestId('cardLink').first()

    // I'm replacing the previous link test because the latest posts will always change.
    // Going for a more content-agnostic approach, more suitable for this CMS's "living content."
    const href = await firstCard.getAttribute('href')
    await firstCard.click()
    await expect(page).toHaveURL(new RegExp(`${href}`))
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

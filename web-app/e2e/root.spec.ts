import { test, expect } from '@playwright/test'

test('should navigate to the about page', async ({ page }) => {
  await page.goto('/')
  await page.click('text=another')
  await expect(page).toHaveURL('/another')
  await expect(page.locator('h1')).toContainText('Rewrite')
})

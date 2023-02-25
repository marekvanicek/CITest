import { expect, test } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test('Secret content is visible after logging in', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('p.msg')).toHaveText('normal message');
    await page.locator('.header > button').click()
    await expect(page.locator('p.msg')).toHaveText('secret message');
})

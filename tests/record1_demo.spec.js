import { test, expect } from '@playwright/test';

test('record demo test', async ({ page }) => {
  await page.locator('body').click();
  await page.locator('body').click({
    modifiers: ['ControlOrMeta']
  });
  await page.locator('body').click();
  await page.locator('body').click();
  await page.locator('body').click();
  await page.goto('https://www.saucedemo.com/', { timeout: 30000 });
  await page.locator('[data-test="login-button123"] div').filter({ hasText: 'Login' }).first().click();
  await page.locator('[data-test="login-button123"] div').filter({ hasText: 'Login' }).first().click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Enter');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="inventory-list"] div').filter({ hasText: 'Sauce Labs Backpackcarry.' }).nth(1).click();
  await page.locator('[data-test="inventory-list"] div').filter({ hasText: 'Sauce Labs OnesieRib snap' }).nth(1).click();
  await page.locator('[data-test="inventory-sidebar-link"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="remove-sauce-labs-onesie"]').click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});
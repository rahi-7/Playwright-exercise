import { test, expect } from '@playwright/test'

test('Demo login test 1', async ({ page }) => {
  await page.goto('https://demo.applitools.com/')
    //await page pause()
await page.locator('placeholder="Enter your username"').fill('Raghav')
await page.locator('placeholder="Enter your username"').fill('1234')

await page.waitForSelector('text=Sign in', {timeout: 5000}).click()
await page.locator('text=Sign in').click()
})

test.only('Demo login test 2', async ({ page }) => {

     page.goto('https://opensource-demo-orangehrmlive.com/web/index.php')
     await page.pause()
})

test.only('Demo login test 3', async ({ page }) => {
    await page.pause()
    await page.goto('https://admin-demo.nopcommerce.com/login');
    await page.locator('input[name="Email"]').click();
    await page.locator('input[name="Email"]').press('control+a');
    await page.locator('input[name="Email"]').fill('rahel131@gmail.com');
    await page.locator('input[name="Password"]').click();
    await page.locator('input[name="Password"]').press('control+a');
    await page.close();

})

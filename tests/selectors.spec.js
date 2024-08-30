import { test, expect } from '@playwright/test'

test('Selectors Demo', async({page}) => {
    await page.goto('https://www.saucedemo.com')

    await page.pause();
    // Using any object property
    await page.click('id=user-name')
    await page.click('id=user-name').fill('Rahel')
    await page.click('id=user-name').fill('Tsige')
    // using CSS Selector
    // #login-button
    await page.locator('#login-button').click()
     // Using XPath
    await page.locator('xpath//input[@id="user-name"]').fill('Fasi')
    await page.locator('//input[@id="user-name"]').fill('Tigist')
    // Using Text
    await page.locator('text=LOGIN').click();
    await page.locator('input has-text("LOGIN').click()
  
})

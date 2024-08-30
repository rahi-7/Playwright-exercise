import { test, expect } from '@playwright/test';

test('Kitchen page tests', async ({ page }) => {
  // Navigate to the Kitchen page
  await page.goto('https://kitchen.applitools.com/');

  // Pause the execution for debugging
  await page.pause();

  // Check that the element with the text 'The Kitchen' appears exactly once
  await expect(page.locator('text=The Kitchen')).toHaveCount(1);

  // Conditional click if the element exists
  if (await page.$('text=The Kitchen')) {
    await page.locator('text=The Kitchen').click();
  }

  // Assert that the element is visible
  await expect(page.locator('text=The Kitchen')).toBeVisible();

  // Assert that the element is enabled (interactable)
  await expect(page.locator('text=The Kitchen')).toBeEnabled();

  // Assert that the element has the exact text 'The Kitchen'
  await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen');

  // Assert that the element does not have a different text
  await expect(page.locator('text=The Kitchen')).not.toHaveText('Different Text');

  // Pause again for debugging
  await page.pause();

  // Assert that the element has a class attribute matching the provided regex
  await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a.*/);

  // Assert that the element's class name matches a certain pattern
  await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a.*/);

  // Assert that the page title contains 'The Kitchen'
  await expect(page).toHaveTitle(/.*The Kitchen.*/);

  // Take a screenshot of the page
  await page.screenshot({ path: 'screenshot.png' });
});



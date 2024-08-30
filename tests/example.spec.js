const { test, expect } = require('@playwright/test');

let context; // Declare the context variable outside the hook

test.beforeAll(async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: false });

  // Create a new browser context
  context = await browser.newContext();

  // Start tracing
  await context.tracing.start({ screenshots: true, snapshots: true });
});

test.afterAll(async () => {
  // Stop tracing and save it to a file after all tests are completed
  await context.tracing.stop({ path: 'test1_trace.zip' });

  // Close the browser context
  await context.close();
});

// Example test
test('example test', async () => {
  const page = await context.newPage();
  await page.goto('https://example.com');
  await page.click('text=More information...');
});


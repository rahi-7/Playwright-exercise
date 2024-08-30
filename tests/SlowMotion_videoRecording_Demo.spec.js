import { test, expect } from '@playwright/test';

test('Slow motion and video recording demo', async() =>{

    const browser = await chromium.launch();
       slowMo: 500
       headless: false

    const context = await browser.newContext();
        recordVideo: {
            dir: 'videos/'
            size: {width: 800, height; 600}
        }
     const page = await context.newPage();

     await page.goto('')

     await context.close();
})
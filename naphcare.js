const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://naphcare.com/');
  await page.getByRole('link', { name: 'Our Services ' }).click();
  await page.getByRole('link', { name: 'Electronic Health Records (' }).click();
  await page.getByRole('heading', { name: 'Electronic Health Records (' }).click();
  
     
  // ---------------------
  await context.close();
  await browser.close();
})();
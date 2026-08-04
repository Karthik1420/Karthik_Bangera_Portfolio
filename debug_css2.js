import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

  const audit = await page.evaluate(() => {
    let hasMaxW6xl = false;
    let hasGrid = false;
    let rules = [];
    
    for (let i = 0; i < document.styleSheets.length; i++) {
      try {
        const sheet = document.styleSheets[i];
        for (let j = 0; j < sheet.cssRules.length; j++) {
          const rule = sheet.cssRules[j];
          if (rule.selectorText && rule.selectorText.includes('.max-w-6xl')) {
            hasMaxW6xl = true;
            rules.push(rule.cssText);
          }
          if (rule.selectorText && rule.selectorText.includes('.grid')) {
            hasGrid = true;
          }
        }
      } catch(e) {}
    }
    
    return { hasMaxW6xl, hasGrid, rules };
  });

  console.log(JSON.stringify(audit, null, 2));
  await browser.close();
})();

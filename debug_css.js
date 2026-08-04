import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

  const audit = await page.evaluate(() => {
    let hasPt32 = false;
    let hasP6 = false;
    let rules = [];
    
    for (let i = 0; i < document.styleSheets.length; i++) {
      try {
        const sheet = document.styleSheets[i];
        for (let j = 0; j < sheet.cssRules.length; j++) {
          const rule = sheet.cssRules[j];
          if (rule.selectorText && rule.selectorText.includes('.pt-32')) {
            hasPt32 = true;
            rules.push(rule.cssText);
          }
          if (rule.selectorText && rule.selectorText.includes('.p-6')) {
            hasP6 = true;
            rules.push(rule.cssText);
          }
        }
      } catch(e) {}
    }
    
    return { hasPt32, hasP6, rules };
  });

  console.log(JSON.stringify(audit, null, 2));
  await browser.close();
})();

import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173/projects/talentmatch-ai', { waitUntil: 'networkidle0' });

  const audit = await page.evaluate(() => {
    const grid2 = document.querySelectorAll('.grid')[1];
    const card = grid2.children[0];
    const style = window.getComputedStyle(card);
    const rect = card.getBoundingClientRect();
    
    return {
       className: card.className,
       height: rect.height,
       paddingTop: style.paddingTop,
       paddingBottom: style.paddingBottom,
       boxSizing: style.boxSizing,
       lineHeight: style.lineHeight,
       fontSize: style.fontSize,
       display: style.display,
       alignItems: style.alignItems
    };
  });

  console.log(JSON.stringify(audit, null, 2));
  await browser.close();
})();

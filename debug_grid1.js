import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/projects/talentmatch-ai', { waitUntil: 'networkidle0' });

  const audit = await page.evaluate(() => {
    const grid1 = document.querySelectorAll('.grid')[0];
    const card = grid1.children[0];
    const style = window.getComputedStyle(card);
    
    return {
       className: card.className,
       paddingTop: style.paddingTop,
       paddingBottom: style.paddingBottom,
    };
  });

  console.log(JSON.stringify(audit, null, 2));
  await browser.close();
})();

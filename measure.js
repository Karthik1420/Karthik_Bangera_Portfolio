import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173/projects/talentmatch-ai', { waitUntil: 'domcontentloaded' });

  // wait a second for react to render
  await new Promise(r => setTimeout(r, 1000));

  const stats = await page.evaluate(() => {
    const getEl = (el) => {
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      return {
        width: rect.width,
        maxWidth: style.maxWidth,
        cssText: el.className
      };
    };

    return {
      navbar: getEl(document.querySelector('nav')),
      heroContainer: getEl(document.querySelector('.container-wide.relative')),
      heroMaxW: getEl(document.querySelector('.container-wide.relative > div:last-child')),
      contentContainer: getEl(document.querySelector('.bg-base .container-wide')),
      contentMaxW: getEl(document.querySelector('.bg-base .container-wide > .max-w-6xl'))
    };
  });

  console.log(JSON.stringify(stats, null, 2));
  await browser.close();
})();

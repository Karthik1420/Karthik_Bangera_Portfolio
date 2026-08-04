import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173/projects/talentmatch-ai', { waitUntil: 'networkidle0' });

  const audit = await page.evaluate(() => {
    const getRect = (el) => el.getBoundingClientRect();
    const getStyle = (el) => window.getComputedStyle(el);
    const result = [];
    
    // Check main sections and their vertical spacing
    const hero = document.querySelector('section.relative');
    const content = document.querySelector('.bg-base > .container-wide');
    
    if (hero) {
      result.push({
        element: 'Hero Section',
        padding: getStyle(hero).padding,
        margin: getStyle(hero).margin,
        height: getRect(hero).height
      });
      const inner = hero.querySelector('.max-w-6xl');
      if (inner) {
        result.push({
          element: 'Hero Inner (max-w-6xl)',
          padding: getStyle(inner).padding,
          margin: getStyle(inner).margin,
          height: getRect(inner).height
        });
      }
    }
    
    if (content) {
      result.push({
        element: 'Content Container',
        padding: getStyle(content).padding,
        margin: getStyle(content).margin,
        height: getRect(content).height
      });
    }

    // Check grids and cards heights
    const grids = document.querySelectorAll('.grid');
    grids.forEach((grid, idx) => {
      const cards = Array.from(grid.children);
      const heights = cards.map(c => getRect(c).height);
      result.push({
        element: `Grid ${idx + 1}`,
        className: grid.className,
        gap: getStyle(grid).gap,
        margin: getStyle(grid).margin,
        cardHeights: heights
      });
      // Check if cards have different heights in the same row
      cards.forEach(c => {
         const p = c.querySelector('p:last-child');
         if (p) {
            const pr = getRect(p);
            const cr = getRect(c);
            if (pr.bottom > cr.bottom) {
               result.push({ error: 'Text overflows card', card: c.className });
            }
         }
      });
    });

    // Check dividers
    const dividers = document.querySelectorAll('div[style*="height: 1px"]');
    dividers.forEach((d, i) => {
       result.push({
         element: `Divider ${i+1}`,
         margin: getStyle(d).margin
       });
    });

    return result;
  });

  console.log(JSON.stringify(audit, null, 2));
  await browser.close();
})();

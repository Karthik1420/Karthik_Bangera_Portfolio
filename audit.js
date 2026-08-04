import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  const viewports = [
    { width: 1440, height: 900, name: 'desktop' },
    { width: 1280, height: 800, name: 'laptop' },
    { width: 1024, height: 768, name: 'tablet' },
    { width: 375, height: 812, name: 'mobile' }
  ];

  const results = {};

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:5173/projects/talentmatch-ai', { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 1500)); // wait for animations

    const audit = await page.evaluate(() => {
      const issues = [];
      const getRect = (el) => el.getBoundingClientRect();
      const getStyle = (el) => window.getComputedStyle(el);

      // Check sections vertical spacing
      const sections = document.querySelectorAll('section, .bg-base > div, .container-wide');
      sections.forEach((sec, i) => {
        const rect = getRect(sec);
        const style = getStyle(sec);
        if (rect.height < 50 && sec.innerText.trim().length > 0) {
          issues.push({ type: 'compressed_section', el: sec.className || sec.tagName, height: rect.height });
        }
      });

      // Check overlapping
      const allEls = document.querySelectorAll('*');
      const bodyRect = document.body.getBoundingClientRect();
      allEls.forEach(el => {
        if (el.tagName === 'SCRIPT' || el.tagName === 'STYLE' || el.tagName === 'SVG' || el.tagName === 'PATH') return;
        const rect = getRect(el);
        const style = getStyle(el);
        
        // Overflow viewport horizontally
        if (rect.right > bodyRect.right + 5 && style.overflow !== 'hidden') {
          issues.push({ type: 'horizontal_overflow', el: el.className || el.tagName, right: rect.right, bodyRight: bodyRect.right });
        }
        
        // Check absolute positioning overlaps
        if (style.position === 'absolute' || style.position === 'fixed') {
          issues.push({ type: 'absolute_fixed', el: el.className || el.tagName, zIndex: style.zIndex, rect: rect });
        }
        
        // Check negative margins
        if (parseInt(style.marginTop) < 0 || parseInt(style.marginBottom) < 0) {
          issues.push({ type: 'negative_margin', el: el.className || el.tagName, margin: `${style.marginTop} ${style.marginBottom}` });
        }
      });

      // Check Grids
      const grids = document.querySelectorAll('.grid');
      grids.forEach(grid => {
        const style = getStyle(grid);
        const rect = getRect(grid);
        const children = Array.from(grid.children);
        issues.push({
          type: 'grid_info',
          className: grid.className,
          gridTemplateColumns: style.gridTemplateColumns,
          width: rect.width,
          childrenCount: children.length,
          childrenWidths: children.map(c => getRect(c).width)
        });
        
        // Check if cards are too squished (e.g. < 150px)
        children.forEach(c => {
          if (getRect(c).width < 150 && getRect(c).width > 0) {
            issues.push({ type: 'squished_card', parent: grid.className, cardWidth: getRect(c).width });
          }
        });
      });

      return issues;
    });

    results[vp.name] = audit;
  }

  fs.writeFileSync('audit_results.json', JSON.stringify(results, null, 2));
  console.log("Audit complete");
  await browser.close();
})();

import { test } from '@playwright/test';
import path from 'path';
import fs from 'fs';

const PAGES = [
  { name: 'home',              path: '/' },
  { name: 'about',             path: '/about.html' },
  { name: 'solutions',         path: '/solutions.html' },
  { name: 'why',               path: '/why.html' },
  { name: 'commitment',        path: '/commitment.html' },
  { name: 'property-liability',path: '/property-liability.html' },
  { name: 'employee-benefits', path: '/employee-benefits.html' },
  { name: 'what-we-find',      path: '/what-we-find.html' },
  { name: 'renewal-checklist', path: '/renewal-checklist.html' },
  { name: 'contact',           path: '/contact.html' },
];

for (const page of PAGES) {
  test(`screenshot: ${page.name}`, async ({ page: pw, browserName }, testInfo) => {
    // Build a clean output dir per project (device+browser combo)
    const projectName = testInfo.project.name.replace(/\s+/g, '-');
    const dir = path.join('test-results', 'screenshots', projectName);
    fs.mkdirSync(dir, { recursive: true });

    await pw.goto(page.path, { waitUntil: 'networkidle' });

    // Wait for fonts/images to settle
    await pw.waitForTimeout(800);

    // Full-page screenshot
    const file = path.join(dir, `${page.name}.png`);
    await pw.screenshot({ path: file, fullPage: true });
    await testInfo.attach(`${page.name}`, { path: file, contentType: 'image/png' });
  });
}

import { test, expect } from '@playwright/test';
import fs from 'fs';

const sitemap = fs.readFileSync('sitemap.txt', 'utf8').split('\n') || [];

test.describe('check website', () => {
  sitemap.forEach((url) => {
      test(`${url} has title`, async ({ page }) => {
        await page.goto(url);
        await expect(page).toHaveTitle(/.+/);
      });
  })
})
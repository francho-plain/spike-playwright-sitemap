import { FullConfig } from '@playwright/test';
import fs from 'fs';

const globalSetup = async (config:FullConfig) => {
  console.log('🚩 getSitemap')
  const response = await fetch('http://192.168.133.6/sitemap/sitemap-0.xml');
  const text = await response.text();
  const matches = text.match(/<loc>(.*?)<\/loc>/g) || [];
  const urls = matches.map((match) => match.replace('<loc>', '').replace('</loc>', ''));
  fs.writeFileSync('sitemap.txt', urls.join('\n'));
}



export default globalSetup;
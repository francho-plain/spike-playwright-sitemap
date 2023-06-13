import { FullConfig } from '@playwright/test';
import fs from 'fs';

const globalSetup = async (config:FullConfig) => {
  fs.unlinkSync('sitemap.txt');
}



export default globalSetup;
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  outputDir: './test-results',
  reporter: 'list',
  use: {
    baseURL: 'https://www.charterselect.com',
    // Wait for network to be idle so React/fonts/images fully load
    waitForLoadState: 'networkidle',
  },
  projects: [
    // Desktop
    { name: 'Desktop Chrome',  use: { ...devices['Desktop Chrome'] } },
    { name: 'Desktop Safari',  use: { ...devices['Desktop Safari'] } },
    { name: 'Desktop Firefox', use: { ...devices['Desktop Firefox'] } },
    // Tablet
    { name: 'iPad',            use: { ...devices['iPad (gen 7)'] } },
    // Mobile
    { name: 'iPhone 14',       use: { ...devices['iPhone 14'] } },
    { name: 'Pixel 7',         use: { ...devices['Pixel 7'] } },
  ],
});

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  outputDir: './test-results-local',
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:8765',
    waitForLoadState: 'networkidle',
  },
  projects: [
    { name: 'iPad', use: { ...devices['iPad (gen 7)'] } },
  ],
});

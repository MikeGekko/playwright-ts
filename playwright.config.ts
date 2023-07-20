import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config'
import { configuration } from 'env/config';

export default defineConfig({
  testDir: './tests/specs/',
  outputDir: 'reports/test-results/',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['list', { printSteps: true }],
    [
      'html',
      {
        open: 'never',
        outputFolder: 'reports/report',
      },
    ],
  ],

  use: {
    baseURL: configuration.URL,
    viewport: { width: 1920, height: 1080 },
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
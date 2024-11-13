import { defineConfig, devices } from '@playwright/test'
import { join } from 'path'

const PORT = process.env.PORT || 3000
const baseURL = `http://localhost:${PORT}`

export default defineConfig({
  timeout: 30 * 1000,
  testDir: join(__dirname, 'e2e'),
  retries: 2,
  outputDir: 'test-results/',
  // webServer: {
  //   command: 'npm run dev',
  //   url: baseURL,
  //   timeout: 120 * 1000,
  //   reuseExistingServer: !process.env.CI,
  // },
  use: {
    baseURL,
    trace: 'retry-with-trace',
  },
  projects: [
    {
      name: 'Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
})

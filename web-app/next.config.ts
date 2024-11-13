import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx'],
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
}

export default nextConfig

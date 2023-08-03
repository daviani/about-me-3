import withBundleAnalyzer from "@next/bundle-analyzer"
import withPlugins from "next-compose-plugins"
import { env } from "./env.mjs"

/**
 * @type {import('next').NextConfig}
 */
const config = withPlugins([[withBundleAnalyzer({ enabled: env.ANALYZE })]], {
  reactStrictMode: true,
  experimental: { instrumentationHook: true },
  rewrites() {
    return [
      { source: "/healthz", destination: "/api/health" },
      { source: "/api/healthz", destination: "/api/health" },
      { source: "/health", destination: "/api/health" },
      { source: "/ping", destination: "/api/health" },
    ]
  },
  images: {
    domains: ['www.datocms-assets.com'],
    formats: ['image/avif', 'image/webp']
  },
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr'
  },
  env: {
    NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN:
    process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN
  },
})

export default config

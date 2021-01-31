module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  async rewrites() {
    return [
      {
        source: '/sacfairguide',
        destination: '/guides/fair',
      },
      {
        source: '/org/:slug*',
        destination: '/club/:slug*',
      },
    ]
  },
  publicRuntimeConfig: {
    // If DOMAIN starts with http, use it directly, otherwise add https
    SITE_ORIGIN: process.env.DOMAIN
      ? process.env.DOMAIN.startsWith('http')
        ? process.env.DOMAIN
        : `http://${process.env.DOMAIN}`
      : `http://localhost:${process.env.PORT || 3000}`,
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || 'clubs',
    SENTRY_URL: process.env.SENTRY_URL,
  },
  productionBrowserSourceMaps: true,
}

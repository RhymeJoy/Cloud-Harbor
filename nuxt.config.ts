export default defineNuxtConfig({
  compatibilityDate: '2026-07-14',
  srcDir: 'src/',
  modules: ['@nuxtjs/sitemap'],
  css: ['~/style.css'],
  app: {
    baseURL: '/Cloud-Harbor/',
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/Cloud-Harbor/favicon.ico' }]
    }
  },
  site: {
    url: 'https://rhymejoy.github.io',
    name: 'Cloud Harbor'
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/products', '/sitemap.xml']
    }
  },
  sitemap: {
    credits: false,
    discoverImages: false,
    excludeAppSources: true,
    zeroRuntime: true,
    xsl: false,
    defaults: {
      changefreq: 'monthly',
      lastmod: '2026-07-14'
    },
    urls: [
      {
        loc: '/',
        priority: 1
      },
      {
        loc: '/products',
        priority: 0.8
      }
    ]
  }
});

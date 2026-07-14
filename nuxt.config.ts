import { productDetailRoutes } from './src/data/products';

const sitemapRoutes = ['/', '/products', ...productDetailRoutes];

export default defineNuxtConfig({
  compatibilityDate: '2026-07-14',
  srcDir: 'src/',
  modules: ['@nuxtjs/sitemap'],
  css: ['~/style.css'],
  app: {
    baseURL: '/',
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  site: {
    url: 'https://www.cloud-harbor.org',
    name: 'Cloud Harbor'
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [...sitemapRoutes, '/sitemap.xml']
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
    urls: sitemapRoutes.map((loc) => ({
      loc,
      priority: loc === '/' ? 1 : loc === '/products' ? 0.8 : 0.7
    }))
  }
});

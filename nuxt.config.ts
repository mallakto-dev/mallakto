export default defineNuxtConfig({
  modules: [
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxt/icon",
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    "@nuxt/fonts",
    '@vueuse/nuxt',
    '@nuxtjs/sanity',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
  site: {
    url: 'https://mallakto.ru',
    name: 'Mallakto, московский веган-кооператив',
    zeroRuntime: true,
  },
  experimental: {
    purgeCachedData: false,
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/about', '/contacts', '/products/**', ],
    },
    routeRules: {
      '/api/order': { static: false },
      '/cart': { robots: false },
      '/checkout/**': { robots: false },
    }
  },
  typescript: {
    typeCheck: true
  },
  sanity: {
    projectId: "dudbk6rk",
    dataset: "develop",
    minimal: true,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      ],
    },
    rootTag: 'body',
  },
  runtimeConfig: {
    BACKEND_URL: process.env.BACKEND_URL
  },
  css: ['~/assets/css/main.css'],
  imports: {
    dirs: ['types/*.ts'],
  },
  compatibilityDate: '2024-08-04'
})
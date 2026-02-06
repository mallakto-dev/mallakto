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
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/products/**', 'products/category/**', '/about', '/contacts',]
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
      title: 'Главная | Mallakto',
      htmlAttrs: {
        lang: 'ru',
      },
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      ],
    },
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
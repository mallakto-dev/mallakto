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
    '@nuxtjs/html-validator'
  ],
  routeRules: {
    "*": {
      static: true,
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
    },
  },
/*   vite: {
    optimizeDeps: {
      include: ['react-compiler-runtime', 'react', 'react-dom']
    },
  }, */
  runtimeConfig: {
      BACKEND_URL: import.meta.env.BACKEND_URL
    },
  css: ['~/assets/css/main.css'],
  imports: {
      dirs: ['types/*.ts'],
    },
    compatibilityDate: '2024-08-04'
})
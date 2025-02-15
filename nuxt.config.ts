export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxt/icon",
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    "@nuxt/fonts",
    '@vueuse/nuxt',
  ],
  typescript: {
      typeCheck: true
  },
  css: ['~/assets/css/main.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        }
      }
    }
  },
  imports: {
      dirs: ['types/*.ts'],
    },
    runtimeConfig: {
      BACKEND_URL: import.meta.env.BACKEND_URL
    },
    compatibilityDate: '2024-08-04'
})
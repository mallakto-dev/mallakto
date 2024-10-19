// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxt/icon",
    '@pinia/nuxt',
    "@nuxt/fonts"
  ],
  typescript: {
      typeCheck: true
  },
  css: ['~/assets/css/main.css'],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          api: 'modern'
        }
      }
    }
  },
  imports: {
      dirs: ['types/*.ts'],
    },
    compatibilityDate: '2024-08-04'
})
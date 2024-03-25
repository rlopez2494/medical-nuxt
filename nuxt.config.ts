// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  features: {
    devLogs: false,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@samk-dev/nuxt-vcalendar',
  ]
})

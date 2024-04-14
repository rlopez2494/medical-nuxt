// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  features: {
    devLogs: false,
  },
  ssr: false, // Until we get the authentication solved
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@samk-dev/nuxt-vcalendar',
    '@pinia/nuxt',
  ]
})

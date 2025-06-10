// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  nitro: {
    preset: 'github_pages'
  },
  modules: ['@nuxt/icon', '@nuxt/fonts', '@nuxt/content', '@nuxtjs/i18n', 'nuxt-gtag'],
  ssr: false,
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: "anonymous" },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
      ]
    }
  },
  gtag:{
    enabled:true
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'br',
    locales: [
      { code: 'br', name: 'Português do Brasil', file: 'br.json' },
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'es', name: 'Espanhol', file: 'es.json' },
    ]
  }
})
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  experimental: { payloadExtraction: false },
  tailwindcss: {
    viewer: false
  },
  app: {
    rootId: 'app',
    head: {
      title: '天使基金',
      titleTemplate: '%s %separator 天使基金',
      htmlAttrs: {
        lang: 'zh-TW'
      },
      meta: [
        { name: 'description' , content: '天使基金'},
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-title', property: 'og:title', content: '天使基金' },
        { hid: 'og-description', property: 'og:description', content: '天使基金' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@latest/css/boxicons.min.css' }
      ],
    }
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  }
})
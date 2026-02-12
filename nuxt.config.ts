export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/image", "@unocss/nuxt", "@nuxtjs/sitemap", "@nuxtjs/i18n"],

  compatibilityDate: "2026-01-19",
  devtools: { enabled: true },
  ssr: false,

  css: ["~/assets/css/tailwind.css"],

  features: {},

  // UnoCSS 配置
  unocss: {},

  // Sitemap 配置
  sitemap: {
    hostname: "https://your-blog.com",
  },

  // 国际化配置
  i18n: {
    lazy: true,
    langDir: "locales",
    defaultLocale: "zh-CN",
    locales: [
      {
        code: "zh-CN",
        iso: "zh-CN",
        name: "中文",
        file: "zh-CN.json",
      },
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en.json",
      },
    ],
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },

  // 应用配置
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      // 全局元标签
      meta: [
        { name: "description", content: "我的 Nuxt4 技术博客，记录技术成长和学习心得" },
        { name: "keywords", content: "Nuxt, Vue, 技术博客, 前端开发" },
        // Open Graph 元标签
        { property: "og:site_name", content: "我的 Nuxt4 技术博客" },
        { property: "og:type", content: "website" },
        // Twitter Cards 元标签
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@your-twitter" },
      ],
    },
  },
});

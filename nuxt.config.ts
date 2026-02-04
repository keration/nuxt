export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxt/content", "@nuxt/image", "@unocss/nuxt", "@nuxtjs/sitemap"],

  compatibilityDate: "2026-01-19",
  devtools: { enabled: true },
  ssr: false,

  // 完整配置 Nuxt UI，启用暗黑模式
  ui: {
    darkMode: "class",
  },

  css: ["~/assets/css/tailwind.css"],

  features: {},

  // UnoCSS 配置
  unocss: {},

  // Sitemap 配置
  sitemap: {
    hostname: "https://your-blog.com"
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
        { name: "twitter:site", content: "@your-twitter" }
      ]
    }
  }
});

export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxt/content", "@nuxt/image"],

  compatibilityDate: "2026-01-19",
  devtools: { enabled: true },
  ssr: false,

  // 完整配置 Nuxt UI，启用暗黑模式
  ui: {
    darkMode: "class",
  },

  css: ["~/assets/css/tailwind.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // 禁用一些不需要的功能
  features: {
    // fonts: false, // Nuxt 4中已移除此配置
  },

  // Giscus评论配置已移至页面组件动态加载
});

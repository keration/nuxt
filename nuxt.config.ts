export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/ui"], // 新增这行
  content: {
    database: {
      driver: "none", // 跳过 SQLite 依赖，纯 JS 解析 MD
    },
    base: "/content/articles", // 指向你的MD文件目录
    navigation: false,
  },

  compatibilityDate: "2026-01-19",
  devtools: { enabled: true },
  ssr: false,
  // 确保 Nuxt UI 模块正确引入  // 完整配置 Nuxt UI，启用暗黑模式
  ui: {
    darkMode: "class", // 必须设置为 'class' 才能启用 $ui 相关方法
    // 禁用 Google 字体，避免之前的网络错误
    fonts: false,
  },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // 禁用 @nuxt/fonts 模块，消除 Google 资源警告
  features: {
    fonts: false,
  },
});

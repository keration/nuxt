export default defineNuxtConfig({
  compatibilityDate: "2026-01-19",
  devtools: { enabled: true },
  ssr: false,
  // 确保 Nuxt UI 模块正确引入
  modules: ["@nuxt/ui"],
  // 完整配置 Nuxt UI，启用暗黑模式
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

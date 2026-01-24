export default defineNuxtConfig({
  modules: ["@nuxt/ui"],
  
  compatibilityDate: "2026-01-19",
  devtools: { enabled: true },
  ssr: false,
  
  // 完整配置 Nuxt UI，启用暗黑模式
  ui: {
    darkMode: "class",
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

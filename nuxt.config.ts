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

  // Giscus评论配置
  app: {
    head: {
      script: [
        {
          src: "https://giscus.app/client.js",
          async: true,
          "data-repo": "your-github-username/your-repo-name", // 请替换为你的GitHub仓库
          "data-repo-id": "your-repo-id", // 请替换为你的仓库ID
          "data-category": "Comments",
          "data-category-id": "your-category-id", // 请替换为你的分类ID
          "data-mapping": "pathname",
          "data-strict": "0",
          "data-reactions-enabled": "1",
          "data-emit-metadata": "0",
          "data-input-position": "bottom",
          "data-theme": "preferred_color_scheme",
          "data-lang": "zh-CN",
          crossorigin: "anonymous",
        },
      ],
    },
  },
});

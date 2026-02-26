import { resolve } from "path";

export default defineNuxtConfig({
  modules: ["@nuxt/image", "@unocss/nuxt", "@nuxtjs/sitemap", "@nuxtjs/i18n"],

  compatibilityDate: "2026-01-19",
  devtools: { enabled: true },
  ssr: true,

  css: ["~/assets/css/tailwind.css"],

  features: {},

  // UnoCSS 配置
  unocss: {},

  // Sitemap 配置
  sitemap: {
    hostname: "https://nuxtblog.vercel.app",
  },

  // 国际化配置
  i18n: {
    // By default nuxt-i18n assumes an `i18n` subdirectory for resources.
    // `restructureDir: "."` tells it to use project root instead, so our
    // `locales/` directory is referenced directly. Without this the module
    // would resolve `langDir` inside `<root>/i18n` producing the earlier
    // error.
    restructureDir: ".",
    // use absolute path to eliminate any relative resolution quirks
    langDir: resolve(__dirname, "locales"),
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

  // @nuxt/content 配置：优先使用文件/内存存储，避免依赖本机 sqlite 绑定
  // @ts-ignore: content module typings may not be available in this environment
  content: {
    // 尝试使用文件提供者以绕过 better-sqlite3，本地开发时能避免 native 绑定问题
    database: {
      provider: "fs",
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

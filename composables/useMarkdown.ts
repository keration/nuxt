// composables/useMarkdown.ts
import { marked } from "marked";
import hljs from "highlight.js";
// 仅引入高亮样式（核心，决定代码块的视觉风格）
import "highlight.js/styles/atom-one-light.css";

// 配置 marked 代码高亮（完全依赖 highlight.js 内置语言）
marked.setOptions({
  async: true,
  highlight: async (code, lang) => {
    // 调试：确认 highlight 函数被调用（看控制台输出）
    console.log("开始高亮代码，语言：", lang);

    // 强制处理代码（即使 lang 为空）
    const language = lang || "javascript";
    // 调用 hljs 生成带样式类的 HTML
    const highlighted = hljs.highlight(code, { language });
    console.log("高亮后的代码结构：", highlighted.value); // 看是否有 <span class="keyword"> 等

    return highlighted.value;
  },
  langPrefix: "language-", // 确保生成 class="language-xxx"
  gfm: true,
  breaks: true,
});

// 解析 Markdown 头部的 frontmatter 信息（标题、日期、标签等）
const parseFrontmatter = (markdown: string) => {
  const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(markdown);
  const frontmatter: Record<string, any> = {};

  if (match) {
    const content = match[1];
    content.split("\n").forEach((line) => {
      const [key, ...valueParts] = line.split(":").map((item) => item.trim());
      if (key && valueParts.length) {
        let value = valueParts.join(":");
        // 处理数组（比如 tags: ["Nuxt4", "Vue3"]）
        if (value.startsWith("[") && value.endsWith("]")) {
          value = JSON.parse(value.replace(/'/g, '"'));
        }
        // 处理带引号的字符串（比如 title: "Nuxt 博客"）
        else if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        }
        frontmatter[key] = value;
      }
    });
  }

  return frontmatter;
};

// 对外暴露的核心解析函数
export const useMarkdown = (markdown: string) => {
  // 解析 frontmatter 元信息
  const frontmatter = parseFrontmatter(markdown);
  // 移除 frontmatter 部分，只保留正文
  const contentWithoutFrontmatter = markdown.replace(/^---\s*([\s\S]*?)\s*---/, "").trim();
  // 将 Markdown 解析为带高亮的 HTML
  const html = marked.parse(contentWithoutFrontmatter);

  return {
    frontmatter, // 文章元信息（标题、日期、标签等）
    html, // 解析后的 HTML（含高亮代码块）
    raw: markdown, // 原始 Markdown 内容
  };
};

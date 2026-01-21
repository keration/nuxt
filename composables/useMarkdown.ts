// composables/useMarkdown.ts
import { marked, Renderer } from "marked";
import hljs from "highlight.js";
import type { HighlightResult } from "highlight.js";
import "highlight.js/styles/atom-one-dark.min.css";

// ❶ 导出核心类型（解决[id].vue中找不到MarkdownParsedResult的报错）
export interface MarkdownParsedResult {
  frontmatter: Record<string, any>; // 文章前置元信息（标题/日期/标签等）
  html: string; // 解析后的HTML内容
  raw: string; // 原始Markdown内容（替代之前的content）
}

// ❷ 补充marked code节点的类型（解决隐式any）
interface MarkedCodeNode {
  text: string; // 纯代码内容（不含```标识）
  lang?: string; // 代码语言（如javascript/vue）
}

// 重置marked配置
marked.setOptions({
  gfm: true, // 支持GitHub Flavored Markdown
  breaks: true, // 换行符转换为<br>
  async: false,
  langPrefix: "language-",
});

// 自定义渲染器（核心：代码高亮，补全类型注解）
const renderer = new Renderer();
// 补全code渲染函数的参数类型（解决node/options隐式any）
renderer.code = (code: string, lang?: string): string => {
  // 步骤1：处理空值兜底
  const rawCode = code || "";
  const language = (lang || "javascript").toLowerCase().trim();

  // 步骤2：处理转义字符，还原原生代码
  const unescapedCode = rawCode
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");

  // 步骤3：执行hljs高亮（全程容错）
  let highlightedCode = unescapedCode;
  try {
    if (hljs.getLanguage(language)) {
      const highlightResult: HighlightResult = hljs.highlight(unescapedCode, { language });
      highlightedCode = highlightResult.value ?? unescapedCode;
    }
  } catch (err) {
    console.warn("⚠️ 代码高亮失败（降级为原始代码）：", err);
  }

  // 步骤4：返回带样式的代码块HTML（优化样式适配暗黑模式）
  return `<pre class="hljs language-${language}" style="padding: 1.5rem; border-radius: 8px; background: #282c34; overflow-x: auto; font-family: Consolas, Monaco, monospace; color: #abb2bf;"><code class="language-${language}">${highlightedCode}</code></pre>`;
};

// 绑定渲染器
marked.use({ renderer });

// ❸ 解析Frontmatter（补全类型注解）
const parseFrontmatter = (markdown: string): Record<string, any> => {
  const frontmatter: Record<string, any> = {};
  const frontmatterMatch = markdown.match(/^---\s*([\s\S]*?)\s*---/);

  if (frontmatterMatch?.[1]) {
    frontmatterMatch[1].split("\n").forEach((line) => {
      const [key, ...valueParts] = line.split(":").map((item) => item.trim());
      if (!key || valueParts.length === 0) return;

      let value = valueParts.join(":");
      // 处理数组类型（如tags: [nuxt, vue]）
      if (value.startsWith("[") && value.endsWith("]")) {
        try {
          value = JSON.parse(value.replace(/'/g, '"'));
        } catch (err) {
          console.warn("⚠️ Frontmatter数组解析失败：", err);
        }
      }
      // 处理字符串类型（如title: "我的文章"）
      else if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }

      frontmatter[key] = value;
    });
  }

  return frontmatter;
};

// ❹ 暴露核心函数（补全返回值类型）
export const useMarkdown = async (markdown: string): Promise<MarkdownParsedResult> => {
  const frontmatter = parseFrontmatter(markdown);
  // 移除frontmatter部分，只保留正文
  const content = markdown.replace(/^---\s*([\s\S]*?)\s*---/, "").trim();
  // 解析Markdown为HTML
  const html = marked.parse(content) as string;
  // 返回类型匹配MarkdownParsedResult（raw对应原始markdown）
  return { frontmatter, html, raw: markdown };
};

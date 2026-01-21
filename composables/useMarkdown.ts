// ❶ 修复：移除不存在的Code导入，仅保留marked/RawRenderer（适配17.x类型导出）
import { marked, Renderer, type MarkedOptions } from "marked";
import hljs from "highlight.js";
import type { HighlightResult, Language } from "highlight.js";
// 确保样式导入路径正确
import "highlight.js/styles/atom-one-dark.min.css";

// 导出核心类型（兼容所有值类型）
export interface MarkdownParsedResult {
  frontmatter: Record<string, string | number | boolean | string[] | any>;
  html: string;
  raw: string;
}

// ❷ 修复：移除marked 17.x不存在的headerIds配置（解决2353报错）
const markedOptions: MarkedOptions = {
  gfm: true, // 仅保留17.x支持的配置
  breaks: true, // 换行符转<br>
  async: false, // 禁用异步解析
  // 移除headerIds（17.x已移除该配置）
};
marked.setOptions(markedOptions);

// ❸ 修复：Renderer.code参数类型（不用Code类型，直接标注结构）
const createCustomRenderer = (): Renderer => {
  const renderer = new Renderer();

  // 核心：直接标注参数结构，避开不存在的Code类型（解决2305报错）
  renderer.code = (rawCodeObj: { text?: string; lang?: string; escaped?: boolean }): string => {
    // 兜底：确保text是字符串
    const rawCode = (rawCodeObj.text ?? "").trim();
    // 语言兜底：默认javascript
    const targetLang = (rawCodeObj.lang ?? "javascript").toLowerCase().trim();

    // 还原转义字符
    const unescapedCode = rawCode
      .replace(/&gt;/g, ">")
      .replace(/&lt;/g, "<")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, "&");

    // hljs高亮（类型适配）
    let highlightedCode = unescapedCode;
    try {
      const supportedLang: Language | undefined = hljs.getLanguage(targetLang);
      if (supportedLang) {
        const highlightResult: HighlightResult = hljs.highlight(unescapedCode, {
          language: targetLang,
          ignoreIllegals: true,
        });
        highlightedCode = highlightResult.value ?? unescapedCode;
      }
    } catch (err) {
      console.warn(`⚠️ [${targetLang}] 代码高亮失败：`, err);
    }

    // 返回高亮后的HTML
    return `
      <pre class="hljs language-${targetLang}" style="
        padding: 1.5rem;
        border-radius: 8px;
        background: #282c34 !important;
        overflow-x: auto;
        font-family: Consolas, Monaco, 'Courier New', monospace;
        color: #abb2bf;
        margin: 1rem 0;
      ">
        <code class="language-${targetLang}">${highlightedCode}</code>
      </pre>
    `.trim();
  };

  return renderer;
};

// 绑定渲染器
marked.use({ renderer: createCustomRenderer() });

// ❹ 修复：添加类型守卫，避免string | string[]调用split（解决2339报错）
const parseFrontmatter = (markdown: string): Record<string, string | number | boolean | string[] | any> => {
  if (!markdown || typeof markdown !== "string") return {};

  const frontmatter: Record<string, string | number | boolean | string[] | any> = {};
  const frontmatterMatch = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/);

  if (!frontmatterMatch?.[1]) return frontmatter;

  // 逐行解析
  frontmatterMatch[1]
    .split(/\r?\n/)
    .filter((line) => line.trim() && !line.trim().startsWith("#"))
    .forEach((line) => {
      const colonIndex = line.indexOf(":");
      if (colonIndex === -1) return;

      const key = line.slice(0, colonIndex).trim();
      // 初始值强制为string（因为line.slice返回string）
      let valueStr = line.slice(colonIndex + 1).trim();
      let value: string | number | boolean | string[] = valueStr;

      // 解析数组（核心：先判断是string才调用split，解决2339报错）
      if (typeof valueStr === "string" && valueStr.startsWith("[") && valueStr.endsWith("]")) {
        try {
          const parsedArr = JSON.parse(valueStr.replace(/'/g, '"'));
          value = Array.isArray(parsedArr) ? parsedArr : valueStr;
        } catch (err) {
          console.warn(`⚠️ Frontmatter数组解析失败 [${key}]：`, err);
          // 类型守卫：确保是string才split
          value = valueStr
            .slice(1, -1)
            .split(",")
            .map((item: string) => item.trim().replace(/['"]/g, ""));
        }
      }
      // 解析布尔值
      else if (valueStr === "true" || valueStr === "false") {
        value = JSON.parse(valueStr);
      }
      // 解析数字
      else if (typeof valueStr === "string" && !isNaN(Number(valueStr))) {
        value = Number(valueStr);
      }
      // 解析字符串（移除引号）
      else if (
        typeof valueStr === "string" &&
        ((valueStr.startsWith('"') && valueStr.endsWith('"')) || (valueStr.startsWith("'") && valueStr.endsWith("'")))
      ) {
        value = valueStr.slice(1, -1);
      }

      frontmatter[key] = value;
    });

  return frontmatter;
};

// 核心暴露函数
export const useMarkdown = async (markdown: string): Promise<MarkdownParsedResult> => {
  const rawMarkdown = (markdown ?? "").trim();

  try {
    const frontmatter = parseFrontmatter(rawMarkdown);
    const content = rawMarkdown.replace(/^---\r?\n([\s\S]*?)\r?\n---/, "").trim();
    const html = marked.parse(content) as string;

    return {
      frontmatter,
      html,
      raw: rawMarkdown,
    };
  } catch (err) {
    console.error("❌ Markdown解析失败：", err);
    return {
      frontmatter: {},
      html: `<div class="text-red-500">解析失败：${(err as Error).message}</div>`,
      raw: rawMarkdown,
    };
  }
};

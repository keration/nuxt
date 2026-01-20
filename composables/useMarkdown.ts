// composables/useMarkdown.ts
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.min.css";

// 重置marked配置
marked.setOptions({
  gfm: true,
  breaks: true,
  async: false,
  langPrefix: "language-",
});

// 自定义渲染器（核心：从node对象提取text属性）
const renderer = new marked.Renderer();
renderer.code = (node: any, options: any) => {
  // 步骤1：从marked的code节点对象中提取真正的代码内容
  // node.text 是纯代码（不含```javascript标识），这才是需要高亮的内容
  const rawCode = node?.text || "";
  // 步骤2：强制转为字符串，兜底空值
  const code = typeof rawCode === "string" ? rawCode : String(rawCode || "");

  // 步骤3：处理转义字符，还原原生代码
  const unescapedCode = code
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");

  // 步骤4：提取语言（从node对象的lang属性）
  const language = (node?.lang || "javascript").toLowerCase().trim();

  // 步骤5：执行hljs高亮（全程容错）
  let highlightedCode = unescapedCode;
  try {
    if (hljs.getLanguage(language)) {
      const highlightResult = hljs.highlight(unescapedCode, { language });
      highlightedCode = highlightResult?.value ?? unescapedCode;
    }
  } catch (err) {
    console.warn("⚠️ 代码高亮失败（降级为原始代码）：", err);
  }

  // 步骤6：返回纯字符串HTML，避免解析问题
  return `<pre class="hljs language-${language}" style="padding: 1.5rem; border-radius: 8px; background: #282c34; overflow-x: auto; font-family: Consolas, Monaco, monospace;"><code class="language-${language}">${highlightedCode}</code></pre>`;
};

// 绑定渲染器
marked.use({ renderer });

// 解析Frontmatter（无修改）
const parseFrontmatter = (markdown: string) => {
  const frontmatter: Record<string, any> = {};
  const frontmatterMatch = markdown.match(/^---\s*([\s\S]*?)\s*---/);
  if (frontmatterMatch?.[1]) {
    frontmatterMatch[1].split("\n").forEach((line) => {
      const [key, ...valueParts] = line.split(":").map((item) => item.trim());
      if (!key || valueParts.length === 0) return;
      let value = valueParts.join(":");
      if (value.startsWith("[") && value.endsWith("]")) {
        try {
          value = JSON.parse(value.replace(/'/g, '"'));
        } catch {}
      } else if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      frontmatter[key] = value;
    });
  }
  return frontmatter;
};

// 暴露核心函数
export const useMarkdown = async (markdown: string) => {
  const frontmatter = parseFrontmatter(markdown);
  const content = markdown.replace(/^---\s*([\s\S]*?)\s*---/, "").trim();
  const html = marked.parse(content);
  return { frontmatter, html, raw: markdown };
};

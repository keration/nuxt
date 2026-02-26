// server/utils/articles.ts
import fs from "fs/promises";
import path from "path";
import { marked } from "marked";

export interface ArticleMeta {
  id: string;
  frontmatter: {
    title: string;
    date: string;
    updated?: string;
    category: string;
    tags: string[];
    description?: string;
  };
  path: string;
  body?: string;
}

// 项目根路径（替换为你的实际路径）
const PROJECT_ROOT = "c:/Users/admin/Desktop/nuxt";

// 服务器端frontmatter解析函数
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
      let valueStr = line.slice(colonIndex + 1).trim();
      let value: string | number | boolean | string[] = valueStr;

      // 解析数组
      if (typeof valueStr === "string" && valueStr.startsWith("[") && valueStr.endsWith("]")) {
        try {
          const parsedArr = JSON.parse(valueStr.replace(/'/g, '"'));
          value = Array.isArray(parsedArr) ? parsedArr : valueStr;
        } catch (err) {
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

// 服务器端markdown解析函数
const parseMarkdown = async (content: string): Promise<{ frontmatter: any; body: string }> => {
  try {
    const frontmatter = parseFrontmatter(content);
    const body = content.replace(/^---\r?\n([\s\S]*?)\r?\n---/, "").trim();

    return {
      frontmatter,
      body,
    };
  } catch (err) {
    console.error("❌ Markdown解析失败：", err);
    return {
      frontmatter: {},
      body: content,
    };
  }
};

export const getAllArticlesMeta = async (locale?: string): Promise<ArticleMeta[]> => {
  const articlesDir = path.join(PROJECT_ROOT, "content", "articles");

  // 检查目录是否存在
  try {
    await fs.access(articlesDir);
  } catch {
    console.error("❌ 文章目录不存在：", articlesDir);
    return [];
  }

  const files = await fs.readdir(articlesDir);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));

  if (markdownFiles.length === 0) {
    console.warn("⚠️ content目录下无.md文件");
    return [];
  }
  // 将文件按 base id 分组，支持 id.md 和 id.<lang>.md
  const groups: Record<string, { default?: string; localized: Record<string, string> }> = {};
  const langRegex = /(.+)\.(zh-CN|zh|en)$/i;

  for (const file of markdownFiles) {
    const name = file.slice(0, -3); // remove .md
    const m = name.match(langRegex);
    if (m) {
      const base = String(m[1]);
      const lang = String(m[2]);
      groups[base] = groups[base] || { localized: {} };
      groups[base]!.localized[lang] = path.join(articlesDir, file);
    } else {
      const base = name;
      groups[base] = groups[base] || { localized: {} };
      groups[base]!.default = path.join(articlesDir, file);
    }
  }

  const articles: ArticleMeta[] = [];
  for (const base of Object.keys(groups)) {
    const group = groups[base]!;
    // 选择文件优先级：完整 locale (zh-CN) -> short (zh/en) -> default
    let chosenPath = group.default || null;
    if (locale) {
      const full = group.localized[locale as string];
      if (full) chosenPath = full;
      else {
        const short = (String(locale).split("-")[0] || "") as string;
        if (group.localized[short]) chosenPath = group.localized[short];
      }
    }

    if (!chosenPath) {
      // 如果没有任何匹配文件，跳过
      continue;
    }

    try {
      const content = await fs.readFile(chosenPath, "utf-8");
      const { frontmatter, body } = await parseMarkdown(content);

      articles.push({
        id: base,
        frontmatter: {
          title: (frontmatter.title as string) || base,
          date: (frontmatter.date as string) || "未发布",
          updated: frontmatter.updated,
          category: (frontmatter.category as string) || "未分类",
          tags: (frontmatter.tags as any) || [],
          description: (frontmatter.description as string) || "暂无简介",
        },
        path: `/${base}`,
        body,
      });
    } catch (err: any) {
      console.warn(`⚠️ 解析文章 ${base} 失败：`, err.message);
      articles.push({
        id: base,
        frontmatter: {
          title: base,
          date: "未发布",
          category: "未分类",
          tags: [],
          description: "解析失败（格式错误）",
        },
        path: `/${base}`,
        body: "",
      });
    }
  }

  // 按发布时间倒序排序
  return articles.sort((a, b) => {
    const dateA = a.frontmatter.date === "未发布" ? new Date(0) : new Date(a.frontmatter.date);
    const dateB = b.frontmatter.date === "未发布" ? new Date(0) : new Date(b.frontmatter.date);
    return dateB.getTime() - dateA.getTime();
  });
};

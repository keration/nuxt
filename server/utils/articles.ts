// server/utils/articles.ts
import fs from "fs/promises";
import path from "path";
import { useMarkdown } from "~/composables/useMarkdown";

// 定义文章基础类型（兼容你现有返回结构）
export interface ArticleMeta {
  id: string; // 文章文件名（唯一标识）
  frontmatter: {
    title: string;
    date: string;
    updated?: string;
    category: string;
    tags: string[];
    description?: string;
  };
  path: string; // 前端跳转路径（如 /nuxt4-guide）
}

// 获取所有文章的元信息（适配你的 public/content 路径）
export const getAllArticlesMeta = async (): Promise<ArticleMeta[]> => {
  // ❶ 改为你的文章路径：public/content
  const articlesDir = path.resolve(process.cwd(), "public", "content");
  const files = await fs.readdir(articlesDir);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));

  const articles: ArticleMeta[] = [];
  for (const file of markdownFiles) {
    try {
      const id = file.replace(".md", "");
      const filePath = path.join(articlesDir, file);
      const content = await fs.readFile(filePath, "utf-8");

      // ❷ 复用你的 useMarkdown 解析 frontmatter（更健壮）
      const { frontmatter } = await useMarkdown(content);

      // ❸ 兜底处理（兼容你的现有逻辑）
      articles.push({
        id,
        frontmatter: {
          title: frontmatter.title || id,
          date: frontmatter.date || "未发布",
          updated: frontmatter.updated,
          category: frontmatter.category || "未分类",
          tags: frontmatter.tags || [],
          description: frontmatter.description || "暂无简介",
        },
        path: `/${id}`, // 保持和你现有接口一致的路径
      });
    } catch (err) {
      console.warn(`解析文章 ${file} 失败：`, err);
    }
  }

  // 按发布时间倒序排序
  return articles.sort((a, b) => {
    const dateA = a.frontmatter.date === "未发布" ? new Date(0) : new Date(a.frontmatter.date);
    const dateB = b.frontmatter.date === "未发布" ? new Date(0) : new Date(b.frontmatter.date);
    return dateB.getTime() - dateA.getTime();
  });
};

// server/utils/articles.ts
import fs from "fs/promises";
import path from "path";
import { useMarkdown } from "~/composables/useMarkdown";

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
}

// 项目根路径（替换为你的实际路径）
const PROJECT_ROOT = "c:/Users/admin/Desktop/nuxt";

export const getAllArticlesMeta = async (): Promise<ArticleMeta[]> => {
  const articlesDir = path.join(PROJECT_ROOT, "public", "content");

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

  const articles: ArticleMeta[] = [];
  for (const file of markdownFiles) {
    try {
      const id = file.replace(".md", "");
      const filePath = path.join(articlesDir, file);
      const content = await fs.readFile(filePath, "utf-8");

      // 调用修复后的useMarkdown
      const { frontmatter } = await useMarkdown(content);

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
        path: `/${id}`,
      });
    } catch (err: any) {
      console.warn(`⚠️ 解析文章 ${file} 失败：`, err.message);
      // 容错：即使解析失败，也添加基础数据，避免接口空返回
      const id = file.replace(".md", "");
      articles.push({
        id,
        frontmatter: {
          title: id,
          date: "未发布",
          category: "未分类",
          tags: [],
          description: "解析失败（格式错误）",
        },
        path: `/${id}`,
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

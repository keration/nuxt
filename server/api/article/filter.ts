// server/api/articles/filter.ts
import { eventHandler, getQuery } from "h3";
import { getAllArticlesMeta } from "~/server/utils/articles";
import type { ArticleMeta } from "~/server/utils/articles"; // 类型 → import type

export default eventHandler(async (event) => {
  const query = getQuery(event);
  const tag = query.tag as string;
  const category = query.category as string;
  const year = query.year as string;
  const month = query.month as string;

  let articles = await getAllArticlesMeta();

  // ❶ 按标签筛选（适配 frontmatter.tags）
  if (tag) {
    articles = articles.filter((article) => article.frontmatter.tags.includes(tag));
  }

  // ❷ 按分类筛选（适配 frontmatter.category）
  if (category) {
    articles = articles.filter((article) => article.frontmatter.category === category);
  }

  // ❸ 按年月筛选（适配 frontmatter.date）
  if (year && month) {
    articles = articles.filter((article) => {
      const dateStr = article.frontmatter.date;
      if (dateStr === "未发布") return false;

      const date = new Date(dateStr);
      return date.getFullYear().toString() === year && (date.getMonth() + 1).toString().padStart(2, "0") === month;
    });
  }

  return {
    code: 200,
    data: articles,
  };
});

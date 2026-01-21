// server/api/categories.ts
import { eventHandler } from "h3";
import { getAllArticlesMeta } from "~/server/utils/articles";

export default eventHandler(async () => {
  const articles = await getAllArticlesMeta();

  // ❶ 适配嵌套的 frontmatter.category
  const categoryMap: Record<string, number> = {};
  articles.forEach((article) => {
    categoryMap[article.frontmatter.category] = (categoryMap[article.frontmatter.category] || 0) + 1;
  });

  const categories = Object.entries(categoryMap)
    .map(([name, count]) => ({
      name,
      count,
    }))
    .sort((a, b) => b.count - a.count);

  return {
    code: 200,
    data: categories,
  };
});

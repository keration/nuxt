// server/api/tags.ts
import { eventHandler } from "h3";
import { getAllArticlesMeta } from "~/server/utils/articles";

export default eventHandler(async () => {
  const articles = await getAllArticlesMeta();

  // ❶ 适配嵌套的 frontmatter.tags
  const tagMap: Record<string, number> = {};
  articles.forEach((article) => {
    article.frontmatter.tags.forEach((tag) => {
      tagMap[tag] = (tagMap[tag] || 0) + 1;
    });
  });

  const tags = Object.entries(tagMap)
    .map(([name, count]) => ({
      name,
      count,
    }))
    .sort((a, b) => b.count - a.count);

  return {
    code: 200,
    data: tags,
  };
});

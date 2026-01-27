// server/api/archives.ts
import { eventHandler } from "h3";
import { getAllArticlesMeta } from "~/server/utils/articles";
import type { ArchiveItem } from "~/types/api"; // 复用全局类型
// import type { ArticleMeta } from "~/server/utils/articles"; // 类型 → import type

export default eventHandler(async () => {
  const articles = await getAllArticlesMeta();

  const archiveMap: Record<string, ArchiveItem> = {};
  articles.forEach((article) => {
    const dateStr = article.frontmatter.date;
    if (dateStr === "未发布") return; // 跳过未发布的文章

    const date = new Date(dateStr);
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const monthName = `${date.getMonth() + 1}月`;
    const key = `${year}-${month}`;

    if (!archiveMap[key]) {
      archiveMap[key] = { year, month, monthName, articles: [] };
    }
    archiveMap[key].articles.push(article);
  });

  const archives = Object.values(archiveMap).sort((a, b) => {
    return `${b.year}${b.month}`.localeCompare(`${a.year}${a.month}`);
  });

  return {
    code: 200,
    data: archives,
  };
});

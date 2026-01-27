import { getAllArticlesMeta } from "~/server/utils/articles";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const searchTerm = (query.q as string)?.trim();

  if (!searchTerm) {
    return {
      code: 400,
      message: "搜索关键词不能为空",
      data: [],
    };
  }

  try {
    // 获取所有文章
    const allArticles = await getAllArticlesMeta();

    // 客户端搜索逻辑
    const searchResults = allArticles.filter((article) => {
      const title = article.frontmatter?.title?.toLowerCase() || "";
      const description = article.frontmatter?.description?.toLowerCase() || "";
      const tags = article.frontmatter?.tags?.join(" ").toLowerCase() || "";
      const content = article.body?.toLowerCase() || "";

      const searchLower = searchTerm.toLowerCase();

      return (
        title.includes(searchLower) ||
        description.includes(searchLower) ||
        tags.includes(searchLower) ||
        content.includes(searchLower)
      );
    });

    return {
      code: 200,
      message: "搜索成功",
      data: searchResults,
    };
  } catch (error) {
    console.error("搜索错误:", error);
    return {
      code: 500,
      message: "搜索失败",
      data: [],
    };
  }
});

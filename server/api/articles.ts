// server/api/articles.ts
import { eventHandler } from "h3";
import { getAllArticlesMeta } from "~/server/utils/articles";

export default eventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const page = parseInt(query.page as string) || 1;
    const limit = parseInt(query.limit as string) || 10;

    // 复用统一的文章解析逻辑
    const allArticles = await getAllArticlesMeta();

    // 分页逻辑
    const total = allArticles.length;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const articles = allArticles.slice(startIndex, endIndex);

    return {
      code: 200,
      data: articles,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasNext: endIndex < total,
        hasPrev: page > 1,
      },
      message: "获取文章列表成功",
    };
  } catch (err: any) {
    console.error("获取文章列表失败：", err);
    return {
      code: 500,
      message: `获取列表失败：${err.message}`,
    };
  }
});

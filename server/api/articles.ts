// server/api/articles.ts
import { eventHandler } from "h3";
import { getAllArticlesMeta } from "~/server/utils/articles";

export default eventHandler(async () => {
  try {
    // 复用统一的文章解析逻辑
    const articles = await getAllArticlesMeta();

    return {
      code: 200,
      data: articles,
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

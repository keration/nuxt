import { serverQueryContent } from "#content";

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
    // 使用 content query 进行搜索
    const articles = await serverQueryContent(event)
      .where({
        _type: "markdown",
        $or: [
          { title: { $regex: searchTerm, $options: "i" } },
          { description: { $regex: searchTerm, $options: "i" } },
          { tags: { $in: [new RegExp(searchTerm, "i")] } },
          { body: { $regex: searchTerm, $options: "i" } },
        ],
      })
      .sort({ date: -1 })
      .find();

    return {
      code: 200,
      message: "搜索成功",
      data: articles,
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

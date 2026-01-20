// server/api/article/[id].ts
import { eventHandler, H3Event } from "h3";

export default eventHandler(async (event: H3Event) => {
  // 兜底 params，避免 undefined
  const params = (event.context.params as Record<string, string>) || {};
  const id = params?.id;

  if (!id) {
    return { code: 400, message: "缺少文章ID" };
  }

  try {
    // 兼容Windows低版本Node，去掉node:前缀
    const fs = await import("fs/promises");
    const path = await import("path");

    // 正确拼接文件路径（模板字符串带反引号）
    const filePath = path.join(process.cwd(), "public/content", `${id}.md`);

    // 提前验证文件是否存在
    try {
      await fs.access(filePath);
    } catch {
      return { code: 404, message: `文章 ${id}.md 不存在` };
    }

    // 读取Markdown文件内容
    const mdContent = await fs.readFile(filePath, "utf-8");
    return {
      code: 200,
      data: { content: mdContent },
      message: "获取文章成功",
    };
  } catch (err: any) {
    console.error("服务端执行错误：", err);
    return { code: 500, message: `服务端错误：${err.message}` };
  }
});

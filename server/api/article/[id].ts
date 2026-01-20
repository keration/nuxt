// server/api/article/[id].ts
// 1. 显式导入 h3 的 eventHandler 和 H3Event 类型（消除废弃警告的核心）
import { eventHandler, H3Event } from "h3";

// 2. 用 eventHandler 显式包裹处理器函数（符合新版 h3 规范）
export default eventHandler(async (event: H3Event) => {
  // 兜底 params，避免 undefined 错误
  const params = (event.context.params as Record<string, string>) || {};
  const id = params?.id;

  if (!id) {
    return { code: 400, message: "缺少文章ID" };
  }

  try {
    // 导入 Node.js 内置模块（新版规范写法）
    const fs = await import("node:fs/promises");
    const path = await import("node:path");

    // 修复：模板字符串必须用反引号包裹（之前少了 ` 导致语法错误）
    const filePath = path.join(process.cwd(), "public/content", `${id}.md`);
    const mdContent = await fs.readFile(filePath, "utf-8");

    return {
      code: 200,
      data: { content: mdContent },
      message: "获取文章成功",
    };
  } catch (err) {
    console.error("服务端读取文件错误:", err);
    // 修复：模板字符串反引号
    return { code: 404, message: `文章 ${id}.md 不存在` };
  }
});

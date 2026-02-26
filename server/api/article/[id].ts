// server/api/article/[id].ts
import { eventHandler, H3Event, getQuery } from "h3";

export default eventHandler(async (event: H3Event) => {
  // Nuxt4 下 params 兜底处理
  const params = Object.assign({}, event.context.params) as Record<string, string>;
  const id = params.id?.trim() || "";

  if (!id) {
    return { code: 400, message: "缺少文章ID" };
  }

  try {
    // 导入原生模块（兼容 Windows 低版本 Node）
    const fs = await import("fs/promises");
    const path = await import("path");

    // Nuxt4 路径拼接：用 path.resolve 确保绝对路径稳定
    const rootDir = process.cwd();
    const contentDir = path.resolve(rootDir, "content", "articles");
    const filePath = path.resolve(contentDir, `${id}.md`);

    // 【排查关键】打印路径和目录文件
    // console.log("Nuxt4 项目根目录：", rootDir);
    // console.log("目标文件路径：", filePath);
    // console.log("content 目录下的文件：", await fs.readdir(contentDir));

    // 支持多语言：优先查找带语言后缀的文件（如: id.zh-CN.md / id.en.md），其次回退到无后缀文件
    const q = getQuery(event) as Record<string, any>;
    // 优先使用中间件注入的 locale，其次使用 query 参数
    const ctxLang = (event as any).context?.i18n?.locale as string | undefined;
    const requestedLang = ctxLang || (q.lang as string) || "";

    const candidates: string[] = [];
    if (requestedLang) {
      // 直接尝试完整语言标识
      candidates.push(path.resolve(contentDir, `${id}.${requestedLang}.md`));
      // 尝试短语言码（zh, en）
      const short = requestedLang.split("-")[0];
      if (short && short !== requestedLang) {
        candidates.push(path.resolve(contentDir, `${id}.${short}.md`));
      }
    }
    // 最后回退到默认文件
    candidates.push(filePath);

    let foundPath: string | null = null;
    for (const p of candidates) {
      try {
        await fs.access(p);
        foundPath = p;
        break;
      } catch (e) {
        // 不存在，继续尝试
      }
    }

    if (!foundPath) {
      return { code: 404, message: `文章 ${id}.md 不存在` };
    }

    // 读取 Markdown 内容
    const mdContent = await fs.readFile(foundPath, "utf-8");
    return {
      code: 200,
      data: { content: mdContent, id },
      message: "获取文章成功",
    };
  } catch (err: any) {
    console.error("服务端执行错误：", err);
    return { code: 500, message: `服务端错误：${err.message}` };
  }
});

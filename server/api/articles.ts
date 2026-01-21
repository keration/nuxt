// server/api/articles.ts
import { eventHandler } from "h3";
import fs from "fs/promises";
import path from "path";

export default eventHandler(async () => {
  try {
    // 拼接 public/content 目录路径
    const contentDir = path.resolve(process.cwd(), "public", "content");
    // 读取目录下所有 md 文件
    const files = await fs.readdir(contentDir);
    // 过滤出 .md 文件，提取文件名（去掉后缀）
    const articleIds = files.filter((file) => file.endsWith(".md")).map((file) => file.replace(".md", ""));

    // 批量获取每篇文章的 frontmatter（可选，也可以只返回 ID）
    const articles = [];
    for (const id of articleIds) {
      const filePath = path.resolve(contentDir, `${id}.md`);
      const content = await fs.readFile(filePath, "utf-8");
      // 简单解析 frontmatter（也可以复用你的 useMarkdown 方法）
      const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
      const frontmatter = frontmatterMatch
        ? Object.fromEntries(
            frontmatterMatch[1]
              .split("\n")
              .filter((line) => line)
              .map((line) => line.split(": ").map((part) => part.trim())),
          )
        : { title: id, date: "未发布", tags: [], description: "暂无简介" };

      articles.push({
        id,
        frontmatter,
        path: `/${id}`, // 前端跳转路径，对应 pages/[id].vue
      });
    }

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

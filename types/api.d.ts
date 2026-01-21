// types/api.d.ts
// 通用API响应类型
export interface ApiResponse<T = any> {
  code: number;
  data: T;
  message?: string;
}

// 导入server/utils/articles.ts中的ArticleMeta类型（方便复用）
import type { ArticleMeta } from "~/server/utils/articles";

// 标签/分类统计项类型
export interface TagCountItem {
  name: string;
  count: number;
}

// 归档项类型
export interface ArchiveItem {
  year: string;
  month: string;
  monthName: string;
  articles: ArticleMeta[];
}

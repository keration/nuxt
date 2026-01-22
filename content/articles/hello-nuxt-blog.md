---
title: "Nuxt4 + Nuxt Content 博客搭建全指南"
date: "2026-01-19"
tags: ["Nuxt4", "前端开发", "博客搭建", "Markdown"]
description: "从零开始用 Nuxt4 + Nuxt Content 搭建个人博客，支持 Markdown 解析、代码高亮、响应式布局，这是一篇样式齐全的示例文章"
cover: "https://picsum.photos/id/180/1200/600" # 文章封面图（占位图）
---

# Nuxt4 + Nuxt Content 博客搭建全指南

作为一名前端开发者，拥有一个个人博客是展示技术、记录成长的最佳方式。本文将带你从零开始用 Nuxt4 + Nuxt Content 搭建一个功能完善的个人博客，同时展示 Markdown 所有常用样式的渲染效果。

## 一、博客核心技术栈

本博客基于以下技术构建，兼顾开发效率和用户体验：

### 核心框架

- **Nuxt4**：基于 Vue3 的服务端渲染框架，提供路由、构建、优化等一站式解决方案
- **Nuxt Content**：官方内容模块，专门处理 Markdown/MDX 文档，支持自动路由、代码高亮
- **Nuxt UI**：官方 UI 组件库，提供响应式布局、组件样式，无需手写大量 CSS
- **Vue3 + TypeScript**：类型安全、开发高效的前端组合

### 辅助工具

- `nuxt-seo-kit`：一键优化 SEO（标题、描述、OpenGraph）
- `@nuxt/image`：图片懒加载、压缩、响应式处理
- `@nuxt/icon`：丰富的图标库，支持按需加载

## 二、Markdown 常用样式展示

### 2.1 文本格式

这是一段普通文本，支持 **粗体**、_斜体_、**_粗斜体_**，以及 ~~删除线~~。

- 无序列表项 1
- 无序列表项 2
  - 子列表项 2.1
  - 子列表项 2.2
- 无序列表项 3

1. 有序列表项 1
2. 有序列表项 2
3. 有序列表项 3
   1. 子列表项 3.1
   2. 子列表项 3.2

### 2.2 任务列表

- [x] 完成 Nuxt4 项目初始化
- [x] 安装 Nuxt Content 模块
- [x] 编写示例博客文章
- [ ] 实现文章分页功能
- [ ] 集成评论系统
- [ ] 部署上线

### 2.3 代码块（支持语法高亮）

#### JavaScript 代码

```javascript
// 异步加载文章列表
const loadArticles = async () => {
  const { data: articles } = await useAsyncData("articles", () => {
    return queryContent()
      .sort({ date: -1 }) // 按日期倒序
      .limit(10) // 每页显示10篇
      .find();
  });
  return articles;
};
```

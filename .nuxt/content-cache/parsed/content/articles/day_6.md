---
title: "re.0博客搭建"
date: "2026-02-4"
category: "博客7天速成"
tags: ["Nuxt4", "前端开发", "博客搭建", "Markdown"]
description: "第6天，持续忘本，继续忏悔（"
cover: "https://picsum.photos/id/180/1200/600" # 文章封面图（占位图）
---

# 忏悔录

1. ***实现站点统计功能***
  > 1. 接入giscus来提供评论功能。（不要在nuxt.config.ts中配置，因为不是每个页面都需要评论功能，否则每个页面都会发送请求到giscus服务器，导致不必要的404报错）
2. ***实现文章分享功能***
    >在文章详情页添加了分享到微信、微博、知乎、掘金的按钮
3. ***实现SEO优化***
    >安装并配置了 @nuxtjs/sitemap 模块，自动生成站点地图
    >在 nuxt.config.ts 中配置了全局元标签和 Open Graph 标签
    >在文章详情页实现了动态元标签生成，从 frontmatter 提取信息

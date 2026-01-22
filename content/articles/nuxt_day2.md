---
title: "Nuxt4 + Nuxt Content 博客搭建全指南"
date: "2026-01-21"
tags: ["Nuxt4", "前端开发", "博客搭建", "Markdown"]
description: "第2天，继续完善功能"
cover: "https://picsum.photos/id/180/1200/600" # 文章封面图（占位图）
---

# Day 1

1. ***实现文章目录功能***
  > 1. 自动提取 h1-h6 标题，生成可点击的锚点导航（长文章必备）
  ```javascript
  ```
  
2. ***元信息提取展示***
  > 1. md文件头部添加各种标签
  ```javascript
    import { marked } from "marked";
    import hljs from "highlight.js";
    import "highlight.js/styles/atom-one-dark.min.css";//黑暗模式
  ```
  > 2. 配置十分的繁琐，充斥着大量的正则表达式，可能有更好更简洁的方法

3. ***返回顶部/目录悬浮***
    >便民服务（~~确信~~）

4. ***标签聚合***
    >时间
    >分类
    1. 添加对应的服务端接口

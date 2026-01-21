---
title: "Nuxt4 + Nuxt Content 博客搭建全指南"
date: "2026-01-20"
tags: ["Nuxt4", "前端开发", "博客搭建", "Markdown"]
description: "从零开始用 Nuxt4 + Nuxt Content 搭建个人博客，支持 Markdown 解析、代码高亮、响应式布局，这是一篇样式齐全的示例文章"
cover: "https://picsum.photos/id/180/1200/600" # 文章封面图（占位图）
---

# Day 1

1. ***把读取markdown文件的功能转到后端服务器，通过接口获取文章内容***
  > 1. 引入node的 **h3** **fs** **path**
  ```javascript
    import { eventHandler, H3Event } from "h3";
    const fs = await import("fs/promises");
    const path = await import("path");
  ```
  显式的引入h3避免ts报错（~~但是我的h3一直在运行时输出警告~~）
  
  > 2. 获取接口数据
  ```javascript
    const { data } = await useFetch(`/api/article/${route.params.slug || 'hello-nuxt-blog'}`);
  ```
2. ***接口获取到数据后创建一个新的ts文件来解析md文件***
  > 1. 使用包管理工具下载highlight.js并在新建的ts文件引入
  ```javascript
    import { marked } from "marked";
    import hljs from "highlight.js";
    import "highlight.js/styles/atom-one-dark.min.css";//黑暗模式
  ```
  > 2. 配置十分的繁琐，充斥着大量的正则表达式，可能有更好更简洁的方法
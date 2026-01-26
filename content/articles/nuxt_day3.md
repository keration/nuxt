---
title: "re.0博客搭建"
date: "2026-01-22"
tags: ["Nuxt4", "前端开发", "博客搭建", "Markdown"]
description: "第3天，今日忙，只修改bug"
cover: "https://picsum.photos/id/180/1200/600" # 文章封面图（占位图）
---

# Day 1

1. ***实现文章目录功能***
  > 1. Windows 环境下，@nuxt/content 依赖的 better-sqlite3 原生模块编译失败，找不到对应的 .node 绑定文件，导致 Nuxt 项目无法启动。
  > 逆大天，还要下py和一个vs编译库（~~我***~~）问题最多的一集
  ```javascript
  ```
  > 2. 解决办法：
    > 1. 安装 better-sqlite3 依赖时，指定 --runtime=node18 选项，强制使用 Node.js 18 运行时编译模块。
    > 2. 确保系统中已安装 Python 3.8 或以上版本，以及 Visual Studio 2019 或以上版本，用于编译原生模块。
    > 3. 安装完成后，重新启动 Nuxt 项目，即可成功加载 better-sqlite3 模块。
    > 4.我选择不使用@nuxt/content<狗头保命>，原生（js渲染）启动！
  

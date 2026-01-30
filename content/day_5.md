---
title: "re.0博客搭建"
date: "2026-01-30"
tags: ["Nuxt4", "前端开发", "博客搭建", "Markdown"]
description: "第5天，忘本了，忏悔（"
cover: "https://picsum.photos/id/180/1200/600" # 文章封面图（占位图）
---

# 忏悔录

1. ***实现文章评论功能***
  > 1. 接入giscus来提供评论功能。（不要在nuxt.config.ts中配置，因为不是每个页面都需要评论功能，否则每个页面都会发送请求到giscus服务器，导致不必要的404报错）
  > 2. 配置giscus评论组件，包括仓库、分类、映射等参数。需要在giscus网站上创建一个新的评论分类，获取分类ID和仓库ID。同时，需要在Nuxt项目的nuxt.config.ts文件中配置giscus评论组件的参数。最重要的是github仓库的配置，需要确保仓库是公开的，允许评论，启用了giscusapp。
  > 3. 在文章页面引入giscus评论组件，确保评论功能正常运行。
    ```vue
    <div id="giscus-container" class="giscus"></div>
    ```
    **重要**：确保在引入giscus评论组件的脚本中设置了data-container-id属性，值为giscus-container，与评论组件的id一致。
    ```javascript
      script.setAttribute('data-container-id', 'giscus-container');
    ```
    其他：确保在引入giscus评论组件的脚本中设置了data-repo、data-repo-id、data-category、data-category-id等参数，值为giscus网站上配置的值。
  > 4. 测试评论功能。
    在文章页面打开评论功能，发一条评论（需要github账号登录授权，vpn）。
    好！重新启动。
    我去！怎么没有显示？<思考>
    原来是：接口返回数据的时候页面已经渲染完成，但是giscus评论组件的初始化是异步的，需要等组件加载完成后才能显示。
    解决：异步的初始化giscus即可
  

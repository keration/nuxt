<!-- pages/[slug].vue 文章详情页 -->
<template>
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <!-- 加载中 -->
    <div v-if="loading" class="text-center text-gray-500 text-xl">加载中...</div>
    
    <!-- 错误提示 -->
    <div v-if="error" class="text-center text-red-500 text-xl">❌ {{ error.message }}</div>

    <!-- 文章内容 -->
    <div v-else class="prose prose-lg max-w-none">
      <!-- 文章标题 -->
      <h1 class="text-3xl font-bold text-center mb-6">{{ frontmatter.title }}</h1>
      <!-- 文章元信息 -->
      <div class="text-center text-gray-500 mb-8">
        <span>📅 {{ frontmatter.date }}</span>
        <div class="flex justify-center gap-2 mt-2">
          <span v-for="tag in frontmatter.tags" :key="tag" class="bg-gray-100 px-2 py-1 rounded text-sm">
            🏷️ {{ tag }}
          </span>
        </div>
      </div>
      <!-- 核心：用 v-html 渲染带高亮的 HTML 内容 -->
      <div class="markdown-content" v-html="html"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMarkdown } from '~/composables/useMarkdown';

const route = useRoute();
const loading = ref(true);
const error = ref(null);
const frontmatter = ref({});
const html = ref('');

try {
  // 调用服务端接口获取 Markdown 内容
  const { data } = await useFetch(`/api/article/${route.params.slug || 'hello-nuxt-blog'}`);
  
  if (data.value.code !== 200) {
    throw new Error(data.value.message);
  }

  // 解析 Markdown（包含代码高亮）
  const parsed = useMarkdown(data.value.data.content);
  frontmatter.value = parsed.frontmatter;
  html.value = parsed.html;
} catch (err) {
  error.value = err;
} finally {
  loading.value = false;
}
</script>

<!-- 文章详情页（pages/hello-nuxt-blog.vue） -->
<style scoped>
/* 强制代码块样式，完全隔离全局干扰 */
.markdown-content pre {
  padding: 1.5rem !important;
  border-radius: 8px !important;
  background: #282c34 !important; /* atom-one-dark 主题背景 */
  overflow-x: auto !important;
  font-family: 'Consolas', 'Monaco', monospace !important;
}

/* 强制代码块内的文字样式 */
.markdown-content pre code {
  color: #abb2bf !important; /* 基础文字色 */
  font-size: 0.95rem !important;
  line-height: 1.6 !important;
}

/* 匹配 highlight.js 的语法类名（对应 atom-one-dark 主题） */
.markdown-content .language-javascript .keyword {
  color: #c678dd !important; /* 关键词（如 async、const） */
}
.markdown-content .language-javascript .string {
  color: #98c379 !important; /* 字符串 */
}
.markdown-content .language-javascript .function {
  color: #61afef !important; /* 函数名 */
}
.markdown-content .language-javascript .comment {
  color: #5c6370 !important; /* 注释 */
}
</style>
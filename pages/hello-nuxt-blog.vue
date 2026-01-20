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
// ❶ 删除错误的动态导入（Nuxt会自动导入useMarkdown）
// const useMarkdown = () => import('~/composables/useMarkdown').then(m => m.useMarkdown);

const route = useRoute();
const loading = ref(true);
const error = ref(null);
const frontmatter = ref({});
const html = ref('');

try {
  // 调用服务端接口获取 Markdown 内容
  const { data } = await useFetch(`/api/article/${route.params.slug || 'hello-nuxt-blog'}`);
  // ❷ 加容错：验证data.value是否存在，避免解构undefined
  if (!data.value) throw new Error("接口返回数据为空");
  if (data.value.code !== 200) throw new Error(data.value.message);
  // ❸ 验证content是否存在
  if (!data.value.data?.content) throw new Error("文章内容为空");

  // ❹ 直接调用自动导入的useMarkdown（无需动态导入）
  const parsed = await useMarkdown(data.value.data.content);
  frontmatter.value = parsed.frontmatter || {}; // 加兜底
  html.value = parsed.html || '';
} catch (err) {
  // ❺ 打印具体错误（看浏览器控制台，定位到底哪步错）
  console.error("前端解析/渲染错误：", err);
  error.value = err;
} finally {
  loading.value = false;
}
</script>

<style scoped>
/* 替换所有 ::v-deep 为 :deep() */
.markdown-content :deep(pre) {
  padding: 1.5rem !important;
  border-radius: 8px !important;
  background: #282c34 !important;
  overflow-x: auto !important;
  font-family: 'Consolas', 'Monaco', monospace !important;
}

.markdown-content :deep(pre code) {
  color: #abb2bf !important;
  font-size: 0.95rem !important;
  line-height: 1.6 !important;
}

/* 高亮样式 */
.markdown-content :deep(.hljs-keyword) {
  color: #c678dd !important;
}
.markdown-content :deep(.hljs-string) {
  color: #98c379 !important;
}
.markdown-content :deep(.hljs-comment) {
  color: #5c6370 !important;
  font-style: italic;
}
.markdown-content :deep(.hljs-function) {
  color: #61afef !important;
}
</style>
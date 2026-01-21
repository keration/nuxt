<template>
  <div class="mx-auto px-4 py-8 max-w-4xl">
    <div v-if="loading" class="text-center text-gray-500">加载中...</div>
    <div v-if="error" class="text-center text-red-500">❌ {{ error.message }}</div>
    <div v-else v-html="articleContent" class="prose prose-blue mx-auto" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMarkdown } from '~/composables/useMarkdown';

const route = useRoute();
const loading = ref(true);
const error = ref(null);
const articleContent = ref("");

try {
  // 根据路由 ID 请求对应文章
  const id = route.params.id;
  const { data } = await useFetch(`/api/article/${id}`);

  if (!data.value || data.value.code !== 200) {
    throw new Error(data.value?.message || "获取文章失败");
  }

  // 解析 markdown 为 HTML
  const parsedResult = await useMarkdown(data.value.data.content);
  articleContent.value = parsedResult.html;
} catch (err) {
  error.value = err;
  console.error("文章详情加载错误：", err);
} finally {
  loading.value = false;
}
</script>
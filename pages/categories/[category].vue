<template>
  <div class="container mx-auto px-4 py-8 max-w-5xl">
    <h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-8">
      分类：{{ route.params.category }}
    </h1>

    <!-- 文章列表 -->
    <div v-if="articles.length > 0" class="space-y-6">
      <div v-for="article in articles" :key="article.id"
        class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
        <router-link :to="`/${article.id}`"
          class="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline">
          {{ article.frontmatter.title }}
        </router-link>
        <p class="text-gray-600 dark:text-gray-400 mt-2">{{ article.frontmatter.description }}</p>
        <div class="flex flex-wrap gap-2 mt-3 text-sm">
          <span class="text-gray-500 dark:text-gray-500">发布时间：{{ article.frontmatter.date }}</span>
          <span class="text-gray-500 dark:text-gray-500">标签：{{ article.frontmatter.tags.join(', ') }}</span>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-10 text-gray-500 dark:text-gray-400">
      暂无该分类下的文章
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const articles = ref<any[]>([]);
const loading = ref(true);

// 按分类筛选文章
const fetchArticlesByCategory = async () => {
  const category = route.params.category as string;
  try {
    const { data } = await useFetch<{ code: number; message: string; data: any[] }>(`/api/article/filter?category=${encodeURIComponent(category)}`);
    if (data.value?.code === 200) {
      articles.value = data.value.data || [];
    }
  } catch (err) {
    console.error("筛选文章失败：", err);
  } finally {
    loading.value = false;
  }
};

// 路由参数变化时重新加载
watch(() => route.params.category, () => {
  fetchArticlesByCategory();
});

onMounted(() => {
  fetchArticlesByCategory();
});
</script>
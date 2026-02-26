<template>
  <div class="container mx-auto px-4 py-8 max-w-5xl">
    <h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-8">
      {{ t('tags') }}：{{ route.params.tag }}
    </h1>

    <div v-if="articles.length > 0" class="space-y-6">
      <div v-for="article in articles" :key="article.id"
        class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
        <!-- 改为 article.id -->
        <router-link :to="`/${article.id}`" class="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline">
          {{ article.frontmatter.title }}
        </router-link>
        <!-- 改为 article.frontmatter.description -->
        <p class="text-gray-600 dark:text-gray-400 mt-2">{{ article.frontmatter.description }}</p>
        <div class="flex flex-wrap gap-2 mt-3 text-sm">
          <span class="text-gray-500 dark:text-gray-500">{{ t('published') }}：{{ article.frontmatter.date }}</span>
          <span class="text-gray-500 dark:text-gray-500">{{ t('categories') }}：{{ article.frontmatter.category }}</span>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-10 text-gray-500 dark:text-gray-400">
      {{ t('tags.empty') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const route = useRoute();
const articles = ref<any[]>([]);
const loading = ref(true);

// 按标签筛选文章
const fetchArticlesByTag = async () => {
  const tag = route.params.tag as string;
  try {
    const response = await $fetch<{ code: number; message: string; data: any[] }>(`/api/article/filter?tag=${encodeURIComponent(tag)}`);
    if (response?.code === 200) {
      articles.value = response.data || [];
    }
  } catch (err) {
    console.error("筛选文章失败：", err);
  } finally {
    loading.value = false;
  }
};

// 路由参数变化时重新加载
watch(() => route.params.tag, () => {
  fetchArticlesByTag();
});

onMounted(() => {
  fetchArticlesByTag();
});
</script>

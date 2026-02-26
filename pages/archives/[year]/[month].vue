<template>
  <div class="container mx-auto px-4 py-8 max-w-5xl">
    <h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-8">
      {{ route.params.year }}年{{ route.params.month }}月 {{ t('archives') }}
    </h1>

    <!-- 文章列表 -->
    <div v-if="articles.length > 0" class="space-y-6">
      <div v-for="article in articles" :key="article.id"
        class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
        <router-link :to="`/${article.id}`"
          class="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline">
          {{ article.frontmatter.title }}
        </router-link>
        <p class="text-gray-600 dark:text-gray-400 mt-2">{{ article.description }}</p>
        <div class="flex flex-wrap gap-2 mt-3 text-sm">
          <span class="text-gray-500 dark:text-gray-500">{{ t('categories') }}：{{ article.category }}</span>
          <span class="text-gray-500 dark:text-gray-500">{{ t('tagsLabel') }}{{ article.tags.join(', ') }}</span>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-10 text-gray-500 dark:text-gray-400">
      {{ t('archives.empty') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const route = useRoute();
const articles = ref<any[]>([]);
const loading = ref(true);

// 按年月筛选文章
const fetchArticlesByArchive = async (): Promise<void> => {
  const year = route.params.year as string;
  const month = (route.params.month as string).padStart(2, '0'); // 补0（如1→01）
  try {
    const { data } = await useFetch<{ code: number; message: string; data: any[] }>(`/api/articles/filter?year=${year}&month=${month}`);
    if (data.value?.code === 200) {
      articles.value = data.value.data || [];
    }
  } catch (err) {
    console.error("筛选归档文章失败：", err);
  } finally {
    loading.value = false;
  }
};

// 路由参数变化时重新加载
watch([() => route.params.year, () => route.params.month], () => {
  fetchArticlesByArchive();
});

onMounted(() => {
  fetchArticlesByArchive();
});
</script>
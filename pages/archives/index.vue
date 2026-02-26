<template>
  <div class="container mx-auto px-4 py-8 max-w-5xl">
    <h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-8">{{ t('archives') }}</h1>

    <!-- 归档列表 -->
    <div v-if="archives.length > 0" class="space-y-8">
      <div v-for="item in archives" :key="`${item.year}-${item.month}`"
        class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-white">
          <router-link :to="`/archives/${item.year}/${item.month}`"
            class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {{ item.year }}年{{ item.monthName }}
          </router-link>
          <span class="ml-2 text-sm text-gray-500 dark:text-gray-400">({{ item.articles.length }}篇)</span>
        </h2>

        <!-- 该年月的文章列表 -->
        <ul class="mt-4 space-y-2">
          <li v-for="article in item.articles" :key="article.id">
            <router-link :to="`/${article.id}`"
              class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline">
              {{ article.title }}
            </router-link>
            <span class="ml-2 text-sm text-gray-500 dark:text-gray-400">{{ article.date }}</span>
          </li>
        </ul>
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
const archives = ref<any[]>([]);
const loading = ref(true);

// 获取归档数据
const fetchArchives = async (): Promise<void> => {
  try {
    const { data } = await useFetch<{ code: number; message: string; data: any[] }>('/api/archives');
    if (data.value?.code === 200) {
      archives.value = data.value.data || [];
    }
  } catch (err) {
    console.error("获取归档失败：", err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchArchives();
});
</script>
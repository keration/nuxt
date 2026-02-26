<template>
  <div class="container mx-auto px-4 py-8 max-w-5xl">
    <h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-8">{{ t('categories') }}</h1>

    <!-- 分类列表 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <router-link v-for="category in categories" :key="category.name" :to="`/categories/${category.name}`"
        class="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-blue-500 hover:text-white transition-colors">
        <h3 class="font-semibold text-lg">{{ category.name }}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ category.count }} {{ t('articlesSuffix') }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const categories = ref<any[]>([]);
const loading = ref(true);

// 获取所有分类
const fetchCategories = async () => {
  try {
    const { data } = await useFetch<{ code: number; message: string; data: any[] }>('/api/categories');
    if (data.value?.code === 200) {
      categories.value = data.value.data || [];
    }
  } catch (err) {
    console.error("获取分类失败：", err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchCategories();
});
</script>
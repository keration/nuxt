<template>
  <div class="container mx-auto px-4 py-8 max-w-5xl">
    <h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-8">标签</h1>
    
    <!-- 标签列表 -->
    <div v-if="tags.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="tag in tags" :key="tag.name"
        class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
        <NuxtLink :to="`/tags/${tag.name}`"
          class="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline">
          {{ tag.name }}
        </NuxtLink>
        <p class="text-gray-600 dark:text-gray-400 mt-2">{{ tag.count }} 篇文章</p>
      </div>
    </div>
    
    <div v-else class="text-center py-10 text-gray-500 dark:text-gray-400">
      暂无标签
    </div>
  </div>
</template>

<script setup lang="ts">
const tags = ref<any[]>([]);
const loading = ref(true);

// 获取所有标签
const fetchAllTags = async () => {
  try {
    const response = await $fetch<{ code: number; message: string; data: any[] }>('/api/tags');
    if (response?.code === 200) {
      tags.value = response.data || [];
    }
  } catch (err) {
    console.error("获取标签失败：", err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchAllTags();
});
</script>

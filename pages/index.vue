<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-200">
    <!-- 顶部导航（紧凑布局） -->
    <header
      class="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 shadow-sm border-b border-gray-100 dark:border-gray-800">
      <div class="container mx-auto px-4 py-2.5 max-w-3xl flex justify-between items-center">
        <a href="/" class="text-lg font-bold text-blue-600 dark:text-blue-400">Nuxt 技术博客</a>
        <nav class="flex items-center gap-4">
          <ul class="flex gap-4 text-sm">
            <li><a href="/"
                class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">首页</a>
            </li>
            <li><a href="/tags"
                class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">标签</a>
            </li>
            <li><a href="/categories"
                class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">分类</a>
            </li>
            <li><a href="/archives"
                class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">归档</a>
            </li>
          </ul>
          <!-- 暗黑模式按钮 -->
          <button @click="toggleDarkMode"
            class="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="切换暗黑模式">
          </button>
        </nav>
      </div>
    </header>

    <!-- 主内容（压缩留白，限制宽度） -->
    <main class="container mx-auto px-4 py-6 max-w-3xl">
      <!-- 博客标题（紧凑装饰） -->
      <div class="text-center mb-8 pt-4">
        <h1 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2 relative">
          我的 Nuxt4 技术博客
          <span
            class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-blue-500 rounded-full"></span>
        </h1>
        <p class="text-gray-600 dark:text-gray-400 text-sm">记录 Nuxt 学习之路，分享前端技术与实战经验</p>
      </div>

      <!-- 加载中 -->
      <div v-if="loading" class="text-center py-12">
        <div
          class="inline-block w-10 h-10 border-3 border-blue-100 dark:border-blue-900 border-t-blue-500 dark:border-t-blue-400 rounded-full animate-spin mb-3">
        </div>
        <p class="text-gray-500 dark:text-gray-400 text-sm">加载文章中...</p>
      </div>

      <!-- 错误提示 -->
      <div v-if="error" class="py-8 text-center bg-red-50 dark:bg-red-900/10 rounded-lg p-4">
        <div
          class=" bg-red-100 dark:bg-red-900/30 text-red-500 dark:text-red-400 rounded-full w-12 h-12 flex items-center justify-center mb-2">
        </div>
        <p class="text-red-500 dark:text-red-400 text-sm font-medium">{{ error.message }}</p>
        <button class="mt-3 px-4 py-1.5 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors"
          @click="refreshArticles">
          重新加载
        </button>
      </div>

      <!-- 文章列表（紧凑排版 + 柔和配色） -->
      <div v-else class="space-y-4">
        <article v-for="article in articles" :key="article.id"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div class="p-4">
            <NuxtLink :to="article.path" class="block">
              <h2
                class="flex justify-center text-base md:text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-2">
                {{ article.frontmatter?.title || article.id }}
              </h2>
            </NuxtLink>

            <!-- 文章元信息（紧凑对齐） -->
            <div class="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
              <span class="flex items-center gap-1">
                {{ article.frontmatter?.date || '未发布' }}
              </span>

              <span class="text-gray-300 dark:text-gray-600">•</span>

              <span class="flex items-center gap-1">
                <NuxtLink :to="`/categories/${article.frontmatter?.category || '未分类'}`"
                  class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {{ article.frontmatter?.category || '未分类' }}
                </NuxtLink>
              </span>

              <div class="flex flex-wrap gap-1 ml-auto">
                <NuxtLink v-for="tag of article.frontmatter?.tags || []" :key="tag" :to="`/tags/${tag}`"
                  class="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded text-xs hover:bg-blue-100 dark:hover:bg-blue-800/30 transition-colors">
                  {{ tag }}
                </NuxtLink>
              </div>
            </div>

            <!-- 文章简介（紧凑行高） -->
            <p class="text-gray-700 dark:text-gray-300 text-sm line-clamp-2 leading-tight mb-3 flex justify-center">
              {{ article.frontmatter?.description || '暂无简介，点击阅读全文了解更多内容...' }}
            </p>

            <!-- 阅读更多 -->
            <NuxtLink :to="article.path"
              class="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-xs font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors justify-end">
              阅读更多
            </NuxtLink>
          </div>
        </article>

        <!-- 空状态 -->
        <div v-if="articles.length === 0" class="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          <p class="text-gray-500 dark:text-gray-400 text-sm">暂无文章，快来创作你的第一篇博客吧！</p>
        </div>
      </div>
    </main>

    <!-- 页脚（紧凑布局） -->
    <footer class="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-8">
      <div class="container mx-auto px-4 py-4 max-w-3xl text-center text-gray-500 dark:text-gray-400 text-xs">
        <p>© {{ new Date().getFullYear() }} 我的 Nuxt4 技术博客 | 基于 Nuxt4 + Vue3 构建</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const loading = ref(true);
const error = ref(null);
const articles = ref([]);

// 暗黑模式状态
// const isDarkMode = computed(() => {
//   return document.documentElement.classList.contains('dark');
// });

// 切换暗黑模式
const toggleDarkMode = () => {
  const html = document.documentElement;
  html.classList.toggle('dark');
  localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
};

const refreshArticles = async (): Promise<void> => {
  loading.value = true;
  error.value = null;
  try {
    const response = await $fetch<{ code: number; message: string; data: [] }>("/api/articles");
    if (!response || response.code !== 200) {
      throw new Error(response?.message || "获取文章失败");
    }
    articles.value = response.data || [];
  } catch (err: any) {
    error.value = err.message || "获取文章失败";
  } finally {
    loading.value = false;
  }
};

// 初始化
onMounted(() => {
  // 恢复暗黑模式状态
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
  refreshArticles();
});
</script>

<style>
html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
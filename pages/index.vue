<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
    <!-- 顶部导航栏（新增标签/分类入口 + 暗黑模式切换） -->
    <header class="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div class="container mx-auto px-4 py-3 max-w-4xl flex justify-between items-center">
        <a href="/" class="text-xl font-bold text-blue-600 dark:text-blue-400">Nuxt 技术博客</a>
        <nav class="flex items-center gap-6">
          <ul class="flex gap-6">
            <li><a href="/" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">首页</a></li>
            <!-- ❶ 新增：标签入口 -->
            <li><a href="/tags" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">标签</a></li>
            <!-- ❷ 新增：分类入口 -->
            <li><a href="/categories" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">分类</a></li>
            <!-- ❸ 修正：归档入口（从#改为/archives） -->
            <li><a href="/archives" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">归档</a></li>
            <li><a href="/about" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">关于</a></li>
          </ul>
          <!-- ❹ 新增：暗黑模式切换按钮 -->
          <button 
            @click="toggleDarkMode"
            class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="切换暗黑模式"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="isDarkMode" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </nav>
      </div>
    </header>

    <!-- 主内容区（保持原有样式，优化分类/标签跳转） -->
    <main class="container mx-auto px-4 py-8 max-w-4xl">
      <!-- 博客标题区域 -->
      <div class="text-center mb-16 pt-6">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 relative">
          我的 Nuxt4 技术博客
          <span class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-blue-500 rounded-full"></span>
        </h1>
        <p class="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          记录 Nuxt 学习之路，分享前端技术与实战经验
        </p>
      </div>

      <!-- 加载中 -->
      <div v-if="loading" class="text-center py-20">
        <div class="inline-block w-12 h-12 border-4 border-blue-200 dark:border-blue-800 border-t-blue-500 dark:border-t-blue-400 rounded-full animate-spin mb-4"></div>
        <p class="text-gray-500 dark:text-gray-400 text-xl">正在加载文章列表...</p>
      </div>

      <!-- 错误提示 -->
      <div v-if="error" class="py-16 text-center">
        <div class=" bg-red-100 dark:bg-red-900/30 text-red-500 dark:text-red-400 rounded-full w-16 h-16 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p class="text-red-500 dark:text-red-400 text-xl font-medium">{{ error.message }}</p>
        <button 
          class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          @click="refreshArticles"
        >
          重新加载
        </button>
      </div>

      <!-- 文章列表（核心修改：分类/标签可点击跳转） -->
      <div v-else class="space-y-6 md:space-y-8">
        <article
          v-for="article in articles"
          :key="article.id"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 overflow-hidden"
        >
          <div class="p-6 md:p-8">
            <NuxtLink :to="article.path" class="block">
              <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-3">
                {{ article.frontmatter?.title || article.id }}
              </h2>
            </NuxtLink>

            <!-- 文章元信息（新增：分类可点击） -->
            <div class="flex flex-wrap items-center gap-3 md:gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <!-- 发布时间 -->
              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ article.frontmatter?.date || '未发布' }}
              </span>
              
              <span class="hidden md:inline-block">•</span>
              
              <!-- ❺ 新增：分类可点击跳转 -->
              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <NuxtLink 
                  :to="`/categories/${article.frontmatter?.category || '未分类'}`"
                  class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {{ article.frontmatter?.category || '未分类' }}
                </NuxtLink>
              </span>
              
              <span class="hidden md:inline-block">•</span>
              
              <!-- ❻ 优化：标签可点击跳转 -->
              <div class="flex flex-wrap gap-2">
                <NuxtLink
                  v-for="tag of article.frontmatter?.tags || []"
                  :key="tag"
                  :to="`/tags/${tag}`"
                  class="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-full text-xs hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors"
                >
                  {{ tag }}
                </NuxtLink>
              </div>
            </div>

            <!-- 文章简介 -->
            <p class="text-gray-700 dark:text-gray-300 line-clamp-2 md:line-clamp-3 leading-relaxed mb-5">
              {{ article.frontmatter?.description || '暂无简介，点击阅读全文了解更多内容...' }}
            </p>

            <!-- 阅读更多按钮 -->
            <NuxtLink
              :to="article.path"
              class="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              阅读更多
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>
          </div>
        </article>

        <!-- 空状态 -->
        <div v-if="articles.length === 0" class="text-center py-20">
          <p class="text-gray-500 dark:text-gray-400 text-xl">暂无文章，快来创作你的第一篇博客吧！</p>
        </div>
      </div>
    </main>

    <!-- 页脚 -->
    <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
      <div class="container mx-auto px-4 py-8 max-w-4xl text-center text-gray-500 dark:text-gray-400">
        <p>© {{ new Date().getFullYear() }} 我的 Nuxt4 技术博客 | 基于 Nuxt4 构建</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const loading = ref(true);
const error = ref(null);
const articles = ref([]);

// ❶ 新增：暗黑模式状态（基于localStorage）
const isDarkMode = computed(() => {
  return document.documentElement.classList.contains('dark');
});

// ❷ 新增：切换暗黑模式方法
const toggleDarkMode = () => {
  const html = document.documentElement;
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  } else {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  }
};

// ❸ 重构：抽离加载逻辑，使用onMounted（更规范）
const refreshArticles = async () => {
  loading.value = true;
  error.value = null;
  try {
    // 注意：Nuxt4中useFetch需要在setup/onMounted中使用
    const { data } = await useFetch("/api/articles");
    if (!data.value) throw new Error("接口返回数据为空");
    if (data.value.code !== 200) {
      throw new Error(data.value.message || "获取文章列表失败");
    }
    articles.value = data.value.data || [];
  } catch (err) {
    error.value = err;
    console.error("首页加载错误：", err);
  } finally {
    loading.value = false;
  }
};

// 初始加载（放在onMounted中，符合Vue生命周期）
onMounted(() => {
  refreshArticles();
});
</script>

<!-- 初始化暗黑模式（优化） -->
<script>
// 页面加载时初始化暗黑模式
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
</script>
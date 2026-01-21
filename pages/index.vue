<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
    <!-- 顶部导航栏（新增，提升博客完整性） -->
    <header class="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div class="container mx-auto px-4 py-3 max-w-4xl flex justify-between items-center">
        <a href="/" class="text-xl font-bold text-blue-600 dark:text-blue-400">Nuxt 技术博客</a>
        <nav>
          <ul class="flex gap-6">
            <li><a href="/" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">首页</a></li>
            <li><a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">归档</a></li>
            <li><a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">关于</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- 主内容区 -->
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

      <!-- 加载中（美化） -->
      <div v-if="loading" class="text-center py-20">
        <div class="inline-block w-12 h-12 border-4 border-blue-200 dark:border-blue-800 border-t-blue-500 dark:border-t-blue-400 rounded-full animate-spin mb-4"></div>
        <p class="text-gray-500 dark:text-gray-400 text-xl">正在加载文章列表...</p>
      </div>

      <!-- 错误提示（美化） -->
      <div v-if="error" class="py-16 text-center">
        <div class="inline-block bg-red-100 dark:bg-red-900/30 text-red-500 dark:text-red-400 rounded-full w-16 h-16 flex items-center justify-center mb-4">
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

      <!-- 文章列表（核心美化） -->
      <div v-else class="space-y-6 md:space-y-8">
        <article
          v-for="article in articles"
          :key="article.id"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 overflow-hidden"
        >
          <!-- 文章卡片头部 -->
          <div class="p-6 md:p-8">
            <NuxtLink :to="article.path" class="block">
              <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-3">
                {{ article.frontmatter?.title || article.id }}
              </h2>
            </NuxtLink>

            <!-- 文章元信息 -->
            <div class="flex flex-wrap items-center gap-3 md:gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ article.frontmatter?.date || '未发布' }}
              </span>
              
              <span class="hidden md:inline-block">•</span>
              
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag of article.frontmatter?.tags || []"
                  :key="tag"
                  class="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-full text-xs"
                >
                  {{ tag }}
                </span>
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

        <!-- 空状态（新增，无文章时友好提示） -->
        <div v-if="articles.length === 0" class="text-center py-20">
          <p class="text-gray-500 dark:text-gray-400 text-xl">暂无文章，快来创作你的第一篇博客吧！</p>
        </div>
      </div>
    </main>

    <!-- 页脚（新增，提升完整性） -->
    <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
      <div class="container mx-auto px-4 py-8 max-w-4xl text-center text-gray-500 dark:text-gray-400">
        <p>© {{ new Date().getFullYear() }} 我的 Nuxt4 技术博客 | 基于 Nuxt4 构建</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const loading = ref(true);
const error = ref(null);
const articles = ref([]);

// 新增：重新加载文章的方法
const refreshArticles = async () => {
  loading.value = true;
  error.value = null;
  try {
    const { data } = await useFetch("/api/articles");
    if (!data.value) throw new Error("接口返回数据为空");
    if (data.value.code !== 200) {
      throw new Error(data.value.message);
    }
    articles.value = data.value.data || [];
  } catch (err) {
    error.value = err;
    console.error("首页加载错误：", err);
  } finally {
    loading.value = false;
  }
};

// 初始加载
try {
  const { data } = await useFetch("/api/articles");
  if (!data.value) throw new Error("接口返回数据为空");
  if (data.value.code !== 200) {
    throw new Error(data.value.message);
  }
  articles.value = data.value.data || [];
} catch (err) {
  error.value = err;
  console.error("首页加载错误：", err);
} finally {
  loading.value = false;
}
</script>

<!-- 可选：开启暗黑模式支持（Tailwind 需要配置 darkMode: 'class'） -->
<script>
// 简单的暗黑模式切换（可选）
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
</script>
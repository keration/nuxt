<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-200">
    <!-- 顶部导航 -->
    <header class="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 shadow-sm border-b border-gray-100 dark:border-gray-800">
      <div class="container mx-auto px-4 py-2.5 max-w-3xl flex justify-between items-center">
        <a href="/" class="text-lg font-bold text-blue-600 dark:text-blue-400">Nuxt 技术博客</a>
        <nav class="flex items-center gap-4">
          <ul class="flex gap-4 text-sm">
            <li><a href="/" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">首页</a></li>
            <li><a href="/tags" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">标签</a></li>
            <li><a href="/categories" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">分类</a></li>
            <li><a href="/archives" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">归档</a></li>
          </ul>
          <!-- 暗黑模式按钮 -->
          <button @click="toggleDarkMode" class="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="切换暗黑模式">
          </button>
        </nav>
      </div>
    </header>

    <!-- 主内容 -->
    <main class="container mx-auto px-4 py-6 max-w-3xl">
      <!-- 搜索框 -->
      <div class="mb-8">
        <div class="relative">
          <input
            v-model="searchQuery"
            @input="debouncedSearch"
            type="text"
            placeholder="搜索文章标题、内容或标签..."
            class="w-full px-4 py-3 pl-12 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- 搜索结果 -->
      <div v-if="searchQuery && !loading" class="mb-6">
        <h2 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          搜索结果 ({{ searchResults.length }})
        </h2>
      </div>

      <!-- 加载中 -->
      <div v-if="loading" class="text-center py-12">
        <div class="inline-block w-10 h-10 border-3 border-blue-100 dark:border-blue-900 border-t-blue-500 dark:border-t-blue-400 rounded-full animate-spin mb-3"></div>
        <p class="text-gray-500 dark:text-gray-400 text-sm">搜索中...</p>
      </div>

      <!-- 搜索结果列表 -->
      <div v-else-if="searchResults.length > 0" class="space-y-4">
        <article v-for="article in searchResults" :key="article.id"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div class="p-4">
            <NuxtLink :to="article.path" class="block">
              <h2 class="flex justify-center text-base md:text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-2">
                {{ article.frontmatter?.title || article.id }}
              </h2>
            </NuxtLink>

            <!-- 文章元信息 -->
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

            <!-- 文章简介 -->
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
      </div>

      <!-- 无结果 -->
      <div v-else-if="searchQuery && !loading" class="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        <p class="text-gray-500 dark:text-gray-400 text-sm">没有找到相关文章，请尝试其他关键词</p>
      </div>

      <!-- 初始状态 -->
      <div v-else class="text-center py-12">
        <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">搜索文章</h3>
        <p class="text-gray-500 dark:text-gray-400 text-sm">输入关键词开始搜索</p>
      </div>
    </main>

    <!-- 页脚 -->
    <footer class="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-8">
      <div class="container mx-auto px-4 py-4 max-w-3xl text-center text-gray-500 dark:text-gray-400 text-xs">
        <p>© {{ new Date().getFullYear() }} 我的 Nuxt4 技术博客 | 基于 Nuxt4 + Vue3 构建</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// 搜索相关
const searchQuery = ref('')
const searchResults = ref<any[]>([])
const loading = ref(false)

// 防抖搜索
let searchTimeout: NodeJS.Timeout | null = null
const debouncedSearch = () => {
  if (searchTimeout) clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    performSearch()
  }, 300)
}

// 执行搜索
const performSearch = async () => {
  if (!searchQuery.value.trim()) {
    searchResults.value = []
    return
  }

  loading.value = true
  try {
    const response = await $fetch<{ code: number; message: string; data: any[] }>('/api/search', {
      method: 'GET',
      query: { q: searchQuery.value.trim() }
    })
    searchResults.value = response.data || []
  } catch (error) {
    console.error('搜索失败:', error)
    searchResults.value = []
  } finally {
    loading.value = false
  }
}

// 暗黑模式切换
const toggleDarkMode = () => {
  const html = document.documentElement
  html.classList.toggle('dark')
  localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light'
}

// 初始化暗黑模式
onMounted(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  }

  // 如果有查询参数，执行搜索
  const route = useRoute()
  if (route.query.q) {
    searchQuery.value = route.query.q as string
    performSearch()
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- 顶部导航（补充分类入口 + 暗黑模式切换，和首页保持一致） -->
    <header class="sticky top-0 z-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div class="container mx-auto px-4 py-3 max-w-5xl flex justify-between items-center">
        <a href="/" class="text-xl font-bold text-blue-600 dark:text-blue-400">Nuxt 技术博客</a>
        <nav class="flex items-center gap-6">
          <ul class="flex gap-6">
            <li><a href="/" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">首页</a></li>
            <li><a href="/tags" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">标签</a></li>
            <!-- ❶ 新增：分类入口 -->
            <li><a href="/categories" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">分类</a></li>
            <li><a href="/archives" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">归档</a></li>
          </ul>
          <!-- ❷ 新增：暗黑模式切换按钮（和首页统一） -->
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

    <!-- 主内容区：目录侧边栏 + 文章详情 -->
    <main class="container mx-auto px-4 py-8 max-w-5xl flex flex-col lg:flex-row gap-8">
      <!-- 1. 目录悬浮侧边栏 -->
      <div 
        v-if="tocItems.length > 0"
        class="lg:w-64 shrink-0"
      >
        <div class="sticky top-24 bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hidden lg:block">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">文章目录</h3>
          <ul class="space-y-2 text-sm">
            <li 
              v-for="item in tocItems" 
              :key="item.id"
              :class="[
                'pl-' + (item.level - 1) * 4,
                item.isActive ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400',
                'cursor-pointer transition-colors'
              ]"
              @click="scrollToAnchor(item.id)"
            >
              {{ item.text }}
            </li>
          </ul>
        </div>

        <!-- 移动端目录按钮 -->
        <button 
          class="lg:hidden fixed bottom-6 right-6 z-30 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
          @click="showMobileToc = !showMobileToc"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <!-- 移动端目录抽屉 -->
        <div 
          v-if="showMobileToc"
          class="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm flex items-end"
          @click.self="showMobileToc = false"
        >
          <div class="bg-white dark:bg-gray-800 w-full max-h-[80vh] rounded-t-xl p-6 overflow-y-auto">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white">文章目录</h3>
              <button @click="showMobileToc = false">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul class="space-y-2 text-sm">
              <li 
                v-for="item in tocItems" 
                :key="item.id"
                :class="[
                  'pl-' + (item.level - 1) * 4,
                  item.isActive ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-600 dark:text-gray-400',
                  'cursor-pointer py-1'
                ]"
                @click="() => { scrollToAnchor(item.id); showMobileToc = false }"
              >
                {{ item.text }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 2. 文章详情主体 -->
      <div class="flex-1 max-w-3xl">
        <!-- 加载中 -->
        <div v-if="loading" class="text-center py-20">
          <div class="inline-block w-12 h-12 border-4 border-blue-200 dark:border-blue-800 border-t-blue-500 dark:border-t-blue-400 rounded-full animate-spin mb-4"></div>
          <p class="text-gray-500 dark:text-gray-400 text-xl">正在加载文章...</p>
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
            @click="refreshArticle"
          >
            重新加载
          </button>
        </div>

        <!-- 文章内容 -->
        <div v-else class="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden">
          <!-- 文章元信息（❸ 新增分类/标签展示 + 跳转） -->
          <div class="p-6 md:p-8 border-b border-gray-200 dark:border-gray-700">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">{{ articleFrontmatter?.title || articleId }}</h1>
            <div class="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                发布时间：{{ articleFrontmatter?.date || '未发布' }}
              </span>
              <span v-if="articleFrontmatter?.updated" class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                更新时间：{{ articleFrontmatter?.updated }}
              </span>
              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                阅读时长：{{ readingTime }} 分钟
              </span>
              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                字数统计：{{ wordCount }} 字
              </span>
              <!-- ❸-1 分类展示 + 跳转 -->
              <span v-if="articleFrontmatter?.category" class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <NuxtLink 
                  :to="`/categories/${articleFrontmatter.category}`"
                  class="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                >
                  {{ articleFrontmatter.category || '未分类' }}
                </NuxtLink>
              </span>
            </div>

            <!-- ❸-2 标签展示 + 跳转 -->
            <div v-if="articleFrontmatter?.tags && articleFrontmatter.tags.length > 0" class="flex flex-wrap gap-2 mt-2">
              <span class="text-sm text-gray-500 dark:text-gray-400">标签：</span>
              <NuxtLink
                v-for="tag of articleFrontmatter.tags"
                :key="tag"
                :to="`/tags/${tag}`"
                class="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-full text-xs hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors"
              >
                {{ tag }}
              </NuxtLink>
            </div>
          </div>

          <!-- 文章正文（带锚点的HTML） -->
          <div 
            ref="articleContentRef"
            class="p-6 md:p-8 prose prose-blue prose-lg dark:prose-invert max-w-none"
            v-html="articleHtml"
          ></div>
        </div>
      </div>
    </main>

    <!-- 3. 返回顶部按钮 -->
    <button
      v-if="showBackToTop"
      class="fixed bottom-6 right-20 lg:right-6 z-30 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
      @click="backToTop"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>

    <!-- 页脚 -->
    <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
      <div class="container mx-auto px-4 py-8 max-w-5xl text-center text-gray-500 dark:text-gray-400">
        <p>© {{ new Date().getFullYear() }} 我的 Nuxt4 技术博客 | 基于 Nuxt4 构建</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useMarkdown } from '~/composables/useMarkdown';
import type { MarkdownParsedResult } from '~/composables/useMarkdown';
import type { ApiResponse } from '~/types/api';
import type { ArticleMeta } from '~/server/utils/articles'; 


// 类型定义
interface TocItem {
  id: string;
  text: string;
  level: number;
  isActive: boolean;
}

interface ArticleFrontmatter {
  title?: string;
  date?: string;
  updated?: string;
  category?: string; // ❺ 新增分类字段
  tags?: string[];
  description?: string;
}

// 初始化路由
const route = useRoute();
const router = useRouter();
const articleId = (route.params.id as string) || '';

// 基础状态
const loading = ref<boolean>(true);
const error = ref<Error | null>(null);
const articleContentRef = ref<HTMLElement | null>(null);
const articleHtml = ref<string>("");
const articleFrontmatter = ref<ArticleFrontmatter>({});
const articleRawContent = ref<string>("");

// TOC相关
const tocItems = ref<TocItem[]>([]);
const showMobileToc = ref<boolean>(false);
// 返回顶部相关
const showBackToTop = ref<boolean>(false);
const scrollTop = ref<number>(0);

// ❻ 新增：暗黑模式状态
const isDarkMode = computed(() => {
  return document.documentElement.classList.contains('dark');
});

// ❼ 新增：切换暗黑模式方法
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

// 重新加载文章
const refreshArticle = async () => {
  loading.value = true;
  error.value = null;
  await fetchArticle();
  // 重新生成TOC
  setTimeout(() => {
    generateToc();
  }, 100);
  loading.value = false;
};

// 获取文章内容
const fetchArticle = async () => {
  try {
    // 适配接口：如果你的文章接口是 /api/articles 下的，需调整路径
    // 这里兼容两种接口：/api/article/${id} 或 /api/articles（返回列表后筛选）
    let articleData = null;
    // 方式1：单篇文章接口（原逻辑）
    const { data } = await useFetch<ApiResponse<{content:string}>>(`/api/article/${articleId}`);
    
    if (!data.value || (data.value as any).code !== 200) {
      // 方式2：备用 - 从文章列表接口筛选
      const { data: listData } = await useFetch<ApiResponse<ArticleMeta[]>>(`/api/articles`);
      if (listData.value?.code === 200) {
        const article = listData.value.data.find((item: any) => item.id === articleId);
        if (article) {
          articleData = article.frontmatter;
          articleRawContent.value = await fetch(`/content/${articleId}.md`).then(res => res.text());
        } else {
          throw new Error("文章不存在");
        }
      } else {
        throw new Error((data.value as any)?.message || "获取文章失败");
      }
    } else {
      articleRawContent.value = (data.value as any).data.content;
      const parsedResult = await useMarkdown((data.value as any).data.content) as MarkdownParsedResult;
      articleHtml.value = parsedResult.html;
      articleFrontmatter.value = parsedResult.frontmatter as ArticleFrontmatter;
    }
  } catch (err: any) {
    error.value = err;
    console.error("文章加载错误：", err);
  }
};

// 提取TOC（自动生成h1-h6锚点）
const generateToc = () => {
  if (!articleContentRef.value) return;

  tocItems.value = [];
  const headings = articleContentRef.value.querySelectorAll("h1, h2, h3, h4, h5, h6");
  
  headings.forEach((element: Element, index: number) => {
    const heading = element as HTMLElement;
    if (!heading.tagName.match(/^H[1-6]$/)) return;

    const level = Number(heading.tagName.replace("H", ""));
    const text = heading.textContent?.trim() || `标题${index + 1}`;
    const id = text.replace(/\s+/g, "-").toLowerCase() + "-" + index;
    heading.id = id;
    
    tocItems.value.push({
      id,
      text,
      level,
      isActive: false
    });
  });
};

// 滚动到指定锚点
const scrollToAnchor = (anchorId: string) => {
  const anchor = document.getElementById(anchorId);
  if (anchor) {
    anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    window.scrollBy(0, -80);
  }
};

// 监听滚动事件
const handleScroll = () => {
  scrollTop.value = window.scrollY;
  showBackToTop.value = scrollTop.value > 300;

  if (tocItems.value.length === 0 || !articleContentRef.value) return;
  
  let activeIndex = 0;
  const viewportTop = scrollTop.value + 100;
  
  tocItems.value.forEach((item: TocItem, index: number) => {
    const anchor = document.getElementById(item.id);
    if (!anchor) return;
    const anchorTop = anchor.offsetTop;
    if (anchorTop <= viewportTop) {
      activeIndex = index;
    }
    item.isActive = false;
  });
  
  const activeItem = tocItems.value[activeIndex];
  if (activeItem) {
    activeItem.isActive = true;
  }
};

// 返回顶部
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// 字数统计
const wordCount = computed(() => {
  if (!articleRawContent.value) return 0;
  const pureText = articleRawContent.value
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]+`/g, "")
    .replace(/\[.*?\]\(.*?\)/g, "")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/^---[\s\S]*?---/m, "")
    .replace(/[#*`~>_\-=+|()[\]{};:,.!?]/g, "")
    .replace(/\s+/g, "");
  return pureText.length;
});

// 阅读时长
const readingTime = computed(() => {
  const count = wordCount.value;
  if (count === 0) return 1;
  return Math.ceil(count / 300);
});

// 初始化（❽ 修复重复加载问题）
onMounted(async () => {
  await fetchArticle();
  // 客户端渲染完成后生成TOC
  setTimeout(() => {
    generateToc();
  }, 100);
  // 监听滚动事件
  window.addEventListener("scroll", handleScroll);
  loading.value = false;
});

// 清理监听
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* TOC激活项样式 */
:deep(.prose h1), :deep(.prose h2), :deep(.prose h3), :deep(.prose h4), :deep(.prose h5), :deep(.prose h6) {
  scroll-margin-top: 80px; /* 锚点滚动预留导航栏高度 */
}

/* 响应式适配 */
@media (max-width: 1024px) {
  .lg\:w-64 {
    width: 100%;
  }
  /* 移动端调整返回顶部按钮位置 */
  :deep(.fixed.bottom-6.right-20) {
    right: 20px !important;
  }
}
</style>

<!-- 引入代码高亮样式（全局） -->
<style>
@import 'prismjs/themes/prism-tomorrow.css';
.prose pre {
  padding: 1rem;
  border-radius: 8px;
  background: #282c34 !important; /* ❾ 适配暗黑模式代码块背景 */
}
.prose code {
  padding: 0.15rem 0.3rem;
  border-radius: 4px;
}
/* 暗黑模式下的链接样式优化 */
.dark .prose a {
  color: #60a5fa !important;
}
</style>
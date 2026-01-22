<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- 顶部导航 -->
    <header class="sticky top-0 z-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div class="container mx-auto px-4 py-3 max-w-5xl flex justify-between items-center">
        <a href="/" class="text-xl font-bold text-blue-600 dark:text-blue-400">Nuxt 技术博客</a>
        <nav class="flex items-center gap-6">
          <ul class="flex gap-6">
            <li><a href="/" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">首页</a></li>
            <li><a href="/tags" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">标签</a></li>
            <li><a href="/categories" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">分类</a></li>
            <li><a href="/archives" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">归档</a></li>
          </ul>
          <!-- 暗黑模式切换按钮 -->
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
      <!-- 1. 目录悬浮侧边栏（兜底：无目录时显示提示） -->
      <div class="lg:w-64 shrink-0">
        <!-- 桌面端目录 -->
        <div class="sticky top-24 bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hidden lg:block">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">文章目录</h3>
          <div v-if="tocItems.length > 0" class="space-y-2 text-sm">
            <li 
              v-for="item in tocItems" 
              :key="item.id"
              :class="[
                'pl-' + (item.level - 1) * 4,
                item.isActive ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400',
                'cursor-pointer transition-colors py-1'
              ]"
              @click="scrollToAnchor(item.id)"
            >
              {{ item.text }}
            </li>
          </div>
          <div v-else class="text-sm text-gray-500 dark:text-gray-400 py-2">
            暂无章节目录
          </div>
        </div>

        <!-- 移动端目录按钮（始终显示，无目录时点击提示） -->
        <button 
          class="lg:hidden fixed bottom-6 right-6 z-30 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
          @click="handleMobileTocClick"
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
            <div v-if="tocItems.length > 0" class="space-y-2 text-sm">
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
            </div>
            <div v-else class="text-sm text-gray-500 dark:text-gray-400 py-2">
              暂无章节目录
            </div>
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
          <!-- 文章元信息（兜底所有字段） -->
          <div class="p-6 md:p-8 border-b border-gray-200 dark:border-gray-700">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">{{ articleFrontmatter?.title || '未命名文章' }}</h1>
            <div class="flex flex-wrap gap-3 md:gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                发布时间：{{ articleFrontmatter?.date || '未知' }}
              </span>
              <span v-if="articleFrontmatter?.updated" class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                更新时间：{{ articleFrontmatter?.updated || '未知' }}
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
              <!-- 分类展示 + 跳转（兜底） -->
              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <NuxtLink 
                  :to="`/categories/${articleFrontmatter?.category || '未分类'}`"
                  class="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                >
                  {{ articleFrontmatter?.category || '未分类' }}
                </NuxtLink>
              </span>
            </div>

            <!-- 标签展示 + 跳转（兜底） -->
            <div class="flex flex-wrap gap-2 mt-2">
              <span class="text-sm text-gray-500 dark:text-gray-400">标签：</span>
              <NuxtLink
                v-for="tag of articleFrontmatter?.tags || []"
                :key="tag"
                :to="`/tags/${tag}`"
                class="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-full text-xs hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors"
              >
                {{ tag }}
              </NuxtLink>
              <span v-if="!articleFrontmatter?.tags || articleFrontmatter.tags.length === 0" class="text-xs text-gray-400 dark:text-gray-500">无标签</span>
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

    <!-- 3. 返回顶部按钮（调整位置 + 确保显示） -->
    <button
      v-if="showBackToTop"
      class="fixed bottom-6 right-20 lg:right-6 z-30 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
      @click="backToTop"
      aria-label="返回顶部"
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
  category?: string;
  tags?: string[];
  description?: string;
}

// 初始化路由
const route = useRoute();
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

// 暗黑模式状态
const isDarkMode = computed(() => {
  return document.documentElement.classList.contains('dark');
});

// 切换暗黑模式方法
const toggleDarkMode = () => {
  const html = document.documentElement;
  html.classList.toggle('dark');
  localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
};

// 移动端目录按钮点击逻辑（无目录时提示）
const handleMobileTocClick = () => {
  if (tocItems.value.length === 0) {
    alert("本文暂无章节目录");
    return;
  }
  showMobileToc.value = !showMobileToc.value;
};

// 重新加载文章
const refreshArticle = async () => {
  loading.value = true;
  error.value = null;
  await fetchArticle();
  loading.value = false;
};

// 统一获取文章内容（修复rawContent赋值逻辑）
const fetchArticle = async () => {
  try {
    loading.value = true;
    // 核心：用queryContent读取原始MD（所有文章统一逻辑）
    const mdData = await queryContent(`/articles/${articleId}`).findOne();
    
    if (!mdData || !mdData._raw) {
      throw new Error(`未找到${articleId}的MD文件，或文件内容为空`);
    }

    // 1. 赋值原始MD内容（所有文章都能拿到）
    articleRawContent.value = mdData._raw;
    console.log(`文章${articleId}原始MD：`, articleRawContent.value); // 验证：所有文章都打印原始MD
    
    // 2. 解析MD为HTML
    const parsedResult = await useMarkdown(articleRawContent.value) as MarkdownParsedResult;
    articleHtml.value = parsedResult.html || "<p>暂无文章内容</p>";
    
    // 3. 赋值frontmatter（直接用nuxt/content解析好的，无需自己拆）
    articleFrontmatter.value = {
      title: mdData.title || articleId,
      date: mdData.date || '未知',
      updated: mdData.updated || mdData.date || '未知',
      category: mdData.category || '未分类',
      tags: mdData.tags || [],
      description: mdData.description || ''
    } as ArticleFrontmatter;

    // 4. 生成目录
    await nextTick();
    generateToc();

  } catch (err: any) {
    error.value = err;
    articleHtml.value = `<div class="text-red-500 dark:text-red-400 py-8 text-center">加载失败：${err.message}</div>`;
    console.error("文章加载错误：", err);
  } finally {
    loading.value = false;
  }
};

// 提取TOC（修复DOM获取时机）
const generateToc = () => {
  if (!articleContentRef.value) return;

  tocItems.value = [];
  const headings = articleContentRef.value.querySelectorAll("h1, h2, h3, h4, h5, h6");
  
  headings.forEach((element: Element, index: number) => {
    const heading = element as HTMLElement;
    const level = Number(heading.tagName.replace("H", ""));
    const text = heading.textContent?.trim() || `标题${index + 1}`;
    // 修复锚点ID重复问题
    const uniqueId = `heading-${level}-${index}-${text.replace(/\W+/g, "-").toLowerCase()}`;
    heading.id = uniqueId;
    
    tocItems.value.push({
      id: uniqueId,
      text,
      level,
      isActive: false
    });
  });

  // 手动触发一次滚动监听（确保激活项正确）
  handleScroll();
};

// 滚动到指定锚点
const scrollToAnchor = (anchorId: string) => {
  const anchor = document.getElementById(anchorId);
  if (anchor) {
    anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    window.scrollBy(0, -80); // 预留导航栏高度
  }
};

// 监听滚动事件（修复showBackToTop更新）
const handleScroll = () => {
  scrollTop.value = window.scrollY;
  showBackToTop.value = scrollTop.value > 100; // 降低触发阈值

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

// 字数统计（容错处理）
const wordCount = computed(() => {
  if (!articleRawContent.value) return 0;
  const pureText = articleRawContent.value
    .replace(/```[\s\S]*?```/g, "") // 移除代码块
    .replace(/`[^`]+`/g, "") // 移除行内代码
    .replace(/\[.*?\]\(.*?\)/g, "") // 移除链接
    .replace(/!\[.*?\]\(.*?\)/g, "") // 移除图片
    .replace(/^---[\s\S]*?---/m, "") // 移除frontmatter
    .replace(/[#*`~>_\-=+|()[\]{};:,.!?]/g, "") // 移除标点
    .replace(/\s+/g, ""); // 移除空格
  return pureText.length || 0;
});

// 阅读时长（兜底）
const readingTime = computed(() => {
  const count = wordCount.value;
  return count > 0 ? Math.ceil(count / 300) : 1;
});

// 初始化（修复事件监听 + 暗黑模式）
onMounted(async () => {
  // 初始化暗黑模式
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
  
  // 加载文章
  await fetchArticle();
  
  // 绑定滚动事件
  window.addEventListener("scroll", handleScroll);
  // 手动触发一次滚动监听（确保返回顶部按钮状态正确）
  handleScroll();
  
  loading.value = false;
});

// 清理监听
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* TOC激活项样式 + 锚点滚动预留 */
:deep(.prose h1), :deep(.prose h2), :deep(.prose h3), :deep(.prose h4), :deep(.prose h5), :deep(.prose h6) {
  scroll-margin-top: 80px; /* 预留导航栏高度 */
  margin-top: 1.5rem !important;
  margin-bottom: 1rem !important;
}

/* 移动端返回顶部按钮适配 */
@media (max-width: 1024px) {
  :deep(.fixed.bottom-6.right-20) {
    right: 20px !important;
    bottom: 24px !important;
  }
}
</style>
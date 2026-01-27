<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- 顶部导航 -->
    <header
      class="sticky top-0 z-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div class="container mx-auto px-4 py-3 max-w-5xl flex justify-between items-center">
        <a href="/" class="text-xl font-bold text-blue-600 dark:text-blue-400">Nuxt 技术博客</a>
        <nav class="flex items-center gap-6">
          <ul class="flex gap-6">
            <li><a href="/"
                class="ml-10 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">首页</a>
            </li>
            <li><a href="/search"
                class="ml-10 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">搜索</a>
            </li>
            <li><a href="/tags"
                class="ml-10 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">标签</a>
            </li>
            <li><a href="/categories"
                class="ml-10 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">分类</a>
            </li>
            <li><a href="/archives"
                class="ml-10 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">归档</a>
            </li>
          </ul>
          <!-- 暗黑模式切换按钮 -->
          <button @click="toggleDarkMode"
            class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="切换暗黑模式">
          </button>
        </nav>
      </div>
    </header>

    <!-- 主内容区：目录侧边栏 + 文章详情 -->
    <main class="container mx-auto px-4 py-8 max-w-5xl flex flex-col lg:flex-row gap-8">
      <!-- 1. 目录悬浮侧边栏（兜底：无目录时显示提示） -->
      <div class="lg:w-64 shrink-0">
        <!-- 桌面端目录 -->
        <div
          class="sticky top-24 bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hidden lg:block">
          <h3
            class="text-lg font-semibold text-gray-800 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
            文章目录</h3>
          <div v-if="tocItems.length > 0" class="space-y-2 text-sm">
            <li v-for="item in tocItems" :key="item.id" :class="[
              'pl-' + (item.level - 1) * 4,
              item.isActive ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400',
              'cursor-pointer transition-colors py-1'
            ]" @click="scrollToAnchor(item.id)">
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
          @click="handleMobileTocClick">
        </button>

        <!-- 移动端目录抽屉 -->
        <div v-if="showMobileToc" class="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm flex items-end"
          @click.self="showMobileToc = false">
          <div class="bg-white dark:bg-gray-800 w-full max-h-[80vh] rounded-t-xl p-6 overflow-y-auto">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white">文章目录</h3>
              <button @click="showMobileToc = false">
              </button>
            </div>
            <div v-if="tocItems.length > 0" class="space-y-2 text-sm">
              <li v-for="item in tocItems" :key="item.id" :class="[
                'pl-' + (item.level - 1) * 4,
                item.isActive ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-600 dark:text-gray-400',
                'cursor-pointer py-1'
              ]" @click="() => { scrollToAnchor(item.id); showMobileToc = false }">
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
          <div
            class="inline-block w-12 h-12 border-4 border-blue-200 dark:border-blue-800 border-t-blue-500 dark:border-t-blue-400 rounded-full animate-spin mb-4">
          </div>
          <p class="text-gray-500 dark:text-gray-400 text-xl">正在加载文章...</p>
        </div>

        <!-- 错误提示 -->
        <div v-if="error" class="py-16 text-center">
          <div
            class=" bg-red-100 dark:bg-red-900/30 text-red-500 dark:text-red-400 rounded-full w-16 h-16 flex items-center justify-center mb-4">
          </div>
          <p class="text-red-500 dark:text-red-400 text-xl font-medium">{{ error.message }}</p>
          <button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            @click="refreshArticle">
            重新加载
          </button>
        </div>

        <!-- 文章内容 -->
        <div v-else
          class="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden">
          <!-- 文章元信息（兜底所有字段） -->
          <div class="p-6 md:p-8 border-b border-gray-200 dark:border-gray-700">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">{{ articleFrontmatter?.title
              || '未命名文章' }}</h1>
            <div class="flex flex-wrap gap-3 md:gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span class="flex items-center gap-1">
                发布时间：{{ articleFrontmatter?.date || '未知' }}
              </span>
              <span v-if="articleFrontmatter?.updated" class="flex items-center gap-1">
                更新时间：{{ articleFrontmatter?.updated || '未知' }}
              </span>
              <span class="flex items-center gap-1">
                阅读时长：{{ readingTime }} 分钟
              </span>
              <span class="flex items-center gap-1">
                字数统计：{{ wordCount }} 字
              </span>
              <!-- 分类展示 + 跳转（兜底） -->
              <span class="flex items-center gap-1">
                <NuxtLink :to="`/categories/${articleFrontmatter?.category || '未分类'}`"
                  class="text-blue-600 dark:text-blue-400 hover:underline transition-colors">
                  {{ articleFrontmatter?.category || '未分类' }}
                </NuxtLink>
              </span>
            </div>

            <!-- 标签展示 + 跳转（兜底） -->
            <div class="flex flex-wrap gap-2 mt-2">
              <span class="text-sm text-gray-500 dark:text-gray-400">标签：</span>
              <NuxtLink v-for="tag of articleFrontmatter?.tags || []" :key="tag" :to="`/tags/${tag}`"
                class="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-full text-xs hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors">
                {{ tag }}
              </NuxtLink>
              <span v-if="!articleFrontmatter?.tags || articleFrontmatter.tags.length === 0"
                class="text-xs text-gray-400 dark:text-gray-500">无标签</span>
            </div>
          </div>

          <!-- 文章正文（带锚点的HTML） -->
          <div ref="articleContentRef" class="mx-20 p-6 md:p-8 prose prose-blue prose-lg dark:prose-invert max-w-none"
            v-html="articleHtml"></div>

          <!-- 评论区域 -->
          <div class="mx-20 p-6 md:p-8 border-t border-gray-200 dark:border-gray-700">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">评论</h3>
            <div id="giscus-container" class="giscus"></div>
          </div>
        </div>
      </div>
    </main>

    <!-- 3. 返回顶部按钮（调整位置 + 确保显示） -->
    <button v-if="showBackToTop"
      class="fixed bottom-6 right-20 lg:right-6 z-30 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
      @click="backToTop" aria-label="返回顶部">
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
import { useGiscus } from '~/composables/useGiscus';
import type { MarkdownParsedResult } from '~/composables/useMarkdown';
// import type { ApiResponse } from '~/types/api';

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

// API响应类型定义
interface ApiResponse<T = any> {
  code: number;
  data?: T;
  message: string;
}

// 单篇文章API响应数据类型
interface ArticleApiData {
  content: string;
  id: string;
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
// const isDarkMode = computed(() => {
//   return document.documentElement.classList.contains('dark');
// });

const { updateGiscusTheme, observeThemeChange } = useGiscus();

const toggleDarkMode = () => {
  const html = document.documentElement;
  html.classList.toggle('dark');
  localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
  // 更新Giscus主题
  setTimeout(updateGiscusTheme, 100);
};

const handleMobileTocClick = () => {
  if (tocItems.value.length === 0) {
    alert("本文暂无章节目录");
    return;
  }
  showMobileToc.value = !showMobileToc.value;
};

const refreshArticle = async () => {
  loading.value = true;
  error.value = null;
  await fetchArticle();
  loading.value = false;
};

const fetchArticle = async () => {
  try {
    loading.value = true;
    const response = await $fetch<ApiResponse<ArticleApiData>>(`/api/article/${articleId}`);

    if (response?.code !== 200 || !response?.data) {
      throw new Error(response?.message || `未找到${articleId}的MD文件`);
    }

    const mdData = response.data;
    if (!mdData.content || typeof mdData.content !== 'string') {
      throw new Error(`未找到${articleId}的MD文件，或文件内容为空`);
    }

    articleRawContent.value = mdData.content;

    const parsedResult = await useMarkdown(articleRawContent.value) as MarkdownParsedResult;
    articleHtml.value = parsedResult.html || "<p>暂无文章内容</p>";

    const frontmatter = parseFrontmatter(articleRawContent.value);
    articleFrontmatter.value = {
      title: frontmatter.title || articleId,
      date: frontmatter.date || '未知',
      updated: frontmatter.updated || frontmatter.date || '未知',
      category: frontmatter.category || '未分类',
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      description: frontmatter.description || ''
    } as ArticleFrontmatter;

    // 修复：先设置loading为false，让DOM渲染
    loading.value = false;
    // 等待DOM渲染完成，确保articleContentRef已挂载
    await nextTick();
    // 生成目录
    generateToc();

  } catch (err: any) {
    error.value = err;
    articleHtml.value = `<div class="text-red-500 dark:text-red-400 py-8 text-center">加载失败：${err?.message || '未知错误'}</div>`;
    console.error("文章加载错误：", err);
    // 确保在错误情况下loading也能被重置
    loading.value = false;
  }
}

const generateToc = () => {
  if (!articleContentRef.value) {
    console.error("generateToc: articleContentRef is null, cannot generate TOC");
    return;
  }

  tocItems.value = [];
  const headings = articleContentRef.value.querySelectorAll("h1, h2, h3, h4, h5, h6");

  // 测试1：验证获取到的标题数量
  console.log(`generateToc: 找到 ${headings.length} 个标题`);

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

    // 测试2：记录每个标题的信息
    console.log(`generateToc: 标题 ${index + 1}: ${text} (H${level}), ID: ${uniqueId}`);
  });

  // 测试3：验证生成的目录项数量
  console.log(`generateToc: 生成了 ${tocItems.value.length} 个目录项`);

  // 手动触发一次滚动监听（确保激活项正确）
  handleScroll();

  // 测试4：验证初始激活项
  const initialActiveItem = tocItems.value.find(item => item.isActive);
  console.log(`generateToc: 初始激活项: ${initialActiveItem?.text || '无'}`);
};

// 测试章节目录功能的综合测试函数
const testTocFunctionality = () => {
  console.log("\n=== 开始章节目录功能测试 ===");

  // 测试1：验证目录生成
  console.log("\n测试1：目录生成");
  console.log(`目录项数量: ${tocItems.value.length}`);
  console.log(`目录项详情: ${JSON.stringify(tocItems.value, null, 2)}`);

  if (tocItems.value.length === 0) {
    console.error("测试失败：未生成任何目录项");
    return;
  }

  // 测试2：验证滚动激活功能
  console.log("\n测试2：滚动激活功能");

  // 模拟滚动到不同位置
  const scrollPositions = [0, 300, 800, 1500];
  scrollPositions.forEach((position, index) => {
    setTimeout(() => {
      window.scrollTo({ top: position, behavior: 'instant' });
      handleScroll();
      const activeItem = tocItems.value.find(item => item.isActive);
      console.log(`滚动到 ${position}px，激活项: ${activeItem?.text || '无'}`);
    }, index * 500);
  });

  // 测试3：验证点击跳转功能
  setTimeout(() => {
    console.log("\n测试3：点击跳转功能");
    if (tocItems.value.length > 1) {
      const secondItem = tocItems.value[1];
      console.log(`点击目录项: ${secondItem.text}`);
      scrollToAnchor(secondItem.id);

      setTimeout(() => {
        const activeItem = tocItems.value.find(item => item.isActive);
        console.log(`点击后激活项: ${activeItem?.text || '无'}`);
        console.log(`当前滚动位置: ${window.scrollY}px`);
      }, 500);
    }

    // 测试4：验证移动端目录
    console.log("\n测试4：移动端目录功能");
    handleMobileTocClick();
    console.log(`移动端目录显示状态: ${showMobileToc.value}`);

    // 关闭移动端目录
    setTimeout(() => {
      handleMobileTocClick();
      console.log(`移动端目录关闭状态: ${showMobileToc.value}`);
      console.log("\n=== 章节目录功能测试完成 ===");
    }, 500);
  }, scrollPositions.length * 500 + 500);
};

const scrollToAnchor = (anchorId: string) => {
  const anchor = document.getElementById(anchorId);
  if (anchor) {
    // 获取元素相对于页面顶部的绝对位置
    const rect = anchor.getBoundingClientRect();
    const absoluteTop = rect.top + window.scrollY;

    // 滚动到目标位置，预留80px导航栏高度
    window.scrollTo({
      top: absoluteTop - 80,
      behavior: "smooth"
    });

    // 手动触发滚动监听，更新激活项
    setTimeout(() => {
      handleScroll();
    }, 600); // 等待滚动动画完成
  }
};

const handleScroll = () => {
  scrollTop.value = window.scrollY;
  showBackToTop.value = scrollTop.value > 100; // 降低触发阈值

  if (tocItems.value.length === 0 || !articleContentRef.value) return;

  let activeIndex = 0;
  const viewportTop = scrollTop.value + 100;

  tocItems.value.forEach((item: TocItem, index: number) => {
    const anchor = document.getElementById(item.id);
    if (!anchor) return;

    // 修复：获取元素相对于页面顶部的绝对位置，而不是相对于父元素的偏移量
    const rect = anchor.getBoundingClientRect();
    const anchorTop = rect.top + window.scrollY;

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

const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

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

  // 启动Giscus主题观察器
  const themeObserver = observeThemeChange();

  // 清理函数
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    themeObserver.disconnect();
  });

  // 添加章节目录测试按钮到页面
  const tocTestButton = document.createElement('button');
  tocTestButton.textContent = '运行章节目录测试';
  tocTestButton.style.position = 'fixed';
  tocTestButton.style.top = '100px';
  tocTestButton.style.right = '20px';
  tocTestButton.style.padding = '10px 20px';
  tocTestButton.style.backgroundColor = '#3b82f6';
  tocTestButton.style.color = 'white';
  tocTestButton.style.border = 'none';
  tocTestButton.style.borderRadius = '5px';
  tocTestButton.style.cursor = 'pointer';
  tocTestButton.style.zIndex = '1000';

  // 添加测试按钮点击事件
  tocTestButton.addEventListener('click', testTocFunctionality);

  document.body.appendChild(tocTestButton);

  console.log('=== 章节目录测试按钮已添加到页面右上角 ===');
  console.log('点击"运行章节目录测试"按钮可测试目录功能');

  // 自动测试：当URL包含test=toc参数时，自动运行测试
  if (window.location.search.includes('test=toc')) {
    console.log('检测到test=toc参数，自动运行章节目录测试');
    // 等待1秒，确保页面完全加载
    setTimeout(testTocFunctionality, 1000);
  }
});

// 清理监听
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* TOC激活项样式 + 锚点滚动预留 */
:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3),
:deep(.prose h4),
:deep(.prose h5),
:deep(.prose h6) {
  scroll-margin-top: 80px;
  /* 预留导航栏高度 */
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
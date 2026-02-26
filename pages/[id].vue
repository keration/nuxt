<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- 顶部导航 -->
    <header
      class="sticky top-0 z-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-300">
      <div class="container mx-auto px-4 py-3 max-w-5xl flex justify-between items-center">
        <a href="/"
          class="text-xl font-bold text-blue-600 dark:text-blue-400 transition-all duration-300 hover:scale-105">Nuxt
          技术博客</a>
        <nav class="flex items-center gap-4">
          <ul class="hidden md:flex gap-6">
            <li><a href="/"
              class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">{{ t('nav.home') }}</a>
            </li>
            <li><a href="/search"
              class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">{{ t('search') }}</a>
            </li>
            <li><a href="/tags"
              class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">{{ t('tags') }}</a>
            </li>
            <li><a href="/categories"
              class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">{{ t('categories') }}</a>
            </li>
            <li><a href="/archives"
              class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">{{ t('archives') }}</a>
            </li>
          </ul>
          <!-- 暗黑模式切换按钮 -->
          <button @click="toggleDarkMode"
            class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
            :aria-label="t('toggleDark')">
          </button>
        </nav>
      </div>
    </header>

    <!-- 右上角固定章节目录 -->
    <div
      class="fixed top-24 right-4 z-30 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 w-64 max-w-[80vw] overflow-y-auto max-h-[70vh] transition-all duration-300 hover:shadow-lg hidden lg:block">
      <h3
        class="text-lg font-semibold text-gray-800 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center gap-2">
        {{ t('toc.title') }}
      </h3>
      <div v-if="tocItems.length > 0" class="space-y-1 text-sm">
        <li v-for="item in tocItems" :key="item.id" :class="[
          'pl-' + (item.level - 1) * 4,
          item.isActive ? 'text-blue-600 dark:text-blue-400 font-medium bg-blue-50/50 dark:bg-blue-900/20 rounded-md' : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700/50',
          'cursor-pointer transition-all duration-200 py-1.5 px-2'
        ]" @click="scrollToAnchor(item.id)">
          {{ item.text }}
        </li>
      </div>
      <div v-else class="text-sm text-gray-500 dark:text-gray-400 py-2 flex items-center gap-2">
        {{ t('toc.empty') }}
      </div>
    </div>

    <!-- 移动端章节目录按钮 -->
    <button v-if="tocItems.length > 0"
      class="fixed bottom-20 right-4 z-30 bg-white dark:bg-gray-800 rounded-full shadow-lg p-3 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl lg:hidden"
      @click="showMobileToc = !showMobileToc" aria-label="显示章节目录">
    </button>

    <!-- 移动端章节目录弹窗 -->
    <div v-if="showMobileToc && tocItems.length > 0"
      class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm flex items-end justify-center lg:hidden"
      @click.self="showMobileToc = false">
      <div
        class="bg-white dark:bg-gray-800 rounded-t-xl shadow-xl w-full max-h-[70vh] overflow-y-auto transition-transform duration-300 transform translate-y-0">
        <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2">
            文章目录
          </h3>
          <button @click="showMobileToc = false"
            class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          </button>
        </div>
        <div class="p-4 space-y-1 text-sm">
          <li v-for="item in tocItems" :key="item.id" :class="[
            'pl-' + (item.level - 1) * 4,
            item.isActive ? 'text-blue-600 dark:text-blue-400 font-medium bg-blue-50/50 dark:bg-blue-900/20 rounded-md' : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700/50',
            'cursor-pointer transition-all duration-200 py-1.5 px-2'
          ]" @click="() => { scrollToAnchor(item.id); showMobileToc = false; }">
            {{ item.text }}
          </li>
        </div>
      </div>
    </div>

    <!-- 主内容区：文章详情 -->
    <main class="container mx-auto px-4 py-8 max-w-3xl">
      <!-- 文章详情主体 -->
      <div class="flex-1 max-w-3xl">
        <!-- 加载中 -->
        <div v-if="loading" class="text-center py-20">
          <div
            class="inline-block w-12 h-12 border-4 border-blue-200 dark:border-blue-800 border-t-blue-500 dark:border-t-blue-400 rounded-full animate-spin mb-4">
          </div>
          <p class="text-gray-500 dark:text-gray-400 text-xl">{{ t('loadingArticle') }}</p>
        </div>

        <!-- 错误提示 -->
        <div v-if="error" class="py-16 text-center">
          <div
            class=" bg-red-100 dark:bg-red-900/30 text-red-500 dark:text-red-400 rounded-full w-16 h-16 flex items-center justify-center mb-4">
          </div>
          <p class="text-red-500 dark:text-red-400 text-xl font-medium">{{ error.message }}</p>
          <button
            class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-md"
            @click="refreshArticle">
            重新加载
          </button>
        </div>

        <!-- 文章内容 -->
        <div v-else
          class="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg">
          <!-- 文章元信息（兜底所有字段） -->
          <div class="p-6 md:p-8 border-b border-gray-200 dark:border-gray-700">
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">{{
              articleFrontmatter?.title
              || t('unnamedArticle') }}</h1>
            <div class="flex flex-wrap gap-3 md:gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span class="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-700/50 px-3 py-1.5 rounded-full">
                {{ articleFrontmatter?.date || '未知' }}
              </span>
              <span v-if="articleFrontmatter?.updated"
                class="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-700/50 px-3 py-1.5 rounded-full">

                {{ articleFrontmatter?.updated || '未知' }}
              </span>
              <span class="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-700/50 px-3 py-1.5 rounded-full">
                {{ readingTime }} {{ t('minute') }}
              </span>
              <span class="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-700/50 px-3 py-1.5 rounded-full">

                {{ wordCount }} {{ t('words') }}
              </span>
              <!-- 分类展示 + 跳转（兜底） -->
              <span class="flex items-center gap-1.5">
                <NuxtLink :to="`/categories/${articleFrontmatter?.category || '未分类'}`"
                  class="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-all duration-200">
                  {{ articleFrontmatter?.category || '未分类' }}
                </NuxtLink>
              </span>
            </div>

            <!-- 标签展示 + 跳转（兜底） -->
            <div class="flex flex-wrap gap-2 mt-4">
              <span class="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                {{ t('tagsLabel') }}
              </span>
              <NuxtLink v-for="tag of articleFrontmatter?.tags || []" :key="tag" :to="`/tags/${tag}`"
                class="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-all duration-200">
                {{ tag }}
              </NuxtLink>
              <span v-if="!articleFrontmatter?.tags || articleFrontmatter.tags.length === 0"
                class="text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 px-3 py-1 rounded-full">{{ t('noTags') }}</span>
            </div>
          </div>

          <!-- 文章正文（带锚点的HTML） -->
          <div ref="articleContentRef"
            class="p-6 md:p-8 prose prose-blue prose-lg dark:prose-invert max-w-none transition-all duration-300">
            <div v-html="articleHtml"></div>
          </div>

          <!-- 分享功能 -->
          <div class="p-6 md:p-8 border-t border-gray-200 dark:border-gray-700">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              {{ t('share.title') }}
            </h3>
            <div class="flex flex-wrap gap-3">
              <button @click="shareToWechat"
                class="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 hover:shadow-md">
                <i class="iconfont icon-wechat"></i>
                {{ t('share.wechat') }}
              </button>
              <button @click="shareToWeibo"
                class="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 hover:shadow-md">
                <i class="iconfont icon-weibo"></i>
                {{ t('share.weibo') }}
              </button>
              <button @click="shareToZhihu"
                class="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-md">
                <i class="iconfont icon-zhihu"></i>
                {{ t('share.zhihu') }}
              </button>
              <button @click="shareToJuejin"
                class="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-200 hover:shadow-md">
                <i class="iconfont icon-juejin"></i>
                {{ t('share.juejin') }}
              </button>
            </div>
          </div>

          <!-- 评论区域 -->
          <div class="p-6 md:p-8 border-t border-gray-200 dark:border-gray-700">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              {{ t('comments.title') }}
            </h3>
            <div id="giscus-container" class="giscus rounded-lg overflow-hidden shadow-sm"></div>
          </div>
        </div>
      </div>
    </main>

    <!-- 返回顶部按钮 -->
    <button v-if="showBackToTop"
      class="fixed bottom-6 right-6 z-30 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-xl"
      @click="backToTop" :aria-label="t('backToTop')">
    </button>

    <!-- 页脚 -->
    <footer
      class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16 transition-all duration-300">
      <div class="container mx-auto px-4 py-8 max-w-5xl text-center text-gray-500 dark:text-gray-400">
        <p class="transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300">© {{ new
          Date().getFullYear() }} 我的 Nuxt4 技术博客 | 基于 Nuxt4 构建</p>
        <div class="mt-4 flex justify-center gap-4">
          <a href="/"
            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm">{{ t('nav.home') }}</a>
          <a href="/archives"
            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm">{{ t('archives') }}</a>
          <a href="/categories"
            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm">{{ t('categories') }}</a>
          <a href="/tags"
            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm">{{ t('tags') }}</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useMarkdown } from '~/composables/useMarkdown';
import { useGiscus } from '~/composables/useGiscus';
import type { MarkdownParsedResult } from '~/composables/useMarkdown';
import { useI18n } from 'vue-i18n';
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

const { locale, t } = useI18n();

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
const isDarkMode = ref(false);

// 检查暗黑模式状态
const checkDarkMode = () => {
  if (process.client) {
    isDarkMode.value = document.documentElement.classList.contains('dark');
  }
};

const { updateGiscusTheme, observeThemeChange } = useGiscus();

const toggleDarkMode = () => {
  const html = document.documentElement;
  html.classList.toggle('dark');
  localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
  // 更新暗黑模式状态
  isDarkMode.value = html.classList.contains('dark');
  // 更新Giscus主题
  setTimeout(updateGiscusTheme, 100);
};

// 分享功能
const shareToWechat = () => {
  const url = window.location.href;
  const title = articleFrontmatter.value.title || '文章';
  // 微信分享需要生成二维码，这里简单提示用户复制链接
    if (process.client) {
    navigator.clipboard.writeText(url).then(() => {
      alert(t('share.copyNotice'));
    });
  }
};

const shareToWeibo = () => {
  const url = window.location.href;
  const title = articleFrontmatter.value.title || '文章';
  const content = articleFrontmatter.value.description || '';
  const weiboUrl = `https://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title + ' ' + content)}`;
  window.open(weiboUrl, '_blank', 'width=600,height=400');
};

const shareToZhihu = () => {
  const url = window.location.href;
  const title = articleFrontmatter.value.title || '文章';
  const zhihuUrl = `https://www.zhihu.com/share?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
  window.open(zhihuUrl, '_blank', 'width=600,height=400');
};

const shareToJuejin = () => {
  const url = window.location.href;
  const title = articleFrontmatter.value.title || '文章';
  const content = articleFrontmatter.value.description || '';
  const juejinUrl = `https://juejin.cn/editor/drafts/new?link=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}`;
  window.open(juejinUrl, '_blank', 'width=800,height=600');
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
    // 语言由服务器中间件检测并注入到 event.context.i18n.locale，前端无需手动传 lang
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
    articleHtml.value = parsedResult.html || `<p>${t('noArticleContent')}</p>`;

    const frontmatter = parseFrontmatter(articleRawContent.value);
    articleFrontmatter.value = {
      title: frontmatter.title || articleId,
      date: frontmatter.date || t('unknown'),
      updated: frontmatter.updated || frontmatter.date || t('unknown'),
      category: frontmatter.category || t('nav.blog'),
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      description: frontmatter.description || ''
    } as ArticleFrontmatter;

    // 动态配置元标签
    useHead({
      title: articleFrontmatter.value.title || '文章',
      meta: [
        { name: 'description', content: articleFrontmatter.value.description || '文章详情' },
        { name: 'keywords', content: (articleFrontmatter.value.tags || []).join(', ') },
        // Open Graph 元标签
        { property: 'og:title', content: articleFrontmatter.value.title || '文章' },
        { property: 'og:description', content: articleFrontmatter.value.description || '文章详情' },
        { property: 'og:url', content: window.location.href },
        // Twitter Cards 元标签
        { name: 'twitter:title', content: articleFrontmatter.value.title || '文章' },
        { name: 'twitter:description', content: articleFrontmatter.value.description || '文章详情' }
      ],
      link: [
        // canonical 标签
        { rel: 'canonical', href: window.location.href }
      ]
    });

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
    return;
  }

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
  if (process.client) {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
    // 检查并设置暗黑模式状态
    checkDarkMode();
  }

  // 加载文章
  await fetchArticle();

  // 绑定滚动事件
  if (process.client) {
    window.addEventListener("scroll", handleScroll);
    // 手动触发一次滚动监听（确保返回顶部按钮状态正确）
    handleScroll();
  }

  loading.value = false;

  // 动态加载Giscus脚本
  if (process.client) {
    await loadGiscus();
  }
});

// 清理监听
onUnmounted(() => {
  if (process.client) {
    window.removeEventListener("scroll", handleScroll);
  }
});

// 动态加载Giscus脚本
const loadGiscus = async () => {
  if (!process.client) {
    return;
  }

  try {
    // 检查Giscus容器是否存在
    const container = document.getElementById('giscus-container');
    if (!container) {
      console.warn('Giscus容器不存在');
      return;
    }

    // 检查Giscus脚本是否已经加载
    if (document.querySelector('script[src="https://giscus.app/client.js"]')) {
      console.log('Giscus脚本已加载');
      return;
    }

    // 创建Giscus脚本元素
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.setAttribute('data-repo', 'keration/nuxt');
    script.setAttribute('data-repo-id', 'R_kgDOQ9L4dA');
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'DIC_kwDOQ9L4dM4C1oCS');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', isDarkMode.value ? 'dark' : 'light');
    // 使用当前语言设置 giscus 的 data-lang
    try {
      const langVal = (locale && locale.value) ? locale.value : 'zh-CN';
      script.setAttribute('data-lang', langVal);
    } catch (e) {
      script.setAttribute('data-lang', 'zh-CN');
    }
    script.setAttribute('data-container-id', 'giscus-container');
    script.crossOrigin = 'anonymous';

    // 添加加载完成回调
    script.onload = () => {
      console.log('Giscus脚本加载完成');
    };

    script.onerror = () => {
      console.error('Giscus脚本加载失败');
    };

    // 添加到body
    document.body.appendChild(script);
  } catch (error) {
    console.error('加载Giscus失败:', error);
  }
};


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
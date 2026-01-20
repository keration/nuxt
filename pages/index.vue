<template>
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <!-- 博客标题 -->
    <h1 class="text-4xl font-bold text-center mb-12 text-blue-700">
      我的 Nuxt4 技术博客
    </h1>

    <!-- 加载中 -->
    <div v-if="loading" class="text-center text-gray-500 text-xl">
      加载中...
    </div>

    <!-- 错误提示 -->
    <div v-if="error" class="text-center text-red-500 text-xl">
      ❌ {{ error.message }}
    </div>

    <!-- 文章列表 -->
    <div v-else class="space-y-8">
      <article
        v-for="article in articles"
        :key="article.path"
        class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-300"
      >
        <NuxtLink :to="article.path">
          <h2 class="text-2xl font-semibold text-blue-600 hover:underline">
            {{ article.frontmatter?.title || '无标题' }} <!-- 加兜底 -->
          </h2>
        </NuxtLink>

        <div class="text-gray-500 mt-2 flex items-center gap-4 flex-wrap">
          <!-- 1. 加可选链+兜底，避免date不存在报错 -->
          <span>📅 {{ article.frontmatter?.date || '未发布' }}</span>
          <div class="flex gap-2">
            <!-- 2. 加v-if判空，避免tags是undefined导致循环报错 -->
            <span
              v-for="tag of article.frontmatter?.tags || []"
              :key="tag"
              class="bg-gray-100 px-2 py-1 rounded text-sm"
            >
              🏷️ {{ tag }}
            </span>
          </div>
        </div>

        <!-- 3. description加兜底 -->
        <p class="mt-4 text-gray-700 line-clamp-2">
          {{ article.frontmatter?.description || '暂无简介' }}
        </p>

        <!-- 4. 修复硬编码链接，复用文章的动态路径 -->
        <NuxtLink
          :to="article.path"
          class="mt-4 inline-block text-blue-600 hover:underline"
        >
          阅读更多 →
        </NuxtLink>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// 手动导入useMarkdown（避免Nuxt自动导入失效）
import { useMarkdown } from '~/composables/useMarkdown';

const loading = ref(true);
const error = ref(null);
const articles = ref([]);

try {
  // 调用修复后的服务端接口
  const { data } = await useFetch("/api/article/hello-nuxt-blog");

  // 5. 加data.value的容错，避免undefined报错
  if (!data.value) throw new Error("接口返回数据为空");
  if (data.value.code !== 200) {
    throw new Error(data.value.message);
  }

  // 6. 修复：useMarkdown是异步函数，必须加await
  const parsedResult = await useMarkdown(data.value.data.content);
  // 7. 给frontmatter兜底为空对象，避免属性访问报错
  const frontmatter = parsedResult.frontmatter || {};
  
  articles.value = [{ 
    frontmatter, 
    path: "/hello-nuxt-blog" 
  }];
} catch (err) {
  error.value = err;
  console.error("首页加载错误：", err); // 加日志，方便调试
} finally {
  loading.value = false;
}
</script>
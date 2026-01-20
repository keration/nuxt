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
            {{ article.frontmatter.title }}
          </h2>
        </NuxtLink>

        <div class="text-gray-500 mt-2 flex items-center gap-4 flex-wrap">
          <span>📅 {{ article.frontmatter.date }}</span>
          <div class="flex gap-2">
            <span
              v-for="tag of article.frontmatter.tags"
              :key="tag"
              class="bg-gray-100 px-2 py-1 rounded text-sm"
            >
              🏷️ {{ tag }}
            </span>
          </div>
        </div>

        <p class="mt-4 text-gray-700 line-clamp-2">
          {{ article.frontmatter.description }}
        </p>

        <NuxtLink
          to="/hello-nuxt-blog"
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

const loading = ref(true);
const error = ref(null);
const articles = ref([]);

try {
  // 调用修复后的服务端接口
  const { data } = await useFetch("/api/article/hello-nuxt-blog");

  if (data.value.code !== 200) {
    throw new Error(data.value.message);
  }

  // 解析 Markdown 内容
  const { frontmatter } = useMarkdown(data.value.data.content);
  articles.value = [{ frontmatter, path: "/hello-nuxt-blog" }];
} catch (err) {
  error.value = err;
} finally {
  loading.value = false;
}
</script>

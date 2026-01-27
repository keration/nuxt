<template>
  <div class="container mx-auto px-4 py-8 max-w-5xl">
    <h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-8">
      标签：{{ route.params.tag }}
    </h1>

    <div v-if="articles.length > 0" class="space-y-6">
      <div v-for="article in articles" :key="article.id"
        class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
        <!-- ❶ 改为 article.frontmatter.title -->
        <router-link :to="article.path" class="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline">
          {{ article.frontmatter.title }}
        </router-link>
        <!-- ❷ 改为 article.frontmatter.description -->
        <p class="text-gray-600 dark:text-gray-400 mt-2">{{ article.frontmatter.description }}</p>
        <div class="flex flex-wrap gap-2 mt-3 text-sm">
          <!-- ❸ 改为 article.frontmatter.date -->
          <span class="text-gray-500 dark:text-gray-500">发布时间：{{ article.frontmatter.date }}</span>
          <!-- ❹ 改为 article.frontmatter.category -->
          <span class="text-gray-500 dark:text-gray-500">分类：{{ article.frontmatter.category }}</span>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-10 text-gray-500 dark:text-gray-400">
      暂无该标签下的文章
    </div>
  </div>
</template>

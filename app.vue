<template>
  <div class="min-h-screen" :class="{ dark: isDark }">
    <!-- 把外部样式链接移到 template 内（Prettier 解析更友好） -->
    <link
      rel="stylesheet"
      href="https://at.alicdn.com/t/c/font_4362472_9019h76749.css"
    />

    <!-- 暗黑模式切换按钮 -->
    <button
      class="fixed top-8 right-8 px-4 py-2 rounded-full border z-50 transition-colors"
      @click="toggleDarkMode()"
      :class="[
        isDark
          ? 'bg-gray-800 text-white border-gray-700'
          : 'bg-white text-gray-800 border-gray-200',
      ]"
    >
      {{ isDark ? "🌞 浅色模式" : "🌙 暗黑模式" }}
    </button>

    <NuxtPage />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const isDark = ref(false);

onMounted(() => {
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "true") {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  }
});

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  const htmlEl = document.documentElement;
  if (isDark.value) {
    htmlEl.classList.add("dark");
    localStorage.setItem("darkMode", "true");
  } else {
    htmlEl.classList.remove("dark");
    localStorage.setItem("darkMode", "false");
  }
};
</script>

<!-- 移除 scoped 先验证（避免 Prettier 误判作用域），后续可加回 -->
<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Alibaba PuHuiTi 2.0", system-ui, sans-serif !important;
}

/* 基础页面样式 */
.min-h-screen {
  min-height: 100vh;
  transition: background-color 0.3s ease;
}

/* 浅色模式 */
html:not(.dark) .min-h-screen {
  background-color: #f9fafb;
  color: #333;
}

/* 暗黑模式 */
html.dark .min-h-screen {
  background-color: #1f2937;
  color: #f9fafb;
}

/* 暗黑模式组件适配 */
html.dark .border {
  border-color: #374151 !important;
}
html.dark .text-gray-700 {
  color: #d1d5db !important;
}
html.dark .text-gray-500 {
  color: #9ca3af !important;
}
html.dark .bg-gray-100 {
  background-color: #374151 !important;
}
html.dark article:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>

<template>
  <div class="min-h-screen" :class="{ dark: isDark }">
    <!-- 阿里图标库（保留） -->
    <link
      rel="stylesheet"
      href="https://at.alicdn.com/t/c/font_4362472_9019h76749.css"
    />

    <!-- Umami 站点统计 -->
    <script async src="https://umami.chenjianhui.site/script.js" data-website-id="your-website-id"></script>

    <!-- 🌙/☀️ 暗黑模式切换按钮（现代化重构） -->
    <button
      class="fixed top-6 right-6 z-50 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
      @click="toggleDarkMode()"
      :class="[
        isDark
          ? 'bg-gray-800/80 backdrop-blur-md text-white border border-gray-700/50 shadow-lg shadow-black/20'
          : 'bg-white/80 backdrop-blur-md text-gray-800 border border-gray-200/80 shadow-md shadow-gray-200/50',
      ]"
      aria-label="切换暗黑模式"
    >
      <span class="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium">
        <i class="iconfont" :class="isDark ? 'icon-sun' : 'icon-moon'"></i>
        {{ isDark ? "浅色模式" : "暗黑模式" }}
      </span>
    </button>

    <!-- 全局页面容器（优化布局+过渡） -->
    <main class="transition-opacity duration-500 ease-in-out opacity-100">
      <NuxtPage />
    </main>

    <!-- 底部全局页脚（增加现代感） -->
    <footer class="mt-auto py-6 border-t" :class="[
      isDark ? 'border-gray-700/50 text-gray-400' : 'border-gray-200 text-gray-600'
    ]">
      <div class="container mx-auto px-4 text-center text-sm">
        <p>© {{ new Date().getFullYear() }} 我的 Nuxt4 技术博客 · 用技术记录成长</p>
        <p class="mt-1 opacity-70">基于 Nuxt4 + Vue3 构建</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
const isDark = ref(false);

onMounted(() => {
  // 1. 优先读取系统深色模式（更贴合用户习惯）
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // 2. 读取本地存储（优先级高于系统设置）
  const savedMode = localStorage.getItem("darkMode");
  
  if (savedMode !== null) {
    isDark.value = savedMode === "true";
  } else {
    isDark.value = systemDark; // 无本地存储时用系统设置
  }

  // 应用初始模式
  updateDarkModeClass(isDark.value);

  // 监听系统深色模式变化
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (localStorage.getItem("darkMode") === null) { // 仅当用户未手动设置时同步系统
      isDark.value = e.matches;
      updateDarkModeClass(isDark.value);
    }
  });
});

// 提取复用函数（优化代码结构）
const updateDarkModeClass = (isDarkMode) => {
  const htmlEl = document.documentElement;
  if (isDarkMode) {
    htmlEl.classList.add("dark");
  } else {
    htmlEl.classList.remove("dark");
  }
};

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  updateDarkModeClass(isDark.value);
  localStorage.setItem("darkMode", isDark.value.toString());
  
  // 按钮点击反馈（轻微震动）
  const btn = document.querySelector('[aria-label="切换暗黑模式"]');
  btn.classList.add("animate-shake");
  setTimeout(() => btn.classList.remove("animate-shake"), 300);
};

// 全局样式优化：监听暗黑模式变化，优化滚动条样式
watch(isDark, (newVal) => {
  document.body.style.scrollbarColor = newVal 
    ? "#4b5563 #1f2937" // 暗黑模式滚动条
    : "#d1d5db #f9fafb"; // 浅色模式滚动条
});
</script>

<style>

/* 基础页面样式（优化配色+过渡） */
.min-h-screen {
  min-height: 100vh;
  transition: background-color 0.4s ease, color 0.4s ease;
  display: flex;
  flex-direction: column; /* 让页脚固定在底部 */
}

/* 浅色模式（柔和配色，避免刺眼） */
html:not(.dark) .min-h-screen {
  background-color: #f8fafc;
  color: #1e293b;
}

/* 暗黑模式（深灰而非纯黑，减少视觉疲劳） */
html.dark .min-h-screen {
  background-color: #0f172a;
  color: #f1f5f9;
}

/* 全局滚动条优化（现代感） */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  border-radius: 4px;
  transition: background-color 0.3s ease;
}
html:not(.dark) ::-webkit-scrollbar-thumb {
  background-color: #d1d5db;
}
html:not(.dark) ::-webkit-scrollbar-thumb:hover {
  background-color: #94a3b8;
}
html.dark ::-webkit-scrollbar-thumb {
  background-color: #4b5563;
}
html.dark ::-webkit-scrollbar-thumb:hover {
  background-color: #94a3b8;
}

/* 按钮点击震动动画 */
.animate-shake {
  animation: shake 0.3s ease-in-out;
}
@keyframes shake {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-3deg); }
  75% { transform: rotate(3deg); }
}

/* 全局链接样式（统一+现代） */
a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease, border-bottom 0.2s ease;
  border-bottom: 1px solid transparent;
}
html:not(.dark) a:hover {
  color: #2563eb;
  border-bottom: 1px solid #2563eb/30;
}
html.dark a:hover {
  color: #60a5fa;
  border-bottom: 1px solid #60a5fa/30;
}

/* 全局卡片/文章样式适配（和列表页统一） */
article {
  transition: all 0.3s ease;
  border-radius: 12px !important; /* 更圆润的圆角 */
}
html.dark article {
  background-color: #1e293b/50 !important;
}
html:not(.dark) article {
  background-color: white !important;
}
</style>
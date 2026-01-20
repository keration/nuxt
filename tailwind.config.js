/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 和你的暗黑模式逻辑匹配
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

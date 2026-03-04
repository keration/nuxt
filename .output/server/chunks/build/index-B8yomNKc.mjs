import { _ as __nuxt_component_0 } from './nuxt-link-C9uhdLzR.mjs';
import { v as vueExports, b as useI18n, s as serverRenderer_cjs_prodExports } from './server.mjs';
import '../_/nitro.mjs';
import 'fs/promises';
import 'path';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue';
import 'vue-router';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'consola';
import 'fast-xml-parser';
import 'ipx';
import 'node:crypto';
import 'node:stream';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale, availableLocales } = useI18n();
    const currentLocale = vueExports.computed(() => locale.value);
    const languageDropdownOpen = vueExports.ref(false);
    const loading = vueExports.ref(true);
    const error = vueExports.ref(null);
    const articles = vueExports.ref([]);
    const pagination = vueExports.ref({
      page: 1,
      limit: 10,
      total: 0,
      totalPages: 0,
      hasNext: false,
      hasPrev: false
    });
    const visiblePages = vueExports.computed(() => {
      const current = pagination.value.page;
      const total = pagination.value.totalPages;
      const pages = [];
      if (total <= 7) {
        for (let i = 1; i <= total; i++) {
          pages.push(i);
        }
      } else {
        if (current <= 4) {
          pages.push(1, 2, 3, 4, 5, "...", total);
        } else if (current >= total - 3) {
          pages.push(1, "...", total - 4, total - 3, total - 2, total - 1, total);
        } else {
          pages.push(1, "...", current - 1, current, current + 1, "...", total);
        }
      }
      return pages.filter((page) => typeof page === "number");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "min-h-screen bg-gray-50 dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-200" }, _attrs))}><header class="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 shadow-sm border-b border-gray-100 dark:border-gray-800"><div class="container mx-auto px-4 py-2.5 max-w-3xl flex justify-between items-center"><a href="/" class="text-lg font-bold text-blue-600 dark:text-blue-400">Nuxt 技术博客</a><nav class="flex items-center gap-4"><ul class="flex gap-4 text-sm"><li><a href="/" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("nav.home"))}</a></li><li><a href="/search" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("search"))}</a></li><li><a href="/tags" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("tags"))}</a></li><li><a href="/categories" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("categories"))}</a></li><li><a href="/archives" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("archives"))}</a></li></ul><div class="relative"><button class="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-1">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(currentLocale) === "zh-CN" ? vueExports.unref(t)("langName.zh-CN") : vueExports.unref(t)("langName.en"))}</button>`);
      if (vueExports.unref(languageDropdownOpen)) {
        _push(`<div class="absolute right-0 mt-1 w-32 bg-white dark:bg-gray-800 shadow-lg rounded-md py-1 z-10"><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(availableLocales), (locale2) => {
          _push(`<button class="${serverRenderer_cjs_prodExports.ssrRenderClass([{ "bg-gray-100 dark:bg-gray-700": vueExports.unref(currentLocale) === locale2.code }, "block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"])}">${serverRenderer_cjs_prodExports.ssrInterpolate(locale2.name)}</button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button class="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"${serverRenderer_cjs_prodExports.ssrRenderAttr("aria-label", vueExports.unref(t)("toggleDark"))}></button></nav></div></header><main class="container mx-auto px-4 py-6 max-w-3xl"><div class="text-center mb-8 pt-4"><h1 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2 relative">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("welcome"))} <span class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-blue-500 rounded-full"></span></h1><p class="text-gray-600 dark:text-gray-400 text-sm">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("description"))}</p></div>`);
      if (vueExports.unref(loading)) {
        _push(`<div class="text-center py-12"><div class="inline-block w-10 h-10 border-3 border-blue-100 dark:border-blue-900 border-t-blue-500 dark:border-t-blue-400 rounded-full animate-spin mb-3"></div><p class="text-gray-500 dark:text-gray-400 text-sm">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("loadingArticles"))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (vueExports.unref(error)) {
        _push(`<div class="py-8 text-center bg-red-50 dark:bg-red-900/10 rounded-lg p-4"><div class="bg-red-100 dark:bg-red-900/30 text-red-500 dark:text-red-400 rounded-full w-12 h-12 flex items-center justify-center mb-2"></div><p class="text-red-500 dark:text-red-400 text-sm font-medium">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(error).message)}</p><button class="mt-3 px-4 py-1.5 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("reload"))}</button></div>`);
      } else {
        _push(`<div class="space-y-4"><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(articles), (article) => {
          _push(`<article class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"><div class="p-4">`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
            to: article.path,
            class: "block"
          }, {
            default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h2 class="flex justify-center text-base md:text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-2"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(article.frontmatter?.title || article.id)}</h2>`);
              } else {
                return [
                  vueExports.createVNode("h2", { class: "flex justify-center text-base md:text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-2" }, vueExports.toDisplayString(article.frontmatter?.title || article.id), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3"><span class="flex items-center gap-1">${serverRenderer_cjs_prodExports.ssrInterpolate(article.frontmatter?.date || vueExports.unref(t)("unknown"))}</span><span class="text-gray-300 dark:text-gray-600">•</span><span class="flex items-center gap-1">`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
            to: `/categories/${article.frontmatter?.category || vueExports.unref(t)("uncategorized")}`,
            class: "hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          }, {
            default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(article.frontmatter?.category || vueExports.unref(t)("uncategorized"))}`);
              } else {
                return [
                  vueExports.createTextVNode(vueExports.toDisplayString(article.frontmatter?.category || vueExports.unref(t)("uncategorized")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</span><div class="flex flex-wrap gap-1 ml-auto"><!--[-->`);
          serverRenderer_cjs_prodExports.ssrRenderList(article.frontmatter?.tags || [], (tag) => {
            _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
              key: tag,
              to: `/tags/${tag}`,
              class: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded text-xs hover:bg-blue-100 dark:hover:bg-blue-800/30 transition-colors"
            }, {
              default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(tag)}`);
                } else {
                  return [
                    vueExports.createTextVNode(vueExports.toDisplayString(tag), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div></div><p class="text-gray-700 dark:text-gray-300 text-sm line-clamp-2 leading-tight mb-3 flex justify-center">${serverRenderer_cjs_prodExports.ssrInterpolate(article.frontmatter?.description || vueExports.unref(t)("noDescription"))}</p>`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
            to: article.path,
            class: "inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-xs font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors justify-end"
          }, {
            default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("readMore"))}`);
              } else {
                return [
                  vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(t)("readMore")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></article>`);
        });
        _push(`<!--]-->`);
        if (vueExports.unref(articles).length === 0) {
          _push(`<div class="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg"><p class="text-gray-500 dark:text-gray-400 text-sm">暂无文章，快来创作你的第一篇博客吧！</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      if (vueExports.unref(pagination).totalPages > 1) {
        _push(`<div class="mt-8 flex justify-center"><nav class="flex items-center gap-2"><button${serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(!vueExports.unref(pagination).hasPrev) ? " disabled" : ""} class="px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("prevPage"))}</button><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(visiblePages), (pageNum) => {
          _push(`<button class="${serverRenderer_cjs_prodExports.ssrRenderClass([
            "px-3 py-2 text-sm font-medium border rounded-md transition-colors",
            pageNum === vueExports.unref(pagination).page ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-blue-500" : "text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
          ])}">${serverRenderer_cjs_prodExports.ssrInterpolate(pageNum)}</button>`);
        });
        _push(`<!--]--><button${serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(!vueExports.unref(pagination).hasNext) ? " disabled" : ""} class="px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("nextPage"))}</button></nav></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main><footer class="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-8"><div class="container mx-auto px-4 py-4 max-w-3xl text-center text-gray-500 dark:text-gray-400 text-xs"><p>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("copyright"))} | 基于 Nuxt4 + Vue3 构建</p></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B8yomNKc.mjs.map

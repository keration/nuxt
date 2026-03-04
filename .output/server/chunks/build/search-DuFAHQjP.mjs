import { _ as __nuxt_component_0 } from './nuxt-link-C9uhdLzR.mjs';
import { v as vueExports, b as useI18n, s as serverRenderer_cjs_prodExports } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
  __name: "search",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const searchQuery = vueExports.ref("");
    const searchResults = vueExports.ref([]);
    const loading = vueExports.ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "min-h-screen bg-gray-50 dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-200" }, _attrs))} data-v-2f55c378><header class="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 shadow-sm border-b border-gray-100 dark:border-gray-800" data-v-2f55c378><div class="container mx-auto px-4 py-2.5 max-w-3xl flex justify-between items-center" data-v-2f55c378><a href="/" class="text-lg font-bold text-blue-600 dark:text-blue-400" data-v-2f55c378>Nuxt 技术博客</a><nav class="flex items-center gap-4" data-v-2f55c378><ul class="flex gap-4 text-sm" data-v-2f55c378><li data-v-2f55c378><a href="/" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-v-2f55c378>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("nav.home"))}</a></li><li data-v-2f55c378><a href="/tags" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-v-2f55c378>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("tags"))}</a></li><li data-v-2f55c378><a href="/categories" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-v-2f55c378>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("categories"))}</a></li><li data-v-2f55c378><a href="/archives" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-v-2f55c378>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("archives"))}</a></li></ul><button class="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"${serverRenderer_cjs_prodExports.ssrRenderAttr("aria-label", vueExports.unref(t)("toggleDark"))} data-v-2f55c378></button></nav></div></header><main class="container mx-auto px-4 py-6 max-w-3xl" data-v-2f55c378><div class="mb-8" data-v-2f55c378><div class="relative" data-v-2f55c378><input${serverRenderer_cjs_prodExports.ssrRenderAttr("value", vueExports.unref(searchQuery))} type="text"${serverRenderer_cjs_prodExports.ssrRenderAttr("placeholder", vueExports.unref(t)("searchPage.placeholder"))} class="w-full px-4 py-3 pl-12 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" data-v-2f55c378><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-v-2f55c378><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-2f55c378><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-2f55c378></path></svg></div></div></div>`);
      if (vueExports.unref(searchQuery) && !vueExports.unref(loading)) {
        _push(`<div class="mb-6" data-v-2f55c378><h2 class="text-lg font-semibold text-gray-800 dark:text-white mb-4" data-v-2f55c378>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("searchResults"))} (${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(searchResults).length)}) </h2></div>`);
      } else {
        _push(`<!---->`);
      }
      if (vueExports.unref(loading)) {
        _push(`<div class="text-center py-12" data-v-2f55c378><div class="inline-block w-10 h-10 border-3 border-blue-100 dark:border-blue-900 border-t-blue-500 dark:border-t-blue-400 rounded-full animate-spin mb-3" data-v-2f55c378></div><p class="text-gray-500 dark:text-gray-400 text-sm" data-v-2f55c378>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("searchPage.loading"))}</p></div>`);
      } else if (vueExports.unref(searchResults).length > 0) {
        _push(`<div class="space-y-4" data-v-2f55c378><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(searchResults), (article) => {
          _push(`<article class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden" data-v-2f55c378><div class="p-4" data-v-2f55c378>`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
            to: article.path,
            class: "block"
          }, {
            default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h2 class="flex justify-center text-base md:text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-2" data-v-2f55c378${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(article.frontmatter?.title || article.id)}</h2>`);
              } else {
                return [
                  vueExports.createVNode("h2", { class: "flex justify-center text-base md:text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-2" }, vueExports.toDisplayString(article.frontmatter?.title || article.id), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3" data-v-2f55c378><span class="flex items-center gap-1" data-v-2f55c378>${serverRenderer_cjs_prodExports.ssrInterpolate(article.frontmatter?.date || "未发布")}</span><span class="text-gray-300 dark:text-gray-600" data-v-2f55c378>•</span><span class="flex items-center gap-1" data-v-2f55c378>`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
            to: `/categories/${article.frontmatter?.category || "未分类"}`,
            class: "hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          }, {
            default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(article.frontmatter?.category || "未分类")}`);
              } else {
                return [
                  vueExports.createTextVNode(vueExports.toDisplayString(article.frontmatter?.category || "未分类"), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</span><div class="flex flex-wrap gap-1 ml-auto" data-v-2f55c378><!--[-->`);
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
          _push(`<!--]--></div></div><p class="text-gray-700 dark:text-gray-300 text-sm line-clamp-2 leading-tight mb-3 flex justify-center" data-v-2f55c378>${serverRenderer_cjs_prodExports.ssrInterpolate(article.frontmatter?.description || vueExports.unref(t)("noDescription"))}</p>`);
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
        _push(`<!--]--></div>`);
      } else if (vueExports.unref(searchQuery) && !vueExports.unref(loading)) {
        _push(`<div class="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg" data-v-2f55c378><p class="text-gray-500 dark:text-gray-400 text-sm" data-v-2f55c378>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("searchPage.noResults"))}</p></div>`);
      } else {
        _push(`<div class="text-center py-12" data-v-2f55c378><div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4" data-v-2f55c378><svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-2f55c378><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-2f55c378></path></svg></div><h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2" data-v-2f55c378>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("searchPage.title"))}</h3><p class="text-gray-500 dark:text-gray-400 text-sm" data-v-2f55c378>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("searchPage.hint"))}</p></div>`);
      }
      _push(`</main><footer class="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-8" data-v-2f55c378><div class="container mx-auto px-4 py-4 max-w-3xl text-center text-gray-500 dark:text-gray-400 text-xs" data-v-2f55c378><p data-v-2f55c378>© ${serverRenderer_cjs_prodExports.ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} 我的 Nuxt4 技术博客 | 基于 Nuxt4 + Vue3 构建</p></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2f55c378"]]);

export { search as default };
//# sourceMappingURL=search-DuFAHQjP.mjs.map

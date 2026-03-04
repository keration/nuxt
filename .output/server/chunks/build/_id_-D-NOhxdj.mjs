import { _ as __nuxt_component_0 } from './nuxt-link-C9uhdLzR.mjs';
import { v as vueExports, a as useRoute, b as useI18n, s as serverRenderer_cjs_prodExports } from './server.mjs';
import { marked, Renderer } from 'marked';
import hljs from 'highlight.js';
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

const markedOptions = {
  gfm: true,
  // 仅保留17.x支持的配置
  breaks: true,
  // 换行符转<br>
  async: false
  // 禁用异步解析
  // 移除headerIds（17.x已移除该配置）
};
marked.setOptions(markedOptions);
const createCustomRenderer = () => {
  const renderer = new Renderer();
  renderer.code = (rawCodeObj) => {
    const rawCode = (rawCodeObj.text ?? "").trim();
    const targetLang = (rawCodeObj.lang ?? "javascript").toLowerCase().trim();
    const unescapedCode = rawCode.replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&");
    let highlightedCode = unescapedCode;
    try {
      const supportedLang = hljs.getLanguage(targetLang);
      if (supportedLang) {
        const highlightResult = hljs.highlight(unescapedCode, {
          language: targetLang,
          ignoreIllegals: true
        });
        highlightedCode = highlightResult.value ?? unescapedCode;
      }
    } catch (err) {
      console.warn(`⚠️ [${targetLang}] 代码高亮失败：`, err);
    }
    return `
      <pre class="hljs language-${targetLang}" style="
        padding: 1.5rem;
        border-radius: 8px;
        background: #282c34 !important;
        overflow-x: auto;
        font-family: Consolas, Monaco, 'Courier New', monospace;
        color: #abb2bf;
        margin: 1rem 0;
      ">
        <code class="language-${targetLang}">${highlightedCode}</code>
      </pre>
    `.trim();
  };
  return renderer;
};
marked.use({ renderer: createCustomRenderer() });
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    route.params.id || "";
    const { locale, t } = useI18n();
    const loading = vueExports.ref(true);
    const error = vueExports.ref(null);
    vueExports.ref(null);
    const articleHtml = vueExports.ref("");
    const articleFrontmatter = vueExports.ref({});
    const articleRawContent = vueExports.ref("");
    const tocItems = vueExports.ref([]);
    const showMobileToc = vueExports.ref(false);
    const showBackToTop = vueExports.ref(false);
    vueExports.ref(0);
    vueExports.ref(false);
    const wordCount = vueExports.computed(() => {
      if (!articleRawContent.value) return 0;
      const pureText = articleRawContent.value.replace(/```[\s\S]*?```/g, "").replace(/`[^`]+`/g, "").replace(/\[.*?\]\(.*?\)/g, "").replace(/!\[.*?\]\(.*?\)/g, "").replace(/^---[\s\S]*?---/m, "").replace(/[#*`~>_\-=+|()[\]{};:,.!?]/g, "").replace(/\s+/g, "");
      return pureText.length || 0;
    });
    const readingTime = vueExports.computed(() => {
      const count = wordCount.value;
      return count > 0 ? Math.ceil(count / 300) : 1;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "min-h-screen bg-gray-50 dark:bg-gray-900" }, _attrs))} data-v-26f5b2ca><header class="sticky top-0 z-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-300" data-v-26f5b2ca><div class="container mx-auto px-4 py-3 max-w-5xl flex justify-between items-center" data-v-26f5b2ca><a href="/" class="text-xl font-bold text-blue-600 dark:text-blue-400 transition-all duration-300 hover:scale-105" data-v-26f5b2ca>Nuxt 技术博客</a><nav class="flex items-center gap-4" data-v-26f5b2ca><ul class="hidden md:flex gap-6" data-v-26f5b2ca><li data-v-26f5b2ca><a href="/" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("nav.home"))}</a></li><li data-v-26f5b2ca><a href="/search" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("search"))}</a></li><li data-v-26f5b2ca><a href="/tags" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("tags"))}</a></li><li data-v-26f5b2ca><a href="/categories" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("categories"))}</a></li><li data-v-26f5b2ca><a href="/archives" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("archives"))}</a></li></ul><button class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"${serverRenderer_cjs_prodExports.ssrRenderAttr("aria-label", vueExports.unref(t)("toggleDark"))} data-v-26f5b2ca></button></nav></div></header><div class="fixed top-24 right-4 z-30 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 w-64 max-w-[80vw] overflow-y-auto max-h-[70vh] transition-all duration-300 hover:shadow-lg hidden lg:block" data-v-26f5b2ca><h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center gap-2" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("toc.title"))}</h3>`);
      if (vueExports.unref(tocItems).length > 0) {
        _push(`<div class="space-y-1 text-sm" data-v-26f5b2ca><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(tocItems), (item) => {
          _push(`<li class="${serverRenderer_cjs_prodExports.ssrRenderClass([
            "pl-" + (item.level - 1) * 4,
            item.isActive ? "text-blue-600 dark:text-blue-400 font-medium bg-blue-50/50 dark:bg-blue-900/20 rounded-md" : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700/50",
            "cursor-pointer transition-all duration-200 py-1.5 px-2"
          ])}" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(item.text)}</li>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-sm text-gray-500 dark:text-gray-400 py-2 flex items-center gap-2" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("toc.empty"))}</div>`);
      }
      _push(`</div>`);
      if (vueExports.unref(tocItems).length > 0) {
        _push(`<button class="fixed bottom-20 right-4 z-30 bg-white dark:bg-gray-800 rounded-full shadow-lg p-3 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl lg:hidden" aria-label="显示章节目录" data-v-26f5b2ca></button>`);
      } else {
        _push(`<!---->`);
      }
      if (vueExports.unref(showMobileToc) && vueExports.unref(tocItems).length > 0) {
        _push(`<div class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm flex items-end justify-center lg:hidden" data-v-26f5b2ca><div class="bg-white dark:bg-gray-800 rounded-t-xl shadow-xl w-full max-h-[70vh] overflow-y-auto transition-transform duration-300 transform translate-y-0" data-v-26f5b2ca><div class="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center" data-v-26f5b2ca><h3 class="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2" data-v-26f5b2ca> 文章目录 </h3><button class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" data-v-26f5b2ca></button></div><div class="p-4 space-y-1 text-sm" data-v-26f5b2ca><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(tocItems), (item) => {
          _push(`<li class="${serverRenderer_cjs_prodExports.ssrRenderClass([
            "pl-" + (item.level - 1) * 4,
            item.isActive ? "text-blue-600 dark:text-blue-400 font-medium bg-blue-50/50 dark:bg-blue-900/20 rounded-md" : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700/50",
            "cursor-pointer transition-all duration-200 py-1.5 px-2"
          ])}" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(item.text)}</li>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main class="container mx-auto px-4 py-8 max-w-3xl" data-v-26f5b2ca><div class="flex-1 max-w-3xl" data-v-26f5b2ca>`);
      if (vueExports.unref(loading)) {
        _push(`<div class="text-center py-20" data-v-26f5b2ca><div class="inline-block w-12 h-12 border-4 border-blue-200 dark:border-blue-800 border-t-blue-500 dark:border-t-blue-400 rounded-full animate-spin mb-4" data-v-26f5b2ca></div><p class="text-gray-500 dark:text-gray-400 text-xl" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("loadingArticle"))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (vueExports.unref(error)) {
        _push(`<div class="py-16 text-center" data-v-26f5b2ca><div class="bg-red-100 dark:bg-red-900/30 text-red-500 dark:text-red-400 rounded-full w-16 h-16 flex items-center justify-center mb-4" data-v-26f5b2ca></div><p class="text-red-500 dark:text-red-400 text-xl font-medium" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(error).message)}</p><button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-md" data-v-26f5b2ca> 重新加载 </button></div>`);
      } else {
        _push(`<div class="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg" data-v-26f5b2ca><div class="p-6 md:p-8 border-b border-gray-200 dark:border-gray-700" data-v-26f5b2ca><h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-6 leading-tight" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(articleFrontmatter)?.title || vueExports.unref(t)("unnamedArticle"))}</h1><div class="flex flex-wrap gap-3 md:gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6" data-v-26f5b2ca><span class="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-700/50 px-3 py-1.5 rounded-full" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(articleFrontmatter)?.date || "未知")}</span>`);
        if (vueExports.unref(articleFrontmatter)?.updated) {
          _push(`<span class="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-700/50 px-3 py-1.5 rounded-full" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(articleFrontmatter)?.updated || "未知")}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-700/50 px-3 py-1.5 rounded-full" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(readingTime))} ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("minute"))}</span><span class="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-700/50 px-3 py-1.5 rounded-full" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(wordCount))} ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("words"))}</span><span class="flex items-center gap-1.5" data-v-26f5b2ca>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
          to: `/categories/${vueExports.unref(articleFrontmatter)?.category || "未分类"}`,
          class: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-all duration-200"
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(articleFrontmatter)?.category || "未分类")}`);
            } else {
              return [
                vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(articleFrontmatter)?.category || "未分类"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</span></div><div class="flex flex-wrap gap-2 mt-4" data-v-26f5b2ca><span class="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("tagsLabel"))}</span><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(articleFrontmatter)?.tags || [], (tag) => {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
            key: tag,
            to: `/tags/${tag}`,
            class: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-all duration-200"
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
        _push(`<!--]-->`);
        if (!vueExports.unref(articleFrontmatter)?.tags || vueExports.unref(articleFrontmatter).tags.length === 0) {
          _push(`<span class="text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 px-3 py-1 rounded-full" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("noTags"))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="p-6 md:p-8 prose prose-blue prose-lg dark:prose-invert max-w-none transition-all duration-300" data-v-26f5b2ca><div data-v-26f5b2ca>${vueExports.unref(articleHtml) ?? ""}</div></div><div class="p-6 md:p-8 border-t border-gray-200 dark:border-gray-700" data-v-26f5b2ca><h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("share.title"))}</h3><div class="flex flex-wrap gap-3" data-v-26f5b2ca><button class="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 hover:shadow-md" data-v-26f5b2ca><i class="iconfont icon-wechat" data-v-26f5b2ca></i> ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("share.wechat"))}</button><button class="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 hover:shadow-md" data-v-26f5b2ca><i class="iconfont icon-weibo" data-v-26f5b2ca></i> ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("share.weibo"))}</button><button class="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-md" data-v-26f5b2ca><i class="iconfont icon-zhihu" data-v-26f5b2ca></i> ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("share.zhihu"))}</button><button class="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-200 hover:shadow-md" data-v-26f5b2ca><i class="iconfont icon-juejin" data-v-26f5b2ca></i> ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("share.juejin"))}</button></div></div><div class="p-6 md:p-8 border-t border-gray-200 dark:border-gray-700" data-v-26f5b2ca><h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center gap-2" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("comments.title"))}</h3><div id="giscus-container" class="giscus rounded-lg overflow-hidden shadow-sm" data-v-26f5b2ca></div></div></div>`);
      }
      _push(`</div></main>`);
      if (vueExports.unref(showBackToTop)) {
        _push(`<button class="fixed bottom-6 right-6 z-30 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-xl"${serverRenderer_cjs_prodExports.ssrRenderAttr("aria-label", vueExports.unref(t)("backToTop"))} data-v-26f5b2ca></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16 transition-all duration-300" data-v-26f5b2ca><div class="container mx-auto px-4 py-8 max-w-5xl text-center text-gray-500 dark:text-gray-400" data-v-26f5b2ca><p class="transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300" data-v-26f5b2ca>© ${serverRenderer_cjs_prodExports.ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} 我的 Nuxt4 技术博客 | 基于 Nuxt4 构建</p><div class="mt-4 flex justify-center gap-4" data-v-26f5b2ca><a href="/" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("nav.home"))}</a><a href="/archives" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("archives"))}</a><a href="/categories" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("categories"))}</a><a href="/tags" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm" data-v-26f5b2ca>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("tags"))}</a></div></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-26f5b2ca"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-D-NOhxdj.mjs.map

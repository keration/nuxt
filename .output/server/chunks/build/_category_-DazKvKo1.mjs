import { v as vueExports, b as useI18n, a as useRoute, s as serverRenderer_cjs_prodExports } from './server.mjs';
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
  __name: "[category]",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const route = useRoute();
    const articles = vueExports.ref([]);
    const loading = vueExports.ref(true);
    const fetchArticlesByCategory = async () => {
      const category = route.params.category;
      try {
        const response = await $fetch(`/api/article/filter?category=${encodeURIComponent(category)}`);
        if (response?.code === 200) {
          articles.value = response.data || [];
        }
      } catch (err) {
        console.error("筛选文章失败：", err);
      } finally {
        loading.value = false;
      }
    };
    vueExports.watch(() => route.params.category, () => {
      fetchArticlesByCategory();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vueExports.resolveComponent("router-link");
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "container mx-auto px-4 py-8 max-w-5xl" }, _attrs))}><h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-8">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("categories"))}：${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(route).params.category)}</h1>`);
      if (vueExports.unref(articles).length > 0) {
        _push(`<div class="space-y-6"><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(articles), (article) => {
          _push(`<div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_router_link, {
            to: `/${article.id}`,
            class: "text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          }, {
            default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(article.frontmatter.title)}`);
              } else {
                return [
                  vueExports.createTextVNode(vueExports.toDisplayString(article.frontmatter.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<p class="text-gray-600 dark:text-gray-400 mt-2">${serverRenderer_cjs_prodExports.ssrInterpolate(article.frontmatter.description)}</p><div class="flex flex-wrap gap-2 mt-3 text-sm"><span class="text-gray-500 dark:text-gray-500">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("published"))}：${serverRenderer_cjs_prodExports.ssrInterpolate(article.frontmatter.date)}</span><span class="text-gray-500 dark:text-gray-500">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("tagsLabel"))}${serverRenderer_cjs_prodExports.ssrInterpolate(article.frontmatter.tags.join(", "))}</span></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-10 text-gray-500 dark:text-gray-400">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("categories.empty"))}</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories/[category].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_category_-DazKvKo1.mjs.map

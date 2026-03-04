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
    const { t } = useI18n();
    const archives = vueExports.ref([]);
    vueExports.ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vueExports.resolveComponent("router-link");
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "container mx-auto px-4 py-8 max-w-5xl" }, _attrs))}><h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-8">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("archives"))}</h1>`);
      if (vueExports.unref(archives).length > 0) {
        _push(`<div class="space-y-8"><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(archives), (item) => {
          _push(`<div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700"><h2 class="text-xl font-semibold text-gray-800 dark:text-white">`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_router_link, {
            to: `/archives/${item.year}/${item.month}`,
            class: "hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          }, {
            default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(item.year)}年${serverRenderer_cjs_prodExports.ssrInterpolate(item.monthName)}`);
              } else {
                return [
                  vueExports.createTextVNode(vueExports.toDisplayString(item.year) + "年" + vueExports.toDisplayString(item.monthName), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<span class="ml-2 text-sm text-gray-500 dark:text-gray-400">(${serverRenderer_cjs_prodExports.ssrInterpolate(item.articles.length)}篇)</span></h2><ul class="mt-4 space-y-2"><!--[-->`);
          serverRenderer_cjs_prodExports.ssrRenderList(item.articles, (article) => {
            _push(`<li>`);
            _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_router_link, {
              to: `/${article.id}`,
              class: "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline"
            }, {
              default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(article.title)}`);
                } else {
                  return [
                    vueExports.createTextVNode(vueExports.toDisplayString(article.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`<span class="ml-2 text-sm text-gray-500 dark:text-gray-400">${serverRenderer_cjs_prodExports.ssrInterpolate(article.date)}</span></li>`);
          });
          _push(`<!--]--></ul></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-10 text-gray-500 dark:text-gray-400">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("archives.empty"))}</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/archives/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DlBqht7p.mjs.map

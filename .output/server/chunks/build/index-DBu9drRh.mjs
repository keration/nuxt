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
    const categories = vueExports.ref([]);
    vueExports.ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vueExports.resolveComponent("router-link");
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "container mx-auto px-4 py-8 max-w-5xl" }, _attrs))}><h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-8">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("categories"))}</h1><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(categories), (category) => {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_router_link, {
          key: category.name,
          to: `/categories/${category.name}`,
          class: "p-4 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-blue-500 hover:text-white transition-colors"
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="font-semibold text-lg"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(category.name)}</h3><p class="text-sm text-gray-500 dark:text-gray-400 mt-1"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(category.count)} ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("articlesSuffix"))}</p>`);
            } else {
              return [
                vueExports.createVNode("h3", { class: "font-semibold text-lg" }, vueExports.toDisplayString(category.name), 1),
                vueExports.createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400 mt-1" }, vueExports.toDisplayString(category.count) + " " + vueExports.toDisplayString(vueExports.unref(t)("articlesSuffix")), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DBu9drRh.mjs.map

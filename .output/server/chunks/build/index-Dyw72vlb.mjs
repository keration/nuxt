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
    const { t } = useI18n();
    const tags = vueExports.ref([]);
    vueExports.ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "container mx-auto px-4 py-8 max-w-5xl" }, _attrs))}><h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-8">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("tags"))}</h1>`);
      if (vueExports.unref(tags).length > 0) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(tags), (tag) => {
          _push(`<div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
            to: `/tags/${tag.name}`,
            class: "text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          }, {
            default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(tag.name)}`);
              } else {
                return [
                  vueExports.createTextVNode(vueExports.toDisplayString(tag.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<p class="text-gray-600 dark:text-gray-400 mt-2">${serverRenderer_cjs_prodExports.ssrInterpolate(tag.count)} ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("articlesSuffix"))}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-10 text-gray-500 dark:text-gray-400">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("tags.empty"))}</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tags/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Dyw72vlb.mjs.map

import { e as eventHandler, g as getAllArticlesMeta } from '../../_/nitro.mjs';
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

const categories = eventHandler(async (event) => {
  var _a, _b;
  const ctxLang = (_b = (_a = event.context) == null ? void 0 : _a.i18n) == null ? void 0 : _b.locale;
  const articles = await getAllArticlesMeta(ctxLang);
  const categoryMap = {};
  articles.forEach((article) => {
    categoryMap[article.frontmatter.category] = (categoryMap[article.frontmatter.category] || 0) + 1;
  });
  const categories = Object.entries(categoryMap).map(([name, count]) => ({
    name,
    count
  })).sort((a, b) => b.count - a.count);
  return {
    code: 200,
    data: categories
  };
});

export { categories as default };
//# sourceMappingURL=categories.mjs.map

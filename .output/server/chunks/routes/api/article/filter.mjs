import { e as eventHandler, c as getQuery, g as getAllArticlesMeta } from '../../../_/nitro.mjs';
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

const filter = eventHandler(async (event) => {
  var _a, _b;
  const query = getQuery(event);
  const tag = query.tag;
  const category = query.category;
  const year = query.year;
  const month = query.month;
  const ctxLang = (_b = (_a = event.context) == null ? void 0 : _a.i18n) == null ? void 0 : _b.locale;
  let articles = await getAllArticlesMeta(ctxLang);
  if (tag) {
    articles = articles.filter((article) => article.frontmatter.tags.includes(tag));
  }
  if (category) {
    articles = articles.filter((article) => article.frontmatter.category === category);
  }
  if (year && month) {
    articles = articles.filter((article) => {
      const dateStr = article.frontmatter.date;
      if (dateStr === "\u672A\u53D1\u5E03") return false;
      const date = new Date(dateStr);
      return date.getFullYear().toString() === year && (date.getMonth() + 1).toString().padStart(2, "0") === month;
    });
  }
  return {
    code: 200,
    data: articles
  };
});

export { filter as default };
//# sourceMappingURL=filter.mjs.map

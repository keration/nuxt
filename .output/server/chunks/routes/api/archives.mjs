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

const archives = eventHandler(async (event) => {
  var _a, _b;
  const ctxLang = (_b = (_a = event.context) == null ? void 0 : _a.i18n) == null ? void 0 : _b.locale;
  const articles = await getAllArticlesMeta(ctxLang);
  const archiveMap = {};
  articles.forEach((article) => {
    const dateStr = article.frontmatter.date;
    if (dateStr === "\u672A\u53D1\u5E03") return;
    const date = new Date(dateStr);
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const monthName = `${date.getMonth() + 1}\u6708`;
    const key = `${year}-${month}`;
    if (!archiveMap[key]) {
      archiveMap[key] = { year, month, monthName, articles: [] };
    }
    archiveMap[key].articles.push(article);
  });
  const archives = Object.values(archiveMap).sort((a, b) => {
    return `${b.year}${b.month}`.localeCompare(`${a.year}${a.month}`);
  });
  return {
    code: 200,
    data: archives
  };
});

export { archives as default };
//# sourceMappingURL=archives.mjs.map

import { e as eventHandler, g as getAllArticlesMeta } from '../../_/nitro.mjs';
import 'fs/promises';
import 'path';
import 'marked';
import 'highlight.js';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'rou3';
import 'srvx';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:path';

const archives = eventHandler(async () => {
  const articles = await getAllArticlesMeta();
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

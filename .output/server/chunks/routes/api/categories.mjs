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

const categories = eventHandler(async () => {
  const articles = await getAllArticlesMeta();
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

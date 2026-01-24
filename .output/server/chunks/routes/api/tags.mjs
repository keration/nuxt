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

const tags = eventHandler(async () => {
  const articles = await getAllArticlesMeta();
  const tagMap = {};
  articles.forEach((article) => {
    article.frontmatter.tags.forEach((tag) => {
      tagMap[tag] = (tagMap[tag] || 0) + 1;
    });
  });
  const tags = Object.entries(tagMap).map(([name, count]) => ({
    name,
    count
  })).sort((a, b) => b.count - a.count);
  return {
    code: 200,
    data: tags
  };
});

export { tags as default };
//# sourceMappingURL=tags.mjs.map

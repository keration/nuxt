import { e as eventHandler, c as getQuery, g as getAllArticlesMeta } from '../../../_/nitro.mjs';
import 'fs/promises';
import 'path';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:path';
import 'ipx';

const filter = eventHandler(async (event) => {
  const query = getQuery(event);
  const tag = query.tag;
  const category = query.category;
  const year = query.year;
  const month = query.month;
  let articles = await getAllArticlesMeta();
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

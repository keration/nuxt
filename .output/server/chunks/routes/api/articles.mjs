import { e as eventHandler, c as getQuery, g as getAllArticlesMeta } from '../../_/nitro.mjs';
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

const articles = eventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const allArticles = await getAllArticlesMeta();
    const total = allArticles.length;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const articles = allArticles.slice(startIndex, endIndex);
    return {
      code: 200,
      data: articles,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasNext: endIndex < total,
        hasPrev: page > 1
      },
      message: "\u83B7\u53D6\u6587\u7AE0\u5217\u8868\u6210\u529F"
    };
  } catch (err) {
    console.error("\u83B7\u53D6\u6587\u7AE0\u5217\u8868\u5931\u8D25\uFF1A", err);
    return {
      code: 500,
      message: `\u83B7\u53D6\u5217\u8868\u5931\u8D25\uFF1A${err.message}`
    };
  }
});

export { articles as default };
//# sourceMappingURL=articles.mjs.map

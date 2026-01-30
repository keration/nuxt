import { f as defineEventHandler, c as getQuery, g as getAllArticlesMeta } from '../../_/nitro.mjs';
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

const search = defineEventHandler(async (event) => {
  var _a;
  const query = getQuery(event);
  const searchTerm = (_a = query.q) == null ? void 0 : _a.trim();
  if (!searchTerm) {
    return {
      code: 400,
      message: "\u641C\u7D22\u5173\u952E\u8BCD\u4E0D\u80FD\u4E3A\u7A7A",
      data: []
    };
  }
  try {
    const allArticles = await getAllArticlesMeta();
    const searchResults = allArticles.filter((article) => {
      var _a2, _b, _c, _d, _e, _f, _g;
      const title = ((_b = (_a2 = article.frontmatter) == null ? void 0 : _a2.title) == null ? void 0 : _b.toLowerCase()) || "";
      const description = ((_d = (_c = article.frontmatter) == null ? void 0 : _c.description) == null ? void 0 : _d.toLowerCase()) || "";
      const tags = ((_f = (_e = article.frontmatter) == null ? void 0 : _e.tags) == null ? void 0 : _f.join(" ").toLowerCase()) || "";
      const content = ((_g = article.body) == null ? void 0 : _g.toLowerCase()) || "";
      const searchLower = searchTerm.toLowerCase();
      return title.includes(searchLower) || description.includes(searchLower) || tags.includes(searchLower) || content.includes(searchLower);
    });
    return {
      code: 200,
      message: "\u641C\u7D22\u6210\u529F",
      data: searchResults
    };
  } catch (error) {
    console.error("\u641C\u7D22\u9519\u8BEF:", error);
    return {
      code: 500,
      message: "\u641C\u7D22\u5931\u8D25",
      data: []
    };
  }
});

export { search as default };
//# sourceMappingURL=search.mjs.map

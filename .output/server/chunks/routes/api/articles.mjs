import { e as eventHandler, c as getQuery, g as getAllArticlesMeta } from '../../_/nitro.mjs';
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

const articles = eventHandler(async (event) => {
  var _a, _b;
  try {
    const query = getQuery(event);
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const ctxLang = (_b = (_a = event.context) == null ? void 0 : _a.i18n) == null ? void 0 : _b.locale;
    const allArticles = await getAllArticlesMeta(ctxLang);
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

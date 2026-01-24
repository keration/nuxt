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

const articles = eventHandler(async () => {
  try {
    const articles = await getAllArticlesMeta();
    return {
      code: 200,
      data: articles,
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

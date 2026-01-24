import { e as eventHandler } from '../../../_/nitro.mjs';
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

const _id_ = eventHandler(async (event) => {
  var _a;
  const params = Object.assign({}, event.context.params);
  const id = ((_a = params.id) == null ? void 0 : _a.trim()) || "";
  if (!id) {
    return { code: 400, message: "\u7F3A\u5C11\u6587\u7AE0ID" };
  }
  try {
    const fs = await import('fs/promises');
    const path = await import('path');
    const rootDir = process.cwd();
    const contentDir = path.resolve(rootDir, "content", "articles");
    const filePath = path.resolve(contentDir, `${id}.md`);
    console.log("Nuxt4 \u9879\u76EE\u6839\u76EE\u5F55\uFF1A", rootDir);
    console.log("\u76EE\u6807\u6587\u4EF6\u8DEF\u5F84\uFF1A", filePath);
    console.log("content \u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\uFF1A", await fs.readdir(contentDir));
    try {
      await fs.access(filePath);
    } catch {
      return { code: 404, message: `\u6587\u7AE0 ${id}.md \u4E0D\u5B58\u5728` };
    }
    const mdContent = await fs.readFile(filePath, "utf-8");
    return {
      code: 200,
      data: { content: mdContent, id },
      message: "\u83B7\u53D6\u6587\u7AE0\u6210\u529F"
    };
  } catch (err) {
    console.error("\u670D\u52A1\u7AEF\u6267\u884C\u9519\u8BEF\uFF1A", err);
    return { code: 500, message: `\u670D\u52A1\u7AEF\u9519\u8BEF\uFF1A${err.message}` };
  }
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map

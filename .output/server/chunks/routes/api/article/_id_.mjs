import { e as eventHandler } from '../../../_/nitro.mjs';
import 'fs/promises';
import 'path';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue';
import 'consola';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
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
import 'fast-xml-parser';
import 'ipx';

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

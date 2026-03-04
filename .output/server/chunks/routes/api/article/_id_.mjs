import { e as eventHandler, c as getQuery } from '../../../_/nitro.mjs';
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

const _id_ = eventHandler(async (event) => {
  var _a, _b, _c;
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
    const q = getQuery(event);
    const ctxLang = (_c = (_b = event.context) == null ? void 0 : _b.i18n) == null ? void 0 : _c.locale;
    const requestedLang = ctxLang || q.lang || "";
    const candidates = [];
    if (requestedLang) {
      candidates.push(path.resolve(contentDir, `${id}.${requestedLang}.md`));
      const short = requestedLang.split("-")[0];
      if (short && short !== requestedLang) {
        candidates.push(path.resolve(contentDir, `${id}.${short}.md`));
      }
    }
    candidates.push(filePath);
    let foundPath = null;
    for (const p of candidates) {
      try {
        await fs.access(p);
        foundPath = p;
        break;
      } catch (e) {
      }
    }
    if (!foundPath) {
      return { code: 404, message: `\u6587\u7AE0 ${id}.md \u4E0D\u5B58\u5728` };
    }
    const mdContent = await fs.readFile(foundPath, "utf-8");
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

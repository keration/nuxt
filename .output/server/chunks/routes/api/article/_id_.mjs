import { e as eventHandler } from '../../../_/nitro.mjs';
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
  const params = event.context.params || {};
  const id = params == null ? void 0 : params.id;
  if (!id) {
    return { code: 400, message: "\u7F3A\u5C11\u6587\u7AE0ID" };
  }
  try {
    const fs = await import('node:fs/promises');
    const path = await import('node:path');
    const filePath = path.join(process.cwd(), "public/content", `${id}.md`);
    const mdContent = await fs.readFile(filePath, "utf-8");
    return {
      code: 200,
      data: { content: mdContent },
      message: "\u83B7\u53D6\u6587\u7AE0\u6210\u529F"
    };
  } catch (err) {
    console.error("\u670D\u52A1\u7AEF\u8BFB\u53D6\u6587\u4EF6\u9519\u8BEF:", err);
    return { code: 404, message: `\u6587\u7AE0 ${id}.md \u4E0D\u5B58\u5728` };
  }
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map

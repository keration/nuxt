import { defineEventHandler, getQuery, getHeader, getCookie, setCookie, sendRedirect } from "h3";

// 简单的语言检测中间件：支持 query -> cookie -> Accept-Language -> 默认值
export default defineEventHandler(async (event) => {
  try {
    const supported = ["zh-CN", "en"];
    const defaultLocale = "zh-CN";

    const q = getQuery(event) as Record<string, any>;
    const queryLang = (q.lang as string) || "";

    const cookieLang = getCookie(event, "i18n_redirected") as string | undefined;
    const accept = getHeader(event, "accept-language") as string | undefined;

    const mapShort = (code: string) => {
      if (!code) return "";
      const lower = code.toLowerCase();
      if (lower.startsWith("zh")) return "zh-CN";
      if (lower.startsWith("en")) return "en";
      return "";
    };

    let lang = "";
    if (queryLang && supported.includes(queryLang)) {
      lang = queryLang;
    } else if (cookieLang && supported.includes(cookieLang)) {
      lang = cookieLang;
    } else if (accept) {
      // 解析 Accept-Language，取第一个语言
      const first = accept.split(",")[0]?.split(";")[0]?.trim() || "";
      const mapped = mapShort(first);
      if (mapped && supported.includes(mapped)) lang = mapped;
    }

    if (!lang) lang = defaultLocale;

    // 同步 cookie（供客户端 i18n 使用）
    if (cookieLang !== lang) {
      setCookie(event, "i18n_redirected", lang, {
        httpOnly: false,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });
    }

    // 根路径重定向逻辑（避免对 /api, /_nuxt, /favicon 等静态与 API 路径重定向）
    const reqUrl = (event.node?.req?.url as string) || "/";
    const isAsset =
      reqUrl.startsWith("/_nuxt") ||
      reqUrl.startsWith("/api") ||
      reqUrl.startsWith("/favicon") ||
      reqUrl.includes(".") ||
      reqUrl.startsWith("/public");
    if (!isAsset) {
      // 如果是根路径并且语言不是默认语言，则跳转到带前缀的语言路径
      const pathOnly = String(reqUrl).split("?")[0] || "/";
      const hasPrefix = supported.some(
        (s) => pathOnly === `/${s}` || pathOnly.startsWith(`/${s}/`) || pathOnly.startsWith(`/${s}?`),
      );
      if ((pathOnly === "/" || pathOnly === "") && lang !== defaultLocale && !hasPrefix) {
        // 重定向到 /en 或 /en/ （不为默认语言添加前缀）
        const target = `/${lang}${reqUrl === "/" ? "/" : ""}`;
        return sendRedirect(event, target, 302);
      }
    }

    // 将语言放到上下文，方便后续 server handlers 使用
    // @ts-ignore
    event.context.i18n = { locale: lang };
  } catch (err) {
    // 中间件不能阻塞请求，出现错误时忽略
    console.error("i18n middleware error:", err);
  }
});

import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { Server } from 'node:http';
import path, { resolve as resolve$1, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, getRequestURL, getResponseHeader, getResponseStatus, createError, getRequestProtocol, getRequestHost, getCookie, setCookie, sanitizeStatusCode, removeResponseHeader, getQuery as getQuery$1, getHeader, readBody, setHeader, getRouterParam, lazyEventHandler, useBase, createApp, createRouter as createRouter$1, toNodeListener, getResponseStatusText } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/h3@1.15.5/node_modules/h3/dist/index.mjs';
import { escapeHtml } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/@vue+shared@3.5.28/node_modules/@vue/shared/dist/shared.cjs.js';
import fs, { readFile } from 'node:fs/promises';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/vue-bundle-renderer@2.2.0/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, hasProtocol, withHttps, joinRelativeURL, withLeadingSlash, withoutTrailingSlash, withBase, withTrailingSlash, parsePath, decodePath, stringifyQuery, parseQuery, encodePath, stringifyParsedURL, withoutLeadingSlash } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/ufo@1.6.3/node_modules/ufo/dist/index.mjs';
import destr, { destr as destr$1 } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import { stringify, uneval } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/devalue@5.6.2/node_modules/devalue/index.js';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/unhead@2.1.4/node_modules/unhead/dist/server.mjs';
import defu, { defuFn, defu as defu$1, createDefu } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import consola, { createConsola, consola as consola$1 } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/consola@3.4.2/node_modules/consola/dist/index.mjs';
import { klona } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import { snakeCase } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import { XMLParser } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/fast-xml-parser@5.3.5/node_modules/fast-xml-parser/src/fxp.js';
import { toValue, isVNode, isRef } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/vue@3.5.28_typescript@5.9.3/node_modules/vue/index.mjs';
import { createHooks } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/node-mock-http@1.0.4/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/unstorage@1.17.4_db0@0.3.4__0ba8e1e42d7904aded0dac519710669d/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/unstorage@1.17.4_db0@0.3.4__0ba8e1e42d7904aded0dac519710669d/node_modules/unstorage/drivers/fs.mjs';
import { digest } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
import { ErrorParser } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/youch-core@0.3.3/node_modules/youch-core/build/index.js';
import { Youch } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/youch@4.1.0-beta.13/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/source-map@0.7.6/node_modules/source-map/source-map.js';
import devalue from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/@nuxt+devalue@2.0.2/node_modules/@nuxt/devalue/dist/devalue.mjs';
import { createRouterMatcher } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/vue-router@4.6.4_vue@3.5.28_typescript@5.9.3_/node_modules/vue-router/vue-router.node.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { getContext } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/unctx@2.5.0/node_modules/unctx/dist/index.mjs';
import { captureRawStackTrace, parseRawStackTrace } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/errx@0.1.0/node_modules/errx/dist/index.js';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$2, isAbsolute } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/pathe@2.0.3/node_modules/pathe/dist/index.mjs';
import { renderToString } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/vue@3.5.28_typescript@5.9.3/node_modules/vue/server-renderer/index.mjs';
import { walkResolver } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/unhead@2.1.4/node_modules/unhead/dist/utils.mjs';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/ipx@3.1.1_db0@0.3.4_better-sqlite3@12.6.2__ioredis@5.9.2/node_modules/ipx/dist/index.mjs';

const serverAssets = [{"baseName":"server","dir":"C:/Users/admin/Desktop/nuxt/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage$1 = createStorage({});

storage$1.mount('/assets', assets$1);

storage$1.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/Users/admin/Desktop/nuxt","watchOptions":{"ignored":[null]}}));
storage$1.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/Users/admin/Desktop/nuxt/server","watchOptions":{"ignored":[null]}}));
storage$1.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:/Users/admin/Desktop/nuxt/.nuxt"}));
storage$1.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:/Users/admin/Desktop/nuxt/.nuxt/cache"}));
storage$1.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"C:/Users/admin/Desktop/nuxt/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage$1, base) : storage$1;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/__sitemap__/style.xsl": {
        "headers": {
          "Content-Type": "application/xslt+xml"
        }
      },
      "/sitemap.xml": {
        "redirect": {
          "to": "/sitemap_index.xml",
          "statusCode": 307
        }
      },
      "/sitemap_index.xml": {},
      "/__sitemap__/zh-CN.xml": {},
      "/__sitemap__/en-US.xml": {},
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "i18n": {
      "baseUrl": "",
      "defaultLocale": "zh-CN",
      "rootRedirect": "",
      "redirectStatusCode": 302,
      "skipSettingLocaleOnNavigate": false,
      "locales": [
        {
          "code": "zh-CN",
          "iso": "zh-CN",
          "name": "中文",
          "language": "zh-CN"
        },
        {
          "code": "en",
          "iso": "en-US",
          "name": "English",
          "language": "en-US"
        }
      ],
      "detectBrowserLanguage": {
        "alwaysRedirect": false,
        "cookieCrossOrigin": false,
        "cookieDomain": "",
        "cookieKey": "i18n_redirected",
        "cookieSecure": false,
        "fallbackLocale": "",
        "redirectOn": "root",
        "useCookie": true
      },
      "experimental": {
        "localeDetector": "",
        "typedPages": true,
        "typedOptionsAndMessages": false,
        "alternateLinkCanonicalQueries": true,
        "devCache": false,
        "cacheLifetime": "",
        "stripMessagesPayload": false,
        "preload": false,
        "strictSeo": false,
        "nitroContextDetection": true,
        "httpCacheDuration": 10
      },
      "domainLocales": {
        "zh-CN": {
          "domain": ""
        },
        "en": {
          "domain": ""
        }
      }
    }
  },
  "sitemap": {
    "isI18nMapped": true,
    "sitemapName": "sitemap.xml",
    "isMultiSitemap": true,
    "excludeAppSources": [],
    "cacheMaxAgeSeconds": 0,
    "autoLastmod": false,
    "defaultSitemapsChunkSize": 1000,
    "minify": false,
    "sortEntries": true,
    "debug": false,
    "discoverImages": true,
    "discoverVideos": true,
    "sitemapsPathPrefix": "/__sitemap__/",
    "isNuxtContentDocumentDriven": false,
    "xsl": "/__sitemap__/style.xsl",
    "xslTips": true,
    "xslColumns": [
      {
        "label": "URL",
        "width": "50%"
      },
      {
        "label": "Images",
        "width": "25%",
        "select": "count(image:image)"
      },
      {
        "label": "Last Updated",
        "width": "25%",
        "select": "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"
      }
    ],
    "credits": true,
    "version": "7.6.0",
    "sitemaps": {
      "index": {
        "sitemapName": "index",
        "_route": "sitemap_index.xml",
        "sitemaps": [],
        "include": [],
        "exclude": []
      },
      "zh-CN": {
        "include": [],
        "exclude": [
          "/_**",
          "/_nuxt/**",
          "/_nuxt/**"
        ],
        "includeAppSources": true,
        "sitemapName": "zh-CN",
        "_route": "/__sitemap__/zh-CN.xml"
      },
      "en-US": {
        "include": [],
        "exclude": [
          "/_**",
          "/_nuxt/**",
          "/_nuxt/**"
        ],
        "includeAppSources": true,
        "sitemapName": "en-US",
        "_route": "/__sitemap__/en-US.xml"
      }
    },
    "autoI18n": {
      "differentDomains": false,
      "defaultLocale": "zh-CN",
      "locales": [
        {
          "code": "zh-CN",
          "iso": "zh-CN",
          "name": "中文",
          "file": "zh-CN.json",
          "language": "zh-CN",
          "_hreflang": "zh-CN",
          "_sitemap": "zh-CN"
        },
        {
          "code": "en",
          "iso": "en-US",
          "name": "English",
          "file": "en.json",
          "language": "en-US",
          "_hreflang": "en-US",
          "_sitemap": "en-US"
        }
      ],
      "strategy": "prefix_except_default",
      "pages": {}
    }
  },
  "nuxt-site-config": {
    "stack": [
      {
        "_context": "system",
        "_priority": -15,
        "name": "nuxt",
        "env": "development"
      },
      {
        "_context": "package.json",
        "_priority": -10,
        "name": "nuxt"
      },
      {
        "_context": "@nuxtjs/i18n",
        "defaultLocale": "zh-CN"
      }
    ],
    "version": "3.2.19",
    "debug": false,
    "multiTenancy": []
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": [
        "C:/Users/admin/Desktop/nuxt/public"
      ]
    },
    "http": {
      "domains": []
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

/**
* Nitro internal functions extracted from https://github.com/nitrojs/nitro/blob/v2/src/runtime/internal/utils.ts
*/
function isJsonRequest(event) {
	// If the client specifically requests HTML, then avoid classifying as JSON.
	if (hasReqHeader(event, "accept", "text/html")) {
		return false;
	}
	return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
	const value = getRequestHeader(event, name);
	return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const iframeStorageBridge = (nonce) => `
(function () {
  const NONCE = ${JSON.stringify(nonce)};
  const memoryStore = Object.create(null);

  const post = (type, payload) => {
    window.parent.postMessage({ type, nonce: NONCE, ...payload }, '*');
  };

  const isValid = (data) => data && data.nonce === NONCE;

  const mockStorage = {
    getItem(key) {
      return Object.hasOwn(memoryStore, key)
        ? memoryStore[key]
        : null;
    },
    setItem(key, value) {
      const v = String(value);
      memoryStore[key] = v;
      post('storage-set', { key, value: v });
    },
    removeItem(key) {
      delete memoryStore[key];
      post('storage-remove', { key });
    },
    clear() {
      for (const key of Object.keys(memoryStore))
        delete memoryStore[key];
      post('storage-clear', {});
    },
    key(index) {
      const keys = Object.keys(memoryStore);
      return keys[index] ?? null;
    },
    get length() {
      return Object.keys(memoryStore).length;
    }
  };

  const defineLocalStorage = () => {
    try {
      Object.defineProperty(window, 'localStorage', {
        value: mockStorage,
        writable: false,
        configurable: true
      });
    } catch {
      window.localStorage = mockStorage;
    }
  };

  defineLocalStorage();

  window.addEventListener('message', (event) => {
    const data = event.data;
    if (!isValid(data) || data.type !== 'storage-sync-data') return;

    const incoming = data.data || {};
    for (const key of Object.keys(incoming))
      memoryStore[key] = incoming[key];

    if (typeof window.initTheme === 'function')
      window.initTheme();
    window.dispatchEvent(new Event('storage-ready'));
  });

  // Clipboard API is unavailable in data: URL iframe, so we use postMessage
  document.addEventListener('DOMContentLoaded', function() {
    window.copyErrorMessage = function(button) {
      post('clipboard-copy', { text: button.dataset.errorText });
      button.classList.add('copied');
      setTimeout(function() { button.classList.remove('copied'); }, 2000);
    };
  });

  post('storage-sync-request', {});
})();
`;
const parentStorageBridge = (nonce) => `
(function () {
  const host = document.querySelector('nuxt-error-overlay');
  if (!host) return;

  const NONCE = ${JSON.stringify(nonce)};
  const isValid = (data) => data && data.nonce === NONCE;

  // Handle clipboard copy from iframe
  window.addEventListener('message', function(e) {
    if (isValid(e) && e.data.type === 'clipboard-copy') {
      navigator.clipboard.writeText(e.data.text).catch(function() {});
    }
  });

  const collectLocalStorage = () => {
    const all = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k != null) all[k] = localStorage.getItem(k);
    }
    return all;
  };

  const attachWhenReady = () => {
    const root = host.shadowRoot;
    if (!root)
      return false;
    const iframe = root.getElementById('frame');
    if (!iframe || !iframe.contentWindow)
      return false;

    const handlers = {
      'storage-set': (d) => localStorage.setItem(d.key, d.value),
      'storage-remove': (d) => localStorage.removeItem(d.key),
      'storage-clear': () => localStorage.clear(),
      'storage-sync-request': () => {
        iframe.contentWindow.postMessage({
          type: 'storage-sync-data',
          data: collectLocalStorage(),
          nonce: NONCE
        }, '*');
      }
    };

    window.addEventListener('message', (event) => {
      const data = event.data;
      if (!isValid(data)) return;
      const fn = handlers[data.type];
      if (fn) fn(data);
    });

    return true;
  };

  if (attachWhenReady())
    return;

  const obs = new MutationObserver(() => {
    if (attachWhenReady())
      obs.disconnect();
  });

  obs.observe(host, { childList: true, subtree: true });
})();
`;
const errorCSS = `
:host {
  --preview-width: 240px;
  --preview-height: 180px;
  --base-width: 1200px;
  --base-height: 900px;
  --z-base: 999999998;
  --error-pip-left: auto;
  --error-pip-top: auto;
  --error-pip-right: 5px;
  --error-pip-bottom: 5px;
  --error-pip-origin: bottom right;
  --app-preview-left: auto;
  --app-preview-top: auto;
  --app-preview-right: 5px;
  --app-preview-bottom: 5px;
  all: initial;
  display: contents;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
#frame {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  z-index: var(--z-base);
}
#frame[inert] {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: var(--error-pip-right);
  bottom: var(--error-pip-bottom);
  width: var(--base-width);
  height: var(--base-height);
  transform: scale(calc(240 / 1200));
  transform-origin: var(--error-pip-origin);
  overflow: hidden;
  border-radius: calc(1200 * 8px / 240);
}
#preview {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: var(--app-preview-right);
  bottom: var(--app-preview-bottom);
  width: var(--preview-width);
  height: var(--preview-height);
  overflow: hidden;
  border-radius: 6px;
  pointer-events: none;
  z-index: var(--z-base);
  background: white;
  display: none;
}
#preview iframe {
  transform-origin: var(--error-pip-origin);
}
#frame:not([inert]) + #preview {
  display: block;
}
#toggle {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: calc(var(--app-preview-right) - 3px);
  bottom: calc(var(--app-preview-bottom) - 3px);
  width: var(--preview-width);
  height: var(--preview-height);
  background: none;
  border: 3px solid #00DC82;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s, box-shadow 0.2s;
  z-index: calc(var(--z-base) + 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
#toggle:hover,
#toggle:focus {
  opacity: 1;
  box-shadow: 0 0 20px rgba(0, 220, 130, 0.6);
}
#toggle:focus-visible {
  outline: 3px solid #00DC82;
  outline-offset: 0;
  box-shadow: 0 0 24px rgba(0, 220, 130, 0.8);
}
#frame[inert] ~ #toggle {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: calc(var(--error-pip-right) - 3px);
  bottom: calc(var(--error-pip-bottom) - 3px);
  cursor: grab;
}
:host(.dragging) #frame[inert] ~ #toggle {
  cursor: grabbing;
}
#frame:not([inert]) ~ #toggle,
#frame:not([inert]) + #preview {
  cursor: grab;
}
:host(.dragging-preview) #frame:not([inert]) ~ #toggle,
:host(.dragging-preview) #frame:not([inert]) + #preview {
  cursor: grabbing;
}

#pip-close {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 16px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  pointer-events: auto;
}
#pip-close:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}

#pip-restore {
  position: fixed;
  right: 16px;
  bottom: 16px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 2px solid #00DC82;
  background: #111;
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  z-index: calc(var(--z-base) + 2);
  cursor: grab;
}
#pip-restore:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}
:host(.dragging-restore) #pip-restore {
  cursor: grabbing;
}

#frame[hidden],
#toggle[hidden],
#preview[hidden],
#pip-restore[hidden],
#pip-close[hidden] {
  display: none !important;
}

@media (prefers-reduced-motion: reduce) {
  #toggle {
    transition: none;
  }
}
`;
function webComponentScript(base64HTML, startMinimized) {
	return `
(function () {
  try {
    // =========================
    // Host + Shadow
    // =========================
    const host = document.querySelector('nuxt-error-overlay');
    if (!host)
      return;
    const shadow = host.attachShadow({ mode: 'open' });

    // =========================
    // DOM helpers
    // =========================
    const el = (tag) => document.createElement(tag);
    const on = (node, type, fn, opts) => node.addEventListener(type, fn, opts);
    const hide = (node, v) => node.toggleAttribute('hidden', !!v);
    const setVar = (name, value) => host.style.setProperty(name, value);
    const unsetVar = (name) => host.style.removeProperty(name);

    // =========================
    // Create DOM
    // =========================
    const style = el('style');
    style.textContent = ${JSON.stringify(errorCSS)};

    const iframe = el('iframe');
    iframe.id = 'frame';
    iframe.src = 'data:text/html;base64,${base64HTML}';
    iframe.title = 'Detailed error stack trace';
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');

    const preview = el('div');
    preview.id = 'preview';

    const toggle = el('div');
    toggle.id = 'toggle';
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('tabindex', '0');
    toggle.innerHTML = '<span class="sr-only">Toggle detailed error view</span>';

    const liveRegion = el('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.className = 'sr-only';

    const pipCloseButton = el('button');
    pipCloseButton.id = 'pip-close';
    pipCloseButton.setAttribute('type', 'button');
    pipCloseButton.setAttribute('aria-label', 'Hide error preview overlay');
    pipCloseButton.innerHTML = '&times;';
    pipCloseButton.hidden = true;
    toggle.appendChild(pipCloseButton);

    const pipRestoreButton = el('button');
    pipRestoreButton.id = 'pip-restore';
    pipRestoreButton.setAttribute('type', 'button');
    pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
    pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
    pipRestoreButton.hidden = true;

    // Order matters: #frame + #preview adjacency
    shadow.appendChild(style);
    shadow.appendChild(liveRegion);
    shadow.appendChild(iframe);
    shadow.appendChild(preview);
    shadow.appendChild(toggle);
    shadow.appendChild(pipRestoreButton);

    // =========================
    // Constants / keys
    // =========================
    const POS_KEYS = {
      position: 'nuxt-error-overlay:position',
      hiddenPretty: 'nuxt-error-overlay:error-pip:hidden',
      hiddenPreview: 'nuxt-error-overlay:app-preview:hidden'
    };

    const CSS_VARS = {
      pip: {
        left: '--error-pip-left',
        top: '--error-pip-top',
        right: '--error-pip-right',
        bottom: '--error-pip-bottom'
      },
      preview: {
        left: '--app-preview-left',
        top: '--app-preview-top',
        right: '--app-preview-right',
        bottom: '--app-preview-bottom'
      }
    };

    const MIN_GAP = 5;
    const DRAG_THRESHOLD = 2;

    // =========================
    // Local storage safe access + state
    // =========================
    let storageReady = true;
    let isPrettyHidden = false;
    let isPreviewHidden = false;

    const safeGet = (k) => {
      try {
        return localStorage.getItem(k);
      } catch {
        return null;
      }
    };

    const safeSet = (k, v) => {
      if (!storageReady) 
        return;
      try {
        localStorage.setItem(k, v);
      } catch {}
    };

    // =========================
    // Sizing helpers
    // =========================
    const vvSize = () => {
      const v = window.visualViewport;
      return v ? { w: v.width, h: v.height } : { w: window.innerWidth, h: window.innerHeight };
    };

    const previewSize = () => {
      const styles = getComputedStyle(host);
      const w = parseFloat(styles.getPropertyValue('--preview-width')) || 240;
      const h = parseFloat(styles.getPropertyValue('--preview-height')) || 180;
      return { w, h };
    };

    const sizeForTarget = (target) => {
      if (!target)
        return previewSize();
      const rect = target.getBoundingClientRect();
      if (rect.width && rect.height)
        return { w: rect.width, h: rect.height };
      return previewSize();
    };

    // =========================
    // Dock model + offset/alignment calculations
    // =========================
    const dock = { edge: null, offset: null, align: null, gap: null };

    const maxOffsetFor = (edge, size) => {
      const vv = vvSize();
      if (edge === 'left' || edge === 'right')
        return Math.max(MIN_GAP, vv.h - size.h - MIN_GAP);
      return Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
    };

    const clampOffset = (edge, value, size) => {
      const max = maxOffsetFor(edge, size);
      return Math.min(Math.max(value, MIN_GAP), max);
    };

    const updateDockAlignment = (size) => {
      if (!dock.edge || dock.offset == null)
        return;
      const max = maxOffsetFor(dock.edge, size);
      if (dock.offset <= max / 2) {
        dock.align = 'start';
        dock.gap = dock.offset;
      } else {
        dock.align = 'end';
        dock.gap = Math.max(0, max - dock.offset);
      }
    };

    const appliedOffsetFor = (size) => {
      if (!dock.edge || dock.offset == null)
        return null;
      const max = maxOffsetFor(dock.edge, size);

      if (dock.align === 'end' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, max - dock.gap, size);
      }
      if (dock.align === 'start' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, dock.gap, size);
      }
      return clampOffset(dock.edge, dock.offset, size);
    };

    const nearestEdgeAt = (x, y) => {
      const { w, h } = vvSize();
      const d = { left: x, right: w - x, top: y, bottom: h - y };
      return Object.keys(d).reduce((a, b) => (d[a] < d[b] ? a : b));
    };

    const cornerDefaultDock = () => {
      const vv = vvSize();
      const size = previewSize();
      const offset = Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
      return { edge: 'bottom', offset };
    };

    const currentTransformOrigin = () => {
      if (!dock.edge) return null;
      if (dock.edge === 'left' || dock.edge === 'top')
        return 'top left';
      if (dock.edge === 'right')
        return 'top right';
      return 'bottom left';
    };

    // =========================
    // Persist / load dock
    // =========================
    const loadDock = () => {
      const raw = safeGet(POS_KEYS.position);
      if (!raw)
        return;
      try {
        const parsed = JSON.parse(raw);
        const { edge, offset, align, gap } = parsed || {};
        if (!['left', 'right', 'top', 'bottom'].includes(edge))
          return;
        if (typeof offset !== 'number')
          return;

        dock.edge = edge;
        dock.offset = clampOffset(edge, offset, previewSize());
        dock.align = align === 'start' || align === 'end' ? align : null;
        dock.gap = typeof gap === 'number' ? gap : null;

        if (!dock.align || dock.gap == null)
          updateDockAlignment(previewSize());
      } catch {}
    };

    const persistDock = () => {
      if (!dock.edge || dock.offset == null)
        return; 
      safeSet(POS_KEYS.position, JSON.stringify({
        edge: dock.edge,
        offset: dock.offset,
        align: dock.align,
        gap: dock.gap
      }));
    };

    // =========================
    // Apply dock
    // =========================
    const dockToVars = (vars) => ({
      set: (side, v) => host.style.setProperty(vars[side], v),
      clear: (side) => host.style.removeProperty(vars[side])
    });

    const dockToEl = (node) => ({
      set: (side, v) => { node.style[side] = v; },
      clear: (side) => { node.style[side] = ''; }
    });

    const applyDock = (target, size, opts) => {
      if (!dock.edge || dock.offset == null) {
        target.clear('left');
        target.clear('top');
        target.clear('right');
        target.clear('bottom');
        return;
      }

      target.set('left', 'auto');
      target.set('top', 'auto');
      target.set('right', 'auto');
      target.set('bottom', 'auto');

      const applied = appliedOffsetFor(size);

      if (dock.edge === 'left') {
        target.set('left', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'right') {
        target.set('right', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'top') {
        target.set('top', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      } else {
        target.set('bottom', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      }

      if (!opts || opts.persist !== false)
        persistDock();
    };

    const applyDockAll = (opts) => {
      applyDock(dockToVars(CSS_VARS.pip), previewSize(), opts);
      applyDock(dockToVars(CSS_VARS.preview), previewSize(), opts);
      applyDock(dockToEl(pipRestoreButton), sizeForTarget(pipRestoreButton), opts);
    };

    const repaintToDock = () => {
      if (!dock.edge || dock.offset == null)
        return;
      const origin = currentTransformOrigin();
      if (origin)
        setVar('--error-pip-origin', origin);
      else 
        unsetVar('--error-pip-origin');
      applyDockAll({ persist: false });
    };

    // =========================
    // Hidden state + UI
    // =========================
    const loadHidden = () => {
      const rawPretty = safeGet(POS_KEYS.hiddenPretty);
      if (rawPretty != null)
        isPrettyHidden = rawPretty === '1' || rawPretty === 'true';
      const rawPreview = safeGet(POS_KEYS.hiddenPreview);
      if (rawPreview != null)
        isPreviewHidden = rawPreview === '1' || rawPreview === 'true';
    };

    const setPrettyHidden = (v) => {
      isPrettyHidden = !!v;
      safeSet(POS_KEYS.hiddenPretty, isPrettyHidden ? '1' : '0');
      updateUI();
    };

    const setPreviewHidden = (v) => {
      isPreviewHidden = !!v;
      safeSet(POS_KEYS.hiddenPreview, isPreviewHidden ? '1' : '0');
      updateUI();
    };

    const isMinimized = () => iframe.hasAttribute('inert');

    const setMinimized = (v) => {
      if (v) {
        iframe.setAttribute('inert', '');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        iframe.removeAttribute('inert');
        toggle.setAttribute('aria-expanded', 'true');
      }
    };

    const setRestoreLabel = (kind) => {
      if (kind === 'pretty') {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
      } else {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error page</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error page');
      }
    };

    const updateUI = () => {
      const minimized = isMinimized();
      const showPiP = minimized && !isPrettyHidden;
      const showPreview = !minimized && !isPreviewHidden;
      const pipHiddenByUser = minimized && isPrettyHidden;
      const previewHiddenByUser = !minimized && isPreviewHidden;
      const showToggle = minimized ? showPiP : showPreview;
      const showRestore = pipHiddenByUser || previewHiddenByUser;

      hide(iframe, pipHiddenByUser);
      hide(preview, !showPreview);
      hide(toggle, !showToggle);
      hide(pipCloseButton, !showToggle);
      hide(pipRestoreButton, !showRestore);

      pipCloseButton.setAttribute('aria-label', minimized ? 'Hide error overlay' : 'Hide error page preview');

      if (pipHiddenByUser)
        setRestoreLabel('pretty');
      else if (previewHiddenByUser)
        setRestoreLabel('preview');

      host.classList.toggle('pip-hidden', isPrettyHidden);
      host.classList.toggle('preview-hidden', isPreviewHidden);
    };

    // =========================
    // Preview snapshot
    // =========================
    const updatePreview = () => {
      try {
        let previewIframe = preview.querySelector('iframe');
        if (!previewIframe) {
          previewIframe = el('iframe');
          previewIframe.style.cssText = 'width: 1200px; height: 900px; transform: scale(0.2); transform-origin: top left; border: none;';
          previewIframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
          preview.appendChild(previewIframe);
        }

        const doctype = document.doctype ? '<!DOCTYPE ' + document.doctype.name + '>' : '';
        const cleanedHTML = document.documentElement.outerHTML
          .replace(/<nuxt-error-overlay[^>]*>.*?<\\/nuxt-error-overlay>/gs, '')
          .replace(/<script[^>]*>.*?<\\/script>/gs, '');

        const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(doctype + cleanedHTML);
        iframeDoc.close();
      } catch (err) {
        console.error('Failed to update preview:', err);
      }
    };

    // =========================
    // View toggling
    // =========================
    const toggleView = () => {
      if (isMinimized()) {
        updatePreview();
        setMinimized(false);
        liveRegion.textContent = 'Showing detailed error view';
        setTimeout(() => { 
          try { 
            iframe.contentWindow.focus();
          } catch {}
        }, 100);
      } else {
        setMinimized(true);
        liveRegion.textContent = 'Showing error page';
        repaintToDock();
        void iframe.offsetWidth;
      }
      updateUI();
    };

    // =========================
    // Dragging (unified, rAF throttled)
    // =========================
    let drag = null;
    let rafId = null;
    let suppressToggleClick = false;
    let suppressRestoreClick = false;

    const beginDrag = (e) => {
      if (drag) 
        return;

      if (!dock.edge || dock.offset == null) {
        const def = cornerDefaultDock();
        dock.edge = def.edge;
        dock.offset = def.offset;
        updateDockAlignment(previewSize());
      }

      const isRestoreTarget = e.currentTarget === pipRestoreButton;

      drag = {
        kind: isRestoreTarget ? 'restore' : (isMinimized() ? 'pip' : 'preview'),
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        lastX: e.clientX,
        lastY: e.clientY,
        moved: false,
        target: e.currentTarget
      };

      drag.target.setPointerCapture(e.pointerId);

      if (drag.kind === 'restore')
        host.classList.add('dragging-restore');
      else 
        host.classList.add(drag.kind === 'pip' ? 'dragging' : 'dragging-preview');

      e.preventDefault();
    };

    const moveDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      drag.lastX = e.clientX;
      drag.lastY = e.clientY;
      
      const dx = drag.lastX - drag.startX;
      const dy = drag.lastY - drag.startY;

      if (!drag.moved && (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)) {
        drag.moved = true;
      }

      if (!drag.moved)
        return;
      if (rafId)
        return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const edge = nearestEdgeAt(drag.lastX, drag.lastY);
        const size = sizeForTarget(drag.target);

        let offset;
        if (edge === 'left' || edge === 'right') {
          const top = drag.lastY - (size.h / 2);
          offset = clampOffset(edge, Math.round(top), size);
        } else {
          const left = drag.lastX - (size.w / 2);
          offset = clampOffset(edge, Math.round(left), size);
        }

        dock.edge = edge;
        dock.offset = offset;
        updateDockAlignment(size);

        const origin = currentTransformOrigin();
        setVar('--error-pip-origin', origin || 'bottom right');

        applyDockAll({ persist: false });
      });
    };

    const endDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      const endedKind = drag.kind;
      drag.target.releasePointerCapture(e.pointerId);

      if (endedKind === 'restore')
        host.classList.remove('dragging-restore');
      else 
        host.classList.remove(endedKind === 'pip' ? 'dragging' : 'dragging-preview');

      const didMove = drag.moved;
      drag = null;

      if (didMove) {
        persistDock();
        if (endedKind === 'restore')
          suppressRestoreClick = true;
        else 
          suppressToggleClick = true;
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const bindDragTarget = (node) => {
      on(node, 'pointerdown', beginDrag);
      on(node, 'pointermove', moveDrag);
      on(node, 'pointerup', endDrag);
      on(node, 'pointercancel', endDrag);
    };

    bindDragTarget(toggle);
    bindDragTarget(pipRestoreButton);

    // =========================
    // Events (toggle / close / restore)
    // =========================
    on(toggle, 'click', (e) => {
      if (suppressToggleClick) {
        e.preventDefault();
        suppressToggleClick = false;
        return;
      }
      toggleView();
    });

    on(toggle, 'keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleView();
      }
    });

    on(pipCloseButton, 'click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized())
        setPrettyHidden(true);
      else
        setPreviewHidden(true);
    });

    on(pipCloseButton, 'pointerdown', (e) => {
      e.stopPropagation();
    });

    on(pipRestoreButton, 'click', (e) => {
      if (suppressRestoreClick) {
        e.preventDefault();
        suppressRestoreClick = false;
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized()) 
        setPrettyHidden(false);
      else 
        setPreviewHidden(false);
    });

    // =========================
    // Lifecycle: load / sync / repaint
    // =========================
    const loadState = () => {
      loadDock();
      loadHidden();

      if (isPrettyHidden && !isMinimized())
        setMinimized(true);

      updateUI();
      repaintToDock();
    };

    loadState();

    on(window, 'storage-ready', () => {
      storageReady = true;
      loadState();
    });

    const onViewportChange = () => repaintToDock();

    on(window, 'resize', onViewportChange);

    if (window.visualViewport) {
      on(window.visualViewport, 'resize', onViewportChange);
      on(window.visualViewport, 'scroll', onViewportChange);
    }

    // initial preview
    setTimeout(updatePreview, 100);

    // initial minimized option
    if (${startMinimized}) {
      setMinimized(true);
      repaintToDock();
      void iframe.offsetWidth;
      updateUI();
    }
  } catch (err) {
    console.error('Failed to initialize Nuxt error overlay:', err);
  }
})();
`;
}
function generateErrorOverlayHTML(html, options) {
	const nonce = Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, "0")).join("");
	const errorPage = html.replace("<head>", `<head><script>${iframeStorageBridge(nonce)}<\/script>`);
	const base64HTML = Buffer.from(errorPage, "utf8").toString("base64");
	return `
    <script>${parentStorageBridge(nonce)}<\/script>
    <nuxt-error-overlay></nuxt-error-overlay>
    <script>${webComponentScript(base64HTML, options?.startMinimized ?? false)}<\/script>
  `;
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
	if (event.handled || isJsonRequest(event)) {
		// let Nitro handle JSON errors
		return;
	}
	// invoke default Nitro error handler (which will log appropriately if required)
	const defaultRes = await defaultHandler(error, event, { json: true });
	// let Nitro handle redirect if appropriate
	const status = error.status || error.statusCode || 500;
	if (status === 404 && defaultRes.status === 302) {
		setResponseHeaders(event, defaultRes.headers);
		setResponseStatus(event, defaultRes.status, defaultRes.statusText);
		return send(event, JSON.stringify(defaultRes.body, null, 2));
	}
	if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
		// normalize to string format expected by nuxt `error.vue`
		defaultRes.body.stack = defaultRes.body.stack.join("\n");
	}
	const errorObject = defaultRes.body;
	// remove proto/hostname/port from URL
	const url = new URL(errorObject.url);
	errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
	// add default server message (keep sanitized for unhandled errors)
	errorObject.message = error.unhandled ? errorObject.message || "Server Error" : error.message || errorObject.message || "Server Error";
	// we will be rendering this error internally so we can pass along the error.data safely
	errorObject.data ||= error.data;
	errorObject.statusText ||= error.statusText || error.statusMessage;
	delete defaultRes.headers["content-type"];
	delete defaultRes.headers["content-security-policy"];
	setResponseHeaders(event, defaultRes.headers);
	// Access request headers
	const reqHeaders = getRequestHeaders(event);
	// Detect to avoid recursion in SSR rendering of errors
	const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
	// HTML response (via SSR)
	const res = isRenderingError ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject), {
		headers: {
			...reqHeaders,
			"x-nuxt-error": "true"
		},
		redirect: "manual"
	}).catch(() => null);
	if (event.handled) {
		return;
	}
	// Fallback to static rendered error page
	if (!res) {
		const { template } = await Promise.resolve().then(function () { return error500; });
		{
			// TODO: Support `message` in template
			errorObject.description = errorObject.message;
		}
		setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
		return send(event, template(errorObject));
	}
	const html = await res.text();
	for (const [header, value] of res.headers.entries()) {
		if (header === "set-cookie") {
			appendResponseHeader(event, header, value);
			continue;
		}
		setResponseHeader(event, header, value);
	}
	setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
	if (!globalThis._importMeta_.test && typeof html === "string") {
		const prettyResponse = await defaultHandler(error, event, { json: false });
		if (typeof prettyResponse.body === "string") {
			return send(event, html.replace("</body>", `${generateErrorOverlayHTML(prettyResponse.body, { startMinimized: 300 <= status && status < 500 })}</body>`));
		}
	}
	return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json ?? !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve$1(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _wchfFxjzlKkTMBzBEC011_EjexWft9a31JVjqtoUKY = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

function normalizeSiteConfig(config) {
  if (typeof config.indexable !== "undefined")
    config.indexable = String(config.indexable) !== "false";
  if (typeof config.trailingSlash !== "undefined" && !config.trailingSlash)
    config.trailingSlash = String(config.trailingSlash) !== "false";
  if (config.url && !hasProtocol(String(config.url), { acceptRelative: true, strict: false }))
    config.url = withHttps(String(config.url));
  const keys = Object.keys(config).sort((a, b) => a.localeCompare(b));
  const newConfig = {};
  for (const k of keys)
    newConfig[k] = config[k];
  return newConfig;
}
function createSiteConfigStack(options) {
  const debug = options?.debug || false;
  const stack = [];
  function push(input) {
    if (!input || typeof input !== "object" || Object.keys(input).length === 0) {
      return () => {
      };
    }
    if (!input._context && debug) {
      let lastFunctionName = new Error("tmp").stack?.split("\n")[2]?.split(" ")[5];
      if (lastFunctionName?.includes("/"))
        lastFunctionName = "anonymous";
      input._context = lastFunctionName;
    }
    const entry = {};
    for (const k in input) {
      const val = input[k];
      if (typeof val !== "undefined" && val !== "")
        entry[k] = val;
    }
    if (Object.keys(entry).filter((k) => !k.startsWith("_")).length === 0) {
      return () => {
      };
    }
    stack.push(entry);
    return () => {
      const idx = stack.indexOf(entry);
      if (idx !== -1)
        stack.splice(idx, 1);
    };
  }
  function get(options2) {
    const siteConfig = {};
    if (options2?.debug)
      siteConfig._context = {};
    siteConfig._priority = {};
    for (const o in stack.sort((a, b) => (a._priority || 0) - (b._priority || 0))) {
      for (const k in stack[o]) {
        const key = k;
        const val = options2?.resolveRefs ? toValue(stack[o][k]) : stack[o][k];
        if (!k.startsWith("_") && typeof val !== "undefined" && val !== "") {
          siteConfig[k] = val;
          if (typeof stack[o]._priority !== "undefined" && stack[o]._priority !== -1) {
            siteConfig._priority[key] = stack[o]._priority;
          }
          if (options2?.debug)
            siteConfig._context[key] = stack[o]._context?.[key] || stack[o]._context || "anonymous";
        }
      }
    }
    return options2?.skipNormalize ? siteConfig : normalizeSiteConfig(siteConfig);
  }
  return {
    stack,
    push,
    get
  };
}

function envSiteConfig(env = {}) {
  return Object.fromEntries(Object.entries(env).filter(([k]) => k.startsWith("NUXT_SITE_") || k.startsWith("NUXT_PUBLIC_SITE_")).map(([k, v]) => [
    k.replace(/^NUXT_(PUBLIC_)?SITE_/, "").split("_").map((s, i) => i === 0 ? s.toLowerCase() : s[0]?.toUpperCase() + s.slice(1).toLowerCase()).join(""),
    v
  ]));
}

const logger$1 = /* @__PURE__ */ createConsola({
  defaults: {
    tag: "nuxt-site-config"
  }
});

function getSiteConfig(e, _options) {
  if (!e.context._initedSiteConfig) {
    logger$1.warn("Site config has not been initialized yet. If you're trying to access site config in a server middleware then this not yet supported. See https://github.com/harlan-zw/nuxt-seo/issues/397");
  }
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  const options = defu$1(_options, useRuntimeConfig(e)["nuxt-site-config"], { debug: false });
  return e.context.siteConfig.get(options);
}

const _9KhOUG3ygQPuLOAt04K62LlZjKjZIiEg8Glqc2XtQUE = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", async (ctx, { event }) => {
    const routeOptions = getRouteRules(event);
    const isIsland = process.env.NUXT_COMPONENT_ISLANDS && event.path.startsWith("/__nuxt_island");
    event.path;
    const noSSR = !!process.env.NUXT_NO_SSR || event.context.nuxt?.noSSR || routeOptions.ssr === false && !isIsland || (false);
    if (noSSR) {
      const siteConfig = Object.fromEntries(
        Object.entries(getSiteConfig(event)).map(([k, v]) => [k, toValue(v)])
      );
      ctx.body.push(`<script>window.__NUXT_SITE_CONFIG__=${devalue(siteConfig)}<\/script>`);
    }
  });
});

/*!
  * shared v11.2.8
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const _create = Object.create;
const create = (obj = null) => _create(obj);
/* eslint-enable */
/**
 * Useful Utilities By Evan you
 * Modified by kazuya kawaguchi
 * MIT License
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
 */
const isArray = Array.isArray;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isObject = (val) => val !== null && typeof val === 'object';
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);

const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepCopy(src, des) {
    // src and des should both be objects, and none of them can be a array
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
        throw new Error('Invalid value');
    }
    const stack = [{ src, des }];
    while (stack.length) {
        const { src, des } = stack.pop();
        // using `Object.keys` which skips prototype properties
        Object.keys(src).forEach(key => {
            if (key === '__proto__') {
                return;
            }
            // if src[key] is an object/array, set des[key]
            // to empty object/array to prevent setting by reference
            if (isObject(src[key]) && !isObject(des[key])) {
                des[key] = Array.isArray(src[key]) ? [] : create();
            }
            if (isNotObjectOrIsArray(des[key]) || isNotObjectOrIsArray(src[key])) {
                // replace with src[key] when:
                // src[key] or des[key] is not an object, or
                // src[key] or des[key] is an array
                des[key] = src[key];
            }
            else {
                // src[key] and des[key] are both objects, merge them
                stack.push({ src: src[key], des: des[key] });
            }
        });
    }
}

const __nuxtMock = { runWithContext: async (fn) => await fn() };
const merger$1 = createDefu((obj, key, value) => {
  if (key === "messages" || key === "datetimeFormats" || key === "numberFormats") {
    obj[key] ??= create(null);
    deepCopy(value, obj[key]);
    return true;
  }
});
async function loadVueI18nOptions(vueI18nConfigs) {
  const nuxtApp = __nuxtMock;
  let vueI18nOptions = { messages: create(null) };
  for (const configFile of vueI18nConfigs) {
    const resolver = await configFile().then((x) => isModule(x) ? x.default : x);
    const resolved = isFunction(resolver) ? await nuxtApp.runWithContext(() => resolver()) : resolver;
    vueI18nOptions = merger$1(create(null), resolved, vueI18nOptions);
  }
  vueI18nOptions.fallbackLocale ??= false;
  return vueI18nOptions;
}
const isModule = (val) => toTypeString(val) === "[object Module]";
async function getLocaleMessages(locale, loader) {
  const nuxtApp = __nuxtMock;
  try {
    const getter = await nuxtApp.runWithContext(loader.load).then((x) => isModule(x) ? x.default : x);
    return isFunction(getter) ? await nuxtApp.runWithContext(() => getter(locale)) : getter;
  } catch (e) {
    throw new Error(`Failed loading locale (${locale}): ` + e.message);
  }
}
async function getLocaleMessagesMerged(locale, loaders = []) {
  const nuxtApp = __nuxtMock;
  const messages = await Promise.all(
    loaders.map((loader) => nuxtApp.runWithContext(() => getLocaleMessages(locale, loader)))
  );
  const merged = {};
  for (const message of messages) {
    deepCopy(message, merged);
  }
  return merged;
}

var nav$1 = {
	home: "首页",
	about: "关于我",
	blog: "博客",
	contact: "联系我"
};
var welcome$1 = "欢迎来到我的 Nuxt4 技术博客";
var description$1 = "记录技术成长和学习心得";
var readMore$1 = "阅读更多";
var latestPosts$1 = "最新文章";
var tags$3 = "标签";
var categories$3 = "分类";
var archives$3 = "归档";
var search$3 = {
	placeholder: "搜索文章标题、内容或标签...",
	loading: "搜索中...",
	noResults: "没有找到相关文章，请尝试其他关键词",
	title: "搜索文章",
	hint: "输入关键词开始搜索"
};
var share$1 = {
	title: "分享",
	wechat: "微信",
	weibo: "微博",
	zhihu: "知乎",
	juejin: "掘金"
};
var comment$1 = "评论";
var backToTop$1 = "返回顶部";
var language$1 = "语言";
var copyright$1 = "© 2026 我的 Nuxt4 技术博客. 保留所有权利.";
var loadingArticle$1 = "正在加载文章...";
var toc$1 = {
	title: "文章目录",
	empty: "暂无章节目录"
};
var comments$1 = {
	title: "评论"
};
var reload$1 = "重新加载";
var unnamedArticle$1 = "未命名文章";
var unknown$1 = "未知";
var tagsLabel$1 = "标签：";
var noTags$1 = "无标签";
var minute$1 = "分钟";
var words$1 = "字";
var langName$1 = {
	"zh-CN": "中文",
	en: "English"
};
var loadingArticles$1 = "加载文章中...";
var published$1 = "已发布";
var uncategorized$1 = "未分类";
var noDescription$1 = "暂无简介，点击阅读全文了解更多内容...";
var prevPage$1 = "上一页";
var nextPage$1 = "下一页";
var searchResults$1 = "搜索结果";
var articlesSuffix$1 = "篇文章";
const locale_zh_45CN_46json_b2354e7c = {
	nav: nav$1,
	welcome: welcome$1,
	description: description$1,
	readMore: readMore$1,
	latestPosts: latestPosts$1,
	tags: tags$3,
	categories: categories$3,
	archives: archives$3,
	search: search$3,
	share: share$1,
	comment: comment$1,
	backToTop: backToTop$1,
	language: language$1,
	copyright: copyright$1,
	loadingArticle: loadingArticle$1,
	toc: toc$1,
	comments: comments$1,
	reload: reload$1,
	unnamedArticle: unnamedArticle$1,
	unknown: unknown$1,
	tagsLabel: tagsLabel$1,
	noTags: noTags$1,
	minute: minute$1,
	words: words$1,
	langName: langName$1,
	loadingArticles: loadingArticles$1,
	published: published$1,
	uncategorized: uncategorized$1,
	noDescription: noDescription$1,
	prevPage: prevPage$1,
	nextPage: nextPage$1,
	searchResults: searchResults$1,
	"archives.empty": "暂无归档文章",
	articlesSuffix: articlesSuffix$1,
	"categories.empty": "暂无该分类下的文章",
	"tags.empty": "暂无标签"
};

var nav = {
	home: "Home",
	about: "About",
	blog: "Blog",
	contact: "Contact"
};
var welcome = "Welcome to my Nuxt4 Tech Blog";
var description = "Recording technical growth and learning insights";
var readMore = "Read More";
var latestPosts = "Latest Posts";
var tags$2 = "Tags";
var categories$2 = "Categories";
var archives$2 = "Archives";
var search$2 = {
	placeholder: "Search titles, content or tags...",
	loading: "Searching...",
	noResults: "No related articles found, try other keywords",
	title: "Search Articles",
	hint: "Enter keywords to start searching"
};
var share = {
	copyNotice: "Link copied to clipboard. Paste it in WeChat to share.",
	title: "Share",
	wechat: "WeChat",
	weibo: "Weibo",
	zhihu: "Zhihu",
	juejin: "Juejin"
};
var comment = "Comment";
var backToTop = "Back to Top";
var language = "Language";
var copyright = "© 2026 My Nuxt4 Tech Blog. All rights reserved.";
var loadingArticle = "Loading article...";
var toc = {
	title: "Table of Contents",
	empty: "No table of contents"
};
var comments = {
	title: "Comments"
};
var reload = "Reload";
var unnamedArticle = "Untitled article";
var unknown = "Unknown";
var tagsLabel = "Tags:";
var noTags = "No tags";
var minute = "minute";
var words = "words";
var langName = {
	"zh-CN": "中文",
	en: "English"
};
var loadingArticles = "Loading articles...";
var published = "Published";
var uncategorized = "Uncategorized";
var noDescription = "No description yet. Click to read more...";
var prevPage = "Previous";
var nextPage = "Next";
var searchResults = "Search Results";
var noArticleContent = "No article content";
var toggleDark = "Toggle dark mode";
var articlesSuffix = "articles";
const locale_en_46json_a46b8886 = {
	nav: nav,
	welcome: welcome,
	description: description,
	readMore: readMore,
	latestPosts: latestPosts,
	tags: tags$2,
	categories: categories$2,
	archives: archives$2,
	search: search$2,
	share: share,
	comment: comment,
	backToTop: backToTop,
	language: language,
	copyright: copyright,
	loadingArticle: loadingArticle,
	toc: toc,
	comments: comments,
	reload: reload,
	unnamedArticle: unnamedArticle,
	unknown: unknown,
	tagsLabel: tagsLabel,
	noTags: noTags,
	minute: minute,
	words: words,
	langName: langName,
	loadingArticles: loadingArticles,
	published: published,
	uncategorized: uncategorized,
	noDescription: noDescription,
	prevPage: prevPage,
	nextPage: nextPage,
	searchResults: searchResults,
	noArticleContent: noArticleContent,
	toggleDark: toggleDark,
	"archives.empty": "No archived articles",
	articlesSuffix: articlesSuffix,
	"categories.empty": "No articles under this category",
	"tags.empty": "No tags yet"
};

// @ts-nocheck
const localeCodes =  [
  "zh-CN",
  "en"
];
const localeLoaders = {
  "zh-CN": [
    {
      key: "locale_zh_45CN_46json_b2354e7c",
      load: () => Promise.resolve(locale_zh_45CN_46json_b2354e7c),
      cache: true
    }
  ],
  en: [
    {
      key: "locale_en_46json_a46b8886",
      load: () => Promise.resolve(locale_en_46json_a46b8886),
      cache: true
    }
  ]
};
const vueI18nConfigs = [];
const normalizedLocales = [
  {
    code: "zh-CN",
    iso: "zh-CN",
    name: "中文",
    language: "zh-CN"
  },
  {
    code: "en",
    iso: "en-US",
    name: "English",
    language: "en-US"
  }
];

const setupVueI18nOptions = async (defaultLocale) => {
  const options = await loadVueI18nOptions(vueI18nConfigs);
  options.locale = defaultLocale || options.locale || "en-US";
  options.defaultLocale = defaultLocale;
  options.fallbackLocale ??= false;
  options.messages ??= {};
  for (const locale of localeCodes) {
    options.messages[locale] ??= {};
  }
  return options;
};

function defineNitroPlugin(def) {
  return def;
}

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const r=Object.create(null),i=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),o=new Proxy(r,{get(e,s){return i()[s]??r[s]},has(e,s){const E=i();return s in E||s in r},set(e,s,E){const B=i(true);return B[s]=E,true},deleteProperty(e,s){if(!s)return  false;const E=i(true);return delete E[s],true},ownKeys(){const e=i(true);return Object.keys(e)}}),t=typeof process<"u"&&process.env&&"development"||"",f=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:true}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:true}],["CLOUDFLARE_WORKERS","WORKERS_CI",{ci:true}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:false}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:false}],["VERCEL","VERCEL_ENV",{ci:false}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:false}],["CODESANDBOX","CODESANDBOX_HOST",{ci:false}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:true}],["RAILWAY","RAILWAY_PROJECT_ID"],["RAILWAY","RAILWAY_SERVICE_ID"],["DENO-DEPLOY","DENO_DEPLOYMENT_ID"],["FIREBASE_APP_HOSTING","FIREBASE_APP_HOSTING",{ci:true}]];function b(){if(globalThis.process?.env)for(const e of f){const s=e[1]||e[0];if(globalThis.process?.env[s])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:false}:{name:"",ci:false}}const l=b();l.name;function n(e){return e?e!=="false":false}const I=globalThis.process?.platform||"",T=n(o.CI)||l.ci!==false,R=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(o.DEBUG);const a=t==="test"||n(o.TEST),h=t==="dev"||t==="development";n(o.MINIMAL)||T||a||!R;const A=/^win/i.test(I);!n(o.NO_COLOR)&&(n(o.FORCE_COLOR)||(R||A)&&o.TERM!=="dumb"||T);const C=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(C?.split(".")[0])||null;const W=globalThis.process||Object.create(null),_={versions:{}};new Proxy(W,{get(e,s){if(s==="env")return o;if(s in e)return e[s];if(s in _)return _[s]}});const O=globalThis.process?.release?.name==="node",c=!!globalThis.Bun||!!globalThis.process?.versions?.bun,D=!!globalThis.Deno,L=!!globalThis.fastly,S=!!globalThis.Netlify,u=!!globalThis.EdgeRuntime,N=globalThis.navigator?.userAgent==="Cloudflare-Workers",F=[[S,"netlify"],[u,"edge-light"],[N,"workerd"],[L,"fastly"],[D,"deno"],[c,"bun"],[O,"node"]];function G(){const e=F.find(s=>s[0]);if(e)return {name:e[1]}}const P=G();P?.name||"";

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function buildAssetsDir() {
	// TODO: support passing event to `useRuntimeConfig`
	return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
	return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
	// TODO: support passing event to `useRuntimeConfig`
	const app = useRuntimeConfig().app;
	const publicBase = app.cdnURL || app.baseURL;
	return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

function parseAcceptLanguage(value) {
  return value.split(",").map((tag) => tag.split(";")[0]).filter(
    (tag) => !(tag === "*" || tag === "")
  );
}
function createPathIndexLanguageParser(index = 0) {
  return (path) => {
    const rawPath = typeof path === "string" ? path : path.pathname;
    const normalizedPath = rawPath.split("?")[0];
    const parts = normalizedPath.split("/");
    if (parts[0] === "") {
      parts.shift();
    }
    return parts.length > index ? parts[index] || "" : "";
  };
}

function getNitroOrigin$1(ctx = {}) {
  const isDev = ctx.isDev ?? h;
  const isPrerender = ctx.isPrerender ?? !!o.prerender;
  let host = "";
  let port = "";
  let protocol = o.NITRO_SSL_CERT && o.NITRO_SSL_KEY ? "https" : "http";
  if (isDev || isPrerender) {
    const devEnv = o.__NUXT_DEV__ || o.NUXT_VITE_NODE_OPTIONS;
    if (devEnv) {
      const parsed = JSON.parse(devEnv);
      const origin = parsed.proxy?.url || parsed.baseURL?.replace("/__nuxt_vite_node__", "");
      host = origin.replace(/^https?:\/\//, "").replace(/\/$/, "");
      protocol = origin.startsWith("https") ? "https" : "http";
    }
  }
  const hostIsLocalhost = !host || host.startsWith("localhost") || host.startsWith("127.");
  if (isDev && hostIsLocalhost && ctx.requestHost) {
    const reqHost = ctx.requestHost.split(":")[0] || "";
    if (reqHost && !reqHost.startsWith("localhost") && !reqHost.startsWith("127.")) {
      host = ctx.requestHost;
      protocol = ctx.requestProtocol || protocol;
    }
  }
  if (!host && ctx.requestHost) {
    host = ctx.requestHost;
    protocol = ctx.requestProtocol || protocol;
  }
  if (!host) {
    host = o.NITRO_HOST || o.HOST || "";
    if (isDev)
      port = o.NITRO_PORT || o.PORT || "3000";
  }
  if (host.includes(":")) {
    const i = host.lastIndexOf(":");
    port = host.slice(i + 1);
    host = host.slice(0, i);
  }
  host = o.NUXT_SITE_HOST_OVERRIDE || host;
  port = o.NUXT_SITE_PORT_OVERRIDE || port;
  if (host.startsWith("http://") || host.startsWith("https://")) {
    protocol = host.startsWith("https://") ? "https" : "http";
    host = host.replace(/^https?:\/\//, "");
  } else if (!host.includes("localhost") && !host.startsWith("127.")) {
    protocol = "https";
  }
  return `${protocol}://${host}${port ? `:${port}` : ""}/`;
}

function getNitroOrigin(e) {
  return getNitroOrigin$1({
    isDev: true,
    isPrerender: false,
    requestHost: e ? getRequestHost(e, { xForwardedHost: true }) : void 0,
    requestProtocol: e ? getRequestProtocol(e, { xForwardedProto: true }) : void 0
  });
}

function useSiteConfig(e, _options) {
  return getSiteConfig(e, _options);
}

function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base || "/");
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  let origin = withoutTrailingSlash(options.absolute ? options.siteUrl : "");
  if (base !== "/" && origin.endsWith(base)) {
    origin = origin.slice(0, origin.indexOf(base));
  }
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" && !options.withBase ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
const fileExtensions = [
  // Images
  "jpg",
  "jpeg",
  "png",
  "gif",
  "bmp",
  "webp",
  "svg",
  "ico",
  // Documents
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx",
  "txt",
  "md",
  "markdown",
  // Archives
  "zip",
  "rar",
  "7z",
  "tar",
  "gz",
  // Audio
  "mp3",
  "wav",
  "flac",
  "ogg",
  "opus",
  "m4a",
  "aac",
  "midi",
  "mid",
  // Video
  "mp4",
  "avi",
  "mkv",
  "mov",
  "wmv",
  "flv",
  "webm",
  // Web
  "html",
  "css",
  "js",
  "json",
  "xml",
  "tsx",
  "jsx",
  "ts",
  "vue",
  "svelte",
  "xsl",
  "rss",
  "atom",
  // Programming
  "php",
  "py",
  "rb",
  "java",
  "c",
  "cpp",
  "h",
  "go",
  // Data formats
  "csv",
  "tsv",
  "sql",
  "yaml",
  "yml",
  // Fonts
  "woff",
  "woff2",
  "ttf",
  "otf",
  "eot",
  // Executables/Binaries
  "exe",
  "msi",
  "apk",
  "ipa",
  "dmg",
  "iso",
  "bin",
  // Scripts/Config
  "bat",
  "cmd",
  "sh",
  "env",
  "htaccess",
  "conf",
  "toml",
  "ini",
  // Package formats
  "deb",
  "rpm",
  "jar",
  "war",
  // E-books
  "epub",
  "mobi",
  // Common temporary/backup files
  "log",
  "tmp",
  "bak",
  "old",
  "sav"
];
function isPathFile(path) {
  const lastSegment = path.split("/").pop();
  const ext = (lastSegment || path).match(/\.[0-9a-z]+$/i)?.[0];
  return ext && fileExtensions.includes(ext.replace(".", ""));
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  if (isPathFile($url.pathname))
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}

function createSitePathResolver(e, options = {}) {
  const siteConfig = getSiteConfig(e);
  const nitroOrigin = getNitroOrigin(e);
  const nuxtBase = useRuntimeConfig(e).app.baseURL || "/";
  return (path) => {
    return resolveSitePath(path, {
      ...options,
      siteUrl: options.canonical !== false || false ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    });
  };
}

const PROJECT_ROOT = "c:/Users/admin/Desktop/nuxt";
const parseFrontmatter = (markdown) => {
  if (!markdown || typeof markdown !== "string") return {};
  const frontmatter = {};
  const frontmatterMatch = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!(frontmatterMatch == null ? void 0 : frontmatterMatch[1])) return frontmatter;
  frontmatterMatch[1].split(/\r?\n/).filter((line) => line.trim() && !line.trim().startsWith("#")).forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) return;
    const key = line.slice(0, colonIndex).trim();
    let valueStr = line.slice(colonIndex + 1).trim();
    let value = valueStr;
    if (typeof valueStr === "string" && valueStr.startsWith("[") && valueStr.endsWith("]")) {
      try {
        const parsedArr = JSON.parse(valueStr.replace(/'/g, '"'));
        value = Array.isArray(parsedArr) ? parsedArr : valueStr;
      } catch (err) {
        value = valueStr.slice(1, -1).split(",").map((item) => item.trim().replace(/['"]/g, ""));
      }
    } else if (valueStr === "true" || valueStr === "false") {
      value = JSON.parse(valueStr);
    } else if (typeof valueStr === "string" && !isNaN(Number(valueStr))) {
      value = Number(valueStr);
    } else if (typeof valueStr === "string" && (valueStr.startsWith('"') && valueStr.endsWith('"') || valueStr.startsWith("'") && valueStr.endsWith("'"))) {
      value = valueStr.slice(1, -1);
    }
    frontmatter[key] = value;
  });
  return frontmatter;
};
const parseMarkdown = async (content) => {
  try {
    const frontmatter = parseFrontmatter(content);
    const body = content.replace(/^---\r?\n([\s\S]*?)\r?\n---/, "").trim();
    return {
      frontmatter,
      body
    };
  } catch (err) {
    console.error("\u274C Markdown\u89E3\u6790\u5931\u8D25\uFF1A", err);
    return {
      frontmatter: {},
      body: content
    };
  }
};
const getAllArticlesMeta = async (locale) => {
  const articlesDir = path.join(PROJECT_ROOT, "content", "articles");
  try {
    await fs.access(articlesDir);
  } catch {
    console.error("\u274C \u6587\u7AE0\u76EE\u5F55\u4E0D\u5B58\u5728\uFF1A", articlesDir);
    return [];
  }
  const files = await fs.readdir(articlesDir);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));
  if (markdownFiles.length === 0) {
    console.warn("\u26A0\uFE0F content\u76EE\u5F55\u4E0B\u65E0.md\u6587\u4EF6");
    return [];
  }
  const groups = {};
  const langRegex = /(.+)\.(zh-CN|zh|en)$/i;
  for (const file of markdownFiles) {
    const name = file.slice(0, -3);
    const m = name.match(langRegex);
    if (m) {
      const base = String(m[1]);
      const lang = String(m[2]);
      groups[base] = groups[base] || { localized: {} };
      groups[base].localized[lang] = path.join(articlesDir, file);
    } else {
      const base = name;
      groups[base] = groups[base] || { localized: {} };
      groups[base].default = path.join(articlesDir, file);
    }
  }
  const articles = [];
  for (const base of Object.keys(groups)) {
    const group = groups[base];
    let chosenPath = group.default || null;
    if (locale) {
      const full = group.localized[locale];
      if (full) chosenPath = full;
      else {
        const short = String(locale).split("-")[0] || "";
        if (group.localized[short]) chosenPath = group.localized[short];
      }
    }
    if (!chosenPath) {
      continue;
    }
    try {
      const content = await fs.readFile(chosenPath, "utf-8");
      const { frontmatter, body } = await parseMarkdown(content);
      articles.push({
        id: base,
        frontmatter: {
          title: frontmatter.title || base,
          date: frontmatter.date || "\u672A\u53D1\u5E03",
          updated: frontmatter.updated,
          category: frontmatter.category || "\u672A\u5206\u7C7B",
          tags: frontmatter.tags || [],
          description: frontmatter.description || "\u6682\u65E0\u7B80\u4ECB"
        },
        path: `/${base}`,
        body
      });
    } catch (err) {
      console.warn(`\u26A0\uFE0F \u89E3\u6790\u6587\u7AE0 ${base} \u5931\u8D25\uFF1A`, err.message);
      articles.push({
        id: base,
        frontmatter: {
          title: base,
          date: "\u672A\u53D1\u5E03",
          category: "\u672A\u5206\u7C7B",
          tags: [],
          description: "\u89E3\u6790\u5931\u8D25\uFF08\u683C\u5F0F\u9519\u8BEF\uFF09"
        },
        path: `/${base}`,
        body: ""
      });
    }
  }
  return articles.sort((a, b) => {
    const dateA = a.frontmatter.date === "\u672A\u53D1\u5E03" ? /* @__PURE__ */ new Date(0) : new Date(a.frontmatter.date);
    const dateB = b.frontmatter.date === "\u672A\u53D1\u5E03" ? /* @__PURE__ */ new Date(0) : new Date(b.frontmatter.date);
    return dateB.getTime() - dateA.getTime();
  });
};

function useRuntimeI18n(nuxtApp, event) {
  {
    return useRuntimeConfig(event).public.i18n;
  }
}
function useI18nDetection(nuxtApp) {
  const detectBrowserLanguage = useRuntimeI18n().detectBrowserLanguage;
  const detect = detectBrowserLanguage || {};
  return {
    ...detect,
    enabled: !!detectBrowserLanguage,
    cookieKey: detect.cookieKey || "i18n_redirected"
  };
}
function resolveRootRedirect(config) {
  if (!config) {
    return void 0;
  }
  return {
    path: "/" + (isString(config) ? config : config.path).replace(/^\//, ""),
    code: !isString(config) && config.statusCode || 302
  };
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

function createLocaleConfigs(fallbackLocale) {
  const localeConfigs = {};
  for (const locale of localeCodes) {
    const fallbacks = getFallbackLocaleCodes(fallbackLocale, [locale]);
    const cacheable = isLocaleWithFallbacksCacheable(locale, fallbacks);
    localeConfigs[locale] = { fallbacks, cacheable };
  }
  return localeConfigs;
}
function getFallbackLocaleCodes(fallback, locales) {
  if (fallback === false) {
    return [];
  }
  if (isArray(fallback)) {
    return fallback;
  }
  let fallbackLocales = [];
  if (isString(fallback)) {
    if (locales.every((locale) => locale !== fallback)) {
      fallbackLocales.push(fallback);
    }
    return fallbackLocales;
  }
  const targets = [...locales, "default"];
  for (const locale of targets) {
    if (locale in fallback == false) {
      continue;
    }
    fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
  }
  return fallbackLocales;
}
function isLocaleCacheable(locale) {
  return localeLoaders[locale] != null && localeLoaders[locale].every((loader) => loader.cache !== false);
}
function isLocaleWithFallbacksCacheable(locale, fallbackLocales) {
  return isLocaleCacheable(locale) && fallbackLocales.every((fallbackLocale) => isLocaleCacheable(fallbackLocale));
}
function getDefaultLocaleForDomain(host) {
  return normalizedLocales.find((l) => !!l.defaultForDomains?.includes(host))?.code;
}
const isSupportedLocale = (locale) => localeCodes.includes(locale || "");

function useI18nContext(event) {
  if (event.context.nuxtI18n == null) {
    throw new Error("Nuxt I18n server context has not been set up yet.");
  }
  return event.context.nuxtI18n;
}
function tryUseI18nContext(event) {
  return event.context.nuxtI18n;
}
const getHost = (event) => getRequestURL(event, { xForwardedHost: true }).host;
async function initializeI18nContext(event) {
  const runtimeI18n = useRuntimeI18n(void 0, event);
  const defaultLocale = runtimeI18n.defaultLocale || "";
  const options = await setupVueI18nOptions(getDefaultLocaleForDomain(getHost(event)) || defaultLocale);
  const localeConfigs = createLocaleConfigs(options.fallbackLocale);
  const ctx = createI18nContext();
  ctx.vueI18nOptions = options;
  ctx.localeConfigs = localeConfigs;
  event.context.nuxtI18n = ctx;
  return ctx;
}
function createI18nContext() {
  return {
    messages: {},
    slp: {},
    localeConfigs: {},
    trackMap: {},
    vueI18nOptions: void 0,
    trackKey(key, locale) {
      this.trackMap[locale] ??= /* @__PURE__ */ new Set();
      this.trackMap[locale].add(key);
    }
  };
}

function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l) => l.language?.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length });
      break;
    }
  }
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l) => l.language?.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
function findBrowserLocale(locales, browserLocales) {
  const matchedLocales = matchBrowserLocale(
    locales.map((l) => ({ code: l.code, language: l.language || l.code })),
    browserLocales
  );
  return matchedLocales.sort(compareBrowserLocale).at(0)?.code ?? "";
}

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"},{"name":"description","content":"我的 Nuxt4 技术博客，记录技术成长和学习心得"},{"name":"keywords","content":"Nuxt, Vue, 技术博客, 前端开发"},{"property":"og:site_name","content":"我的 Nuxt4 技术博客"},{"property":"og:type","content":"website"},{"name":"twitter:card","content":"summary_large_image"},{"name":"twitter:site","content":"@your-twitter"}],"link":[],"style":[],"script":[],"noscript":[],"charset":"utf-8","viewport":"width=device-width, initial-scale=1"};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appSpaLoaderTag = "div";

const appSpaLoaderAttrs = {"id":"__nuxt-loader"};

const appId = "nuxt-app";

const separator = "___";
const pathLanguageParser = createPathIndexLanguageParser(0);
const getLocaleFromRoutePath = (path) => pathLanguageParser(path);
const getLocaleFromRouteName = (name) => name.split(separator).at(1) ?? "";
function normalizeInput(input) {
  return typeof input !== "object" ? String(input) : String(input?.name || input?.path || "");
}
function getLocaleFromRoute(route) {
  const input = normalizeInput(route);
  return input[0] === "/" ? getLocaleFromRoutePath(input) : getLocaleFromRouteName(input);
}

function matchDomainLocale(locales, host, pathLocale) {
  const normalizeDomain = (domain = "") => domain.replace(/https?:\/\//, "");
  const matches = locales.filter(
    (locale) => normalizeDomain(locale.domain) === host || toArray(locale.domains).includes(host)
  );
  if (matches.length <= 1) {
    return matches[0]?.code;
  }
  return (
    // match by current path locale
    matches.find((l) => l.code === pathLocale)?.code || matches.find((l) => l.defaultForDomains?.includes(host) ?? l.domainDefault)?.code
  );
}

const getCookieLocale = (event, cookieName) => (getCookie(event, cookieName)) || void 0;
const getRouteLocale = (event, route) => getLocaleFromRoute(route);
const getHeaderLocale = (event) => findBrowserLocale(normalizedLocales, parseAcceptLanguage(getRequestHeader(event, "accept-language") || ""));
const getHostLocale = (event, path, domainLocales) => {
  const host = getRequestURL(event, { xForwardedHost: true }).host;
  const locales = normalizedLocales.map((l) => ({
    ...l,
    domain: domainLocales[l.code]?.domain ?? l.domain
  }));
  return matchDomainLocale(locales, host, getLocaleFromRoutePath(path));
};
const useDetectors = (event, config, nuxtApp) => {
  if (!event) {
    throw new Error("H3Event is required for server-side locale detection");
  }
  const runtimeI18n = useRuntimeI18n();
  return {
    cookie: () => getCookieLocale(event, config.cookieKey),
    header: () => getHeaderLocale(event) ,
    navigator: () => void 0,
    host: (path) => getHostLocale(event, path, runtimeI18n.domainLocales),
    route: (path) => getRouteLocale(event, path)
  };
};

// Generated by @nuxtjs/i18n
const pathToI18nConfig = {
  "/:id()": {
    "zh-CN": "/:id()",
    "en": "/:id()"
  },
  "/": {
    "zh-CN": "/",
    "en": "/"
  },
  "/search": {
    "zh-CN": "/search",
    "en": "/search"
  },
  "/tags/:tag()": {
    "zh-CN": "/tags/:tag()",
    "en": "/tags/:tag()"
  },
  "/tags": {
    "zh-CN": "/tags",
    "en": "/tags"
  },
  "/archives": {
    "zh-CN": "/archives",
    "en": "/archives"
  },
  "/categories": {
    "zh-CN": "/categories",
    "en": "/categories"
  },
  "/categories/:category()": {
    "zh-CN": "/categories/:category()",
    "en": "/categories/:category()"
  },
  "/archives/:year()/:month()": {
    "zh-CN": "/archives/:year()/:month()",
    "en": "/archives/:year()/:month()"
  },
  "/ndefined": {
    "zh-CN": "/ndefined",
    "en": "/ndefined"
  }
};
const i18nPathToPath = {
  "/:id()": "/:id()",
  "/": "/",
  "/search": "/search",
  "/tags/:tag()": "/tags/:tag()",
  "/tags": "/tags",
  "/archives": "/archives",
  "/categories": "/categories",
  "/categories/:category()": "/categories/:category()",
  "/archives/:year()/:month()": "/archives/:year()/:month()",
  "/ndefined": "/ndefined"
};

const matcher = createRouterMatcher([], {});
for (const path of Object.keys(i18nPathToPath)) {
  matcher.addRoute({ path, component: () => "", meta: {} });
}
const getI18nPathToI18nPath = (path, locale) => {
  if (!path || !locale) {
    return;
  }
  const plainPath = i18nPathToPath[path];
  const i18nConfig = pathToI18nConfig[plainPath];
  if (i18nConfig && i18nConfig[locale]) {
    return i18nConfig[locale] === true ? plainPath : i18nConfig[locale];
  }
};
function isExistingNuxtRoute(path) {
  if (path === "") {
    return;
  }
  if (path.endsWith("/__nuxt_error")) {
    return;
  }
  const resolvedMatch = matcher.resolve({ path }, { path: "/", name: "", matched: [], params: {}, meta: {} });
  return resolvedMatch.matched.length > 0 ? resolvedMatch : void 0;
}
function matchLocalized(path, locale, defaultLocale) {
  if (path === "") {
    return;
  }
  const parsed = parsePath(path);
  const resolvedMatch = matcher.resolve(
    { path: parsed.pathname || "/" },
    { path: "/", name: "", matched: [], params: {}, meta: {} }
  );
  if (resolvedMatch.matched.length > 0) {
    const alternate = getI18nPathToI18nPath(resolvedMatch.matched[0].path, locale);
    const match = matcher.resolve(
      { params: resolvedMatch.params },
      { path: alternate || "/", name: "", matched: [], params: {}, meta: {} }
    );
    const isPrefixable = prefixable(locale, defaultLocale);
    return withLeadingSlash(joinURL(isPrefixable ? locale : "", match.path));
  }
}
function prefixable(currentLocale, defaultLocale) {
  return (currentLocale !== defaultLocale || "prefix_except_default" === "prefix");
}

function* detect(detectors, detection, path) {
  if (detection.enabled) {
    yield { locale: detectors.cookie(), source: "cookie" };
    yield { locale: detectors.header(), source: "header" };
  }
  {
    yield { locale: detectors.route(path), source: "route" };
  }
  yield { locale: detection.fallbackLocale, source: "fallback" };
}
function createRedirectResponse(event, dest, code) {
  event.node.res.setHeader("location", dest);
  event.node.res.statusCode = sanitizeStatusCode(code, event.node.res.statusCode);
  return {
    headers: event.node.res.getHeaders(),
    statusCode: event.node.res.statusCode,
    body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${dest.replace(/"/g, "%22")}"></head></html>`
  };
}
const _NlZRtXsx4wZtH_B94JTk7OLP4EaGtyJrsG9CHdLh2Vc = defineNitroPlugin(async (nitro) => {
  const runtimeI18n = useRuntimeI18n();
  const rootRedirect = resolveRootRedirect(runtimeI18n.rootRedirect);
  runtimeI18n.defaultLocale || "";
  try {
    const cacheStorage = useStorage("cache");
    const cachedKeys = await cacheStorage.getKeys("nitro:handlers:i18n");
    await Promise.all(cachedKeys.map((key) => cacheStorage.removeItem(key)));
  } catch {
  }
  const detection = useI18nDetection();
  const cookieOptions = {
    path: "/",
    domain: detection.cookieDomain || void 0,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: detection.cookieSecure
  };
  const createBaseUrlGetter = () => {
    isFunction(runtimeI18n.baseUrl) ? "" : runtimeI18n.baseUrl || "";
    if (isFunction(runtimeI18n.baseUrl)) {
      console.warn("[nuxt-i18n] Configuring baseUrl as a function is deprecated and will be removed in v11.");
      return () => "";
    }
    return (event, defaultLocale) => {
      return "";
    };
  };
  function resolveRedirectPath(event, path, pathLocale, defaultLocale, detector) {
    let locale = "";
    for (const detected of detect(detector, detection, event.path)) {
      if (detected.locale && isSupportedLocale(detected.locale)) {
        locale = detected.locale;
        break;
      }
    }
    locale ||= defaultLocale;
    function getLocalizedMatch(locale2) {
      const res = matchLocalized(path || "/", locale2, defaultLocale);
      if (res && res !== event.path) {
        return res;
      }
    }
    let resolvedPath = void 0;
    let redirectCode = 302;
    const requestURL = getRequestURL(event);
    if (rootRedirect && requestURL.pathname === "/") {
      locale = detection.enabled && locale || defaultLocale;
      resolvedPath = isSupportedLocale(detector.route(rootRedirect.path)) && rootRedirect.path || matchLocalized(rootRedirect.path, locale, defaultLocale);
      redirectCode = rootRedirect.code;
    } else if (runtimeI18n.redirectStatusCode) {
      redirectCode = runtimeI18n.redirectStatusCode;
    }
    switch (detection.redirectOn) {
      case "root":
        if (requestURL.pathname !== "/") {
          break;
        }
      // fallthrough (root has no prefix)
      case "no prefix":
        if (pathLocale) {
          break;
        }
      // fallthrough to resolve
      case "all":
        resolvedPath ??= getLocalizedMatch(locale);
        break;
    }
    if (requestURL.pathname === "/" && "prefix_except_default" === "prefix") ;
    return { path: resolvedPath, code: redirectCode, locale };
  }
  const baseUrlGetter = createBaseUrlGetter();
  nitro.hooks.hook("request", async (event) => {
    await initializeI18nContext(event);
  });
  nitro.hooks.hook("render:before", async (context) => {
    const { event } = context;
    const ctx = useI18nContext(event);
    const url = getRequestURL(event);
    const detector = useDetectors(event, detection);
    const localeSegment = detector.route(event.path);
    const pathLocale = isSupportedLocale(localeSegment) && localeSegment || void 0;
    const path = (pathLocale && url.pathname.slice(pathLocale.length + 1)) ?? url.pathname;
    if (!url.pathname.includes("/_i18n/FQH-b37e") && !isExistingNuxtRoute(path)) {
      return;
    }
    const resolved = resolveRedirectPath(event, path, pathLocale, ctx.vueI18nOptions.defaultLocale, detector);
    if (resolved.path && resolved.path !== url.pathname) {
      ctx.detectLocale = resolved.locale;
      detection.useCookie && setCookie(event, detection.cookieKey, resolved.locale, cookieOptions);
      context.response = createRedirectResponse(
        event,
        joinURL(baseUrlGetter(event, ctx.vueI18nOptions.defaultLocale), resolved.path + url.search),
        resolved.code
      );
      return;
    }
  });
  nitro.hooks.hook("render:html", (htmlContext, { event }) => {
    tryUseI18nContext(event);
  });
});

const rootDir = "C:/Users/admin/Desktop/nuxt";

const devReducers = {
	VNode: (data) => isVNode(data) ? {
		type: data.type,
		props: data.props
	} : undefined,
	URL: (data) => data instanceof URL ? data.toString() : undefined
};
const asyncContext = getContext("nuxt-dev", {
	asyncContext: true,
	AsyncLocalStorage
});
const _R_4GZQjiUi_eYpzVuqFxuw8aDhlpxN1x48648gSaT08 = (nitroApp) => {
	const handler = nitroApp.h3App.handler;
	nitroApp.h3App.handler = (event) => {
		return asyncContext.callAsync({
			logs: [],
			event
		}, () => handler(event));
	};
	onConsoleLog((_log) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		const rawStack = captureRawStackTrace();
		if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
			return;
		}
		const trace = [];
		let filename = "";
		for (const entry of parseRawStackTrace(rawStack)) {
			if (entry.source === globalThis._importMeta_.url) {
				continue;
			}
			if (EXCLUDE_TRACE_RE.test(entry.source)) {
				continue;
			}
			filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
			trace.push({
				...entry,
				source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
			});
		}
		const log = {
			..._log,
			filename,
			stack: trace
		};
		// retain log to be include in the next render
		ctx.logs.push(log);
	});
	nitroApp.hooks.hook("afterResponse", () => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		return nitroApp.hooks.callHook("dev:ssr-logs", {
			logs: ctx.logs,
			path: ctx.event.path
		});
	});
	// Pass any logs to the client
	nitroApp.hooks.hook("render:html", (htmlContext) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		try {
			const reducers = Object.assign(Object.create(null), devReducers, ctx.event.context["~payloadReducers"]);
			htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
		} catch (e) {
			const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
			console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/4.x/api/composables/use-nuxt-app#payload.`);
		}
	});
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
	consola$1.addReporter({ log(logObj) {
		callback(logObj);
	} });
	consola$1.wrapConsole();
}

const plugins = [
  _wchfFxjzlKkTMBzBEC011_EjexWft9a31JVjqtoUKY,
_9KhOUG3ygQPuLOAt04K62LlZjKjZIiEg8Glqc2XtQUE,
_NlZRtXsx4wZtH_B94JTk7OLP4EaGtyJrsG9CHdLh2Vc,
_R_4GZQjiUi_eYpzVuqFxuw8aDhlpxN1x48648gSaT08
];

const assets = {};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$2(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _DSquQr = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _onwcmP = defineEventHandler(async (event) => {
  var _a, _b, _c, _d;
  try {
    const supported = ["zh-CN", "en"];
    const defaultLocale = "zh-CN";
    const q = getQuery$1(event);
    const queryLang = q.lang || "";
    const cookieLang = getCookie(event, "i18n_redirected");
    const accept = getHeader(event, "accept-language");
    const mapShort = (code) => {
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
      const first = ((_b = (_a = accept.split(",")[0]) == null ? void 0 : _a.split(";")[0]) == null ? void 0 : _b.trim()) || "";
      const mapped = mapShort(first);
      if (mapped && supported.includes(mapped)) lang = mapped;
    }
    if (!lang) lang = defaultLocale;
    if (cookieLang !== lang) {
      setCookie(event, "i18n_redirected", lang, {
        httpOnly: false,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 365
      });
    }
    const reqUrl = ((_d = (_c = event.node) == null ? void 0 : _c.req) == null ? void 0 : _d.url) || "/";
    const isAsset = reqUrl.startsWith("/_nuxt") || reqUrl.startsWith("/api") || reqUrl.startsWith("/favicon") || reqUrl.includes(".") || reqUrl.startsWith("/public");
    if (!isAsset) {
      const pathOnly = String(reqUrl).split("?")[0] || "/";
      const hasPrefix = supported.some(
        (s) => pathOnly === `/${s}` || pathOnly.startsWith(`/${s}/`) || pathOnly.startsWith(`/${s}?`)
      );
      if ((pathOnly === "/" || pathOnly === "") && lang !== defaultLocale && !hasPrefix) {
        const target = `/${lang}${reqUrl === "/" ? "/" : ""}`;
        return sendRedirect(event, target, 302);
      }
    }
    event.context.i18n = { locale: lang };
  } catch (err) {
    console.error("i18n middleware error:", err);
  }
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

// @__NO_SIDE_EFFECTS__
function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

const NUXT_RUNTIME_PAYLOAD_EXTRACTION = false;

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
};

function createSSRContext(event) {
	const ssrContext = {
		url: event.path,
		event,
		runtimeConfig: useRuntimeConfig(event),
		noSSR: event.context.nuxt?.noSSR || (false),
		head: createHead(unheadOptions),
		error: false,
		nuxt: undefined,
		payload: {},
		["~payloadReducers"]: Object.create(null),
		modules: new Set()
	};
	return ssrContext;
}
function setSSRError(ssrContext, error) {
	ssrContext.error = true;
	ssrContext.payload = { error };
	ssrContext.url = error.url;
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
// @ts-expect-error file will be produced after app build
const getServerEntry = () => import('file://C:/Users/admin/Desktop/nuxt/.nuxt//dist/server/server.mjs').then((r) => r.default || r);
// @ts-expect-error file will be produced after app build
const getClientManifest = () => import('file://C:/Users/admin/Desktop/nuxt/.nuxt//dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
// -- SSR Renderer --
const getSSRRenderer = lazyCachedFunction(async () => {
	// Load server bundle
	const createSSRApp = await getServerEntry();
	if (!createSSRApp) {
		throw new Error("Server bundle is not available");
	}
	// Load precomputed dependencies
	const precomputed = undefined ;
	// Create renderer
	const renderer = createRenderer(createSSRApp, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: renderToString$1,
		buildAssetsURL
	});
	async function renderToString$1(input, context) {
		const html = await renderToString(input, context);
		// In development with vite-node, the manifest is on-demand and will be available after rendering
		// eslint-disable-next-line no-restricted-globals
		if (process.env.NUXT_VITE_NODE_OPTIONS) {
			renderer.rendererContext.updateManifest(await getClientManifest());
		}
		return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
	}
	return renderer;
});
// -- SPA Renderer --
const getSPARenderer = lazyCachedFunction(async () => {
	const precomputed = undefined ;
	// @ts-expect-error virtual file
	const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
		{
			const APP_SPA_LOADER_OPEN_TAG = `<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
			const APP_SPA_LOADER_CLOSE_TAG = `</${appSpaLoaderTag}>`;
			const appTemplate = APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG;
			const loaderTemplate = r ? APP_SPA_LOADER_OPEN_TAG + r + APP_SPA_LOADER_CLOSE_TAG : "";
			return appTemplate + loaderTemplate;
		}
	});
	// Create SPA renderer and cache the result for all requests
	const renderer = createRenderer(() => () => {}, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: () => spaTemplate,
		buildAssetsURL
	});
	const result = await renderer.renderToString({});
	const renderToString = (ssrContext) => {
		const config = useRuntimeConfig(ssrContext.event);
		ssrContext.modules ||= new Set();
		ssrContext.payload.serverRendered = false;
		ssrContext.config = {
			public: config.public,
			app: config.app
		};
		return Promise.resolve(result);
	};
	return {
		rendererContext: renderer.rendererContext,
		renderToString
	};
});
function lazyCachedFunction(fn) {
	let res = null;
	return () => {
		if (res === null) {
			res = fn().catch((err) => {
				res = null;
				throw err;
			});
		}
		return res;
	};
}
function getRenderer(ssrContext) {
	return ssrContext.noSSR ? getSPARenderer() : getSSRRenderer();
}
// @ts-expect-error file will be produced after app build
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
	const styleMap = await getSSRStyles();
	const inlinedStyles = new Set();
	for (const mod of usedModules) {
		if (mod in styleMap && styleMap[mod]) {
			for (const style of await styleMap[mod]()) {
				inlinedStyles.add(style);
			}
		}
	}
	return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

// @ts-expect-error virtual file
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
/**
* remove the root node from the html body
*/
function getServerComponentHTML(body) {
	const match = body.match(ROOT_NODE_REGEX);
	return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
		return undefined;
	}
	const response = {};
	for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
		response[name] = {
			...slot,
			fallback: ssrContext.teleports?.[`island-fallback=${name}`]
		};
	}
	return response;
}
function getClientIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
		return undefined;
	}
	const response = {};
	for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
		// remove teleport anchor to avoid hydration issues
		const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
		response[clientUid] = {
			...component,
			html,
			slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
		};
	}
	return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
	const entries = Object.entries(teleports);
	const slots = {};
	for (const [key, value] of entries) {
		const match = key.match(SSR_CLIENT_SLOT_MARKER);
		if (match) {
			const [, id, slot] = match;
			if (!slot || clientUid !== id) {
				continue;
			}
			slots[slot] = value;
		}
	}
	return slots;
}
function replaceIslandTeleports(ssrContext, html) {
	const { teleports, islandContext } = ssrContext;
	if (islandContext || !teleports) {
		return html;
	}
	for (const key in teleports) {
		const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
		if (matchClientComp) {
			const [, uid, clientId] = matchClientComp;
			if (!uid || !clientId) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
			continue;
		}
		const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
		if (matchSlot) {
			const [, uid, slot] = matchSlot;
			if (!uid || !slot) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
		}
	}
	return html;
}

const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const _SxA8c9 = defineEventHandler(async (event) => {
	const nitroApp = useNitroApp();
	setResponseHeaders(event, {
		"content-type": "application/json;charset=utf-8",
		"x-powered-by": "Nuxt"
	});
	const islandContext = await getIslandContext(event);
	const ssrContext = {
		...createSSRContext(event),
		islandContext,
		noSSR: false,
		url: islandContext.url
	};
	// Render app
	const renderer = await getSSRRenderer();
	const renderResult = await renderer.renderToString(ssrContext).catch(async (err) => {
		await ssrContext.nuxt?.hooks.callHook("app:error", err);
		throw err;
	});
	// Handle errors
	if (ssrContext.payload?.error) {
		throw ssrContext.payload.error;
	}
	const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult
	});
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	{
		const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
		const link = [];
		for (const resource of Object.values(styles)) {
			// Do not add links to resources that are inlined (vite v5+)
			if ("inline" in getQuery(resource.file)) {
				continue;
			}
			// Add CSS links in <head> for CSS files
			// - in dev mode when rendering an island and the file has scoped styles and is not a page
			if (resource.file.includes("scoped") && !resource.file.includes("pages/")) {
				link.push({
					rel: "stylesheet",
					href: renderer.rendererContext.buildAssetsURL(resource.file),
					crossorigin: ""
				});
			}
		}
		if (link.length) {
			ssrContext.head.push({ link }, { mode: "server" });
		}
	}
	const islandHead = {};
	for (const entry of ssrContext.head.entries.values()) {
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
			const currentValue = islandHead[key];
			if (Array.isArray(currentValue)) {
				currentValue.push(...value);
			} else {
				islandHead[key] = value;
			}
		}
	}
	const islandResponse = {
		id: islandContext.id,
		head: islandHead,
		html: getServerComponentHTML(renderResult.html),
		components: getClientIslandResponse(ssrContext),
		slots: getSlotIslandResponse(ssrContext)
	};
	await nitroApp.hooks.callHook("render:island", islandResponse, {
		event,
		islandContext
	});
	return islandResponse;
});
async function getIslandContext(event) {
	// TODO: Strict validation for url
	let url = event.path || "";
	const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
	const hashId = componentParts.length > 1 ? componentParts.pop() : undefined;
	const componentName = componentParts.join("_");
	// TODO: Validate context
	const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
	const ctx = {
		url: "/",
		...context,
		id: hashId,
		name: componentName,
		props: destr$1(context.props) || {},
		slots: {},
		components: {}
	};
	return ctx;
}

const _Tsly9Z = eventHandler(async (e) => {
  if (e.context._initedSiteConfig)
    return;
  const runtimeConfig = useRuntimeConfig(e);
  const config = runtimeConfig["nuxt-site-config"];
  const nitroApp = useNitroApp();
  const siteConfig = e.context.siteConfig || createSiteConfigStack({
    debug: config.debug
  });
  const nitroOrigin = getNitroOrigin(e);
  e.context.siteConfigNitroOrigin = nitroOrigin;
  {
    siteConfig.push({
      _context: "nitro:init",
      _priority: -4,
      url: nitroOrigin
    });
  }
  siteConfig.push({
    _context: "runtimeEnv",
    _priority: 0,
    ...runtimeConfig.site || {},
    ...runtimeConfig.public.site || {},
    ...envSiteConfig(globalThis._importMeta_.env || {})
    // just in-case, shouldn't be needed
  });
  const buildStack = config.stack || [];
  buildStack.forEach((c) => siteConfig.push(c));
  if (e.context._nitro.routeRules.site) {
    siteConfig.push({
      _context: "route-rules",
      ...e.context._nitro.routeRules.site
    });
  }
  if (config.multiTenancy) {
    const host = parseURL(nitroOrigin).host;
    const tenant = config.multiTenancy?.find((t) => t.hosts.includes(host));
    if (tenant) {
      siteConfig.push({
        _context: `multi-tenancy:${host}`,
        _priority: 0,
        ...tenant.config
      });
    }
  }
  const ctx = { siteConfig, event: e };
  await nitroApp.hooks.callHook("site-config:init", ctx);
  e.context.siteConfig = ctx.siteConfig;
  e.context._initedSiteConfig = true;
});

const _Dbdxcg = eventHandler(async (e) => {
  const siteConfig = getSiteConfig(e);
  const nitroOrigin = getNitroOrigin(e);
  const runtimeConfig = useRuntimeConfig(e);
  const stack = e.context.siteConfig.stack;
  setHeader(e, "Content-Type", "application/json");
  return {
    config: siteConfig,
    stack,
    nitroOrigin,
    version: runtimeConfig["nuxt-site-config"].version
  };
});

const logger = createConsola({
  defaults: {
    tag: "@nuxt/sitemap"
  }
});
const merger = createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) && Array.isArray(value))
    obj[key] = Array.from(/* @__PURE__ */ new Set([...obj[key], ...value]));
  return obj[key];
});
function mergeOnKey(arr, key) {
  const seen = /* @__PURE__ */ new Map();
  let resultLength = 0;
  const result = Array.from({ length: arr.length });
  for (const item of arr) {
    const k = item[key];
    if (seen.has(k)) {
      const existingIndex = seen.get(k);
      result[existingIndex] = merger(item, result[existingIndex]);
    } else {
      seen.set(k, resultLength);
      result[resultLength++] = item;
    }
  }
  result.length = resultLength;
  return result;
}
function splitForLocales(path, locales) {
  const prefix = withLeadingSlash(path).split("/")[1];
  if (prefix && locales.includes(prefix))
    return [prefix, path.replace(`/${prefix}`, "")];
  return [null, path];
}
const StringifiedRegExpPattern = /\/(.*?)\/([gimsuy]*)$/;
function normalizeRuntimeFilters(input) {
  return (input || []).map((rule) => {
    if (rule instanceof RegExp || typeof rule === "string")
      return rule;
    const match = rule.regex.match(StringifiedRegExpPattern);
    if (match)
      return new RegExp(match[1], match[2]);
    return false;
  }).filter(Boolean);
}
function createPathFilter(options = {}) {
  const urlFilter = createFilter(options);
  return (loc) => {
    let path = loc;
    try {
      path = parseURL(loc).pathname;
    } catch {
      return false;
    }
    return urlFilter(path);
  };
}
function findPageMapping(pathWithoutPrefix, pages) {
  const stripped = pathWithoutPrefix[0] === "/" ? pathWithoutPrefix.slice(1) : pathWithoutPrefix;
  const pageKey = stripped.endsWith("/index") ? stripped.slice(0, -6) || "index" : stripped || "index";
  if (pages[pageKey])
    return { mappings: pages[pageKey], paramSegments: [] };
  const sortedKeys = Object.keys(pages).sort((a, b) => b.length - a.length);
  for (const key of sortedKeys) {
    if (pageKey.startsWith(key + "/")) {
      const paramPath = pageKey.slice(key.length + 1);
      return { mappings: pages[key], paramSegments: paramPath.split("/") };
    }
  }
  return null;
}
function applyDynamicParams(customPath, paramSegments) {
  if (!paramSegments.length)
    return customPath;
  let i = 0;
  return customPath.replace(/\[[^\]]+\]/g, () => paramSegments[i++] || "");
}
function createFilter(options = {}) {
  const include = options.include || [];
  const exclude = options.exclude || [];
  if (include.length === 0 && exclude.length === 0)
    return () => true;
  const excludeRegex = exclude.filter((r) => r instanceof RegExp);
  const includeRegex = include.filter((r) => r instanceof RegExp);
  const excludeStrings = exclude.filter((r) => typeof r === "string");
  const includeStrings = include.filter((r) => typeof r === "string");
  const excludeMatcher = excludeStrings.length > 0 ? toRouteMatcher(createRouter({
    routes: Object.fromEntries(excludeStrings.map((r) => [r, true])),
    strictTrailingSlash: false
  })) : null;
  const includeMatcher = includeStrings.length > 0 ? toRouteMatcher(createRouter({
    routes: Object.fromEntries(includeStrings.map((r) => [r, true])),
    strictTrailingSlash: false
  })) : null;
  const excludeExact = new Set(excludeStrings);
  const includeExact = new Set(includeStrings);
  return function(path) {
    if (excludeRegex.some((r) => r.test(path)))
      return false;
    if (excludeExact.has(path))
      return false;
    if (excludeMatcher && excludeMatcher.matchAll(path).length > 0)
      return false;
    if (includeRegex.some((r) => r.test(path)))
      return true;
    if (includeExact.has(path))
      return true;
    if (includeMatcher && includeMatcher.matchAll(path).length > 0)
      return true;
    return include.length === 0;
  };
}

function xmlEscape(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function useSitemapRuntimeConfig(e) {
  const clone = JSON.parse(JSON.stringify(useRuntimeConfig(e).sitemap));
  for (const k in clone.sitemaps) {
    const sitemap = clone.sitemaps[k];
    sitemap.include = normalizeRuntimeFilters(sitemap.include);
    sitemap.exclude = normalizeRuntimeFilters(sitemap.exclude);
    clone.sitemaps[k] = sitemap;
  }
  return Object.freeze(clone);
}

function isValidString(value) {
  return typeof value === "string" && value.trim().length > 0;
}
function parseNumber(value) {
  if (typeof value === "number") return value;
  if (typeof value === "string" && value.trim()) {
    const num = Number.parseFloat(value.trim());
    return Number.isNaN(num) ? void 0 : num;
  }
  return void 0;
}
function parseInteger(value) {
  if (typeof value === "number") return Math.floor(value);
  if (typeof value === "string" && value.trim()) {
    const num = Number.parseInt(value.trim(), 10);
    return Number.isNaN(num) ? void 0 : num;
  }
  return void 0;
}
function extractUrlFromParsedElement(urlElement, warnings) {
  if (!isValidString(urlElement.loc)) {
    warnings.push({
      type: "validation",
      message: "URL entry missing required loc element",
      context: { url: String(urlElement.loc || "undefined") }
    });
    return null;
  }
  const urlObj = { loc: urlElement.loc };
  if (isValidString(urlElement.lastmod)) {
    urlObj.lastmod = urlElement.lastmod;
  }
  if (isValidString(urlElement.changefreq)) {
    const validFreqs = ["always", "hourly", "daily", "weekly", "monthly", "yearly", "never"];
    if (validFreqs.includes(urlElement.changefreq)) {
      urlObj.changefreq = urlElement.changefreq;
    } else {
      warnings.push({
        type: "validation",
        message: "Invalid changefreq value",
        context: { url: urlElement.loc, field: "changefreq", value: urlElement.changefreq }
      });
    }
  }
  const priority = parseNumber(urlElement.priority);
  if (priority !== void 0 && !Number.isNaN(priority)) {
    if (priority < 0 || priority > 1) {
      warnings.push({
        type: "validation",
        message: "Priority value should be between 0.0 and 1.0, clamping to valid range",
        context: { url: urlElement.loc, field: "priority", value: priority }
      });
    }
    urlObj.priority = Math.max(0, Math.min(1, priority));
  } else if (urlElement.priority !== void 0) {
    warnings.push({
      type: "validation",
      message: "Invalid priority value",
      context: { url: urlElement.loc, field: "priority", value: urlElement.priority }
    });
  }
  if (urlElement.image) {
    const images = Array.isArray(urlElement.image) ? urlElement.image : [urlElement.image];
    const validImages = images.map((img) => {
      if (isValidString(img.loc)) {
        return { loc: img.loc };
      } else {
        warnings.push({
          type: "validation",
          message: "Image missing required loc element",
          context: { url: urlElement.loc, field: "image.loc" }
        });
        return null;
      }
    }).filter((img) => img !== null);
    if (validImages.length > 0) {
      urlObj.images = validImages;
    }
  }
  if (urlElement.video) {
    const videos = Array.isArray(urlElement.video) ? urlElement.video : [urlElement.video];
    const validVideos = videos.map((video) => {
      const missingFields = [];
      if (!isValidString(video.title)) missingFields.push("title");
      if (!isValidString(video.thumbnail_loc)) missingFields.push("thumbnail_loc");
      if (!isValidString(video.description)) missingFields.push("description");
      if (!isValidString(video.content_loc)) missingFields.push("content_loc");
      if (missingFields.length > 0) {
        warnings.push({
          type: "validation",
          message: `Video missing required fields: ${missingFields.join(", ")}`,
          context: { url: urlElement.loc, field: "video" }
        });
        return null;
      }
      const videoObj = {
        title: video.title,
        thumbnail_loc: video.thumbnail_loc,
        description: video.description,
        content_loc: video.content_loc
      };
      if (isValidString(video.player_loc)) {
        videoObj.player_loc = video.player_loc;
      }
      const duration = parseInteger(video.duration);
      if (duration !== void 0) {
        videoObj.duration = duration;
      } else if (video.duration !== void 0) {
        warnings.push({
          type: "validation",
          message: "Invalid video duration value",
          context: { url: urlElement.loc, field: "video.duration", value: video.duration }
        });
      }
      if (isValidString(video.expiration_date)) {
        videoObj.expiration_date = video.expiration_date;
      }
      const rating = parseNumber(video.rating);
      if (rating !== void 0) {
        if (rating < 0 || rating > 5) {
          warnings.push({
            type: "validation",
            message: "Video rating should be between 0.0 and 5.0",
            context: { url: urlElement.loc, field: "video.rating", value: rating }
          });
        }
        videoObj.rating = rating;
      } else if (video.rating !== void 0) {
        warnings.push({
          type: "validation",
          message: "Invalid video rating value",
          context: { url: urlElement.loc, field: "video.rating", value: video.rating }
        });
      }
      const viewCount = parseInteger(video.view_count);
      if (viewCount !== void 0) {
        videoObj.view_count = viewCount;
      } else if (video.view_count !== void 0) {
        warnings.push({
          type: "validation",
          message: "Invalid video view_count value",
          context: { url: urlElement.loc, field: "video.view_count", value: video.view_count }
        });
      }
      if (isValidString(video.publication_date)) {
        videoObj.publication_date = video.publication_date;
      }
      if (isValidString(video.family_friendly)) {
        const validValues = ["yes", "no"];
        if (validValues.includes(video.family_friendly)) {
          videoObj.family_friendly = video.family_friendly;
        } else {
          warnings.push({
            type: "validation",
            message: 'Invalid video family_friendly value, should be "yes" or "no"',
            context: { url: urlElement.loc, field: "video.family_friendly", value: video.family_friendly }
          });
        }
      }
      if (isValidString(video.requires_subscription)) {
        const validValues = ["yes", "no"];
        if (validValues.includes(video.requires_subscription)) {
          videoObj.requires_subscription = video.requires_subscription;
        } else {
          warnings.push({
            type: "validation",
            message: 'Invalid video requires_subscription value, should be "yes" or "no"',
            context: { url: urlElement.loc, field: "video.requires_subscription", value: video.requires_subscription }
          });
        }
      }
      if (isValidString(video.live)) {
        const validValues = ["yes", "no"];
        if (validValues.includes(video.live)) {
          videoObj.live = video.live;
        } else {
          warnings.push({
            type: "validation",
            message: 'Invalid video live value, should be "yes" or "no"',
            context: { url: urlElement.loc, field: "video.live", value: video.live }
          });
        }
      }
      if (video.restriction && typeof video.restriction === "object") {
        const restriction = video.restriction;
        if (isValidString(restriction.relationship) && isValidString(restriction["#text"])) {
          const validRelationships = ["allow", "deny"];
          if (validRelationships.includes(restriction.relationship)) {
            videoObj.restriction = {
              relationship: restriction.relationship,
              restriction: restriction["#text"]
            };
          } else {
            warnings.push({
              type: "validation",
              message: 'Invalid video restriction relationship, should be "allow" or "deny"',
              context: { url: urlElement.loc, field: "video.restriction.relationship", value: restriction.relationship }
            });
          }
        }
      }
      if (video.platform && typeof video.platform === "object") {
        const platform = video.platform;
        if (isValidString(platform.relationship) && isValidString(platform["#text"])) {
          const validRelationships = ["allow", "deny"];
          if (validRelationships.includes(platform.relationship)) {
            videoObj.platform = {
              relationship: platform.relationship,
              platform: platform["#text"]
            };
          } else {
            warnings.push({
              type: "validation",
              message: 'Invalid video platform relationship, should be "allow" or "deny"',
              context: { url: urlElement.loc, field: "video.platform.relationship", value: platform.relationship }
            });
          }
        }
      }
      if (video.price) {
        const prices = Array.isArray(video.price) ? video.price : [video.price];
        const validPrices = prices.map((price) => {
          const priceValue = price["#text"];
          if (priceValue == null || typeof priceValue !== "string" && typeof priceValue !== "number") {
            warnings.push({
              type: "validation",
              message: "Video price missing value",
              context: { url: urlElement.loc, field: "video.price" }
            });
            return null;
          }
          const validTypes = ["rent", "purchase", "package", "subscription"];
          if (price.type && !validTypes.includes(price.type)) {
            warnings.push({
              type: "validation",
              message: `Invalid video price type "${price.type}", should be one of: ${validTypes.join(", ")}`,
              context: { url: urlElement.loc, field: "video.price.type", value: price.type }
            });
          }
          return {
            price: String(priceValue),
            currency: price.currency,
            type: price.type
          };
        }).filter((p) => p !== null);
        if (validPrices.length > 0) {
          videoObj.price = validPrices;
        }
      }
      if (video.uploader && typeof video.uploader === "object") {
        const uploader = video.uploader;
        if (isValidString(uploader.info) && isValidString(uploader["#text"])) {
          videoObj.uploader = {
            uploader: uploader["#text"],
            info: uploader.info
          };
        } else {
          warnings.push({
            type: "validation",
            message: "Video uploader missing required info or name",
            context: { url: urlElement.loc, field: "video.uploader" }
          });
        }
      }
      if (video.tag) {
        const tags = Array.isArray(video.tag) ? video.tag : [video.tag];
        const validTags = tags.filter(isValidString);
        if (validTags.length > 0) {
          videoObj.tag = validTags;
        }
      }
      return videoObj;
    }).filter((video) => video !== null);
    if (validVideos.length > 0) {
      urlObj.videos = validVideos;
    }
  }
  if (urlElement.link) {
    const links = Array.isArray(urlElement.link) ? urlElement.link : [urlElement.link];
    const alternatives = links.map((link) => {
      if (link.rel === "alternate" && isValidString(link.hreflang) && isValidString(link.href)) {
        return {
          hreflang: link.hreflang,
          href: link.href
        };
      } else {
        warnings.push({
          type: "validation",
          message: 'Alternative link missing required rel="alternate", hreflang, or href',
          context: { url: urlElement.loc, field: "link" }
        });
        return null;
      }
    }).filter((alt) => alt !== null);
    if (alternatives.length > 0) {
      urlObj.alternatives = alternatives;
    }
  }
  if (urlElement.news && typeof urlElement.news === "object") {
    const news = urlElement.news;
    if (isValidString(news.title) && isValidString(news.publication_date) && news.publication && isValidString(news.publication.name) && isValidString(news.publication.language)) {
      urlObj.news = {
        title: news.title,
        publication_date: news.publication_date,
        publication: {
          name: news.publication.name,
          language: news.publication.language
        }
      };
    } else {
      warnings.push({
        type: "validation",
        message: "News entry missing required fields (title, publication_date, publication.name, publication.language)",
        context: { url: urlElement.loc, field: "news" }
      });
    }
  }
  return Object.fromEntries(
    Object.entries(urlObj).filter(
      ([_, value]) => value != null && (!Array.isArray(value) || value.length > 0)
    )
  );
}
async function parseSitemapXml(xml) {
  const warnings = [];
  if (!xml) {
    throw new Error("Empty XML input provided");
  }
  const { XMLParser } = await import('file://C:/Users/admin/Desktop/nuxt/node_modules/.pnpm/fast-xml-parser@5.3.5/node_modules/fast-xml-parser/src/fxp.js');
  const parser = new XMLParser({
    isArray: (tagName) => ["url", "image", "video", "link", "tag", "price"].includes(tagName),
    removeNSPrefix: true,
    parseAttributeValue: false,
    ignoreAttributes: false,
    attributeNamePrefix: "",
    trimValues: true
  });
  try {
    const parsed = parser.parse(xml);
    if (!parsed?.urlset) {
      throw new Error("XML does not contain a valid urlset element");
    }
    if (!parsed.urlset.url) {
      throw new Error("Sitemap contains no URL entries");
    }
    const urls = Array.isArray(parsed.urlset.url) ? parsed.urlset.url : [parsed.urlset.url];
    const validUrls = urls.map((url) => extractUrlFromParsedElement(url, warnings)).filter((url) => url !== null);
    if (validUrls.length === 0 && urls.length > 0) {
      warnings.push({
        type: "validation",
        message: "No valid URLs found in sitemap after validation"
      });
    }
    return { urls: validUrls, warnings };
  } catch (error) {
    if (error instanceof Error && (error.message === "Empty XML input provided" || error.message === "XML does not contain a valid urlset element" || error.message === "Sitemap contains no URL entries")) {
      throw error;
    }
    throw new Error(`Failed to parse XML: ${error instanceof Error ? error.message : String(error)}`);
  }
}

new XMLParser({
  isArray: (tagName) => tagName === "sitemap",
  removeNSPrefix: true,
  trimValues: true
});

function normalizeSourceInput(source) {
  if (typeof source === "string") {
    return { context: { name: "hook" }, fetch: source };
  }
  if (Array.isArray(source)) {
    return { context: { name: "hook" }, fetch: source };
  }
  return source;
}
async function tryFetchWithFallback(url, options, event) {
  const isExternalUrl = !url.startsWith("/");
  if (isExternalUrl) {
    const strategies = [
      // Strategy 1: Use globalThis.$fetch (original approach)
      () => globalThis.$fetch(url, options),
      // Strategy 2: If event is available, try using event context even for external URLs
      event ? () => event.$fetch(url, options) : null,
      // Strategy 3: Use native fetch as last resort
      () => $fetch(url, options)
    ].filter(Boolean);
    let lastError = null;
    for (const strategy of strategies) {
      try {
        return await strategy();
      } catch (error) {
        lastError = error;
        continue;
      }
    }
    throw lastError;
  }
  const fetchContainer = url.startsWith("/") && event ? event : globalThis;
  return await fetchContainer.$fetch(url, options);
}
async function fetchDataSource(input, event) {
  const context = typeof input.context === "string" ? { name: input.context } : input.context || { name: "fetch" };
  const url = typeof input.fetch === "string" ? input.fetch : input.fetch[0];
  const options = typeof input.fetch === "string" ? {} : input.fetch[1];
  const start = Date.now();
  const isExternalUrl = !url.startsWith("/");
  const timeout = isExternalUrl ? 1e4 : options.timeout || 5e3;
  const timeoutController = new AbortController();
  const abortRequestTimeout = setTimeout(() => timeoutController.abort(), timeout);
  try {
    let isMaybeErrorResponse = false;
    const isXmlRequest = parseURL(url).pathname.endsWith(".xml");
    const mergedHeaders = defu$1(
      options?.headers,
      {
        Accept: isXmlRequest ? "text/xml" : "application/json"
      },
      event && !isExternalUrl ? { host: getRequestHost(event, { xForwardedHost: true }) } : {}
    );
    const fetchOptions = {
      ...options,
      responseType: isXmlRequest ? "text" : "json",
      signal: timeoutController.signal,
      headers: mergedHeaders,
      // Use ofetch's built-in retry for external sources
      ...isExternalUrl && {
        retry: 2,
        retryDelay: 200
      },
      // @ts-expect-error untyped
      onResponse({ response }) {
        if (typeof response._data === "string" && response._data.startsWith("<!DOCTYPE html>"))
          isMaybeErrorResponse = true;
      }
    };
    const res = await tryFetchWithFallback(url, fetchOptions, event);
    const timeTakenMs = Date.now() - start;
    if (isMaybeErrorResponse) {
      return {
        ...input,
        context,
        urls: [],
        timeTakenMs,
        error: "Received HTML response instead of JSON"
      };
    }
    let urls = [];
    if (typeof res === "object") {
      urls = res.urls || res;
    } else if (typeof res === "string" && parseURL(url).pathname.endsWith(".xml")) {
      const result = await parseSitemapXml(res);
      urls = result.urls;
    }
    return {
      ...input,
      context,
      timeTakenMs,
      urls
    };
  } catch (_err) {
    const error = _err;
    if (isExternalUrl) {
      const errorInfo = {
        url,
        timeout,
        error: error.message,
        statusCode: error.response?.status,
        statusText: error.response?.statusText,
        method: options?.method || "GET"
      };
      logger.error("Failed to fetch external source.", errorInfo);
    } else {
      logger.error("Failed to fetch source.", { url, error: error.message });
    }
    return {
      ...input,
      context,
      urls: [],
      error: error.message,
      _isFailure: true
      // Mark as failure to prevent caching
    };
  } finally {
    if (abortRequestTimeout) {
      clearTimeout(abortRequestTimeout);
    }
  }
}
async function globalSitemapSources() {
  const m = await Promise.resolve().then(function () { return globalSources; });
  return [...m.sources];
}
async function childSitemapSources(definition) {
  if (!definition?._hasSourceChunk)
    return [];
  const m = await Promise.resolve().then(function () { return childSources; });
  return [...m.sources[definition.sitemapName] || []];
}
async function resolveSitemapSources(sources, event) {
  return (await Promise.all(
    sources.map((source) => {
      const normalized = normalizeSourceInput(source);
      if ("urls" in normalized) {
        return {
          timeTakenMs: 0,
          ...normalized,
          urls: normalized.urls
        };
      }
      if (normalized.fetch)
        return fetchDataSource(normalized, event);
      return {
        ...normalized,
        error: "Invalid source"
      };
    })
  )).flat();
}

const VALID_CHANGEFREQ = ["always", "hourly", "daily", "weekly", "monthly", "yearly", "never"];
function validateSitemapUrl(url) {
  if (typeof url === "string")
    return [];
  const warnings = [];
  if (url.lastmod) {
    const d = typeof url.lastmod === "string" ? url.lastmod : void 0;
    if (d && !isValidW3CDate(d))
      warnings.push(`lastmod "${d}" is not a valid W3C date`);
  }
  if (url.changefreq && !VALID_CHANGEFREQ.includes(url.changefreq))
    warnings.push(`changefreq "${url.changefreq}" is not valid (expected: always|hourly|daily|weekly|monthly|yearly|never)`);
  if (url.priority !== void 0) {
    const p = typeof url.priority === "number" ? url.priority : Number.parseFloat(String(url.priority));
    if (Number.isNaN(p) || p < 0 || p > 1)
      warnings.push(`priority "${url.priority}" is not valid (expected: number between 0.0 and 1.0)`);
  }
  return warnings;
}
function resolve(s, resolvers) {
  if (typeof s === "undefined")
    return void 0;
  const str = typeof s === "string" ? s : s.toString();
  if (!resolvers)
    return str;
  if (hasProtocol(str, { acceptRelative: true, strict: false }))
    return resolvers.fixSlashes(str);
  return resolvers.canonicalUrlResolver(str);
}
function removeTrailingSlash(s) {
  return s.replace(/\/(\?|#|$)/, "$1");
}
function preNormalizeEntry(_e, resolvers) {
  const input = typeof _e === "string" ? { loc: _e } : { ..._e };
  if (input.url && !input.loc) {
    input.loc = input.url;
  }
  delete input.url;
  if (typeof input.loc !== "string") {
    input.loc = "";
  }
  const skipEncoding = input._encoded === true;
  const e = input;
  e.loc = removeTrailingSlash(e.loc);
  e._abs = hasProtocol(e.loc, { acceptRelative: false, strict: false });
  try {
    e._path = e._abs ? parseURL(e.loc) : parsePath(e.loc);
  } catch {
    e._path = null;
  }
  if (e._path) {
    const search = e._path.search;
    const qs = search && search.length > 1 ? stringifyQuery(parseQuery(search)) : "";
    const pathname = skipEncoding ? e._path.pathname : encodePath(e._path.pathname);
    e._relativeLoc = `${pathname}${qs.length ? `?${qs}` : ""}`;
    if (e._path.host) {
      e.loc = stringifyParsedURL(e._path);
    } else {
      e.loc = e._relativeLoc;
    }
  } else if (!skipEncoding && !isEncoded(e.loc)) {
    e.loc = encodeURI(e.loc);
  }
  if (e.loc === "")
    e.loc = `/`;
  e.loc = resolve(e.loc, resolvers);
  e._key = `${e._sitemap || ""}${withoutTrailingSlash(e.loc)}`;
  return e;
}
function isEncoded(url) {
  try {
    return url !== decodeURIComponent(url);
  } catch {
    return false;
  }
}
function normaliseEntry(_e, defaults, resolvers) {
  const e = defu$1(_e, defaults);
  {
    const warnings = validateSitemapUrl(e);
    if (warnings.length)
      e._warnings = (e._warnings || []).concat(warnings);
  }
  if (e.lastmod) {
    const date = normaliseDate(e.lastmod);
    if (date)
      e.lastmod = date;
    else
      delete e.lastmod;
  }
  if (!e.lastmod)
    delete e.lastmod;
  e.loc = resolve(e.loc, resolvers);
  if (e.alternatives) {
    const alternatives = e.alternatives.map((a) => ({ ...a }));
    for (const alt of alternatives) {
      if (typeof alt.href === "string") {
        alt.href = resolve(alt.href, resolvers);
      } else if (typeof alt.href === "object" && alt.href) {
        alt.href = resolve(alt.href.href, resolvers);
      }
    }
    e.alternatives = mergeOnKey(alternatives, "hreflang");
  }
  if (e.images) {
    const images = e.images.map((i) => ({ ...i }));
    for (const img of images) {
      img.loc = resolve(img.loc, resolvers);
    }
    e.images = mergeOnKey(images, "loc");
  }
  if (e.videos) {
    const videos = e.videos.map((v) => ({ ...v }));
    for (const video of videos) {
      if (video.content_loc) {
        video.content_loc = resolve(video.content_loc, resolvers);
      }
    }
    e.videos = mergeOnKey(videos, "content_loc");
  }
  return e;
}
const IS_VALID_W3C_DATE = [
  /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
  /^\d{4}-[01]\d-[0-3]\d$/,
  /^\d{4}-[01]\d$/,
  /^\d{4}$/
];
function isValidW3CDate(d) {
  return IS_VALID_W3C_DATE.some((r) => r.test(d));
}
function normaliseDate(d) {
  if (typeof d === "string") {
    const tIdx = d.indexOf("T");
    if (tIdx !== -1) {
      const t = d.slice(tIdx + 1);
      if (!t.includes("+") && !t.includes("-") && !t.includes("Z")) {
        d += "Z";
      }
    }
    if (!isValidW3CDate(d))
      return false;
    d = new Date(d);
    d.setMilliseconds(0);
    if (Number.isNaN(d.getTime()))
      return false;
  }
  const z = (n) => `0${n}`.slice(-2);
  const date = `${d.getUTCFullYear()}-${z(d.getUTCMonth() + 1)}-${z(d.getUTCDate())}`;
  if (d.getUTCHours() > 0 || d.getUTCMinutes() > 0 || d.getUTCSeconds() > 0) {
    return `${date}T${z(d.getUTCHours())}:${z(d.getUTCMinutes())}:${z(d.getUTCSeconds())}Z`;
  }
  return date;
}

function attachUrlWarnings(sources) {
  for (const source of sources) {
    if (!source.urls?.length)
      continue;
    const warnings = [];
    for (const url of source.urls) {
      const msgs = validateSitemapUrl(url);
      if (msgs.length) {
        const loc = typeof url === "string" ? url : url.loc || "";
        for (const message of msgs)
          warnings.push({ loc, message });
      }
    }
    if (warnings.length)
      source._urlWarnings = warnings;
  }
  return sources;
}
const _Zbz_W6 = defineEventHandler(async (e) => {
  const _runtimeConfig = useSitemapRuntimeConfig();
  const siteConfig = getSiteConfig(e);
  const { sitemaps: _sitemaps } = _runtimeConfig;
  const runtimeConfig = { ..._runtimeConfig };
  delete runtimeConfig.sitemaps;
  const globalSources = await globalSitemapSources();
  const nitroOrigin = getNitroOrigin(e);
  const sitemaps = {};
  for (const s of Object.keys(_sitemaps)) {
    const sitemap = _sitemaps[s];
    sitemaps[s] = {
      ...sitemap,
      sources: attachUrlWarnings(await resolveSitemapSources(await childSitemapSources(sitemap), e))
    };
  }
  return {
    nitroOrigin,
    sitemaps,
    runtimeConfig,
    globalSources: attachUrlWarnings(await resolveSitemapSources(globalSources, e)),
    siteConfig: { ...siteConfig }
  };
});

const _yq8c9N = defineEventHandler(async (e) => {
  const fixPath = createSitePathResolver(e, { absolute: false, withBase: true });
  const { sitemapName: fallbackSitemapName, cacheMaxAgeSeconds, version, xslColumns, xslTips } = useSitemapRuntimeConfig();
  setHeader(e, "Content-Type", "application/xslt+xml");
  if (cacheMaxAgeSeconds)
    setHeader(e, "Cache-Control", `public, max-age=${cacheMaxAgeSeconds}, must-revalidate`);
  else
    setHeader(e, "Cache-Control", `no-cache, no-store`);
  const { name: siteName, url: siteUrl } = useSiteConfig(e);
  const referrer = getHeader(e, "Referer") || "/";
  const referrerPath = parseURL(referrer).pathname;
  const isNotIndexButHasIndex = referrerPath !== "/sitemap.xml" && referrerPath !== "/sitemap_index.xml" && referrerPath.endsWith(".xml");
  const sitemapName = parseURL(referrer).pathname.split("/").pop()?.split("-sitemap")[0] || fallbackSitemapName;
  const title = `${siteName}${sitemapName !== "sitemap.xml" ? ` - ${sitemapName === "sitemap_index.xml" ? "index" : sitemapName}` : ""}`.replace(/&/g, "&amp;");
  const isIndexPage = referrerPath === "/sitemap.xml" || referrerPath === "/sitemap_index.xml";
  const canonicalQuery = getQuery(referrer).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const debugUrl = xmlEscape(withQuery("/__sitemap__/debug.json", { sitemap: sitemapName }));
  const devUrl = xmlEscape(referrerPath);
  const prodUrl = xmlEscape(withQuery(referrerPath, { canonical: "" }));
  const fetchErrors = [];
  const xslQuery = getQuery$1(e);
  if (xslQuery.error_messages) {
    const errorMessages = xslQuery.error_messages;
    const errorUrls = xslQuery.error_urls;
    if (errorMessages) {
      const messages = Array.isArray(errorMessages) ? errorMessages : [errorMessages];
      const urls = Array.isArray(errorUrls) ? errorUrls : errorUrls ? [errorUrls] : [];
      messages.forEach((msg, i) => {
        const errorParts = [xmlEscape(msg)];
        if (urls[i])
          errorParts.push(xmlEscape(urls[i]));
        fetchErrors.push(`<span class="error-item">${errorParts.join(" \u2014 ")}</span>`);
      });
    }
  }
  const hasRuntimeErrors = fetchErrors.length > 0;
  const showDevTools = xslTips !== false;
  const hints = [
    `This is an XSL sitemap (CSS for XML). Disable with <code>xsl: false</code>`,
    `View the raw XML by adding <code>?canonical</code> to the URL`,
    `Check <code>/__sitemap__/debug.json</code> for full sitemap diagnostics`
  ];
  const hint = hints[Math.floor(Math.random() * hints.length)];
  let columns = [...xslColumns];
  if (!columns.length) {
    columns = [
      { label: "URL", width: "50%" },
      { label: "Images", width: "25%", select: "count(image:image)" },
      { label: "Last Updated", width: "25%", select: "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))" }
    ];
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          :root {
            --accent: #00dc82;
            --accent-hover: #00b86b;
            --bg: #0a0a0a;
            --bg-elevated: #141414;
            --bg-subtle: #1a1a1a;
            --border: #262626;
            --border-subtle: #1f1f1f;
            --text: #e5e5e5;
            --text-muted: #737373;
            --text-faint: #525252;
            --error: #ef4444;
            --error-bg: rgba(239,68,68,0.1);
            --warning: #f59e0b;
          }
          * { box-sizing: border-box; }
          body {
            font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
            font-size: 13px;
            color: var(--text);
            background: var(--bg);
            margin: 0;
            padding: 0;
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
          }
          a { color: inherit; transition: color 0.15s; }
          a:hover { color: var(--accent); }

          /* Debug bar (dev only) */
          .debug-bar {
            position: fixed;
            bottom: 0.75rem;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            background: var(--bg-elevated);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 0 1rem;
            height: 2.5rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            z-index: 100;
            font-size: 11px;
          }
          .debug-bar-brand {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--text-muted);
            text-decoration: none;
          }
          .debug-bar-brand:hover { color: var(--text); }
          .debug-bar-brand svg { flex-shrink: 0; }
          .debug-bar-hint {
            color: var(--text-faint);
            margin-right: auto;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .debug-bar-hint code {
            background: var(--bg-subtle);
            padding: 0.1rem 0.3rem;
            border-radius: 3px;
            font-size: 10px;
          }
          .mode-badge {
            font-size: 9px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            padding: 0.2rem 0.4rem;
            border-radius: 3px;
          }
          .mode-dev { background: rgba(245,158,11,0.15); color: var(--warning); }
          .mode-prod { background: rgba(0,220,130,0.12); color: var(--accent); }
          .mode-toggle {
            display: inline-flex;
            border-radius: 4px;
            overflow: hidden;
            background: var(--bg-subtle);
            padding: 2px;
            gap: 1px;
          }
          .mode-toggle a {
            padding: 0.2rem 0.4rem;
            font-size: 9px;
            font-weight: 500;
            text-decoration: none;
            color: var(--text-muted);
            border-radius: 2px;
            transition: all 0.15s;
          }
          .mode-toggle a:hover { color: var(--text); }
          .mode-toggle a.active {
            background: var(--accent);
            color: #0a0a0a;
          }
          .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.25rem;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            text-decoration: none;
            font-size: 10px;
            font-weight: 500;
            transition: all 0.15s;
          }
          .btn-primary {
            background: var(--accent);
            color: #0a0a0a;
          }
          .btn-primary:hover { background: var(--accent-hover); color: #0a0a0a; }
          .btn svg { width: 12px; height: 12px; }

          /* Error banner */
          .error-banner {
            background: var(--error-bg);
            border-bottom: 1px solid rgba(239,68,68,0.2);
            padding: 0.75rem 1.5rem;
            color: #fca5a5;
            font-size: 12px;
          }
          .error-banner strong { color: var(--error); }
          .error-item { display: block; margin-top: 0.375rem; color: #fca5a5; }
          .error-debug-link {
            display: inline-flex;
            align-items: center;
            gap: 0.25rem;
            margin-top: 0.625rem;
            padding: 0.25rem 0.5rem;
            background: var(--error);
            color: #fff;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 500;
            text-decoration: none;
            transition: background 0.15s;
          }
          .error-debug-link:hover { background: #dc2626; color: #fff; }

          /* Main content */
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1.5rem;
          }
          .header {
            margin-bottom: 1.25rem;
          }
          .header h1 {
            font-size: 1rem;
            font-weight: 600;
            margin: 0 0 0.25rem 0;
            color: var(--text);
          }
          .header-meta {
            color: var(--text-muted);
            font-size: 12px;
          }
          .header-meta a {
            color: var(--text-muted);
            text-decoration: underline;
            text-decoration-color: var(--border);
            text-underline-offset: 2px;
          }
          .header-meta a:hover { color: var(--accent); text-decoration-color: var(--accent); }

          /* Table */
          .table-wrap {
            border: 1px solid var(--border);
            border-radius: 8px;
            overflow: hidden;
            background: var(--bg-elevated);
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th {
            text-align: left;
            padding: 0.625rem 1rem;
            font-size: 10px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-muted);
            background: var(--bg-subtle);
            border-bottom: 1px solid var(--border);
          }
          td {
            padding: 0.5rem 1rem;
            border-bottom: 1px solid var(--border-subtle);
            font-size: 12px;
            color: var(--text);
          }
          tr:last-child td { border-bottom: none; }
          tr:hover td { background: rgba(255,255,255,0.02); }
          td a {
            text-decoration: none;
            word-break: break-all;
            color: var(--text);
          }
          td a:hover { color: var(--accent); }
          .inline-warning {
            font-size: 11px;
            color: var(--warning);
            margin-top: 0.25rem;
            line-height: 1.4;
          }
          .inline-warning::before {
            content: "\u26A0 ";
          }
          .count {
            display: inline-block;
            min-width: 1.25rem;
            padding: 0.125rem 0.375rem;
            background: var(--bg-subtle);
            border-radius: 4px;
            text-align: center;
            font-size: 11px;
            color: var(--text-muted);
            font-variant-numeric: tabular-nums;
          }
          .count:empty::before { content: "0"; }

          /* Light mode */
          @media (prefers-color-scheme: light) {
            :root {
              --accent: #00a963;
              --accent-hover: #008f54;
              --bg: #ffffff;
              --bg-elevated: #f5f5f5;
              --bg-subtle: #ebebeb;
              --border: #d4d4d4;
              --border-subtle: #e5e5e5;
              --text: #171717;
              --text-muted: #525252;
              --text-faint: #737373;
              --error: #dc2626;
              --error-bg: rgba(220,38,38,0.08);
              --warning: #b45309;
            }
            tr:hover td { background: rgba(0,0,0,0.02); }
            .btn-primary { color: #fff; }
            .btn-primary:hover { color: #fff; }
            .mode-toggle a.active { color: #fff; }
            .error-banner { color: #991b1b; }
            .error-item { color: #b91c1c; }
            .error-debug-link { color: #fff; }
            .error-debug-link:hover { color: #fff; }
          }

          .debug-bar-version {
            color: var(--text-faint);
            font-size: 10px;
          }

          /* Responsive */
          @media (max-width: 640px) {
            .debug-bar { padding: 0 0.75rem; gap: 0.5rem; width: 95%; }
            .debug-bar-brand span { display: none; }
            .debug-bar-hint { display: none; }
            .debug-bar-version { display: none; }
            .mode-badge { display: none; }
            .container { padding: 1rem; }
            th, td { padding: 0.5rem 0.75rem; }
          }
          ${showDevTools ? "body { padding-bottom: 3.5rem; }" : ""}
        </style>
      </head>
      <body>
        ${hasRuntimeErrors ? `<div class="error-banner">
            <strong>Sitemap Generation Errors</strong>
            ${fetchErrors.join("")}
            <a href="${debugUrl}" target="_blank" class="error-debug-link">View Debug Info \u2192</a>
          </div>` : ""}
        <div class="container">
          <div class="header">
            <h1>${xmlEscape(title)}</h1>
            <div class="header-meta">
              ${isNotIndexButHasIndex ? `Part of <a href="${xmlEscape(fixPath("/sitemap_index.xml"))}">${xmlEscape(fixPath("/sitemap_index.xml"))}</a> \xB7 ` : ""}
              <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
                <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps
              </xsl:if>
              <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
                <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs
              </xsl:if>
            </div>
          </div>
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th style="width:70%">Sitemap</th>
                    <th style="width:30%">Last Modified</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                    <xsl:variable name="sitemapURL">
                      <xsl:value-of select="sitemap:loc"/>
                    </xsl:variable>
                    <tr>
                      <td>
                        <a href="{$sitemapURL}">
                          <xsl:value-of select="sitemap:loc"/>
                        </a>
                      </td>
                      <td>
                        <xsl:value-of
                          select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </div>
          </xsl:if>
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    ${columns.map((c) => `<th style="width:${c.width}">${c.label}</th>`).join("\n")}
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:urlset/sitemap:url">
                    <tr>
                      <td>
                        <xsl:variable name="itemURL">
                          <xsl:value-of select="sitemap:loc"/>
                        </xsl:variable>
                        <a href="{$itemURL}">
                          <xsl:value-of select="sitemap:loc"/>
                        </a>
                        ${showDevTools ? `<xsl:for-each select="comment()[starts-with(normalize-space(.), 'WARN:')]">
                          <div class="inline-warning">
                            <xsl:value-of select="substring-after(normalize-space(.), 'WARN:')"/>
                          </div>
                        </xsl:for-each>` : ""}
                      </td>
                      ${columns.filter((c) => c.label !== "URL").map((c) => `<td><span class="count"><xsl:value-of select="${c.select}"/></span></td>`).join("\n")}
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </div>
          </xsl:if>
        </div>
        ${showDevTools ? `<div class="debug-bar">
            <a href="${xmlEscape(fixPath("/sitemap_index.xml"))}" class="debug-bar-brand">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 32 32"><path fill="#00dc82" d="M4 26h4v4H4zm10 0h4v4h-4zm10 0h4v4h-4zm1-10h-8v-2h-2v2H7a2 2 0 0 0-2 2v6h2v-6h8v6h2v-6h8v6h2v-6a2 2 0 0 0-2-2zM9 2v10h14V2zm2 2h2v6h-2zm10 6h-6V4h6z"/></svg>
              <span>Sitemap Debug Bar</span>
            </a>
            <span class="debug-bar-version">v${version} \xB7 ${xmlEscape(siteUrl)}</span>
            <span class="debug-bar-hint">Hint: ${hint}</span>
            ${isIndexPage ? `<span class="mode-badge ${isShowingCanonical ? "mode-prod" : "mode-dev"}">${isShowingCanonical ? "Prod" : "Dev"}</span>
              <div class="mode-toggle">
                <a href="${isShowingCanonical ? devUrl : "#"}" class="${!isShowingCanonical ? "active" : ""}">Dev</a>
                <a href="${!isShowingCanonical ? prodUrl : "#"}" class="${isShowingCanonical ? "active" : ""}">Prod</a>
              </div>` : ""}
            <a href="${debugUrl}" target="_blank" class="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
              Debug
            </a>
          </div>` : ""}
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;
});

function withoutQuery(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [path === "/" ? path : withoutTrailingSlash(path), rules])
      )
    })
  );
  return (pathOrUrl) => {
    const path = pathOrUrl[0] === "/" ? pathOrUrl : parseURL(pathOrUrl, app.baseURL).pathname;
    const pathWithoutQuery = withoutQuery(path);
    return defu$1({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(pathWithoutQuery === "/" ? pathWithoutQuery : withoutTrailingSlash(pathWithoutQuery), app.baseURL)
    ).reverse());
  };
}

function sortInPlace(urls) {
  urls.sort((a, b) => {
    const aLoc = typeof a === "string" ? a : a.loc;
    const bLoc = typeof b === "string" ? b : b.loc;
    const aSegments = aLoc.split("/").length;
    const bSegments = bLoc.split("/").length;
    if (aSegments !== bSegments) {
      return aSegments - bSegments;
    }
    return aLoc.localeCompare(bLoc, void 0, { numeric: true });
  });
  return urls;
}

function parseChunkInfo(sitemapName, sitemaps, defaultChunkSize) {
  defaultChunkSize = defaultChunkSize || 1e3;
  if (typeof sitemaps.chunks !== "undefined" && !Number.isNaN(Number(sitemapName))) {
    return {
      isChunked: true,
      baseSitemapName: "sitemap",
      chunkIndex: Number(sitemapName),
      chunkSize: defaultChunkSize
    };
  }
  if (sitemapName.includes("-")) {
    const parts = sitemapName.split("-");
    const lastPart = parts.pop();
    if (!Number.isNaN(Number(lastPart))) {
      const baseSitemapName = parts.join("-");
      const baseSitemap = sitemaps[baseSitemapName];
      if (baseSitemap && (baseSitemap.chunks || baseSitemap._isChunking)) {
        const chunkSize = typeof baseSitemap.chunks === "number" ? baseSitemap.chunks : baseSitemap.chunkSize || defaultChunkSize;
        return {
          isChunked: true,
          baseSitemapName,
          chunkIndex: Number(lastPart),
          chunkSize
        };
      }
    }
  }
  return {
    isChunked: false,
    baseSitemapName: sitemapName,
    chunkIndex: void 0,
    chunkSize: defaultChunkSize
  };
}
function getSitemapConfig(sitemapName, sitemaps, defaultChunkSize = 1e3) {
  const chunkInfo = parseChunkInfo(sitemapName, sitemaps, defaultChunkSize);
  if (chunkInfo.isChunked) {
    if (chunkInfo.baseSitemapName === "sitemap" && typeof sitemaps.chunks !== "undefined") {
      return {
        ...sitemaps.chunks,
        sitemapName,
        _isChunking: true,
        _chunkSize: chunkInfo.chunkSize
      };
    }
    const baseSitemap = sitemaps[chunkInfo.baseSitemapName];
    if (baseSitemap) {
      return {
        ...baseSitemap,
        sitemapName,
        // Use the full name with chunk index
        _isChunking: true,
        _chunkSize: chunkInfo.chunkSize
      };
    }
  }
  return sitemaps[sitemapName];
}
function sliceUrlsForChunk(urls, sitemapName, sitemaps, defaultChunkSize = 1e3) {
  const chunkInfo = parseChunkInfo(sitemapName, sitemaps, defaultChunkSize);
  if (chunkInfo.isChunked && chunkInfo.chunkIndex !== void 0) {
    const startIndex = chunkInfo.chunkIndex * chunkInfo.chunkSize;
    const endIndex = (chunkInfo.chunkIndex + 1) * chunkInfo.chunkSize;
    return urls.slice(startIndex, endIndex);
  }
  return urls;
}

function escapeValueForXml(value) {
  if (value === true || value === false)
    return value ? "yes" : "no";
  return xmlEscape(String(value));
}
const yesNo = (v) => v === "yes" || v === true ? "yes" : "no";
const URLSET_OPENING_TAG = '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
function buildUrlXml(url, NL, I1, I2, I3, I4) {
  let xml = `${I1}<url>${NL}`;
  if (url.loc) xml += `${I2}<loc>${xmlEscape(url.loc)}</loc>${NL}`;
  if (url.lastmod) xml += `${I2}<lastmod>${url.lastmod}</lastmod>${NL}`;
  if (url.changefreq) xml += `${I2}<changefreq>${url.changefreq}</changefreq>${NL}`;
  if (url.priority !== void 0) {
    const p = typeof url.priority === "number" ? url.priority : Number.parseFloat(url.priority);
    xml += `${I2}<priority>${p.toFixed(1)}</priority>${NL}`;
  }
  if (url.alternatives) {
    for (const alt of url.alternatives) {
      let attrs = "";
      for (const [k, v] of Object.entries(alt)) attrs += ` ${k}="${xmlEscape(String(v))}"`;
      xml += `${I2}<xhtml:link rel="alternate"${attrs} />${NL}`;
    }
  }
  if (url.images) {
    for (const img of url.images) {
      xml += `${I2}<image:image>${NL}${I3}<image:loc>${xmlEscape(img.loc)}</image:loc>${NL}`;
      if (img.title) xml += `${I3}<image:title>${xmlEscape(img.title)}</image:title>${NL}`;
      if (img.caption) xml += `${I3}<image:caption>${xmlEscape(img.caption)}</image:caption>${NL}`;
      if (img.geo_location) xml += `${I3}<image:geo_location>${xmlEscape(img.geo_location)}</image:geo_location>${NL}`;
      if (img.license) xml += `${I3}<image:license>${xmlEscape(img.license)}</image:license>${NL}`;
      xml += `${I2}</image:image>${NL}`;
    }
  }
  if (url.videos) {
    for (const video of url.videos) {
      xml += `${I2}<video:video>${NL}${I3}<video:title>${xmlEscape(video.title)}</video:title>${NL}`;
      if (video.thumbnail_loc) xml += `${I3}<video:thumbnail_loc>${xmlEscape(video.thumbnail_loc)}</video:thumbnail_loc>${NL}`;
      xml += `${I3}<video:description>${xmlEscape(video.description)}</video:description>${NL}`;
      if (video.content_loc) xml += `${I3}<video:content_loc>${xmlEscape(video.content_loc)}</video:content_loc>${NL}`;
      if (video.player_loc) xml += `${I3}<video:player_loc>${xmlEscape(video.player_loc)}</video:player_loc>${NL}`;
      if (video.duration !== void 0) xml += `${I3}<video:duration>${video.duration}</video:duration>${NL}`;
      if (video.expiration_date) xml += `${I3}<video:expiration_date>${video.expiration_date}</video:expiration_date>${NL}`;
      if (video.rating !== void 0) xml += `${I3}<video:rating>${video.rating}</video:rating>${NL}`;
      if (video.view_count !== void 0) xml += `${I3}<video:view_count>${video.view_count}</video:view_count>${NL}`;
      if (video.publication_date) xml += `${I3}<video:publication_date>${video.publication_date}</video:publication_date>${NL}`;
      if (video.family_friendly !== void 0) xml += `${I3}<video:family_friendly>${yesNo(video.family_friendly)}</video:family_friendly>${NL}`;
      if (video.restriction) xml += `${I3}<video:restriction relationship="${video.restriction.relationship || "allow"}">${xmlEscape(video.restriction.restriction)}</video:restriction>${NL}`;
      if (video.platform) xml += `${I3}<video:platform relationship="${video.platform.relationship || "allow"}">${xmlEscape(video.platform.platform)}</video:platform>${NL}`;
      if (video.requires_subscription !== void 0) xml += `${I3}<video:requires_subscription>${yesNo(video.requires_subscription)}</video:requires_subscription>${NL}`;
      if (video.price) {
        for (const price of video.price) {
          const c = price.currency ? ` currency="${price.currency}"` : "";
          const t = price.type ? ` type="${price.type}"` : "";
          xml += `${I3}<video:price${c}${t}>${xmlEscape(String(price.price ?? ""))}</video:price>${NL}`;
        }
      }
      if (video.uploader) {
        const info = video.uploader.info ? ` info="${xmlEscape(video.uploader.info)}"` : "";
        xml += `${I3}<video:uploader${info}>${xmlEscape(video.uploader.uploader)}</video:uploader>${NL}`;
      }
      if (video.live !== void 0) xml += `${I3}<video:live>${yesNo(video.live)}</video:live>${NL}`;
      if (video.tag) {
        const tags = Array.isArray(video.tag) ? video.tag : [video.tag];
        for (const t of tags) xml += `${I3}<video:tag>${xmlEscape(t)}</video:tag>${NL}`;
      }
      if (video.category) xml += `${I3}<video:category>${xmlEscape(video.category)}</video:category>${NL}`;
      if (video.gallery_loc) xml += `${I3}<video:gallery_loc>${xmlEscape(video.gallery_loc)}</video:gallery_loc>${NL}`;
      xml += `${I2}</video:video>${NL}`;
    }
  }
  if (url.news) {
    xml += `${I2}<news:news>${NL}${I3}<news:publication>${NL}`;
    xml += `${I4}<news:name>${xmlEscape(url.news.publication.name)}</news:name>${NL}`;
    xml += `${I4}<news:language>${xmlEscape(url.news.publication.language)}</news:language>${NL}`;
    xml += `${I3}</news:publication>${NL}`;
    if (url.news.title) xml += `${I3}<news:title>${xmlEscape(url.news.title)}</news:title>${NL}`;
    if (url.news.publication_date) xml += `${I3}<news:publication_date>${url.news.publication_date}</news:publication_date>${NL}`;
    xml += `${I2}</news:news>${NL}`;
  }
  if (url._warnings?.length) {
    for (const w of url._warnings)
      xml += `${I2}<!-- WARN: ${w} -->${NL}`;
  }
  xml += `${I1}</url>`;
  return xml;
}
function urlsToXml(urls, resolvers, { version, xsl, credits, minify }, errorInfo) {
  let xslHref = xsl ? resolvers.relativeBaseUrlResolver(xsl) : false;
  if (xslHref && errorInfo?.messages.length) {
    xslHref = withQuery(xslHref, {
      errors: "true",
      error_messages: errorInfo.messages,
      error_urls: errorInfo.urls
    });
  }
  const NL = minify ? "" : "\n";
  const I1 = minify ? "" : "    ";
  const I2 = minify ? "" : "        ";
  const I3 = minify ? "" : "            ";
  const I4 = minify ? "" : "                ";
  let xml = xslHref ? `<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="${escapeValueForXml(xslHref)}"?>${NL}` : `<?xml version="1.0" encoding="UTF-8"?>${NL}`;
  xml += URLSET_OPENING_TAG + NL;
  for (const url of urls) {
    xml += buildUrlXml(url, NL, I1, I2, I3, I4) + NL;
  }
  xml += "</urlset>";
  if (credits) {
    xml += `${NL}<!-- XML Sitemap generated by @nuxtjs/sitemap v${version} at ${(/* @__PURE__ */ new Date()).toISOString()} -->`;
  }
  return xml;
}

function resolveSitemapEntries(sitemap, urls, runtimeConfig, resolvers) {
  const {
    autoI18n,
    isI18nMapped
  } = runtimeConfig;
  const filterPath = createPathFilter({
    include: sitemap.include,
    exclude: sitemap.exclude
  });
  const _urls = urls.map((_e) => {
    const e = preNormalizeEntry(_e, resolvers);
    if (!e.loc || !filterPath(e.loc))
      return false;
    return e;
  }).filter(Boolean);
  let validI18nUrlsForTransform = [];
  const withoutPrefixPaths = {};
  if (autoI18n && autoI18n.strategy !== "no_prefix") {
    const localeCodes = autoI18n.locales.map((l) => l.code);
    const localeByCode = new Map(autoI18n.locales.map((l) => [l.code, l]));
    const isPrefixStrategy = autoI18n.strategy === "prefix";
    const isPrefixExceptOrAndDefault = autoI18n.strategy === "prefix_and_default" || autoI18n.strategy === "prefix_except_default";
    const xDefaultAndLocales = [{ code: "x-default", _hreflang: "x-default" }, ...autoI18n.locales];
    const defaultLocale = autoI18n.defaultLocale;
    const hasPages = !!autoI18n.pages;
    const hasDifferentDomains = !!autoI18n.differentDomains;
    validI18nUrlsForTransform = _urls.map((_e, i) => {
      if (_e._abs)
        return false;
      const split = splitForLocales(_e._relativeLoc, localeCodes);
      let localeCode = split[0];
      const pathWithoutPrefix = split[1];
      if (!localeCode)
        localeCode = defaultLocale;
      const e = _e;
      e._pathWithoutPrefix = pathWithoutPrefix;
      const locale = localeByCode.get(localeCode);
      if (!locale)
        return false;
      e._locale = locale;
      e._index = i;
      e._key = `${e._sitemap || ""}${e._path?.pathname || "/"}${e._path?.search || ""}`;
      withoutPrefixPaths[pathWithoutPrefix] = withoutPrefixPaths[pathWithoutPrefix] || [];
      if (!withoutPrefixPaths[pathWithoutPrefix].some((e2) => e2._locale.code === locale.code))
        withoutPrefixPaths[pathWithoutPrefix].push(e);
      return e;
    }).filter(Boolean);
    for (const e of validI18nUrlsForTransform) {
      if (!e._i18nTransform && !e.alternatives?.length) {
        const alternatives = (withoutPrefixPaths[e._pathWithoutPrefix] || []).map((u) => {
          const entries = [];
          if (u._locale.code === defaultLocale) {
            entries.push({
              href: u.loc,
              hreflang: "x-default"
            });
          }
          entries.push({
            href: u.loc,
            hreflang: u._locale._hreflang || defaultLocale
          });
          return entries;
        }).flat().filter(Boolean);
        if (alternatives.length)
          e.alternatives = alternatives;
      } else if (e._i18nTransform) {
        delete e._i18nTransform;
        if (hasDifferentDomains) {
          const defLocale = localeByCode.get(defaultLocale);
          e.alternatives = [
            {
              ...defLocale,
              code: "x-default"
            },
            ...autoI18n.locales.filter((l) => !!l.domain)
          ].map((locale) => {
            return {
              hreflang: locale._hreflang,
              href: joinURL(withHttps(locale.domain), e._pathWithoutPrefix)
            };
          });
        } else {
          const pageMatch = hasPages ? findPageMapping(e._pathWithoutPrefix, autoI18n.pages) : null;
          const pathSearch = e._path?.search || "";
          const pathWithoutPrefix = e._pathWithoutPrefix;
          for (const l of autoI18n.locales) {
            let loc = pathWithoutPrefix;
            if (pageMatch && pageMatch.mappings[l.code] !== void 0) {
              const customPath = pageMatch.mappings[l.code];
              if (customPath === false)
                continue;
              if (typeof customPath === "string") {
                loc = customPath[0] === "/" ? customPath : `/${customPath}`;
                loc = applyDynamicParams(loc, pageMatch.paramSegments);
                if (isPrefixStrategy || isPrefixExceptOrAndDefault && l.code !== defaultLocale)
                  loc = joinURL(`/${l.code}`, loc);
              }
            } else if (!hasDifferentDomains && !(isPrefixExceptOrAndDefault && l.code === defaultLocale)) {
              loc = joinURL(`/${l.code}`, pathWithoutPrefix);
            }
            const _sitemap = isI18nMapped ? l._sitemap : void 0;
            const alternatives = [];
            for (const locale of xDefaultAndLocales) {
              const code = locale.code === "x-default" ? defaultLocale : locale.code;
              const isDefault = locale.code === "x-default" || locale.code === defaultLocale;
              let href = pathWithoutPrefix;
              if (pageMatch && pageMatch.mappings[code] !== void 0) {
                const customPath = pageMatch.mappings[code];
                if (customPath === false)
                  continue;
                if (typeof customPath === "string") {
                  href = customPath[0] === "/" ? customPath : `/${customPath}`;
                  href = applyDynamicParams(href, pageMatch.paramSegments);
                  if (isPrefixStrategy || isPrefixExceptOrAndDefault && !isDefault)
                    href = joinURL("/", code, href);
                }
              } else if (isPrefixStrategy) {
                href = joinURL("/", code, pathWithoutPrefix);
              } else if (isPrefixExceptOrAndDefault && !isDefault) {
                href = joinURL("/", code, pathWithoutPrefix);
              }
              if (!filterPath(href))
                continue;
              alternatives.push({
                hreflang: locale._hreflang,
                href
              });
            }
            const { _index: _, ...rest } = e;
            const newEntry = preNormalizeEntry({
              _sitemap,
              ...rest,
              _key: `${_sitemap || ""}${loc || "/"}${pathSearch}`,
              _locale: l,
              loc,
              alternatives
            }, resolvers);
            if (e._locale.code === newEntry._locale.code) {
              _urls[e._index] = newEntry;
              e._index = void 0;
            } else {
              _urls.push(newEntry);
            }
          }
        }
      }
      if (isI18nMapped) {
        e._sitemap = e._sitemap || e._locale._sitemap;
        e._key = `${e._sitemap || ""}${e.loc || "/"}${e._path?.search || ""}`;
      }
      if (e._index)
        _urls[e._index] = e;
    }
  }
  return _urls;
}
async function buildSitemapUrls(sitemap, resolvers, runtimeConfig, nitro) {
  const {
    sitemaps,
    // enhancing
    autoI18n,
    isI18nMapped,
    isMultiSitemap,
    // sorting
    sortEntries,
    // chunking
    defaultSitemapsChunkSize
  } = runtimeConfig;
  const chunkSize = defaultSitemapsChunkSize || void 0;
  const chunkInfo = parseChunkInfo(sitemap.sitemapName, sitemaps, chunkSize);
  function maybeSort(urls2) {
    return sortEntries ? sortInPlace(urls2) : urls2;
  }
  function maybeSlice(urls2) {
    return sliceUrlsForChunk(urls2, sitemap.sitemapName, sitemaps, chunkSize);
  }
  if (autoI18n?.differentDomains) {
    const domain = autoI18n.locales.find((e) => e.language === sitemap.sitemapName || e.code === sitemap.sitemapName)?.domain;
    if (domain) {
      const _tester = resolvers.canonicalUrlResolver;
      resolvers.canonicalUrlResolver = (path) => resolveSitePath(path, {
        absolute: true,
        withBase: false,
        siteUrl: withHttps(domain),
        trailingSlash: _tester("/test/").endsWith("/"),
        base: "/"
      });
    }
  }
  let effectiveSitemap = sitemap;
  const baseSitemapName = chunkInfo.baseSitemapName;
  if (chunkInfo.isChunked && baseSitemapName !== sitemap.sitemapName && sitemaps[baseSitemapName]) {
    effectiveSitemap = sitemaps[baseSitemapName];
  }
  let sourcesInput = effectiveSitemap.includeAppSources ? [...await globalSitemapSources(), ...await childSitemapSources(effectiveSitemap)] : await childSitemapSources(effectiveSitemap);
  if (nitro && resolvers.event) {
    const ctx = {
      event: resolvers.event,
      sitemapName: baseSitemapName,
      sources: sourcesInput
    };
    await nitro.hooks.callHook("sitemap:sources", ctx);
    sourcesInput = ctx.sources;
  }
  const sources = await resolveSitemapSources(sourcesInput, resolvers.event);
  const failedSources = sources.filter((source) => source.error && source._isFailure).map((source) => ({
    url: typeof source.fetch === "string" ? source.fetch : source.fetch?.[0] || "unknown",
    error: source.error || "Unknown error"
  }));
  const resolvedCtx = {
    urls: sources.flatMap((s) => s.urls),
    sitemapName: sitemap.sitemapName,
    event: resolvers.event
  };
  await nitro?.hooks.callHook("sitemap:input", resolvedCtx);
  const enhancedUrls = resolveSitemapEntries(sitemap, resolvedCtx.urls, { autoI18n, isI18nMapped }, resolvers);
  if (isMultiSitemap) {
    const sitemapNames = Object.keys(sitemaps).filter((k) => k !== "index");
    const warnedSitemaps = nitro?._sitemapWarnedSitemaps || /* @__PURE__ */ new Set();
    for (const e of enhancedUrls) {
      if (typeof e._sitemap === "string" && !sitemapNames.includes(e._sitemap)) {
        if (!warnedSitemaps.has(e._sitemap)) {
          warnedSitemaps.add(e._sitemap);
          logger.error(`Sitemap \`${e._sitemap}\` not found in sitemap config. Available sitemaps: ${sitemapNames.join(", ")}. Entry \`${e.loc}\` will be omitted.`);
        }
      }
    }
    if (nitro) {
      nitro._sitemapWarnedSitemaps = warnedSitemaps;
    }
  }
  const filteredUrls = enhancedUrls.filter((e) => {
    if (e._sitemap === false)
      return false;
    if (isMultiSitemap && e._sitemap && sitemap.sitemapName) {
      if (sitemap._isChunking)
        return sitemap.sitemapName.startsWith(e._sitemap + "-");
      return e._sitemap === sitemap.sitemapName;
    }
    return true;
  });
  const sortedUrls = maybeSort(filteredUrls);
  const urls = maybeSlice(sortedUrls);
  return { urls, failedSources };
}

function useNitroUrlResolvers(e) {
  const canonicalQuery = getQuery$1(e).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const siteConfig = getSiteConfig(e);
  return {
    event: e,
    fixSlashes: (path) => fixSlashes(siteConfig.trailingSlash, path),
    // we need these as they depend on the nitro event
    canonicalUrlResolver: createSitePathResolver(e, {
      canonical: isShowingCanonical || false,
      absolute: true,
      withBase: true
    }),
    relativeBaseUrlResolver: createSitePathResolver(e, { absolute: false, withBase: true })
  };
}
async function buildSitemapXml(event, definition, resolvers, runtimeConfig) {
  const { sitemapName } = definition;
  const nitro = useNitroApp();
  const { urls: sitemapUrls, failedSources } = await buildSitemapUrls(definition, resolvers, runtimeConfig, nitro);
  const routeRuleMatcher = createNitroRouteRuleMatcher();
  const { autoI18n } = runtimeConfig;
  let validCount = 0;
  for (let i = 0; i < sitemapUrls.length; i++) {
    const u = sitemapUrls[i];
    const path = u._path?.pathname || u.loc;
    let routeRules = routeRuleMatcher(path);
    if (autoI18n?.locales && autoI18n?.strategy !== "no_prefix") {
      const match = splitForLocales(path, autoI18n.locales.map((l) => l.code));
      const pathWithoutPrefix = match[1];
      if (pathWithoutPrefix && pathWithoutPrefix !== path)
        routeRules = defu$1(routeRules, routeRuleMatcher(pathWithoutPrefix));
    }
    if (routeRules.sitemap === false)
      continue;
    if (typeof routeRules.robots !== "undefined" && !routeRules.robots)
      continue;
    const hasRobotsDisabled = Object.entries(routeRules.headers || {}).some(([name, value]) => name.toLowerCase() === "x-robots-tag" && value.toLowerCase().includes("noindex"));
    if (routeRules.redirect || hasRobotsDisabled)
      continue;
    sitemapUrls[validCount++] = routeRules.sitemap ? defu$1(u, routeRules.sitemap) : u;
  }
  sitemapUrls.length = validCount;
  if (validCount === 0 && sitemapUrls.length > 0) {
    logger.warn(`Sitemap had ${sitemapUrls.length} that were all filtered out. This may be due to a robots rules blocking these URLs from indexing. Check your /** route rules or robots.txt configuration.`);
  }
  const locSize = sitemapUrls.length;
  const resolvedCtx = {
    urls: sitemapUrls,
    sitemapName,
    event
  };
  await nitro.hooks.callHook("sitemap:resolved", resolvedCtx);
  if (resolvedCtx.urls.length !== locSize) {
    resolvedCtx.urls = resolvedCtx.urls.map((e) => preNormalizeEntry(e, resolvers));
  }
  const maybeSort = (urls2) => runtimeConfig.sortEntries ? sortInPlace(urls2) : urls2;
  const defaults = definition.defaults || {};
  const normalizedPreDedupe = resolvedCtx.urls.map((e) => normaliseEntry(e, defaults, resolvers));
  const urls = maybeSort(mergeOnKey(normalizedPreDedupe, "_key").map((e) => normaliseEntry(e, defaults, resolvers)));
  if (definition._isChunking && definition.sitemapName.includes("-")) {
    const parts = definition.sitemapName.split("-");
    const lastPart = parts.pop();
    if (!Number.isNaN(Number(lastPart))) {
      const chunkIndex = Number(lastPart);
      const baseSitemapName = parts.join("-");
      if (urls.length === 0 && chunkIndex > 0) {
        throw createError({
          statusCode: 404,
          message: `Sitemap chunk ${chunkIndex} for "${baseSitemapName}" does not exist.`
        });
      }
    }
  }
  const errorInfo = failedSources.length > 0 ? {
    messages: failedSources.map((f) => f.error),
    urls: failedSources.map((f) => f.url)
  } : void 0;
  const sitemap = urlsToXml(urls, resolvers, runtimeConfig, errorInfo);
  const ctx = { sitemap, sitemapName, event };
  await nitro.hooks.callHook("sitemap:output", ctx);
  return ctx.sitemap;
}
defineCachedFunction(
  buildSitemapXml,
  {
    name: "sitemap:xml",
    group: "sitemap",
    maxAge: 60 * 10,
    // Default 10 minutes
    base: "sitemap",
    // Use the sitemap storage
    getKey: (event, definition) => {
      const host = getHeader(event, "host") || getHeader(event, "x-forwarded-host") || "";
      const proto = getHeader(event, "x-forwarded-proto") || "https";
      const sitemapName = definition.sitemapName || "default";
      return `${sitemapName}-${proto}-${host}`;
    },
    swr: true
    // Enable stale-while-revalidate
  }
);
async function createSitemap(event, definition, runtimeConfig) {
  const resolvers = useNitroUrlResolvers(event);
  const xml = await buildSitemapXml(event, definition, resolvers, runtimeConfig);
  setHeader(event, "Content-Type", "text/xml; charset=UTF-8");
  if (runtimeConfig.cacheMaxAgeSeconds) {
    setHeader(event, "Cache-Control", `public, max-age=${runtimeConfig.cacheMaxAgeSeconds}, s-maxage=${runtimeConfig.cacheMaxAgeSeconds}, stale-while-revalidate=3600`);
    const now = /* @__PURE__ */ new Date();
    setHeader(event, "X-Sitemap-Generated", now.toISOString());
    setHeader(event, "X-Sitemap-Cache-Duration", `${runtimeConfig.cacheMaxAgeSeconds}s`);
    const expiryTime = new Date(now.getTime() + runtimeConfig.cacheMaxAgeSeconds * 1e3);
    setHeader(event, "X-Sitemap-Cache-Expires", expiryTime.toISOString());
    const remainingSeconds = Math.floor((expiryTime.getTime() - now.getTime()) / 1e3);
    setHeader(event, "X-Sitemap-Cache-Remaining", `${remainingSeconds}s`);
  } else {
    setHeader(event, "Cache-Control", `no-cache, no-store`);
  }
  event.context._isSitemap = true;
  return xml;
}

defineCachedFunction(
  async (event, resolvers, runtimeConfig, nitro) => {
    return buildSitemapIndexInternal(resolvers, runtimeConfig, nitro);
  },
  {
    name: "sitemap:index",
    group: "sitemap",
    maxAge: 60 * 10,
    // 10 minutes default
    base: "sitemap",
    // Use the sitemap storage
    getKey: (event) => {
      const host = getHeader(event, "host") || getHeader(event, "x-forwarded-host") || "";
      const proto = getHeader(event, "x-forwarded-proto") || "https";
      return `sitemap-index-${proto}-${host}`;
    },
    swr: true
    // Enable stale-while-revalidate
  }
);
async function buildSitemapIndexInternal(resolvers, runtimeConfig, nitro) {
  const {
    sitemaps,
    // enhancing
    autoLastmod,
    // chunking
    defaultSitemapsChunkSize,
    autoI18n,
    isI18nMapped,
    sortEntries,
    sitemapsPathPrefix
  } = runtimeConfig;
  if (!sitemaps)
    throw new Error("Attempting to build a sitemap index without required `sitemaps` configuration.");
  function maybeSort(urls) {
    return sortEntries ? sortInPlace(urls) : urls;
  }
  const chunks = {};
  const allFailedSources = [];
  for (const sitemapName in sitemaps) {
    if (sitemapName === "index" || sitemapName === "chunks") continue;
    const sitemapConfig = sitemaps[sitemapName];
    if (sitemapConfig.chunks || sitemapConfig._isChunking) {
      sitemapConfig._isChunking = true;
      sitemapConfig._chunkSize = typeof sitemapConfig.chunks === "number" ? sitemapConfig.chunks : sitemapConfig.chunkSize || defaultSitemapsChunkSize || 1e3;
    } else {
      chunks[sitemapName] = chunks[sitemapName] || { urls: [] };
    }
  }
  if (typeof sitemaps.chunks !== "undefined") {
    const sitemap = sitemaps.chunks;
    let sourcesInput = await globalSitemapSources();
    if (nitro && resolvers.event) {
      const ctx = {
        event: resolvers.event,
        sitemapName: sitemap.sitemapName,
        sources: sourcesInput
      };
      await nitro.hooks.callHook("sitemap:sources", ctx);
      sourcesInput = ctx.sources;
    }
    const sources = await resolveSitemapSources(sourcesInput, resolvers.event);
    const failedSources = sources.filter((source) => source.error && source._isFailure).map((source) => ({
      url: typeof source.fetch === "string" ? source.fetch : source.fetch?.[0] || "unknown",
      error: source.error || "Unknown error"
    }));
    allFailedSources.push(...failedSources);
    const resolvedCtx = {
      urls: sources.flatMap((s) => s.urls),
      sitemapName: sitemap.sitemapName,
      event: resolvers.event
    };
    await nitro?.hooks.callHook("sitemap:input", resolvedCtx);
    const normalisedUrls = resolveSitemapEntries(sitemap, resolvedCtx.urls, { autoI18n, isI18nMapped }, resolvers);
    const enhancedUrls = normalisedUrls.map((e) => defu$1(e, sitemap.defaults));
    const sortedUrls = maybeSort(enhancedUrls);
    sortedUrls.forEach((url, i) => {
      const chunkIndex = Math.floor(i / defaultSitemapsChunkSize);
      chunks[chunkIndex] = chunks[chunkIndex] || { urls: [] };
      chunks[chunkIndex].urls.push(url);
    });
  }
  const entries = [];
  for (const name in chunks) {
    const sitemap = chunks[name];
    const entry = {
      _sitemapName: name,
      sitemap: resolvers.canonicalUrlResolver(joinURL(sitemapsPathPrefix || "", `/${name}.xml`))
    };
    let lastmod = sitemap.urls.filter((a) => !!a?.lastmod).map((a) => typeof a.lastmod === "string" ? new Date(a.lastmod) : a.lastmod).sort((a, b) => (b?.getTime() || 0) - (a?.getTime() || 0))?.[0];
    if (!lastmod && autoLastmod)
      lastmod = /* @__PURE__ */ new Date();
    if (lastmod)
      entry.lastmod = normaliseDate(lastmod);
    entries.push(entry);
  }
  for (const sitemapName in sitemaps) {
    const sitemapConfig = sitemaps[sitemapName];
    if (sitemapName !== "index" && sitemapConfig._isChunking) {
      const chunkSize = sitemapConfig._chunkSize || defaultSitemapsChunkSize || 1e3;
      let sourcesInput = sitemapConfig.includeAppSources ? [...await globalSitemapSources(), ...await childSitemapSources(sitemapConfig)] : await childSitemapSources(sitemapConfig);
      if (nitro && resolvers.event) {
        const ctx = {
          event: resolvers.event,
          sitemapName: sitemapConfig.sitemapName,
          sources: sourcesInput
        };
        await nitro.hooks.callHook("sitemap:sources", ctx);
        sourcesInput = ctx.sources;
      }
      const sources = await resolveSitemapSources(sourcesInput, resolvers.event);
      const failedSources = sources.filter((source) => source.error && source._isFailure).map((source) => ({
        url: typeof source.fetch === "string" ? source.fetch : source.fetch?.[0] || "unknown",
        error: source.error || "Unknown error"
      }));
      allFailedSources.push(...failedSources);
      const resolvedCtx = {
        urls: sources.flatMap((s) => s.urls),
        sitemapName: sitemapConfig.sitemapName,
        event: resolvers.event
      };
      await nitro?.hooks.callHook("sitemap:input", resolvedCtx);
      const normalisedUrls = resolveSitemapEntries(sitemapConfig, resolvedCtx.urls, { autoI18n, isI18nMapped }, resolvers);
      const totalUrls = normalisedUrls.length;
      const chunkCount = Math.ceil(totalUrls / chunkSize);
      sitemapConfig._chunkCount = chunkCount;
      for (let i = 0; i < chunkCount; i++) {
        const chunkName = `${sitemapName}-${i}`;
        const entry = {
          _sitemapName: chunkName,
          sitemap: resolvers.canonicalUrlResolver(joinURL(sitemapsPathPrefix || "", `/${chunkName}.xml`))
        };
        const chunkUrls = normalisedUrls.slice(i * chunkSize, (i + 1) * chunkSize);
        let lastmod = chunkUrls.filter((a) => !!a?.lastmod).map((a) => typeof a.lastmod === "string" ? new Date(a.lastmod) : a.lastmod).sort((a, b) => (b?.getTime() || 0) - (a?.getTime() || 0))?.[0];
        if (!lastmod && autoLastmod)
          lastmod = /* @__PURE__ */ new Date();
        if (lastmod)
          entry.lastmod = normaliseDate(lastmod);
        entries.push(entry);
      }
    }
  }
  if (sitemaps.index) {
    entries.push(...sitemaps.index.sitemaps.map((entry) => {
      return typeof entry === "string" ? { sitemap: entry } : entry;
    }));
  }
  return { entries, failedSources: allFailedSources };
}
function urlsToIndexXml(sitemaps, resolvers, { version, xsl, credits, minify }, errorInfo) {
  const sitemapXml = sitemaps.map((e) => [
    "    <sitemap>",
    `        <loc>${escapeValueForXml(e.sitemap)}</loc>`,
    // lastmod is optional
    e.lastmod ? `        <lastmod>${escapeValueForXml(e.lastmod)}</lastmod>` : false,
    "    </sitemap>"
  ].filter(Boolean).join("\n")).join("\n");
  const xmlParts = [
    '<?xml version="1.0" encoding="UTF-8"?>'
  ];
  if (xsl) {
    let relativeBaseUrl = resolvers.relativeBaseUrlResolver?.(xsl) ?? xsl;
    if (errorInfo && errorInfo.messages.length > 0) {
      relativeBaseUrl = withQuery(relativeBaseUrl, {
        errors: "true",
        error_messages: errorInfo.messages,
        error_urls: errorInfo.urls
      });
    }
    xmlParts.push(`<?xml-stylesheet type="text/xsl" href="${escapeValueForXml(relativeBaseUrl)}"?>`);
  }
  xmlParts.push(
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    sitemapXml,
    "</sitemapindex>"
  );
  if (credits) {
    xmlParts.push(`<!-- XML Sitemap Index generated by @nuxtjs/sitemap v${version} at ${(/* @__PURE__ */ new Date()).toISOString()} -->`);
  }
  return minify ? xmlParts.join("").replace(/(?<!<[^>]*)\s(?![^<]*>)/g, "") : xmlParts.join("\n");
}
async function buildSitemapIndex(resolvers, runtimeConfig, nitro) {
  return buildSitemapIndexInternal(resolvers, runtimeConfig, nitro);
}

async function sitemapXmlEventHandler(e) {
  const runtimeConfig = useSitemapRuntimeConfig();
  const { sitemaps } = runtimeConfig;
  if ("index" in sitemaps)
    return sendRedirect(e, withBase("/sitemap_index.xml", useRuntimeConfig().app.baseURL), 302 );
  return createSitemap(e, Object.values(sitemaps)[0], runtimeConfig);
}
async function sitemapIndexXmlEventHandler(e) {
  const runtimeConfig = useSitemapRuntimeConfig();
  const nitro = useNitroApp();
  const resolvers = useNitroUrlResolvers(e);
  const { entries: sitemaps, failedSources } = await buildSitemapIndex(resolvers, runtimeConfig, nitro);
  const indexResolvedCtx = { sitemaps, event: e };
  await nitro.hooks.callHook("sitemap:index-resolved", indexResolvedCtx);
  const errorInfo = failedSources.length > 0 ? { messages: failedSources.map((f) => f.error), urls: failedSources.map((f) => f.url) } : void 0;
  const output = urlsToIndexXml(indexResolvedCtx.sitemaps, resolvers, runtimeConfig, errorInfo);
  const ctx = { sitemap: output, sitemapName: "sitemap", event: e };
  await nitro.hooks.callHook("sitemap:output", ctx);
  setHeader(e, "Content-Type", "text/xml; charset=UTF-8");
  if (runtimeConfig.cacheMaxAgeSeconds) {
    setHeader(e, "Cache-Control", `public, max-age=${runtimeConfig.cacheMaxAgeSeconds}, s-maxage=${runtimeConfig.cacheMaxAgeSeconds}, stale-while-revalidate=3600`);
    const now = /* @__PURE__ */ new Date();
    setHeader(e, "X-Sitemap-Generated", now.toISOString());
    setHeader(e, "X-Sitemap-Cache-Duration", `${runtimeConfig.cacheMaxAgeSeconds}s`);
    const expiryTime = new Date(now.getTime() + runtimeConfig.cacheMaxAgeSeconds * 1e3);
    setHeader(e, "X-Sitemap-Cache-Expires", expiryTime.toISOString());
    const remainingSeconds = Math.floor((expiryTime.getTime() - now.getTime()) / 1e3);
    setHeader(e, "X-Sitemap-Cache-Remaining", `${remainingSeconds}s`);
  } else {
    setHeader(e, "Cache-Control", `no-cache, no-store`);
  }
  return ctx.sitemap;
}
async function sitemapChildXmlEventHandler(e) {
  if (!e.path.endsWith(".xml"))
    return;
  const runtimeConfig = useSitemapRuntimeConfig(e);
  const { sitemaps } = runtimeConfig;
  let sitemapName = getRouterParam(e, "sitemap");
  if (!sitemapName) {
    const path = e.path;
    const match = path.match(/(?:\/__sitemap__\/)?(.+)\.xml$/);
    if (match)
      sitemapName = match[1];
  }
  if (!sitemapName)
    throw createError({ statusCode: 400, message: "Invalid sitemap request" });
  sitemapName = sitemapName.replace(/\.xml$/, "");
  sitemapName = withLeadingSlash(sitemapName);
  if (sitemapName.startsWith("/__sitemap__/"))
    sitemapName = sitemapName.replace("/__sitemap__/", "/");
  if (runtimeConfig.sitemapsPathPrefix) {
    const prefix = withLeadingSlash(runtimeConfig.sitemapsPathPrefix);
    if (sitemapName.startsWith(prefix))
      sitemapName = sitemapName.replace(prefix, "/");
  }
  sitemapName = withoutLeadingSlash(withoutTrailingSlash(sitemapName));
  const chunkInfo = parseChunkInfo(sitemapName, sitemaps, runtimeConfig.defaultSitemapsChunkSize);
  const isAutoChunked = typeof sitemaps.chunks !== "undefined" && !Number.isNaN(Number(sitemapName));
  const sitemapExists = sitemapName in sitemaps || chunkInfo.baseSitemapName in sitemaps || isAutoChunked;
  if (!sitemapExists)
    throw createError({ statusCode: 404, message: `Sitemap "${sitemapName}" not found.` });
  if (chunkInfo.isChunked && chunkInfo.chunkIndex !== void 0) {
    const baseSitemap = sitemaps[chunkInfo.baseSitemapName];
    if (baseSitemap && !baseSitemap.chunks && !baseSitemap._isChunking)
      throw createError({ statusCode: 404, message: `Sitemap "${chunkInfo.baseSitemapName}" does not support chunking.` });
    if (baseSitemap?._chunkCount !== void 0 && chunkInfo.chunkIndex >= baseSitemap._chunkCount)
      throw createError({ statusCode: 404, message: `Chunk ${chunkInfo.chunkIndex} does not exist for sitemap "${chunkInfo.baseSitemapName}".` });
  }
  const sitemapConfig = getSitemapConfig(sitemapName, sitemaps, runtimeConfig.defaultSitemapsChunkSize || void 0);
  return createSitemap(e, sitemapConfig, runtimeConfig);
}

const _1FM8Uu = defineEventHandler(sitemapXmlEventHandler);

const storage = prefixStorage(useStorage(), "i18n");
function cachedFunctionI18n(fn, opts) {
  opts = { maxAge: 1, ...opts };
  const pending = {};
  async function get(key, resolver) {
    const isPending = pending[key];
    if (!isPending) {
      pending[key] = Promise.resolve(resolver());
    }
    try {
      return await pending[key];
    } finally {
      delete pending[key];
    }
  }
  return async (...args) => {
    const key = [opts.name, opts.getKey(...args)].join(":").replace(/:\/$/, ":index");
    const maxAge = opts.maxAge ?? 1;
    const isCacheable = !opts.shouldBypassCache(...args) && maxAge >= 0;
    const cache = isCacheable && await storage.getItemRaw(key);
    if (!cache || cache.ttl < Date.now()) {
      pending[key] = Promise.resolve(fn(...args));
      const value = await get(key, () => fn(...args));
      if (isCacheable) {
        await storage.setItemRaw(key, { ttl: Date.now() + maxAge * 1e3, value, mtime: Date.now() });
      }
      return value;
    }
    return cache.value;
  };
}

const _getMessages = async (locale) => {
  return { [locale]: await getLocaleMessagesMerged(locale, localeLoaders[locale]) };
};
cachedFunctionI18n(_getMessages, {
  name: "messages",
  maxAge: -1 ,
  getKey: (locale) => locale,
  shouldBypassCache: (locale) => !isLocaleCacheable(locale)
});
const getMessages = _getMessages ;
const _getMergedMessages = async (locale, fallbackLocales) => {
  const merged = {};
  try {
    if (fallbackLocales.length > 0) {
      const messages = await Promise.all(fallbackLocales.map(getMessages));
      for (const message2 of messages) {
        deepCopy(message2, merged);
      }
    }
    const message = await getMessages(locale);
    deepCopy(message, merged);
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
const getMergedMessages = cachedFunctionI18n(_getMergedMessages, {
  name: "merged-single",
  maxAge: -1 ,
  getKey: (locale, fallbackLocales) => `${locale}-[${[...new Set(fallbackLocales)].sort().join("-")}]`,
  shouldBypassCache: (locale, fallbackLocales) => !isLocaleWithFallbacksCacheable(locale, fallbackLocales)
});
const _getAllMergedMessages = async (locales) => {
  const merged = {};
  try {
    const messages = await Promise.all(locales.map(getMessages));
    for (const message of messages) {
      deepCopy(message, merged);
    }
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
cachedFunctionI18n(_getAllMergedMessages, {
  name: "merged-all",
  maxAge: -1 ,
  getKey: (locales) => locales.join("-"),
  shouldBypassCache: (locales) => !locales.every((locale) => isLocaleCacheable(locale))
});

const _messagesHandler = defineEventHandler(async (event) => {
  const locale = getRouterParam(event, "locale");
  if (!locale) {
    throw createError({ status: 400, message: "Locale not specified." });
  }
  const ctx = useI18nContext(event);
  if (ctx.localeConfigs && locale in ctx.localeConfigs === false) {
    throw createError({ status: 404, message: `Locale '${locale}' not found.` });
  }
  const messages = await getMergedMessages(locale, ctx.localeConfigs?.[locale]?.fallbacks ?? []);
  deepCopy(messages, ctx.messages);
  return ctx.messages;
});
const _cachedMessageLoader = defineCachedFunction(_messagesHandler, {
  name: "i18n:messages-internal",
  maxAge: -1 ,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-"),
  async shouldBypassCache(event) {
    const locale = getRouterParam(event, "locale");
    if (locale == null) {
      return false;
    }
    const ctx = tryUseI18nContext(event) || await initializeI18nContext(event);
    return !ctx.localeConfigs?.[locale]?.cacheable;
  }
});
defineCachedEventHandler(_cachedMessageLoader, {
  name: "i18n:messages",
  maxAge: -1 ,
  swr: false,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-")
});
const _FD4XZ5 = _messagesHandler ;

const _kqn2KG = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_3QEHK6 = () => Promise.resolve().then(function () { return archives$1; });
const _lazy_VC8XV2 = () => Promise.resolve().then(function () { return _id_$1; });
const _lazy_qPqm8Z = () => Promise.resolve().then(function () { return filter$1; });
const _lazy_ihvkrF = () => Promise.resolve().then(function () { return articles$1; });
const _lazy_39yEXt = () => Promise.resolve().then(function () { return categories$1; });
const _lazy_oHpTiI = () => Promise.resolve().then(function () { return search$1; });
const _lazy_cGTLZZ = () => Promise.resolve().then(function () { return tags$1; });
const _lazy_LdHHQL = () => Promise.resolve().then(function () { return renderer$1; });
const _lazy_j7Jt5i = () => Promise.resolve().then(function () { return sitemap_index_xml$1; });
const _lazy_EDEleE = () => Promise.resolve().then(function () { return _sitemap__xml$1; });

const handlers = [
  { route: '', handler: _DSquQr, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _onwcmP, lazy: false, middleware: true, method: undefined },
  { route: '/api/archives', handler: _lazy_3QEHK6, lazy: true, middleware: false, method: undefined },
  { route: '/api/article/:id', handler: _lazy_VC8XV2, lazy: true, middleware: false, method: undefined },
  { route: '/api/article/filter', handler: _lazy_qPqm8Z, lazy: true, middleware: false, method: undefined },
  { route: '/api/articles', handler: _lazy_ihvkrF, lazy: true, middleware: false, method: undefined },
  { route: '/api/categories', handler: _lazy_39yEXt, lazy: true, middleware: false, method: undefined },
  { route: '/api/search', handler: _lazy_oHpTiI, lazy: true, middleware: false, method: undefined },
  { route: '/api/tags', handler: _lazy_cGTLZZ, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_LdHHQL, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _Tsly9Z, lazy: false, middleware: true, method: undefined },
  { route: '/__site-config__/debug.json', handler: _Dbdxcg, lazy: false, middleware: false, method: undefined },
  { route: '/sitemap_index.xml', handler: _lazy_j7Jt5i, lazy: true, middleware: false, method: undefined },
  { route: '/__sitemap__/**:sitemap', handler: _lazy_EDEleE, lazy: true, middleware: false, method: undefined },
  { route: '/__sitemap__/debug.json', handler: _Zbz_W6, lazy: false, middleware: false, method: undefined },
  { route: '/__sitemap__/**:sitemap', handler: _lazy_EDEleE, lazy: true, middleware: true, method: undefined },
  { route: '/__sitemap__/style.xsl', handler: _yq8c9N, lazy: false, middleware: false, method: undefined },
  { route: '/sitemap.xml', handler: _1FM8Uu, lazy: false, middleware: false, method: undefined },
  { route: '/_i18n/:hash/:locale/messages.json', handler: _FD4XZ5, lazy: false, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _kqn2KG, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_LdHHQL, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto.webcrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = {
	"appName": "Nuxt",
	"status": 500,
	"statusText": "Internal server error",
	"description": "This page is temporarily unavailable.",
	"refresh": "Refresh this page"
};
const template$1 = (messages) => {
	messages = {
		..._messages,
		...messages
	};
	return "<!DOCTYPE html><html lang=\"en\"><head><title>" + escapeHtml(messages.status) + " - " + escapeHtml(messages.statusText) + " | " + escapeHtml(messages.appName) + "</title><meta charset=\"utf-8\"><meta content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0\" name=\"viewport\"><script>!function(){const e=document.createElement(\"link\").relList;if(!(e&&e.supports&&e.supports(\"modulepreload\"))){for(const e of document.querySelectorAll('link[rel=\"modulepreload\"]'))r(e);new MutationObserver(e=>{for(const o of e)if(\"childList\"===o.type)for(const e of o.addedNodes)\"LINK\"===e.tagName&&\"modulepreload\"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),\"use-credentials\"===e.crossOrigin?r.credentials=\"include\":\"anonymous\"===e.crossOrigin?r.credentials=\"omit\":r.credentials=\"same-origin\",r}(e);fetch(e.href,r)}}();<\/script><style>*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:\"\"}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.grid{display:grid}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.text-center{text-align:center}.text-\\[80px\\]{font-size:80px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-\\[\\#020420\\]{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.text-\\[\\#64748B\\]{--un-text-opacity:1;color:rgb(100 116 139/var(--un-text-opacity))}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-\\[\\#020420\\]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(min-width:640px){.sm\\:text-\\[110px\\]{font-size:110px}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}</style></head><body class=\"antialiased bg-white dark:bg-[#020420] dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-[#020420] tracking-wide\"><div class=\"max-w-520px text-center\"><h1 class=\"font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]\">" + escapeHtml(messages.status) + "</h1><h2 class=\"font-semibold mb-2 sm:text-3xl text-2xl\">" + escapeHtml(messages.statusText) + "</h2><p class=\"mb-4 px-2 text-[#64748B] text-md\">" + escapeHtml(messages.description) + "</p></div></body></html>";
};

const error500 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template$1
}, Symbol.toStringTag, { value: 'Module' }));

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template
}, Symbol.toStringTag, { value: 'Module' }));

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: styles
}, Symbol.toStringTag, { value: 'Module' }));

const sources$1 = [
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/",
                "_sitemap": "zh-CN",
                "alternatives": [
                    {
                        "hreflang": "zh-CN",
                        "href": "/"
                    },
                    {
                        "hreflang": "en-US",
                        "href": "/en"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/en",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "zh-CN",
                        "href": "/"
                    },
                    {
                        "hreflang": "en-US",
                        "href": "/en"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/search",
                "_sitemap": "zh-CN",
                "alternatives": [
                    {
                        "hreflang": "zh-CN",
                        "href": "/search"
                    },
                    {
                        "hreflang": "en-US",
                        "href": "/en/search"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/search"
                    }
                ]
            },
            {
                "loc": "/en/search",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "zh-CN",
                        "href": "/search"
                    },
                    {
                        "hreflang": "en-US",
                        "href": "/en/search"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/search"
                    }
                ]
            },
            {
                "loc": "/tags",
                "_sitemap": "zh-CN",
                "alternatives": [
                    {
                        "hreflang": "zh-CN",
                        "href": "/tags"
                    },
                    {
                        "hreflang": "en-US",
                        "href": "/en/tags"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/tags"
                    }
                ]
            },
            {
                "loc": "/en/tags",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "zh-CN",
                        "href": "/tags"
                    },
                    {
                        "hreflang": "en-US",
                        "href": "/en/tags"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/tags"
                    }
                ]
            },
            {
                "loc": "/archives",
                "_sitemap": "zh-CN",
                "alternatives": [
                    {
                        "hreflang": "zh-CN",
                        "href": "/archives"
                    },
                    {
                        "hreflang": "en-US",
                        "href": "/en/archives"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/archives"
                    }
                ]
            },
            {
                "loc": "/en/archives",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "zh-CN",
                        "href": "/archives"
                    },
                    {
                        "hreflang": "en-US",
                        "href": "/en/archives"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/archives"
                    }
                ]
            },
            {
                "loc": "/categories",
                "_sitemap": "zh-CN",
                "alternatives": [
                    {
                        "hreflang": "zh-CN",
                        "href": "/categories"
                    },
                    {
                        "hreflang": "en-US",
                        "href": "/en/categories"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/categories"
                    }
                ]
            },
            {
                "loc": "/en/categories",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "zh-CN",
                        "href": "/categories"
                    },
                    {
                        "hreflang": "en-US",
                        "href": "/en/categories"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/categories"
                    }
                ]
            }
        ],
        "sourceType": "app"
    }
];

const globalSources = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  sources: sources$1
}, Symbol.toStringTag, { value: 'Module' }));

const sources = {
    "zh-CN": [],
    "en-US": []
};

const childSources = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  sources: sources
}, Symbol.toStringTag, { value: 'Module' }));

const archives = eventHandler(async (event) => {
  var _a, _b;
  const ctxLang = (_b = (_a = event.context) == null ? void 0 : _a.i18n) == null ? void 0 : _b.locale;
  const articles = await getAllArticlesMeta(ctxLang);
  const archiveMap = {};
  articles.forEach((article) => {
    const dateStr = article.frontmatter.date;
    if (dateStr === "\u672A\u53D1\u5E03") return;
    const date = new Date(dateStr);
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const monthName = `${date.getMonth() + 1}\u6708`;
    const key = `${year}-${month}`;
    if (!archiveMap[key]) {
      archiveMap[key] = { year, month, monthName, articles: [] };
    }
    archiveMap[key].articles.push(article);
  });
  const archives = Object.values(archiveMap).sort((a, b) => {
    return `${b.year}${b.month}`.localeCompare(`${a.year}${a.month}`);
  });
  return {
    code: 200,
    data: archives
  };
});

const archives$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: archives
}, Symbol.toStringTag, { value: 'Module' }));

const _id_ = eventHandler(async (event) => {
  var _a, _b, _c;
  const params = Object.assign({}, event.context.params);
  const id = ((_a = params.id) == null ? void 0 : _a.trim()) || "";
  if (!id) {
    return { code: 400, message: "\u7F3A\u5C11\u6587\u7AE0ID" };
  }
  try {
    const fs = await import('node:fs/promises');
    const path = await import('node:path');
    const rootDir = process.cwd();
    const contentDir = path.resolve(rootDir, "content", "articles");
    const filePath = path.resolve(contentDir, `${id}.md`);
    const q = getQuery$1(event);
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

const _id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _id_
}, Symbol.toStringTag, { value: 'Module' }));

const filter = eventHandler(async (event) => {
  var _a, _b;
  const query = getQuery$1(event);
  const tag = query.tag;
  const category = query.category;
  const year = query.year;
  const month = query.month;
  const ctxLang = (_b = (_a = event.context) == null ? void 0 : _a.i18n) == null ? void 0 : _b.locale;
  let articles = await getAllArticlesMeta(ctxLang);
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

const filter$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: filter
}, Symbol.toStringTag, { value: 'Module' }));

const articles = eventHandler(async (event) => {
  var _a, _b;
  try {
    const query = getQuery$1(event);
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

const articles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: articles
}, Symbol.toStringTag, { value: 'Module' }));

const categories = eventHandler(async (event) => {
  var _a, _b;
  const ctxLang = (_b = (_a = event.context) == null ? void 0 : _a.i18n) == null ? void 0 : _b.locale;
  const articles = await getAllArticlesMeta(ctxLang);
  const categoryMap = {};
  articles.forEach((article) => {
    categoryMap[article.frontmatter.category] = (categoryMap[article.frontmatter.category] || 0) + 1;
  });
  const categories = Object.entries(categoryMap).map(([name, count]) => ({
    name,
    count
  })).sort((a, b) => b.count - a.count);
  return {
    code: 200,
    data: categories
  };
});

const categories$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: categories
}, Symbol.toStringTag, { value: 'Module' }));

const search = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const query = getQuery$1(event);
  const searchTerm = (_a = query.q) == null ? void 0 : _a.trim();
  if (!searchTerm) {
    return {
      code: 400,
      message: "\u641C\u7D22\u5173\u952E\u8BCD\u4E0D\u80FD\u4E3A\u7A7A",
      data: []
    };
  }
  try {
    const ctxLang = (_c = (_b = event.context) == null ? void 0 : _b.i18n) == null ? void 0 : _c.locale;
    const allArticles = await getAllArticlesMeta(ctxLang);
    const searchResults = allArticles.filter((article) => {
      var _a2, _b2, _c2, _d, _e, _f, _g;
      const title = ((_b2 = (_a2 = article.frontmatter) == null ? void 0 : _a2.title) == null ? void 0 : _b2.toLowerCase()) || "";
      const description = ((_d = (_c2 = article.frontmatter) == null ? void 0 : _c2.description) == null ? void 0 : _d.toLowerCase()) || "";
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

const search$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: search
}, Symbol.toStringTag, { value: 'Module' }));

const tags = eventHandler(async (event) => {
  var _a, _b;
  const ctxLang = (_b = (_a = event.context) == null ? void 0 : _a.i18n) == null ? void 0 : _b.locale;
  const articles = await getAllArticlesMeta(ctxLang);
  const tagMap = {};
  articles.forEach((article) => {
    article.frontmatter.tags.forEach((tag) => {
      tagMap[tag] = (tagMap[tag] || 0) + 1;
    });
  });
  const tags = Object.entries(tagMap).map(([name, count]) => ({
    name,
    count
  })).sort((a, b) => b.count - a.count);
  return {
    code: 200,
    data: tags
  };
});

const tags$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: tags
}, Symbol.toStringTag, { value: 'Module' }));

function renderPayloadResponse(ssrContext) {
	return {
		body: stringify(splitPayload(ssrContext).payload, ssrContext["~payloadReducers"]) ,
		statusCode: getResponseStatus(ssrContext.event),
		statusMessage: getResponseStatusText(ssrContext.event),
		headers: {
			"content-type": "application/json;charset=utf-8" ,
			"x-powered-by": "Nuxt"
		}
	};
}
function renderPayloadJsonScript(opts) {
	const contents = opts.data ? stringify(opts.data, opts.ssrContext["~payloadReducers"]) : "";
	const payload = {
		"type": "application/json",
		"innerHTML": contents,
		"data-nuxt-data": appId,
		"data-ssr": !(opts.ssrContext.noSSR)
	};
	{
		payload.id = "__NUXT_DATA__";
	}
	if (opts.src) {
		payload["data-src"] = opts.src;
	}
	const config = uneval(opts.ssrContext.config);
	return [payload, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}` }];
}
function splitPayload(ssrContext) {
	const { data, prerenderedAt, ...initial } = ssrContext.payload;
	return {
		initial: {
			...initial,
			prerenderedAt
		},
		payload: {
			data,
			prerenderedAt
		}
	};
}

const renderSSRHeadOptions = {"omitLineBreaks":true};

// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__buildAssetsURL = buildAssetsURL;
// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const PAYLOAD_FILENAME = "_payload.json" ;
const renderer = defineRenderHandler(async (event) => {
	const nitroApp = useNitroApp();
	// Whether we're rendering an error page
	const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
	if (ssrError && !("__unenv__" in event.node.req)) {
		throw createError({
			status: 404,
			statusText: "Page Not Found: /__nuxt_error",
			message: "Page Not Found: /__nuxt_error"
		});
	}
	// Initialize ssr context
	const ssrContext = createSSRContext(event);
	// needed for hash hydration plugin to work
	const headEntryOptions = { mode: "server" };
	ssrContext.head.push(appHead, headEntryOptions);
	if (ssrError) {
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		const status = ssrError.status || ssrError.statusCode;
		if (status) {
			// eslint-disable-next-line @typescript-eslint/no-deprecated
			ssrError.status = ssrError.statusCode = Number.parseInt(status);
		}
		if (typeof ssrError.data === "string") {
			try {
				ssrError.data = destr(ssrError.data);
			} catch {}
		}
		setSSRError(ssrContext, ssrError);
	}
	// Get route options (for `ssr: false`, `isr`, `cache` and `noScripts`)
	const routeOptions = getRouteRules(event);
	// Whether we are prerendering route or using ISR/SWR caching
	const _PAYLOAD_EXTRACTION = !ssrContext.noSSR && (NUXT_RUNTIME_PAYLOAD_EXTRACTION);
	const isRenderingPayload = (_PAYLOAD_EXTRACTION || routeOptions.prerender) && PAYLOAD_URL_RE.test(ssrContext.url);
	if (isRenderingPayload) {
		const url = ssrContext.url.substring(0, ssrContext.url.lastIndexOf("/")) || "/";
		ssrContext.url = url;
		event._path = event.node.req.url = url;
	}
	if (routeOptions.ssr === false) {
		ssrContext.noSSR = true;
	}
	const payloadURL = _PAYLOAD_EXTRACTION ? joinURL(ssrContext.runtimeConfig.app.cdnURL || ssrContext.runtimeConfig.app.baseURL, ssrContext.url.replace(/\?.*$/, ""), PAYLOAD_FILENAME) + "?" + ssrContext.runtimeConfig.app.buildId : undefined;
	// Render app
	const renderer = await getRenderer(ssrContext);
	const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
		// We use error to bypass full render if we have an early response we can make
		// TODO: remove _renderResponse in nuxt v5
		if ((ssrContext["~renderResponse"] || ssrContext._renderResponse) && error.message === "skipping render") {
			return {};
		}
		// Use explicitly thrown error in preference to subsequent rendering errors
		const _err = !ssrError && ssrContext.payload?.error || error;
		await ssrContext.nuxt?.hooks.callHook("app:error", _err);
		throw _err;
	});
	// Render inline styles
	// TODO: remove _renderResponse in nuxt v5
	const inlinedStyles = [];
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult: _rendered
	});
	if (ssrContext["~renderResponse"] || ssrContext._renderResponse) {
		// TODO: remove _renderResponse in nuxt v5
		return ssrContext["~renderResponse"] || ssrContext._renderResponse;
	}
	// Handle errors
	if (ssrContext.payload?.error && !ssrError) {
		throw ssrContext.payload.error;
	}
	// Directly render payload routes
	if (isRenderingPayload) {
		const response = renderPayloadResponse(ssrContext);
		return response;
	}
	const NO_SCRIPTS = routeOptions.noScripts;
	// Setup head
	const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
	// 1. Preload payloads and app manifest
	if (_PAYLOAD_EXTRACTION && !NO_SCRIPTS) {
		ssrContext.head.push({ link: [{
			rel: "preload",
			as: "fetch",
			crossorigin: "anonymous",
			href: payloadURL
		} ] }, headEntryOptions);
	}
	if (ssrContext["~preloadManifest"] && !NO_SCRIPTS) {
		ssrContext.head.push({ link: [{
			rel: "preload",
			as: "fetch",
			fetchpriority: "low",
			crossorigin: "anonymous",
			href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`)
		}] }, {
			...headEntryOptions,
			tagPriority: "low"
		});
	}
	// 2. Styles
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	const link = [];
	for (const resource of Object.values(styles)) {
		// Do not add links to resources that are inlined (vite v5+)
		if ("inline" in getQuery(resource.file)) {
			continue;
		}
		// Add CSS links in <head> for CSS files
		// - in production
		// - in dev mode when not rendering an island
		link.push({
			rel: "stylesheet",
			href: renderer.rendererContext.buildAssetsURL(resource.file),
			crossorigin: ""
		});
	}
	if (link.length) {
		ssrContext.head.push({ link }, headEntryOptions);
	}
	if (!NO_SCRIPTS) {
		// 4. Resource Hints
		// Remove lazy hydrated modules from ssrContext.modules so they don't get preloaded
		// (CSS links are already added above, this only affects JS preloads)
		if (ssrContext["~lazyHydratedModules"]) {
			for (const id of ssrContext["~lazyHydratedModules"]) {
				ssrContext.modules?.delete(id);
			}
		}
		ssrContext.head.push({ link: getPreloadLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		ssrContext.head.push({ link: getPrefetchLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		// 5. Payloads
		ssrContext.head.push({ script: _PAYLOAD_EXTRACTION ? renderPayloadJsonScript({
			ssrContext,
			data: splitPayload(ssrContext).initial,
			src: payloadURL
		})  : renderPayloadJsonScript({
			ssrContext,
			data: ssrContext.payload
		})  }, {
			...headEntryOptions,
			tagPosition: "bodyClose",
			tagPriority: "high"
		});
	}
	// 6. Scripts
	if (!routeOptions.noScripts) {
		const tagPosition = "head";
		ssrContext.head.push({ script: Object.values(scripts).map((resource) => ({
			type: resource.module ? "module" : null,
			src: renderer.rendererContext.buildAssetsURL(resource.file),
			defer: resource.module ? null : true,
			tagPosition,
			crossorigin: ""
		})) }, headEntryOptions);
	}
	const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
	// Create render context
	const htmlContext = {
		htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
		head: normalizeChunks([headTags]),
		bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
		bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
		body: [replaceIslandTeleports(ssrContext, _rendered.html) , APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG],
		bodyAppend: [bodyTags]
	};
	// Allow hooking into the rendered result
	await nitroApp.hooks.callHook("render:html", htmlContext, { event });
	// Construct HTML response
	return {
		body: renderHTMLDocument(htmlContext),
		statusCode: getResponseStatus(event),
		statusMessage: getResponseStatusText(event),
		headers: {
			"content-type": "text/html;charset=utf-8",
			"x-powered-by": "Nuxt"
		}
	};
});
function normalizeChunks(chunks) {
	const result = [];
	for (const _chunk of chunks) {
		const chunk = _chunk?.trim();
		if (chunk) {
			result.push(chunk);
		}
	}
	return result;
}
function joinTags(tags) {
	return tags.join("");
}
function joinAttrs(chunks) {
	if (chunks.length === 0) {
		return "";
	}
	return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
	return "<!DOCTYPE html>" + `<html${joinAttrs(html.htmlAttrs)}>` + `<head>${joinTags(html.head)}</head>` + `<body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>` + "</html>";
}

const renderer$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: renderer
}, Symbol.toStringTag, { value: 'Module' }));

const sitemap_index_xml = defineEventHandler(sitemapIndexXmlEventHandler);

const sitemap_index_xml$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sitemap_index_xml
}, Symbol.toStringTag, { value: 'Module' }));

const _sitemap__xml = defineEventHandler(sitemapChildXmlEventHandler);

const _sitemap__xml$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _sitemap__xml
}, Symbol.toStringTag, { value: 'Module' }));
//# sourceMappingURL=index.mjs.map

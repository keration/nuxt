const path = require("path");
const rootDir = path.resolve("C:/Users/admin/Desktop/nuxt");
const i18n = { restructureDir: ".", langDir: "./locales" };
function resolveI18nDir(layer, i18n, i18nDir = i18n.restructureDir ?? "i18n") {
  return path.resolve(layer.config.rootDir, i18nDir);
}
const layer = { config: { rootDir } };
const langDir = path.resolve(resolveI18nDir(layer, i18n), i18n.langDir ?? "locales");
console.log("computed langDir", langDir);

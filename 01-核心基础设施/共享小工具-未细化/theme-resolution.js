// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { isBuiltinThemeName, getThemePalette, mergeThemeOverrides } from "../../02-功能模块/状态栏-主题/chunk-jz6b76hr.js";
import { getThemeStore, getCustomThemeBase, getCachedCustomTheme, parseCustomThemeRef } from "../../02-功能模块/状态栏-主题/custom-themes.js";
function resolveSystemTheme() {
  return getThemeStore().cachedSystemTheme() ?? s() ?? "dark";
}
function getSystemTheme() {
  return getThemeStore().cachedSystemTheme() ?? s();
}
function getCachedSystemTheme() {
  return getThemeStore().cachedSystemTheme();
}
function setSystemTheme(e) {
  getThemeStore().setSystemTheme(e);
}
function subscribeSystemThemeChange(e) {
  return getThemeStore().onSystemThemeChange(e);
}
function resolveThemeName(e) {
  if (e === "auto") return resolveSystemTheme();
  if (isBuiltinThemeName(e)) return e;
  let t = parseCustomThemeRef(e);
  return (t && getCustomThemeBase(t)) || "dark";
}
function resolveThemePalette(e) {
  let t = getThemePalette(resolveThemeName(e)),
    n = parseCustomThemeRef(e);
  if (!n) return t;
  return mergeThemeOverrides(t, getCachedCustomTheme(n)?.overrides);
}
function detectThemeFromColor(e) {
  let t = i(e);
  if (!t) return;
  return 0.2126 * t.r + 0.7152 * t.g + 0.0722 * t.b > 0.5 ? "light" : "dark";
}
function i(e) {
  let t = /^rgba?:([0-9a-f]{1,4})\/([0-9a-f]{1,4})\/([0-9a-f]{1,4})/i.exec(e);
  if (t) return { r: m(t[1]), g: m(t[2]), b: m(t[3]) };
  let n = /^#([0-9a-f]+)$/i.exec(e);
  if (n && n[1].length % 3 === 0) {
    let r = n[1],
      o = r.length / 3;
    return {
      r: m(r.slice(0, o)),
      g: m(r.slice(o, 2 * o)),
      b: m(r.slice(2 * o)),
    };
  }
  return;
}
function m(e) {
  let t = 16 ** e.length - 1;
  return parseInt(e, 16) / t;
}
function s() {
  let e = a.COLORFGBG;
  if (!e) return;
  let n = e.split(";").at(-1);
  if (n === void 0 || n === "") return;
  let r = Number(n);
  if (!Number.isInteger(r) || r < 0 || r > 15) return;
  return r <= 6 || r === 8 ? "dark" : "light";
}
export { resolveSystemTheme, getSystemTheme, getCachedSystemTheme, setSystemTheme, subscribeSystemThemeChange, resolveThemeName, resolveThemePalette, detectThemeFromColor };

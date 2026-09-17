// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { K } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b, ae, n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getClaudeConfigDir } from "../../02-功能模块/Bedrock-Vertex/chunk-5ndhfaq9.js";
import { getFileStorage } from "../共享小工具-未细化/file-storage.js";
import { xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { createLazyValue } from "../共享小工具-未细化/lazy-value.js";
import { getProviderState, getModelCatalogCacheDir } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getSettingsFilePathForSource, getLocalSettingsValidationErrors, getSettingsWithErrors } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { formatMcpScopeLocation, MCP_SETTINGS_SCOPES, getMcpConfigsByScope } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { s, T, c, fe, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { mkdir, open as I } from "fs/promises";
import { join as d } from "path";
var g = "image-cache",
  x = 200;
function f() {
  return d(getClaudeConfigDir(), g, K());
}
async function O() {
  let e = f();
  await mkdir(e, { recursive: !0 });
}
function p(e, t) {
  let r = t.split("/")[1] || "png";
  return d(f(), `${e}.${r}`);
}
function setImageCachePath(e, t) {
  if (e.type !== "image") return null;
  let r = p(e.id, e.mediaType || "image/png");
  return (t((o) => u(o, e.id, r)), r);
}
async function storeImageToCache(e, t) {
  let r = await h(e);
  if (r) t((o) => u(o, e.id, r));
  return r;
}
async function storeImageBatchToCache(e, t) {
  let r = new Map();
  for (let [o, i] of Object.entries(e))
    if (i.type === "image") {
      let a = await h(i);
      if (a) r.set(Number(o), a);
    }
  if (r.size > 0)
    t((o) => {
      let i = o;
      for (let [a, E] of r) i = u(i, a, E);
      return i;
    });
  return r;
}
async function h(e) {
  if (e.type !== "image") return null;
  try {
    await O();
    let t = p(e.id, e.mediaType || "image/png"),
      r = await I(t, "w", 384);
    try {
      (await r.writeFile(e.content, { encoding: "base64" }),
        await r.datasync());
    } finally {
      await r.close();
    }
    return (n(`Stored image ${e.id} to ${t}`), t);
  } catch (t) {
    return (n(`Failed to store image: ${t}`), null);
  }
}
function u(e, t, r) {
  if (e.get(t) === r) return e;
  let o = new Map(e);
  if (!o.has(t))
    while (o.size >= x) {
      let i = o.keys().next().value;
      if (i === void 0) break;
      o.delete(i);
    }
  return (o.set(t, r), o);
}
async function cleanupStaleImageCacheDirs() {
  let e = ae(),
    t = d(getClaudeConfigDir(), g),
    r = K();
  try {
    let o;
    try {
      o = await e.readdir(t);
    } catch {
      return;
    }
    for (let i of o) {
      if (i.name === r) continue;
      let a = d(t, i.name);
      try {
        (await e.rm(a, { recursive: !0, force: !0 }),
          n(`Cleaned up old image cache: ${a}`));
      } catch {}
    }
    try {
      if ((await e.readdir(t)).length === 0) await e.rmdir(t);
    } catch {}
  } catch {}
}
import { join as _ } from "path";
var PUBLISHED_FLOOR_FILE_NAME = "published-floor.json",
  y = 1,
  R = 32,
  S = 65536,
  D = createLazyValue(() =>
    c({
      version: k(y),
      sources: fe(
        s().min(1).max(64),
        c({
          version: T().int().nonnegative(),
          issuedAt: s().max(64),
          recordedAt: T().int().nonnegative(),
        }),
      ),
    }),
  );
function F() {
  return _(getModelCatalogCacheDir(), PUBLISHED_FLOOR_FILE_NAME);
}
function l() {
  return getProviderState().publishedCatalogFloorMarks;
}
async function getPublishedCatalogFloorVersion(e) {
  return (await w(), l().get(e)?.version ?? 0);
}
async function recordPublishedCatalogFloorVersion(e, t, r = Date.now()) {
  await w();
  let o = l().get(e);
  if (o !== void 0 && o.version >= t.version) return;
  (l().set(e, {
    version: t.version,
    issuedAt: (t.issued_at ?? "").slice(0, 64),
    recordedAt: r,
  }),
    await z());
}
function w() {
  let e = getProviderState();
  return (
    (e.publishedCatalogFloorRead ??= C().then(v)),
    e.publishedCatalogFloorRead
  );
}
function v(e) {
  if (e === void 0) return;
  for (let [t, r] of e) {
    let o = l().get(t);
    if (o === void 0 || r.version > o.version) l().set(t, r);
  }
}
async function C() {
  let e;
  try {
    e = await getFileStorage().readRange(F(), 0, S + 1);
  } catch (r) {
    if (!W(r))
      n(
        `[publishedCatalog] floor file read failed: ${A(r) ?? "unknown"}; no persisted version marks this session`,
      );
    return;
  }
  let t = e.length > S ? void 0 : D().safeParse(xt(e.toString("utf8"), !1));
  if (!t?.success) {
    n(
      `[publishedCatalog] floor file ${t === void 0 ? "oversized" : "invalid"}; no persisted version marks this session`,
    );
    return;
  }
  return new Map(Object.entries(t.data.sources));
}
function z() {
  let e = getProviderState(),
    t = (e.publishedCatalogFloorWrite ?? Promise.resolve()).then(P, P);
  return ((e.publishedCatalogFloorWrite = t), t);
}
async function P() {
  try {
    v(await C());
    let e = [...l().entries()]
        .sort(([, r], [, o]) => o.recordedAt - r.recordedAt)
        .slice(0, R),
      t = getFileStorage();
    (await t.mkdir(getModelCatalogCacheDir()),
      await t.atomicWrite(
        F(),
        b({ version: y, sources: Object.fromEntries(e) }),
        384,
      ));
  } catch (e) {
    n(`[publishedCatalog] floor file write failed: ${A(e) ?? "unknown"}`);
  }
}
function getSettingsWithMcpErrors() {
  let e = getSettingsWithErrors(),
    t = MCP_SETTINGS_SCOPES.flatMap((r) =>
      getMcpConfigsByScope(r).errors.map((o) => (o.file ? o : { ...o, file: formatMcpScopeLocation(r) })),
    );
  return { settings: e.settings, errors: [...e.errors, ...t] };
}
function getLocalSettingsErrorsBlockingWrite() {
  return getLocalSettingsValidationErrors().filter((e) => !e.preserveOnWrite);
}
function getGatingSettingsErrors() {
  let e = getSettingsFilePathForSource("localSettings");
  return [
    ...getSettingsWithMcpErrors().errors.filter(
      (r) => !r.mcpErrorMetadata && r.severity !== "warning" && r.file !== e,
    ),
    ...getLocalSettingsErrorsBlockingWrite(),
  ];
}
export { setImageCachePath, storeImageToCache, storeImageBatchToCache, cleanupStaleImageCacheDirs, PUBLISHED_FLOOR_FILE_NAME, getPublishedCatalogFloorVersion, recordPublishedCatalogFloorVersion, getSettingsWithMcpErrors, getLocalSettingsErrorsBlockingWrite, getGatingSettingsErrors };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { default as RT } from "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import { isValidPathSegment, STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { getClaudeConfigDir } from "../模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { l, A, W, Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { describeStorageError, jsonStringify, jsonParse, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { isCustomizationDisabled } from "./chunk-dqyc6kge.js";
import { isBuiltinThemeName, getThemePalette, isValidThemeColorValue } from "./chunk-jz6b76hr.js";
import { createJsonFileStore } from "../../01-核心基础设施/共享小工具-未细化/json-file-store.js";
import { createStore } from "../../01-核心基础设施/共享小工具-未细化/state-store.js";
import { serializeAsyncCalls } from "../../01-核心基础设施/共享小工具-未细化/async-serialization.js";
import { s, c, fe } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { DEFAULT_MAX_PAGES, runPaginatedScan } from "../../01-核心基础设施/共享小工具-未细化/paginated-scan.js";
import { readdir, readFile, stat as _ } from "fs/promises";
import { basename, extname, join as C } from "path";
import { isDeepStrictEqual } from "util";
class N {
  customThemeBases = void 0;
  userThemes = void 0;
  pluginThemes = createStore([]);
  systemTheme = void 0;
  systemThemeChanged = Le();
  onSystemThemeChange = this.systemThemeChanged.subscribe;
  customThemeBase(e) {
    return this.customThemeBases?.get(e);
  }
  addCustomThemeBases(e) {
    this.customThemeBases ??= new Map();
    for (let t of e) this.customThemeBases.set(t.slug, t.base);
  }
  commitUserThemes(e) {
    if (
      ((this.customThemeBases = new Map(e.map((t) => [t.slug, t.base]))),
      this.addCustomThemeBases(this.pluginThemes.getState()),
      this.userThemes === void 0 || !isDeepStrictEqual(this.userThemes, e))
    )
      this.userThemes = e;
    return this.userThemes;
  }
  cachedUserThemes() {
    return this.userThemes ?? [];
  }
  cachedSystemTheme() {
    return this.systemTheme;
  }
  setSystemTheme(e) {
    if (this.systemTheme === e) return;
    ((this.systemTheme = e), this.systemThemeChanged.emit());
  }
}
var F = new j(() => new N());
function getThemeStore() {
  return F.of(B().host);
}
var k = "custom:",
  P = 262144;
function getCustomThemeBase(e) {
  return getThemeStore().customThemeBase(e);
}
function getCachedCustomThemes() {
  return getThemeStore().cachedUserThemes();
}
function getCachedCustomTheme(e) {
  let t = getThemeStore();
  return (
    t.cachedUserThemes().find((r) => r.slug === e) ??
    t.pluginThemes.getState().find((r) => r.slug === e)
  );
}
function getThemesDir() {
  return C(getClaudeConfigDir(), "themes");
}
function customThemeRef(e) {
  return `${k}${e}`;
}
function parseCustomThemeRef(e) {
  return e.startsWith(k) ? e.slice(k.length) : null;
}
function E(e, t, r) {
  let i;
  try {
    i = jsonParse(t);
  } catch {
    logForDebugging(`[theme] ${e}.json: invalid JSON`, { level: "warn" });
    return;
  }
  if (typeof i !== "object" || i === null || Array.isArray(i)) return;
  let a = i,
    h = isBuiltinThemeName(a.base) ? a.base : "dark",
    f = typeof a.name === "string" ? a.name : e,
    o = {};
  if (typeof a.overrides === "object" && a.overrides !== null) {
    let p = getThemePalette(h);
    for (let [g, y] of Object.entries(a.overrides))
      if (Object.hasOwn(p, g) && isValidThemeColorValue(y)) o[g] = y;
  }
  return { slug: e, name: f, base: h, overrides: o, source: r };
}
async function S(e, t, r, i, a, h) {
  if (i && a) {
    let o;
    try {
      o = await i.read([a]);
    } catch (g) {
      if (h) h.readErrors++;
      logForDebugging(`[theme] failed to read ${e}: ${l(g)}`, { level: "warn" });
      return;
    }
    if (!o.ok) {
      if (h) h.readErrors++;
      logForDebugging(`[theme] failed to read ${e}: ${describeStorageError(o.error)}`, { level: "warn" });
      return;
    }
    let p = o.value.items[0];
    return p?.found ? E(t, Buffer.from(p.value).toString("utf8"), r) : void 0;
  }
  let f;
  try {
    if ((await _(e)).size > P) {
      logForDebugging(`[theme] ${e} exceeds 256KB; skipping`, { level: "warn" });
      return;
    }
    f = await readFile(e, "utf8");
  } catch (o) {
    if (!W(o)) logForDebugging(`[theme] failed to read ${e}`, { level: "warn" });
    return;
  }
  return E(t, f, r);
}
async function readThemesFromPathAsync(e, t, r = "") {
  return (await R(e, t, r)) ?? [];
}
async function R(e, t, r, i) {
  if (i && t === "user" && e === getThemesDir()) {
    let f = { namespace: "userConfigDir", dir: "themes" },
      o = [],
      p = await runPaginatedScan(
        (u) => i.listEntries(f, u === void 0 ? void 0 : { cursor: u }),
        (u) => {
          for (let d of u) {
            if (d.kind !== "key") continue;
            let T =
              d.key.namespace === "userConfigDir"
                ? (d.key.relPath.at(-1) ?? "")
                : "";
            if (extname(T) !== ".json") continue;
            if ((d.size ?? 0) > P) {
              logForDebugging(`[theme] ${C(e, T)} exceeds 256KB; skipping`, {
                level: "warn",
              });
              continue;
            }
            o.push({ slug: r + basename(T, ".json"), name: T });
          }
        },
      ).catch(
        (u) => (
          logForDebugging(
            `[theme] list themes failed: ${l(u)}; keeping the previously loaded themes (if any)`,
            { level: "warn" },
          ),
          null
        ),
      );
    if (p === null) return null;
    switch (p.status) {
      case "done":
        break;
      case "error":
        return (
          logForDebugging(
            `[theme] list themes failed: ${describeStorageError(p.error)}; keeping the previously loaded themes (if any)`,
            { level: "warn" },
          ),
          null
        );
      case "capped":
        return (
          logForDebugging(
            `[theme] list themes exceeded ${DEFAULT_MAX_PAGES} pages; keeping the previously loaded themes (if any)`,
            { level: "warn" },
          ),
          null
        );
    }
    if (o.length === 0) return [];
    let g = o.map((u) => STORAGE_KEYS.userConfigDir("themes", [u.name])),
      y;
    try {
      y = await i.read(g);
    } catch (u) {
      logForDebugging(`[theme] batched theme read failed: ${l(u)}`, { level: "warn" });
    }
    let v = [];
    if (y?.ok) {
      for (let [u, d] of y.value.items.entries()) {
        if (!d.found) continue;
        let T = E(o[u].slug, Buffer.from(d.value).toString("utf8"), t);
        if (T) v.push(T);
      }
      return v;
    }
    let x = { readErrors: 0 };
    for (let [u, d] of o.entries()) {
      let T = await S(C(e, d.name), d.slug, t, i, g[u], x);
      if (T) v.push(T);
    }
    if (v.length === 0 && x.readErrors > 0)
      return (
        logForDebugging(
          `[theme] could not read any of ${o.length} listed theme files; keeping the previously loaded themes (if any)`,
          { level: "warn" },
        ),
        null
      );
    return v;
  }
  let a;
  try {
    a = await readdir(e);
  } catch (f) {
    if (A(f) === "ENOTDIR") {
      let o = await S(e, r + basename(e, ".json"), t);
      return o ? [o] : [];
    }
    if (!Rt(f)) logForDebugging(`[theme] readdir ${e} failed`, { level: "warn" });
    return [];
  }
  let h = [];
  for (let f of a) {
    if (extname(f) !== ".json") continue;
    let o = await S(C(e, f), r + basename(f, ".json"), t);
    if (o) h.push(o);
  }
  return h;
}
var loadCustomThemes = serializeAsyncCalls(async (e) => {
    let t = getThemeStore(),
      r = isCustomizationDisabled("themes")
        ? []
        : ((await R(getThemesDir(), "user", "", e)) ?? t.cachedUserThemes());
    return (
      r.sort((i, a) => i.name.localeCompare(a.name)),
      t.commitUserThemes(r)
    );
  }),
  H = createLazyValue(() => c({ name: s(), base: s(), overrides: fe(s(), s()) }));
async function saveCustomTheme(e, t) {
  let r = { name: e.name, base: e.base, overrides: e.overrides },
    i = `${e.slug}.json`;
  if (isHoverRestEnabled() && t !== void 0 && isValidPathSegment(i)) {
    let a =
        jsonStringify(r, null, 2) +
        `
`,
      h = await t.write(STORAGE_KEYS.userConfigDir("themes", [i]), a, {
        publishDiscipline: "atomic",
        mode: 438 & ~process.umask(),
      });
    if (!h.ok)
      throw (
        logForDebugging(`[theme] v5 save ${e.slug} failed: ${describeStorageError(h.error)}`, {
          level: "warn",
        }),
        Error("theme save failed")
      );
    return;
  }
  await createJsonFileStore(C(getThemesDir(), `${e.slug}.json`), H, {
    defaultValue: () => ({ name: e.slug, base: "dark", overrides: {} }),
    ensureDir: !0,
    indent: 2,
    trailingNewline: !0,
  }).write(r);
}
function slugify(e) {
  return (
    e
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "theme"
  );
}
function watchCustomThemes(e) {
  if (isCustomizationDisabled("themes")) return () => {};
  let t = RT.watch(getThemesDir(), {
    persistent: !0,
    ignoreInitial: !0,
    depth: 0,
    awaitWriteFinish: { stabilityThreshold: 300, pollInterval: 100 },
    ignorePermissionErrors: !0,
  });
  return (
    t.on("add", e),
    t.on("change", e),
    t.on("unlink", e),
    t.on("error", (r) =>
      logForDebugging(`[theme] watcher error: ${l(r)}`, { level: "warn" }),
    ),
    () => void t.close()
  );
}
export { getThemeStore, getCustomThemeBase, getCachedCustomThemes, getCachedCustomTheme, getThemesDir, customThemeRef, parseCustomThemeRef, readThemesFromPathAsync, loadCustomThemes, saveCustomTheme, slugify, watchCustomThemes };

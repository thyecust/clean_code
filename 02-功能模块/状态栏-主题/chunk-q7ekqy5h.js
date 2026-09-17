// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { default as RT } from "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import { _n, Ce } from "../Teammates团队/chunk-qe04h4c5.js";
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { be } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { l, A, W, Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { We, b, z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { isCustomizationDisabled as Xr } from "./chunk-dqyc6kge.js";
import { qSt, Nk, Tj } from "./chunk-jz6b76hr.js";
import { T$ } from "../../01-核心基础设施/共享小工具-未细化/chunk-1avr3bqa.js";
import { Xa } from "../../01-核心基础设施/共享小工具-未细化/chunk-jzy6p47z.js";
import { ZT } from "../../01-核心基础设施/共享小工具-未细化/chunk-17typpec.js";
import { s, c, fe } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { Uc, Qo } from "../../01-核心基础设施/共享小工具-未细化/chunk-0hk68fj9.js";
import { readdir as K, readFile as U, stat as _ } from "fs/promises";
import { basename as w, extname as D, join as C } from "path";
import { isDeepStrictEqual as I } from "util";
class N {
  customThemeBases = void 0;
  userThemes = void 0;
  pluginThemes = Xa([]);
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
      this.userThemes === void 0 || !I(this.userThemes, e))
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
function dk() {
  return F.of(B().host);
}
var k = "custom:",
  P = 262144;
function Sln(e) {
  return dk().customThemeBase(e);
}
function NFt() {
  return dk().cachedUserThemes();
}
function bln(e) {
  let t = dk();
  return (
    t.cachedUserThemes().find((r) => r.slug === e) ??
    t.pluginThemes.getState().find((r) => r.slug === e)
  );
}
function twe() {
  return C(be(), "themes");
}
function D9(e) {
  return `${k}${e}`;
}
function Zb(e) {
  return e.startsWith(k) ? e.slice(k.length) : null;
}
function E(e, t, r) {
  let i;
  try {
    i = z(t);
  } catch {
    n(`[theme] ${e}.json: invalid JSON`, { level: "warn" });
    return;
  }
  if (typeof i !== "object" || i === null || Array.isArray(i)) return;
  let a = i,
    h = qSt(a.base) ? a.base : "dark",
    f = typeof a.name === "string" ? a.name : e,
    o = {};
  if (typeof a.overrides === "object" && a.overrides !== null) {
    let p = Nk(h);
    for (let [g, y] of Object.entries(a.overrides))
      if (Object.hasOwn(p, g) && Tj(y)) o[g] = y;
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
      n(`[theme] failed to read ${e}: ${l(g)}`, { level: "warn" });
      return;
    }
    if (!o.ok) {
      if (h) h.readErrors++;
      n(`[theme] failed to read ${e}: ${We(o.error)}`, { level: "warn" });
      return;
    }
    let p = o.value.items[0];
    return p?.found ? E(t, Buffer.from(p.value).toString("utf8"), r) : void 0;
  }
  let f;
  try {
    if ((await _(e)).size > P) {
      n(`[theme] ${e} exceeds 256KB; skipping`, { level: "warn" });
      return;
    }
    f = await U(e, "utf8");
  } catch (o) {
    if (!W(o)) n(`[theme] failed to read ${e}`, { level: "warn" });
    return;
  }
  return E(t, f, r);
}
async function FFt(e, t, r = "") {
  return (await R(e, t, r)) ?? [];
}
async function R(e, t, r, i) {
  if (i && t === "user" && e === twe()) {
    let f = { namespace: "userConfigDir", dir: "themes" },
      o = [],
      p = await Qo(
        (u) => i.listEntries(f, u === void 0 ? void 0 : { cursor: u }),
        (u) => {
          for (let d of u) {
            if (d.kind !== "key") continue;
            let T =
              d.key.namespace === "userConfigDir"
                ? (d.key.relPath.at(-1) ?? "")
                : "";
            if (D(T) !== ".json") continue;
            if ((d.size ?? 0) > P) {
              n(`[theme] ${C(e, T)} exceeds 256KB; skipping`, {
                level: "warn",
              });
              continue;
            }
            o.push({ slug: r + w(T, ".json"), name: T });
          }
        },
      ).catch(
        (u) => (
          n(
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
          n(
            `[theme] list themes failed: ${We(p.error)}; keeping the previously loaded themes (if any)`,
            { level: "warn" },
          ),
          null
        );
      case "capped":
        return (
          n(
            `[theme] list themes exceeded ${Uc} pages; keeping the previously loaded themes (if any)`,
            { level: "warn" },
          ),
          null
        );
    }
    if (o.length === 0) return [];
    let g = o.map((u) => Ce.userConfigDir("themes", [u.name])),
      y;
    try {
      y = await i.read(g);
    } catch (u) {
      n(`[theme] batched theme read failed: ${l(u)}`, { level: "warn" });
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
        n(
          `[theme] could not read any of ${o.length} listed theme files; keeping the previously loaded themes (if any)`,
          { level: "warn" },
        ),
        null
      );
    return v;
  }
  let a;
  try {
    a = await K(e);
  } catch (f) {
    if (A(f) === "ENOTDIR") {
      let o = await S(e, r + w(e, ".json"), t);
      return o ? [o] : [];
    }
    if (!Rt(f)) n(`[theme] readdir ${e} failed`, { level: "warn" });
    return [];
  }
  let h = [];
  for (let f of a) {
    if (D(f) !== ".json") continue;
    let o = await S(C(e, f), r + w(f, ".json"), t);
    if (o) h.push(o);
  }
  return h;
}
var _Oe = ZT(async (e) => {
    let t = dk(),
      r = Xr("themes")
        ? []
        : ((await R(twe(), "user", "", e)) ?? t.cachedUserThemes());
    return (
      r.sort((i, a) => i.name.localeCompare(a.name)),
      t.commitUserThemes(r)
    );
  }),
  H = m(() => c({ name: s(), base: s(), overrides: fe(s(), s()) }));
async function $ze(e, t) {
  let r = { name: e.name, base: e.base, overrides: e.overrides },
    i = `${e.slug}.json`;
  if (M() && t !== void 0 && _n(i)) {
    let a =
        b(r, null, 2) +
        `
`,
      h = await t.write(Ce.userConfigDir("themes", [i]), a, {
        publishDiscipline: "atomic",
        mode: 438 & ~process.umask(),
      });
    if (!h.ok)
      throw (
        n(`[theme] v5 save ${e.slug} failed: ${We(h.error)}`, {
          level: "warn",
        }),
        Error("theme save failed")
      );
    return;
  }
  await T$(C(twe(), `${e.slug}.json`), H, {
    defaultValue: () => ({ name: e.slug, base: "dark", overrides: {} }),
    ensureDir: !0,
    indent: 2,
    trailingNewline: !0,
  }).write(r);
}
function wln(e) {
  return (
    e
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "theme"
  );
}
function $Ft(e) {
  if (Xr("themes")) return () => {};
  let t = RT.watch(twe(), {
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
      n(`[theme] watcher error: ${l(r)}`, { level: "warn" }),
    ),
    () => void t.close()
  );
}
export { dk, Sln, NFt, bln, twe, D9, Zb, FFt, _Oe, $ze, wln, $Ft };

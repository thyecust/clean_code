// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { $W } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { ge, A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { z, n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { truncateToCodeUnits } from "../核心工具-字符串与文本/string-utils.js";
import { createLazyValue } from "../共享小工具-未细化/lazy-value.js";
import { ot } from "../核心工具-路径与平台/chunk-fx8qr1md.js";
import { Nr, Ow, CHn, getRemoteManagedSettingsSyncFromCache } from "./设置-配置.aqbb35ee.js";
import { stripAnsi } from "../共享小工具-未细化/text-sanitization.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { cs } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { getSettingsForSource } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { se, v, c, $e } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { getCurrentPlatform } from "../核心工具-路径与平台/platform-detection.js";
import { constants } from "fs";
import { open as G, realpath } from "fs/promises";
import { isAbsolute } from "path";
var ORG_TIP_ID_PREFIX = "org-tip:",
  CUSTOM_TIP_ID_PREFIX = "custom-tip-",
  I = 500,
  B = 200,
  O = 262144,
  w = "Tip",
  H = /^[A-Za-z0-9._-]{1,64}$/,
  X = 40,
  x = ["policySettings", "flagSettings", "userSettings"],
  K = [...Ow],
  Y = "org-tip:file:",
  J = new Set(["EAGAIN", "EBUSY", "EINTR", "EIO", "EMFILE", "ENFILE"]),
  Z = /[\p{Cc}\p{Cf}\u2028\u2029\u180e\ufe00-\ufe0f\u{e0100}-\u{e01ef}]/gu;
function N(e) {
  return stripAnsi(e)
    .replace(/[\t\n\r\u2028\u2029]+/g, " ")
    .replace(Z, "")
    .replace(/ {2,}/g, " ")
    .trim();
}
function q(e) {
  if (e === void 0) return w;
  let t = truncateToCodeUnits(N(e), X);
  return t === "" ? w : t;
}
var Q = createLazyValue(() => $e([v(se()), c({ tips: v(se()) }).transform((e) => e.tips)]));
async function V(e) {
  try {
    let t = getCurrentPlatform() === "windows" ? 0 : constants.O_NOFOLLOW | constants.O_NONBLOCK,
      i = await G(await realpath(e), constants.O_RDONLY | t),
      r;
    try {
      let d = await i.stat();
      if (!d.isFile())
        return (
          logFeatureBad("tips_org_tips_file_load", "not_regular_file"),
          n(
            `spinnerTipsOverride.tipsFile ${e} is not a regular file; ignoring it`,
            { level: "warn" },
          ),
          { entries: [], transient: !1 }
        );
      if (d.size > O)
        return (
          logFeatureBad("tips_org_tips_file_load", "too_large"),
          n(
            `spinnerTipsOverride.tipsFile ${e} is larger than ${O} bytes; ignoring it`,
            { level: "warn" },
          ),
          { entries: [], transient: !1 }
        );
      let u = Buffer.alloc(O + 1),
        { bytesRead: g } = await i.read(u, 0, u.length, 0);
      if (g > O)
        return (
          logFeatureBad("tips_org_tips_file_load", "too_large"),
          { entries: [], transient: !1 }
        );
      r = cs(u.toString("utf8", 0, g));
    } finally {
      await i.close();
    }
    let a = Q().safeParse(z(r)),
      l = a.success ? CHn().parse(a.data) : void 0;
    if (l === void 0)
      return (
        logFeatureBad("tips_org_tips_file_load", "wrong_shape"),
        n(
          `spinnerTipsOverride.tipsFile ${e} must be a JSON array of tips (or {"tips": [...]}); ignoring it`,
          { level: "warn" },
        ),
        { entries: [], transient: !1 }
      );
    return (logFeatureOk("tips_org_tips_file_load"), { entries: l, transient: !1 });
  } catch (t) {
    let i = A(t),
      r = W(t)
        ? "not_found"
        : i === "ELOOP" || i === "EISDIR"
          ? "not_regular_file"
          : t instanceof SyntaxError
            ? "parse_failed"
            : "read_failed";
    return (
      logFeatureBad("tips_org_tips_file_load", r),
      n(
        W(t)
          ? `spinnerTipsOverride.tipsFile ${e} does not exist; no file tips loaded`
          : `spinnerTipsOverride.tipsFile ${e} could not be read: ${ge(t).message}`,
        { level: "warn" },
      ),
      { entries: [], transient: i !== void 0 && J.has(i) }
    );
  }
}
class C {
  #e = new Map();
  get size() {
    return this.#e.size;
  }
  read(e) {
    let t = this.#e.get(e);
    if (t) return t;
    let i = V(e).then((r) => {
      if (r.transient) this.#e.delete(e);
      return r;
    });
    return (this.#e.set(e, i), i);
  }
}
var ee = new j(() => new C());
function te() {
  if (getRemoteManagedSettingsSyncFromCache()?.spinnerTipsOverride?.tipsFile)
    return (
      n(
        "spinnerTipsOverride.tipsFile from remote managed settings is ignored; ship inline tips or install the file path via managed-settings.json",
        { level: "warn" },
      ),
      !0
    );
  return !1;
}
function ie(e) {
  if (!e) return;
  if (!isAbsolute(e) && e !== "~" && !e.startsWith("~/")) {
    n(
      `spinnerTipsOverride.tipsFile must be an absolute or ~/ path (got "${e}"); ignoring it`,
      { level: "warn" },
    );
    return;
  }
  if ($W(e)) {
    n(
      "spinnerTipsOverride.tipsFile must be a local path, not a network (UNC) path; ignoring it",
      { level: "warn" },
    );
    return;
  }
  try {
    let t = ot(e);
    return $W(t) ? void 0 : t;
  } catch (t) {
    n(
      `spinnerTipsOverride.tipsFile "${e}" is not a usable path: ${ge(t).message}`,
      { level: "warn" },
    );
    return;
  }
}
function R(e) {
  let t = [];
  for (let i of e) {
    if (!Nr(i)) continue;
    let r = getSettingsForSource(i)?.spinnerTipsOverride;
    if (r) t.push({ source: i, override: r });
  }
  return t;
}
function L(e, t) {
  return e.find((i) => i.override[t] !== void 0)?.override[t];
}
function shouldExcludeDefaultTips() {
  let e = R(x);
  if (L(e, "excludeDefault") !== !0) return !1;
  return (
    e.some((t) => !!t.override.tipsFile) ||
    e.some((t) => (t.override.tips?.length ?? 0) > 0)
  );
}
async function getOverrideSpinnerTips(e) {
  let t = R(x),
    i = R(K);
  if (t.length === 0 && i.length === 0) return { tips: [], trustedCount: 0 };
  let r = q(L(t, "label")),
    a = t.find((s) => !!s.override.tipsFile),
    l = a?.source,
    d = ie(l === "policySettings" && te() ? void 0 : a?.override.tipsFile);
  for (let { source: s, override: o } of i)
    if (o.tipsFile || o.label !== void 0)
      n(
        `spinnerTipsOverride.tipsFile/label in ${s} are ignored; set them in user or managed settings`,
        { level: "warn" },
      );
  let u = d ? (await ee.of(e).read(d)).entries : [],
    g = new Set(),
    T = [],
    S = (s, o, p, _, M) => {
      if (T.length >= B) return;
      let h = N(o);
      if (h === "") {
        n(
          `spinnerTipsOverride: tip "${s}" is empty after sanitizing; dropped`,
          { level: "warn" },
        );
        return;
      }
      if (h.length > I) {
        n(
          `spinnerTipsOverride: tip "${s}" is longer than ${I} characters; dropped`,
          { level: "warn" },
        );
        return;
      }
      if (g.has(s)) {
        n(`spinnerTipsOverride: duplicate tip id "${s}"; keeping the first`, {
          level: "warn",
        });
        return;
      }
      (g.add(s),
        T.push({
          id: s,
          label: M,
          content: async () => h,
          cooldownSessions: p,
          priority: _,
          isRelevant: async () => !0,
          providerAgnostic: !0,
        }));
    },
    b = 0;
  for (let { source: s, override: o } of t) {
    for (let p of o.tips ?? []) F(p, `${CUSTOM_TIP_ID_PREFIX}${b++}`, r, S);
    if (s === l) u.forEach((p, _) => F(p, `${Y}${_}`, r, S));
  }
  let D = T.length;
  for (let { source: s, override: o } of i)
    for (let p of o.tips ?? []) {
      let _ = `${CUSTOM_TIP_ID_PREFIX}${b++}`;
      if (typeof p === "string") F(p, _, w, S);
      else
        n(
          `spinnerTipsOverride: object tip entries in ${s} are ignored; only plain strings are read from project settings`,
          { level: "warn" },
        );
    }
  return { tips: T, trustedCount: D };
}
function F(e, t, i, r) {
  if (typeof e === "string") {
    r(t, e, 0, 0, i);
    return;
  }
  if (typeof e.text !== "string") {
    n('spinnerTipsOverride: tip object without a "text" string; dropped', {
      level: "warn",
    });
    return;
  }
  if (typeof e.id !== "string" || !H.test(e.id)) {
    n(
      'spinnerTipsOverride: tip object needs an "id" of 1-64 letters, digits, ".", "_" or "-"; dropped',
      { level: "warn" },
    );
    return;
  }
  let a =
      typeof e.cooldownSessions === "number" &&
      Number.isInteger(e.cooldownSessions) &&
      e.cooldownSessions >= 0
        ? Math.min(e.cooldownSessions, 1000)
        : 0,
    l =
      typeof e.priority === "number" && Number.isFinite(e.priority)
        ? Math.max(-10, Math.min(10, Math.trunc(e.priority)))
        : 0;
  r(`${ORG_TIP_ID_PREFIX}${e.id}`, e.text, a, l, i);
}
export { ORG_TIP_ID_PREFIX, CUSTOM_TIP_ID_PREFIX, shouldExcludeDefaultTips, getOverrideSpinnerTips };

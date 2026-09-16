// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 80 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { y, f } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Bt, Mn } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { dt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Wn } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { Xe } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { VY, W3t } from "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import { ne, Hoe, Wer } from "../Artifact发布-渲染/chunk-rr78st95.js";
import { LJe } from "../图表-Mermaid/chunk-743atbtj.js";
var m = 100,
  _ = 8,
  w = 131072,
  g = 4096,
  A = 40,
  S = new RegExp(`^${Hoe}$`),
  E = 8;
function x() {
  return Wn.CLAUDE_WORKSHOP_PROGRESS !== !1 && Wer();
}
function a(t, r) {
  try {
    t();
  } catch (e) {
    h(dt(e, `workshop authoring-progress hook failed (${r})`));
    let o = ne().authoringProgress;
    if (!o.failureReported)
      ((o.failureReported = !0),
        f("workshop_authoring_progress", "hook_failed"));
  }
}
function U() {
  a(() => {
    let { slotsByBlockIndex: t } = ne().authoringProgress,
      r = !1;
    for (let e of t.values()) r = r || e.shown;
    if ((t.clear(), r)) W3t.setSpinnerMessage(null);
  }, "reset");
}
function W(t, r) {
  let e = VY(r),
    o = e ?? r;
  if (o !== Bt && o !== Mn) return;
  a(() => {
    let { slotsByBlockIndex: n } = ne().authoringProgress;
    if (n.size >= _ || !x()) return;
    n.set(t, {
      raw: "",
      flushedAt: 0,
      matched: null,
      shown: !1,
      batch: e !== void 0,
    });
  }, "start");
}
function G(t, r) {
  let e = ne().authoringProgress.slotsByBlockIndex.get(t);
  if (!e || e.matched === !1) return;
  a(() => P(e, r), "delta");
}
function P(t, r) {
  if (t.raw.length < w) t.raw += r;
  if (t.matched === null) {
    let i = R(t.raw);
    if (i.some(LJe)) t.matched = !0;
    else if (t.raw.length >= g || (i.length > 0 && !t.batch)) {
      ((t.matched = !1), (t.raw = ""));
      return;
    } else return;
  }
  let e = Date.now();
  if (e - t.flushedAt < m) return;
  t.flushedAt = e;
  let o = b(t.raw, t.batch);
  if (!o) return;
  t.shown = !0;
  let n = process.stdout.columns || 80;
  W3t.setSpinnerMessage(Xe(o, Math.max(40, n - E)));
}
function V(t) {
  let { slotsByBlockIndex: r } = ne().authoringProgress,
    e = r.get(t);
  if (!e) return;
  a(() => {
    if ((r.delete(t), e.shown))
      (W3t.setSpinnerMessage(null), y("workshop_authoring_progress"));
  }, "stop");
}
function R(t) {
  let r = [];
  for (let e of t
    .slice(0, g)
    .matchAll(/"(?:file_path|path)"\s*:\s*"((?:[^"\\]|\\.)*)"/g))
    r.push(e[1]);
  return r;
}
function b(t, r = !1) {
  let e = -1;
  for (let s of t.matchAll(/"(?:new_string|new_str|content)"\s*:\s*"/g))
    e = s.index + s[0].length;
  if (e < 0) return "";
  let o = t.slice(e);
  if (r && /"path"\s*:/.test(o)) return "";
  if (o.includes('id=\\"ws-decisions\\"')) return "wiring up the decisions";
  let n = 0,
    i = "",
    c = -1,
    d = /data-decision-id=\\"([^"\\]+)\\"/g;
  for (let s of o.matchAll(d)) ((n += 1), (i = s[1]), (c = s.index));
  let p = /<figure\b/g,
    u = 0,
    l = -1;
  for (let s of o.matchAll(p)) ((u += 1), (l = s.index));
  if (l > c) return `drawing figure ${u}`;
  if (n > 0)
    return S.test(i)
      ? `drawing decision ${n} \u2014 ${Xe(i, A)}`
      : `drawing decision ${n}`;
  return "authoring the design page";
}
export {
  b as deriveAuthoringProgress,
  R as extractFilePaths,
  x as isWorkshopProgressEnabled,
  G as onInputJsonDelta,
  W as onToolUseStart,
  V as onToolUseStop,
  U as resetAuthoringProgress,
};

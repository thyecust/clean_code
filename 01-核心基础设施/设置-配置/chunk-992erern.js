// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { kt } from "../共享小工具-未细化/chunk-510m1t2d.js";
import { RL, cZ } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { fromEnum } from "../共享小工具-未细化/chunk-w76kejwn.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { ie } from "../ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import { Gq } from "../../02-功能模块/权限系统/chunk-e4pfvp7x.js";
import {
  dU,
  RR,
  Q$e,
  af,
  QH,
  Gve,
  Ese,
  getMainLoopModel,
  getDefaultMainLoopModelSetting,
  getCanonicalName,
  parseUserSpecifiedModel,
} from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { i } from "../共享小工具-未细化/chunk-an83zrbx.js";
import { jn, Ks } from "../安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { updateSettingsForSource } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { Eo } from "../../02-功能模块/上下文压缩-Compact/chunk-mxt9bjz3.js";
import { aKe, UO, Jf, Ym, eg, xMe, HMe, wT } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { _Se } from "../../02-功能模块/上下文压缩-Compact/chunk-525y6trw.js";
import { ut } from "../共享小工具-未细化/chunk-5ktz3kp7.js";
import { P_, Rl, rI } from "../模型目录-ModelCatalog/chunk-qgx6a5a0.js";
import { $7 } from "../共享小工具-未细化/chunk-28p6k62j.js";
function E4(t = !0, e = !1) {
  if (!t) return Gq;
  let o = $7(Eo("theme", "dark").value);
  if (e) return ie.dim(ut("promptBorder", o)(Gq));
  return ut("fastMode", o)(Gq);
}
var Jnn = 8000,
  Xle = "Fast mode unchanged (cancelled)";
function A4(t) {
  if (af(aKe({ ...t, toolPermissionContext: { mode: "default" } }))) return;
  let e = Q$e();
  return parseUserSpecifiedModel(e) === parseUserSpecifiedModel(getDefaultMainLoopModelSetting()) ? null : e;
}
async function tLt(t, e, o) {
  let m = A4(e());
  if (m === void 0 || Ks() || !UO(t)) return { vetted: R3e, messages: [] };
  let a = await P_(t, e, m, "command", { signal: o });
  if (a.decision === "proceed")
    return { vetted: { target: m }, messages: a.messages };
  return {
    refusal: rI(
      m,
      a.decision === "ask"
        ? `${a.reason ?? "confirmation required"} (use /model to switch, then /fast)`
        : a.reason,
      a.messages,
    ),
  };
}
var R3e = { unvetted: !0 };
function k3e(t, e) {
  let o = e ? "enabled" : "disabled";
  switch (t.kind) {
    case "timeout":
      return `No response from the workspace \u2014 fast mode may still have been ${o} there`;
    case "stale":
      return `Fast mode was not ${o}: the model changed while PreModelSwitch hooks ran; try again`;
    case "refused":
      return `Fast mode was not ${o} on the workspace: ${t.reason}`;
  }
}
function x3e(t, e, o, m = !0, a, f = R3e) {
  QH();
  let S = () => {
      if (m) return;
      cZ({ ...(RL() ?? {}), fastMode: e });
    },
    c = () => {
      if ((_Se({ fastMode: e }, o), e))
        o((r) => {
          let s = A4(r);
          if (s === void 0) return r;
          if (!("unvetted" in f) && f.target !== s) return r;
          return (
            Jf(t, r, s, "command"),
            { ...r, mainLoopModel: s, mainLoopModelForSession: null }
          );
        });
    };
  if (Ks()) {
    S();
    let r = jn()?.sendControlRequest({
      subtype: "apply_flag_settings",
      settings: { fastMode: e ? !0 : null, ...(e && { model: Q$e() }) },
    });
    if (!r) return (c(), Promise.resolve(void 0));
    return r.then(
      () => {
        c();
        return;
      },
      (s) => (
        n(`fast mode: workspace did not accept apply_flag_settings: ${l(s)}`, {
          level: "error",
        }),
        s instanceof wT
          ? { kind: "timeout" }
          : { kind: "refused", reason: Rl(l(s)) }
      ),
    );
  }
  if (e && !("unvetted" in f)) {
    let r = !1;
    if (
      (o((s) => {
        let d = A4(s);
        return ((r = d !== void 0 && d !== f.target), s);
      }),
      r)
    )
      return Promise.resolve({ kind: "stale" });
  }
  if ((S(), m)) updateSettingsForSource("userSettings", { fastMode: e ? !0 : void 0 }, void 0, a);
  return (c(), Promise.resolve(void 0));
}
async function H3e(t, e, o, m, a, f = !0, S, c, r, s) {
  let d = await Ym(t, async () => {
    if (c) await kt(c(), Jnn);
    if (r?.aborted) return { kind: "refused", refusal: Xle };
    let M = dU();
    if (M) return { kind: "refused", refusal: `Fast mode unavailable: ${M}` };
    let F = R3e,
      p = [];
    if (e) {
      let g = await tLt(t, o, r);
      if (r?.aborted) return { kind: "refused", refusal: Xle };
      if (g.refusal !== void 0) return { kind: "refused", refusal: g.refusal };
      ((F = g.vetted), (p = g.messages));
    }
    let h = e && A4(o()) !== void 0;
    return (
      s?.(),
      {
        kind: "applied",
        remote: await x3e(t, e, m, f, S, F),
        willPromote: h,
        hookMessages: p,
      }
    );
  });
  if (d.kind === "refused") return d.refusal;
  if (d.remote !== void 0) return k3e(d.remote, e);
  if (
    (i("tengu_fast_mode_toggled", { enabled: e, source: fromEnum(a), remote: Ks() }),
    e)
  ) {
    let M = E4(!0),
      F = d.willPromote ? `${HMe}${eg(RR())}` : "",
      p = getMainLoopModel(),
      h = af(p) ? getCanonicalName(p) : "claude-opus-5",
      k = Ese(Gve(h)),
      g = f ? "" : " (this session only)",
      w =
        d.hookMessages.length > 0
          ? `
${d.hookMessages.map(Rl).join(`
`)}`
          : "";
    return `${M} ${xMe}${F} \xB7 ${k}${g}${w}`;
  } else return `Fast mode OFF${f ? "" : " (this session only)"}`;
}
export { E4, Jnn, Xle, A4, tLt, R3e, k3e, x3e, H3e };

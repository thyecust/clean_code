// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ke } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { lit as S, fromEnum as u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { logError as h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { jn, Ks } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { getMainLoopModel as rt } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import {
  s4t,
  wnr,
  i6,
  ib,
  sA,
  gve,
  _me,
  VK,
  Z$,
  $N,
  _$e,
  KK,
  VH,
  UN,
  XK,
  qG,
  ese,
  MT,
  KH,
  zG,
  NT,
  mAn,
} from "../权限系统/chunk-t3b7pg2x.js";
var _ = {
  low: "Quick, straightforward implementation",
  medium: "Balanced approach with standard testing",
  high: "Comprehensive implementation with extensive testing",
  xhigh: `Extended reasoning with thorough analysis (${s4t})`,
  max: `Maximum capability with deepest reasoning (${wnr})`,
};
function olt() {
  let t = rt(),
    o = ib(t),
    n = VK(t);
  return (
    `Usage: /effort [${n.join("|")}${o ? "|ultracode" : ""}|auto]

Effort levels:
` +
    n
      .map(
        (r) => `- ${r}: ${_[r]}
`,
      )
      .join("") +
    (o
      ? `- ultracode: xhigh + dynamic workflow orchestration (this session only)
`
      : "") +
    "- auto: Use the default effort level for your model"
  );
}
function E(t) {
  let o = VK(t),
    n = ib(t) ? ", ultracode" : "";
  return `${o.join(", ")}${n}, auto`;
}
function onn(t, o) {
  let n = t.toLowerCase();
  if (n === "auto" || n === "unset") return { value: void 0 };
  if (n === "ultracode" && ib(o)) return { value: "xhigh" };
  let r = _$e(t);
  return r ? { value: r } : null;
}
function g(t, o = !1) {
  if (!jn()) return null;
  if (!Ks())
    return " (applied locally \u2014 this remote transport can\u2019t change server effort)";
  return (
    jn()
      ?.sendControlRequest({
        subtype: "apply_flag_settings",
        settings: { effortLevel: t ?? null, ultracode: o },
      })
      .catch(h),
    null
  );
}
async function x(t, o, n, r) {
  let s = rt(),
    e = typeof t === "string" ? Z$(t, s) : t,
    l = e !== t,
    f = KK(e);
  if (Ks() && f === void 0)
    return {
      message: `${e} is session-scoped and won't reach the remote process. Use low, medium, high, or xhigh instead.`,
    };
  let c = zG(e, s, o, r);
  n?.({ value: e, ultracode: !1 });
  let m = g(f),
    d = await c;
  if (d) return { message: `Failed to set effort level: ${d.message}` };
  i("tengu_effort_command", {
    effort: typeof e === "number" ? e : u(e),
    is_remote: jn() !== null,
  });
  let p = jn() ? void 0 : VH();
  if (p !== void 0 && p !== e) {
    let y = a.CLAUDE_CODE_EFFORT_LEVEL;
    if (f === void 0)
      return {
        message: `Not applied: CLAUDE_CODE_EFFORT_LEVEL=${y} overrides effort this session, and ${$N(e)} is session-only (nothing saved)`,
        effortUpdate: { value: e, ultracode: !1 },
      };
    return {
      message: `CLAUDE_CODE_EFFORT_LEVEL=${y} overrides this session \u2014 clear it and ${$N(e)} takes over`,
      effortUpdate: { value: e, ultracode: !1 },
    };
  }
  if (!o && ke() && UN(s))
    return {
      message: `Not applied: the launch-effort pin holds effort at ${KH(s)} this session. Run /effort ${$N(e)} in an interactive terminal to release the pin.`,
      effortUpdate: { value: e, ultracode: !1 },
    };
  let v = mAn(e),
    L =
      f !== void 0 && o && !jn()
        ? " (saved as your default for new sessions)"
        : " (this session only)";
  if (l)
    return {
      message: `Effort '${t}' exceeds your organization's limit for ${s}; set to '${e}' instead${L}: ${v}${m ?? ""}`,
      effortUpdate: { value: e, ultracode: !1 },
    };
  return {
    message: `Set effort level to ${$N(e)}${L}: ${v}${m ?? ""}`,
    effortUpdate: { value: e, ultracode: !1 },
  };
}
function K9e(t, o, n) {
  if (sA(o, t, n))
    return {
      message:
        "Current effort level: ultracode (xhigh + dynamic workflow orchestration; this session only)",
    };
  let r = jn() ? void 0 : VH(),
    s = UN(o) ? void 0 : t,
    e = r === null ? void 0 : (r ?? s);
  if (e === void 0) {
    let f = NT(o, t),
      c =
        gve(o) !== null && MT(o, t) !== void 0
          ? ", set by your organization"
          : "";
    return { message: `Effort level: auto (currently ${$N(f)}${c})` };
  }
  let l = mAn(e);
  return { message: `Current effort level: ${$N(e)} (${l})` };
}
async function C(t, o, n) {
  o?.({ value: void 0, ultracode: !1 });
  let r = g(void 0),
    s = await zG(void 0, rt(), t, n);
  if (s) return { message: `Failed to set effort level: ${s.message}` };
  i("tengu_effort_command", { effort: S("auto"), is_remote: jn() !== null });
  let e = t ? "" : " (this session only)",
    l = jn() ? void 0 : VH();
  if (l !== void 0 && l !== null) {
    let f = a.CLAUDE_CODE_EFFORT_LEVEL;
    return {
      message: `${t ? "Cleared effort from settings, but" : "Effort set to auto for this session, but"} CLAUDE_CODE_EFFORT_LEVEL=${f} still controls this session`,
      effortUpdate: { value: void 0, ultracode: !1 },
    };
  }
  return {
    message: `Effort level set to auto${e}${r ?? ""}`,
    effortUpdate: { value: void 0, ultracode: !1 },
  };
}
function U(t, o, n) {
  let r = rt();
  if (!ib())
    return {
      message: `Ultracode needs dynamic workflows enabled (see /config). Valid options are: ${E(r)}`,
    };
  if (i6(r) && !_me("xhigh", r))
    return {
      message: `Ultracode runs at xhigh effort, which is restricted by your organization for ${r}. Valid options are: ${E(r)}`,
    };
  if (!ib(r))
    return {
      message: `Ultracode runs at xhigh effort, which ${r} doesn't support \u2014 switch to an xhigh-capable model (${s4t}). Valid options are: ${E(r)}`,
    };
  if (!t && ke() && UN(r))
    return {
      message: `Not applied: the launch-effort pin holds effort at ${KH(r)} this session, and ultracode needs xhigh. Run /effort ultracode in an interactive terminal to release the pin.`,
    };
  (ese(t, n), o?.({ value: "xhigh", ultracode: !0 }));
  let s = g("xhigh", !0);
  i("tengu_effort_command", {
    effort: S("ultracode"),
    is_remote: jn() !== null,
  });
  let e = jn() ? void 0 : VH();
  if (e !== void 0 && e !== "xhigh")
    return {
      message: `CLAUDE_CODE_EFFORT_LEVEL=${a.CLAUDE_CODE_EFFORT_LEVEL} overrides effort this session \u2014 clear it and ultracode takes over`,
      effortUpdate: { value: "xhigh", ultracode: !0 },
    };
  return {
    message: `Set effort level to ultracode (this session only): xhigh + dynamic workflow orchestration${s ?? ""}`,
    effortUpdate: { value: "xhigh", ultracode: !0 },
  };
}
async function w(t, o = !0, n, r) {
  let s = t.toLowerCase();
  if (s === "auto" || s === "unset") return C(o, n, r);
  if (s === "ultracode") return U(o, n, r);
  let e = _$e(t);
  if (!e)
    return { message: `Invalid argument: ${t}. Valid options are: ${E(rt())}` };
  return x(e, o, n, r);
}
async function lSe(t, o, n = !0, r) {
  let s = !1,
    e = null,
    l = await w(
      t,
      n,
      (f) => {
        s = !0;
        let c = XK(f.value),
          m = f.ultracode ?? !1;
        o((d) => {
          if (
            ((e ??= {
              sessionEffort: d.sessionEffort,
              ultracode: d.ultracode ?? !1,
            }),
            qG(d.sessionEffort, c) && (d.ultracode ?? !1) === m)
          )
            return d;
          return { ...d, sessionEffort: c, ultracode: m };
        });
      },
      r,
    );
  if (s && !l.effortUpdate)
    o((f) => {
      if (e === null) return f;
      if (
        qG(f.sessionEffort, e.sessionEffort) &&
        (f.ultracode ?? !1) === e.ultracode
      )
        return f;
      return { ...f, sessionEffort: e.sessionEffort, ultracode: e.ultracode };
    });
  return l;
}
export { olt, onn, K9e, lSe };

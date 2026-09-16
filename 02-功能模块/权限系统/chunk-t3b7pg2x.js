// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import {
  Err,
  mU,
  HVt,
  Vrr,
  Ume,
  Krr,
  Rr,
  aUe,
  BD,
  Xh,
  $Vt,
  lUe,
  rvn,
  ol,
  Ue,
  wt,
  n0,
  oQ,
  Tn,
  _t,
  hZe,
  _Ze,
  Bse,
  $f,
  H,
  Te,
  ee,
  nkn,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { MXt, Xxt, jc, drt, ke, gae, bHt } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { jn, Ks } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { ms, Nr } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { Cxt, PA } from "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import { yar, ye, Ge, VT, Jt, Det } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { mf, gf, Y6, Eb } from "./chunk-e4pfvp7x.js";
import { Xt, Qa, dm, Pe, Tl, fx } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { Dc } from "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
function gnr(e, t, o) {
  switch (e) {
    case "ask":
      return t.isAutoModeAvailable ? "auto" : "default";
    case "default": {
      if (t.isAutoModeAvailable) return "auto";
      let r = o ?? "default";
      if (
        r === "auto" ||
        (r === "bypassPermissions" && !t.isBypassPermissionsModeAvailable)
      )
        return "default";
      return r;
    }
    case "proactive":
      if (t.isBypassPermissionsModeAvailable) return "bypassPermissions";
      return t.isAutoModeAvailable ? "auto" : "acceptEdits";
  }
}
function Zoe(e, t) {
  if (dm(e, "fable_5_mitigations", t) || e === "claude-mythos-5") return !0;
  return !1;
}
function WG(e) {
  return !Cxt() && dm(e, "fable_5_1_prompt_bundle") === !0;
}
function fve(e) {
  return e.startsWith("claude-fable-");
}
function mnr(e) {
  return e.startsWith("claude-mythos-");
}
function o4t(e) {
  return !1;
}
var im = ["low", "medium", "high", "xhigh", "max"],
  s4t = "Fable 5, Opus 4.7+, Sonnet 5",
  wnr = "Fable 5, Opus 4.6+, Sonnet 4.6+",
  GG =
    "May use excessive tokens resulting in long response times or overthinking. Use sparingly for the hardest tasks.";
function zh(e) {
  if (bHt(e)) return !1;
  let t = oQ(e, "effort");
  if (t !== void 0) return t;
  let o = Ue(e),
    r = HVt(e, o);
  if (r !== void 0) return r.length > 0;
  if (
    o.includes("claude-3-") ||
    o === "claude-opus-4-0" ||
    o === "claude-opus-4-1" ||
    o === "claude-sonnet-4-0" ||
    o === "claude-sonnet-4-5" ||
    o === "claude-haiku-4-5"
  )
    return !1;
  if (a.CLAUDE_CODE_ALWAYS_ENABLE_EFFORT) return !0;
  if (dm(o, "effort", e) || o === "claude-mythos-5") return !0;
  return fx(Tl(e));
}
function FN(e) {
  if (bHt(e)) return !1;
  let t = oQ(e, "max_effort");
  if (t !== void 0) return t;
  let o = Ue(e),
    r = HVt(e, o);
  if (r !== void 0) return r.includes("max");
  if (
    o.includes("claude-3-") ||
    o === "claude-opus-4-0" ||
    o === "claude-opus-4-1" ||
    o === "claude-opus-4-5" ||
    o === "claude-sonnet-4-0" ||
    o === "claude-sonnet-4-5" ||
    o === "claude-haiku-4-5"
  )
    return !1;
  if (dm(o, "max_effort", e) || o === "claude-mythos-5") return !0;
  return fx(Tl(e));
}
function i6(e) {
  if (bHt(e)) return !1;
  let t = oQ(e, "xhigh_effort");
  if (t !== void 0) return t;
  let o = Ue(e),
    r = HVt(e, o);
  if (r !== void 0) return r.includes("xhigh");
  if (
    o.includes("claude-3-") ||
    o === "claude-opus-4-0" ||
    o === "claude-opus-4-1" ||
    o === "claude-opus-4-5" ||
    o === "claude-opus-4-6" ||
    o === "claude-sonnet-4-0" ||
    o === "claude-sonnet-4-5" ||
    o === "claude-sonnet-4-6" ||
    o === "claude-haiku-4-5"
  )
    return !1;
  if (dm(o, "xhigh_effort", e) || o === "claude-mythos-5") return !0;
  return fx(Tl(e));
}
function ib(e) {
  return Dc() && (e === void 0 || (i6(e) && _me("xhigh", e)));
}
function mve(e) {
  return Z$(FN(e) && _me("max", e) ? "max" : "high", e);
}
function sA(e, t, o) {
  return o === !0 && Dc() && MT(e, t) === "xhigh";
}
function $C(e) {
  return im.includes(e);
}
function M(e) {
  return im.indexOf(e);
}
var VEt = "high";
function Tnr(e) {
  return $C(e) && M(e) > M(VEt);
}
function Enr(e) {
  let t = Ue(e);
  return t === "claude-opus-5" || dm(t, "thinking_disabled_effort_cap") === !0;
}
function HJe(e) {
  let t = Pe();
  if (t !== "firstParty" && t !== "gateway") return null;
  let o = Ue(n0(e.trim().toLowerCase()), { identity: !0 }),
    r = hZe().find(
      (u) => Ue(n0(u.apiName.trim().toLowerCase()), { identity: !0 }) === o,
    )?.maxEffortLevel;
  return r != null && $C(r) ? r : null;
}
function gve(e) {
  if (Pe() !== "firstParty") return null;
  let t = _Ze();
  if (t === null) return null;
  let o = t.default_effort_level;
  if (o == null || !$C(o)) return null;
  let r = Ue(n0(e.trim().toLowerCase()), { identity: !0 });
  return Ue(n0(t.name.trim().toLowerCase()), { identity: !0 }) === r ? o : null;
}
function _me(e, t) {
  let o = HJe(t);
  return o === null || M(e) <= M(o);
}
function VK(e) {
  return im.filter((t) => _me(t, e));
}
function Z$(e, t) {
  let o = HJe(t);
  return o !== null && M(e) > M(o) ? o : e;
}
function G(e, t) {
  if (t === "xhigh") return i6(e);
  if (t === "max") return FN(e);
  return !0;
}
function Anr(e) {
  let t = HJe(e);
  return t !== null && im.some((o) => M(o) > M(t) && G(e, o));
}
function Cnr(e, t) {
  if (typeof e !== "string" || !$C(e)) return null;
  let o = HJe(t);
  if (o === null || M(e) <= M(o)) return null;
  let r = MT(t, e) ?? o;
  return `Effort '${e}' exceeds your organization's limit for ${t}; using '${r}'.`;
}
var B = { med: "medium" },
  U = { ultracode: "xhigh" };
function hve(e) {
  if (typeof e !== "string") return;
  let t = e.trim().toLowerCase();
  return Object.hasOwn(U, t) ? t : void 0;
}
function h$e(e) {
  let t = hve(e);
  return t === void 0 ? void 0 : U[t];
}
function $N(e) {
  return String(e);
}
function _$e(e) {
  let t = e.trim().toLowerCase(),
    o = B[t] ?? t;
  return $C(o) ? o : void 0;
}
function KEt(e) {
  let t = _$e(e);
  if (t !== void 0) return { level: t, warning: void 0 };
  let o = hve(e);
  if (o !== void 0) return { level: o, warning: void 0 };
  return {
    level: void 0,
    warning: `Unknown --effort value '${e}' \u2014 ignoring it and using the default effort. Valid values: ${im.join(", ")}.`,
  };
}
function Xk(e) {
  if (e === void 0 || e === null || e === "") return;
  if (typeof e === "number" && V(e)) return e;
  let t = String(e).toLowerCase(),
    o = B[t] ?? t;
  if ($C(o)) return o;
  let r = parseInt(t, 10);
  if (!isNaN(r) && V(r)) return r;
  return;
}
function KK(e) {
  if (e === "low" || e === "medium" || e === "high" || e === "xhigh") return e;
  return;
}
function i4t(e) {
  let t = Ge().ultracode === !0 || hve(e) === "ultracode";
  if (t) Xxt();
  return t;
}
function VH() {
  let e = a.CLAUDE_CODE_EFFORT_LEVEL;
  return e?.toLowerCase() === "unset" || e?.toLowerCase() === "auto"
    ? null
    : Xk(e);
}
function UN(e) {
  if (MXt()) return !1;
  let t = Ue(e);
  if (t.includes("opus-4-7")) return !ee().unpinOpus47LaunchEffort;
  if (t.includes("opus-4-8")) return !ee().unpinOpus48LaunchEffort;
  if (Xt(t) === "claude-fable-5" || (BD(e) && !fve(t)))
    return !ee().unpinFable5LaunchEffort;
  return !1;
}
function W() {
  let e = ee();
  return Boolean(
    e.unpinOpus47LaunchEffort &&
    e.unpinOpus48LaunchEffort &&
    e.unpinFable5LaunchEffort,
  );
}
var N = Object.freeze({ kind: "inherit" }),
  K = Object.freeze({ kind: "default" });
function Yk(e) {
  return { kind: "level", value: e };
}
function XK(e) {
  return e === void 0 ? K : Yk(e);
}
function z(e) {
  return e === void 0 ? N : Yk(e);
}
function qG(e, t) {
  return (
    e === t ||
    (e.kind === t.kind &&
      (e.kind !== "level" || (t.kind === "level" && e.value === t.value)))
  );
}
function X() {
  let e = Ge(),
    t = I({ cli: { effort: void 0 }, env: process.env, settings: e });
  if (e.ultracode === !0) return { default: t, byModel: {} };
  let o = ms()
      .map((s) => ye(s))
      .filter((s) => s !== void 0 && s !== null)
      .reverse(),
    r = o.map((s) => {
      let l = new Map();
      for (let [p, E] of Object.entries(s.modelSettings ?? {})) {
        let v = E?.effortLevel;
        if (v === void 0) continue;
        let g = y$e(p);
        if (p === g || !l.has(g)) l.set(g, v);
      }
      return l;
    }),
    u = new Set();
  for (let s of r) for (let l of s.keys()) u.add(l);
  let d = {};
  for (let s of u)
    for (let l = 0; l < o.length; l++) {
      let p = r[l].get(s);
      if (p !== void 0) {
        d[s] = KK(p);
        break;
      }
      if (o[l].effortLevel !== void 0) {
        d[s] = KK(o[l].effortLevel);
        break;
      }
    }
  return { default: t, byModel: d };
}
function q(e, t) {
  if (t === void 0 || t === null) return e.default;
  let o = y$e(t);
  return Object.hasOwn(e.byModel, o) ? e.byModel[o] : e.default;
}
function Q(e) {
  for (let t in e.byModel) return !0;
  return !1;
}
function y$e(e) {
  return Xt(Ue(wt(e), { deterministic: !0, identity: !0 }));
}
function Z(e, t) {
  let o = y$e(e);
  return Object.hasOwn(Object.prototype, o)
    ? { effortLevel: t }
    : { modelSettings: { [o]: { effortLevel: t } } };
}
function Ya(e, t) {
  let o = e.sessionEffort ?? N;
  switch (o.kind) {
    case "level":
      return o.value;
    case "default":
      return;
    case "inherit":
      if (e.settingsEffortTable === void 0) return;
      if (!Q(e.settingsEffortTable)) return e.settingsEffortTable.default;
      return q(
        e.settingsEffortTable,
        t ?? e.mainLoopModelForSession ?? e.mainLoopModel ?? ol(),
      );
  }
}
function _ve(e) {
  return e.kind === "level" && typeof e.value === "string" && (W() || MXt())
    ? e.value
    : void 0;
}
function iA(e) {
  Te(
    (t) =>
      t.unpinOpus47LaunchEffort &&
      t.unpinOpus48LaunchEffort &&
      t.unpinFable5LaunchEffort
        ? t
        : {
            ...t,
            unpinOpus47LaunchEffort: !0,
            unpinOpus48LaunchEffort: !0,
            unpinFable5LaunchEffort: !0,
          },
    e,
  );
}
function ese(e, t) {
  if (e) iA(t);
  else if (!ke()) Xxt();
}
function MT(e, t, { honorLaunchPin: o = !0 } = {}) {
  if (!zh(e)) return;
  let r = o && UN(e),
    u = D(e),
    d = VH();
  if (d === null && !r) return;
  return P(d ?? (r ? u : void 0) ?? t ?? u, e);
}
function XEt(e, t) {
  if (!zh(e) || VH() !== void 0) return;
  let o = UN(e);
  if (typeof t === "string" && !o) return t;
  if ((t === void 0 || o) && gve(e)) return KH(e);
  return;
}
function P(e, t) {
  let o = e;
  if (typeof o === "string" && $C(o)) o = Z$(o, t);
  if (o === "max" && !FN(t)) o = "high";
  if (o === "xhigh" && !i6(t)) o = "high";
  return o;
}
function KH(e) {
  return eU(P(D(e), e));
}
function tse(e, t, o, r, u) {
  if (!u) return !1;
  let d = jc();
  if (d === 0 || d === r) return !1;
  if (!zh(o)) return !1;
  if (
    typeof MT(o, e) !== "number" &&
    typeof MT(o, t) !== "number" &&
    Err(o, Ue(o))
  )
    return !1;
  if (UN(o)) {
    if (e === void 0 || P(e, o) === P(D(o), o)) return !1;
  } else if (MT(o, e) === MT(o, t)) return !1;
  if (
    Ks() &&
    e !== void 0 &&
    KK(typeof e === "string" ? Z$(e, o) : e) === void 0
  )
    return !1;
  return !0;
}
async function a4t(e, t, o) {
  return Jt("userSettings", Z(t, e), void 0, o);
}
async function zG(e, t, o = !0, r) {
  let u = e !== void 0 ? KK(e) : void 0;
  if (o && (e === void 0 || u !== void 0) && !jn()) {
    let d = await a4t(u, t, r);
    if (d.error) return d.error;
  }
  ese(o, r);
  return;
}
function S$e(e) {
  let t = A(e);
  if (t !== void 0) Xxt();
  let o = { sessionEffort: z(t), settingsEffortTable: X() };
  return (drt(o), o);
}
function NT(e, t) {
  let o = MT(e, t) ?? "high";
  return eU(o);
}
function Xy(e, t) {
  return zh(e) ? NT(e, t) : void 0;
}
function IJe(e, t) {
  if (t === void 0) return "";
  let o = MT(e, t);
  if (o === void 0) return "";
  return ` with ${$N(eU(o))} effort`;
}
function V(e) {
  return Number.isInteger(e);
}
function eU(e) {
  if (typeof e === "string") return $C(e) ? e : "high";
  return "high";
}
function te(e) {
  switch (e) {
    case "low":
      return "Quick, straightforward implementation with minimal overhead";
    case "medium":
      return "Balanced approach with standard implementation and testing";
    case "high":
      return "Comprehensive implementation with extensive testing and documentation";
    case "xhigh":
      return `Deeper reasoning than high, just below maximum (${s4t})`;
    case "max":
      return `Maximum capability with deepest reasoning. ${GG}`;
  }
}
function mAn(e) {
  if (typeof e === "string") {
    let t = te(e);
    if (e === "high" && Bse() && H("tengu_slate_finch", !1))
      return `${t} \xB7 burns fastest \u2014 medium handles most tasks`;
    return t;
  }
  return "Balanced approach with standard implementation and testing";
}
function D(e) {
  return gve(e) ?? ne(e) ?? oe(e);
}
function ne(e) {
  let t = Vrr(e, Ue(e));
  return t !== void 0 && $C(t) ? t : void 0;
}
function oe(e) {
  return Qa(Ue(e))?.default_effort ?? "high";
}
function A(e) {
  return Xk(e) ?? h$e(e);
}
function I(e) {
  let t = A(e.cli.effort);
  if (t !== void 0) return t;
  if (e.settings.ultracode === !0) return "xhigh";
  return KK(e.settings.effortLevel);
}
function Y() {
  let { value: e, source: t } = $f("tengu_auto_mode_config", {});
  if (e?.enabled !== "disabled") return !1;
  return t === "override" || t === "payload";
}
function fAn(e) {
  let { cli: t, env: o, settings: r, agentFrontmatter: u } = e,
    d = mf(t.permissionMode),
    s = mf(t.inheritPermissionMode),
    l = t.dangerouslySkipPermissions,
    p = u?.permissionMode,
    E = Boolean(l || d || p);
  if (Ie(o.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB)) {
    let f =
        l ||
        (d && d !== "default") ||
        (s && s !== "default") ||
        (p && p !== "default"),
      L =
        "Permission mode forced to default \u2014 CLAUDE_CODE_SUBPROCESS_ENV_SCRUB is set " +
        "(allowed_non_write_users hardening). Declare allowedTools explicitly, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to opt out.";
    return {
      mode: "default",
      notification: f ? L : void 0,
      fromAutoFallback: !1,
      baselineMode: "default",
      decidedByProactivityLevel: !1,
      modeSuppliedOnInvocation: !0,
    };
  }
  let v = r.permissions?.disableBypassPermissionsMode === "disable",
    g = Y(),
    m = !g && !J(r),
    c = [],
    y,
    _ = s
      ? j(
          s,
          g,
          "inherited auto mode dropped \u2014 auto mode killswitch active (override- or payload-served)",
        )
      : void 0,
    b = s ? (_?.mode ?? Eb(s)) : void 0;
  if (l)
    if (O("bypassPermissions")) ((y = x), c.push("default"));
    else c.push("bypassPermissions");
  if (d) {
    let f = j(
      d,
      g,
      "auto mode killswitch active (override- or payload-served) \u2014 falling back to default",
    );
    if (f) {
      if (f.unconsented) y = x;
      c.push(f.mode);
    }
  }
  if (p)
    if (p === "auto" && g)
      n(
        "agent frontmatter requested auto mode but circuit breaker active \u2014 falling through",
        { level: "warn" },
      );
    else if (b && Y6(p, b) === void 0)
      (n(
        `agent frontmatter permissionMode "${p}" ignored \u2014 it would widen the agent view's inherited mode (effective "${b}"), and the dispatched agent name is repo-controllable (settings \`agent\`)`,
        { level: "warn" },
      ),
        i("tengu_agent_frontmatter_mode_widening_carry_ignored", {}));
    else c.push(p);
  if (PA()) {
    let f = !GEt()
      ? void 0
      : T()
          .map((L) => mf(ye(L)?.permissions?.defaultMode))
          .find((L) => L != null);
    if (f != null && Ie(o.CLAUDE_CODE_REMOTE) && !w(f)) {
      if (
        (n(
          `settings defaultMode "${f}" is not supported in CLAUDE_CODE_REMOTE \u2014 only acceptEdits, plan, default, and auto are allowed`,
          { level: "warn" },
        ),
        c.length === 0)
      )
        (i("tengu_ccr_unsupported_default_mode_ignored", { mode_hash: Tn(f) }),
          c.push("default"));
    } else if (f === "bypassPermissions") {
      if (l || t.allowDangerouslySkipPermissions) c.push(f);
      else if (c.length === 0)
        ((y =
          'Permission mode bypassPermissions from settings was ignored \u2014 enable the "Claude Code: Allow Dangerously Skip Permissions" setting in VS Code to consent to it'),
          n(
            'settings defaultMode "bypassPermissions" ignored for a VS Code-owned session without the allow-bypass setting',
            { level: "warn" },
          ),
          i("tengu_settings_bypass_unconsented_noninteractive_ignored", {}),
          process.stderr.write(`\u26A0 ${y}
`),
          c.push("default"));
    } else if (f === "auto")
      if (!g) c.push(f);
      else
        n(
          'settings defaultMode "auto" ignored for the IDE session \u2014 auto-mode circuit breaker is active',
          { level: "warn" },
        );
    else if (f != null) c.push(f);
  } else if (r.permissions?.defaultMode) {
    let f = mf(r.permissions.defaultMode);
    if (Ie(o.CLAUDE_CODE_REMOTE) && !w(f))
      (n(
        `settings defaultMode "${f}" is not supported in CLAUDE_CODE_REMOTE \u2014 only acceptEdits, plan, default, and auto are allowed`,
        { level: "warn" },
      ),
        i("tengu_ccr_unsupported_default_mode_ignored", { mode_hash: Tn(f) }));
    else if (f === "bypassPermissions")
      if (!C("bypassPermissions")) {
        if (
          (n(
            'settings defaultMode "bypassPermissions" ignored \u2014 only policy/user/flag settings may grant bypass mode (projectSettings and localSettings are repo-controllable)',
            { level: "warn" },
          ),
          i("tengu_settings_bypass_mode_untrusted_source_ignored", {}),
          !s)
        )
          c.push("default");
      } else if (O("bypassPermissions")) {
        if (c.length === 0) y = x;
        c.push("default");
      } else c.push(f);
    else if (f !== "auto")
      if (b && !C(f) && Y6(f, b) === void 0)
        (n(
          `settings defaultMode "${f}" ignored \u2014 it would widen the agent view's inherited mode (effective "${b}"), and only policy/user/flag settings may do that (projectSettings and localSettings are repo-controllable)`,
          { level: "warn" },
        ),
          i("tengu_settings_mode_widening_carry_ignored", {}));
      else c.push(f);
    else if (!C("auto"))
      (n(
        'settings defaultMode "auto" ignored \u2014 only policy/user/flag settings may grant auto mode (projectSettings and localSettings are repo-controllable)',
        { level: "warn" },
      ),
        i("tengu_settings_auto_mode_untrusted_source_ignored", {}));
    else if (g)
      n(
        "auto mode killswitch active (override- or payload-served) \u2014 falling back to default",
        { level: "warn" },
      );
    else c.push("auto");
  }
  if (s) {
    let f = _;
    if (f) {
      if (f.unconsented && c.length === 0) y = x;
      c.push(f.mode);
    }
  }
  let S;
  for (let f of c) {
    if (f === "bypassPermissions" && v) {
      (n("bypassPermissions mode is disabled by settings", { level: "warn" }),
        (y = "Bypass permissions mode was disabled by settings"));
      continue;
    }
    S = { mode: f, notification: y };
    break;
  }
  let h = !1;
  if (!S) {
    let f = "default";
    if (
      m &&
      GEt() &&
      (!t.isNonInteractiveSession || PA() || H("tengu_moss_anchor", !1))
    )
      ((f = "auto"), (h = !0));
    S = { mode: f, notification: y };
  }
  let F = S.mode,
    R = !1;
  return {
    mode: S.mode,
    notification: S.notification,
    fromAutoFallback: h,
    baselineMode: F,
    decidedByProactivityLevel: R,
    modeSuppliedOnInvocation: E,
  };
}
function hnr(e) {
  let t =
    e.cli.fallbackModel?.split(",") ??
    (Array.isArray(e.settings.fallbackModel)
      ? e.settings.fallbackModel
      : void 0);
  if (t === void 0) return;
  let o = new Set(),
    r = [];
  for (let u of t) {
    let d = typeof u === "string" ? u.trim() : "";
    if (d === "") continue;
    let s = wt(d === "default" ? ol() : d);
    if (o.has(s)) continue;
    if (!Rr(s)) continue;
    if ((o.add(s), r.push(s), r.length === ie)) break;
  }
  return r.length > 0 ? r : void 0;
}
var ie = 3;
function se(e) {
  switch (e) {
    case "userSettings":
      return "user_settings";
    case "projectSettings":
      return "project_settings";
    case "localSettings":
      return "local_settings";
    case "flagSettings":
      return "flag_settings";
    case "policySettings":
      return "policy_settings";
    case null:
      return "settings";
  }
}
function fe(e, t, o) {
  if (mU()) {
    let g = Krr();
    if (
      g !== null &&
      !t &&
      gae().includes("userSettings") &&
      new Date(g).getTime() >
        new Date(ee().lastSeenOrgDefaultUpdatedAt ?? 0).getTime()
    )
      Te(
        (c) =>
          c.lastSeenOrgDefaultUpdatedAt === g
            ? c
            : { ...c, lastSeenOrgDefaultUpdatedAt: g },
        o,
      );
    if (lUe() === null) return e;
    let m = e ? VT("model") : null;
    if (m === "policySettings" || m === "flagSettings") return e;
    return;
  }
  let r = Ume();
  if (!r || $Vt() === null) return e;
  let u = e ? VT("model") : null;
  if (u === "policySettings" || u === "flagSettings") return e;
  let d = gae().includes("userSettings"),
    s = ee().lastSeenOrgDefaultUpdatedAt,
    l = new Date(r.updated_at).getTime() > new Date(s ?? 0).getTime(),
    p = l && !t && d,
    E = () =>
      Te(
        (g) =>
          g.lastSeenOrgDefaultUpdatedAt === r.updated_at
            ? g
            : { ...g, lastSeenOrgDefaultUpdatedAt: r.updated_at },
        o,
      );
  if (r.override_user_selection) {
    if (p) E();
    return;
  }
  if (t) return e;
  let v = d ? ye("userSettings")?.model : void 0;
  if (l && v) {
    if (
      (Jt("userSettings", { model: void 0 }, void 0, o).then((g) => {
        if (!g.error) E();
      }),
      u === "userSettings")
    )
      return;
  } else if (p) E();
  return e;
}
function _nr(e, t) {
  let { cli: o, env: r, settings: u, agentFrontmatter: d } = e,
    s = o.model === "default" ? ol() : o.model,
    l = s,
    p = null;
  if (s) p = o.model === "default" ? "cli_default" : "cli";
  let E = d?.model,
    v;
  if (!s && E && E !== "inherit")
    ((v = E),
      (s = wt(E)),
      (l = E),
      (p =
        d?.modelSource === "routine"
          ? "routine_frontmatter"
          : "agent_frontmatter"));
  let g = !1,
    m = s;
  if (m === void 0) {
    if (r.ANTHROPIC_MODEL) ((m = r.ANTHROPIC_MODEL), (p = "env"));
    else if (
      ((m =
        fe(u.model || void 0, o.isNonInteractiveSession === !0, t) || void 0),
      m !== void 0)
    )
      p = se(VT("model"));
    l = m;
  }
  let c;
  if (m && !Rr(m)) {
    let S = v !== void 0 && !g ? v : m,
      h = g ? null : Xh(S);
    if (h !== null) {
      if (((c = S), (m = h), s !== void 0)) s = h;
    } else {
      if (!(S.trim().toLowerCase() === "default" || rvn(S)) && !g) c = S;
      ((m = void 0), (l = void 0), (p = null), (s = void 0));
    }
  }
  let y;
  if (m && aUe(m))
    ((y = m), (m = void 0), (l = void 0), (p = null), (s = void 0));
  let _ = m || null,
    b = wt(_ ?? ol());
  return {
    effectiveModel: s,
    initialMainLoopModel: _,
    resolvedInitialModel: b,
    rawModelRequest: l || null,
    restrictedModel: c,
    unservedFamilySpelling: y,
    settingLayer: p,
  };
}
function ynr(e) {
  let t = e.cli.systemPrompt,
    o = e.cli.appendSystemPrompt,
    r = yar();
  if (r)
    o = o
      ? `${o}

${r}`
      : r;
  return { systemPrompt: t, appendSystemPrompt: o };
}
function GEt() {
  return H("tengu_harbor_willow", !1) || nkn()?.meadow_lantern === !0;
}
var de = ["policySettings", "flagSettings", "userSettings"],
  ae = ["acceptEdits", "plan", "default", "auto"];
function w(e) {
  return ae.includes(e);
}
function T() {
  return de.filter(Nr);
}
function C(e) {
  return T().some((t) => ye(t)?.permissions?.defaultMode === e);
}
function J(e) {
  return (
    e.permissions?.disableAutoMode === "disable" ||
    e.disableAutoMode === "disable"
  );
}
function xJe(e) {
  return !J(e) && !Y();
}
function qEt(e) {
  return (
    T()
      .map((o) => mf(ye(o)?.permissions?.defaultMode))
      .find((o) => o != null) === "plan" &&
    mf(e.permissions?.defaultMode) !== "plan"
  );
}
function ue(e) {
  let t = mf(e.permissions?.defaultMode);
  if (t == null || !w(t)) return;
  if (t !== "auto") return t;
  return C("auto") && xJe(e) ? "auto" : void 0;
}
function zEt({
  gateOn: e,
  permissionModeTyped: t,
  dangerouslySkipPermissions: o,
  scrubbed: r,
  settings: u,
  effort: d,
}) {
  let s = !t && !o && !r,
    l = s ? ue(u) : void 0;
  return {
    considered: e && s,
    settingsDefaultModePresent: u.permissions?.defaultMode != null,
    settingsDefault: l,
    permissionMode: e ? l : void 0,
    effort: e ? d : void 0,
  };
}
function Snr({ sentMode: e, repositorySettings: t }) {
  if (e === "auto") return;
  if (e !== void 0) return e;
  let o = k(t?.permissions?.defaultMode);
  return o !== void 0 && o !== "auto" && w(o) ? o : "default";
}
function bnr({ seed: e, settingsMode: t, sentMode: o, startsIn: r }) {
  if (
    !e.considered ||
    !e.settingsDefaultModePresent ||
    e.permissionMode !== void 0 ||
    t === void 0 ||
    (o !== void 0 && k(t) === o)
  )
    return null;
  let u =
    k(t) === "auto"
      ? "auto mode could not be requested from this machine (it is off here, or only the repository asked for it)"
      : "not a mode a cloud session can start in";
  return {
    text: `Settings kept on this machine: the default permission mode in your settings (${t}) \u2014 ${u}${r !== void 0 ? `; the session starts in ${r} mode` : ""}`,
    level: "info",
  };
}
function k(e) {
  return e === void 0 ? void 0 : gf(e);
}
var x =
  "Permission mode downgraded to default \u2014 bypass requires accepting the disclaimer interactively first";
function O(e) {
  if (!_t()) return !1;
  if (e === "bypassPermissions")
    return !Det() && !ee().bypassPermissionsModeAccepted;
  return !1;
}
function j(e, t, o) {
  let r = Eb(e);
  if (O(r)) return { mode: "default", unconsented: !0 };
  if (r === "auto" && t) {
    n(o, { level: "warn" });
    return;
  }
  return { mode: r };
}
export {
  Zoe,
  WG,
  fve,
  mnr,
  o4t,
  gnr,
  fAn,
  hnr,
  _nr,
  ynr,
  GEt,
  xJe,
  qEt,
  zEt,
  Snr,
  bnr,
  im,
  s4t,
  wnr,
  GG,
  zh,
  FN,
  i6,
  ib,
  mve,
  sA,
  $C,
  VEt,
  Tnr,
  Enr,
  HJe,
  gve,
  _me,
  VK,
  Z$,
  Anr,
  Cnr,
  hve,
  h$e,
  $N,
  _$e,
  KEt,
  Xk,
  KK,
  i4t,
  VH,
  UN,
  Yk,
  XK,
  qG,
  y$e,
  Ya,
  _ve,
  iA,
  ese,
  MT,
  XEt,
  KH,
  tse,
  a4t,
  zG,
  S$e,
  NT,
  Xy,
  IJe,
  eU,
  mAn,
};

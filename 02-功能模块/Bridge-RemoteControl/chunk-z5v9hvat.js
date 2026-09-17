// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { logFeatureBad as f } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { Jo } from "../权限系统/chunk-ynkf3yy4.js";
import {
  ib,
  $C,
  Z$,
  hve,
  h$e,
  Xk,
  VH,
  Yk,
  XK,
  qG,
  Ya,
  iA,
  MT,
  XEt,
} from "../权限系统/chunk-t3b7pg2x.js";
import { isBridgeEffortSyncEnabled as v4t } from "./chunk-9estzwf5.js";
function A9(e, r) {
  let o = MT(e, r);
  return typeof o === "string" ? o : null;
}
function adt(e, { model: r, getAppState: o, setAppState: E, storageV5: v }) {
  if (!v4t())
    return (
      f("bridge_flag_settings", "disabled"),
      {
        ok: !1,
        error:
          "apply_flag_settings: effort changes over Remote Control are turned off",
      }
    );
  let s,
    l = !1;
  if ("effortLevel" in e) {
    if (((l = !0), e.effortLevel != null)) {
      let t = Xk(e.effortLevel) ?? h$e(e.effortLevel);
      if (typeof t !== "string" || !$C(t))
        return (
          f("bridge_flag_settings", "invalid_effort_level"),
          { ok: !1, error: "apply_flag_settings: unrecognized effortLevel" }
        );
      s = Z$(t, r);
    }
    let a = VH();
    if (a !== void 0 && s !== a)
      return (
        f("bridge_flag_settings", "env_override"),
        {
          ok: !1,
          error:
            "apply_flag_settings: CLAUDE_CODE_EFFORT_LEVEL overrides effort for this session",
        }
      );
  }
  let d = hve(e.effortLevel) === "ultracode",
    i = "ultracode" in e ? e.ultracode === !0 : void 0;
  if ((i === !0 || (i === void 0 && d)) && !ib(r))
    return (
      f("bridge_flag_settings", "ultracode_unavailable"),
      {
        ok: !1,
        error:
          "apply_flag_settings: ultracode is not available for this session (dynamic workflows are off, or the model / your organization does not allow xhigh effort)",
      }
    );
  if (l || i === !0) iA(v);
  E((a) => {
    let t = a;
    if (l) {
      let g = XK(s);
      if (!qG(t.sessionEffort, g)) t = { ...t, sessionEffort: g };
    }
    if (i === void 0) {
      if (d) {
        if (!t.ultracode) t = { ...t, ultracode: !0 };
      } else if (l && t.ultracode) t = { ...t, ultracode: !1 };
    } else if (i) {
      if (!t.ultracode || Ya(t) !== "xhigh")
        t = { ...t, ultracode: !0, sessionEffort: Yk("xhigh") };
    } else if (t.ultracode) t = { ...t, ultracode: !1 };
    return t;
  });
  let u = o();
  return (
    n(
      `[bridge] apply_flag_settings applied effort=${Ya(u) ?? "auto"} ultracode=${u.ultracode === !0}`,
    ),
    { ok: !0 }
  );
}
function p(e) {
  let r = c();
  if (!r || !v4t()) return;
  let o = Jo();
  if (((o.lastKnownEffort = e), o.lastReportedEffort === e)) return;
  ((o.lastReportedEffort = e), r.reportMetadata({ effort_level: e }));
}
function wF(e, r) {
  if (!c()) return;
  let o = XEt(e, Ya(r, e));
  p(o === void 0 ? null : A9(e, o));
}
function c() {
  let e = Jo(),
    r = e.replHandle ?? e.sdkHostedHandle;
  return r && !r.outboundOnly ? r : null;
}
function e6n() {
  let e = Jo();
  if (((e.lastReportedEffort = void 0), e.lastKnownEffort !== void 0))
    p(e.lastKnownEffort);
}
export { A9, adt, wF, e6n };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { H, Te, ee } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { S, we } from "../共享小工具-未细化/chunk-w76kejwn.js";
import { i } from "../共享小工具-未细化/chunk-an83zrbx.js";
import { ye, Jt } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { gf } from "../../02-功能模块/权限系统/chunk-e4pfvp7x.js";
import { zL } from "../../02-功能模块/权限系统/chunk-hv6z01db.js";
function AQt(u, { requireOnboarding: r = !0 } = {}) {
  let o = ee();
  if (
    (r && !o.hasCompletedOnboarding) ||
    o.hasSeenAutoDefaultNudge ||
    !H("tengu_maple_pier", !1)
  )
    return null;
  let e = ye("userSettings")?.permissions?.defaultMode,
    t = [
      "projectSettings",
      "localSettings",
      "flagSettings",
      "policySettings",
    ].some((n) => ye(n)?.permissions?.defaultMode);
  if (e && e !== "auto" && !t && zL(u)) return e;
  return null;
}
function CQt(u, r, o) {
  if (ee().hasSeenAutoDefaultNudge) return;
  let e = gf(r.current_mode);
  if (u === "shown") {
    i("tengu_auto_default_nudge_shown", {
      current_mode: we(e),
      surface: S("ide"),
    });
    return;
  }
  let t = r.choice === "accept" ? "accept" : "decline";
  if (t === "accept")
    Jt("userSettings", { permissions: { defaultMode: "auto" } }, void 0, o);
  (Te(
    (n) =>
      n.hasSeenAutoDefaultNudge ? n : { ...n, hasSeenAutoDefaultNudge: !0 },
    o,
  ),
    i("tengu_auto_default_nudge_resolved", {
      choice: S(t),
      outcome: t === "accept" ? S("switched") : S("declined"),
      current_mode: we(e),
      surface: S("ide"),
    }));
}
export { AQt, CQt };

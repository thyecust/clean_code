// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Vt } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { y, f } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { H, od } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { St } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { In } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { yn } from "../认证-OAuth登录/chunk-y7b7kf5n.js";
import { eVt, mrr } from "./chunk-5ne99rq3.js";
import { tZ } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { hostname as R } from "os";
var m = "tengu_sessions_elevated_auth_enforcement",
  c = "require_trusted_devices",
  h = "tengu_sessions_elevated_auth_disable_proactive_enrollment",
  O = 300000;
class C {
  storedTokenRead = void 0;
  lastEnrollAttemptAtMs = 0;
}
var g = new j(() => new C()),
  Ive =
    "Your organization requires Trusted Devices for Remote Control, but enrollment is temporarily disabled. Please try again later, or contact your administrator.";
function r5() {
  return H(h, !1);
}
function L() {
  return import.meta.require("../../01-核心基础设施/共享小工具-未细化/POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS.hw6w9yxm.js");
}
function T() {
  return import.meta.require("../策略限制(PolicyLimits)/getLastFetchOutcome.w0e6rc4p.js");
}
function ZG() {
  if (!H(m, !1)) return !1;
  return T().isPolicyAllowed(c);
}
function p() {
  if (!H(m, !1)) return !1;
  return T().isPolicyEnforced(c);
}
function xyr() {
  return a.CLAUDE_CODE_REMOTE === !0 && !a.CLAUDE_TRUSTED_DEVICE_TOKEN && p();
}
var z4t =
  "not reachable from a cloud session \u2014 that session requires a trusted device, which a cloud session never has; message it from one of your own machines instead";
function Hyr(e) {
  return `Nothing was sent: Remote Control session '${e}' is ${z4t}.`;
}
function vme() {
  if (!H("tengu_bridge_attestation_enforce", !1)) return eVt;
  if (!p()) return eVt;
  let t = H("tengu_bridge_attestation_enforce_config", {});
  return mrr(t);
}
function oQe() {
  let e = g.of(B().host);
  if (e.storedTokenRead !== void 0) return e.storedTokenRead;
  let t = x();
  return ((e.storedTokenRead = t), t);
}
async function x() {
  let e = process.env.CLAUDE_TRUSTED_DEVICE_TOKEN;
  if (e) return e;
  return (await yn().readAsync())?.trustedDeviceToken;
}
async function uh() {
  if (!ZG()) return;
  return oQe();
}
async function fAt() {
  if (!p()) return !1;
  if (await oQe()) return !1;
  return !0;
}
async function I() {
  if (!(await fAt())) return null;
  if (r5()) return Ive;
  return "Your organization requires Trusted Devices for Remote Control, but this device is not enrolled. Please run `/login` in Claude Code to enroll this device.";
}
async function lCn(e) {
  return (await od(m), await V4t(e), I());
}
function Pve() {
  g.of(B().host).storedTokenRead = void 0;
}
async function o5(e, t) {
  if (!ZG()) return;
  Pve();
  let r = await uh();
  if (!r || r === e) {
    let o = g.of(B().host);
    if (Date.now() - o.lastEnrollAttemptAtMs >= O)
      ((o.lastEnrollAttemptAtMs = Date.now()),
        await sQe({ trigger: "server_denied", credentials: t }),
        (r = await uh()));
  }
  if (!r || r === e) return;
  return (
    n(
      "[trusted-device] Token changed after untrusted_device 403 (cache bust or lazy enrollment); caller will retry",
    ),
    r
  );
}
async function M$e(e, t, r) {
  let o = await o5(e, r);
  if (!o) return;
  return t(o);
}
function Rme() {
  if (r5()) return Ive;
  return "this device is not enrolled as a trusted device; run /login to enroll";
}
async function V4t(e) {
  if (!p()) return;
  if ((Pve(), !(await fAt()))) return;
  if (r5()) return;
  (n(
    "[trusted-device] Not enrolled, attempting lazy enrollment with OAuth token",
  ),
    await sQe({ credentials: e }));
}
async function Iyr(e) {
  if (!ZG()) return !1;
  if ((Pve(), await oQe())) return !0;
  if (r5()) return !1;
  return (
    n("[trusted-device] Not enrolled, enrolling for a device-bound session"),
    await sQe({ trigger: "device_bind", credentials: e }),
    Boolean(await uh())
  );
}
function cCn() {
  let { isClaudeAISubscriber: e } = import.meta.require("../../01-核心基础设施/设置-配置/getClaudeAIOAuthTokens.zrcwmb1h.js");
  if (!In() || !e()) return;
  if (r5()) return;
  (Pve(),
    yn()
      .mutate((t) =>
        t.trustedDeviceToken ? { ...t, trustedDeviceToken: void 0 } : t,
      )
      .catch(() => {}));
}
async function sQe({ trigger: e = "proactive", credentials: t }) {
  let {
    isClaudeAISubscriber: r,
    isConsumerSubscriber: o,
    getClaudeAIOAuthTokens: A,
    checkAndRefreshOAuthTokenIfNeeded: k,
  } = import.meta.require("../../01-核心基础设施/设置-配置/getClaudeAIOAuthTokens.zrcwmb1h.js");
  if (!In() || !r()) return;
  try {
    if (!(await od(m))) {
      n(`[trusted-device] Gate ${m} is off, skipping enrollment`);
      return;
    }
    if (r5()) {
      n(`[trusted-device] Proactive enrollment disabled via ${h}, skipping`);
      return;
    }
    if (process.env.CLAUDE_TRUSTED_DEVICE_TOKEN) {
      n(
        "[trusted-device] CLAUDE_TRUSTED_DEVICE_TOKEN env var is set, skipping enrollment (env var takes precedence)",
      );
      return;
    }
    await L().waitForPolicyLimitsToLoad();
    let _ = T(),
      E = _.isPolicyEnforced(c),
      w = e === "server_denied" || (e === "device_bind" && o());
    if (!(E || (w && _.isPolicyAllowed(c)))) {
      n(`[trusted-device] Org has not enabled ${c}, skipping enrollment`);
      return;
    }
    let d = { trigger: u(e), org_enforced: E };
    if (St()) {
      n("[trusted-device] Essential traffic only, skipping enrollment");
      return;
    }
    await k({ credentials: t });
    let D = A()?.accessToken;
    if (!D) {
      n("[trusted-device] No OAuth token, skipping enrollment");
      return;
    }
    let P = Vt().BASE_API_URL,
      s;
    try {
      s = await at.post(
        `${P}/api/auth/trusted_devices`,
        { display_name: `Claude Code on ${R()} \xB7 ${tZ("darwin")}` },
        {
          headers: {
            Authorization: `Bearer ${D}`,
            "Content-Type": "application/json",
          },
          timeout: 1e4,
          validateStatus: (i) => i < 500,
        },
      );
    } catch (i) {
      (n(`[trusted-device] Enrollment request failed: ${l(i)}`),
        f("bridge_trusted_device_enroll", "request_failed", d));
      return;
    }
    if (s.status !== 200 && s.status !== 201) {
      (n(
        `[trusted-device] Enrollment failed ${s.status}: ${b(s.data).slice(0, 200)}`,
      ),
        f("bridge_trusted_device_enroll", "http_error", d));
      return;
    }
    let v = s.data?.device_token;
    if (!v || typeof v !== "string") {
      (n("[trusted-device] Enrollment response missing device_token field"),
        f("bridge_trusted_device_enroll", "missing_token", d));
      return;
    }
    try {
      let i = await yn().mutate((S) => ({ ...S, trustedDeviceToken: v }));
      if (!i.success) {
        (n(
          `[trusted-device] Failed to persist token: ${i.warning ?? "unknown"}`,
        ),
          f("bridge_trusted_device_enroll", "storage_failed", d));
        return;
      }
      (Pve(),
        n(
          `[trusted-device] Enrolled device_id=${s.data.device_id ?? "unknown"}`,
        ),
        y("bridge_trusted_device_enroll", d));
    } catch (i) {
      (n(`[trusted-device] Storage write failed: ${l(i)}`),
        f("bridge_trusted_device_enroll", "storage_failed", d));
    }
  } catch (_) {
    (n(`[trusted-device] Enrollment error: ${l(_)}`),
      f("bridge_trusted_device_enroll", "unexpected_error", { trigger: u(e) }));
  }
}
export {
  Ive,
  r5,
  ZG,
  xyr,
  z4t,
  Hyr,
  vme,
  oQe,
  uh,
  fAt,
  lCn,
  Pve,
  o5,
  M$e,
  Rme,
  V4t,
  Iyr,
  cCn,
  sQe,
};

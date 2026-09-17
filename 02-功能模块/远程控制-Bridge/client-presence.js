// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { default as at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { i8, hB, iZ, UOn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { An, Oi } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { isEssentialTrafficOnly } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { isFirstPartyProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { getClientPlatform } from "../../01-核心基础设施/HTTP-网络层/user-agent.js";
import { stat as I } from "fs/promises";
var p = 5000,
  _ = i8(),
  y = { teardown: () => {}, pulseIfClientPresent: () => {} };
async function A() {
  let o = a.CLAUDE_CLIENT_PRESENCE_FILE;
  if (!o) return !1;
  if (An(o) && !Oi(o)) return !1;
  try {
    return (await I(o), !0);
  } catch (l) {
    if (!W(l)) logForDebugging(`[presence] client-presence-marker stat failed: ${l}`);
    return !1;
  }
}
function createClientPresenceReporter(o, l, H, b = () => Promise.resolve(!1)) {
  if (isEssentialTrafficOnly()) return y;
  let u = { sessionId: o, baseUrl: l, getAuthHeaders: H, onUnauthorized: b },
    r = `[presence session=${o}]`,
    c = null,
    d = 0,
    m = Promise.resolve(),
    g = async (e, t) => {
      let s = await u.getAuthHeaders();
      if (s === null)
        return (logForDebugging(`${r} ${e} skipped (no credential to send under)`), null);
      if (!isFirstPartyProvider())
        return (logForDebugging(`${r} ${e} skipped (non-first-party provider)`), null);
      let E = `${u.baseUrl}/v1/code/sessions/${u.sessionId}/client/presence`;
      return (
        logForDebugging(`${r} ${e} \u2192 ${E}`),
        at
          .post(
            E,
            { client_id: _, ...t },
            {
              headers: {
                ...s,
                "anthropic-version": "2023-06-01",
                "anthropic-client-platform": getClientPlatform(),
              },
              timeout: p,
              validateStatus: () => !0,
            },
          )
          .then(
            (i) => {
              if (i.status >= 400) logForDebugging(`${r} ${e} got ${i.status}`);
              return { status: i.status, sentHeaders: s };
            },
            (i) => (
              logForDebugging(
                `${r} ${e} failed: ${at.isAxiosError(i) ? (i.code ?? "request_error") : "error"}`,
              ),
              null
            ),
          )
      );
    },
    P = async (e) => {
      let t = e.clear === !0 ? "clear" : "pulse";
      if (!isFirstPartyProvider()) {
        logForDebugging(`${r} ${t} skipped (non-first-party provider)`);
        return;
      }
      try {
        let s = await g(t, e);
        if (s?.status === 401 && (await u.onUnauthorized(s.sentHeaders)))
          (logForDebugging(`${r} ${t} retrying after credential refresh`), await g(t, e));
      } catch (s) {
        logForDebugging(
          `${r} ${t} skipped (credential unavailable: ${s instanceof Error ? s.name : "error"})`,
        );
      }
    },
    v = () => {
      let e = Date.now();
      ((d = e), (c ??= new Date(e).toISOString()));
      let t = P({ connected_at: c });
      return ((m = m.then(() => t)), t);
    },
    h = () => {
      if (iZ() === !1) {
        logForDebugging(`${r} pulse skipped (terminal blurred)`);
        return;
      }
      if (Date.now() - d < p) return;
      v();
    },
    w = hB(h),
    C = UOn(() => {
      let e = iZ();
      if (
        (logForDebugging(
          `${r} terminal focus \u2192 ${e === void 0 ? "unknown" : e ? "focused" : "blurred"}`,
        ),
        e === !0)
      )
        h();
    });
  logForDebugging(`${r} wired`);
  let f = !1;
  return {
    teardown() {
      if (f) return;
      if (((f = !0), w?.(), (w = null), C?.(), (C = null), c !== null))
        m.then(() => P({ clear: !0 }));
      c = null;
    },
    pulseIfClientPresent() {
      if (f || Date.now() - d < p) return;
      A().then((e) => {
        if (e && !f && Date.now() - d >= p)
          (logForDebugging(`${r} client-presence-marker active \u2192 pulse`), v());
      });
    },
  };
}
export { createClientPresenceReporter };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ic } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Jo, zu, pr, Ftt } from "./chunk-ynkf3yy4.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { FT, tRe, KCt } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { _c } from "./chunk-e4pfvp7x.js";
import { SAt, bAt } from "../Bridge-RemoteControl/chunk-5ne99rq3.js";
function l(e, o) {
  let t = Jo().dropSenderWriterByHandle;
  if (e !== null && e !== o) {
    let i = t.get(e);
    if (i) bAt(i);
  }
  if (o !== null && o !== e && !o.outboundOnly) {
    let i = t.get(o);
    if (!i)
      ((i = (r) => {
        o.writeSdkMessages([r]);
      }),
        t.set(o, i));
    SAt(i);
  }
}
function RYe(e, o) {
  let t = Jo(),
    i = a(e),
    r = t.sdkHostedHandle;
  ((t.sdkHostedHandle = i),
    KCt(i ? zu(i.bridgeSessionId) : null, o).catch(() => {}),
    (t.lastReportedPermissionMode = void 0),
    (t.lastKnownPermissionMode = void 0),
    (t.lastReportedEffort = void 0),
    (t.lastKnownEffort = void 0),
    (t.lastReportedModel = void 0),
    (t.lastKnownModel = void 0),
    (t.lastReportedCrossSessionInbound = void 0),
    (t.lastKnownCrossSessionInbound = void 0),
    l(r, i));
}
function bw() {
  return Jo().sdkHostedHandle;
}
function STt(e, o) {
  let t = Jo(),
    i = a(e),
    r = t.replHandle;
  ((t.replHandle = i),
    (t.lastReportedPermissionMode = void 0),
    (t.lastKnownPermissionMode = void 0),
    (t.lastReportedEffort = void 0),
    (t.lastKnownEffort = void 0),
    (t.lastReportedModel = void 0),
    (t.lastKnownModel = void 0),
    (t.lastReportedCrossSessionInbound = void 0),
    (t.lastKnownCrossSessionInbound = void 0),
    l(r, i));
  let s = i ? zu(i.bridgeSessionId) : void 0;
  if (s !== void 0) process.env.CLAUDE_CODE_BRIDGE_SESSION_ID = s;
  else delete process.env.CLAUDE_CODE_BRIDGE_SESSION_ID;
  KCt(s ?? null, o).catch(() => {});
}
function Yi() {
  return Jo().replHandle;
}
function qqt(e, o) {
  let t = Jo();
  if ((t.retiredHandles.add(e), t.replHandle === e)) STt(null, o);
  if (t.sdkHostedHandle === e) RYe(null, o);
}
function Ioe(e, o) {
  let t = Jo(),
    i = t.replHandle ?? t.sdkHostedHandle;
  if (!i || i.outboundOnly) return;
  if (((t.lastKnownPermissionMode = e), e === "bypassPermissions")) return;
  let r = _c(e);
  if (t.lastReportedPermissionMode === r) return;
  ((t.lastReportedPermissionMode = r),
    i.reportMetadata({
      permission_mode: r,
      ...(o !== void 0 && { is_ultraplan_mode: o }),
    }));
}
function NTn() {
  let e = Jo();
  if (
    ((e.lastReportedPermissionMode = void 0),
    e.lastKnownPermissionMode !== void 0)
  )
    Ioe(e.lastKnownPermissionMode);
}
function FTn(e, o, t) {
  let i = Ftt(e);
  if (!i)
    n(
      "[bridge] supervised session id refused (not a safe bridge id) \u2014 this child has no Remote Control identity for the peer surface",
      { level: "warn" },
    );
  ((Jo().supervisedBridgeSession = i
    ? { bridgeSessionId: e, owner: t, selfTitle: void 0 }
    : null),
    KCt(i ? zu(e) : null, o).catch(() => {}));
}
function $Tn(e) {
  let o = Jo().supervisedBridgeSession;
  if (o === null || Yi() !== null || bw() !== null) return;
  o.selfTitle = u(e);
}
function u(e) {
  return typeof e === "string" && FT(e) !== "" ? e : void 0;
}
function d(e) {
  let o = Tfr(),
    t = Jo(),
    i = t.peerIdentityKey;
  if (i !== null && i.host === e && i.credential === o) return i;
  let r = { host: e, credential: o };
  return ((t.peerIdentityKey = r), r);
}
function Tfr() {
  let { sameOwnerAccount: e } = import.meta.require("../../01-核心基础设施/设置-配置/getClaudeAIOAuthTokens.zrcwmb1h.js"),
    o = c(),
    t = Jo(),
    i = t.walkCredentialKey;
  if (i !== null && e(i.owner, o)) return i;
  let r = { owner: o };
  return ((t.walkCredentialKey = r), r);
}
function c() {
  let { sessionsApiBearerFingerprint: e } = import.meta.require(
      "../../01-核心基础设施/共享小工具-未细化/CCR_BYOC_BETA.422dq0ss.js",
    ),
    { getStoredOauthAccountInfo: o } = import.meta.require(
      "../../01-核心基础设施/设置-配置/getClaudeAIOAuthTokens.zrcwmb1h.js",
    ),
    { env: t } = import.meta.require("../../01-核心基础设施/共享小工具-未细化/JETBRAINS_IDES.wmat8rwg.js"),
    i = e();
  return {
    accountUuid: i ? `bearer:${i}` : void 0,
    organizationUuid: t.CLAUDE_CODE_ORGANIZATION_UUID || o()?.organizationUuid,
  };
}
async function UTn({ refresh: e, credentials: o }) {
  let { isCrossSessionMessagingEnabled: t } = import.meta.require(
    "../../01-核心基础设施/共享小工具-未细化/CROSS_SESSION_MESSAGING_DISABLED_MESSAGE.rx6da86s.js",
  );
  if (!t()) return;
  if (!(
    Yi() !== null ||
    bw() !== null ||
    Jo().supervisedBridgeSession !== null
  )) {
    let { hasCloudPeerAccess: p } = import.meta.require("../../01-核心基础设施/共享小工具-未细化/hasCloudPeerAccess.debnsz8e.js");
    if (!p()) return;
  }
  let { primeSessionsApiBearer: r } = import.meta.require(
      "../../01-核心基础设施/共享小工具-未细化/CCR_BYOC_BETA.422dq0ss.js",
    ),
    s = r({ refresh: e, credentials: o }).catch(() => {});
  if (e) {
    await s;
    return;
  }
  let { withDeadline: f } = import.meta.require("../../01-核心基础设施/共享小工具-未细化/withTimeout.0mr4qg1r.js");
  await f(s, g);
}
var g = 750;
function OCe() {
  let e = Yi() ?? bw();
  if (e)
    return {
      key: d(e),
      bridgeSessionId: e.bridgeSessionId,
      selfTitle: e.selfTitle,
      live: ic(),
    };
  let o = Jo().supervisedBridgeSession;
  return o
    ? {
        key: d(o),
        bridgeSessionId: o.bridgeSessionId,
        selfTitle: o.selfTitle,
        live: !0,
      }
    : null;
}
function TFe(e) {
  let o = Jo(),
    t = o.replHandle ?? o.sdkHostedHandle;
  if (!t || t.outboundOnly) return;
  o.lastKnownCrossSessionInbound = e;
  let i = e ? "available" : "unavailable";
  if (o.lastReportedCrossSessionInbound === i) return;
  ((o.lastReportedCrossSessionInbound = i),
    t.reportMetadata({ cross_session_inbound: i }));
}
function BTn() {
  let e = Jo();
  if (
    ((e.lastReportedCrossSessionInbound = void 0),
    e.lastKnownCrossSessionInbound !== void 0)
  )
    TFe(e.lastKnownCrossSessionInbound);
}
function xG(e) {
  let o = Jo(),
    t = o.replHandle ?? o.sdkHostedHandle;
  if (!t || t.outboundOnly) return;
  if (((o.lastKnownModel = e), o.lastReportedModel === e)) return;
  ((o.lastReportedModel = e), t.reportMetadata({ model: e }));
}
function jTn() {
  let e = Jo();
  if (((e.lastReportedModel = void 0), e.lastKnownModel !== void 0))
    xG(e.lastKnownModel);
}
function bTt() {
  let e = OCe();
  return e ? zu(e.bridgeSessionId) : void 0;
}
function kYe() {
  let e = bTt();
  return e ? tRe(e) : void 0;
}
function xYe() {
  let e = Yi();
  return e && !e.outboundOnly ? zu(e.bridgeSessionId) : void 0;
}
function WTn() {
  return OCe()?.selfTitle;
}
function Poe(e, o) {
  let t = Yi() ?? bw();
  if (t && pr(t.bridgeSessionId) === pr(e)) t.selfTitle = u(o);
}
function a(e) {
  return e !== null && Jo().retiredHandles.has(e) ? null : e;
}
export {
  RYe,
  bw,
  STt,
  Yi,
  qqt,
  Ioe,
  NTn,
  FTn,
  $Tn,
  Tfr,
  UTn,
  OCe,
  TFe,
  BTn,
  xG,
  jTn,
  bTt,
  kYe,
  xYe,
  WTn,
  Poe,
};

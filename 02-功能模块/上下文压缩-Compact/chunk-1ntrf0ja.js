// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { zjn } from "../../01-核心基础设施/共享小工具-未细化/chunk-f7n720sn.js";
import { getDefaultWebBrowserState } from "../../01-核心基础设施/共享小工具-未细化/chunk-hkbpxv9z.js";
import {
  jut,
  Wut,
  Gut,
  qut,
  zut,
  Vut,
  Kut,
  Xut,
  Yut,
  Jut,
  Qut,
  Zut,
  rbe,
} from "../../01-核心基础设施/共享小工具-未细化/chunk-cj5z5g82.js";
import { Kr } from "../对话框-确认UI/对话框-确认UI.4ggnfbtb.js";
import { s, O, Uf, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var yp = Kr({
  kind: "local_jsx",
  payload: m(() =>
    c({ nodeId: s(), commandName: s(), immediate: O(), hidesPrompt: O() }),
  ),
  result: m(() => Uf()),
  default: null,
  userInvoked: !0,
  hideWhile: [],
});
var S = Object.freeze({}),
  l = Object.freeze({}),
  r = {
    bagelActive: void 0,
    bagelUrl: void 0,
    bagelPanelVisible: void 0,
    computerUseMcpState: void 0,
    denialTracking: void 0,
    activeGoal: void 0,
    remoteAutocompactState: void 0,
    queuedGoalOrigin: void 0,
    frameOpenFailedPath: null,
    frameOpenFailedSeen: !1,
    artifactWatchApproved: !1,
    artifactDbWriteApproved: !1,
    artifactDbWriteHumanApproved: !1,
    artifactDbReadConsentSlugs: Wut,
    artifactDbReadHumanConsentSlugs: Gut,
    artifactReadConsentSlugs: qut,
    artifactAssetUploadConsentSlugs: Kut,
    artifactAssetUploadHumanConsentSlugs: Xut,
    artifactAssetReadConsentSlugs: zut,
    artifactAssetReadHumanConsentSlugs: Vut,
    artifactHandlersReadConsentSlugs: Yut,
    artifactHandlersReadHumanConsentSlugs: Jut,
    artifactHandlersWriteConsentSlugs: Qut,
    artifactHandlersWriteHumanConsentSlugs: Zut,
    artifactRoomJoinConsentSlugs: rbe,
    artifactReadPageDataApproved: !1,
    artifactReadPageDataHumanApproved: !1,
    artifactPlanPublishConsentPaths: jut,
    prResolvedThisSession: !1,
    ultrareviewOverageConfirmed: !1,
    artifactReadVersions: S,
    artifactReadObservers: l,
  },
  _ = Object.keys(r);
function Qlt(e) {
  let t = e.webBrowser,
    o =
      t.view === void 0 &&
      t.logs.length === 0 &&
      t.unreadErrors === 0 &&
      t.unreadWarnings === 0,
    n = zjn(e.workshopTelemetry),
    i =
      Object.keys(e.artifactReadVersions ?? {}).length === 0 &&
      Object.keys(e.artifactReadObservers ?? {}).length === 0;
  if (
    o &&
    n === e.workshopTelemetry &&
    i &&
    _.every(
      (a) =>
        a === "artifactReadVersions" ||
        a === "artifactReadObservers" ||
        e[a] === r[a],
    )
  )
    return e;
  return {
    ...e,
    ...r,
    ...(n !== e.workshopTelemetry && { workshopTelemetry: n }),
    webBrowser: o ? t : { ...getDefaultWebBrowserState(), cleanupRegistered: t.cleanupRegistered },
  };
}
function Zlt(e) {
  if (e().webBrowser.view && typeof Bun < "u" && "WebView" in Bun)
    return (Bun.WebView.closeAll(), !0);
  return !1;
}
export { yp, Qlt, Zlt };

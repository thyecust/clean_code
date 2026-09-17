// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { clearWorkshopInvokeStart } from "../../01-核心基础设施/共享小工具-未细化/workshop-telemetry.js";
import { getDefaultWebBrowserState } from "../../01-核心基础设施/共享小工具-未细化/chunk-hkbpxv9z.js";
import {
  EMPTY_ARTIFACT_PLAN_PUBLISH_CONSENT_PATHS,
  EMPTY_ARTIFACT_DB_READ_CONSENT_SLUGS,
  EMPTY_ARTIFACT_DB_READ_HUMAN_CONSENT_SLUGS,
  EMPTY_ARTIFACT_READ_CONSENT_SLUGS,
  EMPTY_ARTIFACT_ASSET_READ_CONSENT_SLUGS,
  EMPTY_ARTIFACT_ASSET_READ_HUMAN_CONSENT_SLUGS,
  EMPTY_ARTIFACT_ASSET_UPLOAD_CONSENT_SLUGS,
  EMPTY_ARTIFACT_ASSET_UPLOAD_HUMAN_CONSENT_SLUGS,
  EMPTY_ARTIFACT_HANDLERS_READ_CONSENT_SLUGS,
  EMPTY_ARTIFACT_HANDLERS_READ_HUMAN_CONSENT_SLUGS,
  EMPTY_ARTIFACT_HANDLERS_WRITE_CONSENT_SLUGS,
  EMPTY_ARTIFACT_HANDLERS_WRITE_HUMAN_CONSENT_SLUGS,
  EMPTY_ARTIFACT_ROOM_JOIN_CONSENT_SLUGS,
} from "../../01-核心基础设施/共享小工具-未细化/empty-artifact-consent-slugs.js";
import { defineDialog } from "../对话框-确认UI/对话框-确认UI.4ggnfbtb.js";
import { s, O, Uf, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var localJsxDialog = defineDialog({
  kind: "local_jsx",
  payload: createLazyValue(() =>
    c({ nodeId: s(), commandName: s(), immediate: O(), hidesPrompt: O() }),
  ),
  result: createLazyValue(() => Uf()),
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
    artifactDbReadConsentSlugs: EMPTY_ARTIFACT_DB_READ_CONSENT_SLUGS,
    artifactDbReadHumanConsentSlugs: EMPTY_ARTIFACT_DB_READ_HUMAN_CONSENT_SLUGS,
    artifactReadConsentSlugs: EMPTY_ARTIFACT_READ_CONSENT_SLUGS,
    artifactAssetUploadConsentSlugs: EMPTY_ARTIFACT_ASSET_UPLOAD_CONSENT_SLUGS,
    artifactAssetUploadHumanConsentSlugs: EMPTY_ARTIFACT_ASSET_UPLOAD_HUMAN_CONSENT_SLUGS,
    artifactAssetReadConsentSlugs: EMPTY_ARTIFACT_ASSET_READ_CONSENT_SLUGS,
    artifactAssetReadHumanConsentSlugs: EMPTY_ARTIFACT_ASSET_READ_HUMAN_CONSENT_SLUGS,
    artifactHandlersReadConsentSlugs: EMPTY_ARTIFACT_HANDLERS_READ_CONSENT_SLUGS,
    artifactHandlersReadHumanConsentSlugs: EMPTY_ARTIFACT_HANDLERS_READ_HUMAN_CONSENT_SLUGS,
    artifactHandlersWriteConsentSlugs: EMPTY_ARTIFACT_HANDLERS_WRITE_CONSENT_SLUGS,
    artifactHandlersWriteHumanConsentSlugs: EMPTY_ARTIFACT_HANDLERS_WRITE_HUMAN_CONSENT_SLUGS,
    artifactRoomJoinConsentSlugs: EMPTY_ARTIFACT_ROOM_JOIN_CONSENT_SLUGS,
    artifactReadPageDataApproved: !1,
    artifactReadPageDataHumanApproved: !1,
    artifactPlanPublishConsentPaths: EMPTY_ARTIFACT_PLAN_PUBLISH_CONSENT_PATHS,
    prResolvedThisSession: !1,
    ultrareviewOverageConfirmed: !1,
    artifactReadVersions: S,
    artifactReadObservers: l,
  },
  _ = Object.keys(r);
function resetTransientSessionState(e) {
  let t = e.webBrowser,
    o =
      t.view === void 0 &&
      t.logs.length === 0 &&
      t.unreadErrors === 0 &&
      t.unreadWarnings === 0,
    n = clearWorkshopInvokeStart(e.workshopTelemetry),
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
function closeAllWebViews(e) {
  if (e().webBrowser.view && typeof Bun < "u" && "WebView" in Bun)
    return (Bun.WebView.closeAll(), !0);
  return !1;
}
export { localJsxDialog, resetTransientSessionState, closeAllWebViews };

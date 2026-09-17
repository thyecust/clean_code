// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 284 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { getFeatureValue_CACHED_MAY_BE_STALE } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { isRemoteControlOfferable } from "../远程控制-Bridge/chunk-9estzwf5.js";
import { isArtifactConflictLegacy } from "../制品发布-Artifact/chunk-01ymf0ar.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { TeleportResumeWrapper } from "../远程控制-Bridge/teleport-resume-ui.js";
import { useAppStateSelector, useAppState } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import "../使用时长-Wellbeing/使用时长-Wellbeing.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import "../../01-核心基础设施/共享小工具-未细化/queued-message-context.js";
import { useDialogStore } from "../后台任务-Shell管理/chunk-c7mzes79.js";
import { useSession } from "../../01-核心基础设施/共享小工具-未细化/session-context.js";
import "../认证-OAuth登录/console-profile-auth.js";
import "../../01-核心基础设施/共享小工具-未细化/clipboard-copy.js";
import "../../01-核心基础设施/共享小工具-未细化/authentication-status-box.js";
import "../向导UI-Wizard/向导UI-Wizard.7xe5wk62.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-2x6t9gq6.js";
import "../模型接入-Bedrock-Vertex/bedrock-setup-wizard.js";
import "../../01-核心基础设施/共享小工具-未细化/confirm-prompt.js";
import "../认证-OAuth登录/chunk-xvt7fc9t.js";
import "../模型接入-Bedrock-Vertex/vertex-setup-wizard.js";
import "./teleport-errors.js";
import { rehydrateArtifactFrameState } from "../制品发布-Artifact/chunk-fx5ekm7e.js";
import "../../01-核心基础设施/共享小工具-未细化/goal-proposal-dialog.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-hkbpxv9z.js";
import "../上下文压缩-Compact/chunk-1ntrf0ja.js";
import { clearGoalOnResumeSwap } from "../../03-入口与运行时/会话UI-REPL/会话UI-REPL.qs63rzfp.js";
import "../../01-核心基础设施/共享小工具-未细化/transcript-replaced-bus.js";
import { resetConversation } from "../../01-核心基础设施/共享小工具-未细化/conversation-reset.js";
import "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import "../认证-OAuth登录/oauth-login-completion.js";
import "../通知-Notifications/通知-Notifications.g4xng0pg.js";
import "../../01-核心基础设施/共享小工具-未细化/titled-border-box.js";
import "../../01-核心基础设施/共享小工具-未细化/error-message.js";
import "../../01-核心基础设施/共享小工具-未细化/input-guide.js";
import "../../01-核心基础设施/共享小工具-未细化/spinner-message-line.js";
import "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import "../../01-核心基础设施/共享小工具-未细化/linkified-text.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import "../远程控制-Bridge/remote-control-ui-strings.js";
import "../认证-OAuth登录/oauth-login-flow.js";
import { d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
F();
function B(b) {
  return Boolean(b.replBridgeSessionId) && !b.replBridgeOutboundOnly;
}
var K = async (t, r) =>
  e(L, { onExit: t, context: r, exposure: { logged: !1 } });
function retireConversationForTeleportPull(t, r, f) {
  (clearGoalOnResumeSwap(t, r, f),
    r((a) =>
      Object.keys(a.sendMessagePins).length === 0
        ? a
        : { ...a, sendMessagePins: {} },
    ),
    rehydrateArtifactFrameState(
      r,
      {
        frameUrls: {},
        artifactReadVersions: {},
        artifactRefs: [],
        createdFromType: {},
      },
      { legacyConflict: isArtifactConflictLegacy() },
    ));
}
function L(W) {
  let i = _(24),
    { onExit: o, context: p, exposure: C } = W,
    n = useAppState(),
    T = useDialogStore(),
    x = useSession(),
    A;
  if (i[0] !== T || i[1] !== n.getState || i[2] !== n.setState)
    ((A = () => retireConversationForTeleportPull(n.getState, n.setState, T)),
      (i[0] = T),
      (i[1] = n.getState),
      (i[2] = n.setState),
      (i[3] = A));
  else A = i[3];
  let l = A,
    c = useAppStateSelector(B),
    D;
  if (i[4] !== c)
    ((D = () => (c || isRemoteControlOfferable()) && getFeatureValue_CACHED_MAY_BE_STALE("tengu_teleport_send_to_cloud", !1)),
      (i[4] = c),
      (i[5] = D));
  else D = i[5];
  let [Y] = d(D);
  if (Y) {
    let { TeleportMenu: Z } = import.meta.require("./TeleportMenu.ey2n7fyy.js");
    let m;
    if (i[6] !== p || i[7] !== C || i[8] !== c || i[9] !== o || i[10] !== l)
      ((m = e(Z, {
        onExit: o,
        context: p,
        exposure: C,
        retireOnSurface: l,
        canSend: c,
      })),
        (i[6] = p),
        (i[7] = C),
        (i[8] = c),
        (i[9] = o),
        (i[10] = l),
        (i[11] = m));
    else m = i[11];
    return m;
  }
  let m;
  if (i[12] !== p || i[13] !== o || i[14] !== l || i[15] !== x)
    ((m = (ee) => {
      (resetConversation(p, ee.log, l, x),
        o("Session resumed successfully", { display: "system" }));
    }),
      (i[12] = p),
      (i[13] = o),
      (i[14] = l),
      (i[15] = x),
      (i[16] = m));
  else m = i[16];
  let u, y;
  if (i[17] !== o)
    ((u = () => {
      o("Teleport cancelled", { display: "system" });
    }),
      (y = (oe, _formattedMessage) => {
        o(oe, { display: "system" });
      }),
      (i[17] = o),
      (i[18] = u),
      (i[19] = y));
  else ((u = i[18]), (y = i[19]));
  let P;
  if (i[20] !== m || i[21] !== u || i[22] !== y)
    ((P = e(TeleportResumeWrapper, {
      onComplete: m,
      onCancel: u,
      onError: y,
      isEmbedded: !0,
      source: "localCommand",
    })),
      (i[20] = m),
      (i[21] = u),
      (i[22] = y),
      (i[23] = P));
  else P = i[23];
  return P;
}
export { L as Teleport, K as call, retireConversationForTeleportPull };

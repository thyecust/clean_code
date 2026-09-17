// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 266 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { pv } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { sleep } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { isCCREnvironmentKind, yq } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import { findGitRoot, getBranch, getIsHeadOnRemote, hasUnpushedCommits, getIsClean } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { default as at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { y3, _ht, PVn, RESTRICTED_SESSION_CLOUD_REFUSAL, Ht, clearBridgeSession } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import { extractErrorDetail } from "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import { getReplBridgeHandle } from "../权限系统/chunk-1y2g140m.js";
import { wa } from "../工具结果持久化/工具结果持久化.jj43r39n.js";
import { getTrustedDeviceToken } from "../Bridge-RemoteControl/chunk-tyce0p0b.js";
import { oauthHeaders } from "../Bridge-RemoteControl/chunk-mxsfy35q.js";
import { getBridgeAccessToken, getBridgeAccessTokenAsync, getBridgeBaseUrl } from "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import "../Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import { yo } from "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import { tye } from "../Bridge-RemoteControl/chunk-m1vpawx6.js";
import { useSession } from "../../01-核心基础设施/共享小工具-未细化/session-context.js";
import "../认证-OAuth登录/chunk-9g86t9bp.js";
import { jlt, Wlt, Tee } from "../AppState-状态管理/AppState-状态管理.wyzjbwp5.js";
import "../../01-核心基础设施/共享小工具-未细化/clipboard-copy.js";
import "../../01-核心基础设施/共享小工具-未细化/authentication-status-box.js";
import "../向导(Wizard)UI/向导(Wizard)UI.7xe5wk62.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-2x6t9gq6.js";
import "../Bedrock-Vertex/chunk-g6sqdw6w.js";
import "../../01-核心基础设施/共享小工具-未细化/confirm-prompt.js";
import "../认证-OAuth登录/chunk-xvt7fc9t.js";
import "../Bedrock-Vertex/chunk-yvs1a1sd.js";
import "./teleport-errors.js";
import { YB } from "../../01-核心基础设施/核心工具-进程与信号/chunk-nvzk8dj1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ps79w9dv.js";
import { nWe } from "../../01-核心基础设施/共享小工具-未细化/chunk-vm6pzj28.js";
import { oWe } from "../../01-核心基础设施/共享小工具-未细化/chunk-0dk7tzf3.js";
import "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import "../认证-OAuth登录/chunk-dtt2nn79.js";
import "../通知(Notifications)/通知(Notifications).g4xng0pg.js";
import "../../01-核心基础设施/共享小工具-未细化/titled-border-box.js";
import "../../01-核心基础设施/共享小工具-未细化/error-message.js";
import { InputGuide } from "../../01-核心基础设施/共享小工具-未细化/input-guide.js";
import "../../01-核心基础设施/共享小工具-未细化/spinner-message-line.js";
import "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import "../../01-核心基础设施/共享小工具-未细化/linkified-text.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../Bridge-RemoteControl/chunk-2c3z3wjk.js";
import "../认证-OAuth登录/chunk-5bg9xwqx.js";
import { E, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
F();
async function U(s) {
  let {
      sessionId: a,
      baseUrl: c,
      accessToken: h,
      environmentId: m,
      trustedDeviceToken: _,
      outcomeBranch: T,
      timeoutMs: R = 15000,
    } = s,
    w = `${c}/v1/code/sessions/${a}/move-to-cloud`,
    v = oauthHeaders(h);
  if (_) v["X-Trusted-Device-Token"] = _;
  let p;
  try {
    p = await at.post(
      w,
      { environment_id: m, ...(T && { outcome_branch: T }) },
      { headers: v, timeout: R, validateStatus: (b) => b < 600 },
    );
  } catch (b) {
    let I =
        b !== null && typeof b === "object" && "code" in b
          ? String(b.code)
          : "",
      B = I === "ENOTFOUND" || I === "ECONNREFUSED";
    return {
      ok: !1,
      message: `Couldn't reach the server \u2014 ${l(b)}${B ? "" : ". The move may still have gone through \u2014 check the session in the web UI."}`,
      mayHaveCommitted: !B,
    };
  }
  if (p.status === 200 || p.status === 201) {
    let b = G(p.data),
      I = b?.environment_kind ?? "cloud",
      B = b?.environment_id ?? m;
    return (
      n(`[code-session] move-to-cloud ${a} \u2192 ${I} (env ${B})`),
      { ok: !0, environmentKind: I, environmentId: B, sessionId: a }
    );
  }
  let k = extractErrorDetail(p.data) ?? "";
  if (
    (n(
      `[code-session] move-to-cloud ${a} failed ${p.status}${k ? `: ${k}` : ""}`,
    ),
    p.status >= 500)
  )
    return {
      ok: !1,
      message: `The server responded with ${p.status}. The move may still have gone through \u2014 check the session in the web UI.`,
      mayHaveCommitted: !0,
    };
  if (p.status === 400 && /not a bridge session/i.test(k))
    return {
      ok: !1,
      message:
        "This session is already on cloud \u2014 refresh the web UI to see it.",
      mayHaveCommitted: !0,
    };
  return {
    ok: !1,
    message:
      (k && !/^the request was invalid\.?$/i.test(k) ? k : "") ||
      `The server couldn\u2019t move this session (HTTP ${p.status}). Run with --debug to see the raw response.`,
    mayHaveCommitted: !1,
  };
}
function G(s) {
  if (
    s === null ||
    typeof s !== "object" ||
    !("session" in s) ||
    s.session === null ||
    typeof s.session !== "object"
  )
    return;
  let a = s.session;
  return {
    environment_kind:
      typeof a.environment_kind === "string" ? a.environment_kind : void 0,
    environment_id:
      typeof a.environment_id === "string" ? a.environment_id : void 0,
  };
}
async function K(s) {
  if (!findGitRoot(Q())) return { kind: "no-git" };
  let [a, c, h, m] = await Promise.all([
    getBranch(),
    getIsClean({ ignoreUntracked: !0 }),
    hasUnpushedCommits(),
    getIsHeadOnRemote(),
  ]);
  if (!c) return { kind: "dirty", branch: a };
  if (h || !m) return { kind: "unpushed", branch: a };
  return { kind: "ready", outcomeBranch: `claude/teleport-${s.slice(-8)}` };
}
async function P(s) {
  if (pv())
    return (
      logFeatureBad("teleport_to_cloud", "restricted_session"),
      { kind: "precondition", message: RESTRICTED_SESSION_CLOUD_REFUSAL }
    );
  let a = X(getReplBridgeHandle()),
    c = a?.bridgeSessionId;
  if (!a || !c)
    return (
      logFeatureBad("teleport_to_cloud", "no_bridge"),
      {
        kind: "precondition",
        message:
          "This session isn\u2019t connected to Remote Control. Run /remote-control first, then try again.",
      }
    );
  let h = isHoverRestEnabled() && s.credentials !== void 0 ? await getBridgeAccessTokenAsync(s.credentials) : getBridgeAccessToken();
  if (!h)
    return (
      logFeatureBad("teleport_to_cloud", "no_auth"),
      {
        kind: "precondition",
        message:
          "Not signed in to claude.ai. Run /login with your claude.ai account and try again.",
      }
    );
  let m = await K(c);
  switch (m.kind) {
    case "no-git":
      return (
        logFeatureBad("teleport_to_cloud", "no_git"),
        {
          kind: "precondition",
          message: `${Q()} isn\u2019t a git repository. The cloud session clones your repo from its remote, so there\u2019s nothing for it to check out here \u2014 try again from inside a git repo that has a remote.`,
        }
      );
    case "dirty":
      return (
        logFeatureBad("teleport_to_cloud", "git_dirty"),
        {
          kind: "precondition",
          message: `You have uncommitted changes on ${m.branch || "this branch"}. The cloud session clones from the remote, so local edits won\u2019t be visible there. Commit and push them, or stash them if they shouldn\u2019t go to the cloud. Then try again.`,
        }
      );
    case "unpushed":
      return (
        logFeatureBad("teleport_to_cloud", "git_unpushed"),
        {
          kind: "precondition",
          message: `${m.branch || "This branch"} has commits that haven\u2019t been pushed. The cloud session clones from the remote, so it won\u2019t have them. Push, then try again.`,
        }
      );
    case "ready":
      break;
    default:
      return m;
  }
  let _ = m.outcomeBranch,
    T;
  try {
    T = await oWe(s.storageV5, s.credentials);
  } catch (p) {
    return (
      logFeatureBad("teleport_to_cloud", "env_lookup_failed"),
      {
        kind: "precondition",
        message: `Couldn\u2019t look up cloud environments \u2014 ${l(p)}`,
      }
    );
  }
  let R = (p) => p.kind !== "bridge" && !y3(p),
    w =
      T.selectedTarget && R(T.selectedTarget)
        ? T.selectedTarget
        : T.availableTargets.find(R);
  if (!w || y3(w)) {
    if (T.environmentsError)
      return (
        logFeatureBad("teleport_to_cloud", "env_lookup_failed"),
        {
          kind: "precondition",
          message: `Couldn\u2019t look up cloud environments \u2014 ${T.environmentsError}`,
        }
      );
    return (
      logFeatureBad("teleport_to_cloud", "no_environment"),
      {
        kind: "precondition",
        message:
          "No cloud environment available. Create one from the web UI (or run /web-setup), then try again." +
          (y3(T.selectedTarget)
            ? " Your default target is a self-hosted environment \u2014 continuing in the cloud needs a managed environment."
            : ""),
      }
    );
  }
  (logEvent("tengu_teleport_to_cloud", { action: S("start") }),
    _ht(c),
    s.beforeMove?.(),
    await a.settleUploadsBeforeHandoff?.());
  let v = await U({
    sessionId: c,
    baseUrl: getBridgeBaseUrl(),
    accessToken: h,
    environmentId: w.environment_id,
    trustedDeviceToken: await getTrustedDeviceToken(),
    outcomeBranch: _,
  });
  if (!v.ok) {
    if (v.mayHaveCommitted) logFeatureSad("teleport_to_cloud", "maybe_committed");
    else (logFeatureBad("teleport_to_cloud", "request_failed"), PVn(c));
    return (
      logEvent("tengu_teleport_to_cloud", {
        action: S(v.mayHaveCommitted ? "maybe_committed" : "failed"),
      }),
      { kind: "server-error", failure: v, sessionId: c }
    );
  }
  return (
    logFeatureOk("teleport_to_cloud"),
    logEvent("tengu_teleport_to_cloud", {
      action: S("success"),
      environment_kind: isCCREnvironmentKind(v.environmentKind)
        ? fromEnum(v.environmentKind)
        : S(v.environmentKind === "cloud" ? "cloud" : "other"),
    }),
    {
      kind: "ok",
      success: v,
      sessionUrl: wa(c, a.sessionIngressUrl, { from: "cli" }),
    }
  );
}
function A(s) {
  return yq() ? { kind: "reconnect", oldSessionId: s } : { kind: "disconnect" };
}
var x =
  "/remote-control is no longer active. Run /remote-control to start a new session.";
function O(s, a) {
  let c = `Session now in the cloud: ${s}`;
  switch (a.kind) {
    case "disconnected":
      return `${c}
${x}`;
    case "reconnected":
      return `${c}
New /remote-control session is active \xB7 Continue here, on your phone, or at ${a.newUrl}`;
    case "reconnect-pending":
      return `${c}
Starting a new /remote-control session \u2014 it\u2019ll appear in the footer shortly.`;
  }
}
function X(s) {
  return s && !s.outboundOnly ? s : null;
}
var J = 1e4,
  W = 100,
  L = 250;
function H(s, a = !1) {
  s.setAppState((c) => {
    if (!c.replBridgeEnabled) return c;
    return {
      ...c,
      replBridgeSkipNextArchive: !0,
      replBridgeEnabled: !1,
      replBridgeExplicit: !1,
      replBridgeOutboundOnly: !1,
      ...(a && { replBridgeSessionGroupingId: void 0 }),
    };
  });
}
function q(s) {
  s.setAppState((a) => {
    if (a.replBridgeEnabled) return a;
    return { ...a, replBridgeEnabled: !0 };
  });
}
async function Y(s, a, c = J) {
  let h = Date.now() + c;
  while (Date.now() < h) {
    if (a.aborted) return null;
    let m = getReplBridgeHandle()?.bridgeSessionId;
    if (m && m !== s) return m;
    await sleep(W, a);
  }
  return null;
}
async function V(s) {
  let a = !1,
    c;
  try {
    c = await P({
      beforeMove: () => {
        if (((a = Wlt("cloud_handoff")), a))
          s.setMessages((h) => [...h, Ht(jlt.cloud_handoff, "warning")]);
      },
      credentials: s.credentials,
      storageV5: s.storageV5,
    });
  } finally {
    Tee();
  }
  switch (c.kind) {
    case "precondition":
      return c.message;
    case "server-error": {
      if (c.failure.mayHaveCommitted)
        return (
          _ht(c.sessionId),
          clearBridgeSession(void 0, void 0, void 0, s.storageV5),
          setTimeout(H, L, s, !0),
          YB(
            `Couldn\u2019t teleport: ${c.failure.message}
${x}`,
            a,
          )
        );
      return YB(`Couldn\u2019t teleport: ${c.failure.message}`, a);
    }
    case "ok": {
      (_ht(c.success.sessionId), clearBridgeSession(void 0, void 0, void 0, s.storageV5));
      let h = c.sessionUrl,
        m = A(c.success.sessionId);
      if (m.kind === "disconnect")
        return (setTimeout(H, L, s, !0), O(h, { kind: "disconnected" }));
      (H(s), await sleep(0), q(s));
      let _ = await Y(m.oldSessionId, s.abortController.signal);
      return O(
        h,
        _
          ? { kind: "reconnected", newUrl: wa(_, void 0, { from: "cli" }) }
          : { kind: "reconnect-pending" },
      );
    }
  }
}
function j(s) {
  logEvent("tengu_teleport_menu", { action: fromEnum(s) });
}
function TeleportMenu({
  onExit: s,
  context: a,
  exposure: c,
  retireOnSurface: h,
  canSend: m,
}) {
  let [_, T] = d("menu"),
    R = useSession();
  E(() => {
    if (!c.logged) ((c.logged = !0), j(m ? "shown" : "shown_no_bridge"));
  }, [c, m]);
  let w = C(!1),
    v = (k) => {
      if (w.current) return !1;
      return ((w.current = !0), j(k), !0);
    },
    p = () => {
      if (v("cancel")) s("Teleport cancelled", { display: "system" });
    };
  if (_ === "resume")
    return e(tye, {
      onComplete: (k) => {
        (nWe(a, k.log, h, R),
          s("Session resumed successfully", { display: "system" }));
      },
      onCancel: () => s("Teleport cancelled", { display: "system" }),
      onError: (k) => s(k, { display: "system" }),
      isEmbedded: !0,
      source: "localCommand",
    });
  if (_ === "sending")
    return r(o, {
      flexDirection: "column",
      padding: 1,
      children: [
        r(o, {
          flexDirection: "row",
          children: [
            e(yo, {}),
            e(t, { bold: !0, children: "Moving your session\u2026" }),
          ],
        }),
        e(t, {
          dimColor: !0,
          children:
            "Same session, picking up from your branch\u2019s last push.",
        }),
      ],
    });
  return r(o, {
    flexDirection: "column",
    padding: 1,
    children: [
      e(t, { bold: !0, children: "Teleport" }),
      e(o, {
        flexDirection: "column",
        marginTop: 1,
        children: e(ve, {
          options: [
            {
              label: "Continue this session in the cloud",
              value: "send",
              disabled: !m,
              description: m ? void 0 : "Not connected \xB7 /remote-control",
            },
            { label: "Resume a session from cloud", value: "resume" },
          ],
          defaultFocusValue: m ? void 0 : "resume",
          onCancel: p,
          onChange: (k) => {
            if (k === "resume") {
              if (v("resume")) T("resume");
              return;
            }
            if (!v("send")) return;
            (T("sending"), V(a).then((N) => s(N, { display: "system" })));
          },
        }),
      }),
      e(o, {
        marginTop: 1,
        children: e(InputGuide, {
          children: r(DotSeparatedList, {
            children: [
              e(KeybindingHint, { chord: ["up", "down"], action: "navigate" }),
              e(KeybindingHint, { chord: "enter", action: "select" }),
              e(KeybindingHint, { chord: "escape", action: "cancel" }),
            ],
          }),
        }),
      }),
    ],
  });
}
export { TeleportMenu };

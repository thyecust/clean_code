// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 252 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { lit as S, fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { j0 } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Bf } from "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import { pt } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { MM, hne, jV } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { ConfirmPrompt } from "../../01-核心基础设施/共享小工具-未细化/confirm-prompt.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import "../Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import { bnn, wnn, zBn, Tnn, c7, b4 } from "../Grove-隐私设置/chunk-a4mdm49v.js";
import { sHe } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { SpinnerMessageLine } from "../../01-核心基础设施/共享小工具-未细化/spinner-message-line.js";
import "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import "../../01-核心基础设施/共享小工具-未细化/linkified-text.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../Bridge-RemoteControl/chunk-2c3z3wjk.js";
import { tryOpenUrlInBrowser } from "../../01-核心基础设施/核心工具-路径与平台/open-external-url.js";
import { E, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
async function J() {
  let s;
  try {
    s = await Bf("gh", ["api", "--include", "user"], {
      stdout: "pipe",
      stderr: "ignore",
      timeout: 5000,
      reject: !1,
    });
  } catch {
    return (logFeatureSad("remote_setup_gh_token_scopes", "spawn_failed"), "unknown");
  }
  if (s.timedOut)
    return (logFeatureSad("remote_setup_gh_token_scopes", "timeout"), "unknown");
  if (s.exitCode !== 0)
    return (logFeatureSad("remote_setup_gh_token_scopes", "gh_api_failed"), "unknown");
  let a = at(s.stdout);
  if (a === null)
    return (logFeatureSad("remote_setup_gh_token_scopes", "no_scopes_header"), "unknown");
  return (
    logFeatureOk("remote_setup_gh_token_scopes"),
    a.includes("workflow") ? "present" : "missing"
  );
}
function at(s) {
  let a = pt(s).split(/\r?\n\r?\n/, 1)[0] ?? "",
    R = /^x-oauth-scopes:[ \t]*(.*)$/im.exec(a);
  if (!R) return null;
  let k = R[1]
    .split(",")
    .map((m) => m.trim())
    .filter((m) => m !== "");
  return k.length === 0 ? null : k;
}
async function tt(s) {
  if (!(await zBn(s))) return { status: "not_signed_in" };
  let a = await sHe({ allowNetworkFallbackForOldGh: !0 });
  if (a.status === "not_installed") return { status: "gh_not_installed" };
  if (a.status === "not_authenticated")
    return { status: "gh_not_authenticated" };
  if (a.status === "unknown")
    return { status: "gh_check_failed", error: a.error };
  if (!a.supportsAuthTokenCommand) return { status: "gh_too_old" };
  let { stdout: R } = await Bf("gh", ["auth", "token"], {
      stdout: "pipe",
      stderr: "ignore",
      timeout: 5000,
      reject: !1,
    }),
    k = R.trim();
  if (!k) return { status: "gh_not_authenticated" };
  return { status: "has_gh_token", token: new bnn(k) };
}
function et(s, a) {
  switch (s.kind) {
    case "not_signed_in":
      return `Login failed. Please visit ${a} and login using the GitHub App`;
    case "invalid_token":
      return "GitHub rejected that token. Run `gh auth login` and try again.";
    case "server":
      return `Server error (${s.status}). Try again in a moment.`;
    case "network":
      return "Couldn't reach the server. Check your connection.";
  }
}
function V() {
  let Nt = _(1),
    it;
  if (Nt[0] === MEMO_CACHE_SENTINEL)
    ((it = e(o, {
      marginTop: 1,
      children: r(t, {
        color: "warning",
        children: [
          "Your GitHub CLI token doesn't have the workflow scope. Without it, GitHub rejects pushes that change GitHub Actions workflow files, and pushes to very large repositories can be rejected while GitHub checks for them. You can continue now. To add the scope, run `gh auth refresh -s workflow` and then run /web-setup again:",
          " ",
          "https://cli.github.com/manual/gh_auth_refresh",
        ],
      }),
    })),
      (Nt[0] = it));
  else it = Nt[0];
  return it;
}
function ot(Vt) {
  let l = _(38),
    { onDone: f, host: K, storageV5: P, credentials: x } = Vt,
    ut;
  if (l[0] === MEMO_CACHE_SENTINEL) ((ut = { name: "checking" }), (l[0] = ut));
  else ut = l[0];
  let [h, ct] = d(ut),
    H = C(!1),
    lt;
  if (l[1] !== x || l[2] !== f)
    ((lt = () => {
      (logEvent("tengu_remote_setup_started", {}),
        tt(x).then(async (O) => {
          if (H.current) {
            return;
          }
          switch (O.status) {
            case "not_signed_in": {
              (logEvent("tengu_remote_setup_result", { result: S("not_signed_in") }),
                f("Not signed in to Claude. Run /login first."));
              return;
            }
            case "gh_not_installed":
            case "gh_not_authenticated": {
              let M = `${c7()}/onboarding?step=alt-auth`;
              if ((await tryOpenUrlInBrowser(M), H.current)) {
                return;
              }
              (logEvent("tengu_remote_setup_result", { result: fromEnum(O.status) }),
                f(
                  O.status === "gh_not_installed"
                    ? `GitHub CLI not found. Install it via https://cli.github.com/, then run \`gh auth login\`, or connect GitHub on the web: ${M}`
                    : `GitHub CLI not authenticated. Run \`gh auth login\` and try again, or connect GitHub on the web: ${M}`,
                ));
              return;
            }
            case "gh_too_old": {
              let ht = `${c7()}/onboarding?step=alt-auth`;
              if ((await tryOpenUrlInBrowser(ht), H.current)) {
                return;
              }
              (logEvent("tengu_remote_setup_result", { result: S("gh_too_old") }),
                f(
                  `GitHub CLI is logged in, but this version is too old to share its login (\`gh auth token\` needs GitHub CLI 2.17.0 or newer). Update it via https://cli.github.com/, or connect GitHub on the web: ${ht}`,
                ));
              return;
            }
            case "gh_check_failed": {
              (n(`/web-setup: couldn't check gh auth status: ${O.error}`, {
                level: "error",
              }),
                logEvent("tengu_remote_setup_result", {
                  result: S("gh_check_failed"),
                }));
              let dt = j0(O.error).replace(/[.\s]+$/, "");
              let qt = dt ? ` (${dt})` : "";
              f(
                `Couldn't check GitHub CLI login status${qt}. Run \`gh auth status\` to check, or connect GitHub on the web: ${c7()}/onboarding?step=alt-auth`,
              );
              return;
            }
            case "has_gh_token": {
              let [zt, Kt] = await Promise.all([Tnn(x), J()]);
              if (H.current) {
                return;
              }
              ct({
                name: "confirm",
                token: O.token,
                existingOAuth: zt === "oauth",
                ghTokenWorkflowScope: Kt,
              });
            }
          }
        }));
    }),
      (l[1] = x),
      (l[2] = f),
      (l[3] = lt));
  else lt = l[3];
  let mt;
  if (l[4] === MEMO_CACHE_SENTINEL) ((mt = []), (l[4] = mt));
  else mt = l[4];
  E(lt, mt);
  let _t;
  if (l[5] !== f)
    ((_t = () => {
      ((H.current = !0),
        logEvent("tengu_remote_setup_result", { result: S("cancelled") }),
        f());
    }),
      (l[5] = f),
      (l[6] = _t));
  else _t = l[6];
  let T = _t,
    gt;
  if (l[7] !== x || l[8] !== K || l[9] !== f || l[10] !== P)
    ((gt = async (Mt, ft) => {
      ct({ name: "uploading" });
      let v = await wnn(Mt, x);
      if (v.ok) b4.of(K).markConnected(P);
      if (H.current) {
        return;
      }
      if (!v.ok) {
        (logEvent("tengu_remote_setup_result", {
          result: S("import_failed"),
          error_kind: fromEnum(v.error.kind),
          gh_token_workflow_scope: fromEnum(ft),
        }),
          f(et(v.error, c7())));
        return;
      }
      let Q;
      try {
        Q = (await MM(void 0, P, x)).length === 0;
      } catch {
        Q = !0;
      }
      if (H.current) {
        return;
      }
      if (Q) {
        try {
          await hne();
        } catch (L) {
          let Qt = L;
          n(`[web-setup] Failed to create default environment: ${Qt}`, {
            level: "warn",
          });
        }
        if (H.current) {
          return;
        }
      }
      let kt = c7();
      if ((await tryOpenUrlInBrowser(kt), H.current)) {
        return;
      }
      (logEvent("tengu_remote_setup_result", {
        result: S("success"),
        gh_token_workflow_scope: fromEnum(ft),
      }),
        f(`Connected as ${v.result.github_username}. Opened ${kt}`));
    }),
      (l[7] = x),
      (l[8] = K),
      (l[9] = f),
      (l[10] = P),
      (l[11] = gt));
  else gt = l[11];
  let Z = gt;
  if (h.name === "checking" || h.name === "uploading") {
    const L =
      h.name === "uploading"
        ? "Connecting GitHub to Claude\u2026"
        : "Checking login status\u2026";
    let A;
    if (l[12] !== L) ((A = e(SpinnerMessageLine, { message: L })), (l[12] = L), (l[13] = A));
    else A = l[13];
    let I;
    if (l[14] !== T || l[15] !== A)
      ((I = e(de, {
        title: "Connect Claude on the web to GitHub?",
        onCancel: T,
        hideInputGuide: !0,
        children: A,
      })),
        (l[14] = T),
        (l[15] = A),
        (l[16] = I));
    else I = l[16];
    return I;
  }
  let D = h.token,
    L,
    A;
  if (l[17] === MEMO_CACHE_SENTINEL)
    ((L = e(t, {
      children:
        "Claude on the web requires connecting to your GitHub account to clone and push code on your behalf.",
    })),
      (A = e(t, {
        dimColor: !0,
        children: "Your local credentials are used to authenticate with GitHub",
      })),
      (l[17] = L),
      (l[18] = A));
  else ((L = l[17]), (A = l[18]));
  let I;
  if (l[19] !== h.existingOAuth)
    ((I =
      h.existingOAuth &&
      e(o, {
        marginTop: 1,
        children: r(t, {
          color: "warning",
          children: [
            "You're already connected via the GitHub App. Continuing replaces your authentication credential for Claude Code on the web. Your repository access will change to reflect your local token's scopes. You can reconnect the GitHub App from",
            " ",
            jV(),
            " later.",
          ],
        }),
      })),
      (l[19] = h.existingOAuth),
      (l[20] = I));
  else I = l[20];
  let W;
  if (l[21] !== h.ghTokenWorkflowScope)
    ((W = h.ghTokenWorkflowScope === "missing" && e(V, {})),
      (l[21] = h.ghTokenWorkflowScope),
      (l[22] = W));
  else W = l[22];
  let X;
  if (l[23] !== I || l[24] !== W)
    ((X = r(o, { flexDirection: "column", children: [L, A, I, W] })),
      (l[23] = I),
      (l[24] = W),
      (l[25] = X));
  else X = l[25];
  const U = h.existingOAuth ? "Replace connection" : "Continue";
  let B;
  if (l[26] !== Z || l[27] !== h.ghTokenWorkflowScope || l[28] !== D)
    ((B = () => void Z(D, h.ghTokenWorkflowScope)),
      (l[26] = Z),
      (l[27] = h.ghTokenWorkflowScope),
      (l[28] = D),
      (l[29] = B));
  else B = l[29];
  let N;
  if (l[30] !== T || l[31] !== U || l[32] !== B)
    ((N = e(ConfirmPrompt, {
      confirmLabel: U,
      cancelLabel: "Cancel",
      onConfirm: B,
      onCancel: T,
    })),
      (l[30] = T),
      (l[31] = U),
      (l[32] = B),
      (l[33] = N));
  else N = l[33];
  let wt;
  if (l[34] !== T || l[35] !== X || l[36] !== N)
    ((wt = r(de, {
      title: "Connect Claude on the web to GitHub?",
      onCancel: T,
      hideInputGuide: !0,
      children: [X, N],
    })),
      (l[34] = T),
      (l[35] = X),
      (l[36] = N),
      (l[37] = wt));
  else wt = l[37];
  return wt;
}
var Xt = async (s, a) =>
  e(ot, {
    onDone: s,
    host: a.session.host,
    storageV5: a.storageV5,
    credentials: a.credentials,
  });
export { Xt as call };

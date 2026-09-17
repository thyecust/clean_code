// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 240 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { ke, bB, ic } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { z } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { archiveRemoteSession, Te, ee } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { getCwd } from "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import { execFileNoThrowWithCwd } from "../Git-Worktree/git-exec-hardening.js";
import { findGitRoot, getBranch, getDefaultBranch, hasUnpushedCommits } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { isGitHubHost } from "../../01-核心基础设施/共享小工具-未细化/git-host-utils.js";
import { o, t, ct } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { useAppStateSelectorUnchecked } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import { useKeybindings } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { PM, ede, _ne, IX, cde, teleportToRemote, subscribeRemoteSessionToPR } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import { createAbortController } from "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import { createScheduledTask, listScheduledTasks } from "../后台任务-Shell管理/scheduled-tasks.js";
import { CRON_DELETE_TOOL_NAME } from "../Cron-定时任务/chunk-mk3zm4ew.js";
import { getSdkHostedBridgeHandle, getReplBridgeHandle } from "../权限系统/chunk-1y2g140m.js";
import { wa } from "../工具结果持久化/工具结果持久化.jj43r39n.js";
import "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import "../Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import "../../01-核心基础设施/共享小工具-未细化/queued-message-context.js";
import { ErrorMessage } from "../../01-核心基础设施/共享小工具-未细化/error-message.js";
import { SpinnerMessageLine } from "../../01-核心基础设施/共享小工具-未细化/spinner-message-line.js";
import "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import "../../01-核心基础设施/共享小工具-未细化/linkified-text.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../Bridge-RemoteControl/remote-control-ui-strings.js";
import { E, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
var me = {
  checking: "Detecting open PR for current branch\u2026",
  spawning: "Spawning cloud autofix session\u2026",
  subscribing: "Turning on autofix\u2026",
};
async function ge(a, n, c) {
  let w, m;
  return (
    (m = a === "stop" || a === "off"),
    (w = { freeformPrompt: a }),
    Je(w, n, c)
  );
}
async function Je(a, n, { signal: c, onProgress: w }) {
  logEvent("tengu_autofix_pr_started", {
    action: S("start"),
    has_pr_number: S(a.prNumber !== void 0 ? "true" : "false"),
    has_repo_path: S(a.repoPath !== void 0 ? "true" : "false"),
    has_repo_ref: S(a.repoRef !== void 0 ? "true" : "false"),
  });
  let {
      prNumber: m,
      target: U,
      freeformPrompt: T,
      repoPath: g,
      repoRef: f,
    } = a,
    Y = a.skills ?? [];
  try {
    let h = g ?? getCwd(),
      [G, H, b, I] = f
        ? [
            void 0,
            void 0,
            await _ne({
              cwd: h,
              storageV5: n.storageV5,
              credentials: n.credentials,
            }),
            !1,
          ]
        : await Promise.all([
            getBranch(h),
            getDefaultBranch(h),
            _ne({ cwd: h, storageV5: n.storageV5, credentials: n.credentials }),
            hasUnpushedCommits(h),
          ]);
    if (m === void 0 && !f && G === H)
      return O(
        `cannot run on the default branch (${H}). This checks the branch of ${h} \u2014 check out a feature branch there first (or run Claude Code from your worktree).`,
        "on_default_branch",
      );
    if (!b.eligible) {
      let s = b.errors.map(IX).join(`
`);
      return O(
        `can't start autofix \u2014
${s}`,
        "not_eligible",
      );
    }
    let k;
    if (f) k = "remote_session";
    else {
      let s = !g || findGitRoot(g) === findGitRoot(getCwd());
      k = "remote_session";
    }
    let J = ["pr", "view"];
    if (m !== void 0) J.push(String(m));
    if (f) J.push("-R", De(f));
    J.push("--json", "number,state,url,headRefName");
    let {
      stdout: A,
      code: P,
      error: le,
    } = await execFileNoThrowWithCwd("gh", J, {
      timeout: 1e4,
      preserveOutputOnError: !0,
      abortSignal: c,
      cwd: h,
    });
    if (c.aborted) return ie();
    if (P !== 0 || !A.trim()) {
      if (le?.includes("ENOENT"))
        return O("gh CLI is required but not found.", "gh_not_found");
      if (le) return O(`gh pr view failed: ${le}`, "gh_failed");
      return O(
        m !== void 0
          ? `couldn't find PR #${m}${f ? ` in ${De(f)}` : " in this repo"}.`
          : `no open PR found for branch "${G}"${g ? ` in ${g}` : ""}. Create a PR first, then retry.`,
        "no_open_pr",
      );
    }
    let v, W, M, Ce, q;
    try {
      let s = z(A);
      if (s.state === "MERGED" || s.state === "CLOSED")
        return O(
          `PR #${s.number} is ${s.state.toLowerCase()}. Autofix requires an open PR.`,
          "pr_not_open",
        );
      let B = s.url.match(/\/([^/]+)\/([^/]+)\/pull\//);
      if (!B || !B[1] || !B[2])
        return O(`unexpected PR URL format: ${s.url}`, "bad_pr_url");
      ((v = s.number),
        (W = B[1]),
        (M = B[2]),
        (Ce = s.url),
        (q = m === void 0 && G ? G : s.headRefName));
    } catch {
      return O(
        `no open PR found for branch "${G}"${g ? ` in ${g}` : ""}. Create a PR first, then retry.`,
        "no_open_pr",
      );
    }
    let fe = `${W}/${M}`,
      ce = `${fe}#${v}`;
    w?.({ step: "checking", prInfo: { ref: ce, url: Ce } });
    let Se =
      Y.length > 0
        ? ` Run ${Y.join(" and ")} for custom instructions on how to autofix.`
        : "";
    if (k === "current_session") {
      let s = await Ke(ce, fe, v, Se),
        B = [];
      if (I)
        B.push(
          "WARNING: You have unpushed local commits, run git push so the PR reflects them",
        );
      if (ke())
        B.push(
          "Note: this is a non-interactive session \u2014 the poll cron only fires while this process stays alive. For one-shot `-p` runs, use `remote` instead.",
        );
      return (
        logEvent("tengu_autofix_pr_result", { result: S("success_current_session") }),
        B.length > 0 && s.kind === "ok"
          ? {
              ...s,
              message: `${s.message}

${B.join(`
`)}`,
            }
          : s
      );
    }
    let Ne =
        T ||
        `You're monitoring PR #${v} in ${fe}. When CI failures or review comments arrive as notifications, investigate and push fixes directly to the PR branch.${Se} Start by checking the current PR status.`,
      Ee = Object.values(n.taskRegistry.all()).find(
        (s) =>
          s.type === "remote_agent" &&
          s.remoteTaskType === "autofix-pr" &&
          s.status === "running" &&
          s.remoteTaskMetadata?.owner === W &&
          s.remoteTaskMetadata?.repo === M &&
          s.remoteTaskMetadata?.prNumber === v,
      );
    if (Ee?.type === "remote_agent")
      return (
        logEvent("tengu_autofix_pr_result", { result: S("success") }),
        {
          kind: "ok",
          message: `Already monitoring ${ce} in a cloud session
  ${figures.arrowRight} ${wa(Ee.sessionId, void 0, { from: "cli" })}`,
        }
      );
    w?.({ step: "spawning" });
    let pe,
      j = await teleportToRemote({
        initialMessage: Ne,
        source: "autofix_pr",
        branchName: q,
        reuseOutcomeBranch: q,
        title: `Autofix PR: ${W}/${M}#${v} (${q})`,
        useDefaultEnvironment: !0,
        signal: c,
        githubPr: { owner: W, repo: M, number: v },
        cwd: h,
        sourceUrl: f ? `https://${f.host}/${f.owner}/${f.repo}` : void 0,
        onBundleFail: (s) => {
          pe = s;
        },
        onCreateFail: (s) => {
          pe = s;
        },
        storageV5: n.storageV5,
        credentials: n.credentials,
      });
    if (c.aborted) {
      if (j) archiveRemoteSession(j.id);
      return ie();
    }
    if (!j)
      return O(pe ?? "cloud session creation failed.", "session_create_failed");
    w?.({ step: "subscribing" });
    let Oe = await subscribeRemoteSessionToPR(j.id, `${W}/${M}`, v);
    if (c.aborted) return (archiveRemoteSession(j.id), ie());
    cde({
      remoteTaskType: "autofix-pr",
      session: { id: j.id, title: j.title },
      command: Ne,
      isLongRunning: !0,
      remoteTaskMetadata: { owner: W, repo: M, prNumber: v },
      context: {
        abortController: new AbortController(),
        taskRegistry: n.taskRegistry,
        storageV5: n.storageV5,
        credentials: n.credentials,
      },
    });
    let Xe = wa(j.id, void 0, { from: "cli" }),
      se = [];
    if (!Oe.ok)
      se.push(
        Oe.reason === "github_app_not_installed"
          ? `Autofix is on, but webhook events won't arrive until the Claude GitHub app is installed on ${W}/${M}: ${ede}`
          : "WARNING: Failed to turn on autofix for this PR",
      );
    if (!f) {
      if (I)
        se.push(
          "WARNING: You have unpushed local commits, run git push so the cloud session sees them",
        );
    }
    let Ye =
      se.length > 0
        ? `

` +
          se.join(`
`)
        : "";
    return (
      logEvent("tengu_autofix_pr_result", { result: S("success") }),
      {
        kind: "ok",
        message: `Spawned cloud autofix PR session on ${q} (PR #${v})
  ${figures.arrowRight} ${Xe}${Ye}`,
      }
    );
  } catch (h) {
    if (c.aborted) return ie();
    return O(l(h), "exception");
  }
}
var Ie = "Babysit PR ";
function O(a, n) {
  return (
    logEvent("tengu_autofix_pr_result", { result: S("failed"), error_code: fromEnum(n) }),
    { kind: "error", message: `Autofix PR failed: ${a}`, code: n }
  );
}
function ie() {
  return (
    logEvent("tengu_autofix_pr_result", { result: S("cancelled") }),
    { kind: "cancelled" }
  );
}
async function Ke(a, n, c, w) {
  let m = getReplBridgeHandle() ?? getSdkHostedBridgeHandle(),
    U = !1,
    T = !1,
    g = U && !T,
    f = ic() && !!m,
    Y = g && f && m ? await m.subscribePR(n, c) : { ok: !1 },
    h = `${Ie}${a} (created in this session). Check state with \`gh pr view ${c} -R ${n} --json state,mergeable,mergeStateStatus,statusCheckRollup\` and new review comments with \`gh api --paginate repos/${n}/pulls/${c}/comments\`. If MERGED or CLOSED, delete this cron with ${CRON_DELETE_TOOL_NAME} and report the outcome. If CI is failing, comments are unaddressed, or there are merge conflicts, fix and push.${w} Otherwise nothing to do \u2014 complete the turn without commentary.`,
    H = (await listScheduledTasks()).some(
      (I) => I.durable === !1 && I.prompt.startsWith(`${Ie}${a} `),
    );
  if (!H) (await createScheduledTask("*/30 * * * *", h, !0, !1), bB(!0));
  let b = [`Monitoring ${a} in this session.`];
  if (Y.ok)
    b.push(
      "Webhook events (CI failures, reviews, close/reopen) will arrive as user messages.",
    );
  else if (!U)
    b.push(
      "PR webhooks are turned off right now, so this session polls every 30 minutes instead.",
    );
  else if (T)
    b.push(
      "Claude Desktop watches PRs with its own tools, so this session doesn't subscribe to webhooks. It polls every 30 minutes instead.",
    );
  else if (f)
    b.push(
      Y.reason === "github_app_not_installed"
        ? `Webhook events won't arrive until the Claude GitHub app is installed on this repo. Install it at ${ede}, then retry \u2014 falling back to a 30-minute poll for now.`
        : "Couldn't subscribe this session to PR webhooks \u2014 falling back to a 30-minute poll. Check the debug log for [bridge] subscribe-pr.",
    );
  else
    b.push(
      "Remote Control isn't connected, so webhooks can't be routed here \u2014 falling back to a 30-minute poll. Connect from the mobile or web app for real-time notifications.",
    );
  return (
    b.push(
      H
        ? "A poll cron for this PR is already registered."
        : "Registered a 30-minute poll cron as a backstop for merge conflicts (and CI/reviews when webhooks are unavailable).",
    ),
    { kind: "ok", display: "system", message: b.join(" ") }
  );
}
function De({ owner: a, repo: n, host: c }) {
  return isGitHubHost(c) ? `${a}/${n}` : `${c}/${a}/${n}`;
}
function lt() {
  return !ee().hasSeenAutofixPrChatOpsNotice;
}
function ft(He) {
  return He.hasSeenAutofixPrChatOpsNotice
    ? He
    : { ...He, hasSeenAutofixPrChatOpsNotice: !0 };
}
function pt(lr) {
  return lr.settings?.prUrlTemplate;
}
var qt = async (a, n, c) => e(Ve, { onDone: a, context: n, args: c.trim() });
function Ve(Qt) {
  let V = _(20),
    { onDone: y, context: Z, args: Ge } = Qt,
    [Zt, er] = d(lt);
  if (!Zt) {
    let K;
    if (V[0] !== Ge || V[1] !== Z || V[2] !== y)
      ((K = e(ye, { onDone: y, context: Z, args: Ge })),
        (V[0] = Ge),
        (V[1] = Z),
        (V[2] = y),
        (V[3] = K));
    else K = V[3];
    return K;
  }
  let K;
  if (V[4] !== y)
    ((K = () => y("Autofix PR cancelled", { display: "system" })),
      (V[4] = y),
      (V[5] = K));
  else K = V[5];
  let qe;
  if (V[6] === MEMO_CACHE_SENTINEL)
    ((qe = e(KeybindingHint, { chord: "escape", action: "cancel" })), (V[6] = qe));
  else qe = V[6];
  let ze;
  if (V[7] === MEMO_CACHE_SENTINEL)
    ((ze = e(t, {
      children:
        "Auto-fix monitors the PR and can post comments on your behalf using your GitHub identity.",
    })),
      (V[7] = ze));
  else ze = V[7];
  let Qe;
  if (V[8] === MEMO_CACHE_SENTINEL)
    ((Qe = [
      {
        value: "continue",
        label: "Continue",
        description: "start monitoring this PR",
      },
      { value: "cancel", label: "Not now" },
    ]),
      (V[8] = Qe));
  else Qe = V[8];
  let he;
  if (V[9] !== Z || V[10] !== y)
    ((he = (rr) => {
      if (rr === "continue") (Te(ft, Z.storageV5), er(!1));
      else y("Autofix PR cancelled", { display: "system" });
    }),
      (V[9] = Z),
      (V[10] = y),
      (V[11] = he));
  else he = V[11];
  let be;
  if (V[12] !== y)
    ((be = () => y("Autofix PR cancelled", { display: "system" })),
      (V[12] = y),
      (V[13] = be));
  else be = V[13];
  let Re;
  if (V[14] !== he || V[15] !== be)
    ((Re = r(o, {
      flexDirection: "column",
      gap: 1,
      children: [ze, e(ve, { options: Qe, onChange: he, onCancel: be })],
    })),
      (V[14] = he),
      (V[15] = be),
      (V[16] = Re));
  else Re = V[16];
  let et;
  if (V[17] !== K || V[18] !== Re)
    ((et = e(de, {
      title: "Autofix PR",
      subtitle: "Before you start",
      onCancel: K,
      inputGuide: qe,
      children: Re,
    })),
      (V[17] = K),
      (V[18] = Re),
      (V[19] = et));
  else et = V[19];
  return et;
}
function ye(or) {
  let X = _(31),
    { onDone: te, context: re, args: oe } = or,
    Le = useAppStateSelectorUnchecked(pt),
    [We, nr] = d("checking"),
    [ae, sr] = d(null),
    [R, ir] = d(null),
    [ne, ar] = d(!1),
    tt = C(null),
    Pe = C(!1),
    rt = C(!1),
    ot;
  if (X[0] !== te)
    ((ot = function x(..._e) {
      let ur = _e;
      if (rt.current) {
        return;
      }
      ((rt.current = !0), te(...ur));
    }),
      (X[0] = te),
      (X[1] = ot));
  else ot = X[1];
  let x = ot,
    _e;
  if (X[2] !== oe || X[3] !== re || X[4] !== x)
    ((_e = () => {
      let xe = createAbortController();
      return (
        (tt.current = xe),
        ge(oe, re, {
          signal: xe.signal,
          onProgress: (Me) => {
            if ((nr(Me.step), Me.prInfo)) sr(Me.prInfo);
          },
        })
          .then((we) => {
            if (xe.signal.aborted && !Pe.current) {
              return;
            }
            switch (we.kind) {
              case "ok": {
                x(we.message, { display: we.display });
                return;
              }
              case "error": {
                if (Pe.current) x("Autofix PR cancelled");
                else ir(we.message);
                return;
              }
              case "cancelled": {
                x("Autofix PR cancelled");
                return;
              }
            }
          })
          .catch((je) => {
            x(
              `Autofix PR failed: ${je instanceof Error ? je.message : String(je)}`,
            );
          }),
        () => {
          xe.abort();
        }
      );
    }),
      (X[2] = oe),
      (X[3] = re),
      (X[4] = x),
      (X[5] = _e));
  else _e = X[5];
  let nt;
  if (X[6] !== oe || X[7] !== re || X[8] !== te)
    ((nt = [te, re, oe]), (X[6] = oe), (X[7] = re), (X[8] = te), (X[9] = nt));
  else nt = X[9];
  E(_e, nt);
  let st;
  if (X[10] !== x || X[11] !== R)
    ((st = function ue() {
      if (R) {
        x(R);
        return;
      }
      if (Pe.current) {
        x("Autofix PR cancelled");
        return;
      }
      ((Pe.current = !0), ar(!0), tt.current?.abort());
    }),
      (X[10] = x),
      (X[11] = R),
      (X[12] = st));
  else st = X[12];
  let ue = st,
    it;
  if (X[13] !== x || X[14] !== R)
    ((it = {
      "confirm:yes": () => {
        if (R) x(R);
      },
    }),
      (X[13] = x),
      (X[14] = R),
      (X[15] = it));
  else it = X[15];
  const Fe = R !== null;
  let at;
  if (X[16] !== Fe)
    ((at = { context: "Confirmation", isActive: Fe }),
      (X[16] = Fe),
      (X[17] = at));
  else at = X[17];
  useKeybindings(it, at);
  let $e;
  if (X[18] !== ne || X[19] !== R)
    (($e = R
      ? e(KeybindingHint, { chord: ["escape", "enter"], action: "close" })
      : ne
        ? e(KeybindingHint, { chord: "escape", action: "dismiss now" })
        : e(KeybindingHint, { chord: "escape", action: "cancel" })),
      (X[18] = ne),
      (X[19] = R),
      (X[20] = $e));
  else $e = X[20];
  let Ae;
  if (
    X[21] !== ne ||
    X[22] !== R ||
    X[23] !== ae ||
    X[24] !== Le ||
    X[25] !== We
  )
    ((Ae = e(o, {
      flexDirection: "column",
      gap: 1,
      children: R
        ? e(ErrorMessage, { error: R })
        : r(N, {
            children: [
              e(SpinnerMessageLine, { message: ne ? "Cancelling\u2026" : me[We] }),
              ae &&
                r(t, {
                  dimColor: !0,
                  children: [
                    "PR:",
                    " ",
                    e(ct, { url: PM(ae.url, Le), children: ae.ref }),
                  ],
                }),
            ],
          }),
    })),
      (X[21] = ne),
      (X[22] = R),
      (X[23] = ae),
      (X[24] = Le),
      (X[25] = We),
      (X[26] = Ae));
  else Ae = X[26];
  let ut;
  if (X[27] !== ue || X[28] !== $e || X[29] !== Ae)
    ((ut = e(de, {
      title: "Autofix PR",
      subtitle: "Monitor and autofix any issues with the current PR",
      onCancel: ue,
      inputGuide: $e,
      children: Ae,
    })),
      (X[27] = ue),
      (X[28] = $e),
      (X[29] = Ae),
      (X[30] = ut));
  else ut = X[30];
  return ut;
}
export { qt as call };

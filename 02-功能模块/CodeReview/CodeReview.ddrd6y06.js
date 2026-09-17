// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { K } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { zn } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { getOauthConfig } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { tUe, ht, checkAndRefreshOAuthTokenIfNeeded } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { le, nt, ru } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { lit as S, fromEnum, fromEnumOpt, fromEnumArr } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { l, Ub } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize, truncateToCodeUnits } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { isEssentialTrafficOnly } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getCwd } from "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import { GIT_HARDENED_ARGS, buildNonInteractiveGitEnv, GIT_SSH_HARDENING_ARGS, execFileNoThrow } from "../Git-Worktree/git-exec-hardening.js";
import { gitExe, getBranch, getDefaultBranch } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { truncateToWidth } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { isGitHubHost, isSameHost } from "../../01-核心基础设施/共享小工具-未细化/git-host-utils.js";
import { ERt } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { isDesktopHostEntrypoint } from "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import { isNestedGitLabProject, detectCurrentRepositoryWithHost } from "../Git-Worktree/git-repository-detection.js";
import { isPolicyAllowed, policyDeniedReason } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { getBridgeEntitlementBlocker } from "../Bridge-RemoteControl/chunk-9estzwf5.js";
import { b_ } from "../策略限制(PolicyLimits)/chunk-hpw6352m.js";
import {
  kte,
  getReviewCostNote,
  getReviewDurationNote,
  EGn,
  $Oe,
  X$t,
  AGn,
  CGn,
  ZA,
  vGn,
  BOe,
  ygt,
  ede,
  ZDe,
  Lgt,
  njt,
  WVe,
  DTe,
  _ne,
  IX,
  cde,
  S3,
  FLe,
  teleportToRemote,
  Kne,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { TTt } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { markUltrareviewRun } from "./ultrareview-tips.js";
import { homedir } from "os";
import { resolve } from "path";
var de = createLazyValue(() =>
  nt({
    action: ru(["proceed", "confirm", "blocked"]),
    billing_note: le().nullable().optional(),
    github_login: le().nullable().optional(),
    confirm: nt({ title: le().optional(), body: le() }).nullable().optional(),
    blocked: nt({
      message: le(),
      action_url: le().nullable(),
      reason: le().optional(),
    })
      .nullable()
      .optional(),
  }),
);
function ce(r, t) {
  return {
    action: "blocked",
    blocked: { message: r, action_url: null, reason: t },
  };
}
async function fe(r) {
  let t = a.CLAUDE_CODE_ULTRAREVIEW_PREFLIGHT_FIXTURE;
  if (t) {
    let d = de().safeParse(z(t));
    return d.success ? d.data : null;
  }
  try {
    let d = await ht.get("/v1/ultrareview/preflight", {
      auth: "teleport-org",
      timeout: 5000,
      credentials: r,
      headers: { [tUe]: K() },
    });
    if (!d.ok)
      switch (d.reason) {
        case "essential-traffic-only":
          return ce(
            "Ultrareview runs in Claude Code on the web and is unavailable when essential-traffic-only mode is active.",
            "zdr",
          );
        case "data-residency":
          return ce(
            "Ultrareview runs in Claude Code on the web and is unavailable on third-party providers.",
            "data_residency",
          );
        case "no-auth":
          return ce(
            "Ultrareview requires a Claude.ai account. Run /login to authenticate.",
            "no_oauth_token",
          );
      }
    let e = de().safeParse(d.data);
    if (!e.success)
      return (
        n(`fetchUltrareviewPreflight schema mismatch: ${e.error.message}`),
        logFeatureSad("api_ultrareview_preflight", "schema_mismatch"),
        null
      );
    return (logFeatureOk("api_ultrareview_preflight"), e.data);
  } catch (d) {
    return (
      n(`fetchUltrareviewPreflight failed: ${d}`),
      logFeatureSad("api_ultrareview_preflight", "request_failed"),
      null
    );
  }
}
var _e = "4b825dc642cb6eb9a060e54bf8d69288fbee4904";
var POST_IGNORED_NOTE = `
Note: --post was ignored \u2014 posting applies only to GitHub.com pull request reviews.`,
  POST_DISABLED_NOTE = `
Note: --post was ignored \u2014 posting findings to the PR is currently turned off.`;
function parseUltrareviewArgs(r) {
  let t = /^(--fix|--comment|--post|--no-post)(?:\s+|$)/,
    d = /(?:^|\s+)(--fix|--comment|--post|--no-post)$/,
    e = new Set(),
    o = r.trim();
  for (;;) {
    let _ = o.match(t);
    if (!_) break;
    (e.add(_[1]), (o = o.slice(_[0].length)));
  }
  for (;;) {
    let _ = o.match(d);
    if (!_) break;
    (e.add(_[1]), (o = o.slice(0, o.length - _[0].length)));
  }
  return {
    scopeArgs: o,
    applyFixes: e.has("--fix"),
    postReview: e.has("--no-post") ? !1 : e.has("--post") ? !0 : void 0,
  };
}
async function precheckLaunchScope(r, t = "/code-review ultra", d) {
  if (!(await WVe()))
    return (
      logEvent("tengu_review_remote_precondition_failed", {
        reason: S("not_git_repo"),
        cwd_is_home: L(),
      }),
      {
        ok: !1,
        reason: "not_git_repo",
        error: `${t} needs a git repository so it can clone your code into a cloud sandbox, but ${getCwd()} is not inside one. ${he()}`,
      }
    );
  let e = r.trim(),
    o = ygt(e),
    _ = o?.num.toString() ?? e.match(/^(?:#|PR[\s#]*)(\d+)$/i)?.[1] ?? e;
  if (/^\d+$/.test(_)) {
    let s = (C) => {
        if (C === "succeeded" && d?.suppressSucceededRecoveryEvent) return;
        if (_ !== e)
          logEvent("tengu_review_remote_precondition_recovery", {
            reason: S("base_ref_not_found"),
            method: S("pr_arg_normalization"),
            outcome: fromEnum(C),
          });
      },
      R = await detectCurrentRepositoryWithHost(),
      c = R && isNestedGitLabProject(R) ? null : R,
      B = isSameHost(o?.host, c?.host) || (!!o && !!c && isGitHubHost(o.host) && isGitHubHost(c.host));
    if (
      o &&
      (!B ||
        o.owner.toLowerCase() !== c?.owner.toLowerCase() ||
        o.repo.toLowerCase() !== c?.name.toLowerCase())
    ) {
      (logEvent("tengu_review_remote_precondition_failed", {
        reason: S("pr_url_wrong_repo"),
        has_remote: !!c,
        cwd_is_home: L(),
      }),
        s("failed"));
      let C = `${o.owner}/${o.repo} on ${o.host}`,
        F = c
          ? `you're in ${c.owner}/${c.name} on ${c.host}`
          : "this directory has no GitHub remote";
      return {
        ok: !1,
        reason: "pr_url_wrong_repo",
        error: `That link is for ${C}, but ${F}. cd into a checkout of that repo and run ${t} ${o.num} from there.`,
      };
    }
    if (!c)
      return (
        logEvent("tengu_review_remote_precondition_failed", {
          reason: S("no_github_remote"),
          cwd_is_home: L(),
        }),
        s("failed"),
        {
          ok: !1,
          reason: "no_github_remote",
          error: `${t} <PR#> needs a GitHub remote so it knows which repository the PR is in. If this project is not on GitHub yet, run "gh repo create --source=. --push" to create one; if a GitHub repo already exists, run "git remote add origin REPO_URL". Or run ${t} with no argument to review your current branch instead.`,
        }
      );
    if (TTt(c))
      return (
        logEvent("tengu_review_remote_precondition_failed", {
          reason: S("monorepo_blocked"),
          cwd_is_home: L(),
        }),
        s("failed"),
        {
          ok: !1,
          reason: "monorepo_blocked",
          error: `${t} doesn't support the Anthropic monorepo \u2014 monorepo PRs are reviewed automatically by bughunter. Re-trigger it from the PR checks page, or run /bughunter here for a local hunt.`,
        }
      );
    let M,
      P,
      [{ stdout: j, code: V }, I] = await Promise.all([
        execFileNoThrow(
          "gh",
          [
            "pr",
            "view",
            _,
            "--repo",
            `${c.host}/${c.owner}/${c.name}`,
            "--json",
            "additions,deletions,changedFiles",
          ],
          { timeout: 5000, preserveOutputOnError: !1 },
        ),
        isGitHubHost(c.host) && CGn() && !isEssentialTrafficOnly()
          ? $e(c.owner, c.name, d?.accessProbeBudgetMs ?? 5000)
          : null,
      ]);
    if (I) {
      if (
        (n(
          `ultrareview: linked GitHub account access to ${c.owner}/${c.name}: ${I.verdict} (HTTP ${I.httpStatus ?? "none"})`,
        ),
        !d?.suppressOfferedRecoveryEvent)
      )
        logEvent("tengu_review_remote_github_access_probe", {
          verdict: fromEnum(I.verdict),
          http_status: I.httpStatus ?? void 0,
        });
    }
    if (
      I?.verdict === "github_not_connected" ||
      I?.verdict === "github_repo_not_found"
    ) {
      (logEvent("tengu_review_remote_precondition_failed", {
        reason: fromEnum(I.verdict),
        cwd_is_home: L(),
      }),
        s("failed"));
      let C = `${c.owner}/${c.name}`,
        F = `${getOauthConfig().CLAUDE_AI_ORIGIN}/code/onboarding?step=alt-auth`,
        G =
          !isDesktopHostEntrypoint() &&
          !isEssentialTrafficOnly() &&
          isPolicyAllowed("allow_remote_sessions") &&
          isPolicyAllowed("allow_quick_web_setup")
            ? `run /web-setup${t.startsWith("/") ? "" : " in Claude Code"} to reuse your GitHub CLI login`
            : "",
        U = `then re-run ${t} ${_}`,
        ee = `install the app at ${ede}`,
        se = G && V === 0 ? `${G}, or ${ee}` : `${ee}${G ? `, or ${G}` : ""}`,
        ae =
          I.verdict === "github_not_connected"
            ? `Ultrareview clones ${C} in the cloud with the GitHub account connected to your Claude account, and none is connected (or the connection expired). To fix: ${G ? `${G}, or connect` : "connect"} an account at ${F} \u2014 ${U} (allow a minute after connecting).`
            : `Your connected GitHub account can't see ${C} \u2014 usually the Claude GitHub app isn't installed on ${c.owner} or wasn't granted this repo (web-connected accounts need it for private repos), or a different GitHub account is connected. To fix: ${se} \u2014 ${U}.`;
      return { ok: !1, reason: I.verdict, error: ae };
    }
    if (V === 0 && j.trim())
      try {
        let C = z(j),
          { maxFiles: F, maxLines: G } = X$t(),
          U = C.additions + C.deletions;
        if (Number.isFinite(C.changedFiles) && Number.isFinite(U))
          ((M = C.changedFiles), (P = U));
        if (C.changedFiles > F || U > G)
          return (
            logEvent("tengu_review_remote_precondition_failed", {
              reason: S("pr_diff_too_large"),
              files: C.changedFiles,
              lines: U,
              max_files: F,
              max_lines: G,
              cwd_is_home: L(),
            }),
            s("failed"),
            {
              ok: !1,
              reason: "pr_diff_too_large",
              error: `PR #${_} is too large for ultrareview (${C.changedFiles} files, ${U.toLocaleString()} lines). Split it into smaller PRs, or run \`${t}\` on a narrower local diff.`,
            }
          );
      } catch {}
    return (
      s("succeeded"),
      {
        ok: !0,
        scope: {
          mode: "pr",
          prNumber: _,
          repo: `${c.owner}/${c.name}`,
          host: c.host,
          hadArg: !0,
          diffFiles: M,
          diffLines: P,
        },
      }
    );
  }
  let E = await FLe();
  if (E.tooLarge)
    return (
      logEvent("tengu_review_remote_precondition_failed", {
        reason: S("repo_too_large_to_bundle"),
        pack_bytes: E.sizeBytes ?? void 0,
        pack_objects: E.inPackCount ?? void 0,
        cwd_is_home: L(),
      }),
      {
        ok: !1,
        reason: "repo_too_large_to_bundle",
        error: `Repo is too large to bundle. Push a PR and use \`${t} <PR#>\` instead.`,
      }
    );
  let w = async (s) =>
      (
        await execFileNoThrow(
          gitExe(),
          [...GIT_HARDENED_ARGS, "rev-parse", "--verify", "--quiet", "--end-of-options", s],
          { preserveOutputOnError: !1 },
        )
      ).code === 0,
    p = /\s/.test(e),
    N = p && ((await w(`origin/${e}`)) || (await w(e))),
    O = p && !N ? e.match(/https:\/\/\S*\/pull\/\d+\b/) : null,
    T =
      p && !N && !O
        ? (e.match(/(?<![\w/#-])(?:#|PR)[-\s#]*(\d+)\b/i) ??
          e.match(/(?<![\w/#-])pull[\s-]+request[-\s#]*(\d+)\b/i) ??
          e.match(/\/pull\/(\d+)\b/i) ??
          e.match(/^(\d+)\b/))
        : null;
  if (O || T) {
    let s = O ? O[0] : `#${T[1]}`,
      R = O ? O[0] : T[1];
    return (
      logEvent("tengu_review_remote_precondition_recovery", {
        reason: S("base_ref_not_found"),
        method: S("embedded_pr_hint"),
        outcome: S("offered"),
      }),
      logEvent("tengu_review_remote_precondition_failed", {
        reason: S("base_ref_not_found"),
        looks_like_url: /^https?:/i.test(e),
        looks_like_sha: !1,
        starts_with_hash: e.startsWith("#"),
        has_slash: e.includes("/"),
        has_whitespace: !0,
        has_pr_ref: !0,
        has_remote: await ue(),
        cwd_is_home: L(),
      }),
      {
        ok: !1,
        reason: "base_ref_not_found",
        error: `Your request mentions what looks like a PR reference (${s}). To review that PR, run \`${t} ${R}\`. To review your current branch instead, rerun without the PR-style reference.`,
      }
    );
  }
  let A = p && !N && !e.startsWith("-"),
    te = A ? e : void 0,
    h = A ? "" : e,
    Y = !1;
  if (h) {
    if (!(await w(`origin/${h}`)) && !(await w(h))) {
      let s = await ve(h);
      if (s === "recovered" && (await w(`origin/${h}`))) Y = !0;
      else {
        if (s !== "not_found")
          logEvent("tengu_review_remote_precondition_recovery", {
            reason: S("base_ref_not_found"),
            method: S("fetch_retry"),
            outcome: S("failed"),
          });
        if (s === "fetch_failed")
          return (
            logEvent("tengu_review_remote_precondition_failed", {
              reason: S("base_ref_not_found"),
              looks_like_url: /^https?:/i.test(h),
              looks_like_sha: /^[0-9a-f]{7,40}$/i.test(h),
              starts_with_hash: h.startsWith("#"),
              has_slash: h.includes("/"),
              has_whitespace: /\s/.test(h),
              has_remote: await ue(),
              cwd_is_home: L(),
            }),
            {
              ok: !1,
              reason: "base_ref_not_found",
              error: `"${h}" exists on origin but couldn't be fetched. Run \`git fetch origin ${h}\` and try ${t} again.`,
            }
          );
        let R = await ye(h);
        if (R)
          logEvent("tengu_review_remote_precondition_recovery", {
            reason: S("base_ref_not_found"),
            method: S("branch_suggestion"),
            outcome: S("offered"),
          });
        logEvent("tengu_review_remote_precondition_failed", {
          reason: S("base_ref_not_found"),
          looks_like_url: /^https?:/i.test(h),
          looks_like_sha: /^[0-9a-f]{7,40}$/i.test(h),
          starts_with_hash: h.startsWith("#"),
          has_slash: h.includes("/"),
          has_whitespace: /\s/.test(h),
          has_remote: await ue(),
          cwd_is_home: L(),
        });
        let c = R ? ` Did you mean \`${R}\`?` : "";
        return {
          ok: !1,
          reason: "base_ref_not_found",
          error: `"${h}" is not a branch in this repo.${c} ${t} takes a PR number, a branch name, or no argument (reviews your current branch). Try ${t} by itself.`,
        };
      }
    }
  }
  let H = (s) => {
      if (Y)
        logEvent("tengu_review_remote_precondition_recovery", {
          reason: S("base_ref_not_found"),
          method: S("fetch_retry"),
          outcome: fromEnum(s),
        });
      if (A) {
        if (s === "succeeded" && d?.suppressSucceededRecoveryEvent) return;
        logEvent("tengu_review_remote_precondition_recovery", {
          reason: S("base_ref_not_found"),
          method: S("prose_instructions"),
          outcome: fromEnum(s),
        });
      }
    },
    v = h || (await getDefaultBranch()) || "main",
    X = (await getBranch()) || "HEAD",
    Z = async (s) =>
      execFileNoThrow(gitExe(), [...GIT_HARDENED_ARGS, "merge-base", s, "HEAD"], { preserveOutputOnError: !1 }),
    D = `origin/${v}`,
    { stdout: J, code: re } = await Z(D);
  if (re !== 0) ((D = v), ({ stdout: J, code: re } = await Z(D)));
  let W = J.trim(),
    q = (s) => execFileNoThrow(gitExe(), [...GIT_HARDENED_ARGS, ...s], { preserveOutputOnError: !1 }),
    ie = `Your checkout has no branches (detached HEAD only), which cloud review can't bundle. Create one first \u2014 \`git checkout -b <name>\` \u2014 then rerun ${t}.`;
  if (re !== 0 || !W) {
    let s = (await q(["rev-parse", "--verify", "--quiet", "HEAD"])).code === 0,
      R = (await q(["rev-parse", "--is-shallow-repository"])).stdout.trim(),
      c = R === "true",
      B = R === "false",
      M = s && B && AGn(),
      P = M ? await q(["for-each-ref", "--count=1", "refs/"]) : null,
      j = P !== null && P.stdout.trim() !== "",
      V = P !== null && P.code === 0 && P.stdout.trim() === "";
    if (M && j) {
      let C =
          h.length > 0 ||
          (await q(["rev-parse", "--verify", "--quiet", `origin/${v}`]))
            .code === 0 ||
          (await q(["rev-parse", "--verify", "--quiet", v])).code === 0,
        { stdout: F, code: G } = await execFileNoThrow(
          gitExe(),
          [...GIT_HARDENED_ARGS, "diff", "--no-ext-diff", "--no-textconv", "--shortstat", _e],
          { preserveOutputOnError: !1, env: { ...process.env, LC_ALL: "C" } },
        );
      if (G === 0) {
        if (!F.trim())
          return (
            logEvent("tengu_review_remote_precondition_failed", {
              reason: S("empty_diff"),
              cwd_is_home: L(),
            }),
            H("failed"),
            {
              ok: !1,
              reason: "empty_diff",
              error: C
                ? `It doesn't look like you have any new commits or changes to review against your ${v} branch. Stage or commit them first?`
                : "It doesn't look like you have any changes to review. Stage or commit them first?",
            }
          );
        let U = Lgt(F),
          ee = U ? U.linesAdded + U.linesRemoved : 0,
          { maxFiles: se, maxLines: ae } = X$t();
        if (U && (U.filesCount > se || ee > ae)) {
          (logEvent("tengu_review_remote_precondition_failed", {
            reason: S("local_diff_too_large"),
            files: U.filesCount,
            lines: ee,
            max_files: se,
            max_lines: ae,
            after_fallback: !0,
            cwd_is_home: L(),
          }),
            H("failed"));
          let ge = C
            ? `Review a smaller subset by committing it on a branch off an empty base, or push a PR and use \`${t} <PR#>\`.`
            : `This repo has no ${v} branch \u2014 if another branch is your base, pass it explicitly (\`${t} <branch>\`). Otherwise review a smaller subset by committing it on a branch off an empty base, or push a PR and use \`${t} <PR#>\`.`;
          return {
            ok: !1,
            reason: "local_diff_too_large",
            error: `This looks like a first review of the entire repository (${F.trim()}), which exceeds ultrareview's limit. ${ge}`,
          };
        }
        if (!d?.suppressOfferedRecoveryEvent)
          logEvent("tengu_review_remote_precondition_recovery", {
            reason: S("no_merge_base"),
            method: S("empty_tree_bundle"),
            outcome: S("offered"),
            files: U?.filesCount,
            lines: U ? ee : void 0,
            is_shallow: !1,
          });
        return (
          H("succeeded"),
          {
            ok: !0,
            scope: {
              mode: "branch",
              headBranch: X,
              baseBranch: v,
              mergeBaseSha: _e,
              diffStat: F.trim(),
              hadArg: h.length > 0,
              diffFiles: U?.filesCount,
              diffLines: U ? ee : void 0,
              noMergeBase: C ? "unrelated_history" : "base_ref_missing",
              instructions: te,
            },
          }
        );
      }
    }
    if (
      (logEvent("tengu_review_remote_precondition_failed", {
        reason: S("no_merge_base"),
        cwd_is_home: L(),
        is_shallow: c,
        head_resolves: s,
        arg_was_explicit: h.length > 0,
        has_refs: j ? !0 : V ? !1 : void 0,
      }),
      H("failed"),
      !s)
    )
      return {
        ok: !1,
        reason: "no_merge_base",
        error: `Your current branch has no commits yet, so there is nothing to review. Commit your changes first, then rerun ${t}.`,
      };
    if (c)
      return (
        logEvent("tengu_review_remote_precondition_recovery", {
          reason: S("no_merge_base"),
          method: S("deepen_hint"),
          outcome: S("offered"),
          is_shallow: !0,
        }),
        {
          ok: !1,
          reason: "no_merge_base",
          error: h
            ? `Your clone is shallow and doesn't contain the point where your branch forked from ${v}. Run \`git fetch --deepen=100 origin ${v}\` (or \`git fetch --unshallow origin\`) and rerun ${t}.`
            : `Your clone is shallow and doesn't contain the point where your branch forked from ${v}. Run \`git fetch --unshallow origin\` and rerun ${t}. If your base branch isn't ${v}, pass it explicitly (\`${t} <branch>\`).`,
        }
      );
    if (V) return { ok: !1, reason: "no_refs", error: ie };
    let I = Y
      ? B
        ? `${v} was fetched from origin but shares no history with HEAD. If another branch is your real base, pass it explicitly (\`${t} <branch>\`).`
        : `${v} was fetched from origin but shares no history with HEAD. Try \`git fetch --unshallow origin\` (or deepen the clone) and rerun.`
      : h
        ? `Make sure ${v} exists locally or on origin (try \`git fetch origin ${v}\`).`
        : `Pass the base branch explicitly (e.g. \`${t} develop\`) or make sure you're in a git repo with a ${v} branch.`;
    return {
      ok: !1,
      reason: "no_merge_base",
      error: `Could not find merge-base with ${v}. ${I}`,
    };
  }
  if (h.length > 0) {
    let s = await q(["for-each-ref", "--count=1", "refs/"]);
    if (s.code === 0 && s.stdout.trim() === "")
      return (
        logEvent("tengu_review_remote_precondition_failed", {
          reason: S("no_refs"),
          cwd_is_home: L(),
          arg_was_explicit: !0,
        }),
        H("failed"),
        { ok: !1, reason: "no_refs", error: ie }
      );
  }
  let { stdout: ne, code: k } = await execFileNoThrow(
    gitExe(),
    [...GIT_HARDENED_ARGS, "diff", "--no-ext-diff", "--no-textconv", "--shortstat", W],
    { preserveOutputOnError: !1, env: { ...process.env, LC_ALL: "C" } },
  );
  if (k === 0 && !ne.trim()) {
    (logEvent("tengu_review_remote_precondition_failed", {
      reason: S("empty_diff"),
      used_origin_ref: D !== v,
      had_explicit_base: h.length > 0,
      cwd_is_home: L(),
    }),
      H("failed"));
    let s = h
      ? `try a different base, e.g. \`${t} <branch>\``
      : `pass one explicitly, e.g. \`${t} <branch>\``;
    return {
      ok: !1,
      reason: "empty_diff",
      error: `No changes to review: the diff against ${D} (merge-base ${W.slice(0, 7)}) is empty. If you have local edits, stage or commit them first. If your branch was already merged or you meant a different base, ${s}.`,
    };
  }
  let b = Lgt(ne);
  if (b) {
    let { maxFiles: s, maxLines: R } = X$t(),
      c = b.linesAdded + b.linesRemoved;
    if (b.filesCount > s || c > R) {
      (logEvent("tengu_review_remote_precondition_failed", {
        reason: S("local_diff_too_large"),
        files: b.filesCount,
        lines: c,
        max_files: s,
        max_lines: R,
        cwd_is_home: L(),
      }),
        H("failed"));
      let { stdout: B, code: M } = await execFileNoThrow(
          gitExe(),
          [
            ...GIT_HARDENED_ARGS,
            "-c",
            "core.quotepath=false",
            "diff",
            "--no-ext-diff",
            "--no-textconv",
            "--numstat",
            W,
          ],
          { preserveOutputOnError: !1, timeout: 1e4, maxBuffer: 10485760 },
        ),
        P = M === 0 ? be(B) : "";
      return {
        ok: !1,
        reason: "local_diff_too_large",
        error: `Diff is too large for ultrareview: ${b.filesCount.toLocaleString()} ${pluralize(b.filesCount, "file")}, ${c.toLocaleString()} ${pluralize(c, "line")} changed (limits: ${s.toLocaleString()} ${pluralize(s, "file")}, ${R.toLocaleString()} ${pluralize(R, "line")}).${P} Pass a closer base branch (\`${t} <branch>\`) to narrow the scope, or split the change.`,
      };
    }
  }
  return (
    H("succeeded"),
    {
      ok: !0,
      scope: {
        mode: "branch",
        headBranch: X,
        baseBranch: v,
        mergeBaseSha: W,
        diffStat: ne.trim(),
        hadArg: h.length > 0,
        diffFiles: b?.filesCount,
        diffLines: b ? b.linesAdded + b.linesRemoved : void 0,
        instructions: te,
      },
    }
  );
}
function be(r, t = 3) {
  let { perFileStats: d } = ZDe(r, Number.POSITIVE_INFINITY),
    e = [...d.entries()]
      .map(([_, E]) => ({ path: _, lines: E.added + E.removed }))
      .filter((_) => _.lines > 0);
  if (e.length === 0) return "";
  return ` Largest files: ${e
    .sort((_, E) => E.lines - _.lines)
    .slice(0, t)
    .map((_) => `${_.path} (${_.lines.toLocaleString()} ${pluralize(_.lines, "line")})`)
    .join(", ")}.`;
}
function previewInstructions(r, t = 80) {
  return truncateToWidth(r.replace(/\s+/g, " ").trim(), t);
}
async function ve(r) {
  if (r.startsWith("-") || r.includes(":") || /\s/.test(r)) return "not_found";
  let t = {
      ...buildNonInteractiveGitEnv(),
      GIT_SSH_COMMAND: `${a.GIT_SSH_COMMAND || "ssh"} -o BatchMode=yes -o StrictHostKeyChecking=yes`,
      GIT_ALLOW_PROTOCOL: "https:http:ssh",
    },
    d = await execFileNoThrow(
      gitExe(),
      [
        ...GIT_HARDENED_ARGS,
        ...GIT_SSH_HARDENING_ARGS,
        "-c",
        "credential.helper=",
        "-c",
        "core.askPass=",
        "ls-remote",
        "--heads",
        "--exit-code",
        "--end-of-options",
        "origin",
        r,
      ],
      { timeout: 4000, preserveOutputOnError: !1, env: t },
    );
  if (d.code !== 0) return d.code === 2 ? "not_found" : "probe_failed";
  if (
    !d.stdout
      .split(
        `
`,
      )
      .some((_) => _.split("\t")[1]?.trim() === `refs/heads/${r}`)
  )
    return "not_found";
  return (
    await execFileNoThrow(
      gitExe(),
      [
        ...GIT_HARDENED_ARGS,
        ...GIT_SSH_HARDENING_ARGS,
        "-c",
        "credential.helper=",
        "-c",
        "core.askPass=",
        "fetch",
        "--no-tags",
        "--end-of-options",
        "origin",
        `refs/heads/${r}:refs/remotes/origin/${r}`,
      ],
      { timeout: 15000, preserveOutputOnError: !1, env: t },
    )
  ).code === 0
    ? "recovered"
    : "fetch_failed";
}
async function ye(r) {
  let { stdout: t, code: d } = await execFileNoThrow(
    gitExe(),
    [
      ...GIT_HARDENED_ARGS,
      "for-each-ref",
      "--format=%(refname:short)",
      "--count=2000",
      "refs/heads",
      "refs/remotes/origin",
    ],
    { preserveOutputOnError: !1 },
  );
  if (d !== 0) return null;
  let e = new Map();
  for (let w of t.split(`
`)) {
    let p = w.trim();
    if (!p || p === "origin" || p === "origin/HEAD") continue;
    let N = p.startsWith("origin/") ? p.slice(7) : p;
    if (p.startsWith("origin/") || !e.has(N)) e.set(N, p);
  }
  let o = r === "main" ? "master" : r === "master" ? "main" : null;
  if (o !== null) {
    let w = e.get(o);
    if (w) return w;
  }
  let _ = null,
    E = 3;
  for (let [w, p] of e) {
    if (Math.abs(w.length - r.length) >= E) continue;
    let N = Kne(r, w);
    if (N > 0 && N < E) ((E = N), (_ = p));
  }
  return _;
}
async function checkOverageGate({ overageConfirmed: r, credentials: t }) {
  let d = await fe(t);
  if (!d) return { kind: "proceed", billingNote: "", preflightUnavailable: !0 };
  let e = d.billing_note ?? "",
    o = d.github_login ?? null;
  switch (d.action) {
    case "proceed":
      return { kind: "proceed", billingNote: e, githubLogin: o };
    case "blocked":
      return {
        kind: "blocked",
        reason: d.blocked?.reason ?? "server",
        message:
          d.blocked?.message ??
          "Ultrareview is unavailable for your organization.",
        actionUrl: d.blocked?.action_url ?? null,
      };
    case "confirm": {
      if (r) return { kind: "proceed", billingNote: e, githubLogin: o };
      return {
        kind: "needs-confirm",
        body: `This review bills as usage credits (${getReviewCostNote()}).`,
        billingNote: e,
        githubLogin: o,
      };
    }
  }
}
var Re = 3;
async function launchRemoteReview(r, t, d, e) {
  let o = e?.invocation ?? "/code-review ultra",
    _ = (k) => ({ launched: !1, blocks: [{ type: "text", text: k }] }),
    E = await _ne({
      allowBundle: !0,
      storageV5: t.storageV5,
      credentials: t.credentials,
    });
  if (!E.eligible) {
    let k = E.errors;
    if (k.length > 0) {
      logEvent("tengu_review_remote_precondition_failed", {
        reason: S("remote_agent_ineligible"),
        precondition_errors: fromEnumArr(k.map((s) => s.type)),
        cwd_is_home: L(),
      });
      let b = k.map((s) => {
        if (s.type === "not_in_git_repo")
          return `${o} needs a git repository so it can clone your code into a cloud sandbox, but ${getCwd()} is not inside one. ${he()}`;
        if (s.type === "no_git_remote")
          return `${o} needs a GitHub remote so it can clone this repository into the cloud. If this project is not on GitHub yet, run "gh repo create --source=. --push" to create one; if a GitHub repo already exists, run "git remote add origin REPO_URL && git push -u origin HEAD".`;
        return IX(s);
      }).join(`
`);
      if (r.mode === "branch" && r.noMergeBase)
        logEvent("tengu_review_remote_precondition_recovery", {
          reason: S("no_merge_base"),
          method: S("empty_tree_bundle"),
          outcome: S("failed"),
        });
      return (
        logFeatureBad("ultrareview_launch", "remote_agent_ineligible"),
        _(`Ultrareview cannot launch:
${b}`)
      );
    }
  }
  let w = "env_011111111111111111111113",
    p = kte(),
    N = (k, b, s) => {
      if (typeof k !== "number" || !Number.isFinite(k)) return b;
      let R = Math.floor(k);
      if (R <= 0) return b;
      return R > s ? b : R;
    },
    O = EGn(),
    T = {
      BUGHUNTER_DRY_RUN: "1",
      AUTOPATCH_ENABLE_ASIMOV: "1",
      ...(p?.code_quality !== !1 && { BUGHUNTER_CODE_QUALITY: "1" }),
      BUGHUNTER_FLEET_SIZE: String(N(p?.fleet_size, 5, 20)),
      BUGHUNTER_MAX_DURATION: String(N(p?.max_duration_minutes, 10, 25)),
      BUGHUNTER_AGENT_TIMEOUT: String(N(p?.agent_timeout_seconds, 600, 1800)),
      BUGHUNTER_TOTAL_WALLCLOCK: String(N(p?.total_wallclock_minutes, 22, 27)),
      BUGHUNTER_RESULT_RELAY_MAX_SEC: String(($Oe() - Re) * 60),
      ...(O && { BUGHUNTER_MODEL: O }),
      ...(process.env.BUGHUNTER_DEV_BUNDLE_B64 && {
        BUGHUNTER_DEV_BUNDLE_B64: process.env.BUGHUNTER_DEV_BUNDLE_B64,
      }),
    },
    A,
    te,
    h,
    Y = "",
    H = [],
    v,
    X,
    Z,
    D,
    J;
  if (r.mode === "pr") {
    let k = await detectCurrentRepositoryWithHost(),
      b = k && isNestedGitLabProject(k) ? null : k;
    if (!b)
      return (
        logEvent("tengu_review_remote_precondition_failed", {
          reason: S("no_github_remote_post_confirm"),
          cwd_is_home: L(),
        }),
        logFeatureBad("ultrareview_launch", "no_github_remote"),
        null
      );
    let s = `ultrareview: ${b.owner}/${b.name}#${r.prNumber}`;
    ((A = await teleportToRemote({
      initialMessage: null,
      source: "ultrareview",
      description: s,
      title: s,
      signal: t.abortController.signal,
      storageV5: t.storageV5,
      credentials: t.credentials,
      branchName: `refs/pull/${r.prNumber}/head`,
      environmentId: w,
      tags: ["ultrareview"],
      environmentVariables: {
        BUGHUNTER_PR_NUMBER: r.prNumber,
        BUGHUNTER_REPOSITORY: `${b.owner}/${b.name}`,
        ...T,
      },
      onCreateFail: (R, c, B) => {
        ((v = R),
          (X = fromEnum(c)),
          (Z = B?.status),
          (D = fromEnumOpt(B?.serverType)),
          (J = fromEnumOpt(B?.serverReason)));
      },
    })),
      (te = `/ultrareview ${r.prNumber}`),
      (h = `${b.owner}/${b.name}#${r.prNumber}`));
  } else {
    let {
      headBranch: k,
      baseBranch: b,
      mergeBaseSha: s,
      diffStat: R,
      noMergeBase: c,
    } = r;
    Y = R;
    let B, M;
    if (
      ((A = await teleportToRemote({
        initialMessage: null,
        source: "ultrareview",
        description: `ultrareview: ${k}`,
        signal: t.abortController.signal,
        storageV5: t.storageV5,
        credentials: t.credentials,
        useBundle: !0,
        bundleBaseRef: s,
        bundleForceScope: c ? "squashed" : void 0,
        environmentId: w,
        tags: ["ultrareview"],
        environmentVariables: { BUGHUNTER_BASE_BRANCH: s, ...T },
        onBundleFail: (P, j) => {
          ((B = P), (M = fromEnum(j)));
        },
        onBundleNotice: (P) => {
          H.push(P);
        },
        onCreateFail: (P, j, V) => {
          ((v = P),
            (X = fromEnum(j)),
            (Z = V?.status),
            (D = fromEnumOpt(V?.serverType)),
            (J = fromEnumOpt(V?.serverReason)));
        },
      })),
      !A)
    ) {
      logEvent("tengu_review_remote_teleport_failed", {
        mode: S("branch"),
        reason: X,
        bundle_fail_kind: M,
        status_code: Z,
        server_type: D,
        server_reason: J,
      });
      let P = t.abortController.signal.aborted;
      if (c && !P)
        logEvent("tengu_review_remote_precondition_recovery", {
          reason: S("no_merge_base"),
          method: S("empty_tree_bundle"),
          outcome: S("failed"),
        });
      if (!P) logFeatureBad("ultrareview_launch", "teleport_failed");
      return _(
        B ??
          (v
            ? `Ultrareview could not start the cloud session: ${v}`
            : `Repo is too large. Push a PR and use \`${o} <PR#>\` instead.`),
      );
    }
    ((te = "/ultrareview"),
      (h =
        c === "unrelated_history"
          ? `${k} (all files \u2014 no common history with ${b})`
          : c === "base_ref_missing"
            ? `${k} (all files)`
            : k === b
              ? k
              : `${k} \u2192 ${b}`));
  }
  if (!A) {
    if (
      (logEvent("tengu_review_remote_teleport_failed", {
        mode: S("pr"),
        reason: X,
        status_code: Z,
        server_type: D,
        server_reason: J,
      }),
      !t.abortController.signal.aborted)
    )
      logFeatureBad("ultrareview_launch", "teleport_failed");
    if (v) return _(`Ultrareview could not start the cloud session: ${v}`);
    return null;
  }
  let re;
  if (!e?.skipTaskRegistration)
    re = cde({
      remoteTaskType: "ultrareview",
      session: A,
      command: te,
      context: t,
      isRemoteReview: !0,
      applyFixesOnComplete: e?.applyFixesOnComplete,
      reviewInstructions: r.mode === "branch" ? r.instructions : void 0,
      postReviewTo:
        e?.postReviewToPR && r.mode === "pr" && !e?.signal?.aborted
          ? { repo: r.repo, prNumber: r.prNumber }
          : void 0,
    }).taskId;
  if (
    (logEvent("tengu_review_remote_launched", {
      mode: fromEnum(r.mode),
      had_arg: r.hadArg,
      post_armed:
        e?.postReviewToPR === !0 && r.mode === "pr" && !e?.signal?.aborted,
      had_instructions: r.mode === "branch" && !!r.instructions,
      diff_files: r.diffFiles,
      diff_lines: r.diffLines,
    }),
    r.mode === "branch" && r.noMergeBase)
  )
    (logEvent("tengu_review_remote_precondition_recovery", {
      reason: S("no_merge_base"),
      method: S("empty_tree_bundle"),
      outcome: S("succeeded"),
    }),
      logFeatureSad("ultrareview_launch", "no_merge_base_empty_tree_fallback"));
  else logFeatureOk("ultrareview_launch");
  markUltrareviewRun(t.storageV5);
  let W = S3(A.id),
    q = d.trim()
      ? `${d.trim()}
`
      : "",
    ie = Y
      ? `
Scope: ${Y}`
      : "",
    ne =
      r.mode === "branch" && r.instructions
        ? e?.skipTaskRegistration
          ? `
Your text was read as a note, not a base branch \u2014 the standard review runs on the diff above.`
          : `
Your text was read as a note, not a base branch \u2014 the standard review runs on the diff above, and the findings will be related to your note when they arrive.`
        : "";
  return {
    launched: !0,
    sessionId: A.id,
    sessionUrl: W,
    taskId: re,
    title: A.title,
    blocks: [
      {
        type: "text",
        text: `${q}Ultrareview launched for ${h} (${getReviewDurationNote()}, runs in the cloud). Track: ${W}${
          e?.postReviewToPR && r.mode === "pr"
            ? `
When it finishes, the findings will be posted to the PR as a comment from your GitHub account. (Keep this session open: the consent lives only here, so if it ends before the review finishes, nothing will be posted \u2014 even on resume.)`
            : ""
        }${ie}${ne}${H.map(
          (k) => `
${k}`,
        ).join("")}`,
      },
    ],
  };
}
function ultrareviewLaunchAcknowledgementNudge(r, t) {
  return `The output above is already visible to the user. Briefly acknowledge it without repeating the target, URL, or billing note. Findings will arrive via task-notification.${r ? " The user passed --fix: when the findings arrive, apply them to the local working tree." : ""}${t ? ` The user's argument was interpreted as a review note, not a base branch: "${truncateToCodeUnits(t, njt)}". The cloud review runs its standard pass over the branch diff and does not see the note; when the findings arrive, prioritize and relate them to the user's request.` : ""}`;
}
async function runUltrareviewHeadless(r, t) {
  if (!ZA()) {
    let T = vGn();
    return (
      logEvent("tengu_review_remote_gate_blocked", {
        reason: fromEnumOpt(T) ?? S("unknown"),
        entitlement_blocker: T === "entitlement" ? fromEnumOpt(getBridgeEntitlementBlocker()) : void 0,
      }),
      { status: "error", message: "Ultrareview is currently unavailable." }
    );
  }
  await b_();
  let d = policyDeniedReason("allow_remote_sessions", "Cloud sessions", "are");
  if (d) return { status: "error", message: d };
  let e = await precheckLaunchScope(r, t.invocation, {
    suppressSucceededRecoveryEvent: !t.confirm,
    suppressOfferedRecoveryEvent: t.confirm && !t.singlePass,
  });
  if (!e.ok) return { status: "error", message: e.error, reason: e.reason };
  let o = await checkOverageGate({
    overageConfirmed: t.overageConfirmed,
    credentials: t.context.credentials,
  });
  if (o.kind === "blocked")
    return (
      logEvent("tengu_review_overage_blocked", { reason: Ub(o.reason) }),
      { status: "blocked", message: o.message, actionUrl: o.actionUrl }
    );
  let _ = () => {
    let T =
        e.scope.mode === "pr"
          ? `Reviewing PR ${e.scope.repo}#${e.scope.prNumber}.`
          : e.scope.noMergeBase
            ? "Reviewing all files on the current branch."
            : `Reviewing current branch against ${e.scope.baseBranch}.`,
      A =
        e.scope.mode === "branch" && e.scope.instructions
          ? ` Note for findings (not a base branch): "${previewInstructions(e.scope.instructions)}"`
          : "";
    return `
${T}${A}`;
  };
  if (
    o.kind === "proceed" &&
    o.preflightUnavailable &&
    t.withholdOverageConsent &&
    !t.overageConfirmed
  )
    return {
      status: "needs-confirm",
      body: `Couldn't verify your review quota right now, so this review may bill as usage credits (${getReviewCostNote()}).${_()}`,
      billingNote: "",
    };
  if (o.kind === "needs-confirm") {
    if (t.withholdOverageConsent)
      return {
        status: "needs-confirm",
        body: `${o.body}${_()}`,
        billingNote: o.billingNote,
      };
    if ((logEvent("tengu_review_overage_dialog_shown", {}), !t.confirm))
      return {
        status: "needs-confirm",
        body: `${o.body}${_()}`,
        billingNote: o.billingNote,
      };
    t.markOverageConfirmed();
  }
  if (t.confirm && e.scope.mode === "branch" && e.scope.noMergeBase)
    logEvent("tengu_review_remote_precondition_recovery", {
      reason: S("no_merge_base"),
      method: S("empty_tree_bundle"),
      outcome: S("accepted"),
    });
  if (!t.confirm) {
    let T =
        e.scope.mode === "pr"
          ? `Reviewing PR ${e.scope.repo}#${e.scope.prNumber}`
          : e.scope.noMergeBase === "unrelated_history"
            ? `Reviewing all files (no common history with ${e.scope.baseBranch})
Scope: ${e.scope.diffStat}`
            : e.scope.noMergeBase === "base_ref_missing"
              ? `Reviewing all files (no ${e.scope.baseBranch} branch to compare against)
Scope: ${e.scope.diffStat}`
              : `Reviewing current branch against ${e.scope.baseBranch}
Scope: ${e.scope.diffStat}`,
      A =
        e.scope.mode === "branch" && e.scope.instructions
          ? `
Note for findings (not a base branch): "${previewInstructions(e.scope.instructions)}"`
          : "";
    return {
      status: "needs-confirm",
      body: `${T}${A}
${getReviewDurationNote()} \xB7 Est. cost ${getReviewCostNote()} USD`,
      billingNote: o.billingNote,
    };
  }
  let E = t.postReview === !0 && !BOe(),
    w = t.postReview === !0 && !E && e.scope.mode === "pr" && isGitHubHost(e.scope.host),
    p = await launchRemoteReview(e.scope, t.context, o.billingNote, {
      skipTaskRegistration: t.skipTaskRegistration,
      invocation: t.invocation,
      applyFixesOnComplete: t.applyFixes,
      postReviewToPR: w,
    });
  if (!p?.launched)
    return {
      status: "error",
      message:
        p?.blocks
          .map((T) => (T.type === "text" ? T.text : ""))
          .join("")
          .trim() || "Failed to launch cloud review session.",
    };
  let N = t.postReview === !0 && !w,
    O = p.blocks
      .map((T) => (T.type === "text" ? T.text : ""))
      .join("")
      .trim();
  return {
    status: "launched",
    sessionId: p.sessionId,
    sessionUrl: p.sessionUrl,
    taskId: p.taskId,
    title: p.title,
    message: E ? `${O}${POST_DISABLED_NOTE}` : N ? `${O}${POST_IGNORED_NOTE}` : O,
    billingNote: o.billingNote,
    postReviewTo:
      w && e.scope.mode === "pr"
        ? { repo: e.scope.repo, prNumber: e.scope.prNumber }
        : void 0,
    postIgnored: N || void 0,
  };
}
async function ue() {
  let r = await detectCurrentRepositoryWithHost();
  return !!r && !isNestedGitLabProject(r);
}
function he() {
  return isDesktopHostEntrypoint()
    ? "Open your project's repository folder and try again."
    : 'Run "git init" here to create a repository, or cd into an existing one.';
}
function L() {
  try {
    let r = homedir();
    if (!r) return !1;
    return ERt(zn(resolve(getCwd())), zn(resolve(r)));
  } catch {
    return !1;
  }
}
async function $e(r, t, d) {
  let e = { verdict: "inconclusive", httpStatus: null },
    o = AbortSignal.timeout(Number.isSafeInteger(d) && d > 0 ? d : 0),
    _ = new Promise((w) => {
      o.addEventListener("abort", () => w(e), { once: !0 });
    }),
    E = (async () => {
      await checkAndRefreshOAuthTokenIfNeeded();
      let { linkedAccountAccess: w, httpStatus: p } = await DTe(r, t, o);
      return { verdict: w, httpStatus: p };
    })().catch(
      (w) => (
        n(
          `ultrareview: linked-account access probe failed, treating as inconclusive: ${l(w)}`,
        ),
        e
      ),
    );
  return Promise.race([E, _]);
}
export { POST_IGNORED_NOTE, POST_DISABLED_NOTE, parseUltrareviewArgs, precheckLaunchScope, previewInstructions, checkOverageGate, launchRemoteReview, ultrareviewLaunchAcknowledgementNudge, runUltrareviewHeadless };

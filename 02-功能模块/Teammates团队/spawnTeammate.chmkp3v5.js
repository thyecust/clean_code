// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 191 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { K, Ec, q1, MA, kL, xL, hae, S_e } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { it2SetupDialog } from "../../01-核心基础设施/共享小工具-未细化/it2-setup-dialog.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { bt, ZJ, isModelAllowed, getMainLoopModel, stepDownRestrictedFamilyAliasPick, getCanonicalName, parseUserSpecifiedModel, ix, l0 } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { R, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { Uge } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { getCwd } from "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import { jo } from "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import { execFileNoThrow } from "../Git-Worktree/git-exec-hardening.js";
import { getExternalPermissionMode } from "../权限系统/chunk-e4pfvp7x.js";
import { _ve } from "../权限系统/chunk-t3b7pg2x.js";
import { isInsideTmux, isTmuxAvailable, isInITerm2 } from "../../01-核心基础设施/共享小工具-未细化/terminal-backend-detection.js";
import { getTeammateModeFromSnapshot } from "./chunk-88ybhavr.js";
import { detectAndGetBackend, getBackendByType, markInProcessFallback, isInProcessEnabled, resetBackendDetection } from "./backend-registry.js";
import { respawnPaneWithCommand } from "./chunk-x0by9eq8.js";
import { isCustomAgent, apn, getProactivityAdjustedPermissionMode, getSubagentModelSetting, modelAliasMatchesFamily } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { writeToMailbox, clearMailbox, PROTOCOL_FRAME_PROMPT_ERROR, isStructuredProtocolMessage } from "./chunk-g6nvp9mm.js";
import { getLauncherConfigError } from "../../01-核心基础设施/核心工具-进程与信号/process-wrapper-launcher.js";
import { SwarmPaneError, containsControlCharacter, assertNoControlCharacters, supportsPaneKill, sanitizeName, sanitizeAgentName, updateTeamFile, removeTeamMember } from "./team-file-store.js";
import { bj, dYn } from "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import { resolveWrappedClaudeInvocation, applyProcessWrapper } from "../../01-核心基础设施/共享小工具-未细化/claude-launcher-invocation.js";
import "../权限系统/chunk-jsd70b22.js";
import "../图片-截图-ComputerUse/chunk-mk8kjx9c.js";
import "../插件系统/chunk-rbjz1q03.js";
import "../插件系统/channel-gate.js";
import "./chunk-5nnwwahg.js";
import { Cin } from "./chunk-8jtd54px.js";
import { spawnInProcessTeammate } from "./chunk-sjd69zy5.js";
import { CA_BUNDLE_ENV_VARS, SYSTEM_CA_TRUST_ENV_DEFAULTS } from "../../01-核心基础设施/共享小工具-未细化/ca-trust-env-vars.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/chunk-j7khz57p.js";
import "../权限系统/swarm-permission-poller.js";
import "../../01-核心基础设施/共享小工具-未细化/browser-tool-verb-phrases.js";
import "./teammate-task-messages.js";
import { generateTaskId, createPendingTask } from "./chunk-mrfx53ye.js";
import { MAIN_CONVERSATION_NAME, TEAM_LEAD_AGENT_NAME, SWARM_TMUX_SESSION_NAME, TMUX_BINARY, PANE_PLACEHOLDER_COMMAND, TEAMMATE_COMMAND_ENV_VAR } from "./chunk-enjekn9t.js";
function V() {
  let t = getLauncherConfigError();
  if (t)
    throw new SwarmPaneError(
      `${t} \u2014 the teammate is not started unwrapped; fix the launcher setting, then retry`,
    );
  let e = process.env[TEAMMATE_COMMAND_ENV_VAR],
    { cmd: o, prefixArgs: i } = e
      ? applyProcessWrapper({ cmd: e, prefixArgs: [], target: e })
      : resolveWrappedClaudeInvocation({ pinToCurrentBinary: !0 });
  return [o, ...i];
}
function J({ planModeRequired: t, permissionMode: e, proactivityLevel: o }) {
  if (e === void 0) return [];
  let i = e;
  if (t) i = "plan";
  else if (o !== void 0) i = getProactivityAdjustedPermissionMode(e, o);
  switch (i) {
    case "bypassPermissions":
      return ["--dangerously-skip-permissions"];
    case "acceptEdits":
      return ["--permission-mode acceptEdits"];
    case "auto":
      return ["--permission-mode auto"];
    case "default":
    case "plan":
    case "dontAsk":
    case "bubble":
      return o !== void 0 && apn() ? [`--permission-mode ${getExternalPermissionMode(i)}`] : [];
  }
}
var oe = [
  "CLAUDE_CODE_USE_BEDROCK",
  "CLAUDE_CODE_USE_VERTEX",
  "CLAUDE_CODE_USE_FOUNDRY",
  "CLAUDE_CODE_USE_ANTHROPIC_AWS",
  "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD",
  "CLAUDE_CODE_USE_MANTLE",
  "CLAUDE_CODE_USE_GATEWAY",
  "ANTHROPIC_AWS_WORKSPACE_ID",
  "ANTHROPIC_AWS_BASE_URL",
  "ANTHROPIC_AWS_API_KEY",
  "CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH",
  "ANTHROPIC_GOOGLE_CLOUD_PROJECT",
  "GOOGLE_CLOUD_PROJECT",
  "ANTHROPIC_GOOGLE_CLOUD_LOCATION",
  "ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID",
  "ANTHROPIC_GOOGLE_CLOUD_BASE_URL",
  "CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH",
  "AWS_BEARER_TOKEN_BEDROCK",
  "ANTHROPIC_BEDROCK_MANTLE_BASE_URL",
  "CLAUDE_CODE_SKIP_MANTLE_AUTH",
  "AWS_REGION",
  "AWS_DEFAULT_REGION",
  "AWS_PROFILE",
  "AWS_CONFIG_FILE",
  "AWS_SHARED_CREDENTIALS_FILE",
  "ANTHROPIC_BEDROCK_SERVICE_TIER",
  "ANTHROPIC_BEDROCK_REGION_PREFIX",
  "CLAUDE_CODE_SUBAGENT_MODEL",
  "CLAUDE_CODE_SUBAGENT_MODEL_FORCE",
  ...[],
  ...[],
  "ANTHROPIC_BASE_URL",
  "CLAUDE_CONFIG_DIR",
  "CLAUDE_CODE_REMOTE",
  "CLAUDE_CODE_REMOTE_MEMORY_DIR",
  "HTTPS_PROXY",
  "https_proxy",
  "HTTP_PROXY",
  "http_proxy",
  "NO_PROXY",
  "no_proxy",
  ...CA_BUNDLE_ENV_VARS,
  ...Object.keys(SYSTEM_CA_TRUST_ENV_DEFAULTS),
  "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC",
  "CLAUDE_CODE_HOST_CREDS_FILE",
  "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST",
  "DISABLE_ERROR_REPORTING",
  "DISABLE_GROWTHBOOK",
  "DISABLE_TELEMETRY",
  "DO_NOT_TRACK",
];
function G() {
  let t = ["CLAUDECODE=1", "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1"],
    e = new Set(Uge(process.env));
  e.delete("CLAUDE_CODE_HOST_CREDS_FILE");
  for (let i of oe) {
    if (e.has(i)) continue;
    let c = process.env[i];
    if (c !== void 0 && c !== "") t.push(`${i}=${jo([c])}`);
  }
  let o = process.env.CLAUDE_SECURESTORAGE_CONFIG_DIR;
  if (o !== void 0) t.push(`CLAUDE_SECURESTORAGE_CONFIG_DIR=${jo([o])}`);
  return t.join(" ");
}
function O(t, e) {
  return bj(e) ? `${t} ${jo([e])}` : `${t}=${jo([e])}`;
}
function F(t) {
  return t ?? getMainLoopModel();
}
function re(t, e) {
  if (a.CLAUDE_CODE_SUBAGENT_MODEL_FORCE) t = void 0;
  if (t === "inherit") return F(e);
  if (t !== void 0) {
    if (!isModelAllowed(t)) return Z(t, e);
    if (e !== null && modelAliasMatchesFamily(t, e)) return e;
    return t;
  }
  let o = getSubagentModelSetting();
  if (o !== "inherit") {
    let i = parseUserSpecifiedModel(o);
    if (isModelAllowed(i)) return i;
    return Z(o, e);
  }
  return F(e);
}
function Z(t, e) {
  let o = stepDownRestrictedFamilyAliasPick(t);
  return (ie(t, o !== null), o ?? se(e));
}
function se(t) {
  let e = getSubagentModelSetting();
  if (e !== "inherit") {
    let o = parseUserSpecifiedModel(e);
    if (isModelAllowed(o)) return o;
    return stepDownRestrictedFamilyAliasPick(e) ?? F(t);
  }
  return F(t);
}
function H(t, e, o = "tool") {
  if (a.CLAUDE_CODE_SUBAGENT_MODEL_FORCE) t = void 0;
  let i = re(t, e),
    c = getSubagentModelSetting(),
    m = t === void 0 && c !== "inherit" ? c : void 0,
    [r, T] =
      t === "inherit"
        ? [e ?? i, "inherit"]
        : t !== void 0
          ? [t, o]
          : m !== void 0
            ? [m, "env"]
            : [i, "default"],
    _ =
      m !== void 0
        ? !isModelAllowed(parseUserSpecifiedModel(m))
        : (T === "tool" || T === "frontmatter") && !isModelAllowed(r),
    p = _ && stepDownRestrictedFamilyAliasPick(r) !== null,
    d = _ && !p,
    s = ZJ(r, getCanonicalName(r)),
    E = ZJ(i, getCanonicalName(i)),
    w = {
      source: S("teammate_spawn"),
      precedence: fromEnum(T),
      requested_family: fromEnum(s),
      resolved_family: fromEnum(E),
      requested_model: bt(r) ?? S("none"),
      resolved_model: bt(i) ?? S("none"),
    };
  if (p) logFeatureSad("subagent_model_resolve", "family_alias_stepped_down", w);
  else if (d) logFeatureSad("subagent_model_resolve", "override_dropped", w);
  else if (T !== "default" && s !== "other" && E !== "other" && s !== E)
    logFeatureSad("subagent_model_resolve", "family_mismatch", w);
  else logFeatureOk("subagent_model_resolve", w);
  return i;
}
function ie(t, e) {
  n(
    `Teammate model "${t}" is not in the availableModels allowlist; using the ${e ? "newest allowed model in its family" : "leader's model"} instead`,
    { level: "warn" },
  );
}
async function me(t) {
  return (await execFileNoThrow(TMUX_BINARY, ["has-session", "-t", t])).code === 0;
}
async function de(t) {
  if (!(await me(t))) {
    let o = await execFileNoThrow(TMUX_BINARY, ["new-session", "-d", "-s", t], {
      useCwd: !0,
      useToolMemoryCgroup: !1,
    });
    if (o.code !== 0)
      throw (
        logFeatureBad("subagent_launch", "subagent_teammate_tmux_session_failed"),
        Error(
          `Failed to create tmux session '${t}': ${o.stderr || "Unknown error"}`,
        )
      );
  }
}
function ee(t) {
  let {
      planModeRequired: e,
      permissionMode: o,
      proactivityLevel: i,
      skipModel: c,
      sessionEffort: m,
    } = t || {},
    r = J({ planModeRequired: e, permissionMode: o, proactivityLevel: i });
  if (!c) {
    let s = Ec();
    if (s) r.push(O("--model", s));
  }
  let T = m && _ve(m);
  if (T !== void 0) r.push(`--effort ${T}`);
  let _ = MA() ?? q1();
  if (_) r.push(`--settings ${jo([_])}`);
  let p = kL();
  for (let s of p) r.push(`--plugin-dir ${jo([s])}`);
  for (let s of xL()) r.push(`--plugin-dir-no-mcp ${jo([s])}`);
  for (let s of hae()) r.push(`--plugin-url ${jo([s])}`);
  let d = S_e();
  if (d === !0) r.push("--chrome");
  else if (d === !1) r.push("--no-chrome");
  if (dYn()) r.push("--restricted");
  return r.join(" ");
}
async function W(t, e, o, i, c, m) {
  for (let [p, d] of [
    ["name", t],
    ["team_name", e],
  ])
    if (containsControlCharacter(d))
      throw (
        logFeatureBad("subagent_launch", "subagent_teammate_control_chars"),
        Error(
          p === "name"
            ? "Invalid name: control characters are not allowed in agent or team names"
            : "Invalid team_name: control characters are not allowed in agent or team names",
        )
      );
  let r = await updateTeamFile(
    e,
    (p) => {
      let d = le(t, p),
        s = ix(d, e),
        E = i.assign(s);
      return (
        p.members.push({
          agentId: s,
          name: d,
          color: E,
          joinedAt: Date.now(),
          tmuxPaneId: "",
          subscriptions: [],
          ...o,
        }),
        { sanitizedName: d, teammateId: s, teammateColor: E }
      );
    },
    void 0,
    m,
  );
  if (!r)
    throw (
      logFeatureBad("subagent_launch", "subagent_teammate_internal_invariant"),
      Error("reserveTeammateIdentity: updateTeamFile returned undefined")
    );
  let T = !1,
    _;
  try {
    return await c(
      r,
      () => {
        T = !0;
      },
      (p) => {
        _ = p;
      },
    );
  } catch (p) {
    if (!T) {
      if (_)
        try {
          await _();
        } catch (d) {
          n(`[spawnTeammate] pane cleanup failed for ${r.teammateId}: ${l(d)}`);
        }
      await removeTeamMember(e, r.teammateId, m);
    } else
      n(
        `[spawnTeammate] post-commit failure for ${r.teammateId}; entry kept (agent already running): ${l(p)}`,
      );
    throw p;
  }
}
async function j(t, e, o, i) {
  await updateTeamFile(
    t,
    (c) => {
      let m = c.members.find((r) => r.agentId === e);
      if (!m) return !1;
      ((m.tmuxPaneId = o.tmuxPaneId), (m.backendType = o.backendType));
    },
    void 0,
    i,
  );
}
function le(t, e) {
  let o = sanitizeAgentName(t);
  if (o === MAIN_CONVERSATION_NAME)
    throw Error(
      '"main" is a reserved recipient name (SendMessage routes it to the main conversation) \u2014 choose another teammate name.',
    );
  if (l0(o))
    throw Error(
      'That teammate name is a reserved recipient ("main" or "team-lead", in any spelling) or has the shape of an agent id, which already addresses an agent directly \u2014 choose another teammate name.',
    );
  let i = new Set(e.members.map((m) => m.name.toLowerCase()));
  if (!i.has(o.toLowerCase())) return o;
  let c = 2;
  while (i.has(`${o}-${c}`.toLowerCase())) c++;
  return `${o}-${c}`;
}
async function pe(t, e) {
  let { setAppState: o, getAppState: i } = e,
    { name: c, prompt: m, agent_type: r, cwd: T, plan_mode_required: _ } = t,
    p = H(t.model, i().mainLoopModel, t.modelSource);
  if (!c || !m)
    throw (
      logFeatureBad("subagent_launch", "subagent_teammate_missing_params"),
      Error("name and prompt are required for spawn operation")
    );
  let d = i(),
    s = d.teamContext?.teamName;
  if (!s)
    throw (
      logFeatureBad("subagent_launch", "subagent_teammate_no_team_name"),
      Error(
        "Internal error: session team not initialized. This should have happened at startup when agent swarms are enabled.",
      )
    );
  let E = T || getCwd();
  return W(
    c,
    s,
    { agentType: r, model: p, prompt: m, planModeRequired: _, cwd: E },
    e.teammateColors,
    async ({ sanitizedName: w, teammateId: C, teammateColor: h }, k, D) => {
      let I = await detectAndGetBackend();
      if (I.needsIt2Setup && e.requestDialog) {
        let x = await isTmuxAvailable(),
          q = await e.requestDialog(it2SetupDialog, { tmuxAvailable: x });
        if (q === "cancelled")
          throw (
            logFeatureBad("subagent_launch", "subagent_teammate_iterm_cancelled"),
            new SwarmPaneError("Teammate spawn cancelled - iTerm2 setup required")
          );
        if (q === "installed" || q === "use-tmux") (resetBackendDetection(), (I = await detectAndGetBackend()));
      }
      let P = await isInsideTmux(),
        { paneId: A, isFirstTeammate: U } =
          await I.backend.createTeammatePaneInSwarmView(w, h);
      if (
        (D(() => I.backend.killPane(A, !P)),
        await j(
          s,
          C,
          { tmuxPaneId: A, backendType: I.backend.type },
          e.storageV5,
        ),
        U && P)
      )
        await I.backend.enablePaneBorderStatus();
      let M = V(),
        b = [
          O("--agent-id", C),
          O("--agent-name", w),
          O("--team-name", s),
          `--agent-color ${jo([h])}`,
          `--parent-session-id ${jo([K()])}`,
          _ ? "--plan-mode-required" : "",
          r ? O("--agent-type", r) : "",
        ]
          .filter(Boolean)
          .join(" "),
        v = ee({
          planModeRequired: _,
          permissionMode: d.toolPermissionContext.mode,
          proactivityLevel: d.proactivityLevel,
          sessionEffort: d.sessionEffort,
          skipModel: !!p,
        });
      if (p) v = v ? `${v} ${O("--model", p)}` : O("--model", p);
      let B = v ? ` ${v}` : "",
        N = G(),
        Y = `cd ${jo([E])} && env ${N} ${jo(M)} ${b}${B}`;
      if (
        (await clearMailbox(w, s, e.storageV5),
        (await writeToMailbox(
          w,
          { from: TEAM_LEAD_AGENT_NAME, text: m, timestamp: new Date().toISOString() },
          s,
          e.storageV5,
        )) === void 0)
      )
        throw (
          logFeatureBad("subagent_launch", "subagent_teammate_prompt_write_failed"),
          new R(
            `Failed to write initial instructions to ${w}'s inbox \u2014 spawn aborted`,
            "spawnMultiAgent: failed to write initial teammate instructions \u2014 spawn aborted",
          )
        );
      (await I.backend.sendCommandToPane(A, Y, !P), logFeatureOk("swarm_pane_spawn"), k());
      let X = P ? "current" : SWARM_TMUX_SESSION_NAME,
        ae = P ? "current" : "swarm-view";
      return (
        o((x) => ({
          ...x,
          teamContext: {
            ...x.teamContext,
            teamName: s ?? x.teamContext?.teamName ?? "default",
            teamFilePath: x.teamContext?.teamFilePath ?? "",
            leadAgentId: x.teamContext?.leadAgentId ?? "",
            teammates: {
              ...(x.teamContext?.teammates || {}),
              [C]: {
                name: w,
                agentType: r,
                color: h,
                tmuxSessionName: X,
                tmuxPaneId: A,
                cwd: E,
                spawnedAt: Date.now(),
              },
            },
          },
        })),
        te(e.taskRegistry, {
          teammateId: C,
          sanitizedName: w,
          teamName: s,
          teammateColor: h,
          prompt: m,
          plan_mode_required: _,
          paneId: A,
          insideTmux: P,
          backendType: I.backend.type,
          toolUseId: e.toolUseId,
          cwd: E,
        }),
        {
          data: {
            teammate_id: C,
            agent_id: C,
            agent_type: r,
            model: p,
            name: w,
            color: h,
            tmux_session_name: X,
            tmux_window_name: ae,
            tmux_pane_id: A,
            team_name: s,
            is_splitpane: !0,
            plan_mode_required: _,
          },
        }
      );
    },
    e.storageV5,
  );
}
async function ue(t, e) {
  let { setAppState: o, getAppState: i } = e,
    { name: c, prompt: m, agent_type: r, cwd: T, plan_mode_required: _ } = t,
    p = H(t.model, i().mainLoopModel, t.modelSource);
  if (!c || !m)
    throw (
      logFeatureBad("subagent_launch", "subagent_teammate_missing_params"),
      Error("name and prompt are required for spawn operation")
    );
  let d = i(),
    s = d.teamContext?.teamName;
  if (!s)
    throw (
      logFeatureBad("subagent_launch", "subagent_teammate_no_team_name"),
      Error(
        "Internal error: session team not initialized. This should have happened at startup when agent swarms are enabled.",
      )
    );
  let E = T || getCwd();
  return W(
    c,
    s,
    { agentType: r, model: p, prompt: m, planModeRequired: _, cwd: E },
    e.teammateColors,
    async ({ sanitizedName: w, teammateId: C, teammateColor: h }, k, D) => {
      let I = `teammate-${sanitizeName(w)}`;
      await de(SWARM_TMUX_SESSION_NAME);
      let P = await execFileNoThrow(TMUX_BINARY, [
        "new-window",
        "-t",
        SWARM_TMUX_SESSION_NAME,
        "-n",
        I,
        "-P",
        "-F",
        "#{pane_id}",
        "--",
        PANE_PLACEHOLDER_COMMAND,
      ]);
      if (P.code !== 0)
        throw (
          logFeatureBad("subagent_launch", "subagent_teammate_tmux_window_failed"),
          Error(`Failed to create tmux window: ${P.stderr}`)
        );
      let A = P.stdout.trim();
      (D(() => execFileNoThrow(TMUX_BINARY, ["kill-pane", "-t", A])),
        await j(s, C, { tmuxPaneId: A, backendType: "tmux" }, e.storageV5));
      let U = V(),
        M = [
          O("--agent-id", C),
          O("--agent-name", w),
          O("--team-name", s),
          `--agent-color ${jo([h])}`,
          `--parent-session-id ${jo([K()])}`,
          _ ? "--plan-mode-required" : "",
          r ? O("--agent-type", r) : "",
        ]
          .filter(Boolean)
          .join(" "),
        b = ee({
          planModeRequired: _,
          permissionMode: d.toolPermissionContext.mode,
          proactivityLevel: d.proactivityLevel,
          sessionEffort: d.sessionEffort,
          skipModel: !!p,
        });
      if (p) b = b ? `${b} ${O("--model", p)}` : O("--model", p);
      let v = b ? ` ${b}` : "",
        B = G(),
        N = `cd ${jo([E])} && env ${B} ${jo(U)} ${M}${v}`;
      if (
        (await clearMailbox(w, s, e.storageV5),
        (await writeToMailbox(
          w,
          { from: TEAM_LEAD_AGENT_NAME, text: m, timestamp: new Date().toISOString() },
          s,
          e.storageV5,
        )) === void 0)
      )
        throw (
          logFeatureBad("subagent_launch", "subagent_teammate_prompt_write_failed"),
          new R(
            `Failed to write initial instructions to ${w}'s inbox \u2014 spawn aborted`,
            "spawnMultiAgent: failed to write initial teammate instructions \u2014 spawn aborted",
          )
        );
      try {
        assertNoControlCharacters(N);
      } catch (L) {
        throw (logFeatureBad("subagent_launch", "subagent_teammate_control_chars"), L);
      }
      try {
        await respawnPaneWithCommand([], A, N);
      } catch (L) {
        throw (
          logFeatureBad("subagent_launch", "subagent_teammate_tmux_respawn_failed"),
          L
        );
      }
      return (
        k(),
        o((L) => ({
          ...L,
          teamContext: {
            ...L.teamContext,
            teamName: s ?? L.teamContext?.teamName ?? "default",
            teamFilePath: L.teamContext?.teamFilePath ?? "",
            leadAgentId: L.teamContext?.leadAgentId ?? "",
            teammates: {
              ...(L.teamContext?.teammates || {}),
              [C]: {
                name: w,
                agentType: r,
                color: h,
                tmuxSessionName: SWARM_TMUX_SESSION_NAME,
                tmuxPaneId: A,
                cwd: E,
                spawnedAt: Date.now(),
              },
            },
          },
        })),
        te(e.taskRegistry, {
          teammateId: C,
          sanitizedName: w,
          teamName: s,
          teammateColor: h,
          prompt: m,
          plan_mode_required: _,
          paneId: A,
          insideTmux: !1,
          backendType: "tmux",
          toolUseId: e.toolUseId,
          cwd: E,
        }),
        {
          data: {
            teammate_id: C,
            agent_id: C,
            agent_type: r,
            model: p,
            name: w,
            color: h,
            tmux_session_name: SWARM_TMUX_SESSION_NAME,
            tmux_window_name: I,
            tmux_pane_id: A,
            team_name: s,
            is_splitpane: !1,
            plan_mode_required: _,
          },
        }
      );
    },
    e.storageV5,
  );
}
function te(
  t,
  {
    teammateId: e,
    sanitizedName: o,
    teamName: i,
    teammateColor: c,
    prompt: m,
    plan_mode_required: r,
    paneId: T,
    insideTmux: _,
    backendType: p,
    toolUseId: d,
    cwd: s,
  },
) {
  let E = generateTaskId("in_process_teammate"),
    w = `${m.substring(0, 50)}${m.length > 50 ? "..." : ""}`,
    C = new AbortController(),
    h,
    k = supportsPaneKill(p) ? () => (h ??= getBackendByType(p).killPane(T, !_)) : void 0,
    D = {
      ...createPendingTask(E, "in_process_teammate", w, d),
      type: "in_process_teammate",
      status: "running",
      cwd: s,
      identity: {
        agentId: e,
        agentName: o,
        teamName: i,
        color: c,
        planModeRequired: r ?? !1,
        parentSessionId: K(),
      },
      prompt: m,
      abortController: C,
      awaitingPlanApproval: !1,
      permissionMode: r ? "plan" : "default",
      isIdle: !1,
      lastReportedToolCount: 0,
      lastReportedTokenCount: 0,
      pendingUserMessages: [],
      paneTeardown: k,
    };
  if ((t.register(D), k))
    C.signal.addEventListener(
      "abort",
      () => {
        k();
      },
      { once: !0 },
    );
}
async function z(t, e) {
  let { setAppState: o, getAppState: i } = e,
    { name: c, prompt: m, agent_type: r, plan_mode_required: T } = t,
    _ = H(t.model, i().mainLoopModel, t.modelSource);
  if (!c || !m)
    throw (
      logFeatureBad("subagent_launch", "subagent_teammate_missing_params"),
      Error("name and prompt are required for spawn operation")
    );
  let d = i().teamContext?.teamName;
  if (!d)
    throw (
      logFeatureBad("subagent_launch", "subagent_teammate_no_team_name"),
      Error(
        "Internal error: session team not initialized. This should have happened at startup when agent swarms are enabled.",
      )
    );
  return W(
    c,
    d,
    { agentType: r, model: _, prompt: m, planModeRequired: T, cwd: getCwd() },
    e.teammateColors,
    async ({ sanitizedName: s, teammateId: E, teammateColor: w }, C) => {
      await j(
        d,
        E,
        { tmuxPaneId: "in-process", backendType: "in-process" },
        e.storageV5,
      );
      let h;
      if (r) {
        let b = e.options.agentDefinitions.activeAgents.find(
          (v) => v.agentType === r,
        );
        if (b && isCustomAgent(b)) h = b;
        n(`[handleSpawnInProcess] agent_type=${r}, found=${!!h}`);
      }
      let k = {
        name: s,
        teamName: d,
        prompt: m,
        color: w,
        planModeRequired: T ?? !1,
        model: _,
      };
      await clearMailbox(s, d, e.storageV5);
      let D = await spawnInProcessTeammate(k, e);
      if (!D.ok)
        throw (
          logFeatureBad("subagent_launch", "subagent_teammate_inprocess_failed"),
          n(`[handleSpawnInProcess] spawn failed: ${D.error}`),
          Error("Failed to spawn in-process teammate")
        );
      (C(),
        Cin({
          identity: D.identity,
          taskId: D.taskId,
          prompt: m,
          description: t.description,
          model: _,
          agentDefinition: h,
          teammateContext: D.teammateContext,
          toolUseContext: { ...e, messages: [] },
          abortController: D.abortController,
          invokingRequestId: t.invokingRequestId,
        }),
        n(`[handleSpawnInProcess] Started agent execution for ${E}`));
      let I = i().teamContext?.leadAgentId,
        P = !I,
        A = I ?? ix(TEAM_LEAD_AGENT_NAME, d),
        U = P ? e.teammateColors.assign(A) : void 0;
      return (
        o((M) => {
          let b = M.teamContext?.teammates || {},
            v = P
              ? {
                  [A]: {
                    name: TEAM_LEAD_AGENT_NAME,
                    agentType: TEAM_LEAD_AGENT_NAME,
                    color: U,
                    tmuxSessionName: "in-process",
                    tmuxPaneId: "leader",
                    cwd: getCwd(),
                    spawnedAt: Date.now(),
                  },
                }
              : {};
          return {
            ...M,
            teamContext: {
              ...M.teamContext,
              teamName: d ?? M.teamContext?.teamName ?? "default",
              teamFilePath: M.teamContext?.teamFilePath ?? "",
              leadAgentId: A,
              teammates: {
                ...b,
                ...v,
                [E]: {
                  name: s,
                  agentType: r,
                  color: w,
                  tmuxSessionName: "in-process",
                  tmuxPaneId: "in-process",
                  cwd: getCwd(),
                  spawnedAt: Date.now(),
                },
              },
            },
          };
        }),
        {
          data: {
            teammate_id: E,
            agent_id: E,
            agent_type: r,
            model: _,
            name: s,
            color: w,
            tmux_session_name: "in-process",
            tmux_window_name: "in-process",
            tmux_pane_id: "in-process",
            team_name: d,
            is_splitpane: !1,
            plan_mode_required: T,
          },
        }
      );
    },
    e.storageV5,
  );
}
async function ce(t, e, o) {
  if (t.prompt && isStructuredProtocolMessage(t.prompt))
    throw (
      logFeatureBad("subagent_launch", "subagent_teammate_protocol_frame_prompt"),
      Error(PROTOCOL_FRAME_PROMPT_ERROR)
    );
  if (isInProcessEnabled()) return z(t, e);
  try {
    await detectAndGetBackend();
  } catch (c) {
    if (getTeammateModeFromSnapshot() !== "auto")
      throw (logFeatureBad("subagent_launch", "subagent_teammate_pane_unavailable"), c);
    return (
      n(
        `[handleSpawn] No pane backend available, falling back to in-process: ${l(c)}`,
      ),
      markInProcessFallback(),
      _e(e.toolState.get(ne), o),
      z(t, e)
    );
  }
  if (t.use_splitpane !== !1) return pe(t, e);
  return ue(t, e);
}
class ne {
  shown = !1;
}
function _e(t, e) {
  if (t.shown) return;
  t.shown = !0;
  let o = isInITerm2()
    ? 'To force iTerm2 panes, set teammateMode: "iterm2" in settings and enable the iTerm2 Python API (Preferences > General > Magic).'
    : 'To use terminal panes, set teammateMode: "tmux" in settings.';
  e?.({
    type: "notification",
    notification: {
      key: "teammate-auto-fallback",
      text: `Couldn't open a teammate pane \u2014 running in-process instead. ${o}`,
      color: "warning",
      priority: "high",
    },
  });
}
async function spawnTeammate(t, e, o) {
  return ce(t, e, o);
}
export { spawnTeammate };

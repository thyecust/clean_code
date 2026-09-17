// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { YP, Ve, zi, yt, dt, ge } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { bh, K, sn, Nb, Rg, TB, Oxe, Rje } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { raceWithAbortSignal } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { ae, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { COMMAND_NAME_TAG, COMMAND_MESSAGE_TAG, logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { cmdFeature, logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { nq, inlineSkillModelOverride, mc, o0, isBgSession, wl, Ms } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { C_ } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { nxt, Pt } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { splitToolRuleList } from "../工具Bash-Shell/permission-rule-parsing.js";
import { Rir, kir, TQ } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { Nt } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import { validateBridgeId, toCompatSessionId } from "../权限系统/chunk-ynkf3yy4.js";
import { mayHaveRemoteClient } from "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import { isRestrictedToPluginOnly, isSourceAdminTrusted } from "../Skills技能/chunk-sapykxw7.js";
import { isPolicyAllowed, policyDeniedReason, policyDenyKind } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { CSt } from "../Hooks钩子/chunk-z3433nr6.js";
import { getBundledSkills } from "../Skills技能/bundled-skills.js";
import { iA, Xy } from "../权限系统/chunk-t3b7pg2x.js";
import { SKILL_TOOL_NAME, getToolPermissionContext, getEffortValue } from "../权限系统/chunk-fjrcf22x.js";
import { isSilentAbortReason, shutdownInterruptStamp } from "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import {
  Nft,
  getCommandName,
  isCommandEnabled,
  Y$t,
  pue,
  findCommand,
  oV,
  getCommand,
  XGn,
  $S,
  gr,
  cT,
  W4e,
  lX,
  WF,
  I2,
  kmt,
  cX,
  Gdn,
  UBt,
  hasPermissionsToUseTool,
  isSkillExcludedFromModel,
  isSkillOff,
  wV,
  qVe,
  Ck,
  cjt,
  nht,
  wne,
  X2,
  UTe,
  wLe,
  prepareForkedCommandContext,
  extractResultText,
  VKe,
  I6t,
  O6t,
  D6t,
  Vne,
  Kne,
  jmn,
  C_t,
  runAgent,
  EE,
  dEe,
  Lde,
  getAttachmentMessages,
  createAttachmentMessage,
  tg,
  MEe,
  Re,
  m$,
  PI,
  GV,
  qV,
  wp,
  YWt,
  B_,
  Ht,
  em,
  $l,
  builtInCommandNames,
  shippedCommandNames,
  getBuiltinCommands,
  meetsAvailabilityRequirement,
  attributionSkillName,
  deriveRequires,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { sp, Qn } from "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import { redactPromptUnlessEnabled, emitOtelEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/otel-events.js";
import { wa } from "../工具结果持久化/工具结果持久化.jj43r39n.js";
import {
  resolvePromptCommandFromUri,
  setAlwaysDenyCommands,
  parseSlashCommandInput,
  resolveSubcommandTarget,
  getFotwCommand,
  isFotwCommand,
  isClaimableFotwCommand,
  getFotwCreditAmount,
  refreshFotwEligibility,
  claimFotwCredit,
  markFotwUpsellFulfilled,
} from "../用量额度-限额/chunk-1bfn62xh.js";
import { appendEndedByModelSuffix } from "../../01-核心基础设施/共享小工具-未细化/ended-by-model.js";
import { isMcpSkillsEnabled } from "../MCP客户端/mcp-skills-extension.js";
import { CODE_REVIEW_SKILL_NAME } from "../../01-核心基础设施/共享小工具-未细化/bundled-skill-names.js";
import { isCoordinatorMainSession } from "../../01-核心基础设施/共享小工具-未细化/coordinator-mode.js";
import { isModelInvocable } from "../../01-核心基础设施/共享小工具-未细化/chunk-339z9efw.js";
import { randomUUID } from "crypto";
function Me(e, o, t, m, l) {
  let c = 0;
  for (let _ of C_) {
    let v = t[_];
    if (!v) continue;
    for (let T of v)
      for (let U of T.hooks) {
        let P = U.once
          ? () => {
              (n(`Removing one-shot hook for event ${_} in skill '${m}'`),
                e.remove(o, _, U));
            }
          : void 0;
        (e.add(o, _, T.matcher || "", U, { onHookSuccess: P, skillRoot: l }),
          c++);
      }
  }
  if (c > 0) n(`Registered ${c} hooks from skill '${m}'`);
}
function _e({
  commandName: e,
  agentId: o,
  isNonInteractiveSession: t,
  setAppState: m,
  credentials: l,
}) {
  if (o !== void 0 || t) return;
  if (isBgSession()) return;
  markFotwUpsellFulfilled(e);
  let c = refreshFotwEligibility(l);
  if (!isFotwCommand(e)) return;
  if (isClaimableFotwCommand(e)) {
    Ee(e, m, l);
    return;
  }
  c.then((_) => {
    if (isClaimableFotwCommand(e)) {
      Ee(e, m, l);
      return;
    }
    if (!_) return;
    let v = getFotwCommand();
    if (!v) return;
    m((T) => ({
      ...T,
      fotwClaim: {
        phase: "needs_payment_setup",
        command: v,
        amountMinorUnits: _.amountMinorUnits,
        currency: _.currency,
      },
    }));
  });
}
function Ee(e, o, t) {
  let m = getFotwCommand(),
    l = getFotwCreditAmount();
  if (!m || !l) return;
  (o((c) => ({
    ...c,
    fotwClaim: {
      phase: "pending",
      command: m,
      amountMinorUnits: l.amountMinorUnits,
      currency: l.currency,
    },
  })),
    claimFotwCredit(e, t)
      .catch(() => ({ outcome: "failed" }))
      .then((c) => {
        o((_) => {
          let v = _.fotwClaim;
          if (!v || v.command !== m) return _;
          if (c.outcome === "granted")
            return {
              ..._,
              fotwClaim: {
                phase: "granted",
                command: v.command,
                amountMinorUnits: c.amountMinorUnits,
                currency: c.currency,
              },
            };
          return { ..._, fotwClaim: { ...v, phase: "failed" } };
        });
      }));
}
var xe = {
  teleport: ({ remoteSessionId: e }) =>
    `/teleport pulls a cloud session into a terminal on your own machine, so it can't run from inside this session. To continue this session locally, run claude --teleport ${e} from a checkout of this repository. On claude.ai you can also choose Open in \u2192 Terminal from the session menu, which copies that command.`,
  session: ({ remoteSessionId: e }) =>
    `This session is already running in Claude Code on the web: ${$e(e)}. To continue it in your terminal, run claude --teleport ${e} from a checkout of this repository.`,
  "remote-control": ({ remoteSessionId: e }) =>
    `Remote Control connects a terminal session to claude.ai, and this session is already running in Claude Code on the web: ${$e(e)}.`,
};
function $e(e) {
  return wa(e, a.SESSION_INGRESS_URL);
}
function je() {
  let e = a.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (!e) return;
  try {
    return toCompatSessionId(validateBridgeId(e, "CLAUDE_CODE_REMOTE_SESSION_ID"));
  } catch {
    return;
  }
}
function Ae(e, o) {
  let t = je();
  if (!t) return;
  let m = findCommand(e, o);
  if (!m) return;
  let l = xe[m.name];
  return l ? l({ remoteSessionId: t }) : void 0;
}
var We = new Set(["clear", "resume", "help", "exit", "feedback"]);
function isSlashCommandBlockedByEndedByModel(e, o) {
  if (!o) return !1;
  return !(e && e.type !== "prompt" && We.has(e.name));
}
async function Pe(e, o, t) {
  let m = [],
    l = !1,
    c = e.agentId ? void 0 : e.getAppState().activeGoal;
  try {
    let _ = t.executeStopHooks(
        getToolPermissionContext(e).mode,
        e.abortController.signal,
        void 0,
        !1,
        e.agentId,
        e,
        [...e.messages, ...o],
        void 0,
        "fork_dispatch",
      ),
      v = [];
    for await (let T of _) {
      if (T.timedOut && c && T.hook?.prompt === c.condition)
        logFeatureSad("goal_met", "evaluator_timeout");
      if (T.message?.type === "attachment") {
        let U = T.message.attachment;
        if ("hookEvent" in U && U.hookEvent === "Stop") {
          if (U.type === "hook_non_blocking_error")
            v.push(U.stderr || `Exit code ${U.exitCode}`);
          else if (U.type === "hook_error_during_execution") v.push(U.content);
        }
      }
      if (T.blockingError)
        (m.push(
          Re({ content: t.getStopHookMessage(T.blockingError), isMeta: !0 }),
        ),
          (l = !0));
      if (T.additionalContexts && T.additionalContexts.length > 0)
        (m.push(
          createAttachmentMessage({
            type: "hook_additional_context",
            content: T.additionalContexts,
            hookName: "Stop",
            toolUseID: `hook-${randomUUID()}`,
            hookEvent: "Stop",
          }),
        ),
          (l = !0));
    }
    if (v.length > 0) m.push(Ht(`Stop hook error: ${v.join("; ")}`, "warning"));
  } catch (_) {
    n(`Forked command Stop hooks failed: ${String(_)}`, { level: "error" });
  }
  if (!l)
    try {
      let _ = t.executeStopHooks(
        getToolPermissionContext(e).mode,
        e.abortController.signal,
        void 0,
        !1,
        e.agentId,
        e,
        [],
        void 0,
        "turn_end_reactions",
      );
      for await (let v of _);
    } catch (_) {
      n(`Forked command turn-end reactions failed: ${String(_)}`, {
        level: "error",
      });
    }
  return { messages: m, requestQuery: l };
}
async function ze(e, o, t, m, l, c, _, v = [], T, U, P, W, B) {
  let x = bh(),
    { sanitizedName: V, skillNameHash: q } = WF({
      rawName: e.name,
      canonicalName: e.name,
      isMcp: e.loadedFrom === "mcp",
      isBuiltIn: builtInCommandNames().has(e.name),
      isBundled: e.source === "bundled",
      isOfficial: I2(e),
    });
  logEvent("tengu_slash_command_forked", {
    command_name: V,
    ...q,
    _PROTO_skill_name: e.name,
    invocation_trigger: S("user-slash"),
    ...lX(e.source, e.loadedFrom, e.kind, e.createdBy),
    ...VKe(e.source, e.name),
    ...cX(e),
  });
  let Z = O6t(e, T),
    te = Z
      ? {
          agentId: x,
          parentAgentId: t.agentId,
          depth: mc(t.agentContext) + 1,
          agentType: "subagent",
          isAsync: !1,
          isBackgroundAgent:
            t.agentContext && "isBackgroundAgent" in t.agentContext
              ? t.agentContext.isBackgroundAgent
              : void 0,
          ...o0(t.agentContext),
        }
      : void 0,
    {
      skillContent: s,
      modifiedGetAppState: d,
      contextLayers: p,
      recordInvocation: A,
      baseAgent: M,
      promptMessages: I,
      forkReadFileState: b,
      availableTools: r,
      webFetchReadmissionAllowed: k,
      frozenCommandDenies: C,
    } = await prepareForkedCommandContext(e, o, t, te, {
      extractAttachments: T ? void 0 : getAttachmentMessages,
      replaceCommandRules: !0,
      replaceDenyRules: !T,
      deferInvocationRecording: Z,
    }),
    E =
      p.length > 0 ? [...(t.permissionLayers ?? []), ...p] : t.permissionLayers;
  if (l.length > 0 || m.length > 0)
    I.push(Re({ content: [...l, ...m], isMeta: !0 }));
  if (B && B.length > 0) I.push(createAttachmentMessage({ type: "inlined_image_paths", paths: B }));
  let H = await C_t(e, sn(), {
    options: {
      tools: EE(
        M,
        k
          ? X2(M, r, getToolPermissionContext(t), {
              activeAgents: t.options.agentDefinitions.activeAgents,
            })
          : r,
        Z,
      ).resolvedTools,
      spawnedBySkill: attributionSkillName(e),
    },
    storageV5: t.storageV5,
  });
  if (H) I.push(H);
  I.push(...v);
  let j = e.getEffort?.(o, t) ?? e.getDefaultEffort?.(o, t)?.value ?? e.effort,
    O = j !== void 0 ? { ...M, effort: j } : M,
    R = Re({
      content: m$({
        inputString: `/${getCommandName(e)} ${o}`.trim(),
        precedingInputBlocks: l.length > 0 ? [...l, ...m] : m,
      }),
      uuid: U,
      origin: W,
    });
  if (
    (await t.makeFileHistorySnapshot?.(R.uuid),
    n(`Executing forked slash command /${e.name} with agent ${O.agentType}`),
    Z)
  ) {
    P?.markTurnActive(T ? void 0 : `/${getCommandName(e)} ${o}`.trim());
    let Q;
    try {
      Q = await D6t({
        agentId: x,
        agentDefinition: O,
        command: e,
        description: `/${getCommandName(e)} ${o}`.trim(),
        prompt: s,
        promptMessages: I,
        context: t,
        canUseTool: c,
        getAppState: d,
        permissionLayers: E,
        readFileState: b,
        availableTools: r,
        webFetchReadmissionAllowed: k,
        spawnedBySkill: attributionSkillName(e),
        recordInvocationOnSuccess: A,
        frozenCommandDenies: C,
      });
    } catch (J) {
      if ((await P?.settleTurnEnd(null), yt(J)))
        return {
          messages: [R, PI({ toolUse: !1 })],
          shouldQuery: !1,
          command: e,
          aborted: !0,
          forkDispatched: !0,
        };
      return {
        messages: [
          R,
          Re({
            content: `<local-command-stderr>${Nt(commandThrowTextForTranscript(J, e.name, t.session))}</local-command-stderr>`,
          }),
        ],
        shouldQuery: !1,
        command: e,
        threw: !0,
        forkDispatched: !0,
      };
    }
    if (Q)
      return (
        await P?.settleTurnEnd(null),
        {
          messages: [
            R,
            em(
              `<local-command-stdout>Running in the background as @${$S(Qn(Q.name))}</local-command-stdout>
` +
                XGn({
                  agentId: Q.agentId,
                  skillName: e.name,
                  description: `/${getCommandName(e)} ${o}`.trim(),
                }),
            ),
          ],
          shouldQuery: !1,
          command: e,
          forkDispatched: !0,
        }
      );
    A();
  }
  let N = [],
    D = [],
    G = `forked-command-${e.name}`,
    le = 0,
    de = (Q) => (
      le++,
      {
        type: "progress",
        data: {
          message: Q,
          type: "agent_progress",
          prompt: s,
          agentId: x,
          agentType: O.agentType,
          isBuiltIn: O.source === "built-in",
          description: e.description,
        },
        parentToolUseID: G,
        toolUseID: `${G}-${le}`,
        timestamp: new Date().toISOString(),
        uuid: randomUUID(),
      }
    ),
    se = () => {
      t.emitToolProgress?.({
        kind: "agent_progress",
        toolUseId: G,
        progressMessages: [...D],
      });
    };
  P?.markTurnActive(T ? void 0 : `/${getCommandName(e)} ${o}`.trim());
  try {
    se();
    for await (let Q of runAgent({
      agentDefinition: O,
      promptMessages: I,
      onModelRestricted: I6t(attributionSkillName(e), t.onQueryEvent),
      toolUseContext: { ...t, getAppState: d, permissionLayers: E },
      canUseTool: c,
      isAsync: !1,
      querySource: "agent:custom",
      spawnedBySkill: attributionSkillName(e),
      spawnedByForkedSkill: !0,
      model: e.model,
      availableTools: r,
      webFetchReadmissionAllowed: k,
      override: { shareFileHistory: !0, agentId: x, readFileState: b },
    })) {
      if (
        Q.type === "api_metrics" ||
        Q.type === "set_in_progress_tool_use_ids" ||
        Q.type === "spinner_mode" ||
        Q.type === "query_model_change"
      )
        continue;
      N.push(Q);
      let J = wp([Q]);
      if (Q.type === "assistant") {
        let Y = UBt(Q);
        if (Y > 0)
          t.onQueryEvent?.({ type: "response_length", op: "add", delta: Y });
        let fe = J[0];
        if (fe && fe.type === "assistant") (D.push(de(Q)), se());
      }
      if (Q.type === "user") {
        let Y = J[0];
        if (Y && Y.type === "user") (D.push(de(Y)), se());
      }
    }
    if (!dEe(tg(N))) Lde(x, t);
  } catch (Q) {
    if (yt(Q))
      return (
        await P?.settleTurnEnd(null),
        {
          messages: [R, PI({ toolUse: !1 })],
          shouldQuery: !1,
          command: e,
          aborted: !0,
          forkDispatched: !0,
        }
      );
    await P?.settleTurnEnd(null);
    let J = await Pe(t, N, _);
    return {
      messages: [
        R,
        Re({
          content: `<local-command-stderr>${Nt(commandThrowTextForTranscript(Q, e.name, t.session))}</local-command-stderr>`,
        }),
        ...J.messages,
      ],
      shouldQuery: J.requestQuery,
      command: e,
      threw: !0,
      forkDispatched: !0,
    };
  } finally {
    (Oxe(x), t.emitToolProgress?.({ kind: "clear", toolUseId: G }));
  }
  let pe = extractResultText(N, "Command completed");
  (n(`Forked slash command /${e.name} completed with agent ${x}`),
    await P?.settleTurnEnd(N));
  let F = await Pe(t, N, _);
  return {
    messages: [
      R,
      em(`<local-command-stdout>${$S(pe)}</local-command-stdout>`),
      ...F.messages,
    ],
    shouldQuery: F.requestQuery,
    command: e,
    resultText: pe,
    forkDispatched: !0,
  };
}
function qe(e, o, { interactive: t }) {
  let m = [o, getBuiltinCommands(), getBundledSkills(), CSt()],
    l;
  for (let T of m) {
    let U = findCommand(e, T);
    if (U?.policyGate) {
      l = U;
      break;
    }
  }
  let c = l?.policyGate;
  if (!l || !c) return;
  if (!meetsAvailabilityRequirement(l)) return;
  if (isPolicyAllowed(c.policy)) {
    if (t && !Rg() && isCommandEnabled(l) && findCommand(e, o) === void 0)
      return { command: l, reason: kir(l.name), kind: "stale_list" };
    return;
  }
  let _ = policyDenyKind(c.policy),
    v =
      _ === "cache_miss"
        ? Rir(c.featureLabel)
        : policyDeniedReason(c.policy, c.featureLabel, c.verb ?? "is");
  if (v === null || _ === null) return;
  return { command: l, reason: v, kind: _ };
}
function looksLikeCommand(e) {
  return /^[a-zA-Z0-9_][a-zA-Z0-9:_-]*$/.test(e);
}
function commandThrowTextForTranscript(e, o, t) {
  let m = gr(o, 200),
    l = Qn(o);
  if (yt(e)) {
    if (mayHaveRemoteClient(t)) return (n(`${l} aborted: ${String(e)}`), "Interrupted");
    return $S(e instanceof Error ? e.message || "Interrupted" : "Interrupted");
  }
  if (e instanceof YP) return $S(e.message);
  if (mayHaveRemoteClient(t))
    return (
      n(`${l} threw: ${String(e)}`, { level: "error" }),
      `${m} failed (detail withheld on this connection)`
    );
  return $S(String(e));
}
async function processSlashCommand(e, o, t, m, l, c, _, v, T, U, P, W, B, x, V, q, Z) {
  function te() {
    let w = randomUUID(),
      L = MEe(o) ? void 0 : w;
    if (L !== void 0) Rje(L);
    let z = Xy(l.options.mainLoopModel, getEffortValue(l));
    logEvent("tengu_input_prompt", {
      ...(T && { prompt_source: fromEnum(T) }),
      ...(z && { effort_level: fromEnum(z) }),
    });
    let ee = c || randomUUID();
    return (
      emitOtelEvent("user_prompt", {
        prompt_length: String(e.length),
        prompt: redactPromptUnlessEnabled(e),
        ...(L && { "prompt.id": L }),
        "message.uuid": ee,
      }),
      {
        messages: [
          Re({
            content: m$({ inputString: e, precedingInputBlocks: o }),
            uuid: ee,
            promptSource: T,
            promptId: L,
            origin: V,
          }),
          ...m,
        ],
        shouldQuery: !0,
      }
    );
  }
  let s = parseSlashCommandInput(e);
  if (!s) {
    if ((logEvent("tengu_input_slash_missing", {}), l.options.isNonInteractiveSession))
      return te();
    logFeatureBad("cmd_dispatch", "cmd_parse_failed");
    let w = "Commands are in the form `/command [args]`";
    return {
      messages: [
        GV(),
        ...m,
        Re({ content: m$({ inputString: w, precedingInputBlocks: o }) }),
      ],
      shouldQuery: !1,
      resultText: w,
    };
  }
  let { commandName: d, args: p } = s,
    { isMcp: A } = s,
    M;
  if (W !== void 0) {
    let w = parseSlashCommandInput(W);
    M = w && w.commandName === s.commandName ? w.args : void 0;
  }
  let I = !1;
  if (isMcpSkillsEnabled()) {
    let w = resolvePromptCommandFromUri(d, l.options.commands);
    if (w) ((d = w.commandName), (p = w.args));
    else if (d.includes("://")) I = !0;
  }
  let b = findCommand(d, l.options.commands);
  if (b && !isCommandEnabled(b)) b = void 0;
  if (!b && !A && p.trim()) {
    let w = p.trimStart(),
      L = w.search(/\s/),
      z = L === -1 ? w : w.slice(0, L),
      ee = `${d}:${z}`,
      he = findCommand(ee, l.options.commands);
    if (he)
      ((b = he), (d = ee), (p = L === -1 ? "" : w.slice(L + 1).trimStart()));
  }
  let r, k;
  if (b && !isSkillOff(b)) {
    let w = resolveSubcommandTarget(b, p);
    if (w) {
      let L = findCommand(w.targetName, l.options.commands);
      if (L && isCommandEnabled(L))
        ((k = `${d} ${w.consumedToken}`),
          (b = L),
          (d = w.targetName),
          (p = w.remainingArgs));
      else if (b.name === CODE_REVIEW_SKILL_NAME) {
        let z = Nft();
        if (z) r = Ht(`${z} Running a local review instead.`, "warning");
      }
    }
  }
  if (b?.loadedFrom === "syncedSkills" && wV()) b = void 0;
  let C = builtInCommandNames().has(d);
  if (isSlashCommandBlockedByEndedByModel(b, l.getAppState().endedByModel)) {
    let w = appendEndedByModelSuffix(
      "Claude ended this conversation. Start a new session (or /clear) to continue.",
    );
    return { messages: [Ht(w, "warning")], shouldQuery: !1, resultText: w };
  }
  let E = b?.type === "prompt" && b.source === "bundled",
    H = b?.type === "prompt" && I2(b),
    j = A || (b?.type === "prompt" && b.source === "mcp");
  if (!b) {
    let w = !1;
    try {
      (await ae().stat(`/${d}`), (w = !0));
    } catch {}
    if ((looksLikeCommand(d) || I) && !w) {
      let L = qe(d, l.options.commands, {
        interactive: !l.options.isNonInteractiveSession,
      });
      if (L) {
        let { command: X, reason: ne, kind: re } = L;
        (logEvent("tengu_input_slash_invalid", {
          input_length: d.length,
          had_suggestion: !1,
          policy_denied: re !== "stale_list",
        }),
          logFeatureBad(
            "cmd_dispatch",
            re === "stale_list" ? "cmd_stale_list" : `cmd_policy_${re}`,
          ));
        let me = $S(Qn(d)),
          ue = !p ? "" : oV(X, p) ? "***" : $S(nq(p));
        if (l.options.isNonInteractiveSession)
          return {
            messages: [
              ...m,
              em(`/${me}${ue ? ` ${ue}` : ""}`),
              em(`<local-command-stdout>${ne}</local-command-stdout>`),
            ],
            shouldQuery: !1,
            resultText: ne,
          };
        return {
          messages: [
            ...m,
            Ht(ne, "warning"),
            ...(ue && ue !== "***"
              ? [Ht(`Args from /${me}: ${ue}`, "warning")]
              : []),
          ],
          shouldQuery: !1,
          resultText: ne,
        };
      }
      if (l.options.isNonInteractiveSession && builtInCommandNames().has(d)) {
        let X = getBuiltinCommands(),
          ne = Ae(d, X) ?? `/${$S(Qn(d))} isn't available in this environment.`;
        (logEvent("tengu_input_slash_invalid", {
          input_length: d.length,
          had_suggestion: !1,
        }),
          logFeatureBad("cmd_dispatch", "cmd_unavailable_headless"));
        let re = findCommand(d, X),
          me = !p ? "" : re !== void 0 && oV(re, p) ? "***" : $S(nq(p));
        return {
          messages: [
            ...m,
            em(`/${$S(Qn(d))}${me ? ` ${me}` : ""}`),
            em(`<local-command-stdout>${ne}</local-command-stdout>`),
          ],
          shouldQuery: !1,
          resultText: ne,
        };
      }
      let z = Vne(
        d,
        l.options.commands
          .filter(
            (X) =>
              !X.isHidden &&
              !isSkillOff(X) &&
              isCommandEnabled(X) &&
              !(X.loadedFrom === "syncedSkills" && Nb()),
          )
          .map((X) => ({ name: getCommandName(X), aliases: X.aliases })),
        { maxEditDistance: 2 },
      );
      (logEvent("tengu_input_slash_invalid", {
        input_length: d.length,
        is_mcp_template_unmatched: I,
        had_suggestion: Boolean(z),
        suggestion_distance: z ? Kne(d, z) : void 0,
      }),
        logFeatureBad("cmd_dispatch", "cmd_unknown"));
      let ee = gr(d, 512),
        he = z ? gr(z, 200) : void 0,
        ye = z
          ? `Unknown command: /${ee}. Did you mean /${he}?`
          : `Unknown command: /${ee}`;
      if (l.options.isNonInteractiveSession)
        return {
          messages: [
            ...m,
            em(`/${ee}${p ? ` ${$S(nq(p))}` : ""}`),
            em(`<local-command-stdout>${ye}</local-command-stdout>`),
          ],
          shouldQuery: !1,
          resultText: ye,
        };
      return {
        messages: [
          ...m,
          Ht(ye, "warning"),
          ...(p ? [Ht(`Args from unknown skill: ${nq(p)}`, "warning")] : []),
        ],
        shouldQuery: !1,
        resultText: ye,
      };
    }
    return te();
  }
  let O =
      j || b.loadedFrom === "mcp"
        ? "mcp"
        : C ||
            (b.type === "prompt" &&
              (b.source === "bundled" || b.source === "builtin"))
          ? "builtin"
          : "custom",
    R = oV(b, p) ? `/${d} ***` : e;
  if (!(l.deferSlashToEngine?.(b) ?? !1)) {
    let w = randomUUID();
    (Rje(w),
      emitOtelEvent("user_prompt", {
        prompt_length: String(R.length),
        prompt: redactPromptUnlessEnabled(R),
        "prompt.id": w,
        command_name: O === "builtin" || wl() ? d : O,
        command_source: O,
      }));
  }
  let {
    messages: D,
    shouldQuery: G,
    allowedTools: le,
    disallowedTools: de,
    model: se,
    effort: pe,
    command: F,
    resultText: ke,
    nextInput: Q,
    submitNextInput: J,
    engineDeferredSlash: Y,
    forkDispatched: fe,
    settledInPlace: Qe,
  } = await Ke(d, p, l, o, t, _, v, c, U, P, M, k, B, T, x, V, q, Z);
  if (F.type === "prompt" && F.pluginInfo)
    Ck(
      F.pluginInfo.repository,
      "command",
      qVe(F, F.pluginInfo.pluginManifest.name),
    );
  let { sanitizedName: He, skillNameHash: Be } = WF({
    rawName: d,
    canonicalName: F.name,
    isMcp: j || F.loadedFrom === "mcp",
    isBuiltIn: C,
    isBundled: E,
    isOfficial: H,
  });
  function Te() {
    let w = { input: He, ...Be };
    if (F.type === "prompt" && F.pluginInfo) {
      Object.assign(w, kmt(F));
      let L = F.pluginInfo.pluginManifest.version;
      if (L && I2(F)) w.plugin_version = Ms(L);
    }
    if (F.type === "prompt") Object.assign(w, cX(F));
    logEvent("tengu_input_command", {
      ...w,
      invocation_trigger: S("user-slash"),
      ...lX(
        F.type === "prompt" ? F.source : void 0,
        F.loadedFrom,
        F.kind,
        F.type === "prompt" ? F.createdBy : void 0,
      ),
      ...VKe(F.type === "prompt" ? F.source : void 0, d),
      ...(F.type === "prompt" && { command_content_chars: F.contentLength }),
      ...(F.type === "prompt" && { _PROTO_skill_name: F.name }),
      ...!1,
    });
  }
  if (D.length === 0) {
    if (Qe) logFeatureOk("cmd_dispatch");
    return (
      Te(),
      {
        messages: [],
        shouldQuery: !1,
        model: se,
        resultText: ke,
        nextInput: Q,
        submitNextInput: J,
      }
    );
  }
  if (
    D.length === 2 &&
    D[1].type === "user" &&
    typeof D[1].message.content === "string" &&
    D[1].message.content.startsWith("Unknown command:")
  ) {
    if (!(
      e.startsWith("/var") ||
      e.startsWith("/tmp") ||
      e.startsWith("/private")
    ))
      (logEvent("tengu_input_slash_invalid", {
        input_length: d.length,
        had_suggestion: !1,
      }),
        logFeatureBad("cmd_dispatch", "cmd_unknown"));
    return {
      messages: [GV(), ...D],
      shouldQuery: G,
      allowedTools: le,
      disallowedTools: de,
      model: se,
    };
  }
  if (!Y) (logFeatureOk("cmd_dispatch"), Te());
  let Le = D.length > 0 && D[0] && $l(D[0]),
    Ie =
      G ||
      D.every(
        (w) =>
          YWt(w) ||
          (w.type === "system" && w.subtype === "informational") ||
          (w.type === "user" && w.isMeta),
      ) ||
      Le ||
      Y
        ? D
        : [GV(), ...D];
  return {
    messages: r && G ? [...Ie, r] : Ie,
    shouldQuery: G,
    allowedTools: le,
    disallowedTools: de,
    model: se,
    effort: pe,
    resultText: ke,
    nextInput: Q,
    submitNextInput: J,
    engineDeferredSlash: Y,
    forkDispatched: fe,
  };
}
function Se(e, o) {
  let t = `/${getCommandName(e)} opens an interactive panel and isn't available in this environment. Run it from the Claude Code terminal instead.`;
  return {
    messages: [
      em(we(e, o)),
      em(`<local-command-stdout>${t}</local-command-stdout>`),
    ],
    shouldQuery: !1,
    command: e,
    resultText: t,
  };
}
async function Ke(e, o, t, m, l, c, _, v, T, U, P, W, B, x, V, q, Z, te) {
  let s = getCommand(e, t.options.commands),
    d = cmdFeature(shippedCommandNames().has(e) ? e : "custom");
  if (!isCommandEnabled(s)) {
    logFeatureBad(d, "cmd_policy_disabled");
    let p = `/${$S(Qn(e))} isn't available in this session.`;
    if (t.options.isNonInteractiveSession)
      return {
        messages: [
          em(we(s, o)),
          em(`<local-command-stdout>${p}</local-command-stdout>`),
        ],
        shouldQuery: !1,
        command: s,
        resultText: p,
      };
    return {
      messages: [Ht(p, "warning")],
      shouldQuery: !1,
      command: s,
      resultText: p,
    };
  }
  if (isSkillOff(s)) {
    if ((logFeatureBad(d, "cmd_skill_override_off"), t.options.isNonInteractiveSession)) {
      let M = `Skill "${gr(s.name, 200)}" is disabled via skillOverrides. Remove the override from your settings to run it.`;
      return {
        messages: [
          em(we(s, o)),
          em(`<local-command-stdout>${M}</local-command-stdout>`),
        ],
        shouldQuery: !1,
        command: s,
        resultText: M,
      };
    }
    let p = `Skill "${gr(s.name, 200)}" is disabled via skillOverrides. Re-enable it in /skills or remove the override from your settings to run it.`,
      A = !o ? "" : oV(s, o) ? "***" : $S(nq(o));
    return {
      messages: [
        Ht(p, "warning"),
        ...(o ? [Ht(`Args from disabled skill: ${A}`, "warning")] : []),
      ],
      shouldQuery: !1,
      command: s,
      resultText: p,
    };
  }
  if (s.type === "prompt" && s.userInvocable !== !1)
    nht(t.session, s.name, t.storageV5);
  if (s.type === "prompt" && s.pluginInfo) cT(s.pluginInfo.repository);
  if (!t.deferSlashToEngine?.(s))
    _e({
      commandName: s.name,
      agentId: t.agentId,
      isNonInteractiveSession: Boolean(t.options.isNonInteractiveSession),
      setAppState: t.setAppState,
      credentials: t.credentials,
    });
  if (s.userInvocable === !1)
    return (
      logFeatureBad(d, "cmd_not_user_invocable"),
      {
        messages: [
          Re({
            content: m$({ inputString: `/${Qn(e)}`, precedingInputBlocks: m }),
            uuid: v,
          }),
          Re({
            content: `This skill can only be invoked by Claude, not directly by users. Ask Claude to use the "${Qn(e)}" skill for you.`,
          }),
        ],
        shouldQuery: !1,
        command: s,
      }
    );
  if (s.type === "local-jsx" && t.options.isNonInteractiveSession)
    return (logFeatureBad(d, "cmd_local_jsx_headless"), Se(s, o));
  try {
    switch (s.type) {
      case "local-jsx":
        return new Promise((p) => {
          let A = !1,
            M = (r, k) => {
              if (A) return;
              if (((A = !0), logFeatureOk(d), k?.display === "skip")) {
                p({
                  messages: [],
                  shouldQuery: !1,
                  command: s,
                  nextInput: k?.nextInput,
                  submitNextInput: k?.submitNextInput,
                });
                return;
              }
              let C = (k?.metaMessages ?? []).map((H) =>
                  Re({ content: H, isMeta: !0 }),
                ),
                E =
                  t.presentation === "fullscreen" &&
                  typeof r === "string" &&
                  r.endsWith(" dismissed");
              p({
                messages:
                  k?.display === "system"
                    ? E
                      ? C
                      : [
                          em(ie(s, o)),
                          em(
                            `<local-command-stdout>${$S(String(r))}</local-command-stdout>`,
                          ),
                          ...C,
                        ]
                    : [
                        Re({
                          content: m$({
                            inputString: ie(s, o),
                            precedingInputBlocks: m,
                          }),
                          uuid: v,
                        }),
                        r
                          ? Re({
                              content: `<local-command-stdout>${r}</local-command-stdout>`,
                            })
                          : Re({
                              content: `<local-command-stdout>${sp}</local-command-stdout>`,
                            }),
                        ...C,
                      ],
                shouldQuery: k?.shouldQuery ?? !1,
                command: s,
                nextInput: k?.nextInput,
                submitNextInput: k?.submitNextInput,
              });
            },
            I = s.load ?? t.options.resolveCommandDialog?.(s);
          if (!I) {
            (logFeatureBad(d, "cmd_local_jsx_no_dialog_resolution"), p(Se(s, o)));
            return;
          }
          let b = pue(s, o, t.presentation ?? "inline");
          I()
            .then((r) =>
              r.call(
                M,
                {
                  ...t,
                  canUseTool: _,
                  dispatchedAsImmediate: b,
                  submissionOrigin: q,
                },
                o,
                W ?? e,
              ),
            )
            .then((r) => {
              if (r == null) return;
              if (A) return;
              let k = t.localJsx;
              if (!k) {
                (logFeatureBad(d, "cmd_local_jsx_no_panel_host"), (A = !0), p(Se(s, o)));
                return;
              }
              k.show(r, {
                commandName: getCommandName(s),
                immediate: b,
                hidesPrompt: !0,
                retireAtTurnBoundary: !0,
              }).closed.then((E) => {
                if (E === "dismissed" && !A)
                  ((A = !0),
                    logFeatureBad(d, "cmd_local_jsx_dismissed"),
                    p({ messages: [], shouldQuery: !1, command: s }));
              });
            })
            .catch((r) => {
              let k = yt(r);
              if (k)
                n(
                  `local-jsx command aborted: ${r instanceof Error ? r.message : String(r)}`,
                );
              else logError(dt(ge(r), "local-jsx slash command threw"));
              if (
                (logFeatureBad(d, k ? "cmd_local_jsx_aborted" : "cmd_local_jsx_threw"), A)
              )
                return;
              if (((A = !0), k)) {
                p({ messages: [], shouldQuery: !1, command: s });
                return;
              }
              p({
                messages: [
                  Re({
                    content: m$({
                      inputString: ie(s, o),
                      precedingInputBlocks: m,
                    }),
                    uuid: v,
                  }),
                  em(
                    `<local-command-stderr>${Nt($S(commandThrowTextForTranscript(r, s.name, t.session)))}</local-command-stderr>`,
                  ),
                ],
                shouldQuery: !1,
                command: s,
              });
            });
        });
      case "local": {
        if (t.deferSlashToEngine?.(s)) {
          let M = `/${getCommandName(s)} ${o}`.trim(),
            I = Re({
              content: m$({ inputString: M, precedingInputBlocks: m }),
              uuid: v,
            });
          return {
            messages: [I],
            shouldQuery: !1,
            command: s,
            engineDeferredSlash: { text: M, messageUuid: I.uuid },
          };
        }
        let p = Re({
            content: m$({ inputString: ie(s, o), precedingInputBlocks: m }),
            uuid: v,
          }),
          A = Pt() && deriveRequires(s).workspace;
        if (A) t.applyMessageOp({ type: "append", messages: [p] });
        try {
          let M = GV(),
            b = (await s.load()).call(o, { ...t, submissionOrigin: q }, W ?? e),
            r = A
              ? await raceWithAbortSignal(b, t.abortController.signal, () => new Ve())
              : await b;
          if (r.type === "text" && r.level === "error")
            logFeatureBad(d, "cmd_returned_error");
          else logFeatureOk(d);
          if (r.type === "skip")
            return { messages: [], shouldQuery: !1, command: s };
          if (r.type === "compact") {
            let E = [
                M,
                p,
                ...(r.displayText
                  ? [
                      Re({
                        content: `<local-command-stdout>${$S(r.displayText)}</local-command-stdout>`,
                        timestamp: new Date(Date.now() + 100).toISOString(),
                      }),
                    ]
                  : []),
              ],
              H = {
                ...r.compactionResult,
                messagesToKeep: [...r.compactionResult.messagesToKeep, ...E],
              };
            return { messages: wne(H), shouldQuery: !1, command: s };
          }
          if (r.type === "query")
            return {
              messages: [
                p,
                em(
                  `<local-command-stdout>${$S(r.value)}</local-command-stdout>`,
                ),
                ...(r.metaMessages ?? []).map((E) =>
                  Re({ content: E, isMeta: !0 }),
                ),
                Re({ content: r.prompt, isMeta: !0 }),
              ],
              shouldQuery: !0,
              command: s,
              resultText: r.value,
            };
          let k =
              r.level === "error"
                ? "local-command-stderr"
                : "local-command-stdout",
            C = em(`<${k}>${$S(r.value)}</${k}>`, {
              contextUsage: r.contextUsage,
            });
          if (A)
            return Ne(t, p, {
              messages: [C],
              shouldQuery: !1,
              command: s,
              resultText: r.value,
            });
          return {
            messages: [
              p,
              C,
              ...(r.metaMessages ?? []).map((E) =>
                Re({ content: E, isMeta: !0 }),
              ),
            ],
            shouldQuery: !1,
            command: s,
            resultText: r.value,
          };
        } catch (M) {
          if (yt(M))
            n(
              `local command aborted: ${M instanceof Error ? M.message : String(M)}`,
            );
          else logError(dt(ge(M), "local slash command threw"));
          let I = yt(M);
          if (I && t.abortController.signal.aborted) logFeatureSad(d, "cmd_local_aborted");
          else logFeatureBad(d, I ? "cmd_local_aborted" : "cmd_local_threw");
          let b = I ? "local-command-stdout" : "local-command-stderr",
            r = A ? nxt : "Interrupted",
            k = I
              ? mayHaveRemoteClient(t.session)
                ? r
                : M instanceof Error
                  ? M.message || r
                  : r
              : commandThrowTextForTranscript(M, s.name, t.session),
            C = em(`<${b}>${Nt($S(k))}</${b}>`);
          if (A)
            return Ne(t, p, { messages: [C], shouldQuery: !1, command: s });
          return { messages: [p, C], shouldQuery: !1, command: s };
        }
      }
      case "prompt": {
        if (!(s.isMcp && s.loadedFrom !== "mcp")) W4e(s.name, s, "user-slash");
        let {
            stacked: p,
            trailingArgs: A,
            capped: M,
          } = s.context === "fork" ||
          s.getContext !== void 0 ||
          s.argsMayContainSlashCommands
            ? { stacked: [], trailingArgs: o, capped: !1 }
            : Xe(o, P, t.options.commands, T ? (U ?? (() => !0)) : void 0),
          I = A,
          b;
        if (p.length > 0)
          logEvent("tengu_stacked_slash_commands", { stacked_count: p.length });
        try {
          let r = await De(s, I, t);
          if ("blocked" in r) return (logFeatureBad(d, "cmd_hook_blocked"), r.blocked);
          if (!t.options.isNonInteractiveSession && !T)
            if ((s.onUserTypedArgs?.(I, t), s.getEffort?.(I, t) !== void 0))
              iA(t.storageV5);
            else {
              let C = s.getDefaultEffort?.(I, t)?.notice;
              if (C) b = Ht(C, "notice");
            }
          if (Y$t(s, I, t) === "fork" && !isCoordinatorMainSession(t)) {
            let C = `/${e} ${o}`.trim(),
              E = B_([...m, { type: "text", text: C }]) ?? C;
            if (!V)
              throw Error("Forked dispatch requires forkDispatchHookExecutors");
            let H = [],
              j = [];
            for await (let R of V.executeUserPromptSubmitHooks(
              E,
              getToolPermissionContext(t).mode,
              t,
              cjt({ promptSource: x ?? "typed" }),
            )) {
              if (R.message?.type === "progress") continue;
              if (R.message?.type === "attachment") {
                let N = R.message.attachment;
                if ("hookEvent" in N && N.hookEvent === "UserPromptSubmit") {
                  if (N.type === "hook_non_blocking_error")
                    j.push(N.stderr || `Exit code ${N.exitCode}`);
                  else if (N.type === "hook_error_during_execution")
                    j.push(N.content);
                }
              }
              if (R.blockingError) {
                logFeatureBad(d, "cmd_prompt_submit_hook_blocked");
                let N = V.getUserPromptSubmitHookBlockingMessage(
                    R.blockingError,
                  ),
                  D = R.suppressOriginalPrompt
                    ? N
                    : `${N}

Original prompt: ${E}`;
                return {
                  messages: [Ht(D, "warning", void 0, !0)],
                  shouldQuery: !1,
                  resultText: D,
                  command: s,
                  forkDispatched: !0,
                };
              }
              if (R.preventContinuation) {
                let N = R.stopReason
                  ? `Operation stopped by hook: ${R.stopReason}`
                  : "Operation stopped by hook";
                return (
                  logFeatureBad(d, "cmd_prompt_submit_hook_stopped"),
                  {
                    messages: [
                      Re({ content: N }),
                      Ht(N, "warning", void 0, !0),
                    ],
                    shouldQuery: !1,
                    resultText: N,
                    command: s,
                    forkDispatched: !0,
                  }
                );
              }
              if (R.additionalContexts && R.additionalContexts.length > 0)
                H.push(
                  createAttachmentMessage({
                    type: "hook_additional_context",
                    content: R.additionalContexts,
                    hookName: "UserPromptSubmit",
                    toolUseID: `hook-${randomUUID()}`,
                    hookEvent: "UserPromptSubmit",
                  }),
                );
            }
            let O = await ze(
              s,
              I,
              t,
              m,
              l,
              _ ?? hasPermissionsToUseTool,
              V,
              [...r.hookMessages, ...H],
              T,
              v,
              B,
              q,
              Z,
            );
            if (j.length > 0)
              O.messages.push(
                Ht(`UserPromptSubmit hook error: ${j.join("; ")}`, "warning"),
              );
            if (O.aborted) logFeatureBad(d, "cmd_prompt_aborted");
            else if (O.threw) logFeatureBad(d, "cmd_prompt_threw");
            else if ((logFeatureOk(d), b)) O.messages.splice(1, 0, b);
            return O;
          }
          let k = await ve(s, I, t, m, l, v, r.hookMessages, T, q, te);
          if (p.length > 0 && P !== void 0) {
            let C = k.messages[0];
            if (C?.type === "user" && !C.isMeta)
              C.stackedOriginalInput = `/${s.name} ${P}`;
          }
          for (let C of p)
            try {
              let E = await De(C, A, t);
              if ("blocked" in E) {
                k.messages.push(
                  Ht(
                    `Stacked skill /${Qn(C.name)} blocked by UserPromptExpansion hook`,
                    "warning",
                  ),
                );
                continue;
              }
              if (!t.options.isNonInteractiveSession && !T)
                if ((C.onUserTypedArgs?.(A, t), C.getEffort?.(A, t) !== void 0))
                  iA(t.storageV5);
                else {
                  let O = C.getDefaultEffort?.(A, t)?.notice;
                  if (O) k.messages.push(Ht(O, "notice"));
                }
              if (
                (_e({
                  commandName: C.name,
                  agentId: t.agentId,
                  isNonInteractiveSession: Boolean(
                    t.options.isNonInteractiveSession,
                  ),
                  setAppState: t.setAppState,
                  credentials: t.credentials,
                }),
                nht(t.session, C.name, t.storageV5),
                C.pluginInfo)
              )
                (cT(C.pluginInfo.repository),
                  Ck(
                    C.pluginInfo.repository,
                    "command",
                    qVe(C, C.pluginInfo.pluginManifest.name),
                  ));
              if (!(C.isMcp && C.loadedFrom !== "mcp"))
                W4e(C.name, C, "user-slash");
              let H = await ve(C, A, t, [], [], void 0, E.hookMessages, T, q),
                j = H.messages[0];
              if (j?.type === "user" && !j.isMeta) j.stackedExpansion = !0;
              (k.messages.push(...H.messages),
                (k.allowedTools = [
                  ...(k.allowedTools ?? []),
                  ...(H.allowedTools ?? []),
                ]),
                (k.disallowedTools = [
                  ...(k.disallowedTools ?? []),
                  ...(H.disallowedTools ?? []),
                ]),
                (k.model = H.model ?? k.model),
                (k.effort = H.effort ?? k.effort));
            } catch (E) {
              if (E instanceof Ve) throw E;
              (logError(dt(ge(E), "stacked slash command expansion threw")),
                k.messages.push(
                  Ht(
                    `Stacked skill /${Qn(C.name)} failed to load: ${commandThrowTextForTranscript(E, C.name, t.session)}`,
                    "warning",
                  ),
                ));
            }
          if (M)
            k.messages.push(
              Ht(
                `Stacked command limit (${Oe}) reached \u2014 remaining input passed as arguments`,
                "warning",
              ),
            );
          if (b) k.messages.push(b);
          return (logFeatureOk(d), k);
        } catch (r) {
          if (yt(r)) {
            logFeatureBad(d, "cmd_prompt_aborted");
            let k = [
              Re({
                content: m$({ inputString: ie(s, o), precedingInputBlocks: m }),
                uuid: v,
              }),
            ];
            if (!isSilentAbortReason(t.abortController.signal.reason))
              k.push(
                PI({
                  toolUse: !1,
                  interruptedByShutdown: shutdownInterruptStamp(t.abortController.signal),
                }),
              );
            return { messages: k, shouldQuery: !1, command: s };
          }
          return (
            logFeatureBad(d, "cmd_prompt_threw"),
            {
              messages: [
                Re({
                  content: m$({
                    inputString: ie(s, o),
                    precedingInputBlocks: m,
                  }),
                  uuid: v,
                }),
                Re({
                  content: `<local-command-stderr>${Nt(commandThrowTextForTranscript(r, s.name, t.session))}</local-command-stderr>`,
                }),
              ],
              shouldQuery: !1,
              command: s,
            }
          );
        }
      }
    }
  } catch (p) {
    if (p instanceof YP)
      return (
        logFeatureBad(d, "cmd_malformed"),
        {
          messages: [
            Re({
              content: m$({ inputString: p.message, precedingInputBlocks: m }),
            }),
          ],
          shouldQuery: !1,
          command: s,
        }
      );
    throw p;
  }
}
function ie(e, o) {
  return qV(getCommandName(e), oV(e, o) ? "***" : o);
}
function we(e, o) {
  return qV(Qn(getCommandName(e)), oV(e, o) ? "***" : nq(o));
}
var Oe = 5;
function Xe(e, o, t, m) {
  if (o === void 0 && m === void 0)
    return { stacked: [], trailingArgs: e, capped: !1 };
  let l = [],
    c = e,
    _ = o,
    v = !1;
  for (let T = 0; ; T++) {
    let U = c.trimStart();
    if (!U.startsWith("/")) break;
    if (T >= Oe) {
      v = !0;
      break;
    }
    let P = parseSlashCommandInput(U);
    if (!P) break;
    let W = _;
    if (_ !== void 0) {
      let x = _.trimStart(),
        V = x.startsWith("/") ? parseSlashCommandInput(x) : void 0;
      if (!V || V.commandName !== P.commandName) break;
      W = V.args;
    }
    let B = findCommand(P.commandName, t);
    if (
      !B ||
      B.type !== "prompt" ||
      B.context === "fork" ||
      B.getContext !== void 0 ||
      B.argsMayContainSlashCommands ||
      B.userInvocable === !1 ||
      !isCommandEnabled(B) ||
      isSkillOff(B)
    )
      break;
    if (((c = P.args), (_ = W), m?.(B))) continue;
    l.push(B);
  }
  return { stacked: l, trailingArgs: c, capped: v };
}
function formatSkillLoadingMetadata(e, o = "loading") {
  return [
    `<${COMMAND_MESSAGE_TAG}>${e}</${COMMAND_MESSAGE_TAG}>`,
    `<${COMMAND_NAME_TAG}>${e}</${COMMAND_NAME_TAG}>`,
    "<skill-format>true</skill-format>",
  ].join(`
`);
}
function Fe(e, o) {
  return [
    `<${COMMAND_MESSAGE_TAG}>${e}</${COMMAND_MESSAGE_TAG}>`,
    `<${COMMAND_NAME_TAG}>/${e}</${COMMAND_NAME_TAG}>`,
    o ? `<command-args>${o}</command-args>` : null,
  ].filter(Boolean).join(`
`);
}
function Ue(e, o) {
  if (e.userInvocable !== !1) return Fe(e.name, o);
  if (
    e.loadedFrom === "skills" ||
    e.loadedFrom === "syncedSkills" ||
    e.loadedFrom === "plugin" ||
    e.loadedFrom === "mcp" ||
    e.loadedFrom === "memoryStore"
  )
    return formatSkillLoadingMetadata(e.name, e.progressMessage);
  return Fe(e.name, o);
}
async function De(e, o, t) {
  let m = [],
    l = o ? `/${e.name} ${o}` : `/${e.name}`;
  try {
    for await (let c of jmn(
      e.source === "mcp" ? "mcp_prompt" : "slash_command",
      e.name,
      o,
      e.source,
      l,
      getToolPermissionContext(t).mode,
      t,
    )) {
      if (c.message?.type === "progress") continue;
      if (c.blockingError) {
        let _ = `UserPromptExpansion operation blocked by hook:
${c.blockingError.blockingError}`,
          v = c.suppressOriginalPrompt
            ? _
            : `${_}

Original prompt: ${l}`;
        return {
          blocked: {
            messages: [Ht(v, "warning", void 0, !0)],
            shouldQuery: !1,
            resultText: v,
            command: e,
          },
        };
      }
      if (c.preventContinuation) {
        let _ = c.stopReason ? `${TQ}: ${c.stopReason}` : TQ;
        return {
          blocked: {
            messages: [
              Re({ content: _, isMeta: !0 }),
              Ht(_, "warning", void 0, !0),
            ],
            shouldQuery: !1,
            resultText: _,
            command: e,
          },
        };
      }
      if (c.additionalContexts?.length)
        m.push(
          createAttachmentMessage({
            type: "hook_additional_context",
            content: c.additionalContexts,
            hookName: "UserPromptExpansion",
            toolUseID: `hook-${randomUUID()}`,
            hookEvent: "UserPromptExpansion",
          }),
        );
      if (
        c.message &&
        !(
          c.message.type === "attachment" &&
          c.message.attachment.type === "hook_success" &&
          c.message.attachment.content === ""
        )
      )
        m.push(c.message);
    }
  } catch (c) {
    if (!(c instanceof zi)) throw c;
    n("UserPromptExpansion hooks cancelled (control stream closed)");
  }
  return { hookMessages: m };
}
async function processPromptSlashCommand(e, o, t, m, l = !1) {
  let c = findCommand(e, t);
  if (!c) throw new YP(`Unknown command: ${Qn(e)}`);
  if (c.type !== "prompt")
    throw Error(
      `Unexpected ${c.type} command. Expected 'prompt' command. Use /${e} directly in the main conversation.`,
    );
  return ve(c, o, m, [], [], void 0, [], void 0, void 0, void 0, l);
}
async function ve(e, o, t, m = [], l = [], c, _ = [], v, T, U, P = !1) {
  if (e.loadedFrom === "syncedSkills" && wV())
    throw new YP(`Unknown command: ${Qn(e.name)}`);
  if (isCoordinatorMainSession(t) && !P) {
    let r = Ue(e, o),
      k = e.isMcp && e.loadedFrom !== "mcp",
      C = isSkillExcludedFromModel(e);
    if (e.disableModelInvocation || k || C) {
      let O = [
        k
          ? `"/${Qn(e.name)}" is an MCP prompt and cannot run in coordinator mode: the coordinator does not load prompt content, and workers cannot invoke MCP prompts via the ${SKILL_TOOL_NAME} tool.`
          : `Skill "/${Qn(e.name)}" is user-invocable only (${e.disableModelInvocation ? "disable-model-invocation" : "disabled for model invocation in settings"}) and cannot run in coordinator mode: the coordinator does not load skill content, and workers cannot invoke it via the ${SKILL_TOOL_NAME} tool.`,
      ];
      if (e.description) O.push(`Description: ${e.description}`);
      let R = Object.entries(e.subcommands ?? {})
        .filter(([, D]) => {
          let G = findCommand(D, t.options.commands);
          return (
            G !== void 0 &&
            isCommandEnabled(G) &&
            !G.disableModelInvocation &&
            !isSkillExcludedFromModel(G) &&
            !(G.isMcp && G.loadedFrom !== "mcp")
          );
        })
        .map(([D]) => D);
      if (R.length > 0)
        O.push(
          `Note: the subcommands ${R.map((D) => `"/${Qn(e.name)} ${Qn(D)}"`).join(", ")} route to their own dedicated commands and DO still work when the user types them directly in the terminal (remote-control clients gate some commands separately).`,
        );
      O.push(`
Do not instruct workers to invoke this via the ${SKILL_TOOL_NAME} tool \u2014 it will be refused. Tell the user that ${R.length > 0 ? `/${Qn(e.name)} itself (beyond the subcommands above) is` : `the /${Qn(e.name)} command is`} unavailable in coordinator mode. If \u2014 and only if \u2014 the underlying task is achievable with the tools workers actually hold, you may brief a worker to do that work directly; do not promise this otherwise.`);
      let N = [
        {
          type: "text",
          text: O.join(`
`),
        },
      ];
      return {
        messages: [
          Re({ content: r, uuid: c, origin: T }),
          ...be([Re({ content: Ce(l, m, N), isMeta: !0 }), ..._]),
        ],
        shouldQuery: !0,
        disallowedTools: splitToolRuleList(e.disallowedTools ?? []),
        command: e,
      };
    }
    let E = [`Skill "/${Qn(e.name)}" is available for workers.`];
    if (e.description) E.push(`Description: ${e.description}`);
    if (e.whenToUse) E.push(`When to use: ${e.whenToUse}`);
    let H = e.allowedTools ?? [];
    if (H.length > 0)
      E.push(
        `This skill grants workers additional tool permissions: ${H.map(Qn).join(", ")}`,
      );
    E.push(`
Instruct a worker to use this skill by including "Use the /${Qn(e.name)} skill" in your Agent prompt. The worker has access to the Skill tool and will receive the skill's content and permissions when it invokes it.`);
    let j = [
      {
        type: "text",
        text: E.join(`
`),
      },
    ];
    return {
      messages: [
        Re({ content: r, uuid: c, origin: T }),
        ...be([Re({ content: Ce(l, m, j), isMeta: !0 }), ..._]),
      ],
      shouldQuery: !0,
      disallowedTools: splitToolRuleList(e.disallowedTools ?? []),
      command: e,
    };
  }
  let W = await Gdn(
      e.name,
      await e.getPromptForCommand(
        o,
        v || P
          ? {
              ...t,
              options: {
                ...t.options,
                ...(v && { modelScheduledOrigin: !0 }),
                ...(P && { isSkillPreload: !0, readOnlySkillLoad: !0 }),
              },
            }
          : t,
      ),
    ),
    B = (!isRestrictedToPluginOnly("hooks") || isSourceAdminTrusted(e.source)) && !P;
  if (e.hooks && B) {
    let r = K();
    Me(
      t.sessionHooksRegistry,
      r,
      e.hooks,
      e.name,
      e.type === "prompt" ? e.skillRoot : void 0,
    );
  }
  let x = e.source ? `${e.source}:${e.name}` : e.name,
    V = W.filter((r) => r.type === "text").map((r) => r.text).join(`

`),
    q = wLe(e.name);
  if (!(P && q !== null)) TB(e.name, x, V, t.agentId ?? null);
  if (q && !P) t.applyAttributionOp({ kind: "recordVerification", method: q });
  t.options.activeSkill = attributionSkillName(e);
  let te = Ue(e, o),
    s = P ? [] : splitToolRuleList((await e.getAllowedTools?.()) ?? e.allowedTools ?? []),
    d = splitToolRuleList(e.disallowedTools ?? []);
  if (d.length > 0) setAlwaysDenyCommands(t.setToolPermissionContext, d, "union");
  let p = Ce(l, m, W),
    M =
      isModelInvocable(e) || P || v
        ? []
        : await UTe(
            getAttachmentMessages(
              W.filter((r) => r.type === "text")
                .map((r) => r.text)
                .join(" "),
              t,
              U ?? null,
              [],
              { now: () => new Date().toISOString(), uuid: () => randomUUID() },
              t.messages,
              "repl_main_thread",
              { planSlugSeed: o },
            ),
          ),
    I = await C_t(e, sn(), t);
  return {
    messages: [
      Re({ content: te, uuid: c, origin: T }),
      ...be([Re({ content: p, isMeta: !0 }), ...(I ? [I] : []), ...M, ..._]),
      createAttachmentMessage({ type: "command_permissions", allowedTools: s, model: inlineSkillModelOverride(e.model) }),
    ],
    shouldQuery: !0,
    allowedTools: s,
    disallowedTools: d,
    model: inlineSkillModelOverride(e.model),
    effort:
      e.getEffort?.(o, t) ?? e.getDefaultEffort?.(o, t)?.value ?? e.effort,
    command: e,
  };
}
function Ce(e, o, t) {
  return e.length > 0 || o.length > 0 ? [...e, ...o, ...t] : t;
}
function Ne(e, o, t) {
  return (
    e.applyMessageOp({
      type: "insert-after-uuid",
      uuid: o.uuid,
      messages: t.messages,
    }),
    { ...t, messages: [], settledInPlace: !0 }
  );
}
function be(e) {
  return e.map((o) => (o.type === "user" ? { ...o, turnCompanion: !0 } : o));
}
export { isSlashCommandBlockedByEndedByModel, looksLikeCommand, commandThrowTextForTranscript, processSlashCommand, formatSkillLoadingMetadata, processPromptSlashCommand };

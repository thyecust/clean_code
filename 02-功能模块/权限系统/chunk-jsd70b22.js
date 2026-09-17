// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { rE, Gt, ym } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { An, Dr, Oi, Xo } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { Z } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { lit as S, fromEnum as u, fromEnumOpt as we, fromSanitizer_SANITIZER_OUTPUT_ONLY as Ln } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { logFeatureOk as y, logFeatureBad as f, logFeatureSad as g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Ve, zi, yt, dt, ge, l, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logError as h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { z, Ro, ae, qr, Zhe, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { oe, cd } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import {
  isAutoClassifierActive as yg,
  Cor,
  rx,
  y5,
  iQ,
  KC,
  LCt,
  _U,
  sx,
  qe,
  Ut,
  Hn,
  u0,
  ee,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import {
  Uwe,
  DUt,
  SandboxManager as st,
  dT,
  lzn,
  czn,
  hX,
  bzn,
  wzn,
  aH,
  resetDenialStreakAfterUserApproval as cgt,
  stripWholeToolGrantsForAsk as c3,
  withoutGrantsForRemoteScope as HO,
  guardHookUpdatedInput as BDe,
  hasPermissionsToUseTool as gd,
  checkRuleBasedPermissions as jv,
  executePermissionRequestHooks as Vue,
  zDe,
  t4n,
  ATe,
  v2t,
  R2t,
  RTe,
  Wpn,
  F4n,
  Py,
  ITe,
  F_,
  Ek,
  Ak,
  Wv,
  Vpn,
  kX,
  WebFetchTool as Em,
  yht,
  Y2,
  zS,
  uH,
  an,
  oMe,
  uEe,
  QX,
  setPermissionModeWithGuards as mH,
  aj,
  Yne,
  a8n,
  Mde,
  K6t,
  n5e,
  Qm,
  Lo,
  p$,
  _T,
  Ok,
  II,
  $3,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import { mn } from "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import { ot, kQ, Dge } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { Ee } from "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import { OUTSIDE_READS_BLOCKED_DENY_REASON as ov } from "./chunk-e4pfvp7x.js";
import { Es } from "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import { turnAbortControllerOf as FJ } from "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import {
  ps,
  Tme,
  Rm,
  jd,
  YG,
  cse,
  BC,
  JG,
  Rve,
  Ynr,
  uAt,
  Us,
  km,
  Jk,
  Jnr,
  Oo,
} from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { unstripSkillInvocationAllowRules as dAn, getToolPermissionContext as ce } from "./chunk-fjrcf22x.js";
import { FK, bzt, Kk, nme, RD, Wg } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { Wh, notePlanFileForgotten as Cp, getPlanFilePath as Gh, getPlan as MN } from "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import { isTeammateWakeupPrompt as Lwt, getLastPeerDmSummary as lwn } from "../Teammates团队/chunk-g6nvp9mm.js";
import { KYn } from "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import { zs } from "../../01-核心基础设施/共享小工具-未细化/chunk-k2rb4dgd.js";
import { CFC_TOOL_PREFIX as BI } from "../ClaudeinChrome/chunk-hnp84hf6.js";
import { Iin, ste } from "../插件系统/chunk-4k4dssd9.js";
import { I1t } from "../../01-核心基础设施/设置-配置/chunk-ekwet1zd.js";
import { rWn, xin, oWn, sWn } from "../../01-核心基础设施/核心工具-日志与脱敏/chunk-j7khz57p.js";
import { Gqe } from "../../01-核心基础设施/共享小工具-未细化/chunk-kdfkgcfn.js";
import { gWn } from "../../01-核心基础设施/共享小工具-未细化/chunk-er6a87rc.js";
import { Fin, M1t } from "../../01-核心基础设施/共享小工具-未细化/chunk-3k9e6gxt.js";
import { LAe } from "../图片-截图-ComputerUse/chunk-0dcnsftb.js";
import { Vr } from "../../01-核心基础设施/共享小工具-未细化/chunk-9mfwkyac.js";
import { xp, Kr, ukn } from "../对话框-确认UI/对话框-确认UI.4ggnfbtb.js";
import { cp, fs } from "../Teammates团队/chunk-enjekn9t.js";
import { Iie, J6, Ex, gS } from "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
async function Pqe(e) {
  let { ctx: r, updatedInput: o, suggestions: t, permissionMode: s } = e,
    k = !1;
  try {
    let R = await r.runHooks(s, t, o);
    if (R && !("reprompted" in R)) return R;
  } catch (R) {
    if (((k = !0), R instanceof Error))
      h(dt(R, "coordinator automated permission check failed"));
    else
      h(
        dt(
          Error(`Automated permission check failed: ${String(R)}`),
          "coordinator automated permission check failed (non-Error throw)",
        ),
      );
  } finally {
    if (k)
      f("permission_coordinator_check", "permission_coordinator_check_failed");
    else y("permission_coordinator_check");
  }
  return null;
}
function x1t({ feedback: e, contentBlocks: r, isSubagent: o }) {
  return !e && !r?.length && !o;
}
function H1t(e) {
  let r = !1,
    o = !1;
  return {
    resolve(t) {
      if (o) return;
      ((o = !0), (r = !0), e(t));
    },
    isResolved() {
      return r;
    },
    claim() {
      if (r) return !1;
      return ((r = !0), !0);
    },
  };
}
function Uqe(e, r, o, t, s, k, R) {
  let c = t.message.id,
    _ = ce(o).mode;
  function d(b, p) {
    t4n(
      {
        tool: e,
        input: p?.input ?? r,
        toolUseContext: o,
        messageId: c,
        toolUseID: s,
        permissionMode: _,
      },
      b,
      p?.permissionPromptStartTimeMs,
    );
  }
  return Object.freeze({
    tool: e,
    input: r,
    toolUseContext: o,
    assistantMessage: t,
    messageId: c,
    toolUseID: s,
    setClassifierApprovals: k,
    permissionMode: _,
    logDecision: d,
    logCancelled() {
      i("tengu_tool_use_cancelled", { messageID: Ee(c), toolName: Hn(e.name) });
    },
    persistPermissions(b) {
      if (b.length === 0 || rx(o)) return !1;
      if ((RD(b, o.storageV5).catch(h), R !== void 0)) R(Kk(dAn(ce(o)), b));
      else
        (o.setSessionToolPermissionContext((p) => Kk(p, b)),
          setImmediate(() => {
            QX.emit();
          }));
      return b.some((p) => nme(p.destination));
    },
    setModeFromBridge(b) {
      return mH(b, ce(o), o.setToolPermissionContext);
    },
    resolveIfAborted(b) {
      if (!o.abortController.signal.aborted) return !1;
      return (this.logCancelled(), b(this.cancelAndAbort(void 0, !0)), !0);
    },
    cancelAndAbort(b, p, F, A) {
      let D = !!o.agentId,
        v = b ? `${D ? $3 : Ok}${b}` : D ? II : _T,
        T = D ? v : p$(v);
      if (p || x1t({ feedback: b, contentBlocks: F, isSubagent: D }))
        (n(
          `Aborting: tool=${e.name} isAbort=${p} hasFeedback=${!!b} isSubagent=${D}`,
        ),
          o.abortController.abort());
      return {
        behavior: "ask",
        message: T,
        contentBlocks: F,
        ...(A?.feedbackIsFromUser && b && { userFeedback: b }),
      };
    },
    async runHooks(b, p, F, A) {
      if (o.forRemoteExecution === !0) return null;
      for await (let D of Vue(e.name, s, r, o, b, p, o.abortController.signal))
        if (D.permissionRequestResult) {
          let v = D.permissionRequestResult;
          if (v.behavior === "allow") {
            let T = v.updatedInput ?? F ?? r;
            if (!v.updatedInput && e.requiresUserInteraction?.()) return null;
            if (v.updatedInput) {
              let x = BDe(
                await jv(
                  e,
                  T,
                  { ...o, toolUseId: s },
                  { hookUpdatedInput: v.updatedInput },
                ),
                e.name,
              );
              if (x?.behavior === "deny")
                return (
                  this.logDecision(
                    { decision: "reject", source: "config" },
                    { input: T, permissionPromptStartTimeMs: A },
                  ),
                  { ...x, decideLocation: "ask-path" }
                );
              if (x?.behavior === "ask")
                return { reprompted: x, finalInput: T };
            }
            return this.handleHookAllow(T, v.updatedPermissions ?? [], A);
          } else if (v.behavior === "deny") {
            if (
              (this.logDecision(
                { decision: "reject", source: { type: "hook" } },
                { permissionPromptStartTimeMs: A },
              ),
              v.interrupt)
            )
              (n(`Hook interrupt: tool=${e.name} hookMessage=${v.message}`),
                FJ(o.abortController).abort());
            return this.buildDeny(v.message || "Permission denied by hook", {
              type: "hook",
              hookName: "PermissionRequest",
              reason: v.message,
            });
          }
        }
      return null;
    },
    buildAllow(b, p) {
      return {
        behavior: "allow",
        updatedInput: b,
        userModified: p?.userModified ?? !1,
        ...(p?.decisionReason && { decisionReason: p.decisionReason }),
        ...(p?.acceptFeedback && { acceptFeedback: p.acceptFeedback }),
        ...(p?.contentBlocks &&
          p.contentBlocks.length > 0 && { contentBlocks: p.contentBlocks }),
        ...(p?.matchedAskRule && { matchedAskRule: p.matchedAskRule }),
      };
    },
    buildDeny(b, p) {
      return {
        behavior: "deny",
        message: b,
        decisionReason: p,
        decideLocation: "ask-path",
      };
    },
    handleUserAllow(b, p, F) {
      let A = bzt(p),
        D =
          o.forRemoteExecution === !0 || rx(o)
            ? []
            : e.suppressesAllPermissionUpdates?.(r) === !0
              ? HO(A)
              : e.suppressesAlwaysAllowRule?.(r) === !0 ||
                  F?.askSuppressesAlwaysAllowRule === !0
                ? c3([...A], e, ce(o))
                : A,
        v = this.persistPermissions(D);
      (I1t(D),
        this.logDecision(
          { decision: "accept", source: { type: "user", permanent: v } },
          {
            input: b,
            permissionPromptStartTimeMs: F?.permissionPromptStartTimeMs,
          },
        ));
      let T = e.inputsEquivalent ? !e.inputsEquivalent(r, b) : !1,
        x = F?.feedback?.trim();
      return this.buildAllow(b, {
        userModified: T,
        decisionReason: F?.decisionReason,
        acceptFeedback: x || void 0,
        contentBlocks: F?.contentBlocks,
        matchedAskRule: F?.matchedAskRule,
      });
    },
    handleHookAllow(b, p, F) {
      let A = this.persistPermissions(
        o.forRemoteExecution === !0
          ? []
          : e.suppressesAllPermissionUpdates?.(r) === !0
            ? HO(bzt(p))
            : bzt(p),
      );
      return (
        this.logDecision(
          { decision: "accept", source: { type: "hook", permanent: A } },
          { input: b, permissionPromptStartTimeMs: F },
        ),
        this.buildAllow(b, {
          decisionReason: { type: "hook", hookName: "PermissionRequest" },
        })
      );
    },
  });
}
function ze(e) {
  let r = e.input;
  if (e.tool.name === Es) return yht(r);
  if (e.tool.name === Wh) return { text: "approve plan" };
  let o = e.tool.userFacingName(e.input).trim(),
    t =
      typeof r?.command === "string"
        ? r.command
        : typeof r?.file_path === "string"
          ? r.file_path
          : typeof r?.url === "string"
            ? r.url
            : "",
    s = o || e.tool.name;
  return {
    text: t && !s.includes(t) ? Y2(`approve ${s}: ${t}`) : `approve ${s}`,
  };
}
var Sbe = Kr({
  kind: "permission_ask_user_question",
  payload: m(() =>
    xp(
      (e) =>
        typeof e === "object" &&
        e !== null &&
        "requestId" in e &&
        "toolName" in e &&
        "permissionResult" in e &&
        "questions" in e,
    ),
  ),
  result: m(() =>
    xp((e) => typeof e === "object" && e !== null && "behavior" in e),
  ),
  default: { behavior: "cancelled" },
});
var bbe = Kr({
  kind: "permission_bash",
  payload: m(() =>
    xp(
      (e) =>
        typeof e === "object" &&
        e !== null &&
        "requestId" in e &&
        "toolName" in e &&
        "permissionResult" in e &&
        "command" in e &&
        "classifierState" in e,
    ),
  ),
  result: m(() =>
    xp((e) => typeof e === "object" && e !== null && "behavior" in e),
  ),
  default: { behavior: "cancelled" },
});
var Oqe = Kr({
  kind: "permission_browser",
  payload: m(() =>
    xp(
      (e) =>
        typeof e === "object" &&
        e !== null &&
        "requestId" in e &&
        "toolName" in e &&
        "permissionResult" in e &&
        "verbPhrase" in e,
    ),
  ),
  result: m(() =>
    xp((e) => typeof e === "object" && e !== null && "behavior" in e),
  ),
  default: { behavior: "cancelled" },
});
var Dqe = Kr({
  kind: "permission_enter_plan_mode",
  payload: m(() =>
    xp(
      (e) =>
        typeof e === "object" &&
        e !== null &&
        "requestId" in e &&
        "toolName" in e &&
        "permissionResult" in e,
    ),
  ),
  result: m(() =>
    xp((e) => typeof e === "object" && e !== null && "behavior" in e),
  ),
  default: { behavior: "cancelled" },
});
var Lqe = Kr({
  kind: "permission_exit_plan_mode_v2",
  payload: m(() =>
    xp(
      (e) =>
        typeof e === "object" &&
        e !== null &&
        "requestId" in e &&
        "toolName" in e &&
        "permissionResult" in e &&
        "plan" in e,
    ),
  ),
  result: m(() =>
    xp((e) => typeof e === "object" && e !== null && "behavior" in e),
  ),
  default: { behavior: "cancelled" },
});
var Nce = Kr({
  kind: "permission_file",
  payload: m(() =>
    xp(
      (e) =>
        typeof e === "object" &&
        e !== null &&
        "requestId" in e &&
        "toolName" in e &&
        "permissionResult" in e &&
        "filePath" in e &&
        "operationType" in e,
    ),
  ),
  result: m(() =>
    xp((e) => typeof e === "object" && e !== null && "behavior" in e),
  ),
  default: { behavior: "cancelled" },
});
import { basename as Co, posix as xo, relative as Io } from "path";
var vo = new Set(["date-time"]);
function So(e) {
  let r = e?.properties;
  if (r === null || typeof r !== "object" || Array.isArray(r)) return;
  let o;
  for (let [t, s] of Object.entries(r)) {
    if (s === null || typeof s !== "object" || !("format" in s)) continue;
    let k = s.format;
    if (typeof k === "string" && vo.has(k)) ((o ??= {}), (o[t] = k));
  }
  return o;
}
function Lv(e) {
  let r = e.tool.isMcp === !0 ? e.tool.mcpInfo : void 0,
    o = e.tool.isMcp === !0,
    t;
  if (r) t = Ynr(r);
  else {
    let R;
    try {
      R = e.tool.userFacingName(e.input) || e.tool.name;
    } catch {
      R = e.tool.name;
    }
    let c = e.tool.isMcp === !0 && R.endsWith(" (MCP)") ? R.slice(0, -6) : R;
    t = uAt(c);
  }
  let s = "",
    k;
  if (e.tool.isMcp !== !0)
    try {
      let R =
        e.tool.renderToolUseMessage?.(e.input, {
          theme: e.theme,
          verbose: !0,
        }) ?? null;
      s = typeof R === "string" ? ps(R) : R;
    } catch {
      ((s = "parameters could not be rendered \u2014 deny unless expected"),
        (k = !0));
    }
  return {
    requestId: e.toolUseID,
    toolName: e.tool.name,
    input: e.input,
    description: Us(e.description).text,
    permissionResult: e.permissionResult,
    userFacingName: t,
    hasMcpSuffix: o,
    renderedToolUseMessage: s,
    toolUseRenderFailed: k,
    paramFormatHints: So(e.tool.inputJSONSchema),
    messageId: e.assistantMessage.message.id,
    isMcp: e.tool.isMcp ?? !1,
    isAskCappedByOrg: e.tool.mcpInfo?.effectiveMaxPermission === "ask",
    showAlwaysAllow:
      FK() &&
      !(
        e.permissionResult.behavior === "ask" &&
        e.permissionResult.suppressAlwaysAllowRule === !0
      ) &&
      e.tool.suppressesAlwaysAllowRule?.(e.input) !== !0 &&
      e.tool.suppressesAllPermissionUpdates?.(e.input) !== !0 &&
      !y5(e.requestSource),
    requestSource: e.requestSource,
    hasExternalRacer: e.hasExternalRacer ?? !1,
  };
}
function Se(e) {
  if (e.forRemoteExecution === !0) return { type: "remote-agent" };
  let r = Cor(e);
  if (r !== void 0) return { type: "plugin", pluginName: r };
  if (rx(e)) return { type: "plugin" };
  let o = e.spawnedByWorkflowRunId;
  if (o !== void 0)
    return {
      type: "workflow-agent",
      workflowName: Object.values(e.taskRegistry.all()).find(
        (k) => k.type === "local_workflow" && k.workflowRunId === o,
      )?.workflowName,
    };
  let t = e.agentContext;
  if (t.agentType === "teammate")
    return { type: "subagent", agentName: t.agentName };
  if (KC(t) && _U(t))
    return { type: "subagent", agentName: t.displayName ?? t.subagentName };
  return;
}
function Ge(e) {
  let r = Lv(e),
    o = e.permissionResult.metadata?.command?.chrome;
  if (!o && typeof e.input.url === "string")
    try {
      let t = new URL(e.input.url);
      if (t.host) o = { host: t.host, url: t.href };
    } catch {}
  return { ...r, chrome: o, verbPhrase: Gqe(e.tool.name, e.input) };
}
function Xe(e) {
  let r = Lv(e),
    o = e.input.url,
    t = "";
  if (typeof o === "string")
    try {
      t = new URL(o).hostname;
    } catch {
      t = "";
    }
  return { ...r, hostname: t };
}
function Je(e) {
  let r = Lv(e),
    o = Mde.inputSchema.safeParse(e.input),
    t = o.success ? (o.data.questions ?? []) : [],
    s = o.success ? o.data.metadata?.source : void 0;
  return { ...r, questions: t, metadataSource: s };
}
function Eo(e) {
  if (!("args" in e) || e.args === void 0) return;
  return km(e.args, { scrub: "key", maxUnits: Rm });
}
function Ke(e) {
  let r = Lv(e),
    o =
      typeof e.input.command === "string"
        ? km(e.input.command, { maxUnits: Rm })
        : void 0,
    t = ve(e.input.mcp, "server"),
    s = ve(e.input.mcp, "tool"),
    k =
      t !== void 0 && s !== void 0
        ? {
            server: Qe(t, "(unnamed server)"),
            tool: Qe(s, "(unnamed tool)"),
            argsDisplay: Eo(e.input.mcp),
          }
        : void 0,
    R = ve(e.input.ws, "url"),
    c = Fin(e.input.ws),
    _ =
      R !== void 0
        ? {
            url: km(qPe(R), { maxUnits: Rm }),
            protocols: c?.map((b, p) => (p < M1t ? Oo(Tme(oe(b, BC))) : "")),
            protocolsWithheld: c?.slice(0, M1t).some((b) => {
              let p = oe(b, BC);
              return jd(p) !== p;
            }),
          }
        : void 0,
    d = typeof e.input.interval_ms === "number" ? e.input.interval_ms : 30000,
    w =
      typeof e.input.description === "string"
        ? Us(e.input.description).text
        : void 0;
  return {
    ...r,
    command: o,
    mcp: k,
    ws: _,
    intervalMs: d,
    monitorDescription: w,
  };
}
function Qe(e, r) {
  let o = Oo(cse(oe(e, BC)))
    .replace(/\s+/g, " ")
    .trim();
  return YG(o) ? o : r;
}
function ve(e, r) {
  if (e === null || typeof e !== "object" || !(r in e)) return;
  let o = e[r];
  return typeof o === "string" ? o : void 0;
}
function qPe(e) {
  try {
    return new URL(e).href;
  } catch {
    return e;
  }
}
function Ye(e) {
  let r = Lv(e),
    o = typeof e.input.runId === "string" && typeof e.input.script !== "string",
    t =
      typeof e.input.script === "string"
        ? e.input.script
        : o && typeof r.renderedToolUseMessage === "string"
          ? r.renderedToolUseMessage
          : "",
    s = e.input.script !== void 0 && typeof e.input.script !== "string",
    k =
      typeof e.input.name === "string" &&
      e.input.name !== "" &&
      !e.input.scriptPath &&
      ps(e.input.name) === e.input.name
        ? e.input.name
        : void 0,
    R =
      typeof r.renderedToolUseMessage === "string"
        ? ps(r.renderedToolUseMessage)
        : r.renderedToolUseMessage,
    c = e.input.args;
  return {
    ...r,
    renderedToolUseMessage: R,
    script: t,
    scriptForged: s,
    workflowName: k,
    args: c,
  };
}
function Ze(e) {
  let r = Lv(e),
    o = typeof e.input.filePath === "string" ? e.input.filePath : "",
    t = typeof e.input.title === "string" ? e.input.title : "",
    s = Rve(t) ? "" : JG(t),
    R = (Array.isArray(e.input.options) ? e.input.options : [])
      .filter(
        (d) =>
          d !== null &&
          typeof d === "object" &&
          "label" in d &&
          typeof d.label === "string" &&
          "description" in d &&
          typeof d.description === "string" &&
          "value" in d &&
          typeof d.value === "string",
      )
      .map((d) => ({
        label: Rve(d.label) ? "" : JG(d.label),
        description: Us(d.description).text,
        value: d.value,
      })),
    c,
    _ = !1;
  if (Xo(o) || Dr(o))
    ((c = `(Network path \u2014 content not previewed: ${o})`), (_ = !0));
  else
    try {
      c = Ex(o, Dge);
    } catch (d) {
      if (J6(d)) c = `(Artifact too large for preview: ${o})`;
      else
        c = W(d)
          ? `(File not found: ${o})`
          : `(Error reading file: ${String(d)})`;
      _ = !0;
    }
  return {
    ...r,
    filePath: o,
    artifactTitle: s,
    artifactOptions: R,
    fileContent: c,
    contentWithheld: _,
  };
}
function eo(e) {
  let r = Lv(e),
    o = e.permissionResult.metadata,
    t =
      o !== null &&
      typeof o === "object" &&
      "command" in o &&
      o.command !== null &&
      typeof o.command === "object"
        ? o.command
        : void 0,
    s = t !== void 0 && typeof t.name === "string" ? t.name : void 0,
    k =
      t !== void 0 && typeof t.description === "string"
        ? t.description
        : void 0,
    c = (typeof e.input.skill === "string" ? e.input.skill : void 0) ?? s ?? "";
  return { ...r, skill: c, skillDescription: k };
}
function oo(e) {
  let r = Lv(e),
    o =
      typeof e.input.command === "string" && e.input.command.length <= Rm
        ? ps(e.input.command)
        : "",
    t =
      typeof r.renderedToolUseMessage === "string"
        ? ps(r.renderedToolUseMessage)
        : r.renderedToolUseMessage;
  return { ...r, renderedToolUseMessage: t, command: o };
}
function to(e) {
  let r = Lv(e),
    o = Gh();
  Cp(o);
  let t = MN() ?? "",
    s = e.assistantMessage.message.usage,
    k =
      s && typeof s.input_tokens === "number"
        ? {
            input_tokens: s.input_tokens,
            cache_creation_input_tokens: s.cache_creation_input_tokens,
            cache_read_input_tokens: s.cache_read_input_tokens,
          }
        : void 0;
  return { ...r, plan: t, planFilePath: o, usage: k };
}
function k1t(e) {
  let r = Lv(e),
    o =
      typeof e.input.command === "string" && e.input.command.length <= Rm
        ? ps(e.input.command)
        : "",
    t =
      typeof r.renderedToolUseMessage === "string"
        ? ps(r.renderedToolUseMessage)
        : r.renderedToolUseMessage;
  return {
    ...r,
    renderedToolUseMessage: t,
    command: o,
    classifierState: e.classifierState,
    existingAllowDescriptions: [],
  };
}
var ne = 200000;
function zdt(e) {
  switch (e) {
    case Py:
    case F_:
    case kX:
    case Ek:
    case Ak:
    case Qm:
      return !0;
    default:
      return !1;
  }
}
function Z6n(e) {
  switch (e) {
    case Py:
    case F_:
    case kX:
      return !0;
    default:
      return !1;
  }
}
function Vdt(e, r) {
  try {
    let o = e;
    if (typeof o.getPath !== "function") return null;
    let t = o.getPath(r);
    return typeof t === "string" && t !== "" ? t : null;
  } catch {
    return null;
  }
}
function io(e, r, o) {
  if (r === "read" || o) return null;
  try {
    let t = ot(e),
      s = ae(),
      { resolvedPath: k, isSymlink: R } = Ro(s, t);
    return R ? k : null;
  } catch {
    return null;
  }
}
function Ce(e, r) {
  return an(r ? e : Io(Q(), e));
}
function ke(e, r) {
  return an(r ? xo.basename(e) : Co(e));
}
async function Fo(e) {
  let { tool: r, input: o, remoteWorkspace: t, remoteOldContent: s } = e;
  if (r === Py) {
    let c = Py.inputSchema.parse(o),
      _ = c.old_string.length > ne || c.new_string.length > ne,
      d = !_ && (Jk(c.old_string) || Jk(c.new_string)),
      w = _ || d;
    return {
      title: "Edit file",
      subtitle: Ce(c.file_path, t),
      question: {
        kind: "file-action",
        verbPhrase: "make this edit to",
        fileName: ke(c.file_path, t),
      },
      content: _
        ? {
            kind: "no-changes",
            message:
              "Proposed edit is too large to show \u2014 cannot be reviewed, so approval is one-time only (deny unless expected).",
          }
        : d
          ? {
              kind: "no-changes",
              message:
                "Proposed edit cannot be shown in full \u2014 cannot be reviewed, so approval is one-time only (deny unless expected).",
            }
          : {
              kind: "file-edit-diff",
              filePath: c.file_path,
              edits: [
                {
                  old_string: c.old_string,
                  new_string: c.new_string,
                  replace_all: c.replace_all || !1,
                },
              ],
              remoteOldContent: s ?? void 0,
              skipLocalRead: t,
            },
      contentWithheld: w,
    };
  }
  if (r === F_) {
    let c = F_.inputSchema.parse(o),
      _ = "",
      d = !1,
      w = !1,
      b,
      p;
    if (t)
      if (typeof s === "string")
        ((_ = s), (d = !0), (b = "Overwrite file"), (p = "overwrite"));
      else if (s === null) ((b = "Create file"), (p = "create"));
      else ((b = "Write file"), (p = "write to"), (w = !0));
    else {
      let M = Xo(c.file_path) || Dr(c.file_path);
      if (!M)
        try {
          ((_ = (await gS(c.file_path, Dge)).content), (d = !0));
        } catch (E) {
          if (J6(E)) ((d = !0), (w = !0));
          else if (!W(E) && !Iie(E)) throw E;
        }
      if (M) ((w = !0), (b = "Write file"), (p = "write to"));
      else
        ((b = d ? "Overwrite file" : "Create file"),
          (p = d ? "overwrite" : "create"));
    }
    let F = c.content.length > ne,
      A = !F && Jk(c.content),
      D = F || A,
      v = d && Jnr(_),
      T = d && !v && Jk(_),
      x = D || w || v || T;
    return {
      title: b,
      subtitle: Ce(c.file_path, t),
      question: {
        kind: "file-action",
        verbPhrase: p,
        fileName: ke(c.file_path, t),
      },
      content: F
        ? {
            kind: "no-changes",
            message:
              "Proposed content is too large to show \u2014 cannot be reviewed, so approval is one-time only (deny unless expected).",
          }
        : A
          ? {
              kind: "no-changes",
              message:
                "Proposed content cannot be shown in full \u2014 cannot be reviewed, so approval is one-time only (deny unless expected).",
            }
          : w
            ? {
                kind: "no-changes",
                message: d
                  ? `Existing file is too large to preview \u2014 approving will overwrite ${an(c.file_path)}.`
                  : t
                    ? `The remote file could not be checked \u2014 approving will write to ${an(c.file_path)}.`
                    : `File is on a network path that cannot be previewed \u2014 approving will write to ${an(c.file_path)}.`,
              }
            : v
              ? {
                  kind: "no-changes",
                  message: `Current contents of ${an(c.file_path)} cannot be shown in full \u2014 the overwrite cannot be reviewed, so approval is one-time only (deny unless expected).`,
                }
              : {
                  kind: "file-write-diff",
                  filePath: c.file_path,
                  content: c.content,
                  fileExists: d,
                  oldContent: _,
                  ...(T && {
                    notice: `Current contents of ${an(c.file_path)} cannot be shown in full \u2014 the overwrite cannot be fully reviewed, so approval is one-time only (deny unless expected).`,
                  }),
                },
      contentWithheld: x,
    };
  }
  if (r === kX) {
    let c = kX.inputSchema.parse(o),
      _ =
        c.edit_mode === "insert"
          ? "insert this cell into"
          : c.edit_mode === "delete"
            ? "delete this cell from"
            : "make this edit to",
      d = (c.new_source?.length ?? 0) > ne || Jk(c.new_source ?? ""),
      w = c.edit_mode !== "insert",
      b,
      p;
    if (w)
      if (t)
        if (typeof s === "string") {
          let A = Vpn(s, c.cell_id);
          if (A.kind === "found")
            if (A.source.length > ne || Jk(A.source))
              p = "the current cell contents cannot be shown in full";
            else b = A.source;
          else
            p =
              A.kind === "unparsable"
                ? "the notebook could not be parsed for preview"
                : "the target cell was not found in the notebook";
        } else if (s === null)
          p = "the notebook was not found in the remote workspace";
        else p = "the remote notebook could not be fetched";
      else if (Xo(c.notebook_path) || Dr(c.notebook_path))
        p = "the notebook is on a network path";
      else
        try {
          if (!(await ae().stat(c.notebook_path)).isFile())
            p = "the notebook could not be read";
          else {
            let D = await ae().readFileBytes(c.notebook_path, Wv + 1);
            if (D.length > Wv) p = "the notebook is too large to preview";
            else {
              let v = Vpn(D.toString("utf-8"), c.cell_id);
              if (v.kind === "found")
                if (v.source.length > ne || Jk(v.source))
                  p = "the current cell contents cannot be shown in full";
                else b = v.source;
              else
                p =
                  v.kind === "unparsable"
                    ? "the notebook could not be parsed for preview"
                    : "the target cell was not found in the notebook";
            }
          }
        } catch {
          p = "the notebook could not be read";
        }
    let F = d || p !== void 0;
    return {
      title: "Edit notebook",
      subtitle: void 0,
      question: {
        kind: "file-action",
        verbPhrase: _,
        fileName: ke(c.notebook_path, t),
      },
      content: d
        ? {
            kind: "no-changes",
            message:
              "Proposed cell content is too large to show \u2014 cannot be reviewed, so approval is one-time only (deny unless expected).",
          }
        : p !== void 0
          ? {
              kind: "no-changes",
              message: `Current cell contents cannot be shown (${p}) \u2014 the ${c.edit_mode === "delete" ? "deletion" : "edit"} cannot be reviewed, so approval is one-time only (deny unless expected).`,
            }
          : {
              kind: "notebook-edit-diff",
              notebookPath: c.notebook_path,
              cellId: c.cell_id,
              newSource: c.new_source,
              cellType: c.cell_type,
              editMode: c.edit_mode,
              remoteOldContent: s ?? void 0,
              skipLocalRead: t,
              oldCellSource: b,
            },
      contentWithheld: F,
    };
  }
  return {
    title: `${r.isReadOnly(o) ? "Read" : "Edit"} file`,
    subtitle: void 0,
    question: { kind: "plain", text: "Do you want to proceed?" },
    content: { kind: "tool-use-line" },
  };
}
async function wbe(e) {
  let r = Lv(e),
    o = e.tool;
  if (!zdt(o))
    throw Error(
      `buildFilePermissionDescriptor called with non-file tool: ${e.tool.name}`,
    );
  let t = e.remoteWorkspace === !0,
    s = o.isReadOnly(e.input) ? "read" : "write",
    {
      title: k,
      subtitle: R,
      question: c,
      content: _,
      contentWithheld: d,
    } = await Fo({
      tool: o,
      input: e.input,
      remoteWorkspace: t,
      remoteOldContent: e.remoteOldContent,
    }),
    w = io(e.filePath, s, t),
    b = e.permissionResult.offersBlockOutsideReads;
  return {
    ...r,
    title: b ? "Read outside the working directories" : k,
    subtitle: R,
    question: b
      ? { kind: "plain", text: "Allow reads outside the working directories?" }
      : c,
    content: _,
    contentWithheld: d,
    filePath: e.filePath,
    operationType: s,
    symlinkTarget: w,
  };
}
function no(e, r, o) {
  if (e === Py)
    return { completion_type: "str_replace_single", language_name: zDe(o) };
  if (e === F_)
    return { completion_type: "write_file_single", language_name: zDe(o) };
  if (e === kX)
    return {
      completion_type: "tool_use_single",
      language_name: r.cell_type === "markdown" ? "markdown" : "python",
    };
  return { completion_type: "tool_use_single", language_name: zDe(o) };
}
async function xe(e) {
  let r = Lv(e),
    o = e.sedInfo.filePath,
    t = ot(o),
    s = ((An(o) || An(t)) && !(Oi(o) || Oi(t))) || Dr(o) || Dr(t),
    k = !dT(t, { ...e.toolPermissionContext, mode: "acceptEdits" }, "write")
      .allowed,
    R =
      k &&
      !s &&
      (await ae()
        .lstat(ot(o))
        .then(
          (x) => x.isSymbolicLink(),
          () => !1,
        )),
    c = "",
    _ = !1,
    d = !1;
  if (!s && !k)
    try {
      ((c = (await gS(t, Dge)).content), (_ = !0));
    } catch (x) {
      if (J6(x)) ((_ = !0), (d = !0));
      else if (!W(x) && !Iie(x)) throw x;
    }
  let w = "",
    b = !1,
    p = c.length > ne;
  if (!p)
    try {
      w = a8n(c, e.sedInfo);
    } catch {
      b = !0;
    }
  let F = p || b || w.length > ne || Jk(c) || Jk(w),
    A =
      s || k || d || F || c === w
        ? []
        : [{ old_string: c, new_string: w, replace_all: !1 }],
    D = s
      ? `Network path \u2014 diff not previewed. The sed command will run against ${ye(t)} on approval.`
      : R
        ? `${ye(ot(o))} is a symbolic link whose target is not editable in place here \u2014 not previewed. On approval the sed command runs as written: \`sed -i\` reads THROUGH the link and writes the result as a regular file in the link's place (the target's edited contents land there); the target itself is not modified.`
        : k
          ? `Not previewable as an in-place edit here \u2014 the sed command will run against ${ye(t)} on approval.`
          : d
            ? `Existing file is too large to preview \u2014 the sed command will run against ${ye(t)} on approval.`
            : F
              ? `The edit is too large to preview \u2014 the sed command will run against ${ye(t)} on approval.`
              : _
                ? "Pattern did not match any content"
                : "File does not exist",
    v = io(t, "write", !1),
    T =
      s || k || d || F
        ? { ...e.input }
        : {
            ...e.input,
            _simulatedSedEdit: { filePath: t, newContent: w, baseHash: mn(c) },
          };
  return {
    ...r,
    input: T,
    title: "Edit file",
    subtitle: Ce(t, !1),
    question: {
      kind: "file-action",
      verbPhrase: "make this edit to",
      fileName: ke(t, !1),
    },
    content:
      A.length > 0
        ? { kind: "file-edit-diff", filePath: t, edits: A }
        : { kind: "no-changes", message: D },
    contentWithheld: d || s || F || k,
    filePath: t,
    operationType: "write",
    symlinkTarget: v,
  };
}
function ro(e) {
  return { completion_type: "str_replace_single", language_name: zDe(e) };
}
function ye(e) {
  return cd(an(e), Mo);
}
var Mo = 160;
var Mqe = Kr({
  kind: "permission_monitor",
  payload: m(() =>
    xp(
      (e) =>
        typeof e === "object" &&
        e !== null &&
        "requestId" in e &&
        "toolName" in e &&
        "permissionResult" in e &&
        "intervalMs" in e,
    ),
  ),
  result: m(() =>
    xp((e) => typeof e === "object" && e !== null && "behavior" in e),
  ),
  default: { behavior: "cancelled" },
});
var Nqe = Kr({
  kind: "permission_powershell",
  payload: m(() =>
    xp(
      (e) =>
        typeof e === "object" &&
        e !== null &&
        "requestId" in e &&
        "toolName" in e &&
        "permissionResult" in e &&
        "command" in e,
    ),
  ),
  result: m(() =>
    xp((e) => typeof e === "object" && e !== null && "behavior" in e),
  ),
  default: { behavior: "cancelled" },
});
var Fqe = Kr({
  kind: "permission_skill",
  payload: m(() =>
    xp(
      (e) =>
        typeof e === "object" &&
        e !== null &&
        "requestId" in e &&
        "toolName" in e &&
        "permissionResult" in e &&
        "skill" in e,
    ),
  ),
  result: m(() =>
    xp((e) => typeof e === "object" && e !== null && "behavior" in e),
  ),
  default: { behavior: "cancelled" },
});
var $qe = Kr({
  kind: "permission_webfetch",
  payload: m(() =>
    xp(
      (e) =>
        typeof e === "object" &&
        e !== null &&
        "requestId" in e &&
        "toolName" in e &&
        "permissionResult" in e &&
        "hostname" in e,
    ),
  ),
  result: m(() =>
    xp((e) => typeof e === "object" && e !== null && "behavior" in e),
  ),
  default: { behavior: "cancelled" },
});
var so = rE(() => zs.autoDenyPresence);
async function Ie(e) {
  i("tengu_unary_event", {
    event: u(e.event),
    completion_type: u(e.completion_type),
    language_name: await e.metadata.language_name,
    message_id: Ee(e.metadata.message_id),
    platform: u0(e.metadata.platform),
    ...(e.metadata.hasFeedback !== void 0 && {
      hasFeedback: e.metadata.hasFeedback,
    }),
  });
}
import { randomUUID as Wo } from "crypto";
import { basename as qo } from "path";
function lo(e, r, o, t) {
  let s = t === "single",
    k = RTe({ filePath: e, oldContent: r, newContent: o, singleHunk: s });
  if (k.length === 0) return [];
  if (s && k.length > 1)
    h(Error(`Unexpected number of hunks: ${k.length}. Expected 1 hunk.`));
  return F4n(k);
}
async function ao(e, r, o, t, s) {
  let k = !1,
    R = ot(e),
    c = "";
  try {
    c = (await gS(R)).content;
  } catch (b) {
    if (!W(b) && !Iie(b)) throw b;
  }
  function _() {
    if (o.abortController.signal.aborted || s()) throw new Ve();
  }
  _();
  async function d() {
    if (k) return;
    k = !0;
    try {
      await Fe(t, w);
    } catch (b) {
      n(
        `Failed to close diff tab in IDE: ${b instanceof Error ? b.message : String(b)}`,
        { level: "error" },
      );
    }
    (process.off("beforeExit", d),
      o.abortController.signal.removeEventListener("abort", d));
  }
  (o.abortController.signal.addEventListener("abort", d),
    process.on("beforeExit", d));
  let w = aH(o.options.mcpClients);
  try {
    let { updatedFile: b } = Wpn({ filePath: R, fileContents: c, edits: r });
    if (!w || w.type !== "connected") throw Error("IDE client not available");
    let p = R,
      F = w.config.ideRunningInWindows === !0;
    if (P() === "wsl" && F && a.WSL_DISTRO_NAME)
      ((p = await new LAe(a.WSL_DISTRO_NAME).toIDEPath(R)), _());
    let A = await R2t(
        "openDiff",
        {
          old_file_path: p,
          new_file_path: p,
          new_file_contents: b,
          tab_name: t,
        },
        w,
      ),
      D = Array.isArray(A) ? A : [A];
    if (No(D)) return (d(), { oldContent: c, newContent: D[1].text });
    else if (jo(D)) return (d(), { oldContent: c, newContent: b });
    else if (Uo(D)) return (d(), { oldContent: c, newContent: c });
    throw Error("Not accepted");
  } catch (b) {
    if (!yt(b))
      n(
        `Failed to show diff in IDE: ${b instanceof Error ? b.message : String(b)}`,
        { level: "error" },
      );
    throw (d(), b);
  }
}
async function Fe(e, r) {
  try {
    if (!r || r.type !== "connected") throw Error("IDE client not available");
    (await R2t("close_tab", { tab_name: e }, r), y("ide_close_diff_tab"));
  } catch (o) {
    (n(
      `Failed to close diff tab in IDE: ${o instanceof Error ? o.message : String(o)}`,
      { level: "error" },
    ),
      g("ide_close_diff_tab", "ide_close_diff_tab_failed"));
  }
}
function jo(e) {
  return (
    Array.isArray(e) &&
    typeof e[0] === "object" &&
    e[0] !== null &&
    "type" in e[0] &&
    e[0].type === "text" &&
    "text" in e[0] &&
    e[0].text === "TAB_CLOSED"
  );
}
function Uo(e) {
  return (
    Array.isArray(e) &&
    typeof e[0] === "object" &&
    e[0] !== null &&
    "type" in e[0] &&
    e[0].type === "text" &&
    "text" in e[0] &&
    e[0].text === "DIFF_REJECTED"
  );
}
function No(e) {
  return (
    Array.isArray(e) &&
    e[0]?.type === "text" &&
    e[0].text === "FILE_SAVED" &&
    typeof e[1].text === "string"
  );
}
var Bo = /^[A-Za-z0-9][A-Za-z0-9 ._+()-]{0,63}$/;
function mo(e) {
  if (Bo.test(e)) return Ln(e);
  return S("nonconforming");
}
function $o(e, r) {
  if (e === Py) {
    let o = Py.inputSchema.parse(r);
    return {
      filePath: o.file_path,
      edits: [
        {
          old_string: o.old_string,
          new_string: o.new_string,
          replace_all: o.replace_all || !1,
        },
      ],
    };
  }
  if (e === F_) {
    let o = F_.inputSchema.parse(r),
      t = ot(o.file_path),
      s = "";
    if (
      (!(An(o.file_path) || An(t)) || Oi(o.file_path) || Oi(t)) &&
      !Dr(o.file_path) &&
      !Dr(t)
    )
      try {
        s = Ex(t, ITe);
      } catch (k) {
        if (J6(k)) return null;
        if (!W(k) && !Iie(k)) throw k;
      }
    return {
      filePath: o.file_path,
      edits: [{ old_string: s, new_string: o.content, replace_all: !1 }],
    };
  }
  return null;
}
function Ho(e, r, o) {
  let t = o[0];
  if (!t) return r;
  if (e === Py)
    return {
      ...r,
      old_string: t.old_string,
      new_string: t.new_string,
      replace_all: t.replace_all || !1,
    };
  if (e === F_) return { ...r, content: t.new_string };
  return r;
}
function co(e, r, o) {
  if (e !== Py && e !== F_) return null;
  if (o.forRemoteExecution === !0) return null;
  if (Wg(r)) return null;
  let t = o.options.mcpClients;
  if (!ATe(t)) return null;
  if (ee().diffTool !== "auto") return null;
  let s = $o(e, r);
  if (s === null) return null;
  let k = ot(s.filePath);
  if (
    ((An(s.filePath) || An(k)) && !(Oi(s.filePath) || Oi(k))) ||
    Dr(s.filePath) ||
    Dr(k)
  )
    return null;
  if (kQ(s.filePath) || kQ(k)) return null;
  let R = aH(t);
  if (!R) return null;
  return {
    ideName: v2t(t) ?? "IDE",
    ideClient: R,
    filePath: s.filePath,
    edits: s.edits,
  };
}
function po(e) {
  if (e.permissionResult.localDisplayOnly === !0) return { closeTab: () => {} };
  if (e.ctx.toolUseContext.forRemoteExecution === !0 || Wg(e.input))
    return { closeTab: () => {} };
  let {
      ctx: r,
      tool: o,
      input: t,
      permissionResult: s,
      permissionPromptStartTimeMs: k,
      eligibility: R,
      claim: c,
      notifyBridge: _,
      dismissAndTeardown: d,
      resolveOnce: w,
    } = e,
    { filePath: b, edits: p, ideName: F, ideClient: A } = R,
    D = Wo().slice(0, 6),
    v = `\u273B [Claude Code] ${qo(b)} (${D}) \u29C9`,
    T = !1;
  function x() {
    if (T) return;
    ((T = !0),
      Fe(v, A).catch((E) => {
        n(`closeTabInIDE failed: ${E}`, { level: "error" });
      }));
  }
  let M = { ideName: mo(F), toolName: Hn(o.name), editCount: p.length };
  return (
    i("tengu_ext_will_show_diff", {}),
    ao(b, p, r.toolUseContext, v, () => T)
      .then(({ oldContent: E, newContent: V }) => {
        let j = lo(b, E, V, "single"),
          G = { ...M, isNewFile: E === "" };
        if (j.length === 0) {
          if (T || !c()) return;
          (x(),
            i("tengu_ext_diff_rejected", G),
            y("ide_diff_view"),
            _({ behavior: "deny", message: "User denied via IDE" }),
            d(),
            r.logDecision(
              {
                decision: "reject",
                source: { type: "user_reject", hasFeedback: !1 },
              },
              { permissionPromptStartTimeMs: k },
            ),
            w(r.cancelAndAbort(void 0)));
          return;
        }
        if (T || !c()) return;
        if ((x(), s.denialLimitFallback !== void 0))
          (cgt(r.toolUseContext),
            y("permission_auto_mode_denial_fallback", { autoDenied: !1 }));
        let I = Ho(o, t, j);
        (i("tengu_ext_diff_accepted", G),
          y("ide_diff_view"),
          _({ behavior: "allow", updatedInput: I, updatedPermissions: [] }),
          d(),
          r.logDecision(
            { decision: "accept", source: { type: "user", permanent: !1 } },
            { permissionPromptStartTimeMs: k },
          ),
          w(
            r.handleUserAllow(I, [], {
              permissionPromptStartTimeMs: k,
              decisionReason: s.decisionReason,
              matchedAskRule: s.matchedAskRule,
            }),
          ));
      })
      .catch((E) => {
        if (T || r.toolUseContext.abortController.signal.aborted) return;
        (n(
          `IDE diff view failed: ${E instanceof Error ? E.message : String(E)}`,
          { level: "error" },
        ),
          g("ide_diff_view", "ide_diff_view_failed"));
      }),
    { closeTab: x }
  );
}
import { randomUUID as Vo } from "crypto";
function zo(e, r) {
  if (r.length === 0) return;
  if (e.toolUseContext.forRemoteExecution === !0 || rx(e.toolUseContext))
    return;
  let o = [];
  for (let t of r)
    if (t.type === "setMode") {
      let s = e.setModeFromBridge(t.mode);
      if (!s.ok)
        (n(
          `bridge setMode '${t.mode}' rejected (${s.error}); falling back to 'default'`,
        ),
          e.setModeFromBridge("default"));
    } else o.push(t);
  if (o.length > 0) e.persistPermissions(o);
}
function uo(e) {
  let {
      ctx: r,
      description: o,
      result: t,
      displayInput: s,
      permissionPromptStartTimeMs: k,
      awaitAutomatedChecksBeforeDialog: R,
      bridgeCallbacks: c,
      channelCallbacks: _,
      claim: d,
      isResolved: w,
      onWin: b,
      onReprompt: p,
    } = e,
    F =
      t.localDisplayOnly ||
      t.denialLimitFallback !== void 0 ||
      r.toolUseContext.forRemoteExecution === !0,
    A = F ? void 0 : c,
    D = F ? void 0 : _,
    { setClassifierApprovals: v } = r,
    T = A ? Vo() : void 0,
    x,
    M,
    E;
  function V(I) {
    if (A && T) {
      if (I) A.sendResponse(T, I);
      A.cancelRequest(T);
    }
    (x?.(), M?.());
  }
  if (A && T) {
    let I = "";
    if (r.tool.name !== qe && r.tool.name !== Ut)
      try {
        I =
          r.tool.getToolUseSummary?.(s) ??
          r.tool.getActivityDescription?.(s) ??
          "";
      } catch {
        I = "";
      }
    A.sendRequest(
      T,
      r.tool.name,
      s,
      r.toolUseID,
      xin(qr(I)),
      t.suggestions,
      t.blockedPath,
      r.tool.requiresUserInteraction?.(),
    );
    let q = r.toolUseContext.abortController.signal;
    ((x = A.onResponse(T, r.tool.name, (U) => {
      if (!d()) return;
      if (U.updatedPermissionsDropped)
        g("permission_bridge_relay", "updated_permissions_malformed");
      else y("permission_bridge_relay");
      if (x) q.removeEventListener("abort", x);
      if ((hX(v, r.toolUseID), M?.(), U.behavior === "allow")) {
        let B =
          r.tool.suppressesAllPermissionUpdates?.(s) === !0
            ? HO(U.updatedPermissions ?? [])
            : r.tool.suppressesAlwaysAllowRule?.(s) === !0 ||
                t.suppressAlwaysAllowRule === !0
              ? c3(U.updatedPermissions ?? [], r.tool, ce(r.toolUseContext))
              : (U.updatedPermissions ?? []);
        if ((zo(r, B), B.length)) I1t(B);
        (r.logDecision(
          {
            decision: "accept",
            source: { type: "user", permanent: !!B.length },
          },
          { input: U.updatedInput ?? s, permissionPromptStartTimeMs: k },
        ),
          b(r.buildAllow(U.updatedInput ?? s)));
      } else
        (r.logDecision(
          {
            decision: "reject",
            source: { type: "user_reject", hasFeedback: !!U.message },
          },
          { permissionPromptStartTimeMs: k },
        ),
          b(
            r.cancelAndAbort(U.message, void 0, void 0, {
              feedbackIsFromUser: !0,
            }),
          ));
    })),
      q.addEventListener("abort", x, { once: !0 }));
  }
  if (D && !r.tool.requiresUserInteraction?.()) {
    let I = rWn(r.toolUseID),
      q = ym(),
      U = sWn(
        r.toolUseContext.getMcp().clients,
        (B) => ste(B, q) !== void 0,
        (B) => D.isServerRegistered(B),
      );
    if (U.length > 0) {
      let B = {
        request_id: I,
        tool_name: r.tool.name,
        description: xin(Zhe(o)),
        input_preview: oWn(s),
      };
      for (let K of U) {
        if (K.type !== "connected") continue;
        KYn(K, { method: Iin, params: B }).catch((Y) => {
          (f(
            "permission_channel_relay",
            "permission_channel_relay_send_failed",
          ),
            n(`Channel permission_request failed for ${K.name}: ${l(Y)}`, {
              level: "error",
            }));
        });
      }
      let X = r.toolUseContext.abortController.signal,
        me = D.onResponse(I, (K) => {
          if (!d()) return;
          if (
            (y("permission_channel_relay"), M?.(), hX(v, r.toolUseID), A && T)
          )
            A.cancelRequest(T);
          if ((x?.(), K.behavior === "allow"))
            (r.logDecision(
              { decision: "accept", source: { type: "user", permanent: !1 } },
              { permissionPromptStartTimeMs: k },
            ),
              b(r.buildAllow(s)));
          else
            (r.logDecision(
              {
                decision: "reject",
                source: { type: "user_reject", hasFeedback: !1 },
              },
              { permissionPromptStartTimeMs: k },
            ),
              b(r.cancelAndAbort(`Denied via channel ${K.fromServer}`)));
        });
      ((M = () => {
        (me(), X.removeEventListener("abort", M));
      }),
        X.addEventListener("abort", M, { once: !0 }));
    }
  }
  let j = t.serverApprovalWatch,
    N = j ? gWn() : null,
    G =
      j && N?.isEnabled()
        ? N.createObserver(
            j,
            r.toolUseContext.toolState,
            r.toolUseContext.credentials,
          )
        : null;
  if (j && G) {
    let I = r.toolUseContext.abortController.signal,
      q = !1;
    ((E = () => {
      q = !0;
    }),
      (async () => {
        let U = await G.poll(),
          B = 3000,
          X = 15000;
        while (!U && !w() && !I.aborted && !q) {
          if ((await Z(B, I), w() || I.aborted || q)) return;
          if (((U = await G.poll()), !U)) {
            B = Math.min(Math.round(B * 1.5), X);
            continue;
          }
          if (ce(r.toolUseContext).mode === "plan") {
            (n("Server approval observed but parked: session is in plan mode"),
              (U = !1),
              (B = Math.min(Math.round(B * 1.5), X)));
            continue;
          }
          if (q || !d()) return;
          if ((hX(v, r.toolUseID), A && T)) A.cancelRequest(T);
          (x?.(),
            M?.(),
            y("permission_server_approval_watch"),
            r.logDecision(
              { decision: "accept", source: { type: "user", permanent: !1 } },
              { permissionPromptStartTimeMs: k },
            ),
            b(
              r.buildAllow({
                ...(t.updatedInput ?? s),
                __projectGrantServerObserved: !0,
              }),
            ));
          return;
        }
      })().catch((U) => {
        (f("permission_server_approval_watch", "watcher_stopped"),
          n(`Server-approval watcher stopped (${l(U)})`));
      }));
  }
  if (!R)
    (async () => {
      if (w()) return;
      let I = await r.runHooks(
        ce(r.toolUseContext).mode,
        t.suggestions,
        t.updatedInput,
        k,
      );
      if (I && "reprompted" in I) {
        if (w()) return;
        if ((hX(v, r.toolUseID), A && T)) (A.cancelRequest(T), (T = void 0));
        (x?.(),
          M?.(),
          E?.(),
          p(I.finalInput, I.reprompted.decisionReason, I.reprompted));
        return;
      }
      if (!I || !d()) return;
      if (A && T) A.cancelRequest(T);
      (x?.(), M?.(), b(I));
    })().catch((I) => {
      if (I instanceof zi) {
        n("PermissionRequest hooks cancelled (control stream closed)");
        return;
      }
      h(I);
    });
  return { notifyBridgeAndTeardown: V };
}
var fo = null,
  go = null,
  yo = null,
  Po = null,
  De = import.meta.require("../Workflow编排/WorkflowTool.b1s7beta.js").WorkflowTool,
  ho = import.meta.require("../../01-核心基础设施/共享小工具-未细化/workflowPermissionDialog.pk0trr3f.js").workflowPermissionDialog,
  bo = import.meta.require("../Workflow编排/recordWorkflowUsageConsent.w6jg9g54.js"),
  Qo = import.meta.require("../工具Monitor/工具Monitor.981fw9dy.js").MonitorTool,
  ko =
    "The request this approval was for had already been withdrawn; the answer applied to nothing.";
function J(e) {
  return e;
}
var Go = [
  J({ matches: (e) => e === Em, dialog: $qe, build: Xe }),
  J({ matches: (e) => e.name.startsWith(BI), dialog: Oqe, build: Ge }),
  J({ matches: (e) => e === Mde, dialog: Sbe, build: Je }),
  J({ matches: (e) => e === K6t, dialog: Dqe, build: Lv }),
  J({ matches: (e) => e === aj, dialog: Lqe, build: to }),
  J({ matches: (e) => e === n5e, dialog: Fqe, build: eo }),
  ...[],
  J({ matches: (e) => e.name === Ut, dialog: Nqe, build: oo }),
  J({ matches: (e) => e === Qo, dialog: Mqe, build: Ke }),
  ...(fo !== null && go !== null
    ? [J({ matches: (e) => e === fo, dialog: go, build: Ze })]
    : []),
  ...(De !== null && ho !== null
    ? [J({ matches: (e) => e === De, dialog: ho, build: Ye })]
    : []),
  ...(yo !== null && Po !== null
    ? [J({ matches: (e) => e === yo, dialog: Po, build: Lv })]
    : []),
];
function Rin(e) {
  return Go.find((r) => r.matches(e));
}
async function Bqe(e, r) {
  let { ctx: o, description: t, result: s } = e,
    k = Se(o.toolUseContext),
    R =
      De !== null && bo !== null && o.tool === De
        ? (D) => {
            if (D.behavior === "allow")
              bo.recordWorkflowUsageConsent(
                o.toolUseContext.session.workflowUsageConsent,
                o.toolUseContext.storageV5,
              );
            r(D);
          }
        : (D) => {
            (o.toolUseContext.session.outsideReadPrompt.closeFor(o.toolUseID),
              r(D));
          },
    { resolve: c, isResolved: _, claim: d } = H1t(R),
    w = { resolve: c, isResolved: _, claim: d },
    b = "dark",
    p = {
      tool: o.tool,
      description: t,
      toolUseID: o.toolUseID,
      assistantMessage: o.assistantMessage,
      theme: "dark",
      requestSource: k,
    };
  function F() {
    Pe(e, w, {
      dialog: iQ,
      buildDescriptor: ({ input: D, permissionResult: v }) =>
        Lv({ ...p, input: D, permissionResult: v }),
    });
  }
  let A = Rin(o.tool);
  if (A !== void 0) {
    let D = !!(
      e.bridgeCallbacks ||
      (e.channelCallbacks && !o.tool.requiresUserInteraction?.())
    );
    Pe(e, w, {
      dialog: A.dialog,
      buildDescriptor: ({ input: v, permissionResult: T }) =>
        A.build({ ...p, input: v, permissionResult: T, hasExternalRacer: D }),
    });
    return;
  }
  if (zdt(o.tool)) {
    let D = s.updatedInput ?? o.input,
      v = Vdt(o.tool, D);
    if (v !== null) {
      let T = co(o.tool, D, o.toolUseContext),
        x = Date.now(),
        M,
        E = o.toolUseContext.forRemoteExecution === !0 || Wg(D),
        V = await wbe({
          ...p,
          input: D,
          permissionResult: s,
          filePath: v,
          remoteWorkspace: E,
        });
      if (o.resolveIfAborted(w.resolve)) return;
      Pe(e, w, {
        dialog: Nce,
        buildDescriptor: ({ input: j, permissionResult: N }) => {
          if (M?.isReprompted() !== !0) {
            if (T !== null)
              return {
                ...V,
                permissionResult: N,
                showingDiffInIDE: !0,
                ideName: T.ideName,
              };
            return { ...V, permissionResult: N };
          }
          return (async function* () {
            try {
              let I = Vdt(o.tool, j);
              if (I === null)
                throw Error(
                  "no file path could be derived from the hook-rewritten input",
                );
              yield await wbe({
                ...p,
                input: j,
                permissionResult: N,
                filePath: I,
                remoteWorkspace:
                  o.toolUseContext.forRemoteExecution === !0 || Wg(j),
              });
            } catch (I) {
              if (
                (n(
                  `File permission reprompt: cannot preview the hook-rewritten input of ${o.tool.name} (${l(I)}); denying instead of showing a stale preview`,
                  { level: "error" },
                ),
                d())
              )
                (M?.dismissAndTeardown(),
                  M?.logRepromptDenyDecision(),
                  c(
                    o.cancelAndAbort(
                      `Failed to preview the hook-rewritten file operation: ${l(I)}`,
                    ),
                  ));
            }
          })();
        },
        unaryEvent: no(o.tool, D, v),
        onRacersReady: (j) => {
          if (((M = j), T === null)) return;
          let { closeTab: N } = po({
            ctx: o,
            tool: o.tool,
            input: D,
            permissionResult: s,
            permissionPromptStartTimeMs: x,
            eligibility: T,
            claim: w.claim,
            notifyBridge: j.notifyBridge,
            dismissAndTeardown: j.dismissAndTeardown,
            resolveOnce: w.resolve,
          });
          j.addTeardown(N);
        },
      });
      return;
    }
    F();
    return;
  }
  if (o.tool === Lo) {
    let D = s.updatedInput ?? o.input,
      v = typeof D.command === "string" ? D.command : "",
      T = o.toolUseContext.forRemoteExecution === !0 || Wg(D) ? null : Yne(v);
    if (T !== null) {
      let M = await xe({
        ...p,
        input: D,
        permissionResult: s,
        sedInfo: T,
        toolPermissionContext: ce(o.toolUseContext),
      });
      if (o.resolveIfAborted(w.resolve)) return;
      let E;
      Pe(e, w, {
        dialog: Nce,
        buildDescriptor: ({ input: V, permissionResult: j }) => {
          if (E?.isReprompted() !== !0) return { ...M, permissionResult: j };
          return (async function* () {
            let G = typeof V.command === "string" ? V.command : "",
              I = Yne(G);
            if (I === null) {
              if (
                (n(
                  "Sed-edit permission reprompt: rewritten command no longer parses as a sed edit; denying instead of showing a stale preview",
                  { level: "error" },
                ),
                d())
              )
                (E?.dismissAndTeardown(),
                  E?.logRepromptDenyDecision(),
                  c(
                    o.cancelAndAbort(
                      "The hook rewrote this sed edit into a command that cannot be previewed as a file edit. Re-run the rewritten command directly if intended.",
                    ),
                  ));
              return;
            }
            try {
              yield await xe({
                ...p,
                input: V,
                permissionResult: j,
                sedInfo: I,
                toolPermissionContext: ce(o.toolUseContext),
              });
            } catch (q) {
              if (
                (n(
                  `Sed-edit permission reprompt: descriptor rebuild failed (${l(q)}); denying instead of executing a stale simulation`,
                  { level: "error" },
                ),
                d())
              )
                (E?.dismissAndTeardown(),
                  E?.logRepromptDenyDecision(),
                  c(
                    o.cancelAndAbort(
                      `Failed to preview the hook-rewritten sed edit: ${l(q)}`,
                    ),
                  ));
            }
          })();
        },
        unaryEvent: ro(T.filePath),
        onRacersReady: (V) => {
          E = V;
        },
      });
      return;
    }
    let x = ce(o.toolUseContext);
    Pe(e, w, {
      dialog: bbe,
      buildDescriptor: ({ input: M, permissionResult: E }) =>
        k1t({
          ...p,
          input: M,
          permissionResult: E,
          classifierState: "none",
          toolPermissionContext: x,
        }),
    });
    return;
  }
  F();
}
function Pe(e, r, o) {
  let {
      ctx: t,
      description: s,
      result: k,
      awaitAutomatedChecksBeforeDialog: R,
      bridgeCallbacks: c,
      channelCallbacks: _,
    } = e,
    { resolve: d, isResolved: w, claim: b } = r,
    p = t.toolUseContext.requestDialog;
  if (p === void 0) return;
  let F = p,
    A = t.toolUseContext.agentContext,
    D = LCt(t.toolUseContext),
    v = k.askPatience;
  v?.hold();
  let T = Date.now(),
    x = k.updatedInput ?? t.input,
    M = k.decisionReason,
    E = k,
    V = 0,
    j,
    N = [];
  function G() {
    if (N.length === 0) return;
    let C = N.splice(0, N.length);
    for (let O of C)
      try {
        O();
      } catch (H) {
        n(`Dialog teardown failed: ${l(H)}`, { level: "error" });
      }
  }
  let I = !1,
    q = o.unaryEvent ?? {
      completion_type: "tool_use_single",
      language_name: "none",
    },
    U = t.toolUseContext.abortController.signal;
  function B() {
    if (I) return;
    I = !0;
    let C = t.permissionMode;
    (t.toolUseContext.applyAttributionOp({ kind: "incrementPermissionPrompt" }),
      i("tengu_tool_use_show_permission_request", {
        messageID: Ee(t.messageId),
        toolName: Hn(t.tool.name),
        isMcp: t.tool.isMcp ?? !1,
        decisionReasonType: we(E.decisionReason?.type),
        sandboxEnabled: st.isSandboxingEnabled(),
        permissionMode: u(C),
        requestSource: we(Se(t.toolUseContext)?.type),
        originAgentType: u(KC(A) && A.isMainSession ? "main" : A.agentType),
      }),
      Ie({
        completion_type: q.completion_type,
        event: "response",
        metadata: {
          language_name: q.language_name,
          message_id: t.assistantMessage.message.id,
          platform: a.platform,
        },
      }));
  }
  function X(C) {
    Ie({
      completion_type: q.completion_type,
      event: C,
      metadata: {
        language_name: q.language_name,
        message_id: t.assistantMessage.message.id,
        platform: a.platform,
      },
    });
  }
  function me() {
    (j?.abort(), zS.clearHookFailure(t.toolUseID), zS.emit(null), Te(), G());
  }
  let K = 0,
    { notifyBridgeAndTeardown: Y } = uo({
      ctx: t,
      description: s,
      result: k,
      displayInput: x,
      permissionPromptStartTimeMs: T,
      awaitAutomatedChecksBeforeDialog: R,
      bridgeCallbacks: c,
      channelCallbacks: _,
      claim: b,
      isResolved: w,
      onWin(C) {
        if (E.offersBlockOutsideReads === !0 && C.behavior === "allow")
          t.toolUseContext.session.outsideReadPrompt.markAnswered();
        (me(), d(C));
      },
      onReprompt(C, O, H) {
        ((K += 1),
          (x = C),
          (M = O),
          (E = {
            ...H,
            ...(E.denialLimitFallback !== void 0 && {
              denialLimitFallback: E.denialLimitFallback,
            }),
            ...(E.offersBlockOutsideReads === !0 &&
              H.decisionReason?.type === "workingDir" && {
                offersBlockOutsideReads: !0,
              }),
          }),
          j?.abort(),
          G(),
          je());
      },
    }),
    re = !1,
    _e,
    Re,
    he,
    Ae,
    de,
    Me = () => {
      if (re || w()) return;
      if ((_e?.(), de !== void 0)) Ae?.({ ...de, permissionResult: E });
    },
    Te = QX.subscribe(() => {
      if (w()) return;
      if (_e !== void 0 && !re && !yg(sx(t.tool, ce(t.toolUseContext)))) Me();
      if (t.tool.requiresUserInteraction?.()) return;
      if (k.forcedByCaller === !0) return;
      gd(t.tool, t.input, t.toolUseContext, t.assistantMessage, t.toolUseID)
        .then((C) => {
          if (C.behavior !== "allow") {
            if (w())
              t.toolUseContext.session.outsideReadPrompt.closeFor(t.toolUseID);
            return;
          }
          if (!b()) return;
          (Te(),
            Y(),
            j?.abort(),
            zS.clearHookFailure(t.toolUseID),
            zS.emit(null),
            G(),
            t.logDecision({ decision: "accept", source: "config" }),
            d(
              t.buildAllow(C.updatedInput ?? t.input, {
                decisionReason: C.decisionReason,
              }),
            ));
        })
        .catch((C) => {
          if (!yt(C))
            h(
              dt(
                ge(C),
                "permissionRecheckSignal: hasPermissionsToUseTool failed",
              ),
            );
        });
    });
  function je() {
    let C = ++V;
    (v?.hold(), (de = void 0), Ao());
    let O = new AbortController();
    j = O;
    let H = () => O.abort();
    if (U.aborted) O.abort();
    else U.addEventListener("abort", H, { once: !0 });
    let te = o.buildDescriptor({ input: x, permissionResult: E }),
      ie,
      Ne = !1,
      Be = [],
      We = (L) => {
        if (re) L = { ...L, permissionResult: E };
        if (((de = L), ie !== void 0)) {
          let fe = ie;
          ((ie = void 0), fe({ value: L, done: !1 }));
        } else Be.push(L);
      },
      Le = (L) => {
        if (ukn(L))
          (async () => {
            try {
              for await (let fe of L) {
                if (O.signal.aborted) return;
                We(fe);
              }
            } catch {}
          })();
        else We(L);
      };
    Ae = Le;
    let To = {
      [Symbol.asyncIterator]() {
        return {
          next: () => {
            if (Ne) return Promise.resolve({ value: void 0, done: !0 });
            let L = Be.shift();
            if (L !== void 0) return Promise.resolve({ value: L, done: !1 });
            return new Promise((fe) => {
              ie = fe;
            });
          },
          return: () => {
            let L = { value: void 0, done: !0 };
            return (ie?.(L), (ie = void 0), Promise.resolve(L));
          },
        };
      },
    };
    (B(),
      zS.emit({ ...ze({ tool: t.tool, input: x }), toolUseID: t.toolUseID }));
    let $e = se !== void 0 && !D && !re,
      He = () => {
        ((Ne = !0), ie?.({ value: void 0, done: !0 }), (ie = void 0));
      };
    if ($e) {
      if (O.signal.aborted) He();
      else O.signal.addEventListener("abort", He, { once: !0 });
      Le(te);
    }
    F(o.dialog, $e ? To : te, {
      signal: O.signal,
      place: D ? "under" : void 0,
      armInputGrace: D || k.denialLimitFallback !== void 0,
      onFirstReveal: v?.resume,
    }).then((L) => {
      if ((U.removeEventListener("abort", H), C !== V)) return;
      if (!b()) return;
      _o(L);
    });
  }
  function _o(C) {
    switch (
      (zS.clearHookFailure(t.toolUseID), zS.emit(null), Te(), G(), C.behavior)
    ) {
      case "allow": {
        if (k.denialLimitFallback !== void 0)
          (cgt(t.toolUseContext),
            y("permission_auto_mode_denial_fallback", { autoDenied: !1 }));
        if (E.offersBlockOutsideReads === !0) lzn(t.toolUseContext);
        (Y({
          behavior: "allow",
          updatedInput: C.updatedInput,
          updatedPermissions: [...(C.permissionUpdates ?? [])],
        }),
          X("accept"),
          d(
            t.handleUserAllow(C.updatedInput, C.permissionUpdates ?? [], {
              feedback: C.feedback,
              permissionPromptStartTimeMs: T,
              contentBlocks: C.contentBlocks,
              decisionReason: M,
              matchedAskRule: E.matchedAskRule,
            }),
          ));
        return;
      }
      case "deny": {
        if (k.denialLimitFallback !== void 0)
          y("permission_auto_mode_denial_fallback", { autoDenied: !1 });
        if (
          (Y({
            behavior: "deny",
            message: C.feedback ?? "User denied permission",
          }),
          X("reject"),
          t.logDecision(
            {
              decision: "reject",
              source: { type: "user_reject", hasFeedback: !!C.feedback },
            },
            { permissionPromptStartTimeMs: T, input: x },
          ),
          k.askEnded?.() === !0)
        ) {
          d({ behavior: "ask", message: ko });
          return;
        }
        if (E.offersBlockOutsideReads === !0) {
          if (C.blockOutsideReads === !0) {
            let O = (H, te) =>
              d({
                behavior: "deny",
                message:
                  "The user chose to block reads outside the working directories (permissions.blockReadsOutsideWorkingDirectories). Ask the user to add the directory with /add-dir, or to remove that setting." +
                  (H
                    ? ` Tell the user: the setting could not be saved to user settings (${H.message}); the file tools are fenced for this session only, sandboxed commands are not.`
                    : te
                      ? ""
                      : " Tell the user: the setting is saved, but sandboxed commands may not be fenced until the settings change is picked up."),
                decisionReason: { type: "other", reason: ov },
              });
            czn(t.toolUseContext)
              .then(({ error: H, sandboxRefreshed: te }) => O(H, te))
              .catch((H) => O(ge(H), !1));
            return;
          }
          d({
            behavior: "ask",
            message: C.feedback
              ? `The user did not allow this read outside the working directories: ${C.feedback}`
              : "The user did not allow this read outside the working directories.",
            contentBlocks: C.contentBlocks,
            ...(C.feedback && { userFeedback: C.feedback }),
            decisionReason: {
              type: "other",
              reason: "outside read declined, ask again next time",
            },
          });
          return;
        }
        d(
          t.cancelAndAbort(C.feedback, void 0, C.contentBlocks, {
            feedbackIsFromUser: !0,
          }),
        );
        return;
      }
      case "cancelled": {
        if (
          (Y({ behavior: "deny", message: "User aborted" }),
          X("reject"),
          t.logCancelled(),
          t.logDecision(
            { decision: "reject", source: { type: "user_abort" } },
            { permissionPromptStartTimeMs: T, input: x },
          ),
          D)
        ) {
          d({ behavior: "ask", message: II });
          return;
        }
        if (k.askEnded?.() === !0) {
          d({ behavior: "ask", message: ko });
          return;
        }
        d(t.cancelAndAbort(void 0, !0));
        return;
      }
    }
  }
  let se = k.denialLimitFallback?.autoDenyAfterMs,
    pe = k.denialLimitFallback?.autoDenyResolution,
    be,
    ue;
  function Ue() {
    if (se === void 0 || re || w()) return;
    if (((be = Date.now() + se), Oe(se, be), de !== void 0))
      Ae?.({ ...de, permissionResult: E });
  }
  function Oe(C, O) {
    if (pe === void 0) return;
    (clearTimeout(ue),
      (E = { ...E, denialLimitFallback: bzn(E.denialLimitFallback, O) }));
    let H = Math.max(0, O - Date.now()),
      te = pe.message;
    ((ue = setTimeout(() => {
      if (Uwe(o.dialog.kind)) {
        Ue();
        return;
      }
      if (!b()) return;
      (me(),
        Y({ behavior: "deny", message: te }),
        i("tengu_auto_mode_denial_dialog_auto_denied", {
          toolName: Hn(t.tool.name),
          isMcp: t.tool.isMcp ?? !1,
          timeoutMs: C,
        }),
        y("permission_auto_mode_denial_fallback", { autoDenied: !0 }),
        X("reject"),
        t.logDecision(
          { decision: "reject", source: "config" },
          { permissionPromptStartTimeMs: T, input: x },
        ),
        e.onClassifierDenyDelivered?.(pe),
        d(pe));
    }, H)),
      ue.unref?.());
  }
  function Ao() {
    if (se === void 0 || pe === void 0 || D || re) return;
    ((be ??= Date.now() + se),
      Oe(se, be),
      N.push(() => clearTimeout(ue)),
      (_e = () => {
        ((re = !0), clearTimeout(ue));
        let O = E.denialLimitFallback;
        if (O !== void 0) E = { ...E, denialLimitFallback: wzn(O) };
      }),
      Re?.(),
      (Re = so.subscribe(() => {
        Me();
      })),
      N.push(() => Re?.()),
      he?.());
    let C = Uwe(o.dialog.kind);
    ((he = DUt(() => {
      let O = Uwe(o.dialog.kind);
      if (C && !O) Ue();
      C = O;
    })),
      N.push(() => {
        (he?.(), (he = void 0));
      }));
  }
  (o.onRacersReady?.({
    dismissAndTeardown: me,
    notifyBridge: Y,
    isReprompted: () => K > 0,
    addTeardown: (C) => {
      N.push(C);
    },
    logRepromptDenyDecision: () => {
      (X("reject"),
        t.logDecision(
          { decision: "reject", source: { type: "hook" } },
          { permissionPromptStartTimeMs: T, input: x },
        ));
    },
  }),
    je());
}
function wo(e, r) {
  let { live: o, notice: t } = uEe(e, { suppressDropTelemetry: !0 }),
    s = lwn(o),
    k = -1;
  for (let _ = o.length - 1; _ >= 0; _--) {
    let d = o[_];
    if (d && Lwt(d)) {
      k = _;
      break;
    }
  }
  let R = new Set();
  for (let _ = k + 1; _ < o.length; _++) {
    let d = o[_];
    if (!d || d.type !== "assistant") continue;
    for (let w of d.message.content)
      if (w.type === "tool_use" && w.name === Vr) R.add(w.id);
  }
  let c = new Map();
  for (let _ = k + 1; _ < o.length; _++) {
    let d = o[_];
    if (!d || d.type !== "user" || typeof d.message.content === "string")
      continue;
    for (let w of d.message.content)
      if (w.type === "tool_result" && R.has(w.tool_use_id))
        c.set(w.tool_use_id, w.is_error !== !0 && !Jo(w.content));
  }
  for (let _ = o.length - 1; _ >= 0; _--) {
    let d = o[_];
    if (!d) continue;
    if (Lwt(d)) break;
    if (d.type !== "assistant" || d.isApiErrorMessage) continue;
    if (
      d.message.content.some(
        (p) =>
          p.type === "tool_use" &&
          p.name === Vr &&
          typeof p.input === "object" &&
          p.input !== null &&
          "to" in p.input &&
          typeof p.input.to === "string" &&
          (p.input.to === fs || p.input.to === cp) &&
          c.get(p.id) === !0,
      )
    ) {
      if (r?.emitTelemetry === !0)
        g("swarm_idle_result_delivery", "suppressed_lead_dm");
      return { result: void 0, summary: s };
    }
    if (!oMe(d.message.content)) continue;
    let b = d.message.content.flatMap((p) =>
      p.type === "text" && typeof p.text === "string" ? [p.text] : [],
    ).join(`
`);
    if (b) {
      let p = uH(b).sanitized;
      return {
        result: t
          ? `\u26A0 ${t.content}

${p}`
          : p,
        summary: s,
      };
    }
  }
  return { result: void 0, summary: s };
}
function eWn(e) {
  return wo(e).result;
}
function Tbe(e, r) {
  try {
    return wo(e, r);
  } catch (o) {
    return (h(o), { result: void 0, summary: void 0 });
  }
}
function Jo(e) {
  let r = [];
  if (typeof e === "string") r.push(e);
  else if (Array.isArray(e)) {
    for (let o of e)
      if (
        o !== null &&
        typeof o === "object" &&
        "type" in o &&
        o.type === "text" &&
        "text" in o &&
        typeof o.text === "string"
      )
        r.push(o.text);
  }
  for (let o of r) {
    if (!o.startsWith("{")) continue;
    try {
      let t = z(o);
      if (
        t !== null &&
        typeof t === "object" &&
        "success" in t &&
        t.success === !1
      )
        return !0;
    } catch {}
  }
  return !1;
}
class Do {
  permissionContextSetter = null;
  registerSetter(e) {
    this.permissionContextSetter = e;
  }
  unregisterSetter() {
    this.permissionContextSetter = null;
  }
}
var Kdt = new Gt(() => new Do());
export {
  Pqe,
  Sbe,
  bbe,
  Oqe,
  Dqe,
  Lqe,
  Nce,
  Lv,
  qPe,
  k1t,
  zdt,
  Z6n,
  Vdt,
  wbe,
  Mqe,
  Nqe,
  Fqe,
  $qe,
  x1t,
  H1t,
  Uqe,
  Rin,
  Bqe,
  eWn,
  Tbe,
  Kdt,
};

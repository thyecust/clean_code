// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 227 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { Gt } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { withDeadline } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { l, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { getFsSurface, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getClaudeConfigDir, isSafeMode, getSafeModeExitHint } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { repeatString, pluralize, truncateToCodePoints } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { useKeybinding } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { onGrowthBookRefresh, isAutoMemoryEnabled, isAutoMemoryDisabledForCurrentMainLoopModel, getAutoMemPath, getGlobalConfig, getCurrentProjectConfig } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getCwd } from "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import { getRemoteTransport, hasRemoteControlChannel, findGitRoot } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { formatTokens, formatRelativeTimeAgo } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { formatPathForDisplay } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { getInitialSettings, updateSettingsForSource } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { sessionIdBody } from "../权限系统/chunk-ynkf3yy4.js";
import { chalk } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { useGlobalExitKeybinding } from "../../01-核心基础设施/共享小工具-未细化/exit-keybinding-hooks.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { KeybindingScope } from "../../01-核心基础设施/共享小工具-未细化/keybinding-scope.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { useTerminalSize } from "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import { isAutoDreamAvailable, isAutoDreamEnabled, readAutoMemLastConsolidatedAt, sanitizeForDisplay, wrapSystemReminder, getDeviceDisplayName, isSyntheticMemoryFilePath, getSessionMemoryFiles, clearMemoryFilesForSession } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { useAppStateSelector } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import {
  getOrgMemoryIdentity,
  EXPLICIT_OFF_SENTINEL,
  isPublicProjectsSelection,
  getStoredOrgMemorySelection,
  getOrgMemorySelection,
  setOrgMemorySelection,
  clearOrgMemoryCredential,
  normalizeStorePath,
  isMonorepoWriteBlockEnabled,
  areOrgMemoryWriteGatesOpen,
  canWriteOrgMemory,
  getGrantedStoreMode,
  getMemoryStorePathKind,
  hasPrivateGroupingStore,
  wasLastAskDowngraded,
  isOrgMemoryWriteOptedInForAccount,
  setOrgMemoryWriteOptIn,
  waitForOrgMemoryDecisionSettled,
  getOrgMemoryDecision,
  getOrgMemoryServedIdentity,
  shrinkOrgMemoryDecisionWriteAsk,
  getOrgMemoryPickerData,
  discoverOrgMemoryStores,
  reconnectOrgMemory,
  disconnectOrgMemory,
  isOrgMemoryReadEnabled,
  getOrgMemoryStores,
  isMemoryStoreWritable,
  getMemoryStoreId,
  sortMemoryStores,
  getMemoryStoreDescription,
  MEMORY_LIST_TOOL_NAME,
  MEMORY_READ_TOOL_NAME,
  MEMORY_WRITE_TOOL_NAME,
  buildMemoryStoreView,
  formatMemoryStoreLine,
  setSharedMemoryServedViaTools,
  readStorePromptIndex,
  hasTeamMemoryStore,
  getTeamMemoryDir,
  describeMemoryIndex,
  formatRecalledMemoryBlock,
  getAgentMemoryDir,
} from "./Memory-CLAUDE.md.vx19drc8.js";
import { sanitizePlainText } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import "../Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import "../../01-核心基础设施/共享小工具-未细化/queued-message-context.js";
import { nl, ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { sessionStateStore } from "../Vim模式/Vim模式.nnewe0gf.js";
import { openFileInEditor } from "../../03-入口与运行时/会话UI(REPL)/external-editor.js";
import { LearnMoreLink } from "../../01-核心基础设施/共享小工具-未细化/learn-more-link.js";
import { EmptyStateMessage } from "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import { SpinnerMessageLine } from "../../01-核心基础设施/共享小工具-未细化/spinner-message-line.js";
import "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import "../../01-核心基础设施/共享小工具-未细化/linkified-text.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../Bridge-RemoteControl/remote-control-ui-strings.js";
import { parseThinClientReply } from "../../01-核心基础设施/共享小工具-未细化/parse-thin-client-reply.js";
import { openPathInDefaultApp } from "../../01-核心基础设施/核心工具-路径与平台/open-external-url.js";
import { Dn, jFt, kn, E, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { escapeMarkupText } from "../../01-核心基础设施/共享小工具-未细化/chunk-339z9efw.js";
import { s, T, O, v, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { countMatching } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
import { writeFile } from "fs/promises";
F();
function qo(Zn, er) {
  return e(Text, { wrap: "truncate-end", children: sanitizeForDisplay(Zn) || " " }, er);
}
var Wo = 65536,
  Go = createLazyValue(() =>
    c({
      memoryFiles: v(
        c({ path: s(), type: s().catch(""), tokens: T().catch(0) })
          .nullable()
          .catch(null),
      ).catch([]),
    }),
  ),
  zo = createLazyValue(() =>
    c({
      contents: s(),
      truncated: O()
        .optional()
        .catch(void 0),
    }),
  );
async function eo(w, b) {
  try {
    let M = parseThinClientReply(
      "get_context_usage",
      Go(),
      await w.sendControlRequest(
        { subtype: "get_context_usage", detail: "summary" },
        { signal: b },
      ),
    );
    if (!M)
      return {
        kind: "unreadable",
        reason: "the cloud session sent a reply this version can't display",
      };
    return {
      kind: "read",
      files: M.memoryFiles.flatMap((k) =>
        k === null
          ? []
          : [
              {
                path: k.path,
                shownPath: sanitizeForDisplay(k.path),
                type: sanitizeForDisplay(k.type),
                tokens: k.tokens,
                userScope: k.type === "User",
              },
            ],
      ),
    };
  } catch (M) {
    return { kind: "unreadable", reason: sanitizeForDisplay(l(M)) };
  }
}
async function Zt(w, b, M) {
  try {
    let k = parseThinClientReply(
      "read_file",
      zo(),
      await w.sendControlRequest(
        { subtype: "read_file", path: b, max_bytes: Wo },
        { signal: M },
      ),
    );
    return k
      ? { kind: "read", contents: k.contents, truncated: k.truncated === !0 }
      : {
          kind: "unreadable",
          reason: "the cloud session sent a reply this version can't display",
        };
  } catch (k) {
    let R = l(k);
    return {
      kind: "unreadable",
      reason: R.startsWith("read denied")
        ? "the cloud session only shows a terminal the files inside its workspace, and this one isn't"
        : sanitizeForDisplay(R),
    };
  }
}
function Vo(w) {
  let b = /[\\/]\.claude[\\/]rules[\\/]([^\\/]+)$/.exec(w);
  return b ? `~/.claude/rules/${b[1]}` : "~/.claude/CLAUDE.md";
}
function ot(w, b) {
  return w === "sentFromHere"
    ? `User files were sent from ${getDeviceDisplayName()} at launch \u2014 edit ${b === void 0 ? "them under ~/.claude" : Vo(b)} there; changes apply to the next cloud session, or when this machine re-attaches.`
    : "This file is in the cloud session's own ~/.claude (not from this machine) and can't be opened from here.";
}
function _t(zn) {
  let X = _(31),
    {
      onExit: zt,
      remote: Vt,
      filesRead: qt,
      signal: Yt,
      userMemoryOrigin: ge,
    } = zn,
    [Me, Do] = d(null),
    Fo;
  if (X[0] !== zt)
    ((Fo = () => zt("Memory dialog dismissed", { display: "system" })),
      (X[0] = zt),
      (X[1] = Fo));
  else Fo = X[1];
  let He = Fo;
  if (Me !== null) {
    const Be = `${Me.file.type} memory \xB7 read-only`;
    let Ze;
    if (X[2] === MEMO_CACHE_SENTINEL) ((Ze = () => Do(null)), (X[2] = Ze));
    else Ze = X[2];
    let xe;
    if (X[3] === MEMO_CACHE_SENTINEL)
      ((xe = e(KeybindingHint, { chord: "escape", action: "go back" })), (X[3] = xe));
    else xe = X[3];
    let je;
    if (X[4] === MEMO_CACHE_SENTINEL)
      ((je = e(SpinnerMessageLine, { message: "Reading\u2026", dimColor: !0 })), (X[4] = je));
    else je = X[4];
    let $e;
    if (X[5] !== Me.read)
      (($e = e(Dn, { fallback: je, children: e(Ot, { read: Me.read }) })),
        (X[5] = Me.read),
        (X[6] = $e));
    else $e = X[6];
    let Ee;
    if (X[7] !== Me.file.shownPath || X[8] !== Be || X[9] !== $e)
      ((Ee = e(de, {
        title: Me.file.shownPath,
        subtitle: Be,
        onCancel: Ze,
        color: "remember",
        inputGuide: xe,
        children: $e,
      })),
        (X[7] = Me.file.shownPath),
        (X[8] = Be),
        (X[9] = $e),
        (X[10] = Ee));
    else Ee = X[10];
    return Ee;
  }
  let Be;
  if (X[11] === MEMO_CACHE_SENTINEL)
    ((Be = r(DotSeparatedList, {
      children: [
        e(KeybindingHint, { chord: "enter", action: "view" }),
        e(KeybindingHint, { chord: "escape", action: "close" }),
      ],
    })),
      (X[11] = Be));
  else Be = X[11];
  let Ze;
  if (X[12] === MEMO_CACHE_SENTINEL)
    ((Ze = e(SpinnerMessageLine, {
      message: "Asking the cloud session for its memory files\u2026",
      dimColor: !0,
    })),
      (X[12] = Ze));
  else Ze = X[12];
  let xe;
  if (X[13] !== Vt || X[14] !== Yt || X[15] !== ge)
    ((xe = (wt) =>
      Do({
        file: wt,
        read: wt.userScope
          ? Promise.resolve({ kind: "userScope", hint: ot(ge, wt.shownPath) })
          : Zt(Vt, wt.path, Yt),
      })),
      (X[13] = Vt),
      (X[14] = Yt),
      (X[15] = ge),
      (X[16] = xe));
  else xe = X[16];
  let je;
  if (X[17] !== He || X[18] !== qt || X[19] !== xe || X[20] !== ge)
    ((je = e(Dn, {
      fallback: Ze,
      children: e(Rt, {
        filesRead: qt,
        onPick: xe,
        onCancel: He,
        userMemoryOrigin: ge,
      }),
    })),
      (X[17] = He),
      (X[18] = qt),
      (X[19] = xe),
      (X[20] = ge),
      (X[21] = je));
  else je = X[21];
  let $e;
  if (X[22] === MEMO_CACHE_SENTINEL)
    (($e = e(Text, {
      dimColor: !0,
      wrap: "wrap-trim",
      children:
        "Workspace files are read-only here: the session takes no edits from a terminal \u2014 ask Claude to edit one, or edit and commit it in the repo.",
    })),
      (X[22] = $e));
  else $e = X[22];
  let Ee;
  if (X[23] !== ge)
    ((Ee =
      ge === "sentFromHere" &&
      e(Text, { dimColor: !0, wrap: "wrap-trim", children: ot("sentFromHere") })),
      (X[23] = ge),
      (X[24] = Ee));
  else Ee = X[24];
  let St;
  if (X[25] !== Ee)
    ((St = r(Box, { flexDirection: "column", children: [$e, Ee] })),
      (X[25] = Ee),
      (X[26] = St));
  else St = X[26];
  let Io;
  if (X[27] !== He || X[28] !== je || X[29] !== St)
    ((Io = r(de, {
      title: "Memory",
      subtitle: "Loaded in the cloud session",
      onCancel: He,
      color: "remember",
      inputGuide: Be,
      children: [je, St],
    })),
      (X[27] = He),
      (X[28] = je),
      (X[29] = St),
      (X[30] = Io));
  else Io = X[30];
  return Io;
}
function Rt(Vn) {
  let We = _(15),
    { filesRead: qn, onPick: Kt, onCancel: Xt, userMemoryOrigin: et } = Vn,
    te = kn(qn);
  if (te.kind === "unreadable") {
    let re;
    if (We[0] !== te.reason)
      ((re = r(Text, {
        color: "error",
        children: [
          "Couldn't list the cloud session's memory files: ",
          te.reason,
        ],
      })),
        (We[0] = te.reason),
        (We[1] = re));
    else re = We[1];
    return re;
  }
  if (te.files.length === 0) {
    let re;
    if (We[2] === MEMO_CACHE_SENTINEL)
      ((re = e(EmptyStateMessage, {
        hint: "Add a CLAUDE.md to the repo, or ask Claude to write one",
        children: "No memory files loaded in the cloud session",
      })),
        (We[2] = re));
    else re = We[2];
    return re;
  }
  let re;
  if (We[3] !== te.files || We[4] !== et) {
    let De;
    if (We[6] !== et)
      ((De = (bt, Yn) => ({
        value: String(Yn),
        label: bt.shownPath,
        description:
          `${bt.type} \xB7 ${formatTokens(bt.tokens)} tokens` +
          (!bt.userScope
            ? ""
            : et === "sentFromHere"
              ? ` \xB7 sent from ${getDeviceDisplayName()} at launch`
              : " \xB7 the session's own ~/.claude, not sent from here"),
      })),
        (We[6] = et),
        (We[7] = De));
    else De = We[7];
    re = te.files.map(De);
    ((We[3] = te.files), (We[4] = et), (We[5] = re));
  } else re = We[5];
  let De;
  if (We[8] !== Kt || We[9] !== te.files)
    ((De = (Kn) => {
      let To = te.files[Number(Kn)];
      if (To) Kt(To);
    }),
      (We[8] = Kt),
      (We[9] = te.files),
      (We[10] = De));
  else De = We[10];
  let Lo;
  if (We[11] !== Xt || We[12] !== re || We[13] !== De)
    ((Lo = e(ve, {
      options: re,
      visibleOptionCount: 10,
      hideIndexes: !0,
      inlineDescriptions: !0,
      onChange: De,
      onCancel: Xt,
    })),
      (We[11] = Xt),
      (We[12] = re),
      (We[13] = De),
      (We[14] = Lo));
  else Lo = We[14];
  return Lo;
}
function Ot(Xn) {
  let tt = _(18),
    { read: Jn } = Xn,
    K = kn(Jn),
    { rows: Qt } = useTerminalSize();
  if (K.kind === "userScope") {
    let se;
    if (tt[0] !== K.hint)
      ((se = e(Text, { dimColor: !0, wrap: "wrap-trim", children: K.hint })),
        (tt[0] = K.hint),
        (tt[1] = se));
    else se = tt[1];
    return se;
  }
  if (K.kind === "unreadable") {
    let se;
    if (tt[2] !== K.reason)
      ((se = r(Text, {
        color: "error",
        children: ["Couldn't read it: ", K.reason],
      })),
        (tt[2] = K.reason),
        (tt[3] = se));
    else se = tt[3];
    return se;
  }
  let Mt, Fe, se, Ct;
  if (tt[4] !== K.contents || tt[5] !== Qt) {
    let No = K.contents.replaceAll("\t", "    ").split(/\r?\n/);
    let Qn = Math.max(5, Qt - 12);
    let Uo = No.slice(0, Qn);
    Fe = No.length - Uo.length;
    Mt = Box;
    se = "column";
    Ct = Uo.map(qo);
    ((tt[4] = K.contents),
      (tt[5] = Qt),
      (tt[6] = Mt),
      (tt[7] = Fe),
      (tt[8] = se),
      (tt[9] = Ct));
  } else ((Mt = tt[6]), (Fe = tt[7]), (se = tt[8]), (Ct = tt[9]));
  let vt;
  if (tt[10] !== Fe || tt[11] !== K.truncated)
    ((vt =
      (Fe > 0 || K.truncated) &&
      r(Text, {
        dimColor: !0,
        children: [
          "\u2026 ",
          Fe > 0 ? `${Fe} more ${pluralize(Fe, "line")}` : "more",
          K.truncated ? " (the session sent only the beginning)" : "",
          " \u2014 ask Claude to show or change the rest",
        ],
      })),
      (tt[10] = Fe),
      (tt[11] = K.truncated),
      (tt[12] = vt));
  else vt = tt[12];
  let Ho;
  if (tt[13] !== Mt || tt[14] !== se || tt[15] !== Ct || tt[16] !== vt)
    ((Ho = r(Mt, { flexDirection: se, children: [Ct, vt] })),
      (tt[13] = Mt),
      (tt[14] = se),
      (tt[15] = Ct),
      (tt[16] = vt),
      (tt[17] = Ho));
  else Ho = tt[17];
  return Ho;
}
F();
import { mkdir } from "fs/promises";
import { join as xt } from "path";
var ze = `${MEMORY_LIST_TOOL_NAME} / ${MEMORY_READ_TOOL_NAME} / ${MEMORY_WRITE_TOOL_NAME}`,
  to = 80,
  Yo =
    /[\u2039\u203A\uFF1C\uFF1E\uFE64\uFE65\u3008\u3009\u2329\u232A\u27E8\u27E9\u02C2\u02C3]/g,
  Ko = 20000,
  Xo = 120000;
class no {
  latest = 0;
  begin() {
    return ++this.latest;
  }
}
var Jo = new Gt(() => new no());
async function ro(w, b) {
  try {
    let M = Jo.of(w),
      k = M.begin(),
      R = b === "project" ? getStoredOrgMemorySelection() : null,
      P = getOrgMemoryIdentity(),
      j = nt(),
      W = () => {
        j = nt();
      },
      V = b === "off" ? disconnectOrgMemory(W) : reconnectOrgMemory(W),
      B = (await withDeadline(V, Ko)) ?? "timeout";
    if (B !== "timeout" && B.kind === "refused")
      return (
        oo("refused", j, j, []),
        logFeatureSad("org_memory_project_switch", B.reason),
        { outcome: "refused", notice: ln(B.reason) }
      );
    let I = nt(),
      Ce = B === "timeout" || B.current.state === "undecided",
      z = Ce ? "pending" : on(b, j, I),
      Ie =
        B !== "timeout" && B.current.state === "on"
          ? B.current.request.selection
          : null,
      he = !Ce && R !== null && Ie !== R && getOrgMemoryIdentity() === P && getStoredOrgMemorySelection() === null;
    Qo(z, j, I);
    let ce = z === "switched" || z === "connected" ? await rn(I.stores) : [];
    if ((oo(z, j, I, ce, he), he))
      logFeatureSad("org_memory_project_switch", "selection_dropped");
    else if (z === "unavailable" || z === "pending")
      logFeatureSad(
        "org_memory_project_switch",
        B === "timeout" ? "switch_deadline" : nn(B.current),
      );
    else logFeatureOk("org_memory_project_switch", { outcome: fromEnum(z) });
    if (z === "pending")
      V.then(() => waitForOrgMemoryDecisionSettled(Xo, void 0, { unref: !0 }))
        .then(() => {
          if (k !== M.latest) return;
          let Ye = nt();
          if (ke(j) || Ye.stores.length > 0)
            setSharedMemoryServedViaTools(Ye.stores.some((q) => q.writable));
        })
        .catch(() => {});
    let qe = mn(z, b, j, I, ce, he);
    return {
      outcome: z,
      notice: sn(z, b, j, I, he),
      ...(qe !== null && { modelMessage: qe }),
    };
  } catch (M) {
    return (
      shrinkOrgMemoryDecisionWriteAsk(),
      clearOrgMemoryCredential(),
      logError(M),
      logFeatureBad("org_memory_project_switch", "unexpected_throw"),
      { outcome: "unavailable", notice: cn(b) }
    );
  }
}
function Qo(w, b, M) {
  switch (w) {
    case "switched":
    case "connected":
      setSharedMemoryServedViaTools(M.stores.some((k) => k.writable));
      return;
    case "disconnected":
    case "unavailable":
    case "pending":
      if (ke(b)) setSharedMemoryServedViaTools(!1);
      return;
    case "unchanged":
      if (ke(b) || M.stores.length > 0) setSharedMemoryServedViaTools(M.stores.some((k) => k.writable));
      return;
  }
}
function ke(w) {
  return w.servedEarlier || w.stores.length > 0;
}
function nt() {
  return {
    project: Zo(getOrgMemoryDecision()),
    servedEarlier: getOrgMemoryServedIdentity() !== null,
    stores: sortMemoryStores(getOrgMemoryStores()).map((w) => ({
      id: getMemoryStoreId(w),
      description: getMemoryStoreDescription(w),
      writable: isMemoryStoreWritable(w),
      promptIndex: w.promptIndex,
      store: w,
    })),
  };
}
function Zo(w) {
  if (w.state !== "on") return { kind: "none" };
  let b = w.request.selection;
  if (b === null || w.selectionSource !== "preference")
    return { kind: "default" };
  if (isPublicProjectsSelection(b)) return { kind: "picked", name: "all public projects" };
  let M = getOrgMemoryPickerData()?.candidates.find((k) => k.id === b);
  return { kind: "picked", name: M === void 0 ? null : en(M.name) };
}
function en(w) {
  let b = sanitizePlainText(w)
    .replaceAll('"', "'")
    .replaceAll("<", "\u2039")
    .replaceAll(">", "\u203A")
    .replace(/[\u2028\u2029]/g, " ")
    .trim();
  if (b === "") return null;
  return truncateToCodePoints(b, to) === b ? b : `${truncateToCodePoints(b, to - 1)}\u2026`;
}
function tn(w, b) {
  return (
    w.stores.length === b.stores.length &&
    w.stores.every((M, k) => {
      let R = b.stores[k];
      return (
        R !== void 0 &&
        M.id === R.id &&
        M.store.path === R.store.path &&
        M.promptIndex === R.promptIndex &&
        M.writable === R.writable
      );
    })
  );
}
function on(w, b, M) {
  if (M.stores.length === 0) {
    if (w === "off") return ke(b) ? "disconnected" : "unchanged";
    return "unavailable";
  }
  if (b.stores.length === 0) return "connected";
  return tn(b, M) ? "unchanged" : "switched";
}
function nn(w) {
  switch (w.state) {
    case "off":
      return `off_${w.cause}`;
    case "parked":
      return `parked_${w.cause}`;
    case "ended":
      return `ended_${w.cause}`;
    case "undecided":
      return "settle_timeout";
    case "on":
      return "no_stores";
  }
}
async function rn(w) {
  let b = w.filter((k) => k.promptIndex !== void 0),
    M = await Promise.all(b.map((k) => readStorePromptIndex(k.store)));
  return b.map((k, R) => {
    let P = M[R];
    if (P === null || P === void 0)
      return { store: k, state: "unavailable", content: "" };
    return P.content.trim() === ""
      ? { store: k, state: "empty", content: "" }
      : { store: k, state: "loaded", content: P.content };
  });
}
function oo(w, b, M, k, R = !1) {
  logEvent("tengu_org_memory_project_switch", {
    outcome: fromEnum(w),
    pick_dropped: R,
    stores_before: b.stores.length,
    stores_after: M.stores.length,
    indexes_loaded: countMatching(k, (P) => P.state === "loaded"),
    indexes_empty: countMatching(k, (P) => P.state === "empty"),
    indexes_unavailable: countMatching(k, (P) => P.state === "unavailable"),
  });
}
function sn(w, b, M, k, R) {
  if (R) return dn(w, k);
  switch (w) {
    case "switched":
    case "connected":
      return so(k);
    case "disconnected":
      return `off for this directory \u2014 Claude has stopped using ${io(M.project)}`;
    case "unavailable":
      return M.stores.length > 0
        ? "couldn't connect, so it is off for now \u2014 the pick is kept for this directory; Enter on it in /memory retries"
        : "couldn't connect \u2014 the pick is kept for this directory; Enter on it in /memory retries";
    case "pending":
      return b === "off"
        ? "off for this directory \u2014 disconnecting once the in-flight connection attempt lands"
        : "saved for this directory \u2014 still connecting; Claude can use it once it lands";
    case "unchanged":
      return b === "off"
        ? "off for this directory \u2014 nothing was connected"
        : "saved for this directory \u2014 already connected, nothing changed";
  }
}
function cn(w) {
  return w === "off"
    ? "off for this directory \u2014 the disconnect may not have finished this session; it holds from next session"
    : "couldn't connect \u2014 the pick is kept for this directory; Enter on it in /memory retries";
}
function so(w) {
  let b = w.stores.some((R) => R.writable),
    M = `connected to ${io(w.project)}${b ? "" : " (read-only)"}`,
    k = b ? "Claude can use it and save to it now" : "Claude can use it now";
  return w.project.kind === "picked"
    ? `${M} \u2014 saved for this directory; ${k}`
    : `${M} \u2014 ${k}`;
}
function ln(w) {
  switch (w) {
    case "account_boundary":
      return "saved for this directory \u2014 the account changed mid-session, so it connects next session";
    case "untrusted_workspace":
      return "saved for this directory \u2014 this workspace is not trusted yet, so it connects next session";
  }
}
function dn(w, b) {
  switch (w) {
    case "switched":
    case "connected":
      return `${"that project is no longer available \u2014 the pick was cleared"}; ${so(b)}`;
    case "unchanged":
      return `${"that project is no longer available \u2014 the pick was cleared"}; connection unchanged`;
    case "unavailable":
    case "disconnected":
    case "pending":
      return `${"that project is no longer available \u2014 the pick was cleared"}; project memory is off until another pick in /memory`;
  }
}
function io(w) {
  switch (w.kind) {
    case "none":
      return "project memory";
    case "default":
      return "the default project memory";
    case "picked":
      return w.name ?? "the picked project";
  }
}
function Ve(w) {
  switch (w.kind) {
    case "none":
      return "project memory";
    case "default":
      return "the default project memory";
    case "picked":
      return w.name === null
        ? "a project with no displayable name"
        : `project "${escapeMarkupText(w.name).replace(Yo, (b) => `&#${b.codePointAt(0)};`)}"`;
  }
}
function mn(w, b, M, k, R, P = !1) {
  let j = M.stores.length > 0 ? ` \u2014 most recently ${Ve(M.project)}` : "",
    W = ke(M)
      ? ` Any connected memory store list or shared memory index your system prompt may carry, and any ${ze} results earlier in this conversation, describe an earlier connection${j}, possibly to a different project. Treat them as stale until re-checked with the tools: do not attribute those memories to, or save them into, the project connected now on the strength of the earlier results alone. Your personal memory directory, if your system prompt names one, is unaffected.`
      : "";
  switch (w) {
    case "unchanged":
      return null;
    case "pending":
      if (ke(M))
        return wrapSystemReminder(
          `This session is no longer connected to ${Ve(M.project)} (a re-pick in /memory is still being applied). Any connected memory store list or shared memory index your system prompt may carry, and any ${ze} results earlier in this conversation, are stale. Call ${MEMORY_LIST_TOOL_NAME} with no arguments to check what, if anything, is connected before relying on the memory tools again.`,
        );
      return b === "off"
        ? null
        : wrapSystemReminder(
            `The user picked a project's shared memory in /memory and the connection is still being set up; nothing is connected yet. Before relying on the ${ze} tools, call ${MEMORY_LIST_TOOL_NAME} with no arguments: once it lists connected stores, read your teammates' shared memories and save new shared learnings through those tools as their prompts describe. Your personal memory directory, if your system prompt names one, is unaffected either way.`,
          );
    case "disconnected":
    case "unavailable":
      if (!ke(M)) return null;
      return wrapSystemReminder(
        `This session is no longer connected to ${Ve(M.project)} (${w === "disconnected" ? "the user turned it off in /memory" : P ? "the project the user re-picked is no longer available, so the pick was cleared and nothing connected" : "reconnecting to the re-picked project failed"}). Any connected memory store list or shared memory index your system prompt may carry, and any ${ze} results earlier in this conversation, are stale, and nothing is connected for the memory tools to serve until the user reconnects in /memory (${MEMORY_LIST_TOOL_NAME} with no arguments reports what, if anything, is connected whenever you need to re-check). If the user asks you to remember something, use your personal memory directory if your system prompt names one; otherwise explain that project memory is disconnected for this session.`,
      );
    case "switched":
    case "connected": {
      let V = k.stores.map((z) =>
          buildMemoryStoreView(z.store, z.writable, z.id, z.description),
        ),
        B = V.find((z) => !z.readOnly),
        I =
          B === void 0
            ? `Every connected store is read-only in this session: ${MEMORY_WRITE_TOOL_NAME} calls are refused.`
            : `Save new shared memories in \`${B.id}\` under \`${B.projectDir}\` and keep its index \`${B.indexPath}\` current, as the ${MEMORY_WRITE_TOOL_NAME} tool prompt describes. Private memories belong in your personal memory directory, if your system prompt names one; the shared stores are for what teammates should also see. Never save secrets, credentials or other sensitive data to the shared stores.`;
      return [
        wrapSystemReminder(
          [
            `The project memory connected to this session has changed: ${P ? `the project the user picked in /memory is no longer available, so ${Ve(k.project)} is connected instead` : k.project.kind === "default" ? "the user picked a project in /memory, and the default project memory is what is now connected" : `the user picked ${Ve(k.project)} in /memory`}.${W}`,
            "",
            `Connected memory stores for the rest of this session \u2014 pass an id as the ${ze} tools' store argument, and call ${MEMORY_LIST_TOOL_NAME} with no arguments to re-check this set whenever you are unsure:`,
            ...V.map(formatMemoryStoreLine),
            "",
            I,
          ].join(`
`),
        ),
        ...R.map(un),
      ].join(`

`);
    }
  }
}
function un(w) {
  let b = `/${w.store.promptIndex}`,
    M = describeMemoryIndex(w.store.id, b);
  switch (w.state) {
    case "unavailable":
      return `(${M} could not be fetched just now \u2014 call ${MEMORY_READ_TOOL_NAME} on it when you need it.)`;
    case "empty":
      return `(${M} is currently empty.)`;
    case "loaded":
      return formatRecalledMemoryBlock(M, b, w.content);
  }
}
function ao(w) {
  return findGitRoot(w) !== null;
}
class co {
  promise = null;
  rowsOnce(w) {
    return ((this.promise ??= w()), this.promise);
  }
  reset() {
    this.promise = null;
  }
}
var rt = new Gt(() => new co());
var Ae = "__open_folder__";
function fn(w, b, M) {
  return w.rowsOnce(async () => {
    let k = await discoverOrgMemoryStores(b, M).catch(() => null),
      R = getOrgMemoryPickerData();
    if (k === null) return { mounts: [], picker: R };
    let P = wasLastAskDowngraded(),
      j = getOrgMemoryDecision(),
      W =
        j.state === "on"
          ? j.initialGrant.find(
              (I) =>
                getMemoryStorePathKind(I.path) === "grouping_root" ||
                (I.kind === "grouping_root" && getMemoryStorePathKind(I.path) === "unknown"),
            )
          : void 0,
      V =
        j.state === "on"
          ? j.initialGrant.find(
              (I) => I.kind === "grouping" || getMemoryStorePathKind(I.path) === "grouping",
            )
          : void 0,
      B = j.state === "on" && hasPrivateGroupingStore(j.initialGrant);
    return {
      mounts: k
        .filter((I) => I.scope === "team")
        .map((I) => ({
          mount: I.mount,
          dir: xt(getTeamMemoryDir(), I.mount),
          description:
            W !== void 0 && normalizeStorePath(I.path) === normalizeStorePath(W.path)
              ? I.mode === "rw" && getGrantedStoreMode(I.path) === "rw" && canWriteOrgMemory()
                ? "public project memory, read-write"
                : "public project memory, read-only"
              : V !== void 0 && normalizeStorePath(I.path) === normalizeStorePath(V.path)
                ? B
                  ? "private project, read-only"
                  : "project memory, read-only"
                : I.mode === "rw" && getGrantedStoreMode(I.path) === "rw" && canWriteOrgMemory()
                  ? "read-write"
                  : B
                    ? "read-only \u2014 private project selected"
                    : P
                      ? "writes requested \u2014 granted read-only"
                      : "read-only",
        })),
      picker: R,
    };
  });
}
var Pt = "__org_memory_project_picker__",
  st = "__org_memory_project_off__";
function lo({ session: w, onSelect: b, onCancel: M, onProjectSwitch: k }) {
  let R = w.project.originalCwd,
    P = sessionStateStore.of(w.host),
    j = rt.of(w),
    { storageV5: W, credentials: V } = useStorageV5Context(),
    B = kn(getSessionMemoryFiles(w, !1, W, V)),
    I = isAutoMemoryEnabled() || isSafeMode(),
    Ce = isAutoMemoryEnabled() && !isSafeMode(),
    { mounts: z, picker: Ie } = Ce
      ? kn(fn(j, W, V))
      : { mounts: [], picker: null },
    [he, ce] = d(!1),
    [qe, Ye] = d(!1),
    [q, jt] = d(getOrgMemorySelection),
    at = q !== null && isPublicProjectsSelection(q),
    [uo] = d(isOrgMemoryReadEnabled),
    [ct] = d(() => getCurrentProjectConfig().orgMemoryRead ?? !0),
    [po, Te] = d(null),
    [fo, go] = d(!1),
    $t = C(!1),
    lt = k !== void 0 && isOrgMemoryReadEnabled(),
    le = getOrgMemoryDecision(),
    dt = !Ce
      ? null
      : le.state === "on"
        ? { label: "active", note: le.stores.map((S) => S.mount).join(", ") }
        : le.state === "parked"
          ? {
              label: "parked",
              note: lt
                ? "paused for this session \u2014 pick a project to reconnect"
                : "paused for this session \u2014 a new pick still applies next session",
            }
          : le.state === "ended"
            ? {
                label: "ended",
                note:
                  le.cause === "account_switch"
                    ? "account changed \u2014 next session decides fresh"
                    : "signed out \u2014 next session decides fresh",
              }
            : null,
    mt = xt(getClaudeConfigDir(), "CLAUDE.md"),
    Ke = xt(R, "CLAUDE.md"),
    ho = B.some((S) => S.path === mt),
    yo = B.some((S) => S.path === Ke),
    wo = [
      ...B.filter(
        (S) =>
          S.type !== "AutoMem" && S.type !== "AutoMemPinned" && !isSyntheticMemoryFilePath(S.path),
      ).map((S) => ({ ...S, exists: !0 })),
      ...(ho ? [] : [{ path: mt, type: "User", content: "", exists: !1 }]),
      ...(yo ? [] : [{ path: Ke, type: "Project", content: "", exists: !1 }]),
    ],
    Et = new Map(),
    So = wo.map((S) => {
      let H = formatPathForDisplay(S.path),
        me = S.exists ? "" : " (new)",
        pe = S.parent ? (Et.get(S.parent) ?? 0) + 1 : 0;
      Et.set(S.path, pe);
      let J = pe > 0 ? repeatString("  ", pe - 1) : "",
        Z;
      if (S.type === "User" && !S.isNested && S.path === mt)
        Z = "User instructions";
      else if (S.type === "Project" && !S.isNested && S.path === Ke)
        Z = "Project instructions";
      else if (pe > 0) Z = `${J}L ${H}${me}`;
      else Z = `${H}`;
      let ne,
        fe = ao(R);
      if (S.type === "User" && !S.isNested) ne = "Saved in ~/.claude/CLAUDE.md";
      else if (S.type === "Project" && !S.isNested && S.path === Ke)
        ne = `${fe ? "Checked in at" : "Saved in"} ./CLAUDE.md`;
      else if (S.parent) ne = "@-imported";
      else if (S.isNested) ne = "dynamically loaded";
      else ne = "";
      return { label: Z, value: S.path, description: ne };
    }),
    Dt = [],
    Le = [],
    bo = useAppStateSelector((S) => S.agentDefinitions),
    [Re] = d(() => ({ write: !1, picker: !1, pickerData: null }));
  if (Ie !== null) Re.pickerData = Ie;
  let Y = Ie ?? Re.pickerData,
    Ft = Y !== null && at;
  E(() => {
    if (Ft) logEvent("tengu_org_memory_legacy_pick_nudged", {});
  }, [Ft]);
  let Mo = le.state === "on" && q === le.request.selection,
    At =
      q !== null &&
      (Mo
        ? hasPrivateGroupingStore(le.initialGrant)
        : Y?.candidates.find((S) => S.id === q)?.visibility === "private"),
    ko =
      q === null || Y === null
        ? st
        : (Y.candidates.find((S) => S.id === q)?.id ??
          Y.candidates.find((S) => S.isDefault)?.id ??
          Y.candidates[0]?.id ??
          st);
  if (I) {
    if (
      (Le.push({
        label: "Open auto-memory folder",
        value: `${Ae}${getAutoMemPath()}`,
        description: "",
      }),
      hasTeamMemoryStore())
    )
      Le.push({
        label: "Open team memory folder",
        value: `${Ae}${getTeamMemoryDir()}`,
        description: "",
      });
    if (!uo)
      for (let S of z)
        Le.push({
          label: `Open synced project memory: ${S.mount}`,
          value: `${Ae}${S.dir}`,
          description: S.description,
        });
    if (((Re.picker ||= Y !== null), Y !== null && Re.picker)) {
      let S = q === null ? void 0 : Y.candidates.find((pe) => pe.id === q),
        H = q === null ? null : (S?.name ?? (at ? "all public projects" : q)),
        me =
          H === null
            ? "off"
            : ct
              ? At
                ? `${H} (private)`
                : H
              : "off \u2014 disabled in settings";
      Dt.push({
        label: `Sync memories from: ${me}`,
        value: Pt,
        description:
          po ||
          (at
            ? "set automatically \u2014 pick a project to choose where saves go"
            : Y.writeOptInAvailable && areOrgMemoryWriteGatesOpen() && !isOrgMemoryWriteOptedInForAccount()
              ? "change \xB7 org allows write opt-in (/config)"
              : "change"),
      });
    }
    for (let S of bo.activeAgents)
      if (S.memory) {
        let H = getAgentMemoryDir(S.agentType, S.memory);
        Le.push({
          label: `Open ${chalk.bold(S.agentType)} agent memory`,
          value: `${Ae}${H}`,
          description: `${S.memory} scope`,
        });
      }
  }
  let ut = [...Dt, ...So, ...Le],
    pt = P.memorySelectorLastPath,
    Co = pt && ut.some((S) => S.value === pt) ? pt : ut[0]?.value || "",
    [Oe, It] = d(isAutoMemoryEnabled),
    [Tt, vo] = d(isAutoDreamEnabled),
    [Xe, Ro] = d(isAutoMemoryDisabledForCurrentMainLoopModel);
  E(
    () =>
      onGrowthBookRefresh(() => {
        let S = isAutoMemoryDisabledForCurrentMainLoopModel();
        if (S !== Xe) (Ro(S), It(isAutoMemoryEnabled()));
      }),
    [Xe],
  );
  let Oo = Xe && !Oe,
    [ye] = d(() => Oe && isAutoDreamAvailable()),
    Lt = useAppStateSelector((S) =>
      Object.values(S.tasks).some(
        (H) => H.type === "dream" && H.status === "running",
      ),
    ),
    [ft, _o] = d(null);
  E(() => {
    if (!ye) return;
    readAutoMemLastConsolidatedAt(void 0, W).then(_o);
  }, [ye, Lt, W]);
  let Nt = Lt
      ? "running"
      : ft === null
        ? ""
        : ft === 0
          ? "never"
          : `last ran ${formatRelativeTimeAgo(new Date(ft))}`,
    [oe, gt] = d(null),
    Je = oe !== null,
    [Ue, Ut] = d(isOrgMemoryWriteOptedInForAccount),
    [Po, we] = d(null);
  Re.write ||= !isMonorepoWriteBlockEnabled() && (Ue || (z.length > 0 && areOrgMemoryWriteGatesOpen()));
  let ht = ct && q !== null && Re.write,
    Qe = ye ? 2 : 1,
    Ht = ht ? Qe : ye ? 1 : 0;
  function xo() {
    if (!ht) return;
    jFt(() => {
      let S = !Ue,
        H = setOrgMemoryWriteOptIn(S, W);
      if (H === "granted" || H === "withdrawn") (j.reset(), Ut(S), we(null));
      else if (H === "noop") (Ut(isOrgMemoryWriteOptedInForAccount()), we(null));
      else if (H === "refused_gates") we("unavailable right now");
      else if (H === "refused_identity") we("requires an OAuth login");
      else if (H === "refused_read_off") we("enable reads first");
    });
  }
  function jo() {
    if (isSafeMode()) return;
    if (Xe) return;
    let S = !Oe;
    (updateSettingsForSource("userSettings", { autoMemoryEnabled: S }, void 0, W),
      It(S),
      logEvent("tengu_auto_memory_toggled", { enabled: S }));
  }
  function $o() {
    if (!ye || !Oe) return;
    let S = !Tt,
      H = S && getInitialSettings().autoDreamEnabled === void 0;
    (updateSettingsForSource("userSettings", { autoDreamEnabled: S }, void 0, W),
      vo(S),
      logEvent("tengu_auto_dream_toggled", { enabled: S, is_first_enable: H }));
  }
  return (
    useGlobalExitKeybinding(),
    useKeybinding(
      "confirm:no",
      () => {
        if (he) {
          ce(!1);
          return;
        }
        M();
      },
      { context: "Confirmation" },
    ),
    useKeybinding(
      "confirm:yes",
      () => {
        if (oe === 0) jo();
        else if (oe === 1 && ye) $o();
        else if (oe === Qe) xo();
      },
      { context: "Confirmation", isActive: Je },
    ),
    useKeybinding(
      "select:next",
      () => {
        gt((S) => (S !== null && S < Ht ? S + 1 : null));
      },
      { context: "Select", isActive: Je },
    ),
    useKeybinding(
      "select:previous",
      () => {
        gt((S) => (S !== null && S > 0 ? S - 1 : S));
      },
      { context: "Select", isActive: Je },
    ),
    r(Box, {
      flexDirection: "column",
      width: "100%",
      children: [
        r(Box, {
          flexDirection: "column",
          marginBottom: 1,
          children: [
            e(nl, {
              isFocused: oe === 0,
              children: r(Text, {
                children: [
                  "Auto-memory:",
                  " ",
                  Oo
                    ? e(Text, {
                        dimColor: !0,
                        children: "unavailable for current model",
                      })
                    : isSafeMode()
                      ? r(Text, {
                          dimColor: !0,
                          children: [
                            "off in safe mode \u2014 ",
                            getSafeModeExitHint(),
                            " to re-enable",
                          ],
                        })
                      : Oe
                        ? "on"
                        : "off",
                ],
              }),
            }),
            ye &&
              e(nl, {
                isFocused: oe === 1,
                styled: !1,
                children: e(Text, {
                  color: oe === 1 ? "suggestion" : void 0,
                  children: Oe
                    ? r(N, {
                        children: [
                          "Auto-dream: ",
                          Tt ? "on" : "off",
                          Nt &&
                            r(Text, { dimColor: !0, children: [" \xB7 ", Nt] }),
                        ],
                      })
                    : e(Text, {
                        dimColor: !0,
                        children: "Auto-dream: off while auto-memory is off",
                      }),
                }),
              }),
            ht &&
              e(nl, {
                isFocused: oe === Qe,
                styled: !1,
                children: r(Text, {
                  color: oe === Qe ? "suggestion" : void 0,
                  children: [
                    "Write to synced project memory: ",
                    Ue ? "on" : "off",
                    r(Text, {
                      dimColor: !0,
                      children: [
                        " ",
                        "\xB7",
                        " ",
                        Po ??
                          (At
                            ? "no effect under a private project pick"
                            : "this directory, applies next session"),
                      ],
                    }),
                  ],
                }),
              }),
            dt !== null &&
              e(nl, {
                isFocused: !1,
                styled: !1,
                children: r(Text, {
                  children: [
                    "Synced project memory: ",
                    dt.label,
                    r(Text, { dimColor: !0, children: [" \xB7 ", dt.note] }),
                  ],
                }),
              }),
          ],
        }),
        he && Y !== null
          ? e(KeybindingScope, {
              scope: "Confirmation",
              claimFocus: !0,
              bindings: [{ action: "confirm:no", run: () => ce(!1) }],
              children: e(ve, {
                defaultFocusValue: ko,
                options: [
                  {
                    label: "off",
                    value: st,
                    description:
                      Y.candidates.length === 0
                        ? "no projects to pick yet"
                        : q === null
                          ? ""
                          : "clear the saved pick",
                  },
                  ...Y.candidates.map((S) => ({
                    label: S.name,
                    value: S.id,
                    description:
                      S.visibility === "private"
                        ? "private \u2014 org store becomes read-only"
                        : S.kind === "project"
                          ? "public project"
                          : "",
                  })),
                ],
                onChange: (S) => {
                  if ($t.current) return;
                  jFt(() => {
                    let H = S === st,
                      me = H ? void 0 : Y.candidates.find((Pe) => Pe.id === S),
                      pe = H ? EXPLICIT_OFF_SENTINEL : S,
                      J = H ? null : S,
                      Z = setOrgMemorySelection(pe, W),
                      ne = Z === "saved" || Z === "cleared",
                      fe = getOrgMemoryDecision(),
                      Eo =
                        Z === "noop" &&
                        (J === null
                          ? fe.state === "on" || fe.state === "parked"
                          : !(fe.state === "on" && fe.request.selection === J)),
                      Bt =
                        lt &&
                        J === null &&
                        (fe.state === "off" || fe.state === "ended"),
                      Wt =
                        (ne || Eo) &&
                        !Bt &&
                        lt &&
                        k(() => ro(w, J === null ? "off" : "project"));
                    if (Z === "saved" && me !== void 0)
                      logEvent("tengu_org_memory_project_selected", {
                        is_default: me.isDefault === !0,
                        kind: fromEnum(me.kind),
                        private: me.visibility === "private",
                        reconnects_now: Wt,
                      });
                    if (Wt)
                      (($t.current = !0),
                        jt(J),
                        we(null),
                        Te(
                          J === null
                            ? "disconnecting\u2026"
                            : "connecting\u2026",
                        ),
                        go(!0));
                    else if (ne) {
                      let Pe = getOrgMemoryDecision(),
                        yt =
                          Pe.state === "on" &&
                          Pe.request.writeAccess &&
                          (J === null || Pe.request.selection !== J) &&
                          shrinkOrgMemoryDecisionWriteAsk();
                      if (yt || Pe.state === "undecided") clearOrgMemoryCredential();
                      if ((jt(J), J === null))
                        (we(null),
                          Te(
                            yt && Ue
                              ? "off \u2014 writes stop now; unsync next session"
                              : Bt
                                ? "off \u2014 saved for this directory"
                                : "off \u2014 applies next session",
                          ));
                      else
                        Te(
                          !ct
                            ? "saved \u2014 enable reads in /config (orgMemoryRead) to apply"
                            : yt && Ue
                              ? "saved \u2014 previous workspace writes stop now; applies next session"
                              : "saved \u2014 applies next session",
                        );
                      j.reset();
                    } else if (Z === "refused") Te("requires an OAuth login");
                    else Te(null);
                    ce(!1);
                  });
                },
                onCancel: () => ce(!1),
              }),
            })
          : e(ve, {
              defaultFocusValue: qe ? Pt : Co,
              options: ut,
              isDisabled: Je || fo,
              onChange: (S) => {
                if (S === Pt) {
                  (ce(!0), Ye(!0));
                  return;
                }
                if (S.startsWith(Ae)) {
                  let H = S.slice(Ae.length);
                  mkdir(H, { recursive: !0 })
                    .catch(() => {})
                    .then(() => openPathInDefaultApp(H))
                    .catch(() => {});
                  return;
                }
                (P.rememberMemorySelectorPath(S), b(S));
              },
              onCancel: M,
              onUpFromFirstItem: () => gt(Ht),
            }),
      ],
    })
  );
}
var gn = createLazyValue(() =>
  c({
    generation: T().int().min(1),
    etag: s().optional(),
    allow: v(s()),
    at: T(),
  }),
);
function hn(w) {
  return sessionIdBody(w);
}
function mo(w) {
  let b = getGlobalConfig().remoteHomeSettingsSent?.[hn(w)];
  if (b === void 0) return;
  let M = gn().safeParse(b);
  return M.success ? M.data : void 0;
}
import { homedir } from "os";
import { relative } from "path";
function it(w) {
  let b = homedir(),
    M = getCwd(),
    k = w.startsWith(b) ? "~" + w.slice(b.length) : null,
    R = w.startsWith(M) ? "./" + relative(M, w) : null;
  if (k && R) return k.length <= R.length ? k : R;
  return k || R || w;
}
function bn({ session: w, onDone: b }) {
  let M = async (R) => {
      try {
        if (R.includes(getClaudeConfigDir())) await getFsSurface().mkdir(getClaudeConfigDir());
        try {
          await writeFile(R, "", { encoding: "utf8", flag: "wx" });
        } catch (I) {
          if (A(I) !== "EEXIST") throw I;
        }
        if (!openFileInEditor(R)) {
          b(
            `Couldn't open ${it(R)} in an editor. If no editor is configured, set $EDITOR or $VISUAL, then run /memory again.`,
            { display: "system" },
          );
          return;
        }
        let P = "default",
          j = "";
        if (a.VISUAL) ((P = "$VISUAL"), (j = a.VISUAL));
        else if (a.EDITOR) ((P = "$EDITOR"), (j = a.EDITOR));
        let W = P !== "default" ? `Using ${P}="${j}".` : "",
          V = W
            ? `> ${W} To change editor, set $EDITOR or $VISUAL environment variable.`
            : "> To use a different editor, set the $EDITOR or $VISUAL environment variable.",
          B = isSafeMode()
            ? `

> Safe mode: this session doesn't load CLAUDE.md files, so changes take effect after you ${getSafeModeExitHint()}.`
            : "";
        b(
          `Opened ${it(R)}${B}

${V}`,
          { display: "system" },
        );
      } catch (P) {
        (logForDebugging(`Failed to open memory file ${R}: ${P}`, { level: "error" }),
          b(`Couldn't open ${it(R)}: ${l(P)}`, { display: "system" }));
      }
    },
    k = () => {
      b("Cancelled memory editing", { display: "system" });
    };
  return e(de, {
    title: "Memory",
    onCancel: k,
    color: "remember",
    children: r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [
        isSafeMode() &&
          r(Box, {
            flexDirection: "column",
            children: [
              r(Text, { color: "suggestion", children: [figures.info, " Safe mode"] }),
              r(Text, {
                dimColor: !0,
                children: [
                  "CLAUDE.md files aren't loaded into this session. You can still edit them \u2014 changes take effect after you",
                  " ",
                  getSafeModeExitHint(),
                  ".",
                ],
              }),
            ],
          }),
        e(Dn, {
          fallback: e(SpinnerMessageLine, { message: "Loading\u2026", dimColor: !0 }),
          children: e(lo, { session: w, onSelect: M, onCancel: k }),
        }),
        e(LearnMoreLink, { url: "https://code.claude.com/docs/en/memory" }),
      ],
    }),
  });
}
var si = async (w, b) => {
  let M = getRemoteTransport();
  if (M) {
    if (!hasRemoteControlChannel())
      return (
        w("Memory files aren't available over this remote connection"),
        null
      );
    return e(_t, {
      onExit: w,
      remote: M,
      filesRead: eo(M, b.abortController.signal),
      signal: b.abortController.signal,
      userMemoryOrigin:
        M.sessionId !== void 0 && mo(M.sessionId) !== void 0
          ? "sentFromHere"
          : "inSession",
    });
  }
  return (
    clearMemoryFilesForSession(b.session),
    rt.of(b.session).reset(),
    await getSessionMemoryFiles(b.session, !1, b.storageV5, b.credentials),
    e(bn, { session: b.session, onDone: w })
  );
};
export { si as call };

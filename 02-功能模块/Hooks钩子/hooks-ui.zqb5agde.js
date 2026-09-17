// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 231 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { useAppStateSelector } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import { useOnSettingsChange, useSessionHooksRegistry } from "../后台任务-Shell管理/chunk-c7mzes79.js";
import { he, MA, LL, Mx } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { getClaudeConfigDir, isSafeMode, getSafeModeExitHint } from "../模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js";
import { capitalize, pluralize, escapeInvisibleCharacters, escapeAllControlCharacters } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logError } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { SESSION_END_REASONS, SETTINGS_SOURCE_ORDER } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { formatSingleLineText } from "../../01-核心基础设施/共享小工具-未细化/text-sanitization.js";
import { NOTIFICATION_TYPES } from "../图片-截图-ComputerUse/settings-option-values.js";
import { getSettingsFilePathForSource, getSettingsForSource, getSettings_DEPRECATED } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { findGitRootUncached } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import {
  isAnyPathWithinRoots,
  resolveReachableRoots,
  mergeChildProcessEnv,
  getHomeDirFromEnv,
  getWriteEntriesForSource,
  getCommonWriteRoots,
  getScopedWriteRoots,
  sanitizeForDisplay,
  getBuiltinToolsForContext,
  getDeviceHooksConsentFilePath,
  writeConsentToStore,
  createConsentStore,
  setConsentAnswerGiven,
  readConsentAnswer,
  emitConsentAnswer,
  isConsentStoreInReach,
  getRealFileSystemAccess,
  captureHookSettings,
  createHookSettingsAccessor,
  resolveStandingLapse,
  isAnySettingsSourceInReach,
  hasCapturedHooks,
  deviceHooksProcessMemories,
  formatHookTarget,
  formatHookLabel,
  listConfiguredHooks,
  getHookSourceDescription,
  getHookSourceHeader,
  getHookSourceInlineLabel,
  sortHookEventsBySource,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isAccountOnHoldEnabled } from "../认证-OAuth登录/chunk-wk0e3dz4.js";
import { getToolPermissionContext } from "../权限系统/chunk-fjrcf22x.js";
import { subprocessEnv } from "../../01-核心基础设施/核心工具-进程与信号/subprocess-env-scrub.js";
import { getPreferredShellToolName } from "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { peekPreSettingsEnvSnapshot } from "../../01-核心基础设施/遥测-OpenTelemetry/settings-env-application.js";
import { buildHookInventory, getShellPrefixFromEnv, getLegacyConfigFileState, computeHookOwnEnv } from "./device-hooks-serving.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { KeybindingHint } from "../键位绑定-Keybindings/keybinding-display.js";
import { useTerminalSize } from "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { Box, Text, Link, useTimeout } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { NO_COMMITTED_ROW, Select } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { StatusIndicator } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { useKeybinding } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { de } from "../../01-核心基础设施/UI组件-TUI/chunk-92g8hxqw.js";
import { useSession } from "../../01-核心基础设施/共享小工具-未细化/session-context.js";
import { Table, hasPolicySettings, addEnabledDefaultTools } from "../../03-入口与运行时/会话UI-REPL/会话UI-REPL.qs63rzfp.js";
import { EmptyStateMessage } from "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import { ActionKeybindingHint } from "../../01-核心基础设施/共享小工具-未细化/action-keybinding-hint.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { Dn, kn, V, C, d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { countMatching, dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
import { realpath } from "fs/promises";
import { basename } from "path";
var hs =
    "not registered yet \u2014 the cloud session has not answered (it may be asleep); registers with your next message",
  Ao = {
    dormant:
      "idle \u2014 nothing has used the session for a while, so the registration was allowed to lapse; it is made again with your next message",
    kept_none:
      "the cloud session kept none of them (it ignored every entry offered); offered again after a settings change or a re-attach",
    paused:
      "paused \u2014 the cloud worker is not answering; they are offered again as soon as it reports in",
    declined: "off for this session \u2014 the answer here was No",
    disabled:
      "not run by THIS cloud session \u2014 its side has the feature off or a managed policy stands this machine down",
    unsupported:
      "not run by THIS cloud session \u2014 it was created before hooks from your machine could run for it",
    invalid:
      "not run by THIS cloud session \u2014 it did not accept the registration (see the notice above)",
    stale:
      "not run by THIS cloud session \u2014 another registration superseded this one",
    muted:
      "not offered right now \u2014 remote tool serving was turned off by Anthropic (emergency switch); offered again when it is turned back on",
  };
function ps(n, a, s) {
  let g = resolveStandingLapse({ standing: n, lapsesUnusedAt: a }, s);
  if (g !== null)
    return { standing: g === "dormant" ? Ao.dormant : hs, standingIsIdle: !0 };
  switch (n.kind) {
    case "paused":
    case "kept_none":
      return { standing: Ao[n.kind] };
    case "stopped":
      return { standing: Ao[n.reason] };
    case "registered":
    case "idle":
    case "dormant":
      return {};
  }
}
var fs = {
    after_edit: "after-edit hooks stay local for now",
    kind_unsupported: "only command and http hooks can run for a cloud session",
    event_runs_locally: "this event happens on this machine, not in the cloud",
    event_later: "this event is not forwarded yet",
    event_low_value: "this event is not forwarded",
    event_container_internal: "this event only concerns the cloud container",
    source_in_sync_root:
      "its settings file sits where the cloud session can write on this machine",
    sync_root_is_config_dir:
      "a directory the cloud session can write on this machine is your config directory",
    unverifiable_target: "its script could not be read to pin it",
    in_reach:
      'its script sits where the cloud session can write on this machine and it is not marked cloud: "device"',
    interpreter_unvouched:
      'the interpreter that runs its script sits where the cloud session can write, cannot be located, or cannot be vouched for from its #! line, and it is not marked cloud: "device"',
    loads_from_reach:
      'its script is outside the checkout but loads code or data from where the cloud session can write (names the checkout, sources a relative file, addresses its working directory or reads $CLAUDE_PROJECT_DIR) and it is not marked cloud: "device"',
    unpinned_command: "it is not a single script this machine can pin",
    duplicate: "the same hook is configured twice",
    over_cap:
      "more hooks than one registration carries, or its matcher is too long or holds an invisible character",
    pattern_matcher:
      "its matcher is a pattern, which a cloud session cannot take \u2014 use a plain list such as Edit|Write",
    author_skip: 'it is marked cloud: "skip" in its settings entry',
  },
  Fe = {
    user: { tag: "user settings", phrase: "your user settings" },
    local: {
      tag: "settings.local.json",
      phrase: "this checkout's settings.local.json",
    },
    flag: { tag: "--settings file", phrase: "the --settings file" },
  };
function hn(n, a) {
  let s =
    a !== void 0
      ? basename(a)
      : /^https?:\/\//i.test(n.trim())
        ? pn(n.trim())
        : basename(n.trim().split(/\s+/)[0] ?? "") || "hook";
  return formatSingleLineText(s, { maxCodeUnits: 120 }) || "hook";
}
function gs(n, a = new Set()) {
  let s = (c) => (a.has(c) ? { fromWritableFile: !0 } : {}),
    g = n.forwarded.map((c) => ({
      where: "here",
      label:
        c.local.hook.type === "http"
          ? pn(c.local.hook.url)
          : c.local.hook.type === "command"
            ? hn(c.local.hook.command, c.local.pinnedTarget?.path)
            : "hook",
      event: c.wire.event,
      ...(c.wire.matcher !== void 0 && {
        matcher: formatSingleLineText(c.wire.matcher, { maxCodeUnits: 200 }),
      }),
      source: c.local.source,
      ...s(c.local.source),
    })),
    k = n.templates.map((c) => ({
      where: "cloud",
      label: `${c.local.templateId}${c.local.label === "legacy" ? " (older copy)" : ""}`,
      event: c.wire.event,
      ...(c.wire.matcher !== void 0 && {
        matcher: formatSingleLineText(c.wire.matcher, { maxCodeUnits: 200 }),
      }),
      source: c.local.source,
      ...s(c.local.source),
    })),
    w = n.held.map((c) => ({
      where: "local",
      label: hn(c.command),
      event: c.event,
      ...(c.matcher !== void 0 && { matcher: c.matcher }),
      source: c.source,
      why: fs[c.reason],
    }));
  return [...g, ...k, ...w];
}
function pn(n) {
  try {
    return new URL(n).host || "http hook";
  } catch {
    return "http hook";
  }
}
var ks = { kind: "none", reason: "disabled_by_settings" };
function ys(n, a, s) {
  if (
    n.kind === "none" &&
    n.reason === "disabled_by_settings" &&
    a !== null &&
    a.kind === "captured" &&
    s &&
    hasCapturedHooks(a)
  )
    return { captured: a, kept: "launch_hooks" };
  if (a?.kind === "none" && a.reason === "disabled_by_settings" && hasCapturedHooks(n))
    return { captured: ks, kept: "off" };
  return { captured: n };
}
async function Fo({
  launchDir: n,
  storageV5: a,
  forwarding: s,
  consentPin: g,
  senderMemory: k,
  processMemory: w,
}) {
  let c = getDeviceHooksConsentFilePath();
  if (s !== "cloud") return { consent: s, consentLocation: c, rows: [] };
  let y = createConsentStore(a),
    S = () => ps(k.standing, k.lapsesUnusedAt, Date.now()),
    R = g,
    I = async (q) =>
      R.current?.origin === "given" ? R.current.value.catch(() => "unset") : q;
  try {
    let { stored: q, origin: xe } = await readConsentAnswer(R, y),
      Te = q,
      De = captureHookSettings(createHookSettingsAccessor()),
      Ee = findGitRootUncached(n) ?? n,
      ie = await resolveReachableRoots({
        stickyRoots: new Set(k.stickyRoots),
        pinnedScopes: new Set(k.pinnedScopes),
        pinnedRoots: new Map(k.pinnedRoots),
        baseRoots: [
          n,
          await realpath(n).catch(() => n),
          Ee,
          await realpath(Ee).catch(() => Ee),
        ],
        reachBaseline: k.reachBaseline ?? new Map(SETTINGS_SOURCE_ORDER.map((b) => [b, getWriteEntriesForSource(b, n)])),
        scopeSettingsFile: (b) => getSettingsFilePathForSource(b) ?? null,
        realpath: realpath,
        commonRoots: () => k.commonRoots ?? getCommonWriteRoots(n),
        scopeRoots: (b, K) => getScopedWriteRoots(n, b, K),
      });
    if (xe === "read" && Te !== "unset" && (await isConsentStoreInReach(c, ie, realpath)) !== !1)
      Te = "unset";
    let { captured: z, kept: oo } = ys(
      De,
      k.baseline,
      De.kind === "none" && De.reason === "disabled_by_settings"
        ? await isAnySettingsSourceInReach(ie, De.switchSources ?? ["user", "flag"], {
            realpath: realpath,
            scopeSettingsFile: (b) => getSettingsFilePathForSource(b) ?? null,
            everInReach: k.everInReach,
          })
        : !1,
    );
    if (z.kind === "none")
      return {
        consent: await I(Te),
        consentLocation: c,
        ...S(),
        rows: [],
        unavailableReason: oo === "off" ? ws : _s[z.reason],
      };
    let to = subprocessEnv(),
      no = mergeChildProcessEnv({
        attached: to,
        beforeSettings: peekPreSettingsEnvSnapshot(),
        ownEnv: computeHookOwnEnv(k, getLegacyConfigFileState(w)),
        childrenSee: (b) => Object.hasOwn(to, b),
      }),
      Ae = await buildHookInventory(
        z,
        {
          instanceId: "dev-0000000000000000",
          launchDir: n,
          projectDir: n,
          configHome: getClaudeConfigDir(),
          extraReachRoots: ie,
          ...(Ee !== n && { repoRoot: Ee }),
          ...(k.lastSyncRoot !== null && {
            sync: { rootReal: k.lastSyncRoot.real, root: k.lastSyncRoot.root },
          }),
          allowLegacyTemplateDigests: !0,
          refusedTemplateIds: [...k.refusedTemplates],
          optInPins: new Map(k.optInPins),
        },
        {
          realpath: realpath,
          open: getRealFileSystemAccess().openNoFollow,
          home: getHomeDirFromEnv(no),
          defaultShell: getPreferredShellToolName(),
          shellPrefix: getShellPrefixFromEnv(no),
        },
      ),
      re = [
        ["user", getSettingsFilePathForSource("userSettings")],
        ["local", getSettingsFilePathForSource("localSettings")],
        ["flag", MA() === void 0 ? getSettingsFilePathForSource("flagSettings") : void 0],
      ],
      ae = new Set(z.withheld.map((b) => b.source)),
      He = new Set();
    for (let [b, K] of re) {
      if (K === void 0 || (ae.has(b) && !k.everInReach.has(b))) continue;
      if (k.everInReach.has(b)) {
        He.add(b);
        continue;
      }
      let No = dedupe([
        K,
        await realpath(K).catch(() => K),
        ...(k.knownSpellings.get(b) ?? []),
      ]);
      if (isAnyPathWithinRoots(No, ie)) He.add(b);
    }
    return {
      consent: await I(Te),
      consentLocation: c,
      ...S(),
      rows: gs(Ae, He),
      ...(oo === "launch_hooks" && {
        keptFromLaunch:
          "All hooks were switched off in your settings during this cloud session; for it, this machine keeps offering the hooks it had when you launched (listed here) until you restart claude --cloud.",
      }),
      ...(He.size > 0 && {
        writableSources: [...He].map(
          (b) =>
            `${Fe[b].phrase[0].toUpperCase()}${Fe[b].phrase.slice(1)} can be written by this cloud session; for it, the hooks that file held when you attached are the ones offered, whatever it holds now.`,
        ),
      }),
      ...(z.withheld.length > 0 && {
        withheld: z.withheld.map(
          (b) =>
            `Hooks from ${Fe[b.source].phrase} are not offered to the cloud session: ${Ss[b.reason]}.`,
        ),
      }),
    };
  } catch (q) {
    return (
      logError(q),
      {
        consent: await I("unset"),
        consentLocation: c,
        ...S(),
        rows: [],
        unavailableReason: "they could not be read",
      }
    );
  }
}
var ws =
    "all hooks were switched off in your settings when this cloud session started, and for it this machine keeps them off although that switch has since been removed \u2014 restart claude --cloud to offer them",
  _s = {
    policy_unreadable: "the managed policy on this machine could not be read",
    policy_disable_all: "a managed policy switches all hooks off",
    managed_only:
      "only managed hooks may run here (a managed-only policy, or safe mode)",
    plugin_only: "a managed policy allows plugin hooks only",
    disabled_by_settings: "all hooks are switched off in your settings",
    bare: "this session runs without user configuration",
    untrusted_workspace: "this folder's trust prompt was not accepted",
  },
  Ss = {
    untrusted: "this folder's trust prompt was not accepted",
    repo_provenance:
      "that file is part of the repository (or its provenance could not be read), which the cloud session has its own copy of",
    runtime_patch: "hooks set for this run only are not forwarded",
  };
F();
var Sn = 250;
function So(Mr) {
  let J = _(37),
    {
      forwarded: vo,
      templateNames: _o,
      consentLocation: fn,
      current: gn,
      onDone: yn,
    } = Mr,
    bs = C(!1),
    Wo = useTimeout(Sn),
    Cs;
  if (J[0] !== Wo || J[1] !== yn)
    ((Cs = function ne(Or) {
      if (bs.current || !Wo) {
        return;
      }
      ((bs.current = !0), yn(Or));
    }),
      (J[0] = Wo),
      (J[1] = yn),
      (J[2] = Cs));
  else Cs = J[2];
  let ne = Cs,
    Jo;
  if (J[3] !== vo)
    ((Jo =
      vo > 0
        ? [
            `${vo} ${pluralize(vo, "hook")} would run on this machine when a cloud session started from it asks`,
          ]
        : []),
      (J[3] = vo),
      (J[4] = Jo));
  else Jo = J[4];
  let jo;
  if (J[5] !== _o)
    ((jo =
      _o.length > 0
        ? [
            `your ${_o.join(", ")} ${pluralize(_o.length, "hook")} would run inside the cloud session instead`,
          ]
        : []),
      (J[5] = _o),
      (J[6] = jo));
  else jo = J[6];
  let xs;
  if (J[7] !== Jo || J[8] !== jo)
    ((xs = [...Jo, ...jo]), (J[7] = Jo), (J[8] = jo), (J[9] = xs));
  else xs = J[9];
  let Bo = xs.join("; "),
    Lo;
  if (J[10] !== ne) ((Lo = () => ne("not_now")), (J[10] = ne), (J[11] = Lo));
  else Lo = J[11];
  let Es;
  if (J[12] === MEMO_CACHE_SENTINEL)
    ((Es = r(DotSeparatedList, {
      children: [
        e(KeybindingHint, { chord: "enter", action: "confirm" }),
        e(ActionKeybindingHint, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "skip for now",
        }),
      ],
    })),
      (J[12] = Es));
  else Es = J[12];
  let Hs;
  if (J[13] === MEMO_CACHE_SENTINEL)
    ((Hs = e(Text, {
      children:
        "Hooks from your own settings (your user settings.json, this checkout's .claude/settings.local.json, or a --settings file) normally do nothing in a cloud session. If you say yes, a cloud session started from this machine asks this terminal to run the matching hooks on this machine, waits briefly for each answer, and carries on without it if none comes. What a hook returns \u2014 a block reason, added context \u2014 becomes part of the cloud session's transcript.",
    })),
      (J[13] = Hs));
  else Hs = J[13];
  let $o;
  if (J[14] !== Bo)
    (($o =
      Bo !== "" && r(Text, { dimColor: !0, children: ["Right now: ", Bo, "."] })),
      (J[14] = Bo),
      (J[15] = $o));
  else $o = J[15];
  const wn =
    gn === "accepted"
      ? "Not now keeps your current answer (yes: this machine\u2019s hooks keep running for cloud sessions)."
      : gn === "declined"
        ? "Not now keeps your current answer (no)."
        : "Not now leaves it undecided (nothing from this machine runs for cloud sessions until you say yes).";
  let Uo;
  if (J[16] !== fn || J[17] !== wn)
    ((Uo = r(Text, {
      dimColor: !0,
      children: [
        "Yes and No are saved for this machine in ",
        fn,
        " and can be changed here any time (other claude --cloud terminals already running keep the answer they started with until relaunched);",
        " ",
        wn,
      ],
    })),
      (J[16] = fn),
      (J[17] = wn),
      (J[18] = Uo));
  else Uo = J[18];
  let qo;
  if (J[19] !== Uo || J[20] !== $o)
    ((qo = r(Box, { flexDirection: "column", gap: 1, children: [Hs, $o, Uo] })),
      (J[19] = Uo),
      (J[20] = $o),
      (J[21] = qo));
  else qo = J[21];
  let Rs, Ms;
  if (J[22] === MEMO_CACHE_SENTINEL)
    ((Rs = {
      label: "Yes, run this machine's hooks for cloud sessions",
      value: "accepted",
    }),
      (Ms = { label: "No, keep them on this machine only", value: "declined" }),
      (J[22] = Rs),
      (J[23] = Ms));
  else ((Rs = J[22]), (Ms = J[23]));
  const vn = gn === void 0 ? "Not now" : "Not now (keep my answer)";
  let Go;
  if (J[24] !== vn)
    ((Go = [Rs, Ms, { label: vn, value: "not_now" }]),
      (J[24] = vn),
      (J[25] = Go));
  else Go = J[25];
  const _n = !Wo;
  let Yo;
  if (J[26] !== ne) ((Yo = () => ne("not_now")), (J[26] = ne), (J[27] = Yo));
  else Yo = J[27];
  let Vo;
  if (J[28] !== ne || J[29] !== Go || J[30] !== _n || J[31] !== Yo)
    ((Vo = e(Select, {
      selectedValue: NO_COMMITTED_ROW,
      options: Go,
      defaultFocusValue: "not_now",
      hideIndexes: !0,
      isDisabled: _n,
      onChange: ne,
      onCancel: Yo,
    })),
      (J[28] = ne),
      (J[29] = Go),
      (J[30] = _n),
      (J[31] = Yo),
      (J[32] = Vo));
  else Vo = J[32];
  let Os;
  if (J[33] !== qo || J[34] !== Vo || J[35] !== Lo)
    ((Os = r(de, {
      title: "Let cloud sessions started from this machine run its hooks?",
      onCancel: Lo,
      inputGuide: Es,
      children: [qo, Vo],
    })),
      (J[33] = qo),
      (J[34] = Vo),
      (J[35] = Lo),
      (J[36] = Os));
  else Os = J[36];
  return Os;
}
function bo(n) {
  return {
    PreToolUse: {
      summary: "Before tool execution",
      description: `Input to command is JSON of tool call arguments.
Exit code 0 - stdout/stderr not shown
Exit code 2 - show stderr to model and block tool call
Other exit codes - show stderr to user only but continue with tool call`,
      matcherMetadata: { fieldToMatch: "tool_name", values: n },
    },
    PostToolUse: {
      summary: "After tool execution",
      description: `Input to command is JSON with fields "inputs" (tool call arguments) and "response" (tool call response).
Exit code 0 - stdout shown in transcript mode (ctrl+o)
Exit code 2 - show stderr to model immediately
Other exit codes - show stderr to user only`,
      matcherMetadata: { fieldToMatch: "tool_name", values: n },
    },
    PostToolUseFailure: {
      summary: "After tool execution fails",
      description: `Input to command is JSON with tool_name, tool_input, tool_use_id, error, error_type, is_interrupt, and is_timeout.
Exit code 0 - stdout shown in transcript mode (ctrl+o)
Exit code 2 - show stderr to model immediately
Other exit codes - show stderr to user only`,
      matcherMetadata: { fieldToMatch: "tool_name", values: n },
    },
    PostToolBatch: {
      summary: "After a batch of tool calls resolves",
      description: `Fires once after every tool call in a batch has resolved, before the next model request. Input includes tool_calls (array of {tool_name, tool_input, tool_use_id, tool_response}).
Return additionalContext via hookSpecificOutput to inject context once for the whole batch.
Exit code 2 - stop the agentic loop (stderr shown to user only)
Other exit codes - show stderr to user only`,
    },
    PermissionDenied: {
      summary: "After auto mode classifier denies a tool call",
      description: `Input to command is JSON with tool_name, tool_input, tool_use_id, and reason.
Return {"hookSpecificOutput":{"hookEventName":"PermissionDenied","retry":true}} to tell the model it may retry.
Exit code 0 - stdout shown in transcript mode (ctrl+o)
Other exit codes - show stderr to user only`,
      matcherMetadata: { fieldToMatch: "tool_name", values: n },
    },
    Notification: {
      summary: "When notifications are sent",
      description: `Input to command is JSON with notification message and type.
Exit code 0 - stdout/stderr not shown
Other exit codes - show stderr to user only`,
      matcherMetadata: {
        fieldToMatch: "notification_type",
        values: [...NOTIFICATION_TYPES, "elicitation_complete", "elicitation_response"],
      },
    },
    UserPromptSubmit: {
      summary: "When the user submits a prompt",
      description: `Input to command is JSON with original user prompt text.
Exit code 0 - stdout shown to Claude
Exit code 2 - block processing, erase original prompt, and show stderr to user only
Other exit codes - show stderr to user only`,
    },
    UserPromptExpansion: {
      summary: "When a user-typed slash command expands into a prompt",
      description: `Input to command is JSON with expansion_type, command_name, command_args, command_source, and original prompt.
Exit code 0 - stdout shown to Claude
Exit code 2 - block expansion and show stderr to user only
Other exit codes - show stderr to user only`,
      matcherMetadata: { fieldToMatch: "command_name", values: [] },
    },
    SessionStart: {
      summary: "When a new session is started",
      description: `Input to command is JSON with session start source.
Exit code 0 - stdout shown to Claude
Exit code 2 - show stderr to user only
Other exit codes - show stderr to user only`,
      matcherMetadata: {
        fieldToMatch: "source",
        values: ["startup", "resume", "clear", "compact", "fork"],
      },
    },
    Stop: {
      summary: "Right before Claude concludes its response",
      description: `Exit code 0 - stdout/stderr not shown
Exit code 2 - show stderr to model and continue conversation
Other exit codes - show stderr to user only`,
    },
    StopFailure: {
      summary: "When the turn ends due to an API error",
      description:
        "Fires instead of Stop when an API error (rate limit, auth failure, etc.) ended the turn. Fire-and-forget \u2014 hook output and exit codes are ignored.",
      matcherMetadata: {
        fieldToMatch: "error",
        values: [
          "rate_limit",
          "overloaded",
          "authentication_failed",
          "oauth_org_not_allowed",
          ...(isAccountOnHoldEnabled() ? ["account_on_hold"] : []),
          "billing_error",
          "invalid_request",
          "model_not_found",
          "server_error",
          "max_output_tokens",
          "unknown",
        ],
      },
    },
    SubagentStart: {
      summary: "When a subagent (Agent tool call) is started",
      description: `Input to command is JSON with agent_id and agent_type.
Exit code 0 - JSON additionalContext shown to subagent
Exit code 2 - show stderr to user only
Other exit codes - show stderr to user only`,
      matcherMetadata: { fieldToMatch: "agent_type", values: [] },
    },
    SubagentStop: {
      summary:
        "Right before a subagent (Agent tool call) concludes its response",
      description: `Input to command is JSON with agent_id, agent_type, and agent_transcript_path.
Exit code 0 - stdout/stderr not shown
Exit code 2 - show stderr to subagent and continue having it run
Other exit codes - show stderr to user only`,
      matcherMetadata: { fieldToMatch: "agent_type", values: [] },
    },
    PreCompact: {
      summary: "Before conversation compaction",
      description: `Input to command is JSON with compaction details.
Exit code 0 - stdout appended as custom compact instructions
Exit code 2 - block compaction
Other exit codes - show stderr to user only but continue with compaction`,
      matcherMetadata: { fieldToMatch: "trigger", values: ["manual", "auto"] },
    },
    PostCompact: {
      summary: "After conversation compaction",
      description: `Input to command is JSON with compaction details and the summary.
Exit code 0 - stdout shown to user
Other exit codes - show stderr to user only`,
      matcherMetadata: { fieldToMatch: "trigger", values: ["manual", "auto"] },
    },
    PreModelSwitch: {
      summary:
        "Before a requested model switch (/model, model picker, set_model)",
      description: `Input to command is JSON with from_model, to_model, requested_model, source, context_tokens and the estimated re-cache cost.
Exit code 0 - switch proceeds; JSON permissionDecision allow/deny/ask as for PreToolUse
Exit code 2 - block the switch and show stderr to user
Other exit codes - show stderr to user only and continue`,
      matcherMetadata: { fieldToMatch: "to_model", values: [] },
    },
    PostModelSwitch: {
      summary: "After the session model changes (any cause)",
      description: `Input to command is JSON with from_model, to_model, requested_model, source, context_tokens and the estimated re-cache cost.
Exit code 0 - stdout shown to Claude on the next request
Other exit codes - show stderr to user only`,
      matcherMetadata: { fieldToMatch: "to_model", values: [] },
    },
    SessionEnd: {
      summary: "When a session is ending",
      description: `Input to command is JSON with session end reason.
Exit code 0 - command completes successfully
Other exit codes - show stderr to user only`,
      matcherMetadata: { fieldToMatch: "reason", values: [...SESSION_END_REASONS] },
    },
    PermissionRequest: {
      summary: "When a permission dialog is displayed",
      description: `Input to command is JSON with tool_name, tool_input, and tool_use_id.
Output JSON with hookSpecificOutput containing decision to allow or deny.
Exit code 0 - use hook decision if provided
Other exit codes - show stderr to user only`,
      matcherMetadata: { fieldToMatch: "tool_name", values: n },
    },
    Setup: {
      summary: "Repo setup hooks for init and maintenance",
      description: `Input to command is JSON with trigger (init or maintenance).
Exit code 0 - JSON additionalContext shown to Claude
Exit code 2 - show stderr to user only
Other exit codes - show stderr to user only`,
      matcherMetadata: {
        fieldToMatch: "trigger",
        values: ["init", "maintenance"],
      },
    },
    TeammateIdle: {
      summary: "When a teammate is about to go idle",
      description: `Input to command is JSON with teammate_name and team_name.
Exit code 0 - stdout/stderr not shown
Exit code 2 - show stderr to teammate and prevent idle (teammate continues working)
Other exit codes - show stderr to user only`,
    },
    TaskCreated: {
      summary: "When a task is being created",
      description: `Input to command is JSON with task_id, task_subject, task_description, teammate_name, and team_name.
Exit code 0 - stdout/stderr not shown
Exit code 2 - show stderr to model and prevent task creation
Other exit codes - show stderr to user only`,
    },
    TaskCompleted: {
      summary: "When a task is being marked as completed",
      description: `Input to command is JSON with task_id, task_subject, task_description, teammate_name, and team_name.
Exit code 0 - stdout/stderr not shown
Exit code 2 - show stderr to model and prevent task completion
Other exit codes - show stderr to user only`,
    },
    Elicitation: {
      summary: "When an MCP server requests user input (elicitation)",
      description: `Input to command is JSON with mcp_server_name, message, and requested_schema.
Output JSON with hookSpecificOutput containing action (accept/decline/cancel) and optional content.
Exit code 0 - use hook response if provided
Exit code 2 - deny the elicitation
Other exit codes - show stderr to user only`,
      matcherMetadata: { fieldToMatch: "mcp_server_name", values: [] },
    },
    ElicitationResult: {
      summary: "After a user responds to an MCP elicitation",
      description: `Input to command is JSON with mcp_server_name, action, content, mode, and elicitation_id.
Output JSON with hookSpecificOutput containing optional action and content to override the response.
Exit code 0 - use hook response if provided
Exit code 2 - block the response (action becomes decline)
Other exit codes - show stderr to user only`,
      matcherMetadata: { fieldToMatch: "mcp_server_name", values: [] },
    },
    ConfigChange: {
      summary: "When configuration files change during a session",
      description: `Input to command is JSON with source (user_settings, project_settings, local_settings, policy_settings, skills) and file_path.
Exit code 0 - allow the change
Exit code 2 - block the change from being applied to the session
Other exit codes - show stderr to user only`,
      matcherMetadata: {
        fieldToMatch: "source",
        values: [
          "user_settings",
          "project_settings",
          "local_settings",
          "policy_settings",
          "skills",
        ],
      },
    },
    InstructionsLoaded: {
      summary: "When an instruction file (CLAUDE.md or rule) is loaded",
      description: `Input to command is JSON with file_path, memory_type (User, Project, Local, Managed), load_reason (session_start, nested_traversal, path_glob_match, include, compact), globs (optional \u2014 the paths: frontmatter patterns that matched), trigger_file_path (optional \u2014 the file Claude touched that caused the load), and parent_file_path (optional \u2014 the file that @-included this one).
Exit code 0 - command completes successfully
Other exit codes - show stderr to user only
This hook is observability-only and does not support blocking.`,
      matcherMetadata: {
        fieldToMatch: "load_reason",
        values: [
          "session_start",
          "nested_traversal",
          "path_glob_match",
          "include",
          "compact",
        ],
      },
    },
    WorktreeCreate: {
      summary: "Create an isolated worktree for VCS-agnostic isolation",
      description: `Input to command is JSON with name (suggested worktree slug).
Stdout should contain the absolute path to the created worktree directory.
Exit code 0 - worktree created successfully
Other exit codes - worktree creation failed`,
    },
    WorktreeRemove: {
      summary: "Remove a previously created worktree",
      description: `Input to command is JSON with worktree_path (absolute path to worktree).
Exit code 0 - worktree removed successfully
Other exit codes - show stderr to user only`,
    },
    CwdChanged: {
      summary: "After the working directory changes",
      description: `Input to command is JSON with old_cwd and new_cwd.
CLAUDE_ENV_FILE is set \u2014 write bash exports there to apply env to subsequent BashTool commands.
Hook output can include hookSpecificOutput.watchPaths (array of absolute paths) to register with the FileChanged watcher.
Exit code 0 - command completes successfully
Other exit codes - show stderr to user only`,
    },
    FileChanged: {
      summary: "When a watched file changes",
      description: `Input to command is JSON with file_path and event (change, add, unlink).
CLAUDE_ENV_FILE is set \u2014 write bash exports there to apply env to subsequent BashTool commands.
The matcher field specifies filenames to watch in the current directory (e.g. ".envrc|.env").
Hook output can include hookSpecificOutput.watchPaths (array of absolute paths) to dynamically update the watch list.
Exit code 0 - command completes successfully
Other exit codes - show stderr to user only`,
    },
    DirectoryAdded: {
      summary: "After a working directory is added mid-session",
      description: `Fires after /add-dir or the register_repo_root SDK control request registers a new working directory, after the sandbox configuration has been refreshed \u2014 so sandboxed tools and permission state already see the new directory (hook commands themselves run unsandboxed).
Input to command is JSON with directory (absolute path) and source ("slash_command" or "register_repo_root").
Exit code 0 - command completes successfully
Other exit codes - stderr is debug-logged on both paths; for /add-dir, a failure count is summarized to Claude and hook systemMessage output reaches Claude as bounded context; for register_repo_root, everything is debug-logged only`,
      matcherMetadata: {
        fieldToMatch: "source",
        values: ["slash_command", "register_repo_root"],
      },
    },
    MessageDisplay: {
      summary: "While assistant message text is displayed",
      description: `Input to command is JSON with turn_id, message_id, index, final, and delta (the newly completed lines).
Output JSON with hookSpecificOutput containing displayContent to replace the delta on screen.
Display-only: the stored message and what the model sees are untouched.
Exit code 0 - use hook response if provided
Other exit codes - display the original delta`,
    },
  };
}
function zo(n, a) {
  let s = {
      PreToolUse: {},
      PostToolUse: {},
      PostToolUseFailure: {},
      PostToolBatch: {},
      PermissionDenied: {},
      Notification: {},
      UserPromptSubmit: {},
      UserPromptExpansion: {},
      SessionStart: {},
      SessionEnd: {},
      Stop: {},
      StopFailure: {},
      SubagentStart: {},
      SubagentStop: {},
      PreCompact: {},
      PostCompact: {},
      PreModelSwitch: {},
      PostModelSwitch: {},
      PermissionRequest: {},
      Setup: {},
      TeammateIdle: {},
      TaskCreated: {},
      TaskCompleted: {},
      Elicitation: {},
      ElicitationResult: {},
      ConfigChange: {},
      WorktreeCreate: {},
      WorktreeRemove: {},
      InstructionsLoaded: {},
      CwdChanged: {},
      FileChanged: {},
      DirectoryAdded: {},
      MessageDisplay: {},
    },
    g = bo(a);
  listConfiguredHooks(n).forEach((w) => {
    let c = s[w.event];
    if (c) {
      let y = g[w.event].matcherMetadata !== void 0 ? w.matcher || "" : "";
      if (!c[y]) c[y] = [];
      c[y].push(w);
    }
  });
  let k = LL();
  if (k)
    for (let [w, c] of Object.entries(k)) {
      let y = w,
        S = s[y];
      if (!S) continue;
      for (let R of c) {
        let I = R.matcher || "";
        if ("pluginRoot" in R) {
          S[I] ??= [];
          for (let q of R.hooks)
            S[I].push({
              event: y,
              config: q,
              matcher: R.matcher,
              source: "pluginHook",
              pluginName: R.pluginId,
            });
        }
      }
    }
  return s;
}
function Ko(n, a) {
  let s = Object.keys(n[a] || {});
  return sortHookEventsBySource(s, n, a);
}
function Xo(n, a, s) {
  let g = s ?? "";
  return n[a]?.[g] ?? [];
}
F();
function Ws(Zr, ea) {
  return e(Text, { dimColor: !0, children: Zr }, ea);
}
function Js(oa, ta) {
  return e(Text, { dimColor: !0, children: oa }, `w${ta}`);
}
var Mn = 40,
  On = 3,
  In = 24;
function Je(Vr) {
  let Co = _(9),
    { summaryPromise: Cn, savedLine: Qo } = Vr,
    Is;
  if (Co[0] === MEMO_CACHE_SENTINEL)
    ((Is = r(Text, { color: "suggestion", children: [figures.info, " Cloud session"] })),
      (Co[0] = Is));
  else Is = Co[0];
  let Zo;
  if (Co[1] !== Qo)
    ((Zo = Qo !== void 0 && e(Text, { color: "success", children: Qo })),
      (Co[1] = Qo),
      (Co[2] = Zo));
  else Zo = Co[2];
  let Ps;
  if (Co[3] === MEMO_CACHE_SENTINEL)
    ((Ps = e(Text, {
      dimColor: !0,
      children: "Checking this machine's hooks\u2026",
    })),
      (Co[3] = Ps));
  else Ps = Co[3];
  let ot;
  if (Co[4] !== Cn)
    ((ot = e(Dn, { fallback: Ps, children: e(yt, { summaryPromise: Cn }) })),
      (Co[4] = Cn),
      (Co[5] = ot));
  else ot = Co[5];
  let Ts;
  if (Co[6] !== Zo || Co[7] !== ot)
    ((Ts = r(Box, { flexDirection: "column", children: [Is, Zo, ot] })),
      (Co[6] = Zo),
      (Co[7] = ot),
      (Co[8] = Ts));
  else Ts = Co[8];
  return Ts;
}
function yt(zr) {
  let se = _(26),
    { summaryPromise: Kr } = zr,
    H = kn(Kr),
    xo = Math.min(Mn, Math.max(On, useTerminalSize().rows - In)),
    Eo = H.consent;
  if (Eo === "off") {
    let Me;
    if (se[0] === MEMO_CACHE_SENTINEL)
      ((Me = e(Text, {
        dimColor: !0,
        children:
          "Hooks from this machine's settings are not forwarded to this cloud session (hooks committed to the repository still run from the cloud's own copy).",
      })),
        (se[0] = Me));
    else Me = se[0];
    return Me;
  }
  if (Eo === "remote_host") {
    let Me;
    if (se[1] === MEMO_CACHE_SENTINEL)
      ((Me = e(Text, {
        dimColor: !0,
        children:
          "The hooks below are this machine's; this remote session runs the hooks configured on its own host.",
      })),
        (se[1] = Me));
    else Me = se[1];
    return Me;
  }
  let Me;
  if (se[2] === MEMO_CACHE_SENTINEL)
    ((Me = e(Text, {
      dimColor: !0,
      children:
        "The hooks below are configured on this machine, in your user settings, this checkout's settings.local.json or a --settings file. Each row says where that hook runs for this cloud session \u2014 on this machine when the session asks, as a vetted copy inside the cloud, or not at all; hooks committed to the repository run from the cloud's own copy of it.",
    })),
      (se[2] = Me));
  else Me = se[2];
  let tt;
  if (
    se[3] !== Eo ||
    se[4] !== xo ||
    se[5] !== H.rows ||
    se[6] !== H.unavailableReason
  )
    ((tt =
      H.unavailableReason !== void 0
        ? r(Text, {
            dimColor: !0,
            children: [
              "None of this machine's hooks are offered (",
              H.unavailableReason,
              ").",
            ],
          })
        : H.rows.length === 0
          ? e(Text, {
              dimColor: !0,
              children: "This machine has no hooks a cloud session could use.",
            })
          : r(N, {
              children: [
                H.rows
                  .slice(0, xo)
                  .map((Xr, Qr) => e(vt, { row: Xr, consent: Eo }, Qr)),
                H.rows.length > xo &&
                  r(Text, {
                    dimColor: !0,
                    children: ["\u2026and ", H.rows.length - xo, " more."],
                  }),
              ],
            })),
      (se[3] = Eo),
      (se[4] = xo),
      (se[5] = H.rows),
      (se[6] = H.unavailableReason),
      (se[7] = tt));
  else tt = se[7];
  let nt;
  if (se[8] !== H.withheld)
    ((nt = H.withheld ?? []), (se[8] = H.withheld), (se[9] = nt));
  else nt = se[9];
  let st;
  if (se[10] !== nt) ((st = nt.map(Ws)), (se[10] = nt), (se[11] = st));
  else st = se[11];
  let it;
  if (se[12] !== H.writableSources)
    ((it = H.writableSources ?? []),
      (se[12] = H.writableSources),
      (se[13] = it));
  else it = se[13];
  let rt;
  if (se[14] !== it) ((rt = it.map(Js)), (se[14] = it), (se[15] = rt));
  else rt = se[15];
  let at;
  if (se[16] !== H.keptFromLaunch)
    ((at =
      H.keptFromLaunch !== void 0 &&
      e(Text, { color: "warning", children: H.keptFromLaunch })),
      (se[16] = H.keptFromLaunch),
      (se[17] = at));
  else at = se[17];
  let dt;
  if (se[18] !== H) ((dt = e(wt, { summary: H })), (se[18] = H), (se[19] = dt));
  else dt = se[19];
  let Ns;
  if (
    se[20] !== tt ||
    se[21] !== st ||
    se[22] !== rt ||
    se[23] !== at ||
    se[24] !== dt
  )
    ((Ns = r(Box, {
      flexDirection: "column",
      children: [
        Me,
        r(Box, {
          flexDirection: "column",
          marginTop: 1,
          children: [tt, st, rt, at, dt],
        }),
      ],
    })),
      (se[20] = tt),
      (se[21] = st),
      (se[22] = rt),
      (se[23] = at),
      (se[24] = dt),
      (se[25] = Ns));
  else Ns = se[25];
  return Ns;
}
function wt(na) {
  let fe = _(16),
    { summary: Q } = na,
    Ds;
  if (fe[0] !== Q.consentLocation)
    ((Ds = sanitizeForDisplay(Q.consentLocation)), (fe[0] = Q.consentLocation), (fe[1] = Ds));
  else Ds = fe[1];
  let so = Ds;
  switch (Q.consent) {
    case "accepted": {
      let Oe;
      if (fe[2] === MEMO_CACHE_SENTINEL)
        ((Oe = e(Text, { bold: !0, children: "on" })), (fe[2] = Oe));
      else Oe = fe[2];
      let le;
      if (fe[3] !== so)
        ((le = r(Text, {
          dimColor: !0,
          children: ["(saved in ", so, "; change it below)"],
        })),
          (fe[3] = so),
          (fe[4] = le));
      else le = fe[4];
      let lt;
      if (fe[5] !== Q.standing || fe[6] !== Q.standingIsIdle)
        ((lt =
          Q.standing !== void 0 &&
          (Q.standingIsIdle
            ? r(Text, {
                dimColor: !0,
                children: [" \u2014 for this session: ", Q.standing],
              })
            : r(Text, {
                color: "warning",
                children: [" ", "\u2014 for this session: ", Q.standing],
              }))),
          (fe[5] = Q.standing),
          (fe[6] = Q.standingIsIdle),
          (fe[7] = lt));
      else lt = fe[7];
      let As;
      if (fe[8] !== le || fe[9] !== lt)
        ((As = r(Text, {
          children: ["Hooks from this machine: ", Oe, " ", le, lt],
        })),
          (fe[8] = le),
          (fe[9] = lt),
          (fe[10] = As));
      else As = fe[10];
      return As;
    }
    case "declined": {
      let Oe;
      if (fe[11] === MEMO_CACHE_SENTINEL)
        ((Oe = e(Text, { bold: !0, children: "off" })), (fe[11] = Oe));
      else Oe = fe[11];
      let le;
      if (fe[12] !== so)
        ((le = r(Text, {
          children: [
            "Hooks from this machine: ",
            Oe,
            " ",
            r(Text, {
              dimColor: !0,
              children: ["(saved in ", so, "; change it below)"],
            }),
          ],
        })),
          (fe[12] = so),
          (fe[13] = le));
      else le = fe[13];
      return le;
    }
    case "unset": {
      let Oe;
      if (fe[14] === MEMO_CACHE_SENTINEL)
        ((Oe = e(Text, { bold: !0, children: "not decided" })), (fe[14] = Oe));
      else Oe = fe[14];
      let le;
      if (fe[15] === MEMO_CACHE_SENTINEL)
        ((le = r(Text, {
          children: [
            "Hooks from this machine: ",
            Oe,
            " ",
            e(Text, {
              dimColor: !0,
              children:
                "(choose \u201CDecide whether cloud sessions run this machine's hooks\u201D below; nothing from this machine runs for them until you do)",
            }),
          ],
        })),
          (fe[15] = le));
      else le = fe[15];
      return le;
    }
    case "off":
    case "remote_host": {
      return null;
    }
  }
}
function Pn(n, a) {
  switch (n) {
    case "cloud":
      return a === "accepted"
        ? "runs in the cloud"
        : a === "declined"
          ? "would run in the cloud (hooks from this machine are off)"
          : "will run in the cloud once you allow it";
    case "local":
      return "stays local";
    case "here":
      return a === "accepted"
        ? "runs here when the session asks"
        : a === "declined"
          ? "does not run (hooks from this machine are off)"
          : "will run here once you allow it";
  }
}
function vt(sa) {
  let We = _(21),
    { row: P, consent: mt } = sa,
    xn =
      P.matcher !== void 0 && P.matcher !== ""
        ? `${P.event}:${P.matcher}`
        : P.event;
  const En = P.where === "local" || mt !== "accepted" ? "pending" : "success";
  let ut;
  if (We[0] !== En)
    ((ut = e(StatusIndicator, { status: En, withSpace: !0 })), (We[0] = En), (We[1] = ut));
  else ut = We[1];
  let ht;
  if (We[2] !== P.label)
    ((ht = e(Text, { bold: !0, children: P.label })),
      (We[2] = P.label),
      (We[3] = ht));
  else ht = We[3];
  const Hn = Fe[P.source];
  let pt;
  if (We[4] !== xn || We[5] !== Hn.tag)
    ((pt = r(Text, {
      dimColor: !0,
      children: ["\xB7 ", xn, " \xB7 ", Hn.tag, " \xB7"],
    })),
      (We[4] = xn),
      (We[5] = Hn.tag),
      (We[6] = pt));
  else pt = We[6];
  let ft;
  if (We[7] !== mt || We[8] !== P.where)
    ((ft = Pn(P.where, mt)), (We[7] = mt), (We[8] = P.where), (We[9] = ft));
  else ft = We[9];
  let gt;
  if (We[10] !== P.why)
    ((gt =
      P.why !== void 0 &&
      r(Text, { dimColor: !0, children: [" \u2014 ", P.why] })),
      (We[10] = P.why),
      (We[11] = gt));
  else gt = We[11];
  let kt;
  if (We[12] !== P.fromWritableFile)
    ((kt =
      P.fromWritableFile &&
      r(Text, {
        dimColor: !0,
        children: [
          " ",
          "(its settings file can be written by the cloud session; what was registered when you attached is what runs)",
        ],
      })),
      (We[12] = P.fromWritableFile),
      (We[13] = kt));
  else kt = We[13];
  let Fs;
  if (
    We[14] !== ut ||
    We[15] !== ht ||
    We[16] !== pt ||
    We[17] !== ft ||
    We[18] !== gt ||
    We[19] !== kt
  )
    ((Fs = r(Text, { children: [ut, ht, " ", pt, " ", ft, gt, kt] })),
      (We[14] = ut),
      (We[15] = ht),
      (We[16] = pt),
      (We[17] = ft),
      (We[18] = gt),
      (We[19] = kt),
      (We[20] = Fs));
  else Fs = We[20];
  return Fs;
}
var Ro = "__decide_cloud_hooks__";
function Mo(pa) {
  let Z = _(33),
    {
      hookEventMetadata: Tn,
      hooksByEvent: Nn,
      totalHooksCount: _t,
      restrictedByPolicy: An,
      suspendedBySafeMode: Ho,
      cloudSessionPanel: Fn,
      onDecideCloudHooks: ro,
      onSelectEvent: Wn,
      onCancel: ao,
    } = pa,
    js;
  if (Z[0] !== _t) ((js = pluralize(_t, "hook")), (Z[0] = _t), (Z[1] = js));
  else js = Z[1];
  let Jn = `${_t} ${js} configured`,
    St;
  if (Z[2] !== Ho)
    ((St =
      Ho &&
      r(Box, {
        flexDirection: "column",
        children: [
          r(Text, { color: "warning", children: [figures.info, " Safe mode"] }),
          r(Text, {
            dimColor: !0,
            children: [
              "Hooks from settings files are suspended and will not run this session",
              Ho.managedHooksStillApply
                ? " (managed policy hooks still apply)"
                : "",
              "; session hooks created by /goal, agents, and skills still run. Settings edits save but don't load until safe mode is off.",
              " ",
              capitalize(Ho.exitHint),
              " to re-enable.",
            ],
          }),
        ],
      })),
      (Z[2] = Ho),
      (Z[3] = St));
  else St = Z[3];
  let bt;
  if (Z[4] !== An)
    ((bt =
      An &&
      r(Box, {
        flexDirection: "column",
        children: [
          r(Text, {
            color: "suggestion",
            children: [figures.info, " Hooks Restricted by Policy"],
          }),
          e(Text, {
            dimColor: !0,
            children:
              "Only hooks from managed settings can run. User-defined hooks from ~/.claude/settings.json, .claude/settings.json, and .claude/settings.local.json are blocked.",
          }),
        ],
      })),
      (Z[4] = An),
      (Z[5] = bt));
  else bt = Z[5];
  let Bs;
  if (Z[6] === MEMO_CACHE_SENTINEL)
    ((Bs = e(Box, {
      flexDirection: "column",
      children: r(Text, {
        dimColor: !0,
        children: [
          figures.info,
          " This menu is read-only. To add or modify hooks, edit settings.json directly or ask Claude.",
          " ",
          e(Link, {
            url: "https://code.claude.com/docs/en/hooks",
            children: "Learn more",
          }),
        ],
      }),
    })),
      (Z[6] = Bs));
  else Bs = Z[6];
  let Ct;
  if (Z[7] !== ro || Z[8] !== Wn)
    ((Ct = (Ls) => {
      if (Ls === Ro) {
        ro?.();
        return;
      }
      Wn(Ls);
    }),
      (Z[7] = ro),
      (Z[8] = Wn),
      (Z[9] = Ct));
  else Ct = Z[9];
  let xt;
  if (Z[10] !== ro)
    ((xt = ro
      ? [
          {
            label: e(Text, {
              color: "suggestion",
              children:
                "Decide whether cloud sessions run this machine's hooks\u2026",
            }),
            value: Ro,
            description:
              "Saved for this machine; you can change it here any time",
          },
        ]
      : []),
      (Z[10] = ro),
      (Z[11] = xt));
  else xt = Z[11];
  let Et;
  if (Z[12] !== Tn) ((Et = Object.entries(Tn)), (Z[12] = Tn), (Z[13] = Et));
  else Et = Z[13];
  let Ht;
  if (Z[14] !== Nn || Z[15] !== Et)
    ((Ht = Et.map((co) => {
      let [Rt, fa] = co;
      let $s = Nn[Rt] || 0;
      return {
        label:
          $s > 0
            ? r(Text, {
                children: [
                  Rt,
                  " ",
                  r(Text, { color: "suggestion", children: ["(", $s, ")"] }),
                ],
              })
            : Rt,
        value: Rt,
        description: fa.summary,
      };
    })),
      (Z[14] = Nn),
      (Z[15] = Et),
      (Z[16] = Ht));
  else Ht = Z[16];
  let co;
  if (Z[17] !== xt || Z[18] !== Ht)
    ((co = [...xt, ...Ht]), (Z[17] = xt), (Z[18] = Ht), (Z[19] = co));
  else co = Z[19];
  let Mt;
  if (Z[20] !== ao || Z[21] !== Ct || Z[22] !== co)
    ((Mt = e(Box, {
      flexDirection: "column",
      children: e(Select, { onChange: Ct, onCancel: ao, options: co }),
    })),
      (Z[20] = ao),
      (Z[21] = Ct),
      (Z[22] = co),
      (Z[23] = Mt));
  else Mt = Z[23];
  let Ot;
  if (Z[24] !== Fn || Z[25] !== Mt || Z[26] !== St || Z[27] !== bt)
    ((Ot = r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [Fn, St, bt, Bs, Mt],
    })),
      (Z[24] = Fn),
      (Z[25] = Mt),
      (Z[26] = St),
      (Z[27] = bt),
      (Z[28] = Ot));
  else Ot = Z[28];
  let Us;
  if (Z[29] !== ao || Z[30] !== Jn || Z[31] !== Ot)
    ((Us = e(de, { title: "Hooks", subtitle: Jn, onCancel: ao, children: Ot })),
      (Z[29] = ao),
      (Z[30] = Jn),
      (Z[31] = Ot),
      (Z[32] = Us));
  else Us = Z[32];
  return Us;
}
function Vs(qe, Oa) {
  return {
    label: `[${qe.config.type}] ${formatHookLabel(qe.config)}`,
    value: Oa.toString(),
    description:
      qe.source === "pluginHook" && qe.pluginName
        ? `${getHookSourceHeader(qe.source)} (${escapeAllControlCharacters(qe.pluginName)})`
        : getHookSourceHeader(qe.source),
  };
}
function Oo(Ha) {
  let Le = _(24),
    {
      selectedEvent: It,
      selectedMatcher: Pt,
      hooksForSelectedMatcher: Be,
      hookEventMetadata: ge,
      onSelect: jn,
      onCancel: ke,
    } = Ha,
    qs;
  if (Le[0] !== ge.matcherMetadata || Le[1] !== It || Le[2] !== Pt)
    ((qs =
      ge.matcherMetadata !== void 0
        ? `${It} - Matcher: ${Pt ? escapeAllControlCharacters(Pt) : "(all)"}`
        : It),
      (Le[0] = ge.matcherMetadata),
      (Le[1] = It),
      (Le[2] = Pt),
      (Le[3] = qs));
  else qs = Le[3];
  let lo = qs;
  if (Be.length === 0) {
    let Tt, $e;
    if (Le[4] === MEMO_CACHE_SENTINEL)
      ((Tt = e(KeybindingHint, { chord: "escape", action: "go back" })),
        ($e = e(EmptyStateMessage, {
          hint: "To add hooks, edit settings.json directly or ask Claude",
          children: "No hooks configured for this event",
        })),
        (Le[4] = Tt),
        (Le[5] = $e));
    else ((Tt = Le[4]), ($e = Le[5]));
    let Ue;
    if (Le[6] !== ge.description || Le[7] !== ke || Le[8] !== lo)
      ((Ue = e(de, {
        title: lo,
        subtitle: ge.description,
        onCancel: ke,
        inputGuide: Tt,
        children: $e,
      })),
        (Le[6] = ge.description),
        (Le[7] = ke),
        (Le[8] = lo),
        (Le[9] = Ue));
    else Ue = Le[9];
    return Ue;
  }
  const Tt = ge.description;
  let $e;
  if (Le[10] !== Be) (($e = Be.map(Vs)), (Le[10] = Be), (Le[11] = $e));
  else $e = Le[11];
  let Ue;
  if (Le[12] !== Be || Le[13] !== jn)
    ((Ue = (Ra) => {
      let Ma = parseInt(Ra, 10);
      let Gs = Be[Ma];
      if (Gs) jn(Gs);
    }),
      (Le[12] = Be),
      (Le[13] = jn),
      (Le[14] = Ue));
  else Ue = Le[14];
  let Nt;
  if (Le[15] !== ke || Le[16] !== $e || Le[17] !== Ue)
    ((Nt = e(Box, {
      flexDirection: "column",
      children: e(Select, { options: $e, onChange: Ue, onCancel: ke }),
    })),
      (Le[15] = ke),
      (Le[16] = $e),
      (Le[17] = Ue),
      (Le[18] = Nt));
  else Nt = Le[18];
  let Ys;
  if (
    Le[19] !== ge.description ||
    Le[20] !== ke ||
    Le[21] !== Nt ||
    Le[22] !== lo
  )
    ((Ys = e(de, { title: lo, subtitle: Tt, onCancel: ke, children: Nt })),
      (Le[19] = ge.description),
      (Le[20] = ke),
      (Le[21] = Nt),
      (Le[22] = lo),
      (Le[23] = Ys));
  else Ys = Le[23];
  return Ys;
}
F();
function Zs(Ya) {
  return Ya.source;
}
function ei(uo) {
  let Va = uo.sources.map(getHookSourceInlineLabel).join(", ");
  let za = uo.matcher ? escapeAllControlCharacters(uo.matcher) : "(all)";
  return {
    label: `[${Va}] ${za}`,
    value: uo.matcher,
    description: `${uo.hookCount} ${pluralize(uo.hookCount, "hook")}`,
  };
}
function Po(Ua) {
  let Ie = _(26),
    {
      selectedEvent: Ge,
      matchersForSelectedEvent: Dt,
      hooksByEventAndMatcher: Io,
      eventDescription: mo,
      onSelect: Bn,
      onCancel: we,
    } = Ua,
    zs;
  if (Ie[0] !== Io || Ie[1] !== Dt || Ie[2] !== Ge) {
    let me;
    if (Ie[4] !== Io || Ie[5] !== Ge)
      ((me = (Ks) => {
        let Xs = Io[Ge]?.[Ks] || [];
        let qa = dedupe(Xs.map(Zs));
        return { matcher: Ks, sources: qa, hookCount: Xs.length };
      }),
        (Ie[4] = Io),
        (Ie[5] = Ge),
        (Ie[6] = me));
    else me = Ie[6];
    zs = Dt.map(me);
    ((Ie[0] = Io), (Ie[1] = Dt), (Ie[2] = Ge), (Ie[3] = zs));
  } else zs = Ie[3];
  let Ln = zs;
  if (Dt.length === 0) {
    const me = `${Ge} - Matchers`;
    let Ve, ze;
    if (Ie[7] === MEMO_CACHE_SENTINEL)
      ((Ve = e(KeybindingHint, { chord: "escape", action: "go back" })),
        (ze = e(EmptyStateMessage, {
          hint: "To add hooks, edit settings.json directly or ask Claude",
          children: "No hooks configured for this event",
        })),
        (Ie[7] = Ve),
        (Ie[8] = ze));
    else ((Ve = Ie[7]), (ze = Ie[8]));
    let Ke;
    if (Ie[9] !== mo || Ie[10] !== we || Ie[11] !== me)
      ((Ke = e(de, {
        title: me,
        subtitle: mo,
        onCancel: we,
        inputGuide: Ve,
        children: ze,
      })),
        (Ie[9] = mo),
        (Ie[10] = we),
        (Ie[11] = me),
        (Ie[12] = Ke));
    else Ke = Ie[12];
    return Ke;
  }
  const me = `${Ge} - Matchers`;
  let Ve;
  if (Ie[13] !== Ln) ((Ve = Ln.map(ei)), (Ie[13] = Ln), (Ie[14] = Ve));
  else Ve = Ie[14];
  let ze;
  if (Ie[15] !== Bn)
    ((ze = (Ga) => {
      Bn(Ga);
    }),
      (Ie[15] = Bn),
      (Ie[16] = ze));
  else ze = Ie[16];
  let Ke;
  if (Ie[17] !== we || Ie[18] !== Ve || Ie[19] !== ze)
    ((Ke = e(Box, {
      flexDirection: "column",
      children: e(Select, { options: Ve, onChange: ze, onCancel: we }),
    })),
      (Ie[17] = we),
      (Ie[18] = Ve),
      (Ie[19] = ze),
      (Ie[20] = Ke));
  else Ke = Ie[20];
  let Qs;
  if (Ie[21] !== mo || Ie[22] !== we || Ie[23] !== me || Ie[24] !== Ke)
    ((Qs = e(de, { title: me, subtitle: mo, onCancel: we, children: Ke })),
      (Ie[21] = mo),
      (Ie[22] = we),
      (Ie[23] = me),
      (Ie[24] = Ke),
      (Ie[25] = Qs));
  else Qs = Ie[25];
  return Qs;
}
function To(rc) {
  let M = _(47),
    { selectedHook: v, eventSupportsMatcher: $n, onCancel: qn } = rc,
    oi;
  if (M[0] === MEMO_CACHE_SENTINEL)
    ((oi = e(KeybindingHint, { chord: "escape", action: "go back" })), (M[0] = oi));
  else oi = M[0];
  let ti;
  if (M[1] === MEMO_CACHE_SENTINEL) ((ti = [{ bold: !0 }, {}]), (M[1] = ti));
  else ti = M[1];
  let ni;
  if (M[2] === MEMO_CACHE_SENTINEL) ((ni = e(N, { children: "Event:" })), (M[2] = ni));
  else ni = M[2];
  let At;
  if (M[3] !== v.event)
    ((At = r(Table.Row, { children: [ni, e(Text, { children: v.event })] })),
      (M[3] = v.event),
      (M[4] = At));
  else At = M[4];
  let Ft;
  if (M[5] !== $n || M[6] !== v.matcher)
    ((Ft =
      $n &&
      r(Table.Row, {
        children: [
          e(N, { children: "Matcher:" }),
          e(Text, { children: v.matcher ? escapeAllControlCharacters(v.matcher) : "(all)" }),
        ],
      })),
      (M[5] = $n),
      (M[6] = v.matcher),
      (M[7] = Ft));
  else Ft = M[7];
  let si;
  if (M[8] === MEMO_CACHE_SENTINEL) ((si = e(N, { children: "Type:" })), (M[8] = si));
  else si = M[8];
  let Wt;
  if (M[9] !== v.config.type)
    ((Wt = r(Table.Row, { children: [si, e(Text, { children: v.config.type })] })),
      (M[9] = v.config.type),
      (M[10] = Wt));
  else Wt = M[10];
  let ii;
  if (M[11] === MEMO_CACHE_SENTINEL) ((ii = e(N, { children: "Source:" })), (M[11] = ii));
  else ii = M[11];
  let Jt;
  if (M[12] !== v.source)
    ((Jt = getHookSourceDescription(v.source)), (M[12] = v.source), (M[13] = Jt));
  else Jt = M[13];
  let jt;
  if (M[14] !== Jt)
    ((jt = r(Table.Row, { children: [ii, e(Text, { dimColor: !0, children: Jt })] })),
      (M[14] = Jt),
      (M[15] = jt));
  else jt = M[15];
  let Bt;
  if (M[16] !== v.pluginName)
    ((Bt =
      v.pluginName &&
      r(Table.Row, {
        children: [
          e(N, { children: "Plugin:" }),
          e(Text, { dimColor: !0, children: escapeAllControlCharacters(v.pluginName) }),
        ],
      })),
      (M[16] = v.pluginName),
      (M[17] = Bt));
  else Bt = M[17];
  let Lt;
  if (M[18] !== v.config)
    ((Lt =
      "statusMessage" in v.config &&
      v.config.statusMessage &&
      r(Table.Row, {
        children: [
          e(N, { children: "Status message:" }),
          e(Text, { dimColor: !0, children: escapeAllControlCharacters(v.config.statusMessage) }),
        ],
      })),
      (M[18] = v.config),
      (M[19] = Lt));
  else Lt = M[19];
  let $t;
  if (
    M[20] !== jt ||
    M[21] !== Bt ||
    M[22] !== Lt ||
    M[23] !== At ||
    M[24] !== Ft ||
    M[25] !== Wt
  )
    (($t = r(Table, { columns: ti, children: [At, Ft, Wt, jt, Bt, Lt] })),
      (M[20] = jt),
      (M[21] = Bt),
      (M[22] = Lt),
      (M[23] = At),
      (M[24] = Ft),
      (M[25] = Wt),
      (M[26] = $t));
  else $t = M[26];
  let Ut;
  if (M[27] !== v.config)
    ((Ut = Gn(v.config)), (M[27] = v.config), (M[28] = Ut));
  else Ut = M[28];
  let qt;
  if (M[29] !== Ut)
    ((qt = r(Text, { dimColor: !0, children: [Ut, ":"] })),
      (M[29] = Ut),
      (M[30] = qt));
  else qt = M[30];
  let Gt;
  if (M[31] !== v.config)
    ((Gt =
      v.config.type === "script"
        ? (v.config.file ?? v.config.script ?? "")
        : formatHookTarget(v.config)),
      (M[31] = v.config),
      (M[32] = Gt));
  else Gt = M[32];
  let Yt;
  if (M[33] !== Gt) ((Yt = escapeInvisibleCharacters(Gt)), (M[33] = Gt), (M[34] = Yt));
  else Yt = M[34];
  let Vt;
  if (M[35] !== Yt)
    ((Vt = e(Box, {
      borderStyle: "round",
      borderDimColor: !0,
      paddingLeft: 1,
      paddingRight: 1,
      children: e(Text, { children: Yt }),
    })),
      (M[35] = Yt),
      (M[36] = Vt));
  else Vt = M[36];
  let zt;
  if (M[37] !== qt || M[38] !== Vt)
    ((zt = r(Box, { flexDirection: "column", children: [qt, Vt] })),
      (M[37] = qt),
      (M[38] = Vt),
      (M[39] = zt));
  else zt = M[39];
  let ri;
  if (M[40] === MEMO_CACHE_SENTINEL)
    ((ri = e(Text, {
      dimColor: !0,
      children:
        "To modify or remove this hook, edit settings.json directly or ask Claude to help.",
    })),
      (M[40] = ri));
  else ri = M[40];
  let Kt;
  if (M[41] !== $t || M[42] !== zt)
    ((Kt = r(Box, { flexDirection: "column", gap: 1, children: [$t, zt, ri] })),
      (M[41] = $t),
      (M[42] = zt),
      (M[43] = Kt));
  else Kt = M[43];
  let ai;
  if (M[44] !== qn || M[45] !== Kt)
    ((ai = e(de, {
      title: "Hook details",
      onCancel: qn,
      inputGuide: oi,
      children: Kt,
    })),
      (M[44] = qn),
      (M[45] = Kt),
      (M[46] = ai));
  else ai = M[46];
  return ai;
}
function Gn(n) {
  switch (n.type) {
    case "command":
      return "Command";
    case "prompt":
      return "Prompt";
    case "agent":
      return "Prompt";
    case "http":
      return "URL";
    case "mcp_tool":
      return "MCP tool";
    case "script":
      return n.file !== void 0 ? "Script file" : "Script";
  }
}
function ji(nd) {
  return nd.host;
}
function Bi() {
  return (
    getSettings_DEPRECATED()?.disableAllHooks === !0 && getSettingsForSource("policySettings")?.disableAllHooks === !0
  );
}
function Li() {
  return getSettingsForSource("policySettings")?.allowManagedHooksOnly === !0;
}
function $i(sd) {
  return sd.mcp;
}
function Ui(id) {
  return id.name;
}
function qi(rd, ad) {
  return rd + ad.length;
}
function Gi(cd) {
  return cd.where === "here";
}
function Yi(dd) {
  return dd.where === "cloud";
}
function zi(ld) {
  return ld.label;
}
function dn(Bc) {
  let m = _(133),
    { toolNames: Yn, onExit: Vn } = Bc,
    ci;
  if (m[0] === MEMO_CACHE_SENTINEL) ((ci = { mode: "select-event" }), (m[0] = ci));
  else ci = m[0];
  let [l, B] = d(ci),
    { storageV5: po } = useStorageV5Context(),
    Ce = useSession(ji),
    di;
  if (m[1] !== Ce)
    ((di = () => {
      let li = Mx();
      if (li.workspace !== "remote") {
        return null;
      }
      return li.transcriptSource !== "ccr-api"
        ? "remote_host"
        : deviceHooksProcessMemories.of(Ce).isAttached(he())
          ? "cloud"
          : "off";
    }),
      (m[1] = Ce),
      (m[2] = di));
  else di = m[2];
  let [Xe] = d(di),
    mi;
  if (m[3] !== Xe || m[4] !== Ce || m[5] !== po)
    ((mi = () => {
      if (Xe === null) {
        return null;
      }
      let zn = deviceHooksProcessMemories.of(Ce);
      return Fo({
        launchDir: he(),
        storageV5: po,
        consentPin: zn.consentPin,
        senderMemory: zn.senderFor(he()),
        processMemory: zn,
        forwarding: Xe,
      });
    }),
      (m[3] = Xe),
      (m[4] = Ce),
      (m[5] = po),
      (m[6] = mi));
  else mi = m[6];
  let Xt = mi,
    [ee, Lc] = d(Xt),
    [fo, $c] = d(null),
    [Qt, Uc] = d(Bi),
    [Kn, qc] = d(Li),
    ui;
  if (m[7] === MEMO_CACHE_SENTINEL)
    ((ui = (Gc) => {
      if (Gc === "policySettings") {
        let Yc = getSettings_DEPRECATED()?.disableAllHooks === !0;
        (Uc(Yc && getSettingsForSource("policySettings")?.disableAllHooks === !0),
          qc(getSettingsForSource("policySettings")?.allowManagedHooksOnly === !0));
      }
    }),
      (m[7] = ui));
  else ui = m[7];
  useOnSettingsChange(ui);
  let Zt = l.mode,
    go = "event" in l ? l.event : "PreToolUse",
    Xn = "matcher" in l ? l.matcher : null,
    Qn = useAppStateSelector($i),
    Zn = useSessionHooksRegistry(),
    hi;
  if (m[8] !== Qn.tools || m[9] !== Yn)
    ((hi = [...Yn, ...Qn.tools.map(Ui)]),
      (m[8] = Qn.tools),
      (m[9] = Yn),
      (m[10] = hi));
  else hi = m[10];
  let ko = hi,
    pi;
  if (m[11] !== ko) ((pi = bo(ko)), (m[11] = ko), (m[12] = pi));
  else pi = m[12];
  let j = pi,
    fi;
  if (m[13] !== ko || m[14] !== Zn)
    ((fi = zo(Zn, ko)), (m[13] = ko), (m[14] = Zn), (m[15] = fi));
  else fi = m[15];
  let oe = fi,
    gi;
  if (m[16] !== oe || m[17] !== go)
    ((gi = Ko(oe, go)), (m[16] = oe), (m[17] = go), (m[18] = gi));
  else gi = m[18];
  let es = gi,
    ki;
  if (m[19] !== oe || m[20] !== go || m[21] !== Xn)
    ((ki = Xo(oe, go, Xn)),
      (m[19] = oe),
      (m[20] = go),
      (m[21] = Xn),
      (m[22] = ki));
  else ki = m[22];
  let os = ki,
    wi;
  if (m[23] !== Vn)
    ((wi = () => {
      Vn("Hooks dialog dismissed", { display: "system" });
    }),
      (m[23] = Vn),
      (m[24] = wi));
  else wi = m[24];
  let pe = wi;
  const ts = Zt === "select-event";
  let vi;
  if (m[25] !== ts)
    ((vi = { context: "Confirmation", isActive: ts }),
      (m[25] = ts),
      (m[26] = vi));
  else vi = m[26];
  useKeybinding("confirm:no", pe, vi);
  let _i;
  if (m[27] === MEMO_CACHE_SENTINEL)
    ((_i = () => {
      B({ mode: "select-event" });
    }),
      (m[27] = _i));
  else _i = m[27];
  const ns = Zt === "select-matcher";
  let Si;
  if (m[28] !== ns)
    ((Si = { context: "Confirmation", isActive: ns }),
      (m[28] = ns),
      (m[29] = Si));
  else Si = m[29];
  useKeybinding("confirm:no", _i, Si);
  let bi;
  if (m[30] !== j || m[31] !== l)
    ((bi = () => {
      if ("event" in l) {
        if (j[l.event].matcherMetadata !== void 0)
          B({ mode: "select-matcher", event: l.event });
        else B({ mode: "select-event" });
      }
    }),
      (m[30] = j),
      (m[31] = l),
      (m[32] = bi));
  else bi = m[32];
  const ss = Zt === "select-hook";
  let Ci;
  if (m[33] !== ss)
    ((Ci = { context: "Confirmation", isActive: ss }),
      (m[33] = ss),
      (m[34] = Ci));
  else Ci = m[34];
  useKeybinding("confirm:no", bi, Ci);
  let xi;
  if (m[35] !== l)
    ((xi = () => {
      if (l.mode === "view-hook") {
        let { event: Vc, hook: zc } = l;
        B({ mode: "select-hook", event: Vc, matcher: zc.matcher || "" });
      }
    }),
      (m[35] = l),
      (m[36] = xi));
  else xi = m[36];
  const is = Zt === "view-hook";
  let Ei;
  if (m[37] !== is)
    ((Ei = { context: "Confirmation", isActive: is }),
      (m[37] = is),
      (m[38] = Ei));
  else Ei = m[38];
  useKeybinding("confirm:no", xi, Ei);
  let Ri;
  if (m[39] === MEMO_CACHE_SENTINEL) ((Ri = getSettings_DEPRECATED()), (m[39] = Ri));
  else Ri = m[39];
  let Mi = Ri?.disableAllHooks === !0,
    Oi;
  if (m[40] !== oe) {
    let Ii = {};
    let en = 0;
    for (const [Kc, Xc] of Object.entries(oe)) {
      let Pi = Object.values(Xc).reduce(qi, 0);
      ((Ii[Kc] = Pi), (en = en + Pi), en);
    }
    Oi = { hooksByEvent: Ii, totalHooksCount: en };
    ((m[40] = oe), (m[41] = Oi));
  } else Oi = m[41];
  let { hooksByEvent: rs, totalHooksCount: te } = Oi,
    Ti;
  if (m[42] !== Xe || m[43] !== ee)
    ((Ti =
      ee === null || Xe !== "cloud"
        ? void 0
        : () => {
            ee.then((Qe) => {
              if (Qe.consent === "off" || Qe.consent === "remote_host") {
                return;
              }
              B((as) =>
                as.mode === "cloud-consent" ||
                (as.mode !== "select-event" && !Mi)
                  ? as
                  : {
                      mode: "cloud-consent",
                      offer: {
                        forwarded: countMatching(Qe.rows, Gi),
                        templateNames: Qe.rows.filter(Yi).map(zi),
                      },
                      ...((Qe.consent === "accepted" ||
                        Qe.consent === "declined") && { current: Qe.consent }),
                    },
              );
            });
          }),
      (m[42] = Xe),
      (m[43] = ee),
      (m[44] = Ti));
  else Ti = m[44];
  let Ze = Ti;
  if (Mi && l.mode !== "cloud-consent") {
    let T;
    if (m[45] === MEMO_CACHE_SENTINEL)
      ((T = e(KeybindingHint, { chord: "escape", action: "close" })), (m[45] = T));
    else T = m[45];
    let E;
    if (m[46] !== fo || m[47] !== ee)
      ((E =
        ee !== null && e(Je, { summaryPromise: ee, savedLine: fo ?? void 0 })),
        (m[46] = fo),
        (m[47] = ee),
        (m[48] = E));
    else E = m[48];
    let O;
    if (m[49] !== Ze || m[50] !== pe)
      ((O =
        Ze !== void 0 &&
        e(Select, {
          options: [
            {
              label: e(Text, {
                color: "suggestion",
                children:
                  "Decide whether cloud sessions run this machine's hooks\u2026",
              }),
              value: "decide",
              description:
                "Saved for this machine; you can change it here any time",
            },
          ],
          hideIndexes: !0,
          onChange: () => Ze(),
          onCancel: pe,
        })),
        (m[49] = Ze),
        (m[50] = pe),
        (m[51] = O));
    else O = m[51];
    let W;
    if (m[52] === MEMO_CACHE_SENTINEL)
      ((W = e(Text, { bold: !0, children: "disabled" })), (m[52] = W));
    else W = m[52];
    const Pe = Qt && " by a managed settings file";
    let eo;
    if (m[53] !== te)
      ((eo = e(Text, { bold: !0, children: te })), (m[53] = te), (m[54] = eo));
    else eo = m[54];
    let on;
    if (m[55] !== te) ((on = pluralize(te, "hook")), (m[55] = te), (m[56] = on));
    else on = m[56];
    let tn;
    if (m[57] !== te) ((tn = pluralize(te, "is", "are")), (m[57] = te), (m[58] = tn));
    else tn = m[58];
    let nn;
    if (m[59] !== Pe || m[60] !== eo || m[61] !== on || m[62] !== tn)
      ((nn = r(Text, {
        children: [
          "All hooks are currently ",
          W,
          Pe,
          ". You have",
          " ",
          eo,
          " configured",
          " ",
          on,
          " that",
          " ",
          tn,
          " not running.",
        ],
      })),
        (m[59] = Pe),
        (m[60] = eo),
        (m[61] = on),
        (m[62] = tn),
        (m[63] = nn));
    else nn = m[63];
    let Ni, Di, Ai, Fi;
    if (m[64] === MEMO_CACHE_SENTINEL)
      ((Ni = e(Box, {
        marginTop: 1,
        children: e(Text, { dimColor: !0, children: "When hooks are disabled:" }),
      })),
        (Di = e(Text, {
          dimColor: !0,
          children: "\xB7 No hook commands will execute",
        })),
        (Ai = e(Text, {
          dimColor: !0,
          children: "\xB7 StatusLine will not be displayed",
        })),
        (Fi = e(Text, {
          dimColor: !0,
          children: "\xB7 Tool operations will proceed without hook validation",
        })),
        (m[64] = Ni),
        (m[65] = Di),
        (m[66] = Ai),
        (m[67] = Fi));
    else ((Ni = m[64]), (Di = m[65]), (Ai = m[66]), (Fi = m[67]));
    let sn;
    if (m[68] !== nn)
      ((sn = r(Box, { flexDirection: "column", children: [nn, Ni, Di, Ai, Fi] })),
        (m[68] = nn),
        (m[69] = sn));
    else sn = m[69];
    let rn;
    if (m[70] !== Qt)
      ((rn =
        !Qt &&
        e(Text, {
          dimColor: !0,
          children:
            'To re-enable hooks, remove "disableAllHooks" from settings.json or ask Claude.',
        })),
        (m[70] = Qt),
        (m[71] = rn));
    else rn = m[71];
    let cn;
    if (m[72] !== E || m[73] !== O || m[74] !== sn || m[75] !== rn)
      ((cn = r(Box, {
        flexDirection: "column",
        gap: 1,
        children: [E, O, sn, rn],
      })),
        (m[72] = E),
        (m[73] = O),
        (m[74] = sn),
        (m[75] = rn),
        (m[76] = cn));
    else cn = m[76];
    let Wi;
    if (m[77] !== pe || m[78] !== cn)
      ((Wi = e(de, {
        title: "Hook configuration \xB7 disabled",
        onCancel: pe,
        inputGuide: T,
        children: cn,
      })),
        (m[77] = pe),
        (m[78] = cn),
        (m[79] = Wi));
    else Wi = m[79];
    return Wi;
  }
  switch (l.mode) {
    case "select-event": {
      let T;
      if (m[80] === MEMO_CACHE_SENTINEL)
        ((T = isSafeMode()
          ? { exitHint: getSafeModeExitHint(), managedHooksStillApply: hasPolicySettings() }
          : void 0),
          (m[80] = T));
      else T = m[80];
      let E;
      if (m[81] !== fo || m[82] !== ee)
        ((E =
          ee === null
            ? void 0
            : e(Je, { summaryPromise: ee, savedLine: fo ?? void 0 })),
          (m[81] = fo),
          (m[82] = ee),
          (m[83] = E));
      else E = m[83];
      let O;
      if (m[84] !== j)
        ((O = (cs) => {
          if (j[cs].matcherMetadata !== void 0)
            B({ mode: "select-matcher", event: cs });
          else B({ mode: "select-hook", event: cs, matcher: "" });
        }),
          (m[84] = j),
          (m[85] = O));
      else O = m[85];
      let W;
      if (
        m[86] !== Ze ||
        m[87] !== pe ||
        m[88] !== j ||
        m[89] !== rs ||
        m[90] !== Kn ||
        m[91] !== E ||
        m[92] !== O ||
        m[93] !== te
      )
        ((W = e(Mo, {
          hookEventMetadata: j,
          hooksByEvent: rs,
          totalHooksCount: te,
          restrictedByPolicy: Kn,
          suspendedBySafeMode: T,
          cloudSessionPanel: E,
          onDecideCloudHooks: Ze,
          onSelectEvent: O,
          onCancel: pe,
        })),
          (m[86] = Ze),
          (m[87] = pe),
          (m[88] = j),
          (m[89] = rs),
          (m[90] = Kn),
          (m[91] = E),
          (m[92] = O),
          (m[93] = te),
          (m[94] = W));
      else W = m[94];
      return W;
    }
    case "cloud-consent": {
      const T = l.offer.forwarded;
      const E = l.offer.templateNames;
      const O = l.current;
      let W;
      if (m[95] === MEMO_CACHE_SENTINEL) ((W = sanitizeForDisplay(getDeviceHooksConsentFilePath())), (m[95] = W));
      else W = m[95];
      let Pe;
      if (m[96] !== Ce || m[97] !== Xt || m[98] !== po)
        ((Pe = (yo) => {
          if (
            (B({ mode: "select-event" }),
            logEvent("tengu_device_hooks_consent", { choice: fromEnum(yo) }),
            yo === "not_now")
          ) {
            return;
          }
          let Ji = deviceHooksProcessMemories.of(Ce);
          (setConsentAnswerGiven(Ji.consentPin, yo),
            emitConsentAnswer(Ji.consentAnnounced, yo),
            writeConsentToStore(yo, createConsentStore(po)).then((Qc) => {
              ($c(
                `${Qc ? "Saved" : "For this session only (the answer could not be written to disk)"}: ${yo === "accepted" ? "cloud sessions started from this machine may run its hooks" : "this machine's hooks stay on this machine"}.`,
              ),
                Lc(Xt()));
            }));
        }),
          (m[96] = Ce),
          (m[97] = Xt),
          (m[98] = po),
          (m[99] = Pe));
      else Pe = m[99];
      let eo;
      if (
        m[100] !== l.current ||
        m[101] !== l.offer.forwarded ||
        m[102] !== l.offer.templateNames ||
        m[103] !== W ||
        m[104] !== Pe
      )
        ((eo = e(So, {
          forwarded: T,
          templateNames: E,
          current: O,
          consentLocation: W,
          onDone: Pe,
        })),
          (m[100] = l.current),
          (m[101] = l.offer.forwarded),
          (m[102] = l.offer.templateNames),
          (m[103] = W),
          (m[104] = Pe),
          (m[105] = eo));
      else eo = m[105];
      return eo;
    }
    case "select-matcher": {
      const T = j[l.event];
      let E;
      if (m[106] !== l.event)
        ((E = (Zc) => {
          B({ mode: "select-hook", event: l.event, matcher: Zc });
        }),
          (m[106] = l.event),
          (m[107] = E));
      else E = m[107];
      let O;
      if (m[108] === MEMO_CACHE_SENTINEL)
        ((O = () => {
          B({ mode: "select-event" });
        }),
          (m[108] = O));
      else O = m[108];
      let W;
      if (
        m[109] !== oe ||
        m[110] !== l.event ||
        m[111] !== es ||
        m[112] !== T.description ||
        m[113] !== E
      )
        ((W = e(Po, {
          selectedEvent: l.event,
          matchersForSelectedEvent: es,
          hooksByEventAndMatcher: oe,
          eventDescription: T.description,
          onSelect: E,
          onCancel: O,
        })),
          (m[109] = oe),
          (m[110] = l.event),
          (m[111] = es),
          (m[112] = T.description),
          (m[113] = E),
          (m[114] = W));
      else W = m[114];
      return W;
    }
    case "select-hook": {
      const T = j[l.event];
      let E;
      if (m[115] !== l.event)
        ((E = (ed) => {
          B({ mode: "view-hook", event: l.event, hook: ed });
        }),
          (m[115] = l.event),
          (m[116] = E));
      else E = m[116];
      let O;
      if (m[117] !== j || m[118] !== l.event)
        ((O = () => {
          if (j[l.event].matcherMetadata !== void 0)
            B({ mode: "select-matcher", event: l.event });
          else B({ mode: "select-event" });
        }),
          (m[117] = j),
          (m[118] = l.event),
          (m[119] = O));
      else O = m[119];
      let W;
      if (
        m[120] !== os ||
        m[121] !== l.event ||
        m[122] !== l.matcher ||
        m[123] !== T ||
        m[124] !== E ||
        m[125] !== O
      )
        ((W = e(Oo, {
          selectedEvent: l.event,
          selectedMatcher: l.matcher,
          hooksForSelectedMatcher: os,
          hookEventMetadata: T,
          onSelect: E,
          onCancel: O,
        })),
          (m[120] = os),
          (m[121] = l.event),
          (m[122] = l.matcher),
          (m[123] = T),
          (m[124] = E),
          (m[125] = O),
          (m[126] = W));
      else W = m[126];
      return W;
    }
    case "view-hook": {
      const T = j[l.event].matcherMetadata !== void 0;
      let E;
      if (m[127] !== l)
        ((E = () => {
          let { event: od, hook: td } = l;
          B({ mode: "select-hook", event: od, matcher: td.matcher || "" });
        }),
          (m[127] = l),
          (m[128] = E));
      else E = m[128];
      let O;
      if (m[129] !== l.hook || m[130] !== T || m[131] !== E)
        ((O = e(To, {
          selectedHook: l.hook,
          eventSupportsMatcher: T,
          onCancel: E,
        })),
          (m[129] = l.hook),
          (m[130] = T),
          (m[131] = E),
          (m[132] = O));
      else O = m[132];
      return O;
    }
  }
}
var wd = async (n, a) => {
  logEvent("tengu_hooks_command", {});
  let s = getToolPermissionContext(a),
    g = addEnabledDefaultTools(getBuiltinToolsForContext(s), s).map((k) => k.name);
  return e(dn, { toolNames: g, onExit: n });
};
export { wd as call };

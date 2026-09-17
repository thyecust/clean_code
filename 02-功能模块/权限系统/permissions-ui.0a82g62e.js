// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 230 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize, truncateToCodeUnits } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { useTheme } from "../状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { chalk } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import { BASH_TOOL_NAME } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { withFeatureTelemetry } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { SETTINGS_SOURCE_ORDER, describeSettingsSourceShort, HOOK_SETTINGS_SOURCE_ORDER, getRelativeSettingsFilePathForSource } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { getRemoteTransport, isRemoteActive, hasRemoteControlChannel } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { te } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { parseSettingsFile, getSettingsFilePathForSource, getSettingsForSource, updateSettingsForSourceWithTransform, autoModeConfigSchema, AUTO_MODE_TRUSTED_SOURCES } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { parsePermissionRule, formatPermissionRule } from "../工具Bash-Shell/permission-rule-parsing.js";
import { gi, o, t, zb } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useTerminalFocus } from "../../01-核心基础设施/共享小工具-未细化/clock-and-terminal-focus.js";
import { useKeybinding } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { useTerminalSize } from "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import { supportsShiftEnter } from "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { StatusIndicator } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { useAppStateSelector, useSetAppState } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import { getClaudeTempDir } from "../../01-核心基础设施/核心工具-路径与平台/temp-directory.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import {
  SandboxManager,
  DEFAULTS_SLOT_MARKER,
  AUTO_MODE_ENV_EDIT_FILE_PREFIX,
  AUTO_MODE_BUILTINS_FILE_PREFIX,
  isBuiltinPermissionsTemplateEnabled,
  getAutoModeTemplateRules,
  resolveSidecarFilePath,
  permissionRuleSourceDisplayString,
  deletePermissionRule,
  WebFetchTool,
  sanitizeForDisplay,
  BashTool,
  createPermissionRetryMessage,
  isAutoModeSetupCommandEnabled,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { hn } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import { applyPermissionUpdate, persistPermissionUpdate, getAlwaysAllowRules, getAlwaysDenyRules, getAlwaysAskRules } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { vve, Rm, Us, Qk, Oo, ZJe } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import "../Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import "../../01-核心基础设施/共享小工具-未细化/queued-message-context.js";
import "../../03-入口与运行时/会话UI(REPL)/scroll-box.js";
import { qp, ss, a0e, Jd } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-yhkvt9ba.js";
import { useAutoModeDenials } from "../后台任务-Shell管理/chunk-c7mzes79.js";
import { useVimModeInput, SearchInput } from "../Vim模式/Vim模式.nnewe0gf.js";
import { ConfirmPrompt } from "../../01-核心基础设施/共享小工具-未细化/confirm-prompt.js";
import { Qr, de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { useSession } from "../../01-核心基础设施/共享小工具-未细化/session-context.js";
import { AddDirectoryToWorkspaceDialog } from "./add-directory-to-workspace.js";
import { m7, SSe, F3e, TSe, oI } from "./chunk-4wrkmv3h.js";
import { openFileInEditor, resolveEditorCommand, getEditorDisplayName, editFileInExternalEditor } from "../../03-入口与运行时/会话UI(REPL)/external-editor.js";
import { formatRuleContentForDisplay, MultilineBorderBox } from "./chunk-0hcqee2w.js";
import "../../01-核心基础设施/共享小工具-未细化/focusable-box.js";
import "../../01-核心基础设施/共享小工具-未细化/background-text.js";
import "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import { TitledBorderBox } from "../../01-核心基础设施/共享小工具-未细化/titled-border-box.js";
import "../../01-核心基础设施/共享小工具-未细化/error-message.js";
import { InputGuide } from "../../01-核心基础设施/共享小工具-未细化/input-guide.js";
import { SpinnerMessageLine } from "../../01-核心基础设施/共享小工具-未细化/spinner-message-line.js";
import "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import "../../01-核心基础设施/共享小工具-未细化/linkified-text.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../Bridge-RemoteControl/remote-control-ui-strings.js";
import { parseThinClientReply } from "../../01-核心基础设施/共享小工具-未细化/parse-thin-client-reply.js";
import { getThemeColor } from "../../01-核心基础设施/共享小工具-未细化/theme-color.js";
import "../Git-Worktree/chunk-33y3h2sy.js";
import { Dn, kn, E, V, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { s, se, v, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { getGraphemeSegmenter } from "../../01-核心基础设施/共享小工具-未细化/intl-text-utils.js";
import { countMatching, dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function cd(jl, lg) {
  let { rule: ag, source: cg } = jl;
  return { value: String(lg), label: ag, description: cg };
}
function ud() {}
var ri = [
    { kind: "allow", title: "Allow", empty: "No allow rules" },
    { kind: "ask", title: "Ask", empty: "No ask rules" },
    { kind: "deny", title: "Deny", empty: "No deny rules" },
    {
      kind: "additionalDirectories",
      title: "Workspace",
      empty: "No additional working directories",
    },
  ],
  ld = createLazyValue(() => {
    let i = v(s()).catch([]),
      u = c({
        source: s(),
        settings: c({
          permissions: c({
            allow: i,
            ask: i,
            deny: i,
            additionalDirectories: i,
          })
            .optional()
            .catch(void 0),
        }).catch({ permissions: void 0 }),
      });
    return c({
      sources: v(u.nullable().catch(null)),
      errors: v(se())
        .optional()
        .catch(void 0),
    });
  }),
  ad = /[\u200b\u200e\u200f\u2060\ufeff]/g;
function Xl(i) {
  return sanitizeForDisplay(i.replace(ad, "\uFFFD"));
}
async function ql(i, u) {
  try {
    let f = parseThinClientReply(
      "get_settings",
      ld(),
      await i.sendControlRequest({ subtype: "get_settings" }, { signal: u }),
    );
    if (!f)
      return {
        kind: "unreadable",
        reason: "the cloud session sent a reply this version can't display",
      };
    let a = { allow: [], ask: [], deny: [], additionalDirectories: [] };
    for (let g of f.sources) {
      if (g === null) continue;
      let { source: w, settings: S } = g,
        P = SETTINGS_SOURCE_ORDER.find((I) => I === w),
        B = P ? describeSettingsSourceShort(P) : Xl(truncateToCodeUnits(w, 40)) + (w.length > 40 ? "\u2026" : "");
      for (let { kind: I } of ri)
        for (let W of S.permissions?.[I] ?? [])
          a[I].push({ rule: Xl(W), source: B });
    }
    return { kind: "read", rules: a, skippedFiles: f.errors?.length ?? 0 };
  } catch (f) {
    return { kind: "unreadable", reason: sanitizeForDisplay(l(f)) };
  }
}
function li(eg) {
  let fo = _(13),
    { onExit: mn, rulesRead: Nl } = eg,
    Zu;
  if (fo[0] !== mn) ((Zu = () => mn()), (fo[0] = mn), (fo[1] = Zu));
  else Zu = fo[1];
  let ed;
  if (fo[2] === MEMO_CACHE_SENTINEL) ((ed = { context: "Settings" }), (fo[2] = ed));
  else ed = fo[2];
  useKeybinding("confirm:no", Zu, ed);
  let Jr;
  if (fo[3] !== mn || fo[4] !== Nl)
    ((Jr = ri.map((fn) => {
      let { kind: Ul, title: tg, empty: og } = fn;
      return e(
        ss,
        {
          id: Ul,
          title: tg,
          children: e(Dn, {
            fallback: e(SpinnerMessageLine, {
              message: "Reading the cloud session's rules\u2026",
            }),
            children: e(ii, { rulesRead: Nl, kind: Ul, empty: og, onExit: mn }),
          }),
        },
        Ul,
      );
    })),
      (fo[3] = mn),
      (fo[4] = Nl),
      (fo[5] = Jr));
  else Jr = fo[5];
  let fn;
  if (fo[6] !== Jr)
    ((fn = e(qp, { title: "Permissions", color: "permission", children: Jr })),
      (fo[6] = Jr),
      (fo[7] = fn));
  else fn = fo[7];
  let td;
  if (fo[8] === MEMO_CACHE_SENTINEL)
    ((td = e(t, {
      dimColor: !0,
      wrap: "wrap-trim",
      children:
        "Read-only here: these are the cloud session's rules, from its settings files (rules it added for itself this session aren't listed). To change them, ask Claude to edit .claude/settings.json in the session. Commands Claude runs on this computer follow this computer's rules \u2014 /permissions in a local session edits those.",
    })),
      (fo[8] = td));
  else td = fo[8];
  let od;
  if (fo[9] === MEMO_CACHE_SENTINEL)
    ((od = e(KeybindingHint, { chord: ["up", "down"], action: "navigate" })), (fo[9] = od));
  else od = fo[9];
  let nd;
  if (fo[10] === MEMO_CACHE_SENTINEL)
    ((nd = r(o, {
      marginTop: 1,
      flexDirection: "column",
      children: [
        td,
        e(InputGuide, {
          children: r(DotSeparatedList, {
            children: [
              od,
              e(KeybindingHint, { chord: ["left", "right"], action: "switch" }),
              e(KeybindingHint, { chord: "escape", action: "close" }),
            ],
          }),
        }),
      ],
    })),
      (fo[10] = nd));
  else nd = fo[10];
  let rd;
  if (fo[11] !== fn)
    ((rd = r(Qr, { color: "permission", children: [fn, nd] })),
      (fo[11] = fn),
      (fo[12] = rd));
  else rd = fo[12];
  return rd;
}
function ii(ng) {
  let Zr = _(11),
    { rulesRead: rg, kind: ig, empty: Il, onExit: Ll } = ng,
    At = kn(rg);
  if (At.kind === "unreadable") {
    let Uo;
    if (Zr[0] !== At.reason)
      ((Uo = r(t, {
        color: "error",
        children: ["Couldn't read the cloud session's rules: ", At.reason],
      })),
        (Zr[0] = At.reason),
        (Zr[1] = Uo));
    else Uo = Zr[1];
    return Uo;
  }
  let ei = At.rules[ig],
    Uo;
  if (Zr[2] !== At.skippedFiles)
    ((Uo =
      At.skippedFiles > 0 &&
      r(t, {
        color: "warning",
        wrap: "wrap-trim",
        children: [
          At.skippedFiles,
          " settings ",
          pluralize(At.skippedFiles, "file"),
          " in the session failed to parse; rules from",
          " ",
          pluralize(At.skippedFiles, "it", "them"),
          " aren't listed.",
        ],
      })),
      (Zr[2] = At.skippedFiles),
      (Zr[3] = Uo));
  else Uo = Zr[3];
  let ti;
  if (Zr[4] !== Il || Zr[5] !== Ll || Zr[6] !== ei)
    ((ti =
      ei.length === 0
        ? e(t, { dimColor: !0, children: Il })
        : e(si, { rules: ei, onExit: Ll })),
      (Zr[4] = Il),
      (Zr[5] = Ll),
      (Zr[6] = ei),
      (Zr[7] = ti));
  else ti = Zr[7];
  let id;
  if (Zr[8] !== Uo || Zr[9] !== ti)
    ((id = r(o, { flexDirection: "column", children: [Uo, ti] })),
      (Zr[8] = Uo),
      (Zr[9] = ti),
      (Zr[10] = id));
  else id = Zr[10];
  return id;
}
function si(jl) {
  let Hl = _(10),
    { rules: Wl, onExit: Vl } = jl,
    { headerFocused: Yl, focusHeader: zl } = Jd(),
    { rows: sg } = useTerminalSize(),
    oi;
  if (Hl[0] !== Wl) ((oi = Wl.map(cd)), (Hl[0] = Wl), (Hl[1] = oi));
  else oi = Hl[1];
  const Kl = Math.max(3, Math.min(10, sg - 14));
  let ni;
  if (Hl[2] !== Vl) ((ni = () => Vl()), (Hl[2] = Vl), (Hl[3] = ni));
  else ni = Hl[3];
  let sd;
  if (
    Hl[4] !== zl ||
    Hl[5] !== Yl ||
    Hl[6] !== oi ||
    Hl[7] !== Kl ||
    Hl[8] !== ni
  )
    ((sd = e(ve, {
      options: oi,
      visibleOptionCount: Kl,
      hideIndexes: !0,
      isDisabled: Yl,
      onUpFromFirstItem: zl,
      onChange: ud,
      onCancel: ni,
    })),
      (Hl[4] = zl),
      (Hl[5] = Yl),
      (Hl[6] = oi),
      (Hl[7] = Kl),
      (Hl[8] = ni),
      (Hl[9] = sd));
  else sd = Hl[9];
  return sd;
}
F();
function dd(i) {
  return i === "projectSettings" || i === "policySettings" || i === "command";
}
function er(i) {
  return permissionRuleSourceDisplayString(i);
}
function Gl(i, u, f) {
  let a = er(u.source),
    g = er(f.source),
    w = u.ruleValue.toolName;
  if (i === "deny")
    return `Remove the "${w}" deny rule from ${a}, or remove the specific allow rule from ${g}`;
  return `Remove the "${w}" ask rule from ${a}, or remove the specific allow rule from ${g}`;
}
function md(i, u, f) {
  let { toolName: a, ruleContent: g } = i.ruleValue;
  if (g === void 0) return { shadowed: !1 };
  let w = u.find(
    (S) => S.ruleValue.toolName === a && S.ruleValue.ruleContent === void 0,
  );
  if (!w) return { shadowed: !1 };
  if (a === BASH_TOOL_NAME && f.sandboxAutoAllowEnabled) {
    if (!dd(w.source)) return { shadowed: !1 };
  }
  return { shadowed: !0, shadowedBy: w, shadowType: "ask" };
}
function fd(i, u) {
  let { toolName: f, ruleContent: a } = i.ruleValue;
  if (a === void 0) return { shadowed: !1 };
  let g = u.find(
    (w) => w.ruleValue.toolName === f && w.ruleValue.ruleContent === void 0,
  );
  if (!g) return { shadowed: !1 };
  return { shadowed: !0, shadowedBy: g, shadowType: "deny" };
}
function ai(i, u) {
  let f = [],
    a = getAlwaysAllowRules(i),
    g = getAlwaysAskRules(i),
    w = getAlwaysDenyRules(i);
  for (let S of a) {
    let P = fd(S, w);
    if (P.shadowed) {
      let I = er(P.shadowedBy.source);
      f.push({
        rule: S,
        reason: `Blocked by "${P.shadowedBy.ruleValue.toolName}" deny rule (from ${I})`,
        shadowedBy: P.shadowedBy,
        shadowType: "deny",
        fix: Gl("deny", P.shadowedBy, S),
      });
      continue;
    }
    let B = md(S, g, u);
    if (B.shadowed) {
      let I = er(B.shadowedBy.source);
      f.push({
        rule: S,
        reason: `Shadowed by "${B.shadowedBy.ruleValue.toolName}" ask rule (from ${I})`,
        shadowedBy: B.shadowedBy,
        shadowType: "ask",
        fix: Gl("ask", B.shadowedBy, S),
      });
    }
  }
  return f;
}
function go(Rg) {
  let Io = _(13),
    { ruleValue: at } = Rg;
  switch (at.toolName) {
    case BashTool.name: {
      if (at.ruleContent) {
        if (at.ruleContent.endsWith(":*") || at.ruleContent.endsWith(" *")) {
          let We;
          if (Io[0] !== at.ruleContent)
            ((We = formatRuleContentForDisplay(at.ruleContent.slice(0, -2))),
              (Io[0] = at.ruleContent),
              (Io[1] = We));
          else We = Io[1];
          let po;
          if (Io[2] !== We)
            ((po = r(t, {
              dimColor: !0,
              children: [
                "Any Bash command starting with",
                " ",
                e(t, { bold: !0, children: We }),
              ],
            })),
              (Io[2] = We),
              (Io[3] = po));
          else po = Io[3];
          return po;
        } else {
          let We;
          if (Io[4] !== at.ruleContent)
            ((We = formatRuleContentForDisplay(at.ruleContent)), (Io[4] = at.ruleContent), (Io[5] = We));
          else We = Io[5];
          let po;
          if (Io[6] !== We)
            ((po = r(t, {
              dimColor: !0,
              children: [
                "The Bash command",
                " ",
                e(t, { bold: !0, children: We }),
              ],
            })),
              (Io[6] = We),
              (Io[7] = po));
          else po = Io[7];
          return po;
        }
      } else {
        let We;
        if (Io[8] === MEMO_CACHE_SENTINEL)
          ((We = e(t, { dimColor: !0, children: "Any Bash command" })),
            (Io[8] = We));
        else We = Io[8];
        return We;
      }
    }
    default: {
      if (!at.ruleContent) {
        let We;
        if (Io[9] !== at.toolName)
          ((We = formatRuleContentForDisplay(at.toolName)), (Io[9] = at.toolName), (Io[10] = We));
        else We = Io[10];
        let po;
        if (Io[11] !== We)
          ((po = r(t, {
            dimColor: !0,
            children: [
              "Any use of the",
              " ",
              e(t, { bold: !0, children: We }),
              " tool",
            ],
          })),
            (Io[11] = We),
            (Io[12] = po));
        else po = Io[12];
        return po;
      } else {
        return null;
      }
    }
  }
}
function Rd(sa) {
  return r(
    o,
    {
      flexDirection: "column",
      children: [
        e(t, { bold: !0, children: formatPermissionRule(sa) }),
        e(go, { ruleValue: sa }),
      ],
    },
    formatPermissionRule(sa),
  );
}
function la(i) {
  switch (i) {
    case "localSettings":
      return {
        label: "Project settings (local)",
        description: `Saved in ${getRelativeSettingsFilePathForSource("localSettings")}`,
        value: i,
      };
    case "projectSettings":
      return {
        label: "Project settings",
        description: `Checked in at ${getRelativeSettingsFilePathForSource("projectSettings")}`,
        value: i,
      };
    case "userSettings":
      return {
        label: "User settings",
        description: "Saved in at ~/.claude/settings.json",
        value: i,
      };
  }
}
function tr(Ig) {
  let Gt = _(27),
    {
      onAddRules: Ql,
      onCancel: pn,
      ruleValues: pt,
      ruleBehavior: gn,
      initialContext: Jl,
      setToolPermissionContext: Zl,
    } = Ig,
    { storageV5: ea } = useStorageV5Context(),
    pd;
  if (Gt[0] === MEMO_CACHE_SENTINEL) ((pd = HOOK_SETTINGS_SOURCE_ORDER.map(la)), (Gt[0] = pd));
  else pd = Gt[0];
  let Lg = pd,
    hd;
  if (
    Gt[1] !== Jl ||
    Gt[2] !== Ql ||
    Gt[3] !== pn ||
    Gt[4] !== gn ||
    Gt[5] !== pt ||
    Gt[6] !== Zl ||
    Gt[7] !== ea
  )
    ((hd = (ta) => {
      if (ta === "cancel") {
        pn();
        return;
      } else if (HOOK_SETTINGS_SOURCE_ORDER.includes(ta)) {
        let oa = ta;
        let gd = applyPermissionUpdate(Jl, {
          type: "addRules",
          rules: pt,
          behavior: gn,
          destination: oa,
        });
        (persistPermissionUpdate(
          { type: "addRules", rules: pt, behavior: gn, destination: oa },
          ea,
        ).catch(logError),
          Zl(gd));
        let Wg = pt.map((jg) => ({
          ruleValue: jg,
          ruleBehavior: gn,
          source: oa,
        }));
        let Vg =
          SandboxManager.isSandboxingEnabled() && SandboxManager.isAutoAllowBashIfSandboxedEnabled();
        let Yg = ai(gd, { sandboxAutoAllowEnabled: Vg }).filter((yd) =>
          pt.some(
            (bd) =>
              bd.toolName === yd.rule.ruleValue.toolName &&
              bd.ruleContent === yd.rule.ruleValue.ruleContent,
          ),
        );
        Ql(Wg, Yg);
      }
    }),
      (Gt[1] = Jl),
      (Gt[2] = Ql),
      (Gt[3] = pn),
      (Gt[4] = gn),
      (Gt[5] = pt),
      (Gt[6] = Zl),
      (Gt[7] = ea),
      (Gt[8] = hd));
  else hd = Gt[8];
  let na = hd,
    vd;
  if (Gt[9] !== pt.length)
    ((vd = pluralize(pt.length, "rule")), (Gt[9] = pt.length), (Gt[10] = vd));
  else vd = Gt[10];
  let ra = `Add ${gn} permission ${vd}`,
    ui;
  if (Gt[11] !== pt) ((ui = pt.map(Rd)), (Gt[11] = pt), (Gt[12] = ui));
  else ui = Gt[12];
  let di;
  if (Gt[13] !== ui)
    ((di = e(o, { flexDirection: "column", paddingX: 2, children: ui })),
      (Gt[13] = ui),
      (Gt[14] = di));
  else di = Gt[14];
  const ia =
    pt.length === 1
      ? "Where should this rule be saved?"
      : "Where should these rules be saved?";
  let mi;
  if (Gt[15] !== ia)
    ((mi = e(t, { children: ia })), (Gt[15] = ia), (Gt[16] = mi));
  else mi = Gt[16];
  let fi;
  if (Gt[17] !== na)
    ((fi = e(ve, { options: Lg, onChange: na })), (Gt[17] = na), (Gt[18] = fi));
  else fi = Gt[18];
  let pi;
  if (Gt[19] !== mi || Gt[20] !== fi)
    ((pi = r(o, { flexDirection: "column", marginY: 1, children: [mi, fi] })),
      (Gt[19] = mi),
      (Gt[20] = fi),
      (Gt[21] = pi));
  else pi = Gt[21];
  let wd;
  if (Gt[22] !== pn || Gt[23] !== di || Gt[24] !== pi || Gt[25] !== ra)
    ((wd = r(de, {
      title: ra,
      onCancel: pn,
      color: "permission",
      children: [di, pi],
    })),
      (Gt[22] = pn),
      (Gt[23] = di),
      (Gt[24] = pi),
      (Gt[25] = ra),
      (Gt[26] = wd));
  else wd = Gt[26];
  return wd;
}
F();
function or(ly) {
  let yo = _(18),
    { onCancel: hi, onSubmit: aa, ruleBehavior: bi } = ly,
    [ca, cy] = d(""),
    [ua, uy] = d(0),
    Sd;
  if (yo[0] === MEMO_CACHE_SENTINEL) ((Sd = { context: "Settings" }), (yo[0] = Sd));
  else Sd = yo[0];
  useKeybinding("confirm:no", hi, Sd);
  let { columns: dy } = useTerminalSize(),
    da = dy - 6,
    Cd;
  if (yo[1] !== aa || yo[2] !== bi)
    ((Cd = (my) => {
      let xd = my.trim();
      if (xd.length === 0) {
        return;
      }
      let fy = parsePermissionRule(xd);
      aa(fy, bi);
    }),
      (yo[1] = aa),
      (yo[2] = bi),
      (yo[3] = Cd));
  else Cd = yo[3];
  let ma = Cd;
  const fa = `Add ${bi} permission rule`;
  let Ed;
  if (yo[4] === MEMO_CACHE_SENTINEL)
    ((Ed = r(DotSeparatedList, {
      children: [
        e(KeybindingHint, { chord: "enter", action: "submit" }),
        e(KeybindingHint, { chord: "escape", action: "cancel" }),
      ],
    })),
      (yo[4] = Ed));
  else Ed = yo[4];
  let Ad;
  if (yo[5] === MEMO_CACHE_SENTINEL) ((Ad = e(zb, {})), (yo[5] = Ad));
  else Ad = yo[5];
  let Pd, kd;
  if (yo[6] === MEMO_CACHE_SENTINEL)
    ((Pd = e(t, { bold: !0, children: formatPermissionRule({ toolName: WebFetchTool.name }) })),
      (kd = e(t, { bold: !1, children: " or " })),
      (yo[6] = Pd),
      (yo[7] = kd));
  else ((Pd = yo[6]), (kd = yo[7]));
  let Td;
  if (yo[8] === MEMO_CACHE_SENTINEL)
    ((Td = r(t, {
      children: [
        "Permission rules are a tool name, optionally followed by a specifier in parentheses.",
        Ad,
        "e.g.,",
        " ",
        Pd,
        kd,
        e(t, {
          bold: !0,
          children: formatPermissionRule({ toolName: BashTool.name, ruleContent: "ls *" }),
        }),
      ],
    })),
      (yo[8] = Td));
  else Td = yo[8];
  let vi;
  if (yo[9] !== ua || yo[10] !== ma || yo[11] !== ca || yo[12] !== da)
    ((vi = r(o, {
      flexDirection: "column",
      children: [
        Td,
        e(o, {
          borderDimColor: !0,
          borderStyle: "round",
          marginY: 1,
          paddingLeft: 1,
          children: e(hn, {
            showCursor: !0,
            value: ca,
            onChange: cy,
            onSubmit: ma,
            placeholder: `Enter permission rule${figures.ellipsis}`,
            columns: da,
            cursorOffset: ua,
            onChangeCursorOffset: uy,
          }),
        }),
      ],
    })),
      (yo[9] = ua),
      (yo[10] = ma),
      (yo[11] = ca),
      (yo[12] = da),
      (yo[13] = vi));
  else vi = yo[13];
  let $d;
  if (yo[14] !== hi || yo[15] !== fa || yo[16] !== vi)
    (($d = e(de, {
      title: fa,
      onCancel: hi,
      color: "permission",
      isCancelActive: !1,
      inputGuide: Ed,
      children: vi,
    })),
      (yo[14] = hi),
      (yo[15] = fa),
      (yo[16] = vi),
      (yo[17] = $d));
  else $d = yo[17];
  return $d;
}
F();
function Kd() {
  return new Set();
}
function qd() {
  return new Set();
}
function Gd(Oy) {
  return Oy.display;
}
function Qd(Ny, Uy) {
  return Ny.withheld ? Uy : -1;
}
function Zd(Iy) {
  return Iy >= 0;
}
function em(Ly) {
  return Ly.text;
}
function tm(Hd) {
  return Hd.reason
    ? Oo(Us(Hd.reason).text).replace(/\s+/g, " ").trim()
    : void 0;
}
function ur(Ey) {
  let Je = _(47),
    { onHeaderFocusChange: wi, onStateChange: Ri } = Ey,
    { headerFocused: Ft, focusHeader: pa } = Jd(),
    Dd,
    _d;
  if (Je[0] !== Ft || Je[1] !== wi)
    ((Dd = () => {
      wi(Ft);
    }),
      (_d = [Ft, wi]),
      (Je[0] = Ft),
      (Je[1] = wi),
      (Je[2] = Dd),
      (Je[3] = _d));
  else ((Dd = Je[2]), (_d = Je[3]));
  E(Dd, _d);
  let { getDenials: Ay } = useAutoModeDenials(),
    [ct] = d(Ay),
    [Qt, Md] = d(Kd),
    [Jt, Py] = d(qd),
    [bo, ky] = d(0),
    Fd,
    Bd;
  if (Je[4] !== Qt || Je[5] !== ct || Je[6] !== Ri || Je[7] !== Jt)
    ((Fd = () => {
      Ri({ approved: Qt, retry: Jt, denials: ct });
    }),
      (Bd = [Qt, Jt, ct, Ri]),
      (Je[4] = Qt),
      (Je[5] = ct),
      (Je[6] = Ri),
      (Je[7] = Jt),
      (Je[8] = Fd),
      (Je[9] = Bd));
  else ((Fd = Je[8]), (Bd = Je[9]));
  E(Fd, Bd);
  let Od;
  if (Je[10] !== ct)
    ((Od = ZJe(ct.map(Gd), { maxUnits: Rm })), (Je[10] = ct), (Je[11] = Od));
  else Od = Je[11];
  let yn = Od,
    Nd;
  if (Je[12] !== yn)
    ((Nd = new Set(yn.map(Qd).filter(Zd))), (Je[12] = yn), (Je[13] = Nd));
  else Nd = Je[13];
  let bn = Nd,
    Ud;
  if (Je[14] !== bn)
    ((Ud = (Ty) => {
      let Si = Number(Ty);
      if (bn.has(Si)) {
        return;
      }
      Md(($y) => {
        let Ci = new Set($y);
        if (Ci.has(Si)) Ci.delete(Si);
        else Ci.add(Si);
        return Ci;
      });
    }),
      (Je[14] = bn),
      (Je[15] = Ud));
  else Ud = Je[15];
  let ha = Ud,
    Id;
  if (Je[16] === MEMO_CACHE_SENTINEL)
    ((Id = (Dy) => {
      ky(Number(Dy));
    }),
      (Je[16] = Id));
  else Id = Je[16];
  let _y = Id,
    Ld;
  if (Je[17] !== bo || Je[18] !== Ft || Je[19] !== bn)
    ((Ld = function rr(nr) {
      if (Ft) {
        return;
      }
      if (nr.ctrl || nr.meta || nr.shift) {
        return;
      }
      if (nr.key !== "r") {
        return;
      }
      if ((nr.preventDefault(), bn.has(bo))) {
        return;
      }
      (Py((My) => {
        let xi = new Set(My);
        if (xi.has(bo)) xi.delete(bo);
        else xi.add(bo);
        return xi;
      }),
        Md((ga) => {
          if (ga.has(bo)) {
            return ga;
          }
          let jd = new Set(ga);
          return (jd.add(bo), jd);
        }));
    }),
      (Je[17] = bo),
      (Je[18] = Ft),
      (Je[19] = bn),
      (Je[20] = Ld));
  else Ld = Je[20];
  let rr = Ld,
    Wd;
  if (Je[21] !== yn) ((Wd = yn.map(em)), (Je[21] = yn), (Je[22] = Wd));
  else Wd = Je[22];
  let ir = Wd,
    Vd;
  if (Je[23] !== ct) ((Vd = ct.map(tm)), (Je[23] = ct), (Je[24] = Vd));
  else Vd = Je[24];
  let sr = Vd;
  if (ct.length === 0) {
    let lr;
    if (Je[25] === MEMO_CACHE_SENTINEL)
      ((lr = e(t, {
        dimColor: !0,
        children:
          "No recent denials. Commands denied by the auto mode classifier will appear here.",
      })),
        (Je[25] = lr));
    else lr = Je[25];
    return lr;
  }
  let lr;
  if (
    Je[26] !== Qt ||
    Je[27] !== ct ||
    Je[28] !== ir ||
    Je[29] !== sr ||
    Je[30] !== Jt
  ) {
    let ar;
    if (Je[32] !== Qt || Je[33] !== ir || Je[34] !== sr || Je[35] !== Jt)
      ((ar = (d_1, cr) => {
        let Fy = Qt.has(cr);
        let By = Jt.has(cr) ? " (retry)" : "";
        let Yd = sr[cr];
        return {
          label: r(t, {
            children: [
              e(StatusIndicator, { status: Fy ? "success" : "error", withSpace: !0 }),
              ir[cr],
              e(t, { dimColor: !0, children: By }),
            ],
          }),
          value: String(cr),
          ...(Yd && { description: Yd, dimDescription: !0 }),
        };
      }),
        (Je[32] = Qt),
        (Je[33] = ir),
        (Je[34] = sr),
        (Je[35] = Jt),
        (Je[36] = ar));
    else ar = Je[36];
    lr = ct.map(ar);
    ((Je[26] = Qt),
      (Je[27] = ct),
      (Je[28] = ir),
      (Je[29] = sr),
      (Je[30] = Jt),
      (Je[31] = lr));
  } else lr = Je[31];
  let Ei = lr,
    ar;
  if (Je[37] === MEMO_CACHE_SENTINEL)
    ((ar = e(t, {
      children: "Commands recently denied by the auto mode classifier.",
    })),
      (Je[37] = ar));
  else ar = Je[37];
  const ya = Math.min(10, Ei.length);
  let Ai;
  if (
    Je[38] !== pa ||
    Je[39] !== ha ||
    Je[40] !== Ft ||
    Je[41] !== Ei ||
    Je[42] !== ya
  )
    ((Ai = e(o, {
      marginTop: 1,
      children: e(ve, {
        options: Ei,
        onChange: ha,
        onFocus: _y,
        visibleOptionCount: ya,
        isDisabled: Ft,
        onUpFromFirstItem: pa,
      }),
    })),
      (Je[38] = pa),
      (Je[39] = ha),
      (Je[40] = Ft),
      (Je[41] = Ei),
      (Je[42] = ya),
      (Je[43] = Ai));
  else Ai = Je[43];
  let zd;
  if (Je[44] !== rr || Je[45] !== Ai)
    ((zd = r(o, {
      flexDirection: "column",
      onKeyDown: rr,
      children: [ar, Ai],
    })),
      (Je[44] = rr),
      (Je[45] = Ai),
      (Je[46] = zd));
  else zd = Je[46];
  return zd;
}
function mr(qy) {
  let dr = _(15),
    {
      directoryPath: vn,
      onRemove: ba,
      onCancel: wn,
      permissionContext: va,
      setPermissionContext: wa,
    } = qy,
    om;
  if (dr[0] !== vn || dr[1] !== ba || dr[2] !== va || dr[3] !== wa)
    ((om = () => {
      let Gy = applyPermissionUpdate(va, {
        type: "removeDirectories",
        directories: [vn],
        destination: "session",
      });
      (wa(Gy), ba());
    }),
      (dr[0] = vn),
      (dr[1] = ba),
      (dr[2] = va),
      (dr[3] = wa),
      (dr[4] = om));
  else om = dr[4];
  let Ra = om,
    Pi;
  if (dr[5] !== vn)
    ((Pi = e(o, {
      marginX: 2,
      flexDirection: "column",
      children: e(t, { bold: !0, children: vn }),
    })),
      (dr[5] = vn),
      (dr[6] = Pi));
  else Pi = dr[6];
  let nm;
  if (dr[7] === MEMO_CACHE_SENTINEL)
    ((nm = e(t, {
      children:
        "Claude Code will no longer have access to files in this directory.",
    })),
      (dr[7] = nm));
  else nm = dr[7];
  let ki;
  if (dr[8] !== Ra || dr[9] !== wn)
    ((ki = e(ConfirmPrompt, { onConfirm: Ra, onCancel: wn })),
      (dr[8] = Ra),
      (dr[9] = wn),
      (dr[10] = ki));
  else ki = dr[10];
  let rm;
  if (dr[11] !== wn || dr[12] !== Pi || dr[13] !== ki)
    ((rm = r(de, {
      title: "Remove directory from workspace?",
      onCancel: wn,
      color: "error",
      children: [Pi, nm, ki],
    })),
      (dr[11] = wn),
      (dr[12] = Pi),
      (dr[13] = ki),
      (dr[14] = rm));
  else rm = dr[14];
  return rm;
}
F();
function gm(pb) {
  return pb.project.originalCwd;
}
function ym(hb) {
  return { path: hb, isCurrent: !1, isDeletable: !0 };
}
function bm(gb) {
  return gb.path;
}
function vm(yb) {
  return sanitizeForDisplay(yb);
}
function fr(cb) {
  let kt = _(31),
    {
      onExit: Sa,
      toolPermissionContext: Ca,
      onRequestAddDirectory: xa,
      onRequestRemoveDirectory: Ea,
      onHeaderFocusChange: Ti,
    } = cb,
    { headerFocused: jo, focusHeader: Aa } = Jd(),
    Pa = useSession(gm),
    im,
    sm;
  if (kt[0] !== jo || kt[1] !== Ti)
    ((im = () => {
      Ti(jo);
    }),
      (sm = [jo, Ti]),
      (kt[0] = jo),
      (kt[1] = Ti),
      (kt[2] = im),
      (kt[3] = sm));
  else ((im = kt[2]), (sm = kt[3]));
  E(im, sm);
  let lm;
  if (kt[4] !== Ca.additionalWorkingDirectories)
    ((lm = Array.from(Ca.additionalWorkingDirectories.keys()).map(ym)),
      (kt[4] = Ca.additionalWorkingDirectories),
      (kt[5] = lm));
  else lm = kt[5];
  let Wo = lm,
    am;
  if (kt[6] !== Wo || kt[7] !== xa || kt[8] !== Ea)
    ((am = (cm) => {
      if (cm === "add-directory") {
        xa();
        return;
      }
      let ka = Wo.find((ub) => ub.path === cm);
      if (ka && ka.isDeletable) Ea(ka.path);
    }),
      (kt[6] = Wo),
      (kt[7] = xa),
      (kt[8] = Ea),
      (kt[9] = am));
  else am = kt[9];
  let Ta = am,
    um;
  if (kt[10] !== Sa)
    ((um = () => Sa("Workspace dialog dismissed", { display: "system" })),
      (kt[10] = Sa),
      (kt[11] = um));
  else um = kt[11];
  let $a = um,
    dm;
  if (kt[12] !== Wo) {
    let db = Qk(Wo.map(bm), vm);
    let mm = Wo.map((mb, fb) => ({ label: db[fb], value: mb.path }));
    dm =
      (mm.push({ label: `Add directory${figures.ellipsis}`, value: "add-directory" }),
      mm);
    ((kt[12] = Wo), (kt[13] = dm));
  } else dm = kt[13];
  let $i = dm,
    fm;
  if (kt[14] !== Pa) ((fm = sanitizeForDisplay(Pa)), (kt[14] = Pa), (kt[15] = fm));
  else fm = kt[15];
  const Da = `-  ${fm}`;
  let Di;
  if (kt[16] !== Da)
    ((Di = e(t, { children: Da })), (kt[16] = Da), (kt[17] = Di));
  else Di = kt[17];
  let pm;
  if (kt[18] === MEMO_CACHE_SENTINEL)
    ((pm = e(t, { dimColor: !0, children: "(Original working directory)" })),
      (kt[18] = pm));
  else pm = kt[18];
  let _i;
  if (kt[19] !== Di)
    ((_i = r(o, {
      flexDirection: "row",
      marginTop: 1,
      marginLeft: 2,
      gap: 1,
      children: [Di, pm],
    })),
      (kt[19] = Di),
      (kt[20] = _i));
  else _i = kt[20];
  const _a = Math.min(10, $i.length);
  let Mi;
  if (
    kt[21] !== Aa ||
    kt[22] !== $a ||
    kt[23] !== Ta ||
    kt[24] !== jo ||
    kt[25] !== $i ||
    kt[26] !== _a
  )
    ((Mi = e(ve, {
      options: $i,
      onChange: Ta,
      onCancel: $a,
      visibleOptionCount: _a,
      onUpFromFirstItem: Aa,
      isDisabled: jo,
    })),
      (kt[21] = Aa),
      (kt[22] = $a),
      (kt[23] = Ta),
      (kt[24] = jo),
      (kt[25] = $i),
      (kt[26] = _a),
      (kt[27] = Mi));
  else Mi = kt[27];
  let hm;
  if (kt[28] !== _i || kt[29] !== Mi)
    ((hm = r(o, {
      flexDirection: "column",
      marginBottom: 1,
      children: [_i, Mi],
    })),
      (kt[28] = _i),
      (kt[29] = Mi),
      (kt[30] = hm));
  else hm = kt[30];
  return hm;
}
function Rn(i) {
  return (u) => `${i}_${u instanceof Ze ? u.code : "error"}`;
}
var tt = ["allow", "soft_deny", "hard_deny", "environment"];
function Re() {
  let i = autoModeConfigSchema(),
    u = [];
  for (let f of AUTO_MODE_TRUSTED_SOURCES) {
    let a = getSettingsForSource(f);
    if (!a) continue;
    let g = i.safeParse(a.autoMode);
    if (!g.success) continue;
    for (let w of tt) {
      let S = g.data[w];
      if (!S) continue;
      S.forEach((P, B) => {
        if (P === DEFAULTS_SLOT_MARKER) return;
        if (w === "environment" && P.startsWith("### ")) {
          u.push({ text: P, section: w, source: f, index: B, structure: !0 });
          return;
        }
        u.push({ text: P, section: w, source: f, index: B });
      });
    }
  }
  return u;
}
async function Fi(i, u, f) {
  return withFeatureTelemetry(
    "auto_mode_rule_edit",
    () =>
      Sn(
        "environment",
        (a) => {
          if (a.length !== u.length || a.some((S, P) => S !== u[P]))
            return {
              refuse:
                "The environment changed since this screen loaded \u2014 reopen the tab to see the current entries.",
            };
          let { entries: g, problem: w } = Ma(
            i.join(`
`),
          );
          if (w !== null) return { refuse: w };
          return g;
        },
        f,
      ),
    Rn("add"),
  );
}
function Bi() {
  let i = getSettingsForSource("userSettings");
  if (!i) return [];
  let u = autoModeConfigSchema().safeParse(i.autoMode);
  if (!u.success) return [];
  return u.data.environment ?? [];
}
function Oi(i) {
  return Ma(i).problem;
}
function Ma(i) {
  let u = Fa(
    i
      .split(
        `
`,
      )
      .map((a) => vo(a))
      .filter((a) => a.length > 0),
  );
  if (u.length === 0) return { entries: u, problem: null };
  let f = TSe("environment", u);
  if (f !== null) return { entries: u, problem: f };
  return { entries: u, problem: null };
}
function Ce() {
  if (!isBuiltinPermissionsTemplateEnabled()) {
    let g = { enabled: !0, control: "internalTemplate" };
    return { allow: g, soft_deny: g, hard_deny: g, environment: g };
  }
  let i = autoModeConfigSchema(),
    u = new Set(),
    f = {};
  for (let g of AUTO_MODE_TRUSTED_SOURCES) {
    let w = getSettingsForSource(g);
    if (!w) continue;
    let S = i.safeParse(w.autoMode);
    if (!S.success) continue;
    let P = {};
    for (let B of tt) if (S.data[B]?.length) P[B] = S.data[B];
    f[g] = P;
  }
  let a = {};
  for (let g of tt) {
    let w = AUTO_MODE_TRUSTED_SOURCES
      .map((I) => ({ source: I, values: f[I]?.[g] ?? [] }))
      .filter((I) => I.values.length > 0);
    if (w.length === 0) {
      a[g] = { enabled: !0, control: "empty" };
      continue;
    }
    if (g === "environment") {
      let I = w.find((W) => W.values.includes(DEFAULTS_SLOT_MARKER));
      a[g] = I
        ? { enabled: !0, control: "otherSource", source: I.source }
        : { enabled: !1, control: "otherSource", source: w[0].source };
      continue;
    }
    let S = f.userSettings?.[g] ?? [],
      P = w.find((I) => I.source !== "userSettings" && I.values.includes(DEFAULTS_SLOT_MARKER)),
      B = g === "soft_deny" && u.has("userSettings");
    if (!P && B) {
      a[g] = { enabled: !0, control: "otherSource", source: "userSettings" };
      continue;
    }
    if (P) {
      a[g] = { enabled: !0, control: "otherSource", source: P.source };
      continue;
    }
    if (S.length > 0) {
      a[g] = { enabled: S.includes(DEFAULTS_SLOT_MARKER), control: "user" };
      continue;
    }
    a[g] = { enabled: !1, control: "otherSource", source: w[0].source };
  }
  return a;
}
async function Ni(i, u, f) {
  let a = (() => !1)();
  return withFeatureTelemetry(
    "auto_mode_rule_edit",
    () =>
      Sn(
        i,
        (g) => {
          if (!isBuiltinPermissionsTemplateEnabled())
            return {
              refuse:
                "Built-in rules cannot be disabled on internal-template sessions \u2014 they are always in effect.",
            };
          if (i === "environment")
            return {
              refuse:
                "The environment is a single replaceable document \u2014 write your own version to replace the built-in default, or delete your entries to restore it.",
            };
          let w = g.filter((S) => S !== DEFAULTS_SLOT_MARKER);
          if (u) return [DEFAULTS_SLOT_MARKER, ...w];
          if (w.length === 0 && !a)
            return {
              refuse:
                "An empty section cannot hold the off state \u2014 add a rule to this section first.",
            };
          return w;
        },
        f,
      ),
    Rn("toggle"),
  );
}
function Fa(i) {
  return i.filter((u, f) => {
    if (!u.startsWith("### ")) return !0;
    let a = i[f + 1];
    return a !== void 0 && !a.startsWith("### ");
  });
}
class Ze extends Error {
  code;
  constructor(i, u) {
    super(u);
    this.code = i;
    this.name = "AutoModeRuleWriteError";
  }
}
async function Sn(i, u, f) {
  let a = getSettingsFilePathForSource("userSettings");
  if (!a)
    throw new Ze(
      "no_user_settings_path",
      "Could not resolve the user settings file path.",
    );
  let { settings: g, errors: w } = parseSettingsFile(a);
  if (g === null && w.length > 0)
    throw new Ze(
      "settings_file_invalid",
      "the settings file has a validation error or cannot be read, so its auto mode rules are not in effect; fix it (Claude Code names the problem at startup), then try again.",
    );
  let S = !1,
    P = 0,
    B = null,
    I = null,
    { error: W } = await updateSettingsForSourceWithTransform(
      "userSettings",
      (k) => {
        ((S = !1), (P = 0), (B = null), (I = null));
        let z = k?.autoMode;
        if (Array.isArray(z))
          return (
            (B =
              "the existing autoMode value in the settings file is an array \u2014 fix or remove it, then try again."),
            null
          );
        if (z !== void 0 && !autoModeConfigSchema().safeParse(z).success)
          return (
            (B =
              "the existing autoMode value in the settings file does not match the expected shape \u2014 fix or remove it, then try again."),
            null
          );
        let ee = z !== null && typeof z === "object" ? z : void 0,
          ne = Array.isArray(ee?.[i])
            ? ee[i].filter((Ae) => typeof Ae === "string")
            : [],
          fe = u(ne);
        if (fe !== null && !Array.isArray(fe)) return ((I = fe.refuse), null);
        let Oe = (Ae) => Ae.length - (Ae.includes(DEFAULTS_SLOT_MARKER) ? 1 : 0);
        if (fe !== null && Oe(fe) > m7 && Oe(fe) > Oe(ne))
          return ((P = Oe(ne)), null);
        if (fe === null) return ((S = !0), null);
        let Ee = {};
        return ((Ee.autoMode = { [i]: fe }), Ee);
      },
      void 0,
      f,
    );
  if (B) throw new Ze("settings_file_invalid", B);
  if (I !== null) throw new Ze("invalid_input", I);
  if (P)
    throw new Ze(
      "invalid_input",
      `autoMode.${i} already has ${P} entries; the maximum is ${m7}.`,
    );
  if (S)
    throw new Ze(
      "entry_not_found",
      "That rule changed on disk while the dialog was open \u2014 close and reopen /permissions, then try again.",
    );
  if (W) {
    let k = F3e(W, a, "/permissions");
    throw new Ze(k.code, k.message);
  }
}
function vo(i) {
  return oI(i);
}
function Vo(i, u) {
  try {
    return (Ui(i, vo(u)), null);
  } catch (f) {
    return f instanceof Ze ? f.message : String(f);
  }
}
function Ui(i, u) {
  if (u === DEFAULTS_SLOT_MARKER)
    throw new Ze(
      "invalid_input",
      `"${DEFAULTS_SLOT_MARKER}" is reserved \u2014 it splices the built-in rules in and cannot be added as a rule.`,
    );
  if (u.length > SSe)
    throw new Ze(
      "invalid_input",
      `the rule is ${u.length} characters; the maximum is ${SSe}.`,
    );
  let f = u.split(`
`);
  if (i === "environment" && f.some((g) => g.startsWith("### ")))
    throw new Ze(
      "invalid_input",
      "'### ' lines are environment section headers (structure, not entries) and cannot be written here.",
    );
  let a = TSe(i, f);
  if (a) throw new Ze("invalid_input", a);
}
async function Li(i, u, f) {
  return withFeatureTelemetry("auto_mode_rule_edit", () => wm(i, u, f), Rn("add"));
}
async function wm(i, u, f) {
  let a = vo(u);
  return (
    Ui(i, a),
    Sn(
      i,
      (g) => {
        if (i === "environment" && isBuiltinPermissionsTemplateEnabled())
          return {
            refuse:
              "The environment is edited as a document \u2014 use Edit environment on the Auto mode tab.",
          };
        return i !== "environment" && g.length === 0 ? [DEFAULTS_SLOT_MARKER, a] : [...g, a];
      },
      f,
    )
  );
}
async function ji(i, u, f, a, g) {
  return withFeatureTelemetry("auto_mode_rule_edit", () => Sm(i, u, f, a, g), Rn("update"));
}
async function Sm(i, u, f, a, g) {
  let w = vo(a);
  return (
    Ui(i, w),
    Sn(
      i,
      (S) => {
        if (f === DEFAULTS_SLOT_MARKER)
          return {
            refuse: `"${DEFAULTS_SLOT_MARKER}" is splice plumbing, not an editable rule.`,
          };
        if (i === "environment" && f.startsWith("### "))
          return {
            refuse:
              "'### ' lines are environment section headers (structure, not entries) and cannot be edited here.",
          };
        if (S[u] !== f) return null;
        let P = [...S];
        return ((P[u] = w), P);
      },
      g,
    )
  );
}
async function Wi(i, u, f, a) {
  return withFeatureTelemetry("auto_mode_rule_edit", () => Cm(i, u, f, a), Rn("delete"));
}
async function Cm(i, u, f, a) {
  return Sn(
    i,
    (g) => {
      if (f === DEFAULTS_SLOT_MARKER)
        return { refuse: `"${DEFAULTS_SLOT_MARKER}" is splice plumbing, not a deletable rule.` };
      if (i === "environment" && f.startsWith("### "))
        return {
          refuse:
            "'### ' lines are environment section headers (structure, not entries) and cannot be deleted here.",
        };
      if (g[u] !== f) return null;
      let w = [...g.slice(0, u), ...g.slice(u + 1)];
      return i === "environment" ? Fa(w) : w;
    },
    a,
  );
}
F();
function of(mv) {
  return mv.section !== "environment";
}
function nf(Jm) {
  return [Ut(Jm), Jm];
}
function rf(fv) {
  return fv.text;
}
function sf(pv) {
  return Oo(Us(pv).text);
}
function lf(hv) {
  return hv.section === "environment";
}
function af(ec) {
  return {
    tag: ec.legacy ? "legacy" : Rr(ec.source),
    text: Oo(Us(ec.text).text),
  };
}
function cf(gv) {
  return { tag: null, text: Oo(Us(gv).text) };
}
function uf(yv) {
  return yv.source;
}
function df(bv) {
  return bv.source === "userSettings";
}
function mf(vv) {
  return vv.source !== "userSettings";
}
function ff(wr) {
  let tc = me(wr.section);
  let Zm = wr.legacy ? "legacy" : Rr(wr.source);
  if (!Zm) {
    return e(t, { color: ze(wr.section), children: tc.padEnd(Pe) });
  }
  return r(N, {
    children: [
      e(t, { color: ze(wr.section), children: tc }),
      e(t, { dimColor: !0, children: ` \xB7 ${Zm}`.padEnd(Pe - tc.length) }),
    ],
  });
}
function pf(ef) {
  return ef ? ` \xB7 ${ef}`.padEnd(Pe) : " ".repeat(Pe);
}
function hf(wv, Rv) {
  return [wv, Rv];
}
function qi() {
  let jb = _(1),
    Am;
  if (jb[0] === MEMO_CACHE_SENTINEL) {
    let Wb = getAutoModeTemplateRules();
    Am = Object.fromEntries(tt.map((Pm) => [Pm, Wb[Pm]?.length ?? 0]));
    jb[0] = Am;
  } else Am = jb[0];
  return Am;
}
function me(i) {
  switch (i) {
    case "allow":
      return "Soft allow";
    case "soft_deny":
      return "Soft deny";
    case "hard_deny":
      return "Hard deny";
    case "environment":
      return "Environment";
  }
}
function ze(i) {
  switch (i) {
    case "allow":
      return "success";
    case "soft_deny":
      return "warning";
    case "hard_deny":
      return "error";
    case "environment":
      return;
  }
}
function Le(i) {
  switch (i) {
    case "userSettings":
      return "user settings";
    case "flagSettings":
      return "the --settings flag";
    case "policySettings":
      return "managed settings";
  }
}
function Nt(i) {
  let u = ["userSettings", "flagSettings", "policySettings"];
  return tt.flatMap((f) => {
    let a = i.filter((g) => g.section === f);
    return u.flatMap((g) => a.filter((w) => w.source === g));
  });
}
function Ut(i) {
  return `${i.section}:${i.source}:${i.legacy ? "legacy-" : ""}${i.index}`;
}
function Rr(i) {
  switch (i) {
    case "userSettings":
      return null;
    case "flagSettings":
      return "flag";
    case "policySettings":
      return "org";
  }
}
var Pe = 20;
function tf(i, u) {
  let f = [],
    a = "",
    g = 0;
  for (let { segment: w } of getGraphemeSegmenter().segment(i)) {
    let S = te(w);
    if (g + S > u && a.length > 0) (f.push(a), (a = ""), (g = 0));
    ((a += w), (g += S));
  }
  if (a.length > 0) f.push(a);
  return f;
}
var oc = 5;
function Cr(i, u) {
  if (te(i) <= u) return i;
  let f = "",
    a = 0;
  for (let { segment: g } of getGraphemeSegmenter().segment(i)) {
    let w = te(g);
    if (a + w > u - 1) break;
    ((f += g), (a += w));
  }
  return `${f}\u2026`;
}
function nc(i, u) {
  let f = [],
    a = "",
    g = 0,
    w = () => {
      if (a.length > 0) (f.push(a), (a = ""), (g = 0));
    };
  for (let S of i.split(" ")) {
    let P = te(S) > u ? tf(S, u) : [S];
    for (let B of P) {
      let I = te(B);
      if (g === 0) ((a = B), (g = I));
      else if (g + 1 + I <= u) ((a = `${a} ${B}`), (g += 1 + I));
      else (w(), (a = B), (g = I));
    }
  }
  return (
    w(),
    f.join(`
${" ".repeat(Pe)}`)
  );
}
function xr(Vb) {
  let dt = _(55),
    {
      entries: Yo,
      searchQuery: Tt,
      isSearchMode: Cn,
      isFocused: Ba,
      onAddNew: Oa,
      onSelectEntry: Na,
      onCancel: Ua,
      onHeaderFocusChange: Vi,
      cursorOffset: Ia,
      defaultFocusValue: La,
      builtinsState: Bt,
      onSelectBuiltins: ja,
      onSelectEnvironment: Wa,
    } = Vb,
    pr = qi(),
    km;
  if (dt[0] === MEMO_CACHE_SENTINEL) ((km = getAutoModeTemplateRules().environment ?? []), (dt[0] = km));
  else km = dt[0];
  let Yb = km,
    xn = a0e(),
    { columns: Ya } = useTerminalSize(),
    { headerFocused: Ot, focusHeader: za, blurHeader: Yi } = Jd(),
    Tm,
    $m;
  if (dt[1] !== Yi || dt[2] !== Ot || dt[3] !== Cn)
    ((Tm = () => {
      if (Cn && Ot) Yi();
    }),
      ($m = [Cn, Ot, Yi]),
      (dt[1] = Yi),
      (dt[2] = Ot),
      (dt[3] = Cn),
      (dt[4] = Tm),
      (dt[5] = $m));
  else ((Tm = dt[4]), ($m = dt[5]));
  E(Tm, $m);
  let Dm, _m;
  if (dt[6] !== Ot || dt[7] !== Vi)
    ((Dm = () => {
      Vi(Ot);
    }),
      (_m = [Ot, Vi]),
      (dt[6] = Ot),
      (dt[7] = Vi),
      (dt[8] = Dm),
      (dt[9] = _m));
  else ((Dm = dt[8]), (_m = dt[9]));
  E(Dm, _m);
  let wo = Bt.environment.control !== "internalTemplate",
    Mm;
  if (dt[10] !== Yo || dt[11] !== wo)
    ((Mm = wo ? Yo.filter(of) : Yo),
      (dt[10] = Yo),
      (dt[11] = wo),
      (dt[12] = Mm));
  else Mm = dt[12];
  let An = Mm,
    Fm;
  if (dt[13] !== An) ((Fm = new Map(An.map(nf))), (dt[13] = An), (dt[14] = Fm));
  else Fm = dt[14];
  let Ha = Fm,
    Bm;
  if (
    dt[15] !== Bt ||
    dt[16] !== pr ||
    dt[17] !== Yo ||
    dt[18] !== wo ||
    dt[19] !== An ||
    dt[20] !== Tt ||
    dt[21] !== xn ||
    dt[22] !== Ya
  ) {
    let Om = Tt.toLowerCase();
    let zi = Nt(An).filter((Hb) => !Tt || Hb.text.toLowerCase().includes(Om));
    let Nm = Qk(zi.map(rf), sf);
    let hr = wo ? Nt(Yo).filter(lf) : [];
    let Um = hr.length > 0;
    let Ka = Um ? hr.map(af) : Yb.map(cf);
    let Xa = Bt.environment;
    let Kb = dedupe(hr.map(uf)).map(Le).join(" and ");
    let Xb = hr.some(df);
    let qb = hr.some(mf);
    let Gb = !qb
      ? "enter to edit"
      : Xb
        ? "enter to edit your entries"
        : "enter to add your own";
    let Qb = !Um
      ? `Built-in default document${Xa.control === "otherSource" ? ` \xB7 kept by ${Le(Xa.source ?? "userSettings")}` : ""} \xB7 enter to edit`
      : `${Xa.enabled ? "Extends" : "Replaces"} the built-in default \xB7 from ${Kb} \xB7 ${Gb}`;
    let gr;
    if (dt[24] !== Bt)
      ((gr = (Im) => {
        let qa = Bt[Im];
        if (Im === "environment") {
          return qa.control === "internalTemplate";
        }
        return !(qa.control === "otherSource" && !qa.enabled);
      }),
        (dt[24] = Bt),
        (dt[25] = gr));
    else gr = dt[25];
    let Lm = gr;
    let Zb =
      Tt.length > 0 && Ka.some((Jb) => Jb.text.toLowerCase().includes(Om));
    let jm = wo && (Tt ? Zb : !0);
    let ev = zi.length + (jm ? 1 : 0) + (Tt ? 0 : 1 + countMatching(tt, Lm));
    let tv = String(ev).length + 2;
    let yr = Math.max(1, (xn ?? Ya - 4) - 4 - tv - Pe);
    let ov = ff;
    let Pn;
    if (dt[26] !== yr)
      ((Pn = (nv) => {
        let Wm = nc(nv, yr);
        let Ga = Wm.split(`
`);
        if (Ga.length <= 3) {
          return Wm;
        }
        return (
          Ga.slice(0, 3).join(`
`) +
          `
${" ".repeat(Pe)}\u2026 (+${Ga.length - 3} lines)`
        );
      }),
        (dt[26] = yr),
        (dt[27] = Pn));
    else Pn = dt[27];
    let Vm = Pn;
    let zm = (Qa, Ym) => ({
      label: r(t, {
        children: [
          ov(Qa),
          Qa.structure
            ? e(t, { dimColor: !0, children: Vm(Nm[Ym] ?? "") })
            : Vm(Nm[Ym] ?? ""),
        ],
      }),
      value: Ut(Qa),
    });
    let rv = pf;
    let Xm = () => {
      let Hm = Ka.slice(0, oc);
      let Ja = Ka.length - Hm.length;
      return {
        label: r(t, {
          children: [
            e(t, {
              color: ze("environment"),
              children: "Environment".padEnd(Pe),
            }),
            e(t, { dimColor: !0, children: Cr(Qb, yr) }),
            Hm.map((Km, iv) =>
              e(
                t,
                {
                  dimColor: !0,
                  children: `
${rv(Km.tag)}${Cr(Km.text, yr)}`,
                },
                iv,
              ),
            ),
            Ja > 0
              ? e(t, {
                  dimColor: !0,
                  children: `
${" ".repeat(Pe)}\u2026 (+${Ja} more ${Ja === 1 ? "line" : "lines"})`,
                })
              : null,
          ],
        }),
        value: "environment-document",
      };
    };
    let zo;
    if (dt[28] !== Bt || dt[29] !== pr)
      ((zo = (Zt) => {
        let Tn = Bt[Zt];
        let sv = Tn.enabled ? "[x]" : "[ ]";
        let lv = pr[Zt] ?? 0;
        if (Tn.control === "internalTemplate") {
          return {
            label: r(t, {
              children: [
                e(t, { color: ze(Zt), children: me(Zt).padEnd(Pe) }),
                Zt === "environment"
                  ? "Built-in environment"
                  : "Built-in rules",
                e(t, { dimColor: !0, children: "" }),
              ],
            }),
            value: `builtins:${Zt}`,
          };
        }
        return {
          label: r(t, {
            children: [
              e(t, { color: ze(Zt), children: me(Zt).padEnd(Pe) }),
              `${sv} Built-in rules`,
              r(t, {
                dimColor: !0,
                children: [
                  ` \xB7 ${lv}${Tn.enabled ? "" : " \xB7 off"}`,
                  Tn.control === "user" || Tn.control === "empty"
                    ? ""
                    : ` \xB7 from ${Le(Tn.source ?? "policySettings")}`,
                ],
              }),
            ],
          }),
          value: `builtins:${Zt}`,
        };
      }),
        (dt[28] = Bt),
        (dt[29] = pr),
        (dt[30] = zo));
    else zo = dt[30];
    let av = zo;
    Bm = Tt
      ? [...zi.map(zm), ...(jm ? [Xm()] : [])]
      : [
          { label: `Add a new rule${figures.ellipsis}`, value: "add-new-rule" },
          ...tt.flatMap((Hi) => {
            if (Hi === "environment" && wo) {
              return [Xm()];
            }
            let qm = zi
              .map(hf)
              .filter((_n) => {
                let [cv] = _n;
                return cv.section === Hi;
              })
              .map((br) => {
                let [uv, dv] = br;
                return zm(uv, dv);
              });
            return Lm(Hi) ? [av(Hi), ...qm] : qm;
          }),
        ];
    ((dt[15] = Bt),
      (dt[16] = pr),
      (dt[17] = Yo),
      (dt[18] = wo),
      (dt[19] = An),
      (dt[20] = Tt),
      (dt[21] = xn),
      (dt[22] = Ya),
      (dt[23] = Bm));
  } else Bm = dt[23];
  let Ki = Bm,
    gr;
  if (dt[31] === MEMO_CACHE_SENTINEL)
    ((gr = e(t, {
      wrap: "wrap-trim",
      children:
        "Extra rules for the auto mode classifier. Rules are plain sentences; new rules are saved to your user settings.",
    })),
      (dt[31] = gr));
  else gr = dt[31];
  const Pn = Cn && !Ot;
  let zo;
  if (
    dt[32] !== Ia ||
    dt[33] !== Ba ||
    dt[34] !== Tt ||
    dt[35] !== Pn ||
    dt[36] !== xn
  )
    ((zo = e(o, {
      marginBottom: 1,
      marginTop: 1,
      flexDirection: "column",
      children: e(SearchInput, {
        query: Tt,
        isFocused: Pn,
        isTerminalFocused: Ba,
        width: xn,
        cursorOffset: Ia,
      }),
    })),
      (dt[32] = Ia),
      (dt[33] = Ba),
      (dt[34] = Tt),
      (dt[35] = Pn),
      (dt[36] = xn),
      (dt[37] = zo));
  else zo = dt[37];
  let _n;
  if (
    dt[38] !== Ha ||
    dt[39] !== Oa ||
    dt[40] !== ja ||
    dt[41] !== Na ||
    dt[42] !== Wa
  )
    ((_n = (vr) => {
      if (vr === "add-new-rule") {
        Oa();
        return;
      }
      if (vr === "environment-document") {
        Wa();
        return;
      }
      if (vr.startsWith("builtins:")) {
        ja(vr.slice(9));
        return;
      }
      let Gm = Ha.get(vr);
      if (Gm) Na(Gm);
    }),
      (dt[38] = Ha),
      (dt[39] = Oa),
      (dt[40] = ja),
      (dt[41] = Na),
      (dt[42] = Wa),
      (dt[43] = _n));
  else _n = dt[43];
  const br = Math.min(10, Ki.length),
    Za = Cn || Ot;
  let Xi;
  if (
    dt[44] !== La ||
    dt[45] !== za ||
    dt[46] !== Ua ||
    dt[47] !== Ki ||
    dt[48] !== _n ||
    dt[49] !== br ||
    dt[50] !== Za
  )
    ((Xi = e(ve, {
      options: Ki,
      defaultFocusValue: La,
      onChange: _n,
      onCancel: Ua,
      visibleOptionCount: br,
      isDisabled: Za,
      onUpFromFirstItem: za,
    })),
      (dt[44] = La),
      (dt[45] = za),
      (dt[46] = Ua),
      (dt[47] = Ki),
      (dt[48] = _n),
      (dt[49] = br),
      (dt[50] = Za),
      (dt[51] = Xi));
  else Xi = dt[51];
  let Qm;
  if (dt[52] !== zo || dt[53] !== Xi)
    ((Qm = r(o, { flexDirection: "column", children: [gr, zo, Xi] })),
      (dt[52] = zo),
      (dt[53] = Xi),
      (dt[54] = Qm));
  else Qm = dt[54];
  return Qm;
}
F();
import { open as Of } from "fs/promises";
import { constants as Dr } from "fs";
import { randomBytes as Nf } from "crypto";
import { join } from "path";
function Lf(aw) {
  return `- ${aw}`;
}
async function vc(i, u) {
  let f = join(getClaudeTempDir(), `${AUTO_MODE_BUILTINS_FILE_PREFIX}${i}-${Nf(8).toString("hex")}.md`),
    a = await Of(f, Dr.O_WRONLY | Dr.O_CREAT | Dr.O_EXCL | Dr.O_NOFOLLOW, 384);
  try {
    await a.writeFile(u, "utf8");
  } finally {
    await a.close();
  }
  return { opened: openFileInEditor(f), path: f };
}
function Un(rc) {
  let yf = _(5),
    [ic, gf] = d(null),
    sc = C(!1),
    bf;
  if (yf[0] !== rc)
    ((bf = (Qv) => {
      if (sc.current) {
        return;
      }
      ((sc.current = !0),
        vc(rc, Qv)
          .then((Gi) => {
            let { opened: Jv, path: lc } = Gi;
            gf(
              Jv
                ? `opening ${lc}`
                : resolveEditorCommand()
                  ? `wrote ${lc} \u2014 the editor could not be launched`
                  : `wrote ${lc} \u2014 no $VISUAL/$EDITOR set`,
            );
          })
          .catch((ac) => {
            gf(
              `could not write the file: ${ac instanceof Error ? ac.message : String(ac)}`,
            );
          })
          .finally(() => {
            sc.current = !1;
          }));
    }),
      (yf[0] = rc),
      (yf[1] = bf));
  else bf = yf[1];
  let cc = bf,
    Gi;
  if (yf[2] !== cc || yf[3] !== ic)
    ((Gi = [ic, cc]), (yf[2] = cc), (yf[3] = ic), (yf[4] = Gi));
  else Gi = yf[4];
  return Gi;
}
function Wt(Zv) {
  let Pr = _(13),
    { entry: Ar, onCancel: Mn } = Zv,
    [Qi, uc] = Un(Ar.section);
  if (Ar.text.length <= vve) {
    return null;
  }
  let vf;
  if (Pr[0] === MEMO_CACHE_SENTINEL)
    ((vf = [
      {
        label: `View the full text in editor${getEditorDisplayName() ? ` (${getEditorDisplayName()})` : ""}`,
        value: "editor",
      },
      { label: "Cancel", value: "cancel" },
    ]),
      (Pr[0] = vf));
  else vf = Pr[0];
  let Ji;
  if (Pr[1] !== Ar.text || Pr[2] !== uc || Pr[3] !== Mn)
    ((Ji = (ew) => {
      if (ew === "editor") uc(Ar.text);
      else Mn();
    }),
      (Pr[1] = Ar.text),
      (Pr[2] = uc),
      (Pr[3] = Mn),
      (Pr[4] = Ji));
  else Ji = Pr[4];
  let Zi;
  if (Pr[5] !== Mn || Pr[6] !== Ji)
    ((Zi = e(ve, { options: vf, onChange: Ji, onCancel: Mn })),
      (Pr[5] = Mn),
      (Pr[6] = Ji),
      (Pr[7] = Zi));
  else Zi = Pr[7];
  let es;
  if (Pr[8] !== Qi)
    ((es =
      Qi !== null && e(t, { dimColor: !0, wrap: "wrap-trim", children: Qi })),
      (Pr[8] = Qi),
      (Pr[9] = es));
  else es = Pr[9];
  let wf;
  if (Pr[10] !== Zi || Pr[11] !== es)
    ((wf = r(N, { children: [Zi, es] })),
      (Pr[10] = Zi),
      (Pr[11] = es),
      (Pr[12] = wf));
  else wf = Pr[12];
  return wf;
}
function He(tw) {
  let Lt = _(25),
    { entry: ht } = tw,
    Rf;
  if (Lt[0] !== ht.text) ((Rf = Us(ht.text)), (Lt[0] = ht.text), (Lt[1] = Rf));
  else Rf = Lt[1];
  let Fn = Rf,
    ts;
  if (Lt[2] !== Fn.text)
    ((ts = e(t, { bold: !0, wrap: "wrap-trim", children: Fn.text })),
      (Lt[2] = Fn.text),
      (Lt[3] = ts));
  else ts = Lt[3];
  let os;
  if (Lt[4] !== Fn.needsGutter || Lt[5] !== ts)
    ((os = e(MultilineBorderBox, { multiline: Fn.needsGutter, children: ts })),
      (Lt[4] = Fn.needsGutter),
      (Lt[5] = ts),
      (Lt[6] = os));
  else os = Lt[6];
  let ns;
  if (Lt[7] !== ht.section)
    ((ns = ze(ht.section)), (Lt[7] = ht.section), (Lt[8] = ns));
  else ns = Lt[8];
  let rs;
  if (Lt[9] !== ht.section)
    ((rs = me(ht.section)), (Lt[9] = ht.section), (Lt[10] = rs));
  else rs = Lt[10];
  let is;
  if (Lt[11] !== ns || Lt[12] !== rs)
    ((is = e(t, { color: ns, children: rs })),
      (Lt[11] = ns),
      (Lt[12] = rs),
      (Lt[13] = is));
  else is = Lt[13];
  const dc = ht.structure ? "section header" : "rule";
  let ls;
  if (Lt[14] !== ht.source)
    ((ls = Le(ht.source)), (Lt[14] = ht.source), (Lt[15] = ls));
  else ls = Lt[15];
  let as;
  if (Lt[16] !== dc || Lt[17] !== ls)
    ((as = r(t, {
      dimColor: !0,
      children: [" ", dc, " for the auto mode classifier \xB7 From ", ls],
    })),
      (Lt[16] = dc),
      (Lt[17] = ls),
      (Lt[18] = as));
  else as = Lt[18];
  let cs;
  if (Lt[19] !== is || Lt[20] !== as)
    ((cs = r(t, { children: [is, as] })),
      (Lt[19] = is),
      (Lt[20] = as),
      (Lt[21] = cs));
  else cs = Lt[21];
  let Sf;
  if (Lt[22] !== cs || Lt[23] !== os)
    ((Sf = r(o, { flexDirection: "column", marginX: 2, children: [os, cs] })),
      (Lt[22] = cs),
      (Lt[23] = os),
      (Lt[24] = Sf));
  else Sf = Lt[24];
  return Sf;
}
function _r(ow) {
  let Z = _(78),
    { entry: j, onEdit: mc, onDelete: Bn, onCancel: he } = ow,
    Cf;
  if (Z[0] === MEMO_CACHE_SENTINEL) ((Cf = { context: "Confirmation" }), (Z[0] = Cf));
  else Cf = Z[0];
  useKeybinding("confirm:no", he, Cf);
  let xf;
  if (Z[1] === MEMO_CACHE_SENTINEL)
    ((xf = e(o, {
      marginLeft: 3,
      children: e(InputGuide, {
        children: e(KeybindingHint, { chord: "escape", action: "cancel" }),
      }),
    })),
      (Z[1] = xf));
  else xf = Z[1];
  let On = xf;
  if (j.legacy) {
    let ke;
    if (Z[2] !== j) ((ke = e(He, { entry: j })), (Z[2] = j), (Z[3] = ke));
    else ke = Z[3];
    const xe =
      j.source === "userSettings"
        ? "This editor writes only the modern keys \u2014 move the rule to autoMode.soft_deny in your settings file to manage it here."
        : "It is delivered by " +
          Le(j.source) +
          " and cannot be modified here.";
    let ae;
    if (Z[4] !== xe)
      ((ae = r(t, {
        italic: !0,
        children: [
          "",
          "This rule comes from the legacy autoMode.deny key, which the classifier still enforces as a soft deny.",
          " ",
          xe,
        ],
      })),
        (Z[4] = xe),
        (Z[5] = ae));
    else ae = Z[5];
    let Me;
    if (Z[6] !== j || Z[7] !== he)
      ((Me = e(Wt, { entry: j, onCancel: he })),
        (Z[6] = j),
        (Z[7] = he),
        (Z[8] = Me));
    else Me = Z[8];
    let ot;
    if (Z[9] !== ke || Z[10] !== ae || Z[11] !== Me)
      ((ot = r(N, {
        children: [
          r(TitledBorderBox, {
            color: "permission",
            title: "Rule details",
            children: [ke, ae, Me],
          }),
          On,
        ],
      })),
        (Z[9] = ke),
        (Z[10] = ae),
        (Z[11] = Me),
        (Z[12] = ot));
    else ot = Z[12];
    return ot;
  }
  if (j.structure) {
    let ke;
    if (Z[13] !== j) ((ke = e(He, { entry: j })), (Z[13] = j), (Z[14] = ke));
    else ke = Z[14];
    let xe;
    if (Z[15] !== j.source)
      ((xe =
        j.source !== "userSettings"
          ? `It is delivered by ${Le(j.source)} and cannot be modified here.`
          : isAutoModeSetupCommandEnabled()
            ? "Re-run /auto-mode-setup to restructure, or edit your settings file directly."
            : "Edit your settings file directly to restructure."),
        (Z[15] = j.source),
        (Z[16] = xe));
    else xe = Z[16];
    let ae;
    if (Z[17] !== xe)
      ((ae = r(t, {
        italic: !0,
        children: [
          "A section header that organizes the environment entries below it; it renders into the classifier prompt as written.",
          " ",
          xe,
        ],
      })),
        (Z[17] = xe),
        (Z[18] = ae));
    else ae = Z[18];
    let Me;
    if (Z[19] !== j || Z[20] !== he)
      ((Me = e(Wt, { entry: j, onCancel: he })),
        (Z[19] = j),
        (Z[20] = he),
        (Z[21] = Me));
    else Me = Z[21];
    let ot;
    if (Z[22] !== ke || Z[23] !== ae || Z[24] !== Me)
      ((ot = r(N, {
        children: [
          r(TitledBorderBox, {
            color: "permission",
            title: "Rule details",
            children: [ke, ae, Me],
          }),
          On,
        ],
      })),
        (Z[22] = ke),
        (Z[23] = ae),
        (Z[24] = Me),
        (Z[25] = ot));
    else ot = Z[25];
    return ot;
  }
  if (j.source === "policySettings") {
    let ke;
    if (Z[26] !== j) ((ke = e(He, { entry: j })), (Z[26] = j), (Z[27] = ke));
    else ke = Z[27];
    let xe;
    if (Z[28] === MEMO_CACHE_SENTINEL)
      ((xe = r(t, {
        italic: !0,
        children: [
          "This rule is configured by managed settings and cannot be modified.",
          `
`,
          "Contact your system administrator for more information.",
        ],
      })),
        (Z[28] = xe));
    else xe = Z[28];
    let ae;
    if (Z[29] !== j || Z[30] !== he)
      ((ae = e(Wt, { entry: j, onCancel: he })),
        (Z[29] = j),
        (Z[30] = he),
        (Z[31] = ae));
    else ae = Z[31];
    let Me;
    if (Z[32] !== ke || Z[33] !== ae)
      ((Me = r(N, {
        children: [
          r(TitledBorderBox, {
            color: "permission",
            title: "Rule details",
            children: [ke, xe, ae],
          }),
          On,
        ],
      })),
        (Z[32] = ke),
        (Z[33] = ae),
        (Z[34] = Me));
    else Me = Z[34];
    return Me;
  }
  if (j.source === "flagSettings") {
    let ke;
    if (Z[35] !== j) ((ke = e(He, { entry: j })), (Z[35] = j), (Z[36] = ke));
    else ke = Z[36];
    let xe;
    if (Z[37] === MEMO_CACHE_SENTINEL)
      ((xe = e(t, {
        italic: !0,
        children:
          "This rule comes from a read-only source (the --settings flag) and cannot be modified here.",
      })),
        (Z[37] = xe));
    else xe = Z[37];
    let ae;
    if (Z[38] !== j || Z[39] !== he)
      ((ae = e(Wt, { entry: j, onCancel: he })),
        (Z[38] = j),
        (Z[39] = he),
        (Z[40] = ae));
    else ae = Z[40];
    let Me;
    if (Z[41] !== ke || Z[42] !== ae)
      ((Me = r(N, {
        children: [
          r(TitledBorderBox, {
            color: "permission",
            title: "Rule details",
            children: [ke, xe, ae],
          }),
          On,
        ],
      })),
        (Z[41] = ke),
        (Z[42] = ae),
        (Z[43] = Me));
    else Me = Z[43];
    return Me;
  }
  let ke;
  if (Z[44] !== j.section || Z[45] !== j.text)
    ((ke = Vo(j.section, j.text)),
      (Z[44] = j.section),
      (Z[45] = j.text),
      (Z[46] = ke));
  else ke = Z[46];
  let us = ke;
  if (us !== null) {
    let xe;
    if (Z[47] !== j) ((xe = e(He, { entry: j })), (Z[47] = j), (Z[48] = xe));
    else xe = Z[48];
    let ae;
    if (Z[49] !== us)
      ((ae = r(t, {
        italic: !0,
        children: [
          "This rule cannot be edited here: ",
          us,
          `
`,
          "Edit it in your settings file, or delete it here.",
        ],
      })),
        (Z[49] = us),
        (Z[50] = ae));
    else ae = Z[50];
    let Me;
    if (Z[51] === MEMO_CACHE_SENTINEL)
      ((Me = [
        { label: "Delete", value: "delete" },
        { label: "Cancel", value: "cancel" },
      ]),
        (Z[51] = Me));
    else Me = Z[51];
    let ot;
    if (Z[52] !== he || Z[53] !== Bn)
      ((ot = (nw) => {
        if (nw === "delete") Bn();
        else he();
      }),
        (Z[52] = he),
        (Z[53] = Bn),
        (Z[54] = ot));
    else ot = Z[54];
    let eo;
    if (Z[55] !== he || Z[56] !== ot)
      ((eo = e(ve, { options: Me, onChange: ot, onCancel: he })),
        (Z[55] = he),
        (Z[56] = ot),
        (Z[57] = eo));
    else eo = Z[57];
    let kr;
    if (Z[58] !== xe || Z[59] !== ae || Z[60] !== eo)
      ((kr = r(N, {
        children: [
          r(TitledBorderBox, {
            color: "permission",
            title: "Rule details",
            children: [xe, ae, eo],
          }),
          On,
        ],
      })),
        (Z[58] = xe),
        (Z[59] = ae),
        (Z[60] = eo),
        (Z[61] = kr));
    else kr = Z[61];
    return kr;
  }
  let xe;
  if (Z[62] !== j) ((xe = e(He, { entry: j })), (Z[62] = j), (Z[63] = xe));
  else xe = Z[63];
  let ae;
  if (Z[64] !== j.section)
    ((ae =
      j.section === "environment" &&
      r(t, {
        italic: !0,
        children: [
          "Environment entries describe this machine and project for the classifier.",
          isAutoModeSetupCommandEnabled() ? " Re-run /auto-mode-setup to rebuild them from scratch." : "",
        ],
      })),
      (Z[64] = j.section),
      (Z[65] = ae));
  else ae = Z[65];
  let Me;
  if (Z[66] === MEMO_CACHE_SENTINEL)
    ((Me = [
      { label: "Edit", value: "edit" },
      { label: "Delete", value: "delete" },
      { label: "Cancel", value: "cancel" },
    ]),
      (Z[66] = Me));
  else Me = Z[66];
  let ot;
  if (Z[67] !== he || Z[68] !== Bn || Z[69] !== mc)
    ((ot = (Ef) => {
      if (Ef === "edit") mc();
      else if (Ef === "delete") Bn();
      else he();
    }),
      (Z[67] = he),
      (Z[68] = Bn),
      (Z[69] = mc),
      (Z[70] = ot));
  else ot = Z[70];
  let eo;
  if (Z[71] !== he || Z[72] !== ot)
    ((eo = e(ve, { options: Me, onChange: ot, onCancel: he })),
      (Z[71] = he),
      (Z[72] = ot),
      (Z[73] = eo));
  else eo = Z[73];
  let kr;
  if (Z[74] !== xe || Z[75] !== ae || Z[76] !== eo)
    ((kr = r(N, {
      children: [
        r(TitledBorderBox, {
          color: "permission",
          title: "Rule details",
          children: [xe, ae, eo],
        }),
        On,
      ],
    })),
      (Z[74] = xe),
      (Z[75] = ae),
      (Z[76] = eo),
      (Z[77] = kr));
  else kr = Z[77];
  return kr;
}
var If = 3200;
function wc(i) {
  return i ? Number.POSITIVE_INFINITY : If;
}
function Mr(rw) {
  let Te = _(83),
    { section: jt, state: ge, onToggle: fc, onCancel: Ho } = rw,
    pc = gi(),
    Af;
  if (Te[0] === MEMO_CACHE_SENTINEL) ((Af = { context: "Settings" }), (Te[0] = Af));
  else Af = Te[0];
  useKeybinding("confirm:no", Ho, Af);
  let [ds, hc] = Un(jt),
    ms,
    fs,
    ps,
    hs,
    Ro,
    Rt,
    gs,
    ys,
    bs,
    vs,
    ws,
    Rs,
    Tr;
  if (
    Te[1] !== pc ||
    Te[2] !== jt ||
    Te[3] !== ge.control ||
    Te[4] !== ge.enabled
  ) {
    Ro = getAutoModeTemplateRules()[jt] ?? [];
    let Ko;
    if (Te[18] === MEMO_CACHE_SENTINEL)
      ((Ko = e(InputGuide, { children: e(KeybindingHint, { chord: "esc", action: "cancel" }) })),
        (Te[18] = Ko));
    else Ko = Te[18];
    hs = Ko;
    ps = ge.control === "user";
    fs = TitledBorderBox;
    ws = "permission";
    Rs = "Built-in rules";
    let to;
    if (Te[19] !== jt) ((to = ze(jt)), (Te[19] = jt), (Te[20] = to));
    else to = Te[20];
    let Xo;
    if (Te[21] !== jt) ((Xo = me(jt)), (Te[21] = jt), (Te[22] = Xo));
    else Xo = Te[22];
    let So;
    if (Te[23] !== to || Te[24] !== Xo)
      ((So = e(t, { color: to, children: Xo })),
        (Te[23] = to),
        (Te[24] = Xo),
        (Te[25] = So));
    else So = Te[25];
    const Co = `${Ro.length} built-in ${Ro.length === 1 ? "rule" : "rules"} \xB7 ${ge.enabled ? "in effect" : "switched off"}`;
    let oo;
    if (Te[26] !== Co)
      ((oo = r(t, { dimColor: !0, children: [" ", "\xB7", " ", Co] })),
        (Te[26] = Co),
        (Te[27] = oo));
    else oo = Te[27];
    if (Te[28] !== So || Te[29] !== oo)
      ((Tr = r(t, { children: [So, oo] })),
        (Te[28] = So),
        (Te[29] = oo),
        (Te[30] = Tr));
    else Tr = Te[30];
    ms = o;
    gs = "column";
    ys = 2;
    bs = 1;
    vs = 1;
    let Ss = wc(pc);
    Rt = [];
    let Cs = 0;
    for (const gc of Ro) {
      if (Cs + gc.length > Ss && Rt.length > 0) {
        break;
      }
      (Rt.push(gc), (Cs = Cs + gc.length), Cs);
    }
    if (Rt.length === 1 && Rt[0].length > Ss) {
      let iw = Rt[0].length - Ss;
      Rt[0] = `${truncateToCodeUnits(Rt[0], Ss)}\u2026 +${iw} more characters \u2014 View in editor for the full text.`;
    }
    ((Te[1] = pc),
      (Te[2] = jt),
      (Te[3] = ge.control),
      (Te[4] = ge.enabled),
      (Te[5] = ms),
      (Te[6] = fs),
      (Te[7] = ps),
      (Te[8] = hs),
      (Te[9] = Ro),
      (Te[10] = Rt),
      (Te[11] = gs),
      (Te[12] = ys),
      (Te[13] = bs),
      (Te[14] = vs),
      (Te[15] = ws),
      (Te[16] = Rs),
      (Te[17] = Tr));
  } else
    ((ms = Te[5]),
      (fs = Te[6]),
      (ps = Te[7]),
      (hs = Te[8]),
      (Ro = Te[9]),
      (Rt = Te[10]),
      (gs = Te[11]),
      (ys = Te[12]),
      (bs = Te[13]),
      (vs = Te[14]),
      (ws = Te[15]),
      (Rs = Te[16]),
      (Tr = Te[17]));
  let $r = Ro.length - Rt.length,
    Ko;
  if (Te[31] !== Rt || Te[32] !== ge.enabled)
    ((Ko = Rt.map((sw, lw) =>
      r(
        t,
        {
          dimColor: !0,
          strikethrough: !ge.enabled,
          wrap: "wrap-trim",
          children: ["- ", sw],
        },
        lw,
      ),
    )),
      (Te[31] = Rt),
      (Te[32] = ge.enabled),
      (Te[33] = Ko));
  else Ko = Te[33];
  let to;
  if (Te[34] !== $r)
    ((to =
      $r > 0 &&
      r(t, {
        dimColor: !0,
        italic: !0,
        children: [
          "\u2026 +",
          $r,
          " more ",
          $r === 1 ? "rule" : "rules",
          " \u2014 run `claude auto-mode defaults` to print the full set.",
        ],
      })),
      (Te[34] = $r),
      (Te[35] = to));
  else to = Te[35];
  let Xo;
  if (Te[36] !== to || Te[37] !== Ko)
    ((Xo = r(N, { children: [Ko, to] })),
      (Te[36] = to),
      (Te[37] = Ko),
      (Te[38] = Xo));
  else Xo = Te[38];
  const So = Xo;
  let Co;
  if (
    Te[39] !== ms ||
    Te[40] !== So ||
    Te[41] !== gs ||
    Te[42] !== ys ||
    Te[43] !== bs ||
    Te[44] !== vs
  )
    ((Co = e(ms, {
      flexDirection: gs,
      marginX: ys,
      marginY: bs,
      gap: vs,
      children: So,
    })),
      (Te[39] = ms),
      (Te[40] = So),
      (Te[41] = gs),
      (Te[42] = ys),
      (Te[43] = bs),
      (Te[44] = vs),
      (Te[45] = Co));
  else Co = Te[45];
  let oo;
  if (Te[46] !== ge.control)
    ((oo =
      ge.control === "empty" &&
      e(t, {
        italic: !0,
        children:
          "This section has no configured rules, so the built-ins apply. Add a rule to customize it.",
      })),
      (Te[46] = ge.control),
      (Te[47] = oo));
  else oo = Te[47];
  let xs;
  if (Te[48] !== ge.control || Te[49] !== ge.enabled || Te[50] !== ge.source)
    ((xs =
      ge.control === "otherSource" &&
      e(t, {
        italic: !0,
        children: ge.enabled
          ? `Kept on by ${Le(ge.source ?? "policySettings")} \u2014 it cannot be switched off here.`
          : `Replaced by rules from ${Le(ge.source ?? "policySettings")}. This control follows that configuration; add your own rules to customize the section.`,
      })),
      (Te[48] = ge.control),
      (Te[49] = ge.enabled),
      (Te[50] = ge.source),
      (Te[51] = xs));
  else xs = Te[51];
  let Es;
  if (Te[52] !== ps || Te[53] !== ge.enabled)
    ((Es = ps
      ? [
          {
            label: ge.enabled
              ? "Disable built-in rules for this section"
              : "Enable built-in rules for this section",
            value: "toggle",
          },
        ]
      : []),
      (Te[52] = ps),
      (Te[53] = ge.enabled),
      (Te[54] = Es));
  else Es = Te[54];
  let Pf, kf;
  if (Te[55] === MEMO_CACHE_SENTINEL)
    ((Pf = {
      label: `View in editor${getEditorDisplayName() ? ` (${getEditorDisplayName()})` : ""}`,
      value: "editor",
    }),
      (kf = { label: "Cancel", value: "cancel" }),
      (Te[55] = Pf),
      (Te[56] = kf));
  else ((Pf = Te[55]), (kf = Te[56]));
  let As;
  if (Te[57] !== Es) ((As = [...Es, Pf, kf]), (Te[57] = Es), (Te[58] = As));
  else As = Te[58];
  let Ps;
  if (Te[59] !== hc || Te[60] !== Ho || Te[61] !== fc || Te[62] !== Ro)
    ((Ps = (Tf) => {
      if (Tf === "toggle") fc();
      else if (Tf === "editor")
        hc(
          Ro.map(Lf).join(`

`),
        );
      else Ho();
    }),
      (Te[59] = hc),
      (Te[60] = Ho),
      (Te[61] = fc),
      (Te[62] = Ro),
      (Te[63] = Ps));
  else Ps = Te[63];
  let ks;
  if (Te[64] !== Ho || Te[65] !== As || Te[66] !== Ps)
    ((ks = e(ve, { options: As, onChange: Ps, onCancel: Ho })),
      (Te[64] = Ho),
      (Te[65] = As),
      (Te[66] = Ps),
      (Te[67] = ks));
  else ks = Te[67];
  let Ts;
  if (Te[68] !== ds)
    ((Ts =
      ds !== null && e(t, { dimColor: !0, wrap: "wrap-trim", children: ds })),
      (Te[68] = ds),
      (Te[69] = Ts));
  else Ts = Te[69];
  let $s;
  if (
    Te[70] !== fs ||
    Te[71] !== Co ||
    Te[72] !== oo ||
    Te[73] !== xs ||
    Te[74] !== ks ||
    Te[75] !== Ts ||
    Te[76] !== ws ||
    Te[77] !== Rs ||
    Te[78] !== Tr
  )
    (($s = r(fs, { color: ws, title: Rs, children: [Tr, Co, oo, xs, ks, Ts] })),
      (Te[70] = fs),
      (Te[71] = Co),
      (Te[72] = oo),
      (Te[73] = xs),
      (Te[74] = ks),
      (Te[75] = Ts),
      (Te[76] = ws),
      (Te[77] = Rs),
      (Te[78] = Tr),
      (Te[79] = $s));
  else $s = Te[79];
  let $f;
  if (Te[80] !== hs || Te[81] !== $s)
    (($f = r(N, { children: [$s, hs] })),
      (Te[80] = hs),
      (Te[81] = $s),
      (Te[82] = $f));
  else $f = Te[82];
  return $f;
}
function Br(cw) {
  let no = _(19),
    { entry: Nn, isLastInSection: yc, onConfirm: bc, onCancel: Ds } = cw,
    _f;
  if (no[0] === MEMO_CACHE_SENTINEL) ((_f = { context: "Confirmation" }), (no[0] = _f));
  else _f = no[0];
  useKeybinding("confirm:no", Ds, _f);
  let Mf;
  if (no[1] === MEMO_CACHE_SENTINEL)
    ((Mf = e(t, {
      bold: !0,
      color: "error",
      children: "Delete auto mode rule?",
    })),
      (no[1] = Mf));
  else Mf = no[1];
  let Ms;
  if (no[2] !== Nn) ((Ms = e(He, { entry: Nn })), (no[2] = Nn), (no[3] = Ms));
  else Ms = no[3];
  let Bs;
  if (no[4] !== Nn || no[5] !== yc)
    ((Bs =
      yc &&
      ` This is your last ${me(Nn.section).toLowerCase()} rule \u2014 without it, only the built-in rules apply for this section.`),
      (no[4] = Nn),
      (no[5] = yc),
      (no[6] = Bs));
  else Bs = no[6];
  let Os;
  if (no[7] !== Bs)
    ((Os = r(t, {
      children: [
        "Are you sure you want to delete this rule? The classifier stops applying it on your next request.",
        Bs,
      ],
    })),
      (no[7] = Bs),
      (no[8] = Os));
  else Os = no[8];
  let Ns;
  if (no[9] !== Ds || no[10] !== bc)
    ((Ns = e(ConfirmPrompt, { focus: "cancel", onConfirm: bc, onCancel: Ds })),
      (no[9] = Ds),
      (no[10] = bc),
      (no[11] = Ns));
  else Ns = no[11];
  let Is;
  if (no[12] !== Ms || no[13] !== Os || no[14] !== Ns)
    ((Is = r(o, {
      flexDirection: "column",
      gap: 1,
      borderStyle: "round",
      paddingLeft: 1,
      paddingRight: 1,
      borderColor: "error",
      children: [Mf, Ms, Os, Ns],
    })),
      (no[12] = Ms),
      (no[13] = Os),
      (no[14] = Ns),
      (no[15] = Is));
  else Is = no[15];
  let Ff;
  if (no[16] === MEMO_CACHE_SENTINEL)
    ((Ff = e(o, {
      marginLeft: 3,
      children: e(InputGuide, {
        children: e(KeybindingHint, { chord: "escape", action: "cancel" }),
      }),
    })),
      (no[16] = Ff));
  else Ff = no[16];
  let Bf;
  if (no[17] !== Is)
    ((Bf = r(N, { children: [Is, Ff] })), (no[17] = Is), (no[18] = Bf));
  else Bf = no[18];
  return Bf;
}
F();
import {
  closeSync,
  constants as Or,
  mkdirSync,
  openSync,
  writeSync,
} from "fs";
import { randomBytes as sp } from "crypto";
import { dirname } from "path";
function ap(Sc) {
  return { label: me(Sc), value: Sc, description: Dc(Sc), dimDescription: !0 };
}
function cp(jw) {
  return jw
    .replace(
      /\r\n/g,
      `
`,
    )
    .replace(
      /\r/g,
      `
`,
    );
}
function Dc(i) {
  switch (i) {
    case "allow":
      return "Actions the classifier lets run without blocking";
    case "soft_deny":
      return "Actions the classifier blocks, unless a soft allow rule or your explicit direction applies";
    case "hard_deny":
      return "Actions the classifier always blocks \u2014 soft allow rules cannot override";
    case "environment":
      return "Facts about this machine or project the classifier should take into account";
  }
}
function Qs(i) {
  let u = resolveSidecarFilePath(`${AUTO_MODE_ENV_EDIT_FILE_PREFIX}${sp(8).toString("hex")}.md`);
  if (u === null) return { content: null, problem: null };
  try {
    mkdirSync(dirname(u), { recursive: !0, mode: 448 });
    let a = openSync(u, Or.O_WRONLY | Or.O_CREAT | Or.O_EXCL | Or.O_NOFOLLOW, 384);
    try {
      writeSync(
        a,
        i.join(`
`),
        null,
        "utf8",
      );
    } finally {
      closeSync(a);
    }
  } catch (a) {
    return {
      content: null,
      problem: `could not write the file: ${a instanceof Error ? a.message : String(a)}`,
    };
  }
  let f = editFileInExternalEditor(u);
  if (f.error !== void 0) return { content: null, problem: f.error };
  if (f.content === null)
    return {
      content: null,
      problem: "the editor returned no content \u2014 reopen to try again.",
    };
  return {
    content:
      f.content === null
        ? null
        : f.content
            .replace(
              /\r\n/g,
              `
`,
            )
            .replace(
              /\r/g,
              `
`,
            ),
    problem: null,
  };
}
function Nr(Mw) {
  let Ls = _(8),
    { onCancel: In, onPick: Rc } = Mw,
    jf;
  if (Ls[0] === MEMO_CACHE_SENTINEL)
    ((jf = e(o, {
      flexDirection: "column",
      marginBottom: 1,
      children: e(t, { children: "What kind of rule is this?" }),
    })),
      (Ls[0] = jf));
  else jf = Ls[0];
  let Wf;
  if (Ls[1] === MEMO_CACHE_SENTINEL) ((Wf = tt.map(ap)), (Ls[1] = Wf));
  else Wf = Ls[1];
  let js;
  if (Ls[2] !== In || Ls[3] !== Rc)
    ((js = e(ve, { options: Wf, onChange: Rc, onCancel: In })),
      (Ls[2] = In),
      (Ls[3] = Rc),
      (Ls[4] = js));
  else js = Ls[4];
  let Vf;
  if (Ls[5] !== In || Ls[6] !== js)
    ((Vf = r(de, {
      title: "Add auto mode rule",
      onCancel: In,
      color: "permission",
      children: [jf, js],
    })),
      (Ls[5] = In),
      (Ls[6] = js),
      (Ls[7] = Vf));
  else Vf = Ls[7];
  return Vf;
}
function Ur(Fw) {
  let gt = _(28),
    { section: qo, initialValue: Ws, onCancel: Vs, onSubmit: Cc } = Fw,
    [xc, Bw] = d(Ws ?? ""),
    [Ec, Ow] = d(Ws ? Ws.length : 0),
    [Ys, Yf] = d(null),
    zf;
  if (gt[0] === MEMO_CACHE_SENTINEL) ((zf = { context: "Settings" }), (gt[0] = zf));
  else zf = gt[0];
  useKeybinding("confirm:no", Vs, zf);
  let { columns: Nw } = useTerminalSize(),
    Ac = Nw - 6,
    Hf;
  if (gt[1] !== Cc || gt[2] !== qo)
    ((Hf = (Uw) => {
      let Pc = Uw.trim();
      if (Pc.length === 0) {
        return;
      }
      let Kf = Vo(qo, Pc);
      if (Kf !== null) {
        Yf(Kf);
        return;
      }
      Cc(Pc);
    }),
      (gt[1] = Cc),
      (gt[2] = qo),
      (gt[3] = Hf));
  else Hf = gt[3];
  let kc = Hf,
    Iw = Ws !== void 0,
    Tc =
      qo === "environment"
        ? "Deploys from this machine only reach the staging cluster."
        : "Database Writes: UPDATE statements against the local dev database.",
    Xf;
  if (gt[4] !== qo) ((Xf = me(qo).toLowerCase()), (gt[4] = qo), (gt[5] = Xf));
  else Xf = gt[5];
  const $c = `${Iw ? "Edit" : "Add"} ${Xf} rule`;
  let qf;
  if (gt[6] === MEMO_CACHE_SENTINEL)
    ((qf = e(KeybindingHint, { chord: "enter", action: "save" })), (gt[6] = qf));
  else qf = gt[6];
  let Gf;
  if (gt[7] === MEMO_CACHE_SENTINEL)
    ((Gf = r(DotSeparatedList, {
      children: [
        qf,
        e(KeybindingHint, { chord: supportsShiftEnter() ? "shift+enter" : "ctrl+j", action: "new line" }),
        e(KeybindingHint, { chord: "escape", action: "cancel" }),
      ],
    })),
      (gt[7] = Gf));
  else Gf = gt[7];
  let Qf;
  if (gt[8] === MEMO_CACHE_SENTINEL) ((Qf = e(zb, {})), (gt[8] = Qf));
  else Qf = gt[8];
  let zs;
  if (gt[9] !== Tc)
    ((zs = r(t, {
      children: [
        "Write the rule as a plain sentence. A short label up front helps, e.g.,",
        Qf,
        e(t, { bold: !0, children: Tc }),
      ],
    })),
      (gt[9] = Tc),
      (gt[10] = zs));
  else zs = gt[10];
  let Jf;
  if (gt[11] === MEMO_CACHE_SENTINEL)
    ((Jf = (Lw) => {
      (Yf(null), Bw(Lw));
    }),
      (gt[11] = Jf));
  else Jf = gt[11];
  let Hs;
  if (gt[12] !== Ec || gt[13] !== kc || gt[14] !== xc || gt[15] !== Ac)
    ((Hs = e(o, {
      borderDimColor: !0,
      borderStyle: "round",
      marginY: 1,
      paddingLeft: 1,
      children: e(hn, {
        showCursor: !0,
        multiline: !0,
        disableBackslashReturn: !0,
        maxVisibleLines: 8,
        inputFilter: cp,
        value: xc,
        onChange: Jf,
        onSubmit: kc,
        placeholder: `Enter rule${figures.ellipsis}`,
        columns: Ac,
        cursorOffset: Ec,
        onChangeCursorOffset: Ow,
      }),
    })),
      (gt[12] = Ec),
      (gt[13] = kc),
      (gt[14] = xc),
      (gt[15] = Ac),
      (gt[16] = Hs));
  else Hs = gt[16];
  let qs;
  if (gt[17] !== Ys)
    ((qs =
      Ys !== null && e(t, { color: "error", wrap: "wrap-trim", children: Ys })),
      (gt[17] = Ys),
      (gt[18] = qs));
  else qs = gt[18];
  let Zf;
  if (gt[19] === MEMO_CACHE_SENTINEL)
    ((Zf = e(t, {
      dimColor: !0,
      children: "Saved to your user settings file",
    })),
      (gt[19] = Zf));
  else Zf = gt[19];
  let Gs;
  if (gt[20] !== Hs || gt[21] !== qs || gt[22] !== zs)
    ((Gs = r(o, { flexDirection: "column", children: [zs, Hs, qs, Zf] })),
      (gt[20] = Hs),
      (gt[21] = qs),
      (gt[22] = zs),
      (gt[23] = Gs));
  else Gs = gt[23];
  let tp;
  if (gt[24] !== Vs || gt[25] !== Gs || gt[26] !== $c)
    ((tp = e(de, {
      title: $c,
      onCancel: Vs,
      color: "permission",
      isCancelActive: !1,
      inputGuide: Gf,
      children: Gs,
    })),
      (gt[24] = Vs),
      (gt[25] = Gs),
      (gt[26] = $c),
      (gt[27] = tp));
  else tp = gt[27];
  return tp;
}
function vh(QS) {
  return QS.toolPermissionContext;
}
function wh() {
  return Ce();
}
function Rh() {
  return Re();
}
function Fh(bh) {
  return [b(bh), bh];
}
function Sh(JS) {
  return new Map(JS.map(Fh));
}
function Ch(ZS) {
  return ZS.ruleString;
}
function xh(eC) {
  return formatRuleContentForDisplay(eC);
}
function Eh(tC) {
  return tC !== void 0;
}
function Ah(nC) {
  return nC.display;
}
function Ph(rC) {
  return rC.display;
}
function kh(iC) {
  return chalk.bold(iC.text);
}
function Th(sC) {
  return sC.value !== "add-new-rule";
}
function $h(lC) {
  return lC.value;
}
function Dh(aC) {
  return aC.replace(/\n+$/, "");
}
function _h(cC) {
  return cC.section === "environment";
}
function Mh(uC) {
  return uC.section !== "environment";
}
function Dl(MR) {
  let dp = _(4),
    { rule: _c } = MR,
    mp;
  if (dp[0] !== _c.source)
    ((mp = permissionRuleSourceDisplayString(_c.source)), (dp[0] = _c.source), (dp[1] = mp));
  else mp = dp[1];
  const Mc = `From ${mp}`;
  let fp;
  if (dp[2] !== Mc)
    ((fp = e(t, { dimColor: !0, children: Mc })), (dp[2] = Mc), (dp[3] = fp));
  else fp = dp[3];
  return fp;
}
function Wu(i) {
  switch (i) {
    case "allow":
      return "allowed";
    case "deny":
      return "denied";
    case "ask":
      return "ask";
  }
}
function _l(FR) {
  let Xe = _(34),
    { rule: Ke, onDelete: Fc, onCancel: Js } = FR,
    pp;
  if (Xe[0] === MEMO_CACHE_SENTINEL) ((pp = { context: "Confirmation" }), (Xe[0] = pp));
  else pp = Xe[0];
  useKeybinding("confirm:no", Js, pp);
  let Zs;
  if (Xe[1] !== Ke.ruleValue)
    ((Zs = formatRuleContentForDisplay(formatPermissionRule(Ke.ruleValue))), (Xe[1] = Ke.ruleValue), (Xe[2] = Zs));
  else Zs = Xe[2];
  let el;
  if (Xe[3] !== Zs)
    ((el = e(t, { bold: !0, children: Zs })), (Xe[3] = Zs), (Xe[4] = el));
  else el = Xe[4];
  let tl;
  if (Xe[5] !== Ke.ruleValue)
    ((tl = e(go, { ruleValue: Ke.ruleValue })),
      (Xe[5] = Ke.ruleValue),
      (Xe[6] = tl));
  else tl = Xe[6];
  let ol;
  if (Xe[7] !== Ke) ((ol = e(Dl, { rule: Ke })), (Xe[7] = Ke), (Xe[8] = ol));
  else ol = Xe[8];
  let hp;
  if (Xe[9] !== el || Xe[10] !== tl || Xe[11] !== ol)
    ((hp = r(o, {
      flexDirection: "column",
      marginX: 2,
      children: [el, tl, ol],
    })),
      (Xe[9] = el),
      (Xe[10] = tl),
      (Xe[11] = ol),
      (Xe[12] = hp));
  else hp = Xe[12];
  let ro = hp,
    gp;
  if (Xe[13] === MEMO_CACHE_SENTINEL)
    ((gp = e(o, {
      marginLeft: 3,
      children: e(InputGuide, {
        children: e(KeybindingHint, { chord: "escape", action: "cancel" }),
      }),
    })),
      (Xe[13] = gp));
  else gp = Xe[13];
  let Bc = gp;
  if (Ke.source === "policySettings") {
    let $t;
    if (Xe[14] === MEMO_CACHE_SENTINEL)
      (($t = r(t, {
        italic: !0,
        children: [
          "This rule is configured by managed settings and cannot be modified.",
          `
`,
          "Contact your system administrator for more information.",
        ],
      })),
        (Xe[14] = $t));
    else $t = Xe[14];
    let St;
    if (Xe[15] !== ro)
      ((St = r(N, {
        children: [
          r(TitledBorderBox, {
            color: "permission",
            title: "Rule details",
            children: [ro, $t],
          }),
          Bc,
        ],
      })),
        (Xe[15] = ro),
        (Xe[16] = St));
    else St = Xe[16];
    return St;
  }
  if (Ke.source === "flagSettings" || Ke.source === "command") {
    const $t =
      Ke.source === "flagSettings" ? "the --settings flag" : "a slash command";
    let St;
    if (Xe[17] !== $t)
      ((St = r(t, {
        italic: !0,
        children: [
          "This rule comes from a read-only source (",
          $t,
          ") and cannot be modified here.",
        ],
      })),
        (Xe[17] = $t),
        (Xe[18] = St));
    else St = Xe[18];
    let Ir;
    if (Xe[19] !== ro || Xe[20] !== St)
      ((Ir = r(N, {
        children: [
          r(TitledBorderBox, {
            color: "permission",
            title: "Rule details",
            children: [ro, St],
          }),
          Bc,
        ],
      })),
        (Xe[19] = ro),
        (Xe[20] = St),
        (Xe[21] = Ir));
    else Ir = Xe[21];
    return Ir;
  }
  let $t;
  if (Xe[22] !== Ke.ruleBehavior)
    (($t = Wu(Ke.ruleBehavior)), (Xe[22] = Ke.ruleBehavior), (Xe[23] = $t));
  else $t = Xe[23];
  let St;
  if (Xe[24] !== $t)
    ((St = r(t, {
      bold: !0,
      color: "error",
      children: ["Delete ", $t, " tool?"],
    })),
      (Xe[24] = $t),
      (Xe[25] = St));
  else St = Xe[25];
  let Ir;
  if (Xe[26] === MEMO_CACHE_SENTINEL)
    ((Ir = e(t, {
      children: "Are you sure you want to delete this permission rule?",
    })),
      (Xe[26] = Ir));
  else Ir = Xe[26];
  let nl;
  if (Xe[27] !== Js || Xe[28] !== Fc)
    ((nl = e(ConfirmPrompt, { onConfirm: Fc, onCancel: Js })),
      (Xe[27] = Js),
      (Xe[28] = Fc),
      (Xe[29] = nl));
  else nl = Xe[29];
  let yp;
  if (Xe[30] !== ro || Xe[31] !== nl || Xe[32] !== St)
    ((yp = r(N, {
      children: [
        r(o, {
          flexDirection: "column",
          gap: 1,
          borderStyle: "round",
          paddingLeft: 1,
          paddingRight: 1,
          borderColor: "error",
          children: [St, ro, Ir, nl],
        }),
        Bc,
      ],
    })),
      (Xe[30] = ro),
      (Xe[31] = nl),
      (Xe[32] = St),
      (Xe[33] = yp));
  else yp = Xe[33];
  return yp;
}
function Ml(BR) {
  let Lr = _(26),
    {
      options: rl,
      searchQuery: Nc,
      isSearchMode: Ln,
      isFocused: Uc,
      onSelect: Ic,
      onCancel: Lc,
      lastFocusedRuleKey: jc,
      cursorOffset: Wc,
      onHeaderFocusChange: il,
    } = BR,
    Vc = a0e(),
    { headerFocused: Vt, focusHeader: Yc, blurHeader: sl } = Jd(),
    bp,
    vp;
  if (Lr[0] !== sl || Lr[1] !== Vt || Lr[2] !== Ln)
    ((bp = () => {
      if (Ln && Vt) sl();
    }),
      (vp = [Ln, Vt, sl]),
      (Lr[0] = sl),
      (Lr[1] = Vt),
      (Lr[2] = Ln),
      (Lr[3] = bp),
      (Lr[4] = vp));
  else ((bp = Lr[3]), (vp = Lr[4]));
  E(bp, vp);
  let wp, Rp;
  if (Lr[5] !== Vt || Lr[6] !== il)
    ((wp = () => {
      il(Vt);
    }),
      (Rp = [Vt, il]),
      (Lr[5] = Vt),
      (Lr[6] = il),
      (Lr[7] = wp),
      (Lr[8] = Rp));
  else ((wp = Lr[7]), (Rp = Lr[8]));
  E(wp, Rp);
  const zc = Ln && !Vt;
  let ll;
  if (
    Lr[9] !== Wc ||
    Lr[10] !== Uc ||
    Lr[11] !== Nc ||
    Lr[12] !== zc ||
    Lr[13] !== Vc
  )
    ((ll = e(o, {
      marginBottom: 1,
      flexDirection: "column",
      children: e(SearchInput, {
        query: Nc,
        isFocused: zc,
        isTerminalFocused: Uc,
        width: Vc,
        cursorOffset: Wc,
      }),
    })),
      (Lr[9] = Wc),
      (Lr[10] = Uc),
      (Lr[11] = Nc),
      (Lr[12] = zc),
      (Lr[13] = Vc),
      (Lr[14] = ll));
  else ll = Lr[14];
  const Hc = Math.min(10, rl.length),
    Kc = Ln || Vt;
  let al;
  if (
    Lr[15] !== Yc ||
    Lr[16] !== jc ||
    Lr[17] !== Lc ||
    Lr[18] !== Ic ||
    Lr[19] !== rl ||
    Lr[20] !== Hc ||
    Lr[21] !== Kc
  )
    ((al = e(ve, {
      options: rl,
      onChange: Ic,
      onCancel: Lc,
      visibleOptionCount: Hc,
      isDisabled: Kc,
      defaultFocusValue: jc,
      onUpFromFirstItem: Yc,
    })),
      (Lr[15] = Yc),
      (Lr[16] = jc),
      (Lr[17] = Lc),
      (Lr[18] = Ic),
      (Lr[19] = rl),
      (Lr[20] = Hc),
      (Lr[21] = Kc),
      (Lr[22] = al));
  else al = Lr[22];
  let Sp;
  if (Lr[23] !== ll || Lr[24] !== al)
    ((Sp = r(o, { flexDirection: "column", children: [ll, al] })),
      (Lr[23] = ll),
      (Lr[24] = al),
      (Lr[25] = Sp));
  else Sp = Lr[25];
  return Sp;
}
function To(Xc) {
  let Go = _(23),
    cl,
    ul,
    Qo,
    io;
  if (Go[0] !== Xc)
    (({ tab: io, getRulesOptions: cl, handleToolSelect: ul, ...Qo } = Xc),
      (Go[0] = Xc),
      (Go[1] = cl),
      (Go[2] = ul),
      (Go[3] = Qo),
      (Go[4] = io));
  else ((cl = Go[1]), (ul = Go[2]), (Qo = Go[3]), (io = Go[4]));
  const qc = io === "allow" ? 0 : void 0;
  let Cp;
  if (Go[5] === MEMO_CACHE_SENTINEL)
    ((Cp = {
      allow: "Claude Code won't ask before using allowed tools.",
      ask: "Claude Code will always ask for confirmation before using these tools.",
      deny: "Claude Code will always reject requests to use denied tools.",
    }),
      (Go[5] = Cp));
  else Cp = Go[5];
  const Gc = Cp[io];
  let dl;
  if (Go[6] !== Gc) ((dl = e(t, { children: Gc })), (Go[6] = Gc), (Go[7] = dl));
  else dl = Go[7];
  let ml;
  if (Go[8] !== cl || Go[9] !== Qo.searchQuery || Go[10] !== io)
    ((ml = cl(io, Qo.searchQuery)),
      (Go[8] = cl),
      (Go[9] = Qo.searchQuery),
      (Go[10] = io),
      (Go[11] = ml));
  else ml = Go[11];
  let fl;
  if (Go[12] !== ul || Go[13] !== io)
    ((fl = (OR) => ul(OR, io)), (Go[12] = ul), (Go[13] = io), (Go[14] = fl));
  else fl = Go[14];
  let pl;
  if (Go[15] !== Qo || Go[16] !== ml.options || Go[17] !== fl)
    ((pl = e(Ml, { options: ml.options, onSelect: fl, ...Qo })),
      (Go[15] = Qo),
      (Go[16] = ml.options),
      (Go[17] = fl),
      (Go[18] = pl));
  else pl = Go[18];
  let xp;
  if (Go[19] !== qc || Go[20] !== dl || Go[21] !== pl)
    ((xp = r(o, {
      flexDirection: "column",
      flexShrink: qc,
      children: [dl, pl],
    })),
      (Go[19] = qc),
      (Go[20] = dl),
      (Go[21] = pl),
      (Go[22] = xp));
  else xp = Go[22];
  return xp;
}
function Fl(NR) {
  let R = _(224),
    { onExit: xo, initialTab: UR, onRetryDenials: Qc } = NR,
    { storageV5: Be } = useStorageV5Context(),
    { getDenials: Jc, removeDenial: Zc } = useAutoModeDenials(),
    Ep;
  if (R[0] !== Jc) ((Ep = Jc()), (R[0] = Jc), (R[1] = Ep));
  else Ep = R[1];
  let jr = Ep.length > 0,
    Jo = UR ?? (jr ? "recent" : "allow"),
    [eu, IR] = d(Jo),
    Ap;
  if (R[2] === MEMO_CACHE_SENTINEL) ((Ap = []), (R[2] = Ap));
  else Ap = R[2];
  let [hl, Ge] = d(Ap),
    re = useAppStateSelector(vh),
    Ct = useSetAppState(),
    Wn = useTerminalFocus(),
    [tu] = useTheme(),
    Pp;
  if (R[3] === MEMO_CACHE_SENTINEL)
    ((Pp = { approved: new Set(), retry: new Set(), denials: [] }),
      (R[3] = Pp));
  else Pp = R[3];
  let kp = C(Pp),
    Tp;
  if (R[4] === MEMO_CACHE_SENTINEL)
    ((Tp = (LR) => {
      kp.current = LR;
    }),
      (R[4] = Tp));
  else Tp = R[4];
  let jR = Tp,
    [yt, ou] = d(),
    [nu, WR] = d(),
    [Eo, ru] = d(null),
    [Ao, iu] = d(null),
    [$p, su] = d(!1),
    [Po, lu] = d(null),
    [nt, au] = d(!1),
    [cu, gl] = d(),
    [yl, Yt] = d(wh),
    [xt, zt] = d(Rh),
    [bt, be] = d(null),
    [uu, VR] = d(!0),
    Dp;
  if (R[5] === MEMO_CACHE_SENTINEL)
    ((Dp = (YR) => {
      VR(YR);
    }),
      (R[5] = Dp));
  else Dp = R[5];
  let vl = Dp,
    du = Sh,
    wl;
  if (R[6] !== re) ((wl = du(getAlwaysAllowRules(re))), (R[6] = re), (R[7] = wl));
  else wl = R[7];
  let Rl;
  if (R[8] !== re) ((Rl = du(getAlwaysDenyRules(re))), (R[8] = re), (R[9] = Rl));
  else Rl = R[9];
  let Sl;
  if (R[10] !== re) ((Sl = du(getAlwaysAskRules(re))), (R[10] = re), (R[11] = Sl));
  else Sl = R[11];
  let _p;
  if (R[12] !== wl || R[13] !== Rl || R[14] !== Sl)
    ((_p = { allow: wl, deny: Rl, ask: Sl }),
      (R[12] = wl),
      (R[13] = Rl),
      (R[14] = Sl),
      (R[15] = _p));
  else _p = R[15];
  let mu = _p,
    Mp;
  if (R[16] !== mu)
    ((Mp = (Zo, Vn) => {
      let fu = Vn === void 0 ? "" : Vn;
      let Wr =
        Zo === "allow" || Zo === "deny" || Zo === "ask" ? mu[Zo] : new Map();
      let pu = [];
      if (Zo !== "workspace" && Zo !== "recent" && Zo !== "automode" && !fu)
        pu.push({
          label: `Add a new rule${figures.ellipsis}`,
          value: "add-new-rule",
        });
      let qR = Array.from(Wr.keys()).sort((zR, HR) => {
        let Fp = Wr.get(zR);
        let Bp = Wr.get(HR);
        if (Fp && Bp) {
          let KR = formatPermissionRule(Fp.ruleValue).toLowerCase();
          let XR = formatPermissionRule(Bp.ruleValue).toLowerCase();
          return KR.localeCompare(XR);
        }
        return 0;
      });
      let GR = fu.toLowerCase();
      let hu = [];
      for (const Op of qR) {
        let Np = Wr.get(Op);
        if (Np) {
          let Up = formatPermissionRule(Np.ruleValue);
          if (fu && !Up.toLowerCase().includes(GR)) {
            continue;
          }
          hu.push({ ruleKey: Op, ruleString: Up });
        }
      }
      let QR = Qk(hu.map(Ch), xh);
      for (const [JR, ZR] of hu.entries())
        pu.push({ label: QR[JR], value: ZR.ruleKey });
      return { options: pu, rulesByKey: Wr };
    }),
      (R[16] = mu),
      (R[17] = Mp));
  else Mp = R[17];
  let so = Mp,
    Yn = !yt && !Eo && !Ao && !$p && !Po && !bt;
  const Vn = Yn && nt;
  let Ip;
  if (R[18] === MEMO_CACHE_SENTINEL)
    ((Ip = () => {
      au(!1);
    }),
      (R[18] = Ip));
  else Ip = R[18];
  let Lp;
  if (R[19] !== Vn)
    ((Lp = { isActive: Vn, onExit: Ip }), (R[19] = Vn), (R[20] = Lp));
  else Lp = R[20];
  let {
      query: zn,
      setQuery: Cl,
      cursorOffset: Hn,
      handleKeyDown: gu,
      handlePaste: yu,
    } = useVimModeInput(Lp),
    Wp;
  if (R[21] !== nt || R[22] !== Yn || R[23] !== gu || R[24] !== Cl)
    ((Wp = (mt) => {
      if (!Yn) {
        return;
      }
      if (nt) {
        gu(mt);
        return;
      }
      if (mt.ctrl || mt.meta) {
        return;
      }
      if (mt.key === "/") (mt.preventDefault(), au(!0), Cl(""));
      else if (
        mt.key.length === 1 &&
        mt.key !== "j" &&
        mt.key !== "k" &&
        mt.key !== "m" &&
        mt.key !== "i" &&
        mt.key !== "r" &&
        mt.key !== " "
      )
        (mt.preventDefault(), au(!0), Cl(mt.key));
    }),
      (R[21] = nt),
      (R[22] = Yn),
      (R[23] = gu),
      (R[24] = Cl),
      (R[25] = Wp));
  else Wp = R[25];
  let bu = Wp,
    Vp;
  if (R[26] !== so)
    ((Vp = (Yp, zp) => {
      let { rulesByKey: eS } = so(zp);
      if (Yp === "add-new-rule") {
        ru(zp);
        return;
      } else {
        ou(eS.get(Yp));
        return;
      }
    }),
      (R[26] = so),
      (R[27] = Vp));
  else Vp = R[27];
  let vu = Vp,
    Hp;
  if (R[28] === MEMO_CACHE_SENTINEL)
    ((Hp = () => {
      ru(null);
    }),
      (R[28] = Hp));
  else Hp = R[28];
  let tS = Hp,
    Kp;
  if (R[29] === MEMO_CACHE_SENTINEL)
    ((Kp = (oS, nS) => {
      (iu({ ruleValue: oS, ruleBehavior: nS }), ru(null));
    }),
      (R[29] = Kp));
  else Kp = R[29];
  let rS = Kp,
    Xp;
  if (R[30] !== tu)
    ((Xp = (iS, sS) => {
      iu(null);
      for (const Gp of iS)
        Ge((lS) => [
          ...lS,
          `Added ${Gp.ruleBehavior} rule ${chalk.bold(formatRuleContentForDisplay(formatPermissionRule(Gp.ruleValue)))}`,
        ]);
      for (const xl of sS) {
        let aS = xl.shadowType === "deny" ? "blocked" : "shadowed";
        Ge((cS) => [
          ...cS,
          getThemeColor(
            "warning",
            tu,
          )(`${figures.warning} Warning: ${formatRuleContentForDisplay(formatPermissionRule(xl.rule.ruleValue))} is ${aS}`),
          chalk.dim(`  ${xl.reason}`),
          chalk.dim(`  Fix: ${xl.fix}`),
        ]);
      }
    }),
      (R[30] = tu),
      (R[31] = Xp));
  else Xp = R[31];
  let wu = Xp,
    Qp;
  if (R[32] === MEMO_CACHE_SENTINEL)
    ((Qp = () => {
      iu(null);
    }),
      (R[32] = Qp));
  else Qp = R[32];
  let uS = Qp,
    Jp;
  if (R[33] === MEMO_CACHE_SENTINEL) ((Jp = () => su(!0)), (R[33] = Jp));
  else Jp = R[33];
  let dS = Jp,
    Zp;
  if (R[34] === MEMO_CACHE_SENTINEL) ((Zp = (mS) => lu(mS)), (R[34] = Zp));
  else Zp = R[34];
  let fS = Zp,
    eh;
  if (R[35] !== hl || R[36] !== xo || R[37] !== Qc || R[38] !== Zc)
    ((eh = () => {
      let Ru = kp.current;
      let th = (pS) =>
        Array.from(pS)
          .map((hS) => Ru.denials[hS])
          .filter(Eh);
      let oh = th(Ru.retry);
      if (oh.length > 0) {
        let Su = oh.map(Ah);
        (Qc(Su),
          xo(void 0, {
            shouldQuery: !0,
            metaMessages: [
              `Permission granted for: ${Su.join(", ")}. You may now retry ${Su.length === 1 ? "this command" : "these commands"} if you would like.`,
            ],
          }));
        return;
      }
      let Cu = th(Ru.approved);
      if (Cu.length > 0 || hl.length > 0) {
        for (const gS of Cu) Zc(gS);
        let Vr = Cu.map(Ph);
        let yS = ZJe(Vr, { maxUnits: Rm });
        let bS = Vr.length > 0 ? [`Approved ${yS.map(kh).join(", ")}`] : [];
        xo(
          [...bS, ...hl].join(`
`),
          Vr.length > 0
            ? {
                metaMessages: [
                  `Permission granted for: ${Vr.join(", ")}. You may now retry ${Vr.length === 1 ? "this command" : "these commands"} if you would like.`,
                ],
              }
            : void 0,
        );
      } else xo("Permissions dialog dismissed", { display: "system" });
    }),
      (R[35] = hl),
      (R[36] = xo),
      (R[37] = Qc),
      (R[38] = Zc),
      (R[39] = eh));
  else eh = R[39];
  let en = eh;
  const xu = Yn && !nt;
  let nh;
  if (R[40] !== xu)
    ((nh = { context: "Settings", isActive: xu }), (R[40] = xu), (R[41] = nh));
  else nh = R[41];
  useKeybinding("confirm:no", en, nh);
  let rh;
  if (
    R[42] !== so ||
    R[43] !== yt ||
    R[44] !== Ct ||
    R[45] !== Be ||
    R[46] !== re
  )
    ((rh = () => {
      if (!yt) {
        return;
      }
      let { options: vS } = so(yt.ruleBehavior);
      let wS = b(yt);
      let El = vS.filter(Th).map($h);
      let Yr = El.indexOf(wS);
      let Eu;
      if (Yr !== -1) {
        if (Yr < El.length - 1) Eu = El[Yr + 1];
        else if (Yr > 0) Eu = El[Yr - 1];
      }
      WR(Eu);
      let ih = formatRuleContentForDisplay(formatPermissionRule(yt.ruleValue));
      let RS = yt.ruleBehavior;
      (deletePermissionRule({
        rule: yt,
        initialContext: re,
        setToolPermissionContext(SS) {
          Ct((CS) => ({ ...CS, toolPermissionContext: SS }));
        },
        storageV5: Be,
      })
        .then(() => {
          Ge((ES) => [...ES, `Deleted ${RS} rule ${chalk.bold(ih)}`]);
        })
        .catch((AS) => {
          (logError(AS),
            Ge((PS) => [
              ...PS,
              `Could not delete ${chalk.bold(ih)} \u2014 the rule is unchanged`,
            ]));
        }),
        ou(void 0));
    }),
      (R[42] = so),
      (R[43] = yt),
      (R[44] = Ct),
      (R[45] = Be),
      (R[46] = re),
      (R[47] = rh));
  else rh = R[47];
  let Au = rh,
    sh;
  if (R[48] !== Be)
    ((sh = (Kn, tn) => {
      if (resolveEditorCommand() === void 0) {
        be({
          mode: "env-problem",
          problem:
            "No editor is configured \u2014 set $VISUAL or $EDITOR, then reopen /permissions to edit the environment.",
          draftLines: Kn,
          expected: tn,
          canReopen: !1,
        });
        return;
      }
      let on = Qs(Kn);
      if (on.problem !== null) {
        be({
          mode: "env-problem",
          problem: on.problem,
          draftLines: Kn,
          expected: tn,
          canReopen: !0,
        });
        return;
      }
      if (on.content === null) {
        be({
          mode: "env-problem",
          problem:
            "The environment could not be opened for editing: this session has no session directory to hold the working file. Edit autoMode.environment in your settings file directly.",
          draftLines: Kn,
          expected: tn,
          canReopen: !1,
        });
        return;
      }
      let lh = Dh;
      if (
        lh(on.content) ===
        lh(
          Kn.join(`
`),
        )
      ) {
        be({
          mode: "env-problem",
          problem:
            'No changes detected \u2014 nothing was saved. If your editor opened in a separate window without waiting, configure it to wait (for example "code --wait"), then reopen.',
          draftLines: Kn,
          expected: tn,
          canReopen: !0,
        });
        return;
      }
      let ah = Oi(on.content);
      if (ah !== null) {
        be({
          mode: "env-problem",
          problem: ah,
          draftLines: on.content.split(`
`),
          expected: tn,
          canReopen: !0,
        });
        return;
      }
      (Fi(
        on.content.split(`
`),
        tn,
        Be,
      )
        .then(() => {
          (zt(Re()),
            Yt(Ce()),
            Ge((kS) => [
              ...kS,
              tn.length === 0
                ? "Replaced the built-in auto mode environment with your own document"
                : "Saved your auto mode environment document",
            ]));
        })
        .catch((Pu) => {
          (n(`auto mode env save failed: ${String(Pu)}`, { level: "error" }),
            zt(Re()),
            Yt(Ce()),
            Ge((TS) => [
              ...TS,
              `Could not save the environment \u2014 ${Pu instanceof Error ? Pu.message : "nothing was changed"}`,
            ]));
        }),
        be(null));
    }),
      (R[48] = Be),
      (R[49] = sh));
  else sh = R[49];
  let lo = sh,
    ch;
  if (R[50] !== xt || R[51] !== lo)
    ((ch = () => {
      let ku = Bi();
      if (!(ku.length > 0 || xt.some(_h))) be({ mode: "env-first-confirm" });
      else lo(ku, ku);
    }),
      (R[50] = xt),
      (R[51] = lo),
      (R[52] = ch));
  else ch = R[52];
  let Xn = ch;
  if (bt?.mode === "pick-section") {
    let O;
    if (R[53] === MEMO_CACHE_SENTINEL) ((O = () => be(null)), (R[53] = O));
    else O = R[53];
    let H;
    if (R[54] !== Xn)
      ((H = e(Nr, {
        onCancel: O,
        onPick: (uh) => {
          if (uh === "environment" && isBuiltinPermissionsTemplateEnabled()) {
            Xn();
            return;
          }
          be({ mode: "input", section: uh });
        },
      })),
        (R[54] = Xn),
        (R[55] = H));
    else H = R[55];
    return H;
  }
  if (bt?.mode === "env-first-confirm") {
    let O, H;
    if (R[56] === MEMO_CACHE_SENTINEL)
      ((O = e(t, { bold: !0, children: "Replace the built-in environment?" })),
        (H = e(t, {
          wrap: "wrap-trim",
          children:
            "Writing your own environment replaces the built-in default document \u2014 the classifier context that defines trusted hosts, sensitive targets, and repository scope. The editor starts from the full default text so you can edit rather than rewrite; deleting all your environment entries later restores the default.",
        })),
        (R[56] = O),
        (R[57] = H));
    else ((O = R[56]), (H = R[57]));
    let Q;
    if (R[58] !== lo)
      ((Q = () => lo(getAutoModeTemplateRules().environment ?? [], [])), (R[58] = lo), (R[59] = Q));
    else Q = R[59];
    let pe;
    if (R[60] === MEMO_CACHE_SENTINEL) ((pe = () => be(null)), (R[60] = pe));
    else pe = R[60];
    let $e;
    if (R[61] !== Q)
      (($e = r(o, {
        flexDirection: "column",
        gap: 1,
        borderStyle: "round",
        paddingLeft: 1,
        paddingRight: 1,
        borderColor: "permission",
        children: [
          O,
          H,
          e(ConfirmPrompt, { focus: "cancel", onConfirm: Q, onCancel: pe }),
        ],
      })),
        (R[61] = Q),
        (R[62] = $e));
    else $e = R[62];
    let vt;
    if (R[63] === MEMO_CACHE_SENTINEL)
      ((vt = e(o, {
        marginLeft: 3,
        children: e(InputGuide, {
          children: e(KeybindingHint, { chord: "escape", action: "cancel" }),
        }),
      })),
        (R[63] = vt));
    else vt = R[63];
    let Et;
    if (R[64] !== $e)
      ((Et = r(N, { children: [$e, vt] })), (R[64] = $e), (R[65] = Et));
    else Et = R[65];
    return Et;
  }
  if (bt?.mode === "env-problem") {
    let { problem: Tu, draftLines: $u, expected: Du, canReopen: _u } = bt;
    let O;
    if (R[66] !== Tu)
      ((O = e(t, { color: "error", wrap: "wrap-trim", children: Tu })),
        (R[66] = Tu),
        (R[67] = O));
    else O = R[67];
    let H;
    if (R[68] !== _u)
      ((H = _u
        ? [{ label: `Reopen in ${getEditorDisplayName() ?? "your editor"}`, value: "reopen" }]
        : []),
        (R[68] = _u),
        (R[69] = H));
    else H = R[69];
    let Q;
    if (R[70] === MEMO_CACHE_SENTINEL) ((Q = { label: "Cancel", value: "cancel" }), (R[70] = Q));
    else Q = R[70];
    let pe;
    if (R[71] !== H) ((pe = [...H, Q]), (R[71] = H), (R[72] = pe));
    else pe = R[72];
    let $e;
    if (R[73] !== $u || R[74] !== Du || R[75] !== lo)
      (($e = ($S) => {
        if ($S === "reopen") lo($u, Du);
        else be(null);
      }),
        (R[73] = $u),
        (R[74] = Du),
        (R[75] = lo),
        (R[76] = $e));
    else $e = R[76];
    let vt;
    if (R[77] === MEMO_CACHE_SENTINEL) ((vt = () => be(null)), (R[77] = vt));
    else vt = R[77];
    let Et;
    if (R[78] !== pe || R[79] !== $e)
      ((Et = e(ve, { options: pe, onChange: $e, onCancel: vt })),
        (R[78] = pe),
        (R[79] = $e),
        (R[80] = Et));
    else Et = R[80];
    let ao;
    if (R[81] !== O || R[82] !== Et)
      ((ao = r(TitledBorderBox, {
        color: "permission",
        title: "Edit environment",
        children: [O, Et],
      })),
        (R[81] = O),
        (R[82] = Et),
        (R[83] = ao));
    else ao = R[83];
    let zr;
    if (R[84] === MEMO_CACHE_SENTINEL)
      ((zr = e(InputGuide, { children: e(KeybindingHint, { chord: "esc", action: "cancel" }) })),
        (R[84] = zr));
    else zr = R[84];
    let nn;
    if (R[85] !== ao)
      ((nn = r(N, { children: [ao, zr] })), (R[85] = ao), (R[86] = nn));
    else nn = R[86];
    return nn;
  }
  if (bt?.mode === "input") {
    let { section: Ht, editing: wt } = bt;
    let O;
    if (R[87] !== Ht) ((O = me(Ht).toLowerCase()), (R[87] = Ht), (R[88] = O));
    else O = R[88];
    let Al = O;
    const H = wt?.text;
    let Q;
    if (R[89] !== wt)
      ((Q = () => be(wt ? { mode: "details", entry: wt } : null)),
        (R[89] = wt),
        (R[90] = Q));
    else Q = R[90];
    let pe;
    if (R[91] !== wt || R[92] !== Al || R[93] !== Ht || R[94] !== Be)
      ((pe = (DS) => {
        let qn = vo(DS);
        if (wt && qn === wt.text) {
          be(null);
          return;
        }
        if (wt)
          ji(Ht, wt.index, wt.text, qn, Be)
            .then(() => {
              (zt(Re()),
                Yt(Ce()),
                Ge((_S) => [
                  ..._S,
                  `Updated auto mode ${Al} rule ${chalk.bold(Oo(Us(qn).text))}`,
                ]));
            })
            .catch((Mu) => {
              (n(`auto mode rule update failed: ${String(Mu)}`, {
                level: "error",
              }),
                zt(Re()),
                Yt(Ce()),
                Ge((MS) => [
                  ...MS,
                  `Could not update ${chalk.bold(Oo(Us(wt.text).text))} \u2014 ${Mu instanceof Error ? Mu.message : "the rule is unchanged"}`,
                ]));
            });
        else
          Li(Ht, qn, Be)
            .then(() => {
              (zt(Re()),
                Yt(Ce()),
                Ge((FS) => [
                  ...FS,
                  `Added auto mode ${Al} rule ${chalk.bold(Oo(Us(qn).text))}`,
                ]));
            })
            .catch((Fu) => {
              (n(`auto mode rule add failed: ${String(Fu)}`, {
                level: "error",
              }),
                zt(Re()),
                Yt(Ce()),
                Ge((BS) => [
                  ...BS,
                  `Could not add ${chalk.bold(Oo(Us(qn).text))} \u2014 ${Fu instanceof Error ? Fu.message : "nothing was saved"}`,
                ]));
            });
        be(null);
      }),
        (R[91] = wt),
        (R[92] = Al),
        (R[93] = Ht),
        (R[94] = Be),
        (R[95] = pe));
    else pe = R[95];
    let $e;
    if (R[96] !== Ht || R[97] !== H || R[98] !== Q || R[99] !== pe)
      (($e = e(Ur, {
        section: Ht,
        initialValue: H,
        onCancel: Q,
        onSubmit: pe,
      })),
        (R[96] = Ht),
        (R[97] = H),
        (R[98] = Q),
        (R[99] = pe),
        (R[100] = $e));
    else $e = R[100];
    return $e;
  }
  if (bt?.mode === "builtins") {
    let co = bt.section;
    let Gn = yl[co];
    let O;
    if (R[101] !== co || R[102] !== Gn.enabled || R[103] !== Be)
      ((O = () => {
        let Bu = !Gn.enabled;
        (Ni(co, Bu, Be)
          .then(() => {
            (zt(Re()),
              Yt(Ce()),
              Ge((NS) => [
                ...NS,
                `${Bu ? "Enabled" : "Disabled"} the built-in auto mode ${me(co).toLowerCase()} rules`,
              ]));
          })
          .catch((Ou) => {
            (n(`auto mode builtins toggle failed: ${String(Ou)}`, {
              level: "error",
            }),
              zt(Re()),
              Yt(Ce()),
              Ge((US) => [
                ...US,
                `Could not ${Bu ? "enable" : "disable"} the built-in ${me(co).toLowerCase()} rules \u2014 ${Ou instanceof Error ? Ou.message : "nothing was changed"}`,
              ]));
          }),
          be(null));
      }),
        (R[101] = co),
        (R[102] = Gn.enabled),
        (R[103] = Be),
        (R[104] = O));
    else O = R[104];
    let H;
    if (R[105] === MEMO_CACHE_SENTINEL) ((H = () => be(null)), (R[105] = H));
    else H = R[105];
    let Q;
    if (R[106] !== co || R[107] !== Gn || R[108] !== O)
      ((Q = e(Mr, { section: co, state: Gn, onToggle: O, onCancel: H })),
        (R[106] = co),
        (R[107] = Gn),
        (R[108] = O),
        (R[109] = Q));
    else Q = R[109];
    return Q;
  }
  if (bt?.mode === "details") {
    let { entry: ko } = bt;
    let O, H;
    if (R[110] !== ko)
      ((O = () => {
        be({ mode: "input", section: ko.section, editing: ko });
      }),
        (H = () => be({ mode: "delete", entry: ko })),
        (R[110] = ko),
        (R[111] = O),
        (R[112] = H));
    else ((O = R[111]), (H = R[112]));
    let Q;
    if (R[113] === MEMO_CACHE_SENTINEL) ((Q = () => be(null)), (R[113] = Q));
    else Q = R[113];
    let pe;
    if (R[114] !== ko || R[115] !== O || R[116] !== H)
      ((pe = e(_r, { entry: ko, onEdit: O, onDelete: H, onCancel: Q })),
        (R[114] = ko),
        (R[115] = O),
        (R[116] = H),
        (R[117] = pe));
    else pe = R[117];
    return pe;
  }
  if (bt?.mode === "delete") {
    let { entry: je } = bt;
    let O;
    if (R[118] !== je.section)
      ((O = (Nu) =>
        Nu.section === je.section &&
        !(Nu.structure && Nu.source === "userSettings")),
        (R[118] = je.section),
        (R[119] = O));
    else O = R[119];
    let H;
    if (R[120] !== xt || R[121] !== O)
      ((H = countMatching(xt, O)), (R[120] = xt), (R[121] = O), (R[122] = H));
    else H = R[122];
    const Q = H === 1;
    let pe;
    if (R[123] !== xt || R[124] !== je || R[125] !== Be)
      ((pe = () => {
        let IS = Nt(xt).indexOf(je);
        (Wi(je.section, je.index, je.text, Be)
          .then(() => {
            let Uu = Re();
            (zt(Uu), Yt(Ce()));
            let LS = isBuiltinPermissionsTemplateEnabled() ? Uu.filter(Mh) : Uu;
            let dh = Nt(LS);
            let mh = dh[Math.min(Math.max(IS, 0), dh.length - 1)];
            (gl(mh ? Ut(mh) : void 0),
              Ge((jS) => [
                ...jS,
                `Deleted auto mode ${me(je.section).toLowerCase()} rule ${chalk.bold(Oo(Us(je.text).text))}`,
              ]));
          })
          .catch((Iu) => {
            (n(`auto mode rule delete failed: ${String(Iu)}`, {
              level: "error",
            }),
              zt(Re()),
              Yt(Ce()),
              Ge((WS) => [
                ...WS,
                `Could not delete ${chalk.bold(Oo(Us(je.text).text))} \u2014 ${Iu instanceof Error ? Iu.message : "the rule is unchanged"}`,
              ]));
          }),
          be(null));
      }),
        (R[123] = xt),
        (R[124] = je),
        (R[125] = Be),
        (R[126] = pe));
    else pe = R[126];
    let $e;
    if (R[127] !== je)
      (($e = () => be({ mode: "details", entry: je })),
        (R[127] = je),
        (R[128] = $e));
    else $e = R[128];
    let vt;
    if (R[129] !== je || R[130] !== Q || R[131] !== pe || R[132] !== $e)
      ((vt = e(Br, {
        entry: je,
        isLastInSection: Q,
        onConfirm: pe,
        onCancel: $e,
      })),
        (R[129] = je),
        (R[130] = Q),
        (R[131] = pe),
        (R[132] = $e),
        (R[133] = vt));
    else vt = R[133];
    return vt;
  }
  if (yt) {
    let O;
    if (R[134] === MEMO_CACHE_SENTINEL) ((O = () => ou(void 0)), (R[134] = O));
    else O = R[134];
    let H;
    if (R[135] !== Au || R[136] !== yt)
      ((H = e(_l, { rule: yt, onDelete: Au, onCancel: O })),
        (R[135] = Au),
        (R[136] = yt),
        (R[137] = H));
    else H = R[137];
    return H;
  }
  if (Eo && Eo !== "workspace" && Eo !== "recent" && Eo !== "automode") {
    let O;
    if (R[138] !== Eo)
      ((O = e(or, { onCancel: tS, onSubmit: rS, ruleBehavior: Eo })),
        (R[138] = Eo),
        (R[139] = O));
    else O = R[139];
    return O;
  }
  if (Ao) {
    let O;
    if (R[140] !== Ao.ruleValue)
      ((O = [Ao.ruleValue]), (R[140] = Ao.ruleValue), (R[141] = O));
    else O = R[141];
    let H;
    if (R[142] !== Ct)
      ((H = (VS) => {
        Ct((YS) => ({ ...YS, toolPermissionContext: VS }));
      }),
        (R[142] = Ct),
        (R[143] = H));
    else H = R[143];
    let Q;
    if (
      R[144] !== wu ||
      R[145] !== O ||
      R[146] !== H ||
      R[147] !== re ||
      R[148] !== Ao.ruleBehavior
    )
      ((Q = e(tr, {
        onAddRules: wu,
        onCancel: uS,
        ruleValues: O,
        ruleBehavior: Ao.ruleBehavior,
        initialContext: re,
        setToolPermissionContext: H,
      })),
        (R[144] = wu),
        (R[145] = O),
        (R[146] = H),
        (R[147] = re),
        (R[148] = Ao.ruleBehavior),
        (R[149] = Q));
    else Q = R[149];
    return Q;
  }
  if ($p) {
    let O;
    if (R[150] !== Ct || R[151] !== Be || R[152] !== re)
      ((O = (fh, Lu) => {
        let ph = {
          type: "addDirectories",
          directories: [fh],
          destination: Lu ? "localSettings" : "session",
        };
        let zS = applyPermissionUpdate(re, ph);
        if ((Ct((HS) => ({ ...HS, toolPermissionContext: zS })), Lu))
          persistPermissionUpdate(ph, Be).catch(logError);
        (Ge((KS) => [
          ...KS,
          `Added directory ${chalk.bold(sanitizeForDisplay(fh))} to workspace${Lu ? " and saved to local settings" : " for this session"}`,
        ]),
          su(!1));
      }),
        (R[150] = Ct),
        (R[151] = Be),
        (R[152] = re),
        (R[153] = O));
    else O = R[153];
    let H;
    if (R[154] === MEMO_CACHE_SENTINEL) ((H = () => su(!1)), (R[154] = H));
    else H = R[154];
    let Q;
    if (R[155] !== O || R[156] !== re)
      ((Q = e(AddDirectoryToWorkspaceDialog, { onAddDirectory: O, onCancel: H, permissionContext: re })),
        (R[155] = O),
        (R[156] = re),
        (R[157] = Q));
    else Q = R[157];
    return Q;
  }
  if (Po) {
    let O;
    if (R[158] !== Po)
      ((O = () => {
        (Ge((XS) => [...XS, `Removed directory ${chalk.bold(Po)} from workspace`]),
          lu(null));
      }),
        (R[158] = Po),
        (R[159] = O));
    else O = R[159];
    let H;
    if (R[160] === MEMO_CACHE_SENTINEL) ((H = () => lu(null)), (R[160] = H));
    else H = R[160];
    let Q;
    if (R[161] !== Ct)
      ((Q = (qS) => {
        Ct((GS) => ({ ...GS, toolPermissionContext: qS }));
      }),
        (R[161] = Ct),
        (R[162] = Q));
    else Q = R[162];
    let pe;
    if (R[163] !== Po || R[164] !== O || R[165] !== Q || R[166] !== re)
      ((pe = e(mr, {
        directoryPath: Po,
        onRemove: O,
        onCancel: H,
        permissionContext: re,
        setPermissionContext: Q,
      })),
        (R[163] = Po),
        (R[164] = O),
        (R[165] = Q),
        (R[166] = re),
        (R[167] = pe));
    else pe = R[167];
    return pe;
  }
  let O;
  if (
    R[168] !== so ||
    R[169] !== en ||
    R[170] !== vu ||
    R[171] !== nt ||
    R[172] !== Wn ||
    R[173] !== nu ||
    R[174] !== Hn ||
    R[175] !== zn
  )
    ((O = {
      searchQuery: zn,
      isSearchMode: nt,
      isFocused: Wn,
      onCancel: en,
      lastFocusedRuleKey: nu,
      cursorOffset: Hn,
      getRulesOptions: so,
      handleToolSelect: vu,
      onHeaderFocusChange: vl,
    }),
      (R[168] = so),
      (R[169] = en),
      (R[170] = vu),
      (R[171] = nt),
      (R[172] = Wn),
      (R[173] = nu),
      (R[174] = Hn),
      (R[175] = zn),
      (R[176] = O));
  else O = R[176];
  let uo = O,
    ju = !Yn;
  const H = !jr,
    Q = !nt;
  let pe;
  if (R[177] === MEMO_CACHE_SENTINEL)
    ((pe = e(
      ss,
      {
        id: "recent",
        title: "Recently denied",
        children: e(ur, { onHeaderFocusChange: vl, onStateChange: jR }),
      },
      "recent",
    )),
      (R[177] = pe));
  else pe = R[177];
  let $e;
  if (R[178] !== uo)
    (($e = e(
      ss,
      { id: "allow", title: "Allow", children: e(To, { tab: "allow", ...uo }) },
      "allow",
    )),
      (R[178] = uo),
      (R[179] = $e));
  else $e = R[179];
  let vt;
  if (R[180] !== uo)
    ((vt = e(
      ss,
      { id: "ask", title: "Ask", children: e(To, { tab: "ask", ...uo }) },
      "ask",
    )),
      (R[180] = uo),
      (R[181] = vt));
  else vt = R[181];
  let Et;
  if (R[182] !== uo)
    ((Et = e(
      ss,
      { id: "deny", title: "Deny", children: e(To, { tab: "deny", ...uo }) },
      "deny",
    )),
      (R[182] = uo),
      (R[183] = Et));
  else Et = R[183];
  let ao;
  if (
    R[184] !== yl ||
    R[185] !== xt ||
    R[186] !== en ||
    R[187] !== nt ||
    R[188] !== Wn ||
    R[189] !== cu ||
    R[190] !== Hn ||
    R[191] !== zn ||
    R[192] !== Xn ||
    R[193] !== re.isAutoModeAvailable
  )
    ((ao =
      re.isAutoModeAvailable !== !1
        ? [
            e(
              ss,
              {
                id: "automode",
                title: "Auto mode",
                children: e(xr, {
                  entries: xt,
                  searchQuery: zn,
                  isSearchMode: nt,
                  isFocused: Wn,
                  cursorOffset: Hn,
                  defaultFocusValue: cu,
                  builtinsState: yl,
                  onSelectBuiltins: (hh) => {
                    (gl(`builtins:${hh}`),
                      be({ mode: "builtins", section: hh }));
                  },
                  onAddNew: () => be({ mode: "pick-section" }),
                  onSelectEntry: (gh) => {
                    (gl(Ut(gh)), be({ mode: "details", entry: gh }));
                  },
                  onSelectEnvironment: () => {
                    (gl("environment-document"), Xn());
                  },
                  onCancel: en,
                  onHeaderFocusChange: vl,
                }),
              },
              "automode",
            ),
          ]
        : []),
      (R[184] = yl),
      (R[185] = xt),
      (R[186] = en),
      (R[187] = nt),
      (R[188] = Wn),
      (R[189] = cu),
      (R[190] = Hn),
      (R[191] = zn),
      (R[192] = Xn),
      (R[193] = re.isAutoModeAvailable),
      (R[194] = ao));
  else ao = R[194];
  let zr;
  if (R[195] === MEMO_CACHE_SENTINEL)
    ((zr = e(t, {
      wrap: "wrap-trim",
      children:
        "Claude Code can read files in the workspace, and make edits when auto-accept edits is on.",
    })),
      (R[195] = zr));
  else zr = R[195];
  let nn;
  if (R[196] !== xo || R[197] !== re)
    ((nn = e(
      ss,
      {
        id: "workspace",
        title: "Workspace",
        children: r(o, {
          flexDirection: "column",
          children: [
            zr,
            e(fr, {
              onExit: xo,
              toolPermissionContext: re,
              onRequestAddDirectory: dS,
              onRequestRemoveDirectory: fS,
              onHeaderFocusChange: vl,
            }),
          ],
        }),
      },
      "workspace",
    )),
      (R[196] = xo),
      (R[197] = re),
      (R[198] = nn));
  else nn = R[198];
  let Pl;
  if (
    R[199] !== $e ||
    R[200] !== vt ||
    R[201] !== Et ||
    R[202] !== ao ||
    R[203] !== nn
  )
    ((Pl = [pe, $e, vt, Et, ...ao, nn]),
      (R[199] = $e),
      (R[200] = vt),
      (R[201] = Et),
      (R[202] = ao),
      (R[203] = nn),
      (R[204] = Pl));
  else Pl = R[204];
  let kl;
  if (
    R[205] !== Jo ||
    R[206] !== ju ||
    R[207] !== eu ||
    R[208] !== H ||
    R[209] !== Q ||
    R[210] !== Pl
  )
    ((kl = e(qp, {
      title: "Permissions",
      color: "permission",
      defaultTab: Jo,
      selectedTab: eu,
      onTabChange: IR,
      hidden: ju,
      initialHeaderFocused: H,
      navFromContent: Q,
      children: Pl,
    })),
      (R[205] = Jo),
      (R[206] = ju),
      (R[207] = eu),
      (R[208] = H),
      (R[209] = Q),
      (R[210] = Pl),
      (R[211] = kl));
  else kl = R[211];
  let Tl;
  if (R[212] !== Jo || R[213] !== jr || R[214] !== uu || R[215] !== nt)
    ((Tl = e(o, {
      marginTop: 1,
      children: e(InputGuide, {
        children: uu
          ? e(N, {
              children:
                "\u2190/\u2192 to switch \xB7 \u2193 to select \xB7 Esc to cancel",
            })
          : nt
            ? e(N, {
                children:
                  "Type to filter \xB7 Enter/\u2193 to select \xB7 \u2191 to tabs \xB7 Esc to clear",
              })
            : jr && Jo === "recent"
              ? e(N, {
                  children:
                    "Enter to approve \xB7 r to retry \xB7 \u2191/\u2193 to navigate \xB7 Esc to cancel",
                })
              : e(N, {
                  children:
                    "\u2191/\u2193 to navigate \xB7 Enter to select \xB7 \u2190/\u2192 to switch \xB7 Esc to cancel",
                }),
      }),
    })),
      (R[212] = Jo),
      (R[213] = jr),
      (R[214] = uu),
      (R[215] = nt),
      (R[216] = Tl));
  else Tl = R[216];
  let $l;
  if (R[217] !== kl || R[218] !== Tl)
    (($l = r(Qr, { color: "permission", children: [kl, Tl] })),
      (R[217] = kl),
      (R[218] = Tl),
      (R[219] = $l));
  else $l = R[219];
  let yh;
  if (R[220] !== bu || R[221] !== yu || R[222] !== $l)
    ((yh = e(o, {
      flexDirection: "column",
      onKeyDown: bu,
      onPaste: yu,
      children: $l,
    })),
      (R[220] = bu),
      (R[221] = yu),
      (R[222] = $l),
      (R[223] = yh));
  else yh = R[223];
  return yh;
}
var bC = async (i, u) => {
  if (isRemoteActive()) {
    let f = getRemoteTransport();
    if (!f || !hasRemoteControlChannel())
      return (
        i("Permission rules aren't available over this remote connection"),
        null
      );
    return e(li, { onExit: i, rulesRead: ql(f, u.abortController.signal) });
  }
  return e(Fl, {
    onExit: i,
    onRetryDenials: (f) => {
      u.applyMessageOp({ type: "append", messages: [createPermissionRetryMessage(f)] });
    },
  });
};
export { bC as call };

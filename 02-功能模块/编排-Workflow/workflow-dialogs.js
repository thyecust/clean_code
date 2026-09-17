// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { R, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { fromEnum } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { jsonStringify, jsonStringifyUntraced, jsonParse, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { isConfigDirPath } from "../模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { CLAUDE_BULLET_GLYPH, DOTTED_CIRCLE_GLYPH, UP_ARROW_GLYPH, DOWN_ARROW_GLYPH, RETURN_KEY_GLYPH, HORIZONTAL_LINE_GLYPH, ROUNDED_BOX_CORNER_GLYPHS, EN_DASH_GLYPH, TREE_CONNECTOR_GLYPHS } from "../权限系统/chunk-e4pfvp7x.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useActiveOverlay } from "../多会话视图-Fleet/overlay-registry.js";
import { useStorageV5Context } from "../../01-核心基础设施/核心工具-未归类/storage-v5-context.js";
import { STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { formatPathWithTilde, assertDirChainReal, writeFileAndFlush } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { findGitRoot } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { getStringWidth, truncateToWidth, splitTextByWidth, formatDuration, formatBarElapsed, formatTokens } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { ake } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { Box, Text, useTimeout } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useKeybinding, useKeybindings } from "../键位绑定-Keybindings/keybinding-hooks.js";
import { slugifyWorkflowName } from "../记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import { getProjectDirsUpToHome, getUserMessageText, isTranscriptMessage } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { STRUCTURED_OUTPUT_TOOL_NAME } from "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { buildResumePrompt } from "./chunk-va9cgbfs.js";
import { parseWorkflowScript } from "./workflow-script.js";
import { useTerminalSize } from "../../01-核心基础设施/UI组件-TUI/use-terminal-size.js";
import {
  formatModelLabel,
  useWorkflowDialogLayout,
  useWorkflowElapsedMs,
  WorkflowPhaseRow,
  WorkflowHeader,
  buildWorkflowPhaseGroups,
  countPhaseAgents,
  getWorkflowDescription,
  buildWorkflowHeaderProps,
} from "./workflow-progress-ui.js";
import { DotSeparatedList } from "../../01-核心基础设施/核心工具-未归类/chunk-ff1hq6qq.js";
import { de } from "../../01-核心基础设施/UI组件-TUI/chunk-92g8hxqw.js";
import { KeybindingHint } from "../键位绑定-Keybindings/keybinding-display.js";
import { useSession } from "../../01-核心基础设施/核心工具-未归类/session-context.js";
import { hn } from "../../01-核心基础设施/UI组件-TUI/chunk-tp42fv8j.js";
import { FocusableBox } from "../../01-核心基础设施/UI组件-TUI/focusable-box.js";
import { EmptyStateMessage } from "../../01-核心基础设施/UI组件-TUI/empty-state-message.js";
import { ErrorMessage } from "../../01-核心基础设施/UI组件-TUI/error-message.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { summarizeToolInput } from "../../01-核心基础设施/核心工具-未归类/summarize-tool-input.js";
import { getWorkflowTranscriptDir } from "./workflow-snapshots.js";
import { getUserWorkflowsDir, clearWorkflowCaches } from "./workflow-registry.js";
import { E, V, d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { expandTabs } from "../../01-核心基础设施/核心工具-字符串与文本/expand-tabs.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
F();
import { join as nl } from "path";
async function Wn(s, a) {
  let l = nl(getWorkflowTranscriptDir(s), `agent-${a}.jsonl`),
    c;
  try {
    c = await ake(l);
  } catch (k) {
    return (
      logForDebugging(
        `readWorkflowAgentTranscript: ${l} not readable (${k instanceof Error ? k.message : String(k)})`,
      ),
      null
    );
  }
  let m = c.filter(isTranscriptMessage),
    w = m.findIndex((k) => k.type === "user"),
    h = w === -1 ? void 0 : m[w];
  for (let k = w + 1; w !== -1 && k < m.length; k++) {
    let S = m[k];
    if (S === void 0 || S.type !== "user" || S.isMeta === !0) break;
    h = S;
  }
  let v = (h && getUserMessageText(h)) ?? "",
    C = [],
    W = "";
  for (let k of m) {
    if (k.type !== "assistant" || !Array.isArray(k.message.content)) continue;
    let S = "";
    for (let I of k.message.content)
      if (I.type === "tool_use") {
        if (
          (C.push({ name: I.name, summary: summarizeToolInput(I.input) }),
          I.name === STRUCTURED_OUTPUT_TOOL_NAME && I.input !== void 0)
        )
          try {
            S = jsonStringify(I.input, null, 2);
          } catch {
            S = String(I.input);
          }
      } else if (I.type === "text") S += I.text;
    if (S) W = S;
  }
  return { prompt: v, toolCalls: C, finalText: W };
}
var oi = "  ",
  rl = 40,
  si = 8,
  sl =
    /[\x00-\x08\x0a-\x1f\x7f-\x9f\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/g,
  jn = ": ";
function ii(s, a) {
  let l = s.trim();
  if (a < si || (!l.startsWith("{") && !l.startsWith("["))) return null;
  try {
    let c = [];
    return (li(c, jsonParse(l), 0, void 0, !1, a), c);
  } catch {
    return null;
  }
}
function In(s, a) {
  let l = Math.floor(Math.max(0, a - si) / oi.length);
  return oi.repeat(Math.min(s, l));
}
function ai(s) {
  return s.replace(
    sl,
    (a) => `\\u${a.charCodeAt(0).toString(16).padStart(4, "0")}`,
  );
}
function ni(s) {
  return ai(jsonStringifyUntraced(s));
}
function Nn(s, a) {
  return s === void 0
    ? []
    : [
        { ...s, text: truncateToWidth(s.text, a - jn.length) },
        { text: jn, dimColor: !0 },
      ];
}
function ri(s, a, l, c, m, w) {
  if (l) {
    let C = In(a, m);
    s.push([
      { text: C },
      { ...l, text: truncateToWidth(l.text, m - C.length - 1) },
      { text: ":", dimColor: !0 },
    ]);
  }
  let h = In(l ? a + 1 : a, m),
    v = m - h.length;
  for (let C of c) {
    if (C === "") {
      s.push([{ text: "" }]);
      continue;
    }
    for (let W of splitTextByWidth(C, v))
      s.push([w ? { text: h + W, color: w } : { text: h + W }]);
  }
}
function li(s, a, l, c, m, w) {
  let h = In(l, w),
    v = w - h.length,
    C = m ? "," : "",
    W = typeof c === "string" ? { text: ni(c), color: "permission" } : void 0;
  if (typeof a === "object" && a !== null) {
    if (l >= rl) throw RangeError("JSON outcome nested past MAX_DEPTH");
    let T = Array.isArray(a) ? a.map((P, J) => [J, P]) : Object.entries(a),
      [j, q] = Array.isArray(a) ? ["[", "]"] : ["{", "}"];
    if (T.length === 0) {
      let P = j + q + C;
      s.push([{ text: h }, ...Nn(W, v - P.length), { text: P, dimColor: !0 }]);
      return;
    }
    s.push([{ text: h }, ...Nn(W, v - j.length), { text: j, dimColor: !0 }]);
    for (let P = 0; P < T.length; P++) {
      let [J, Z] = T[P];
      li(s, Z, l + 1, J, P < T.length - 1, w);
    }
    s.push([{ text: h }, { text: q + C, dimColor: !0 }]);
    return;
  }
  if (
    typeof a === "number" &&
    (Number.isInteger(a) ? !Number.isSafeInteger(a) : !Number.isFinite(a))
  )
    throw RangeError("JSON outcome number not representable");
  if (
    typeof a === "string" &&
    a.includes(`
`)
  ) {
    ri(
      s,
      l,
      W ?? (typeof c === "number" ? { text: `[${c}]`, dimColor: !0 } : void 0),
      a
        .replace(/(?:\r?\n)+$/, "")
        .split(/\r?\n/)
        .map((T) => expandTabs(ai(T))),
      w,
      void 0,
    );
    return;
  }
  let k = typeof a === "string" ? ni(a) : String(a),
    S = typeof a === "string" ? "success" : "warning";
  if ((W === void 0 ? 0 : getStringWidth(W.text) + jn.length) + getStringWidth(k) + C.length <= v) {
    s.push([
      { text: h },
      ...Nn(W, v),
      { text: k, color: S },
      ...(C ? [{ text: C, dimColor: !0 }] : []),
    ]);
    return;
  }
  ri(s, l, W, [k + C], w, S);
}
F();
import { join as Mi } from "path";
import { mkdir, writeFile } from "fs/promises";
import { dirname, join as En } from "path";
var Oe = "Use a different name or overwrite.";
async function ll(s, a) {
  if (s === "user") return getUserWorkflowsDir();
  let l = findGitRoot(a);
  if (l === null) return En(a, ".claude", "workflows");
  let c = (await getProjectDirsUpToHome("workflows", a))[0];
  if (c !== void 0) return c;
  return En(l, ".claude", "workflows");
}
async function _n(s, a) {
  let l = slugifyWorkflowName(s.name),
    c = await ll(s.scope, s.cwd),
    m = En(c, `${l}.js`);
  if (a !== void 0 && s.scope === "user") return cl(a, l, m, s);
  let w = s.scope !== "user" && !isConfigDirPath(dirname(c));
  if (w)
    try {
      await assertDirChainReal(dirname(dirname(c)), c);
    } catch (h) {
      throw (logFeatureBad("workflow_save", "write_failed"), h);
    }
  await mkdir(c, { recursive: !0, mode: 448 });
  try {
    if (s.overwrite)
      await writeFileAndFlush(m, s.script, { encoding: "utf8", mode: 384, checkParentDir: w });
    else await writeFile(m, s.script, { encoding: "utf8", mode: 384, flag: "wx" });
  } catch (h) {
    if (!s.overwrite && A(h) === "EEXIST")
      throw (
        logFeatureSad("workflow_save", "already_exists"),
        Error(`Dynamic workflow "${l}" already exists at ${m}. ${Oe}`)
      );
    throw (logFeatureBad("workflow_save", "write_failed"), h);
  }
  return ci(l, m, s);
}
async function ci(s, a, l) {
  clearWorkflowCaches();
  let [{ clearCommandMemoizationCaches: c }, { resetSentSkillNames: m }] =
    await Promise.all([
      import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
      import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
    ]);
  return (
    c(),
    m(),
    logFeatureOk("workflow_save"),
    logEvent("tengu_workflow_saved", {
      scope: fromEnum(l.scope),
      overwrite: l.overwrite,
      script_size_chars: l.script.length,
    }),
    { name: s, path: a, scope: l.scope }
  );
}
async function cl(s, a, l, c) {
  let m = await s.write(
    STORAGE_KEYS.userConfigDir("workflows", [`${a}.js`]),
    c.script,
    c.overwrite
      ? { mode: 384, publishDiscipline: "atomic" }
      : { mode: 384, precondition: { type: "ifAbsent" } },
  );
  if (!m.ok) {
    if (!c.overwrite && m.error.code === "AlreadyExists")
      throw (
        logFeatureSad("workflow_save", "already_exists"),
        new R(
          `Dynamic workflow "${a}" already exists at ${l}. ${Oe}`,
          "workflow name collision",
        )
      );
    throw (
      logFeatureBad("workflow_save", "write_failed"),
      new R(
        `Workflow save failed: ${m.error.code} (${l})`,
        "workflow save failed",
      )
    );
  }
  return ci(a, l, c);
}
function Pl(Xu) {
  return Xu.project.cwd;
}
function Rl(tm) {
  return tm === "project" ? "user" : "project";
}
function SaveWorkflowDialog(Vu) {
  let st = _(54),
    { script: ui, defaultName: ul, onDone: Ue } = Vu,
    { storageV5: mi } = useStorageV5Context(),
    { columns: fi } = useTerminalSize(),
    pi = useSession(Pl),
    [zt, zu] = d(ul),
    [di, Bu] = d(ul.length),
    [Te, Yu] = d("project"),
    [se, ml] = d(!1),
    [ie, fl] = d(null),
    [Fn, gi] = d(null),
    pl;
  if (st[0] === MEMO_CACHE_SENTINEL)
    ((pl = () => {
      (fl(null), gi(null));
    }),
      (st[0] = pl));
  else pl = st[0];
  let dl = pl,
    gl;
  if (st[1] === MEMO_CACHE_SENTINEL)
    ((gl = (Qu) => {
      (zu(Qu), dl());
    }),
      (st[1] = gl));
  else gl = st[1];
  let Ou = gl,
    hl;
  if (
    st[2] !== ie ||
    st[3] !== pi ||
    st[4] !== zt ||
    st[5] !== Ue ||
    st[6] !== se ||
    st[7] !== Te ||
    st[8] !== ui ||
    st[9] !== mi
  )
    ((hl = () => {
      if (se) {
        return;
      }
      let xl = zt.trim();
      if (!xl) {
        return;
      }
      (ml(!0),
        gi(null),
        _n(
          { name: xl, scope: Te, script: ui, overwrite: ie !== null, cwd: pi },
          mi,
        )
          .then((hi) => {
            Ue(
              `Dynamic workflow saved to ${hi.path}. Invoke as /${hi.name} or Workflow({name: "${hi.name}"}) in future sessions.`,
            );
          })
          .catch((xi) => {
            let bi = xi instanceof Error ? xi.message : String(xi);
            if (bi.includes(Oe)) {
              let Uu = bi.match(/at (.+?)\. /);
              fl(Uu?.[1] ?? "(unknown path)");
            } else gi(bi);
            ml(!1);
          }));
    }),
      (st[2] = ie),
      (st[3] = pi),
      (st[4] = zt),
      (st[5] = Ue),
      (st[6] = se),
      (st[7] = Te),
      (st[8] = ui),
      (st[9] = mi),
      (st[10] = hl));
  else hl = st[10];
  let yi = hl,
    bl;
  if (st[11] !== Ue) ((bl = () => Ue()), (st[11] = Ue), (st[12] = bl));
  else bl = st[12];
  let qn = bl,
    yl;
  if (st[13] === MEMO_CACHE_SENTINEL)
    ((yl = { context: "Settings", isActive: !0 }), (st[13] = yl));
  else yl = st[13];
  useKeybinding("confirm:no", qn, yl);
  let wl;
  if (st[14] === MEMO_CACHE_SENTINEL)
    ((wl = (kl) => {
      if (kl.key === "tab") (kl.preventDefault(), Yu(Rl), dl());
    }),
      (st[14] = wl));
  else wl = st[14];
  let Zu = wl,
    Cl;
  if (st[15] !== zt)
    ((Cl = slugifyWorkflowName(zt.trim() || "workflow")), (st[15] = zt), (st[16] = Cl));
  else Cl = st[16];
  let Jn = Cl,
    Sl;
  if (st[17] !== Te || st[18] !== Jn)
    ((Sl =
      Te === "project"
        ? `.claude/workflows/${Jn}.js`
        : formatPathWithTilde(Mi(getUserWorkflowsDir(), `${Jn}.js`))),
      (st[17] = Te),
      (st[18] = Jn),
      (st[19] = Sl));
  else Sl = st[19];
  let wi = Sl;
  const ki = Te === "project" ? "Project" : "User";
  let Kn;
  if (st[20] !== ki || st[21] !== wi)
    ((Kn = r(Text, { dimColor: !0, children: [ki, " scope \xB7 ", wi] })),
      (st[20] = ki),
      (st[21] = wi),
      (st[22] = Kn));
  else Kn = st[22];
  const Ci = ie ? "overwrite" : "save";
  let Gn;
  if (st[23] !== Ci)
    ((Gn = e(KeybindingHint, { chord: "enter", action: Ci })), (st[23] = Ci), (st[24] = Gn));
  else Gn = st[24];
  let $l, Ml;
  if (st[25] === MEMO_CACHE_SENTINEL)
    (($l = e(KeybindingHint, { chord: "tab", action: "toggle scope" })),
      (Ml = e(KeybindingHint, { chord: "escape", action: "cancel" })),
      (st[25] = $l),
      (st[26] = Ml));
  else (($l = st[25]), (Ml = st[26]));
  let Hn;
  if (st[27] !== Gn)
    ((Hn = r(DotSeparatedList, { children: [Gn, $l, Ml] })), (st[27] = Gn), (st[28] = Hn));
  else Hn = st[28];
  let vl;
  if (st[29] === MEMO_CACHE_SENTINEL) ((vl = e(Text, { children: "Save as:" })), (st[29] = vl));
  else vl = st[29];
  let Al;
  if (st[30] === MEMO_CACHE_SENTINEL) ((Al = e(Text, { children: ">" })), (st[30] = Al));
  else Al = st[30];
  const Si = !se,
    $i = !se;
  let Vn;
  if (
    st[31] !== fi ||
    st[32] !== di ||
    st[33] !== yi ||
    st[34] !== zt ||
    st[35] !== Si ||
    st[36] !== $i
  )
    ((Vn = r(Box, {
      flexDirection: "row",
      gap: 1,
      marginTop: 1,
      children: [
        Al,
        e(hn, {
          value: zt,
          onChange: Ou,
          onSubmit: yi,
          focus: Si,
          showCursor: $i,
          columns: fi,
          cursorOffset: di,
          onChangeCursorOffset: Bu,
        }),
      ],
    })),
      (st[31] = fi),
      (st[32] = di),
      (st[33] = yi),
      (st[34] = zt),
      (st[35] = Si),
      (st[36] = $i),
      (st[37] = Vn));
  else Vn = st[37];
  let zn;
  if (st[38] !== ie)
    ((zn =
      ie &&
      e(Box, {
        marginTop: 1,
        children: r(Text, {
          color: "warning",
          children: [
            ie,
            " already exists. Press Enter again to overwrite, or change the name.",
          ],
        }),
      })),
      (st[38] = ie),
      (st[39] = zn));
  else zn = st[39];
  let Bn;
  if (st[40] !== Fn)
    ((Bn = Fn && e(Box, { marginTop: 1, children: e(ErrorMessage, { error: Fn }) })),
      (st[40] = Fn),
      (st[41] = Bn));
  else Bn = st[41];
  let Yn;
  if (st[42] !== se)
    ((Yn =
      se &&
      e(Box, {
        marginTop: 1,
        children: e(Text, { dimColor: !0, children: "Saving\u2026" }),
      })),
      (st[42] = se),
      (st[43] = Yn));
  else Yn = st[43];
  let Qn;
  if (st[44] !== Vn || st[45] !== zn || st[46] !== Bn || st[47] !== Yn)
    ((Qn = r(Box, { flexDirection: "column", children: [vl, Vn, zn, Bn, Yn] })),
      (st[44] = Vn),
      (st[45] = zn),
      (st[46] = Bn),
      (st[47] = Yn),
      (st[48] = Qn));
  else Qn = st[48];
  let Tl;
  if (st[49] !== qn || st[50] !== Kn || st[51] !== Hn || st[52] !== Qn)
    ((Tl = e(FocusableBox, {
      onKeyDown: Zu,
      children: e(de, {
        title: "Save dynamic workflow",
        subtitle: Kn,
        onCancel: qn,
        color: "permission",
        isCancelActive: !1,
        inputGuide: Hn,
        children: Qn,
      }),
    })),
      (st[49] = qn),
      (st[50] = Kn),
      (st[51] = Hn),
      (st[52] = Qn),
      (st[53] = Tl));
  else Tl = st[53];
  return Tl;
}
function Qc(Xn, Rm) {
  return e(
    Text,
    {
      color: Xn.color,
      dimColor: Xn.dimColor,
      bold: Xn.bold ?? !1,
      children: Xn.text,
    },
    Rm,
  );
}
function _t(s, a, l) {
  if (a <= l) return { from: 0, to: a, above: 0, below: 0 };
  let c = Math.floor(l / 2),
    m = Math.max(0, Math.min(s - c, a - l)),
    w = m + l;
  return { from: m, to: w, above: m, below: a - w };
}
function St(s) {
  return s.state === "start" || s.state === "progress";
}
function Pt(s, a) {
  if (s.state === "done") return "done";
  if (s.state === "error") {
    if (s.skipped) return "skipped";
    if (s.blocked) return "blocked";
    return "failed";
  }
  if (!a) return "interrupted";
  return s.queuedAt != null && s.startedAt == null ? "queued" : "running";
}
function xo(s) {
  switch (s) {
    case "done":
      return { glyph: figures.tick, color: "success" };
    case "failed":
      return { glyph: figures.cross, color: "error" };
    case "skipped":
      return { glyph: figures.cross, color: "subtle" };
    case "blocked":
      return { glyph: figures.cross, color: "permission" };
    case "queued":
    case "interrupted":
      return { glyph: DOTTED_CIRCLE_GLYPH, color: "subtle" };
    case "running":
      return { glyph: CLAUDE_BULLET_GLYPH, color: "subtle" };
  }
}
var Et = [
  "all",
  "running",
  "queued",
  "failed",
  "done",
  "skipped",
  "blocked",
  "interrupted",
];
function He(s, a) {
  return a ? `showing ${s} ${a}` : `${s} ${pluralize(s, "agent")}`;
}
function xn(s, a) {
  if (s.status === "not-started") return "Not started yet";
  return a ? `No ${a} agents` : "No agents";
}
function $t(s, a, l) {
  return Math.max(a, Math.min(l, s));
}
function Hc(s, a) {
  let l = Pt(s, a),
    c = formatModelLabel(s.fallbackModel ?? s.model, void 0),
    m = [];
  if (s.isolation != null) m.push(s.isolation);
  if (s.tokens != null) m.push(`${formatTokens(s.tokens)} tok`);
  if (l === "running" && s.lastProgressAt != null) {
    let h = Math.floor((Date.now() - s.lastProgressAt) / 1000);
    if (h >= 30) m.push(`idle ${formatDuration(h * 1000)}`);
  }
  if (l === "queued") m.push("queued");
  if (l === "interrupted") m.push("stopped");
  if (l === "skipped") m.push("skipped");
  if (l === "blocked") m.push("blocked");
  if (l === "failed") m.push("failed");
  let w =
    s.durationMs ??
    (l === "running" && s.startedAt != null
      ? Math.max(0, Date.now() - s.startedAt)
      : void 0);
  return { model: c, stats: m.join(" \xB7 "), time: w != null ? formatBarElapsed(w) : "" };
}
var _a = 6;
function Ds(s, a, l, c) {
  if (a <= 0) return [];
  let { model: m, stats: w, time: h } = Hc(s, c),
    v = l ? "permission" : void 0,
    C = !l,
    W = (J, Z) => (Z <= 0 ? "" : truncateToWidth(J, Z)),
    k = h ? W(h, a).padStart(Math.min(_a, a)) : "",
    S = k ? a - getStringWidth(k) - 1 : a,
    I = (J, Z) => (J && Z ? 3 : 0),
    T = m,
    j = w;
  if (getStringWidth(T) + I(T, j) + getStringWidth(j) > S) {
    if (((j = W(j, S - getStringWidth(T) - I(T, j))), getStringWidth(T) + I(T, j) + getStringWidth(j) > S))
      T = W(T, S - getStringWidth(j) - I(T, j));
  }
  let q = T && j ? " \xB7 " : "",
    P = Math.max(0, a - getStringWidth(T) - getStringWidth(q) - getStringWidth(j) - getStringWidth(k));
  return [
    { text: T, color: v, dimColor: C },
    { text: q, color: v, dimColor: C },
    { text: j, color: v, dimColor: C },
    { text: " ".repeat(P) },
    { text: k, color: v, dimColor: C },
  ];
}
var Vc = 40,
  zc = 30;
function bn(s, a) {
  let l = Math.min(
      Vc,
      Math.max(22, a - zc),
      Math.max(4, Math.min(a, Math.max(12, a - _a - 1))),
    ),
    c = s.reduce((m, w) => Math.max(m, getStringWidth(w.label)), 0);
  return Math.min(Math.max(12, c), l);
}
function Da(s, a) {
  let l = 0;
  for (let c = 0; c < s.length; c++) {
    let m = s[c],
      w = getStringWidth(m.text);
    if (l + w > a) {
      let h = a - l,
        v = h > 0 ? truncateToWidth(m.text, h) : "",
        C = s.slice(0, c);
      if (v) C.push({ ...m, text: v });
      return { segs: C, pad: Math.max(0, h - getStringWidth(v)) };
    }
    l += w;
  }
  return { segs: s, pad: Math.max(0, a - l) };
}
function Me(Am) {
  let Dl = _(7),
    { segs: vi, width: Ai } = Am,
    On,
    Zn;
  if (Dl[0] !== vi || Dl[1] !== Ai) {
    let { segs: Tm, pad: Pm } = Da(vi, Ai);
    On = Tm.map(Qc);
    Zn = " ".repeat(Pm);
    ((Dl[0] = vi), (Dl[1] = Ai), (Dl[2] = On), (Dl[3] = Zn));
  } else ((On = Dl[2]), (Zn = Dl[3]));
  let Wl;
  if (Dl[4] !== On || Dl[5] !== Zn)
    ((Wl = r(N, { children: [On, Zn] })),
      (Dl[4] = On),
      (Dl[5] = Zn),
      (Dl[6] = Wl));
  else Wl = Dl[6];
  return Wl;
}
function rt(Dm) {
  let er = _(7),
    { segs: Ti, contentWidth: Pi } = Dm,
    Nl;
  if (er[0] === MEMO_CACHE_SENTINEL)
    ((Nl = r(Text, { color: "text", children: [" ", TREE_CONNECTOR_GLYPHS.pipe, " "] })),
      (er[0] = Nl));
  else Nl = er[0];
  let or;
  if (er[1] !== Pi || er[2] !== Ti)
    ((or = e(Me, { segs: Ti, width: Pi })),
      (er[1] = Pi),
      (er[2] = Ti),
      (er[3] = or));
  else or = er[3];
  let jl;
  if (er[4] === MEMO_CACHE_SENTINEL)
    ((jl = r(Text, { color: "text", children: [" ", TREE_CONNECTOR_GLYPHS.pipe] })), (er[4] = jl));
  else jl = er[4];
  let Il;
  if (er[5] !== or)
    ((Il = r(Text, { wrap: "truncate-end", children: [Nl, or, jl] })),
      (er[5] = or),
      (er[6] = Il));
  else Il = er[6];
  return Il;
}
function ht(s, a) {
  let l = s.from > 0 ? figures.arrowUp : " ",
    c = s.to < a ? figures.arrowDown : " ";
  return `${l} ${s.from + 1}${EN_DASH_GLYPH}${s.to} of ${a} ${c}`;
}
function Ws(Wm) {
  let Ll = _(5),
    { win: Ri, total: Di } = Wm,
    El;
  if (Ll[0] !== Di || Ll[1] !== Ri)
    ((El = ht(Ri, Di)), (Ll[0] = Di), (Ll[1] = Ri), (Ll[2] = El));
  else El = Ll[2];
  const Wi = `  ${El}`;
  let _l;
  if (Ll[3] !== Wi)
    ((_l = e(Text, { dimColor: !0, wrap: "truncate-end", children: Wi })),
      (Ll[3] = Wi),
      (Ll[4] = _l));
  else _l = Ll[4];
  return _l;
}
function Ns(Nm) {
  let lt = _(53),
    {
      phase: qt,
      selectedAgent: nr,
      level: Ni,
      contentWidth: tt,
      viewport: Po,
      tight: ji,
      workflowActive: rr,
      filterLabel: to,
    } = Nm,
    Bt = qt.agents,
    Fl;
  if (lt[0] !== tt) ((Fl = HORIZONTAL_LINE_GLYPH.repeat(tt + 2)), (lt[0] = tt), (lt[1] = Fl));
  else Fl = lt[1];
  let ae = Fl,
    Ro,
    kt;
  if (
    lt[2] !== Bt ||
    lt[3] !== ae ||
    lt[4] !== tt ||
    lt[5] !== to ||
    lt[6] !== Ni ||
    lt[7] !== qt ||
    lt[8] !== nr ||
    lt[9] !== ji ||
    lt[10] !== Po ||
    lt[11] !== rr
  ) {
    let Ii = _t(nr, Bt.length, Po);
    kt = [];
    let ql = He(Bt.length, to);
    if (ji) {
      let sr = truncateToWidth(` \xB7 ${ql}`, Math.max(1, tt - 1));
      let Li = Math.max(1, tt - getStringWidth(sr));
      let et;
      if (lt[14] !== qt.title || lt[15] !== Li)
        ((et = truncateToWidth(qt.title, Li)),
          (lt[14] = qt.title),
          (lt[15] = Li),
          (lt[16] = et));
      else et = lt[16];
      let mt;
      if (lt[17] !== et)
        ((mt = { text: et, color: "permission", bold: !0 }),
          (lt[17] = et),
          (lt[18] = mt));
      else mt = lt[18];
      let At;
      if (lt[19] !== sr)
        ((At = { text: sr, dimColor: !0 }), (lt[19] = sr), (lt[20] = At));
      else At = lt[20];
      let Pe;
      if (lt[21] !== mt || lt[22] !== At)
        ((Pe = [mt, At]), (lt[21] = mt), (lt[22] = At), (lt[23] = Pe));
      else Pe = lt[23];
      let Do;
      if (lt[24] !== tt || lt[25] !== Pe)
        ((Do = e(rt, { contentWidth: tt, segs: Pe }, "title")),
          (lt[24] = tt),
          (lt[25] = Pe),
          (lt[26] = Do));
      else Do = lt[26];
      kt.push(Do);
    } else
      (kt.push(
        e(
          rt,
          {
            contentWidth: tt,
            segs: [{ text: truncateToWidth(qt.title, tt), color: "permission", bold: !0 }],
          },
          "title",
        ),
      ),
        kt.push(
          e(
            rt,
            { contentWidth: tt, segs: [{ text: truncateToWidth(ql, tt), dimColor: !0 }] },
            "count",
          ),
        ),
        kt.push(e(rt, { contentWidth: tt, segs: [{ text: "" }] }, "gap")));
    let jm = kt.length;
    if (Bt.length === 0) {
      let et;
      if (lt[27] !== to || lt[28] !== qt)
        ((et = xn(qt, to)), (lt[27] = to), (lt[28] = qt), (lt[29] = et));
      else et = lt[29];
      let mt;
      if (lt[30] !== et)
        ((mt = [{ text: et, dimColor: !0 }]), (lt[30] = et), (lt[31] = mt));
      else mt = lt[31];
      let At;
      if (lt[32] !== tt || lt[33] !== mt)
        ((At = e(rt, { contentWidth: tt, segs: mt }, "empty")),
          (lt[32] = tt),
          (lt[33] = mt),
          (lt[34] = At));
      else At = lt[34];
      kt.push(At);
    } else {
      let Ei = bn(Bt, tt - 5);
      for (let Wo = Ii.from; Wo < Ii.to; Wo++) {
        let ir = Bt[Wo];
        let ar = Ni === "agents" && Wo === nr;
        let { glyph: Im, color: Lm } = xo(Pt(ir, rr));
        let Jl = truncateToWidth(ir.label, Ei);
        let Em = " ".repeat(Math.max(0, Ei - getStringWidth(Jl)));
        let _m = Math.max(0, tt - (Ei + 5));
        kt.push(
          e(
            rt,
            {
              contentWidth: tt,
              segs: [
                { text: ar ? figures.pointer : " ", color: "permission" },
                { text: " " },
                { text: Im, color: Lm },
                { text: " " },
                {
                  text: `${Jl}${Em}`,
                  color: ar ? "permission" : void 0,
                  dimColor: !ar && St(ir),
                },
                { text: " " },
                ...Ds(ir, _m, ar, rr),
              ],
            },
            `a-${Wo}`,
          ),
        );
      }
    }
    let Fm = kt.length - jm;
    for (let _i = Fm; _i < Po; _i++)
      kt.push(e(rt, { contentWidth: tt, segs: [{ text: "" }] }, `pad-${_i}`));
    if (Bt.length > Po) {
      let lr = ` ${ht(Ii, Bt.length)} `;
      let Fi = Math.max(0, tt + 2 - getStringWidth(lr));
      let et;
      if (lt[35] !== Fi) ((et = HORIZONTAL_LINE_GLYPH.repeat(Fi)), (lt[35] = Fi), (lt[36] = et));
      else et = lt[36];
      let mt;
      if (lt[37] !== et)
        ((mt = r(Text, { color: "text", children: [" ", ROUNDED_BOX_CORNER_GLYPHS.bottomLeft, et] })),
          (lt[37] = et),
          (lt[38] = mt));
      else mt = lt[38];
      let At;
      if (lt[39] !== lr)
        ((At = e(Text, { dimColor: !0, children: lr })),
          (lt[39] = lr),
          (lt[40] = At));
      else At = lt[40];
      let Pe;
      if (lt[41] === MEMO_CACHE_SENTINEL)
        ((Pe = e(Text, { color: "text", children: ROUNDED_BOX_CORNER_GLYPHS.bottomRight })),
          (lt[41] = Pe));
      else Pe = lt[41];
      let Do;
      if (lt[42] !== mt || lt[43] !== At)
        ((Do = r(Text, { wrap: "truncate-end", children: [mt, At, Pe] })),
          (lt[42] = mt),
          (lt[43] = At),
          (lt[44] = Do));
      else Do = lt[44];
      Ro = Do;
    } else {
      let et;
      if (lt[45] !== ae)
        ((et = r(Text, {
          color: "text",
          wrap: "truncate-end",
          children: [" ", ROUNDED_BOX_CORNER_GLYPHS.bottomLeft, ae, ROUNDED_BOX_CORNER_GLYPHS.bottomRight],
        })),
          (lt[45] = ae),
          (lt[46] = et));
      else et = lt[46];
      Ro = et;
    }
    ((lt[2] = Bt),
      (lt[3] = ae),
      (lt[4] = tt),
      (lt[5] = to),
      (lt[6] = Ni),
      (lt[7] = qt),
      (lt[8] = nr),
      (lt[9] = ji),
      (lt[10] = Po),
      (lt[11] = rr),
      (lt[12] = Ro),
      (lt[13] = kt));
  } else ((Ro = lt[12]), (kt = lt[13]));
  let et;
  if (lt[47] !== ae)
    ((et = r(Text, {
      color: "text",
      wrap: "truncate-end",
      children: [" ", ROUNDED_BOX_CORNER_GLYPHS.topLeft, ae, ROUNDED_BOX_CORNER_GLYPHS.topRight],
    })),
      (lt[47] = ae),
      (lt[48] = et));
  else et = lt[48];
  let mt;
  if (lt[49] !== Ro || lt[50] !== kt || lt[51] !== et)
    ((mt = r(Box, { flexDirection: "column", children: [et, kt, Ro] })),
      (lt[49] = Ro),
      (lt[50] = kt),
      (lt[51] = et),
      (lt[52] = mt));
  else mt = lt[52];
  return mt;
}
function bo(qm) {
  let eo = _(12),
    { left: qi, right: Ji, leftWidth: Ki, rightWidth: Gi } = qm,
    Kl;
  if (eo[0] === MEMO_CACHE_SENTINEL)
    ((Kl = r(Text, { color: "text", children: [" ", TREE_CONNECTOR_GLYPHS.pipe, " "] })),
      (eo[0] = Kl));
  else Kl = eo[0];
  let cr;
  if (eo[1] !== qi || eo[2] !== Ki)
    ((cr = e(Me, { segs: qi, width: Ki })),
      (eo[1] = qi),
      (eo[2] = Ki),
      (eo[3] = cr));
  else cr = eo[3];
  let Gl;
  if (eo[4] === MEMO_CACHE_SENTINEL)
    ((Gl = r(Text, { color: "text", children: [" ", TREE_CONNECTOR_GLYPHS.pipe, " "] })),
      (eo[4] = Gl));
  else Gl = eo[4];
  let ur;
  if (eo[5] !== Ji || eo[6] !== Gi)
    ((ur = e(Me, { segs: Ji, width: Gi })),
      (eo[5] = Ji),
      (eo[6] = Gi),
      (eo[7] = ur));
  else ur = eo[7];
  let Hl;
  if (eo[8] === MEMO_CACHE_SENTINEL)
    ((Hl = r(Text, { color: "text", children: [" ", TREE_CONNECTOR_GLYPHS.pipe] })), (eo[8] = Hl));
  else Hl = eo[8];
  let Vl;
  if (eo[9] !== cr || eo[10] !== ur)
    ((Vl = r(Text, { wrap: "truncate-end", children: [Kl, cr, Gl, ur, Hl] })),
      (eo[9] = cr),
      (eo[10] = ur),
      (eo[11] = Vl));
  else Vl = eo[11];
  return Vl;
}
function gn(s, a) {
  let l = [],
    c = 0;
  if (a.label) {
    let h = ` ${truncateToWidth(a.label.text, Math.max(1, s - 2))} `;
    ((c += getStringWidth(h)),
      l.push(
        e(
          Text,
          { color: a.label.color ?? "text", bold: a.label.bold, children: h },
          "label",
        ),
      ));
  }
  let m = a.tag ? ` ${truncateToWidth(a.tag, Math.max(0, s - c - 2))} ` : "",
    w = Math.max(0, s - c - getStringWidth(m));
  if ((l.push(e(Text, { color: "text", children: HORIZONTAL_LINE_GLYPH.repeat(w) }, "dash")), m))
    l.push(e(Text, { dimColor: !0, children: m }, "tag"));
  return l;
}
function Vt(Jm) {
  let oo = _(20),
    {
      pos: Hi,
      leftWidth: Km,
      rightWidth: Gm,
      leftTitle: fr,
      rightTitle: pr,
      leftTag: Vi,
      rightTag: zi,
    } = Jm,
    Bi = Hi === "top" ? ROUNDED_BOX_CORNER_GLYPHS.topLeft : ROUNDED_BOX_CORNER_GLYPHS.bottomLeft,
    Yi = Hi === "top" ? TREE_CONNECTOR_GLYPHS.teeDown : TREE_CONNECTOR_GLYPHS.teeUp,
    Qi = Hi === "top" ? ROUNDED_BOX_CORNER_GLYPHS.topRight : ROUNDED_BOX_CORNER_GLYPHS.bottomRight,
    dr;
  if (oo[0] !== Bi)
    ((dr = r(Text, { color: "text", children: [" ", Bi] })),
      (oo[0] = Bi),
      (oo[1] = dr));
  else dr = oo[1];
  const Oi = Km + 2;
  let gr;
  if (oo[2] !== Vi || oo[3] !== fr || oo[4] !== Oi)
    ((gr = gn(Oi, { label: fr ? { text: fr } : void 0, tag: Vi })),
      (oo[2] = Vi),
      (oo[3] = fr),
      (oo[4] = Oi),
      (oo[5] = gr));
  else gr = oo[5];
  let hr;
  if (oo[6] !== Yi)
    ((hr = e(Text, { color: "text", children: Yi })), (oo[6] = Yi), (oo[7] = hr));
  else hr = oo[7];
  const Ui = Gm + 2;
  let xr;
  if (oo[8] !== zi || oo[9] !== pr || oo[10] !== Ui)
    ((xr = gn(Ui, { label: pr ? { text: pr } : void 0, tag: zi })),
      (oo[8] = zi),
      (oo[9] = pr),
      (oo[10] = Ui),
      (oo[11] = xr));
  else xr = oo[11];
  let br;
  if (oo[12] !== Qi)
    ((br = e(Text, { color: "text", children: Qi })),
      (oo[12] = Qi),
      (oo[13] = br));
  else br = oo[13];
  let zl;
  if (
    oo[14] !== dr ||
    oo[15] !== gr ||
    oo[16] !== hr ||
    oo[17] !== xr ||
    oo[18] !== br
  )
    ((zl = r(Text, { wrap: "truncate-end", children: [dr, gr, hr, xr, br] })),
      (oo[14] = dr),
      (oo[15] = gr),
      (oo[16] = hr),
      (oo[17] = xr),
      (oo[18] = br),
      (oo[19] = zl));
  else zl = oo[19];
  return zl;
}
function Wa(s, a, l, c, m) {
  let w = a === l,
    h = s.status === "done",
    v = s.status === "failed",
    C = h ? figures.tick : v ? figures.cross : String(a + 1),
    W = w ? "permission" : h ? "success" : v ? "error" : "subtle",
    k = s.totalCount > 0 ? `${s.doneCount}/${s.totalCount}` : "",
    S = c === "phases" && w ? `${figures.pointer} ` : "  ",
    I = getStringWidth(S) + getStringWidth(C) + 1,
    T = k ? 1 + getStringWidth(k) : 0,
    j = truncateToWidth(s.title, Math.max(1, m - I - T)),
    q = Math.max(0, m - I - getStringWidth(j) - T),
    P = !w && s.status === "not-started",
    J = [
      { text: S, color: w ? "permission" : void 0 },
      { text: C, color: W },
      { text: " " },
      { text: j, color: w ? "permission" : void 0, dimColor: P },
      { text: " ".repeat(q) },
    ];
  if (k) J.push({ text: " " }, { text: k, color: w ? "permission" : "subtle" });
  return J;
}
function Na(s, a, l, c, m, w, h) {
  let v = c === "agents" && a === l,
    { glyph: C, color: W } = xo(Pt(s, h)),
    k = truncateToWidth(s.label, w),
    S = " ".repeat(Math.max(0, w - getStringWidth(k))),
    I = Math.max(0, m - (w + 4));
  return [
    { text: v ? figures.pointer : " ", color: "permission" },
    { text: C, color: W },
    { text: " " },
    {
      text: `${k}${S}`,
      color: v ? "permission" : void 0,
      dimColor: !v && St(s),
    },
    { text: " " },
    ...Ds(s, I, v, h),
  ];
}
function ja(s, a, l, c, m) {
  let w = a === l,
    { glyph: h, color: v } = xo(Pt(s, m)),
    C = truncateToWidth(s.label, Math.max(1, c - 4));
  return [
    { text: w ? `${figures.pointer} ` : "  ", color: "permission" },
    { text: h, color: v },
    { text: " " },
    { text: C, color: w ? "permission" : void 0, dimColor: !w && St(s) },
  ];
}
function js(Hm) {
  let jo = _(41),
    {
      phases: no,
      selectedPhase: No,
      clampedPhase: yr,
      clampedAgent: wr,
      level: kr,
      leftWidth: le,
      rightWidth: Yt,
      viewport: Re,
      workflowActive: Zi,
      filterLabel: ro,
    } = Hm,
    Dt = No.agents,
    Cr,
    Sr,
    $r,
    Mr,
    vr,
    Tr,
    Pr,
    Rr,
    Io,
    Dr;
  if (
    jo[0] !== Dt ||
    jo[1] !== wr ||
    jo[2] !== yr ||
    jo[3] !== ro ||
    jo[4] !== le ||
    jo[5] !== kr ||
    jo[6] !== no ||
    jo[7] !== Yt ||
    jo[8] !== No ||
    jo[9] !== Re ||
    jo[10] !== Zi
  ) {
    let Xi = _t(yr, no.length, Re);
    let ta = _t(wr, Dt.length, Re);
    let Vm = bn(Dt, Yt - 4);
    let Bl = [];
    for (let so = 0; so < Re; so++) {
      let ea = Xi.from + so;
      let oa = ta.from + so;
      let zm = ea < Xi.to ? Wa(no[ea], ea, yr, kr, le) : [];
      let Wr;
      if (oa < ta.to) Wr = Na(Dt[oa], oa, wr, kr, Yt, Vm, Zi);
      else if (Dt.length === 0 && so === 0)
        Wr = [{ text: xn(No, ro), dimColor: !0 }];
      else Wr = [];
      Bl.push(
        e(bo, { left: zm, right: Wr, leftWidth: le, rightWidth: Yt }, so),
      );
    }
    const io = No.title;
    let Lo;
    if (jo[21] !== Dt.length || jo[22] !== ro)
      ((Lo = He(Dt.length, ro)),
        (jo[21] = Dt.length),
        (jo[22] = ro),
        (jo[23] = Lo));
    else Lo = jo[23];
    let na = `${io} \xB7 ${Lo}`;
    Sr = Box;
    Rr = "column";
    if (jo[24] !== le || jo[25] !== na || jo[26] !== Yt)
      ((Io = e(Vt, {
        pos: "top",
        leftWidth: le,
        rightWidth: Yt,
        leftTitle: "Phases",
        rightTitle: na,
      })),
        (jo[24] = le),
        (jo[25] = na),
        (jo[26] = Yt),
        (jo[27] = Io));
    else Io = jo[27];
    Dr = Bl;
    Cr = Vt;
    $r = "bottom";
    Mr = le;
    vr = Yt;
    Tr = no.length > Re ? ht(Xi, no.length) : void 0;
    Pr = Dt.length > Re ? ht(ta, Dt.length) : void 0;
    ((jo[0] = Dt),
      (jo[1] = wr),
      (jo[2] = yr),
      (jo[3] = ro),
      (jo[4] = le),
      (jo[5] = kr),
      (jo[6] = no),
      (jo[7] = Yt),
      (jo[8] = No),
      (jo[9] = Re),
      (jo[10] = Zi),
      (jo[11] = Cr),
      (jo[12] = Sr),
      (jo[13] = $r),
      (jo[14] = Mr),
      (jo[15] = vr),
      (jo[16] = Tr),
      (jo[17] = Pr),
      (jo[18] = Rr),
      (jo[19] = Io),
      (jo[20] = Dr));
  } else
    ((Cr = jo[11]),
      (Sr = jo[12]),
      ($r = jo[13]),
      (Mr = jo[14]),
      (vr = jo[15]),
      (Tr = jo[16]),
      (Pr = jo[17]),
      (Rr = jo[18]),
      (Io = jo[19]),
      (Dr = jo[20]));
  let io;
  if (
    jo[28] !== Cr ||
    jo[29] !== $r ||
    jo[30] !== Mr ||
    jo[31] !== vr ||
    jo[32] !== Tr ||
    jo[33] !== Pr
  )
    ((io = e(Cr, {
      pos: $r,
      leftWidth: Mr,
      rightWidth: vr,
      leftTag: Tr,
      rightTag: Pr,
    })),
      (jo[28] = Cr),
      (jo[29] = $r),
      (jo[30] = Mr),
      (jo[31] = vr),
      (jo[32] = Tr),
      (jo[33] = Pr),
      (jo[34] = io));
  else io = jo[34];
  let Lo;
  if (
    jo[35] !== Sr ||
    jo[36] !== Rr ||
    jo[37] !== Io ||
    jo[38] !== Dr ||
    jo[39] !== io
  )
    ((Lo = r(Sr, { flexDirection: Rr, children: [Io, Dr, io] })),
      (jo[35] = Sr),
      (jo[36] = Rr),
      (jo[37] = Io),
      (jo[38] = Dr),
      (jo[39] = io),
      (jo[40] = Lo));
  else Lo = jo[40];
  return Lo;
}
var Bc = 2,
  Yc = 20,
  Ts = 3,
  Ia = 100;
function Is(ce, Jt, ra) {
  let Yl = _(7),
    [sa, Bm] = d(null),
    Ql;
  if (Yl[0] !== Jt || Yl[1] !== ce)
    ((Ql = () => {
      if (!ce || !Jt) {
        return;
      }
      let Ol = !1;
      return (
        Wn(ce, Jt).then((Ym) => {
          if (!Ol) Bm({ agentId: Jt, transcript: Ym });
        }),
        () => {
          Ol = !0;
        }
      );
    }),
      (Yl[0] = Jt),
      (Yl[1] = ce),
      (Yl[2] = Ql));
  else Ql = Yl[2];
  let Ul;
  if (Yl[3] !== Jt || Yl[4] !== ra || Yl[5] !== ce)
    ((Ul = [ce, Jt, ra]),
      (Yl[3] = Jt),
      (Yl[4] = ra),
      (Yl[5] = ce),
      (Yl[6] = Ul));
  else Ul = Yl[6];
  if ((E(Ql, Ul), !ce || !Jt)) {
    return null;
  }
  if (!sa || sa.agentId !== Jt) {
    return "loading";
  }
  return sa.transcript;
}
function Ps(s, a) {
  let l = [];
  for (let c of s.split(`
`)) {
    if (c === "") {
      l.push("");
      continue;
    }
    for (let m of splitTextByWidth(c, Math.max(1, a))) l.push(m);
  }
  return l;
}
function La({
  lines: s,
  title: a,
  body: l,
  collapsedLines: c,
  expanded: m,
  indent: w,
  width: h,
}) {
  let v = l.length - c,
    C = v >= 2 ? v : 0,
    W = [{ text: a, bold: !0, dimColor: !0 }];
  if (C > 0)
    W.push({
      text: truncateToWidth(
        ` \xB7 ${l.length} lines${m ? "" : ` \xB7 ${RETURN_KEY_GLYPH} expand`}`,
        h - getStringWidth(a),
      ),
      dimColor: !0,
    });
  s.push(W);
  let k = m || C === 0 ? l : l.slice(0, c);
  for (let S of k) s.push(S);
  if (!m && C > 0)
    s.push([
      { text: truncateToWidth(`${w}\u2026 ${C} more ${pluralize(C, "line")}`, h), dimColor: !0 },
    ]);
  return C;
}
var yn = {
  queued: "Queued",
  running: "Running",
  done: "Completed",
  failed: "Failed",
  skipped: "Skipped",
  blocked: "Blocked",
  interrupted: "Stopped",
};
function Ea({
  agent: s,
  status: a,
  transcript: l,
  expanded: c,
  width: m,
  nowMs: w,
}) {
  let h = [],
    v = "  ",
    C = Math.max(8, m - 2),
    { glyph: W, color: k } = xo(a),
    S = [];
  if (s.model != null) S.push(formatModelLabel(s.model, s.fallbackModel));
  if (s.agentType != null) S.push(s.agentType);
  if (s.isolation != null)
    S.push(
      s.isolation === "remote" && s.remoteSessionId
        ? `remote ${s.remoteSessionId}`
        : s.isolation,
    );
  if (s.cached) S.push("from resume journal");
  if (s.attempt != null && s.attempt > 1) {
    let Q =
      s.lastAttemptReason === "throttled"
        ? "throttled"
        : s.lastAttemptReason === "user-retry"
          ? "user retry"
          : "stalled";
    S.push(`attempt ${s.attempt} (${Q})`);
  }
  let I = getStringWidth(W) + 1 + getStringWidth(yn[a]),
    T = S.length > 0 ? truncateToWidth(` \xB7 ${S.join(" \xB7 ")}`, Math.max(0, m - I)) : "";
  h.push([
    { text: W, color: k },
    { text: " " },
    { text: yn[a], color: k, bold: !0 },
    ...(T ? [{ text: T, dimColor: !0 }] : []),
  ]);
  let j = [];
  if (s.tokens != null) j.push(`${formatTokens(s.tokens)} tok`);
  if (s.toolCalls != null && s.toolCalls > 0)
    j.push(`${s.toolCalls} ${pluralize(s.toolCalls, "tool call")}`);
  if (s.durationMs != null) j.push(formatDuration(s.durationMs));
  if (a === "queued" && s.queuedAt != null)
    j.push(`waiting ${formatDuration(Math.max(0, w - s.queuedAt))}`);
  if (a === "running" && s.lastProgressAt != null) {
    let Q = Math.floor((w - s.lastProgressAt) / 1000);
    if (Q >= 30) j.push(`idle ${formatDuration(Q * 1000)}`);
  }
  if (j.length > 0) h.push([{ text: truncateToWidth(j.join(" \xB7 "), m), dimColor: !0 }]);
  h.push([{ text: "" }]);
  let q = l !== "loading" && l?.prompt ? l.prompt : (s.promptPreview ?? ""),
    P = q
      ? Ps(q, C).map((Q) => [{ text: "  " + Q, dimColor: !0 }])
      : [
          [
            {
              text:
                "  " +
                (a === "queued"
                  ? "Available once the agent starts."
                  : l === "loading"
                    ? "Loading\u2026"
                    : a === "running"
                      ? "Not available yet (agent still running)."
                      : "Transcript not available."),
              dimColor: !0,
            },
          ],
        ],
    J = La({
      lines: h,
      title: "Prompt",
      body: P,
      collapsedLines: Bc,
      expanded: c,
      indent: "  ",
      width: m,
    }),
    Z = J > 0 ? J - 1 : 0,
    ft = h.length - (c ? Z : 0);
  if ((h.push([{ text: "" }]), a !== "queued")) {
    let Q = l !== "loading" && l ? l.toolCalls : [];
    if (
      (h.push([
        { text: "Activity", bold: !0, dimColor: !0 },
        ...(Q.length > Ts
          ? [
              {
                text: ` \xB7 last ${Ts} of ${Q.length} tool calls`,
                dimColor: !0,
              },
            ]
          : []),
      ]),
      Q.length > 0)
    )
      for (let it of Q.slice(-Ts)) {
        let pt = it.summary ? `(${it.summary})` : "";
        h.push([{ text: truncateToWidth(`  ${it.name}${pt}`, m), dimColor: !0 }]);
      }
    else if (s.lastToolName != null) {
      let it = s.lastToolSummary ? `(${s.lastToolSummary})` : "";
      h.push([{ text: truncateToWidth(`  ${s.lastToolName}${it}`, m), dimColor: !0 }]);
    } else
      h.push([
        {
          text: `  ${a === "running" ? "No tool calls yet." : "No tool calls."}`,
          dimColor: !0,
        },
      ]);
    h.push([{ text: "" }]);
  }
  let U = [];
  switch (a) {
    case "queued":
      U.push([{ text: "  Waiting for an agent slot.", dimColor: !0 }]);
      break;
    case "running":
      U.push([{ text: `${"  "}Still running\u2026`, dimColor: !0 }]);
      break;
    case "interrupted":
      U.push([
        {
          text: "  The workflow stopped before this agent finished.",
          dimColor: !0,
        },
      ]);
      break;
    case "skipped":
      U.push([{ text: "  Skipped by user.", dimColor: !0 }]);
      break;
    case "blocked":
    case "failed": {
      for (let Q of Ps(s.error ?? "failed", C))
        U.push([{ text: "  " + Q, color: "error" }]);
      break;
    }
    case "done": {
      let Q =
        l !== "loading" && l?.finalText ? l.finalText : (s.resultPreview ?? "");
      if (!Q) {
        U.push([
          {
            text: "  " + (l === "loading" ? "Loading\u2026" : "(empty)"),
            dimColor: !0,
          },
        ]);
        break;
      }
      let it = ii(Q, C);
      if (it) for (let pt of it) U.push([{ text: "  " }, ...pt]);
      else for (let pt of Ps(Q, C)) U.push([{ text: "  " + pt }]);
      break;
    }
  }
  let Y = La({
    lines: h,
    title: "Outcome",
    body: U,
    collapsedLines: Yc,
    expanded: c,
    indent: "  ",
    width: m,
  });
  return {
    lines: h,
    expandable: J > 0 || Y > 0,
    promptEndCollapsed: ft,
    promptGrowth: Z,
  };
}
function Ls(Qm) {
  let Fo = _(42),
    {
      phase: Nr,
      clampedAgent: jr,
      agentLabel: Eo,
      detailLines: De,
      cardScroll: ia,
      leftWidth: me,
      rightWidth: We,
      viewport: fe,
      workflowActive: aa,
      filterLabel: _o,
    } = Qm,
    Qt = Nr.agents,
    Ir,
    Lr,
    Er,
    _r,
    Fr,
    qr,
    Jr,
    Kr,
    qo,
    Gr;
  if (
    Fo[0] !== Eo ||
    Fo[1] !== Qt ||
    Fo[2] !== ia ||
    Fo[3] !== jr ||
    Fo[4] !== De ||
    Fo[5] !== _o ||
    Fo[6] !== me ||
    Fo[7] !== Nr.title ||
    Fo[8] !== We ||
    Fo[9] !== fe ||
    Fo[10] !== aa
  ) {
    let la = _t(jr, Qt.length, fe);
    let Om = Math.max(0, De.length - fe);
    let ca = $t(ia, 0, Om);
    let Zl = Math.min(De.length, ca + fe);
    let Xl = [];
    for (let Jo = 0; Jo < fe; Jo++) {
      let ua = la.from + Jo;
      let Um = ua < la.to ? ja(Qt[ua], ua, jr, me, aa) : [];
      let tc = ca + Jo;
      let Zm = tc < Zl ? De[tc] : [];
      Xl.push(
        e(bo, { left: Um, right: Zm, leftWidth: me, rightWidth: We }, Jo),
      );
    }
    Lr = Box;
    Kr = "column";
    const ao = Nr.title;
    let Ko;
    if (Fo[21] !== Qt.length || Fo[22] !== _o)
      ((Ko = He(Qt.length, _o)),
        (Fo[21] = Qt.length),
        (Fo[22] = _o),
        (Fo[23] = Ko));
    else Ko = Fo[23];
    const ma = `${ao} \xB7 ${Ko}`;
    if (Fo[24] !== Eo || Fo[25] !== me || Fo[26] !== We || Fo[27] !== ma)
      ((qo = e(Vt, {
        pos: "top",
        leftWidth: me,
        rightWidth: We,
        leftTitle: ma,
        rightTitle: Eo,
      })),
        (Fo[24] = Eo),
        (Fo[25] = me),
        (Fo[26] = We),
        (Fo[27] = ma),
        (Fo[28] = qo));
    else qo = Fo[28];
    Gr = Xl;
    Ir = Vt;
    Er = "bottom";
    _r = me;
    Fr = We;
    qr = Qt.length > fe ? ht(la, Qt.length) : void 0;
    Jr = De.length > fe ? ht({ from: ca, to: Zl }, De.length) : void 0;
    ((Fo[0] = Eo),
      (Fo[1] = Qt),
      (Fo[2] = ia),
      (Fo[3] = jr),
      (Fo[4] = De),
      (Fo[5] = _o),
      (Fo[6] = me),
      (Fo[7] = Nr.title),
      (Fo[8] = We),
      (Fo[9] = fe),
      (Fo[10] = aa),
      (Fo[11] = Ir),
      (Fo[12] = Lr),
      (Fo[13] = Er),
      (Fo[14] = _r),
      (Fo[15] = Fr),
      (Fo[16] = qr),
      (Fo[17] = Jr),
      (Fo[18] = Kr),
      (Fo[19] = qo),
      (Fo[20] = Gr));
  } else
    ((Ir = Fo[11]),
      (Lr = Fo[12]),
      (Er = Fo[13]),
      (_r = Fo[14]),
      (Fr = Fo[15]),
      (qr = Fo[16]),
      (Jr = Fo[17]),
      (Kr = Fo[18]),
      (qo = Fo[19]),
      (Gr = Fo[20]));
  let ao;
  if (
    Fo[29] !== Ir ||
    Fo[30] !== Er ||
    Fo[31] !== _r ||
    Fo[32] !== Fr ||
    Fo[33] !== qr ||
    Fo[34] !== Jr
  )
    ((ao = e(Ir, {
      pos: Er,
      leftWidth: _r,
      rightWidth: Fr,
      leftTag: qr,
      rightTag: Jr,
    })),
      (Fo[29] = Ir),
      (Fo[30] = Er),
      (Fo[31] = _r),
      (Fo[32] = Fr),
      (Fo[33] = qr),
      (Fo[34] = Jr),
      (Fo[35] = ao));
  else ao = Fo[35];
  let Ko;
  if (
    Fo[36] !== Lr ||
    Fo[37] !== Kr ||
    Fo[38] !== qo ||
    Fo[39] !== Gr ||
    Fo[40] !== ao
  )
    ((Ko = r(Lr, { flexDirection: Kr, children: [qo, Gr, ao] })),
      (Fo[36] = Lr),
      (Fo[37] = Kr),
      (Fo[38] = qo),
      (Fo[39] = Gr),
      (Fo[40] = ao),
      (Fo[41] = Ko));
  else Ko = Fo[41];
  return Ko;
}
function Es(Xm) {
  let gt = _(43),
    {
      agentLabel: Go,
      position: fa,
      detailLines: je,
      cardScroll: pa,
      contentWidth: Tt,
      viewport: lo,
    } = Xm,
    ec;
  if (gt[0] !== Tt) ((ec = HORIZONTAL_LINE_GLYPH.repeat(Tt + 2)), (gt[0] = Tt), (gt[1] = ec));
  else ec = gt[1];
  let pe = ec,
    da = Math.max(0, je.length - lo),
    Ho,
    Ie;
  if (
    gt[2] !== Go ||
    gt[3] !== pe ||
    gt[4] !== pa ||
    gt[5] !== Tt ||
    gt[6] !== je ||
    gt[7] !== da ||
    gt[8] !== fa ||
    gt[9] !== lo
  ) {
    let Hr = $t(pa, 0, da);
    let ga = Math.min(je.length, Hr + lo);
    Ie = [];
    let Vr = ` \xB7 ${fa}`;
    const ge = Math.max(1, Tt - getStringWidth(Vr));
    let Le;
    if (gt[12] !== Go || gt[13] !== ge)
      ((Le = truncateToWidth(Go, ge)), (gt[12] = Go), (gt[13] = ge), (gt[14] = Le));
    else Le = gt[14];
    let zr;
    if (gt[15] !== Le)
      ((zr = { text: Le, color: "permission", bold: !0 }),
        (gt[15] = Le),
        (gt[16] = zr));
    else zr = gt[16];
    let Br;
    if (gt[17] !== Vr)
      ((Br = { text: Vr, dimColor: !0 }), (gt[17] = Vr), (gt[18] = Br));
    else Br = gt[18];
    let Yr;
    if (gt[19] !== zr || gt[20] !== Br)
      ((Yr = [zr, Br]), (gt[19] = zr), (gt[20] = Br), (gt[21] = Yr));
    else Yr = gt[21];
    let oc;
    if (gt[22] !== Tt || gt[23] !== Yr)
      ((oc = e(rt, { contentWidth: Tt, segs: Yr }, "title")),
        (gt[22] = Tt),
        (gt[23] = Yr),
        (gt[24] = oc));
    else oc = gt[24];
    Ie.push(oc);
    for (let Qr = Hr; Qr < ga; Qr++)
      Ie.push(e(rt, { contentWidth: Tt, segs: je[Qr] }, `l-${Qr}`));
    for (let ha = ga - Hr; ha < lo; ha++)
      Ie.push(e(rt, { contentWidth: Tt, segs: [{ text: "" }] }, `pad-${ha}`));
    if (je.length > lo) {
      let Or = ` ${ht({ from: Hr, to: ga }, je.length)} `;
      let xa = Math.max(0, Tt + 2 - getStringWidth(Or));
      let Ee;
      if (gt[25] !== xa) ((Ee = HORIZONTAL_LINE_GLYPH.repeat(xa)), (gt[25] = xa), (gt[26] = Ee));
      else Ee = gt[26];
      let Zr;
      if (gt[27] !== Ee)
        ((Zr = r(Text, { color: "text", children: [" ", ROUNDED_BOX_CORNER_GLYPHS.bottomLeft, Ee] })),
          (gt[27] = Ee),
          (gt[28] = Zr));
      else Zr = gt[28];
      let Xr;
      if (gt[29] !== Or)
        ((Xr = e(Text, { dimColor: !0, children: Or })),
          (gt[29] = Or),
          (gt[30] = Xr));
      else Xr = gt[30];
      let nc;
      if (gt[31] === MEMO_CACHE_SENTINEL)
        ((nc = e(Text, { color: "text", children: ROUNDED_BOX_CORNER_GLYPHS.bottomRight })),
          (gt[31] = nc));
      else nc = gt[31];
      let rc;
      if (gt[32] !== Xr || gt[33] !== Zr)
        ((rc = r(Text, { wrap: "truncate-end", children: [Zr, Xr, nc] })),
          (gt[32] = Xr),
          (gt[33] = Zr),
          (gt[34] = rc));
      else rc = gt[34];
      Ho = rc;
    } else {
      let Ee;
      if (gt[35] !== pe)
        ((Ee = r(Text, {
          color: "text",
          wrap: "truncate-end",
          children: [" ", ROUNDED_BOX_CORNER_GLYPHS.bottomLeft, pe, ROUNDED_BOX_CORNER_GLYPHS.bottomRight],
        })),
          (gt[35] = pe),
          (gt[36] = Ee));
      else Ee = gt[36];
      Ho = Ee;
    }
    ((gt[2] = Go),
      (gt[3] = pe),
      (gt[4] = pa),
      (gt[5] = Tt),
      (gt[6] = je),
      (gt[7] = da),
      (gt[8] = fa),
      (gt[9] = lo),
      (gt[10] = Ho),
      (gt[11] = Ie));
  } else ((Ho = gt[10]), (Ie = gt[11]));
  let ge;
  if (gt[37] !== pe)
    ((ge = r(Text, {
      color: "text",
      wrap: "truncate-end",
      children: [" ", ROUNDED_BOX_CORNER_GLYPHS.topLeft, pe, ROUNDED_BOX_CORNER_GLYPHS.topRight],
    })),
      (gt[37] = pe),
      (gt[38] = ge));
  else ge = gt[38];
  let Le;
  if (gt[39] !== Ho || gt[40] !== Ie || gt[41] !== ge)
    ((Le = r(Box, { flexDirection: "column", children: [ge, Ie, Ho] })),
      (gt[39] = Ho),
      (gt[40] = Ie),
      (gt[41] = ge),
      (gt[42] = Le));
  else Le = gt[42];
  return Le;
}
function WorkflowDetailDialog({
  workflow: s,
  onDone: a,
  onBack: l,
  onKill: c,
  onSkipAgent: m,
  onRetryAgent: w,
  onPause: h,
  onResume: v,
  initialPhaseIndex: C,
  promptVisibleBelow: W = !1,
}) {
  useActiveOverlay("workflow-detail-dialog");
  let { availableRows: k, width: S, rows: I } = useWorkflowDialogLayout(W),
    T = Math.max(12, S - 6),
    j = useWorkflowElapsedMs(s),
    q = V(() => buildWorkflowPhaseGroups(s), [s.workflowProgress, s.phases]),
    P = V(() => countPhaseAgents(q, s.agentCount), [q, s.agentCount]),
    [J, Z] = d(() => (C !== void 0 ? Math.max(0, C) : 0)),
    [ft, U] = d(0),
    [Y, Q] = d(C !== void 0 ? "agents" : "phases"),
    [it, pt] = d(!1),
    [Mt, dt] = d({ scroll: 0, expanded: !1 }),
    { scroll: ne, expanded: ve } = Mt,
    [Ae, wn] = d("all"),
    yo = Math.min(J, Math.max(0, q.length - 1)),
    vt = q[yo],
    re = s.status === "running",
    ut = V(() => {
      if (!vt || Ae === "all" || Y === "phases") return vt;
      return { ...vt, agents: vt.agents.filter((M) => Pt(M, re) === Ae) };
    }, [vt, Ae, Y, re]),
    Ve = ut ? Math.min(ft, Math.max(0, ut.agents.length - 1)) : 0,
    [Fa, _s] = d(!1),
    wo = s.script.length > 0,
    qa = V(() => {
      if (!wo) return "";
      let M = parseWorkflowScript(s.script);
      if (!("error" in M)) return M.meta.name;
      return slugifyWorkflowName(s.summary ?? s.description);
    }, [wo, s.script, s.summary, s.description]),
    Ja = V(() => getWorkflowDescription(s), [s.script, s.description, s.summary]),
    { name: kn, subtext: Cn, stats: Sn } = buildWorkflowHeaderProps(s, Ja, P, j);
  function ko() {
    dt({ scroll: 0, expanded: !1 });
  }
  function Ka(M) {
    (Z((at) => $t($t(at, 0, q.length - 1) + M, 0, q.length - 1)), U(0), ko());
  }
  function Ga(M) {
    if (!ut) return;
    (U((at) =>
      $t($t(at, 0, ut.agents.length - 1) + M, 0, ut.agents.length - 1),
    ),
      ko());
  }
  function Fs(M) {
    dt((at) => ({ ...at, scroll: Math.max(0, at.scroll + M) }));
  }
  function Co(M) {
    if (Y === "phases") {
      Ka(M);
      return;
    }
    Ga(M);
  }
  function qs() {
    if ((pt(!1), Y === "agent")) {
      Q("agents");
      return;
    }
    if (Y === "agents") {
      Q("phases");
      return;
    }
    if (l) l();
    else a();
  }
  function Ha() {
    if (vt && vt.agents.length > 0) (U(0), wn("all"), Q("agents"));
  }
  function Va() {
    if (!O || !vt) return;
    if (Ae !== "all") (wn("all"), U(vt.agents.indexOf(O)));
    if ((ko(), $o === "loading")) pt(!0);
    else Q("agent");
  }
  function za() {
    if (!vt || it) return;
    let M = new Set(vt.agents.map((at) => Pt(at, re)));
    (wn((at) => {
      let bt = Et.indexOf(at);
      for (let Rt = 0; Rt < Et.length; Rt++) {
        bt = (bt + 1) % Et.length;
        let Qe = Et[bt];
        if (Qe === "all" || M.has(Qe)) break;
      }
      return Et[bt];
    }),
      U(0),
      ko());
  }
  let O = Y !== "phases" && ut ? ut.agents[Ve] : void 0,
    ze = O ? Pt(O, re) : void 0,
    Js = !!O && St(O) && !!O.agentId && (!!m || !!c),
    Ks = !!O && St(O) && !!O.agentId && !!w,
    So = S - 9,
    Ba = ut ? Math.max(14, ...ut.agents.map((M) => 4 + getStringWidth(M.label))) : 14,
    Gs = Math.max(12, Math.min(30, Ba, So - 30)),
    $n = So - Gs,
    Mn = Y === "agent" && q.length > 0 && S >= 64 && $n >= 30,
    Hs = Mn ? $n : T,
    $o = Is(s.workflowRunId, O?.agentId, O?.toolCalls),
    Ya = useTimeout(it ? Ia : null);
  if (it) {
    if (!O) pt(!1);
    else if ($o !== "loading" || Ya) (pt(!1), Q("agent"));
  }
  let Vs =
      ze === "queued" || ze === "running"
        ? Math.floor(Date.now() / 1000) * 1000
        : 0,
    Mo = V(
      () =>
        Y === "agent" && O && ze
          ? Ea({
              agent: O,
              status: ze,
              transcript: $o,
              expanded: ve,
              width: Hs,
              nowMs: Vs,
            })
          : {
              lines: [],
              expandable: !1,
              promptEndCollapsed: 0,
              promptGrowth: 0,
            },
      [Y, O, ze, $o, ve, Hs, Vs],
    ),
    vo = Mo.lines;
  function Qa() {
    if (!O || !St(O)) return;
    if (O.agentId && m) m(O.agentId);
    else if (c) c();
  }
  function Oa() {
    if (O && St(O) && O.agentId) w?.(O.agentId);
  }
  useKeybindings(
    { "confirm:previous": () => Co(-1), "confirm:next": () => Co(1) },
    { context: "Confirmation" },
  );
  let vn = s.status === "running" && !!h,
    An = s.status === "paused" && !!s.scriptPath && !!s.workflowRunId && !!v,
    zs = s.status === "running" && !!c && Y === "phases";
  function Ua() {
    if (vn) h?.();
    else if (An) v?.(buildResumePrompt(s));
  }
  let Za = (M) => {
      if (M.ctrl || M.meta) return;
      if (M.key === "j")
        if ((M.preventDefault(), Y === "agent")) Fs(1);
        else Co(1);
      else if (M.key === "k")
        if ((M.preventDefault(), Y === "agent")) Fs(-1);
        else Co(-1);
      else if (M.key === "return" || M.key === "right") {
        if ((M.preventDefault(), Y === "phases")) Ha();
        else if (Y === "agents") Va();
        else if (M.key === "return" && Mo.expandable) {
          let { promptEndCollapsed: at, promptGrowth: bt } = Mo;
          dt(({ scroll: Rt, expanded: Qe }) => ({
            expanded: !Qe,
            scroll: Rt < at ? Rt : Qe ? Math.max(at, Rt - bt) : Rt + bt,
          }));
        }
      } else if (M.key === "left") (M.preventDefault(), qs());
      else if (M.key === "r" && Ks) (M.preventDefault(), Oa());
      else if (M.key === "x" && Js) (M.preventDefault(), Qa());
      else if (M.key === "x" && zs) (M.preventDefault(), c?.());
      else if (M.key === " ") (M.preventDefault(), a());
      else if (M.key === "p" && (vn || An)) (M.preventDefault(), Ua());
      else if (M.key === "f" && Y === "agents") (M.preventDefault(), za());
      else if (M.key === "s" && wo) (M.preventDefault(), _s(!0));
    },
    Ao = q.length > 0;
  if (Fa)
    return e(SaveWorkflowDialog, {
      script: s.script,
      defaultName: qa,
      onDone: (M) => {
        if (M) a(M);
        else _s(!1);
      },
    });
  let Ft = k < 18,
    Bs = k - (Ft ? 8 : 11),
    Ys = Math.max(1, Bs - 3),
    Tn = q.length > Ys,
    Qs = Tn ? Math.max(1, Ys - 1) : q.length,
    Xa = Math.max(1, Bs - Qs - (Tn ? 1 : 0)),
    To = _t(yo, q.length, Qs),
    tl = Math.max(
      14,
      ...q.map((M, at) => {
        let bt =
            M.status === "done"
              ? figures.tick
              : M.status === "failed"
                ? figures.cross
                : String(at + 1),
          Rt = M.totalCount > 0 ? `${M.doneCount}/${M.totalCount}` : "";
        return 2 + getStringWidth(bt) + 1 + getStringWidth(M.title) + (Rt ? 1 + getStringWidth(Rt) : 0);
      }),
    ),
    Os = Math.max(12, Math.min(34, tl, So - 24)),
    Us = So - Os,
    el = Y !== "agent" && Ao && S >= 64 && Us >= 20,
    Dn = Math.max(1, k - (Ft ? 7 : 8)),
    Zs = Math.max(3, k - (Ft ? 8 : 9)),
    Xs = Mn ? Dn : Zs,
    ei = Math.max(0, vo.length - Xs);
  if (ne > ei) dt({ scroll: ei, expanded: ve });
  let Be = Ae !== "all" && Y !== "phases" ? yn[Ae].toLowerCase() : void 0,
    xt = [];
  if (Y === "agent") {
    if ((xt.push(`${UP_ARROW_GLYPH}${DOWN_ARROW_GLYPH} agent`), vo.length > Xs)) xt.push("j/k scroll");
    if (Mo.expandable) xt.push(`${RETURN_KEY_GLYPH} ${ve ? "collapse" : "expand"}`);
  } else if (Ao) xt.push(`${UP_ARROW_GLYPH}${DOWN_ARROW_GLYPH} select`);
  if (Js) xt.push("x stop");
  if (zs) xt.push("x stop workflow");
  if (Ks) xt.push("r restart");
  if (vn) xt.push("p pause");
  else if (An) xt.push("p resume");
  if (Y === "agents" && Ao) xt.push(Be ? `f filter: ${Be}` : "f filter");
  if ((xt.push("esc back"), wo)) xt.push("s save");
  let ol = xt.join(" \xB7 ");
  return e(FocusableBox, {
    onKeyDown: Za,
    children: e(de, {
      title: null,
      hideBorder: !0,
      hideInputGuide: !0,
      onCancel: qs,
      color: "text",
      children: r(Box, {
        flexDirection: "column",
        width: S,
        minHeight: Math.max(Ft ? 8 : 12, Math.min(k - 1, I - 6)),
        maxHeight: Math.max(Ft ? 8 : 11, k - 1),
        overflowY: "hidden",
        children: [
          !Ao
            ? r(N, {
                children: [
                  e(EmptyStateMessage, { children: "No agents yet." }),
                  e(Box, { flexGrow: 1 }),
                ],
              })
            : Y === "agent" && O && ut
              ? r(N, {
                  children: [
                    e(WorkflowHeader, { name: kn, subtext: Cn, stats: Sn, width: S }),
                    !Ft && e(Box, { height: 1 }),
                    Mn
                      ? e(Ls, {
                          phase: ut,
                          clampedAgent: Ve,
                          agentLabel: O.label,
                          detailLines: vo,
                          cardScroll: ne,
                          leftWidth: Gs,
                          rightWidth: $n,
                          viewport: Dn,
                          workflowActive: re,
                          filterLabel: Be,
                        })
                      : e(Es, {
                          agentLabel: O.label,
                          position: `${Ve + 1}/${ut.agents.length}`,
                          detailLines: vo,
                          cardScroll: ne,
                          contentWidth: T,
                          viewport: Zs,
                        }),
                    e(Box, { flexGrow: 1 }),
                  ],
                })
              : el && ut
                ? r(N, {
                    children: [
                      e(WorkflowHeader, { name: kn, subtext: Cn, stats: Sn, width: S }),
                      !Ft && e(Box, { height: 1 }),
                      e(js, {
                        phases: q,
                        selectedPhase: ut,
                        clampedPhase: yo,
                        clampedAgent: Ve,
                        level: Y === "phases" ? "phases" : "agents",
                        leftWidth: Os,
                        rightWidth: Us,
                        viewport: Dn,
                        workflowActive: re,
                        filterLabel: Be,
                      }),
                      e(Box, { flexGrow: 1 }),
                    ],
                  })
                : r(N, {
                    children: [
                      e(WorkflowHeader, { name: kn, subtext: Cn, stats: Sn, width: S }),
                      !Ft && e(Box, { height: 1 }),
                      q.slice(To.from, To.to).map((M, at) => {
                        let bt = To.from + at;
                        return e(
                          WorkflowPhaseRow,
                          {
                            index: bt + 1,
                            title: M.title,
                            done: M.doneCount,
                            total: M.totalCount,
                            status: M.status,
                            selected: bt === yo,
                          },
                          `${bt}-${M.title}`,
                        );
                      }),
                      Tn && e(Ws, { win: To, total: q.length }),
                      e(Box, { flexGrow: 1 }),
                      ut
                        ? e(Ns, {
                            phase: ut,
                            selectedAgent: Ve,
                            level: Y === "phases" ? "phases" : "agents",
                            contentWidth: T,
                            viewport: Xa,
                            tight: Ft,
                            workflowActive: re,
                            filterLabel: Be,
                          })
                        : null,
                    ],
                  }),
          r(Text, {
            dimColor: !0,
            italic: !0,
            wrap: "truncate-end",
            children: [" ", ol],
          }),
        ],
      }),
    }),
  });
}
export { SaveWorkflowDialog, WorkflowDetailDialog };

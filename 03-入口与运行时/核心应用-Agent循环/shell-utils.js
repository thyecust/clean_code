import { see, resolveCappedConfigInteger } from "./standalone-tools.js";
import { parseConfigInteger } from "../../01-核心基础设施/设置-配置/chunk-5ndhfaq9.js";
import { getToolPermissionContext } from "../../02-功能模块/权限系统/chunk-fjrcf22x.js";
import { BASH_COMMAND_CLAMP_CRASH_REASON } from "../../02-功能模块/权限系统/chunk-e4pfvp7x.js";
import {
  getBashParserModule,
  findCommandNode,
  extractCommandArguments,
  CONTROL_CHARACTER_REGEX,
  LONE_SURROGATE_REGEX,
  ESCAPED_WHITESPACE_REGEX,
  ZSH_DYNAMIC_DIR_REGEX,
  ZSH_EQUALS_EXPANSION_REGEX,
  ZSH_NUMERIC_RANGE_GLOB_REGEX,
  UNESCAPED_BACKTICK_OR_DOLLAR_REGEX,
  UNESCAPED_QUOTE_REGEX,
} from "../../02-功能模块/记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import { escapeRegExp, repeatString } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { getSettingsForSource, getSettings_DEPRECATED, getInitialSettings } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";

var WZt = new Set([
  "<",
  ">",
  ">>",
  "<<",
  "<<-",
  "<<<",
  "<&",
  ">&",
  "&>",
  "&>>",
  ">|",
  ">&-",
  "<&-",
  "file_descriptor",
  "heredoc_start",
  "heredoc_body",
  "heredoc_content",
  "heredoc_end",
]);

var M9e = new Set(["program", "list", "pipeline"]),
  HZt = new Set([
    "&&",
    "||",
    "|",
    ";",
    "&",
    "|&",
    `
`,
  ]),
  Ox = 1e4,
  VXr = 65536;

function parseShellCommandRedirections(e) {
  let t = {
    commandWithoutRedirections: e,
    redirections: [],
    hasDangerousRedirection: !1,
    dangerousRedirectionReason: void 0,
  };
  if (!e || e.length > Ox) return t;
  let r = getBashParserModule().parse(e);
  if (!r) return t;
  let o = [],
    d = !1,
    p,
    _ = (I) => {
      if (I.type === "file_redirect") {
        let D = null,
          N = !1,
          F = null,
          U = 0;
        for (let ue of I.children)
          if (ue.type === ">" || ue.type === "&>" || ue.type === ">|") D = ">";
          else if (ue.type === ">>" || ue.type === "&>>" || ue.type === ">>|")
            D = ">>";
          else if (ue.type === ">&") ((D = ">"), (N = !0));
          else if (ue.type === "<&") {
            let de = I.children.filter(
              (_e) => _e !== ue && _e.type !== "file_descriptor",
            );
            if (de.length > 1 || de.some((_e) => qse(_e).startsWith("-"))) {
              if (((d = !0), p !== "network_device")) p = "shell_expansion";
            }
            return;
          } else if (ue.type === ">&-" || ue.type === "<&-") {
            if (
              I.children.filter(
                (_e) => _e !== ue && _e.type !== "file_descriptor",
              ).length > 0
            ) {
              if (((d = !0), p !== "network_device")) p = "shell_expansion";
            }
            return;
          } else if (ue.type === "<") {
            let de = I.children.filter(
              (Se) => Se !== ue && Se.type !== "file_descriptor",
            );
            if (de.length > 1) {
              if (((d = !0), p !== "network_device")) p = "shell_expansion";
              return;
            }
            let _e = de[0];
            if (_e) {
              let Se = qse(_e);
              if (/^\/dev\/(tcp|udp)\//.test(Se))
                ((d = !0), (p = "network_device"));
            }
            return;
          } else if (ue.type !== "file_descriptor") ((F = ue), U++);
        if (!D || !F) return;
        if (U > 1) {
          if (((d = !0), p !== "network_device")) p = "shell_expansion";
          return;
        }
        if (N && qse(F).startsWith("-")) {
          if (((d = !0), p !== "network_device")) p = "shell_expansion";
          return;
        }
        if (F.type === "number" && F.children.length === 0 && N) return;
        if (!(
          (F.type === "word" && F.children.length === 0) ||
          (F.type === "number" && F.children.length === 0) ||
          F.type === "raw_string" ||
          (F.type === "string" &&
            !F.children.some(
              (ue) => ue.type !== "string_content" && ue.type !== '"',
            ))
        )) {
          if (((d = !0), p !== "network_device")) p = "shell_expansion";
          return;
        }
        let re = qse(F);
        if (/^~|[*?[]/.test(re)) {
          if (((d = !0), p !== "network_device")) p = "shell_expansion";
          return;
        }
        if (re.startsWith("!") || re.startsWith("=")) {
          if (((d = !0), p !== "network_device")) p = "shell_expansion";
          return;
        }
        if (N && !/^[A-Za-z0-9./_-]+$/.test(re)) {
          if (((d = !0), p !== "network_device")) p = "shell_expansion";
          return;
        }
        if (/^\/dev\/(tcp|udp)\//.test(re)) {
          ((d = !0), (p = "network_device"));
          return;
        }
        o.push({ target: re, operator: D });
        return;
      }
      for (let D of I.children) _(D);
    };
  _(r);
  let E = [],
    C = (I) => {
      if (I.type === "comment") return;
      if (I.type === "redirected_statement") {
        for (let D of I.children) if (!D.type.endsWith("_redirect")) C(D);
        return;
      }
      if (M9e.has(I.type)) {
        for (let D of I.children) C(D);
        return;
      }
      E.push(I.text);
    };
  return (
    C(
      r.type === "ERROR" && r.children[0]?.type === "program"
        ? r.children[0]
        : r,
    ),
    {
      commandWithoutRedirections: E.length > 0 ? E.join(" ") : e,
      redirections: o,
      hasDangerousRedirection: d,
      dangerousRedirectionReason: p,
    }
  );
}

function extractCommandSegments(e) {
  if (!e) return [];
  if (e.length > Ox) return [e];
  let t = getBashParserModule().parse(e);
  if (!t) return [e];
  let r = [],
    o = (d) => {
      if (HZt.has(d.type) || d.type === "comment") return;
      if (d.type === "redirected_statement") {
        for (let p of d.children) if (!p.type.endsWith("_redirect")) o(p);
        return;
      }
      if (M9e.has(d.type)) {
        for (let p of d.children) o(p);
        return;
      }
      r.push(d.text);
    };
  return (
    o(
      t.type === "ERROR" && t.children[0]?.type === "program"
        ? t.children[0]
        : t,
    ),
    r
  );
}

function extractCommandSegmentsStrict(e) {
  if (!e || e.length > Ox) return null;
  let t = getBashParserModule().parse(e);
  if (!t) return null;
  let r = [],
    o = !0,
    d = (p) => {
      if (!o) return;
      if (HZt.has(p.type) || p.type === "comment") return;
      if (p.type === "redirected_statement") {
        for (let _ of p.children) if (!_.type.endsWith("_redirect")) d(_);
        return;
      }
      if (M9e.has(p.type)) {
        for (let _ of p.children) d(_);
        return;
      }
      if (p.type === "negated_command") {
        for (let _ of p.children) if (_.type !== "!") d(_);
        return;
      }
      if (p.type === "command" || p.type === "variable_assignment") {
        r.push(p.text);
        return;
      }
      o = !1;
    };
  return (d(t), o ? r : null);
}

function qse(e) {
  switch (e.type) {
    case "raw_string":
      return e.text.slice(1, -1);
    case "string":
      return e.text.slice(1, -1).replace(/\\([$`"\\\n])/g, (t, r) =>
        r ===
        `
`
          ? ""
          : r,
      );
    case "word":
      return e.text.replace(/\\([\s\S])/g, (t, r) =>
        r ===
        `
`
          ? ""
          : r,
      );
    default:
      return e.text;
  }
}

function hasSuspiciousRedirection(e) {
  if (e.type.endsWith("_redirect")) {
    let t = e.children.filter((p) => !WZt.has(p.type)),
      r = e.children.some((p) => p.type === ">&-" || p.type === "<&-"),
      o =
        !r &&
        e.children.some((p) => p.type === ">&" || p.type === "<&") &&
        t.some((p) => qse(p).startsWith("-")),
      d = e.type === "heredoc_redirect" || r || o ? 0 : 1;
    if (t.length > d) return !0;
  }
  return e.children.some(hasSuspiciousRedirection);
}

// ---- shell 命令 AST 分析（自 execution-core.js 迁入）----

function Vse(e) {
  return (
    CONTROL_CHARACTER_REGEX.test(e) ||
    LONE_SURROGATE_REGEX.test(e) ||
    ESCAPED_WHITESPACE_REGEX.test(e) ||
    ZSH_DYNAMIC_DIR_REGEX.test(e) ||
    ZSH_EQUALS_EXPANSION_REGEX.test(e) ||
    ZSH_NUMERIC_RANGE_GLOB_REGEX.test(e)
  );
}

function Kse(e) {
  return e.type === "ERROR" || e.children.some(Kse);
}

var KXr = 16;

function jZt(e) {
  if (!e || e.length > Ox) return [];
  let t = getBashParserModule().parse(e);
  return t ? O9e(t) : [];
}

function O9e(e) {
  let t = [],
    r = VXr,
    o = KXr,
    d = !1,
    p = (_) => {
      if (d) return;
      if (_.type === "command") (t.push(_.text), (r -= _.text.length));
      let E = D9e(_);
      if (E !== null) ((o -= 1), (r -= E.length));
      if (r < 0 || o < 0) {
        d = !0;
        return;
      }
      if (E !== null) {
        let C = getBashParserModule()?.parse(E);
        if (C) p(C);
        return;
      }
      for (let C of _.children) p(C);
    };
  return (p(e), d ? [] : t);
}

function D9e(e) {
  if (e.type !== "expansion" && e.type !== "ERROR") return null;
  let t = e.text;
  if (!/^\$\{[ \t\n|]/.test(t)) return null;
  let r = t.endsWith("}") ? t.length - 1 : t.length;
  return t.slice(2, r).trim().replace(/^\|/, "").replace(/;$/, "").trim();
}

function vy(e) {
  if (!e || e.length > Ox) return [];
  let t = getBashParserModule().parse(e);
  if (!t) return [];
  let r = findCommandNode(t, null);
  if (!r) return [];
  return extractCommandArguments(r);
}

var I9e = new Set([
  "command_substitution",
  "process_substitution",
  "expansion",
  "simple_expansion",
  "arithmetic_expansion",
]);

function N9e(e) {
  if (I9e.has(e.type)) return !0;
  return e.children.some(N9e);
}

var YXr = new Set(["ansi_c_string", "translated_string"]);

function L9e(e) {
  if (YXr.has(e.type)) return !0;
  return e.children.some(L9e);
}

function $9e(e) {
  if (e.type === "heredoc_redirect") {
    let r = e.children.find((d) => d.type === "heredoc_start")?.text ?? "";
    if (
      !(
        r.length >= 2 &&
        ((r.startsWith("'") && r.endsWith("'")) ||
          (r.startsWith('"') && r.endsWith('"')))
      ) ||
      r.includes("\\")
    )
      return !0;
  }
  return e.children.some($9e);
}

function GZt(e, t) {
  if (!e) return !1;
  if (e.length > Ox || Vse(e)) return !0;
  let r = getBashParserModule().parse(e);
  if (!r || Kse(r)) return !0;
  let o = (_) =>
      hasSuspiciousRedirection(_) ||
      $9e(_) ||
      N9e(_) ||
      L9e(_) ||
      (_.type !== "heredoc_redirect" && zZt(_.text)) ||
      (_.type !== "heredoc_redirect" &&
        !_.children.every(
          (E) => WZt.has(E.type) || B9e(E, /\s/.test(E.text)),
        )) ||
      (_.type !== "heredoc_redirect" &&
        _.children.some((E) => E.type === "word" && E.text.startsWith("="))),
    d = (_) => {
      if (I9e.has(_.type)) return;
      if (_.type === "command") return _;
      let E;
      for (let C of _.children) {
        if (C.type.endsWith("_redirect")) continue;
        let I = d(C);
        if (I) E = I;
      }
      return E;
    },
    p = (_) => {
      if (I9e.has(_.type)) return !1;
      if (_.type === "redirected_statement") {
        let E = _.children.find((I) => I.type === "command") ?? d(_),
          C = E ? t(E.text) : !0;
        for (let I of _.children)
          if (I.type.endsWith("_redirect")) {
            if (C && o(I)) return !0;
          } else if (p(I)) return !0;
        return !1;
      }
      if (_.type === "command") {
        let E = t(_.text);
        for (let C of _.children)
          if (C.type.endsWith("_redirect")) {
            if (E && o(C)) return !0;
          } else if (p(C)) return !0;
        return !1;
      }
      if (_.type.endsWith("_redirect")) return o(_);
      return _.children.some(p);
    };
  return p(r);
}

var XXr = new Set(["word", "string", "raw_string", "number"]),
  QXr = /(?:^|[^\\])(?:\\\\)*[;|&<>]/,
  JXr = /(?:^|[^\\])(?:\\\\)*\\$/;

function B9e(e, t = !1) {
  if (e.type === "concatenation") return e.children.every((r) => B9e(r, t));
  if (e.type === "word") {
    if (UNESCAPED_BACKTICK_OR_DOLLAR_REGEX.test(e.text)) return !1;
    if (QXr.test(e.text) || JXr.test(e.text)) return !1;
    if (t && UNESCAPED_QUOTE_REGEX.test(e.text)) return !1;
    return !0;
  }
  if (e.type === "string" || e.type === "raw_string") {
    let r = e.type === "raw_string" ? "'" : '"';
    return e.text.length >= 2 && e.text.startsWith(r) && e.text.endsWith(r);
  }
  return XXr.has(e.type);
}

function zZt(e) {
  let t = null,
    r = !1,
    o = !1;
  for (let d = 0; d < e.length; d++) {
    let p = e[d];
    if (t === "'") {
      if (p === "'") t = null;
      continue;
    }
    if (t === '"') {
      if (p === "\\" && d + 1 < e.length && '$`"\\'.includes(e[d + 1])) {
        d++;
        continue;
      }
      if (p === "`") return !0;
      if (p === "$" && /[A-Za-z0-9_{(@*#?$!-]/.test(e[d + 1] ?? "")) return !0;
      if (p === '"') t = null;
      continue;
    }
    if (p === "\\") {
      d++;
      continue;
    }
    if (p === "`") return !0;
    if (p === "$" && (e[d + 1] === "'" || e[d + 1] === '"')) return !0;
    if (p === "$" && /[A-Za-z0-9_{(@*#?$!-]/.test(e[d + 1] ?? "")) return !0;
    if (p === "=" && e[d + 1] === "(") return !0;
    if (p === "*" || p === "?" || p === "[") return !0;
    if (p === "'" || p === '"') {
      t = p;
      continue;
    }
    if (
      p ===
      `
`
    )
      return !1;
    if (p === " " || p === "\t") {
      ((r = !1), (o = !1));
      continue;
    }
    if (p === "{") {
      r = !0;
      continue;
    }
    if (r && (p === "," || (p === "." && e[d + 1] === "."))) {
      o = !0;
      continue;
    }
    if (p === "}" && r && o) return !0;
  }
  return t !== null;
}

function Ive(e) {
  if (!e || e.length > Ox) return !0;
  if (Vse(e)) return !0;
  if (zZt(e)) return !0;
  let t = getBashParserModule().parse(e);
  if (!t || Kse(t)) return !0;
  let r = t.children.filter((d) => d.type !== "comment");
  if (
    r.length !== 1 ||
    (r[0].type !== "command" &&
      !(
        r[0].type === "redirected_statement" &&
        r[0].children.some((d) => d.type === "command")
      ))
  )
    return !0;
  if (N9e(t) || L9e(t) || hasSuspiciousRedirection(t) || $9e(t)) return !0;
  let o = findCommandNode(t, null);
  if (!o) return !0;
  for (let d of o.children) {
    if (d.type === "command_name" || d.type === "variable_assignment") continue;
    if (d.type.endsWith("_redirect")) continue;
    if (!B9e(d, /\s/.test(d.text))) return !0;
  }
  return !1;
}

// ---- 命令标记转义与模板替换（自 execution-core.js 迁入）----

function U9e(e) {
  return e.replace(/`[^`\n]+`/g, (t, r) => {
    let o = e[r - 1];
    return o === "!" || o === "`"
      ? t
      : "`" + repeatString(" ", t.length - 2) + "`";
  });
}

function escapeShellCommandMarkers(e) {
  return e
    .replace(/`!/g, "` !")
    .replace(/!`/g, "! `")
    .replace(/(^|\s)!/gm, "$1\\!");
}

var ZXr = /```!\s*\n?([\s\S]*?)\n?```/g,
  e7r = /(?<=^|\s)!`([^`]+)`/gm;

function findSkillShellCommands(e) {
  let t = e.matchAll(ZXr),
    r = e.includes("!`") ? U9e(e).matchAll(e7r) : [],
    o = [];
  for (let d of [...t, ...r]) {
    let p = d[1]?.trim();
    if (p) o.push({ raw: d[0], command: p });
  }
  return o;
}

var p8 = "\uFFFF",
  Xse = "\uFFFE";

function splitCommandArgs(e) {
  if (!e || !e.trim()) return [];
  let t = vy(e);
  return t.length > 0 ? t : e.split(/\s+/).filter(Boolean);
}

function Mve(e) {
  if (!e) return [];
  let t = (r) => typeof r === "string" && r.trim() !== "" && !/^\d+$/.test(r);
  if (Array.isArray(e)) return e.filter(t);
  if (typeof e === "string") return e.split(/\s+/).filter(t);
  return [];
}

function cU(e, t, r = !0, o = [], d) {
  if (t === void 0 || t === null) return e;
  e = e.replaceAll(p8, "\uFFFD").replaceAll(Xse, "\uFFFD");
  let p = (D) => {
      let N = (D ?? "").replaceAll(p8, "\uFFFD").replaceAll(Xse, "\uFFFD");
      return Xse + (d ? d(N) : N).replaceAll("$", p8) + Xse;
    },
    _ = splitCommandArgs(t),
    E = o
      .map((D, N) => ({ name: D, i: N }))
      .filter((D) => Boolean(D.name))
      .sort((D, N) => N.name.length - D.name.length),
    C = [
      "\\d",
      "ARGUMENTS",
      ...E.map(({ name: D }) => `${escapeRegExp(D)}(?![\\[\\w])`),
    ].join("|");
  e = e.replace(new RegExp(`(?<!\\\\)\\\\\\$(?=${C})`, "g"), p8);
  let I = !1;
  for (let { name: D, i: N } of E)
    e = e.replace(
      new RegExp(`\\$${escapeRegExp(D)}(?![\\[\\w])`, "g"),
      () => ((I = !0), p(_[N])),
    );
  if (
    ((e = e.replace(/\$ARGUMENTS\[(\d+)\]/g, (D, N) => {
      let F = parseInt(N, 10);
      if (_[F] === void 0) return p8 + D.slice(1);
      return ((I = !0), p(_[F]));
    })),
    (e = e.replace(/\$(\d+)(?!\w)/g, (D, N) => {
      let F = parseInt(N, 10);
      if (_[F] === void 0) return D;
      return ((I = !0), p(_[F]));
    })),
    (e = e.replaceAll("$ARGUMENTS", () => ((I = !0), p(t)))),
    !I && r && t)
  )
    e =
      e +
      `

ARGUMENTS: ${p(t)}`;
  return e.replaceAll(p8, "$").replaceAll(Xse, "");
}

var s7r = /```!\s*\n?[\s\S]*?\n?```/g,
  i7r = /(?<=^|\s)!`[^`]+`/gm,
  a7r = "[shell command execution disabled by policy]";

function Dve() {
  if (a.CLAUDE_CODE_IS_COWORK) return !0;
  if (getSettingsForSource("policySettings")?.disableSkillShellExecution === !0)
    return !0;
  return getSettings_DEPRECATED().disableSkillShellExecution === !0;
}

function m8(e, t = a7r) {
  let r = e.replace(s7r, t);
  if (r.includes("!`")) {
    let o = U9e(r);
    for (let d of [...o.matchAll(i7r)].reverse())
      r = r.slice(0, d.index) + t + r.slice(d.index + d[0].length);
  }
  return r;
}

// ---- shell 配置 / 任务判定 / 权限规则（自 execution-core.js 迁入）----

var MAX_BASH_OUTPUT_CHARS = 150000,
  DEFAULT_BASH_OUTPUT_CHARS = 30000;

function getBashOutputMaxChars() {
  return (
    see(getInitialSettings().bashOutputMaxChars) ?? DEFAULT_BASH_OUTPUT_CHARS
  );
}

function resolveBashOutputMaxChars() {
  let e = see(getInitialSettings().bashOutputMaxChars);
  if (e !== void 0) return e;
  return resolveCappedConfigInteger(
    "BASH_MAX_OUTPUT_LENGTH",
    process.env.BASH_MAX_OUTPUT_LENGTH,
    DEFAULT_BASH_OUTPUT_CHARS,
    MAX_BASH_OUTPUT_CHARS,
  ).effective;
}

var jlo = 120000,
  Wlo = 600000;

function getBashDefaultTimeoutMs(e = process.env) {
  let t = e.BASH_DEFAULT_TIMEOUT_MS;
  if (t) {
    let r = parseConfigInteger(t);
    if (!isNaN(r) && r > 0) return r;
  }
  return jlo;
}

function getBashMaxTimeoutMs(e = process.env) {
  let t = e.BASH_MAX_TIMEOUT_MS;
  if (t) {
    let r = parseConfigInteger(t);
    if (!isNaN(r) && r > 0) return Math.max(r, getBashDefaultTimeoutMs(e));
  }
  return Math.max(Wlo, getBashDefaultTimeoutMs(e));
}

var Glo = 2000;

function capTimeoutForAutoBackground({
  requestedTimeoutMs: e,
  isMainAgent: t,
  canAutoBackground: r,
  env: o = process.env,
}) {
  if (!t || !r) return e;
  let d = o.CLAUDE_CODE_AUTO_BACKGROUND_TIMEOUT_MS;
  if (!d) return e;
  let p = parseConfigInteger(d);
  if (isNaN(p) || p <= 0) return e;
  return Math.min(e, Math.max(p, Glo));
}

function isLocalBashTask(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "type" in e &&
    e.type === "local_bash"
  );
}

function getBashCommandClampCrashDeny(e, t) {
  let r = getToolPermissionContext(t).bashCommandClamps;
  if (r !== void 0 && r.length > 0)
    return {
      behavior: "deny",
      message: `The ${e} permission check crashed and this agent carries a per-spawn bashCommandClamp; denying rather than running an unverified command.`,
      decisionReason: {
        type: "other",
        reason: BASH_COMMAND_CLAMP_CRASH_REASON,
      },
    };
  return;
}

function getShellResultStatus(e) {
  if (e.interrupted) return "stopped";
  return e.code === 0 ? "completed" : "failed";
}

function Fpt(e) {
  if (e.interrupted) return "killed";
  return e.code === 0 ? "completed" : "failed";
}

function toShellPermissionRules(e) {
  return e.flatMap((t) => [`Bash(${t})`, `PowerShell(${t})`]);
}

function stripUnsupportedPowerShellRules(e) {
  return e.filter((t) => t !== "PowerShell(git checkout -b *)");
}

export {
  parseShellCommandRedirections,
  extractCommandSegments,
  extractCommandSegmentsStrict,
  hasSuspiciousRedirection,
  vy,
  escapeShellCommandMarkers,
  Ox,
  cU,
  m8,
  Ive,
  Vse,
  findSkillShellCommands,
  Mve,
  Dve,
  Kse,
  jZt,
  O9e,
  D9e,
  GZt,
  splitCommandArgs,
  MAX_BASH_OUTPUT_CHARS,
  DEFAULT_BASH_OUTPUT_CHARS,
  getBashOutputMaxChars,
  resolveBashOutputMaxChars,
  jlo,
  Wlo,
  getBashDefaultTimeoutMs,
  getBashMaxTimeoutMs,
  Glo,
  capTimeoutForAutoBackground,
  isLocalBashTask,
  getShellResultStatus,
  Fpt,
  getBashCommandClampCrashDeny,
  toShellPermissionRules,
  stripUnsupportedPowerShellRules,
};

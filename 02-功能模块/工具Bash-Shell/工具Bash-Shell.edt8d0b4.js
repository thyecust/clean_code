// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 180 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { unwrapAbortReason, isUserInitiatedAbortReason } from "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import { he } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { An, Fx } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { dur } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { Ve, yt, G0, R, dt, ge, l, Ub, Po } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Ro, D0, Tr, ae, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { TruncatingOutputBuffer } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { pi, Ad, DCt, Bt, tt, Mn, co, ro, Ut, H } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getCwd } from "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import { yS, hL, _L, isCurrentDirectoryBareGitRepo } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { truncate } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { nL, Iq } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { INLINE_CODE_FLAGS, isOutsideReadsBlockedAsk, outsideReadsRuntimePathAsk, outsideReadsTooComplexAsk, BASH_COMMAND_CLAMP_DENY_REASON, BASH_COMMAND_CLAMP_CRASH_REASON } from "../权限系统/chunk-e4pfvp7x.js";
import { hge, Iw } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { getHostCapabilityState, areBackgroundTasksDisabled } from "../../01-核心基础设施/共享小工具-未细化/host-capability-state.js";
import {
  Q_,
  rme,
  ah,
  XCe,
  Qj,
  uEt,
  dEt,
  normalizeCaseForComparison,
  allWorkingDirectories,
  matchingRuleForInput,
} from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { Ys, jE } from "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { rU } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { getToolPermissionContext } from "../权限系统/chunk-fjrcf22x.js";
import { buildTool } from "../权限系统/chunk-qdy0h5k2.js";
import {
  Uft,
  LGn,
  Bft,
  oUt,
  Ewe,
  yI,
  Uv,
  Vft,
  Gun,
  uUt,
  kwe,
  G9,
  qun,
  hk,
  UGn,
  zun,
  wO,
  Q7,
  Vun,
  Kft,
  zOe,
  Xft,
  PF,
  Fwe,
  x4e,
  kUt,
  xUt,
  HUt,
  _k,
  $mt,
  Jte,
  SandboxPolicyRefusalError,
  SandboxManager,
  dT,
  IDe,
  Gmt,
  fzn,
  jS,
  tTe,
  createPermissionRequestMessage,
  carriesAskRuleIntent,
  d2t,
  p2t,
  f2t,
  wVe,
  m2t,
  sde,
  DM,
  vV,
  L2t,
  M2t,
  Ugt,
  N2t,
  F2t,
  $2t,
  U2t,
  B2t,
  Ka,
  Xne,
  U6t,
  B6t,
  I_t,
  j6t,
  W6t,
  ZKe,
  Bde,
  ugn,
  gWt,
  hWt,
  _Wt,
  yWt,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { MAX_PERSISTED_OUTPUT_BYTES, getTaskOutputRootDir, getTaskOutputPath, persistTaskOutputSnapshot } from "../后台任务-Shell管理/chunk-x3txegas.js";
import { ZNe, g7e, Vpe, _7e } from "../工具结果持久化/工具结果持久化.jj43r39n.js";
import {
  Swe,
  RF,
  Fv,
  yM,
  S2,
  tw,
  Ycn,
  Jcn,
  mGn,
  x$t,
  gk,
  H$t,
  I$t,
  Ef,
  xft,
  OOe,
  Qcn,
  Zcn,
  gGn,
  P$t,
  DOe,
  LOe,
  bwe,
  eun,
  tun,
  nun,
} from "./chunk-8sjdj5bm.js";
import { buildBooleanFromStringSchema } from "../../01-核心基础设施/共享小工具-未细化/boolean-from-string-schema.js";
import { isMonitorToolEnabled } from "../工具Monitor/monitor-tool-description.js";
import { s, T, O, c, Qe, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { basename as Ds, dirname as $s } from "path";
var nn = (e, t, o) => ({
    isError: e !== 0,
    message: e !== 0 ? `Command failed with exit code ${e}` : void 0,
  }),
  Ne = (e) => (t, o, r) => ({
    isError: t !== 0 && t !== 1,
    message: t === 1 ? e : void 0,
  }),
  Oe = Ne("No matches found"),
  sn = Ne("Files differ"),
  on = new Map([
    ["grep", Oe],
    ["rg", Oe],
    ["egrep", Oe],
    ["fgrep", Oe],
    ["findstr", Oe],
    [
      "robocopy",
      (e, t, o) => ({
        isError: e < 0 || e >= 8,
        message:
          e === 0
            ? "No files copied (already in sync)"
            : e >= 1 && e < 8
              ? e & 1
                ? "Files copied successfully"
                : "Robocopy completed (no errors)"
              : void 0,
      }),
    ],
  ]),
  rn = new Map([
    ["where", Ne("No matching files found")],
    ["fc", Ne("Files differ")],
    ["diff", Ne("Files differ")],
  ]);
function Xe(e) {
  let t = e.trim().replace(/^[&.]\s+/, ""),
    o = /^"([^"]*)"|^'([^']*)'/.exec(t),
    r =
      o?.[1] ?? o?.[2] ?? (t.split(/\s+/)[0] || "").replace(/^["']|["']$/g, ""),
    d = (r.split(/[\\/]/).pop() || r).toLowerCase(),
    f = ["exe", "cmd", "bat"].find((b) => d.endsWith("." + b)) ?? null;
  return {
    base: f ? d.slice(0, -(f.length + 1)) : d,
    hadNativeExt: f !== null,
    nativeExt: f,
  };
}
function an(e) {
  let t = [],
    o = 0,
    r = !1,
    a = !1;
  for (let d = 0; d < e.length; d++) {
    let f = e[d];
    if (r) {
      if (f === "'") r = !1;
      continue;
    }
    if (a) {
      if (f === "`") d++;
      else if (f === '"') a = !1;
      continue;
    }
    if (
      f === "#" &&
      (d === 0 ||
        e[d - 1] === " " ||
        e[d - 1] === "\t" ||
        e[d - 1] ===
          `
` ||
        e[d - 1] === "\r")
    ) {
      t.push(e.slice(o, d));
      while (
        d + 1 < e.length &&
        e[d + 1] !==
          `
` &&
        e[d + 1] !== "\r"
      )
        d++;
      o = d + 1;
      continue;
    }
    if (f === "'") {
      r = !0;
      continue;
    }
    if (f === '"') {
      a = !0;
      continue;
    }
    if (
      f === ";" ||
      f === "|" ||
      f ===
        `
` ||
      f === "\r"
    ) {
      (t.push(e.slice(o, d)), (o = d + 1));
      continue;
    }
    if (f === "&") {
      if (e[d + 1] === "&") {
        (t.push(e.slice(o, d)), d++, (o = d + 1));
        continue;
      }
      let b = e[d - 1];
      if ((b === " " || b === "\t") && e.slice(o, d).trim() !== "")
        (t.push(e.slice(o, d)), (o = d + 1));
    }
  }
  return (t.push(e.slice(o)), t.findLast((d) => d.trim()) || e);
}
function ln(e) {
  let t = e.trim().replace(/^[&.]\s+/, ""),
    r = /^"[^"]*"|^'[^']*'/.exec(t)?.[0] ?? t.split(/\s+/)[0] ?? "";
  if (Xe(r).base !== "git") return;
  t = t.slice(r.length);
  let a = ["git", ...t.trim().split(/\s+/).filter(Boolean)];
  for (let d = 1; d < a.length; d++) {
    let f = a[d];
    if (f.startsWith("-")) {
      if (f === "-C" || f === "-c") d++;
      continue;
    }
    return f;
  }
  return;
}
var cn = [
    ...yWt,
    "Invoke-WebRequest",
    "winget",
    "choco",
    "az",
    "powershell",
    "cmd",
    "reg",
    "sc",
    "net",
    "where",
    "tasklist",
    "taskkill",
    "robocopy",
    "xcopy",
    "icacls",
    "certutil",
    "schtasks",
  ],
  un = [
    "get",
    "set",
    "new",
    "remove",
    "test",
    "start",
    "stop",
    "restart",
    "invoke",
    "add",
    "copy",
    "move",
    "select",
    "where",
    "foreach",
    "write",
    "out",
    "import",
    "export",
    "convertto",
    "convertfrom",
  ];
var dn = new Map(cn.map((e) => [e.toLowerCase(), e])),
  mn = new Map(un.map((e) => [e, `cmdlet_${e}`])),
  pn = new Set([
    "set-location",
    "push-location",
    "pop-location",
    "write-output",
    "write-host",
  ]);
function Ie(e) {
  let t = e.split(/[\r\n;|&]/).map((a) => {
    let d = a.replace(/^\s*\$[\w:.{}]+\s*\+?=\s*/, "");
    if (d !== a && /^['"]/.test(d.trimStart())) return "";
    let { base: f, hadNativeExt: b } = Xe(d);
    if (b) return f;
    return G9[f]?.toLowerCase() ?? f;
  });
  for (let a of t) {
    let d = dn.get(a);
    if (d) return d;
  }
  let o,
    r = !0;
  for (let a of t) {
    if (!a.trim()) continue;
    let d = /^([a-z]+)-\w+$/.exec(a)?.[1],
      f = d && mn.get(d);
    if (f && pn.has(a)) {
      o ??= f;
      continue;
    }
    if (((r = !1), f)) return f;
  }
  return (r ? o : void 0) ?? "other";
}
var ft = /token '(&&|\|\||\?\?)' is not a valid|InvalidEndOfLine/i,
  hn = [
    ["ps5_chain_op", ft],
    [
      "parser_error",
      /ParserError:|ParseException|TerminatorExpectedAtEndOfString|FullyQualifiedErrorId\s*:\s*(RedirectionNotSupported|AmpersandNotAllowed|MissingTypename|MissingEndCurlyBrace|MissingEndParenthesis|ExpectedValueExpression|MissingExpression|UnexpectedToken)/,
    ],
    ["ps_pipeline_error", /Cannot run a document in the middle of a pipeline/],
    [
      "not_recognized",
      /is not recognized as (a name of a cmdlet|the name of a cmdlet|an? internal)/i,
    ],
    ["command_not_found", /CommandNotFoundException/],
    [
      "path_not_found",
      /ItemNotFoundException|PathNotFound,Microsoft\.PowerShell|Cannot find path '[^']+' because it does not exist/,
    ],
    [
      "access_denied",
      /UnauthorizedAccessException|PermissionDenied,Microsoft\.PowerShell|Access to the path '[^']+' is denied|(^|: )Access is denied\.\r?$/m,
    ],
    [
      "parameter_binding",
      /ParameterBindingException|ParameterArgumentValidationError|A parameter cannot be found that matches parameter name|Cannot bind (parameter|argument)/,
    ],
    [
      "object_not_found",
      /ObjectNotFound: \(|DriveNotFoundException|A drive with the name '[^']+' does not exist/,
    ],
    [
      "execution_policy",
      /running scripts is disabled on this system|PSSecurityException/i,
    ],
    [
      "ps_module_load_fail",
      /'[^']+' module could not be loaded|Import-Module ?: The specified module/,
    ],
    ["method_invocation", /MethodInvocationException|MethodException/],
    [
      "cannot_convert",
      /InvalidCastException|ConvertToFinalInvalidCastException/,
    ],
    [
      "null_expression",
      /InvokeMethodOnNull|NullArray|PropertyNotFoundStrict|NullReferenceException/,
    ],
    [
      "variable_undefined",
      /VariableIsUndefined|The variable '\$[^']+' cannot be retrieved because it has not been set/,
    ],
    ["io_exception", /\bIOException\b|FileNotFoundException/],
    [
      "win_file_error",
      /The system cannot find the (file|path) specified|The process cannot access the file/,
    ],
    [
      "win32_error",
      /^(?:\S+ : )?The (parameter is incorrect|directory is not empty|media is write protected|request is not supported)\.\r?$/m,
    ],
    [
      "win_dll_error",
      /OPENSSL_Uplink|procedure entry point .+ could not be located|is not a valid Win32 application|DLL load failed/,
    ],
    [
      "win_store_stub",
      /was not found; run without arguments to install from the Microsoft Store/,
    ],
    [
      "win_cmd_error",
      /The syntax of the command is incorrect|CMD does not support UNC paths as current directories/,
    ],
    ["write_error", /WriteErrorException|^(?:\x1b\[[0-9;]*m)*Write-Error: /m],
    [
      "iwr_basic_parsing",
      /Internet Explorer engine is not available|WebCmdletIEDomNotSupportedException/i,
    ],
    [
      "web_request_error",
      /WebCmdletWebResponseException|The remote server returned an error: \(\d{3}\)|Unable to connect to the remote server|Response status code does not indicate success: \d{3}|No connection could be made because the target machine actively refused/,
    ],
    [
      "runtime_exception",
      /: RuntimeException\b|^(?:\x1b\[[0-9;]*m)*RuntimeException: |ScriptHalted/m,
    ],
    ["native_npm", /^npm (ERR!|error)/m],
    ["native_tsc", /(?:^|\s)error TS\d{4,5}: /m],
    [
      "native_dotnet",
      /: error [A-Z]{2,}\d{4}:|^Build FAILED\.|^(?:\S+ : )?Unhandled exception\. System\.\w/m,
    ],
    ["native_python", /^Traceback \(most recent call last\):/m],
    [
      "native_pip",
      /^ERROR: Could not find a version that satisfies the requirement|^ERROR: No matching distribution found for/m,
    ],
    ["native_curl", /^(?:\S+ : )?curl: \(\d+\) /m],
    ["native_cargo", /^error\[E\d{4}\]|^error: could not compile/m],
    ["native_rust_panic", /^thread '.+' panicked at /m],
    ["native_go", /^# [\w./-]+\r?\n.*\.go:\d+:\d+: |^--- FAIL: |^FAIL\t/m],
    ["native_git", /^(?:\S+ : )?(fatal|error): /m],
    [
      "native_node",
      /^(?:Type|Reference|Syntax|Range)Error[: [\]]|^Error: Cannot find module|^node:internal\/|^E[A-Z]{4,10}: .+, (open|read|write|stat|lstat|scandir|readdir|rename|rmdir|unlink|mkdir|copyfile|realpath|access|chmod|symlink) '/m,
    ],
    [
      "native_docker",
      /^docker: Error|^Error response from daemon:|^(?:ERROR: )?failed to (solve|build|fetch|authorize|dial|do request):/m,
    ],
    ["native_pnpm", /ERR_PNPM_[A-Z_]+|^\u2009ELIFECYCLE\u2009/m],
    [
      "native_yarn",
      /^error Command failed|^(?:\u27A4 )?YN0000: .*Failed with errors|^(?:\u27A4 )?YN0001: /m,
    ],
    [
      "native_test_fail",
      /^FAIL |^ {2}[\u2717\u00D7\u2716] |^\s+\u25CF (?!Console\b)|^FAILED .+::/m,
    ],
    ["native_eslint", /^\s+\d+:\d+\s+error\s+.+\s{2}[@\w/-]+\r?$/m],
    ["ps_clixml", /#< CLIXML/],
    ["native_error_prefix", /^(?:\S+ : )?(?:\x1b\[[0-9;]*m)*Error: /m],
    ["native_command_error", /NativeCommandError|RemoteException/],
  ];
function gt(e, t) {
  if (!e.trim()) return "empty";
  for (let [o, r] of hn) if (r.test(e)) return o;
  if (t === 143 || t === 137) return "exit_killed";
  if (t === 9009 || t === 49) return "exit_9009_not_found";
  return "other";
}
var fn = new Set([
    "head",
    "tail",
    "which",
    "touch",
    "grep",
    "sed",
    "awk",
    "wc",
    "chmod",
    "chown",
    "ln",
    "cut",
    "tr",
    "uniq",
    "xargs",
    "env",
    "seq",
    "realpath",
    "readlink",
    "basename",
    "dirname",
    "printf",
    "source",
    "export",
    "unset",
    "true",
    "false",
    "yes",
    "stat",
    "find",
    "less",
    "sudo",
  ]),
  gn = new Set([
    "git",
    "gh",
    "node",
    "npm",
    "npx",
    "yarn",
    "pnpm",
    "bun",
    "python",
    "python3",
    "pip",
    "pip3",
    "cargo",
    "rustc",
    "go",
    "dotnet",
    "java",
    "javac",
    "mvn",
    "gradle",
    "make",
    "cmake",
    "docker",
    "kubectl",
    "terraform",
    "az",
    "aws",
    "gcloud",
    "curl",
    "wget",
    "jq",
    "code",
  ]);
function wt(e) {
  let t =
    /'([^']+)' is not recognized/i.exec(e) ??
    /CommandNotFoundException.*?\[([^\],]+)/.exec(e);
  if (!t) return null;
  let o = t[1].toLowerCase().replace(/\.exe$/, "");
  if (fn.has(o)) return "bash_builtin";
  if (gn.has(o)) return "dev_tool";
  return "other";
}
var wn = [
  [
    "redirection_reserved",
    /RedirectionNotSupported|The '<{1,2}' operator is reserved for future use/,
  ],
  [
    "ampersand_reserved",
    /AmpersandNotAllowed|The ampersand \(&\) character is not allowed/,
  ],
  ["missing_type_name", /MissingTypename|Missing type name after '\['/],
  ["ps5_chain_op", ft],
  [
    "string_missing_terminator",
    /TerminatorExpectedAtEndOfString|missing the terminator/,
  ],
  [
    "missing_brace_or_paren",
    /MissingEndCurlyBrace|MissingEndParenthesis|Missing closing '[)}]'/,
  ],
  [
    "missing_expression",
    /ExpectedValueExpression|MissingExpression|You must provide a value expression|Missing expression after/,
  ],
  [
    "unexpected_token",
    /UnexpectedToken|Unexpected token '[^']{0,40}' in expression or statement/,
  ],
];
function bt(e) {
  for (let [t, o] of wn) if (o.test(e)) return t;
  return null;
}
function vt(e) {
  if (/<<-?\s*('[A-Za-z_]\w*'|"[A-Za-z_]\w*"|[A-Za-z_]\w*)\s*([|>]|$)/m.test(e))
    return "heredoc";
  if (/(?:^|[;\n]|&&|\|\|)\s*(?:(?:if|while|until|elif)\s+)?\[{1,2}\s/.test(e))
    return "bash_test_bracket";
  if (/(^|[^&])&\s*$/m.test(e)) return "background_amp";
  if (/&&|\|\|/.test(e)) return "and_or_chain";
  if (/\s<\s/.test(e)) return "input_redirect";
  return "none";
}
function St(e, t, o, r) {
  let a = an(e),
    { base: d, nativeExt: f } = Xe(a);
  if (d === "git") {
    let I = ln(a);
    if (I === "grep") return Oe(t, o, r);
    if (I === "diff") return sn(t, o, r);
  }
  let b = o.trim() !== "" || r.trim() !== "";
  return ((f === "exe" && b ? rn.get(d) : void 0) ?? on.get(d) ?? nn)(t, o, r);
}
import { resolve as Ts } from "path";
import { homedir as bn } from "os";
import {
  basename as yn,
  dirname as Pt,
  isAbsolute as vn,
  posix,
  relative,
  resolve as _t,
  sep as Je,
} from "path";
function Et(e) {
  if (!e.startsWith("../")) return e;
  let t = be(yn(getCwd()));
  if (!t) return e;
  let o = "../" + t + "/",
    r = e;
  while (r.startsWith(o)) r = r.slice(o.length);
  if (r === "../" + t) return ".";
  return r;
}
function Pn(e) {
  return je(e, Fv);
}
function ze(e) {
  let t = new Set([je(e, (o) => o), Pn(e), je(e, yM), je(e, S2)]);
  return Array.from(t);
}
function je(e, t) {
  let o = e;
  if (((o = RF(o)), o.length > 0 && (wO.has(o[0]) || o[0] === "/"))) {
    let a = o.indexOf(":", 1);
    if (a > 0) o = RF(o.slice(a + 1));
  }
  if (
    ((o = t(o)),
    (o = tw(o)),
    (o = o.replace(/^(?:[A-Za-z0-9_.]+\\){0,3}FileSystem::/i, "")),
    (o = o.replace(/^[A-Za-z]:(?![/\\])/, "./")),
    (o = o.replaceAll("\\", "/")),
    o === "~" || o.startsWith("~/"))
  )
    o = (bn() + o.slice(1)).replaceAll("\\", "/");
  let r = "";
  if (/^[A-Za-z]:\//.test(o)) ((r = o.slice(0, 2)), (o = o.slice(2)));
  if (
    ((o = o
      .split("/")
      .map((a) => {
        if (a === "") return a;
        let d;
        do {
          if (((d = a), (a = a.replace(/ +$/, "")), a === "." || a === ".."))
            return a;
          a = a.replace(/\.+$/, "");
        } while (a !== d);
        return a || ".";
      })
      .join("/")),
    (o = posix.normalize(o)),
    r)
  )
    o = r + o;
  if (o.startsWith("./")) o = o.slice(2);
  return o;
}
function be(e) {
  return e
    .toLowerCase()
    .replace(/\u0131/g, "i")
    .replace(/\u017f/g, "s")
    .normalize("NFC")
    .replaceAll("\u03C2", "\u03C3");
}
var kn = ["head", "objects", "refs", "hooks"];
function At(e) {
  let t = ae(),
    o = getCwd(),
    r = _t(o, e),
    a = D0(t, r) ?? r,
    d = Ro(t, o).resolvedPath,
    f = d.endsWith(Je) ? d : d + Je,
    b = be(a),
    p = be(d),
    I = be(f);
  if (b === p) return ".";
  if (!b.startsWith(I)) return null;
  return b.slice(I.length).replaceAll("\\", "/");
}
function kt(e) {
  if (e === "head" || e === ".git") return !0;
  if (e.startsWith(".git/") || /^git~\d+($|\/)/.test(e)) return !0;
  for (let t of kn) {
    if (t === "head") continue;
    if (e === t || e.startsWith(t + "/")) return !0;
  }
  return !1;
}
function Le(e) {
  for (let t of ze(e)) {
    let o = Et(be(t));
    if (kt(o)) return !0;
    let r = At(t);
    if (r !== null && kt(r)) return !0;
  }
  return !1;
}
function qe(e) {
  for (let t of ze(e)) {
    let o = Et(be(t));
    if (Rt(o)) return !0;
    let r = At(t);
    if (r !== null && Rt(r)) return !0;
  }
  return !1;
}
function Rt(e) {
  if (e === ".git" || e.startsWith(".git/")) return !0;
  return /^git~\d+($|\/)/.test(e);
}
function Ue(e) {
  if (!e.includes(",")) return [e];
  return [e, ...e.split(",")];
}
var Rn = ["path", "literalpath"],
  Cn = new Set(["pspath", "lp"]),
  Tn = new Set(["cf", "wi", "vb", "db", "usetx"]),
  xn = new Set([
    "ea",
    "ev",
    "wa",
    "wv",
    "infa",
    "iv",
    "proga",
    "ov",
    "ob",
    "pv",
  ]),
  _n = [
    "container",
    "force",
    "passthru",
    "recurse",
    "whatif",
    "confirm",
    "usetransaction",
    "verbose",
    "debug",
  ],
  En = [
    "filter",
    "include",
    "exclude",
    "credential",
    "fromsession",
    "tosession",
    "erroraction",
    "errorvariable",
    "warningaction",
    "warningvariable",
    "informationaction",
    "informationvariable",
    "progressaction",
    "outvariable",
    "outbuffer",
    "pipelinevariable",
  ];
function Ct(e) {
  return /[*?[\]$]/.test(e);
}
function On(e) {
  let t = ae(),
    o = getCwd(),
    r = _t(o, e),
    a = An(r) ? r : (D0(t, r) ?? r),
    d = Ro(t, o).resolvedPath,
    f = be(a);
  if (be(d) === f) return !0;
  let b = Ro(t, he()).resolvedPath,
    p = relative(b, d);
  if (p === ".." || p.startsWith(".." + Je) || vn(p)) return !1;
  let I = be(b),
    x = d;
  for (;;) {
    if (be(x) === f) return !0;
    if (be(x) === I || x === Pt(x)) return !1;
    x = Pt(x);
  }
}
function Ot(e, t = !1) {
  let o = [],
    r = [],
    a,
    d = !1,
    f = !1,
    b = [];
  for (let L = 0; L < e.length; L++) {
    let _ = RF(e[L]);
    if (_.length === 0 || !wO.has(_[0])) {
      r.push(e[L]);
      continue;
    }
    let w = _.indexOf(":", 1),
      C = (w > 0 ? _.slice(1, w) : _.slice(1)).toLowerCase(),
      A = w > 0 ? _.slice(w + 1) : void 0;
    if (C === "") return !0;
    let F = "destination".startsWith(C),
      j = Cn.has(C) || "literalpath".startsWith(C),
      W = j || Rn.some((G) => G.startsWith(C)),
      E = Tn.has(C) || _n.some((G) => G.startsWith(C)),
      z = xn.has(C) || En.some((G) => G.startsWith(C));
    if (Number(F) + Number(W) + Number(E) + Number(z) !== 1) return !0;
    if (E) {
      if ("container".startsWith(C) && A !== void 0) {
        let G = RF(A);
        if (![Fv, yM, S2].every((se) => /^\$true$/i.test(se(G).trim()))) f = !0;
      }
      continue;
    }
    let q = A ?? e[++L];
    if (q === void 0) continue;
    if (F) a = q;
    else if (W)
      if (((d = !0), j)) b.push(...q.split(","));
      else o.push(...q.split(","));
  }
  let p = (d ? 0 : 1) + (a === void 0 ? 1 : 0);
  if (r.length > p) return !0;
  let I,
    x = 0;
  if (!d && x < r.length) (o.push(...r[x].split(",")), x++);
  if (a === void 0 && x < r.length) I = r[x];
  if (o.length === 0 && b.length === 0 && !t) return !1;
  let y = a ?? I;
  if (y !== void 0) {
    let L = ze(y).map((_) => (_ === "" ? "." : _));
    if (L.some(Ct)) return !0;
    if (!L.some(On)) return !1;
  }
  if (f || t) return !0;
  for (let [L, _] of [
    [!1, o],
    [!0, b],
  ])
    for (let w of _)
      for (let C of ze(w)) {
        let A = C === "" ? "." : C;
        if (L ? /\$/.test(A) : Ct(A)) return !0;
        let F = posix.basename(A);
        if (F === "." || F === "..") return !0;
        if (Le(F)) return !0;
      }
  return !1;
}
var In = new Set([
  "set-content",
  "add-content",
  "remove-item",
  "clear-content",
]);
function et(e) {
  let t = Ef(e);
  return In.has(t);
}
var Ln = new Set(["symboliclink", "junction", "hardlink"]);
function Nn(e) {
  return (
    (e.length >= 3 && "-itemtype".startsWith(e)) ||
    (e.length >= 3 && "-type".startsWith(e))
  );
}
function nt(e) {
  if (Ef(e.name) !== "new-item") return !1;
  for (let o = 0; o < e.args.length; o++) {
    let r = e.args[o] ?? "";
    if (r.length === 0) continue;
    let d = (wO.has(r[0]) || r[0] === "/" ? "-" + r.slice(1) : r).toLowerCase(),
      f = d.indexOf(":", 1),
      b = f > 0 ? d.slice(0, f) : d,
      p = tw(b.replace(/`[\r\n]+\s*/g, "")).toLowerCase();
    if (!Nn(p)) continue;
    let I = f > 0 ? d.slice(f + 1) : (e.args[o + 1]?.toLowerCase() ?? ""),
      x = Fv(RF(tw(I.replace(/`[\r\n]+\s*/g, "")))).toLowerCase();
    if (/[?*[\]($]/.test(x)) return !0;
    for (let y of Ln) if (x.length > 0 && y.startsWith(x)) return !0;
  }
  return !1;
}
function ot(e, t, o) {
  if (o.mode === "bypassPermissions" || o.mode === "dontAsk")
    return {
      behavior: "passthrough",
      message: "Mode is handled in main permission flow",
    };
  if (o.mode !== "acceptEdits")
    return {
      behavior: "passthrough",
      message: "No mode-specific validation required",
    };
  if (!t.valid)
    return {
      behavior: "passthrough",
      message: "Cannot validate mode for unparsed command",
    };
  let r = PF(t);
  if (
    r.hasSubExpressions ||
    r.hasScriptBlocks ||
    r.hasMemberInvocations ||
    r.hasSplatting ||
    r.hasAssignments ||
    r.hasStopParsing ||
    r.hasExpandableStrings
  )
    return {
      behavior: "passthrough",
      message:
        "Command contains subexpressions, script blocks, or member invocations that require approval",
    };
  let a = Kft(t);
  if (a.length === 0)
    return {
      behavior: "passthrough",
      message: "No commands found to validate for acceptEdits mode",
    };
  let d = a.reduce((b, p) => b + p.commands.length, 0);
  if (
    a.some((b) =>
      b.commands.some((p) => p.elementType === "CommandAst" && nt(p)),
    )
  )
    return {
      behavior: "passthrough",
      message:
        "Command creates a filesystem link (New-Item -ItemType SymbolicLink/Junction/HardLink) \u2014 cannot auto-allow because later path validation cannot follow just-created links",
    };
  if (d > 1) {
    let b = !1,
      p = !1;
    for (let I of a)
      for (let x of I.commands) {
        if (x.elementType !== "CommandAst") continue;
        if (xft(x.name)) b = !0;
        if (et(x.name)) p = !0;
      }
    if (b && p)
      return {
        behavior: "passthrough",
        message:
          "Compound command contains a directory-changing command (Set-Location/Push-Location/Pop-Location) with a write operation \u2014 cannot auto-allow because path validation uses stale cwd",
      };
  }
  for (let b of a) {
    for (let p of b.commands) {
      if (p.elementType !== "CommandAst")
        return {
          behavior: "passthrough",
          message: `Pipeline contains expression source (${p.elementType}) that cannot be statically validated`,
        };
      if (p.nameType === "application")
        return {
          behavior: "passthrough",
          message: `Command '${p.name}' resolved from a path-like name and requires approval`,
        };
      if (p.elementTypes)
        for (let I = 1; I < p.elementTypes.length; I++) {
          let x = p.elementTypes[I];
          if (x !== "StringConstant" && x !== "Parameter")
            return {
              behavior: "passthrough",
              message: `Command argument has unvalidatable type (${x}) \u2014 variable paths cannot be statically resolved`,
            };
          if (x === "Parameter") {
            let y = p.args[I - 1] ?? "",
              L = y.indexOf(":");
            if (L > 0 && /[$(@{[]/.test(y.slice(L + 1)))
              return {
                behavior: "passthrough",
                message:
                  "Colon-bound parameter contains an expression that cannot be statically validated",
              };
          }
        }
      if (LOe(p.args, p.elementTypes) || DOe(p.args, p.elementTypes))
        return {
          behavior: "passthrough",
          message: `Variable-writing or ActionPreference argument in '${p.name}' requires approval`,
        };
      if (OOe(p.name) && p.args.length === 0) continue;
      if (Qcn(p, e.command)) continue;
      if (!et(p.name))
        return {
          behavior: "passthrough",
          message: `No mode-specific handling for '${p.name}' in acceptEdits mode`,
        };
      if (gk(p.name, p))
        return {
          behavior: "passthrough",
          message: `Arguments in '${p.name}' cannot be statically validated in acceptEdits mode`,
        };
    }
    if (b.nestedCommands)
      for (let p of b.nestedCommands) {
        if (p.elementType !== "CommandAst")
          return {
            behavior: "passthrough",
            message: `Nested expression element (${p.elementType}) cannot be statically validated`,
          };
        if (p.nameType === "application")
          return {
            behavior: "passthrough",
            message: `Nested command '${p.name}' resolved from a path-like name and requires approval`,
          };
        if (LOe(p.args, p.elementTypes) || DOe(p.args, p.elementTypes))
          return {
            behavior: "passthrough",
            message: `Variable-writing or ActionPreference argument in nested '${p.name}' requires approval`,
          };
        if (OOe(p.name) && p.args.length === 0) continue;
        if (Qcn(p, e.command)) continue;
        if (!et(p.name))
          return {
            behavior: "passthrough",
            message: `No mode-specific handling for '${p.name}' in acceptEdits mode`,
          };
        if (gk(p.name, p))
          return {
            behavior: "passthrough",
            message: `Arguments in nested '${p.name}' cannot be statically validated in acceptEdits mode`,
          };
      }
  }
  return {
    behavior: "allow",
    updatedInput: e,
    decisionReason: { type: "mode", mode: "acceptEdits" },
  };
}
import { homedir as Dn } from "os";
import {
  dirname as $n,
  isAbsolute as Pe,
  normalize,
  resolve as Ce,
} from "path";
var rt = 5,
  it = {
    "set-content": {
      operationType: "write",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: [
        "-passthru",
        "-force",
        "-whatif",
        "-confirm",
        "-usetransaction",
        "-nonewline",
        "-asbytestream",
      ],
      knownValueParams: [
        "-value",
        "-filter",
        "-include",
        "-exclude",
        "-credential",
        "-encoding",
        "-stream",
      ],
    },
    "add-content": {
      operationType: "write",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: [
        "-passthru",
        "-force",
        "-whatif",
        "-confirm",
        "-usetransaction",
        "-nonewline",
        "-asbytestream",
      ],
      knownValueParams: [
        "-value",
        "-filter",
        "-include",
        "-exclude",
        "-credential",
        "-encoding",
        "-stream",
      ],
    },
    "remove-item": {
      operationType: "write",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: [
        "-recurse",
        "-force",
        "-whatif",
        "-confirm",
        "-usetransaction",
      ],
      knownValueParams: [
        "-filter",
        "-include",
        "-exclude",
        "-credential",
        "-stream",
      ],
    },
    "clear-content": {
      operationType: "write",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: ["-force", "-whatif", "-confirm", "-usetransaction"],
      knownValueParams: [
        "-filter",
        "-include",
        "-exclude",
        "-credential",
        "-stream",
      ],
    },
    "out-file": {
      operationType: "write",
      pathParams: ["-filepath", "-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: [
        "-append",
        "-force",
        "-noclobber",
        "-nonewline",
        "-whatif",
        "-confirm",
      ],
      knownValueParams: ["-inputobject", "-encoding", "-width"],
    },
    "tee-object": {
      operationType: "write",
      pathParams: ["-filepath", "-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: ["-append"],
      knownValueParams: ["-inputobject", "-variable", "-encoding"],
    },
    "export-csv": {
      operationType: "write",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: [
        "-append",
        "-force",
        "-noclobber",
        "-notypeinformation",
        "-includetypeinformation",
        "-useculture",
        "-noheader",
        "-whatif",
        "-confirm",
      ],
      knownValueParams: [
        "-inputobject",
        "-delimiter",
        "-encoding",
        "-quotefields",
        "-usequotes",
      ],
    },
    "export-clixml": {
      operationType: "write",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: ["-force", "-noclobber", "-whatif", "-confirm"],
      knownValueParams: ["-inputobject", "-depth", "-encoding"],
    },
    "new-item": {
      operationType: "write",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp", "-target"],
      leafOnlyPathParams: ["-name"],
      knownSwitches: ["-force", "-whatif", "-confirm", "-usetransaction"],
      knownValueParams: ["-itemtype", "-value", "-credential", "-type"],
    },
    "copy-item": {
      operationType: "write",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp", "-destination"],
      knownSwitches: [
        "-container",
        "-force",
        "-passthru",
        "-recurse",
        "-whatif",
        "-confirm",
        "-usetransaction",
      ],
      knownValueParams: [
        "-filter",
        "-include",
        "-exclude",
        "-credential",
        "-fromsession",
        "-tosession",
      ],
    },
    "move-item": {
      operationType: "write",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp", "-destination"],
      knownSwitches: [
        "-force",
        "-passthru",
        "-whatif",
        "-confirm",
        "-usetransaction",
      ],
      knownValueParams: ["-filter", "-include", "-exclude", "-credential"],
    },
    "rename-item": {
      operationType: "write",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: [
        "-force",
        "-passthru",
        "-whatif",
        "-confirm",
        "-usetransaction",
      ],
      knownValueParams: [
        "-newname",
        "-credential",
        "-filter",
        "-include",
        "-exclude",
      ],
    },
    "set-item": {
      operationType: "write",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: [
        "-force",
        "-passthru",
        "-whatif",
        "-confirm",
        "-usetransaction",
      ],
      knownValueParams: [
        "-value",
        "-credential",
        "-filter",
        "-include",
        "-exclude",
      ],
    },
    "get-content": {
      operationType: "read",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: [
        "-force",
        "-usetransaction",
        "-wait",
        "-raw",
        "-asbytestream",
      ],
      knownValueParams: [
        "-readcount",
        "-totalcount",
        "-tail",
        "-first",
        "-head",
        "-last",
        "-filter",
        "-include",
        "-exclude",
        "-credential",
        "-delimiter",
        "-encoding",
        "-stream",
      ],
    },
    "get-childitem": {
      operationType: "read",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: [
        "-recurse",
        "-force",
        "-name",
        "-usetransaction",
        "-followsymlink",
        "-directory",
        "-file",
        "-hidden",
        "-readonly",
        "-system",
      ],
      knownValueParams: [
        "-filter",
        "-include",
        "-exclude",
        "-depth",
        "-attributes",
        "-credential",
      ],
    },
    "get-item": {
      operationType: "read",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: ["-force", "-usetransaction"],
      knownValueParams: [
        "-filter",
        "-include",
        "-exclude",
        "-credential",
        "-stream",
      ],
    },
    "get-itemproperty": {
      operationType: "read",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: ["-usetransaction"],
      knownValueParams: [
        "-name",
        "-filter",
        "-include",
        "-exclude",
        "-credential",
      ],
    },
    "get-itempropertyvalue": {
      operationType: "read",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: ["-usetransaction"],
      knownValueParams: [
        "-name",
        "-filter",
        "-include",
        "-exclude",
        "-credential",
      ],
    },
    "get-filehash": {
      operationType: "read",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: [],
      knownValueParams: ["-algorithm", "-inputstream"],
    },
    "get-acl": {
      operationType: "read",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: ["-audit", "-allcentralaccesspolicies", "-usetransaction"],
      knownValueParams: ["-inputobject", "-filter", "-include", "-exclude"],
    },
    "get-module": {
      operationType: "read",
      pathParams: ["-name", "-fullyqualifiedname"],
      knownSwitches: [
        "-listavailable",
        "-all",
        "-refresh",
        "-skipeditioncheck",
      ],
      knownValueParams: ["-psedition", "-pssession", "-cimsession"],
    },
    "format-hex": {
      operationType: "read",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: ["-raw"],
      knownValueParams: ["-inputobject", "-encoding", "-count", "-offset"],
    },
    "test-path": {
      operationType: "read",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: ["-isvalid", "-usetransaction"],
      knownValueParams: [
        "-filter",
        "-include",
        "-exclude",
        "-pathtype",
        "-credential",
        "-olderthan",
        "-newerthan",
      ],
    },
    "resolve-path": {
      operationType: "read",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: ["-relative", "-usetransaction", "-force"],
      knownValueParams: ["-credential", "-relativebasepath"],
    },
    "convert-path": {
      operationType: "read",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: ["-usetransaction"],
      knownValueParams: [],
    },
    "select-string": {
      operationType: "read",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: [
        "-simplematch",
        "-casesensitive",
        "-quiet",
        "-list",
        "-notmatch",
        "-allmatches",
        "-noemphasis",
        "-raw",
      ],
      knownValueParams: [
        "-inputobject",
        "-pattern",
        "-include",
        "-exclude",
        "-encoding",
        "-context",
        "-culture",
      ],
    },
    "set-location": {
      operationType: "read",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: ["-passthru", "-usetransaction"],
      knownValueParams: ["-stackname"],
    },
    "push-location": {
      operationType: "read",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: ["-passthru", "-usetransaction"],
      knownValueParams: ["-stackname"],
    },
    "pop-location": {
      operationType: "read",
      pathParams: [],
      knownSwitches: ["-passthru", "-usetransaction"],
      knownValueParams: ["-stackname"],
    },
    "select-xml": {
      operationType: "read",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: [],
      knownValueParams: ["-xml", "-content", "-xpath", "-namespace"],
    },
    "get-winevent": {
      operationType: "read",
      pathParams: ["-path"],
      knownSwitches: ["-force", "-oldest"],
      knownValueParams: [
        "-listlog",
        "-logname",
        "-listprovider",
        "-providername",
        "-maxevents",
        "-computername",
        "-credential",
        "-filterxpath",
        "-filterxml",
        "-filterhashtable",
      ],
    },
    "invoke-webrequest": {
      operationType: "write",
      pathParams: ["-outfile", "-infile"],
      positionalSkip: 1,
      optionalWrite: !0,
      knownSwitches: [
        "-allowinsecureredirect",
        "-allowunencryptedauthentication",
        "-disablekeepalive",
        "-nobodyprogress",
        "-passthru",
        "-preservefileauthorizationmetadata",
        "-resume",
        "-skipcertificatecheck",
        "-skipheadervalidation",
        "-skiphttperrorcheck",
        "-usebasicparsing",
        "-usedefaultcredentials",
      ],
      knownValueParams: [
        "-uri",
        "-method",
        "-body",
        "-contenttype",
        "-headers",
        "-maximumredirection",
        "-maximumretrycount",
        "-proxy",
        "-proxycredential",
        "-retryintervalsec",
        "-sessionvariable",
        "-timeoutsec",
        "-token",
        "-transferencoding",
        "-useragent",
        "-websession",
        "-credential",
        "-authentication",
        "-certificate",
        "-certificatethumbprint",
        "-form",
        "-httpversion",
      ],
    },
    "invoke-restmethod": {
      operationType: "write",
      pathParams: ["-outfile", "-infile"],
      positionalSkip: 1,
      optionalWrite: !0,
      knownSwitches: [
        "-allowinsecureredirect",
        "-allowunencryptedauthentication",
        "-disablekeepalive",
        "-followrellink",
        "-nobodyprogress",
        "-passthru",
        "-preservefileauthorizationmetadata",
        "-resume",
        "-skipcertificatecheck",
        "-skipheadervalidation",
        "-skiphttperrorcheck",
        "-usebasicparsing",
        "-usedefaultcredentials",
      ],
      knownValueParams: [
        "-uri",
        "-method",
        "-body",
        "-contenttype",
        "-headers",
        "-maximumfollowrellink",
        "-maximumredirection",
        "-maximumretrycount",
        "-proxy",
        "-proxycredential",
        "-responseheaderstvariable",
        "-retryintervalsec",
        "-sessionvariable",
        "-statuscodevariable",
        "-timeoutsec",
        "-token",
        "-transferencoding",
        "-useragent",
        "-websession",
        "-credential",
        "-authentication",
        "-certificate",
        "-certificatethumbprint",
        "-form",
        "-httpversion",
      ],
    },
    "expand-archive": {
      operationType: "write",
      pathParams: [
        "-path",
        "-literalpath",
        "-pspath",
        "-lp",
        "-destinationpath",
      ],
      knownSwitches: ["-force", "-passthru", "-whatif", "-confirm"],
      knownValueParams: [],
    },
    "compress-archive": {
      operationType: "write",
      pathParams: [
        "-path",
        "-literalpath",
        "-pspath",
        "-lp",
        "-destinationpath",
      ],
      knownSwitches: ["-force", "-update", "-passthru", "-whatif", "-confirm"],
      knownValueParams: ["-compressionlevel"],
    },
    "set-itemproperty": {
      operationType: "write",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: [
        "-passthru",
        "-force",
        "-whatif",
        "-confirm",
        "-usetransaction",
      ],
      knownValueParams: [
        "-name",
        "-value",
        "-type",
        "-filter",
        "-include",
        "-exclude",
        "-credential",
        "-inputobject",
      ],
    },
    "new-itemproperty": {
      operationType: "write",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: ["-force", "-whatif", "-confirm", "-usetransaction"],
      knownValueParams: [
        "-name",
        "-value",
        "-propertytype",
        "-type",
        "-filter",
        "-include",
        "-exclude",
        "-credential",
      ],
    },
    "remove-itemproperty": {
      operationType: "write",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: ["-force", "-whatif", "-confirm", "-usetransaction"],
      knownValueParams: [
        "-name",
        "-filter",
        "-include",
        "-exclude",
        "-credential",
      ],
    },
    "clear-item": {
      operationType: "write",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: ["-force", "-whatif", "-confirm", "-usetransaction"],
      knownValueParams: ["-filter", "-include", "-exclude", "-credential"],
    },
    "export-alias": {
      operationType: "write",
      pathParams: ["-path", "-literalpath", "-pspath", "-lp"],
      knownSwitches: [
        "-append",
        "-force",
        "-noclobber",
        "-passthru",
        "-whatif",
        "-confirm",
      ],
      knownValueParams: ["-name", "-description", "-scope", "-as"],
    },
  };
function Vn(e) {
  return [
    ["path", e.pathParams],
    ["leafOnly", e.leafOnlyPathParams ?? []],
    ["switch", [...e.knownSwitches, ...Ycn]],
    ["value", [...e.knownValueParams, ...Jcn]],
  ];
}
function Wn(e, t) {
  let o = new Set(),
    r = new Map(),
    a = !1;
  for (let [b, p] of t)
    for (let I of p)
      if (I === e) o.add(b);
      else if (e.length > 1 && I.startsWith(e)) {
        let x = r.get(I);
        if (x !== void 0 && x !== b) a = !0;
        r.set(I, b);
      }
  if (o.size > 1) return "ambiguous";
  let d = [...o][0];
  if (d !== void 0)
    return d === "value" && (a || [...r.values()].some((p) => p !== "value"))
      ? "ambiguous"
      : d;
  if (a || r.size > 1) return "ambiguous";
  let f = [...r.values()][0];
  if (f !== void 0) return f;
  return "unknown";
}
function Fe(e) {
  if (getCurrentPlatform() !== "windows") return e;
  return e
    .split(/([/\\])/)
    .map((t, o) => {
      if (o % 2 !== 0) return t;
      return x$t(t);
    })
    .join("");
}
function Ge(e) {
  return RF(e);
}
function at(e) {
  if (/['"\u2018-\u201F]/.test(e)) return !0;
  if (e.includes("\u180E")) return !0;
  let t = Ge(e);
  return (
    t.includes(",") ||
    t.startsWith("(") ||
    t.startsWith("[") ||
    t.includes("`") ||
    t.includes("@(") ||
    t.startsWith("@") ||
    t.includes("$")
  );
}
function He(e) {
  let t = e.length;
  if (t <= rt) return e.map((r) => `'${r}'`).join(", ");
  return `${e
    .slice(0, rt)
    .map((r) => `'${r}'`)
    .join(", ")}, and ${t - rt} more`;
}
function xe(e) {
  if (e === "~" || e.startsWith("~/") || e.startsWith("~\\"))
    return Dn() + e.slice(1);
  return e;
}
function $e(e) {
  let t = new Set([Fv(e), yM(e), S2(e)]);
  for (let o of t) {
    let r = o,
      a = r.indexOf("::");
    if (a >= 0) r = r.slice(a + 2);
    if (((r = Fe(xe(r).replace(/\\/g, "/"))), Pe(r))) r = normalize(r);
    if (IDe(r)) return !0;
  }
  return !1;
}
function It(e, t) {
  let o = new Set([e, yM(e), S2(e)]);
  for (let r of [...o]) {
    if (r.includes("`")) o.add(tw(r));
    if (r.includes("::")) {
      let a = r.slice(r.indexOf("::") + 2);
      if ((o.add(a), a.includes("`"))) o.add(tw(a));
    }
  }
  for (let r of o) {
    let a = Fe(xe(r).replace(/\\/g, "/"));
    if (a === "") continue;
    let d = Pe(a) ? a : Ce(t, a),
      { resolvedPath: f } = Ro(ae(), d);
    if (IDe(f)) return f;
  }
  return null;
}
function ie(e) {
  return Fv(e) === e;
}
function Re(e) {
  return {
    behavior: "deny",
    message: `Remove-Item on system path '${e}' is blocked. This path is protected from removal.`,
    decisionReason: {
      type: "safetyCheck",
      reason: "Removal targets a protected system path",
      classifierApprovable: !1,
    },
  };
}
function De(e, t, o, r) {
  if (!e || e.includes("\x00")) return null;
  let a = xe(Fe(e)),
    d = Pe(a) ? a : Ce(t, a),
    { resolvedPath: f } = Ro(ae(), d),
    b = r === "read" ? "read" : "edit";
  for (let p of Tr(f)) {
    let I = matchingRuleForInput(p, o, b, "deny");
    if (I !== null) return { resolvedPath: f, rule: I };
  }
  return null;
}
function Ee(e, t, o, r) {
  let a = Fv(e),
    d = a !== e;
  if (d) {
    let w = new Set();
    for (let C of [
      e.replaceAll("\\", "/"),
      yM(e).replaceAll("\\", "/"),
      S2(e).replaceAll("\\", "/"),
    ]) {
      if ((w.add(C), C.includes("`"))) w.add(tw(C));
      if (C.includes("::")) {
        let A = C.slice(C.indexOf("::") + 2);
        if ((w.add(A), A.includes("`"))) w.add(tw(A));
      }
    }
    for (let C of w) {
      let A = De(C, t, o, r);
      if (A)
        return {
          allowed: !1,
          resolvedPath: A.resolvedPath,
          decisionReason: { type: "rule", rule: A.rule },
        };
    }
  }
  let f = (w) => ({
      allowed: !1,
      resolvedPath: w,
      decisionReason: {
        type: "other",
        reason:
          "Paths containing quote characters cannot be statically validated and require manual approval",
      },
    }),
    p = xe(a).replaceAll("\\", "/");
  if (/^~[^/]/.test(p))
    return {
      allowed: !1,
      resolvedPath: p,
      decisionReason: {
        type: "other",
        reason:
          "Paths beginning with ~user cannot be statically validated and require manual approval",
      },
    };
  if (p.includes("`")) {
    let w = tw(p),
      C = De(w, t, o, r);
    if (C)
      return {
        allowed: !1,
        resolvedPath: C.resolvedPath,
        decisionReason: { type: "rule", rule: C.rule },
      };
    return {
      allowed: !1,
      resolvedPath: p,
      decisionReason: {
        type: "other",
        reason:
          "Backtick escape characters in paths cannot be statically validated and require manual approval",
      },
    };
  }
  if (p.includes("::")) {
    let w = p.slice(p.indexOf("::") + 2),
      C = De(w, t, o, r);
    if (C)
      return {
        allowed: !1,
        resolvedPath: C.resolvedPath,
        decisionReason: { type: "rule", rule: C.rule },
      };
    return {
      allowed: !1,
      resolvedPath: p,
      decisionReason: {
        type: "other",
        reason:
          "Module-qualified provider paths (::) cannot be statically validated and require manual approval",
      },
    };
  }
  if (getCurrentPlatform() === "windows" && /^[a-z]:(?![/\\])/i.test(p))
    return {
      allowed: !1,
      resolvedPath: p,
      decisionReason: {
        type: "other",
        reason: `Path '${d ? e : p}' is drive-relative (resolves against the per-drive current directory, which cannot be statically validated) and requires manual approval`,
      },
    };
  if (((p = Fe(p)), An(p) || /DavWWWRoot/i.test(p) || /@SSL@/i.test(p)))
    return {
      allowed: !1,
      resolvedPath: p,
      decisionReason: {
        type: "other",
        reason:
          "UNC paths are blocked because they can trigger network requests and credential leakage",
      },
    };
  if (p.includes("$") || p.includes("%"))
    return {
      allowed: !1,
      resolvedPath: p,
      decisionReason: {
        type: "other",
        reason: "Variable expansion syntax in paths requires manual approval",
      },
    };
  if ((getCurrentPlatform() === "windows" ? /^[a-z0-9]{2,}:/i : /^[a-z0-9]+:/i).test(p))
    return {
      allowed: !1,
      resolvedPath: p,
      decisionReason: {
        type: "other",
        reason: `Path '${d ? e : p}' uses a non-filesystem provider and requires manual approval`,
      },
    };
  if (Gmt(p)) {
    let w = De(p, t, o, r);
    if (w)
      return {
        allowed: !1,
        resolvedPath: w.resolvedPath,
        decisionReason: { type: "rule", rule: w.rule },
      };
    return {
      allowed: !1,
      resolvedPath: Ce(t, p),
      decisionReason: {
        type: "other",
        reason:
          "Path contains '..' traversal after a directory segment, which may follow a symlink outside the working directory",
      },
    };
  }
  if (Fx(p) !== -1) {
    if (r === "write" || r === "create")
      return {
        allowed: !1,
        resolvedPath: p,
        decisionReason: {
          type: "other",
          reason:
            "Glob patterns are not allowed in write operations. Please specify an exact file path.",
        },
      };
    if (Iq(p)) {
      let W = Pe(p) ? p : Ce(t, p),
        { resolvedPath: E } = Ro(ae(), W),
        z = r === "read" ? "read" : "edit";
      for (let B of Tr(E)) {
        let q = matchingRuleForInput(B, o, z, "deny");
        if (q !== null)
          return {
            allowed: !1,
            resolvedPath: E,
            decisionReason: { type: "rule", rule: q },
          };
      }
      if (d) return f(E);
      return {
        allowed: !1,
        resolvedPath: E,
        decisionReason: {
          type: "other",
          reason:
            "Glob patterns in paths cannot be statically validated \u2014 symlinks inside the glob expansion are not examined. Requires manual approval.",
        },
      };
    }
    let w = Bn(p),
      C = Pe(w) ? w : Ce(t, w),
      { resolvedPath: A } = Ro(ae(), C),
      j = matchingRuleForInput(A, o, r === "read" ? "read" : "edit", "deny");
    if (j !== null)
      return {
        allowed: !1,
        resolvedPath: A,
        decisionReason: { type: "rule", rule: j },
      };
    return {
      allowed: !1,
      resolvedPath: A,
      decisionReason: {
        type: "other",
        reason:
          "Glob patterns in paths cannot be statically validated \u2014 symlinks inside the glob expansion are not examined. Requires manual approval.",
      },
    };
  }
  let x = Pe(p) ? p : Ce(t, p),
    { resolvedPath: y, isCanonical: L } = Ro(ae(), x),
    _ = dT(y, o, r, L ? [y] : void 0);
  if (d && _.allowed) return f(y);
  if (d && !_.allowed && _.decisionReason?.type === "safetyCheck")
    return {
      allowed: !1,
      resolvedPath: y,
      decisionReason: {
        type: "safetyCheck",
        reason: `Path '${e}' resolves near a sensitive file under quote-stripping and cannot be statically validated; requires manual approval`,
        classifierApprovable: !1,
      },
    };
  return {
    allowed: _.allowed,
    resolvedPath: y,
    decisionReason: _.decisionReason,
  };
}
function Bn(e) {
  let t = Fx(e);
  if (t === -1) return e;
  let o = e.substring(0, t),
    r = Math.max(o.lastIndexOf("/"), o.lastIndexOf("\\"));
  if (r === -1) return ".";
  return o.substring(0, r + 1) || "/";
}
var jn = new Set(["StringConstant", "Parameter"]),
  zn = new Set([
    "get-childitem",
    "get-item",
    "get-itemproperty",
    "resolve-path",
    "convert-path",
    "get-filehash",
    "get-acl",
    "test-path",
  ]);
function Lt(e) {
  let t = Ef(e.name),
    o = Ad(it, t);
  if (!o)
    return {
      paths: [],
      operationType: "read",
      hasUnvalidatablePathArg: !1,
      optionalWrite: !1,
    };
  let r = Vn(o),
    a = [],
    { args: d, elementTypes: f } = e,
    b = !1,
    p = 0,
    I = o.positionalSkip ?? 0;
  function x(y) {
    if (!f) return;
    let L = f[y + 1];
    if (L && !jn.has(L)) b = !0;
  }
  for (let y = 0; y < d.length; y++) {
    let L = d[y];
    if (!L) continue;
    let _ = f ? f[y + 1] : void 0;
    if (Q7(L, _)) {
      let w = "-" + L.slice(1),
        C = w.indexOf(":", 1),
        F = (C > 0 ? w.substring(0, C) : w).toLowerCase(),
        j = Wn(F, r);
      if (j === "path") {
        let W;
        if (C > 0) {
          let E = L.substring(C + 1);
          if (at(E)) b = !0;
          W = Ge(E);
        } else {
          let E = d[y + 1],
            z = f ? f[y + 2] : void 0;
          if (E && !Q7(E, z)) ((W = E), x(y + 1), y++);
        }
        if (W) a.push(W);
      } else if (j === "leafOnly") {
        let W;
        if (C > 0) {
          let E = L.substring(C + 1);
          if (at(E)) b = !0;
          W = Ge(E);
        } else {
          let E = d[y + 1],
            z = f ? f[y + 2] : void 0;
          if (E && !Q7(E, z)) ((W = E), x(y + 1), y++);
        }
        if (W !== void 0)
          if (W.includes("/") || W.includes("\\") || W === "." || W === "..")
            b = !0;
          else a.push(W);
      } else if (j === "switch");
      else if (j === "value")
        if (C > 0) {
          if (at(L.substring(C + 1))) b = !0;
        } else {
          let W = d[y + 1],
            E = f ? f[y + 2] : void 0;
          if (W && !Q7(W, E)) (x(y + 1), y++);
        }
      else {
        b = !0;
        {
          let W = d[y + 1],
            E = f ? f[y + 2] : void 0;
          if (W && !Q7(W, E)) a.push(W);
        }
        if (C > 0) {
          let W = L.substring(C + 1);
          a.push(Ge(W));
        }
      }
      continue;
    }
    if (p < I) {
      p++;
      continue;
    }
    (p++, x(y), a.push(L));
  }
  return {
    paths: a,
    operationType: o.operationType,
    hasUnvalidatablePathArg: b,
    optionalWrite: o.optionalWrite ?? !1,
  };
}
function Mt(e, t, o, r = !1) {
  if (!t.valid)
    return {
      behavior: "passthrough",
      message: "Cannot validate paths for unparsed command",
    };
  let a, d;
  for (let f of t.statements) {
    let b = Gn(f, o, r);
    if (b.behavior === "deny") return b;
    if (b.behavior === "ask") {
      if (((a ??= b), isOutsideReadsBlockedAsk(b.decisionReason))) d ??= b;
    }
  }
  return (
    d ??
    a ?? {
      behavior: "passthrough",
      message: "All path constraints validated successfully",
    }
  );
}
function qn(e, t, o, r) {
  let a = Ef(e.name),
    d = e.elementTypes,
    f = e.name
      .slice(Math.max(e.name.lastIndexOf("\\"), e.name.lastIndexOf("/")) + 1)
      .replace(/\.exe$/i, "")
      .replace(/[\d.]+$/, ""),
    b =
      INLINE_CODE_FLAGS.get(f) ??
      (f.toLowerCase() === "cmd" ? new Set(["/c", "/k"]) : void 0);
  if (
    b !== void 0 &&
    e.args.some((p) => {
      let I = p.toLowerCase();
      return [...b].some(
        (x) => I === x.toLowerCase() || I.startsWith(x.toLowerCase() + "="),
      );
    })
  )
    return outsideReadsTooComplexAsk(
      `${a} runs inline code, which cannot be checked against the read block`,
    );
  for (let p = 0; p < e.args.length; p++) {
    let I = e.args[p],
      x = d ? d[p + 1] : void 0;
    if (x !== void 0 && x !== "StringConstant" && x !== "Parameter")
      return outsideReadsRuntimePathAsk(a);
    if (I === "") continue;
    let y = I.indexOf(":"),
      L = I.indexOf("="),
      _ =
        y > 0 && /^[-/][A-Za-z]+$/.test(I.slice(0, y))
          ? I.slice(y + 1)
          : L > 0 && /^--?[A-Za-z][A-Za-z-]*$/.test(I.slice(0, L))
            ? I.slice(L + 1)
            : void 0;
    if (_ !== void 0 && _.includes("$")) return outsideReadsRuntimePathAsk(a);
    if (An(I)) return outsideReadsRuntimePathAsk(a);
    if (_ === void 0 && Q7(I, x)) continue;
    for (let w of _ !== void 0 ? [_] : [I]) {
      if (w === "") continue;
      if (w.startsWith("~") && w !== "~" && !/^~[\\/]/.test(w)) return outsideReadsRuntimePathAsk(a);
      let C = xe(w);
      if (r && !Pe(C)) return outsideReadsRuntimePathAsk(a);
      let A = w,
        F = Fx(C);
      if (F !== -1) {
        let z = C.slice(0, F);
        A = /[\\/]$/.test(z) ? z : $n(z);
      }
      let j = xe(A);
      if (An(j)) return outsideReadsRuntimePathAsk(a);
      let W = Pe(j) ? j : Ce(t, j);
      if (!ae().existsSync(W)) continue;
      let E = Ee(A, t, o, "read");
      if (E.allowed) continue;
      if (E.decisionReason?.type === "rule")
        return {
          behavior: "deny",
          message: `${a} targeting '${E.resolvedPath}' was blocked by a deny rule`,
          decisionReason: E.decisionReason,
        };
      if (isOutsideReadsBlockedAsk(E.decisionReason))
        return lt(a, E.decisionReason, ie(A) ? E.resolvedPath : void 0);
      return outsideReadsRuntimePathAsk(a);
    }
  }
  return;
}
function Un(e) {
  let t = !1,
    o = !1;
  for (let r = 0; r < e.length; r++) {
    let d = e[r].toLowerCase(),
      f = d.indexOf(":"),
      b = f > 0 ? d.slice(0, f) : d,
      p = f > 0 ? d.slice(f + 1) : (e[r + 1] ?? "").toLowerCase();
    if (
      b.length >= 2 &&
      ("-itemtype".startsWith(b) || "-type".startsWith(b)) &&
      /link|junction/.test(p)
    )
      t = !0;
    if (b.length >= 2 && "-value".startsWith(b)) o = !0;
  }
  return t && o;
}
var Hn = new Set([
  "copy-item",
  "move-item",
  "compress-archive",
  "expand-archive",
  "invoke-webrequest",
  "invoke-restmethod",
  "new-item",
]);
function lt(e, t, o) {
  return {
    behavior: "ask",
    message: `${e} names a path outside the working directories, which the read block does not allow without asking (permissions.blockReadsOutsideWorkingDirectories). Add the directory with /add-dir, or remove that setting.`,
    blockedPath: o,
    decisionReason: t,
  };
}
function Gn(e, t, o = !1) {
  let r = getCwd(),
    a,
    d,
    f = t.blockReadsOutsideWorkingDirectories === !0,
    b = (y, L) => f && (L === "read" || Hn.has(y));
  if (o)
    a = {
      behavior: "ask",
      message:
        "Compound command changes working directory (Set-Location/Push-Location/Pop-Location/New-PSDrive) \u2014 relative paths cannot be validated against the original cwd and require manual approval",
      decisionReason: {
        type: "other",
        reason:
          "Compound command contains cd with path operation \u2014 manual approval required to prevent path resolution bypass",
      },
    };
  let p = !1,
    I,
    x = !1;
  for (let y of e.commands) {
    if (y.elementType !== "CommandAst") {
      ((p = !0), (I = y.text));
      continue;
    }
    let {
        paths: L,
        operationType: _,
        hasUnvalidatablePathArg: w,
        optionalWrite: C,
      } = Lt(y),
      A = Ef(y.name),
      F = Ad(it, A) !== void 0;
    if (f && !F) {
      let E = qn(y, r, t, o);
      if (E?.behavior === "deny") return E;
      d ??= E;
    }
    if (f && A === "new-item" && Un(y.args)) d ??= outsideReadsRuntimePathAsk(A);
    let j = x;
    if (!zn.has(A)) x = !0;
    if (p) {
      let E = Ef(y.name);
      if (I !== void 0) {
        let z = new Set();
        for (let B of [I, Fv(I), yM(I), S2(I)]) {
          if ((z.add(B), B.includes("`"))) z.add(tw(B));
          if (B.includes("::")) {
            let q = B.slice(B.indexOf("::") + 2);
            if ((z.add(q), q.includes("`"))) z.add(tw(q));
          }
        }
        for (let B of z) {
          let q = De(B, r, t, _);
          if (q)
            return {
              behavior: "deny",
              message: `${E} targeting '${q.resolvedPath}' was blocked by a deny rule`,
              decisionReason: { type: "rule", rule: q.rule },
            };
        }
      }
      if (
        ((a ??= {
          behavior: "ask",
          message: `${E} receives its path from a pipeline expression source that cannot be statically validated and requires manual approval`,
        }),
        b(A, _))
      )
        d ??= outsideReadsRuntimePathAsk(A);
    }
    if (w) {
      let E = Ef(y.name);
      if (
        ((a ??= {
          behavior: "ask",
          message: `${E} uses a parameter or complex path expression (array literal, subexpression, unknown parameter, etc.) that cannot be statically validated and requires manual approval`,
        }),
        b(A, _))
      )
        d ??= outsideReadsRuntimePathAsk(A);
    }
    if (_ !== "read" && !C && L.length === 0 && F) {
      a ??= {
        behavior: "ask",
        message: `${A} is a write operation but no target path could be determined; requires manual approval`,
      };
      continue;
    }
    if (j && F) {
      if (
        ((a ??= {
          behavior: "ask",
          message: `${A} may receive a path from an upstream pipeline command whose output cannot be statically validated and requires manual approval`,
        }),
        b(A, _))
      )
        d ??= outsideReadsRuntimePathAsk(A);
    }
    let W = Ef(y.name) === "remove-item";
    if (W) {
      if (
        y.args.some((z) => {
          let B = (z.length > 0 ? "-" + z.slice(1) : z).toLowerCase(),
            q = B.indexOf(":"),
            G = q > 0 ? B.slice(0, q) : B;
          return G.length >= 2 && "-recurse".startsWith(G);
        })
      ) {
        let z = normalizeCaseForComparison(r);
        for (let B of L) {
          let q = xe(Fe(B)).replace(/\\/g, "/"),
            G = Pe(q) ? Ce(q) : Ce(r, q),
            J = normalizeCaseForComparison(G);
          if (J === z || z.startsWith(J + "/") || z.startsWith(J + "\\")) {
            a ??= {
              behavior: "ask",
              message: `Remove-Item -Recurse targeting '${B}' would delete the working directory including .git and .claude \u2014 requires manual approval`,
            };
            break;
          }
        }
      }
    }
    if (o && b(A, _) && L.some((E) => !Pe(xe(E)))) d ??= outsideReadsRuntimePathAsk(A);
    for (let E of L) {
      if (W && $e(E)) return Re(E);
      let { allowed: z, resolvedPath: B, decisionReason: q } = Ee(E, r, t, _);
      if (_ !== "read" && b(A, _)) {
        let G = Ee(E, r, t, "read");
        if (!G.allowed && G.decisionReason?.type === "rule")
          return {
            behavior: "deny",
            message: `${A} targeting '${G.resolvedPath}' was blocked by a deny rule`,
            decisionReason: G.decisionReason,
          };
        if (!G.allowed && isOutsideReadsBlockedAsk(G.decisionReason))
          d ??= lt(A, G.decisionReason, ie(E) ? G.resolvedPath : void 0);
      }
      if (W && IDe(B)) return Re(B);
      if (W) {
        let G = It(E, r);
        if (G !== null) return Re(G);
      }
      if (!z) {
        let G = Ef(y.name),
          J = Array.from(allWorkingDirectories(t)),
          se = He(J),
          ee =
            q?.type === "other" || q?.type === "safetyCheck"
              ? q.reason
              : `${G} targeting '${ie(E) ? B : E}' was blocked. For security, Claude Code may only access files in the allowed working directories for this session: ${se}.`;
        if (q?.type === "rule")
          return { behavior: "deny", message: ee, decisionReason: q };
        let oe = [];
        if (B && ie(E))
          if (_ === "read") {
            let ye = rme(nL(B), "session");
            if (ye) oe.push(ye);
          } else
            oe.push({
              type: "addDirectories",
              directories: [nL(B)],
              destination: "session",
            });
        if (
          ie(E) &&
          (_ === "write" || _ === "create") &&
          (t.mode === "default" || t.mode === "plan")
        )
          oe.push({
            type: "setMode",
            mode: "acceptEdits",
            destination: "session",
          });
        let fe = {
          behavior: "ask",
          message: ee,
          blockedPath: ie(E) ? B : void 0,
          decisionReason: q,
          suggestions: oe,
        };
        if (((a ??= fe), isOutsideReadsBlockedAsk(q))) d ??= fe;
      }
    }
  }
  if (e.nestedCommands)
    for (let y of e.nestedCommands) {
      let {
          paths: L,
          operationType: _,
          hasUnvalidatablePathArg: w,
          optionalWrite: C,
        } = Lt(y),
        A = Ef(y.name);
      if (w) {
        if (
          ((a ??= {
            behavior: "ask",
            message: `${A} uses a parameter or complex path expression (array literal, subexpression, unknown parameter, etc.) that cannot be statically validated and requires manual approval`,
          }),
          b(A, _))
        )
          d ??= outsideReadsRuntimePathAsk(A);
      }
      if (_ !== "read" && !C && L.length === 0 && Ad(it, A) !== void 0) {
        a ??= {
          behavior: "ask",
          message: `${A} is a write operation but no target path could be determined; requires manual approval`,
        };
        continue;
      }
      let F = Ef(y.name) === "remove-item";
      for (let j of L) {
        if (F && $e(j)) return Re(j);
        let { allowed: W, resolvedPath: E, decisionReason: z } = Ee(j, r, t, _);
        if (_ !== "read" && b(A, _)) {
          let B = Ee(j, r, t, "read");
          if (!B.allowed && B.decisionReason?.type === "rule")
            return {
              behavior: "deny",
              message: `${A} targeting '${B.resolvedPath}' was blocked by a deny rule`,
              decisionReason: B.decisionReason,
            };
          if (!B.allowed && isOutsideReadsBlockedAsk(B.decisionReason))
            d ??= lt(A, B.decisionReason, ie(j) ? B.resolvedPath : void 0);
        }
        if (F && IDe(E)) return Re(E);
        if (F) {
          let B = It(j, r);
          if (B !== null) return Re(B);
        }
        if (!W) {
          let B = Ef(y.name),
            q = Array.from(allWorkingDirectories(t)),
            G = He(q),
            J =
              z?.type === "other" || z?.type === "safetyCheck"
                ? z.reason
                : `${B} targeting '${ie(j) ? E : j}' was blocked. For security, Claude Code may only access files in the allowed working directories for this session: ${G}.`;
          if (z?.type === "rule")
            return { behavior: "deny", message: J, decisionReason: z };
          let se = [];
          if (E && ie(j))
            if (_ === "read") {
              let oe = rme(nL(E), "session");
              if (oe) se.push(oe);
            } else
              se.push({
                type: "addDirectories",
                directories: [nL(E)],
                destination: "session",
              });
          if (
            ie(j) &&
            (_ === "write" || _ === "create") &&
            (t.mode === "default" || t.mode === "plan")
          )
            se.push({
              type: "setMode",
              mode: "acceptEdits",
              destination: "session",
            });
          let ee = {
            behavior: "ask",
            message: J,
            blockedPath: ie(j) ? E : void 0,
            decisionReason: z,
            suggestions: se,
          };
          if (((a ??= ee), isOutsideReadsBlockedAsk(z))) d ??= ee;
        }
      }
      if (p)
        a ??= {
          behavior: "ask",
          message: `${Ef(y.name)} appears inside a control-flow or chain statement where piped expression sources cannot be statically validated and requires manual approval`,
        };
    }
  if (e.nestedCommands) {
    for (let y of e.nestedCommands)
      if (y.redirections)
        for (let L of y.redirections) {
          if (L.isMerging) continue;
          if (!L.target) continue;
          if (zOe(L.target)) continue;
          let {
            allowed: _,
            resolvedPath: w,
            decisionReason: C,
          } = Ee(L.target, r, t, "create");
          if (!_) {
            let A = Array.from(allWorkingDirectories(t)),
              F = He(A),
              j =
                C?.type === "other" || C?.type === "safetyCheck"
                  ? C.reason
                  : `Output redirection to '${ie(L.target) ? w : L.target}' was blocked. For security, Claude Code may only write to files in the allowed working directories for this session: ${F}.`;
            if (C?.type === "rule")
              return { behavior: "deny", message: j, decisionReason: C };
            a ??= {
              behavior: "ask",
              message: j,
              blockedPath: ie(L.target) ? w : void 0,
              decisionReason: C,
              suggestions: ie(L.target)
                ? [
                    {
                      type: "addDirectories",
                      directories: [nL(w)],
                      destination: "session",
                    },
                  ]
                : [],
            };
          }
        }
  }
  if (e.redirections)
    for (let y of e.redirections) {
      if (y.isMerging) continue;
      if (!y.target) continue;
      if (zOe(y.target)) continue;
      let {
        allowed: L,
        resolvedPath: _,
        decisionReason: w,
      } = Ee(y.target, r, t, "create");
      if (!L) {
        let C = Array.from(allWorkingDirectories(t)),
          A = He(C),
          F =
            w?.type === "other" || w?.type === "safetyCheck"
              ? w.reason
              : `Output redirection to '${ie(y.target) ? _ : y.target}' was blocked. For security, Claude Code may only write to files in the allowed working directories for this session: ${A}.`;
        if (w?.type === "rule")
          return { behavior: "deny", message: F, decisionReason: w };
        a ??= {
          behavior: "ask",
          message: F,
          blockedPath: ie(y.target) ? _ : void 0,
          decisionReason: w,
          suggestions: ie(y.target)
            ? [
                {
                  type: "addDirectories",
                  directories: [nL(_)],
                  destination: "session",
                },
              ]
            : [],
        };
      }
    }
  return (
    d ??
    a ?? {
      behavior: "passthrough",
      message: "All path constraints validated successfully",
    }
  );
}
var Kn = new Set(
  [
    "alias",
    "allowemptycollection",
    "allowemptystring",
    "allownull",
    "argumentcompleter",
    "argumentcompletions",
    "array",
    "bigint",
    "bool",
    "byte",
    "char",
    "cimclass",
    "cimconverter",
    "ciminstance",
    "cimtype",
    "cmdletbinding",
    "cultureinfo",
    "datetime",
    "decimal",
    "double",
    "dsclocalconfigurationmanager",
    "dscproperty",
    "dscresource",
    "experimentaction",
    "experimental",
    "experimentalfeature",
    "float",
    "guid",
    "hashtable",
    "int",
    "int16",
    "int32",
    "int64",
    "ipaddress",
    "ipendpoint",
    "long",
    "mailaddress",
    "norunspaceaffinity",
    "nullstring",
    "objectsecurity",
    "ordered",
    "outputtype",
    "parameter",
    "physicaladdress",
    "pscredential",
    "pscustomobject",
    "psdefaultvalue",
    "pslistmodifier",
    "psobject",
    "psprimitivedictionary",
    "pstypenameattribute",
    "ref",
    "regex",
    "sbyte",
    "securestring",
    "semver",
    "short",
    "single",
    "string",
    "supportswildcards",
    "switch",
    "timespan",
    "uint",
    "uint16",
    "uint32",
    "uint64",
    "ulong",
    "uri",
    "ushort",
    "validatecount",
    "validatedrive",
    "validatelength",
    "validatenotnull",
    "validatenotnullorempty",
    "validatenotnullorwhitespace",
    "validatepattern",
    "validaterange",
    "validatescript",
    "validateset",
    "validatetrusteddata",
    "validateuserdrive",
    "version",
    "void",
    "wildcardpattern",
    "x500distinguishedname",
    "x509certificate",
    "xml",
    "system.array",
    "system.boolean",
    "system.byte",
    "system.char",
    "system.datetime",
    "system.decimal",
    "system.double",
    "system.guid",
    "system.int16",
    "system.int32",
    "system.int64",
    "system.numerics.biginteger",
    "system.sbyte",
    "system.single",
    "system.string",
    "system.timespan",
    "system.uint16",
    "system.uint32",
    "system.uint64",
    "system.uri",
    "system.version",
    "system.void",
    "system.collections.hashtable",
    "system.text.regularexpressions.regex",
    "system.globalization.cultureinfo",
    "system.net.ipaddress",
    "system.net.ipendpoint",
    "system.net.mail.mailaddress",
    "system.net.networkinformation.physicaladdress",
    "system.security.securestring",
    "system.security.cryptography.x509certificates.x509certificate",
    "system.security.cryptography.x509certificates.x500distinguishedname",
    "system.xml.xmldocument",
    "system.management.automation.pscredential",
    "system.management.automation.pscustomobject",
    "system.management.automation.pslistmodifier",
    "system.management.automation.psobject",
    "system.management.automation.psprimitivedictionary",
    "system.management.automation.psreference",
    "system.management.automation.semanticversion",
    "system.management.automation.switchparameter",
    "system.management.automation.wildcardpattern",
    "system.management.automation.language.nullstring",
    "microsoft.management.infrastructure.cimclass",
    "microsoft.management.infrastructure.cimconverter",
    "microsoft.management.infrastructure.ciminstance",
    "microsoft.management.infrastructure.cimtype",
    "system.collections.specialized.ordereddictionary",
    "system.security.accesscontrol.objectsecurity",
    "object",
    "system.object",
    "microsoft.powershell.commands.modulespecification",
  ].map((e) => e.toLowerCase()),
);
function Yn(e) {
  return e
    .toLowerCase()
    .replace(/\[\]$/, "")
    .replace(/\[.*\]$/, "")
    .trim();
}
function ct(e) {
  return Kn.has(Yn(e));
}
var Nt = new Set(["pwsh", "pwsh.exe", "powershell", "powershell.exe"]);
function ut(e) {
  let t = e.toLowerCase();
  if (Nt.has(t)) return !0;
  let o = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\"));
  if (o >= 0) return Nt.has(t.slice(o + 1));
  return !1;
}
var Zn = new Set(["/", "\u2013", "\u2014", "\u2015"]);
function Me(e, t, o) {
  if (Vun(e, t, o)) return !0;
  let r = {
    ...e,
    args: e.args.map((a) =>
      a.length > 0 && Zn.has(a[0]) ? "-" + a.slice(1) : a,
    ),
  };
  return Vun(r, t, o);
}
function Xn(e) {
  if (zun(e, "Invoke-Expression"))
    return {
      behavior: "ask",
      message:
        "Command uses Invoke-Expression which can execute arbitrary code",
    };
  return { behavior: "passthrough" };
}
function Qn(e) {
  for (let t of hk(e)) {
    if (t.elementType !== "CommandAst") continue;
    let o = t.elementTypes?.[0];
    if (o !== void 0 && o !== "StringConstant")
      return {
        behavior: "ask",
        message:
          "Command name is a dynamic expression which cannot be statically validated",
      };
  }
  return { behavior: "passthrough" };
}
function Jn(e) {
  for (let t of hk(e))
    if (ut(t.name)) {
      if (Me(t, "-encodedcommand", "-e"))
        return {
          behavior: "ask",
          message: "Command uses encoded parameters which obscure intent",
        };
    }
  return { behavior: "passthrough" };
}
function es(e) {
  for (let t of hk(e))
    if (ut(t.name))
      return {
        behavior: "ask",
        message:
          "Command spawns a nested PowerShell process which cannot be validated",
      };
  return { behavior: "passthrough" };
}
var ts = new Set([
  "invoke-webrequest",
  "iwr",
  "invoke-restmethod",
  "irm",
  "new-object",
  "start-bitstransfer",
]);
function Dt(e) {
  return ts.has(e.toLowerCase());
}
function $t(e) {
  let t = e.toLowerCase();
  return t === "invoke-expression" || t === "iex";
}
function ns(e) {
  for (let o of e.statements) {
    let r = o.commands;
    if (r.length < 2) continue;
    let a = r.some((f) => Dt(f.name)),
      d = r.some((f) => $t(f.name));
    if (a && d)
      return {
        behavior: "ask",
        message: "Command downloads and executes remote code",
      };
  }
  let t = hk(e);
  if (t.some((o) => Dt(o.name)) && t.some((o) => $t(o.name)))
    return {
      behavior: "ask",
      message: "Command downloads and executes remote code",
    };
  return { behavior: "passthrough" };
}
function ss(e) {
  for (let t of hk(e)) {
    let o = t.name.toLowerCase();
    if (o === "start-bitstransfer")
      return {
        behavior: "ask",
        message: "Command downloads files via BITS transfer",
      };
    if (o === "certutil" || o === "certutil.exe") {
      if (
        t.args.some((a) => {
          let d = a.toLowerCase();
          return d === "-urlcache" || d === "/urlcache";
        })
      )
        return {
          behavior: "ask",
          message: "Command uses certutil to download from a URL",
        };
    }
    if (o === "bitsadmin" || o === "bitsadmin.exe") {
      if (t.args.some((r) => r.toLowerCase() === "/transfer"))
        return {
          behavior: "ask",
          message: "Command downloads files via BITS transfer",
        };
    }
  }
  return { behavior: "passthrough" };
}
function os(e) {
  if (zun(e, "Add-Type"))
    return { behavior: "ask", message: "Command compiles and loads .NET code" };
  return { behavior: "passthrough" };
}
function rs(e) {
  for (let t of hk(e)) {
    if (t.name.toLowerCase() !== "new-object") continue;
    if (Me(t, "-comobject", "-com"))
      return {
        behavior: "ask",
        message:
          "Command instantiates a COM object which may have execution capabilities",
      };
    let o;
    for (let r = 0; r < t.args.length; r++) {
      let a = t.args[r],
        d = a.toLowerCase();
      if (d.startsWith("-t") && d.includes(":")) {
        let f = a.indexOf(":"),
          b = d.slice(0, f);
        if ("-typename".startsWith(b)) {
          o = a.slice(f + 1);
          break;
        }
      }
      if (
        d.startsWith("-t") &&
        "-typename".startsWith(d) &&
        t.args[r + 1] !== void 0
      ) {
        o = t.args[r + 1];
        break;
      }
    }
    if (o === void 0) {
      let r = new Set(["-argumentlist", "-comobject", "-property"]),
        a = new Set(["-strict"]);
      for (let d = 0; d < t.args.length; d++) {
        let f = t.args[d];
        if (f.startsWith("-")) {
          let b = f.toLowerCase();
          if (b.startsWith("-t") && "-typename".startsWith(b)) {
            d++;
            continue;
          }
          if (b.includes(":")) continue;
          if (a.has(b)) continue;
          if (r.has(b)) {
            d++;
            continue;
          }
          continue;
        }
        o = f;
        break;
      }
    }
    if (o !== void 0 && !ct(o))
      return {
        behavior: "ask",
        message: `New-Object instantiates .NET type '${o}' outside the ConstrainedLanguage allowlist`,
      };
  }
  return { behavior: "passthrough" };
}
function as(e) {
  for (let t of hk(e)) {
    let o = t.name.toLowerCase(),
      r = G9[o]?.toLowerCase() ?? o;
    if (!eun.has(r)) continue;
    if (Me(t, "-filepath", "-f") || Me(t, "-literalpath", "-l"))
      return {
        behavior: "ask",
        message: `${t.name} -FilePath executes an arbitrary script file`,
      };
    for (let a = 0; a < t.args.length; a++) {
      let d = t.elementTypes?.[a + 1],
        f = t.args[a];
      if (d === "StringConstant" && f && !f.startsWith("-"))
        return {
          behavior: "ask",
          message: `${t.name} with positional string argument binds to -FilePath and executes a script file`,
        };
    }
  }
  return { behavior: "passthrough" };
}
function is(e) {
  for (let t of hk(e)) {
    let o = t.name.toLowerCase();
    if ((G9[o]?.toLowerCase() ?? o) !== "foreach-object") continue;
    if (Me(t, "-membername", "-m"))
      return {
        behavior: "ask",
        message:
          "ForEach-Object -MemberName invokes methods by string name which cannot be validated",
      };
    for (let a = 0; a < t.args.length; a++) {
      let d = t.elementTypes?.[a + 1],
        f = t.args[a];
      if (d === "StringConstant" && f && !f.startsWith("-"))
        return {
          behavior: "ask",
          message:
            "ForEach-Object with positional string argument binds to -MemberName and invokes methods by name",
        };
    }
  }
  return { behavior: "passthrough" };
}
function ls(e) {
  for (let t of hk(e)) {
    let o = t.name.toLowerCase();
    if (o !== "start-process" && o !== "saps" && o !== "start") continue;
    if (Me(t, "-Verb", "-v") && t.args.some((r) => r.toLowerCase() === "runas"))
      return {
        behavior: "ask",
        message: "Command requests elevated privileges",
      };
    if (t.children)
      for (let r = 0; r < t.args.length; r++) {
        let a = tw(t.args[r].replace(/`[\r\n]+\s*/g, ""));
        if (!/^[-\u2013\u2014\u2015/]v[a-z]*:/i.test(a)) continue;
        let d = t.children[r];
        if (!d) continue;
        for (let f of d)
          if (
            tw(f.text)
              .replace(/['"\u2018-\u201F\s]/g, "")
              .toLowerCase() === "runas"
          )
            return {
              behavior: "ask",
              message: "Command requests elevated privileges",
            };
      }
    if (
      t.args.some((r) => {
        let a = tw(r.replace(/`[\r\n]+\s*/g, ""));
        return /^[-\u2013\u2014\u2015/]v[a-z]*:['"` \u2018-\u201f]*runas['"` \u2018-\u201f]*$/i.test(
          a,
        );
      })
    )
      return {
        behavior: "ask",
        message: "Command requests elevated privileges",
      };
    for (let r of t.args) {
      let a = Fv(r);
      if (ut(a))
        return {
          behavior: "ask",
          message:
            "Start-Process launches a nested PowerShell process which cannot be validated",
        };
    }
  }
  return { behavior: "passthrough" };
}
var Ft = new Set([
  "where-object",
  "sort-object",
  "select-object",
  "group-object",
  "format-table",
  "format-list",
  "format-wide",
  "format-custom",
]);
function cs(e) {
  if (!PF(e).hasScriptBlocks) return { behavior: "passthrough" };
  for (let r of hk(e)) {
    let a = r.name.toLowerCase();
    if (tun.has(a))
      return {
        behavior: "ask",
        message:
          "Command contains script block with dangerous cmdlet that may execute arbitrary code",
      };
  }
  if (
    hk(e).every((r) => {
      let a = r.name.toLowerCase();
      if (Ft.has(a)) return !0;
      let d = G9[a];
      if (d && Ft.has(d.toLowerCase())) return !0;
      return !1;
    })
  )
    return { behavior: "passthrough" };
  return {
    behavior: "ask",
    message: "Command contains script block that may execute arbitrary code",
  };
}
function us(e) {
  if (PF(e).hasSubExpressions)
    return { behavior: "ask", message: "Command contains subexpressions $()" };
  return { behavior: "passthrough" };
}
function ds(e) {
  if (PF(e).hasExpandableStrings)
    return {
      behavior: "ask",
      message: "Command contains expandable strings with embedded expressions",
    };
  return { behavior: "passthrough" };
}
function ms(e) {
  if (PF(e).hasSplatting)
    return { behavior: "ask", message: "Command uses splatting (@variable)" };
  return { behavior: "passthrough" };
}
function ps(e) {
  if (PF(e).hasStopParsing)
    return {
      behavior: "ask",
      message: "Command uses stop-parsing token (--%)",
    };
  return { behavior: "passthrough" };
}
function hs(e) {
  if (PF(e).hasMemberInvocations)
    return { behavior: "ask", message: "Command invokes .NET methods" };
  return { behavior: "passthrough" };
}
function fs(e) {
  for (let t of e.typeLiterals ?? [])
    if (!ct(t))
      return {
        behavior: "ask",
        message: `Command uses .NET type [${t}] outside the ConstrainedLanguage allowlist`,
      };
  return { behavior: "passthrough" };
}
function gs(e) {
  for (let t of hk(e)) {
    let o = t.name.toLowerCase();
    if (o === "invoke-item" || o === "ii")
      return {
        behavior: "ask",
        message:
          "Invoke-Item opens files with the default handler (ShellExecute). On executable files this runs arbitrary code.",
      };
  }
  return { behavior: "passthrough" };
}
var ws = new Set([
  "register-scheduledtask",
  "new-scheduledtask",
  "new-scheduledtaskaction",
  "set-scheduledtask",
]);
function bs(e) {
  for (let t of hk(e)) {
    let o = t.name.toLowerCase();
    if (ws.has(o))
      return {
        behavior: "ask",
        message: `${t.name} creates or modifies a scheduled task (persistence primitive)`,
      };
    if (o === "schtasks" || o === "schtasks.exe") {
      if (
        t.args.some((r) => {
          let a = r.toLowerCase();
          return (
            a === "/create" ||
            a === "/change" ||
            a === "-create" ||
            a === "-change"
          );
        })
      )
        return {
          behavior: "ask",
          message:
            "schtasks with create/change modifies scheduled tasks (persistence primitive)",
        };
    }
  }
  return { behavior: "passthrough" };
}
var ys = new Set([
  "set-item",
  "si",
  "new-item",
  "ni",
  "remove-item",
  "ri",
  "del",
  "rm",
  "rd",
  "rmdir",
  "erase",
  "clear-item",
  "cli",
  "set-content",
  "add-content",
  "ac",
]);
function vs(e) {
  let t = UGn(e, "env");
  if (t.length === 0) return { behavior: "passthrough" };
  for (let o of hk(e))
    if (ys.has(o.name.toLowerCase()))
      return {
        behavior: "ask",
        message: "Command modifies environment variables",
      };
  if (PF(e).hasAssignments && t.length > 0)
    return {
      behavior: "ask",
      message: "Command modifies environment variables",
    };
  return { behavior: "passthrough" };
}
function Ss(e) {
  for (let t of hk(e)) {
    let o = t.name.toLowerCase();
    if (nun.has(o))
      return {
        behavior: "ask",
        message:
          "Command loads, installs, or downloads a PowerShell module or script, which can execute arbitrary code",
      };
  }
  return { behavior: "passthrough" };
}
var Ps = new Set([
  "set-alias",
  "sal",
  "new-alias",
  "nal",
  "set-variable",
  "sv",
  "new-variable",
  "nv",
]);
function ks(e) {
  for (let t of hk(e)) {
    let o = t.name.toLowerCase(),
      r = o.includes("\\") ? o.slice(o.lastIndexOf("\\") + 1) : o;
    if (Ps.has(r))
      return {
        behavior: "ask",
        message:
          "Command creates or modifies an alias or variable that can affect future command resolution",
      };
  }
  return { behavior: "passthrough" };
}
var Rs = new Set(["invoke-wmimethod", "iwmi", "invoke-cimmethod", "icim"]);
function Cs(e) {
  for (let t of hk(e)) {
    let o = t.name.toLowerCase();
    if (Rs.has(o))
      return {
        behavior: "ask",
        message: `${t.name} can spawn arbitrary processes via WMI/CIM (Win32_Process Create)`,
      };
    let r = Math.max(o.lastIndexOf("/"), o.lastIndexOf("\\")),
      a = r >= 0 ? o.slice(r + 1) : o;
    if (a === "wmic" || a === "wmic.exe")
      return {
        behavior: "ask",
        message:
          "wmic can spawn arbitrary processes (process call create), execute scripts (/format, /translate XSL), or write arbitrary files (/output, /append, /record) via WMI",
      };
  }
  return { behavior: "passthrough" };
}
function Vt(e, t) {
  if (!t.valid)
    return {
      behavior: "ask",
      message: "Could not parse command for security analysis",
    };
  let o = [
    Xn,
    Qn,
    Jn,
    es,
    ns,
    ss,
    os,
    rs,
    as,
    gs,
    bs,
    is,
    ls,
    cs,
    us,
    ds,
    ms,
    ps,
    hs,
    fs,
    vs,
    Ss,
    ks,
    Cs,
  ];
  for (let r of o) {
    let a = r(t);
    if (a.behavior === "ask") return a;
  }
  return { behavior: "passthrough" };
}
var mt = new Set([
    "new-item",
    "set-content",
    "add-content",
    "out-file",
    "copy-item",
    "move-item",
    "rename-item",
    "expand-archive",
    "invoke-webrequest",
    "invoke-restmethod",
    "tee-object",
    "export-csv",
    "export-clixml",
  ]),
  xs = new Set([
    "tar",
    "tar.exe",
    "bsdtar",
    "bsdtar.exe",
    "unzip",
    "unzip.exe",
    "7z",
    "7z.exe",
    "7za",
    "7za.exe",
    "gzip",
    "gzip.exe",
    "gunzip",
    "gunzip.exe",
    "expand-archive",
  ]),
  _s = new Set(["xcopy", "xcopy.exe", "robocopy", "robocopy.exe"]);
function Es(e) {
  let t = e.name.toLowerCase(),
    o = t.slice(Math.max(t.lastIndexOf("\\"), t.lastIndexOf("/")) + 1);
  return _s.has(o);
}
async function Wt(e) {
  let t = e.trim();
  if (!t) return "";
  let o = await kwe(t);
  return qun(o)[0] ?? "";
}
function zt(e) {
  return uEt(e);
}
function jt(e) {
  let t = e.trimStart(),
    o = t[0];
  if (o === '"' || o === "'") {
    let r = t.indexOf(o, 1),
      a = r === -1 ? t.length : r + 1;
    return t.slice(0, a).toLowerCase();
  }
  return (t.split(/\s+/)[0] ?? "").toLowerCase();
}
function We(e) {
  return e.trim().replace(/^[\s\u0085\u180e]+|[\s\u0085\u180e]+$/g, "");
}
function qt(e) {
  let t = e,
    o = t.match(/^[\s\u0085\u180e]+/);
  if (o && /[\u0085\u180e]/.test(o[0])) t = t.slice(o[0].length);
  let r = t.match(/[\s\u0085\u180e]+$/);
  if (r && /[\u0085\u180e]/.test(r[0])) t = t.slice(0, t.length - r[0].length);
  return t;
}
function Ke(e) {
  let t = e,
    o = t.match(/^[\s\u0085\u180e]+/);
  if (o && /[\u0085\u180e]/.test(o[0]))
    t = o[0].replace(/[\u0085\u180e]/g, "") + t.slice(o[0].length);
  let r = t.match(/[\s\u0085\u180e]+$/);
  if (r && /[\u0085\u180e]/.test(r[0]))
    t =
      t.slice(0, t.length - r[0].length) + r[0].replace(/[\u0085\u180e]/g, "");
  return t;
}
function _e(e) {
  if (
    e.includes(`
`) ||
    e.includes("*")
  )
    return [];
  return dEt(Ut, We(e));
}
function pt(e, t, o, r) {
  let a = We(e.command);
  function d(_, w) {
    return _.toLowerCase() === w.toLowerCase();
  }
  function f(_, w) {
    return _.toLowerCase().startsWith(w.toLowerCase());
  }
  function b(_) {
    if (r === "allow") return _;
    return uUt(_);
  }
  let p = a.split(Swe)[0] ?? "",
    I = uUt(p),
    x = Ef(I),
    y = a.slice(p.length).replace(/^[\s\u0085\u180e]+/, " "),
    L = x + y;
  return Array.from(t.entries())
    .filter(([_]) => {
      let w = zt(Ke(_)),
        C =
          w.type === "exact"
            ? { ...w, command: qt(_) }
            : w.type === "prefix"
              ? { ...w, prefix: Ke(w.prefix) }
              : w.type === "wildcard"
                ? { ...w, pattern: Ke(w.pattern) }
                : w;
      function A(F) {
        switch (C.type) {
          case "exact":
            return d(C.command, F);
          case "prefix":
            switch (o) {
              case "exact":
                return d(C.prefix, F);
              case "prefix": {
                if (d(F, C.prefix)) return !0;
                return f(F, C.prefix + " ");
              }
            }
            break;
          case "wildcard":
            if (o === "exact") return !1;
            return Qj(C.pattern, F, !0, !0);
        }
      }
      if (A(a)) return !0;
      if (A(L)) return !0;
      if (C.type === "exact") {
        let F = C.command.split(Swe)[0] ?? "";
        if (Ef(b(F)) === x) {
          let W = C.command.slice(F.length).replace(/^[\s\u0085\u180e]+/, " ");
          if (d(W, y)) return !0;
        }
      } else if (C.type === "prefix") {
        let F = C.prefix.split(Swe)[0] ?? "";
        if (Ef(b(F)) === x) {
          let W = C.prefix.slice(F.length).replace(/^[\s\u0085\u180e]+/, " "),
            E = x + W;
          if (o === "exact") {
            if (d(E, L)) return !0;
          } else if (d(L, E) || f(L, E + " ")) return !0;
        }
      } else if (C.type === "wildcard") {
        let F = C.pattern.split(Swe)[0] ?? "";
        if (Ef(b(F)) === x && o !== "exact") {
          let W = C.pattern.slice(F.length).replace(/^[\s\u0085\u180e]+/, " "),
            E = x + W;
          if (Qj(E, L, !0, !0)) return !0;
        }
      }
      return !1;
    })
    .map(([, _]) => _);
}
function Ae(e, t, o) {
  let r = ah(t, Ut, "deny"),
    a = pt(e, r, o, "deny"),
    d = ah(t, Ut, "ask"),
    f = pt(e, d, o, "ask"),
    b = ah(t, Ut, "allow"),
    p = pt(e, b, o, "allow");
  return { matchingDenyRules: a, matchingAskRules: f, matchingAllowRules: p };
}
function Ht(e, t) {
  let o = We(e.command),
    r = { ...e, command: o },
    {
      matchingDenyRules: a,
      matchingAskRules: d,
      matchingAllowRules: f,
    } = Ae(r, t, "exact");
  if (a[0] !== void 0)
    return {
      behavior: "deny",
      message: `Permission to use ${Ut} with command ${o} has been denied.`,
      decisionReason: { type: "rule", rule: a[0] },
    };
  if (d[0] !== void 0)
    return {
      behavior: "ask",
      message: createPermissionRequestMessage(Ut),
      decisionReason: { type: "rule", rule: d[0] },
    };
  if (f[0] !== void 0)
    return {
      behavior: "allow",
      updatedInput: e,
      decisionReason: { type: "rule", rule: f[0] },
    };
  let b = { type: "other", reason: "This command requires approval" };
  return {
    behavior: "passthrough",
    message: createPermissionRequestMessage(Ut, b),
    decisionReason: b,
    suggestions: _e(o),
  };
}
function As(e, t) {
  let o = We(e.command),
    r = { ...e, command: o },
    a = Ht(e, t);
  if (a.behavior === "deny" || a.behavior === "ask") return a;
  let {
    matchingDenyRules: d,
    matchingAskRules: f,
    matchingAllowRules: b,
  } = Ae(r, t, "prefix");
  if (d[0] !== void 0)
    return {
      behavior: "deny",
      message: `Permission to use ${Ut} with command ${o} has been denied.`,
      decisionReason: { type: "rule", rule: d[0] },
    };
  if (f[0] !== void 0)
    return {
      behavior: "ask",
      message: createPermissionRequestMessage(Ut),
      decisionReason: { type: "rule", rule: f[0] },
    };
  if (a.behavior === "allow") return a;
  if (b[0] !== void 0)
    return {
      behavior: "allow",
      updatedInput: e,
      decisionReason: { type: "rule", rule: b[0] },
    };
  let p = { type: "other", reason: "This command requires approval" };
  return {
    behavior: "passthrough",
    message: createPermissionRequestMessage(Ut, p),
    decisionReason: p,
    suggestions: _e(o),
  };
}
async function Os(e, t) {
  if (!e.valid)
    return [
      {
        text: t,
        element: {
          name: await Wt(t),
          nameType: "unknown",
          elementType: "CommandAst",
          args: [],
          text: t,
        },
        statement: null,
        isSafeOutput: !1,
      },
    ];
  let o = [];
  for (let r of e.statements) {
    for (let a of r.commands) {
      if (a.elementType !== "CommandAst") continue;
      o.push({
        text: a.text,
        element: a,
        statement: r,
        isSafeOutput:
          a.nameType !== "application" && OOe(a.name) && a.args.length === 0,
      });
    }
    if (r.nestedCommands)
      for (let a of r.nestedCommands)
        o.push({
          text: a.text,
          element: a,
          statement: r,
          isSafeOutput:
            a.nameType !== "application" && OOe(a.name) && a.args.length === 0,
        });
  }
  if (o.length > 0) return o;
  return [
    {
      text: t,
      element: {
        name: await Wt(t),
        nameType: "unknown",
        elementType: "CommandAst",
        args: [],
        text: t,
      },
      statement: null,
      isSafeOutput: !1,
    },
  ];
}
async function Gt(e, t) {
  let o = getToolPermissionContext(t);
  if (o.bashCommandClamps !== void 0 && o.bashCommandClamps.length > 0)
    return {
      behavior: "deny",
      message:
        "Permission to use PowerShell has been denied: this agent carries a per-spawn bashCommandClamp, which scopes shell execution to a " +
        "fixed set of Bash command forms \u2014 PowerShell commands cannot " +
        "match them. Use the clamped Bash forms instead.",
      decisionReason: { type: "other", reason: BASH_COMMAND_CLAMP_DENY_REASON },
    };
  return Is(e, t, o);
}
function Kt(e) {
  let t = getToolPermissionContext(e).bashCommandClamps;
  if (t !== void 0 && t.length > 0)
    return {
      behavior: "deny",
      message:
        "The PowerShell permission check crashed and this agent carries a per-spawn bashCommandClamp; denying rather than running an unverified command.",
      decisionReason: { type: "other", reason: BASH_COMMAND_CLAMP_CRASH_REASON },
    };
  return;
}
async function Is(e, t, o) {
  let r = We(e.command),
    a = { ...e, command: r };
  if (!r)
    return {
      behavior: "allow",
      updatedInput: e,
      decisionReason: { type: "other", reason: "Empty command is safe" },
    };
  let d = await kwe(r),
    f = Ht(e, o);
  if (f.behavior === "deny") return f;
  let { matchingDenyRules: b, matchingAskRules: p } = Ae(a, o, "prefix");
  if (b[0] !== void 0)
    return {
      behavior: "deny",
      message: `Permission to use ${Ut} with command ${r} has been denied.`,
      decisionReason: { type: "rule", rule: b[0] },
    };
  let I = null;
  if (p[0] !== void 0)
    I = {
      behavior: "ask",
      message: createPermissionRequestMessage(Ut),
      decisionReason: { type: "rule", rule: p[0] },
    };
  if (I === null && Q_(r))
    I = {
      behavior: "ask",
      message:
        "Command contains a UNC path that could trigger network requests",
    };
  if (
    f.behavior === "allow" &&
    !d.valid &&
    I === null &&
    Gun(r.split(Swe)[0] ?? "") !== "application"
  )
    return f;
  if (!d.valid) {
    let v = tw(r.replace(/<#[\s\S]*?#>/g, " ").replace(/`[\r\n]+\s*/g, "")),
      N = !1,
      V,
      K;
    for (let Z of v.split(/[;|\n\r{}()&]+/)) {
      let ue = Z.trim();
      if (!ue) continue;
      let X = ue.split(Swe);
      for (let we = 0; we < X.length; we++) {
        let ke = X[we],
          Se = Fv(ke);
        if (!Se) continue;
        if (V === void 0 && !wO.has(ke[0] ?? "") && $e(ke)) V = ke;
        if (Ef(Se) === "remove-item") {
          N = !0;
          for (let me of X.slice(we + 1)) {
            if (wO.has(me[0] ?? "")) continue;
            if ($e(me)) return Re(me);
          }
        }
        for (let me of new Set([Se, yM(ke), S2(ke)])) {
          let en = [me, ...X.slice(we + 1)].join(" "),
            { matchingDenyRules: ht, matchingAskRules: tn } = Ae(
              { command: en },
              o,
              "prefix",
            );
          if (ht[0] !== void 0)
            return {
              behavior: "deny",
              message: `Permission to use ${Ut} with command ${r} has been denied.`,
              decisionReason: { type: "rule", rule: ht[0] },
            };
          K ??= tn[0];
        }
      }
    }
    if (N && V !== void 0) return Re(V);
    let U = (Z) =>
      K !== void 0 && Z.behavior === "ask" && !carriesAskRuleIntent(Z)
        ? { ...Z, matchedAskRule: K }
        : Z;
    if (I !== null) return U(I);
    if (o.blockReadsOutsideWorkingDirectories === !0)
      return outsideReadsTooComplexAsk(
        `Command contains malformed syntax that cannot be parsed: ${d.errors[0]?.message ?? "unknown error"}`,
      );
    let ne = {
        type: "other",
        reason: `Command contains malformed syntax that cannot be parsed: ${d.errors[0]?.message ?? "unknown error"}`,
      },
      D = { behavior: "ask", decisionReason: ne, message: createPermissionRequestMessage(Ut, ne) };
    return U({
      ...D,
      decisionReason: { type: "subcommandResults", reasons: new Map([[r, D]]) },
    });
  }
  let x = await Os(d, r),
    y = [];
  if (I !== null) y.push(I);
  let L = Vt(r, d);
  if (L.behavior !== "passthrough")
    if (o.blockReadsOutsideWorkingDirectories === !0) y.push(outsideReadsTooComplexAsk(L.message));
    else {
      let v = { type: "other", reason: L.message };
      y.push({
        behavior: "ask",
        message: createPermissionRequestMessage(Ut, v),
        decisionReason: v,
        suggestions: _e(r),
      });
    }
  if (d.hasUsingStatements) {
    let v = {
      type: "other",
      reason:
        "Command contains a `using` statement that may load external code (module or assembly)",
    };
    y.push({
      behavior: "ask",
      message: createPermissionRequestMessage(Ut, v),
      decisionReason: v,
      suggestions: _e(r),
    });
  }
  if (d.hasScriptRequirements) {
    let v = {
      type: "other",
      reason:
        "Command contains a `#Requires` directive that may trigger module loading",
    };
    y.push({
      behavior: "ask",
      message: createPermissionRequestMessage(Ut, v),
      decisionReason: v,
      suggestions: _e(r),
    });
  }
  if (d.hasBackgroundJob) {
    let v = {
      type: "other",
      reason:
        "Command uses the background job operator (`&`) which spawns a child PowerShell process",
    };
    y.push({
      behavior: "ask",
      message: createPermissionRequestMessage(Ut, v),
      decisionReason: v,
      suggestions: _e(r),
    });
  }
  let _ =
    /^(?:[\w.]+\\)?(env|hklm|hkcu|function|alias|variable|cert|wsman|registry)::?/i;
  function w(v) {
    let N = v;
    if (N.length > 0 && (wO.has(N[0]) || N[0] === "/")) {
      let V = N.indexOf(":", 1);
      if (V > 0 && (N[0] !== "/" || /^\/[A-Za-z]{1,2}:/.test(N)))
        N = N.substring(V + 1);
    }
    return tw(N.replace(/`[\r\n]+\s*/g, ""));
  }
  function C(v) {
    let N = w(v);
    if (_.test(N))
      return {
        behavior: "ask",
        message: `Command argument '${v}' uses a non-filesystem provider path and requires approval`,
      };
    if (Q_(N, !0))
      return {
        behavior: "ask",
        message: `Command argument '${v}' contains a UNC path that could trigger network requests`,
      };
    if (getCurrentPlatform() === "windows" && /(?<!:)[\\/]{2,}[^ \t\r\n\f\v\\/]/.test(N))
      return {
        behavior: "ask",
        message: `Command argument '${v}' contains a UNC path that could trigger network requests`,
      };
    return null;
  }
  e: for (let v of d.statements) {
    for (let N of v.commands) {
      if (N.elementType !== "CommandAst") continue;
      for (let V of N.args) {
        let K = C(V);
        if (K !== null) {
          y.push(K);
          break e;
        }
      }
    }
    if (v.nestedCommands)
      for (let N of v.nestedCommands)
        for (let V of N.args) {
          let K = C(V);
          if (K !== null) {
            y.push(K);
            break e;
          }
        }
  }
  for (let { text: v, element: N } of x) {
    let V = N.name !== "" ? [N.name, ...N.args].join(" ") : null,
      K = { command: v },
      { matchingDenyRules: U, matchingAskRules: ne } = Ae(K, o, "prefix"),
      D = U[0],
      Z = ne[0];
    if (D === void 0 && V !== null) {
      let { matchingDenyRules: ue, matchingAskRules: X } = Ae(
        { command: V },
        o,
        "prefix",
      );
      if (((D = ue[0]), Z === void 0)) Z = X[0];
    }
    if (D !== void 0)
      y.push({
        behavior: "deny",
        message: `Permission to use ${Ut} with command ${r} has been denied.`,
        decisionReason: { type: "rule", rule: D },
      });
    else if (Z !== void 0)
      y.push({
        behavior: "ask",
        message: createPermissionRequestMessage(Ut),
        decisionReason: { type: "rule", rule: Z },
      });
  }
  let A = x.length > 1 && x.some(({ element: v }) => xft(v.name)),
    F = x.some(({ element: v }) => nt(v)),
    j = x.some(({ element: v }) => Ef(v.name) === "git");
  if (A && j)
    y.push({
      behavior: "ask",
      message:
        "Compound commands with cd/Set-Location and git require approval to prevent bare repository attacks",
    });
  let W = j && isCurrentDirectoryBareGitRepo();
  if (W)
    y.push({
      behavior: "ask",
      message:
        W === "bare-indicators"
          ? "Git command in a directory with bare-repo indicators (HEAD/objects/refs outside a .git/ directory). Git may treat it as a git dir and run config/hooks from here."
          : "The .git file or symlink here redirects to a location that cannot be verified as safe (it may have been planted by an untrusted archive). Git commands need approval.",
    });
  if (j) {
    let v = x.some(({ element: K, statement: U }) => {
        for (let D of K.redirections ?? []) if (Le(D.target)) return !0;
        let ne = Ef(K.name);
        if (!mt.has(ne)) return !1;
        if (K.args.flatMap(Ue).some((D) => Le(D))) return !0;
        if (ne === "copy-item" || ne === "move-item") {
          let D = U === null ? -1 : U.commands.indexOf(K),
            Z = U !== null && (D > 0 || (D === -1 && U.commands.length > 1));
          if (Ot(K.args, Z)) return !0;
        }
        if (U !== null)
          for (let D of U.commands) {
            if (D.elementType === "CommandAst") continue;
            if (Le(D.text)) return !0;
          }
        return !1;
      }),
      N = Xft(d).some((K) => Le(K.target));
    if (v || N)
      y.push({
        behavior: "ask",
        message:
          "Command writes to a git-internal path (HEAD, objects/, refs/, hooks/, .git/) and runs git. This could plant a malicious hook that git then executes.",
      });
    if (x.some(({ element: K }) => Es(K)))
      y.push({
        behavior: "ask",
        message:
          "Compound command runs a native file copier (xcopy/robocopy) and git. The copier can place files at git-internal paths (HEAD, objects/, refs/) that git then treats as repository state.",
      });
  }
  if (getCurrentPlatform() === "windows" && x.length > 1) {
    let v = new Set();
    for (let V of Xft(d)) for (let K of H$t(V.target)) v.add(K);
    let N = null;
    for (let { element: V } of x) {
      if (
        I$t(V.name).some(
          ({ base: U, stem: ne }) =>
            (ne !== "" && v.has(ne)) || (U !== ne && v.has(U)),
        )
      ) {
        N = V.name;
        break;
      }
      for (let U of V.redirections ?? [])
        for (let ne of H$t(U.target)) v.add(ne);
      let K = Ef(V.name);
      if (mt.has(K))
        for (let U of V.args.flatMap(Ue)) {
          let ne = U.replace(/^[-\u2013\u2014\u2015]+[A-Za-z]+:?/, ""),
            D = RF(ne);
          if (Fv(D) !== "") for (let Z of H$t(D)) v.add(Z);
        }
    }
    if (N !== null)
      y.push({
        behavior: "ask",
        message: `An earlier sub-command writes a file (./${N}.*) that would shadow the later \`${N}\` command under Windows PowerShell 5.1 cwd-first resolution.`,
      });
  }
  if (
    x.some(({ element: v }) => {
      let N = v.name.toLowerCase(),
        V = N.slice(Math.max(N.lastIndexOf("\\"), N.lastIndexOf("/")) + 1);
      return xs.has(V);
    }) &&
    x.length > 1
  )
    y.push({
      behavior: "ask",
      message: j
        ? "Compound command extracts an archive and runs git. Archive contents may plant bare-repository indicators (HEAD, hooks/, refs/) that git then treats as the repository root."
        : "Compound command extracts an archive followed by other commands. Archive contents (symlinks, config files) cannot be validated and may redirect subsequent path operations.",
    });
  if (
    x.some(({ element: N }) => {
      for (let K of N.redirections ?? []) if (qe(K.target)) return !0;
      let V = Ef(N.name);
      if (!mt.has(V)) return !1;
      return N.args.flatMap(Ue).some(qe);
    }) ||
    Xft(d).some((N) => qe(N.target))
  )
    y.push({
      behavior: "ask",
      message:
        "Command writes to .git/ \u2014 hooks or config planted there execute on the next git operation.",
    });
  let z = Mt(a, d, o, A);
  if (z.behavior !== "passthrough") y.push(z);
  let B =
      f.behavior === "allow" && f.decisionReason?.type === "rule"
        ? f.decisionReason.rule.ruleValue.ruleContent
        : void 0,
    q = B !== void 0 && qt(B).trim().toLowerCase() === r.toLowerCase();
  if (
    f.behavior === "allow" &&
    x[0] !== void 0 &&
    (q ||
      x.every(
        (v) => v.element.nameType !== "application" && !gk(v.text, v.element),
      ))
  )
    y.push(f);
  if (P$t(r, d))
    y.push({
      behavior: "allow",
      updatedInput: e,
      decisionReason: {
        type: "other",
        reason: "Command is read-only and safe to execute",
      },
    });
  if (Xft(d).length > 0)
    y.push({
      behavior: "ask",
      message:
        "Command contains file redirections that could write to arbitrary paths",
      suggestions: _e(r),
    });
  let J = ot(a, d, o);
  if (J.behavior !== "passthrough") y.push(J);
  let se = y.find((v) => v.behavior === "deny");
  if (se !== void 0) return se;
  let ee =
    y.find((v) => v.behavior === "ask" && isOutsideReadsBlockedAsk(v.decisionReason)) ??
    y.find((v) => v.behavior === "ask");
  if (ee !== void 0) {
    let v = {
      ...ee,
      decisionReason: {
        type: "subcommandResults",
        reasons: new Map([[r, ee]]),
      },
    };
    if (!carriesAskRuleIntent(v)) {
      for (let N of y)
        if (
          N.behavior === "ask" &&
          N.decisionReason?.type === "rule" &&
          N.decisionReason.rule.ruleBehavior === "ask"
        )
          return { ...v, matchedAskRule: N.decisionReason.rule };
    }
    return v;
  }
  let oe = y.find((v) => v.behavior === "allow");
  if (oe !== void 0) return oe;
  let fe = x.filter(({ element: v, isSafeOutput: N }) => {
      if (N) return !1;
      if (v.nameType === "application") return !0;
      if (Ef(v.name) === "set-location" && v.args.length > 0) {
        let K = v.args.find((U) => U.length === 0 || !wO.has(U[0]));
        if (K && Ts(getCwd(), K) === getCwd()) return !1;
      }
      return !0;
    }),
    ye = (v) => {
      if (v.nameType === "application") return null;
      let N = v.name.toLowerCase(),
        V = Ef(N),
        K = V.indexOf("-");
      return V !== N || (K > 0 && mGn.has(V.slice(0, K))) ? "full" : "exact";
    },
    re = [],
    de = new Set(),
    pe = new Set();
  for (let { text: v, element: N, statement: V } of fe) {
    let K = { command: v },
      U = As(K, o);
    if (U.behavior === "deny")
      return {
        behavior: "deny",
        message: `Permission to use ${Ut} with command ${r} has been denied.`,
        decisionReason: U.decisionReason,
      };
    if (U.behavior === "ask") {
      if (V !== null) pe.add(V);
      re.push(v);
      continue;
    }
    let ne = !1;
    if (U.behavior === "allow" && N.nameType === "application") {
      let D = N.name.toLowerCase(),
        Z = yM(jt(v)).toLowerCase();
      if (D.length > 0 && Z === D)
        ne = Ae(K, o, "prefix").matchingAllowRules.some((ue) => {
          let X = zt(Ke(ue.ruleValue.ruleContent ?? "")),
            we =
              X.type === "exact"
                ? X.command
                : X.type === "prefix"
                  ? X.prefix
                  : X.pattern;
          return yM(jt(we)).toLowerCase() === D;
        });
    }
    if (U.behavior === "allow" && (N.nameType !== "application" || ne) && !F) {
      if (gk(v, N)) {
        if (V !== null) pe.add(V);
        (re.push(v), de.add(v));
        continue;
      }
      let D = ye(N);
      if (
        D !== null &&
        (LOe(N.args, N.elementTypes, D) || DOe(N.args, N.elementTypes, D))
      ) {
        if (V !== null) pe.add(V);
        (re.push(v), de.add(v));
        continue;
      }
      continue;
    }
    if (U.behavior === "allow") {
      if (V !== null) pe.add(V);
      re.push(v);
      continue;
    }
    if (V !== null && !A && !F && Zcn(V) && bwe(N, v)) continue;
    if (V !== null && !A && !F) {
      if (
        ot(
          { command: v },
          {
            valid: !0,
            errors: [],
            variables: d.variables,
            hasStopParsing: d.hasStopParsing,
            originalCommand: v,
            statements: [V],
          },
          o,
        ).behavior === "allow"
      )
        continue;
    }
    if (V !== null) pe.add(V);
    re.push(v);
    {
      let D = ye(N);
      if (
        D !== null &&
        (LOe(N.args, N.elementTypes, D) || DOe(N.args, N.elementTypes, D))
      )
        de.add(v);
    }
  }
  let Y = new Set(),
    le = new Set(re);
  for (let v of d.statements)
    if (!Zcn(v) && !pe.has(v) && !le.has(v.text))
      (re.push(v.text), le.add(v.text), Y.add(v.text));
  if (re.length === 0) {
    if (PF(d).hasScriptBlocks) {
      let v = {
        behavior: "ask",
        message: createPermissionRequestMessage(Ut),
        decisionReason: {
          type: "other",
          reason:
            "Pipeline consists of output-formatting cmdlets with script blocks \u2014 block content cannot be verified",
        },
      };
      return {
        ...v,
        decisionReason: {
          type: "subcommandResults",
          reasons: new Map([[r, v]]),
        },
      };
    }
    return {
      behavior: "allow",
      updatedInput: e,
      decisionReason: {
        type: "other",
        reason: "All pipeline commands are individually allowed",
      },
    };
  }
  let te = { type: "other", reason: "This command requires approval" },
    Te = [];
  for (let v of re) {
    if (Y.has(v) && v !== r) continue;
    if (de.has(v) && v !== r) continue;
    Te.push(..._e(v));
  }
  let ve = {
    behavior: "passthrough",
    message: createPermissionRequestMessage(Ut, te),
    decisionReason: te,
    suggestions: Te,
  };
  return {
    ...ve,
    decisionReason: { type: "subcommandResults", reasons: new Map([[r, ve]]) },
  };
}
function Ye() {
  return Fwe();
}
function Be() {
  return x4e();
}
function Ls() {
  if (areBackgroundTasksDisabled()) return null;
  return "  - You can use the `run_in_background` parameter to run the command in the background. Only use this if you don't need the result immediately and are OK being notified when the command completes later. You do not need to check the output right away - you'll be notified when it finishes.";
}
function Ms() {
  if (areBackgroundTasksDisabled()) return null;
  return "  - Avoid unnecessary `Start-Sleep` commands:\n    - Do not sleep between commands that can run immediately \u2014 just run them.\n    - If your command is long running and you would like to be notified when it finishes \u2014 simply run your command using `run_in_background`. There is no need to sleep in this case.\n    - Do not retry failing commands in a sleep loop \u2014 diagnose the root cause or consider an alternative approach.\n    - If waiting for a background task you started with `run_in_background`, you will be notified when it completes \u2014 do not poll.\n    - If you must poll an external process, use a check command rather than sleeping first.\n    - If you must sleep, keep the duration short to avoid blocking the user.";
}
function Ns(e) {
  if (e === "desktop")
    return "PowerShell edition: Windows PowerShell 5.1 (powershell.exe)\n   - Pipeline chain operators `&&` and `||` are NOT available \u2014 they cause a parser error. To run B only if A succeeds: `A; if ($?) { B }`. To chain unconditionally: `A; B`.\n   - Ternary (`?:`), null-coalescing (`??`), and null-conditional (`?.`) operators are NOT available. Use `if/else` and explicit `$null -eq` checks instead.\n   - Avoid `2>&1` on native executables. In 5.1, redirecting a native command's stderr inside PowerShell wraps each line in an ErrorRecord (NativeCommandError) and sets `$?` to `$false` even when the exe returned exit code 0. stderr is already captured for you \u2014 don't redirect it.\n   - `>`, `>>`, and `Out-File` usually default to UTF-8 (with BOM) in this environment, but `Set-Content`/`Add-Content` still default to the system ANSI codepage \u2014 when writing a file other tools will read, pass `-Encoding utf8` explicitly to `Out-File`/`Set-Content`.\n   - `ConvertFrom-Json` returns a PSCustomObject, not a hashtable. `-AsHashtable` is not available.";
  if (e === "core")
    return "PowerShell edition: PowerShell 7+ (pwsh)\n   - Pipeline chain operators `&&` and `||` ARE available and work like bash. Prefer `cmd1 && cmd2` over `cmd1; cmd2` when cmd2 should only run if cmd1 succeeds.\n   - Ternary (`$cond ? $a : $b`), null-coalescing (`??`), and null-conditional (`?.`) operators are available.\n   - Default file encoding is UTF-8 without BOM.";
  return "PowerShell edition: unknown \u2014 assume Windows PowerShell 5.1 for compatibility\n   - Do NOT use `&&`, `||`, ternary `?:`, null-coalescing `??`, or null-conditional `?.`. These are PowerShell 7+ only and parser-error on 5.1.\n   - To chain commands conditionally: `A; if ($?) { B }`. Unconditionally: `A; B`.";
}
async function Yt() {
  let e = Ls(),
    t = Ms(),
    o = await Vft(),
    r = H("tengu_brass_sled", !1) ? await dur() : [],
    a =
      getCurrentPlatform() === "windows"
        ? "\n   - Exception: the MSVC toolchain (`cl`, `nmake`, `msbuild`) is only on PATH inside a Visual Studio developer shell, so it may be installed even if not listed. Environment changes do NOT persist between commands, so initialize and build in ONE command: `cmd /c '\"C:\\Program Files\\Microsoft Visual Studio\\<year>\\<edition>\\VC\\Auxiliary\\Build\\vcvarsall.bat\" x64 && <build command>'`"
        : "",
    d = r.length
      ? `
Developer tools verified on this machine's PATH: ${r.join(", ")}
   - Prefer these. A build/dev tool NOT in this list is likely not installed \u2014 do not assume \`make\`, \`gcc\`, or a package manager is available unless listed. Check with \`if (Get-Command <name> -ErrorAction SilentlyContinue) { ... }\` before relying on an unlisted tool, and prefer a listed equivalent.${a}
`
      : "",
    f = `
  - For git commands:
    - Prefer to create a new commit rather than amending an existing commit.
    - Before running destructive operations (e.g., git reset --hard, git push --force, git checkout --), consider whether there is a safer alternative that achieves the same goal. Only use destructive operations when they are truly the best approach.
    - Never skip hooks (--no-verify) or bypass signing (--no-gpg-sign, -c commit.gpgsign=false) unless the user has explicitly asked for it. If a hook fails, investigate and fix the underlying issue.`;
  return `Executes a given PowerShell command with optional timeout. Working directory persists between commands; shell state (variables, functions) does not.

IMPORTANT: This tool is for terminal operations via PowerShell: git, npm, docker, and PS cmdlets. DO NOT use it for file operations (reading, writing, editing, searching, finding files) - use the specialized tools for this instead.

${Ns(o)}
${d}
Before executing the command, please follow these steps:

1. Directory Verification:
   - If the command will create new directories or files, first use \`Get-ChildItem\` (or \`ls\`) to verify the parent directory exists and is the correct location

2. Command Execution:
   - Always quote file paths that contain spaces with double quotes
   - Capture the output of the command.

PowerShell Syntax Notes:
   - Variables use $ prefix: $myVar = "value"
   - Escape character is backtick (\`), not backslash
   - Use Verb-Noun cmdlet naming: Get-ChildItem, Set-Location, New-Item, Remove-Item
   - Common aliases: ls (Get-ChildItem), cd (Set-Location), cat (Get-Content), rm (Remove-Item)
   - Pipe operator | works similarly to bash but passes objects, not text
   - Use Select-Object, Where-Object, ForEach-Object for filtering and transformation
   - String interpolation: "Hello $name" or "Hello $($obj.Property)"
   - Registry access uses PSDrive prefixes: \`HKLM:\\SOFTWARE\\...\`, \`HKCU:\\...\` \u2014 NOT raw \`HKEY_LOCAL_MACHINE\\...\`
   - Environment variables: read with \`$env:NAME\`, set with \`$env:NAME = "value"\` (NOT \`Set-Variable\` or bash \`export\`)
   - Call native exe with spaces in path via call operator: \`& "C:\\Program Files\\App\\app.exe" arg1 arg2\`

Unix commands that DO NOT exist in PowerShell \u2014 use the equivalent instead:
   - head / tail \u2192 \`Get-Content file -TotalCount N\` / \`-Tail N\`; piped: \`| Select-Object -First N\` / \`-Last N\`
   - which \u2192 \`(Get-Command name).Source\`
   - touch \u2192 \`if (-not (Test-Path path)) { New-Item -ItemType File path }\` (NEVER use \`New-Item -Force\` on a file \u2014 it truncates existing content)
   - wc -l \u2192 \`(Get-Content file | Measure-Object -Line).Lines\`
   - mkdir -p \u2192 \`New-Item -ItemType Directory -Force path\` (\`-p\` is not a PowerShell flag)
   - rm -rf \u2192 \`Remove-Item -Recurse -Force path\`
   - ln -s \u2192 \`New-Item -ItemType SymbolicLink -Path link -Target target\`
   - chmod / chown \u2192 not applicable on Windows; use \`icacls\` only if ACL changes are required
   - 2>/dev/null \u2192 \`2>$null\` (but stderr is captured for you \u2014 usually unnecessary)
   - VAR=x cmd \u2192 \`$env:VAR = 'x'; cmd\` (PowerShell has no inline env-var prefix)
   - Bash control flow (\`if [ -f x ]\`, \`for x in *\`, backtick \`\`cmd\`\` substitution) is a parser error \u2014 use \`if (Test-Path x)\`, \`foreach ($x in ...)\`, \`$(cmd)\`

Exit-code note: \`-ErrorAction SilentlyContinue\` suppresses error OUTPUT but the cmdlet failure still causes this tool to report exit 1. To make a cmdlet failure truly non-fatal, promote it to terminating and swallow it: \`try { Cmdlet ... -ErrorAction Stop } catch {}\` (without \`-ErrorAction Stop\`, non-terminating errors skip the \`catch\` and still exit 1).

Interactive and blocking commands (this tool runs with -NonInteractive and stdin attached to the null device \u2014 console prompts read EOF or error immediately; GUI prompts can still block until timeout):
   - NEVER use \`Read-Host\`, \`Get-Credential\`, \`Out-GridView\`, \`$Host.UI.PromptForChoice\`, or \`pause\`
   - Destructive cmdlets (\`Remove-Item\`, \`Stop-Process\`, \`Clear-Content\`, etc.) may prompt for confirmation. Add \`-Confirm:$false\` when you intend the action to proceed. Use \`-Force\` for read-only/hidden items.
   - Never use \`git rebase -i\`, \`git add -i\`, or other commands that open an interactive editor

Passing multiline strings (commit messages, file content) to native executables:
   - Use a single-quoted here-string so PowerShell does not expand \`$\` or backticks inside. The closing \`'@\` MUST be at column 0 (no leading whitespace) on its own line \u2014 indenting it is a parse error:
<example>
git commit -m @'
Commit message here.
Second line with $literal dollar signs.
'@
</example>
   - Use \`@'...'@\` (single-quoted, literal) not \`@"..."@\` (double-quoted, interpolated) unless you need variable expansion
   - For arguments containing \`-\`, \`@\`, or other characters PowerShell parses as operators, use the stop-parsing token: \`git log --% --format=%H\`

Usage notes:
  - The command argument is required.
  - You can specify an optional timeout in milliseconds (up to ${Be()}ms / ${Be() / 60000} minutes). If not specified, commands will timeout after ${Ye()}ms (${Ye() / 60000} minutes).
  - It is very helpful if you write a clear, concise description of what this command does.
  - If the output exceeds ${Ewe()} characters, output will be truncated before being returned to you.
${
  e
    ? e +
      `
`
    : ""
}  - Avoid using PowerShell to run commands that have dedicated tools, unless explicitly instructed:
    - File search: Use ${co} (NOT Get-ChildItem -Recurse)
    - Content search: Use ${ro} (NOT Select-String)
    - Read files: Use ${tt} (NOT Get-Content)
    - Edit files: Use ${Bt}
    - Write files: Use ${Mn} (NOT Set-Content/Out-File)
    - Communication: Output text directly (NOT Write-Output/Write-Host)
  - When issuing multiple commands:
    - If the commands are independent and can run in parallel, make multiple ${Ut} tool calls in a single message.
    - If the commands depend on each other and must run sequentially, chain them in a single ${Ut} call (see edition-specific chaining syntax above).
    - Use \`;\` only when you need to run commands sequentially but don't care if earlier commands fail.
    - DO NOT use newlines to separate commands (newlines are ok in quoted strings and here-strings)
  - Do NOT prefix commands with \`cd\` or \`Set-Location\` -- the working directory is already set to the correct project directory automatically.${
    t
      ? `
` + t
      : ""
  }
  - For git commands:
    - Prefer to create a new commit rather than amending an existing commit.
    - Before running destructive operations (e.g., git reset --hard, git push --force, git checkout --), consider whether there is a safer alternative that achieves the same goal. Only use destructive operations when they are truly the best approach.
    - Never skip hooks (--no-verify) or bypass signing (--no-gpg-sign, -c commit.gpgsign=false) unless the user has explicitly asked for it. If a hook fails, investigate and fix the underlying issue.`;
}
var Zt = `
`,
  Fs = new Set(["select-string", "get-childitem", "findstr", "where.exe"]),
  Vs = new Set([
    "get-content",
    "get-item",
    "test-path",
    "resolve-path",
    "get-process",
    "get-service",
    "get-childitem",
    "get-location",
    "get-filehash",
    "get-acl",
    "format-hex",
  ]),
  Ws = new Set(["write-output", "write-host"]);
function Bs(e) {
  let t = e.trim();
  if (!t) return { isSearch: !1, isRead: !1 };
  let o = t.split(/\s*[;|]\s*/).filter(Boolean);
  if (o.length === 0) return { isSearch: !1, isRead: !1 };
  let r = !1,
    a = !1,
    d = !1;
  for (let f of o) {
    let b = f.trim().split(/\s+/)[0];
    if (!b) continue;
    let p = Ef(b);
    if (Ws.has(p)) continue;
    d = !0;
    let I = Fs.has(p),
      x = Vs.has(p);
    if (!I && !x) return { isSearch: !1, isRead: !1 };
    if (I) r = !0;
    if (x) a = !0;
  }
  if (!d) return { isSearch: !1, isRead: !1 };
  return { isSearch: r, isRead: a };
}
var Xt = 2000,
  js = 1000,
  zs = ["start-sleep", "sleep"];
async function qs(e) {
  let t = e.trim().split(/\s+/)[0];
  if (!t) return !0;
  let o = Ef(t);
  return !zs.includes(o);
}
function Us(e) {
  let t =
      e
        .trim()
        .split(/[;|&\r\n]/)[0]
        ?.trim() ?? "",
    o =
      /^(?:start-sleep|sleep)(?:\s+-s(?:econds)?)?\s+(\d+(?:\.\d*)?)\s*$/i.exec(
        t,
      );
  if (!o) return null;
  let r = parseFloat(o[1]);
  if (r < L2t) return null;
  let a = e
    .trim()
    .slice(t.length)
    .replace(/^[\s;|&]+/, "");
  return a
    ? `Start-Sleep ${r} followed by: ${a}`
    : `standalone Start-Sleep ${r}`;
}
var Hs =
    "Enterprise policy requires sandboxing, but this command would not be sandboxed on Windows: either the sandbox is unavailable, or the command matches a sandbox exclusion pattern only in part. Compound commands and commands with shell metacharacters must run sandboxed even when a statement matches an exclusion. Shell command execution is blocked by policy.",
  Gs =
    "Enterprise policy requires sandboxing, but the sandbox is unavailable on Windows. The command matches a sandbox exclusion pattern, but exclusions only exempt a command where a permission prompt can approve the unsandboxed run, and none is available here. Shell command execution is blocked by policy.";
function Qt(e, t, o) {
  if (
    o ||
    getCurrentPlatform() !== "windows" ||
    !SandboxManager.isSandboxEnabledInSettings() ||
    !SandboxManager.isPlatformInEnabledList() ||
    !SandboxManager.isStrictSandboxModeConfigured() ||
    e
  )
    return null;
  if (!fzn(t)) return Hs;
  return getHostCapabilityState().unsandboxedCommandsDisabled ? Gs : null;
}
function Ze(e, t) {
  return jS(
    {
      command: e.command,
      dangerouslyDisableSandbox: e.dangerouslyDisableSandbox,
      shellType: "powershell",
    },
    t,
  );
}
var Ks =
    "command contains control characters that would be hidden in the approval dialog",
  Jt = createLazyValue(() =>
    Qe({
      command: s().refine(rU, Ks).describe("The PowerShell command to execute"),
      timeout: DM(T().optional()).describe(
        `Optional timeout in milliseconds (max ${Be()})`,
      ),
      description: s()
        .optional()
        .describe(
          "Clear, concise description of what this command does in active voice.",
        ),
      run_in_background: buildBooleanFromStringSchema(O().optional()).describe(
        "Set to true to run this command in the background.",
      ),
      dangerouslyDisableSandbox: buildBooleanFromStringSchema(O().optional()).describe(
        "Set this to true to dangerously override sandbox mode and run commands without sandboxing.",
      ),
    }),
  ),
  Zs = createLazyValue(() => (areBackgroundTasksDisabled() ? Jt().omit({ run_in_background: !0 }) : Jt())),
  Xs = createLazyValue(() =>
    c({
      stdout: s().describe("The standard output of the command"),
      stderr: s().describe("The standard error output of the command"),
      interrupted: O().describe("Whether the command was interrupted"),
      returnCodeInterpretation: s()
        .optional()
        .describe(
          "Semantic interpretation for non-error exit codes with special meaning",
        ),
      isImage: O()
        .optional()
        .describe("Flag to indicate if stdout contains image data"),
      persistedOutputPath: s()
        .optional()
        .describe("Path to persisted full output when too large for inline"),
      persistedOutputSize: T()
        .optional()
        .describe("Total output size in bytes when persisted"),
      backgroundTaskId: s()
        .optional()
        .describe(
          "ID of the background task if command is running in background",
        ),
      backgroundedByUser: O()
        .optional()
        .describe(
          "True if the user manually backgrounded the command with Ctrl+B",
        ),
      backgroundedByTurnAbort: O()
        .optional()
        .describe(
          "@internal True if a plugin's turn abort moved the running command to the background",
        ),
      backgroundedToDeliverMessage: O()
        .optional()
        .describe(
          "@internal True if the command was moved to the background so a message queued for the model could reach it",
        ),
      timedOutAfterMs: T()
        .optional()
        .describe(
          "Set when the command hit its timeout and was auto-backgrounded; the timeout value in ms",
        ),
      backgroundEndsWithFinalResponse: k(!0)
        .optional()
        .describe(
          "True when this backgrounded command is owned by a synchronous subagent and is therefore terminated when that agent gives its final response; absent when the command survives (main loop, async subagents)",
        ),
      gitOperation: d2t()
        .optional()
        .describe(
          "Structured classification of git/gh operations detected in this command (commit/push/merge/rebase/PR). Client-facing \u2014 lets clients render git activity without re-parsing stdout; not surfaced to the model.",
        ),
    }),
  ),
  PowerShellTool = buildTool({
    name: Ut,
    ruleContentField: "command",
    searchHint: "execute Windows PowerShell commands",
    enablesCodeExecution: !0,
    get maxResultSizeChars() {
      return oUt();
    },
    persistenceThresholdCeiling: hge,
    strict: !0,
    async description({ description: e }) {
      return e || "Run PowerShell command";
    },
    async prompt() {
      return Yt();
    },
    isConcurrencySafe(e) {
      return this.isReadOnly?.(e) ?? !1;
    },
    isSearchOrReadCommand(e) {
      if (typeof e?.command !== "string") return { isSearch: !1, isRead: !1 };
      return Bs(e.command);
    },
    isReadOnly(e) {
      if (gGn(e.command)) return !1;
      return P$t(e.command);
    },
    toAutoClassifierInput(e) {
      let t = e.dangerouslyDisableSandbox;
      return e.command;
    },
    async preparePermissionMatcher({ command: e }) {
      let t = await kwe(e);
      if (!t.valid) return () => !0;
      let o = hk(t).flatMap((r) => {
        let a = [r.name, ...r.args].join(" "),
          d = [Ef(r.name), ...r.args].join(" ");
        return a.toLowerCase() === d ? [a] : [a, d];
      });
      return (r) => {
        let a = XCe(r);
        return o.some((d) => {
          if (a !== null) {
            let f = a.toLowerCase(),
              b = d.toLowerCase();
            return b === f || b.startsWith(`${f} `);
          }
          return Qj(r, d, !0, !0);
        });
      };
    },
    get inputSchema() {
      return Zs();
    },
    get outputSchema() {
      return Xs();
    },
    userFacingName() {
      return "PowerShell";
    },
    getToolUseSummary(e) {
      if (!e?.command) return null;
      let { command: t, description: o } = e;
      if (o) return o;
      return truncate(t, Iw);
    },
    getActivityDescription(e) {
      if (!e?.command) return "Running command";
      return `Running ${e.description ?? truncate(e.command, Iw)}`;
    },
    isEnabled() {
      return !0;
    },
    async validateInput(e) {
      let t = Qt(Ze(e), e.command, !1);
      if (t !== null)
        return (
          logFeatureSad("sandbox_exec", "windows_policy_refusal"),
          { result: !1, message: t, errorCode: 11 }
        );
      if (isMonitorToolEnabled() && Ys() && !areBackgroundTasksDisabled() && !e.run_in_background) {
        let o = Us(e.command);
        if (o !== null)
          return {
            result: !1,
            message: `Blocked: ${o}. To wait for a condition, use Monitor with an until-loop (e.g. \`until <check>; do sleep 2; done\` \u2014 Monitor runs bash). To wait for a command you started, use run_in_background: true. Do not chain shorter sleeps to work around this block.`,
            errorCode: 10,
          };
      }
      return { result: !0 };
    },
    permissionCheckFailureDecision(e, t) {
      return Kt(t);
    },
    async checkPermissions(e, t) {
      let o = await Gt(e, t);
      if (
        e.dangerouslyDisableSandbox &&
        o.behavior !== "deny" &&
        o.behavior !== "ask" &&
        !$mt(o.decisionReason) &&
        !Ze(e) &&
        Ze({ ...e, dangerouslyDisableSandbox: !1 })
      ) {
        let r = hWt({ toolName: Ut, input: e, context: t });
        if (r) return r;
        return {
          behavior: "ask",
          decisionReason: {
            type: "sandboxOverride",
            reason: "dangerouslyDisableSandbox",
          },
          message: "Run outside of the sandbox",
        };
      }
      return o;
    },
    mapToolResultToToolResultBlockParam(
      {
        interrupted: e,
        stdout: t,
        stderr: o,
        isImage: r,
        persistedOutputPath: a,
        persistedOutputSize: d,
        backgroundTaskId: f,
        backgroundedByUser: b,
        backgroundedToDeliverMessage: p,
        timedOutAfterMs: I,
        backgroundEndsWithFinalResponse: x,
      },
      y,
    ) {
      if (r) {
        let C = N2t(t, y);
        if (C) return C;
      }
      let L = t;
      if (a) {
        let C = t ? t.replace(/^(\s*\n)+/, "").trimEnd() : "",
          A = _7e(C, ZNe);
        L = Vpe({
          filepath: a,
          originalSize: d ?? 0,
          isJson: !1,
          preview: A.preview,
          hasMore: A.hasMore,
        });
      } else if (t) ((L = t.replace(/^(\s*\n)+/, "")), (L = L.trimEnd()));
      let _ = o.trim();
      if (e) {
        if (o) _ += Zt;
        _ += "<error>Command was aborted before completion</error>";
      }
      let w = f
        ? $2t({
            backgroundTaskId: f,
            outputPath: getTaskOutputPath(f),
            backgroundedByUser: b,
            backgroundedToDeliverMessage: p,
            timedOutAfterMs: I,
            reapedAtFinalResponse: x,
            readToolName: tt,
          })
        : "";
      if (f && jE())
        return {
          tool_use_id: y,
          type: "tool_result",
          content: HUt(
            f,
            [_, w].filter(Boolean).join(`
`),
            { backgroundedByUser: b, ending: xUt(x === !0) },
          ),
        };
      return {
        tool_use_id: y,
        type: "tool_result",
        content: [L, _, w].filter(Boolean).join(`
`),
        is_error: e,
      };
    },
    async call(e, t, o, r, a) {
      let d = t.userTypedShellDispatch === !0,
        f = Ze(e, { userTypedShellDispatch: d }),
        b = Qt(f, e.command, d && e.dangerouslyDisableSandbox === !0);
      if (b !== null)
        throw (logFeatureSad("sandbox_exec", "windows_policy_refusal"), new SandboxPolicyRefusalError(b));
      let { abortController: p, emitToolProgress: I } = t,
        x = !t.agentId,
        y = 0;
      try {
        let L = Qs({
            input: e,
            useSandbox: f,
            abortController: p,
            taskRegistry: t.taskRegistry,
            emitToolProgress: I,
            session: t.session,
            preventCwdChanges: !x,
            isMainThread: x,
            toolUseId: t.toolUseId,
            toolState: t.toolState,
            agentId: t.agentId,
            caller: Bft(t),
            agentWorktree: t.agentWorktree,
            isolationRoot: sde(t),
            sessionEnvVars: t.sessionEnvVars,
          }),
          _;
        do
          if (((_ = await L.next()), !_.done && a)) {
            let Y = _.value;
            a({
              type: "progress",
              toolUseID: `ps-progress-${y++}`,
              data: {
                type: "powershell_progress",
                output: Y.output,
                fullOutput: Y.fullOutput,
                elapsedTimeSeconds: Y.elapsedTimeSeconds,
                totalLines: Y.totalLines,
                totalBytes: Y.totalBytes,
                timeoutMs: Y.timeoutMs,
                taskId: Y.taskId,
              },
            });
          }
        while (!_.done);
        let w = _.value,
          C = w.code === 0 && !w.stdout && w.stderr && !w.backgroundTaskId,
          A = await f2t(w.stdout, w.outputFilePath);
        if (
          !C &&
          !w.backgroundTaskId &&
          m2t(t.session.host, e.command, w.code, A).prResolved
        )
          t.markPrResolvedThisSession();
        let F = tTe(e.command),
          j = unwrapAbortReason(p.signal.reason),
          W = w.interrupted && j === "interrupt",
          E = w.interrupted && isUserInitiatedAbortReason(j);
        if (w.interrupted && j === "background") throw new Ve();
        let z = "",
          B = t.session.project.cwd;
        if (x) {
          if (B2t(t.session, getToolPermissionContext(t))) z = U2t("");
        }
        let q =
          w.backgroundTaskId !== void 0 && DCt(t.agentContext) ? !0 : void 0;
        if (w.backgroundTaskId) {
          let Y = Bde(w.stdout || "", {
            command: e.command,
            pendingHint: t.session.pendingHint,
            isMainThread: x,
            surface: "shell",
          });
          if (jE())
            logEvent("tengu_bash_task_ack", {
              trigger: w.backgroundedByUser
                ? S("user")
                : w.backgroundedByTurnAbort
                  ? S("turn_abort")
                  : w.backgroundedToDeliverMessage
                    ? S("deliver_message")
                    : w.timedOutAfterMs !== void 0
                      ? S("timeout")
                      : S("explicit"),
              ends_with_final_response: q === !0,
              shell: S("powershell"),
            });
          return {
            data: {
              stdout: Y,
              stderr: [w.stderr || "", z].filter(Boolean).join(`
`),
              interrupted: !1,
              backgroundTaskId: w.backgroundTaskId,
              backgroundedByUser: w.backgroundedByUser,
              backgroundedByTurnAbort: w.backgroundedByTurnAbort,
              backgroundedToDeliverMessage: w.backgroundedToDeliverMessage,
              timedOutAfterMs: w.timedOutAfterMs,
              backgroundEndsWithFinalResponse: q,
            },
          };
        }
        let G = new TruncatingOutputBuffer(),
          J = (w.stdout || "").trimEnd();
        G.append(J + Zt);
        let se = St(e.command, w.code, J, w.stderr || ""),
          ee = M2t(G.toString());
        if (
          ((ee = Bde(ee, {
            command: e.command,
            pendingHint: t.session.pendingHint,
            isMainThread: x,
            surface: "shell",
          })),
          w.preSpawnError)
        )
          throw new R(
            w.preSpawnError,
            "PowerShell: pre-spawn error (cwd/argv redacted)",
          );
        if (se.isError && !W) {
          let Y = J.length <= 8192 ? J : J.slice(0, 4096) + J.slice(-4096),
            le = gt(Y, w.code);
          throw (
            logEvent("tengu_powershell_tool_command_failed", {
              command_type: fromEnum(Ie(e.command)),
              exit_code: w.code,
              stdout_length: J.length,
              error_class: Ub(le),
              not_recognized_kind:
                le === "not_recognized" || le === "command_not_found"
                  ? fromEnum(wt(Y) ?? "unextracted")
                  : void 0,
              parser_error_kind:
                le === "parser_error" || le === "ps5_chain_op"
                  ? fromEnum(bt(Y) ?? "unextracted")
                  : void 0,
              bash_syntax_shape: fromEnum(vt(e.command)),
              powershell_edition: fromEnum((await Vft()) ?? "unknown"),
              user_typed_shell_dispatch: d,
              destructive_category: fromEnum(F ?? "none"),
              destructive_target_scope: fromEnum(Jte(e.command, getCwd(), F)),
              permission_mode: fromEnum(getToolPermissionContext(t).mode),
            }),
            new G0({
              stdout: ee,
              stderr: w.stderr || "",
              code: w.code,
              interrupted: E,
            })
          );
        }
        let oe, fe;
        if (w.outputFilePath && w.outputTaskId)
          try {
            let Y = yS(t.session);
            await _L(Y, t.storageV5);
            let le = g7e(Y, w.outputTaskId, !1),
              te = isHoverRestEnabled() && t.storageV5 !== void 0 ? hL($s(le), Ds(le)) : void 0,
              Te = !0;
            if (isHoverRestEnabled() && t.storageV5 !== void 0 && te !== void 0) {
              let ve = await _Wt(t.storageV5, te, w.outputFilePath, MAX_PERSISTED_OUTPUT_BYTES, getTaskOutputRootDir());
              if (((Te = ve === "today"), typeof ve === "number"))
                ((oe = le), (fe = ve));
            }
            if (Te) ((fe = await persistTaskOutputSnapshot(w.outputFilePath, le, MAX_PERSISTED_OUTPUT_BYTES)), (oe = le));
          } catch {}
        let ye = Ugt(ee),
          re = ee;
        if (ye) {
          let Y = await F2t(
            ee,
            w.outputFilePath,
            fe,
            Ka(t.options.mainLoopModel),
          );
          if (Y) re = Y;
          else ye = !1;
        }
        let de = [w.stderr || "", z].filter(Boolean).join(`
`),
          pe;
        if (!C) {
          let Y = wVe(e.command, A);
          if (Object.keys(Y).length > 0) pe = Y;
          p2t(Y, A, { command: e.command, exitCode: w.code, cwd: B });
        }
        return (
          logEvent("tengu_powershell_tool_command_executed", {
            command_type: fromEnum(Ie(e.command)),
            stdout_length: re.length,
            stderr_length: de.length,
            exit_code: w.code,
            interrupted: w.interrupted,
            powershell_edition: fromEnum((await Vft()) ?? "unknown"),
            user_typed_shell_dispatch: d,
            destructive_category: fromEnum(F ?? "none"),
            destructive_target_scope: fromEnum(Jte(e.command, getCwd(), F)),
            permission_mode: fromEnum(getToolPermissionContext(t).mode),
          }),
          {
            data: {
              stdout: re,
              stderr: de,
              interrupted: w.interrupted,
              returnCodeInterpretation: se.message,
              isImage: ye,
              persistedOutputPath: oe,
              persistedOutputSize: fe,
              gitOperation: pe,
            },
          }
        );
      } finally {
        if (t.toolUseId) I?.({ kind: "clear", toolUseId: t.toolUseId });
        if (!this.isReadOnly?.(e)) t.applyFileHistoryOp({ kind: "touch" });
      }
    },
    isResultTruncated(e, { columns: t }) {
      if (e.isImage) return !1;
      return _k(e.stdout, t) || _k(e.stderr, t);
    },
  });
async function* Qs({
  input: e,
  useSandbox: t,
  abortController: o,
  taskRegistry: r,
  emitToolProgress: a,
  session: d,
  preventCwdChanges: f,
  isMainThread: b,
  toolUseId: p,
  agentId: I,
  caller: x,
  agentWorktree: y,
  isolationRoot: L,
  sessionEnvVars: _,
  toolState: w,
}) {
  let { command: C, description: A, timeout: F, run_in_background: j } = e,
    W = Math.min(F || Ye(), Be()),
    E = "",
    z = "",
    B = 0,
    q = 0,
    G = void 0,
    J = void 0,
    se = !1,
    ee = () => o.signal.aborted && Uft(o.signal.reason, x),
    oe = null;
  function fe() {
    return new Promise((D) => {
      oe = () => D(null);
    });
  }
  using ye = LGn(o.signal, () => {
    if (!ee()) return;
    let D = oe;
    if (D) ((oe = null), D());
  });
  let re = areBackgroundTasksDisabled(),
    de = !re && (await qs(C)),
    pe = !re,
    Y = kUt({
      requestedTimeoutMs: W,
      isMainAgent: b === !0,
      canAutoBackground: de,
    });
  if (!(await Uv()))
    return {
      stdout: "",
      stderr: "PowerShell is not available on this system.",
      code: 0,
      interrupted: !1,
    };
  let te;
  try {
    te = await vV(C, o.signal, "powershell", {
      timeout: Y,
      owningAgentId: I,
      caller: x,
      turnAbortBackgrounds: pe,
      sandboxAttributionId: p,
      onProgress(D, Z, ue, X, we) {
        ((z = D), (E = Z), (B = ue), (q = we ? X : 0));
      },
      session: d,
      preventCwdChanges: f,
      agentWorktree: y,
      isolationRoot: L,
      shouldUseSandbox: t,
      shouldAutoBackground: de,
      sessionEnvVars: _,
    });
  } catch (D) {
    if (yt(D))
      return {
        stdout: "",
        stderr: "Command aborted before execution",
        code: 145,
        interrupted: !0,
      };
    if (D instanceof Error && ugn.has(D.name)) throw D;
    if (Po(D))
      return (
        n(`PowerShellTool: exec spawn failed: ${D}`),
        {
          stdout: "",
          stderr: `Failed to execute PowerShell command: ${l(D)}`,
          code: 0,
          interrupted: !1,
        }
      );
    return (
      logError(dt(ge(D), "PowerShell exec() pre-spawn setup failed")),
      {
        stdout: "",
        stderr: `Failed to execute PowerShell command: ${l(D)}`,
        code: 0,
        interrupted: !1,
      }
    );
  }
  let Te = te.status !== "killed" ? gWt(Ut, C, w, { useSandbox: t }) : null,
    ve = te.result;
  if (Te)
    ve.then((D) => {
      if (D.preSpawnError) Te();
    }).catch(() => {});
  async function v() {
    return (
      await Xne(
        {
          command: C,
          description: A || C,
          shellCommand: te,
          toolUseId: p,
          agentId: I,
        },
        { abortController: o, taskRegistry: r },
      )
    ).taskId;
  }
  function N(D, Z) {
    if (U) {
      if (!I_t(U, te, A || C, r, p)) return;
      ((G = U), logEvent(D, { command_type: fromEnum(Ie(C)) }), Z?.(U));
      return;
    }
    v().then((ue) => {
      G = ue;
      let X = oe;
      if (X) ((oe = null), X());
      if ((logEvent(D, { command_type: fromEnum(Ie(C)) }), Z)) Z(ue);
    });
  }
  if (te.onTimeout && de)
    te.onTimeout((D) => {
      ((J = Y), N("tengu_powershell_command_timeout_backgrounded", D));
    });
  if (j === !0 && !re) {
    if (te.status === "completed") {
      let Z = await ve;
      if (Z.preSpawnError) return Z;
    }
    let D = await v();
    return (
      logEvent("tengu_powershell_command_explicitly_backgrounded", {
        command_type: fromEnum(Ie(C)),
      }),
      { stdout: "", stderr: "", code: 0, interrupted: !1, backgroundTaskId: D }
    );
  }
  yI.startPolling(te.taskOutput.taskId);
  let V = Date.now(),
    K = V + Xt,
    U = void 0,
    ne = null;
  try {
    while (!0) {
      let D = Date.now(),
        Z = Math.max(0, K - D),
        ue;
      if (!se && ee()) ue = Promise.resolve(null);
      else ue = fe();
      let X = await Promise.race([
        ve,
        new Promise((Se) => setTimeout((me) => me(null), Z, Se).unref()),
        ue,
      ]);
      if (X !== null) {
        if (((ne = X), X.backgroundTaskId !== void 0)) {
          if (j6t(X.backgroundTaskId, X, r))
            pi(X.backgroundTaskId, ZKe(X), { toolUseId: p, summary: A || C });
          let Se = { ...X, backgroundTaskId: void 0 },
            { taskOutput: me } = te;
          if (me.stdoutToFile && !me.outputFileRedundant)
            ((Se.outputFilePath = me.path),
              (Se.outputFileSize = me.outputFileSize),
              (Se.outputTaskId = me.taskId));
          return Se;
        }
        return X;
      }
      if (G)
        return {
          stdout: se ? E : "",
          stderr: "",
          code: 0,
          interrupted: !1,
          backgroundTaskId: G,
          ...(ee() && { backgroundedByTurnAbort: !0 }),
          timedOutAfterMs: J,
        };
      if (
        o.signal.aborted &&
        (unwrapAbortReason(o.signal.reason) === "interrupt" || ee()) &&
        !se
      ) {
        if (((se = !0), de || (ee() && pe))) {
          N(
            ee()
              ? "tengu_powershell_command_turn_abort_backgrounded"
              : "tengu_powershell_command_interrupt_backgrounded",
          );
          continue;
        }
        te.kill();
        continue;
      }
      if (U) {
        if (te.status === "backgrounded")
          return {
            stdout: "",
            stderr: "",
            code: 0,
            interrupted: !1,
            backgroundTaskId: U,
            ...(B6t(U, r)
              ? { backgroundedToDeliverMessage: !0 }
              : { backgroundedByUser: !0 }),
          };
      }
      let we = Date.now() - V,
        ke = Math.floor(we / 1000);
      if (!re && !se && G === void 0 && ke >= Xt / 1000) {
        if (!U)
          U = U6t(
            {
              command: C,
              description: A || C,
              shellCommand: te,
              agentId: I,
              caller: x,
              autoBackgroundArmed: de,
            },
            r,
            p,
          );
        if (p) a?.({ kind: "background_hint", toolUseId: p });
      }
      (yield {
        type: "progress",
        fullOutput: E,
        output: z,
        elapsedTimeSeconds: ke,
        totalLines: B,
        totalBytes: q,
        taskId: te.taskOutput.taskId,
        ...(F ? { timeoutMs: Y } : void 0),
      },
        (K = Date.now() + js));
    }
  } finally {
    if (
      (yI.stopPolling(te.taskOutput.taskId), !G && te.status !== "backgrounded")
    ) {
      if (U) W6t(U, ne ? ZKe(ne) : "stopped", r);
      te.cleanup();
    }
  }
}
export { PowerShellTool };

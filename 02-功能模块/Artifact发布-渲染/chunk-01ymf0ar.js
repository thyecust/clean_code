// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ie, po, ac, Dr, Xo } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { Xn, j, Gt, B, K, ke } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { sleep } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { l, A, Jg, AZ, GW, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { lit as S, fromEnum, fromEnumOpt, fromSanitizer_SANITIZER_OUTPUT_ONLY } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { b, z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { escapeRegExp, pluralize, truncateToCodePoints, truncateToCodeUnits, isWellFormed, beforeFirst } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { getOauthConfig } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { nS, aBe } from "../认证-OAuth登录/chunk-wk0e3dz4.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { ARTIFACT_ORIGIN_NOTES_TAG, isEssentialTrafficOnly, logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import {
  NCt,
  TUe,
  Ior,
  FCt,
  ht,
  Gvn,
  KQe,
  mKt,
  Lor,
  isBgSession,
  isWIFDispatchAuth,
  getClaudeAIOAuthTokenOrigin,
  getClaudeAIOAuthTokenOriginAsync,
  checkAndRefreshOAuthTokenIfNeeded,
  isClaudeAISubscriber,
  hasUsableClaudeAILogin,
  getStoredOAuthSubscriptionType,
  getOauthAccountInfo,
  getStoredOauthAccountInfo,
  getSubscriptionType,
  H,
  RU,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { ea, Pw, Nr, Vn, hke, $q } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { getCwd } from "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import { hashSha256 } from "../../01-核心基础设施/共享小工具-未细化/git-host-utils.js";
import { xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import {
  getEnvEntrypoint,
  isDesktopHostEntrypoint,
  isCoworkEntrypoint,
  isCoworkSession,
  isSlackEntrypoint,
  isTeamsEntrypoint,
  isSdkEntrypoint,
  getSessionEntrypoint,
  isDesktopHostSession,
  isTopLevelCoworkSession,
  isClaudecodeEnv,
  hasCoworkFrameArtifacts,
} from "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import { projectSettingsAliasesUserSettings, getSettingsForSource, getLegacyLocalSettingsOverlay, getAllPolicyTierSettings, getAdminTierEnvValue, getDurablePolicyTierSettings, getPolicySettingsOrigin } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { isCancel } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { G5, KU, bkt, getUsableProxyUrl } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { getAPIProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { getSessionAccessToken } from "../认证-OAuth登录/credential-file-descriptors.js";
import {
  Vo,
  YZe,
  ARTIFACT_TOOL_NAME,
  notAnArtifactUrlMessage,
  ArtifactInputError,
  ARTIFACT_SLUG_RE,
  ARTIFACT_VERSION_SAFE_RE,
  ARTIFACT_MAX_RESULT_SIZE_CHARS,
  ARTIFACT_PAGE_INLINE_RESULT_CAP,
  ARTIFACT_DB_READ_MAX_RESULT_SIZE_CHARS,
  ARTIFACT_STUB_URL_PREFIX,
  getArtifactPublishStubDir,
  parseArtifactUrl,
  artifactViewerPath,
  artifactContentOriginUrlFor,
  vetForeignFavicon,
  sanitizeArtifactTitle,
  QUOTE_HOMOGLYPHS,
  SINGLE_QUOTE_RUNS,
  INVISIBLE_BLANKS,
  isDecisionSurfaceControl,
  INVISIBLE_BLANK_CODE_POINT,
  isJoinerOrEmojiSelector,
  rideStateAfter,
  selectorOrJoinerRides,
  scrubArtifactEnvelopeTags,
  scrubServerLine,
  sweepAskCopy,
  MODEL_TEXT_PUNCT_CODE_POINT,
  sweepMarkerLookalikes,
} from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { go, vge } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import { isTeammate } from "../Teammates团队/teammate-context.js";
import { isTransportError, externalHttp } from "../../01-核心基础设施/共享小工具-未细化/external-http.js";
import {
  MERMAID_RUNTIME_BEGIN_PREFIX,
  MERMAID_RUNTIME_END,
  HLJS_RUNTIME_BEGIN_PREFIX,
  HLJS_RUNTIME_END,
  CHART_RUNTIME_BEGIN,
  CHART_RUNTIME_END,
  MERMAID_RUNTIME_SCRIPT_TAG,
  FRAME_RUNTIME_BEGIN,
  FRAME_RUNTIME_END,
  hasRuntimeSentinel,
  findBundleSafetyIssue,
  TAG_NAME_TERMINATOR_CHARS,
  trimAsciiWhitespace,
  removeRanges,
  hasCommentAndScriptTag,
  findScriptCloseTagEnd,
  findStyleCloseTag,
  DATA_ID_ATTRIBUTE_LENGTH,
  DATA_ID_ATTRIBUTE_PATTERN,
  matchDataIdAttribute,
  matchScriptOpenTag,
  matchStyleOpenTag,
  matchMermaidRuntimeScriptTag,
  countNestedScriptTags,
  findTagEnd,
  getContentTypeForPath,
  normalizeContentType,
  isRenderableOrExecutableContentType,
  sanitizeInvisibleCharacters,
  WORKSHOP_MARKDOWN_EXTENSION,
  MARKUP_CONTENT_TYPES,
  EXECUTABLE_CONTENT_TYPES,
} from "../图表-Mermaid/chunk-743atbtj.js";
import { parseRetryAfterHeader } from "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import {
  xN,
  ne,
  Ufe,
  L$,
  _Tt,
  Ner,
  HTn,
  ITn,
  PTn,
  OTn,
  Fer,
  $er,
  Uer,
  yTt,
  Ber,
  jer,
} from "./chunk-rr78st95.js";
import { bFe, tf } from "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import { DANGEROUS_FILES_LC } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { isPolicyLimitsEligible, getPolicyLimitsIneligibleReason, isPolicyAllowed, isPolicyRouteMissing, getResponseFromCache } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { getRemoteControlSessionCompatId } from "../权限系统/chunk-1y2g140m.js";
import { xC, moe } from "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import { isAnthropicHostedEnvironment, isByocEnvironment } from "../../01-核心基础设施/共享小工具-未细化/environment-kind.js";
import { areBundledSkillsDisabled } from "../../01-核心基础设施/共享小工具-未细化/disable-bundled-skills.js";
import { defineStoreField, createLocalStore } from "../../01-核心基础设施/共享小工具-未细化/state-store.js";
import { decodeTokenClaims } from "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import { CLAUDE_AI_MCP_SERVER_PREFIX, normalizeMcpName } from "../../01-核心基础设施/共享小工具-未细化/mcp-name-normalization.js";
import { s, T, O, se, v, c, it, $e, fe, X, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { isRecord } from "../../01-核心基础设施/共享小工具-未细化/is-record.js";
import { countMatching, dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
var oc = 8,
  VER_SHAPE = /^[A-Za-z0-9._-]{1,64}$/,
  ss = { ownVers: {}, inFlight: {} },
  makeOwnPublishesStore = defineStoreField("ownPublishes", ss);
function makeLocalOwnPublishesStore() {
  return createLocalStore(ss);
}
function recordOwnPublish(e, t, r) {
  if (!VER_SHAPE.test(r)) return;
  e.set((o) => {
    let d = o.ownVers[t] ?? [];
    if (d.includes(r)) return o;
    return { ...o, ownVers: { ...o.ownVers, [t]: [...d, r].slice(-oc) } };
  });
}
function isOwnPublishedVer(e, t, r) {
  return e.get().ownVers[t]?.includes(r) ?? !1;
}
function headAuthorship(e, t, r) {
  return isOwnPublishedVer(e, t, r) ? "self-session" : "unverified";
}
async function withPublishInFlight(e, t, r) {
  markPublishInFlight(e, t);
  try {
    return await r();
  } finally {
    clearPublishInFlight(e, t);
  }
}
function markPublishInFlight(e, t) {
  e.set((r) => ({
    ...r,
    inFlight: { ...r.inFlight, [t]: (r.inFlight[t] ?? 0) + 1 },
  }));
}
function clearPublishInFlight(e, t) {
  e.set((r) => {
    let o = r.inFlight[t] ?? 0;
    if (o === 0) return r;
    if (o === 1) {
      let { [t]: d, ...p } = r.inFlight;
      return { ...r, inFlight: p };
    }
    return { ...r, inFlight: { ...r.inFlight, [t]: o - 1 } };
  });
}
function isPublishInFlight(e, t) {
  return (e.get().inFlight[t] ?? 0) > 0;
}
function SCe(e) {
  return e
    ? `this session holds no gateway credential (${e})`
    : "this session holds no gateway credential";
}
function M1e() {
  return isClaudeAISubscriber() || os();
}
function os() {
  if (nS() !== "env-quad") return !1;
  try {
    return isWIFDispatchAuth() && hasUsableClaudeAILogin();
  } catch {
    return !1;
  }
}
function dn() {
  return !isClaudeAISubscriber() && os();
}
function Bwt() {
  let { info: e, storeBearerOnly: t } = N1e();
  if (!t || e === void 0) return e;
  return getClaudeAIOAuthTokenOrigin() === "store" ? e : void 0;
}
function N1e() {
  let e = getOauthAccountInfo();
  if (e !== void 0) return { info: e, storeBearerOnly: !1 };
  return dn()
    ? { info: getStoredOauthAccountInfo(), storeBearerOnly: !0 }
    : { info: void 0, storeBearerOnly: !1 };
}
async function bCe(e) {
  let { info: t, storeBearerOnly: r } = N1e();
  if (!r || t === void 0) return t;
  return (await getClaudeAIOAuthTokenOriginAsync(e)) === "store" ? t : void 0;
}
function Am(e) {
  return `Not authenticated \u2014 run /login (${e})`;
}
function MXe(e) {
  let t = e.trimEnd();
  if (!t.startsWith("<!--") || !t.endsWith("-->") || t.length < 7) return !1;
  let r = t.slice(4, -3);
  return (
    !r.startsWith(">") &&
    !r.startsWith("->") &&
    !r.includes("-->") &&
    !r.includes("--!>") &&
    !r.includes("<!--") &&
    !r.endsWith("<!-")
  );
}
function ls() {
  return !H("tengu_pewter_canteen", !1);
}
var lc = "data-chart-runtime";
function cs(e) {
  return e.includes(lc);
}
function cc(e) {
  return findBundleSafetyIssue(e);
}
function ds(e) {
  return countNestedScriptTags(e) >= 0;
}
function fs(e) {
  let t = [],
    r = e.indexOf(CHART_RUNTIME_BEGIN),
    o = -1;
  while (r >= 0) {
    let d = r + CHART_RUNTIME_BEGIN.length;
    if (o < d) {
      if (((o = e.indexOf(CHART_RUNTIME_END, d)), o < 0)) break;
    }
    let p = e.indexOf(CHART_RUNTIME_BEGIN, d);
    if ((p < 0 || p > o) && ds(e.slice(d, o))) t.push([r, o + CHART_RUNTIME_END.length]);
    r = p;
  }
  return removeRanges(e, t);
}
var as = `(function () {
  if (typeof Chart === 'undefined') return;
  var specEl = document.querySelector('script[type="application/json"][data-chart-runtime]');
  var el = document.getElementById('primary-chart');
  if (!specEl || !el) return;
  var spec;
  try { spec = JSON.parse(specEl.textContent); } catch (e) { return; }
  var series = (spec.series || []).filter(function (s) { return Array.isArray(s.points) && s.points.length; });
  if (!series.length) return; /* keep the fallback's No-data state */

  var chart = null;
  /* Rebuilds the whole config on every call: resolved colors are baked into
     the config at creation, so a theme flip must re-read the custom
     properties (getComputedStyle re-called) and recreate the chart.
     Deterministic: same data, same pixels PER THEME. */
  function render() {
  var rootStyle = getComputedStyle(document.documentElement);
  function cssVar(name, fb) {
    var v = rootStyle.getPropertyValue(name).trim();
    return v || fb;
  }
  function resolveColor(c, fb) {
    c = (c || fb || '').trim();
    var m = /^var\\((--[^,)]+)(?:,([^)]*))?\\)$/.exec(c);
    if (m) return cssVar(m[1], (m[2] || '').trim() || '#2563eb');
    return c || '#2563eb';
  }
  var accent = cssVar('--accent', '#2563eb');
  var inkMuted = cssVar('--ink-muted', '#64748b');
  var gridLine = cssVar('--line', '#e2e8f0');
  var slicePalette = [accent, cssVar('--good', '#059669'), '#d97706', '#7c3aed', inkMuted, '#0ea5e9', '#db2777'];

  var type = spec.type === 'bar' ? 'bar' : spec.type === 'donut' ? 'doughnut' : 'line';
  /* Category scale aligns data by index, so a tick array shorter or longer
     than the point list would drop or misplace points \u2014 the fallback plots
     by x value and tolerates that; same data must render the same chart on
     both paths. Use the tick labels only when they align one-per-point. */
  var ticks = (spec.x && spec.x.ticks) || [];
  var labels = ticks.length === series[0].points.length
    ? ticks
    : series[0].points.map(function (p) { return String(p[0]); });

  var allYs = [];
  series.forEach(function (s) { s.points.forEach(function (p) { allYs.push(p[1]); }); });
  var yMin = spec.y && spec.y.min != null ? spec.y.min : Math.min(0, Math.min.apply(null, allYs));
  var yMax = spec.y && spec.y.max != null ? spec.y.max : Math.max.apply(null, allYs) * 1.05;
  /* Same tick-label precision rule as the fallback renderer, so both paths
     label identically: sub-1 steps get distinguishing decimals; explicit
     domains render the step exactly (<=2 decimals). */
  var step = (yMax - yMin) / 4;
  var dec = step > 0 && step < 1 ? Math.min(6, Math.ceil(-Math.log10(step)) + 1) : 0;
  if (spec.y && spec.y.min != null && spec.y.max != null) {
    for (dec = 0; dec < 2 && step * Math.pow(10, dec) !== Math.round(step * Math.pow(10, dec)); dec++);
  }

  var data, options;
  var base = { responsive: true, maintainAspectRatio: false, animation: false };
  if (type === 'doughnut') {
    data = {
      labels: labels,
      datasets: [{
        data: series[0].points.map(function (p) { return p[1]; }),
        backgroundColor: (series[0].colors || []).map(function (c, i) { return resolveColor(c, slicePalette[i % slicePalette.length]); })
          .concat(slicePalette.slice((series[0].colors || []).length)).slice(0, series[0].points.length),
        borderWidth: 1
      }]
    };
    options = Object.assign({}, base, {
      plugins: { legend: { display: true, position: 'right', labels: { color: inkMuted } } },
      cutout: '62%'
    });
  } else {
    data = {
      labels: labels,
      datasets: series.map(function (s) {
        var c = resolveColor(s.color, 'var(--accent)');
        return {
          label: s.name || '',
          data: s.points.map(function (p) { return p[1]; }),
          borderColor: c,
          backgroundColor: c,
          borderWidth: 2,
          pointRadius: type === 'line' ? 0 : undefined,
          tension: 0
        };
      })
    };
    options = Object.assign({}, base, {
      plugins: { legend: { display: series.length > 1, labels: { color: inkMuted, boxWidth: 10 } } },
      scales: {
        x: {
          title: spec.x && spec.x.label ? { display: true, text: spec.x.label, color: inkMuted } : undefined,
          grid: { display: false },
          ticks: { color: inkMuted }
        },
        y: {
          min: yMin,
          max: yMax,
          title: spec.y && spec.y.label ? { display: true, text: spec.y.label, color: inkMuted } : undefined,
          grid: { color: gridLine },
          ticks: { color: inkMuted, count: 5, format: { maximumFractionDigits: dec, minimumFractionDigits: 0 } }
        }
      }
    });
  }

  if (chart) { chart.destroy(); chart = null; }
  while (el.firstChild) el.removeChild(el.firstChild);
  var canvas = document.createElement('canvas');
  el.appendChild(canvas);
  chart = new Chart(canvas, { type: type, data: data, options: options });
  }

  render();
  /* Keep the canvas in step with live theme flips, like the SVG fallback's
     native var() behavior and the mermaid precedent. Destroy+recreate is
     idempotent under rapid flips (render() always tears down first). */
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  if (mq && mq.addEventListener) mq.addEventListener('change', render);
  if (typeof MutationObserver !== 'undefined') {
    new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }
})();`;
async function $r() {
  let e;
  try {
    let { loadChartBundleJs: r } = await import("../图表-Mermaid/loadChartBundleJs.85fbh2k8.js");
    e = await r();
  } catch {
    return (logFeatureSad("artifact_publish", "chart_bundle_unreadable"), null);
  }
  if (cc(e) !== null)
    return (logFeatureSad("artifact_publish", "chart_bundle_unsafe"), null);
  if (findBundleSafetyIssue(as) !== null)
    return (logFeatureSad("artifact_publish", "chart_init_unsafe"), null);
  let t =
    `
<script>` +
    e +
    `</script>
<script>` +
    as +
    `</script>
`;
  if (!ds(t)) return (logFeatureSad("artifact_publish", "chart_block_unstrippable"), null);
  return CHART_RUNTIME_BEGIN + t + CHART_RUNTIME_END;
}
var G1e = {
    abnf: "Augmented Backus-Naur Form",
    accesslog: "Apache Access Log",
    actionscript: "ActionScript",
    ada: "Ada",
    angelscript: "AngelScript",
    apache: "Apache config",
    applescript: "AppleScript",
    arcade: "ArcGIS Arcade",
    arduino: "Arduino",
    armasm: "ARM Assembly",
    asciidoc: "AsciiDoc",
    aspectj: "AspectJ",
    autohotkey: "AutoHotkey",
    autoit: "AutoIt",
    avrasm: "AVR Assembly",
    awk: "Awk",
    axapta: "X++",
    bash: "Bash",
    basic: "BASIC",
    bnf: "Backus\u2013Naur Form",
    brainfuck: "Brainfuck",
    c: "C",
    cal: "C/AL",
    capnproto: "Cap\u2019n Proto",
    ceylon: "Ceylon",
    clean: "Clean",
    clojure: "Clojure",
    "clojure-repl": "Clojure REPL",
    cmake: "CMake",
    coffeescript: "CoffeeScript",
    coq: "Coq",
    cos: "Cach\xE9 Object Script",
    cpp: "C++",
    crmsh: "crmsh",
    crystal: "Crystal",
    csharp: "C#",
    csp: "CSP",
    css: "CSS",
    d: "D",
    dart: "Dart",
    delphi: "Delphi",
    diff: "Diff",
    django: "Django",
    dns: "DNS Zone",
    dockerfile: "Dockerfile",
    dos: "Batch file (DOS)",
    dsconfig: "dsconfig",
    dts: "Device Tree",
    dust: "Dust",
    ebnf: "Extended Backus-Naur Form",
    elixir: "Elixir",
    elm: "Elm",
    erb: "ERB",
    erlang: "Erlang",
    "erlang-repl": "Erlang REPL",
    excel: "Excel formulae",
    fix: "FIX",
    flix: "Flix",
    fortran: "Fortran",
    fsharp: "F#",
    gams: "GAMS",
    gauss: "GAUSS",
    gcode: "G-code (ISO 6983)",
    gherkin: "Gherkin",
    glsl: "GLSL",
    go: "Go",
    golo: "Golo",
    gradle: "Gradle",
    graphql: "GraphQL",
    groovy: "Groovy",
    haml: "HAML",
    handlebars: "Handlebars",
    haskell: "Haskell",
    haxe: "Haxe",
    hsp: "HSP",
    http: "HTTP",
    hy: "Hy",
    inform7: "Inform 7",
    ini: "TOML, also INI",
    irpf90: "IRPF90",
    java: "Java",
    javascript: "JavaScript",
    "jboss-cli": "JBoss CLI",
    json: "JSON",
    julia: "Julia",
    "julia-repl": "Julia REPL",
    kotlin: "Kotlin",
    lasso: "Lasso",
    latex: "LaTeX",
    ldif: "LDIF",
    leaf: "Leaf",
    less: "Less",
    lisp: "Lisp",
    livecodeserver: "LiveCode",
    livescript: "LiveScript",
    llvm: "LLVM IR",
    lsl: "LSL (Linden Scripting Language)",
    lua: "Lua",
    makefile: "Makefile",
    markdown: "Markdown",
    matlab: "Matlab",
    mel: "MEL",
    mercury: "Mercury",
    mipsasm: "MIPS Assembly",
    mizar: "Mizar",
    mojolicious: "Mojolicious",
    monkey: "Monkey",
    moonscript: "MoonScript",
    n1ql: "N1QL",
    nestedtext: "Nested Text",
    nginx: "Nginx config",
    nim: "Nim",
    nix: "Nix",
    "node-repl": "Node REPL",
    nsis: "NSIS",
    objectivec: "Objective-C",
    ocaml: "OCaml",
    openscad: "OpenSCAD",
    oxygene: "Oxygene",
    parser3: "Parser3",
    perl: "Perl",
    pf: "Packet Filter config",
    pgsql: "PostgreSQL",
    php: "php",
    "php-template": "PHP template",
    plaintext: "Plain text",
    pony: "Pony",
    powershell: "PowerShell",
    processing: "Processing",
    profile: "Python profiler",
    prolog: "Prolog",
    properties: ".properties",
    protobuf: "Protocol Buffers",
    puppet: "Puppet",
    purebasic: "PureBASIC",
    python: "Python",
    "python-repl": "python-repl",
    q: "Q",
    qml: "QML",
    r: "R",
    reasonml: "ReasonML",
    rib: "RenderMan RIB",
    roboconf: "Roboconf",
    routeros: "MikroTik RouterOS script",
    rsl: "RenderMan RSL",
    ruby: "Ruby",
    ruleslanguage: "Oracle Rules Language",
    rust: "Rust",
    sas: "SAS",
    scala: "Scala",
    scheme: "Scheme",
    scilab: "Scilab",
    scss: "SCSS",
    shell: "Shell Session",
    smali: "Smali",
    smalltalk: "Smalltalk",
    sml: "SML (Standard ML)",
    sql: "SQL",
    stan: "Stan",
    stata: "Stata",
    step21: "STEP Part 21",
    stylus: "Stylus",
    subunit: "SubUnit",
    swift: "Swift",
    taggerscript: "Tagger Script",
    tap: "Test Anything Protocol",
    tcl: "Tcl",
    thrift: "Thrift",
    tp: "TP",
    twig: "Twig",
    typescript: "TypeScript",
    vala: "Vala",
    vbnet: "Visual Basic .NET",
    vbscript: "VBScript",
    "vbscript-html": "VBScript in HTML",
    verilog: "Verilog",
    vhdl: "VHDL",
    vim: "Vim Script",
    wasm: "WebAssembly",
    wren: "Wren",
    x86asm: "Intel x86 Assembly",
    xl: "XL",
    xml: "HTML, XML",
    xquery: "XQuery",
    yaml: "YAML",
    zephir: "Zephir",
  },
  q1e = {
    as: "actionscript",
    asc: "angelscript",
    apacheconf: "apache",
    osascript: "applescript",
    ino: "arduino",
    arm: "armasm",
    adoc: "asciidoc",
    ahk: "autohotkey",
    "x++": "axapta",
    sh: "bash",
    zsh: "bash",
    bf: "brainfuck",
    h: "c",
    capnp: "capnproto",
    icl: "clean",
    dcl: "clean",
    clj: "clojure",
    edn: "clojure",
    "cmake.in": "cmake",
    coffee: "coffeescript",
    cson: "coffeescript",
    iced: "coffeescript",
    cls: "cos",
    cc: "cpp",
    "c++": "cpp",
    "h++": "cpp",
    hpp: "cpp",
    hh: "cpp",
    hxx: "cpp",
    cxx: "cpp",
    crm: "crmsh",
    pcmk: "crmsh",
    cr: "crystal",
    cs: "csharp",
    "c#": "csharp",
    dpr: "delphi",
    dfm: "delphi",
    pas: "delphi",
    pascal: "delphi",
    patch: "diff",
    jinja: "django",
    bind: "dns",
    zone: "dns",
    docker: "dockerfile",
    bat: "dos",
    cmd: "dos",
    dst: "dust",
    ex: "elixir",
    exs: "elixir",
    erl: "erlang",
    xlsx: "excel",
    xls: "excel",
    f90: "fortran",
    f95: "fortran",
    fs: "fsharp",
    "f#": "fsharp",
    gms: "gams",
    gss: "gauss",
    nc: "gcode",
    feature: "gherkin",
    golang: "go",
    gql: "graphql",
    hbs: "handlebars",
    "html.hbs": "handlebars",
    "html.handlebars": "handlebars",
    htmlbars: "handlebars",
    hs: "haskell",
    hx: "haxe",
    https: "http",
    hylang: "hy",
    i7: "inform7",
    toml: "ini",
    jsp: "java",
    js: "javascript",
    jsx: "javascript",
    mjs: "javascript",
    cjs: "javascript",
    "wildfly-cli": "jboss-cli",
    jsonc: "json",
    jldoctest: "julia-repl",
    kt: "kotlin",
    kts: "kotlin",
    ls: "livescript",
    lassoscript: "lasso",
    tex: "latex",
    pluto: "lua",
    mk: "makefile",
    mak: "makefile",
    make: "makefile",
    md: "markdown",
    mkdown: "markdown",
    mkd: "markdown",
    m: "mercury",
    moo: "mercury",
    mips: "mipsasm",
    moon: "moonscript",
    nt: "nestedtext",
    nginxconf: "nginx",
    nixos: "nix",
    mm: "objectivec",
    objc: "objectivec",
    "obj-c": "objectivec",
    "obj-c++": "objectivec",
    "objective-c++": "objectivec",
    ml: "sml",
    scad: "openscad",
    pl: "perl",
    pm: "perl",
    "pf.conf": "pf",
    postgres: "pgsql",
    postgresql: "pgsql",
    text: "plaintext",
    txt: "plaintext",
    pwsh: "powershell",
    ps: "powershell",
    ps1: "powershell",
    pde: "processing",
    proto: "protobuf",
    pp: "puppet",
    pb: "purebasic",
    pbi: "purebasic",
    py: "python",
    gyp: "python",
    ipython: "python",
    pycon: "python-repl",
    k: "q",
    kdb: "q",
    qt: "qml",
    re: "reasonml",
    graph: "roboconf",
    instances: "roboconf",
    mikrotik: "routeros",
    rb: "ruby",
    gemspec: "ruby",
    podspec: "ruby",
    thor: "ruby",
    irb: "ruby",
    rs: "rust",
    scm: "scheme",
    sci: "scilab",
    console: "shell",
    shellsession: "shell",
    st: "smalltalk",
    stanfuncs: "stan",
    do: "stata",
    ado: "stata",
    p21: "step21",
    step: "step21",
    stp: "step21",
    styl: "stylus",
    tk: "tcl",
    craftcms: "twig",
    ts: "typescript",
    tsx: "typescript",
    mts: "typescript",
    cts: "typescript",
    vb: "vbnet",
    vbs: "vbscript",
    v: "verilog",
    sv: "verilog",
    svh: "verilog",
    tao: "xl",
    html: "xml",
    xhtml: "xml",
    rss: "xml",
    atom: "xml",
    xjb: "xml",
    xsd: "xml",
    xsl: "xml",
    plist: "xml",
    wsf: "xml",
    svg: "xml",
    xpath: "xquery",
    xq: "xquery",
    xqm: "xquery",
    yml: "yaml",
    zep: "zephir",
    mysql: "sql",
    oracle: "sql",
    freepascal: "delphi",
    lazarus: "delphi",
    lpr: "delphi",
    lfm: "delphi",
    php3: "php",
    php4: "php",
    php5: "php",
    php6: "php",
    php7: "php",
    php8: "php",
  },
  $Zn = {
    asciidoc: ["xml"],
    "clojure-repl": ["clojure"],
    coffeescript: ["javascript"],
    cos: ["javascript", "sql", "xml"],
    dart: ["markdown"],
    django: ["xml"],
    dockerfile: ["bash"],
    dust: ["xml"],
    erb: ["ruby", "xml"],
    haml: ["ruby"],
    handlebars: ["xml"],
    javascript: ["css", "graphql", "xml"],
    "julia-repl": ["julia"],
    livescript: ["javascript"],
    markdown: ["xml"],
    mojolicious: ["perl", "xml"],
    nix: ["markdown"],
    "node-repl": ["javascript"],
    parser3: ["xml"],
    perl: ["mojolicious"],
    pgsql: [
      "bash",
      "java",
      "json",
      "lua",
      "perl",
      "php",
      "python",
      "r",
      "ruby",
      "scheme",
      "tcl",
      "xml",
    ],
    "php-template": ["php", "xml"],
    "python-repl": ["python"],
    qml: ["xml"],
    shell: ["bash"],
    tap: ["yaml"],
    twig: ["xml"],
    typescript: ["css", "graphql", "xml"],
    "vbscript-html": ["vbscript", "xml"],
    xml: ["css", "handlebars", "javascript"],
    xquery: ["xml"],
    yaml: ["ruby"],
  };
function uc(e) {
  return findBundleSafetyIssue(e);
}
var dc = 8;
function fc(e) {
  return `${HLJS_RUNTIME_BEGIN_PREFIX}${e}-->`;
}
var ps = 4194304;
function hs(e, t = 0) {
  return (
    e[0] ===
      `
` &&
    matchScriptOpenTag(e, 1) > 0 &&
    e.endsWith(`</script>
`) &&
    !e.includes(HLJS_RUNTIME_BEGIN_PREFIX) &&
    countNestedScriptTags(e) === t
  );
}
var pc = 2,
  gs = {
    beginPrefix: HLJS_RUNTIME_BEGIN_PREFIX,
    end: HLJS_RUNTIME_END,
    lenDigitsMax: dc,
    maxSpan: ps,
    openTags: pc,
    validate: hs,
  },
  hc = 50000,
  gc = 250000,
  mc = 4096;
function ms(e) {
  let t = e.toLowerCase(),
    r = 0;
  for (;;) {
    if (((r = t.indexOf("<code", r)), r < 0)) return !1;
    let o = t[r + 5];
    if (o === void 0) return !1;
    if (!TAG_NAME_TERMINATOR_CHARS.has(o)) {
      r += 5;
      continue;
    }
    let d = Math.min(r + mc, t.length),
      p = d;
    for (let w = r + 5; w < d; w++)
      if (t[w] === ">") {
        p = w;
        break;
      }
    let _ = t.slice(r + 5, p);
    for (let w of _.matchAll(/language-([\w.+#-]+)/g)) {
      let E = w[1];
      if (
        Object.prototype.hasOwnProperty.call(G1e, E) ||
        Object.prototype.hasOwnProperty.call(q1e, E)
      )
        return !0;
    }
    r = p;
  }
}
function bc() {
  return `(function(){
if(typeof hljs==='undefined')return;
var budget=${gc};
var codes=Array.prototype.slice.call(document.querySelectorAll('pre>code'));
for(var i=0;i<codes.length;i++){
var el=codes[i];
if(el.hasAttribute('data-claude-hljs-claimed'))continue;
var m=/(?:^|\\s)language-(\\S+)/.exec(el.className||'');
if(!m||!hljs.getLanguage(m[1]))continue;
if(el.children.length)continue;
var src=(el.textContent||'').replace(/\\n$/,'');
if(src.length>${hc}||src.length>budget)continue;
budget-=src.length;
el.setAttribute('data-claude-hljs-claimed','1');
try{
var res=hljs.highlight(src,{language:m[1],ignoreIllegals:true});
el.innerHTML=res.value;
el.classList.add('hljs');
}catch(e){}
}
})();`;
}
async function Lr() {
  let e;
  try {
    let { loadHljsBundleJs: p } = await import("./loadHljsBundleJs.6n1dt2fb.js");
    e = await p();
  } catch (p) {
    return (logError(p), logFeatureSad("artifact_publish", "hljs_bundle_unreadable"), null);
  }
  let t = ne().bundleEmbedVerdicts;
  if (t.hljs === void 0) t.hljs = uc(e);
  if (t.hljs !== null)
    return (logFeatureSad("artifact_publish", "hljs_bundle_unsafe"), null);
  let r = bc();
  if (findBundleSafetyIssue(r) !== null) return (logFeatureSad("artifact_publish", "hljs_init_unsafe"), null);
  let o =
    `
<script>` +
    e +
    `</script>
<script>` +
    r +
    `</script>
`;
  if (o.length >= ps)
    return (logFeatureSad("artifact_publish", "hljs_bundle_overspan"), null);
  let d = ne().blockStripVerdicts;
  if (d.hljs === void 0) d.hljs = hs(o);
  if (!d.hljs) return (logFeatureSad("artifact_publish", "hljs_block_unstrippable"), null);
  return (
    `
` +
    fc(o.length) +
    o +
    HLJS_RUNTIME_END +
    `
`
  );
}
var yc = {
    light: {
      surface: "#f4efe4",
      text: "#42392e",
      line: "#8a7f6d",
      border: "#7a6c52",
      bg: "#fffdf8",
    },
    dark: {
      surface: "#262b34",
      text: "#f2f3f5",
      line: "#a8adb8",
      border: "#9aa4b8",
      bg: "#1f232b",
    },
  },
  _c =
    "<style>.mermaid-diagram{margin-block:4px}.mermaid-diagram svg{display:block;margin:0 auto;max-width:100%;height:auto}</style>";
function wc() {
  return (
    `(function(){
var CFG=` +
    b({ palettes: yc }) +
    `;
if(typeof mermaid==='undefined')return;
var pres=Array.prototype.slice.call(document.querySelectorAll('pre.mermaid')).filter(function(p){if(p.hasAttribute('data-claude-mermaid-claimed'))return false;p.setAttribute('data-claude-mermaid-claimed','1');return true;});
if(!pres.length)return;
var mq=window.matchMedia?window.matchMedia('(prefers-color-scheme: dark)'):null;
var root=document.documentElement;
var items=pres.map(function(pre){
var mount=document.createElement('div');mount.className='mermaid-diagram';
return {pre:pre,mount:mount,src:pre.textContent||''};
});
var seq=0;
var renderGen=0;
var lastKey='';
function pageBg(fallback){
var els=[document.body,document.documentElement];
for(var i=0;i<els.length;i++){
var c=els[i]&&getComputedStyle(els[i]).backgroundColor;
if(c&&c!=='transparent'&&c!=='rgba(0, 0, 0, 0)')return c;
}
return fallback;
}
function render(){
var theme=root.getAttribute('data-theme');
var dark=theme==='dark'||(!!(mq&&mq.matches)&&theme!=='light');
var pal=dark?CFG.palettes.dark:CFG.palettes.light;
var bg=pageBg(pal.bg);
var key=(dark?'d':'l')+'|'+bg;
if(key===lastKey)return;
lastKey=key;
var gen=++renderGen;
var font=getComputedStyle(document.body).fontFamily||'sans-serif';
var nat={useMaxWidth:false};
mermaid.initialize({
startOnLoad:false,securityLevel:'strict',theme:'base',
flowchart:nat,sequence:nat,er:nat,state:nat,class:nat,pie:nat,
gantt:nat,journey:nat,timeline:nat,gitGraph:nat,mindmap:nat,xyChart:nat,
quadrantChart:nat,sankey:nat,c4:nat,requirement:nat,block:nat,
packet:nat,kanban:nat,architecture:nat,radar:nat,
themeVariables:{background:bg,mainBkg:pal.surface,primaryColor:pal.surface,
primaryTextColor:pal.text,lineColor:pal.line,primaryBorderColor:pal.border,
nodeBorder:pal.border,clusterBorder:pal.border,edgeLabelBackground:bg,
clusterBkg:'rgba(127,127,127,0.07)',titleColor:pal.text,
darkMode:dark,rowOdd:bg,rowEven:'rgba(127,127,127,0.07)',
attributeBackgroundColorOdd:bg,attributeBackgroundColorEven:'rgba(127,127,127,0.07)',
fontSize:'16px',fontFamily:font},
themeCSS:'.node rect, .node circle, .node polygon, .node path, .cluster rect { stroke-width: 2px; }'
});
items.forEach(function(it){
var id='claude-mermaid-'+seq++;
mermaid.render(id,it.src).then(function(r){
if(gen!==renderGen)return;
var prev=it.pre.previousElementSibling;
if(prev&&prev.className==='mermaid-diagram'&&prev!==it.mount)return;
it.mount.innerHTML=r.svg;
if(!it.mount.parentNode)it.pre.parentNode.insertBefore(it.mount,it.pre);
it.pre.style.display='none';
},function(){
var scratch=document.getElementById(id);
if(scratch)scratch.parentNode.removeChild(scratch);
scratch=document.getElementById('d'+id);
if(scratch)scratch.parentNode.removeChild(scratch);
if(gen!==renderGen)return;
if(it.mount.parentNode)it.mount.parentNode.removeChild(it.mount);
it.pre.style.display='';
});
});
}
render();
if(mq&&mq.addEventListener)mq.addEventListener('change',render);
if(typeof MutationObserver!=='undefined')new MutationObserver(render).observe(root,{attributes:true,attributeFilter:['data-theme']});
})();`
  );
}
var kc = 8;
function vc(e) {
  return `${MERMAID_RUNTIME_BEGIN_PREFIX}${e}-->`;
}
var xc = 8388608;
function bs(e, t = 0) {
  let r =
    e[0] ===
    `
`
      ? matchStyleOpenTag(e, 1)
      : 0;
  if (
    !r ||
    !e.endsWith(`</script>
`) ||
    e.includes(MERMAID_RUNTIME_BEGIN_PREFIX)
  )
    return !1;
  let o = 1 + r,
    d = findStyleCloseTag(e.slice(o));
  if (d === null || e.indexOf("<", o) !== o + d.data) return !1;
  let p = r > 7 ? 1 : 0,
    _ = trimAsciiWhitespace(e.slice(o + d.after)),
    w = matchMermaidRuntimeScriptTag(_, 0);
  if (w !== null) {
    if (!_.startsWith("</script>", w.len)) return !1;
    ((p += w.annotated ? 1 : 0), (_ = _.slice(w.len + 9)));
  }
  let E = countNestedScriptTags(_);
  return E >= 0 && E + p === t;
}
var Sc = 3,
  ys = {
    beginPrefix: MERMAID_RUNTIME_BEGIN_PREFIX,
    end: MERMAID_RUNTIME_END,
    lenDigitsMax: kc,
    maxSpan: xc,
    openTags: Sc,
    validate: bs,
  },
  Ac = 4096;
function _s(e) {
  let t = e.toLowerCase(),
    r = 0;
  for (;;) {
    if (((r = t.indexOf("<pre", r)), r < 0)) return !1;
    let o = t[r + 4];
    if (o === void 0) return !1;
    if (!TAG_NAME_TERMINATOR_CHARS.has(o)) {
      r += 4;
      continue;
    }
    let d = Math.min(r + Ac, t.length),
      p = d,
      _ = !1;
    for (let w = r + 4; w < d; w++)
      if (t[w] === ">") {
        ((p = w), (_ = !0));
        break;
      }
    if (Ec(t.slice(r + 4, p))) return !0;
    r = _ ? p + 1 : p;
  }
}
function Ec(e) {
  let t = e.length,
    r = 0;
  while (r < t) {
    let o = e.indexOf("class", r);
    if (o < 0) return !1;
    let d = e[o - 1];
    if (!(
      d === " " ||
      d === "\t" ||
      d ===
        `
` ||
      d === "\f" ||
      d === "\r"
    )) {
      r = o + 5;
      continue;
    }
    let p = o + 5;
    while (p < t && /\s/.test(e[p])) p++;
    if (e[p] !== "=") {
      r = o + 5;
      continue;
    }
    p++;
    while (p < t && /\s/.test(e[p])) p++;
    let _ = e[p],
      w;
    if (_ === '"' || _ === "'") {
      let E = e.indexOf(_, p + 1);
      if (E < 0) return !1;
      w = e.slice(p + 1, E);
    } else {
      let E = p;
      while (E < t && !/[\s>]/.test(e[E])) E++;
      w = e.slice(p, E);
    }
    for (let E of w.split(/\s+/)) if (E === "mermaid") return !0;
    r = o + 5;
  }
  return !1;
}
function Wwt() {
  let e = wc();
  if (findBundleSafetyIssue(e) !== null)
    return (logFeatureSad("artifact_publish", "mermaid_init_unsafe"), null);
  let t =
      `
` +
      _c +
      `
` +
      MERMAID_RUNTIME_SCRIPT_TAG +
      `</script>
<script>` +
      e +
      `</script>
`,
    r = ne().blockStripVerdicts;
  if (r.mermaid === void 0) r.mermaid = bs(t);
  if (!r.mermaid)
    return (logFeatureSad("artifact_publish", "mermaid_block_unstrippable"), null);
  return (
    `
` +
    vc(t.length) +
    t +
    MERMAID_RUNTIME_END +
    `
`
  );
}
function Nn(e) {
  return { chart: cs(e), mermaid: _s(e), highlight: ms(e) };
}
var In = "// DOC:anchors:begin",
  Rc =
    /^(P|H1|H2|H3|H4|H5|H6|LI|UL|OL|BLOCKQUOTE|ASIDE|SECTION|DIV|TABLE|TR|TD|TH|DL|DT|DD|FIGURE|FIGCAPTION|CAPTION|PRE|HEADER|FOOTER|NAV|SUMMARY|DETAILS|ADDRESS|HGROUP|HR)$/;
function Tc(e) {
  let t = 2166136261;
  for (let r = 0; r < e.length; r++)
    t = Math.imul(t ^ e.charCodeAt(r), 16777619);
  return (t >>> 0).toString(36);
}
function Pc(e, t, r, o) {
  let d =
    "b-" +
    Tc(
      e +
        `
` +
        t,
    );
  if (!r.has(d)) return d;
  let p = o.get(d) || 2;
  while (r.has(d + "-" + p)) p++;
  return (o.set(d, p + 1), d + "-" + p);
}
var ws = /^b-[0-9a-z]{1,7}(-[0-9]+)?$/,
  ks = "<!doctype html>",
  Cc = 33554432;
function Oc(e, t) {
  if (t === void 0) return;
  let r =
    /([^\t\n\f\r /=>]+)(?:[\t\n\f\r ]*=[\t\n\f\r ]*(?:"[^"]*"|'[^']*'|[^\t\n\f\r >]*))?/y;
  r.lastIndex = t.startOffset;
  let o = r.exec(e);
  if (o === null || o[1].toLowerCase() !== "id") return;
  let d = t.startOffset + o[0].length;
  return d < t.endOffset ? void 0 : { start: t.startOffset, end: d };
}
var Fr = (e) => e.attrs?.find((t) => t.name === "id")?.value,
  $c = new Set(["", "text/javascript", "application/javascript", "module"]),
  Mr = (e, t) => e.attrs?.some((r) => r.name === t) ?? !1,
  xs = (e) =>
    trimAsciiWhitespace(e.attrs?.find((t) => t.name === "type")?.value ?? "").toLowerCase(),
  Lc = (e) => xs(e) === "module",
  Fc = (e) =>
    e.tagName === "script" &&
    e.namespaceURI === Ufe &&
    !Mr(e, "src") &&
    !Mr(e, "nomodule") &&
    $c.has(xs(e)) &&
    (e.childNodes ?? []).some(
      (t) => t.nodeName === "#text" && (t.value ?? "").includes(In),
    ),
  Mc = (e, t) =>
    (e.attrs?.find((r) => r.name === "class")?.value ?? "")
      .split(/[\t\n\f\r ]+/)
      .includes(t),
  Nc = (e, t) => {
    for (let r = e.parentNode; r; r = r.parentNode) if (r === t) return !0;
    return !1;
  };
function vs(e) {
  let t = [],
    r = [...(e.childNodes ?? [])].reverse();
  while (r.length > 0) {
    let o = r.pop();
    if (o.tagName === void 0) continue;
    t.push(o);
    let d = o.childNodes ?? [];
    for (let p = d.length - 1; p >= 0; p--) r.push(d[p]);
  }
  return t;
}
function Ic(e) {
  let t = new Map(),
    r = [{ node: e, exit: !1 }];
  while (r.length > 0) {
    let o = r.pop(),
      d = o.node.childNodes ?? [];
    if (!o.exit) {
      r.push({ node: o.node, exit: !0 });
      for (let _ = d.length - 1; _ >= 0; _--)
        if (d[_].tagName !== void 0) r.push({ node: d[_], exit: !1 });
      continue;
    }
    let p = "";
    for (let _ of d)
      if (_.nodeName === "#text") p += _.value ?? "";
      else if (_.tagName !== void 0) p += t.get(_) ?? "";
    t.set(o.node, p);
  }
  return t;
}
function Dc(e) {
  let t = (w) => w.sourceCodeLocation?.startOffset ?? 1 / 0,
    r = e.filter((w) => Mc(w, "page")),
    o = 1 / 0;
  for (let w of r) o = Math.min(o, t(w));
  let d = r.some((w) => t(w) === 1 / 0),
    p = e.filter(Fc).sort((w, E) => t(w) - t(E)),
    _ = !1;
  for (let w of p) {
    if (!w.sourceCodeLocation?.endTag) continue;
    if (Lc(w)) {
      if (Mr(w, "async")) {
        logFeatureSad("artifact_publish", "block_ids_load_point_unsure");
        return;
      }
      _ = !0;
      continue;
    }
    let E = t(w);
    if (!(o < E)) {
      if (d) {
        logFeatureSad("artifact_publish", "block_ids_load_point_unsure");
        return;
      }
      continue;
    }
    let R = r.findIndex((D) => t(D) < E),
      C = r[R];
    if (r.slice(0, R).some((D) => t(D) === 1 / 0) || Nc(w, C)) {
      logFeatureSad("artifact_publish", "block_ids_load_point_unsure");
      return;
    }
    return { page: C, seen: w.sourceCodeLocation.endOffset };
  }
  return _ && r[0] !== void 0 ? { page: r[0], seen: 1 / 0 } : void 0;
}
function Bc(e, t) {
  let r = vs(t),
    o = Dc(r);
  if (o === void 0) return [];
  let { page: d, seen: p } = o,
    _ = vs(d),
    w = new Map();
  for (let I of _) {
    let N = Fr(I);
    if (N !== void 0 && !w.has(N)) w.set(N, I);
  }
  let E = new Set(),
    R = [];
  for (let I of r) {
    let N = Fr(I);
    if (N === void 0) continue;
    let ae = I.sourceCodeLocation?.attrs?.id?.startOffset;
    if (ae === void 0 ? p === 1 / 0 : ae < p) E.add(N);
    else if (ae === void 0) R.push(N);
  }
  if (R.some((I) => !E.has(I) && ws.test(I)))
    return (logFeatureSad("artifact_publish", "block_ids_unplaced_id"), []);
  let C = Ic(d),
    M = new Map(),
    D = [],
    F = 0;
  for (let I of _) {
    let N = I.tagName.toUpperCase(),
      ae = I.namespaceURI === Ufe && !/[^a-z0-9]/.test(I.tagName) && Rc.test(N),
      ue = Fr(I),
      V = ue !== void 0 && w.get(ue) === I;
    if (!ae || (V && ue !== "")) continue;
    let J = C.get(I) ?? "";
    if (((F += J.length), F > Cc)) return null;
    let U = Pc(N, J, E, M);
    E.add(U);
    let te = I.sourceCodeLocation;
    if (!te?.startTag || !ws.test(U)) continue;
    let re = Oc(e, te.attrs?.id);
    if (ue !== void 0 && re !== void 0)
      D.push({ start: re.start, end: re.end, text: `id="${U}"` });
    else if (ue === void 0) {
      let ce = te.startTag.startOffset + 1 + I.tagName.length;
      D.push({ start: ce, end: ce, text: ` id="${U}"` });
    }
  }
  return D;
}
function jc(e, t) {
  if (t.length === 0) return e;
  t.sort((d, p) => d.start - p.start);
  let r = "",
    o = 0;
  for (let d of t) {
    if (d.start < o) continue;
    ((r += e.slice(o, d.start) + d.text), (o = d.end));
  }
  return r + e.slice(o);
}
async function As(e) {
  if (!e.includes(In)) return e;
  try {
    let { nestingBudgetExceeded: t } = await import("../../01-核心基础设施/共享小工具-未细化/RAWTEXT_MODES.4tes4m4a.js");
    if (t(e)) return (logFeatureSad("artifact_publish", "block_ids_nesting_budget"), e);
    let { parse: r } = await import("../../01-核心基础设施/共享小工具-未细化/parse.4jce22r9.js"),
      o = ks + e,
      d = L$(r(o, { sourceCodeLocationInfo: !0 })),
      p = Bc(o, d);
    if (p === null)
      return (
        logFeatureSad("artifact_publish", "block_ids_text_budget"),
        n("[artifact] doc block ids skipped: too much text to hash"),
        e
      );
    return jc(o, p).slice(ks.length);
  } catch (t) {
    return (
      logFeatureSad("artifact_publish", "block_ids_parse_failed"),
      n(`[artifact] doc block ids skipped: ${String(t)}`),
      e
    );
  }
}
function B1e() {
  return aBe().status === "ok" && getSessionAccessToken() !== null;
}
function Dn() {
  let e = getSessionAccessToken();
  if (e === null) return null;
  let t = decodeTokenClaims(e);
  return t !== null && typeof t === "object" && !Array.isArray(t) ? t : null;
}
function Ir() {
  let e = Dn();
  return e !== null && Es(e);
}
function Es(e) {
  let t = "act_as_bot" in e ? e.act_as_bot : void 0;
  return t === !0 || t === "true";
}
function fn(e) {
  return typeof e === "string" && e !== "";
}
function Rs() {
  let e = Dn();
  if (e === null) return !1;
  return (
    !("account_uuid" in e || "sub" in e) &&
    "org_service_name" in e &&
    fn(e.org_service_name) &&
    "code_agent_id" in e &&
    fn(e.code_agent_id)
  );
}
function Ts() {
  if (!isByocEnvironment()) return !1;
  let e = Dn();
  if (e === null) return !1;
  let t = "ccr:role" in e ? e["ccr:role"] : void 0,
    r = "account_uuid" in e || "ccr:account_id" in e;
  return (
    t === "session_worker" && !r && "code_agent_id" in e && fn(e.code_agent_id)
  );
}
function Ps() {
  let e = Dn();
  if (e === null || !Es(e)) return !1;
  let t =
      ("account_uuid" in e && fn(e.account_uuid)) || ("sub" in e && fn(e.sub)),
    r = (p) => p !== void 0 && p !== null && p !== "",
    o = "code_agent_id" in e && r(e.code_agent_id),
    d =
      "ccr:child_owner_account_uuid" in e &&
      r(e["ccr:child_owner_account_uuid"]);
  return t && !o && !d;
}
var eqt = "/v1/code/agent-proxy",
  Hc = /^\/v1\/code\/sessions\/([^/]+)\/?$/;
function Cs() {
  if (isByocEnvironment()) {
    let e = aBe();
    if (e.status === "ok") {
      let t = Hc.exec(new URL(e.url).pathname)?.[1];
      if (t !== void 0) return `/v1/code/sessions/${t}/agent-proxy`;
    }
  }
  return eqt;
}
function Os(e) {
  let t = e.startsWith("/api/frame/") ? e.slice(10) : e;
  return `${Cs()}/frame${t}`;
}
var _w = "artifact_mount";
function j1e(e, t) {
  return `${Cs()}/artifact/${encodeURIComponent(e)}${t}`;
}
function W1e(e) {
  return { "x-frame-asset-token": e };
}
var Cr = "WebFetch",
  tqt = "Fetch",
  wCe = "allow_web_fetch";
function Bn(e) {
  return `This cloud session's network access follows the "Allow network egress" setting for Cowork in claude.ai, not an environment allowlist. To allow direct artifact reads here, an organization admin (or the user, on an individual plan) can turn that setting on and either allow all domains or add ${e} to its additional allowed domains.`;
}
class $s {
  endpoint = void 0;
  set(e) {
    this.endpoint = e;
  }
}
var Uc = new j(() => new $s());
function Ls() {
  return Uc.of(B().host);
}
function Swn(e) {
  Ls().set(e);
}
function Fs() {
  return Ls().endpoint;
}
var zc = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/,
  Vc = /^(?:0x[0-9a-f]*|[0-9]+)$/;
function Gc(e) {
  if (e === void 0) return;
  let t;
  for (let r of e.split(",")) {
    let o = r.trim().toLowerCase();
    if (o === "") continue;
    let d = o.split(".");
    if (
      o.length > 253 ||
      !d.every((p) => zc.test(p)) ||
      d.every((p) => Vc.test(p))
    )
      return;
    t ??= o;
  }
  return t;
}
function Ms(e) {
  if (KU(e) !== void 0) return !0;
  return (
    GW(e, (t) => {
      let r = A(t);
      return (
        r === "ECONNREFUSED" ||
        r === "ConnectionRefused" ||
        (r !== void 0 && bFe.has(r))
      );
    }) !== void 0
  );
}
class Ns {
  builtFor = void 0;
  agent = void 0;
  warnedMalformed = void 0;
  agentFor(e) {
    if (this.agent === void 0 || this.builtFor !== e) {
      let t = new bkt(e.proxyUrl, { ca: e.ca });
      ((t.options = { ...t.options, ca: e.ca }),
        (this.builtFor = e),
        (this.agent = t));
    }
    return this.agent;
  }
  warnMalformedOnce(e) {
    if (this.warnedMalformed === e) return;
    ((this.warnedMalformed = e),
      n(
        "[frame-tunnel] CCR_AGENT_PROXY_FRAME_HOSTS is malformed; keeping the gateway routes",
        { level: "warn" },
      ));
  }
}
var Yc = new j(() => new Ns());
function Is() {
  if (!isAnthropicHostedEnvironment()) return;
  let e = a.CCR_AGENT_PROXY_FRAME_HOSTS;
  if (e === void 0) return;
  let t = Yc.of(B().host),
    r = Gc(e);
  if (r === void 0) {
    t.warnMalformedOnce(e);
    return;
  }
  let o = Fs();
  if (o === void 0 || getUsableProxyUrl() !== void 0) return;
  return { host: r, agent: t.agentFor(o) };
}
var Kc = "x-ccr-relay-upstream",
  TG = "forbidden: CCR agent tokens";
function hoe(e) {
  if (typeof e === "string") return e.trim() === "not found";
  return typeof e === "object" && e !== null && e.error === "not_found";
}
function Hs(e) {
  return typeof e === "string" && e.trim() === "no version";
}
var qc = new Set([401, 403, 404, 413]),
  Xc = new Set([
    "organization network policy denies artifact storage reads for this session",
    "organization network policy could not be determined for this session; artifact storage reads denied",
  ]);
function Jc(e) {
  return (
    e.ok &&
    !hJ(e) &&
    e.status === 403 &&
    typeof e.data === "string" &&
    Xc.has(e.data.trim())
  );
}
var Zc = new Set([
    "organization network policy denies artifact reads for this session",
    "organization network policy could not be determined for this session",
  ]),
  z1e =
    "this cloud session's network access is turned off for the organization, or could not be confirmed, so the session gateway does not serve artifact pages or files to it";
function V1e(e, t) {
  return (
    e === 403 &&
    t !== void 0 &&
    t.byteLength <= 256 &&
    Zc.has(Buffer.from(t).toString("utf8").trim())
  );
}
var Ur = 300000,
  Qc = 15000,
  eu = 65536,
  Us = new WeakSet(),
  tu = /^x-frame-[a-z0-9-]+$/i;
function nu(e) {
  if (!e) return e;
  return ea(e, (t, r) => tu.test(r));
}
var nqt = S("boot"),
  wN = S("blobs"),
  NXe = S("comments"),
  rqt = S("subscriptions"),
  zs = S("types"),
  oqt = S("type_create"),
  Vs = S("db"),
  ru = new Map([
    [NXe, "tengu_cobalt_plinth_burnet"],
    [rqt, "tengu_cobalt_plinth_burnet"],
    [nqt, "tengu_cobalt_plinth_mallow"],
    [zs, "tengu_cobalt_plinth_mallow"],
    [oqt, "tengu_cobalt_plinth_mallow"],
    [Vs, "tengu_cobalt_plinth_gentian"],
  ]),
  su = [
    ...bt(nqt, [
      "GET /{slug}",
      "GET /versions/{slug}",
      "GET /frames",
      "POST /track",
    ]),
    ...bt(S("publish"), [
      "POST /deploy/direct",
      "POST /deploy/prepare",
      "POST /upload",
      "GET /contract/latest",
      "GET /contract/{v}",
      "GET /contract/{v}/{file}",
      "GET /contract/{v}/prompt",
      "GET /read/{slug}",
    ]),
    ...bt(NXe, [
      "GET /comments/{slug}",
      "POST /comments/{slug}/{thread}",
      "POST /comments/{slug}/{thread}/resolve",
      "POST /comments/{slug}/{thread}/summon-status",
    ]),
    ...bt(Vs, ["POST /db/agent"]),
    ...bt(zs, ["GET /types", "GET /types/{slug}"]),
    ...bt(oqt, ["POST /types/{slug}/create"]),
    ...bt(S("type_instances"), ["GET /types/{slug}/instances"]),
    ...bt(rqt, ["POST /subscribe/{slug}", "POST /unsubscribe/{slug}"]),
    ...bt(S("delete"), ["DELETE /{slug}"]),
    ...bt(S("favorites"), ["POST /favorite/{slug}", "DELETE /favorite/{slug}"]),
    ...[],
  ].sort((e, t) => Ds(e) - Ds(t));
function bt(e, t) {
  return t.map((r) => {
    let [o, d] = r.split(" ");
    return { method: o, pattern: d.split("/"), family: e };
  });
}
function Ds(e) {
  return countMatching(e.pattern, (t) => t.startsWith("{"));
}
function sqt(e, t) {
  let r = t
    .slice(10)
    .replace(/[?#].*$/s, "")
    .split("/");
  return (
    su.find(
      (d) =>
        d.method === e &&
        d.pattern.length === r.length &&
        d.pattern.every((p, _) =>
          p.startsWith("{") ? r[_] !== "" : p === r[_],
        ),
    )?.family ?? null
  );
}
function RK() {
  if (!isAnthropicHostedEnvironment() && !isByocEnvironment()) return !1;
  if (NCt() !== void 0) return !1;
  if (!H("tengu_cobalt_plinth_sorrel", !0)) return !1;
  if (!isAnthropicHostedEnvironment() && !H("tengu_cobalt_plinth_madder", !0)) return !1;
  return B1e();
}
function MH(e = null) {
  return RK() && !Ws(e);
}
function Ws(e) {
  if (!Ir() && !Gs()) return !1;
  if (e !== null && iqt(e)) return !1;
  let t = ne().frameRelay;
  if (!t.botContextNoted)
    ((t.botContextNoted = !0),
      logFeatureSad("artifact_frame_relay", "bot_context_not_served", { hosted: isAnthropicHostedEnvironment() }));
  return !0;
}
function _oe() {
  return isAnthropicHostedEnvironment() && RK();
}
var ou = "tengu_cobalt_plinth_medlar";
function Gs() {
  return isByocEnvironment() && H(ou, !1) && Ts();
}
function bwn() {
  if (isAnthropicHostedEnvironment()) return Ir() && Rs();
  return Gs();
}
function FXe() {
  return (isAnthropicHostedEnvironment() || isByocEnvironment()) && H("tengu_cobalt_plinth_fennel", !1) && bwn();
}
var au = "tengu_cobalt_plinth_comfrey";
function UZn() {
  return isByocEnvironment() && H(au, !1) && FXe();
}
function iqt(e) {
  let t = ru.get(e);
  return t !== void 0 && isAnthropicHostedEnvironment() && H(t, !1) && Ps();
}
function TN(e) {
  return (ne().frameRelay.declinedUntil.get(e) ?? 0) > Date.now();
}
function Lj(e, t = !1) {
  let r = ne().frameRelay,
    o = Date.now() + Ur;
  if ((r.declinedUntil.set(e, o), t)) r.hopFailedUntil.set(e, o);
  else r.hopFailedUntil.delete(e);
}
function wwn(e) {
  return (ne().frameRelay.hopFailedUntil.get(e) ?? 0) > Date.now();
}
function jn(e) {
  return (ne().frameRelay.servedUntil.get(e) ?? 0) > Date.now();
}
function EG(e) {
  let t = ne().frameRelay;
  (t.declinedUntil.delete(e),
    t.servedUntil.set(e, Date.now() + Ur),
    t.vouched.add(e));
}
function TCe(e) {
  return ne().frameRelay.vouched.has(e);
}
function Twn(e) {
  ne().frameRelay.vouched.delete(e);
}
function K1e(e) {
  if (_oe() || !(e === 401 || e === 403 || e === 404)) return !1;
  if (TCe(_w)) {
    if (e !== 404) Twn(_w);
    return !1;
  }
  return (Lj(_w), !0);
}
function yoe(e) {
  if (_oe() || TCe(_w)) return;
  if (e === void 0 || e >= 500 || e === 499) Lj(_w, !0);
}
var Ys = () => !0;
function Br(e, t, r) {
  (ne().frameRelay.tunnelDeclinedUntil.set(e, Date.now() + Ur),
    logFeatureSad("artifact_frame_relay", "tunnel_declined", {
      family: e,
      cause: fromEnum(t),
      status: r,
    }));
}
var Ks = new WeakSet();
function Bs(e) {
  return typeof e === "object" && e !== null && Ks.has(e);
}
async function aqt(e, t, r, o, d) {
  let _ =
    (ne().frameRelay.tunnelDeclinedUntil.get(d) ?? 0) > Date.now()
      ? void 0
      : Is();
  if (_ !== void 0) {
    let E = 0;
    try {
      let R = await jr(e, t, r, {
        ...o,
        host: "frame",
        auth: "none",
        frameTunnel: _,
        maxRedirects: 0,
      });
      if (!R.ok || hJ(R)) return { res: R, tunnelled: !0 };
      if (((E = R.status), E >= 500 || E === 499))
        return (Br(d, "hop_failed", E), { res: R, tunnelled: !0 });
    } catch (R) {
      if (isCancel(R)) throw R;
      if (!Ms(R)) {
        if ((Br(d, "threw", 0), typeof R === "object" && R !== null)) Ks.add(R);
        throw R;
      }
    }
    Br(d, E === 0 ? "never_opened" : "refused", E);
  }
  return {
    res: await jr(e, Os(t), r, {
      ...o,
      host: "ccr-gateway",
      auth: "session-jwt",
      maxRedirects: 0,
    }),
    tunnelled: !1,
  };
}
function jr(e, t, r, o) {
  switch (e) {
    case "GET":
      return ht.get(t, o);
    case "POST":
      return ht.post(t, r, o);
    case "DELETE":
      return ht.delete(t, r, o);
  }
}
function js(e, t, r, o) {
  return jr(e, t, r, {
    ...o,
    host: "frame",
    auth: "claude-ai-oauth",
    maxRedirects: 0,
    validateStatus: Ys,
  });
}
function lu() {
  return NCt() !== void 0 ? a.CLAUDE_CODE_ARTIFACTS_API_TOKEN : void 0;
}
function lqt() {
  let e = lu();
  if (e) return TUe(`Bearer ${e}`);
  return Ior();
}
async function BZn(e) {
  if (!FCt()) return;
  try {
    await checkAndRefreshOAuthTokenIfNeeded({ credentials: e });
  } catch {}
}
function hJ(e) {
  return e.ok && e.response.headers?.[Kc] !== void 0;
}
function Hr(e) {
  return e.ok && !hJ(e) && qc.has(e.status);
}
function Ewn(e) {
  return { refused: Hr(e), vouched: hJ(e) || (e.ok && e.status < 300) };
}
function $Xe() {
  return RK() && !isAnthropicHostedEnvironment();
}
function qs(e, t, r) {
  let o = r !== "fallback",
    d = RK(),
    p = d ? sqt(e, t) : null;
  if (d && Ws(p))
    return r === "only" && isAnthropicHostedEnvironment()
      ? { leg: "not-served", relaying: !1, family: null }
      : { leg: "direct", relaying: !1, family: null };
  let _ = d;
  if (p === null)
    return {
      leg: o && isAnthropicHostedEnvironment() && _ ? "unsent" : "direct",
      relaying: _,
      family: p,
    };
  if (
    TN(p) &&
    (r === "fallback" || (r === "bound" && !Xs(p)) || (!isAnthropicHostedEnvironment() && wwn(p)))
  )
    return { leg: "direct", relaying: _, family: p };
  return { leg: "relay", relaying: !0, family: p };
}
function Xs(e) {
  return isAnthropicHostedEnvironment() && (e === null || !iqt(e));
}
function jZn(e, t) {
  return qs(e, t, "fallback").leg === "relay" ? "relay" : "direct";
}
async function Ut(e, t, r, o, d = "fallback") {
  let p = d === "only" ? isAnthropicHostedEnvironment() : d === "bound" && Xs(sqt(e, t)),
    { relayProbe: _, ...w } = o,
    E = async () => ({
      ...(await js(e, t, r, w)),
      route: "direct",
      fromFrame: !0,
    }),
    R = qs(e, t, d),
    C = R.relaying && !isAnthropicHostedEnvironment(),
    M = (q, ge) => (
      logFeatureSad("artifact_frame_relay", "relay_only_unavailable", {
        ...(R.family !== null && { family: R.family }),
        status: q,
        probed: ge,
      }),
      {
        ok: !1,
        reason: "relay-unavailable",
        status: q,
        route: "relay",
        fromFrame: !1,
      }
    );
  if (R.leg === "not-served")
    return {
      ok: !1,
      reason: "relay-not-served",
      status: 0,
      route: "relay",
      fromFrame: !1,
    };
  if (R.leg !== "relay") return R.leg === "unsent" ? M(0, !1) : E();
  let { family: D } = R,
    F = !1,
    I = () => ({ ...(C && { runner: !0 }), ...(F && { tunnel: !0 }) }),
    { refreshOAuth: N, isBackground: ae, credentials: ue, ...V } = w,
    J = async (q, ge, pe, Le) => {
      let Ge = await aqt(
        q,
        ge,
        pe,
        { ...Le, headers: nu(Le.headers), validateStatus: Ys },
        D,
      );
      return ((F = Ge.tunnelled), Ge.res);
    },
    U = async (q, ge) => {
      if ((Lj(D, q === 0 || q >= 500), p)) return M(q, ge);
      let pe;
      try {
        let Le = await js(e, t, r, w);
        return (
          (pe = Le.ok ? Le.status : void 0),
          { ...Le, route: "direct", fromFrame: !0, gatewayDeclined: q }
        );
      } finally {
        logFeatureSad("artifact_frame_relay", "relay_unavailable", {
          family: D,
          status: q,
          probed: ge,
          ...(pe !== void 0 && { direct_status: pe }),
          ...I(),
        });
      }
    };
  if (_ !== void 0 && !jn(D)) {
    let q;
    try {
      q = await J("GET", _, void 0, {
        signal: V.signal,
        timeout: Qc,
        maxContentLength: eu,
      });
    } catch (ge) {
      if (isCancel(ge)) throw ge;
      return ((F = Bs(ge)), U(0, !0));
    }
    if (!q.ok) return p ? M(0, !0) : E();
    if (Hr(q) || (!hJ(q) && (q.status >= 500 || q.status === 499)))
      return U(q.status, !0);
    if (!hJ(q) && q.status >= 300) return p ? M(q.status, !0) : E();
    EG(D);
  }
  let te;
  try {
    te = await J(e, t, r, V);
  } catch (q) {
    if (!isCancel(q)) {
      if (((F = Bs(q)), KU(q) !== void 0)) return U(0, !1);
      if (
        (Lj(D, !0),
        logFeatureBad("artifact_frame_relay", "request_error", { family: D, ...I() }),
        typeof q === "object" && q !== null)
      )
        Us.add(q);
    }
    throw q;
  }
  if (!te.ok) return p ? M(0, !1) : E();
  if (Jc(te))
    return (
      EG(D),
      logFeatureSad("artifact_frame_relay", "relay_policy_refused", {
        family: D,
        status: te.status,
        ...I(),
      }),
      { ...te, route: "relay", fromFrame: !1, gatewayPolicy: "network-off" }
    );
  if (Hr(te)) return U(te.status, !1);
  let re = hJ(te),
    ce = re || te.status < 300;
  if (ce)
    (EG(D),
      logFeatureOk("artifact_frame_relay", {
        family: D,
        status: te.status,
        upstream: re,
        ...I(),
      }));
  else if (te.status >= 500 || te.status === 499)
    (Lj(D, !0),
      logFeatureBad("artifact_frame_relay", "relay_error", {
        family: D,
        status: te.status,
        ...I(),
      }));
  else
    logFeatureSad("artifact_frame_relay", "relay_refused", {
      family: D,
      status: te.status,
      ...I(),
    });
  return { ...te, route: "relay", fromFrame: ce };
}
function nP(e) {
  return typeof e === "object" && e !== null && Us.has(e);
}
function UXe(e) {
  return (
    e instanceof Error && /maxContentLength size of .* exceeded/.test(e.message)
  );
}
var Nd = {
  get(e, t) {
    return Ut("GET", e, void 0, t);
  },
  post(e, t, r) {
    return Ut("POST", e, t, r);
  },
  postRelayOnly(e, t, r) {
    return Ut("POST", e, t, r, "only");
  },
  getRelayOnly(e, t) {
    return Ut("GET", e, void 0, t, "only");
  },
  postRelayBound(e, t, r) {
    return Ut("POST", e, t, r, "bound");
  },
  getRelayBound(e, t) {
    return Ut("GET", e, void 0, t, "bound");
  },
  deleteRelayOnly(e, t) {
    return Ut("DELETE", e, void 0, t, "only");
  },
};
class Vr {
  availability = () => !1;
  register(e) {
    this.availability = e;
  }
  isAvailable() {
    return this.availability();
  }
}
var Js = new Vr();
function WZn(e) {
  Js.register(e);
}
function Gwt() {
  return Js.isAvailable();
}
var Zs = new Vr();
function GZn(e) {
  Zs.register(e);
}
function zr() {
  return Zs.isAvailable()
    ? `read it with the ${ARTIFACT_TOOL_NAME} tool (action: "read", url)`
    : `${Cr} the url`;
}
function qwt() {
  return Gwt()
    ? `for a workshop page use the ${ARTIFACT_TOOL_NAME} tool's read_page_data action with schema "workshop-decisions" \u2014 the workshop skill forbids a content read there; otherwise ${zr()}`
    : zr();
}
function Efe(e) {
  let t = e !== "plain" && Gwt(),
    r = zr(),
    o = Vo(),
    d = ne().contentHostEgressDenied.has(o) && !(RK() && !TN(_w)),
    p =
      o === "staging"
        ? "*.frame.staging.claudeusercontent.com"
        : "*.frame.claudeusercontent.com";
  return {
    readRemedy: t
      ? `for a workshop page use the ${ARTIFACT_TOOL_NAME} tool's read_page_data action with schema "workshop-decisions" \u2014 the workshop skill forbids a content read and force there; otherwise ${r}`
      : r,
    forceAdvisory: t
      ? ""
      : " force:true discards that newer version \u2014 someone's save from the page itself, or another session's publish \u2014 so use it only when the user explicitly asks to overwrite.",
    contentReadsBlocked: d
      ? isCoworkEntrypoint()
        ? `The artifact content host is blocked from this session, so the live version can be neither read nor handed over here. ${Bn(p)} Tell the user, and publish again only once you can build on the live version.`
        : `This environment's network allowlist blocks the artifact content host, so the live version can be neither read nor handed over here until ${p} is added at environment settings \u2192 Code \u2192 Network access \u2192 Custom \u2192 Allowed domains. An admin can add the same entry to a shared environment from admin settings \u2192 Cloud environments; sessions that run in that environment get the access. Tell the user, and publish again only once you can build on the live version.`
      : null,
  };
}
function X1e() {
  let e = ne().prReviewTemplate;
  return (
    (e.chrome ??= import("../../01-核心基础设施/共享小工具-未细化/SKILL_COMPOSED_MD.93smkgn7.js").then((t) =>
      cu(t.SKILL_FILES["template.html"] ?? ""),
    )),
    e.chrome
  );
}
function cqt(e, t) {
  let r = e.indexOf(t);
  if (r === -1) return "";
  let o = /<div\b|<\/div>/g;
  o.lastIndex = r;
  let d = 0;
  for (let p = o.exec(e); p !== null; p = o.exec(e))
    if (((d += p[0] === "</div>" ? -1 : 1), d === 0))
      return e.slice(r, p.index + 6);
  return "";
}
function cu(e) {
  return {
    pinnedMarkup: [
      {
        label: "stylesheet",
        bytes: e.match(/<style>[\s\S]*?<\/style>/)?.[0] ?? "",
        terminal: "</style>",
      },
      {
        label: "stale-banner",
        bytes: cqt(e, '<div class="stale-banner"'),
        terminal: "</div>",
      },
      {
        label: "stamp-control",
        bytes: cqt(e, '<div class="stamp"'),
        terminal: "</div>",
      },
    ],
    inlineStyleAllowlist: dedupe(
      [...e.matchAll(/\bstyle\s*=\s*"([^"]*)"/g)].map((r) => r[1]),
    ),
    linkPlaceholders: dedupe(
      [...e.matchAll(/(?:src|href)\s*=\s*"([^"]*)"/gi)]
        .map((r) => r[1])
        .filter((r) => !/^[a-z][a-z0-9+.-]*:|^\/\//i.test(r)),
    ),
  };
}
var eo = /\bstale-banner\b|\bstamp(-[a-z]+)?\b/i,
  Awn = "80cb1876b48d73daa3ee6df8dd1124eaa6d07e79d223bd7efec01e98714c4cec";
function Y1e(e, t, r) {
  return `https://github.com/${e}/${t}/pull/${r}`;
}
var BXe = "prr-anchor";
function uqt(e) {
  let t = findTagEnd(e, 7),
    r = t - 1 - DATA_ID_ATTRIBUTE_LENGTH;
  return t > 0 && r > 0 && matchDataIdAttribute(e, r) !== 0 ? e.slice(0, r) + e.slice(t - 1) : e;
}
function jXe(e) {
  let t = [],
    r = /<script/gi,
    o = /<\/script/gi,
    d = 0;
  for (;;) {
    r.lastIndex = d;
    let p = r.exec(e);
    if (p === null) break;
    let _ = p.index,
      w = e[_ + 7];
    if (w !== void 0 && !/[\t\n\f\r />]/.test(w)) {
      d = _ + 1;
      continue;
    }
    let E = _ + 7,
      R = -1;
    for (;;) {
      o.lastIndex = E;
      let C = o.exec(e);
      if (C === null) break;
      let M = e[C.index + 8];
      if (M === ">") {
        R = C.index + 9;
        break;
      }
      if (M !== void 0 && /[\t\n\f\r /]/.test(M)) {
        let D = e.indexOf(">", C.index + 8);
        if (D === -1) break;
        R = D + 1;
        break;
      }
      E = C.index + 8;
    }
    if (R === -1) break;
    (t.push(e.slice(_, R)), (d = R));
  }
  return t;
}
var WXe = /^[A-Za-z0-9-]{1,39}$/,
  GXe = /^(?!\.\.?$)[A-Za-z0-9._-]{1,100}$/,
  qXe = /^[0-9a-f]{40}$/,
  Cwn = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/,
  zXe = /^[A-Za-z0-9_.-]{1,64}$/,
  Afe = /^[A-Za-z0-9_]{1,48}$/,
  zwt = /^[A-Za-z0-9_.-]{1,64}$/,
  ECe = /^method$/i,
  pn = {
    owner: "owner",
    repo: "repo",
    number: 1,
    headSha: "0".repeat(40),
    publishedAt: "1970-01-01T00:00:00Z",
  };
function to(e) {
  return (
    e.owner === pn.owner &&
    e.repo === pn.repo &&
    e.number === pn.number &&
    e.headSha === pn.headSha &&
    e.publishedAt === pn.publishedAt
  );
}
var uu = new Set(["kind", "owner", "repo", "number", "headSha", "publishedAt"]),
  du = new Set(["tool", "input", "shaPath"]);
function fu(e) {
  if (!isRecord(e)) return "anchor is missing";
  for (let t of Object.keys(e))
    if (!uu.has(t)) return "anchor carries an unexpected key";
  if (e.kind !== "pr") return 'anchor.kind is not "pr"';
  if (typeof e.owner !== "string" || !WXe.test(e.owner))
    return "anchor.owner is not a valid owner";
  if (typeof e.repo !== "string" || !GXe.test(e.repo))
    return "anchor.repo is not a valid repository name";
  if (!Number.isSafeInteger(e.number) || e.number < 1)
    return "anchor.number is not a positive integer";
  if (typeof e.headSha !== "string" || !qXe.test(e.headSha))
    return "anchor.headSha is not 40 lowercase hex";
  if (typeof e.publishedAt !== "string" || !Cwn.test(e.publishedAt))
    return "anchor.publishedAt is not a UTC ISO-8601 timestamp";
  return null;
}
function pu(e) {
  if (e === null) return null;
  if (!isRecord(e)) return "live is neither null nor an object";
  for (let o of Object.keys(e))
    if (!du.has(o)) return "live carries an unexpected key";
  if (typeof e.tool !== "string" || !zXe.test(e.tool))
    return "live.tool is not a tool identifier";
  if (!isRecord(e.input)) return "live.input is not an object";
  let t = Object.keys(e.input);
  if (t.length > 8) return "live.input has too many keys";
  for (let o of t) {
    if (!Afe.test(o)) return "live.input has a non-identifier key";
    let d = e.input[o];
    if (ECe.test(o) && typeof d !== "string")
      return "live.input carries a non-string value under the method key \u2014 an operation selector is a word";
    if (typeof d === "string") {
      if (!zwt.test(d))
        return "live.input carries a non-identifier string value";
    } else if (typeof d === "number") {
      if (!Number.isSafeInteger(d))
        return "live.input carries a non-integer number";
    } else return "live.input carries a value that is not a string or integer";
  }
  let r = e.shaPath;
  if (!Array.isArray(r) || r.length === 0 || r.length > 6)
    return "live.shaPath is not a 1-6 element array";
  for (let o of r)
    if (typeof o !== "string" || !Afe.test(o))
      return "live.shaPath carries a non-identifier segment";
  return null;
}
function hu(e) {
  if (Object.keys(e).filter((o) => o !== "anchor" && o !== "live").length > 0)
    return "the prr-anchor island carries unexpected keys";
  let r = fu(e.anchor);
  if (r) return r;
  return pu(e.live === void 0 ? null : e.live);
}
function qZn(e) {
  let t = e.match(
    /<script type="application\/json" id="prr-anchor">([^<]{2,65536})<\/script>/,
  );
  if (!t) return null;
  let r;
  try {
    r = JSON.parse(t[1]);
  } catch {
    return null;
  }
  if (!isRecord(r) || !isRecord(r.live)) return null;
  let o = r.live.tool;
  return typeof o === "string" && zXe.test(o) ? o : null;
}
var dqt = "prr-decisions",
  vwn = "a38faf05e263c3da27c3750139ed41a14d47344b2ca96191b4e9c0440632c8c0",
  Vwt = /^[a-z0-9-]{1,24}$/,
  Qs = new Set(["id", "opts", "state", "choice"]),
  gu = new Set(["open", "resolved", "acted"]);
function mu(e) {
  if (Object.keys(e).length !== 1 || !Array.isArray(e.items))
    return "the decisions island is not {items: [...]}";
  let r = e.items;
  if (r.length > 20) return "the decisions island carries more than 20 items";
  let o = new Set();
  for (let d of r) {
    if (!isRecord(d)) return "a decisions item is not an object";
    let p = Object.keys(d);
    if (p.length !== Qs.size || p.some((w) => !Qs.has(w)))
      return "a decisions item carries an unexpected or missing key";
    if (typeof d.id !== "string" || !Vwt.test(d.id))
      return "a decisions item id is not a valid token";
    if (o.has(d.id)) return "decisions item ids are not unique";
    if ((o.add(d.id), typeof d.state !== "string" || !gu.has(d.state)))
      return "a decisions item state is not open, resolved, or acted";
    let _ = d.opts;
    if (!Array.isArray(_) || _.length < 1 || _.length > 8)
      return "a decisions item opts is not an array of 1 to 8 tokens";
    for (let w of _)
      if (typeof w !== "string" || !Vwt.test(w))
        return "a decisions option is not a valid token";
    if (d.choice !== null) {
      if (typeof d.choice !== "string" || !Vwt.test(d.choice))
        return "a decisions choice is not null or a valid token";
      if (!_.includes(d.choice))
        return "a decisions choice is not among its opts";
    }
  }
  return null;
}
var J1e = "prr-stamp",
  Kwt = "a8b6abcc8650343e067901dc560ace5e9095b4ffd106118e718d7566566dfd22",
  bu = new Set(["tool", "input", "statePath"]);
function yu(e) {
  if (e === null) return null;
  if (!isRecord(e)) return "stamp is neither null nor an object";
  for (let o of Object.keys(e))
    if (!bu.has(o)) return "stamp carries an unexpected key";
  if (typeof e.tool !== "string" || !zXe.test(e.tool))
    return "stamp.tool is not a tool identifier";
  if (!isRecord(e.input)) return "stamp.input is not an object";
  let t = Object.keys(e.input);
  if (t.length > 8) return "stamp.input has too many keys";
  for (let o of t) {
    if (!Afe.test(o)) return "stamp.input has a non-identifier key";
    let d = e.input[o];
    if (typeof d === "string") {
      if (!zwt.test(d))
        return "stamp.input carries a non-identifier string value";
    } else if (typeof d === "number") {
      if (!Number.isSafeInteger(d))
        return "stamp.input carries a non-integer number";
    } else return "stamp.input carries a value that is not a string or integer";
  }
  let r = e.statePath;
  if (!Array.isArray(r) || r.length === 0 || r.length > 6)
    return "stamp.statePath is not a 1-6 element array";
  for (let o of r)
    if (typeof o !== "string" || !Afe.test(o))
      return "stamp.statePath carries a non-identifier segment";
  return null;
}
function wu(e) {
  if (Object.keys(e).length !== 1 || !("stamp" in e))
    return "the prr-stamp island is not {stamp: ...}";
  return yu(e.stamp);
}
var Cfe = [
    { id: BXe, validate: hu },
    { id: dqt, validate: mu },
    { id: J1e, validate: wu },
  ],
  VXe = [
    { label: "staleness", sha256: Awn },
    { label: "decisions", sha256: vwn },
    { label: "approve", sha256: Kwt },
  ];
function ku(e) {
  return new RegExp(
    `<script type="application/json" id="${e}">([^<]*)</script>`,
    "g",
  );
}
function vu(e) {
  return new RegExp(`<script type="application/json" id="${e}"${DATA_ID_ATTRIBUTE_PATTERN}>`);
}
function Wr(e) {
  return new RegExp(`(?<!-)\\bid\\s*=\\s*["']?${e}`, "i");
}
function xu(e) {
  return new RegExp(`id\\s*=\\s*["']?${e}`, "i");
}
function Su(e) {
  return e.replace(/&#(?:x0*([0-9a-f]{1,6})|0*(\d{1,7}));?/gi, (t, r, o) => {
    let d = Number.parseInt(r ?? o, r !== void 0 ? 16 : 10);
    return d > 0 && d <= 1114111 ? String.fromCodePoint(d) : t;
  });
}
function Au(e) {
  let t = Un,
    r = new RegExp(
      `(?<!-)\\bid[\\t\\n\\f\\r ]*=[\\t\\n\\f\\r ]*(?:"([^"]{0,${t}})"|'([^']{0,${t}})'|([^\\t\\n\\f\\r >"'][^\\t\\n\\f\\r >]{0,${t}})(?=[\\t\\n\\f\\r >]|$)|([\\s\\S]))`,
      "gi",
    );
  for (let o = r.exec(e); o !== null; o = r.exec(e)) {
    if (o[4] !== void 0) {
      if (o[4] === ">") continue;
      return !0;
    }
    let d = o[1] ?? o[2] ?? o[3] ?? "";
    if (!d.includes("&#")) continue;
    let p = Su(d).toLowerCase();
    if (Cfe.some((_) => p.startsWith(_.id))) return !0;
  }
  return !1;
}
function Hn(e, t, r, o) {
  let d = new RegExp(
    `(${t}[\\t\\n\\f\\r ]*=[\\t\\n\\f\\r ]*)(?:"([^"]{0,${Un}})"|'([^']{0,${Un}})'|([^\\t\\n\\f\\r >"'][^\\t\\n\\f\\r >]{0,${Un}})(?=[\\t\\n\\f\\r >]|$))?`,
    "gi",
  );
  for (let p = d.exec(e); p !== null; p = d.exec(e)) {
    let _ = p[2] ?? p[3] ?? p[4];
    if (_ === void 0) {
      let E = p.index + p[1].length;
      if (e[E] === ">") {
        d.lastIndex = E;
        continue;
      }
      return o;
    }
    let w = r(_);
    if (w !== null) return w;
    d.lastIndex = p.index + p[1].length;
  }
  return null;
}
function Eu(e, t, r, o) {
  if (/<\/?script/i.test(e))
    return "a stray or unclosed <script fragment remains outside the registered blocks";
  if (/\bon[a-z0-9_]+\s*=(?!>)/i.test(e))
    return "the body carries an on*= attribute pattern";
  if (/javascript:/i.test(e.replace(/[\t\n\r]/g, "")))
    return "the body carries a javascript: URL";
  if (
    /<(iframe|frame|frameset|embed|object|base|link|img|image|feimage|input|form|meta|video|audio|source|track|use|animate\w*|set|discard|applet|dialog|label)\b/i.test(
      e,
    )
  )
    return "the body carries an element that can reach the network, navigate, or execute";
  if (/\bsrcdoc\s*=(?!>)/i.test(e))
    return "the body carries a srcdoc attribute";
  if (/\bhttp-equiv\s*=(?!>)/i.test(e))
    return "the body carries an http-equiv attribute";
  if (/\battributename\s*=\s*["']?on/i.test(e))
    return "the body carries an SMIL attributeName targeting an event handler";
  if (/[\s/"'](?:srcset|poster|ping|formaction|background)\s*=(?!>)/i.test(e))
    return "the body carries a fetch-capable attribute";
  if (/[\s/"']for\s*=(?!>)/i.test(e))
    return "the body carries a click-forwarding for attribute";
  if (/[\s/"'](?:transform|pointer-events|overflow)\s*=(?!>)/i.test(e))
    return "the body carries an overlay-capable presentation attribute";
  if (
    /<(template|textarea|noscript|xmp|plaintext|noembed|noframes|select|optgroup|option|math)\b/i.test(
      e,
    )
  )
    return "the body carries a content-inerting container";
  let d = [
    ...e.matchAll(/<title(?=[\t\n\f\r >/]|$)|<\/title(?=[\t\n\f\r >/]|$)/gi),
  ].map((M) => M[0][1] !== "/");
  if (
    d.length > 2 ||
    d.length % 2 !== 0 ||
    d.some((M, D) => M !== (D % 2 === 0))
  )
    return "the body carries a missing, extra, stray, or unclosed title element";
  if (
    /[\s/"'](?:popover(?:target(?:action)?)?|commandfor|interest(?:for|target))\s*=(?!>)/i.test(
      e,
    )
  )
    return "the body carries a popover-family or invoker attribute";
  let p = new Map(),
    _ =
      /data-decision-id[\t\n\f\r ]*=[\t\n\f\r ]*(?:"([^"]{0,256})"|'([^']{0,256})'|([^\t\n\f\r >]{1,256}))/gi;
  for (let M = _.exec(e); M !== null; M = _.exec(e)) {
    let D = M[1] ?? M[2] ?? M[3];
    if ((p.set(D, (p.get(D) ?? 0) + 1), p.get(D) > 1))
      return "a data-decision-id appears on more than one element";
    _.lastIndex = M.index + 1;
  }
  if (e.includes("<![CDATA[")) return "the body carries a CDATA section";
  for (let M = e.indexOf("<!--"); M !== -1;) {
    let D = e.slice(M + 4, M + 6),
      F;
    if (D.startsWith(">")) F = M + 5;
    else if (D === "->") F = M + 6;
    else {
      let I = e.indexOf("-->", M + 4),
        N = e.indexOf("--!>", M + 4);
      if (I === -1 && N === -1) return "the body carries an unclosed comment";
      F = I === -1 ? N + 4 : N === -1 ? I + 3 : Math.min(I + 3, N + 4);
    }
    M = e.indexOf("<!--", F);
  }
  if (/@import|url\(|image-set\(/i.test(e))
    return "the body carries a CSS network-reaching function";
  if (/<style/i.test(e))
    return "a stylesheet other than the pinned template stylesheet";
  let w = Hn(
    e,
    "\\bclass",
    (M) =>
      eo.test(M)
        ? "a counterfeit element carries a script-addressed class"
        : null,
    "a class attribute has no capturable value",
  );
  if (w !== null) return w;
  let E = Hn(
    e,
    "\\bstyle",
    (M) =>
      t.includes(M) ? null : "an inline style outside the template allowlist",
    "a style attribute has no capturable value",
  );
  if (E !== null) return E;
  if (/[^\s"'<>=/]{257,}\s*=/.test(e))
    return "an attribute name exceeds the scan bound";
  let R = Hn(
    e,
    `(?<=[\\s"'</=]|^)[^\\s"'<>=/]{1,256}`,
    (M) =>
      /\\|&(?!(?:amp|lt|gt|quot|#39);)[#a-zA-Z]/.test(M)
        ? "an attribute value carries an escape or character reference outside the mandated set"
        : null,
    "an attribute has no capturable value",
  );
  if (R !== null) return R;
  let C = Hn(
    e,
    "(?:src|href)",
    (M) =>
      r.has(M) || (o !== null && o.test(M))
        ? null
        : "the body carries a src or href that is not the PR link",
    "a src or href attribute has no capturable value",
  );
  if (C !== null) return C;
  return null;
}
var no = 524288,
  Un = 2048;
function _J(e, { parsedAsMarkup: t } = { parsedAsMarkup: !0 }) {
  if (Cfe.some((d) => Wr(d.id).test(e)) || (t && Au(e))) return !0;
  if (e.length > no) return !1;
  let o = new Set(VXe.map((d) => d.sha256));
  return jXe(e).some((d) => o.has(hashSha256(uqt(d))));
}
function ro(e, t, r = {}) {
  let o = r.crUrlRe ?? null;
  if (!_J(e)) return { applies: !1 };
  if (e.length > no)
    return {
      applies: !0,
      ok: !1,
      reason: "the page is too large for a review page",
    };
  let d = jXe(e),
    p = new Map(VXe.map((U) => [U.sha256, U])),
    _ = (U) => ({ applies: !0, ok: !1, reason: U }),
    w = !Wr(J1e).test(e),
    E = !d.some((U) => hashSha256(U) === Kwt),
    R = t.pinnedMarkup.find((U) => U.label === "stamp-control"),
    C = R !== void 0 && R.bytes !== "" && !e.includes(R.bytes);
  if (w && E && C)
    return _(
      "the page predates the approve control this CLI requires \u2014 it was published by a different version of this CLI, and a republish cannot reproduce it. Re-run /artifact-pr-review to publish a fresh review (decisions recorded on the old page stay visible there; the fresh page starts with its decisions open).",
    );
  let M = new Set(),
    D = null,
    F = null,
    I = null;
  for (let U of Cfe) {
    let te = [...e.matchAll(ku(U.id))];
    if (Wr(U.id).test(e) && te.length === 0) {
      if (vu(U.id).test(e))
        return _(
          `the ${U.id} island carries the server's element id \u2014 this is the published page read back, not your local copy; republish from the HTML (or payload) you authored, never from bytes you read`,
        );
      return _(`the ${U.id} island is malformed or not a JSON script element`);
    }
    if (te.length !== 1)
      return _(`the page must carry exactly one ${U.id} island`);
    let re = te[0][1] ?? "";
    if (/[<>&'\\]/.test(re))
      return _(`the ${U.id} island carries a disallowed character`);
    let ce;
    try {
      ce = z(re);
    } catch {
      return _(`the ${U.id} island is not valid JSON`);
    }
    if (!isRecord(ce)) return _(`the ${U.id} island is not a JSON object`);
    let q = U.validate(ce);
    if (q) return _(q);
    if (b(ce) !== re)
      return _(`the ${U.id} island is not in canonical JSON form`);
    if (U.id === BXe)
      ((D = ce.anchor), (F = ce.live === void 0 ? null : ce.live));
    if (U.id === J1e) I = ce.stamp === void 0 ? null : ce.stamp;
    M.add(te[0][0]);
  }
  if (I !== null && r.allowStampBinding !== !0)
    return _(
      'approve-enabled review pages publish only through the composed lane \u2014 set the prr-stamp island to {"stamp":null}, or publish via /artifact-pr-review with a pr_review payload',
    );
  let N = new Map();
  for (let U of d) {
    if (M.has(U)) continue;
    let te = p.get(hashSha256(U));
    if (te === void 0)
      return _(
        "a script block matches neither a registered island nor a pinned template script \u2014 the page must carry the template blocks byte-for-byte",
      );
    N.set(te.label, (N.get(te.label) ?? 0) + 1);
  }
  for (let U of VXe)
    if ((N.get(U.label) ?? 0) !== 1)
      return _(`the page must carry exactly one pinned ${U.label} script`);
  for (let U of t.pinnedMarkup) {
    if (U.bytes === "")
      return _(`the ${U.label} template block could not be derived`);
    let te = e.indexOf(U.bytes);
    if (te === -1 || e.indexOf(U.bytes, te + U.bytes.length) !== -1)
      return _(
        `the page must carry the template ${U.label} byte-for-byte exactly once`,
      );
  }
  let ae = e;
  for (let U of [
    ...M,
    ...d.filter((te) => !M.has(te)),
    ...t.pinnedMarkup.map((te) => te.bytes),
  ])
    ae = ae.replace(U, "");
  for (let U of Cfe)
    if (xu(U.id).test(ae))
      return _(
        `an element other than the registered island carries the ${U.id} id`,
      );
  let ue = new Set(t.linkPlaceholders);
  if (D !== null) ue.add(Y1e(D.owner, D.repo, D.number));
  let V = Eu(
    ae,
    t.inlineStyleAllowlist,
    ue,
    D !== null && to(D) && F === null && I === null ? o : null,
  );
  if (V) return _(V);
  let J = Nn(e);
  if (r.allowMermaidFence === !0) J.mermaid = !1;
  if (Object.values(J).some(Boolean))
    return _(
      "the body would trigger a runtime script injection after validation (mermaid fence, language-tagged code, or chart marker)" +
        (J.mermaid
          ? " \u2014 composed review pages with a diagram must republish through the composed lane, not as raw HTML"
          : ""),
    );
  return { applies: !0, ok: !0 };
}
var io = "[a-z][a-z_-]{0,31}",
  Pt = new RegExp("^[a-z][a-z_-]{0,31}$");
var Ru = 100;
function Q1e(e) {
  return sanitizeArtifactTitle(so(e));
}
function so(e) {
  let t = e.normalize("NFC");
  return Array.from(t, (o) => (isDecisionSurfaceControl(o.codePointAt(0) ?? 0) ? " " : o))
    .join("")
    .replace(INVISIBLE_BLANKS, " ")
    .replace(Tu, " ")
    .replace(
      /[\u0300-\u036F\u0483-\u0489\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20F0\uA66F-\uA67D\uFE20-\uFE2F]/g,
      " ",
    );
}
function ACe(e, t) {
  let r = Array.from(so(e), (d) => {
    let p = d.codePointAt(0) ?? 0;
    return p <= 31 || (p >= 127 && p <= 159) ? " " : d;
  })
    .join("")
    .replace(/\s+/g, " ")
    .trim();
  if (r === "") return null;
  let o = truncateToCodePoints(r, t);
  return scrubArtifactEnvelopeTags(
    (o === r ? r : `${o.trimEnd()}\u2026`).replace(/:\/\//g, ":\u2215\u2215"),
  );
}
var Tu =
  /[\u20DD-\u20E4\u23FA\u25C9\u25CB\u25CE\u25CF\u25EF\u26AA\u26AB\u26AC\u29BE\u29BF\u2B24\u2B55\u2B58\u{1F534}\u{1F535}\u{1F785}-\u{1F78B}\u{1F7E0}-\u{1F7E4}]/gu;
function pqt(e) {
  return sanitizeArtifactTitle(oo(e.normalize("NFC"), !1));
}
function zZn(e) {
  return oo(e, !0);
}
function oo(e, t) {
  let r = Array.from(e),
    o = [];
  for (let d = 0; d < r.length; d++) {
    let p = r[d],
      _ = p.codePointAt(0) ?? 0,
      w = o.at(-1),
      E = w?.codePointAt(0),
      R = w === void 0 ? t : !/\s/u.test(w);
    if (_ === 127988) {
      let C = Ou(r, d);
      if (C !== -1) {
        (o.push(...r.slice(d, C + 1)), (d = C));
        continue;
      }
    }
    if (ao(_)) {
      if (R && (E === void 0 || !Pu(E))) o.push(p);
      continue;
    }
    if (Gr(_)) {
      if (R && (E === void 0 || !Gr(E))) o.push(p);
      continue;
    }
    o.push(isDecisionSurfaceControl(_) || INVISIBLE_BLANK_CODE_POINT.test(p) ? " " : p);
  }
  return o.join("");
}
function ao(e) {
  return (
    (e >= 6155 && e <= 6157) ||
    e === 6159 ||
    (e >= 65024 && e <= 65039) ||
    (e >= 917760 && e <= 917999)
  );
}
function Gr(e) {
  return e === 8204 || e === 8205;
}
function Pu(e) {
  return Gr(e) || ao(e);
}
var Cu = 6;
function Ou(e, t) {
  let r = t + Cu + 1;
  for (let o = t + 1; o <= r && o < e.length; o++) {
    let d = e[o].codePointAt(0) ?? 0;
    if (d === 917631) return o > t + 1 ? o : -1;
    if (!((d >= 917552 && d <= 917561) || (d >= 917601 && d <= 917626)))
      return -1;
  }
  return -1;
}
function VZn(e) {
  let t = Array.from(e.normalize("NFC"), (r) =>
    isDecisionSurfaceControl(r.codePointAt(0) ?? 0) ? " " : r,
  ).join("");
  return sanitizeArtifactTitle(t.replace(INVISIBLE_BLANKS, " "));
}
function yw(e) {
  let t = Q1e(e);
  if (t === null) return null;
  let r = truncateToCodePoints(t, Ru);
  return scrubArtifactEnvelopeTags((r === t ? t : `${r}\u2026`).replace(/:\/\//g, ":\u2215\u2215"));
}
var Yr = 128,
  Kr = 32,
  sn = 64,
  $u = "\u2800\uD834\uDD59\uD80D\uDC41\uD80D\uDC42\uFFFC",
  on = `${$u}\\p{Cf}\\p{Default_Ignorable_Code_Point}`,
  uo = "\u2026\u22EF\uFE19",
  qr = new RegExp(`^(?:[<>\\\\${uo}]|[${on}]|[^ \\P{Z}]|\\p{C})$`, "u");
function fo(e) {
  let t = Array.from(e).length - 1,
    r = "";
  return (o, d) => {
    let p = o === " " && (d === 0 || d === t || r === " ");
    return ((r = o), p);
  };
}
function Lu(e) {
  let t = fo(e),
    r = -1;
  return (o) => (r++, t(o, r) || qr.test(o));
}
var Mu = /^[\p{L}\p{M}\p{N}\p{P}\p{S}\p{Cf} ]+$/u,
  Nu = new RegExp(
    `^(?![${on}])[\\p{L}\\p{N}\\p{P}\\p{S}](?:.*[^ ${on}\\p{M}])?\\p{M}*$`,
    "su",
  ),
  Iu = /\p{Bidi_Control}/u,
  Du = new RegExp(`\\p{M}(?:[${on}]*\\p{M}){8}`, "u"),
  lo = new RegExp(`[ ${on}\\p{Mn}\\p{Me}\\p{Variation_Selector}]`, "gu"),
  hn =
    ":\u02D0\u02D1\u02F8\u0589\u05C3\u0703\u0704\u0705\u0706\u0707\u0708\u0709\u0903\u0983\u0A03\u0A83\u0B03\u0C03\u0C83\u0D03\u0D83\u0F7F\u1038\u1361\u1365\u1366\u16EC\u17C7\u1803\u1804\u1809\u1B04\u1B82\u205A\u205D\u205E\u2236\u2237\u2806\u2982\u2D42\u2D53\u2D57\uA4FD\uA6F4\uA789\uA881\uA983\uAAF5\uFE13\uFE30\uFE55\uFF1A\uD804\uDC02\uD804\uDC82\uD804\uDD82\uD804\uDF03\uD805\uDC45\uD805\uDCC1\uD805\uDDBE\uD805\uDE3E\uD805\uDEAC\uD806\uDC38\uD806\uDDDF\uD806\uDE39\uD806\uDE97\uD807\uDC3E\uD807\uDD96\uD807\uDF03\uD801\uDF81\uD801\uDF82",
  Bu = new RegExp(`^host[${hn}]`, "iu"),
  ho = "\u05C3\u0703\u0704\u0705\u0706\u0707\u0708\u0709",
  ju = new RegExp(`^host.*[${ho}]`, "iu"),
  Hu =
    /[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFE\u{10800}-\u{10FFF}\u{1E800}-\u{1EFFF}]/u,
  Uu = new RegExp(`(?:^|[^a-z])host[${hn}]|[${hn}]host(?:$|[^a-z])`, "iu"),
  zu = new RegExp(`^[^\\p{L}]*[${hn}]host(?:$|[^a-z])`, "iu"),
  Vu = /[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2]/u,
  Wu = new RegExp(`(?![${ho}])[${hn}]`, "gu"),
  mo = new RegExp(`["<>\\\\\`${on}${uo}]|${QUOTE_HOMOGLYPHS.source}|${SINGLE_QUOTE_RUNS.source}`, "gu"),
  Gu = new RegExp(`^\\p{M}+|[^ \\P{Z}]|[\\p{C}\\p{Cn}]|${mo.source}`, "gu");
function Yu(e) {
  let t = e.normalize("NFD"),
    r = Hu.test(t),
    o = t.replace(lo, "");
  return (
    co(o, r) || co(o.replace(Wu, ":").normalize("NFKC").replace(lo, ""), r)
  );
}
function co(e, t) {
  return Bu.test(e) || ju.test(e) || (t && Uu.test(e)) || zu.test(e);
}
function Yn(e) {
  return e === '"' || e === "\\"
    ? `\\${e}`
    : e
        .split("")
        .map((t) => `\\u${t.charCodeAt(0).toString(16).padStart(4, "0")}`)
        .join("");
}
function Xwt(e) {
  return (
    Array.from(e).length <= sn &&
    !e.startsWith(" ") &&
    !e.endsWith(" ") &&
    Mu.test(e) &&
    Nu.test(e) &&
    !Iu.test(e) &&
    !Vu.test(e) &&
    !Du.test(e) &&
    !Yu(e) &&
    !e.startsWith(CLAUDE_AI_MCP_SERVER_PREFIX) &&
    !e.startsWith("mcp__") &&
    Xn(e) === null
  );
}
function Y_(e, t) {
  if (typeof e === "string" && Xwt(e)) return scrubArtifactEnvelopeTags(e.replace(mo, Yn));
  let r = t?.max ?? sn,
    o = e,
    d = !1;
  if (typeof e === "string") ({ text: o, cut: d } = Ro(e, Lu(e), r));
  let p = scrubArtifactEnvelopeTags(
    sweepAskCopy(jg(o, { ...t, max: r }).replace(/`/g, "'"))?.replace(/^\p{M}+/u, Yn) ??
      "?",
  );
  return d ? `${p}\u2026` : p;
}
function fqt(e) {
  return scrubArtifactEnvelopeTags(truncateToCodePoints(e, sn).replace(Gu, Yn));
}
function zt(e) {
  return e.declarable !== !1 && Xwt(e.server);
}
var Ku = ["name", "connector", "id", "display_name"];
function zn() {
  return {
    ok: !1,
    unresolved: [],
    internal: [],
    malformed: [],
    oversized: [],
    serverCount: null,
  };
}
function Gn(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function qu(e) {
  return Array.isArray(e) && e.every((t) => typeof t === "string");
}
function Xu(e) {
  return qu(e) ? e : null;
}
function Wn(e) {
  return Xn(e) === null ? e : e.toLowerCase();
}
function bo(e, t, r, o = {}) {
  let d = e.mcp;
  if (d === void 0) return { ok: !0, caps: e, warnings: [], servers: [] };
  let p = Gn(d) ? d.servers : !1;
  if (p === !1 || (p != null && !Array.isArray(p)))
    return { ...zn(), malformed: [{ kind: "not_object" }] };
  if (p == null || p.length === 0)
    return { ...zn(), malformed: [{ kind: "no_servers" }] };
  let _ = new Map(t.map((V) => [Wn(V.toolPrefix), V])),
    w = new Map(t.map((V) => [V.server, V])),
    E = [],
    R = [],
    C = [],
    M = [],
    D = new Map();
  for (let [V, J] of p.entries()) {
    let U = Xr(J);
    if (U === void 0) {
      let Te =
        J !== null && typeof J === "object"
          ? (Ku.find((Me) => Me in J) ?? null)
          : null;
      C.push({ kind: "entry_shape", index: V, wrongKey: Te });
      continue;
    }
    let te = _.get(Wn(U)),
      re = Gn(J) ? J.tools : void 0,
      ce = Xu(re);
    if (re === void 0 || ce?.length === 0) {
      let Te = te ?? w.get(U);
      C.push({
        kind: "no_tools",
        server: U,
        display: te !== void 0 && zt(te) ? te.server : null,
        available: Te?.toolNames ?? [],
      });
    } else if (ce === null) C.push({ kind: "tools_shape", server: U });
    let q = Jn(U),
      ge = q === void 0 ? void 0 : _.get(Wn(q)),
      pe = q === void 0 ? null : KQe(q),
      Le = null,
      Ge = w.get(U);
    if (te !== void 0) {
      if (!zt(te))
        C.push({ kind: "undeclarable_name", server: U, name: te.server });
      else if (Xn(U) !== null)
        C.push({ kind: "known_id", server: U, display: te.server });
      else if (((Le = te.server), U !== te.server)) D.set(U, te.server);
    } else if (Ge !== void 0)
      if (zt(Ge)) Le = U;
      else C.push({ kind: "undeclarable_name", server: U, name: U });
    else if (U.startsWith(CLAUDE_AI_MCP_SERVER_PREFIX)) E.push(U);
    else if (U.startsWith("mcp__")) {
      let Te = _.get(Wn(beforeFirst(U.slice(5), "__")));
      C.push({
        kind: "tool_name",
        server: U,
        display: Te !== void 0 && zt(Te) ? Te.server : null,
      });
    } else if (Xn(U) !== null) C.push({ kind: "opaque_id", server: U });
    else if (ge !== void 0)
      C.push(
        zt(ge)
          ? { kind: "connector_as_host", server: U, display: ge.server }
          : { kind: "undeclarable_name", server: U, name: ge.server },
      );
    else if (q !== void 0 && Xn(q) !== null)
      C.push({ kind: "opaque_id", server: U });
    else if (q !== void 0 && o.hostServers === !1)
      C.push({ kind: "host_unavailable", server: U });
    else if (pe !== null) {
      let Te = (De) =>
          mKt(De, pe) || mKt(beforeFirst(`${normalizeMcpName(De)}__`, "__"), pe) || mKt(wo(De), pe),
        Me = r.find(Te) ?? t.find((De) => Te(De.server))?.server;
      if (Me === void 0) Le = `host:${pe}`;
      else
        C.push({ kind: "local_server_as_first_party", server: U, local: Me });
    } else if (Lor(q ?? "")) R.push(U);
    else Le = U;
    if (Le !== null && ce !== null && ce.length > 0 && Gn(J))
      M.push({ ...J, server: Le, tools: ce });
  }
  if (E.length > 0 || R.length > 0 || C.length > 0)
    return { ...zn(), unresolved: E, internal: R, malformed: C };
  let F = [],
    I = new Map();
  for (let V of M) {
    let J = I.get(V.server);
    if (J === void 0) (I.set(V.server, { idx: F.length, from: 1 }), F.push(V));
    else {
      J.from++;
      let U = F[J.idx];
      F[J.idx] = { ...U, tools: dedupe([...U.tools, ...V.tools]) };
    }
  }
  let N = [];
  if (D.size > 0) {
    let V = rt([...D], 8, ([J, U]) => `"${jg(J)}" \u2192 "${Y_(U)}"`).join(
      ", ",
    );
    N.push(
      `rewrote mcp server ${pluralize(D.size, "name")} to the connector display ${pluralize(D.size, "name")} viewers match \u2014 ${V}; the page must pass exactly ${D.size === 1 ? "that name" : "those names"} to callTool(\u2026) / watchTool(\u2026).`,
    );
  }
  let ae = [];
  for (let [V, J] of I) {
    let U = F[J.idx].tools.length,
      te = KQe(Jn(V) ?? "") !== null;
    if (J.from > 1 && !te) {
      let re = Y_(V),
        ce = an(V);
      N.push(
        `${J.from} manifest entries resolve to ${ce} "${re}" and were merged into one (${U} ${pluralize(U, "tool")}). A viewer with more than one ${ce} named "${re}" gets server_ambiguous on every call until the duplicates are renamed or removed.`,
      );
    }
    if (U > Yr) ae.push({ server: V, toolCount: U });
  }
  let ue = F.length > Kr ? F.length : null;
  if (ae.length > 0 || ue !== null)
    return { ...zn(), oversized: ae, serverCount: ue };
  return {
    ok: !0,
    caps: { ...e, mcp: { ...d, servers: F } },
    warnings: N,
    servers: F.map((V) => V.server),
  };
}
function yo(e, t, r = 8) {
  let o = new Set(t),
    d = new Set(),
    p = [],
    _ =
      /\.(?:callTool|watchTool)\(\s*(?:'([^'\\\n]{1,200})'|"([^"\\\n]{1,200})")\s*,/g;
  for (let w of e)
    for (let E of w.matchAll(_)) {
      let R = E[1] ?? E[2];
      if (o.has(R) || d.has(R)) continue;
      if ((d.add(R), p.push(R), p.length >= r)) return p;
    }
  return p;
}
function _o(e) {
  let t = e.mcp;
  if (!gn(t)) return [];
  return t.servers.map(Xr).filter((r) => r !== void 0 && r.startsWith(CLAUDE_AI_MCP_SERVER_PREFIX));
}
function KZn(e, t, r) {
  let o = e.mcp;
  if (!gn(o)) return [];
  let d = dedupe(o.servers.map(Xr).filter((_) => _ !== void 0)),
    p = (_) => r.has(_) && !Gvn.has(_) && !t.some((w) => w.toolPrefix === _);
  return d
    .filter((_) => {
      let w = Jn(_);
      if (w !== void 0) {
        let E = KQe(w);
        return E === null ? !p(w) : ![...r].some((R) => KQe(R) === E && p(R));
      }
      return (
        !r.has(_) &&
        !p(wo(_)) &&
        !t.some((E) => E.server === _ && r.has(E.toolPrefix))
      );
    })
    .map((_) => {
      let w = Y_(_);
      return `This page declares ${an(_)} "${w}" but no successful call to it was observed in this session, so the page is published against an unobserved interface. Verify its calls against a real response if you can safely make one, or tell the user the page's "${w}" integration is unverified.`;
    });
}
function wo(e) {
  return normalizeMcpName(e)
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "")
    .slice(0, 64)
    .replace(/_+$/, "");
}
function Xr(e) {
  let t = e != null && typeof e === "object" ? e.server : void 0;
  return typeof t === "string" ? t : void 0;
}
function yJ(e) {
  return ko(e) && Object.keys(e).length > 0;
}
function ko(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function Kn(e) {
  let t = Ju(e);
  return ko(t) ? t : e;
}
function Yt(e, t, r) {
  Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    writable: !0,
    configurable: !0,
  });
}
function Rwn(e, t) {
  let r = Kn(e ?? {}),
    o = Kn(t ?? {}),
    d = { ...r },
    p = !1,
    _ = !1;
  for (let [w, E] of Object.entries(o))
    if (Object.hasOwn(r, w)) _ ||= !Qn(r[w], E);
    else (Yt(d, w, E), (p = !0));
  return { capabilities: p ? d : e, widened: p, conflict: _ };
}
var Z1e = "0.0.0";
class vo {
  served = void 0;
}
var xo = new Gt(() => new vo());
function XZn(e, t) {
  xo.of(e).served = t;
}
function YZn(e) {
  return xo.peek(e)?.served;
}
function JZn(e, t, r) {
  let o = e.features;
  return o !== void 0 && Object.hasOwn(o, t) && Object.hasOwn(o[t] ?? {}, r);
}
var kwn = /^host:([A-Za-z0-9_-]{1,64})$/;
function Jn(e) {
  return kwn.exec(e)?.[1];
}
function an(e) {
  return Jn(e) === void 0 ? "connector" : "local server";
}
var Mj = /^(0|[1-9]\d{0,3})\.(0|[1-9]\d{0,4})\.(0|[1-9]\d{0,5})$/,
  Nj = /^[a-z][a-z0-9]{0,23}$/;
function wD(e) {
  return typeof e === "string" && e !== Z1e && Mj.test(e) ? e : null;
}
function So(e, t) {
  if (t.version === Z1e) return [];
  let r = new Set(t.capabilities);
  return Object.keys(e).filter((o) => !r.has(o));
}
var JE = "artifact",
  rP = "self";
function QZn(e) {
  return e !== void 0 && (Object.hasOwn(e, JE) || Object.hasOwn(e, rP));
}
function Zn(e) {
  if (Array.isArray(e)) return `[${e.map((t) => Zn(t)).join(",")}]`;
  if (e !== null && typeof e === "object")
    return `{${Object.keys(e)
      .sort()
      .map((t) => `${JSON.stringify(t)}:${Zn(e[t])}`)
      .join(",")}}`;
  return JSON.stringify(e) ?? "null";
}
function Qn(e, t) {
  return Zn(e) === Zn(t);
}
function Jr(e) {
  if (!Object.hasOwn(e, JE)) return e;
  if (Object.hasOwn(e, rP)) {
    if (!Qn(e[JE], e[rP])) return e;
    let r = {};
    for (let [o, d] of Object.entries(e)) if (o !== JE) Yt(r, o, d);
    return r;
  }
  let t = {};
  for (let [r, o] of Object.entries(e)) Yt(t, r === JE ? rP : r, o);
  return t;
}
function Ju(e) {
  if (e === null || typeof e !== "object" || Array.isArray(e)) return e;
  let t = e;
  if (!Object.hasOwn(t, rP)) return e;
  if (Object.hasOwn(t, JE) && !Qn(t[JE], t[rP])) return e;
  let r = {};
  for (let [o, d] of Object.entries(t)) {
    if (o === rP) {
      if (!Object.hasOwn(t, JE)) Yt(r, JE, d);
      continue;
    }
    Yt(r, o, d);
  }
  return r;
}
function Ao(e, t) {
  let r = Object.hasOwn(e, JE),
    o = Object.hasOwn(e, rP);
  if ((!r && !o) || t.version === Z1e) return { caps: e };
  let d = new Set(t.capabilities),
    p = d.has(JE) ? JE : d.has(rP) ? rP : null;
  if (p === null) return { caps: e };
  if (r && o) {
    if (!Qn(e[JE], e[rP]))
      return {
        errMsg:
          "capabilities declares both `artifact` and `self` \u2014 two " +
          "spellings of the same capability \u2014 with different configs. " +
          "Declare it once (canonically `artifact: {}`).",
      };
  }
  let _ = {};
  for (let [w, E] of Object.entries(e)) {
    if (w === JE || w === rP) {
      if (!Object.hasOwn(_, p)) Yt(_, p, E);
      continue;
    }
    Yt(_, w, E);
  }
  return { caps: _ };
}
function KXe(e) {
  return "capabilities" in e ? e.capabilities : void 0;
}
var Eo = new Set([
    JE,
    rP,
    "downloads",
    "comments",
    "room",
    "db",
    "assets",
    "user",
  ]),
  Zu = new RegExp(`^${QUOTE_HOMOGLYPHS.source}$`, "u");
function Qu(e) {
  return (
    MODEL_TEXT_PUNCT_CODE_POINT.test(e) &&
    !/^[\p{P}\p{M}]$/u.test(e) &&
    !Zu.test(e) &&
    !isJoinerOrEmojiSelector(e.codePointAt(0) ?? 0) &&
    !qr.test(e)
  );
}
function ed(e) {
  let t = Array.from(e).slice(0, sn + 1),
    r = t.length,
    o = t.map(Qu),
    d = t.map(
      (C, M) => o[M] || /^\p{M}$/u.test(C) || isJoinerOrEmojiSelector(C.codePointAt(0) ?? 0),
    ),
    p = t.map((C, M) => !o[M] && /^[\p{L}\p{N}]$/u.test(C)),
    _ = Array(r).fill(!1),
    w = Array(r).fill(!1),
    E = !1;
  for (let C = 0; C < r; C++) ((_[C] = E), (E = p[C] || (d[C] && E)));
  E = !1;
  for (let C = r - 1; C >= 0; C--) ((w[C] = E), (E = p[C] || (d[C] && E)));
  let R = new Set();
  for (let C = 0; C < r; C++) if (o[C] && _[C] && w[C]) R.add(C);
  return R;
}
function td(e) {
  let t = ed(e),
    r = fo(e),
    o = "none",
    d = -1;
  return (p) => {
    d++;
    let _ = p.codePointAt(0) ?? 0;
    if (r(p, d)) return ((o = "none"), !0);
    if (t.has(d)) return ((o = "none"), !0);
    if (isJoinerOrEmojiSelector(_)) {
      let w = selectorOrJoinerRides(_, o);
      return ((o = w.after), !w.rides);
    }
    if (qr.test(p)) return ((o = "none"), !0);
    return ((o = rideStateAfter(p)), !1);
  };
}
function Ro(e, t, r) {
  let o = [],
    d = 0;
  for (let p of e) {
    let _ = t(p) ? Yn(p) : p,
      w = _ === p ? 1 : _.length;
    if (d + w > r) return { text: o.join(""), cut: !0 };
    (o.push(_), (d += w));
  }
  return { text: o.join(""), cut: !1 };
}
function nd(e) {
  let t = e,
    r = !1;
  if (typeof e === "string") ({ text: t, cut: r } = Ro(e, td(e), sn));
  let o =
    sweepMarkerLookalikes((sweepAskCopy(jg(t, { max: sn })) ?? "?").replace(/[;,(){}]/g, " ")).trim() ||
    "?";
  return r ? `${o}\u2026` : o;
}
function mqt(e) {
  if (!e) return "";
  let t = [],
    r = [],
    o;
  for (let [C, M] of Object.entries(e))
    if (C === "mcp" && gn(M))
      ((o = rt(M.servers, 8, (D) => {
        let F = Array.isArray(D?.tools) ? D.tools.length : 0;
        return `${nd(D?.server)}[${F} ${pluralize(F, "tool")}]`;
      }).join(", ")),
        t.unshift("mcp"));
    else if (Eo.has(C)) {
      let D = Gn(M) ? M.rules : void 0;
      r.push(Array.isArray(D) ? `${C}[${D.length} ${pluralize(D.length, "rule")}]` : C);
    } else t.push(Nj.test(C) ? C : To);
  let d = t.length + r.length;
  if (d === 0) return "";
  let p = [...t, ...r.slice(0, Math.max(0, 8 - t.length))],
    _ = d > 8 ? `[${d} total]; ` : "",
    w = _ + p.join("; ");
  if (o !== void 0) {
    let C = p.slice(1).join("; "),
      M = C === "" ? "" : "; ",
      D = Math.max(16, 400 - Array.from(_ + C + M).length - 6),
      F = Array.from(o),
      I = F.length > D ? F.slice(0, D).join("") + "\u2026" : o;
    w = `${_}mcp: ${I}${M}${C}`;
  }
  let E = Array.from(w);
  return ` (${E.length > 400 ? E.slice(0, 400).join("") + "\u2026" : E.join("")})`;
}
function ZZn(e, t) {
  let r = Kn(e ?? {}),
    o = Object.keys(Kn(t ?? {})).filter((_) => !Object.hasOwn(r, _)),
    d = (_) => (_ === "mcp" ? 0 : Eo.has(_) ? 2 : 1),
    p = o.sort((_, w) => d(_) - d(w)).map((_) => (Nj.test(_) ? _ : To));
  if (!o.includes("mcp") && id(e?.mcp, t?.mcp)) p.unshift(rd);
  return p;
}
var To = "invalid-name",
  rd = "mcp (more servers or tools)";
function id(e, t) {
  if (t === void 0) return !1;
  if (!gn(t)) {
    let o =
      t !== null && typeof t === "object" && "servers" in t
        ? t.servers
        : void 0;
    return !(Array.isArray(o) && o.length === 0);
  }
  let r = new Map();
  if (gn(e)) {
    for (let o of e.servers)
      if (typeof o?.server === "string")
        r.set(o.server, new Set(Array.isArray(o.tools) ? o.tools : []));
  }
  return t.servers.some((o) => {
    let d = typeof o?.server === "string" ? r.get(o.server) : void 0;
    return (
      d === void 0 || !Array.isArray(o.tools) || o.tools.some((p) => !d.has(p))
    );
  });
}
function rt(e, t, r) {
  if (e.length <= t) return e.map(r);
  return [`[${e.length} total]`, ...e.slice(0, t).map(r)];
}
function gn(e) {
  return (
    e != null &&
    typeof e === "object" &&
    "servers" in e &&
    Array.isArray(e.servers) &&
    e.servers.length > 0
  );
}
function jg(e, t) {
  if (typeof e !== "string") return "?";
  let r = t?.max ?? 64,
    o = Array.from(e.slice(0, 2 * r), (d) =>
      isDecisionSurfaceControl(d.codePointAt(0) ?? 0) ? " " : d,
    )
      .slice(0, r)
      .join("")
      .replace(INVISIBLE_BLANKS, " ")
      .replace(/\s+/g, " ");
  return o.trim() === "" ? "?" : o;
}
import { randomUUID } from "crypto";
import {
  lstat as Co,
  mkdir,
  realpath as er,
  rm as ti,
  unlink,
  writeFile,
} from "fs/promises";
import Xe from "path";
import { lstat as Qr, open as od, realpath as Po } from "fs/promises";
import * as vt from "path";
import { constants as Zr } from "fs";
function Ha() {
  return Zr.O_RDONLY | XXe();
}
function XXe() {
  if (getCurrentPlatform() === "windows") return 0;
  return Zr.O_NOFOLLOW | Zr.O_NONBLOCK;
}
var eer = [
  "aarch64-apple-darwin",
  "x86_64-apple-darwin",
  "aarch64-unknown-linux-musl",
  "x86_64-unknown-linux-musl",
];
function sd(e, t) {
  let r = t === "arm64" ? "aarch64" : t === "x64" ? "x86_64" : void 0;
  if (r === void 0) return;
  switch (e) {
    case "macos":
      return `${r}-apple-darwin`;
    case "linux":
    case "wsl":
      return `${r}-unknown-linux-musl`;
    case "windows":
    case "unknown":
      return;
  }
}
var ter = 268435456;
function ner() {
  return sd(getCurrentPlatform(), "arm64");
}
function YXe(e, t) {
  if (e.endsWith(`-${t}`)) {
    let r = e.slice(0, -(t.length + 1));
    return hke.test(r) ? r : void 0;
  }
  if (e.endsWith(`-${t}.exe`)) {
    let r = e.slice(0, -(t.length + 5));
    return hke.test(r) ? `${r}.exe` : void 0;
  }
  return;
}
async function JXe(e) {
  return (await Qr(e).catch(() => null))?.isDirectory() === !0;
}
async function CCe(e, t) {
  let r = e;
  for (let _ of vt.relative(e, t).split(vt.sep).filter(Boolean)) {
    r = vt.join(r, _);
    let w;
    try {
      w = await Qr(r);
    } catch (E) {
      let R = A(E);
      return R === "ENOENT" || R === "ENOTDIR" ? "absent" : "refused";
    }
    if (!w.isDirectory())
      return w.isSymbolicLink() ? "refused" : "not-a-directory";
  }
  let [o, d] = await Promise.all([
    Po(e).catch(() => null),
    Po(t).catch(() => null),
  ]);
  if (o === null || d === null) return "refused";
  let p = vt.relative(o, d);
  return !p.startsWith("..") && !vt.isAbsolute(p) ? "ok" : "refused";
}
async function yqt(e) {
  let t = await Ywt(e);
  return t.kind === "ok" ? t.content : void 0;
}
async function Ywt(e) {
  let t = await Qr(e).catch((o) => {
    let d = A(o);
    if (d === "ENOENT" || d === "ENOTDIR") return null;
    throw o;
  });
  if (!t) return { kind: "absent" };
  if (!t.isFile()) return { kind: "refused" };
  let r;
  try {
    if (((r = await od(e, Ha())), !(await r.stat()).isFile()))
      return { kind: "refused" };
    let d = Buffer.alloc($q + 1),
      p = 0;
    while (p < d.length) {
      let { bytesRead: _ } = await r.read(d, p, d.length - p);
      if (_ === 0) break;
      p += _;
    }
    if (p > $q) return { kind: "too-large" };
    return { kind: "ok", content: d.toString("utf-8", 0, p) };
  } finally {
    await r?.close().catch(() => {
      return;
    });
  }
}
async function $o(e, t, r) {
  let o = r.slug !== void 0,
    d = r.slug ?? randomUUID();
  if (!ARTIFACT_SLUG_RE.test(d))
    return {
      url: null,
      slug: null,
      version: null,
      err: `not an artifact slug: ${d}`,
    };
  let p = `${ARTIFACT_STUB_URL_PREFIX}${d}`,
    _ = Xe.join(e, d),
    w = Xe.dirname(e),
    E = await Co(w).catch(() => null);
  if (E === null || !E.isDirectory() || (await er(w).catch(() => null)) !== w)
    return {
      url: null,
      slug: null,
      version: null,
      err: "the stub publish directory is not inside a real directory",
    };
  (await ei(e), await ei(_), await rFe(Xe.join(_, "index.html"), t));
  for (let [V, J] of [
    ["thumbnail.img", r.thumbnail],
    ["thumbnail_dark.img", r.thumbnailDark],
  ])
    if (J !== void 0) await rFe(Xe.join(_, V), J);
    else await ti(Xe.join(_, V), { recursive: !0, force: !0 });
  let R = Xe.join(_, "files");
  await ei(R);
  let C = await er(R),
    M = [],
    D = (V) => V === C || V.startsWith(C + Xe.sep),
    F = async (V) => {
      let J = Xe.resolve(R, V);
      if (!J.startsWith(R + Xe.sep)) return null;
      if (RU(J, R + Xe.sep, DANGEROUS_FILES_LC))
        return (
          M.push({
            path: V,
            reason:
              "names a git, IDE/toolchain, or shell configuration component",
          }),
          null
        );
      for (let U = Xe.dirname(J); ; U = Xe.dirname(U))
        try {
          return D(await er(U)) ? J : null;
        } catch (te) {
          if (!W(te) || U === R) throw te;
        }
    },
    I = async (V) => {
      try {
        return D(await er(Xe.dirname(V)));
      } catch (J) {
        if (W(J)) return "absent";
        throw J;
      }
    },
    N = [];
  for (let V of r.removeFiles ?? [])
    try {
      let J = await F(V);
      if (J === null) continue;
      let U = await I(J);
      if (U === !1) continue;
      if (U === "absent") {
        N.push(V);
        continue;
      }
      (await unlink(J).catch((te) => {
        if (!W(te)) throw te;
      }),
        N.push(V));
    } catch (J) {
      n(`artifact stub: skipping removal of ${V}: ${J}`, { level: "warn" });
    }
  let ae = [];
  for (let V of r.files ?? []) {
    try {
      let J = await F(V.path);
      if (J === null) continue;
      if ((await mkdir(Xe.dirname(J), { recursive: !0 }), (await I(J)) !== !0))
        continue;
      await rFe(J, V.content);
    } catch (J) {
      n(`artifact stub: skipping supporting file ${V.path}: ${J}`, {
        level: "warn",
      });
      continue;
    }
    ae.push({
      path: V.path,
      contentType: V.contentType,
      bytes: Buffer.byteLength(V.content),
    });
  }
  for (let V of M)
    n(`artifact stub: not materializing ${V.path}: ${V.reason}`, {
      level: "warn",
    });
  let ue = {
    slug: d,
    url: p,
    redeploy: o,
    title: r.title,
    favicon: r.favicon,
    ...(r.label !== void 0 && { label: r.label }),
    ...(r.note !== void 0 && { note: r.note }),
    ...(r.lang !== void 0 && { lang: r.lang }),
    ...(r.description !== void 0 && { description: r.description }),
    files: ae,
    ...(N.length > 0 && { removed: N }),
    ...(M.length > 0 && { notMaterialized: M }),
    ...((r.copiedFiles?.length ?? 0) > 0 && { copied: r.copiedFiles }),
    ...(r.capabilities !== void 0 && { capabilities: r.capabilities }),
    ...(r.contract !== void 0 && { contract: r.contract }),
    ...(r.thumbnail !== void 0 && { thumbnail: { bytes: r.thumbnail.length } }),
    ...(r.thumbnailDark !== void 0 && {
      thumbnailDark: { bytes: r.thumbnailDark.length },
    }),
    publishedAtMs: Date.now(),
  };
  return (
    await rFe(Xe.join(_, "manifest.json"), b(ue, null, 2)),
    { url: p, slug: d, version: "1", err: null }
  );
}
async function rer(e, t) {
  if (!ARTIFACT_SLUG_RE.test(t)) return;
  try {
    let r = await yqt(Xe.join(e, t, "manifest.json")),
      o = r === void 0 ? void 0 : z(r);
    return isRecord(o) ? o.favicon : void 0;
  } catch {
    return;
  }
}
async function ei(e) {
  try {
    if (!(await Co(e)).isDirectory()) await ti(e, { force: !0 });
  } catch (t) {
    if (!W(t)) throw t;
  }
  await mkdir(e, { recursive: !0 });
}
async function rFe(e, t) {
  (await ti(e, { recursive: !0, force: !0 }), await writeFile(e, t, { flag: "wx" }));
}
var NH = "live-doc",
  Soe = "index.html";
var Lo = 256,
  oer =
    /^(?!\/)(?!.*\/\/)(?!.*\/$)(?!(?:^|.*\/)\.\.?(?:\/|$))[^\p{Cc}\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069\u2028\u2029\\?#%:;]{1,512}$/u,
  bn =
    /^[^\p{Cc}\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069\u2028\u2029]{1,1024}$/u,
  Fo = createLazyValue(() =>
    v(
      c({
        path: s().regex(bn),
        doc: s()
          .max(64)
          .optional()
          .catch(void 0),
        headSeq: T()
          .int()
          .nonnegative()
          .optional()
          .catch(void 0),
      }),
    ).max(Lo),
  );
function nr(e) {
  if (e.docs !== void 0)
    return Fo().safeParse(e.docs).success ? Jwt(e) : void 0;
  return e.files !== void 0 ? Jwt(e) : void 0;
}
function Jwt(e) {
  let t = e.docs === void 0 ? void 0 : Fo().safeParse(e.docs);
  if (t?.success && t.data.length > 0) return t.data;
  if (e.artifactKind !== NH) return [];
  if (e.files !== void 0 && !ud(e)) return [];
  return [
    {
      path: Soe,
      ...(typeof e.headSeq === "number" &&
        Number.isSafeInteger(e.headSeq) &&
        e.headSeq >= 0 && { headSeq: e.headSeq }),
    },
  ];
}
function ud(e) {
  return (
    (typeof e.headSubscriptionToken === "string" &&
      e.headSubscriptionToken !== "") ||
    (typeof e.headSeq === "number" &&
      Number.isSafeInteger(e.headSeq) &&
      e.headSeq >= 0)
  );
}
var dd = createLazyValue(() =>
  v(
    c({
      path: s().regex(bn),
      sha256: s()
        .regex(/^[0-9a-f]{64}$/)
        .optional()
        .catch(void 0),
      contentType: s()
        .max(255)
        .optional()
        .catch(void 0),
      doc: s()
        .max(64)
        .optional()
        .catch(void 0),
    }),
  ).max(Lo),
);
function ser(e) {
  if (e.files === void 0) return;
  let t = dd().safeParse(e.files);
  if (!t.success) return;
  let r = new Set(Jwt(e).map((d) => d.path)),
    o = new Map();
  for (let d of t.data)
    o.set(d.path, {
      ...(d.sha256 !== void 0 && { sha256: d.sha256 }),
      ...(d.contentType !== void 0 && { contentType: d.contentType }),
      live: (d.doc !== void 0 && d.doc !== "") || r.has(d.path),
    });
  return o;
}
var qk = 20971520;
function Fd() {
  return {
    "X-Frame-CP": "go",
    "X-Frame-Surface": "code",
    "X-Frame-Platform": isDesktopHostEntrypoint() ? "desktop" : "cli",
    "X-Frame-Client-Version": {
      ISSUES_EXPLAINER:
        "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.263",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-06T01:08:56Z",
      GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
      HOOKS_WORKER_URL:
        "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "darwin",
    }.VERSION,
    "X-Frame-Session-Id": ni() ?? K(),
  };
}
var fd = /^(?:session_|cse_)[A-Za-z0-9_-]{1,184}$/;
function ni() {
  let e = a.CLAUDE_CODE_REMOTE_SESSION_ID ?? getRemoteControlSessionCompatId();
  return e && fd.test(e) ? e : void 0;
}
var QXe = /^[A-Za-z0-9_-]{1,64}$/;
import { basename } from "path";
function ii() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null,
  };
}
var qt = ii();
function jo(e) {
  qt = e;
}
var wn = { exec: () => null };
function Fe(e, t = "") {
  let r = typeof e === "string" ? e : e.source,
    o = {
      replace: (d, p) => {
        let _ = typeof p === "string" ? p : p.source;
        return ((_ = _.replace(Ze.caret, "$1")), (r = r.replace(d, _)), o);
      },
      getRegex: () => new RegExp(r, t),
    };
  return o;
}
var Ze = {
    codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
    outputLinkReplace: /\\([\[\]])/g,
    indentCodeCompensation: /^(\s+)(?:```)/,
    beginningSpace: /^\s+/,
    endingHash: /#$/,
    startingSpaceChar: /^ /,
    endingSpaceChar: / $/,
    nonSpaceChar: /[^ ]/,
    newLineCharGlobal: /\n/g,
    tabCharGlobal: /\t/g,
    multipleSpaceGlobal: /\s+/g,
    blankLine: /^[ \t]*$/,
    doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
    blockquoteStart: /^ {0,3}>/,
    blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
    blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
    listReplaceTabs: /^\t+/,
    listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
    listIsTask: /^\[[ xX]\] /,
    listReplaceTask: /^\[[ xX]\] +/,
    anyLine: /\n.*\n/,
    hrefBrackets: /^<(.*)>$/,
    tableDelimiter: /[:|]/,
    tableAlignChars: /^\||\| *$/g,
    tableRowBlankLine: /\n[ \t]*$/,
    tableAlignRight: /^ *-+: *$/,
    tableAlignCenter: /^ *:-+: *$/,
    tableAlignLeft: /^ *:-+ *$/,
    startATag: /^<a /i,
    endATag: /^<\/a>/i,
    startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
    endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
    startAngleBracket: /^</,
    endAngleBracket: />$/,
    pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
    unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
    escapeTest: /[&<>"']/,
    escapeReplace: /[&<>"']/g,
    escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
    unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
    caret: /(^|[^\[])\^/g,
    percentDecode: /%25/g,
    findPipe: /\|/g,
    splitPipe: / \|/,
    slashPipe: /\\\|/g,
    carriageReturn: /\r\n|\r/g,
    spaceLine: /^ +$/gm,
    notSpaceStart: /^\S*/,
    endingNewline: /\n$/,
    listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
    nextBulletRegex: (e) =>
      new RegExp(
        `^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`,
      ),
    hrRegex: (e) =>
      new RegExp(
        `^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`,
      ),
    fencesBeginRegex: (e) =>
      new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
    headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
    htmlBeginRegex: (e) =>
      new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i"),
  },
  pd = /^(?:[ \t]*(?:\n|$))+/,
  hd = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
  gd =
    /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  Sn = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  md = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  Ho = /(?:[*+-]|\d{1,9}[.)])/,
  Uo = Fe(
    /^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  )
    .replace(/bull/g, Ho)
    .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
    .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
    .replace(/blockquote/g, / {0,3}>/)
    .replace(/heading/g, / {0,3}#{1,6}/)
    .replace(/html/g, / {0,3}<[^\n>]+>\n/)
    .getRegex(),
  si =
    /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  bd = /^[^\n]+/,
  oi = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
  yd = Fe(
    /^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/,
  )
    .replace("label", oi)
    .replace(
      "title",
      /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
    )
    .getRegex(),
  _d = Fe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
    .replace(/bull/g, Ho)
    .getRegex(),
  sr =
    "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
  ai = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
  wd = Fe(
    "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))",
    "i",
  )
    .replace("comment", ai)
    .replace("tag", sr)
    .replace(
      "attribute",
      / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/,
    )
    .getRegex(),
  zo = Fe(si)
    .replace("hr", Sn)
    .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
    .replace("|lheading", "")
    .replace("|table", "")
    .replace("blockquote", " {0,3}>")
    .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace(
      "html",
      "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)",
    )
    .replace("tag", sr)
    .getRegex(),
  kd = Fe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
    .replace("paragraph", zo)
    .getRegex(),
  li = {
    blockquote: kd,
    code: hd,
    def: yd,
    fences: gd,
    heading: md,
    hr: Sn,
    html: wd,
    lheading: Uo,
    list: _d,
    newline: pd,
    paragraph: zo,
    table: wn,
    text: bd,
  },
  Mo = Fe(
    "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
  )
    .replace("hr", Sn)
    .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
    .replace("blockquote", " {0,3}>")
    .replace("code", "(?: {4}| {0,3}\t)[^\\n]")
    .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace(
      "html",
      "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)",
    )
    .replace("tag", sr)
    .getRegex(),
  vd = {
    ...li,
    table: Mo,
    paragraph: Fe(si)
      .replace("hr", Sn)
      .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
      .replace("|lheading", "")
      .replace("table", Mo)
      .replace("blockquote", " {0,3}>")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace(
        "html",
        "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)",
      )
      .replace("tag", sr)
      .getRegex(),
  },
  xd = {
    ...li,
    html: Fe(
      `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`,
    )
      .replace("comment", ai)
      .replace(
        /tag/g,
        "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",
      )
      .getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: wn,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: Fe(si)
      .replace("hr", Sn)
      .replace(
        "heading",
        ` *#{1,6} *[^
]`,
      )
      .replace("lheading", Uo)
      .replace("|table", "")
      .replace("blockquote", " {0,3}>")
      .replace("|fences", "")
      .replace("|list", "")
      .replace("|html", "")
      .replace("|tag", "")
      .getRegex(),
  },
  Sd = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  Ad = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  Wo = /^( {2,}|\\)\n(?!\s*$)/,
  Ed =
    /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  or = /[\p{P}\p{S}]/u,
  ci = /[\s\p{P}\p{S}]/u,
  Go = /[^\s\p{P}\p{S}]/u,
  Td = Fe(/^((?![*_])punctSpace)/, "u")
    .replace(/punctSpace/g, ci)
    .getRegex(),
  Yo = /(?!~)[\p{P}\p{S}]/u,
  Pd = /(?!~)[\s\p{P}\p{S}]/u,
  Cd = /(?:[^\s\p{P}\p{S}]|~)/u,
  Od =
    /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,
  Ko = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,
  $d = Fe(Ko, "u").replace(/punct/g, or).getRegex(),
  Ld = Fe(Ko, "u").replace(/punct/g, Yo).getRegex(),
  qo =
    "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",
  Md = Fe(qo, "gu")
    .replace(/notPunctSpace/g, Go)
    .replace(/punctSpace/g, ci)
    .replace(/punct/g, or)
    .getRegex(),
  Id = Fe(qo, "gu")
    .replace(/notPunctSpace/g, Cd)
    .replace(/punctSpace/g, Pd)
    .replace(/punct/g, Yo)
    .getRegex(),
  Dd = Fe(
    "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
    "gu",
  )
    .replace(/notPunctSpace/g, Go)
    .replace(/punctSpace/g, ci)
    .replace(/punct/g, or)
    .getRegex(),
  Bd = Fe(/\\(punct)/, "gu")
    .replace(/punct/g, or)
    .getRegex(),
  jd = Fe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
    .replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
    .replace(
      "email",
      /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
    )
    .getRegex(),
  Ud = Fe(ai).replace("(?:-->|$)", "-->").getRegex(),
  zd = Fe(
    "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  )
    .replace("comment", Ud)
    .replace(
      "attribute",
      /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,
    )
    .getRegex(),
  ir = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
  Wd = Fe(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/)
    .replace("label", ir)
    .replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/)
    .replace(
      "title",
      /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,
    )
    .getRegex(),
  Jo = Fe(/^!?\[(label)\]\[(ref)\]/)
    .replace("label", ir)
    .replace("ref", oi)
    .getRegex(),
  Zo = Fe(/^!?\[(ref)\](?:\[\])?/)
    .replace("ref", oi)
    .getRegex(),
  Yd = Fe("reflink|nolink(?!\\()", "g")
    .replace("reflink", Jo)
    .replace("nolink", Zo)
    .getRegex(),
  ui = {
    _backpedal: wn,
    anyPunctuation: Bd,
    autolink: jd,
    blockSkip: Od,
    br: Wo,
    code: Ad,
    del: wn,
    emStrongLDelim: $d,
    emStrongRDelimAst: Md,
    emStrongRDelimUnd: Dd,
    escape: Sd,
    link: Wd,
    nolink: Zo,
    punctuation: Td,
    reflink: Jo,
    reflinkSearch: Yd,
    tag: zd,
    text: Ed,
    url: wn,
  },
  Kd = {
    ...ui,
    link: Fe(/^!?\[(label)\]\((.*?)\)/)
      .replace("label", ir)
      .getRegex(),
    reflink: Fe(/^!?\[(label)\]\s*\[([^\]]*)\]/)
      .replace("label", ir)
      .getRegex(),
  },
  ri = {
    ...ui,
    emStrongRDelimAst: Id,
    emStrongLDelim: Ld,
    url: Fe(
      /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
      "i",
    )
      .replace(
        "email",
        /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
      )
      .getRegex(),
    _backpedal:
      /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
  },
  qd = {
    ...ri,
    br: Fe(Wo).replace("{2,}", "*").getRegex(),
    text: Fe(ri.text)
      .replace("\\b_", "\\b_| {2,}\\n")
      .replace(/\{2,\}/g, "*")
      .getRegex(),
  },
  rr = { normal: li, gfm: vd, pedantic: xd },
  yn = { normal: ui, gfm: ri, breaks: qd, pedantic: Kd },
  Xd = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
  No = (e) => Xd[e];
function yt(e, t) {
  if (t) {
    if (Ze.escapeTest.test(e)) return e.replace(Ze.escapeReplace, No);
  } else if (Ze.escapeTestNoEncode.test(e))
    return e.replace(Ze.escapeReplaceNoEncode, No);
  return e;
}
function Io(e) {
  try {
    e = encodeURI(e).replace(Ze.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function Do(e, t) {
  let r = e.replace(Ze.findPipe, (p, _, w) => {
      let E = !1,
        R = _;
      while (--R >= 0 && w[R] === "\\") E = !E;
      if (E) return "|";
      else return " |";
    }),
    o = r.split(Ze.splitPipe),
    d = 0;
  if (!o[0].trim()) o.shift();
  if (o.length > 0 && !o.at(-1)?.trim()) o.pop();
  if (t)
    if (o.length > t) o.splice(t);
    else while (o.length < t) o.push("");
  for (; d < o.length; d++) o[d] = o[d].trim().replace(Ze.slashPipe, "|");
  return o;
}
function _n(e, t, r) {
  let o = e.length;
  if (o === 0) return "";
  let d = 0;
  while (d < o)
    if (e.charAt(o - d - 1) === t) d++;
    else break;
  return e.slice(0, o - d);
}
function Jd(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let r = 0;
  for (let o = 0; o < e.length; o++)
    if (e[o] === "\\") o++;
    else if (e[o] === t[0]) r++;
    else if (e[o] === t[1]) {
      if ((r--, r < 0)) return o;
    }
  return -1;
}
function Bo(e, t, r, o, d) {
  let p = t.href,
    _ = t.title || null,
    w = e[1].replace(d.other.outputLinkReplace, "$1");
  if (e[0].charAt(0) !== "!") {
    o.state.inLink = !0;
    let E = {
      type: "link",
      raw: r,
      href: p,
      title: _,
      text: w,
      tokens: o.inlineTokens(w),
    };
    return ((o.state.inLink = !1), E);
  }
  return { type: "image", raw: r, href: p, title: _, text: w };
}
function Zd(e, t, r) {
  let o = e.match(r.other.indentCodeCompensation);
  if (o === null) return t;
  let d = o[1];
  return t
    .split(
      `
`,
    )
    .map((p) => {
      let _ = p.match(r.other.beginningSpace);
      if (_ === null) return p;
      let [w] = _;
      if (w.length >= d.length) return p.slice(d.length);
      return p;
    }).join(`
`);
}
class oFe {
  options;
  rules;
  lexer;
  constructor(e) {
    this.options = e || qt;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let r = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic
          ? _n(
              r,
              `
`,
            )
          : r,
      };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let r = t[0],
        o = Zd(r, t[3] || "", this.rules);
      return {
        type: "code",
        raw: r,
        lang: t[2]
          ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1")
          : t[2],
        text: o,
      };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let r = t[2].trim();
      if (this.rules.other.endingHash.test(r)) {
        let o = _n(r, "#");
        if (this.options.pedantic) r = o.trim();
        else if (!o || this.rules.other.endingSpaceChar.test(o)) r = o.trim();
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: r,
        tokens: this.lexer.inline(r),
      };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t)
      return {
        type: "hr",
        raw: _n(
          t[0],
          `
`,
        ),
      };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let r = _n(
          t[0],
          `
`,
        ).split(`
`),
        o = "",
        d = "",
        p = [];
      while (r.length > 0) {
        let _ = !1,
          w = [],
          E;
        for (E = 0; E < r.length; E++)
          if (this.rules.other.blockquoteStart.test(r[E]))
            (w.push(r[E]), (_ = !0));
          else if (!_) w.push(r[E]);
          else break;
        r = r.slice(E);
        let R = w.join(`
`),
          C = R.replace(
            this.rules.other.blockquoteSetextReplace,
            `
    $1`,
          ).replace(this.rules.other.blockquoteSetextReplace2, "");
        ((o = o
          ? `${o}
${R}`
          : R),
          (d = d
            ? `${d}
${C}`
            : C));
        let M = this.lexer.state.top;
        if (
          ((this.lexer.state.top = !0),
          this.lexer.blockTokens(C, p, !0),
          (this.lexer.state.top = M),
          r.length === 0)
        )
          break;
        let D = p.at(-1);
        if (D?.type === "code") break;
        else if (D?.type === "blockquote") {
          let F = D,
            I =
              F.raw +
              `
` +
              r.join(`
`),
            N = this.blockquote(I);
          ((p[p.length - 1] = N),
            (o = o.substring(0, o.length - F.raw.length) + N.raw),
            (d = d.substring(0, d.length - F.text.length) + N.text));
          break;
        } else if (D?.type === "list") {
          let F = D,
            I =
              F.raw +
              `
` +
              r.join(`
`),
            N = this.list(I);
          ((p[p.length - 1] = N),
            (o = o.substring(0, o.length - D.raw.length) + N.raw),
            (d = d.substring(0, d.length - F.raw.length) + N.raw),
            (r = I.substring(p.at(-1).raw.length).split(`
`)));
          continue;
        }
      }
      return { type: "blockquote", raw: o, tokens: p, text: d };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let r = t[1].trim(),
        o = r.length > 1,
        d = {
          type: "list",
          raw: "",
          ordered: o,
          start: o ? +r.slice(0, -1) : "",
          loose: !1,
          items: [],
        };
      if (
        ((r = o ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`), this.options.pedantic)
      )
        r = o ? r : "[*+-]";
      let p = this.rules.other.listItemRegex(r),
        _ = !1;
      while (e) {
        let E = !1,
          R = "",
          C = "";
        if (!(t = p.exec(e))) break;
        if (this.rules.block.hr.test(e)) break;
        ((R = t[0]), (e = e.substring(R.length)));
        let M = t[2]
            .split(
              `
`,
              1,
            )[0]
            .replace(this.rules.other.listReplaceTabs, (ue) =>
              " ".repeat(3 * ue.length),
            ),
          D = e.split(
            `
`,
            1,
          )[0],
          F = !M.trim(),
          I = 0;
        if (this.options.pedantic) ((I = 2), (C = M.trimStart()));
        else if (F) I = t[1].length + 1;
        else
          ((I = t[2].search(this.rules.other.nonSpaceChar)),
            (I = I > 4 ? 1 : I),
            (C = M.slice(I)),
            (I += t[1].length));
        if (F && this.rules.other.blankLine.test(D))
          ((R +=
            D +
            `
`),
            (e = e.substring(D.length + 1)),
            (E = !0));
        if (!E) {
          let ue = this.rules.other.nextBulletRegex(I),
            V = this.rules.other.hrRegex(I),
            J = this.rules.other.fencesBeginRegex(I),
            U = this.rules.other.headingBeginRegex(I),
            te = this.rules.other.htmlBeginRegex(I);
          while (e) {
            let re = e.split(
                `
`,
                1,
              )[0],
              ce;
            if (((D = re), this.options.pedantic))
              ((D = D.replace(this.rules.other.listReplaceNesting, "  ")),
                (ce = D));
            else ce = D.replace(this.rules.other.tabCharGlobal, "    ");
            if (J.test(D)) break;
            if (U.test(D)) break;
            if (te.test(D)) break;
            if (ue.test(D)) break;
            if (V.test(D)) break;
            if (ce.search(this.rules.other.nonSpaceChar) >= I || !D.trim())
              C +=
                `
` + ce.slice(I);
            else {
              if (F) break;
              if (
                M.replace(this.rules.other.tabCharGlobal, "    ").search(
                  this.rules.other.nonSpaceChar,
                ) >= 4
              )
                break;
              if (J.test(M)) break;
              if (U.test(M)) break;
              if (V.test(M)) break;
              C +=
                `
` + D;
            }
            if (!F && !D.trim()) F = !0;
            ((R +=
              re +
              `
`),
              (e = e.substring(re.length + 1)),
              (M = ce.slice(I)));
          }
        }
        if (!d.loose) {
          if (_) d.loose = !0;
          else if (this.rules.other.doubleBlankLine.test(R)) _ = !0;
        }
        let N = null,
          ae;
        if (this.options.gfm) {
          if (((N = this.rules.other.listIsTask.exec(C)), N))
            ((ae = N[0] !== "[ ] "),
              (C = C.replace(this.rules.other.listReplaceTask, "")));
        }
        (d.items.push({
          type: "list_item",
          raw: R,
          task: !!N,
          checked: ae,
          loose: !1,
          text: C,
          tokens: [],
        }),
          (d.raw += R));
      }
      let w = d.items.at(-1);
      if (w) ((w.raw = w.raw.trimEnd()), (w.text = w.text.trimEnd()));
      else return;
      d.raw = d.raw.trimEnd();
      for (let E = 0; E < d.items.length; E++)
        if (
          ((this.lexer.state.top = !1),
          (d.items[E].tokens = this.lexer.blockTokens(d.items[E].text, [])),
          !d.loose)
        ) {
          let R = d.items[E].tokens.filter((M) => M.type === "space"),
            C =
              R.length > 0 &&
              R.some((M) => this.rules.other.anyLine.test(M.raw));
          d.loose = C;
        }
      if (d.loose)
        for (let E = 0; E < d.items.length; E++) d.items[E].loose = !0;
      return d;
    }
  }
  html(e) {
    let t = this.rules.block.html.exec(e);
    if (t)
      return {
        type: "html",
        block: !0,
        raw: t[0],
        pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
        text: t[0],
      };
  }
  def(e) {
    let t = this.rules.block.def.exec(e);
    if (t) {
      let r = t[1]
          .toLowerCase()
          .replace(this.rules.other.multipleSpaceGlobal, " "),
        o = t[2]
          ? t[2]
              .replace(this.rules.other.hrefBrackets, "$1")
              .replace(this.rules.inline.anyPunctuation, "$1")
          : "",
        d = t[3]
          ? t[3]
              .substring(1, t[3].length - 1)
              .replace(this.rules.inline.anyPunctuation, "$1")
          : t[3];
      return { type: "def", tag: r, raw: t[0], href: o, title: d };
    }
  }
  table(e) {
    let t = this.rules.block.table.exec(e);
    if (!t) return;
    if (!this.rules.other.tableDelimiter.test(t[2])) return;
    let r = Do(t[1]),
      o = t[2].replace(this.rules.other.tableAlignChars, "").split("|"),
      d = t[3]?.trim()
        ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`)
        : [],
      p = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (r.length !== o.length) return;
    for (let _ of o)
      if (this.rules.other.tableAlignRight.test(_)) p.align.push("right");
      else if (this.rules.other.tableAlignCenter.test(_))
        p.align.push("center");
      else if (this.rules.other.tableAlignLeft.test(_)) p.align.push("left");
      else p.align.push(null);
    for (let _ = 0; _ < r.length; _++)
      p.header.push({
        text: r[_],
        tokens: this.lexer.inline(r[_]),
        header: !0,
        align: p.align[_],
      });
    for (let _ of d)
      p.rows.push(
        Do(_, p.header.length).map((w, E) => ({
          text: w,
          tokens: this.lexer.inline(w),
          header: !1,
          align: p.align[E],
        })),
      );
    return p;
  }
  lheading(e) {
    let t = this.rules.block.lheading.exec(e);
    if (t)
      return {
        type: "heading",
        raw: t[0],
        depth: t[2].charAt(0) === "=" ? 1 : 2,
        text: t[1],
        tokens: this.lexer.inline(t[1]),
      };
  }
  paragraph(e) {
    let t = this.rules.block.paragraph.exec(e);
    if (t) {
      let r =
        t[1].charAt(t[1].length - 1) ===
        `
`
          ? t[1].slice(0, -1)
          : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: r,
        tokens: this.lexer.inline(r),
      };
    }
  }
  text(e) {
    let t = this.rules.block.text.exec(e);
    if (t)
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        tokens: this.lexer.inline(t[0]),
      };
  }
  escape(e) {
    let t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: t[1] };
  }
  tag(e) {
    let t = this.rules.inline.tag.exec(e);
    if (t) {
      if (!this.lexer.state.inLink && this.rules.other.startATag.test(t[0]))
        this.lexer.state.inLink = !0;
      else if (this.lexer.state.inLink && this.rules.other.endATag.test(t[0]))
        this.lexer.state.inLink = !1;
      if (
        !this.lexer.state.inRawBlock &&
        this.rules.other.startPreScriptTag.test(t[0])
      )
        this.lexer.state.inRawBlock = !0;
      else if (
        this.lexer.state.inRawBlock &&
        this.rules.other.endPreScriptTag.test(t[0])
      )
        this.lexer.state.inRawBlock = !1;
      return {
        type: "html",
        raw: t[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: t[0],
      };
    }
  }
  link(e) {
    let t = this.rules.inline.link.exec(e);
    if (t) {
      let r = t[2].trim();
      if (
        !this.options.pedantic &&
        this.rules.other.startAngleBracket.test(r)
      ) {
        if (!this.rules.other.endAngleBracket.test(r)) return;
        let p = _n(r.slice(0, -1), "\\");
        if ((r.length - p.length) % 2 === 0) return;
      } else {
        let p = Jd(t[2], "()");
        if (p > -1) {
          let w = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + p;
          ((t[2] = t[2].substring(0, p)),
            (t[0] = t[0].substring(0, w).trim()),
            (t[3] = ""));
        }
      }
      let o = t[2],
        d = "";
      if (this.options.pedantic) {
        let p = this.rules.other.pedanticHrefTitle.exec(o);
        if (p) ((o = p[1]), (d = p[3]));
      } else d = t[3] ? t[3].slice(1, -1) : "";
      if (((o = o.trim()), this.rules.other.startAngleBracket.test(o)))
        if (this.options.pedantic && !this.rules.other.endAngleBracket.test(r))
          o = o.slice(1);
        else o = o.slice(1, -1);
      return Bo(
        t,
        {
          href: o ? o.replace(this.rules.inline.anyPunctuation, "$1") : o,
          title: d ? d.replace(this.rules.inline.anyPunctuation, "$1") : d,
        },
        t[0],
        this.lexer,
        this.rules,
      );
    }
  }
  reflink(e, t) {
    let r;
    if (
      (r = this.rules.inline.reflink.exec(e)) ||
      (r = this.rules.inline.nolink.exec(e))
    ) {
      let o = (r[2] || r[1]).replace(this.rules.other.multipleSpaceGlobal, " "),
        d = t[o.toLowerCase()];
      if (!d) {
        let p = r[0].charAt(0);
        return { type: "text", raw: p, text: p };
      }
      return Bo(r, d, r[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, r = "") {
    let o = this.rules.inline.emStrongLDelim.exec(e);
    if (!o) return;
    if (o[3] && r.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(o[1] || o[2]) || !r || this.rules.inline.punctuation.exec(r)) {
      let p = [...o[0]].length - 1,
        _,
        w,
        E = p,
        R = 0,
        C =
          o[0][0] === "*"
            ? this.rules.inline.emStrongRDelimAst
            : this.rules.inline.emStrongRDelimUnd;
      ((C.lastIndex = 0), (t = t.slice(-1 * e.length + p)));
      while ((o = C.exec(t)) != null) {
        if (((_ = o[1] || o[2] || o[3] || o[4] || o[5] || o[6]), !_)) continue;
        if (((w = [..._].length), o[3] || o[4])) {
          E += w;
          continue;
        } else if (o[5] || o[6]) {
          if (p % 3 && !((p + w) % 3)) {
            R += w;
            continue;
          }
        }
        if (((E -= w), E > 0)) continue;
        w = Math.min(w, w + E + R);
        let M = [...o[0]][0].length,
          D = e.slice(0, p + o.index + M + w);
        if (Math.min(p, w) % 2) {
          let I = D.slice(1, -1);
          return {
            type: "em",
            raw: D,
            text: I,
            tokens: this.lexer.inlineTokens(I),
          };
        }
        let F = D.slice(2, -2);
        return {
          type: "strong",
          raw: D,
          text: F,
          tokens: this.lexer.inlineTokens(F),
        };
      }
    }
  }
  codespan(e) {
    let t = this.rules.inline.code.exec(e);
    if (t) {
      let r = t[2].replace(this.rules.other.newLineCharGlobal, " "),
        o = this.rules.other.nonSpaceChar.test(r),
        d =
          this.rules.other.startingSpaceChar.test(r) &&
          this.rules.other.endingSpaceChar.test(r);
      if (o && d) r = r.substring(1, r.length - 1);
      return { type: "codespan", raw: t[0], text: r };
    }
  }
  br(e) {
    let t = this.rules.inline.br.exec(e);
    if (t) return { type: "br", raw: t[0] };
  }
  del(e) {
    let t = this.rules.inline.del.exec(e);
    if (t)
      return {
        type: "del",
        raw: t[0],
        text: t[2],
        tokens: this.lexer.inlineTokens(t[2]),
      };
  }
  autolink(e) {
    let t = this.rules.inline.autolink.exec(e);
    if (t) {
      let r, o;
      if (t[2] === "@") ((r = t[1]), (o = "mailto:" + r));
      else ((r = t[1]), (o = r));
      return {
        type: "link",
        raw: t[0],
        text: r,
        href: o,
        tokens: [{ type: "text", raw: r, text: r }],
      };
    }
  }
  url(e) {
    let t;
    if ((t = this.rules.inline.url.exec(e))) {
      let r, o;
      if (t[2] === "@") ((r = t[0]), (o = "mailto:" + r));
      else {
        let d;
        do
          ((d = t[0]),
            (t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? ""));
        while (d !== t[0]);
        if (((r = t[0]), t[1] === "www.")) o = "http://" + t[0];
        else o = t[0];
      }
      return {
        type: "link",
        raw: t[0],
        text: r,
        href: o,
        tokens: [{ type: "text", raw: r, text: r }],
      };
    }
  }
  inlineText(e) {
    let t = this.rules.inline.text.exec(e);
    if (t) {
      let r = this.lexer.state.inRawBlock;
      return { type: "text", raw: t[0], text: t[0], escaped: r };
    }
  }
}
class EN {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e) {
    ((this.tokens = []),
      (this.tokens.links = Object.create(null)),
      (this.options = e || qt),
      (this.options.tokenizer = this.options.tokenizer || new oFe()),
      (this.tokenizer = this.options.tokenizer),
      (this.tokenizer.options = this.options),
      (this.tokenizer.lexer = this),
      (this.inlineQueue = []),
      (this.state = { inLink: !1, inRawBlock: !1, top: !0 }));
    let t = { other: Ze, block: rr.normal, inline: yn.normal };
    if (this.options.pedantic)
      ((t.block = rr.pedantic), (t.inline = yn.pedantic));
    else if (this.options.gfm)
      if (((t.block = rr.gfm), this.options.breaks)) t.inline = yn.breaks;
      else t.inline = yn.gfm;
    this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: rr, inline: yn };
  }
  static lex(e, t) {
    return new EN(t).lex(e);
  }
  static lexInline(e, t) {
    return new EN(t).inlineTokens(e);
  }
  lex(e) {
    ((e = e.replace(
      Ze.carriageReturn,
      `
`,
    )),
      this.blockTokens(e, this.tokens));
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let r = this.inlineQueue[t];
      this.inlineTokens(r.src, r.tokens);
    }
    return ((this.inlineQueue = []), this.tokens);
  }
  blockTokens(e, t = [], r = !1) {
    if (this.options.pedantic)
      e = e.replace(Ze.tabCharGlobal, "    ").replace(Ze.spaceLine, "");
    while (e) {
      let o;
      if (
        this.options.extensions?.block?.some((p) => {
          if ((o = p.call({ lexer: this }, e, t)))
            return ((e = e.substring(o.raw.length)), t.push(o), !0);
          return !1;
        })
      )
        continue;
      if ((o = this.tokenizer.space(e))) {
        e = e.substring(o.raw.length);
        let p = t.at(-1);
        if (o.raw.length === 1 && p !== void 0)
          p.raw += `
`;
        else t.push(o);
        continue;
      }
      if ((o = this.tokenizer.code(e))) {
        e = e.substring(o.raw.length);
        let p = t.at(-1);
        if (p?.type === "paragraph" || p?.type === "text")
          ((p.raw +=
            `
` + o.raw),
            (p.text +=
              `
` + o.text),
            (this.inlineQueue.at(-1).src = p.text));
        else t.push(o);
        continue;
      }
      if ((o = this.tokenizer.fences(e))) {
        ((e = e.substring(o.raw.length)), t.push(o));
        continue;
      }
      if ((o = this.tokenizer.heading(e))) {
        ((e = e.substring(o.raw.length)), t.push(o));
        continue;
      }
      if ((o = this.tokenizer.hr(e))) {
        ((e = e.substring(o.raw.length)), t.push(o));
        continue;
      }
      if ((o = this.tokenizer.blockquote(e))) {
        ((e = e.substring(o.raw.length)), t.push(o));
        continue;
      }
      if ((o = this.tokenizer.list(e))) {
        ((e = e.substring(o.raw.length)), t.push(o));
        continue;
      }
      if ((o = this.tokenizer.html(e))) {
        ((e = e.substring(o.raw.length)), t.push(o));
        continue;
      }
      if ((o = this.tokenizer.def(e))) {
        e = e.substring(o.raw.length);
        let p = t.at(-1);
        if (p?.type === "paragraph" || p?.type === "text")
          ((p.raw +=
            `
` + o.raw),
            (p.text +=
              `
` + o.raw),
            (this.inlineQueue.at(-1).src = p.text));
        else if (!this.tokens.links[o.tag])
          this.tokens.links[o.tag] = { href: o.href, title: o.title };
        continue;
      }
      if ((o = this.tokenizer.table(e))) {
        ((e = e.substring(o.raw.length)), t.push(o));
        continue;
      }
      if ((o = this.tokenizer.lheading(e))) {
        ((e = e.substring(o.raw.length)), t.push(o));
        continue;
      }
      let d = e;
      if (this.options.extensions?.startBlock) {
        let p = 1 / 0,
          _ = e.slice(1),
          w;
        if (
          (this.options.extensions.startBlock.forEach((E) => {
            if (
              ((w = E.call({ lexer: this }, _)),
              typeof w === "number" && w >= 0)
            )
              p = Math.min(p, w);
          }),
          p < 1 / 0 && p >= 0)
        )
          d = e.substring(0, p + 1);
      }
      if (this.state.top && (o = this.tokenizer.paragraph(d))) {
        let p = t.at(-1);
        if (r && p?.type === "paragraph")
          ((p.raw +=
            `
` + o.raw),
            (p.text +=
              `
` + o.text),
            this.inlineQueue.pop(),
            (this.inlineQueue.at(-1).src = p.text));
        else t.push(o);
        ((r = d.length !== e.length), (e = e.substring(o.raw.length)));
        continue;
      }
      if ((o = this.tokenizer.text(e))) {
        e = e.substring(o.raw.length);
        let p = t.at(-1);
        if (p?.type === "text")
          ((p.raw +=
            `
` + o.raw),
            (p.text +=
              `
` + o.text),
            this.inlineQueue.pop(),
            (this.inlineQueue.at(-1).src = p.text));
        else t.push(o);
        continue;
      }
      if (e) {
        let p = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(p);
          break;
        } else throw Error(p);
      }
    }
    return ((this.state.top = !0), t);
  }
  inline(e, t = []) {
    return (this.inlineQueue.push({ src: e, tokens: t }), t);
  }
  inlineTokens(e, t = []) {
    let r = e,
      o = null;
    if (this.tokens.links) {
      let _ = Object.keys(this.tokens.links);
      if (_.length > 0) {
        while ((o = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null)
          if (_.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)))
            r =
              r.slice(0, o.index) +
              "[" +
              "a".repeat(o[0].length - 2) +
              "]" +
              r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
      }
    }
    while ((o = this.tokenizer.rules.inline.blockSkip.exec(r)) != null)
      r =
        r.slice(0, o.index) +
        "[" +
        "a".repeat(o[0].length - 2) +
        "]" +
        r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    while ((o = this.tokenizer.rules.inline.anyPunctuation.exec(r)) != null)
      r =
        r.slice(0, o.index) +
        "++" +
        r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let d = !1,
      p = "";
    while (e) {
      if (!d) p = "";
      d = !1;
      let _;
      if (
        this.options.extensions?.inline?.some((E) => {
          if ((_ = E.call({ lexer: this }, e, t)))
            return ((e = e.substring(_.raw.length)), t.push(_), !0);
          return !1;
        })
      )
        continue;
      if ((_ = this.tokenizer.escape(e))) {
        ((e = e.substring(_.raw.length)), t.push(_));
        continue;
      }
      if ((_ = this.tokenizer.tag(e))) {
        ((e = e.substring(_.raw.length)), t.push(_));
        continue;
      }
      if ((_ = this.tokenizer.link(e))) {
        ((e = e.substring(_.raw.length)), t.push(_));
        continue;
      }
      if ((_ = this.tokenizer.reflink(e, this.tokens.links))) {
        e = e.substring(_.raw.length);
        let E = t.at(-1);
        if (_.type === "text" && E?.type === "text")
          ((E.raw += _.raw), (E.text += _.text));
        else t.push(_);
        continue;
      }
      if ((_ = this.tokenizer.emStrong(e, r, p))) {
        ((e = e.substring(_.raw.length)), t.push(_));
        continue;
      }
      if ((_ = this.tokenizer.codespan(e))) {
        ((e = e.substring(_.raw.length)), t.push(_));
        continue;
      }
      if ((_ = this.tokenizer.br(e))) {
        ((e = e.substring(_.raw.length)), t.push(_));
        continue;
      }
      if ((_ = this.tokenizer.del(e))) {
        ((e = e.substring(_.raw.length)), t.push(_));
        continue;
      }
      if ((_ = this.tokenizer.autolink(e))) {
        ((e = e.substring(_.raw.length)), t.push(_));
        continue;
      }
      if (!this.state.inLink && (_ = this.tokenizer.url(e))) {
        ((e = e.substring(_.raw.length)), t.push(_));
        continue;
      }
      let w = e;
      if (this.options.extensions?.startInline) {
        let E = 1 / 0,
          R = e.slice(1),
          C;
        if (
          (this.options.extensions.startInline.forEach((M) => {
            if (
              ((C = M.call({ lexer: this }, R)),
              typeof C === "number" && C >= 0)
            )
              E = Math.min(E, C);
          }),
          E < 1 / 0 && E >= 0)
        )
          w = e.substring(0, E + 1);
      }
      if ((_ = this.tokenizer.inlineText(w))) {
        if (((e = e.substring(_.raw.length)), _.raw.slice(-1) !== "_"))
          p = _.raw.slice(-1);
        d = !0;
        let E = t.at(-1);
        if (E?.type === "text") ((E.raw += _.raw), (E.text += _.text));
        else t.push(_);
        continue;
      }
      if (e) {
        let E = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(E);
          break;
        } else throw Error(E);
      }
    }
    return t;
  }
}
class xn {
  options;
  parser;
  constructor(e) {
    this.options = e || qt;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: r }) {
    let o = (t || "").match(Ze.notSpaceStart)?.[0],
      d =
        e.replace(Ze.endingNewline, "") +
        `
`;
    if (!o)
      return (
        "<pre><code>" +
        (r ? d : yt(d, !0)) +
        `</code></pre>
`
      );
    return (
      '<pre><code class="language-' +
      yt(o) +
      '">' +
      (r ? d : yt(d, !0)) +
      `</code></pre>
`
    );
  }
  blockquote({ tokens: e }) {
    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
  }
  html({ text: e }) {
    return e;
  }
  heading({ tokens: e, depth: t }) {
    return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
  }
  hr(e) {
    return `<hr>
`;
  }
  list(e) {
    let { ordered: t, start: r } = e,
      o = "";
    for (let _ = 0; _ < e.items.length; _++) {
      let w = e.items[_];
      o += this.listitem(w);
    }
    let d = t ? "ol" : "ul",
      p = t && r !== 1 ? ' start="' + r + '"' : "";
    return (
      "<" +
      d +
      p +
      `>
` +
      o +
      "</" +
      d +
      `>
`
    );
  }
  listitem(e) {
    let t = "";
    if (e.task) {
      let r = this.checkbox({ checked: !!e.checked });
      if (e.loose)
        if (e.tokens[0]?.type === "paragraph") {
          if (
            ((e.tokens[0].text = r + " " + e.tokens[0].text),
            e.tokens[0].tokens &&
              e.tokens[0].tokens.length > 0 &&
              e.tokens[0].tokens[0].type === "text")
          )
            ((e.tokens[0].tokens[0].text =
              r + " " + yt(e.tokens[0].tokens[0].text)),
              (e.tokens[0].tokens[0].escaped = !0));
        } else
          e.tokens.unshift({
            type: "text",
            raw: r + " ",
            text: r + " ",
            escaped: !0,
          });
      else t += r + " ";
    }
    return (
      (t += this.parser.parse(e.tokens, !!e.loose)),
      `<li>${t}</li>
`
    );
  }
  checkbox({ checked: e }) {
    return (
      "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">'
    );
  }
  paragraph({ tokens: e }) {
    return `<p>${this.parser.parseInline(e)}</p>
`;
  }
  table(e) {
    let t = "",
      r = "";
    for (let d = 0; d < e.header.length; d++) r += this.tablecell(e.header[d]);
    t += this.tablerow({ text: r });
    let o = "";
    for (let d = 0; d < e.rows.length; d++) {
      let p = e.rows[d];
      r = "";
      for (let _ = 0; _ < p.length; _++) r += this.tablecell(p[_]);
      o += this.tablerow({ text: r });
    }
    if (o) o = `<tbody>${o}</tbody>`;
    return (
      `<table>
<thead>
` +
      t +
      `</thead>
` +
      o +
      `</table>
`
    );
  }
  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    let t = this.parser.parseInline(e.tokens),
      r = e.header ? "th" : "td";
    return (
      (e.align ? `<${r} align="${e.align}">` : `<${r}>`) +
      t +
      `</${r}>
`
    );
  }
  strong({ tokens: e }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`;
  }
  em({ tokens: e }) {
    return `<em>${this.parser.parseInline(e)}</em>`;
  }
  codespan({ text: e }) {
    return `<code>${yt(e, !0)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: t, tokens: r }) {
    let o = this.parser.parseInline(r),
      d = Io(e);
    if (d === null) return o;
    e = d;
    let p = '<a href="' + e + '"';
    if (t) p += ' title="' + yt(t) + '"';
    return ((p += ">" + o + "</a>"), p);
  }
  image({ href: e, title: t, text: r }) {
    let o = Io(e);
    if (o === null) return yt(r);
    e = o;
    let d = `<img src="${e}" alt="${r}"`;
    if (t) d += ` title="${yt(t)}"`;
    return ((d += ">"), d);
  }
  text(e) {
    return "tokens" in e && e.tokens
      ? this.parser.parseInline(e.tokens)
      : "escaped" in e && e.escaped
        ? e.text
        : yt(e.text);
  }
}
class ar {
  strong({ text: e }) {
    return e;
  }
  em({ text: e }) {
    return e;
  }
  codespan({ text: e }) {
    return e;
  }
  del({ text: e }) {
    return e;
  }
  html({ text: e }) {
    return e;
  }
  text({ text: e }) {
    return e;
  }
  link({ text: e }) {
    return "" + e;
  }
  image({ text: e }) {
    return "" + e;
  }
  br() {
    return "";
  }
}
class ot {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    ((this.options = e || qt),
      (this.options.renderer = this.options.renderer || new xn()),
      (this.renderer = this.options.renderer),
      (this.renderer.options = this.options),
      (this.renderer.parser = this),
      (this.textRenderer = new ar()));
  }
  static parse(e, t) {
    return new ot(t).parse(e);
  }
  static parseInline(e, t) {
    return new ot(t).parseInline(e);
  }
  parse(e, t = !0) {
    let r = "";
    for (let o = 0; o < e.length; o++) {
      let d = e[o];
      if (this.options.extensions?.renderers?.[d.type]) {
        let _ = d,
          w = this.options.extensions.renderers[_.type].call(
            { parser: this },
            _,
          );
        if (
          w !== !1 ||
          ![
            "space",
            "hr",
            "heading",
            "code",
            "table",
            "blockquote",
            "list",
            "html",
            "paragraph",
            "text",
          ].includes(_.type)
        ) {
          r += w || "";
          continue;
        }
      }
      let p = d;
      switch (p.type) {
        case "space": {
          r += this.renderer.space(p);
          continue;
        }
        case "hr": {
          r += this.renderer.hr(p);
          continue;
        }
        case "heading": {
          r += this.renderer.heading(p);
          continue;
        }
        case "code": {
          r += this.renderer.code(p);
          continue;
        }
        case "table": {
          r += this.renderer.table(p);
          continue;
        }
        case "blockquote": {
          r += this.renderer.blockquote(p);
          continue;
        }
        case "list": {
          r += this.renderer.list(p);
          continue;
        }
        case "html": {
          r += this.renderer.html(p);
          continue;
        }
        case "paragraph": {
          r += this.renderer.paragraph(p);
          continue;
        }
        case "text": {
          let _ = p,
            w = this.renderer.text(_);
          while (o + 1 < e.length && e[o + 1].type === "text")
            ((_ = e[++o]),
              (w +=
                `
` + this.renderer.text(_)));
          if (t)
            r += this.renderer.paragraph({
              type: "paragraph",
              raw: w,
              text: w,
              tokens: [{ type: "text", raw: w, text: w, escaped: !0 }],
            });
          else r += w;
          continue;
        }
        default: {
          let _ = 'Token with "' + p.type + '" type was not found.';
          if (this.options.silent) return (console.error(_), "");
          else throw Error(_);
        }
      }
    }
    return r;
  }
  parseInline(e, t = this.renderer) {
    let r = "";
    for (let o = 0; o < e.length; o++) {
      let d = e[o];
      if (this.options.extensions?.renderers?.[d.type]) {
        let _ = this.options.extensions.renderers[d.type].call(
          { parser: this },
          d,
        );
        if (
          _ !== !1 ||
          ![
            "escape",
            "html",
            "link",
            "image",
            "strong",
            "em",
            "codespan",
            "br",
            "del",
            "text",
          ].includes(d.type)
        ) {
          r += _ || "";
          continue;
        }
      }
      let p = d;
      switch (p.type) {
        case "escape": {
          r += t.text(p);
          break;
        }
        case "html": {
          r += t.html(p);
          break;
        }
        case "link": {
          r += t.link(p);
          break;
        }
        case "image": {
          r += t.image(p);
          break;
        }
        case "strong": {
          r += t.strong(p);
          break;
        }
        case "em": {
          r += t.em(p);
          break;
        }
        case "codespan": {
          r += t.codespan(p);
          break;
        }
        case "br": {
          r += t.br(p);
          break;
        }
        case "del": {
          r += t.del(p);
          break;
        }
        case "text": {
          r += t.text(p);
          break;
        }
        default: {
          let _ = 'Token with "' + p.type + '" type was not found.';
          if (this.options.silent) return (console.error(_), "");
          else throw Error(_);
        }
      }
    }
    return r;
  }
}
class kn {
  options;
  block;
  constructor(e) {
    this.options = e || qt;
  }
  static passThroughHooks = new Set([
    "preprocess",
    "postprocess",
    "processAllTokens",
  ]);
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
  processAllTokens(e) {
    return e;
  }
  provideLexer() {
    return this.block ? EN.lex : EN.lexInline;
  }
  provideParser() {
    return this.block ? ot.parse : ot.parseInline;
  }
}
class AG {
  defaults = ii();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = ot;
  Renderer = xn;
  TextRenderer = ar;
  Lexer = EN;
  Tokenizer = oFe;
  Hooks = kn;
  constructor(...e) {
    this.use(...e);
  }
  walkTokens(e, t) {
    let r = [];
    for (let o of e)
      switch (((r = r.concat(t.call(this, o))), o.type)) {
        case "table": {
          let d = o;
          for (let p of d.header) r = r.concat(this.walkTokens(p.tokens, t));
          for (let p of d.rows)
            for (let _ of p) r = r.concat(this.walkTokens(_.tokens, t));
          break;
        }
        case "list": {
          let d = o;
          r = r.concat(this.walkTokens(d.items, t));
          break;
        }
        default: {
          let d = o;
          if (this.defaults.extensions?.childTokens?.[d.type])
            this.defaults.extensions.childTokens[d.type].forEach((p) => {
              let _ = d[p].flat(1 / 0);
              r = r.concat(this.walkTokens(_, t));
            });
          else if (d.tokens) r = r.concat(this.walkTokens(d.tokens, t));
        }
      }
    return r;
  }
  use(...e) {
    let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return (
      e.forEach((r) => {
        let o = { ...r };
        if (((o.async = this.defaults.async || o.async || !1), r.extensions))
          (r.extensions.forEach((d) => {
            if (!d.name) throw Error("extension name required");
            if ("renderer" in d) {
              let p = t.renderers[d.name];
              if (p)
                t.renderers[d.name] = function (..._) {
                  let w = d.renderer.apply(this, _);
                  if (w === !1) w = p.apply(this, _);
                  return w;
                };
              else t.renderers[d.name] = d.renderer;
            }
            if ("tokenizer" in d) {
              if (!d.level || (d.level !== "block" && d.level !== "inline"))
                throw Error("extension level must be 'block' or 'inline'");
              let p = t[d.level];
              if (p) p.unshift(d.tokenizer);
              else t[d.level] = [d.tokenizer];
              if (d.start) {
                if (d.level === "block")
                  if (t.startBlock) t.startBlock.push(d.start);
                  else t.startBlock = [d.start];
                else if (d.level === "inline")
                  if (t.startInline) t.startInline.push(d.start);
                  else t.startInline = [d.start];
              }
            }
            if ("childTokens" in d && d.childTokens)
              t.childTokens[d.name] = d.childTokens;
          }),
            (o.extensions = t));
        if (r.renderer) {
          let d = this.defaults.renderer || new xn(this.defaults);
          for (let p in r.renderer) {
            if (!(p in d)) throw Error(`renderer '${p}' does not exist`);
            if (["options", "parser"].includes(p)) continue;
            let _ = p,
              w = r.renderer[_],
              E = d[_];
            d[_] = (...R) => {
              let C = w.apply(d, R);
              if (C === !1) C = E.apply(d, R);
              return C || "";
            };
          }
          o.renderer = d;
        }
        if (r.tokenizer) {
          let d = this.defaults.tokenizer || new oFe(this.defaults);
          for (let p in r.tokenizer) {
            if (!(p in d)) throw Error(`tokenizer '${p}' does not exist`);
            if (["options", "rules", "lexer"].includes(p)) continue;
            let _ = p,
              w = r.tokenizer[_],
              E = d[_];
            d[_] = (...R) => {
              let C = w.apply(d, R);
              if (C === !1) C = E.apply(d, R);
              return C;
            };
          }
          o.tokenizer = d;
        }
        if (r.hooks) {
          let d = this.defaults.hooks || new kn();
          for (let p in r.hooks) {
            if (!(p in d)) throw Error(`hook '${p}' does not exist`);
            if (["options", "block"].includes(p)) continue;
            let _ = p,
              w = r.hooks[_],
              E = d[_];
            if (kn.passThroughHooks.has(p))
              d[_] = (R) => {
                if (this.defaults.async)
                  return Promise.resolve(w.call(d, R)).then((M) =>
                    E.call(d, M),
                  );
                let C = w.call(d, R);
                return E.call(d, C);
              };
            else
              d[_] = (...R) => {
                let C = w.apply(d, R);
                if (C === !1) C = E.apply(d, R);
                return C;
              };
          }
          o.hooks = d;
        }
        if (r.walkTokens) {
          let d = this.defaults.walkTokens,
            p = r.walkTokens;
          o.walkTokens = function (_) {
            let w = [];
            if ((w.push(p.call(this, _)), d)) w = w.concat(d.call(this, _));
            return w;
          };
        }
        this.defaults = { ...this.defaults, ...o };
      }),
      this
    );
  }
  setOptions(e) {
    return ((this.defaults = { ...this.defaults, ...e }), this);
  }
  lexer(e, t) {
    return EN.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return ot.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e) {
    return (r, o) => {
      let d = { ...o },
        p = { ...this.defaults, ...d },
        _ = this.onError(!!p.silent, !!p.async);
      if (this.defaults.async === !0 && d.async === !1)
        return _(
          Error(
            "marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.",
          ),
        );
      if (typeof r > "u" || r === null)
        return _(Error("marked(): input parameter is undefined or null"));
      if (typeof r !== "string")
        return _(
          Error(
            "marked(): input parameter is of type " +
              Object.prototype.toString.call(r) +
              ", string expected",
          ),
        );
      if (p.hooks) ((p.hooks.options = p), (p.hooks.block = e));
      let w = p.hooks ? p.hooks.provideLexer() : e ? EN.lex : EN.lexInline,
        E = p.hooks ? p.hooks.provideParser() : e ? ot.parse : ot.parseInline;
      if (p.async)
        return Promise.resolve(p.hooks ? p.hooks.preprocess(r) : r)
          .then((R) => w(R, p))
          .then((R) => (p.hooks ? p.hooks.processAllTokens(R) : R))
          .then((R) =>
            p.walkTokens
              ? Promise.all(this.walkTokens(R, p.walkTokens)).then(() => R)
              : R,
          )
          .then((R) => E(R, p))
          .then((R) => (p.hooks ? p.hooks.postprocess(R) : R))
          .catch(_);
      try {
        if (p.hooks) r = p.hooks.preprocess(r);
        let R = w(r, p);
        if (p.hooks) R = p.hooks.processAllTokens(R);
        if (p.walkTokens) this.walkTokens(R, p.walkTokens);
        let C = E(R, p);
        if (p.hooks) C = p.hooks.postprocess(C);
        return C;
      } catch (R) {
        return _(R);
      }
    };
  }
  onError(e, t) {
    return (r) => {
      if (
        ((r.message += `
Please report this to https://github.com/markedjs/marked.`),
        e)
      ) {
        let o =
          "<p>An error occurred:</p><pre>" + yt(r.message + "", !0) + "</pre>";
        if (t) return Promise.resolve(o);
        return o;
      }
      if (t) return Promise.reject(r);
      throw r;
    };
  }
}
var Kt = new AG();
function _u(e, t) {
  return Kt.parse(e, t);
}
_u.options = _u.setOptions = function (e) {
  return (Kt.setOptions(e), (_u.defaults = Kt.defaults), jo(_u.defaults), _u);
};
_u.getDefaults = ii;
_u.defaults = qt;
_u.use = function (...e) {
  return (Kt.use(...e), (_u.defaults = Kt.defaults), jo(_u.defaults), _u);
};
_u.walkTokens = function (e, t) {
  return Kt.walkTokens(e, t);
};
_u.parseInline = Kt.parseInline;
_u.Parser = ot;
_u.parser = ot.parse;
_u.Renderer = xn;
_u.TextRenderer = ar;
_u.Lexer = EN;
_u.lexer = EN.lex;
_u.Tokenizer = oFe;
_u.Hooks = kn;
_u.parse = _u;
var {
  options: wb,
  setOptions: kb,
  use: vb,
  walkTokens: xb,
  parseInline: Sb,
} = _u;
var Ab = ot.parse,
  Eb = EN.lex;
var Qo = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  colon: ":",
  semi: ";",
  sol: "/",
  Tab: "\t",
  NewLine: `
`,
};
function Qd(e) {
  return e.replace(
    /&(?:#[xX]([0-9a-fA-F]+);?|#(\d+);?|([a-zA-Z][a-zA-Z0-9]*);)/g,
    (t, r, o, d) => {
      if (r !== void 0) return String.fromCodePoint(parseInt(r, 16));
      if (o !== void 0) return String.fromCodePoint(parseInt(o, 10));
      return d in Qo ? Qo[d] : t;
    },
  );
}
function sFe(e) {
  let t;
  try {
    t = Qd(e);
  } catch {
    return !1;
  }
  if (/&(?:#|[a-zA-Z][a-zA-Z0-9]*;)/.test(t)) return !1;
  let r;
  try {
    r = new URL(t, "https://artifact.invalid/");
  } catch {
    return !1;
  }
  return (
    r.protocol === "https:" ||
    r.protocol === "http:" ||
    r.protocol === "mailto:"
  );
}
var ta =
    "--md-bg:#0d0d0d;--md-text:rgba(255,255,255,.85);--md-muted:rgba(255,255,255,.6);--md-fill:rgba(255,255,255,.06);--md-fill-strong:rgba(255,255,255,.09);--md-rule:rgba(255,255,255,.14);--md-rule-strong:rgba(255,255,255,.22);--md-link:hsl(210 100% 72%)",
  na =
    "--md-bg:#fff;--md-text:rgba(0,0,0,.8);--md-muted:rgba(0,0,0,.6);--md-fill:rgba(0,0,0,.04);--md-fill-strong:rgba(0,0,0,.06);--md-rule:rgba(0,0,0,.1);--md-rule-strong:rgba(0,0,0,.16);--md-link:hsl(210 100% 45%)",
  ef =
    "<style>:root{color-scheme:light dark;" +
    na +
    '}@media (prefers-color-scheme:dark){:root:where(:not([data-theme="light"])){' +
    ta +
    '}}:root[data-theme="dark"]{color-scheme:dark;' +
    ta +
    '}:root[data-theme="light"]{color-scheme:light}@media print{:root,:root[data-theme="dark"]{color-scheme:light;' +
    na +
    "}}body{background:var(--md-bg);color:var(--md-text);max-width:720px;margin:0 auto;padding:32px;display:flex;flex-direction:column;gap:10px;font:14px/1.55 -apple-system,BlinkMacSystemFont,'SF Pro','Segoe UI',sans-serif;overflow-wrap:break-word}body>:first-child{margin-top:0}h1,h2,h3,h4,h5,h6{margin:6px 0 0;line-height:1.25;font-weight:600;text-wrap:balance}h1{font-size:1.35em}h2{font-size:1.15em;color:var(--md-muted)}h3,h4,h5,h6{font-size:1em}p,ul,ol,blockquote,table,pre,hr{margin:0}strong{font-weight:600}a{color:var(--md-link);text-decoration:none}a:hover{text-decoration:underline}ul,ol{display:flex;flex-direction:column;gap:6px;padding-left:22px}ul{list-style:disc}ol{list-style:decimal}:is(li,td,th)>*+:is(p,ul,ol,blockquote){margin-top:6px}blockquote{display:flex;flex-direction:column;gap:10px;border-left:2px solid var(--md-rule);padding-left:10px;color:var(--md-muted)}:not(pre)>code{background:var(--md-fill);padding:1px 3px;border-radius:4px;font:.92em 'SF Mono',ui-monospace,Menlo,Consolas,monospace}a>code{background:none;color:inherit}pre{background:var(--md-fill);padding:10px 12px;border-radius:6px;overflow-x:auto;font:12px/1.5 'SF Mono',ui-monospace,Menlo,Consolas,monospace;margin-block:4px}pre code{background:none;padding:0;font:inherit}table{width:100%;border-collapse:separate;border-spacing:2px;font:inherit}th,td{padding:6px 8px;border-radius:3px;text-align:left;vertical-align:top}th{background:var(--md-fill-strong);font-weight:600}td{background:var(--md-fill)}:is(th,td) :not(pre)>code{background:transparent}hr{border:0;border-top:1px solid var(--md-rule-strong);margin-block:10px}img{max-width:100%;height:auto;border-radius:4px}</style>\n";
function ia(e, t) {
  if (((t ?? "").trim().split(/\s+/)[0]?.toLowerCase() ?? "") !== "mermaid")
    return !1;
  return `<pre class="mermaid">${go(e)}</pre>
`;
}
function sa() {
  let e = ne().marked;
  if (e.plain) return e.plain;
  let t = new AG({ gfm: !0 });
  return (
    t.use({
      renderer: {
        code({ text: r, lang: o }) {
          return ia(r, o);
        },
      },
    }),
    (e.plain = t),
    t
  );
}
async function Qwt(e, t) {
  return ef + di(e, t);
}
function nf() {
  let e = ne().marked;
  if (e.inertHtml) return e.inertHtml;
  let t = new AG({ gfm: !0 });
  return (
    t.use({
      renderer: {
        code({ text: r, lang: o }) {
          return ia(r, o);
        },
        html({ text: r }) {
          if (Ner.test(r)) return r;
          if (MXe(r)) return "";
          return go(r);
        },
        link(r) {
          if (sFe(r.href)) return !1;
          return `${this.parser.parseInline(r.tokens)} (${go(r.href)})`;
        },
        image(r) {
          if (!sFe(r.href)) return go(r.text || r.href);
          return (
            `<img src="${go(r.href)}" alt="${go(r.text)}"` +
            (r.title ? ` title="${go(r.title)}"` : "") +
            ">"
          );
        },
      },
    }),
    (e.inertHtml = t),
    t
  );
}
function di(e, t) {
  return (t?.neutralizeRawHtml ? nf() : sa()).parse(e, { async: !1 });
}
function lr(e) {
  return sa().lexer(e);
}
var sf = /^ {0,3}#{1,6}(?:[ \t]+(.*))?$/m;
function oa(e) {
  return /\s/.test(e);
}
function of(e) {
  let t = e.length;
  while (t > 0 && oa(e[t - 1])) t--;
  let r = t;
  while (t > 0 && e[t - 1] === "#") t--;
  if (t === r || (t > 0 && e[t - 1] !== " ")) return e.slice(0, r);
  while (t > 0 && oa(e[t - 1])) t--;
  return e.slice(0, t);
}
var af = /^---[ \t]*\n/,
  lf = /^---[ \t]*$/m,
  cf = /^[ \t]*$/m;
function uf(e) {
  let t = e.match(af);
  if (!t) return e;
  let r = e.slice(t[0].length),
    o = r.match(lf);
  if (!o) return e;
  let d = r.match(cf);
  if (d && d.index < o.index) return e;
  return r.slice(o.index + o[0].length + 1);
}
function df(e) {
  let t = uf(e);
  if (t.length <= cr) {
    let o;
    try {
      o = lr(t);
    } catch {
      return;
    }
    let d = o.find((p) => p.type === "heading");
    return d && "text" in d ? d.text : void 0;
  }
  let r = t.match(sf)?.[1];
  return r === void 0 ? void 0 : of(r).slice(0, cr);
}
var cr = 65536,
  ff = /\r\n|\r/g;
function ca(e) {
  return e.replace(/^\uFEFF/, "").replace(
    ff,
    `
`,
  );
}
function pf(e) {
  let t = e.trim();
  while (t.startsWith("<!--")) {
    let r = t.indexOf("-->", 4);
    if (r === -1) return !1;
    t = t.slice(r + 3).trimStart();
  }
  return t === "";
}
function ua(e) {
  let t;
  try {
    t = lr(e);
  } catch {
    return null;
  }
  let r = 0,
    o = 0;
  for (;;) {
    let p = t[r];
    if (!p) return null;
    if (!(p.type === "space" || (p.type === "html" && pf(p.raw)))) break;
    if (!e.startsWith(p.raw, o)) return null;
    ((o += p.raw.length), r++);
  }
  let d = t[r];
  if (!d || !e.startsWith(d.raw, o)) return null;
  return { token: d, offset: o };
}
var hf = /^\uFEFF?<!--[\s\S]*?-->\s*/;
var gf = /!?\[([^\]]{0,400})\]\([^\s)]{0,1500}\)/g;
function mf(e, t, r, o) {
  if (r > 0 && o[r - 1] === "\\") return e;
  if (t.endsWith("\\")) return e;
  return t;
}
var bf = /`+/g;
function aa(e) {
  for (let t = 0; t < 3; t++) {
    let r = e.replace(gf, mf);
    if (r === e) break;
    e = r;
  }
  return e
    .replace(/[*`]|~~/g, "")
    .replace(
      /(?<![\p{L}\p{N}])(?<!_)_+(?!_)|(?<!_)_+(?!_)(?![\p{L}\p{N}])/gu,
      "",
    );
}
function da(e) {
  let t = [];
  for (let p of e.matchAll(bf)) t.push({ start: p.index, len: p[0].length });
  let r = "",
    o = 0,
    d = 0;
  while (d < t.length) {
    let p = t[d],
      _ = d + 1;
    while (_ < t.length) {
      if (t[_].len === p.len) break;
      _++;
    }
    if (_ < t.length) {
      let w = t[_];
      ((r += aa(e.slice(o, p.start))),
        (r += e.slice(p.start + p.len, w.start)),
        (o = w.start + w.len),
        (d = _ + 1));
    } else d++;
  }
  return ((r += aa(e.slice(o))), r);
}
function yf(e, t) {
  return (
    da(e ?? "")
      .replace(/\s+/g, " ")
      .trim() || t
  );
}
function _f(e, t) {
  return [...e].slice(0, 120).join("").trim() || t;
}
async function fa(e) {
  return fi(e, {
    eyebrow: `Plan \xB7 ${basename(getCwd())}`,
    fallbackTitle: "Plan",
    extractLede: !0,
    feature: "plan",
  });
}
async function ier(e, t) {
  let r = (t.endsWith(WORKSHOP_MARKDOWN_EXTENSION) ? t.slice(0, -WORKSHOP_MARKDOWN_EXTENSION.length) : t) || t;
  return fi(e, {
    eyebrow: `Workshop \xB7 ${r}`,
    fallbackTitle: t,
    tabTitle: t,
    extractLede: !0,
    extractDecisions: !0,
    neutralizeRawHtml: !0,
    feature: "workshop",
    loadTemplate: () =>
      import("../../01-核心基础设施/共享小工具-未细化/WORKSHOP_PAGE_TEMPLATE.1268b5re.js").then((o) => o.WORKSHOP_TEMPLATE),
  });
}
async function aer(e, t) {
  return fi(e, {
    eyebrow: `Markdown \xB7 ${t}`,
    fallbackTitle: t,
    tabTitle: t,
    extractLede: !1,
    feature: "md",
  });
}
async function fi(e, t) {
  let r = ca(e),
    o = r.length > cr;
  if (o) logFeatureSad("artifact_publish", `${t.feature}_structure_scan_skipped`);
  let d = o ? null : ua(r),
    p = d?.token,
    _ = d && p?.type === "heading" ? { token: p, offset: d.offset } : null,
    w = yf(_ ? _.token.text : df(r), t.fallbackTitle),
    E = _f(w, t.fallbackTitle),
    R;
  try {
    R = t.loadTemplate
      ? await t.loadTemplate()
      : (await import("../../01-核心基础设施/共享小工具-未细化/PLAN_TEMPLATE.1d4pc3yc.js")).PLAN_TEMPLATE;
  } catch (U) {
    (logFeatureSad("artifact_publish", `${t.feature}_template_load_failed`),
      n(
        `${t.feature} artifact: template load failed (${l(U)}); falling back to markdown stylesheet`,
        { level: "warn" },
      ));
  }
  if (!R)
    return {
      html: await Qwt(r, { neutralizeRawHtml: t.neutralizeRawHtml }),
      title: E,
      templated: !1,
    };
  let C = _ ? r.slice(0, _.offset) + r.slice(_.offset + _.token.raw.length) : r,
    { summary: M, rest: D } =
      t.extractLede && r.length <= cr ? Sf(C) : { summary: "", rest: C },
    F =
      t.extractDecisions && !o
        ? Ber(D, lr, (U) => (_Tt(U) ? "" : HTn(U)))
        : null,
    I = (U) => di(U, { neutralizeRawHtml: t.neutralizeRawHtml }),
    N = F !== null && (F.decisions.length > 0 || F.deliverables.length > 0);
  if (F !== null && F.decisions.length > 0)
    logFeatureOk("workshop_decisions", { count: F.decisions.length });
  let ae,
    ue = !1;
  if (!N) ae = I(D);
  else {
    let U = F.substitute(I(F.md));
    if (!U.complete)
      (logFeatureSad(
        "workshop_decisions",
        F.decisions.length > 0
          ? "placeholder_leak"
          : "deliverables_placeholder_leak",
      ),
        (ae = I(D)));
    else ((ae = U.html), (ue = !0));
  }
  let V = vf(R, {
    title: w,
    tabTitle: t.tabTitle ?? w,
    eyebrow: t.eyebrow,
    summary: M,
    body: ae,
  });
  if (V !== null && t.extractDecisions) {
    let U = ue && F !== null ? F.decisions : [];
    ((V = wf(V, U)), (V = kf(V, U)));
  }
  if (V === null)
    return (
      logFeatureSad("artifact_publish", `${t.feature}_template_shape_drift`),
      n(
        `${t.feature} artifact: bundled template has no placeholder-section run; falling back to markdown stylesheet`,
        { level: "warn" },
      ),
      {
        html: await Qwt(r, { neutralizeRawHtml: t.neutralizeRawHtml }),
        title: E,
        templated: !1,
      }
    );
  let J =
    ue && F !== null && F.deliverables.length > 0
      ? yTt(F.deliverables.map((U) => U.kind))
      : void 0;
  return {
    html: V,
    title: E,
    templated: !0,
    ...(J !== void 0 && { deliverables: J }),
  };
}
function wf(e, t) {
  let r = e.lastIndexOf(ITn);
  if (r === -1) {
    if (t.length > 0) logFeatureSad("workshop_decisions", "island_slot_missing");
    return e;
  }
  let o = Fer(t);
  if (t.length > 0 && o === null) logFeatureSad("workshop_decisions", "island_belt_stop");
  return e.slice(0, r) + (o ?? "") + e.slice(r + ITn.length);
}
function kf(e, t) {
  let r = e,
    o = r.indexOf(PTn);
  if (o === -1) logFeatureSad("workshop_decisions", "banner_slot_missing");
  else r = r.slice(0, o) + $er(t) + r.slice(o + PTn.length);
  let d = t.find(_Tt),
    p = r.lastIndexOf(OTn);
  if (p === -1) {
    if (d !== void 0) logFeatureSad("workshop_decisions", "status_footer_slot_missing");
  } else
    r =
      r.slice(0, p) + (d === void 0 ? "" : Uer(d, t)) + r.slice(p + OTn.length);
  return r;
}
var la = /<section\b[\s\S]*<\/section>/;
function vf(e, t) {
  let r = e.replace(hf, "");
  if (!la.test(r)) return null;
  let o = {
    TITLE: t.title,
    TAB_TITLE: t.tabTitle,
    EYEBROW: t.eyebrow,
    SUMMARY: t.summary,
  };
  return r
    .replace(/\{\{(TITLE|TAB_TITLE|EYEBROW|SUMMARY)\}\}/g, (d, p) =>
      go(o[p] ?? ""),
    )
    .replace(la, () => `<section>${t.body}</section>`);
}
var xf = 300;
function Sf(e) {
  let t = ca(e),
    r = ua(t),
    o = r?.token;
  if (!r || o?.type !== "paragraph") return { summary: "", rest: t };
  let d = da(o.text.replace(/\s+/g, " ")).trim();
  if (!d || d.length > xf) return { summary: "", rest: t };
  return {
    summary: d,
    rest: t.slice(0, r.offset) + t.slice(r.offset + o.raw.length),
  };
}
function boe(e, t) {
  let r = AZ(tf(e)?.code) ?? Jg(e);
  return {
    transport: isTransportError(e),
    ...(r !== void 0 && { err_code: r }),
    elapsed_ms: Math.round(performance.now() - t),
  };
}
var Af = /^\d{1,12}-[0-9a-f]{1,32}$/;
function iFe(e) {
  return ARTIFACT_SLUG_RE.test(e) ? fromSanitizer_SANITIZER_OUTPUT_ONLY(e) : S("nonconforming");
}
function Iwn(e) {
  return Af.test(e) ? fromSanitizer_SANITIZER_OUTPUT_ONLY(e) : S("nonconforming");
}
function pa(e) {
  return {
    arm() {
      ne().templateLanes[e] = !0;
    },
    take() {
      let t = ne().templateLanes,
        r = t[e];
      return ((t[e] = !1), r);
    },
    giveBack() {
      ne().templateLanes[e] = !0;
    },
  };
}
var pi = pa("prototypeArmed"),
  Ef = pa("controlPlaneArmed");
function ler() {
  (pi.arm(), logFeatureOk("prototype_started", {}));
}
function cer() {
  return pi.take();
}
function ZXe() {
  pi.giveBack();
}
function hi(e, t) {
  ne().templateLanes.boundSlugs.set(e, t);
}
function uer(e) {
  return ne().templateLanes.boundSlugs.get(e);
}
function der(e, t) {
  (hi(e, "prototype"),
    logFeatureOk("prototype_publish", { artifact_slug: iFe(e), is_first_publish: t }));
}
function eYe() {
  Ef.giveBack();
}
var ha = null,
  MAX_ARTIFACT_BYTES = 16777216,
  Rf = "/api/frame/contract/latest";
function isFrameBaseVersionEnabled() {
  return H("tengu_cobalt_plinth_fern", !0);
}
function isFrameStaleGuardAutoReadEnabled() {
  return H("tengu_cobalt_plinth_moss", !0);
}
function isFrameGuardOwnVersionProceedEnabled() {
  return H("tengu_cobalt_plinth_teasel", !0);
}
function artifactPageInlineResultCap() {
  let e = H("tengu_cobalt_plinth_sill", null);
  return typeof e === "number" && Number.isFinite(e) && e >= 0
    ? Math.min(Math.floor(e), ARTIFACT_DB_READ_MAX_RESULT_SIZE_CHARS)
    : ARTIFACT_PAGE_INLINE_RESULT_CAP;
}
function isArtifactConflictLegacy() {
  return H("tengu_slate_quoin", !1);
}
function isArtifactLangEnabled() {
  return H("tengu_cobalt_plinth_laurel", !1);
}
function isFrameListSharedScopeKilled() {
  return H("tengu_cobalt_plinth_osier", !1);
}
function isFrameMultiFileEnabled() {
  return (
    a.CLAUDE_CODE_ARTIFACT_MULTI_FILE ?? H("tengu_cobalt_plinth_bracken", !1)
  );
}
function isFrameCopyFromEnabled() {
  return H("tengu_cobalt_plinth_samphire", !1);
}
function isFramePublicReadEnabled() {
  return H("tengu_cobalt_plinth_sedge", !1);
}
function isFrameSameChannelRawReadEnabled() {
  return H("tengu_cobalt_plinth_tansy", !1);
}
function isFrameLiveSubscribeEnabled() {
  return H("tengu_slate_lantern", !1);
}
function isFrameLiveTokenLeaseEnabled() {
  return H("tengu_slate_lantern_ember", !1);
}
function Tf() {
  return H("tengu_amber_quill_moth", !1);
}
function isFrameDeclaredThumbnailEnabled() {
  return H("tengu_cobalt_plinth_campion", !1) === !0;
}
var Pf = createLazyValue(() =>
    c({
      version: s().regex(Mj),
      capabilities: v(s().regex(Nj)).max(256),
      claude: O()
        .optional()
        .catch(void 0),
      core: v(s().regex(Nj))
        .max(256)
        .optional()
        .catch(void 0),
      features: fe(
        s().regex(Nj),
        fe(s().regex(Nj), $e([fe(s(), se()), k(!0).transform(() => ({}))])),
      )
        .optional()
        .catch(void 0),
    }),
  ),
  Cf = "/api/frame/contract/latest",
  $f = 262144,
  Lf = 65536,
  Ff = "x-contract-missing-caps",
  Mf = 16384;
async function Pi(e, t, r) {
  let o;
  try {
    o = await Nd.get(e, {
      refreshOAuth: !0,
      headers: Fd(),
      maxContentLength: Mf,
      ...r,
      ...(t.timeoutMs !== void 0 && { timeout: t.timeoutMs }),
      ...(t.signal && { signal: t.signal }),
      credentials: t.credentials,
    });
  } catch (p) {
    return { err: l(p), cause: "transport" };
  }
  if (!o.ok)
    return {
      err: `unavailable: ${o.reason}`,
      cause: o.reason === "no-auth" ? "no_auth" : "client_policy",
    };
  if (!o.fromFrame) return { err: `relay HTTP ${o.status}`, cause: "relay" };
  if (o.status < 200 || o.status >= 300)
    return {
      err: `HTTP ${o.status}`,
      cause:
        o.status === 404
          ? "http_404"
          : o.status >= 500
            ? "http_5xx"
            : "http_4xx",
    };
  let d = o.response?.headers?.[Ff];
  return {
    body: o.data,
    ...(typeof d === "string" && { missingCapsHeader: d }),
  };
}
async function resolveContract(e) {
  if (e.version !== void 0 && !Mj.test(e.version))
    return { err: "invalid contract version", cause: "malformed" };
  let t = await Pi(
    e.version !== void 0 ? `/api/frame/contract/${e.version}` : Cf,
    e,
  );
  if ("err" in t) return t;
  let r = Pf().safeParse(t.body);
  if (!r.success)
    return { err: "malformed contract response", cause: "malformed" };
  return r.data;
}
async function fetchContractDefs(e, t, r) {
  if (!Mj.test(e) || !Nj.test(t))
    return {
      err: "invalid contract version or capability name",
      cause: "malformed",
    };
  let o = await Pi(`/api/frame/contract/${e}/${t}.d.ts`, r, {
    responseType: "text",
    maxContentLength: $f,
  });
  if ("err" in o) return o;
  if (typeof o.body !== "string" || o.body.trim() === "")
    return { err: "empty or non-text defs body", cause: "malformed" };
  return { dts: o.body };
}
async function fetchContractPrompt(e, t) {
  if (!Mj.test(e))
    return { err: "invalid contract version", cause: "malformed" };
  let r = await Pi(`/api/frame/contract/${e}/prompt`, t, {
    responseType: "text",
    maxContentLength: Lf,
  });
  if ("err" in r) return r;
  if (typeof r.body !== "string" || r.body.trim() === "")
    return { err: "empty or non-text prompt body", cause: "malformed" };
  let o =
    r.missingCapsHeader === void 0
      ? []
      : r.missingCapsHeader
          .slice(0, 4096)
          .split(",")
          .map((d) => d.trim())
          .filter((d) => Nj.test(d));
  return { promptMd: r.body, missingCaps: o };
}
function derivePublishContextFrom(e) {
  let t = getEnvEntrypoint(),
    r = !e.isNonInteractiveSession || t === "claude-vscode" || isDesktopHostEntrypoint(),
    o =
      e.agentType === "teammate" || isTeammate()
        ? "teammate"
        : e.agentId !== void 0
          ? "subagent"
          : isBgSession()
            ? "bg_session"
            : t === "sdk-ts" || t === "sdk-py"
              ? "sdk"
              : r
                ? "interactive"
                : "print";
  return { hasInteractiveUI: r, publishContext: o };
}
function artifactReadObservationIn(e) {
  return (t) => {
    let r = e();
    return {
      ver: r.artifactReadVersions?.[t],
      observers: r.artifactReadObservers?.[t],
    };
  };
}
function observationStamp(e, t, r) {
  return (
    `${e ?? "main"}
${t ?? ""}` +
    (r === void 0
      ? ""
      : `
${r}`)
  );
}
var ga = { page_data: 0, summary: 1, source: 2 };
function sourcelessObservation(e, t, r, o) {
  let d = ne().readDeliveries.get(xN(e, t));
  return d !== void 0 &&
    o !== void 0 &&
    o !== "" &&
    d.ver === r &&
    d.batch === o &&
    d.kind !== "source"
    ? d.kind
    : void 0;
}
function observedWithoutSource(e, t, r) {
  let o = ne().readDeliveries.get(xN(e, t));
  return o !== void 0 && o.ver === r && !o.sourced;
}
var Ca = "\x00own-mint";
function ownMintStamp(e) {
  return `${e ?? "main"}
${Ca}`;
}
function versionHeldAsOwnMint(e, t) {
  return (
    e.ver === t &&
    e.observers !== void 0 &&
    Object.values(e.observers).includes("")
  );
}
function mainObservedArtifactVersion(e, t) {
  return Oa({
    ver: e.artifactReadVersions?.[t],
    observers: e.artifactReadObservers?.[t],
  });
}
function Oa(e) {
  let { ver: t, observers: r } = e;
  return r === void 0 || Object.hasOwn(r, "main") ? t : void 0;
}
function makeMainObservedVersionReader(e, t) {
  return () => Oa(e(t));
}
function makeSetArtifactReadVersion(e) {
  return (t, r, o) => {
    if (r !== void 0 && !ARTIFACT_VERSION_SAFE_RE.test(r)) return;
    let d =
        o?.indexOf(`
`) ?? -1,
      p = o === void 0 ? void 0 : o.slice(0, d),
      _ = o === void 0 ? "" : o.slice(d + 1),
      w = _.indexOf(`
`),
      E = w < 0 ? _ : _.slice(0, w),
      R = _.slice(w + 1),
      C = w < 0 ? void 0 : R === "summary" || R === "page_data" ? R : void 0,
      M = E === Ca,
      D = M ? "" : E;
    if (p !== void 0) {
      let F = ne().readDeliveries,
        I = xN(p, t),
        N = F.get(I),
        ae = C ?? "source",
        ue = ae === "source" || (N !== void 0 && N.ver === r && N.sourced);
      if (r === void 0) F.delete(I);
      else if (
        N === void 0 ||
        N.ver !== r ||
        N.batch !== D ||
        ga[ae] > ga[N.kind]
      )
        F.set(I, { ver: r, batch: D, kind: ae, sourced: ue });
    }
    if (p !== void 0 && !M) {
      let F = ne().refusedPublishBodies.get(xN(p, t));
      if (
        F !== void 0 &&
        F.observedFrom === void 0 &&
        (D === "" || D !== F.batch)
      )
        F.observedFrom = D;
      if (
        F?.sourceless !== void 0 &&
        !C &&
        r !== void 0 &&
        (F.live === void 0 || r === F.live || (compareArtifactVersions(r, F.live) ?? -1) > 0)
      )
        (delete F.sourceless, (F.live ??= r));
    }
    e((F) => {
      let I = F.artifactReadVersions?.[t],
        N = F.artifactReadObservers?.[t],
        ae =
          r === void 0 || p === void 0
            ? void 0
            : r === I
              ? N === void 0 || Object.hasOwn(N, p)
                ? N
                : { ...N, [p]: D }
              : { [p]: D };
      if (I === r && N === ae) return F;
      let { [t]: ue, ...V } = F.artifactReadVersions ?? {},
        { [t]: J, ...U } = F.artifactReadObservers ?? {};
      return {
        ...F,
        artifactReadVersions: r === void 0 ? V : { ...V, [t]: r },
        artifactReadObservers: ae === void 0 ? U : { ...U, [t]: ae },
      };
    });
  };
}
function artifactVersionObserved(e, t, r, o) {
  let d = e?.[t];
  if (d === void 0) return { observed: !0, siblingInFlight: !1 };
  let p = r ?? "main",
    _ = Object.hasOwn(d, p) ? d[p] : void 0,
    w = _ !== void 0 && _ !== "" && _ === o;
  return { observed: _ !== void 0 && !w, siblingInFlight: w };
}
function makeSetArtifactContractTarget(e) {
  return (t, r, o) =>
    e((d) => {
      let p = wD(r),
        _ = d.artifactRefs ?? [],
        w = _.find((R) => R.slug === t),
        E = p ?? w?.pin;
      if (o?.cachePinOnly) {
        if (w !== void 0) {
          if (w.pin === E) return d;
          return {
            ...d,
            artifactRefs: _.map((R) =>
              R.slug === t ? { slug: t, ...(E !== void 0 && { pin: E }) } : R,
            ),
          };
        }
        if (E === void 0) return d;
        if (_.length === 0) return d;
        return { ...d, artifactRefs: [..._, { slug: t, pin: E }] };
      }
      if (_[0]?.slug === t && _[0].pin === E) return d;
      return {
        ...d,
        artifactRefs: [
          { slug: t, ...(E !== void 0 && { pin: E }) },
          ..._.filter((R) => R.slug !== t),
        ],
      };
    });
}
function makeGetArtifactContractTarget(e) {
  return () => {
    let t = e().artifactRefs ?? [],
      r = {};
    for (let o of t) if (o.pin !== void 0) r[o.slug] = o.pin;
    return { targetSlug: t[0]?.slug, pins: r };
  };
}
var Nf =
    "<style>:root{color-scheme:light}body{margin:0;padding:0;font:14px -apple-system,BlinkMacSystemFont,sans-serif;background:#faf9f5;color:#141413}img{max-width:100%}[hidden]:not([hidden=until-found]){display:none!important}</style>",
  If = createLazyValue(() =>
    c({
      contract: s().max(64),
      capabilities: fe(s().max(64), se()).nullish(),
      type: se().optional(),
    }),
  ),
  Df = createLazyValue(() =>
    it({
      slug: s().regex(ARTIFACT_SLUG_RE),
      target: s().max(64).nullish(),
      current: s().max(64),
      latest: se().optional(),
      blocked: se().optional(),
    }),
  ),
  Bf = createLazyValue(() => s().min(1).max(64)),
  jf = createLazyValue(() =>
    it({
      to: s()
        .min(1)
        .max(64)
        .optional()
        .catch(void 0),
      reason: s().max(64).catch(""),
      conflict_count: T()
        .int()
        .min(0)
        .max(1e6)
        .optional()
        .catch(void 0),
      paths: v(s().max(MAX_ECHO_MANIFEST_PATH))
        .max(MAX_ECHO_MANIFEST_ENTRIES)
        .optional()
        .catch(void 0),
    }),
  ),
  MAX_ECHO_MANIFEST_PATH = 1024,
  MAX_ECHO_MANIFEST_ENTRIES = 512,
  $a = createLazyValue(() =>
    it({
      manifest: fe(
        s().max(MAX_ECHO_MANIFEST_PATH),
        it({
          src: it({}).nullish(),
          doc: s()
            .max(64)
            .nullish()
            .catch(void 0),
        }),
      ).refine((e) => Object.keys(e).length <= MAX_ECHO_MANIFEST_ENTRIES),
    }),
  );
function splitManifestPaths(e) {
  let t = $a().safeParse(e);
  if (!t.success) return;
  let r = [],
    o = [];
  for (let [d, p] of Object.entries(t.data.manifest))
    (p.src != null ? o : r).push(d);
  return { own: r.sort(), type: o.sort() };
}
function typeLockFromWire(e) {
  if (e == null) return;
  let t = Df().safeParse(e);
  if (!t.success) return;
  let r = Bf().safeParse(t.data.latest),
    o = t.data.blocked,
    d = jf().safeParse(o);
  return {
    slug: t.data.slug,
    target: t.data.target ?? null,
    current: t.data.current,
    ...(r.success && { latest: r.data }),
    ...(d.success
      ? {
          blocked: {
            ...(d.data.to !== void 0 && { to: d.data.to }),
            reason: d.data.reason,
            ...(d.data.conflict_count !== void 0 && {
              conflictCount: d.data.conflict_count,
            }),
            ...(d.data.paths !== void 0 && { paths: d.data.paths }),
          },
        }
      : o != null && { blocked: { reason: "" } }),
  };
}
function gi(e) {
  if (e.status !== void 0) return { readback_status: e.status };
  if (e.relayStatus !== void 0) return { readback_relay_status: e.relayStatus };
  return e.unsent ? { readback_unsent: !0 } : e.request;
}
function ma(e) {
  return (
    e.request?.transport === !0 ||
    (e.status !== void 0 && e.status >= 500) ||
    (e.relayStatus !== void 0 && e.relayStatus >= 500)
  );
}
var ba = 500;
function La(e) {
  return {
    ...(e.slug && { slug: e.slug }),
    title: e.title,
    favicon: e.favicon,
    ...(e.label && { label: e.label }),
    ...(e.note && { note: e.note }),
    ...(e.description && { description: e.description }),
    ...(e.publishContext && { publish_context: e.publishContext }),
    ...!1,
    ...(Tf() && e.template && { template: e.template }),
    ...(e.autoEditAttribution && {
      auto_edit_attribution: {
        thread_id: e.autoEditAttribution.threadId,
        comment_id: e.autoEditAttribution.commentId,
      },
    }),
    ...(isFrameDeclaredThumbnailEnabled() && e.thumbnail && { thumbnail: e.thumbnail.toString("base64") }),
    ...(isFrameDeclaredThumbnailEnabled() &&
      e.thumbnailDark && {
        thumbnail_dark: e.thumbnailDark.toString("base64"),
      }),
  };
}
async function Hf(e) {
  let {
      capabilities: t,
      echoPin: r,
      explicitPin: o,
      upgrade: d,
      pageBytes: p,
      credentials: _,
    } = e,
    w = (C, M) => {
      let D = So(C, M);
      if (D.length === 0) return null;
      logFeatureBad("artifact_publish", "unknown_capability", {
        page_bytes: p,
        unknown_count: D.length,
      });
      let F = rt(D, 8, jg).join(", "),
        I = rt(M.capabilities, 8, (N) => N).join(", ");
      return `unknown ${pluralize(D.length, "capability", "capabilities")}: ${F} \u2014 contract ${M.version} supports: ${I || "(none)"}. Fix or drop the declaration; the control plane would reject it anyway.`;
    },
    E = (C, M, D) => {
      let F = Ao(C, M);
      if ("errMsg" in F)
        return (
          logFeatureBad("artifact_publish", "dual_spelling_ambiguous", { page_bytes: p }),
          F
        );
      let I = w(F.caps, M);
      if (I !== null) return { errMsg: I };
      return { fields: { contract: D, capabilities: F.caps } };
    },
    R = async (C) => {
      let M = await resolveContract({ credentials: _ });
      if ("err" in M)
        return (
          logFeatureBad("artifact_publish", "contract_fetch_failed", {
            page_bytes: p,
            cause: fromEnum(M.cause),
          }),
          {
            errMsg: `couldn't fetch the capability contract (${M.err}) \u2014 ${C}`,
          }
        );
      return M;
    };
  if (o !== null) {
    if (t !== void 0) {
      let C = await resolveContract({ version: o, credentials: _ });
      if (!("err" in C)) return E(t, C, o);
    }
    return {
      fields: { contract: o, ...(t !== void 0 && { capabilities: Jr(t) }) },
    };
  }
  if (t !== void 0 && r !== null) {
    let C = await resolveContract({ version: r, credentials: _ });
    if ("err" in C) return { fields: { contract: r, capabilities: Jr(t) } };
    return E(t, C, r);
  }
  if (t !== void 0) {
    let C =
        e.latestFetchRemedy ??
        (Object.keys(t).length === 0
          ? "clearing a stored declaration also needs the current " +
            "contract. Retry when the contract service is reachable \u2014 " +
            "until the clear lands, the stored grants stay live."
          : "a publish that declares capabilities needs the current contract from the server. Retry; or publish without the capabilities field and declare them on a later redeploy (a stored declaration carries forward unchanged)."),
      M = await R(C);
    if ("errMsg" in M) return M;
    return E(t, M, M.version);
  }
  if (r !== null) return { fields: { contract: r } };
  if (d) {
    let C = await R(
      "an upgrade stamps the current contract, which requires the contract service. Retry when it is reachable.",
    );
    if ("errMsg" in C) return C;
    return { fields: { contract: C.version } };
  }
  return { fields: {} };
}
var Ci = 8192,
  FRAME_RUNTIME_MAX_SPAN = 300000,
  ya = 'window.__FRAME_PREAMBLE={"v":1';
function hasFramePreambleLead(e) {
  return e.startsWith(ya) && ",}".includes(e[ya.length] ?? " ");
}
var Uf = new RegExp(
    `^<base[\\t\\n\\f\\r ]+href="\\/_f\\/[^">]*"(?:${DATA_ID_ATTRIBUTE_PATTERN})?[\\t\\n\\f\\r ]*\\/?>`,
  ),
  zf = new RegExp(
    `<base\\s+href="\\/_f\\/[^">]*"(?:${DATA_ID_ATTRIBUTE_PATTERN})?\\s*\\/?>\\n?`,
    "gi",
  );
function _a(e) {
  let t = trimAsciiWhitespace(e),
    r = t.match(Uf);
  if (r) t = trimAsciiWhitespace(t.slice(r[0].length));
  else if (!t.length) return !1;
  let o = r !== null;
  while (t.length) {
    if (!/^<script(?=[\t\n\f\r />])/.test(t)) return !1;
    let d = findTagEnd(t, 7);
    if (d < 0) return !1;
    let p = t.slice(d);
    if (!o && (matchScriptOpenTag(t, 0) !== d || !hasFramePreambleLead(p))) return !1;
    o = !0;
    let _ = findScriptCloseTagEnd(p);
    if (_ < 0) return !1;
    t = trimAsciiWhitespace(p.slice(_));
  }
  return !0;
}
function Fa(e) {
  let t = trimAsciiWhitespace(e);
  if (t.startsWith("<head>") && t.endsWith("</head>"))
    return _a(t.slice(6, -7));
  return _a(t);
}
function exciseFrameAssetServeBlock(e, t = () => !0) {
  let r = 4,
    o = e.indexOf(FRAME_RUNTIME_BEGIN);
  while (o >= 0 && o < Ci && r > 0) {
    let d = o + FRAME_RUNTIME_BEGIN.length,
      p = e.subarray(0, o + FRAME_RUNTIME_MAX_SPAN + FRAME_RUNTIME_END.length).indexOf(FRAME_RUNTIME_END, d);
    if (p >= 0 && Fa(e.toString("utf8", d, p))) {
      let _ = Buffer.concat([e.subarray(0, o), e.subarray(p + FRAME_RUNTIME_END.length)]);
      if (t(_)) return _;
      r--;
    }
    o = e.indexOf(FRAME_RUNTIME_BEGIN, d);
  }
  return;
}
var Vf = /^<body(?=[\t\n\f\r />])/i,
  wa = /^<base(?=[\t\n\f\r />])/i,
  Wf =
    /^<(script|style|title|textarea|xmp|iframe|noembed|noframes|noscript|plaintext)(?=[\t\n\f\r />])/i;
function _i(e, t, r) {
  let o = /[\t\n\f\r />]/g,
    d = r;
  for (;;) {
    if (((d = e.indexOf("<", d)), d < 0)) return -1;
    if (e.startsWith("<!--", d)) {
      let _ = -1;
      if (e.startsWith(">", d + 4)) _ = d + 5;
      else if (e.startsWith("->", d + 4)) _ = d + 6;
      else
        for (let w = e.indexOf("--", d + 4); w >= 0;) {
          if (e.startsWith(">", w + 2)) _ = w + 3;
          else if (e.startsWith("!>", w + 2)) _ = w + 4;
          else {
            w = e.indexOf("--", w + 1);
            continue;
          }
          break;
        }
      if (_ < 0) return -1;
      d = _;
      continue;
    }
    let p = Wf.exec(e.slice(d, d + 11));
    if (p) {
      let _ = p[1].toLowerCase(),
        w = _ === "plaintext" ? -1 : findTagEnd(e, d + 1 + _.length),
        E = new RegExp(`</${_}(?=[\\t\\n\\f\\r />])`, "gi");
      E.lastIndex = Math.max(w, 0);
      let R = w < 0 ? null : E.exec(e),
        C = R === null ? -1 : findTagEnd(e, R.index + R[0].length);
      if (C < 0 || (_ === "script" && hasCommentAndScriptTag(e.slice(w, R.index)))) return -1;
      d = C;
    } else if (t.test(e.slice(d, d + 8))) return d;
    else if (/^<\/?[a-zA-Z]/.test(e.slice(d, d + 3))) {
      o.lastIndex = d + 2;
      let _ = o.exec(e);
      if (((d = _ === null ? -1 : findTagEnd(e, _.index)), d < 0)) return -1;
    } else if (/^<(?:[?!]|\/(?!>))/.test(e.slice(d, d + 3))) {
      if (((d = e.indexOf(">", d + 2)), d < 0)) return -1;
      d++;
    } else d++;
  }
}
function stripStaleInjections(e) {
  return Da(e, Ba, Na(Gf, "blocks"));
}
var Gf = 64,
  Yf = 96,
  Ma = 64;
function Na(e, t) {
  return { spent: 0, cap: e, exhausted: t };
}
function Ia(e) {
  if (e.spent === e.cap) throw new StripUnsettledError(e.exhausted, e.spent);
  e.spent++;
}
class StripUnsettledError extends ArtifactInputError {
  passes;
  constructor(e = "blocks", t) {
    super(qf[e], Kf[e]);
    this.passes = t;
  }
}
var Kf = {
    blocks: "strip_unsettled",
    author: "strip_unsettled",
    levels: "nested_repair_depth_cap",
  },
  qf = {
    blocks:
      "This page carries `<!-- frame-runtime -->` serve-marker blocks or `data-frame-runtime` attributes nested so that removing one keeps exposing another \u2014 nothing a genuine page or a fetched artifact contains. Delete those comment blocks and attributes from the source and publish again.",
    author:
      'This page carries runtime-marker comment blocks (`<!-- frame-runtime -->\u2026<!-- /frame-runtime -->`, `<!-- chart-runtime -->\u2026<!-- /chart-runtime -->`, `<!--claude-mermaid-runtime-begin\u2026`, `<!--claude-hljs-runtime-begin\u2026`), `data-frame-runtime` attributes, `<base href="/_f/\u2026">` tags, or repeated artifact skeletons (`<!doctype html><html><head>\u2026` wrapped around the page again and again) nested so that removing one keeps exposing another \u2014 nothing a genuine page or a fetched artifact contains. Delete every such comment block, attribute, tag, and repeated outer skeleton from the source, keep the innermost document, and publish again.',
    levels: `This page is a published artifact page wrapped inside more than ${Ma} nested copies of the artifact skeleton (\`<!doctype html><html><head><!-- frame-runtime -->\u2026\` repeated) \u2014 nothing a genuine page contains. Publish the innermost document on its own: delete the repeated outer skeletons from the source and publish again.`,
  };
function Da(e, t, r) {
  for (;;) {
    Ia(r);
    let o = t(e);
    if (o === e) return o;
    e = o;
  }
}
function Ba(e) {
  let t = [],
    r = 0,
    o = _i(e, Vf, 0),
    d = o < 0 ? 1 / 0 : o,
    p = e.indexOf(FRAME_RUNTIME_BEGIN),
    _ = -1;
  while (p >= 0 && p < d && p - r < Ci) {
    let w = p + FRAME_RUNTIME_BEGIN.length;
    if (_ < w) {
      if (((_ = e.indexOf(FRAME_RUNTIME_END, w)), _ < 0)) break;
    }
    let E = e.indexOf(FRAME_RUNTIME_BEGIN, w);
    if ((E < 0 || E > _) && _ - p < FRAME_RUNTIME_MAX_SPAN && Fa(e.slice(w, _))) {
      let R = _ + FRAME_RUNTIME_END.length;
      if (
        e[R] ===
        `
`
      )
        R++;
      (t.push([p, R]), (r += R - p));
    }
    p = E;
  }
  return (
    (e = Xf(removeRanges(e, t))),
    (e = Jf(e)),
    e.replace(zf, "").replace(/\sdata-frame-runtime="[^">]*"/gi, "")
  );
}
function strippedAuthorBody(e) {
  return ja(e).body;
}
function ja(e) {
  let t = (w) => fs(Ba(w)),
    r = Na(Yf, "author"),
    o = (w) => Da(w, t, r),
    d = o(e),
    p = tl(d);
  if (p === null) return { body: d, unwrapped: !1, passes: r.spent };
  let _ = wp(p.body, p.lang, o, r);
  return {
    body: _.body,
    passes: r.spent,
    lang: _.lang,
    unwrapped: !0,
    ...(_.outcome && { repair: _.outcome }),
    ...(p.hoistedCommentsDropped && { hoistedCommentsDropped: !0 }),
  };
}
function servedPageLooksNested(e) {
  let t;
  try {
    t = stripStaleInjections(e);
  } catch (o) {
    if (o instanceof StripUnsettledError) return !1;
    throw o;
  }
  let r = tl(t);
  return r !== null && nl(r.body);
}
var Ua = /^[A-Za-z]{2,3}(-[A-Za-z0-9]{1,8})*$/;
function isValidArtifactLang(e) {
  return e.length <= 35 && Ua.test(e);
}
async function za(e) {
  if (!e.includes(In) || Buffer.byteLength(e, "utf8") > MAX_ARTIFACT_BYTES || _J(e)) return e;
  return As(e);
}
async function prepareArtifactBody(e, t = {}) {
  let {
      injectDiagramRuntime: r,
      injectHighlightRuntime: o,
      composedPrReview: d,
      previewOnly: p,
      expectRoundTrippedPage: _,
      docBlockIds: w,
    } = t,
    E = ja(e),
    { body: R, lang: C } = E,
    M;
  switch (E.repair) {
    case "repaired":
    case "partial":
      M = E.repair;
      break;
    case "miss":
      logFeatureSad("artifact_publish", "nested_repair_miss");
      break;
    case void 0:
      break;
  }
  if (!E.unwrapped && _ === !0) logFeatureSad("artifact_publish", "round_trip_unwrap_miss");
  if (hasRuntimeSentinel(R)) logFeatureSad("artifact_publish", "runtime_sentinel_residual");
  let D = 0;
  if (w !== !1) {
    let re = await za(R);
    if (re !== R)
      ((D = Math.max(
        0,
        Buffer.byteLength(re, "utf8") - Buffer.byteLength(R, "utf8"),
      )),
        (R = re));
  }
  let F = null,
    I = ro(R, await X1e(), {
      crUrlRe: F,
      allowMermaidFence: d === !0 || p === !0,
      allowStampBinding: d === !0 || p === !0,
    });
  if (I.applies && !I.ok) {
    if (p !== !0) logFeatureBad("artifact_publish", "pr_review_template_mismatch");
    throw new ArtifactInputError(
      `This page carries the artifact-pr-review machinery but failed publish-time validation: ${I.reason}. Carry the template blocks byte-for-byte and keep the rest of the page within the skill's contract \u2014 no script fragments or event handlers, no elements or attributes that fetch or navigate, no CSS network functions, and no src/href other than the PR's canonical GitHub URL \u2014 then retry.`,
      "pr_review_template_mismatch",
    );
  }
  let N = Nn(R),
    ae = N.chart && ls(),
    ue = r === !0 && N.mermaid,
    V = o === !0 && N.highlight,
    J = "";
  if (ae) {
    let re = await $r();
    if (re !== null) J += re;
  }
  let U = !1;
  if (ue) {
    let re = Wwt();
    if (re !== null) ((J += re), (U = !0));
  }
  let te = !1;
  if (V) {
    let re = await Lr();
    if (re !== null) ((J += re), (te = !0));
  }
  if (J !== "") {
    let { runtimeBlockInsertionIndex: re } =
        await import("./runtimeBlockInsertionIndex.wenjnk3h.js"),
      ce = re(R);
    R = R.slice(0, ce) + J + R.slice(ce);
  }
  return {
    body: R,
    mermaidInjected: U,
    hljsInjected: te,
    roundTripLang: C,
    unnested: M,
    blockIdBytes: D,
    ...(E.hoistedCommentsDropped && { hoistedCommentsDropped: !0 }),
  };
}
function Xf(e) {
  return Va(e, ys);
}
function Jf(e) {
  return Va(e, gs);
}
function Va(e, t) {
  let r = [],
    o = e.indexOf(t.beginPrefix);
  while (o >= 0) {
    let d = o + t.beginPrefix.length,
      p = e.indexOf(t.beginPrefix, d),
      _ = d,
      w = d + t.lenDigitsMax;
    while (_ < w) {
      let E = e.charCodeAt(_);
      if (E < 48 || E > 57) break;
      _++;
    }
    if (_ > d && e.startsWith("-->", _)) {
      let E = Number(e.slice(d, _)),
        R = _ + 3,
        C = 0,
        M = R + E;
      while (C <= t.openTags && !e.startsWith(t.end, M)) (C++, (M += DATA_ID_ATTRIBUTE_LENGTH));
      if (
        E < t.maxSpan &&
        C <= t.openTags &&
        (p < 0 || p > M) &&
        t.validate(e.slice(R, M), C)
      ) {
        let D = M + t.end.length;
        if (
          e[D] ===
          `
`
        )
          D++;
        let F =
          o > 0 &&
          e[o - 1] ===
            `
`
            ? o - 1
            : o;
        r.push([F, D]);
      }
    }
    o = p;
  }
  return removeRanges(e, r);
}
var Wa = 2097152;
async function readFrameDecl(e, t, r) {
  let o = performance.now();
  try {
    let d = await Nd.get(`/api/frame/read/${encodeURIComponent(e)}`, {
      refreshOAuth: !0,
      headers: Fd(),
      timeout: 15000,
      maxContentLength: Wa,
      ...(t && { signal: t }),
      credentials: r,
    });
    if (!d.ok) return { err: `read-back unavailable: ${d.reason}`, unsent: !0 };
    if (!d.fromFrame)
      return { err: `read-back relay HTTP ${d.status}`, relayStatus: d.status };
    if (d.status === 404) return null;
    if (d.status < 200 || d.status >= 300)
      return (
        n(`[artifact] read-back ${d.status}: ${errBody(d.data)}`),
        { err: `read-back HTTP ${d.status}`, status: d.status }
      );
    let p = If().safeParse(d.data);
    if (!p.success)
      return (
        n(`[artifact] malformed read-back body: ${p.error.message}`),
        { err: "malformed read-back body", status: d.status }
      );
    let { contract: _, capabilities: w } = p.data,
      E = typeLockFromWire(p.data.type);
    return {
      contract: _,
      ...(w != null && { capabilities: w }),
      ...(E !== void 0 && { typeLock: E }),
    };
  } catch (d) {
    return {
      err: d instanceof Error ? d.message : String(d),
      request: boe(d, o),
    };
  }
}
async function Ga(e, t, r, o) {
  let d = await e;
  if (d.err !== null || t === void 0) return d;
  let p = await readFrameDecl(t, o, r);
  if (p === null || "err" in p) {
    if (p !== null) n(`[artifact] read-back skipped: ${p.err}`);
    return d;
  }
  let { typeLock: _, ...w } = p,
    E = _ !== void 0 ? { ...d, typeLock: _ } : d;
  if (
    d.stored?.capabilities !== void 0 ||
    (!yJ(w.capabilities ?? void 0) && wD(w.contract) === null)
  )
    return E;
  return {
    ...E,
    stored: { ...w, ...(yJ(w.capabilities ?? void 0) && { carried: !0 }) },
  };
}
function Zf(e) {
  let t = /[\t\n\f\r ]/,
    r = _i(e, wa, 0);
  while (r >= 0) {
    let o = findTagEnd(e, r + 5);
    if (o < 0) return;
    let d = r + 5;
    while (d < o - 1) {
      let p = e[d];
      if (t.test(p) || p === "/") {
        d++;
        continue;
      }
      let _ = d++;
      while (d < o - 1 && !t.test(e[d]) && !"/=".includes(e[d])) d++;
      let w = e.slice(_, d).toLowerCase();
      while (d < o - 1 && t.test(e[d])) d++;
      if (e[d] !== "=") continue;
      d++;
      while (d < o - 1 && t.test(e[d])) d++;
      let E = d,
        R,
        C = e[d];
      if (C === '"' || C === "'") {
        let M = e.indexOf(C, d + 1);
        ((d = M < 0 ? o : M + 1), (R = e.slice(E + 1, d - 1)));
      } else {
        while (d < o - 1 && !t.test(e[d])) d++;
        R = e.slice(E, d);
      }
      if (w === "href") {
        if (!R.startsWith("/_f/")) return R;
        break;
      }
    }
    r = _i(e, wa, o);
  }
  return;
}
var Qf = /^[\f ]*(?:[a-zA-Z][a-zA-Z0-9+.-]*:|[/\\])/;
function ep(e) {
  let t = Zf(e);
  if (t === void 0) return !1;
  let r = t.replace(/[\t\n\r]/g, "");
  return r.includes("&") || Qf.test(r);
}
var tp =
    "This page's <base href> points outside the artifact \u2014 at another site, or at the site root. Artifact hosting serves only the artifact's own folder and refuses a base on another site, so relative references won't resolve through it \u2014 remove the tag and publish those files alongside the page (`files`), referenced by relative path.",
  np =
    "This page's <base href> points outside the artifact \u2014 at another site, or at the site root. Artifact hosting serves only the artifact's own folder and refuses a base on another site, so relative references won't resolve through it \u2014 remove the tag and make those references work without it (inline what the page needs).";
async function rp(e, t) {
  let r = await e;
  return r.err === null && t.length > 0
    ? { ...r, warnings: [...(r.warnings ?? []), ...t] }
    : r;
}
var mr = 8,
  ip = 0.7,
  sp = Math.floor((ARTIFACT_MAX_RESULT_SIZE_CHARS * ip) / (mr * 2));
function wi(e) {
  let t = e !== null && typeof e === "object" ? e.warnings : void 0;
  if (!Array.isArray(t)) return [];
  let r = [];
  for (let o of t) {
    if (r.length >= mr) break;
    if (typeof o !== "string") continue;
    let d = Xa(o, sp);
    if (d !== void 0) r.push(op(d) ?? d);
  }
  return r;
}
function op(e) {
  if (/^live_over_budget:(.{1,1024})$/.exec(e)) return e;
  if (/^render_unavailable:(.{1,1024})$/.exec(e)) return e;
  if (e === "render_over_budget") return e;
  return;
}
function Ya(e) {
  let t = e !== null && typeof e === "object" && "docs" in e ? nr(e) : void 0;
  if (t !== void 0)
    return t
      .map((o) => ({ path: o.path, ...(o.doc !== void 0 && { doc: o.doc }) }))
      .sort((o, d) => (o.path < d.path ? -1 : o.path > d.path ? 1 : 0));
  let r = $a().safeParse(e);
  if (!r.success) return;
  return Object.entries(r.data.manifest)
    .flatMap(([o, d]) =>
      bn.test(o) && d.src == null && typeof d.doc === "string" && d.doc !== ""
        ? [{ path: o, doc: d.doc }]
        : [],
    )
    .sort((o, d) => (o.path < d.path ? -1 : o.path > d.path ? 1 : 0));
}
function Ka(e) {
  return e.flatMap((t) => []);
}
function ap() {
  return [];
}
function lp(e) {
  return e.flatMap((t) => []);
}
function cp(e, t) {
  return [];
}
function up(e) {
  return e.flatMap((t) => []);
}
function qa(e, t) {
  return (e ?? []).filter((r) => !t.has(r)).flatMap((r) => []);
}
function Xa(e, t) {
  let r = jg(e, { max: t }).replace(INVISIBLE_BLANKS, " ").trim();
  return r !== "" && r !== "?" ? r : void 0;
}
var dp = 32,
  fp = 16,
  pp = 200,
  hp = /^[\w./-]{1,64}$/,
  gp = createLazyValue(() =>
    c({
      pins: v(se())
        .optional()
        .catch(void 0),
      warnings: v(se())
        .optional()
        .catch(void 0),
    }),
  ),
  mp = createLazyValue(() =>
    c({
      uuid: s().regex(ARTIFACT_SLUG_RE),
      path: s().regex(hp),
      module: O()
        .optional()
        .catch(void 0),
      files: T()
        .int()
        .min(0)
        .max(1e6)
        .optional()
        .catch(void 0),
    }),
  ),
  bp = createLazyValue(() =>
    c({
      src: s()
        .optional()
        .catch(void 0),
      reason: s().regex(Pt),
      count: T()
        .int()
        .min(1)
        .max(1e5)
        .optional()
        .catch(void 0),
    }),
  );
function ki(e) {
  if (
    e === null ||
    typeof e !== "object" ||
    !("embeds" in e) ||
    e.embeds === null ||
    e.embeds === void 0
  )
    return;
  let t = gp().safeParse(e.embeds);
  if (!t.success) return { pins: [], warnings: [] };
  let r = [];
  for (let d of t.data.pins ?? []) {
    if (r.length >= dp) break;
    let p = mp().safeParse(d);
    if (!p.success) continue;
    let { uuid: _, path: w, module: E, files: R } = p.data;
    r.push({
      uuid: _,
      path: w,
      module: E === !0,
      ...(R !== void 0 && { files: R }),
    });
  }
  let o = [];
  for (let d of t.data.warnings ?? []) {
    if (o.length >= fp) break;
    let p = bp().safeParse(d);
    if (!p.success) continue;
    let { reason: _, count: w } = p.data,
      E = p.data.src === void 0 ? void 0 : Xa(p.data.src, pp);
    o.push({
      reason: _,
      ...(E !== void 0 && { src: E }),
      ...(w !== void 0 && { count: w }),
    });
  }
  return { pins: r, warnings: o };
}
function Ja() {
  let e = getEnvEntrypoint();
  return e ? { entrypoint: e.toLowerCase().slice(0, 64) } : {};
}
function Za() {
  let e = ni();
  return e ? { session_id: e } : {};
}
async function br() {
  let e = ne(),
    t =
      e.workshopBlessedHashes ??
      (async () => {
        let [{ extractInlineScriptHashes: r }, o] = await Promise.all([
            import("./extractInlineScriptHashes.segwcp5c.js"),
            import("../../01-核心基础设施/共享小工具-未细化/WORKSHOP_PAGE_TEMPLATE.1268b5re.js"),
          ]),
          d = r(o.WORKSHOP_PAGE_TEMPLATE);
        for (let _ of r(o.WORKSHOP_TEMPLATE)) d.add(_);
        let p = !0;
        for (let _ of [await $r(), Wwt(), await Lr()])
          if (_ !== null) for (let w of r(_)) d.add(w);
          else p = !1;
        return { hashes: d, complete: p };
      })();
  e.workshopBlessedHashes = t;
  try {
    let { hashes: r, complete: o } = await t;
    if (!o)
      ((e.workshopBlessedHashes = void 0),
        n(
          "workshopBlessedScriptHashes: a runtime leg degraded \u2014 returning an incomplete (stricter) allowlist for this call only",
        ));
    return r;
  } catch (r) {
    throw ((e.workshopBlessedHashes = void 0), r);
  }
}
var Ot = "<!doctype html>",
  Oi = "<html",
  pr = Ot + Oi,
  yp = new RegExp(`^${Ot}`, "i"),
  Qa =
    '<meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1">',
  el = `</head><body>
`,
  dr = `
</body></html>`,
  SERVED_SPLICE_PREFIX_RE = new RegExp(
    `^(?:${Ot}|${Ot.replace("doctype", "DOCTYPE")})?${Oi}(?: lang="(?=[^"]{1,35}")${Ua.source.slice(1, -1)}")?(?:${DATA_ID_ATTRIBUTE_PATTERN})?><head(?:${DATA_ID_ATTRIBUTE_PATTERN})?>$`,
  );
function composeArtifactPage(e, t) {
  let r = t !== void 0 && isValidArtifactLang(t) ? ` lang="${t}"` : "";
  return `${pr}${r}><head>${Qa}${Nf}${el}${e}${dr}`;
}
function mi(e, t, r) {
  return findTagEnd(e, t) === r;
}
function startsWithSkeletonOpen(e) {
  return yp.test(e) && e.startsWith(Oi, Ot.length);
}
function tl(e) {
  if (!startsWithSkeletonOpen(e)) return null;
  if (!e.startsWith(Ot)) e = Ot + e.slice(Ot.length);
  let t = e.match(
    /^<!doctype html><html(?=[\t\n\f\r >])([^>]*)><head(?=[\t\n\f\r >])[^>]*>/,
  );
  if (!t) return null;
  let r = pr.length + t[1].length + 1;
  if (!mi(e, pr.length, r) || !mi(e, r + 5, t[0].length)) return null;
  let o = e.indexOf("</head><body", t[0].length);
  if (o === -1) return null;
  let p = e
    .slice(t[0].length, o)
    .match(
      /^<meta[\t\n\f\r ]+charset="?utf8"?(?=[\t\n\f\r >"])[^>]*><meta[\t\n\f\r ]+name="?viewport"?(?=[\t\n\f\r >"])[^>]*><style(?:[\t\n\f\r ][^>]*)?>([\s\S]*)<\/style>$/,
    );
  if (!p || /<\/style/i.test(p[1])) return null;
  {
    let F = t[0].length;
    for (let I of ["<meta", "<meta", "<style"]) {
      let N = e.indexOf(">", F + I.length) + 1;
      if (!e.startsWith(I, F) || !mi(e, F + I.length, N)) return null;
      F = N;
    }
  }
  let _ = o + 12,
    w = findTagEnd(e, _);
  if (w < 0) return null;
  let E = e.slice(_, w - 1);
  if (!/^(?:[\t\n\f\r ][^>]*)?$/.test(E)) return null;
  let R = w;
  if (
    e[R] ===
    `
`
  )
    R++;
  let C = _p(e, R);
  if (!C) return null;
  let M = C.bodyEnd;
  if (
    M > R &&
    e[M - 1] ===
      `
`
  )
    M--;
  let D = t[1].match(/[\t\n\f\r ]lang="([^"]*)"/)?.[1];
  return {
    body: e.slice(R, M),
    ...(D !== void 0 && isValidArtifactLang(D) && { lang: D }),
    ...(C.commentsDropped && { hoistedCommentsDropped: !0 }),
  };
}
function _p(e, t) {
  let r = !1,
    o = e.length,
    d = !1;
  for (;;) {
    while (
      o > t &&
      `	
\f\r `.includes(e[o - 1])
    )
      o--;
    if (e.endsWith("-->", o)) {
      let p = e.lastIndexOf("<!--", o - 7);
      if (p < t || !MXe(e.slice(p, o))) return null;
      ((r = !0), (o = p));
    } else if (!d && o - t >= 7 && e.endsWith("</html>", o))
      ((d = !0), (o -= 7));
    else if (d && o - t >= 7 && e.endsWith("</body>", o)) {
      let p = o - 7;
      if (r) {
        let _ = e.lastIndexOf("<!--", p);
        if (_ >= t && e.lastIndexOf("-->", p) < _ + 4) return null;
      }
      return { bodyEnd: p, commentsDropped: r };
    } else return null;
  }
}
function wp(e, t, r, o) {
  let d = 0,
    p = !1;
  for (;;) {
    Ia(o);
    let w = kp(e);
    if (w !== null) {
      if (d === Ma) throw new StripUnsettledError("levels", o.spent);
      ((e = w.body), (t = w.lang ?? t), d++, (p = !1));
      continue;
    }
    p ||= nl(e);
    let E = r(e);
    if (E === e) break;
    e = E;
  }
  let _ = p ? (d > 0 ? "partial" : "miss") : d > 0 ? "repaired" : void 0;
  return { body: e, lang: t, outcome: _ };
}
function nl(e) {
  if (!startsWithSkeletonOpen(e)) return !1;
  let t = e.indexOf(FRAME_RUNTIME_BEGIN);
  return t !== -1 && t < Ci;
}
function kp(e) {
  if (!startsWithSkeletonOpen(e)) return null;
  let t = pr.length,
    r = (w) => {
      if (!e.startsWith(w, t)) return !1;
      return ((t += w.length), !0);
    },
    o;
  if (r(' lang="')) {
    let w = e.indexOf('"', t);
    if (w === -1 || !isValidArtifactLang(e.slice(t, w))) return null;
    ((o = e.slice(t, w)), (t = w + 1));
  }
  if (!r("><head>" + FRAME_RUNTIME_BEGIN)) return null;
  let d = t + FRAME_RUNTIME_MAX_SPAN,
    p = 0;
  while (p < 2 && r("<script>")) {
    let w = e.indexOf("</script>", t);
    if (w === -1 || w > d) return null;
    let E = e.slice(t, w);
    if (E === "" || E.includes("<!--") || /<\/script/i.test(E)) return null;
    ((t = w + 9), p++);
  }
  if (p === 0 || !r(FRAME_RUNTIME_END + Qa)) return null;
  if (!r("<style>")) return null;
  let _ = e.indexOf("</style>", t);
  if (_ === -1 || e.slice(t, _).includes("<")) return null;
  if (((t = _ + 8), !r(el))) return null;
  if (e.length - t < dr.length || !e.endsWith(dr)) return null;
  return { body: e.slice(t, e.length - dr.length), lang: o };
}
function mintRoundTripPublishSignal(e) {
  let t = Object.freeze({ slug: e });
  return (ne().mintedRoundTripPublishSignals.add(t), t);
}
function isMintedRoundTripPublishSignal(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    ne().mintedRoundTripPublishSignals.has(e)
  );
}
function $i(e, t = "supporting file") {
  for (let r of e) {
    if (!hl.has(r.contentType))
      return (
        logFeatureBad("artifact_publish", "file_not_servable"),
        ie(
          `${t} "${r.path}": contentType ${b(r.contentType)} is not servable (nothing was published). Supporting files are assets the page itself loads \u2014 scripts, styles, images, media, JSON \u2014 and only standard web media types are served, so re-encode a data asset into one (e.g. JSON) or inline it. If the intent was instead to hand the viewer a file to keep, note that neither a served file nor a data:/blob: download link does that (the viewer blocks page-initiated downloads); offering a file to save is a runtime capability where available.`,
        )
      );
    if (MANIFEST_TEXT_TYPES.has(r.contentType)) {
      if (
        typeof r.content === "string"
          ? r.content.includes("\x1B")
          : r.content.includes(27)
      )
        return (
          logFeatureBad("artifact_publish", "file_esc_byte"),
          ie(
            `${t} "${r.path}" carries an ESC byte \u2014 publish ` +
              "text content without escape sequences (nothing was published)",
          )
        );
      if (
        typeof r.content === "string"
          ? r.content.includes("\x00")
          : r.content.includes(0)
      )
        return (
          logFeatureBad("artifact_publish", "file_nul_byte"),
          ie(
            `${t} "${r.path}" carries NUL bytes \u2014 publish ` +
              "text content as UTF-8 without embedded NULs (nothing was published)",
          )
        );
    }
    if (Tp.has(r.contentType)) {
      let d =
        typeof r.content === "string" ? r.content : r.content.toString("utf8");
      if (/<!(?:DOCTYPE|ENTITY)/i.test(d))
        return (
          logFeatureBad("artifact_publish", "file_dtd"),
          ie(
            `${t} "${r.path}" carries a DOCTYPE or ENTITY ` +
              "declaration \u2014 XML supporting files must not use DTD " +
              "machinery (nothing was published)",
          )
        );
      let p = d.startsWith("\uFEFF") ? d.slice(1) : d,
        _ = p.indexOf("<?");
      if (_ !== -1) {
        if (!(_ === 0 && /^<\?xml[\s?]/i.test(p)) || p.indexOf("<?", 2) !== -1)
          return (
            logFeatureBad("artifact_publish", "file_pi"),
            ie(
              `${t} "${r.path}" carries a processing ` +
                "instruction \u2014 XML supporting files may carry only a " +
                "leading XML declaration (nothing was published)",
            )
          );
      }
    }
    if (
      typeof r.content !== "string" &&
      MANIFEST_TEXT_TYPES.has(r.contentType) &&
      r.content.length >= 2 &&
      ((r.content[0] === 255 && r.content[1] === 254) ||
        (r.content[0] === 254 && r.content[1] === 255))
    )
      return (
        logFeatureBad("artifact_publish", "file_utf16_bom"),
        ie(
          `${t} "${r.path}" is UTF-16 encoded \u2014 publish ` +
            "supporting text files as UTF-8 (nothing was published)",
        )
      );
    let o =
      typeof r.content === "string"
        ? r.content
        : MANIFEST_TEXT_TYPES.has(r.contentType)
          ? r.content.toString("utf8")
          : null;
    if (o !== null && _J(o, { parsedAsMarkup: MARKUP_CONTENT_TYPES.has(normalizeContentType(r.contentType)) }))
      return (
        logFeatureBad("artifact_publish", "file_review_machinery"),
        ie(
          `${t} "${r.path}" carries the artifact-pr-review machinery; review pages publish as a single file through the publish-time guard (nothing was published)`,
        )
      );
  }
  return null;
}
async function publishArtifact(...e) {
  let t = getArtifactPublishStubDir();
  if (t !== null) {
    let o = Buffer.byteLength(e[0], "utf8");
    if (o > MAX_ARTIFACT_BYTES)
      return ie(
        `too large: page is ${Math.ceil(o / 1024 / 1024)}MB (max ${MAX_ARTIFACT_BYTES / 1024 / 1024}MB)`,
      );
    let d = await za(e[0]),
      p = Buffer.byteLength(d, "utf8") > MAX_ARTIFACT_BYTES ? e[0] : d;
    if (e[1].verifyWorkshopHtml !== void 0) {
      let { verifyWorkshopHtml: R } = await import("./extractInlineScriptHashes.segwcp5c.js"),
        C = R(p, await br(), e[1].verifyWorkshopHtml);
      if (!C.ok)
        return ie(
          `workshop page refused by the structural verifier \u2014 fix and republish:
` +
            C.violations
              .slice(0, 12)
              .map((M) => `- [${M.rule}] ${M.where} \u2014 ${M.hint}`).join(`
`),
        );
    }
    let _ = e[1].files ?? [],
      w = e[1].removeFiles ?? [];
    if (_.length > 0 || w.length > 0) {
      let R = wr(p, _, w);
      if (R !== null) return ie(R.msg);
    }
    let E = Mi(p, _, e[1].copiedFiles ?? [], w);
    if (E !== null) return ie(E);
    return $o(t, p, e[1]);
  }
  let r = e[1].slug;
  if (!r) return ka(...e);
  return withPublishInFlight(e[1].ownPublishes, r, () => ka(...e));
}
async function ka(e, t) {
  let r = performance.now(),
    {
      slug: o,
      title: d,
      favicon: p,
      label: _,
      note: w,
      description: E,
      capabilities: R,
      session: C,
      hostServers: M,
      readBack: D,
      publishContext: F,
      originMetadata: I,
    } = t,
    N = t.copiedFiles ?? [];
  if (
    t.createPath !== void 0 &&
    (o !== void 0 ||
      t.force === !0 ||
      t.baseVersion !== void 0 ||
      N.length > 0 ||
      (t.removeFiles !== void 0 && t.removeFiles.length > 0) ||
      t.liveFiles !== void 0)
  )
    return (
      logFeatureBad("artifact_publish", "create_bad_combo"),
      ie("invalid publish options")
    );
  let ae = !!o,
    ue = R !== void 0,
    V = isFrameBaseVersionEnabled(),
    J = t.force === !0,
    U =
      (t.files?.length ?? 0) > 0 ||
      N.length > 0 ||
      (t.removeFiles?.length ?? 0) > 0 ||
      t.liveFiles !== void 0,
    te =
      t.composedPrReview === !0 || t.autoEditAttribution !== void 0 || U
        ? t.baseVersion
        : V
          ? t.baseVersion
          : void 0,
    re = {
      slug: o,
      title: d,
      favicon: p,
      label: _,
      note: w,
      description: E,
      publishContext: F,
      originMetadata: I,
      ...(t.autoEditAttribution && {
        autoEditAttribution: t.autoEditAttribution,
      }),
      ...(t.createPath === void 0 && t.thumbnail && { thumbnail: t.thumbnail }),
      ...(t.createPath === void 0 &&
        t.thumbnailDark && { thumbnailDark: t.thumbnailDark }),
    };
  if ((t.files !== void 0 && t.files.length > 0) || N.length > 0) {
    if (_J(e))
      return (
        logFeatureBad("artifact_publish", "review_single_file"),
        ie(
          "artifact-pr-review pages are single-file: supporting files are not allowed alongside a review page (nothing was published)",
        )
      );
    let L = $i(t.files ?? []);
    if (L !== null) return L;
  }
  let ce = {
      injectDiagramRuntime: t.injectDiagramRuntime,
      injectHighlightRuntime: t.injectHighlightRuntime,
      composedPrReview: t.composedPrReview,
      expectRoundTrippedPage: t.expectRoundTrippedPage,
    },
    q = await prepareArtifactBody(e, ce),
    ge = composeArtifactPage(q.body, t.lang ?? q.roundTripLang),
    pe = Buffer.byteLength(ge, "utf8");
  if (pe > MAX_ARTIFACT_BYTES && q.blockIdBytes > 0 && pe - q.blockIdBytes <= MAX_ARTIFACT_BYTES)
    (logFeatureSad("artifact_publish", "block_ids_over_cap"),
      (q = await prepareArtifactBody(e, {
        ...ce,
        docBlockIds: !1,
        expectRoundTrippedPage: !1,
      })),
      (ge = composeArtifactPage(q.body, t.lang ?? q.roundTripLang)),
      (pe = Buffer.byteLength(ge, "utf8")));
  let {
      body: Le,
      mermaidInjected: Ge,
      hljsInjected: Te,
      unnested: Me,
      hoistedCommentsDropped: De,
    } = q,
    Ne = ep(Le) ? [isFrameMultiFileEnabled() ? tp : np] : [];
  if (pe > MAX_ARTIFACT_BYTES)
    return (
      logFeatureBad("artifact_publish", "too_large", {
        page_bytes: pe,
        mermaid_injected: Ge,
        hljs_injected: Te,
        block_id_bytes: q.blockIdBytes,
      }),
      ie(
        `too large: rendered page is ${Math.ceil(pe / 1024 / 1024)}MB (max ${MAX_ARTIFACT_BYTES / 1024 / 1024}MB)` +
          (Te
            ? " \u2014 includes the inline syntax-highlight runtime (~0.6MB), added because the page contains fenced code"
            : ""),
      )
    );
  let le = !1,
    he = 0,
    Ce,
    Be = [];
  if (t.files !== void 0 && t.files.length > 0)
    Be = t.files
      .filter((L) => isRenderableOrExecutableContentType(L.contentType))
      .map((L) => `${L.path} (${L.contentType})`);
  if (t.verifyWorkshopHtml !== void 0) {
    let { verifyWorkshopHtml: L } = await import("./extractInlineScriptHashes.segwcp5c.js"),
      de = await br(),
      ee = L(ge, de, t.verifyWorkshopHtml);
    if (!ee.ok) {
      (logFeatureSad("workshop_html_publish", "verifier_refused"),
        logFeatureBad("artifact_publish", "workshop_verifier_refused", { page_bytes: pe }));
      let xe = ee.violations
          .slice(0, 12)
          .map((Ye) => `- [${Ye.rule}] ${Ye.where} \u2014 ${Ye.hint}`),
        st =
          ee.violations.length > 12
            ? `
(and ${ee.violations.length - 12} more)`
            : "";
      return {
        url: null,
        slug: null,
        version: null,
        err:
          `workshop page refused by the structural verifier \u2014 fix and republish:
` +
          xe.join(`
`) +
          st,
      };
    }
    if (
      ((le = ee.workshopSurface),
      (he = ee.decisionCount ?? 0),
      ee.workshopSurface)
    )
      Ce = {
        state: ee.workshopState ?? "in-progress",
        deliverables: ee.deliverables ?? { n: 0, pr: 0, artifact: 0, other: 0 },
      };
    if (le) {
      let xe = Ip(t.slug, t.refusedSidecarHistory?.());
      if (xe !== null) {
        if (xe.kind === "priors")
          (logFeatureSad("workshop_html_publish", "sidecar_refused"),
            logFeatureBad("artifact_publish", "workshop_sidecar_refused", {
              page_bytes: pe,
            }));
        else
          (logFeatureSad("workshop_html_publish", "sidecar_contract"),
            logFeatureBad("artifact_publish", "workshop_sidecar_contract", {
              page_bytes: pe,
            }));
        return ie(xe.err);
      }
    }
    if (t.files !== void 0 && t.files.length > 0)
      if (le) {
        if (Be.length > 0)
          return (
            logFeatureSad("workshop_html_publish", "sidecar_refused"),
            logFeatureBad("artifact_publish", "workshop_sidecar_refused", {
              page_bytes: pe,
            }),
            {
              url: null,
              slug: null,
              version: null,
              err:
                "workshop pages cannot ship renderable or executable sidecar files \u2014 " +
                "each is a URL that bypasses the publish-time verifier: " +
                sanitizeInvisibleCharacters(Be.join(", ")),
            }
          );
      } else {
        let xe = await Li(t.files, de, pe);
        if (xe !== null) return xe;
      }
    if (le) logFeatureOk("workshop_html_publish", { count: he });
  }
  let He =
    le && (t.template === void 0 || t.template === "plain")
      ? "workshop"
      : (t.template ?? "plain");
  re.template = He;
  let Ue = R,
    Je = [];
  if (R !== void 0 && C !== void 0) {
    let { connectorNames: L, serverNames: de } = C,
      ee = bo(R, L, de, { hostServers: M });
    if (!ee.ok) {
      let Ye = countMatching(ee.malformed, (ze) => ze.kind === "host_unavailable"),
        Bt = countMatching(
          ee.malformed,
          (ze) =>
            ze.kind === "opaque_id" ||
            ze.kind === "known_id" ||
            ze.kind === "tool_name" ||
            ze.kind === "connector_as_host" ||
            ze.kind === "undeclarable_name",
        ),
        ln = countMatching(ee.malformed, (ze) => ze.kind === "local_server_as_first_party");
      logFeatureBad(
        "artifact_publish",
        Ye > 0
          ? "host_server_unavailable"
          : ee.internal.length > 0
            ? "internal_host_server_name"
            : ln > 0
              ? "first_party_server_collision"
              : ee.unresolved.length > 0
                ? "unresolved_mcp_server"
                : Bt > 0
                  ? "opaque_mcp_server_id"
                  : ee.malformed.length > 0
                    ? "malformed_mcp_manifest"
                    : "mcp_manifest_over_caps",
        {
          page_bytes: pe,
          unresolved_count: ee.unresolved.length,
          internal_count: ee.internal.length,
          malformed_count: ee.malformed.length - Bt - Ye,
          opaque_id_count: Bt,
          host_unavailable_count: Ye,
          oversized_count: ee.oversized.length,
          ...(ee.serverCount !== null && { server_count: ee.serverCount }),
        },
      );
      let at = Dp(ee.malformed);
      if (ee.unresolved.length > 0) {
        let ze = rt(ee.unresolved, 8, (lt) => `"${Y_(lt)}"`),
          jt = L.filter(zt),
          cn = rt(dedupe(jt.map((lt) => lt.server)), 8, (lt) => `"${Y_(lt)}"`),
          $n =
            cn.length === 0
              ? ""
              : ` (connectors this session: ${cn.join(", ")})`,
          Fn = jt.some((lt) => Xn(lt.toolPrefix) !== null);
        at.push(
          `unknown ${pluralize(ee.unresolved.length, "connector")}: ${ze.join(", ")} \u2014 ` +
            (Fn
              ? "set `server` to the connector's exact display name"
              : "set `server` to the segment between `mcp__` and the next `__` of a tool name from this session (for `mcp__claude_ai_Slack_beta__search`, use `claude_ai_Slack_beta`, copied exactly), or to the connector's exact display name") +
            `${$n}. The control plane would accept this manifest, but the page would break at view time`,
        );
      }
      if (ee.internal.length > 0) {
        let ze = rt(dedupe(ee.internal), 8, (jt) => `"${Y_(jt)}"`);
        at.push(
          `built-in ${pluralize(ee.internal.length, "server")} ${ze.join(", ")} ` +
            "\u2014 the Claude app's own servers, which it never exposes to " +
            "pages as host servers; declare only servers from the MCP configuration (host:<name> for the `mcp__<name>__<tool>` tools of a server you configured). The control plane would accept this manifest, but the page would break at view time",
        );
      }
      for (let ze of ee.oversized)
        at.push(
          `${an(ze.server)} "${Y_(ze.server)}" declares ${ze.toolCount} tools, counted after any same-name entries merge (max ${Yr}) \u2014 trim the tools ` +
            "list; the control plane would reject it anyway",
        );
      if (ee.serverCount !== null)
        at.push(
          `manifest declares ${ee.serverCount} servers (max ${Kr}) \u2014 declare only the servers ` +
            "the page actually calls; the control plane would reject it anyway",
        );
      return ie(`mcp manifest rejected: ${at.join("; ")}.`);
    }
    ((Ue = ee.caps), (Je = ee.warnings));
    let xe = [
        e,
        ...(t.files ?? []).flatMap((Ye) =>
          MANIFEST_TEXT_TYPES.has(Ye.contentType) ? [pl(Ye.content)] : [],
        ),
      ],
      st = ee.servers.length > 0 ? yo(xe, ee.servers, 64) : [];
    if (st.length > 0)
      Je = [
        ...Je,
        `the page calls callTool/watchTool with ${pluralize(st.length, "a server name", "server names")} not in this manifest \u2014 ${rt(st, 8, (Ye) => `"${Y_(Ye)}"`).join(", ")} \u2014 and those calls fail for every viewer; the manifest declares ${rt(ee.servers, 8, (Ye) => `"${Y_(Ye)}"`).join(", ")}.`,
      ];
  } else if (R !== void 0) {
    let L = _o(R).length;
    if (L > 0)
      logFeatureSad("artifact_publish", "slug_without_pairs", {
        page_bytes: pe,
        slug_count: L,
      });
  }
  if (
    t.contract !== void 0 &&
    t.contract !== "latest" &&
    (!Mj.test(t.contract) || t.contract === Z1e)
  )
    return (
      logFeatureBad("artifact_publish", "invalid_contract", { page_bytes: pe }),
      ie(
        `invalid contract ${b(t.contract)} \u2014 pass 'latest' ` +
          "or a published version like 0.1.0.",
      )
    );
  let _e = t.contract === "latest",
    je = t.contract !== void 0 && t.contract !== "latest" ? t.contract : null,
    Lt = t.contract !== void 0,
    Ft = o && !Lt ? t.storedPin : null,
    wt;
  if (o && !Lt && Ft === void 0) {
    let L = await readFrameDecl(o, void 0, t.credentials);
    if (
      L !== null &&
      "err" in L &&
      t.onPinReadError !== "assume_none" &&
      ma(L)
    ) {
      let de = gi(L);
      if ((await sleep(ba, t.signal), !t.signal?.aborted))
        ((L = await readFrameDecl(o, t.signal, t.credentials)),
          logFeatureSad("artifact_publish", "pin_readback_retried", {
            page_bytes: pe,
            ...de,
            recovered: !(L !== null && "err" in L),
          }));
    }
    if (L !== null && "err" in L)
      if (t.onPinReadError === "assume_none")
        (logFeatureSad("artifact_publish", "pin_readback_assumed_none", { page_bytes: pe }),
          (Ft = null));
      else
        return (
          logFeatureBad("artifact_publish", "pin_readback_failed", {
            page_bytes: pe,
            ...gi(L),
          }),
          ie(
            `couldn't read the artifact's stored contract pin (${L.err}) \u2014 ` +
              "a republish preserves the stored pin, so this publish cannot proceed without it. This is usually transient: retry. If the read keeps failing and you intend to move the artifact to the current contract anyway, pass contract: 'latest' (this changes the page's runtime semantics).",
          )
        );
    else
      ((Ft = L === null ? null : wD(L.contract)), (wt = L?.capabilities ?? {}));
  }
  let mt = wD(Ft);
  if (
    o &&
    wt === void 0 &&
    Object.keys(R ?? {}).length > 0 &&
    t.composedPrReview !== !0
  ) {
    let L = await readFrameDecl(o, void 0, t.credentials);
    if (L !== null && "err" in L && t.contract === void 0 && ma(L)) {
      if ((await sleep(ba, t.signal), !t.signal?.aborted))
        L = await readFrameDecl(o, void 0, t.credentials);
    }
    if (L !== null && "err" in L) {
      if (t.contract === void 0)
        return (
          logFeatureBad("artifact_publish", "capability_readback_failed", {
            page_bytes: pe,
            ...gi(L),
          }),
          ie(
            `couldn't read the artifact's stored capability declaration (${L.err}) \u2014 ` +
              "a republish that declares capabilities must not silently revoke stored ones, so this publish cannot proceed without it. This is usually transient: retry. If the read keeps failing and you intend to move the artifact to the current contract anyway, pass contract: 'latest' (this changes the page's runtime semantics, and the capabilities you send then replace the stored ones).",
          )
        );
      logFeatureSad("artifact_publish", "retrofit_guard_skipped");
    } else wt = L?.capabilities ?? {};
  }
  let Et = (L) => (L === rP ? JE : L),
    tt = Object.keys(wt ?? {}).map(Et),
    Rt = Object.keys(Ue ?? {}).map(Et),
    Tt = Object.entries(wt ?? {}).filter(([L]) => !Rt.includes(Et(L)));
  if (
    t.createPath === void 0 &&
    t.composedPrReview !== !0 &&
    Tt.length > 0 &&
    Rt.some((L) => !tt.includes(L))
  ) {
    logFeatureBad("artifact_publish", "capability_retrofit_refused");
    let L = rt(Tt, 8, ([ee]) => jg(ee)),
      de = jg(b({ ...Object.fromEntries(Tt), ...Ue }), { max: 600 });
    return ie(
      `your capabilities declaration omits the stored ${pluralize(Tt.length, "capability", "capabilities")} ${L.join(", ")} while adding new ones \u2014 a sent declaration replaces the stored one, so this publish would have silently revoked ${Tt.length === 1 ? "it" : "them"}. To keep ${Tt.length === 1 ? "it" : "them"}, republish declaring the union${de.length < 600 ? `: ${de}` : " (republish with capabilities omitted to read the stored declaration back, then resend it plus your additions)"}. To revoke on purpose, publish that union first, then republish without the revoked names (a declaration that adds no new name goes out as sent); capabilities: {} clears everything.`,
    );
  }
  let Nt = await Hf({
    capabilities: Ue,
    echoPin: mt,
    explicitPin: je,
    upgrade: _e,
    pageBytes: pe,
    ...(t.createPath !== void 0 && {
      latestFetchRemedy: "nothing was created; retry.",
    }),
    credentials: t.credentials,
  });
  if ("errMsg" in Nt) return ie(Nt.errMsg);
  let It = Nt.fields,
    Ee = (L) =>
      rp(Ga(L, D ? o : void 0, t.credentials, t.signal), [...Je, ...Ne]).then(
        (de) => {
          if (de.err === null && Me !== void 0)
            logFeatureSad(
              "artifact_publish",
              Me === "repaired"
                ? "nested_page_repaired"
                : "nested_repair_partial",
            );
          if (de.err === null && De)
            logFeatureSad("artifact_publish", "hoisted_comment_dropped");
          let ee =
            de.err === null
              ? [...Be, ...(de.refusedClassSidecarTypes ?? [])]
              : [];
          return de.err === null && ee.length > 0
            ? { ...de, refusedClassSidecarTypes: ee }
            : de;
        },
      );
  if (t.createPath !== void 0 && _J(Le))
    return (
      logFeatureBad("artifact_publish", "review_single_file"),
      ie(
        "artifact-pr-review pages are single-file: supporting files are not allowed alongside a review page (nothing was published)",
      )
    );
  let Dt = t.files ?? [],
    Qe = t.removeFiles ?? [];
  if (
    Dt.length > 0 ||
    N.length > 0 ||
    Qe.length > 0 ||
    t.liveFiles !== void 0
  ) {
    if (_J(Le))
      return (
        logFeatureBad("artifact_publish", "review_single_file"),
        ie(
          "artifact-pr-review pages are single-file: supporting files are not allowed alongside a review page (nothing was published)",
        )
      );
    if (!isFrameMultiFileEnabled())
      return (
        logFeatureBad("artifact_publish", "multifile_flag_off", {
          n_files: Dt.length + N.length,
          n_removed: Qe.length,
        }),
        ie(
          Qe.length > 0
            ? "Supporting files can't be published or removed right now, so nothing was published or removed; the artifact is unchanged. Publishing the page on its own (omitting `files`) would update the page but can't remove a file."
            : "Supporting files can't be published right now, so nothing was published. Publish the page as a single file instead: inline what it needs and omit `files`.",
        )
      );
    if (N.length > 0 && !isFrameCopyFromEnabled())
      return (
        logFeatureBad("artifact_publish", "copy_from_flag_off", { n_copied: N.length }),
        ie(Fi)
      );
    if (t.createPath !== void 0)
      return Ee(
        bi(re, (L) =>
          xa(
            ge,
            L,
            It,
            void 0,
            !1,
            {
              t0: r,
              pageBytes: pe,
              lane: "inline",
              isRedeploy: ae,
              hasCaps: ue,
              template: He,
              ...(Ce && { workshopInfo: Ce }),
              forced: !1,
              ...(mt !== null && { echoedPin: mt }),
              ...(t.liveFilesGate === !0 && { liveFilesOn: !0 }),
            },
            t.ownPublishes,
            t.credentials,
            le,
            t.createPath,
            t.onRetry,
            t.signal,
            Dt,
          ),
        ),
      );
    return Ee(
      bi(re, (L, de) =>
        Ni(ge, Dt, N, Qe, L, It, {
          workshopSurface: le,
          baseVersion: de ?? te,
          force: J,
          ...(t.liveFiles !== void 0 && { liveFiles: t.liveFiles }),
          ownPublishes: t.ownPublishes,
          tele: {
            t0: r,
            pageBytes: pe,
            lane: "inline",
            isRedeploy: ae,
            hasCaps: ue,
            template: He,
            ...(Ce && { workshopInfo: Ce }),
            forced: J,
            ...(mt !== null && { echoedPin: mt }),
            ...(t.liveFilesGate === !0 && { liveFilesOn: !0 }),
          },
          onRetry: t.onRetry,
          signal: t.signal,
          credentials: t.credentials,
        }),
      ),
    );
  }
  return Ee(
    bi(re, (L) =>
      xa(
        ge,
        L,
        It,
        te,
        J,
        {
          t0: r,
          pageBytes: pe,
          lane: "inline",
          isRedeploy: ae,
          hasCaps: ue,
          template: He,
          ...(Ce && { workshopInfo: Ce }),
          forced: J,
          ...(mt !== null && { echoedPin: mt }),
          ...(t.liveFilesGate === !0 && { liveFilesOn: !0 }),
        },
        t.ownPublishes,
        t.credentials,
        le,
        t.createPath,
        t.onRetry,
        t.signal,
      ),
    ),
  );
}
async function bi(e, t) {
  let r = await t(e);
  if (
    r.err === null ||
    r.thumbnailRejected === void 0 ||
    r.strandedSlug !== void 0 ||
    r.liveVersion !== void 0
  )
    return r;
  if (e.thumbnail === void 0 && e.thumbnailDark === void 0)
    return (logFeatureBad("artifact_publish", "thumbnail_rejected"), r);
  logFeatureSad("artifact_publish", "thumbnail_rejected");
  let { thumbnail: o, thumbnailDark: d, ...p } = e,
    _ =
      r.created === void 0
        ? await t(p)
        : await t({ ...p, slug: r.created.slug }, r.created.version);
  return _.err === null
    ? {
        ..._,
        warnings: [
          ...(_.warnings ?? []),
          `The custom thumbnail was not accepted by the server (${r.thumbnailRejected}); published with the automatic screenshot instead.`,
        ],
      }
    : _;
}
function surfacedViaForEntrypoint() {
  if (getEnvEntrypoint() === "claude-vscode") return "epitaxy_pane";
  if (isDesktopHostEntrypoint()) return "desktop_pane";
  return "terminal_link";
}
async function trackFrameEvent(e, t) {
  try {
    let r = await Nd.post(
      "/api/frame/track",
      {
        event_name: e,
        ...(t.slug && { slug: t.slug }),
        ...(t.via && { via: t.via }),
        ...(t.mode && { mode: t.mode }),
      },
      {
        refreshOAuth: !0,
        headers: Fd(),
        timeout: 5000,
        credentials: t.credentials,
      },
    );
    if (!r.ok) n(`[artifact] /track skipped: ${r.reason}`);
    else if (r.status !== 204)
      n(`[artifact] /track ${r.status}: ${errBody(r.data)}`);
  } catch (r) {
    n(
      `[artifact] /track failed: ${r instanceof Error ? r.message : String(r)}`,
    );
  }
}
var vp = ["frame_daily_publish_cap_reached", "frame_daily_push_cap_reached"],
  xp = {
    frame_daily_publish_cap_reached: "daily_new",
    frame_daily_push_cap_reached: "daily_pushes",
  },
  Sp = createLazyValue(() => c({ error: X(vp), message: s().catch("") })),
  Ap = {
    daily_new:
      "daily new-artifact limit for your plan reached \u2014 resets at UTC midnight",
    daily_pushes:
      "daily publish limit for your plan reached \u2014 resets at UTC midnight",
  },
  PUBLISH_CAP_FRAME = "publish 429: ",
  il = "x-frame-push-remaining";
function sl(e) {
  let t = typeof e === "string" ? e.trim() : "";
  return /^\d{1,9}$/.test(t) ? Number(t) : void 0;
}
function dailyPublishResetEpochSeconds(e = Date.now()) {
  let t = new Date(e);
  return (
    Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate() + 1) / 1000
  );
}
function ol(e) {
  let t = typeof e === "string" ? Date.parse(e) : Number.NaN;
  return dailyPublishResetEpochSeconds(Number.isFinite(t) ? t : Date.now());
}
function An(e) {
  let t = Sp().safeParse(e);
  if (!t.success) return;
  let r = xp[t.data.error],
    o = scrubServerLine(t.data.message, 200),
    d = o !== "" ? o : Ap[r];
  return { capType: r, message: `${PUBLISH_CAP_FRAME}${d}` };
}
var va = 3,
  Ep = 5000,
  al = 20000;
function ll(e, t) {
  let r = Ep * 2 ** (e - 2),
    o = Math.round(r + Math.random() * 0.25 * r),
    d = parseRetryAfterHeader(t) ?? 0;
  return Math.min(Math.max(d, o), al);
}
class Pn extends Error {
  startedAtMs;
  constructor(e, t, r) {
    super(e, r);
    this.startedAtMs = t;
  }
}
class yr extends Pn {}
class cl extends Pn {}
class ul extends Pn {}
async function ur(e) {
  let t = performance.now();
  try {
    return await e();
  } catch (r) {
    throw new ul(r instanceof Error ? r.message : String(r), t, { cause: r });
  }
}
function dl(e, t) {
  return e instanceof Pn ? boe(e.cause, e.startedAtMs) : boe(e, t);
}
async function vi(e, t, r, o) {
  let d = await Nd.post(e, t, {
    refreshOAuth: !0,
    headers: Fd(),
    streamUpload: { tailFloorMs: Rp, onSettled: o },
    maxBodyLength: 2 * MAX_ARTIFACT_BYTES,
    maxContentLength: Wa,
    relayProbe: Rf,
    credentials: r,
  });
  return (o(void 0), d);
}
function Rp(e) {
  return (Math.min(180, 60 + Math.floor(e / 32768)) + 30) * 1000;
}
async function fl(e, t, r, o, d = !1) {
  let p = async () => {
      let F = performance.now();
      try {
        return await e();
      } catch (I) {
        let N = errBody(I instanceof Error ? I.message : String(I));
        throw nP(I)
          ? new yr(Tn(`relay request failed: ${N}`), F, { cause: I })
          : new cl(Tn(`deploy request failed: ${N}`), F, { cause: I });
      }
    },
    _ = await p(),
    w = 1,
    E = !1,
    R,
    C = (F) => {
      ((R ??= F.status === 429 ? 429 : 503),
        n(
          `[artifact] /deploy/direct ${F.status} \u2014 retrying in ${F.delayMs}ms (attempt ${F.attempt} of ${F.maxAttempts})`,
        ),
        t?.(F));
    },
    M = async (F) => {
      if ((await sleep(F, r), r?.aborted))
        return (n("[artifact] /deploy/direct retry cancelled by user"), !1);
      return ((w += 1), (E = !0), (_ = await p()), (E = !1), !0);
    },
    D = _.ok && _.fromFrame && _.status === 503 && kr(_.data) === "render_busy";
  try {
    if (_.ok && _.fromFrame && _.status === 429) {
      if (An(_.data) !== void 0)
        return (
          n("[artifact] /deploy/direct 429 is a plan cap \u2014 not retrying"),
          _
        );
      let I = parseRetryAfterHeader(_.response?.headers?.["retry-after"]) ?? 2000,
        N = Math.min(I, 30000);
      return (
        C({ status: 429, attempt: 2, maxAttempts: 2, delayMs: N }),
        await M(N),
        _
      );
    }
    if (D && _.ok) {
      let I = Math.min(parseRetryAfterHeader(_.response?.headers?.["retry-after"]) ?? 1000, al);
      return (
        C({ status: 503, attempt: 2, maxAttempts: 2, delayMs: I }),
        await M(I),
        _
      );
    }
    let F = 2;
    while (
      _.ok &&
      _.fromFrame &&
      _.status === 503 &&
      !(d && Ii(_.status, _.data)) &&
      F <= va
    ) {
      let I = ll(F, _.response?.headers?.["retry-after"]);
      if (
        (C({ status: 503, attempt: F, maxAttempts: va, delayMs: I }),
        !(await M(I)))
      )
        break;
      F += 1;
    }
    return _;
  } finally {
    if (R !== void 0)
      (logFeatureSad(
        "artifact_publish",
        R === 503 ? "deploy_503_retried" : "deploy_429_retried",
        {
          ...o,
          deploy_attempts: w,
          deploy_final_status: E || !_.ok ? 0 : _.status,
          ...(r?.aborted && { cancelled: !0 }),
          ...(D && { render_busy: !0 }),
        },
      ),
        t?.({ settled: !0 }));
  }
}
var hr = /unknown field|not a recognized|not allowlisted/i;
function xi() {
  return Tn(
    "the server answered for a different artifact than the one targeted, so its answer was not adopted",
  );
}
function En() {
  return Tn("deploy returned an incomplete or malformed response");
}
async function xa(e, t, r, o, d, p, _, w, E, R, C, M, D) {
  let F = {
      page_bytes: p.pageBytes,
      lane: fromEnum(p.lane),
      forced: p.forced,
      template: fromEnum(p.template),
      ...gl(t),
      ...(D !== void 0 && D.length > 0 && { n_files: D.length }),
    },
    I;
  if (R !== void 0 && D !== void 0 && D.length > 0) {
    let J = wr(e, D, []);
    if (J !== null) return (logFeatureBad("artifact_publish", J.kind, F), ie(J.msg));
    let U = Object.create(null);
    U["index.html"] = { content: e, contentType: "text/html", live: !0 };
    let te = Si - Ct(e);
    for (let re of D) {
      let ce = Rn(re);
      if (((te -= Ct(ce)), te < 0))
        return (logFeatureBad("artifact_publish", "too_large", F), ie("file too large"));
      U[re.path] = {
        content: ce,
        contentType: re.contentType,
        ...(re.live === !0 && { live: !0 }),
      };
    }
    I = U;
  }
  let N = null,
    ae = "none",
    ue = !t.slug,
    V;
  try {
    let J = d,
      U = o,
      te = !1,
      re = t;
    n(
      `[artifact] publish \u2192 ${R ?? "/api/frame/deploy/direct"}${I !== void 0 ? ` (files: ${Object.keys(I).length})` : ""}`,
    );
    let ce = () =>
        fl(
          () =>
            vi(
              R ?? "/api/frame/deploy/direct",
              {
                ...La(re),
                ...Ja(),
                ...Za(),
                ...r,
                ...(R === void 0 && J && { force: !0 }),
                ...(R === void 0 && U && { baseVersion: U }),
                ...(R === void 0 &&
                  te &&
                  !U &&
                  re.slug && { expectUnpublished: !0 }),
                ...(I !== void 0 ? { files: I } : { content: e }),
              },
              w,
              (_e) => (V = _e),
            ),
          C,
          M,
          F,
          !0,
        ),
      q = await ce();
    if (J && q.ok && q.fromFrame && q.status === 400) {
      let _e = Jt(q.data);
      if (
        hr.test(_e) &&
        (/\bforce\b/.test(_e) || (U !== void 0 && /\bbaseVersion\b/.test(_e)))
      )
        (logFeatureSad("artifact_publish", "force_field_rejected", F),
          n(
            "[artifact] CP rejected force/baseVersion as unknown \u2014 retrying without them",
          ),
          (J = !1),
          (U = void 0),
          (q = await ce()));
    }
    if (
      J &&
      U &&
      q.ok &&
      q.fromFrame &&
      q.status === 400 &&
      /force and baseVersion are mutually exclusive/.test(Jt(q.data))
    )
      (logFeatureSad("artifact_publish", "exclusivity_retry", F),
        n(
          "[artifact] pre-relaxation CP rejected force+baseVersion \u2014 retrying without the precondition",
        ),
        (U = void 0),
        (q = await ce()));
    let ge = (_e) =>
      _e.reason === "no-auth"
        ? Am(_e.detail)
        : `publish unavailable: ${_e.reason}`;
    if (!q.ok) return (logFeatureBad("artifact_publish", q.reason, F), ie(ge(q)));
    if (
      ((N = q.fromFrame ? Ii(q.status, q.data) : null),
      N && !ue && N.slug !== t.slug)
    )
      return (logFeatureBad("artifact_publish", "deploy_slug_mismatch", F), ie(xi()));
    if (N && N.kind === void 0 && R === void 0 && !M?.aborted) {
      let _e = ll(2, q.response?.headers?.["retry-after"]);
      (n(
        `[artifact] /deploy/direct 503 after commit (${N.slug}) \u2014 retrying against it in ${_e}ms`,
      ),
        C?.({ status: 503, attempt: 2, maxAttempts: 2, delayMs: _e }));
      try {
        if ((await sleep(_e, M), !M?.aborted)) {
          if (ue)
            ((re = { ...t, slug: N.slug }), (te = N.live === void 0), (J = !1));
          if (N.live !== void 0) U = N.live;
          ((ae = "unknown"), (q = await ce()), (ae = "answered"));
        }
      } finally {
        (logFeatureSad("artifact_publish", "deploy_stranded_retried", {
          ...F,
          fresh_publish: ue,
          deploy_final_status: ae === "answered" && q.ok ? q.status : 0,
          ...(M?.aborted && { cancelled: !0 }),
        }),
          C?.({ settled: !0 }));
      }
      if (!q.ok)
        return (logFeatureBad("artifact_publish", q.reason, F), Xt(ie(ge(q)), N, ue, ae));
    }
    if (!q.fromFrame)
      return (
        logFeatureBad("artifact_publish", "relay_error", { ...F, deploy_status: q.status }),
        Xt(ie(Ri(q.status)), N, ue, ae)
      );
    if (((U ?? o) || te || (isFrameBaseVersionEnabled() && !isArtifactConflictLegacy())) && q.status === 409) {
      let _e = yl(q.data);
      if (_e)
        return (
          logFeatureBad("artifact_publish", "conflict", F),
          Xt({ ...ie(bl(_e)), conflict: !0, conflictDetail: _e }, N, ue, ae)
        );
    }
    if (R !== void 0 && q.status === 404)
      return (
        logFeatureBad("artifact_publish", "create_not_enabled", {
          ...F,
          deploy_status: 404,
        }),
        ie("create endpoint not available (404) \u2014 nothing was created")
      );
    if (q.status < 200 || q.status >= 300) {
      let _e = Ti(
        q.status,
        q.data,
        p.isRedeploy,
        p.echoedPin !== void 0
          ? { pin: p.echoedPin, declaredCaps: p.hasCaps }
          : void 0,
        p.liveFilesOn === !0,
      );
      if (_e.code !== "thumbnail_rejected")
        logFeatureBad("artifact_publish", _e.code ?? "deploy_failed", {
          ...F,
          deploy_status: q.status,
          ..._e.extra,
        });
      let je = _e.code === "path_is_live" ? kl(q.data) : void 0;
      return Xt(
        {
          ...Ei(_e, `deploy ${q.status}: ${errBody(q.data)}`),
          ...(je !== void 0 && { refusedLivePath: je }),
        },
        N,
        ue,
        ae,
      );
    }
    let pe = Ai().safeParse(q.data);
    if (!pe.success)
      return (
        logFeatureBad("artifact_publish", "deploy_incomplete", F),
        Xt(ie(En()), N, ue, ae)
      );
    let { slug: Le, version: Ge, read: Te, shared: Me, kind: De } = pe.data;
    if (re.slug && Le !== re.slug)
      return (
        logFeatureBad("artifact_publish", "deploy_slug_mismatch", F),
        Xt(ie(xi()), N, ue, ae)
      );
    if (R !== void 0 && (ha == null || De !== ha.LIVE_DOC_KIND))
      return (logFeatureBad("artifact_publish", "deploy_incomplete", F), ie(En()));
    let Ne = Ya(q.data),
      le = Ne?.map((_e) => _e.path),
      he =
        R === void 0
          ? new Set()
          : new Set([
              "index.html",
              ...Object.entries(I ?? {})
                .filter(([, _e]) => _e.live === !0)
                .map(([_e]) => _e),
            ]),
      Ce = (le ?? []).filter((_e) => he.has(_e)),
      Be = [
        ...wi(q.data),
        ...Ka(Ce),
        ...qa(le, new Set(["index.html", ...Object.keys(I ?? {})])),
      ].slice(0, mr),
      He = ki(q.data),
      Ue = sl(q.response?.headers?.[il]),
      Je = ol(q.response?.headers?.date);
    return (
      recordOwnPublish(_, Le, Ge),
      logFeatureOk("artifact_publish", {
        ...F,
        e2e_ms: Math.round(performance.now() - p.t0),
        is_redeploy: p.isRedeploy,
        has_caps: p.hasCaps,
        push_remaining_seen: Ue !== void 0,
      }),
      {
        url: artifactViewerUrl(Le),
        slug: Le,
        version: Ge,
        err: null,
        ...(Ue !== void 0 && { pushRemaining: Ue, pushResetAt: Je }),
        ...(E && { workshopSurface: !0 }),
        ...(p.workshopInfo && { workshop: p.workshopInfo }),
        ...(Te !== void 0 && { read: Te }),
        ...(Me !== void 0 && { shared: Me }),
        ...ml(pe.data, r, R !== void 0),
        ...(De !== void 0 && { kind: De }),
        ...(Be.length > 0 && { warnings: Be }),
        ...(He !== void 0 && { embeds: He }),
        ...(le !== void 0 && { livePaths: le }),
        ...(Ne !== void 0 && { liveDocs: Ne }),
        ...(Ce.length > 0 && { bornLive: Ce }),
      }
    );
  } catch (J) {
    return (
      logFeatureBad(
        "artifact_publish",
        J instanceof yr ? "relay_request_error" : "request_error",
        { ...F, ...dl(J, p.t0), ...V },
      ),
      Xt(ie(J instanceof Error ? J.message : String(J)), N, ue, ae)
    );
  }
}
var MAX_COPY_SOURCES = 4;
function pl(e) {
  return typeof e === "string" ? e : e.toString("utf8");
}
async function Li(e, t, r, o = "sidecar file") {
  let d = e.filter((_) => MARKUP_CONTENT_TYPES.has(normalizeContentType(_.contentType)));
  if (d.length === 0) return null;
  let { verifyWorkshopHtml: p } = await import("./extractInlineScriptHashes.segwcp5c.js");
  for (let _ of d) {
    let w = p(pl(_.content), t, "probe");
    if (w.ok) continue;
    (logFeatureSad("workshop_html_publish", "verifier_refused"),
      logFeatureBad("artifact_publish", "workshop_verifier_refused", {
        page_bytes: r,
        sidecar_bytes: Buffer.byteLength(_.content, "utf8"),
      }));
    let E = w.violations
        .slice(0, 6)
        .map((C) => `- [${C.rule}] ${C.where} \u2014 ${C.hint}`),
      R =
        w.violations.length > 6
          ? `
(and ${w.violations.length - 6} more)`
          : "";
    return ie(
      `${o} ${sanitizeInvisibleCharacters(_.path)} refused by the workshop structural verifier:
` +
        E.join(`
`) +
        R,
    );
  }
  return null;
}
var MANIFEST_TEXT_TYPES = new Set([
    "text/html",
    "text/css",
    "text/plain",
    "text/markdown",
    "text/csv",
    "text/javascript",
    "application/javascript",
    "application/json",
    "application/manifest+json",
    "application/xml",
    "text/xml",
    "image/svg+xml",
  ]),
  hl = new Set([
    ...MANIFEST_TEXT_TYPES,
    "application/wasm",
    "image/png",
    "image/jpeg",
    "image/gif",
    "image/webp",
    "image/avif",
    "image/x-icon",
    "image/vnd.microsoft.icon",
    "font/woff",
    "font/woff2",
    "font/ttf",
    "font/otf",
    "application/font-woff",
    "application/font-woff2",
    "audio/mpeg",
    "audio/ogg",
    "audio/wav",
    "audio/webm",
    "video/mp4",
    "video/webm",
    "video/ogg",
    "application/pdf",
  ]),
  Tp = new Set(["image/svg+xml", "text/xml", "application/xml"]),
  MANIFEST_TOTAL_BUDGET = 67108864,
  BINARY_FILE_MAX_BYTES = 15728640,
  Si = 12582912,
  yi = 20971520,
  gr = 256,
  Sa = /\b(manifest|mode)\b/;
function Rn(e) {
  if (MANIFEST_TEXT_TYPES.has(e.contentType))
    return typeof e.content === "string"
      ? e.content
      : e.content.toString("utf8");
  return (
    typeof e.content === "string" ? Buffer.from(e.content, "utf8") : e.content
  ).toString("base64");
}
function gl(e) {
  let t =
    (e.thumbnail !== void 0 ? 1 : 0) + (e.thumbnailDark !== void 0 ? 1 : 0);
  return t > 0 && isFrameDeclaredThumbnailEnabled() ? { thumbnails: t } : {};
}
function Aa(e) {
  return e !== void 0 && isFrameDeclaredThumbnailEnabled() ? Math.ceil(e.length / 3) * 4 : 0;
}
function Pp(e) {
  return typeof e.content === "string"
    ? Buffer.byteLength(e.content, "utf8")
    : e.content.length;
}
function Ct(e) {
  return Buffer.byteLength(b(e), "utf8") - 2;
}
var Cp = /unknown field "(live|reseed)"/,
  Op = /manifest must not be empty/;
function wr(e, t, r) {
  let o = (E) => ({ kind: "files_invalid", msg: E }),
    d = (E) => ({ kind: "too_large", msg: E });
  if (t.length + r.length + (e === null ? 0 : 1) > gr)
    return o(
      `This publish lists ${t.length} ${pluralize(t.length, "file")}${r.length > 0 ? ` and ${r.length} ${pluralize(r.length, "removal")}` : ""}${e === null ? "" : " plus the page"}, which is over the limit of ${gr} entries per version. Publish fewer files per version.`,
    );
  let _ = new Set(["index.html"]);
  for (let E of r) {
    if (!E || E === "index.html")
      return o(
        E
          ? `"index.html" is the page itself and can't be removed. Drop that entry.`
          : "A removal in `files` has an empty path. Name the published path to remove.",
      );
    if (_.has(E))
      return o(
        `${b(E)} is listed more than once in \`files\`. List each path once.`,
      );
    _.add(E);
  }
  let w = e === null ? 0 : Buffer.byteLength(e, "utf8");
  for (let E of t) {
    if (!E.path || E.path === "index.html")
      return o(
        E.path
          ? e === null
            ? `files must not contain "index.html" \u2014 it is the Artifact type's page and can't be changed here`
            : 'files must not contain "index.html" \u2014 the page argument is the index'
          : "every file needs a non-empty path",
      );
    if (_.has(E.path))
      return o(
        `${b(E.path)} is listed more than once in \`files\`. List each path once.`,
      );
    if (
      (_.add(E.path), typeof E.content === "string" && !MANIFEST_TEXT_TYPES.has(E.contentType))
    )
      return o(
        `file ${b(E.path)}: contentType ${b(E.contentType)} ` +
          "is binary \u2014 pass its content as a Buffer (raw bytes), not a string",
      );
    let R = MANIFEST_TEXT_TYPES.has(E.contentType),
      C = Pp(E),
      M = R ? MAX_ARTIFACT_BYTES : BINARY_FILE_MAX_BYTES;
    if (C > M)
      return d(
        `file ${b(E.path)} is ${Math.ceil(C / 1024 / 1024)}MB (per-file max ${M / 1024 / 1024}MB${R ? "" : " for binary files, which must fit an upload request base64-encoded"})`,
      );
    if (R && typeof E.content !== "string") {
      if (!Buffer.from(E.content.toString("utf8"), "utf8").equals(E.content))
        return o(
          `file ${b(E.path)}: contentType ${b(E.contentType)} ` +
            "is a text type but the Buffer is not valid UTF-8 \u2014 fix the " +
            "encoding, or use a binary contentType",
        );
    }
    if (R && C > yi / 6) {
      let D = Ct(Rn(E));
      if (D > yi)
        return d(
          `file ${b(E.path)} is ${Math.ceil(D / 1024 / 1024)}MB JSON-encoded on the wire (per-request max ${yi / 1024 / 1024}MB) \u2014 ` +
            "heavily escaped text (quotes, backslashes, control characters) inflates when JSON-encoded; split or shrink the file",
        );
    }
    w += C;
  }
  if (w > MANIFEST_TOTAL_BUDGET)
    return d(
      `total content is ${Math.ceil(w / 1024 / 1024)}MB \u2014 a version's ` +
        `files may total at most ${MANIFEST_TOTAL_BUDGET / 1024 / 1024}MB`,
    );
  return null;
}
var Fi =
  "copying files from another artifact is not enabled for this account \u2014 nothing was published; publish with local files instead";
function Mi(e, t, r, o) {
  if (r.length === 0) return null;
  if (t.length + r.length + o.length + (e === null ? 0 : 1) > gr)
    return `This publish lists ${t.length + r.length} ${pluralize(t.length + r.length, "file")} (copies included)${o.length > 0 ? ` and ${o.length} ${pluralize(o.length, "removal")}` : ""}${e === null ? "" : " plus the page"}, which is over the limit of ${gr} entries per version. Publish fewer files per version.`;
  let p = new Set(["index.html", ...t.map((w) => w.path), ...o]),
    _ = new Set();
  for (let w of r) {
    if (!w.path || w.path === "index.html")
      return w.path
        ? e === null
          ? `files must not contain "index.html" \u2014 it is the Artifact type's page and can't be changed here`
          : 'files must not contain "index.html" \u2014 the page argument is the index'
        : "every file needs a non-empty path";
    if (p.has(w.path))
      return `${b(w.path)} is listed more than once in \`files\` (once as a copy from another artifact). List each path once.`;
    if ((p.add(w.path), !ARTIFACT_SLUG_RE.test(w.from.slug) || !w.from.path))
      return `file ${b(w.path)}: its source must name an artifact and a published path`;
    if (w.from.path === "index.html")
      return `file ${b(w.path)}: another artifact's page (index.html) is not a copyable file \u2014 read it and publish your own content`;
    for (let E of [w.path, w.from.path]) {
      let R = getContentTypeForPath(E);
      if (R !== void 0 && MARKUP_CONTENT_TYPES.has(normalizeContentType(R)))
        return `file ${b(w.path)}: an HTML, SVG or XML document cannot be copied from another artifact \u2014 read it with action "read_file" and publish it as your own file`;
    }
    _.add(`${w.from.slug}@${w.from.ver ?? ""}`);
  }
  if (_.size > MAX_COPY_SOURCES)
    return `files copy from ${_.size} source artifact versions; at most ${MAX_COPY_SOURCES} per publish`;
  return null;
}
async function filesOnlyPublishProblem(e, t, r) {
  let o = $i(e, "file");
  if (o !== null) return o.err;
  if (t.length > 0 && !isFrameCopyFromEnabled())
    return (
      logFeatureBad("artifact_publish", "copy_from_flag_off", { n_copied: t.length }),
      Fi
    );
  let d = wr(null, e, [])?.msg ?? Mi(null, e, t, []);
  if (d !== null || r === void 0) return d;
  return (await Li(e, await br(), 0, "file"))?.err ?? null;
}
async function publishInstanceFiles(e, t) {
  if (getArtifactPublishStubDir() !== null)
    return ie(
      "publishing to an Artifact created from an Artifact type is not available in eval stub mode",
    );
  let r = t.copiedFiles ?? [];
  if (!(ne().frozenArtifactTypes?.typesOn ?? isFrameMultiFileEnabled())) {
    let _ = t.removeFiles ?? [];
    return (
      logFeatureBad("artifact_publish", "multifile_flag_off", {
        n_files: e.length + r.length,
        n_removed: _.length,
      }),
      ie(
        "This artifact was created from an artifact type, so it takes supporting files only, and " +
          (_.length > 0
            ? "its files can't be changed from this session. Nothing was published or removed; the artifact is unchanged."
            : "supporting files can't be published from this session. Nothing was published; the artifact is unchanged."),
      )
    );
  }
  if (r.length > 0 && !isFrameCopyFromEnabled())
    return (
      logFeatureBad("artifact_publish", "copy_from_flag_off", { n_copied: r.length }),
      ie(Fi)
    );
  let d = $i(e, "file");
  if (d !== null) return d;
  if (t.verifyWorkshopHtml !== void 0) {
    let _ = await Li(e, await br(), 0, "file");
    if (_ !== null) return _;
  }
  let p = {
    slug: t.slug,
    title: t.title,
    favicon: t.favicon,
    ...(t.label !== void 0 && { label: t.label }),
    ...(t.note !== void 0 && { note: t.note }),
    ...(t.description !== void 0 && { description: t.description }),
    ...(t.publishContext !== void 0 && { publishContext: t.publishContext }),
    ...(t.originMetadata !== void 0 && { originMetadata: t.originMetadata }),
    ...(t.autoEditAttribution && {
      autoEditAttribution: t.autoEditAttribution,
    }),
  };
  return withPublishInFlight(t.ownPublishes, t.slug, () =>
    Ga(
      Ni(
        null,
        e,
        r,
        t.removeFiles ?? [],
        p,
        {},
        {
          baseVersion: t.baseVersion,
          force: t.force,
          ownPublishes: t.ownPublishes,
          tele: {
            t0: performance.now(),
            pageBytes: 0,
            lane: "inline",
            isRedeploy: !0,
            hasCaps: !1,
            template: "plain",
            forced: t.force,
          },
          onRetry: t.onRetry,
          signal: t.signal,
          credentials: t.credentials,
        },
      ),
      t.slug,
      t.credentials,
      t.signal,
    ),
  );
}
async function publishLiveDocVersion(e) {
  if (getArtifactPublishStubDir() !== null) return ie("invalid publish options");
  if (!isFrameMultiFileEnabled())
    return (
      logFeatureBad("artifact_publish", "multifile_flag_off", { n_files: 0, n_removed: 0 }),
      ie("invalid publish options")
    );
  if (![...e.base.values()].some((r) => r.live === !0))
    return ie("invalid publish options");
  let t = {
    slug: e.slug,
    title: e.title,
    favicon: e.favicon,
    ...(e.label !== void 0 && { label: e.label }),
    ...(e.publishContext !== void 0 && { publishContext: e.publishContext }),
  };
  return withPublishInFlight(e.ownPublishes, e.slug, () =>
    Ni(
      null,
      [],
      [],
      [],
      t,
      {},
      {
        baseVersion: e.baseVersion,
        force: !1,
        ownPublishes: e.ownPublishes,
        tele: {
          t0: performance.now(),
          pageBytes: 0,
          lane: "inline",
          isRedeploy: !0,
          hasCaps: !1,
          template: "plain",
          forced: !1,
          liveFilesOn: !0,
        },
        liveFiles: { detach: [], base: e.base },
        onRetry: e.onRetry,
        signal: e.signal,
        credentials: e.credentials,
      },
    ),
  );
}
async function Ni(e, t, r, o, d, p, _) {
  let {
      baseVersion: w,
      force: E,
      tele: R,
      onRetry: C,
      signal: M,
      credentials: D,
    } = _,
    F = _.liveFiles,
    I = F?.detach ?? [],
    N = {
      page_bytes: R.pageBytes,
      lane: fromEnum(R.lane),
      n_files: t.length + r.length,
      n_copied: r.length,
      n_removed: o.length,
      forced: R.forced,
      template: fromEnum(R.template),
      ...gl(d),
    },
    ae = (L) => (logFeatureBad("artifact_publish", "files_invalid", N), ie(L)),
    ue = (L) => (logFeatureBad("artifact_publish", "too_large", N), ie(L)),
    V = e === null || (d.slug !== void 0 && w !== void 0) ? "patch" : "replace";
  if (o.length > 0 && V === "replace")
    return ae(
      d.slug === void 0
        ? "A `null` entry in `files` removes a file from an existing artifact, and a first publish has nothing to remove, so nothing was published. Drop the `null` entries."
        : "A removal applies to the artifact's current version, and this publish didn't name that version (`baseVersion`), so nothing was published. Publish again with the version named, or without the `null` entries.",
    );
  if (F !== void 0 && d.slug !== void 0 && V === "replace")
    return ae("invalid publish options");
  if (F?.page?.reseed === !0 && F.page.live !== void 0)
    return ae("invalid publish options");
  let J =
    I.length > 0 ||
    F?.page?.reseed === !0 ||
    F?.page?.live === !1 ||
    t.some((L) => L.reseed === !0 || L.live === !1);
  if (J && V === "replace") return ae("invalid publish options");
  for (let L of t) {
    if (L.reseed === !0 && L.live !== void 0)
      return ae("invalid publish options");
    if ((L.live === !0 || L.reseed === !0) && normalizeContentType(L.contentType) !== "text/html")
      return ae("invalid publish options");
    let de = F?.base?.get(L.path);
    if (
      F?.base !== void 0 &&
      de?.live !== !0 &&
      (L.reseed === !0 || L.live === !1)
    )
      return ae("invalid publish options");
  }
  for (let L of I)
    if (F?.base !== void 0 && F.base.get(L)?.live !== !0)
      return ae("invalid publish options");
  if (
    F?.base !== void 0 &&
    F.base.get("index.html")?.live !== !0 &&
    (F.page?.reseed === !0 || F.page?.live === !1)
  )
    return ae("invalid publish options");
  for (let L of o)
    if (F?.base?.get(L)?.live === !0) return ae("invalid publish options");
  let U = wr(e, t, [...o, ...I]);
  if (U !== null) return U.kind === "too_large" ? ue(U.msg) : ae(U.msg);
  let te = Mi(e, t, r, [...o, ...I]);
  if (te !== null) return ae(te);
  for (let L of r)
    if (F?.base?.get(L.path)?.live === !0) return ae("invalid publish options");
  let re = (L, de) =>
      V === "patch" &&
      F?.base?.get(L)?.live === !0 &&
      de.reseed !== !0 &&
      de.live !== !1,
    ce =
      J ||
      F?.page?.live === !0 ||
      t.some((L) => L.live === !0) ||
      [...(F?.base?.values() ?? [])].some((L) => L.live),
    q = (L, de, ee) => {
      let xe = V === "patch" && ce ? F?.base?.get(L) : void 0;
      return (
        xe !== void 0 &&
        !xe.live &&
        xe.sha256 !== void 0 &&
        xe.contentType === ee &&
        xe.sha256 === hashSha256(de)
      );
    },
    ge = [],
    pe = F?.page ?? {},
    Le = e !== null && pe.live === !1,
    Ge = Le ? ["index.html", ...I] : I,
    Te;
  if (re("index.html", pe)) ge.push("index.html");
  else if (
    e !== null &&
    !Le &&
    !(pe.live === void 0 && pe.reseed !== !0 && q("index.html", e, "text/html"))
  )
    Te = {
      content: e,
      contentType: "text/html",
      ...(pe.live !== void 0 && { live: pe.live }),
      ...(pe.reseed === !0 && { reseed: !0 }),
    };
  let Me = Object.create(null);
  if (Te !== void 0) Me["index.html"] = Te;
  let De = [],
    Ne = Te?.content !== void 0 ? Ct(Te.content) : 0,
    le = Aa(d.thumbnail) + Aa(d.thumbnailDark),
    he = Si - Ne - le,
    Ce = (L) =>
      !re(L.path, L) && (L.live === !0 || L.reseed === !0 || L.live === !1),
    Be = Object.create(null);
  for (let L of t.filter(Ce)) {
    let de = Rn(L),
      ee = Ct(de);
    if (ee > he) {
      let xe = Si - Ne - he;
      return ue("file too large");
    }
    ((he -= ee),
      (Be[L.path] = {
        content: de,
        contentType: L.contentType,
        ...(L.live !== void 0 && { live: L.live }),
        ...(L.reseed === !0 && { reseed: !0 }),
      }),
      (Me[L.path] = Be[L.path]));
  }
  let He = [];
  for (let L of t) {
    if (Ce(L)) continue;
    if (re(L.path, L)) {
      ge.push(L.path);
      continue;
    }
    if (L.live === void 0 && q(L.path, L.content, L.contentType)) continue;
    He.push(L);
  }
  for (let L of He) {
    let de = Rn(L),
      ee = Ct(de);
    if (ee <= he)
      ((he -= ee), (Me[L.path] = { content: de, contentType: L.contentType }));
    else {
      let xe = hashSha256(L.content);
      (De.push({ f: L, sha: xe, wire: de }),
        (Me[L.path] = { sha256: xe, contentType: L.contentType }));
    }
  }
  for (let L of o) Me[L] = null;
  for (let L of Ge) Me[L] = { live: !1 };
  let Ue = {
      liveKey:
        Ge.length > 0 ||
        Object.keys(Be).length > 0 ||
        Te?.live !== void 0 ||
        Te?.reseed === !0,
      emptyPatch: ce && Object.keys(Me).length === 0 && r.length === 0,
    },
    Je,
    _e = (L) => (Je = L),
    je = (L) => fl(() => vi("/api/frame/deploy/direct", L, D, _e), C, M, N),
    Lt = { ...La(d), ...Ja(), ...Za(), ...p },
    Ft = 15728640,
    wt = [];
  {
    let L = [],
      de = 0;
    for (let ee of De) {
      let xe = Ct(ee.wire);
      if (L.length > 0 && de + xe > Ft) (wt.push(L), (L = []), (de = 0));
      (L.push(ee), (de += xe));
    }
    if (L.length > 0) wt.push(L);
  }
  let mt = async (L) => {
      let de = parseRetryAfterHeader(L) ?? 2000;
      if ((await sleep(Math.min(de, 30000), M), M?.aborted))
        return (n("[artifact] 429 retry cancelled by user"), !1);
      return !0;
    },
    Et = (L) => {
      let de = L.fromFrame && L.status === 429 ? An(L.data) : void 0;
      if (de)
        logFeatureBad("artifact_publish", "publish_cap_reached", {
          ...N,
          cap_type: fromEnum(de.capType),
        });
      return de;
    },
    tt = r.map((L) => ({ c: L })),
    Rt = [],
    Tt = (L) =>
      "c" in L
        ? {
            path: L.c.path,
            from: {
              slug: L.c.from.slug,
              path: L.c.from.path,
              ...(L.c.from.ver !== void 0 && { ver: L.c.from.ver }),
            },
          }
        : { path: L.f.path, content: L.wire, contentType: L.f.contentType },
    Nt = async (L, de) => {
      let ee = () =>
          vi("/api/frame/upload", { slug: L, files: de.map(Tt) }, D, _e),
        xe = await ur(ee);
      if (
        xe.ok &&
        xe.fromFrame &&
        xe.status === 429 &&
        An(xe.data) === void 0 &&
        (await mt(xe.response?.headers?.["retry-after"]))
      )
        xe = await ur(ee);
      return xe;
    },
    It = (L, de, ee) => {
      if (de) n(`[artifact] manifest publish refused (HTTP ${L}): ${errBody(de)}`);
      let xe = ee?.maybeGone
        ? ", or the artifact no longer exists or isn't yours to update"
        : "";
      if (o.length > 0)
        return ie(
          `The server didn't accept this update's file changes (HTTP ${L})${xe}. Nothing was published or removed; the artifact is unchanged. Publishing the page on its own (omitting \`files\`) would update the page but can't remove a file.${ee?.debris ?? ""}`,
        );
      let st = ee?.debris
        ? " This publish didn't finish."
        : d.slug !== void 0
          ? " Nothing was published; the artifact is unchanged."
          : " Nothing was published.";
      return ie(
        `The server didn't accept this publish's supporting files (HTTP ${L})${xe}.${st} Publish the page as a single file instead: inline what it needs and omit \`files\`.${ee?.debris ?? ""}`,
      );
    },
    Ee = "",
    Dt = (L) =>
      ` (A slug was reserved for it: publish again to slug ${L} rather than publishing fresh.)`,
    Qe = () => ie(`publish cancelled \u2014 nothing more was sent.${Ee}`);
  try {
    let L = d.slug,
      de,
      ee,
      xe = !1,
      st = !1;
    if (He.length > 0 || tt.length > 0) {
      let ve = He.map((et) => ({ f: et, sha: hashSha256(et.content), wire: Rn(et) })),
        Re = async (et, We) => {
          let en = () =>
              Nd.post(
                "/api/frame/deploy/prepare",
                {
                  ...(et !== void 0 && { slug: et }),
                  ...(We.length > 0 && { shas: We }),
                },
                {
                  refreshOAuth: !0,
                  headers: Fd(),
                  timeout: 30000,
                  credentials: D,
                },
              ),
            ct = await ur(en);
          if (
            ct.ok &&
            ct.fromFrame &&
            ct.status === 429 &&
            An(ct.data) === void 0 &&
            (await mt(ct.response?.headers?.["retry-after"]))
          )
            ct = await ur(en);
          return ct;
        },
        qe = (et) =>
          typeof et?.slug === "string" && ARTIFACT_SLUG_RE.test(et.slug) ? et.slug : void 0,
        Ae,
        nt = "";
      for (let et = 0; et < 2; et++) {
        if (M?.aborted) return Qe();
        let We = await Re(
          L,
          ve.map((be) => be.sha),
        );
        if (M?.aborted) {
          let be =
            Ee === "" && L === void 0 && We.ok && We.status === 200
              ? qe(We.data)
              : void 0;
          if (be !== void 0) Ee = Dt(be);
          return Qe();
        }
        if (!We.ok) {
          Ae = {
            status: 0,
            why:
              We.reason === "no-auth"
                ? Am(We.detail)
                : `preflight unavailable: ${We.reason}`,
          };
          break;
        }
        if (We.status === 404) {
          if (hoe(We.data))
            return (
              logFeatureBad("artifact_publish", "prepare_not_found", N),
              {
                ...ie(
                  "the server does not recognize this artifact for updating (it may no longer exist or may not be yours to update). The files were NOT published.",
                ),
                ...(d.slug !== void 0 && { gone: !0 }),
              }
            );
          Ae = { status: 404, why: "the preflight route answered 404" };
          break;
        }
        let en = Et(We);
        if (en)
          return ie(
            Ee
              ? `${en.message} \u2014 this publish didn't finish; try again after the reset.${Ee}`
              : `${en.message} \u2014 nothing was published; try again after the reset.`,
          );
        if (We.status !== 200) {
          Ae = {
            status: We.status,
            why: We.fromFrame
              ? `preflight ${We.status}: ${errBody(We.data)}`
              : `preflight relay HTTP ${We.status}`,
          };
          break;
        }
        let ct = qe(We.data),
          Tr = We.data?.missing;
        if (
          ct === void 0 ||
          !Array.isArray(Tr) ||
          !Tr.every((be) => typeof be === "string" && /^[0-9a-f]{64}$/.test(be))
        ) {
          Ae = { status: 200, why: "a malformed preflight answer" };
          break;
        }
        if (L !== void 0 && ct !== L)
          return (
            logFeatureBad("artifact_publish", "prepare_slug_mismatch", N),
            ie(
              "the server answered the upload preflight for a different " +
                "artifact \u2014 not publishing.",
            )
          );
        if (((st = !0), (L = ct), d.slug === void 0)) Ee = Dt(L);
        let ic = new Set(Tr),
          sc = ve.filter((be) => ic.has(be.sha)),
          Pr = [];
        {
          let be = [],
            Ve = 0;
          for (let kt of sc) {
            let tn = Ct(kt.wire);
            if (be.length > 0 && Ve + tn > Ft)
              (Pr.push(be), (be = []), (Ve = 0));
            (be.push(kt), (Ve += tn));
          }
          if (be.length > 0) Pr.push(be);
        }
        for (let be of Pr) {
          if (M?.aborted) return Qe();
          let Ve = await Nt(L, be);
          if (!Ve.ok)
            return (
              logFeatureBad("artifact_publish", Ve.reason, N),
              ie(
                Ve.reason === "no-auth"
                  ? Am(Ve.detail) + Ee
                  : `upload unavailable: ${Ve.reason}. The publish was NOT completed; retry publishing to slug ${L}.`,
              )
            );
          if (Ve.status !== 200) {
            let kt = Et(Ve);
            if (kt)
              return ie(
                `${kt.message} \u2014 this publish didn't finish. ` +
                  `Publish again to slug ${L} after the reset.`,
              );
            return (
              logFeatureBad(
                "artifact_publish",
                Ve.fromFrame
                  ? "prepare_upload_failed"
                  : "prepare_upload_relay_error",
                { ...N, upload_status: Ve.status },
              ),
              ie(
                (Ve.fromFrame
                  ? `file upload ${Ve.status} after the preflight: ${errBody(Ve.data)}`
                  : `file upload failed after the preflight (relay HTTP ${Ve.status})`) +
                  ` \u2014 the publish was NOT completed. Retry publishing to slug ${L}.`,
              )
            );
          }
        }
        if (tt.length > 0) {
          if (M?.aborted) return Qe();
          let be = await Nt(L, tt);
          if (!be.ok)
            return (
              logFeatureBad("artifact_publish", be.reason, N),
              ie(
                be.reason === "no-auth"
                  ? Am(be.detail) + Ee
                  : `copying files from another artifact unavailable: ${be.reason}. The publish was NOT completed; retry publishing to slug ${L}.`,
              )
            );
          if (be.status !== 200) {
            let Ke = Et(be);
            if (Ke)
              return ie(
                `${Ke.message} \u2014 this publish didn't finish. Publish again to slug ${L} after the reset.`,
              );
            logFeatureBad(
              "artifact_publish",
              be.fromFrame ? "copy_upload_failed" : "copy_upload_relay_error",
              { ...N, upload_status: be.status },
            );
            let nn = errBody(be.data),
              dt = /^files\[(\d+)\]: (.*)$/.exec(nn),
              Mn = dt !== null ? tt[Number(dt[1])]?.c : void 0,
              is = dt !== null ? dt[2] : nn;
            return ie(
              (be.fromFrame
                ? Mn !== void 0
                  ? `copying ${b(Mn.path)} from artifact ${Mn.from.slug} (${b(Mn.from.path)}) was refused (${be.status}: ${is})${/not found/.test(is) ? " \u2014 a source Artifact that does not exist, that this account cannot open, or that is in another organization all answer alike" : ""}`
                  : be.status === 404
                    ? "the server does not recognize this artifact for staging copied files (it may no longer exist, may not be yours to update, or copying is not enabled on this path)"
                    : `staging the copied files was refused (${be.status}: ${nn})`
                : `staging the copied files failed (relay HTTP ${be.status})`) +
                ` \u2014 the publish was NOT completed. Retry publishing to slug ${L} once the cause is fixed.`,
            );
          }
          let Ve = () =>
              ie(
                `the server staged the copied files but its answer was incomplete, so nothing was published \u2014 retry publishing to slug ${L}.${Ee}`,
              ),
            kt = be.data?.files;
          if (!Array.isArray(kt) || kt.length !== tt.length)
            return (logFeatureBad("artifact_publish", "copy_echo_malformed", N), Ve());
          for (let [Ke, nn] of tt.entries()) {
            let dt = kt[Ke];
            if (
              typeof dt?.sha256 !== "string" ||
              !/^[0-9a-f]{64}$/.test(dt.sha256) ||
              typeof dt.contentType !== "string" ||
              !hl.has(dt.contentType)
            )
              return (logFeatureBad("artifact_publish", "copy_echo_malformed", N), Ve());
            ((nn.sha = dt.sha256), (nn.contentType = dt.contentType));
          }
          if (
            ((Rt = tt
              .filter((Ke) => isRenderableOrExecutableContentType(Ke.contentType ?? ""))
              .map((Ke) => `${Ke.c.path} (${Ke.contentType})`)),
            _.workshopSurface && Rt.length > 0)
          )
            return (
              logFeatureBad("artifact_publish", "copy_refused_sidecar", N),
              ie(
                `workshop pages cannot ship renderable or executable sidecar files \u2014 each is a URL that bypasses the publish-time verifier: ${sanitizeInvisibleCharacters(Rt.join(", "))} (copied). Nothing was published.${Ee}`,
              )
            );
          let tn = tt.filter((Ke) => MARKUP_CONTENT_TYPES.has(normalizeContentType(Ke.contentType ?? "")));
          if (tn.length > 0)
            return (
              logFeatureBad("artifact_publish", "copy_refused_document", N),
              ie(
                `copied file ${b(tn[0].c.path)} is ${tn[0].contentType}: a page, SVG or XML document cannot be copied from another artifact into a publish (its content must pass this tool's checks, which a server-side copy skips) \u2014 read it with action "read_file" and publish it from the local copy instead. Nothing was published.${Ee}`,
              )
            );
          let rs = (Ke) => EXECUTABLE_CONTENT_TYPES.has(normalizeContentType(getContentTypeForPath(Ke) ?? "")),
            Or =
              e === null
                ? tt.find(
                    (Ke) =>
                      EXECUTABLE_CONTENT_TYPES.has(normalizeContentType(Ke.contentType ?? "")) &&
                      !rs(Ke.c.path) &&
                      !rs(Ke.c.from.path),
                  )
                : void 0;
          if (Or !== void 0)
            return (
              logFeatureBad("artifact_publish", "copy_refused_script", N),
              ie(
                `copied file ${b(Or.c.path)} is ${Or.contentType}: a script its source stores under a name that does not say so cannot be copied into an artifact made from a type (the approval counted it as data) \u2014 copy it to a path with a script extension, or read it with action "read_file" and publish it from the local copy instead. Nothing was published.${Ee}`,
              )
            );
        }
        if (M?.aborted) return Qe();
        let Ht = Object.create(null);
        if (Te !== void 0) Ht["index.html"] = Te;
        for (let [be, Ve] of Object.entries(Be)) Ht[be] = Ve;
        for (let be of ve)
          Ht[be.f.path] = { sha256: be.sha, contentType: be.f.contentType };
        for (let be of tt)
          Ht[be.c.path] = { sha256: be.sha, contentType: be.contentType };
        for (let be of o) Ht[be] = null;
        for (let be of Ge) Ht[be] = { live: !1 };
        let ut = await je({
          ...Lt,
          slug: L,
          ...(E && { force: !0 }),
          ...(w && { baseVersion: w }),
          manifest: Ht,
          mode: V,
        });
        if (
          ut.ok &&
          ut.fromFrame &&
          ut.status === 422 &&
          et === 0 &&
          !_l(ut.data) &&
          kr(ut.data) === void 0 &&
          !(Ue.liveKey && typeof ut.data === "string")
        ) {
          nt = errBody(ut.data);
          continue;
        }
        if (ut.ok && ut.status === 200 && !ut.data?.version)
          return (
            logFeatureBad("artifact_publish", "prepare_no_version", N),
            ie(En() + Ee)
          );
        ((ee = ut), (xe = !0));
        break;
      }
      if (tt.length > 0 && !xe && !st)
        return (
          logFeatureBad("artifact_publish", "copy_no_preflight", {
            ...N,
            prepare_status: Ae?.status ?? 0,
          }),
          ie(
            `copying files from another artifact needs the upload preflight, which was unavailable here (${Ae?.why ?? "no answer"}) \u2014 nothing was published.${Ee}`,
          )
        );
      if (st && !xe)
        return (
          logFeatureBad("artifact_publish", "prepare_rerun_failed", {
            ...N,
            prepare_status: Ae?.status ?? 0,
          }),
          ie(
            `the deploy was refused (422: ${nt}), and re-checking with the server before re-sending failed (${Ae?.why ?? "no answer"}) \u2014 the publish was NOT ` +
              `completed. Retry publishing to slug ${L}.`,
          )
        );
    }
    let Ye,
      Bt = [],
      ln = {};
    if (!xe && De.length > 0 && !L) {
      let ve = Object.create(null);
      for (let [Ae, nt] of Object.entries(Me))
        if (nt !== null && "content" in nt && nt.content !== void 0)
          ve[Ae] = nt;
      if (M?.aborted) return Qe();
      let Re = await je({
        ...Lt,
        ...(E && { force: !0 }),
        manifest: ve,
        mode: "replace",
      });
      if (!Re.ok)
        return (
          logFeatureBad("artifact_publish", Re.reason, N),
          ie(`publish unavailable: ${Re.reason}`)
        );
      if (!Re.fromFrame)
        return (
          logFeatureBad("artifact_publish", "relay_error", {
            ...N,
            deploy_status: Re.status,
          }),
          ie(Ri(Re.status))
        );
      if (Re.status === 400 || Re.status === 404) {
        let Ae = Jt(Re.data);
        if (Re.status === 400 && Ta(Ae, Ue))
          return (
            logFeatureBad("artifact_publish", "live_files_unsupported", N),
            ie(Ra(Ae, Ue.emptyPatch))
          );
        if (Re.status === 404 || (hr.test(Ae) && Sa.test(Ae)))
          return (
            logFeatureBad("artifact_publish", "multifile_unsupported", N),
            It(Re.status, Ae)
          );
      }
      if (Re.status !== 200) {
        let Ae = Ti(
          Re.status,
          Re.data,
          R.isRedeploy,
          R.echoedPin !== void 0
            ? { pin: R.echoedPin, declaredCaps: R.hasCaps }
            : void 0,
          R.liveFilesOn === !0,
        );
        if (Ae.code !== "thumbnail_rejected")
          logFeatureBad("artifact_publish", Ae.code ?? "deploy_failed", {
            ...N,
            deploy_status: Re.status,
            ...Ae.extra,
          });
        return Ei(Ae, `deploy ${Re.status}: ${errBody(Re.data)}`);
      }
      let qe = Ai().safeParse(Re.data);
      if (!qe.success)
        return (logFeatureBad("artifact_publish", "deploy_incomplete", N), ie(En()));
      ((L = qe.data.slug),
        (de = qe.data.version),
        (Ye = ki(Re.data)),
        (Bt = wi(Re.data)),
        (ln = {
          contract: qe.data.contract,
          preferredContract: qe.data.preferredContract,
          capabilities: qe.data.capabilities,
        }),
        recordOwnPublish(_.ownPublishes, L, de),
        (Ee = ` (The artifact was created with its inline files: to add the remaining files, fix the problem and publish again to slug ${L}.)`));
    }
    if (!xe && De.length > 0) {
      if (L === void 0)
        return (
          logFeatureBad("artifact_publish", "deploy_incomplete", N),
          ie("internal: no slug available for staged upload")
        );
      let ve = new Set();
      for (let qe of wt) {
        if (M?.aborted) return Qe();
        let Ae = await Nt(L, qe);
        if (!Ae.ok)
          return (
            logFeatureBad("artifact_publish", Ae.reason, N),
            ie(`upload unavailable: ${Ae.reason}.${Ee}`)
          );
        if (Ae.status === 404)
          return (
            logFeatureBad("artifact_publish", "multifile_unsupported", N),
            It(404, "", { maybeGone: d.slug !== void 0, debris: Ee })
          );
        if (Ae.status !== 200) {
          let nt = Et(Ae);
          if (nt)
            return ie(`${nt.message} \u2014 try again after the reset.${Ee}`);
          return (
            logFeatureBad(
              "artifact_publish",
              Ae.fromFrame ? "upload_failed" : "upload_relay_error",
              { ...N, upload_status: Ae.status },
            ),
            ie(
              Ae.fromFrame
                ? `file upload ${Ae.status}: ${errBody(Ae.data)}.${Ee}`
                : `file upload failed (relay HTTP ${Ae.status}).${Ee}`,
            )
          );
        }
        for (let nt of Ae.data?.files ?? []) if (nt.sha256) ve.add(nt.sha256);
      }
      let Re = De.filter((qe) => !ve.has(qe.sha));
      if (Re.length > 0)
        return (
          logFeatureBad("artifact_publish", "upload_hash_mismatch", N),
          ie(
            `file upload did not stage ${Re.length} file(s) under the ` +
              "expected content hash \u2014 not publishing a manifest that would " +
              `reference unstaged content.${Ee}`,
          )
        );
    }
    if (!xe && De.length > 0 && de !== void 0) {
      let ve = Object.create(null);
      for (let Re of De) {
        let qe = { sha256: Re.sha, contentType: Re.f.contentType };
        ((Me[Re.f.path] = qe), (ve[Re.f.path] = qe));
      }
      if (M?.aborted) return Qe();
      ee = await je({
        ...Lt,
        slug: L,
        manifest: ve,
        mode: "patch",
        baseVersion: de,
      });
    } else if (!xe) {
      if (M?.aborted) return Qe();
      ee = await je({
        ...Lt,
        ...(L && { slug: L }),
        ...(E && { force: !0 }),
        ...(w && { baseVersion: w }),
        manifest: Me,
        mode: V,
      });
    }
    if (ee === void 0)
      return (
        logFeatureBad("artifact_publish", "deploy_incomplete", N),
        ie("internal: publish flow completed without a deploy")
      );
    if (!ee.ok)
      return (
        logFeatureBad("artifact_publish", ee.reason, N),
        ie(
          (ee.reason === "no-auth"
            ? Am(ee.detail)
            : `publish unavailable: ${ee.reason}`) + Ee,
        )
      );
    if (!ee.fromFrame)
      return (
        logFeatureBad("artifact_publish", "relay_error", {
          ...N,
          deploy_status: ee.status,
        }),
        ie(Ri(ee.status) + Ee)
      );
    if (ee.status === 400 || ee.status === 404) {
      let ve = Jt(ee.data);
      if (ee.status === 400 && Ta(ve, Ue))
        return (
          logFeatureBad("artifact_publish", "live_files_unsupported", N),
          ie(Ra(ve, Ue.emptyPatch) + Ee)
        );
      if (ee.status === 404 || (hr.test(ve) && Sa.test(ve)))
        return (
          logFeatureBad("artifact_publish", "multifile_unsupported", N),
          It(ee.status, ve, {
            maybeGone: ee.status === 404 && d.slug !== void 0,
            debris: Ee,
          })
        );
    }
    if (
      (w !== void 0 || de !== void 0 || (isFrameBaseVersionEnabled() && !isArtifactConflictLegacy())) &&
      ee.status === 409
    ) {
      let ve = yl(ee.data);
      if (ve)
        return (
          logFeatureBad("artifact_publish", "conflict", N),
          {
            url: null,
            slug: null,
            version: null,
            err: bl(ve) + Ee,
            conflict: !0,
            conflictDetail: ve,
          }
        );
    }
    if (ee.status !== 200) {
      let ve = Ti(
        ee.status,
        ee.data,
        R.isRedeploy,
        R.echoedPin !== void 0
          ? { pin: R.echoedPin, declaredCaps: R.hasCaps }
          : void 0,
        R.liveFilesOn === !0,
      );
      if (ve.code !== "thumbnail_rejected")
        logFeatureBad("artifact_publish", ve.code ?? "deploy_failed", {
          ...N,
          deploy_status: ee.status,
          ...ve.extra,
        });
      let Re = ve.code === "path_is_live" ? kl(ee.data) : void 0;
      return {
        ...Ei(ve, `deploy ${ee.status}: ${errBody(ee.data)}`, Ee),
        ...(Re !== void 0 && { refusedLivePath: Re }),
        ...(d.slug === void 0 &&
          L !== void 0 &&
          de !== void 0 && { created: { slug: L, version: de } }),
      };
    }
    let at = Ai().safeParse(ee.data);
    if (!at.success)
      return (logFeatureBad("artifact_publish", "deploy_incomplete", N), ie(En() + Ee));
    let { slug: ze, version: jt, read: cn, shared: $n, kind: Fn } = at.data;
    if (L && ze !== L)
      return (logFeatureBad("artifact_publish", "deploy_slug_mismatch", N), ie(xi() + Ee));
    let lt = Ya(ee.data),
      un = lt?.map((ve) => ve.path),
      Er = (un ?? []).filter(
        (ve) => (ve === "index.html" ? Te : Be[ve])?.live === !0,
      ),
      tc = (un ?? []).filter(
        (ve) => (ve === "index.html" ? Te : Be[ve])?.reseed === !0,
      ),
      es = dedupe([
        ...Bt,
        ...wi(ee.data),
        ...Ka(Er),
        ...lp(tc),
        ...up(ge.filter((ve) => ve !== "index.html")),
        ...(Le ? ap() : []),
        ...cp(
          I,
          Object.keys(Be).filter((ve) => Be[ve]?.live === !1),
        ),
        ...qa(
          un?.filter((ve) => !ge.includes(ve)),
          new Set([...Object.keys(Me), ...r.map((ve) => ve.path)]),
        ),
      ]).slice(0, mr),
      nc = ge.includes("index.html"),
      ts = ki(ee.data) ?? Ye,
      Rr = sl(ee.response?.headers?.[il]),
      rc = ol(ee.response?.headers?.date);
    (recordOwnPublish(_.ownPublishes, ze, jt),
      logFeatureOk("artifact_publish", {
        ...N,
        e2e_ms: Math.round(performance.now() - R.t0),
        is_redeploy: R.isRedeploy,
        has_caps: R.hasCaps,
        push_remaining_seen: Rr !== void 0,
        staged_files: De.length,
      }));
    let ns = e === null ? splitManifestPaths(ee.data) : void 0;
    return {
      url: artifactViewerUrl(ze),
      slug: ze,
      version: jt,
      err: null,
      ...(Rr !== void 0 && { pushRemaining: Rr, pushResetAt: rc }),
      ...(_.workshopSurface && { workshopSurface: !0 }),
      ...(_.tele.workshopInfo && { workshop: _.tele.workshopInfo }),
      ...(Rt.length > 0 && { refusedClassSidecarTypes: Rt }),
      ...(cn !== void 0 && { read: cn }),
      ...($n !== void 0 && { shared: $n }),
      ...ml(at.data.contract !== void 0 ? at.data : { ...at.data, ...ln }, p),
      ...(Fn !== void 0 && { kind: Fn }),
      ...(es.length > 0 && { warnings: es }),
      ...(ts !== void 0 && { embeds: ts }),
      ...(ns !== void 0 && { manifestPaths: ns }),
      ...(un !== void 0 && { livePaths: un }),
      ...(lt !== void 0 && { liveDocs: lt }),
      ...(Er.length > 0 && { bornLive: Er }),
      ...(nc && { pageCarriedLive: !0 }),
    };
  } catch (L) {
    return (
      logFeatureBad(
        "artifact_publish",
        L instanceof yr ? "relay_request_error" : "request_error",
        { ...N, ...dl(L, R.t0), ...Je },
      ),
      ie((L instanceof Error ? L.message : String(L)) + Ee)
    );
  }
}
function artifactViewerUrl(e) {
  return new URL(artifactViewerPath(e), YZe() ?? getOauthConfig().CLAUDE_AI_ORIGIN).toString();
}
var ARTIFACT_LIST_RELS = ["mine", "shared"];
function isKnownRel(e) {
  return ARTIFACT_LIST_RELS.includes(e);
}
var ARTIFACT_LIST_SCOPES = ["mine", "shared", "all"],
  $p = createLazyValue(() =>
    c({
      frames: v(se()).nullable(),
      starsEnabled: O()
        .optional()
        .catch(void 0),
    }),
  ),
  Lp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
function Fp(e, t) {
  let r = e === "" || (typeof e === "string" && Pt.test(e)) ? e : void 0,
    o = t === "" || (typeof t === "string" && VER_SHAPE.test(t)) ? t : void 0;
  return { read: t === void 0 || o !== void 0 ? r : void 0, shared: o };
}
var Ai = createLazyValue(() =>
  c({
    slug: s().regex(ARTIFACT_SLUG_RE),
    version: s().regex(VER_SHAPE),
    read: se().optional(),
    shared: se().optional(),
    kind: s()
      .regex(Pt)
      .optional()
      .catch(void 0),
    contract: s()
      .regex(Mj)
      .optional()
      .catch(void 0),
    preferredContract: s()
      .regex(Mj)
      .optional()
      .catch(void 0),
    capabilities: fe(s().max(64), se())
      .optional()
      .catch(void 0),
  }).transform(({ read: e, shared: t, ...r }) => ({ ...r, ...Fp(e, t) })),
);
function ml(e, t, r = !1) {
  let o = "contract" in t ? t.contract : void 0,
    d = e.contract ?? o,
    p = e.capabilities,
    _ = yJ(p),
    w = !("capabilities" in t) && _,
    E =
      e.contract !== void 0 && (_ || wD(e.contract) !== null)
        ? {
            contract: e.contract,
            ...(p !== void 0 && {
              capabilities: p,
              ...(w && (r ? { declaredByRoute: !0 } : { carried: !0 })),
            }),
          }
        : void 0;
  return {
    ...(d !== void 0 && { contract: d }),
    ...(e.preferredContract !== void 0 && {
      preferredContract: e.preferredContract,
    }),
    ...(E !== void 0 && { stored: E }),
  };
}
var Mp = createLazyValue(() =>
    c({
      slug: s().regex(ARTIFACT_SLUG_RE),
      title: s().max(4000).optional(),
      favicon: se().optional(),
      rel: s(),
      updatedAt: s()
        .regex(Lp)
        .optional()
        .catch(void 0),
      softDeleted: O().optional(),
      starred: O()
        .optional()
        .catch(void 0),
    }),
  ),
  Ea = 200,
  Np = 4194304;
async function listArtifacts(e, t) {
  let { scope: r = "mine", pins: o = !1, signal: d, credentials: p } = t;
  if (r !== "mine" && isFrameListSharedScopeKilled())
    return (
      logFeatureBad("artifact_list", "scope_disabled"),
      { err: "shared-scope listing is disabled", reason: "scope_disabled" }
    );
  let _;
  for (let F = 0; ; F++) {
    try {
      _ = await Nd.get(`/api/frame/frames?limit=${Ea}`, {
        refreshOAuth: !0,
        headers: Fd(),
        timeout: 15000,
        maxContentLength: Np,
        ...(d && { signal: d }),
        credentials: p,
      });
    } catch (I) {
      if (F === 0 && !d?.aborted) {
        await sleep(300 + Math.random() * 500);
        continue;
      }
      if (!d?.aborted) logFeatureBad("artifact_list", "request_error");
      return {
        err: `artifact listing failed: ${l(I)}`,
        reason: "request_error",
      };
    }
    if (_.ok && _.status >= 500 && F === 0 && !d?.aborted) {
      await sleep(300 + Math.random() * 500);
      continue;
    }
    break;
  }
  if (!_.ok)
    return (
      logFeatureBad("artifact_list", "not_ok"),
      {
        err:
          _.reason === "no-auth"
            ? Am(_.detail)
            : `artifact listing unavailable: ${_.reason}`,
        reason: "not_ok",
      }
    );
  if (!_.fromFrame)
    return (
      logFeatureBad("artifact_list", "relay_error"),
      {
        err: `artifact listing failed (relay HTTP ${_.status})`,
        reason: "relay_error",
      }
    );
  if (_.status < 200 || _.status >= 300) {
    let F = _.status >= 500 ? "http_5xx" : "http_4xx";
    return (
      logFeatureBad("artifact_list", F),
      { err: `artifact listing failed (HTTP ${_.status})`, reason: F }
    );
  }
  let w = $p().safeParse(_.data);
  if (!w.success)
    return (
      logFeatureBad("artifact_list", "malformed_body"),
      {
        err: "artifact listing failed: malformed response",
        reason: "malformed_body",
      }
    );
  let E = w.data.frames ?? [],
    R = w.data.starsEnabled === !0,
    C = [],
    M = 0,
    D = 0;
  for (let F of E) {
    if (C.length >= e) break;
    M++;
    let I = Mp().safeParse(F);
    if (!I.success) {
      D++;
      continue;
    }
    let {
        slug: N,
        title: ae,
        rel: ue,
        updatedAt: V,
        softDeleted: J,
        starred: U,
      } = I.data,
      te = vetForeignFavicon(I.data.favicon);
    if (J === !0 || !isKnownRel(ue)) continue;
    if (r !== "all" && ue !== r) continue;
    let re = yw(ae ?? "") ?? "Untitled";
    C.push({
      title: re,
      url: artifactViewerUrl(N),
      ...(te !== void 0 && ue === "mine" && { favicon: te }),
      ...(V !== void 0 && { updatedAt: V }),
      ...(r !== "mine" && { rel: ue }),
      ...(o && R && U === !0 && { pinned: !0 }),
    });
  }
  if (E.length > 0 && C.length === 0 && D === E.length)
    return (
      logFeatureBad("artifact_list", "all_rows_dropped"),
      {
        err: "artifact listing failed: response rows were unreadable",
        reason: "all_rows_dropped",
      }
    );
  if ((logFeatureOk("artifact_list"), r !== "mine"))
    logFeatureOk(
      r === "shared" ? "artifact_list_scope_shared" : "artifact_list_scope_all",
    );
  return {
    err: null,
    rows: C,
    truncated: (C.length >= e && M < E.length) || E.length >= Ea,
    ...(o && { pinsEnabled: R }),
  };
}
function sidecarHistoryWith(e, t) {
  if (
    t.err !== null ||
    t.refusedClassSidecarTypes === void 0 ||
    t.refusedClassSidecarTypes.length === 0
  )
    return null;
  return { ...(e ?? {}), [t.slug]: t.refusedClassSidecarTypes };
}
function refusedSidecarHistoryFor(e, t) {
  return e?.[t] ?? [];
}
function Ip(e, t) {
  if (e !== void 0 && t === void 0)
    return {
      kind: "contract",
      err: "workshop publish contract violation: redeploys must pass refusedSidecarHistory (the AppState sidecar record for the target slug; [] when none) \u2014 refusing rather than skipping the sidecar-ordering gate",
    };
  if (t !== void 0 && t.length > 0)
    return {
      kind: "priors",
      err:
        `this artifact was previously published with renderable or executable sidecar files (${sanitizeInvisibleCharacters(t.join(", "))}) \u2014 those URLs would remain addressable beside the workshop page. ` +
        "Publish the workshop to a new artifact, or republish this one without workshop surface.",
    };
  return null;
}
function workshopVerifiedSlugsWith(e, t) {
  if (t.err !== null || t.workshopSurface !== !0) return null;
  if ((e ?? []).includes(t.slug)) return null;
  return [...(e ?? []), t.slug];
}
async function publishPlanArtifact(e, t, r, o) {
  let { html: d, title: p, templated: _ } = await fa(e),
    w = await publishArtifact(d, {
      ownPublishes: r,
      title: p,
      favicon: "\uD83D\uDCCB",
      template: "plan",
      injectDiagramRuntime: !0,
      injectHighlightRuntime: _,
      ...(t && { verifyWorkshopHtml: "probe" }),
      credentials: o,
    });
  if (w.err === null) hi(w.slug, "plan");
  return w;
}
var PUBLISH_CONFLICT_LEAD = "conflict: nothing was published \u2014 ",
  FORCE_REFUSED_SENTENCE =
    " The server refuses force:true over a version saved from inside the page; only a publish built on that version is accepted.";
function bl(e) {
  let { readRemedy: t, forceAdvisory: r, contentReadsBlocked: o } = Efe();
  return (
    `${PUBLISH_CONFLICT_LEAD}${conflictSubject(e)} is live and this publish was not built on it. ` +
    (o ?? `Re-read it (${t}), merge your edits on top, then publish again.`) +
    (e.forceRefused ? FORCE_REFUSED_SENTENCE : r)
  );
}
function conflictSubject(e) {
  return (
    `a newer version (${e.live})` +
    (e.liveEntry === "page" || e.liveEntry === "editor"
      ? " saved from inside the page (someone's edits or input on it)"
      : e.liveEntry === "publish"
        ? " published by another session or agent"
        : " published elsewhere (by another session, or by someone saving from the page itself)") +
    (e.createdAt ? ` at ${e.createdAt}` : "")
  );
}
function ie(e) {
  return { url: null, slug: null, version: null, err: e };
}
function Ii(e, t) {
  if (
    e !== 503 ||
    !t ||
    typeof t !== "object" ||
    !("slug" in t) ||
    typeof t.slug !== "string" ||
    !ARTIFACT_SLUG_RE.test(t.slug)
  )
    return null;
  return {
    slug: t.slug,
    ...("live" in t &&
      typeof t.live === "string" &&
      VER_SHAPE.test(t.live) && { live: t.live }),
    ...("kind" in t &&
      typeof t.kind === "string" &&
      Pt.test(t.kind) && { kind: t.kind }),
  };
}
function Xt(e, t, r, o) {
  if (!t) return e;
  let d =
    o === "answered"
      ? ", and the automatic retry did not repair it"
      : o === "unknown"
        ? "; the automatic retry was sent but got no answer, so it may or may not have repaired it"
        : "";
  if (!r)
    return e.conflict
      ? e
      : {
          ...e,
          err: `${e.err} \u2014 the new version was recorded but its content was not stored${d}.`,
          ...(t.live !== void 0 && { liveVersion: e.liveVersion ?? t.live }),
        };
  let p = artifactViewerUrl(t.slug);
  if (t.kind !== void 0)
    return {
      ...e,
      err: `${e.err} \u2014 the server created ${p} but could not store its content, and that artifact cannot be published over: publishing again creates a new one.`,
    };
  return {
    ...e,
    err: e.conflict
      ? `${e.err} \u2014 ${p} is the artifact this publish's first attempt created without storing its content.`
      : `${e.err} \u2014 the server created ${p} but could not store its content${d}.`,
    strandedSlug: t.slug,
    ...(!e.conflict &&
      (e.liveVersion ?? t.live) !== void 0 && {
        liveVersion: e.liveVersion ?? t.live,
      }),
  };
}
function Dp(e) {
  return rt(e, 8, (o) => {
    switch (o.kind) {
      case "not_object":
        return `capabilities.mcp must be an object of the form {"servers": [${'{"server": "<connector name>", "tools": ["<tool name>", ...]}'}]} \u2014 not an array, a string, or any other shape; ${'to publish without connector access leave "mcp" out of capabilities (pass capabilities: {} to clear a stored declaration)'}`;
      case "no_servers":
        return `capabilities.mcp declares no servers \u2014 put one ${'{"server": "<connector name>", "tools": ["<tool name>", ...]}'} entry under "servers" for each connector the page calls; ${'to publish without connector access leave "mcp" out of capabilities (pass capabilities: {} to clear a stored declaration)'} \u2014 an empty "servers" list is always refused`;
      case "entry_shape":
        return (
          `servers[${o.index}] has no "server" string \u2014 each entry is ${'{"server": "<connector name>", "tools": ["<tool name>", ...]}'}` +
          (o.wrongKey === null
            ? ""
            : ` (the key is "server", not "${Y_(o.wrongKey)}")`)
        );
      case "tools_shape":
        return `${an(o.server)} "${Y_(o.server)}": "tools" must be an array of tool-name strings`;
      case "no_tools": {
        let d = Y_(o.display ?? o.server),
          p = o.display === null ? "" : ` (declared as "${Y_(o.server)}")`,
          _ =
            o.available.length === 0
              ? ""
              : ` (available this session: ${rt([...o.available], 12, (w) => `"${Y_(w)}"`).join(", ")})`;
        return `${an(o.server)} "${d}"${p} lists no tools \u2014 set "tools" to the upstream names of the "${d}" tools the page calls${_}; an empty or omitted "tools" list is refused and never means "all tools"`;
      }
      case "opaque_id":
        return `"${Y_(o.server, { max: 70 })}" is a connector id, which no viewer can resolve \u2014 set "server" to that connector's name exactly as shown in claude.ai (Settings \u2192 Connectors) and pass the same name to callTool/watchTool in the page; if you don't know the name, ask the user, describing the connector by its tools (the user cannot see the id)`;
      case "known_id": {
        let d = Y_(o.display);
        return `"${Y_(o.server)}" is the id of connector "${d}" \u2014 set "server" to "${d}": approval prompts and viewers know connectors by name only, and the page must call it by that name too`;
      }
      case "tool_name":
        return (
          `"${Y_(o.server, { max: 70 })}" is a tool name, not a connector name \u2014 "server" takes the connector's display name` +
          (o.display === null ? "" : `, here "${Y_(o.display)}"`) +
          ', and "tools" takes the bare upstream tool names'
        );
      case "connector_as_host": {
        let d = Y_(o.display);
        return `"${Y_(o.server, { max: 70 })}" names the claude.ai connector "${d}", not a local server \u2014 declare it as {"server": "${d}", "tools": [...]} and call it by that name in the page`;
      }
      case "local_server_as_first_party": {
        let d = Y_(o.local);
        return `"${Y_(o.server, { max: 70 })}" would bind the Claude app's own built-in server, but this session also has an MCP server named "${d}" \u2014 the page may have been built against that server, which no viewer can reach; rename or remove "${d}" (or drop the declaration) and publish again`;
      }
      case "undeclarable_name":
        return `connector "${fqt(o.name)}" cannot be declared until it is renamed in claude.ai (Settings \u2192 Connectors): a manifest "server" must be 1\u201364 characters with no control characters, line breaks, unusual spaces or text-direction controls, must not begin or end with a space or invisible character, and must not read as host: or be shaped like an id or a claude_ai_/mcp__ prefix \u2014 tell the user`;
      case "host_unavailable":
        return `"${Y_(o.server, { max: 70 })}" names a locally-configured MCP server, and host servers aren't available in this session \u2014 declare only claude.ai connectors (set "server" to the connector's display name), or ${'to publish without connector access leave "mcp" out of capabilities (pass capabilities: {} to clear a stored declaration)'}`;
    }
  });
}
function Ei(e, t, r = "") {
  return {
    ...ie((e.msg ?? t) + r),
    ...(e.code === "slug_gone" && { gone: !0 }),
    ...(e.code === "thumbnail_rejected" && { thumbnailRejected: e.msg ?? t }),
  };
}
function compareArtifactVersions(e, t) {
  let r = /^(\d{1,15})-/.exec(e)?.[1],
    o = /^(\d{1,15})-/.exec(t)?.[1];
  return r === void 0 || o === void 0 ? null : Number(r) - Number(o);
}
function yl(e) {
  if (
    !e ||
    typeof e !== "object" ||
    !("conflict" in e) ||
    e.conflict !== !0 ||
    !("live" in e) ||
    typeof e.live !== "string" ||
    !ARTIFACT_VERSION_SAFE_RE.test(e.live) ||
    kr(e) !== void 0
  )
    return null;
  let t = e;
  return {
    live: e.live,
    ...(typeof t.createdAt === "string" &&
      /^[\w:.+ -]{1,40}$/.test(t.createdAt) && { createdAt: t.createdAt }),
    ...((t.liveEntry === "editor" ||
      t.liveEntry === "page" ||
      t.liveEntry === "publish") && { liveEntry: t.liveEntry }),
    ...(t.forceRefused === !0 && { forceRefused: !0 }),
  };
}
function denyPolicyBody(e) {
  if (
    e &&
    typeof e === "object" &&
    "error" in e &&
    typeof e.error === "string" &&
    "reason" in e &&
    typeof e.reason === "string"
  )
    return { error: e.error, reason: e.reason };
  return null;
}
var PUBLISH_DENIED_FRAME = "publish denied: ",
  Bp = [
    "compliance_restricted",
    "org_mismatch",
    "org_toggle_disabled",
    "summon_foreign_sender",
    "user_entitlement_denied",
    "write_gate_disabled",
  ],
  SLUG_GONE_MSG =
    "the artifact you're updating was deleted, or you no longer have write access to it";
function Ri(e) {
  return Tn(`relay HTTP ${e}`);
}
var PUBLISH_OUTCOME_UNKNOWN_FRAME = "publish outcome unknown (";
function Tn(e) {
  return `${PUBLISH_OUTCOME_UNKNOWN_FRAME}${e}) \u2014 it may have published; check the artifact list before publishing again`;
}
var TYPE_FILE_WRITE_REFUSAL = "this file belongs to the artifact's type and can't be changed here";
function _l(e) {
  return Jt(e).includes(TYPE_FILE_WRITE_REFUSAL);
}
var jp =
  " \u2014 this Artifact was created from an Artifact type: its page (index.html) and the type's other files can't be changed on it. Publish only its own files (`file_path` naming one, more in `files`, with this `url`); to change the page, publish a new Artifact instead.";
function Ti(e, t, r, o, d = !1) {
  let p = Up(e, t, d);
  if (p !== void 0) return p;
  if (e === 400) {
    let _ = Jt(t);
    if (
      /^thumbnail/i.test(_.trimStart()) ||
      (hr.test(_) && /["']thumbnail(?:_dark)?["']/.test(_))
    )
      return { code: "thumbnail_rejected", msg: `deploy 400: ${errBody(t)}` };
  }
  if (Ii(e, t)) return { code: "publish_stranded" };
  if (e === 422 && _l(t))
    return {
      code: "type_locked",
      msg: `deploy 422: ${errBody(t)}${ne().frozenArtifactTypes?.typesOn ? jp : ""}`,
    };
  if (e === 422 && o !== void 0)
    return {
      code: "contract_echo_rejected",
      extra: { echo_declared_caps: o.declaredCaps },
      msg:
        `deploy ${e}: ${errBody(t)} \u2014 this republish echoed the artifact's stored ` +
        `contract pin (${o.pin}). If the reason above says the pin was yanked, pass contract: 'latest' to move the artifact to the current contract (this changes the page's runtime semantics). If the reason concerns the capability declaration ` +
        "itself, fix the declaration instead \u2014 upgrading will not " +
        "resolve it.",
    };
  if (e === 403) {
    let _ = denyPolicyBody(t);
    if (_) {
      let w = Bp.find((R) => R === _.reason),
        E = w ? fromEnum(w) : void 0;
      return {
        code: "publish_denied",
        ...(E && { extra: { deny_reason: E } }),
        msg: PUBLISH_DENIED_FRAME + scrubServerLine(_.error, 300),
      };
    }
  }
  if (e === 404 && r && hoe(t)) return { code: "slug_gone", msg: SLUG_GONE_MSG };
  if (e === 429) {
    let _ = An(t);
    if (_)
      return {
        code: "publish_cap_reached",
        extra: { cap_type: fromEnum(_.capType) },
        msg: `${_.message} \u2014 try again after the reset.`,
      };
  }
  return {};
}
function kr(e) {
  if (typeof e === "string") return wl.exec(e.trimEnd())?.[1];
  if (e === null || typeof e !== "object" || !("reason" in e)) return;
  let t = e.reason;
  return typeof t === "string" && Pt.test(t) ? t : void 0;
}
var wl = new RegExp(` \\[(${io})\\]$`);
function kl(e) {
  if (e === null || typeof e !== "object" || !("path" in e)) return;
  let t = e.path;
  return typeof t === "string" && bn.test(t) ? t : void 0;
}
function Hp(e) {
  if (e === null || typeof e !== "object" || !("max" in e)) return;
  let t = e.max;
  return typeof t === "number" && Number.isSafeInteger(t) && t > 0 ? t : void 0;
}
function Up(e, t, r) {
  let o = kr(t);
  if (e === 409 && o === "path_is_live")
    return { code: "path_is_live", msg: `deploy 409: ${errBody(t)}` };
  if (e === 422 && o === "one_live_path")
    return { code: "one_live_path", msg: `deploy 422: ${errBody(t)}` };
  if (e === 422 && o === "live_path_cap") {
    let d = Hp(t);
    return { code: "live_path_cap", msg: `deploy 422: ${errBody(t)}` };
  }
  if (e === 422 && o === "live_path_delete")
    return { code: "live_path_delete", msg: `deploy 422: ${errBody(t)}` };
  if (e === 422 && o === "render_over_budget")
    return { code: "live_over_budget", msg: `deploy 422: ${errBody(t)}` };
  if (e === 422 && o === "render_unavailable")
    return { code: "render_unavailable", msg: `deploy 422: ${errBody(t)}` };
  if (e === 422 && o === "live_over_budget")
    return {
      code: "live_over_budget",
      msg:
        typeof t === "string"
          ? `deploy 422: ${scrubServerLine(t.trimEnd().replace(wl, ""), 500)}`
          : `deploy 422: ${errBody(t)}`,
    };
  if (e === 422 && typeof t === "string" && zp.test(t))
    return { code: "live_over_budget", msg: `deploy 422: ${scrubServerLine(t, 500)}` };
  if (e === 503 && o === "render_busy")
    return { code: "render_busy", msg: `deploy 503: ${errBody(t)}` };
  return;
}
var zp = /exceeds the live-editing budget/;
function Ra(e, t) {
  return `deploy 400: ${scrubServerLine(e, 200)}`;
}
function Ta(e, t) {
  return (t.liveKey && Cp.test(e)) || (t.emptyPatch && Op.test(e));
}
function errBody(e) {
  return scrubServerLine(Jt(e), 200);
}
function Jt(e) {
  if (typeof e === "string") return e;
  if (e && typeof e === "object") {
    if ("error" in e && typeof e.error === "string") {
      let t =
        "reason" in e && typeof e.reason === "string" ? ` [${e.reason}]` : "";
      return e.error + t;
    }
    return b(e) ?? "";
  }
  return "";
}
function getShareEntry(e) {
  return ne().shareStatus.bySlug.get(e);
}
function storedGrantObserved(e) {
  return (
    e !== void 0 && (e.capabilities !== void 0 || e.lastCapsIssuedAt !== void 0)
  );
}
function getShareEntryForPath(e) {
  let { bySlug: t, filePathToSlug: r } = ne().shareStatus,
    o = r.get(e);
  return o !== void 0 ? t.get(o) : void 0;
}
function setShareEntry(e, t) {
  let { bySlug: r } = ne().shareStatus,
    o = r.get(e);
  r.set(e, {
    ...(o?.artifactKind !== void 0 &&
      !("artifactKind" in t) && { artifactKind: o.artifactKind }),
    ...(o?.livePaths !== void 0 &&
      !("livePaths" in t) && { livePaths: o.livePaths }),
    ...(o?.livePathsIssuedAt !== void 0 &&
      !("livePathsIssuedAt" in t) && {
        livePathsIssuedAt: o.livePathsIssuedAt,
      }),
    ...(o?.role !== void 0 && { role: o.role }),
    ...(o?.cowritten !== void 0 && { cowritten: o.cowritten }),
    ...(o?.typeLocked === !0 && { typeLocked: !0 }),
    ...(o?.title !== void 0 && { title: o.title }),
    ...(o?.capabilities !== void 0 && { capabilities: o.capabilities }),
    ...(o?.capabilitiesUnknown && { capabilitiesUnknown: !0 }),
    ...(o?.lastCapsReadToolUseId && {
      lastCapsReadToolUseId: o.lastCapsReadToolUseId,
    }),
    ...(o?.lastProbeToolUseId && { lastProbeToolUseId: o.lastProbeToolUseId }),
    ...(o?.lastProbeAt !== void 0 && { lastProbeAt: o.lastProbeAt }),
    ...(o?.lastCapsReadAt !== void 0 && { lastCapsReadAt: o.lastCapsReadAt }),
    ...(o?.lastProbeLandedAt !== void 0 && {
      lastProbeLandedAt: o.lastProbeLandedAt,
    }),
    ...(o?.lastCapsLandedAt !== void 0 && {
      lastCapsLandedAt: o.lastCapsLandedAt,
    }),
    ...(o?.lastProbeIssuedAt !== void 0 && {
      lastProbeIssuedAt: o.lastProbeIssuedAt,
    }),
    ...(o?.lastCapsIssuedAt !== void 0 && {
      lastCapsIssuedAt: o.lastCapsIssuedAt,
    }),
    ...(o?.storedContract !== void 0 && { storedContract: o.storedContract }),
    ...(o?.typeLock !== void 0 && { typeLock: o.typeLock }),
    ...(o?.lastPinReadToolUseId && {
      lastPinReadToolUseId: o.lastPinReadToolUseId,
    }),
    ...t,
  });
}
function setEffectiveCapabilities(e, t, r) {
  let { bySlug: o } = ne().shareStatus,
    d = o.get(e) ?? { mode: "owner", isSharedLive: !1 },
    {
      capabilitiesUnknown: p,
      lastCapsReadAt: _,
      lastCapsLandedAt: w,
      lastCapsIssuedAt: E,
      ...R
    } = d,
    C = r?.source,
    M =
      C === void 0
        ? {
            ...(_ !== void 0 && { lastCapsReadAt: _ }),
            ...(w !== void 0 && { lastCapsLandedAt: w }),
            ...(E !== void 0 && { lastCapsIssuedAt: E }),
          }
        : C === "published"
          ? { lastCapsIssuedAt: Date.now() }
          : {
              ...((C.readAt ?? _) !== void 0 && {
                lastCapsReadAt: C.readAt ?? _,
              }),
              lastCapsLandedAt: C.readAt ?? Date.now(),
              lastCapsIssuedAt: C.issuedAt,
            };
  o.set(e, {
    ...R,
    capabilities: t,
    ...(r?.unknown && { capabilitiesUnknown: !0 }),
    ...(r?.toolUseId && { lastCapsReadToolUseId: r.toolUseId }),
    ...M,
    ...(r?.storedContract !== void 0 && {
      storedContract: r.storedContract,
      ...(r.typeLock !== void 0 && { typeLock: r.typeLock }),
      ...(r?.toolUseId && { lastPinReadToolUseId: r.toolUseId }),
    }),
  });
}
function linkPathToSlug(e, t) {
  ne().shareStatus.filePathToSlug.set(e, t);
}
function unlinkPath(e) {
  ne().shareStatus.filePathToSlug.delete(e);
}
function retainPathLinks(e) {
  let t = ne().shareStatus.filePathToSlug;
  for (let r of [...t.keys()]) if (!e.has(r)) t.delete(r);
}
function recordPublishShareEcho(e, t) {
  let { bySlug: r } = ne().shareStatus,
    o = r.get(e) ?? t,
    { lastProbeAt: d, lastProbeLandedAt: p, ..._ } = o;
  r.set(e, { ..._, ...Di(t, o), lastProbeIssuedAt: Date.now() });
}
function Di(e, t) {
  return {
    mode: e.mode === "owner" ? t.mode : e.mode,
    isSharedLive: e.isSharedLive || t.isSharedLive,
  };
}
function orderReadAgainstEntry(e, t, r) {
  let o = t !== void 0 && e < t,
    d = o || e === t || (r !== void 0 && e <= r);
  return { olderIssued: o, overlapped: d, joinedIssuedAt: Math.max(e, t ?? e) };
}
function foldShareProbe(e, t, r) {
  let o =
      r.consumedByCheck && r.toolUseId !== void 0
        ? { lastProbeToolUseId: r.toolUseId }
        : {},
    d = issuedUnderDepartedAccount(r.issuedAt)
      ? { err: "the signed-in account changed while probing", errorCode: Vp }
      : t,
    p = getShareEntry(e),
    {
      olderIssued: _,
      overlapped: w,
      joinedIssuedAt: E,
    } = orderReadAgainstEntry(r.issuedAt, p?.lastProbeIssuedAt, p?.lastProbeLandedAt),
    R = Date.now();
  if (d.err !== null) {
    if (
      (n(`[artifact] ${r.debugLabel} share probe failed: ${d.err}`),
      _ && p !== void 0)
    ) {
      if (o.lastProbeToolUseId !== void 0) setShareEntry(e, { ...p, ...o });
      if (r.consumedByCheck) vl(p);
      return;
    }
    if (r.consumedByCheck) logFeatureBad("artifact_share_status", d.errorCode);
    setShareEntry(e, {
      mode: p?.mode ?? "owner",
      isSharedLive: p?.isSharedLive ?? !1,
      probeFailed: !0,
      probeErrorCode: d.errorCode,
      ...o,
      lastProbeAt: R,
      lastProbeLandedAt: R,
      lastProbeIssuedAt: r.issuedAt,
    });
    return;
  }
  let C = deriveShareStatus(d.mode, d.shared),
    M = typeof d.title === "string" ? { title: d.title } : {},
    D =
      !w || p === void 0
        ? {
            ...C,
            role: xl(d.role),
            cowritten: p?.cowritten === !0 || d.cowritten === !0,
            ...M,
            ...o,
            lastProbeAt: R,
            lastProbeLandedAt: R,
            lastProbeIssuedAt: r.issuedAt,
          }
        : {
            ...(_
              ? { ...p, ...Di(p, C) }
              : { ...Di(C, p), role: xl(d.role), ...M }),
            cowritten: p.cowritten === !0 || d.cowritten === !0,
            ...(p.probeFailed && { probeFailed: !0 }),
            ...o,
            ...(!_ && { lastProbeAt: R }),
            lastProbeLandedAt: R,
            lastProbeIssuedAt: E,
          };
  if (r.consumedByCheck) vl(D);
  setShareEntry(e, D);
}
function foldBootKind(e, t) {
  if (typeof t !== "string" || !Pt.test(t)) return;
  let r = getShareEntry(e);
  setShareEntry(e, {
    mode: r?.mode ?? "owner",
    isSharedLive: r?.isSharedLive ?? !1,
    ...(r?.probeFailed && { probeFailed: !0 }),
    artifactKind: t,
  });
}
function foldBootCowritten(e, t) {
  if (t !== !0) return;
  let r = getShareEntry(e);
  if (r?.cowritten === !0) return;
  setShareEntry(e, {
    mode: r?.mode ?? "owner",
    isSharedLive: r?.isSharedLive ?? !1,
    ...(r?.probeFailed && { probeFailed: !0 }),
    cowritten: !0,
  });
}
function typeLockedFor(e, t) {
  let r = getShareEntry(e);
  return (
    (t != null && typeof t === "object") ||
    r?.typeLocked === !0 ||
    r?.typeLock != null
  );
}
function foldBootTypeLocked(e, t) {
  if (t === null || typeof t !== "object") return;
  let r = getShareEntry(e);
  if (r?.typeLocked === !0) return;
  setShareEntry(e, {
    mode: r?.mode ?? "owner",
    isSharedLive: r?.isSharedLive ?? !1,
    ...(r?.probeFailed && { probeFailed: !0 }),
    typeLocked: !0,
  });
}
function foldBootDocs(e, t, r = Date.now()) {
  if (t === void 0 || issuedUnderDepartedAccount(r)) return;
  let o = getShareEntry(e);
  if (o?.livePathsIssuedAt !== void 0 && r < o.livePathsIssuedAt) return;
  setShareEntry(e, {
    mode: o?.mode ?? "owner",
    isSharedLive: o?.isSharedLive ?? !1,
    ...(o?.probeFailed && { probeFailed: !0 }),
    livePaths: dedupe(t.map((d) => d.path)),
    livePathsIssuedAt: r,
  });
}
function probedLivePaths(e) {
  let t = getShareEntry(e);
  if (t?.livePaths !== void 0) return t.livePaths;
  return t?.artifactKind === NH ? [Soe] : [];
}
function vl(e) {
  if (e.probeFailed) logFeatureBad("artifact_share_status", "probe_failed");
  else if (e.mode === "unknown")
    logFeatureSad("artifact_share_status", "unknown_share_mode");
  else if (e.role === "unknown")
    logFeatureSad("artifact_share_status", "unknown_share_role");
  else logFeatureOk("artifact_share_status");
}
function deriveShareStatus(e, t) {
  if (e === void 0 || e === "" || e === "owner")
    return { mode: "owner", isSharedLive: !1 };
  if (e === "users" || e === "org")
    return { mode: e, isSharedLive: (t ?? "") === "" };
  if (e === "public") return { mode: "public", isSharedLive: !0 };
  if (e === "agent_scoped")
    return { mode: "agent_scoped", isSharedLive: (t ?? "") === "" };
  return { mode: "unknown", isSharedLive: !0 };
}
function audienceViewNote(e) {
  if (e === "live") return "viewers see updates immediately";
  if (e === "pinned-current")
    return "viewers currently see this version, but will not see future publishes until the share pin is moved";
  return "viewers see a pinned earlier version, not this live version";
}
function shareAudience(e) {
  if (e === "org") return "your organization";
  if (e === "users") return "specific users";
  if (e === "public") return "anyone with the link";
  if (e === "agent_scoped")
    return "everyone with access to the agent that created it";
  return "others (unrecognized share mode \u2014 treating as shared)";
}
function xl(e) {
  if (e === void 0 || e === "") return;
  if (
    e === "owner" ||
    e === "writer" ||
    e === "reader" ||
    e === "commenter" ||
    e === "viewer"
  )
    return e;
  return "unknown";
}
function ownershipTag(e) {
  if (e === void 0) return "";
  if (e.probeFailed || e.role === void 0 || e.role === "unknown")
    return " (ownership unconfirmed)";
  return e.role === "owner" ? "" : " (someone else's artifact)";
}
var BOOT_ORG_MISMATCH_CODE = "boot_org_mismatch",
  Vp = "account_changed";
function issuedUnderDepartedAccount(e) {
  let { accountBoundaryAt: t } = ne().shareStatus;
  return t !== void 0 && e <= t;
}
function probedOtherOrg(e) {
  return e?.probeFailed === !0 && e.probeErrorCode === BOOT_ORG_MISMATCH_CODE;
}
function ownershipClassifierMark(e) {
  let t = ownershipTag(e);
  if (t === "") return "";
  return t === " (someone else's artifact)"
    ? " [ownership: someone else's]"
    : " [ownership: unconfirmed]";
}
function shareAudienceMark(e) {
  if (e?.probeFailed) return " [shared: unknown]";
  return e !== void 0 && e.mode !== "owner" ? ` [shared: ${e.mode}]` : "";
}
function shareAudienceSentence(e) {
  if (e?.probeFailed) return "share status unconfirmed";
  return e !== void 0 && e.mode !== "owner"
    ? `visible to ${shareAudience(e.mode)}`
    : "visible to viewers of the artifact";
}
function shareAudienceParenthetical(e) {
  if (e?.probeFailed) return " (share status unconfirmed)";
  return e !== void 0 && e.mode !== "owner"
    ? ` (shared with ${shareAudience(e.mode)})`
    : "";
}
function ownedByUser(e) {
  return e !== void 0 && !e.probeFailed && e.role === "owner";
}
function isSomeoneElses(e) {
  return (
    e !== void 0 &&
    !e.probeFailed &&
    e.role !== void 0 &&
    e.role !== "unknown" &&
    e.role !== "owner"
  );
}
function dbReadConsentMessage(e) {
  return isSomeoneElses(e)
    ? "Claude wants to read this artifact's database \u2014 someone else's artifact, written by its collaborators. Covers this artifact for the rest of the conversation."
    : "Claude wants to read this artifact's database \u2014 written by its collaborators, and ownership couldn't be confirmed. Covers this artifact for the rest of the conversation.";
}
function ownershipAskNote(e, t = "their database", r = "write into") {
  if (e === void 0) return "";
  if (e.probeFailed || e.role === void 0 || e.role === "unknown")
    return " Couldn't confirm whether this artifact is yours.";
  return e.role === "owner"
    ? ""
    : ` This artifact belongs to someone else \u2014 approving will ${r} ${t}.`;
}
function markAutoReactNoticePending(e) {
  ne().shareStatus.pendingNoticeSlugs.add(e);
}
function hasAutoReactNoticePending(e) {
  return ne().shareStatus.pendingNoticeSlugs.has(e);
}
function clearAutoReactNoticePending(e) {
  ne().shareStatus.pendingNoticeSlugs.delete(e);
}
var xr = 8192,
  Wp = 512,
  Al = 200,
  Gp = 120,
  Yp = createLazyValue(() =>
    c({
      message: s()
        .optional()
        .catch(void 0),
      error: $e([s(), c({ message: s() })])
        .optional()
        .catch(void 0),
      detail: s()
        .optional()
        .catch(void 0),
    }),
  );
function Zt(e, t, r) {
  let o = Xp(e);
  return {
    mediaType: o,
    ...Jp(o, t, r),
    proxyError: Kp(e, r),
    requestId: qp(e, r),
  };
}
function Kp(e, t) {
  let r = e?.["x-proxy-error"];
  return typeof r === "string" ? Bi(ji(r), t, Gp) : void 0;
}
function qp(e, t) {
  let r = e?.["x-request-id"];
  return typeof r === "string" &&
    /^[A-Za-z0-9._:-]{1,128}$/.test(r) &&
    t(r) === r
    ? r
    : void 0;
}
function Xp(e) {
  let t = e?.["content-type"];
  if (typeof t !== "string") return "";
  let r = t.indexOf(";");
  return (r === -1 ? t : t.slice(0, r))
    .replace(/^[\t\n\f\r ]+|[\t\n\f\r ]+$/g, "")
    .replace(/[A-Z]/g, (o) => o.toLowerCase());
}
var vr = { reason: void 0, code: void 0 };
function Jp(e, t, r) {
  let o = e === "application/json" || e.endsWith("+json"),
    d = typeof t === "string" ? ji(t) : Zp(t);
  if (d !== void 0) {
    let { text: p, truncated: _ } = d;
    if (p.includes("\uFFFD") || p.includes("\x00")) return vr;
    if (o || (e === "" && p.trimStart().startsWith("{")))
      return _ ? vr : Sl(xt(p, !1), r);
    return { reason: e === "text/plain" ? Bi(d, r, Al) : void 0, code: void 0 };
  }
  if (t !== null && typeof t === "object") return Sl(t, r);
  return vr;
}
function Sl(e, t) {
  let r = Yp().safeParse(e);
  if (!r.success) return vr;
  let { message: o, error: d, detail: p } = r.data,
    _ = typeof d === "string" ? d : d?.message,
    w = [o, _, p].find((E) => E !== void 0 && E.trim() !== "");
  return {
    reason: w === void 0 ? void 0 : Bi(ji(w), t, Al),
    code: typeof d === "string" && /^[a-z0-9_]{1,64}$/.test(d) ? d : void 0,
  };
}
function Bi({ text: e, truncated: t }, r, o) {
  let d = r(e),
    p = t ? truncateToCodeUnits(d, d.length - Wp) : d,
    _ = Vn(p, o);
  return _ === "" ? void 0 : _;
}
function ji(e) {
  return { text: truncateToCodeUnits(e, xr), truncated: e.length > xr };
}
function Zp(e) {
  let t;
  if (e instanceof ArrayBuffer) t = new Uint8Array(e);
  else if (ArrayBuffer.isView(e))
    t = new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  else return;
  let r = t.byteLength > xr,
    o = r ? Qp(t, xr) : t.byteLength;
  return {
    text: new TextDecoder("utf-8").decode(t.subarray(0, o)),
    truncated: r,
  };
}
function Qp(e, t) {
  let r = t - 1,
    o = 0;
  while (r >= 0 && o < 3 && ((e[r] ?? 0) & 192) === 128) (r--, o++);
  if (r < 0) return t;
  let d = e[r] ?? 0,
    p = d >= 240 ? 4 : d >= 224 ? 3 : d >= 192 ? 2 : 1;
  return o + 1 < p ? r : t;
}
function bN(e, t) {
  return (
    e === 403 &&
    (t?.["x-proxy-error"] === "blocked-by-allowlist" ||
      t?.["x-deny-reason"] === "host_not_allowed")
  );
}
function F1e(e) {
  let t = KU(e);
  return t !== void 0 && bN(t.connectStatus, t.headers);
}
function Hi(e, t) {
  if (e !== 403) return;
  if (t.code !== "content_scan_blocked") return;
  return t.reason?.endsWith("(fail closed)")
    ? "content_scan_transient"
    : "content_scan_permanent";
}
function jwt({ status: e, headers: t, data: r, redact: o, label: d }) {
  if (e !== 403) return;
  let p = Zt(t, r, o),
    _ = Hi(e, p);
  if (_ !== void 0)
    n(`${d}: sandbox proxy denied, ${_} (${p.reason ?? "no reason"})`);
  return _;
}
var $1e = {
  content_scan_transient:
    "artifact content fetch blocked: the sandbox proxy's content scan was unavailable (HTTP 403). This is transient; retry.",
  content_scan_permanent:
    "artifact content fetch blocked: the sandbox proxy's content scan refused this content (HTTP 403); retrying will not help.",
  proxy_denied:
    "artifact content fetch blocked by the sandbox proxy's policy (HTTP 403); retrying will not help.",
};
function ZGt(e) {
  return e !== void 0 && e >= 400 && e < 500 && e !== 408 && e !== 429;
}
function El(e, t, r) {
  let o = e?.[t];
  return typeof o === "string" && o.length <= 64 && r.test(o) ? o : void 0;
}
function U1e(e) {
  return El(e, "x-proxy-error", /^[a-z0-9_-]+$/);
}
function vK(e) {
  return El(e, "x-deny-reason", /^[a-z0-9_]+$/);
}
import {
  lstat as Rl,
  open as eh,
  readlink,
  realpath as zi,
  stat as nh,
} from "fs/promises";
async function gJ(e, t) {
  let r = Buffer.alloc(t + 1),
    o = 0;
  while (o < r.length) {
    let { bytesRead: d } = await e.read(r, o, r.length - o, o);
    if (d === 0) break;
    o += d;
  }
  return o === t ? r.subarray(0, t) : null;
}
import { constants as Ui } from "fs";
import {
  dirname,
  isAbsolute,
  join as On,
  normalize,
  relative,
  sep as pt,
} from "path";
function Qt(e) {
  return Xo(e) || Dr(e);
}
var TD = 512,
  RG = 255;
function HC(e) {
  return JSON.stringify(e).replace(/[^\x20-\x7e]|[<>]/gu, ih);
}
function ih(e) {
  return e
    .split("")
    .map((t) => `\\u${t.charCodeAt(0).toString(16).padStart(4, "0")}`)
    .join("");
}
function Vi(e, t) {
  if (e.length === 0) return { errMsg: `${t} may not be empty` };
  if (e.length > TD) return { errMsg: `${t} is longer than ${TD} characters` };
  let r = e.normalize("NFC");
  if (/[\p{Cc}\p{Cf}\p{Co}\p{Zl}\p{Zp}]/u.test(r) || !isWellFormed(r))
    return {
      errMsg: `${t} ${HC(e)} contains control, formatting, line-separator, or private-use characters, or a malformed one`,
    };
  if (r.includes("\\"))
    return {
      errMsg: `${t} ${HC(e)} contains a backslash \u2014 published paths use forward slashes on every platform`,
    };
  if (/[?#%]/.test(r))
    return {
      errMsg: `${t} ${HC(e)} contains characters that cannot appear in a served URL path ("?", "#", "%")`,
    };
  if (r.startsWith("/"))
    return {
      errMsg: `${t} ${HC(e)} is absolute \u2014 published paths are relative to the artifact root`,
    };
  let o = r.split("/");
  if (o.some((d) => d === ""))
    return { errMsg: `${t} ${HC(e)} has an empty path segment` };
  if (o.some((d) => d === "." || d === ".."))
    return {
      errMsg: `${t} ${HC(e)} contains "." or ".." segments \u2014 pass the plain served path`,
    };
  if (
    o.some((d) => d === "__proto__" || d === "constructor" || d === "prototype")
  )
    return {
      errMsg: `${t} ${HC(e)} contains a reserved name ("__proto__", "constructor", "prototype")`,
    };
  if (/[:;]/.test(r))
    return {
      errMsg: `${t} ${HC(e)} contains ":" or ";", which no published path may`,
    };
  return { nfc: r };
}
function aTt(e, { removal: t = !1 } = {}) {
  let r = Vi(e, "files: published path");
  if ("errMsg" in r) return r;
  let { nfc: o } = r;
  if (o === "index.html")
    return {
      errMsg:
        'files: "index.html" cannot be a published path \u2014 the `html` argument is always the index. Pass that file\'s content as `html` and remove the "index.html" mapping.',
    };
  if (o.startsWith("_"))
    return {
      errMsg: `files: published path ${HC(e)} starts with "_", which the artifact service reserves for its own names \u2014 rename the file or its top-level directory`,
    };
  if (!t && Hqt(o))
    return {
      errMsg: `files: published path ${HC(e)} is a name the artifact service answers with one of its own views, so the file could never be read back \u2014 rename it`,
    };
  return { key: o };
}
function Hqt(e) {
  return e.startsWith("_") || e === "index.html.json" || e === ".json";
}
function wJ(e) {
  let t = Vi(e, "path");
  if ("errMsg" in t) return t;
  let { nfc: r } = t;
  if (Hqt(r))
    return {
      errMsg: `path ${HC(e)} names one of the artifact service's own views, not a published file; list_files shows the readable paths`,
    };
  return { key: r };
}
var fer = 1048576,
  sh = /\.(?:png|jpe?g)$/i;
function mer(e) {
  let t = Vi(e, "thumbnail href");
  if ("errMsg" in t) return t;
  if (!sh.test(t.nfc))
    return {
      errMsg: `thumbnail href ${JSON.stringify(e)} is not a .png, .jpg or .jpeg file \u2014 custom thumbnails are PNG or JPEG images`,
    };
  return { rel: t.nfc };
}
function pFe(e, t, r) {
  return e === t || e.startsWith(t + pt) || e === r || e.startsWith(r + pt);
}
function tTn(e, t, r) {
  let o = Sr(normalize(t));
  if (o === r) return e;
  if (e === o) return r;
  return e.startsWith(o + pt) ? r + e.slice(o.length) : e;
}
function Sr(e) {
  let t = e.replace(/\/+$/, "");
  return t === "" ? e : t;
}
function lYe(e, t) {
  if (Qt(e)) return null;
  if (e === "~" || e.startsWith(`~${pt}`) || e.startsWith("~/")) return null;
  if (isAbsolute(e)) {
    let o = normalize(e);
    return Qt(o) ? null : o;
  }
  let r = normalize(e);
  if (r === ".." || r.startsWith(`..${pt}`)) return null;
  return On(t, r);
}
async function fFe(e) {
  let t = Sr(e);
  for (let r = 0; r < 40; r++) {
    let o;
    try {
      o = await readlink(t);
    } catch {
      return !1;
    }
    if (ac(o, dirname(t))) return !0;
    if (o.split(/\/+/).includes("..")) return !0;
    if (((t = Sr(isAbsolute(o) ? normalize(o) : On(dirname(t), o))), Qt(t))) return !0;
  }
  return !0;
}
async function oh(e, t, r) {
  let o = await zi(e);
  if (t === void 0) return { realCwd: o, realRoot: o, lexRoot: normalize(e) };
  if (Qt(t))
    return {
      errMsg: `root: ${JSON.stringify(t)} is a network path \u2014 the publish base must lie within the working directory`,
    };
  let d = normalize(t);
  if (!isAbsolute(d) && (d === ".." || d.startsWith(`..${pt}`)))
    return {
      errMsg:
        `root: ${JSON.stringify(t)} escapes the working directory \u2014 ` +
        "the publish base must lie within it",
    };
  if (isAbsolute(d) && !pFe(d, e, o))
    return {
      errMsg: `root: ${JSON.stringify(t)} is outside the working directory \u2014 pass a working-directory-relative path`,
    };
  let p = isAbsolute(d) ? d : On(o, d),
    _ = r?.denyPath?.(p, !1, t);
  if (_ !== void 0) return { errMsg: _ };
  if (await fFe(p))
    return {
      errMsg: `root: ${JSON.stringify(t)} is a symlink whose chain cannot be safely resolved (network target, a \`..\` segment in link text, or too many links) \u2014 pass the target directory itself`,
    };
  let w;
  try {
    w = await zi(p);
  } catch {
    return { errMsg: `root: ${JSON.stringify(t)} not found` };
  }
  if (Qt(w))
    return {
      errMsg: `root: ${JSON.stringify(t)} resolves to a network path \u2014 the publish base must lie within the working directory`,
    };
  if (w !== o && !w.startsWith(o + pt))
    return {
      errMsg:
        `root: ${JSON.stringify(t)} resolves outside the working ` +
        "directory \u2014 the publish base must lie within it",
    };
  let E;
  try {
    E = await nh(w);
  } catch {
    return { errMsg: `root: ${JSON.stringify(t)} not found` };
  }
  if (!E.isDirectory())
    return { errMsg: `root: ${JSON.stringify(t)} is not a directory` };
  let R = Sr(isAbsolute(d) ? d : On(normalize(e), d));
  return { realCwd: o, realRoot: w, lexRoot: R };
}
async function nTn(e, t, r, o) {
  let d = await oh(t, r, o);
  if ("errMsg" in d) return d;
  let { realCwd: p, realRoot: _, lexRoot: w } = d;
  if (o?.expectedRealRoot !== void 0 && o.expectedRealRoot !== _)
    return {
      errMsg:
        "root: the publish base resolves to a different location than " +
        "was approved \u2014 it changed between approval and publishing; " +
        "retry the publish",
    };
  if (e.length === 0)
    return {
      errMsg: "files: the file map is empty \u2014 list at least one file",
    };
  if (e.length > RG)
    return {
      errMsg: `files: ${e.length} files + index.html exceeds the ${RG + 1}-entry manifest limit`,
    };
  let E = [],
    R = new Set(),
    C = 0;
  for (let M of e) {
    let D = aTt(M.to);
    if ("errMsg" in D) return D;
    let F = D.key;
    if (R.has(F))
      return {
        errMsg: `files: published path ${HC(F)} appears more than once`,
      };
    R.add(F);
    let I = M.from;
    if (Qt(I))
      return {
        errMsg: `files: ${JSON.stringify(I)} is a network path \u2014 only files under the working directory can be published`,
      };
    if (I === "~" || I.startsWith(`~${pt}`) || I.startsWith("~/"))
      return {
        errMsg: `files: ${JSON.stringify(I)} \u2014 "~" is not expanded here; pass a base-relative or absolute path`,
      };
    let N = isAbsolute(I) ? void 0 : normalize(I);
    if (N !== void 0 && (N === ".." || N.startsWith(`..${pt}`)))
      return {
        errMsg:
          `files: ${JSON.stringify(I)} escapes the publish base \u2014 ` +
          "only files under the working directory can be published",
      };
    let ae = lYe(I, _);
    if (ae === null)
      return { errMsg: `files: ${JSON.stringify(I)} cannot be resolved` };
    if (isAbsolute(I) && !pFe(ae, p, normalize(t)))
      return {
        errMsg: `files: ${JSON.stringify(I)} is outside the working directory \u2014 pass a path under it`,
      };
    let ue = o?.denyPath?.(ae, !1, I);
    if (ue !== void 0) return { errMsg: ue };
    if (w !== _) {
      let re = N ?? (ae.startsWith(_ + pt) ? relative(_, ae) : void 0);
      if (re !== void 0) {
        let ce = o?.denyPath?.(On(w, re), !0, I);
        if (ce !== void 0) return { errMsg: ce };
      }
    }
    if (await fFe(ae))
      return {
        errMsg: `files: ${JSON.stringify(I)} is a symlink whose chain cannot be safely resolved (network target, a \`..\` segment in link text, or too many links) \u2014 list the link's target path instead`,
      };
    let V;
    try {
      V = await zi(ae);
    } catch (re) {
      return {
        errMsg: `files: ${JSON.stringify(I)} not found`,
        ...(W(re) && { missing: !0 }),
      };
    }
    if (Qt(V))
      return {
        errMsg: `files: ${JSON.stringify(I)} resolves to a network path \u2014 only files under the working directory can be published`,
      };
    if (V !== p && !V.startsWith(p + pt))
      return {
        errMsg:
          `files: ${JSON.stringify(I)} resolves outside the working ` +
          "directory (symlink?) \u2014 only files under it can be published",
      };
    if (V !== ae) {
      let re = o?.denyPath?.(V, !0, I);
      if (re !== void 0) return { errMsg: re };
    }
    try {
      let re = await Rl(V);
      if (re.isSymbolicLink())
        return {
          errMsg: `files: ${JSON.stringify(I)} changed to a symlink after it was checked \u2014 retry the publish`,
        };
      if (!re.isFile())
        return { errMsg: `files: ${JSON.stringify(I)} is not a regular file` };
    } catch (re) {
      return {
        errMsg: `files: ${JSON.stringify(I)} not found`,
        ...(W(re) && { missing: !0 }),
      };
    }
    let J;
    try {
      J = await eh(V, Ui.O_RDONLY | (Ui.O_NOFOLLOW | Ui.O_NONBLOCK));
    } catch (re) {
      if (re?.code === "ELOOP")
        return {
          errMsg: `files: ${JSON.stringify(I)} changed to a symlink after it was checked \u2014 retry the publish`,
        };
      return {
        errMsg: `files: ${JSON.stringify(I)} not found`,
        ...(W(re) && { missing: !0 }),
      };
    }
    let U, te;
    try {
      try {
        if ((await Rl(V)).isSymbolicLink())
          return {
            errMsg: `files: ${JSON.stringify(I)} changed to a symlink after it was checked \u2014 retry the publish`,
          };
      } catch (ce) {
        return {
          errMsg: `files: ${JSON.stringify(I)} not found`,
          ...(W(ce) && { missing: !0 }),
        };
      }
      let re = await J.stat();
      if (!re.isFile())
        return { errMsg: `files: ${JSON.stringify(I)} is not a regular file` };
      if (a.CLAUDE_CODE_EVAL_CONFINED && re.nlink > 1)
        return {
          errMsg: `files: ${JSON.stringify(I)} has more than one hard link`,
        };
      if (re.size > MAX_ARTIFACT_BYTES)
        return {
          errMsg: `files: ${JSON.stringify(I)} is ${Math.ceil(re.size / 1024 / 1024)}MB (per-file max ${MAX_ARTIFACT_BYTES / 1024 / 1024}MB)`,
          tooLarge: !0,
        };
      if (((C += re.size), C > MANIFEST_TOTAL_BUDGET))
        return {
          errMsg: `files: total content exceeds ${MANIFEST_TOTAL_BUDGET / 1024 / 1024}MB at ${JSON.stringify(I)} \u2014 a version's files may total at most that`,
        };
      if (((te = M.contentType ?? getContentTypeForPath(F)), te === void 0))
        return {
          errMsg:
            `files: ${HC(F)} has no known content type for its ` +
            "extension \u2014 pass contentType explicitly (it must be a servable " +
            'type, e.g. "application/json", "image/png")',
        };
      try {
        let ce = await gJ(J, re.size);
        if (ce === null)
          return {
            errMsg: `files: ${JSON.stringify(I)} changed while it was read \u2014 retry the publish`,
          };
        U = ce;
      } catch {
        return { errMsg: `files: ${JSON.stringify(I)} could not be read` };
      }
      E.push({
        path: F,
        content: U,
        contentType: te,
        ...(M.live !== void 0 && { live: M.live }),
        ...(M.reseed === !0 && { reseed: !0 }),
      });
    } finally {
      await J.close();
    }
  }
  return { files: E };
}
async function ger(e, t, r, o) {
  let d = /\.png$/i.test(t) ? ".png" : ".jpg",
    p = await nTn([{ to: `thumbnail${d}`, from: t }], r, void 0, o);
  if ("errMsg" in p)
    return {
      errMsg: `thumbnail ${JSON.stringify(e)}: ${p.errMsg.replace(/^files: /, "")}`,
      missing: p.missing === !0,
      tooLarge: p.tooLarge === !0,
    };
  let _ = p.files[0].content;
  return { content: typeof _ === "string" ? Buffer.from(_) : _ };
}
var ah = 16384;
var N_ = `
[prompt truncated: exceeded ${ah / 1024}KB]`;
var lh = /^[\w.:@+-]{1,56}(?:\[[A-Za-z0-9]{1,6}\])?$/,
  uh = createLazyValue(() => {
    let e = s()
        .refine((r) => r.trim() !== "")
        .optional()
        .catch(void 0),
      t = s()
        .trim()
        .regex(lh)
        .optional()
        .catch(void 0);
    return c({ prompt: e, context: e, model: t, client_version: t });
  });
function Cl(e) {
  let t = uh().safeParse(e);
  if (!t.success) return;
  let { prompt: r, context: o, model: d, client_version: p } = t.data,
    _ = {
      ...(r !== void 0 && { prompt: r }),
      ...(o !== void 0 && { context: o }),
      ...(d !== void 0 && { model: d }),
      ...(p !== void 0 && { clientVersion: p }),
    };
  return Object.keys(_).length > 0 ? _ : void 0;
}
var dh = 2000,
  fh = 6000;
function ph(e) {
  return {
    prompt: Math.min(dh, Math.floor(e / 16)),
    context: Math.min(fh, Math.floor((3 * e) / 16)),
  };
}
function Pl(e, t, r) {
  let o = e.trim(),
    d = Array.from(o);
  return d.length <= t
    ? o
    : `${d.slice(0, t).join("")}
[${r} truncated after ${t} characters]`;
}
function rTn(e, t) {
  return "";
}
var hh = /[\x00-\x08\x0b-\x1f\x7f-\x9f\u2028\u2029]+/g;
function oTn(e) {
  return scrubArtifactEnvelopeTags(vge(ARTIFACT_ORIGIN_NOTES_TAG, e.replace(hh, " ")));
}
var her = 524288,
  Ol = 3149824;
function $l(e) {
  let t = e.length;
  while (
    t > 0 &&
    ` 	\r
`.includes(e[t - 1])
  )
    t--;
  let r = e.slice(0, t);
  if (!r.endsWith("</script>")) return e;
  let o = r.slice(0, r.length - 9),
    d = o.lastIndexOf(
      '<script type="application/json" id="__frame_comments__">',
    );
  if (d === -1) return e;
  let p = o.slice(d + 56);
  if (p.includes("<")) return e;
  let _;
  try {
    _ = JSON.parse(p);
  } catch {
    return e;
  }
  if (typeof _ !== "object" || _ === null || Array.isArray(_)) return e;
  let w = _;
  if (typeof w.mac !== "string" || w.mac.length === 0) return e;
  if (!Object.hasOwn(_, "payload")) return e;
  let E = o.slice(0, d);
  if (
    E.endsWith(`
`)
  )
    E = E.slice(0, -1);
  return E;
}
function Dqt(e) {
  if (!isFrameLiveSubscribeEnabled()) return;
  if (e.syncClient === !0)
    return typeof e.syncToken === "string" && e.syncToken !== ""
      ? { transport: "sync", token: e.syncToken }
      : void 0;
  return e.subscriptionToken
    ? { transport: "live", token: e.subscriptionToken }
    : void 0;
}
function Sw(e, t = {}) {
  let r = parseArtifactUrl(e);
  if (r === null)
    return { ok: !1, message: t.notUrlMessage ?? notAnArtifactUrlMessage(e), errorCode: 4 };
  let o = Vo();
  if (r.env !== o) {
    let d = t.envHint ? ` \u2014 ${t.envHint(o)}` : "";
    return {
      ok: !1,
      message: `that artifact URL is for ${r.env}, but this session targets ${o} claude.ai${d}`,
      errorCode: 5,
    };
  }
  return { ok: !0, parsed: r };
}
function AJ(e) {
  return e.gone === !0;
}
function _er(e) {
  return e.neverPublished === !0;
}
function RN(e) {
  return e.otherOrg === !0;
}
function gh(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    denyPolicyBody(e)?.reason === "org_mismatch" &&
    "owner_org" in e &&
    typeof e.owner_org === "string" &&
    Xn(e.owner_org) !== null
  );
}
var Ife =
    "this Artifact is in another of the user's organizations, not the one this session is signed in to",
  Pfe = "the user runs /login and signs in to that organization",
  bh = `${Ife} \u2014 it opens here only after ${Pfe}`,
  yh = createLazyValue(() => c({ request_access: O(), reason: s().optional() })),
  Lqt = 15000;
async function Mqt(
  { slug: e, env: t, sk: r, vanity: o },
  d,
  { relayOnly: p = !1, agentPeer: _ = !1, syncLive: w = !1, credentials: E },
) {
  let R = Vo();
  if (t !== R)
    return {
      err: `that artifact URL is for ${t} claude.ai, but this session targets ${R}`,
      errorCode: "env_mismatch",
    };
  let C = "via=model_read" + (_ ? "&peer=agent" : "") + (w ? "&live=sync" : ""),
    M = r === void 0 ? "" : `&sk=${encodeURIComponent(r)}`,
    D = o === void 0 ? "" : `&vanity=${encodeURIComponent(o)}`,
    F = `/api/frame/${e}?${C}${M}${D}`,
    I = {
      refreshOAuth: !0,
      credentials: E,
      headers: Fd(),
      timeout: Lqt,
      signal: d,
    },
    N,
    ae = Date.now();
  try {
    N = p ? await Nd.getRelayOnly(F, I) : await Nd.get(F, I);
  } catch (ge) {
    if (isCancel(ge)) throw ge;
    return {
      err: "artifact read failed (network error)",
      errorCode: "boot_request_error",
    };
  }
  if (!N.ok) {
    if (N.reason === "relay-unavailable")
      return {
        err: `artifact read failed (relay unavailable${N.status ? `, HTTP ${N.status}` : ""})`,
        ...(N.status !== 0 && { status: N.status }),
        errorCode: "boot_relay_error",
      };
    if (N.reason === "relay-not-served")
      return {
        err: "artifact read failed (the session gateway does not serve this session)",
        errorCode: "boot_relay_not_served",
      };
    return {
      err:
        N.reason === "no-auth"
          ? Am(N.detail)
          : `artifact read unavailable: ${N.reason}`,
      errorCode: N.reason.replace(/-/g, "_"),
    };
  }
  if (!N.fromFrame)
    return {
      err: `artifact read failed (relay HTTP ${N.status})`,
      status: N.status,
      errorCode: "boot_relay_error",
    };
  let ue = isSlackEntrypoint() ? "Slack" : isTeamsEntrypoint() ? "Teams" : void 0,
    V = `${ue ?? "chat"} channel`,
    J = `add this ${V} (under "Add people, groups, or Claude Tags", paste the channel ID)`,
    U = `sharing with a person or service account does not reach a ${V}'s Claude \u2014 ask the owner to open Share and ${J}, or widen General access to the organization.`;
  if (N.status === 404) {
    let ge = Hs(N.data);
    return {
      err: ge
        ? "this artifact exists but nothing has been published to it yet, so there is nothing to read"
        : `artifact not found \u2014 it may have been deleted, or it has not been shared with you${ue === void 0 ? "" : `. If it is restricted to specific people, ${U}`}`,
      status: 404,
      ...(hoe(N.data) && { gone: !0 }),
      ...(ge && { neverPublished: !0 }),
      errorCode: "boot_404",
    };
  }
  if (N.status === 403 && gh(N.data))
    return { err: bh, status: 403, otherOrg: !0, errorCode: BOOT_ORG_MISMATCH_CODE };
  if (N.status === 403) {
    let ge = yh().safeParse(N.data);
    if (ge.success && ge.data.reason === "agent_not_added")
      return {
        err: `this artifact is restricted to specific people, and this ${V}'s Claude is not one of them: ${U}`,
        status: 403,
        errorCode: "boot_403_agent_not_added",
      };
    if (ge.success && ge.data.reason === "agent_owned")
      return {
        err:
          ue === void 0
            ? "this artifact belongs to a chat channel's Claude and has not been shared with you \u2014 ask someone in the channel it was published from to open Share on it and add you."
            : `this artifact belongs to another ${V}'s Claude and has not been shared with this one \u2014 ask someone in the channel it was published from to open Share on it and ${J}.`,
        status: 403,
        errorCode: "boot_403_agent_owned",
      };
    if (ge.success && ge.data.request_access)
      return {
        err: "you do not have access to this artifact. Open the link in a browser to request access from the owner.",
        status: 403,
        errorCode: "boot_403_request_access",
      };
  }
  if (N.status < 200 || N.status >= 300)
    return {
      err: `artifact read failed (HTTP ${N.status})`,
      status: N.status,
      errorCode: "boot_failed",
    };
  let te = N.data ?? {},
    { ver: re, assetToken: ce } = te,
    q = te.mode === "public" || te.kind === "public";
  if (!re || (!ce && !q))
    return {
      err: "artifact read failed: incomplete boot response",
      errorCode: "boot_incomplete",
    };
  if (!QXe.test(re))
    return {
      err: "artifact read failed: malformed boot response",
      errorCode: "boot_bad_ver",
    };
  return (
    foldBootKind(e, te.artifactKind),
    foldBootDocs(e, nr(te), ae),
    foldBootCowritten(e, te.cowritten),
    foldBootTypeLocked(e, te.type),
    { err: null, data: te, ver: re, assetToken: ce || void 0 }
  );
}
async function IC(
  e,
  t,
  r,
  {
    gatePublicRead: o = !0,
    relayOnly: d = !1,
    agentPeer: p = !1,
    syncLive: _ = !1,
    speculative: w = !1,
    credentials: E,
  },
) {
  let R = w ? logFeatureSad : logFeatureBad,
    C = await Mqt(e, r, {
      relayOnly: d,
      agentPeer: p,
      syncLive: _,
      credentials: E,
    });
  if (C.err !== null)
    return (
      R(t, C.errorCode),
      {
        err: C.err,
        ...(C.status !== void 0 && { status: C.status }),
        ...(C.gone && { gone: !0 }),
        ...(C.neverPublished && { neverPublished: !0 }),
        ...(C.otherOrg && { otherOrg: !0 }),
        errorCode: C.errorCode,
      }
    );
  let M = C;
  if (o && M.assetToken === void 0 && !isFramePublicReadEnabled())
    return (
      R(t, "public_read_disabled"),
      {
        err: "artifact read failed: this artifact is served to you as a public (non-member) reader, and reading public artifacts that way is not enabled yet",
        errorCode: "public_read_disabled",
      }
    );
  return M;
}
async function yer(e, t, r, { syncLive: o = !1 } = {}) {
  let d = Vo(),
    p = await IC({ slug: e, env: d }, "artifact_live_subscribe", t, {
      agentPeer: o,
      syncLive: o,
      credentials: r,
    });
  if (p.err !== null)
    return {
      err: p.err,
      ...(p.status && { status: p.status }),
      ...(p.otherOrg && { otherOrg: !0 }),
      ...(gYe(p.status) && { unavailable: !0 }),
      ...(p.errorCode === "boot_request_error" && { noAnswer: !0 }),
    };
  let _ = Dqt(p.data),
    w = p.data.syncClient === !0;
  return {
    err: null,
    token: _?.token,
    transport: _?.transport ?? (w ? "sync" : "live"),
    ver: p.ver,
    editor: _h(p),
    tokenExp: w ? void 0 : Il(p.data.subscriptionTokenExp),
    renewable: _?.transport === "live" && p.data.watchTokenRenewEnabled === !0,
  };
}
function Il(e) {
  return typeof e === "number" && Number.isFinite(e) ? e : void 0;
}
function gYe(e) {
  return e !== void 0 && (e >= 500 || e === 429 || e === 408);
}
async function Ser(e, t, r) {
  let o;
  try {
    o = await Nd.post(
      `/api/frame/watch-token/${e}`,
      {},
      {
        refreshOAuth: !0,
        credentials: r,
        headers: Fd(),
        timeout: Lqt,
        signal: t,
      },
    );
  } catch (w) {
    if (isCancel(w)) throw w;
    return { err: "renew_miss" };
  }
  if (!o.ok || !o.fromFrame || o.status < 200 || o.status >= 300)
    return { err: "renew_miss", ...(o.ok && { status: o.status }) };
  let d = o.data ?? {},
    p = Dqt(d),
    _ = p?.transport === "live" ? p.token : void 0;
  if (!d.ver || !QXe.test(d.ver) || _ === void 0)
    return { err: "renew_miss", status: o.status };
  return {
    err: null,
    token: _,
    transport: "live",
    ver: d.ver,
    editor: void 0,
    tokenExp: Il(d.subscriptionTokenExp),
    renewable: !0,
  };
}
function _h(e) {
  return e.assetToken !== void 0 && Dl(e.data.perm?.role);
}
function Dl(e) {
  return e === "owner" || e === "writer";
}
async function hYe(e, t, r) {
  let o = await Mqt(e, t, { credentials: r });
  if (o.err !== null) return { err: o.err, errorCode: o.errorCode };
  let d = o.assetToken === void 0,
    p = o.data.perm?.role;
  return {
    err: null,
    mode: d ? "public" : (o.data.perm?.mode ?? o.data.mode),
    shared: o.data.shared,
    role: d && p === "owner" ? void 0 : p,
    cowritten: o.data.cowritten === !0,
    ...(typeof o.data.title === "string" && { title: o.data.title }),
  };
}
var Bl = MAX_ARTIFACT_BYTES + FRAME_RUNTIME_MAX_SPAN + Ol + 65536,
  Ofe = qk + FRAME_RUNTIME_MAX_SPAN + 1,
  Ll = {
    relayed: !1,
    why: "the session gateway declined an artifact read a few minutes ago, so this read did not retry it",
    code: "declined",
  };
async function wh(e, t) {
  let r = (_) =>
      ht.get(j1e(e.slug, _), {
        host: "ccr-gateway",
        auth: "session-jwt",
        headers: W1e(e.token),
        timeout: 30000,
        responseType: "arraybuffer",
        maxRedirects: 0,
        maxContentLength: e.fileRead ? Ofe : Bl,
        validateStatus: () => !0,
        signal: e.signal,
      }),
    o = (_) => {
      let w = _;
      return w?.["x-frame-asset-content-type"] ?? w?.["content-type"];
    };
  if (e.source !== void 0 && !e.source.fellBack) {
    let _;
    try {
      _ = await r(e.source.path);
    } catch (w) {
      if (isCancel(w)) throw w;
    }
    if (_?.ok && _.status === 200)
      return (
        EG(_w),
        {
          relayed: !0,
          result: t(
            Buffer.from(_.data ?? new ArrayBuffer(0)),
            o(_.response.headers),
            !0,
          ),
        }
      );
    ((e.source.fellBack = _?.ok ? _.status : 0),
      n(
        `[artifact] stored-source read via the gateway fell back (${e.source.fellBack}) slug=${e.slug}`,
      ));
  }
  let d = (_, w, E) => {
      if (E === 404 && !e.fileRead && !jn(_w) && (_oe() || !TCe(_w))) Lj(_w);
      return {
        relayed: !1,
        why: _,
        code: w,
        ...(E !== void 0 && { status: E }),
      };
    },
    p;
  try {
    p = await r(e.servedPath);
  } catch (_) {
    if (isCancel(_)) throw _;
    return (
      yoe(),
      d("the gateway request failed in transport", "request_error")
    );
  }
  if (!p.ok)
    return p.reason === "no-auth"
      ? d(SCe(), "no_auth")
      : d(`the gateway request was skipped (${p.reason})`, "client_policy");
  if (K1e(p.status))
    return d(
      "artifact reads through the session gateway are not enabled for this session",
      "not_served",
      p.status,
    );
  if (p.status === 404 && e.fileRead)
    return (
      logFeatureBad(e.feature, "asset_file_not_found", { relay: !0 }),
      {
        relayed: !0,
        result: {
          err: "no file is published at that path in the served version \u2014 or artifact reads through the session gateway are not enabled for this session",
          status: 404,
          ...(jn(_w) &&
            Hl(
              p.response.headers,
              Zt(p.response.headers, p.data, (w) => _Fe(w, e.token)),
            ) && { missingFile: !0 }),
        },
      }
    );
  if (p.status === 404)
    return d(
      "artifact reads through the session gateway are not enabled for this session, or the artifact service no longer serves this version",
      "not_served",
      404,
    );
  if (V1e(p.status, p.data)) return d(z1e, "network_off", 403);
  if (p.status < 200 || p.status >= 300)
    return (
      yoe(p.status),
      d(`the gateway refused the relay with HTTP ${p.status}`, "http", p.status)
    );
  return (
    EG(_w),
    {
      relayed: !0,
      result: t(
        Buffer.from(p.data ?? new ArrayBuffer(0)),
        o(p.response.headers),
        !1,
      ),
    }
  );
}
function kh(e) {
  if (e === void 0) return "";
  if (!isWellFormed(e) || Buffer.byteLength(e, "utf8") > 512) return;
  let t = e.split("/");
  for (let r of t)
    if (r === "" || r === "." || r === ".." || /[\\%\x00-\x1f\x7f]/.test(r))
      return;
  return t.map(encodeURIComponent).join("/");
}
var vh = "_src";
function cTn(e) {
  return e.assetToken !== void 0 && e.data.mode !== "external";
}
function uTn(e, t) {
  return `/_f/${e}/${vh}/${t === "" ? "index.html" : t}`;
}
function ED(e, t, r, o = "artifact_webfetch_read") {
  return jl(e, t, o, e.file, r);
}
async function ber(e, t, r, o, d = "artifact_webfetch_read") {
  let p = wJ(t);
  if ("errMsg" in p)
    return (logFeatureBad(d, "invalid_path"), { err: `artifact read failed: ${p.errMsg}` });
  return jl(e, r, d, p.key, o);
}
async function jl(e, t, r, o, d) {
  let p = kh(o);
  if (p === void 0)
    return (
      logFeatureBad(r, "invalid_file_path"),
      { err: "artifact file path is not a clean relative path" }
    );
  let _ = await IC(e, r, t, { credentials: d });
  if (_.err !== null) return _;
  let { ver: w, assetToken: E } = _;
  if (o !== void 0 && E === void 0)
    return (
      logFeatureBad(r, "public_file"),
      {
        err: "the files of a public artifact read from outside its organization are not readable this way",
        status: 403,
      }
    );
  let R = `/_f/${w}/${p}`,
    C = cTn(_) ? { path: uTn(w, p) } : void 0,
    M = (le) =>
      le
        ? { source: !0 }
        : C?.fellBack !== void 0
          ? { source_fallback_status: C.fellBack }
          : void 0,
    { title: D, favicon: F, perm: I, cowritten: N } = _.data,
    ae = _.data.artifactKind === NH || getShareEntry(e.slug)?.artifactKind === NH,
    ue = E === void 0 ? "public" : I?.mode,
    V =
      I?.role === "owner"
        ? "owner"
        : I?.role === "writer"
          ? "writer"
          : "reader",
    J = Cl(_.data.origin_metadata),
    U = (le, he, Ce, Be = () => logFeatureOk(r, M(Ce))) => {
      Be();
      let He =
          o === void 0
            ? "text/html"
            : typeof he === "string"
              ? beforeFirst(he, ";").trim().toLowerCase()
              : "",
        Ue = le.toString("utf-8"),
        Je = He === "text/html" ? $l(Ue) : Ue;
      return {
        err: null,
        html: Je,
        contentType: He,
        raw: le,
        role: V,
        ...(Ce && { source: !0 }),
        cowritten: N === !0 || ae || getShareEntry(e.slug)?.cowritten === !0,
        publicRead: E === void 0,
        sameChannel: I?.sameChannel === !0 && V === "writer",
        typeLocked: typeLockedFor(e.slug, _.data.type),
        ...(ue !== void 0 &&
          (() => {
            let _e = deriveShareStatus(ue, _.data.shared),
              je = Dl(I?.role);
            return {
              audience: _e.mode,
              ...(je &&
                _e.mode !== "owner" && {
                  audienceView:
                    (_.data.shared ?? "") === ""
                      ? "live"
                      : _.data.shared === w
                        ? "pinned-current"
                        : "pinned-earlier",
                }),
            };
          })()),
        bytes: He === "text/html" ? Buffer.byteLength(Je, "utf8") : le.length,
        title: D ?? "",
        ...(F !== void 0 && { favicon: F }),
        ver: w,
        ...(typeof _.data.fileCount === "number" &&
          Number.isSafeInteger(_.data.fileCount) &&
          _.data.fileCount > 0 && { fileCount: _.data.fileCount }),
        ...(J !== void 0 && { origin: J }),
      };
    };
  if (ae && o === void 0) {
    let le = await ne().liveReplicas.renderLevel?.(
      e.slug,
      Soe,
      _.data.headSeq,
      t,
    );
    if (le !== void 0) {
      n(
        `[artifact] read served from the local replica at seq ${le.head} slug=${e.slug}`,
      );
      let he = U(Buffer.from(le.html, "utf8"), "text/html", !1);
      return he.err === null ? { ...he, localReplica: { head: le.head } } : he;
    }
  }
  let te = `${e.slug}.frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`,
    re =
      e.env === "staging"
        ? "*.frame.staging.claudeusercontent.com"
        : "*.frame.claudeusercontent.com",
    ce = isCoworkEntrypoint()
      ? Bn(re)
      : isAnthropicHostedEnvironment()
        ? `To allow direct artifact reads here, add ${re} to the environment's allowed domains: environment settings \u2192 Code \u2192 Network access \u2192 Custom \u2192 Allowed domains. An admin can add the same entry to a shared environment from admin settings \u2192 Cloud environments; sessions that run in that environment get the access.`
        : a.CLAUDE_CODE_REMOTE
          ? `To allow artifact reads here, add ${re} to the network allowlist of the environment this remote session runs in.`
          : `To allow artifact reads here, add ${re} to the network allowlist this session runs behind \u2014 the sandbox's allowed domains, or the Claude desktop app's network settings (Settings \u2192 Capabilities; a workspace admin can add it on Team/Enterprise).`,
    q = (le, he) => (
      logFeatureBad(r, "asset_egress_blocked", {
        relay: fromEnum(le.code),
        ...(le.status !== void 0 && { relay_status: le.status }),
        ...(!he && { connect: !0 }),
      }),
      {
        err: `this environment's network allowlist blocks ${te}, and the session gateway could not serve the read either (${le.why}); your access to the artifact itself is fine (the permission check passed). ${ce}`,
        status: 403,
        ...(he && { deterministic: "egress-blocked" }),
      }
    ),
    ge = (le, he) =>
      wh(
        {
          slug: e.slug,
          servedPath: R,
          fileRead: o !== void 0,
          feature: r,
          token: le,
          signal: t,
          ...(C !== void 0 && { source: C }),
        },
        (Ce, Be, He) => U(Ce, Be, He, () => logFeatureSad(r, he, M(He))),
      ),
    pe;
  if (
    E !== void 0 &&
    ne().contentHostEgressDenied.has(e.env) &&
    RK() &&
    !TN(_w)
  ) {
    let le = await ge(E, "asset_egress_relayed");
    if (le.relayed) return le.result;
    pe = le;
  }
  let Le = void 0,
    Ge = Le ?? `https://${te}`,
    Te =
      E === void 0
        ? `${Ge}${R}`
        : `${Ge}${R}?__frame_t=${encodeURIComponent(E)}`,
    Me = async (le) => {
      ne().contentHostEgressDenied.add(e.env);
      let he = RK();
      if (E !== void 0 && he) {
        if (pe !== void 0) return q(pe, le);
        if (TN(_w)) return q(Ll, le);
        let Ce = await ge(E, "asset_egress_relayed");
        return Ce.relayed ? Ce.result : q(Ce, le);
      }
      return (
        logFeatureBad(r, "asset_egress_blocked", { ...(!le && { connect: !0 }) }),
        {
          err:
            E === void 0 && he
              ? `this environment's network allowlist blocks ${te}, and public (tokenless) artifacts are not served through the session gateway, so the artifact's content cannot be fetched (your access to the artifact itself is fine \u2014 the permission check passed). ${ce}`
              : `this environment's network allowlist blocks ${te}, so the artifact's content cannot be fetched (your access to the artifact itself is fine \u2014 the permission check passed). ${ce}`,
          status: 403,
          ...(le && { deterministic: "egress-blocked" }),
        }
      );
    },
    De = (le) =>
      externalHttp.get(le, {
        signal: t,
        timeout: 30000,
        responseType: "arraybuffer",
        maxRedirects: 0,
        maxContentLength: o === void 0 ? Bl : Ofe,
        validateStatus: () => !0,
        ...(Le && { headers: { Host: `${e.slug}.frame.localhost` } }),
      });
  if (
    C !== void 0 &&
    E !== void 0 &&
    C.fellBack === void 0 &&
    !ne().contentHostEgressDenied.has(e.env)
  ) {
    let le;
    try {
      le = await De(`${Ge}${C.path}?__frame_t=${encodeURIComponent(E)}`);
    } catch (he) {
      if (isCancel(he)) throw he;
      if (F1e(he)) return Me(!1);
    }
    if (le !== void 0 && bN(le.status, le.headers)) return Me(!0);
    if (le !== void 0 && le.status === 200)
      return U(Buffer.from(le.data), le.headers?.["content-type"], !0);
    ((C.fellBack = le?.status ?? 0),
      n(
        `[artifact] stored-source read fell back (${C.fellBack}) slug=${e.slug}`,
      ));
  }
  let Ne;
  try {
    Ne = await De(Te);
  } catch (le) {
    if (isCancel(le)) throw le;
    if (F1e(le)) return Me(!1);
    let he = KU(le),
      Ce = he === void 0 ? void 0 : (U1e(he.headers) ?? vK(he.headers)),
      Be = isTransportError(le),
      He =
        he !== void 0
          ? `proxy refused the connection: ${G5(he.connectStatus)}${Ce === void 0 ? "" : `, ${Ce}`}`
          : Be
            ? "network error"
            : "read failed",
      Ue = (je) =>
        je === void 0
          ? ""
          : `, and the session gateway could not serve the read either (${je.why})`,
      Je = (je) =>
        je !== void 0 && {
          relay: fromEnum(je.code),
          ...(je.status !== void 0 && { relay_status: je.status }),
        };
    if (he !== void 0 && he.connectStatus === 407)
      return (
        logFeatureBad(r, "asset_proxy_refused", { status: he.connectStatus, ...Je(pe) }),
        {
          err: `artifact content fetch failed (${He})${Ue(pe)}`,
          status: he.connectStatus,
          ...(Ce !== void 0 && {
            respondent: !0,
            safeErr: `artifact content fetch failed (proxy refused the connection: ${G5(he.connectStatus)})${Ue(pe)}`,
          }),
        }
      );
    let _e = pe;
    if (E !== void 0 && _e === void 0 && Be && RK())
      if (TN(_w)) _e = Ll;
      else {
        let je = await ge(E, "asset_unreachable_relayed");
        if (je.relayed) return je.result;
        _e = je;
      }
    return (
      logFeatureBad(r, "asset_request_error", {
        ...(he !== void 0 && { status: he.connectStatus }),
        ...Je(_e),
      }),
      {
        err: `artifact content fetch failed (${He})${Ue(_e)}`,
        ...(he !== void 0 &&
          he.connectStatus !== 0 && { status: he.connectStatus }),
        ...(he !== void 0 &&
          Ce !== void 0 && {
            respondent: !0,
            safeErr: `artifact content fetch failed (proxy refused the connection: ${G5(he.connectStatus)})${Ue(_e)}`,
          }),
      }
    );
  }
  if (bN(Ne.status, Ne.headers)) return Me(!0);
  if (
    (ne().contentHostEgressDenied.delete(e.env),
    Ne.status < 200 || Ne.status >= 300)
  ) {
    let le = Zt(Ne.headers, Ne.data, (Ce) => _Fe(Ce, E));
    if (Ne.status === 403 && E === void 0 && Yi(Ne.headers, le))
      return (
        logFeatureBad(r, "public_asset_forbidden"),
        {
          err: "artifact is not publicly readable at this version",
          status: 403,
        }
      );
    if (Ne.status === 404 && p !== "" && E !== void 0 && Hl(Ne.headers, le))
      return (
        logFeatureSad(r, "file_not_in_manifest"),
        {
          err: "this version of the artifact has no file at that path",
          status: 404,
          missingFile: !0,
        }
      );
    let he = Hi(Ne.status, le);
    return (
      logFeatureBad(r, he ?? "asset_failed"),
      {
        err: `artifact content fetch failed (${xh(Ne.status, Ne.headers, le)})`,
        status: Ne.status,
        respondent: !0,
        ...(he !== void 0 && { safeErr: $1e[he], proxyDeny: he }),
      }
    );
  }
  return U(Buffer.from(Ne.data), Ne.headers?.["content-type"], !1);
}
function Hl(e, t) {
  return (
    t.mediaType === "text/plain" &&
    t.reason === "not found" &&
    t.proxyError === void 0 &&
    vK(e) === void 0
  );
}
function Yi(e, t) {
  return (
    t.mediaType === "text/plain" &&
    t.reason === "forbidden" &&
    t.proxyError === void 0 &&
    vK(e) === void 0
  );
}
function xh(e, t, r) {
  let o = [`HTTP ${e}`],
    d = vK(t);
  if (d === void 0 && r.reason !== void 0)
    o.push(`response body: "${scrubArtifactEnvelopeTags(r.reason.replaceAll('"', "'"))}"`);
  else if (d !== void 0)
    o.push(`the environment's egress proxy reported: ${d}`);
  else if (r.proxyError !== void 0)
    o.push(`x-proxy-error header: "${scrubArtifactEnvelopeTags(r.proxyError.replaceAll('"', "'"))}"`);
  if (r.requestId !== void 0) o.push(`x-request-id: ${r.requestId}`);
  return o.join("; ");
}
function Aoe(e) {
  return e.respondent
    ? (e.safeErr ??
        `artifact content fetch failed (HTTP ${e.status ?? "error"})`)
    : e.err;
}
function _Fe(e, t) {
  let r = e.replace(
    /(?:_|%(?:25)*5f){2}frame(?:_|%(?:25)*5f)t(?:=|%(?:25)*3d)["']?[^\s&"'<>]*/gi,
    "__frame_t=[redacted]",
  );
  if (t !== void 0 && t !== "") {
    r = Nl(r, t, "g");
    let o = encodeURIComponent(t);
    if (o !== t) r = Nl(r, o, "gi");
  }
  return r;
}
var Wi = 16,
  Fl = /[A-Za-z0-9._~%-]/;
function Nl(e, t, r) {
  if (t.length <= Wi) return e.replaceAll(t, "[redacted]");
  let o = new Set();
  for (let w = 0; w + Wi <= t.length; w++) o.add(escapeRegExp(t.slice(w, w + Wi)));
  let d = new RegExp(`(?:${[...o].join("|")})${Fl.source}*`, r),
    p = "",
    _ = 0;
  for (let w of e.matchAll(d)) {
    let E = w.index;
    while (E > _ && Fl.test(e.charAt(E - 1))) E--;
    ((p += `${e.slice(_, E)}[redacted]`), (_ = w.index + w[0].length));
  }
  return p + e.slice(_);
}
function wer(e, t) {
  let r = Object.freeze({ slug: e, html: t });
  return (ne().mintedStoredPageProbes.add(r), r);
}
function Ter(e) {
  return (
    typeof e === "object" && e !== null && ne().mintedStoredPageProbes.has(e)
  );
}
var Ul = 3000,
  Sh = 600000,
  Ah = 262144;
function artifactHostUnreachable(e) {
  let t = ne();
  return (
    t.contentHostEgressDenied.has(e.env) ||
    t.contentHostEgressUnanswered.has(artifactContentOriginUrlFor(e))
  );
}
function Eh(e) {
  let t = ne().contentHostEgressProbed.get(e);
  return t !== void 0 && Date.now() - t < Sh;
}
async function probeArtifactHostEgress(e, t) {
  let r = ne(),
    o = artifactContentOriginUrlFor(e);
  if (r.contentHostEgressDenied.has(e.env)) {
    (r.contentHostEgressProbed.delete(o), r.contentHostEgressUnanswered.add(o));
    return;
  }
  if (Eh(o)) return;
  let d = r.contentHostEgressInFlight.get(o);
  if (d !== void 0)
    return d.catch((_) => {
      if (t.aborted) throw _;
      return probeArtifactHostEgress(e, t);
    });
  let p = Rh(e, o, t).finally(() => {
    r.contentHostEgressInFlight.delete(o);
  });
  return (r.contentHostEgressInFlight.set(o, p), p);
}
async function Rh(e, t, r) {
  let o = ne(),
    d = () => {
      (o.contentHostEgressUnanswered.delete(t),
        o.contentHostEgressProbed.set(t, Date.now()));
    },
    p = (R) => {
      (n(
        `[artifact] egress probe of ${t}: ${R}; reading the host as unreachable for this check`,
      ),
        o.contentHostEgressProbed.delete(t),
        o.contentHostEgressUnanswered.add(t));
    },
    _ = () => {
      (o.contentHostEgressProbed.delete(t),
        o.contentHostEgressUnanswered.add(t),
        o.contentHostEgressDenied.add(e.env));
    },
    w;
  try {
    w = await externalHttp.get(`${t}/`, {
      signal: AbortSignal.any([r, AbortSignal.timeout(Ul)]),
      timeout: Ul,
      maxRedirects: 0,
      maxContentLength: Ah,
      responseType: "text",
      validateStatus: () => !0,
    });
  } catch (R) {
    if (r.aborted) throw R;
    if (F1e(R)) return _();
    return p(UXe(R) ? "an answer larger than the cap" : "no answer");
  }
  if (bN(w.status, w.headers)) return _();
  if (!(
    (w.status >= 200 && w.status < 300) ||
    (w.status === 403 &&
      Yi(
        w.headers,
        Zt(w.headers, w.data, (R) => R),
      ))
  ))
    return p(`unrecognised HTTP ${w.status}`);
  return d();
}
var Th = ["policySettings", "flagSettings", "userSettings"],
  Ph = ["localSettings", "projectSettings"];
function Wl(e) {
  let t = [];
  if (e.envDisableVar !== void 0 && Oh(e.envDisableVar))
    t.push({ layer: "env", via: "envVar" });
  let r;
  for (let _ of Th) {
    let w = zl(_, e);
    if (
      (Vl(t, _, _ === "policySettings" ? [...w, ...getDurablePolicyTierSettings()] : w, e),
      r === void 0 &&
        !(_ === "policySettings" && getPolicySettingsOrigin() === "hkcu") &&
        w.some((E) => E?.[e.enableKey] === !0))
    )
      r = _;
  }
  let o = t.some(
    (_) =>
      _.layer === "env" ||
      _.layer === "policySettings" ||
      _.layer === "flagSettings",
  );
  for (let _ of Ph) Vl(t, _, zl(_, e), e);
  let d = t.some(
    (_) => _.layer === "localSettings" || _.layer === "projectSettings",
  );
  return {
    enabled: t.length === 0 && (e.defaultOn || r !== void 0),
    decidedBy: t[0]?.layer ?? r ?? "default",
    offSources: t,
    lockedAboveUser: o,
    userControllable: !o && !d && Nr("userSettings"),
  };
}
function zl(e, t) {
  if (e === "policySettings") return [...getAllPolicyTierSettings(), getSettingsForSource("policySettings")];
  if (!Nr(e)) return [];
  if (e === "localSettings") return [getSettingsForSource(e), getLegacyLocalSettingsOverlay()];
  let r = getSettingsForSource(e);
  if (e === "projectSettings" && Ch(r, t) && Nr("userSettings") && projectSettingsAliasesUserSettings())
    return [];
  return [r];
}
function Ch(e, t) {
  return (
    e?.[t.enableKey] !== void 0 ||
    (t.legacyDisableKey !== void 0 && e?.[t.legacyDisableKey] !== void 0)
  );
}
function Vl(e, t, r, o) {
  if (r.some((p) => p?.[o.enableKey] === !1))
    e.push({ layer: t, via: "enableKey" });
  let d = o.legacyDisableKey;
  if (d !== void 0 && r.some((p) => p?.[d] === !0))
    e.push({ layer: t, via: "legacyDisableKey" });
}
function Oh(e) {
  if (a[e] || Ie(Ki(xC(), e)) || Ie(getAdminTierEnvValue(e)) || Ie(Ki(moe(), e))) return !0;
  for (let t of ["flagSettings", "userSettings"])
    if (Nr(t) && Ie(Ki(getSettingsForSource(t)?.env, e))) return !0;
  return !1;
}
function Ki(e, t) {
  if (e === void 0) return;
  if (t in e) return e[t];
  for (let [r, o] of Object.entries(e)) if (r.toUpperCase() === t) return o;
  return;
}
var Gl = {
  enableKey: "enableArtifact",
  legacyDisableKey: "disableArtifact",
  envDisableVar: "CLAUDE_CODE_DISABLE_ARTIFACT",
  defaultOn: !0,
};
function resolveArtifactEnableSetting() {
  return Wl(Gl);
}
function Ar() {
  return !resolveArtifactEnableSetting().enabled;
}
function $h() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return isSdkEntrypoint() || e === "claude-code-github-action" || e === "mcp";
}
function Yl(e) {
  return e === "local-agent" || e?.startsWith("claude-coworker") === !0;
}
function isCoworkFramePublishSession() {
  return getSessionEntrypoint() === "local-agent" && isDesktopHostSession() && !isClaudecodeEnv() && hasCoworkFrameArtifacts();
}
function isCoworkHostSession() {
  return (isCoworkSession() && isTopLevelCoworkSession()) || isCoworkFramePublishSession();
}
function othersArtifactReadConsentSurface() {
  return isCoworkSession();
}
function othersArtifactReadIsUserOnly(e) {
  return e !== void 0 && othersArtifactReadConsentSurface() && artifactHostUnreachable(e);
}
function Lh() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  if (e === "local-agent" && isCoworkFramePublishSession()) return !1;
  return Yl(e);
}
function isArtifactReadOnlySurface() {
  return Yl(getSessionEntrypoint()) && !isCoworkFramePublishSession();
}
function Mh() {
  return M1e() && Nh();
}
function Nh() {
  return Kl() === null;
}
function Kl() {
  if (getAPIProvider() !== "firstParty") return "third_party_provider";
  if (isEssentialTrafficOnly()) return "essential_traffic_only";
  if (po(a.CLAUDE_CODE_ARTIFACT)) return "artifact_env_off";
  if (!Ie(a.CLAUDE_CODE_ARTIFACT) && $h()) return "sdk_default_off";
  return null;
}
function ql() {
  return M1e() && Xi();
}
function Xi() {
  return Xl() === null;
}
function Xl() {
  if (Lh()) return "surface_excluded";
  return Kl();
}
function isArtifactToolEligible() {
  if (Ar()) return !1;
  return ql();
}
function Ih() {
  let e = getPolicyLimitsIneligibleReason();
  return e === void 0 || e === "prosumer_oauth" || e === "no_auth";
}
function Jl() {
  return (Ie(a.CLAUDE_CODE_ARTIFACT) && !1) || H("tengu_cobalt_plinth", Ih());
}
function Zl() {
  return Jl() && Qi();
}
function Dh() {
  return Ql() === null;
}
function Ql() {
  if (!Jl()) return "growthbook_off";
  if (dn() || Qi()) return null;
  return "admin_policy";
}
function isArtifactToolEnabled() {
  if (getArtifactPublishStubDir() !== null) return isArtifactToolRegistered();
  return M1e() && isArtifactToolRegistered() && Qi();
}
function isArtifactToolRegistered() {
  return artifactToolWithholdingGate() === null;
}
function artifactToolWithholdingGate() {
  if (Ar()) return "switched_off";
  if (getArtifactPublishStubDir() !== null) return null;
  return Xl() ?? Ql();
}
function isArtifactReadEnabled() {
  if (Ar()) return !1;
  if (!Mh()) return !1;
  return Zl();
}
function Ji() {
  let e = new Set(),
    t = !1,
    r = !1;
  for (let d of resolveArtifactEnableSetting().offSources)
    switch (d.layer) {
      case "env":
        e.add("env");
        break;
      case "userSettings":
        e.add(d.via === "legacyDisableKey" ? "setting" : "config_pref");
        break;
      case "policySettings":
      case "flagSettings":
        t = !0;
        break;
      case "localSettings":
      case "projectSettings":
        r = !0;
        break;
    }
  if (t) (e.delete("setting"), e.delete("config_pref"));
  if (e.size > 1) return "multiple";
  let [o] = e;
  if (o !== void 0) return o;
  return t || r ? "admin_managed" : null;
}
function Bh() {
  return Ji() !== null && ql() && Zl();
}
function maybeLogArtifactDisabledSession() {
  let e = ne();
  if (e.artifactDisabledSessionEvaluated) return;
  if (Pw() === null) return;
  if (((e.artifactDisabledSessionEvaluated = !0), !Bh())) return;
  let t = Ji();
  if (t === null) return;
  logEvent("tengu_artifact_disabled_session", {
    mechanism: fromEnum(t),
    session_interactivity:
      !ke() || getEnvEntrypoint() === "claude-vscode" || isDesktopHostEntrypoint()
        ? S("interactive")
        : S("noninteractive"),
  });
}
function maybeLogArtifactToolWithheld(e) {
  if (!hasCoworkFrameArtifacts() || getSessionEntrypoint() !== "local-agent" || isClaudecodeEnv()) return;
  let t = ne();
  if (e === null) {
    t.artifactRegisteredSeen = !0;
    let o = t.artifactWithheldReasonsLogged.at(-1);
    if (o === void 0 || t.artifactWithheldRecoveryLogged) return;
    ((t.artifactWithheldRecoveryLogged = !0),
      logEvent("tengu_artifact_tool_recovered", { withheld_reason: fromEnum(o) }));
    return;
  }
  if (Pw() === null) return;
  let r = jh(e);
  if (t.artifactWithheldReasonsLogged.includes(r)) return;
  (t.artifactWithheldReasonsLogged.push(r),
    logEvent("tengu_artifact_tool_withheld", {
      reason: fromEnum(r),
      off_mechanism: fromEnumOpt(r === "switched_off" ? Ji() : null),
      after_registered: t.artifactRegisteredSeen,
    }));
}
function jh(e) {
  switch (e) {
    case "surface_excluded":
      return isDesktopHostSession() ? "surface_excluded" : "nested_child_session";
    case "admin_policy": {
      if (!ec(getSubscriptionType())) return "subscription_ineligible";
      let t = getResponseFromCache();
      if (t === null)
        return isPolicyRouteMissing() ? "policy_route_missing" : "policy_cache_miss";
      return t.restrictions.allow_cobalt_plinth === void 0
        ? "compliance_taint"
        : "org_policy_denied";
    }
    default:
      return e;
  }
}
function getArtifactDefaultOn() {
  return Gl.defaultOn;
}
function Hh() {
  return Xi() && Dh();
}
function isArtifactConfigToggleable() {
  return Hh() && resolveArtifactEnableSetting().userControllable;
}
function Qi() {
  if (dn()) return artifactYieldAdminRefusal() === null;
  if (!ec(getSubscriptionType())) return !1;
  return isPolicyAllowed("allow_cobalt_plinth");
}
function ec(e) {
  return (
    e === "team" ||
    e === "enterprise" ||
    e === "pro" ||
    e === "max" ||
    e == null
  );
}
function artifactYieldAdminRefusal() {
  if (!dn()) return null;
  let e = getStoredOAuthSubscriptionType();
  if (e === null) return "plan_unreadable";
  if (e !== "pro" && e !== "max") return "org_policy_unverifiable";
  if (!isPolicyLimitsEligible()) return "policy_unavailable";
  if (isPolicyAllowed("allow_cobalt_plinth")) return null;
  if (getResponseFromCache() !== null) return "org_denied";
  return isPolicyRouteMissing() ? "policy_route_missing" : "cache_miss";
}
function isPlanArtifactEnabled() {
  return !1;
}
function isWorkshopEnabled() {
  return isArtifactToolEnabled() && H("tengu_gable_onyx_sluice", !1);
}
jer(isWorkshopEnabled);
function isWorkshopSchemaEnabled() {
  return isArtifactToolRegistered() && H("tengu_gable_onyx_sluice", !1);
}
function isWhiteboardEnabled() {
  return !1;
}
function isWhiteboardLiveEnabled() {
  return !1;
}
function isPrototypeEnabled() {
  return !1;
}
function isDesignCanvasEnabled() {
  return isArtifactToolEnabled() && H("tengu_ethereal_nova", !0);
}
function isPlanWorkshopOfferEnabled() {
  return (
    isWorkshopEnabled() &&
    !areBundledSkillsDisabled() &&
    !H("tengu_cedar_transom", !1) &&
    H("tengu_larch_pavise", !1)
  );
}
function isPlanPrototypeOfferEnabled() {
  return isPrototypeEnabled() && !areBundledSkillsDisabled();
}
function isMdArtifactStylingEnabled() {
  return !1;
}
function isArtifactTemplateSkillsEnabled() {
  return !1;
}
function isRepublishInlinePromptEnabled() {
  return H("tengu_cobalt_plinth_thrift", !1) === !0;
}
var Uh = "tengu_russet_pergola";
function isProductivitySkillsEnabled() {
  return !1;
}
function isArtifactPrReviewEnabled() {
  return !1;
}
function isArtifactPrReviewComposeEnabled() {
  return isArtifactPrReviewEnabled() && H("tengu_walnut_sconce", !1);
}
function zh() {
  return !1;
}
function isArtifactPrReviewComposeLatched() {
  let e = ne();
  if (e.prReviewComposeLatch === null) e.prReviewComposeLatch = zh();
  return e.prReviewComposeLatch;
}
function isPublishToolEnabled() {
  return isArtifactToolEnabled();
}
function isResumeFrameSeedEligible() {
  return !Ar() && Xi();
}
export {
  SCe,
  M1e,
  Bwt,
  N1e,
  bCe,
  Am,
  bN,
  F1e,
  jwt,
  $1e,
  ZGt,
  U1e,
  vK,
  B1e,
  eqt,
  _w,
  j1e,
  W1e,
  gJ,
  MXe,
  G1e,
  q1e,
  $Zn,
  Wwt,
  Cr,
  tqt,
  wCe,
  Swn,
  TG,
  hoe,
  z1e,
  V1e,
  nqt,
  wN,
  NXe,
  rqt,
  oqt,
  sqt,
  RK,
  MH,
  _oe,
  bwn,
  FXe,
  UZn,
  iqt,
  TN,
  Lj,
  wwn,
  EG,
  TCe,
  Twn,
  K1e,
  yoe,
  aqt,
  lqt,
  BZn,
  hJ,
  Ewn,
  $Xe,
  jZn,
  nP,
  UXe,
  Nd,
  WZn,
  Gwt,
  GZn,
  qwt,
  Efe,
  X1e,
  cqt,
  Awn,
  Y1e,
  BXe,
  uqt,
  jXe,
  WXe,
  GXe,
  qXe,
  Cwn,
  zXe,
  Afe,
  zwt,
  ECe,
  qZn,
  dqt,
  vwn,
  Vwt,
  J1e,
  Kwt,
  Cfe,
  VXe,
  _J,
  Q1e,
  ACe,
  pqt,
  zZn,
  VZn,
  yw,
  Xwt,
  Y_,
  fqt,
  KZn,
  yJ,
  Rwn,
  Z1e,
  XZn,
  YZn,
  JZn,
  kwn,
  Mj,
  Nj,
  wD,
  JE,
  rP,
  QZn,
  KXe,
  mqt,
  ZZn,
  jg,
  VER_SHAPE,
  makeOwnPublishesStore,
  makeLocalOwnPublishesStore,
  recordOwnPublish,
  isOwnPublishedVer,
  headAuthorship,
  withPublishInFlight,
  markPublishInFlight,
  clearPublishInFlight,
  isPublishInFlight,
  Ha,
  XXe,
  eer,
  ter,
  ner,
  YXe,
  JXe,
  CCe,
  yqt,
  Ywt,
  rer,
  rFe,
  NH,
  Soe,
  oer,
  Jwt,
  ser,
  qk,
  Fd,
  QXe,
  oFe,
  EN,
  AG,
  _u,
  sFe,
  Qwt,
  ier,
  aer,
  boe,
  iFe,
  Iwn,
  ler,
  cer,
  ZXe,
  uer,
  der,
  eYe,
  MAX_ARTIFACT_BYTES,
  isFrameBaseVersionEnabled,
  isFrameStaleGuardAutoReadEnabled,
  isFrameGuardOwnVersionProceedEnabled,
  artifactPageInlineResultCap,
  isArtifactConflictLegacy,
  isArtifactLangEnabled,
  isFrameListSharedScopeKilled,
  isFrameMultiFileEnabled,
  isFrameCopyFromEnabled,
  isFramePublicReadEnabled,
  isFrameSameChannelRawReadEnabled,
  isFrameLiveSubscribeEnabled,
  isFrameLiveTokenLeaseEnabled,
  isFrameDeclaredThumbnailEnabled,
  resolveContract,
  fetchContractDefs,
  fetchContractPrompt,
  derivePublishContextFrom,
  artifactReadObservationIn,
  observationStamp,
  sourcelessObservation,
  observedWithoutSource,
  ownMintStamp,
  versionHeldAsOwnMint,
  mainObservedArtifactVersion,
  makeMainObservedVersionReader,
  makeSetArtifactReadVersion,
  artifactVersionObserved,
  makeSetArtifactContractTarget,
  makeGetArtifactContractTarget,
  MAX_ECHO_MANIFEST_PATH,
  MAX_ECHO_MANIFEST_ENTRIES,
  splitManifestPaths,
  typeLockFromWire,
  FRAME_RUNTIME_MAX_SPAN,
  hasFramePreambleLead,
  exciseFrameAssetServeBlock,
  stripStaleInjections,
  StripUnsettledError,
  strippedAuthorBody,
  servedPageLooksNested,
  isValidArtifactLang,
  prepareArtifactBody,
  readFrameDecl,
  SERVED_SPLICE_PREFIX_RE,
  composeArtifactPage,
  startsWithSkeletonOpen,
  mintRoundTripPublishSignal,
  isMintedRoundTripPublishSignal,
  publishArtifact,
  surfacedViaForEntrypoint,
  trackFrameEvent,
  PUBLISH_CAP_FRAME,
  dailyPublishResetEpochSeconds,
  MAX_COPY_SOURCES,
  MANIFEST_TEXT_TYPES,
  MANIFEST_TOTAL_BUDGET,
  BINARY_FILE_MAX_BYTES,
  filesOnlyPublishProblem,
  publishInstanceFiles,
  publishLiveDocVersion,
  artifactViewerUrl,
  ARTIFACT_LIST_RELS,
  isKnownRel,
  ARTIFACT_LIST_SCOPES,
  listArtifacts,
  sidecarHistoryWith,
  refusedSidecarHistoryFor,
  workshopVerifiedSlugsWith,
  publishPlanArtifact,
  PUBLISH_CONFLICT_LEAD,
  FORCE_REFUSED_SENTENCE,
  conflictSubject,
  compareArtifactVersions,
  denyPolicyBody,
  PUBLISH_DENIED_FRAME,
  SLUG_GONE_MSG,
  PUBLISH_OUTCOME_UNKNOWN_FRAME,
  TYPE_FILE_WRITE_REFUSAL,
  errBody,
  TD,
  RG,
  HC,
  aTt,
  Hqt,
  wJ,
  fer,
  mer,
  pFe,
  tTn,
  lYe,
  fFe,
  nTn,
  ger,
  rTn,
  oTn,
  her,
  getShareEntry,
  storedGrantObserved,
  getShareEntryForPath,
  setShareEntry,
  setEffectiveCapabilities,
  linkPathToSlug,
  unlinkPath,
  retainPathLinks,
  recordPublishShareEcho,
  orderReadAgainstEntry,
  foldShareProbe,
  foldBootKind,
  foldBootCowritten,
  typeLockedFor,
  foldBootTypeLocked,
  foldBootDocs,
  probedLivePaths,
  deriveShareStatus,
  audienceViewNote,
  shareAudience,
  ownershipTag,
  BOOT_ORG_MISMATCH_CODE,
  issuedUnderDepartedAccount,
  probedOtherOrg,
  ownershipClassifierMark,
  shareAudienceMark,
  shareAudienceSentence,
  shareAudienceParenthetical,
  ownedByUser,
  isSomeoneElses,
  dbReadConsentMessage,
  ownershipAskNote,
  markAutoReactNoticePending,
  hasAutoReactNoticePending,
  clearAutoReactNoticePending,
  Dqt,
  Sw,
  AJ,
  _er,
  RN,
  Ife,
  Pfe,
  Lqt,
  Mqt,
  IC,
  yer,
  gYe,
  Ser,
  hYe,
  Ofe,
  cTn,
  uTn,
  ED,
  ber,
  Aoe,
  _Fe,
  wer,
  Ter,
  artifactHostUnreachable,
  probeArtifactHostEgress,
  resolveArtifactEnableSetting,
  isCoworkFramePublishSession,
  isCoworkHostSession,
  othersArtifactReadConsentSurface,
  othersArtifactReadIsUserOnly,
  isArtifactReadOnlySurface,
  isArtifactToolEligible,
  isArtifactToolEnabled,
  isArtifactToolRegistered,
  artifactToolWithholdingGate,
  isArtifactReadEnabled,
  maybeLogArtifactDisabledSession,
  maybeLogArtifactToolWithheld,
  getArtifactDefaultOn,
  isArtifactConfigToggleable,
  artifactYieldAdminRefusal,
  isPlanArtifactEnabled,
  isWorkshopEnabled,
  isWorkshopSchemaEnabled,
  isWhiteboardEnabled,
  isWhiteboardLiveEnabled,
  isPrototypeEnabled,
  isDesignCanvasEnabled,
  isPlanWorkshopOfferEnabled,
  isPlanPrototypeOfferEnabled,
  isMdArtifactStylingEnabled,
  isArtifactTemplateSkillsEnabled,
  isRepublishInlinePromptEnabled,
  isProductivitySkillsEnabled,
  isArtifactPrReviewEnabled,
  isArtifactPrReviewComposeEnabled,
  isArtifactPrReviewComposeLatched,
  isPublishToolEnabled,
  isResumeFrameSeedEligible,
};

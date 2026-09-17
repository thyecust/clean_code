// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 224 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ARTIFACT_TOOL_NAME, ARTIFACT_COMMENTS_TOOL_NAME, ARTIFACT_DATA_TOOL_NAME, ARTIFACT_CHECK_TOOL_NAME, ArtifactInputError } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { buildTool } from "../权限系统/chunk-qdy0h5k2.js";
import { PREVIEW_PROMPT_PARAGRAPH, commentsPromptParagraphs, DB_PROMPT_PARAGRAPH, VERIFY_PROMPT_PARAGRAPH } from "./chunk-pdd7kz7p.js";
import { gI, lwe, Tte } from "./chunk-qpgskeea.js";
import "./chunk-x29r16ke.js";
import { swe, iwe, Qze } from "./chunk-01jnk0v2.js";
import "../../01-核心基础设施/共享小工具-未细化/claude-browser-mcp-server.js";
import { artifactSchemaGates } from "./chunk-b6k1z7an.js";
import "./chunk-fx5ekm7e.js";
import {
  hjn,
  _jn,
  yjn,
  xon,
  Hon,
  Sjn,
  Rut,
  MS,
  MGe,
} from "./chunk-pvztfdrb.js";
import "../Teammates团队/chunk-weg7y2ya.js";
import "../../01-核心基础设施/共享小工具-未细化/whiteboard-telemetry.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dgth8ahx.js";
import "../Bridge-RemoteControl/chunk-jpq2fv3g.js";
import { Out, Fon } from "./chunk-yrjr7v83.js";
import "./chunk-5gvg7p5p.js";
import { respell } from "../Teammates团队/chunk-y89mhs4a.js";
var l = {
    comments: [
      [/action:? "comments"/g, 'action "read"'],
      [/action:? "unwatch"/g, 'action "watch" with `on: false`'],
      [/action:? "status"/g, 'action "watch" with no `url`'],
      [
        /action:? "resume_replies"|\bresume_replies\b/g,
        'action "watch" with `replies: true`',
      ],
    ],
    data: [
      [/action:? "(?:read_db|write_db)" with db_op /g, "action "],
      [/\bdb_op\b/g, "action"],
      [/action:? "read_db"|\bread_db\b/g, "a read (get, list or query)"],
      [
        /action:? "write_db"|\bwrite_db\b/g,
        "a write (set, update, delete or batch)",
      ],
    ],
    check: [],
  },
  u = {
    comments: {
      comments: '`action: "read"`',
      status: '`action: "watch"` with no `url`',
      unwatch: '`action: "watch"` with `on: false`',
      resume_replies: '`action: "watch"` with `replies: true`',
    },
    data: {
      read_db: 'as the read itself \u2014 `action`: "get", "list" or "query"',
      write_db:
        'as the write itself \u2014 `action`: "set", "update", "delete" or "batch"',
    },
    check: {},
  };
function c(e, a) {
  let r = a;
  for (let [t, o] of l[e]) r = r.replace(t, o);
  return r;
}
var d = [
  ['`action: "comments"`', '`action: "read"`'],
  ['`action: "status"` lists', '`action: "watch"` with no `url` lists'],
  [" (pass `url` to check one)", ""],
  [
    '`action: "unwatch"` with `url`',
    '`action: "watch"` with `on: false` and its `url`',
  ],
  ["`status` shows", "that listing shows"],
  [
    "that artifact's `status` row says",
    "that artifact's row in that listing says",
  ],
  ["a watch result, `status`, or", "a watch result, that listing, or"],
];
function h(e) {
  let a = Fon(!0, e);
  for (let [r, t] of d) a = a.replaceAll(r, t);
  return a;
}
function m(e) {
  let a = [
    `Read and answer the comment threads people leave on a published artifact, and manage this session's artifact watches. Publishing and reading the artifact itself is the \`${ARTIFACT_TOOL_NAME}\` tool's job; every call here names the artifact by its \`url\`.`,
    respell(commentsPromptParagraphs(e.watchRail === "none" ? Out() : ""), [
      ['`action: "comments"`', '`action: "read"`'],
    ]),
    h(e.watchRail),
  ];
  if (e.watchRail === "live")
    a.push(
      "**Resuming automatic replies**: `action: \"watch\"` with `replies: true` and the artifact's `url` re-enables automatic comment replies that were stopped or paused for it (they stop when their live-updates task is killed or the watch is stopped, and pause \u2014 the watch kept, until the user's next message \u2014 when the user interrupts the session with Ctrl+C / Stop). Use it ONLY when the user has explicitly asked to resume auto-replies; it is approved the way a publish is (a prompt in default mode) and cannot undo the session-wide auto-reply disarm from the kill-all-agents gesture.",
    );
  return a.join(`

`);
}
var p = [
  [
    'these actions read and write it as the user. Pass `action: "read_db"` with the artifact\'s `url` and `db_op`:',
    "this tool reads and writes it as the user; every call takes the artifact's `url`. To read, pass `action`:",
  ],
  ['Pass `action: "write_db"` with `db_op`:', "To write, pass `action`:"],
];
function f() {
  return [
    `The artifact itself is published and read with the \`${ARTIFACT_TOOL_NAME}\` tool; this tool is its page's shared database.`,
    respell(DB_PROMPT_PARAGRAPH, p),
  ].join(`

`);
}
function w(e) {
  return [
    `Check a page before or after publishing it with the \`${ARTIFACT_TOOL_NAME}\` tool.`,
    ...(e.previewOn ? [PREVIEW_PROMPT_PARAGRAPH] : []),
    ...(e.verifyOn ? [VERIFY_PROMPT_PARAGRAPH] : []),
  ].join(`

`);
}
function g(e) {
  let a = Object.entries(gI)
    .filter(([r, t]) => t === e.addon && (e.offersLegacyVerb?.(r) ?? !0))
    .map(([r]) => r);
  return a.length === 0
    ? e.searchHint
    : `${e.searchHint} (formerly the ${ARTIFACT_TOOL_NAME} tool's ${a.join(", ")})`;
}
function i(e) {
  let a = (t) => lwe(e.addon, t),
    r = (t) => Tte(e.addon, t);
  return buildTool({
    name: e.name,
    get searchHint() {
      return g(e);
    },
    shouldDefer: !0,
    briefStandalone: MS.briefStandalone,
    familyParentToolName: ARTIFACT_TOOL_NAME,
    toFamilyParentInput: (t) => a(t),
    ruleContentField: MS.ruleContentField,
    getPath: (t) => MS.getPath(a(t)),
    maxResultSizeChars: MS.maxResultSizeChars,
    persistenceThresholdCeiling: MS.persistenceThresholdCeiling,
    skipAggregateToolResultBudget: MS.skipAggregateToolResultBudget,
    preserveToolUseResultInSubagents: MS.preserveToolUseResultInSubagents,
    stripToolUseResultAtCreation: MS.stripToolUseResultAtCreation,
    stripForStorage: MS.stripForStorage,
    userFacingName: () => ARTIFACT_TOOL_NAME,
    get inputSchema() {
      return e.inputSchema();
    },
    get outputSchema() {
      return MS.outputSchema;
    },
    isEnabled: () => Qze(e.addon),
    isConcurrencySafe: (t) => MS.isConcurrencySafe(a(t)),
    isReadOnly: (t) => MS.isReadOnly(a(t)),
    isDestructive: (t) => MS.isDestructive(a(t)),
    ignoresWholeToolAllowRule: (t) => MS.ignoresWholeToolAllowRule(a(t)),
    suppressesAlwaysAllowRule: (t) => MS.suppressesAlwaysAllowRule(a(t)),
    permissionCheckFailureDecision: (t, o) => {
      let n = a(t);
      return Rut(
        Hon(
          e.name,
          () => MS.permissionCheckFailureDecision(n, o),
          n,
          n,
          o,
          MGe,
        ),
        r,
      );
    },
    async checkPermissions(t, o) {
      let n = a(t);
      return Rut(
        await Sjn(await MS.checkPermissions(n, o), xon(o, n, MGe), () =>
          MS.description(n),
        ),
        r,
      );
    },
    toAutoClassifierInput: (t) => MS.toAutoClassifierInput(a(t)),
    description: (t, ...o) => MS.description(a(t), ...o),
    getToolUseSummary: (t) => MS.getToolUseSummary(a(t)),
    prompt: async () => e.prompt(artifactSchemaGates()),
    async validateInput(t, o) {
      let n = e.contradiction?.(t);
      if (n !== void 0) return { result: !1, message: n, errorCode: 8 };
      let s = await MS.validateInput(a(t), o);
      return s.result ? s : { ...s, message: c(e.addon, s.message) };
    },
    async call(t, ...o) {
      try {
        return await MS.call(a(t), ...o);
      } catch (n) {
        if (n instanceof ArtifactInputError) n.message = c(e.addon, n.message);
        throw n;
      }
    },
    validationErrorSteer(t) {
      let o = t?.action,
        n = u[e.addon],
        s = typeof o === "string" && Object.hasOwn(n, o) ? n[o] : void 0;
      return s === void 0
        ? null
        : `action "${o}" is spelled ${s} in this tool.`;
    },
    mapToolResultToToolResultBlockParam: MS.mapToolResultToToolResultBlockParam,
  });
}
var R = i({
    addon: "comments",
    name: ARTIFACT_COMMENTS_TOOL_NAME,
    searchHint:
      "read and reply to comment threads on a published artifact; watch it for republishes",
    inputSchema: hjn,
    prompt: m,
    contradiction: (e) =>
      e.action === "watch" && e.on === !1 && e.replies === !0
        ? "watch: `on: false` stops the watch and `replies: true` resumes automatic replies on it \u2014 pass one, not both"
        : void 0,
  }),
  A = i({
    addon: "data",
    name: ARTIFACT_DATA_TOOL_NAME,
    searchHint: "read and write a published artifact's shared database",
    inputSchema: _jn,
    prompt: f,
  }),
  y = i({
    addon: "check",
    name: ARTIFACT_CHECK_TOOL_NAME,
    searchHint: "preview a page locally and read viewers' runtime diagnostics",
    inputSchema: yjn,
    prompt: w,
    offersLegacyVerb: (e) => (e === "verify" ? swe() : iwe()),
  }),
  ARTIFACT_ADDON_TOOLS = [R, A, y];
export { ARTIFACT_ADDON_TOOLS };

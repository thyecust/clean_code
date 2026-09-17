// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 200 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Z } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { getOauthConfig } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { Ve, R, l, Ps } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { j, B, dZ } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { b, z } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { oe } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { Tn, ht, isHostManagedProviderAuth, getAuthTokenSource, getClaudeAIOAuthTokens, handleOAuth401Error, getClaudeAIOAuthTokensAsync, getAuthTokenSourceAsync } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { isFirstPartyAnthropicHost } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { getToolPermissionContext } from "../权限系统/chunk-fjrcf22x.js";
import { Tt } from "../权限系统/chunk-qdy0h5k2.js";
import { NV, lj, agn, hasHookForEvent } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import {
  YA,
  mbe,
  hqe,
  $sn,
  Xee,
  Yee,
  Jee,
  Adt,
  Ice,
  N4,
  gbe,
  H6n,
  I6n,
  _qe,
  P6n,
  O6n,
} from "../Memory-CLAUDE.md/chunk-9b6sc1gb.js";
import {
  mqe,
  Vee,
  S6n,
  C9,
  b6n,
  NPe,
  gqe,
  Kee,
  ydt,
  T6n,
  E6n,
} from "../DesignSync/chunk-20rab5yy.js";
import { ube, u6n } from "../../01-核心基础设施/共享小工具-未细化/chunk-kv5vaqew.js";
import "../DesignSync/chunk-aycc6z76.js";
import "../认证-OAuth登录/chunk-5bg9xwqx.js";
import { mWn } from "../../01-核心基础设施/共享小工具-未细化/chunk-er6a87rc.js";
import { s, O, se, v, c, Qe, it, fe } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { getClientPlatform } from "../../01-核心基础设施/共享小工具-未细化/user-agent.js";
function N(e) {
  return Buffer.byteLength(e, "utf8");
}
var W = {
    list_design_systems: { readOnly: !0, destructive: !1 },
    get_claude_design_prompt: { readOnly: !0, destructive: !1 },
    list_projects: { readOnly: !0, destructive: !1 },
    get_project: { readOnly: !0, destructive: !1 },
    list_files: { readOnly: !0, destructive: !1 },
    read_file: { readOnly: !0, destructive: !1 },
    get_conversation: { readOnly: !0, destructive: !1 },
    list_members: { readOnly: !0, destructive: !1 },
    render_preview: { readOnly: !1, destructive: !1 },
    create_project: { readOnly: !1, destructive: !1 },
    put_conversation: { readOnly: !1, destructive: !1 },
    finalize_plan: { readOnly: !1, destructive: !1 },
    write_files: { readOnly: !1, destructive: !1 },
    copy_files: { readOnly: !1, destructive: !1 },
    create_support_js: { readOnly: !1, destructive: !1 },
    add_member: { readOnly: !1, destructive: !1 },
    delete_files: { readOnly: !1, destructive: !0 },
    remove_member: { readOnly: !1, destructive: !0 },
    update_member_role: { readOnly: !1, destructive: !0 },
    update_sharing: { readOnly: !1, destructive: !0 },
  },
  V = {
    create_project: { top: new Set(["name", "design_system_id"]) },
    put_conversation: {
      top: new Set(["project_id", "title", "messages"]),
      arrays: {
        messages: {
          fields: new Set(["role", "content"]),
          required: new Set(["role", "content"]),
        },
      },
    },
    finalize_plan: {
      top: new Set(["project_id", "writes", "deletes", "scope"]),
      arrays: { writes: "string", deletes: "string" },
      scalarEnums: { scope: new Set(["paths", "project"]) },
    },
    write_files: {
      top: new Set(["project_id", "plan_token", "files"]),
      arrays: {
        files: {
          fields: new Set([
            "path",
            "data",
            "local_path",
            "encoding",
            "if_match",
          ]),
          required: new Set(["path"]),
        },
      },
    },
    delete_files: {
      top: new Set(["project_id", "plan_token", "paths", "files"]),
      arrays: {
        paths: "string",
        files: {
          fields: new Set(["path", "if_match"]),
          required: new Set(["path"]),
        },
      },
    },
    copy_files: {
      top: new Set(["project_id", "plan_token", "files"]),
      arrays: {
        files: {
          fields: new Set(["src", "dest", "src_project_id", "if_match"]),
          required: new Set(["src", "dest"]),
        },
      },
    },
    render_preview: {
      top: new Set(["project_id", "path", "render", "validators"]),
      arrays: { validators: "string" },
    },
    create_support_js: {
      top: new Set(["project_id", "plan_token", "path", "if_match"]),
    },
    add_member: {
      top: new Set(["project_id", "account_uuid", "email", "role"]),
      scalarEnums: {
        role: {
          accepts: new Set(["viewer", "commenter", "editor"]),
          serverNormalizes: !0,
        },
      },
    },
    update_member_role: {
      top: new Set(["project_id", "account_uuid", "role"]),
      scalarEnums: {
        role: {
          accepts: new Set(["viewer", "commenter", "editor"]),
          serverNormalizes: !0,
        },
      },
    },
    remove_member: { top: new Set(["project_id", "account_uuid"]) },
    update_sharing: {
      top: new Set(["project_id", "scope", "link_permission"]),
      scalarEnums: {
        scope: { accepts: new Set(["invited", "org"]), serverNormalizes: !0 },
        link_permission: {
          accepts: new Set(["view", "comment", "edit"]),
          serverNormalizes: !0,
        },
      },
    },
  },
  J = {
    list: { top: new Set(["full"]) },
    list_design_systems: { top: new Set() },
    get_claude_design_prompt: {
      top: new Set(["design_system_id", "project_id"]),
    },
    list_projects: { top: new Set() },
    get_project: { top: new Set(["project_id"]) },
    list_files: { top: new Set(["project_id", "path"]) },
    read_file: { top: new Set(["project_id", "path"]) },
    get_conversation: { top: new Set(["project_id", "chat_id"]) },
    list_members: { top: new Set(["project_id"]) },
  };
function le(e, t) {
  let n = Object.hasOwn(V, e) ? V[e] : Object.hasOwn(J, e) ? J[e] : void 0;
  if (!n) {
    let o = L(e);
    if (o?.readOnly === !0) return null;
    if (o !== void 0)
      return `ClaudeDesign ${e}: the server reports this operation as write-capable, and this client version can't validate its arguments (it needs a WRITE_OP_SCHEMAS entry). Update Claude Code to use it.`;
    return `ClaudeDesign ${e}: unrecognized operation. If the server added it recently, call {operation: "list"} first \u2014 a read-only operation becomes callable after discovery; a write-tier operation needs a WRITE_OP_SCHEMAS entry in this client.`;
  }
  let r = `ClaudeDesign ${e}`,
    d = (o) => (o.length > 60 ? o.slice(0, 60) + "\u2026" : o);
  if (
    e === "finalize_plan" &&
    t?.scope === "project" &&
    (t.writes !== void 0 || t.deletes !== void 0)
  )
    return `${r}: scope "project" takes no writes/deletes \u2014 a project-scoped plan covers every path in the project.`;
  for (let [o, p] of Object.entries(t ?? {})) {
    if (!n.top.has(o)) {
      let i = [...n.top].find((g) => g.toLowerCase() === o.toLowerCase()),
        u = [...n.top].join(", ");
      return `${r}: unrecognized argument '${d(o)}'${i ? ` (did you mean '${i}'?)` : ""}. ${u ? `Allowed: ${u}.` : "This operation takes no arguments."}`;
    }
    if (!(o in (n.arrays ?? {})) && typeof p === "object" && p !== null)
      return `${r}.${o}: must be a scalar (string/bool/number), not ${Array.isArray(p) ? "an array" : "an object"}.`;
    let _ = o === "plan_token" ? 65536 : 4096;
    if (typeof p === "string" && N(p) > _)
      return `${r}.${o}: too long (${N(p)} bytes; capped at ${_}).`;
    let y = "scalarEnums" in n ? n.scalarEnums?.[o] : void 0;
    if (y !== void 0) {
      let i = "accepts" in y,
        u = i ? y.accepts : y,
        g = i && typeof p === "string" ? p.trim().toLowerCase() : p;
      if (typeof g !== "string" || !u.has(g))
        return `${r}.${o}: must be one of ${[...u].map((w) => `"${w}"`).join(", ")}${i ? " (case-insensitive)" : ""}.`;
      if (i && typeof p === "string" && p.length > g.length + 2)
        return `${r}.${o}: excess whitespace around the value.`;
    }
  }
  for (let [o, p] of Object.entries(n.arrays ?? {})) {
    let _ = t?.[o];
    if (_ === void 0) continue;
    if (!Array.isArray(_)) return `${r}.${o}: must be an array.`;
    for (let y = 0; y < _.length; y++) {
      let i = _[y];
      if (p === "string") {
        if (typeof i !== "string") return `${r}.${o}[${y}]: must be a string.`;
        if (N(i) > 4096)
          return `${r}.${o}[${y}]: too long (${N(i)} bytes; capped at 4096).`;
      } else {
        if (typeof i !== "object" || i === null || Array.isArray(i))
          return `${r}.${o}[${y}]: must be an object with keys from {${[...p.fields].join(", ")}}.`;
        for (let u of p.required)
          if (typeof i[u] !== "string")
            return `${r}.${o}[${y}]: missing required field '${u}'.`;
        for (let [u, g] of Object.entries(i)) {
          if (!p.fields.has(u)) {
            let w = [...p.fields].find(
              (C) => C.toLowerCase() === u.toLowerCase(),
            );
            return `${r}.${o}[${y}]: unrecognized field '${d(u)}'${w ? ` (did you mean '${w}'?)` : u === "content" ? " (did you mean 'data'? designmcp's write_files reads 'data', not 'content')" : ""}. Allowed: ${[...p.fields].join(", ")}.`;
          }
          if (typeof g !== "string")
            return `${r}.${o}[${y}].${u}: must be a string (got ${Array.isArray(g) ? "array" : typeof g}).`;
          if (u !== "data" && u !== "content" && N(g) > 4096)
            return `${r}.${o}[${y}].${u}: too long (${N(g)} bytes; non-body fields are capped at 4096).`;
        }
      }
    }
  }
  return null;
}
function K(e) {
  return Object.hasOwn(W, e) ? W[e] : void 0;
}
var Ce = m(() =>
  it({
    name: s(),
    description: s().optional(),
    inputSchema: se().optional(),
    annotations: it({
      readOnlyHint: O().optional(),
      destructiveHint: O().optional(),
    }).optional(),
  }),
);
class de {
  byOperation = new Map();
  hintsFor(e) {
    return this.byOperation.get(e);
  }
  knows(e) {
    return this.byOperation.has(e);
  }
  record(e, t) {
    this.byOperation.set(e, t);
  }
  reset() {
    this.byOperation.clear();
  }
}
var Ae = new j(() => new de());
function ne() {
  return Ae.of(B().host);
}
function L(e) {
  return ne().hintsFor(e);
}
function ue(e) {
  let t = ne();
  t.reset();
  let n = [];
  for (let r of e) {
    let d = Ce().safeParse(r);
    if (!d.success) continue;
    let o = d.data,
      p = Object.hasOwn(W, o.name) ? W[o.name] : void 0,
      _ = o.annotations?.readOnlyHint ?? p?.readOnly ?? !1,
      y = o.annotations?.destructiveHint ?? p?.destructive ?? !0;
    if (p) ((_ &&= p.readOnly), (y ||= p.destructive));
    (t.record(o.name, { readOnly: _, destructive: y }),
      n.push({
        name: o.name,
        description: o.description ?? "",
        inputSchema: o.inputSchema ?? {},
        readOnlyHint: _,
        destructiveHint: y,
      }));
  }
  return n;
}
function pe(e) {
  return !ne().knows(e);
}
function q(e, t) {
  if (!t) return e;
  return e.split(t).join("[redacted-oauth-token]");
}
function $e(e) {
  return {
    Authorization: `Bearer ${e}`,
    "Content-Type": "application/json",
    "anthropic-version": "2023-06-01",
    "anthropic-client-platform": getClientPlatform(),
  };
}
function P(e) {
  return e < 1024 ? `${e}B` : `${(e / 1024).toFixed(1)}KB`;
}
function U(e) {
  return Buffer.byteLength(e, "utf8");
}
function De(e) {
  switch (e) {
    case "list":
      return "List operations";
    case "list_design_systems":
      return "List design systems";
    case "get_claude_design_prompt":
      return "Get design prompt";
    case "list_projects":
      return "List projects";
    case "get_project":
      return "Read project metadata";
    case "list_files":
      return "List project files";
    case "read_file":
      return "Read file";
    case "get_conversation":
      return "Read conversation";
    case "list_members":
      return "List project members";
    case "create_project":
      return "Create project";
    case "put_conversation":
      return "Write conversation";
    case "finalize_plan":
      return "Finalize plan";
    case "write_files":
      return "Write files";
    case "copy_files":
      return "Copy files";
    case "delete_files":
      return "Delete files";
    case "render_preview":
      return "Render preview";
    case "create_support_js":
      return "Create support.js";
    case "add_member":
      return "Add project member";
    case "update_member_role":
      return "Update member role";
    case "remove_member":
      return "Remove project member";
    case "update_sharing":
      return "Update sharing";
    default:
      return e ?? "";
  }
}
var Re = m(() =>
    Qe({
      operation: s()
        .regex(/^[\w.-]{1,64}$/)
        .describe(
          `Claude Design action to perform. Call with "${lj}" first to discover the available operations and their argument schemas.`,
        ),
      arguments: fe(s(), se())
        .default({})
        .describe(
          "Action input object (server-validated). Pass {} for operations that take no input.",
        ),
    }),
  ),
  Ie = m(() =>
    c({ operation: s(), content: v(fe(s(), se())), isError: O().optional() }),
  );
function re(e) {
  let t = getToolPermissionContext(e);
  return (
    !e.options?.isNonInteractiveSession &&
    t.mode !== "bypassPermissions" &&
    !(t.mode === "plan" && t.isBypassPermissionsModeAvailable)
  );
}
var ge =
    "Approving also lets writes and deletes to exactly these paths run without another prompt for up to 15 minutes (file contents are not shown again; anything to any other path will still ask).",
  he = {
    invited: "private: invited members only",
    org: "visible to your whole organization",
    public: "PUBLIC",
  },
  Ee = 60,
  me =
    /[\u0000-\u001F\u007F-\u009F\u00AD\u061C\u180E\u200B\u200E\u200F\u202A-\u202E\u2060-\u2064\u2066-\u2069\u2026\u2800\u3164\uFE00-\uFE0E\uFEFF\uFFF9-\uFFFB\uFFA0]/;
function Oe(e) {
  return (
    /(?:^|\s)[\u200C\u200D\uFE0F]/.test(e) ||
    /[\u200C\u200D](?=\s|$)/.test(e) ||
    /[\u200C\u200D][\u200C\u200D]/.test(e) ||
    /(?:^|[^\p{Emoji}])\uFE0F/u.test(e)
  );
}
var _e = /\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF]|\uD834[\uDD73-\uDD7A]/,
  ye =
    /["\u201C\u201D\u201E\u201F\uFF02\u2033\u2036\u02BA\u02DD\u02EE\u05F4\u3003\u301D-\u301F\u275D\u275E\u2014\u2015]/;
function G(e) {
  if (e.agentContext?.agentType !== "main") return !1;
  try {
    return !hasHookForEvent(
      "PermissionRequest",
      e.sessionHooksRegistry,
      e.agentContext?.agentId ?? "",
    );
  } catch {
    return !1;
  }
}
async function Te(e, t, n, r) {
  try {
    let d = await NPe(r);
    if (d.ok !== !0) return null;
    let o = await Se(
      e,
      "get_project",
      { project_id: t },
      d.accessToken,
      n,
      null,
      r,
    );
    if (o.isError === !0) return null;
    for (let p of o.content)
      if (p?.type === "text" && typeof p.text === "string") {
        let _ = z(p.text),
          { name: y, url: i } = _,
          u = _.sharing?.scope;
        if (typeof y !== "string") return null;
        let g = y.replace(/\s+/g, " ").trim();
        if (
          g.length === 0 ||
          me.test(g) ||
          _e.test(g) ||
          Oe(g) ||
          g.includes("://")
        )
          return null;
        if (ye.test(g)) return null;
        if (typeof u !== "string" || !Object.hasOwn(he, u)) return null;
        if (typeof i !== "string") return null;
        let w;
        try {
          w = new URL(i);
        } catch {
          return null;
        }
        if (
          w.protocol !== "https:" ||
          !w.pathname.endsWith(`/p/${t}`) ||
          w.username !== "" ||
          w.password !== "" ||
          w.search !== "" ||
          w.hash !== "" ||
          i.length > 200 ||
          /\s/.test(i) ||
          ye.test(i) ||
          me.test(i) ||
          _e.test(i) ||
          /[\u200C\u200D\uFE0F]/.test(i)
        )
          return null;
        let C = oe(g, Ee);
        return {
          name: C === g ? g : `${C.trimEnd()}\u2026`,
          sharingLabel: he[u],
          url: i,
        };
      }
    return null;
  } catch {
    if (n.aborted) throw new Ve();
    return null;
  }
}
var DesignTool = Tt({
    name: NV,
    searchHint: "work with Claude Design (claude.ai/design) projects",
    maxResultSizeChars: 1e5,
    get inputSchema() {
      return Re();
    },
    get outputSchema() {
      return Ie();
    },
    isEnabled: ube,
    isConcurrencySafe(e) {
      if (e.operation === lj) return !0;
      return (L(e.operation) ?? K(e.operation))?.readOnly === !0;
    },
    isReadOnly(e) {
      if (e.operation === lj) return !0;
      return (L(e.operation) ?? K(e.operation))?.readOnly === !0;
    },
    async description() {
      return agn;
    },
    async prompt() {
      return agn;
    },
    userFacingName(e) {
      let t = De(e?.operation);
      return t ? `Claude Design: ${t}` : "Claude Design";
    },
    toAutoClassifierInput(e) {
      return { operation: e.operation, arguments: e.arguments ?? {} };
    },
    async validateInput(e) {
      let t = le(e.operation, e.arguments);
      if (t) return { result: !1, message: t, errorCode: 1 };
      if (e.operation === "finalize_plan") {
        let n = e.arguments?.project_id;
        if (typeof n !== "string" || n.length === 0)
          return {
            result: !1,
            message:
              "ClaudeDesign finalize_plan: project_id is required (a plan is always scoped to one project).",
            errorCode: 1,
          };
        if (!/^[A-Za-z0-9._-]+$/.test(n))
          return {
            result: !1,
            message:
              "ClaudeDesign finalize_plan: project_id contains characters outside the server id charset (letters, digits, dot, underscore, dash).",
            errorCode: 1,
          };
        if (n.length > hqe - 2)
          return {
            result: !1,
            message:
              "ClaudeDesign finalize_plan: project_id is longer than any server-issued project id.",
            errorCode: 1,
          };
      }
      return { result: !0 };
    },
    async checkPermissions(e, t) {
      let n = t.toolState.get(YA),
        r = e.operation === lj ? null : await gqe(n, t.credentials),
        d = {
          ...e,
          __consentBitShown: r,
          __consentAskCanReachUser: re(t),
          __projectGrantAskShown: void 0,
          __projectGrantServerObserved: void 0,
          __reservedTargetsAskShown: void 0,
          __finalizePlanAskShown: void 0,
        },
        o = r !== null ? Vee(r) : null;
      if (e.operation === "finalize_plan" && e.arguments?.scope === "project")
        return {
          behavior: "deny",
          message:
            'ClaudeDesign finalize_plan: scope "project" is no longer supported by this client. Write files directly without plan_token \u2014 the first write to a project asks for a one-time durable approval \u2014 or use finalize_plan with writes/deletes for path-scoped plans and deletes.',
          decisionReason: {
            type: "safetyCheck",
            reason:
              'finalize_plan scope:"project" is superseded by the durable per-project write grant',
            classifierApprovable: !1,
          },
        };
      let p =
          e.operation === lj
            ? { readOnly: !0, destructive: !1 }
            : (L(e.operation) ?? K(e.operation)),
        _ = p?.readOnly !== !0,
        y = _ && p?.destructive !== !1;
      if (
        e.operation === "copy_files" &&
        !(
          typeof e.arguments?.plan_token === "string" &&
          e.arguments.plan_token.length > 0
        )
      )
        return {
          behavior: "deny",
          message:
            "ClaudeDesign copy_files: copying without a plan_token always requires per-batch approval \u2014 use finalize_plan declaring every destination in writes, then pass the returned plan_token.",
          decisionReason: {
            type: "safetyCheck",
            reason:
              "tokenless copy_files is per-batch-only \u2014 its destinations have no reserved-path or render-integrity gate",
            classifierApprovable: !1,
          },
        };
      if (o) {
        if (
          (e.operation === "write_files" ||
            e.operation === "create_support_js") &&
          !(
            typeof e.arguments?.plan_token === "string" &&
            e.arguments.plan_token.length > 0
          )
        ) {
          let g = _qe(e.operation, e.arguments);
          if (g.outcome !== "pass" || !$sn(g.targets)) {
            let w = g.targets !== void 0 && g.targets.length === 0,
              C = g.outcome === "pass";
            return {
              behavior: "deny",
              message: w
                ? `ClaudeDesign ${e.operation}: this call names no target paths \u2014 list the files to write, or use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`
                : C
                  ? `ClaudeDesign ${e.operation}: this batch is too large to display fully for approval \u2014 split it into smaller batches, or use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`
                  : `ClaudeDesign ${e.operation}: this batch includes paths that always require per-batch approval \u2014 use finalize_plan with writes/deletes and pass the returned plan_token.`,
              decisionReason: {
                type: "safetyCheck",
                reason: w
                  ? "a write batch naming no target paths \u2014 malformed call"
                  : C
                    ? "the batch cannot be rendered fully in the approval dialog \u2014 split it or use per-batch plans"
                    : "reserved or unenumerable target paths always require per-batch approval",
                classifierApprovable: !1,
              },
            };
          }
        }
        let i = _ ? `Design ${e.operation} writes to claude.ai/design.` : "",
          u = e.operation === "finalize_plan" ? ge : "";
        return {
          behavior: "ask",
          message: [o, i, u].filter(Boolean).join(" "),
          updatedInput:
            e.operation === "finalize_plan"
              ? { ...d, __finalizePlanAskShown: !0 }
              : d,
          localDisplayOnly: !0,
          decisionReason: {
            type: "safetyCheck",
            reason:
              "design agent consent \u2014 approving records a server-side grant for Claude agents to read and write your design projects",
            classifierApprovable: !1,
          },
        };
      }
      if (!_) return { behavior: "allow", updatedInput: d };
      if (
        getToolPermissionContext(t).mode !== "plan" &&
        G(t) &&
        P6n(n, e.operation, e.arguments).outcome === "allow"
      )
        return { behavior: "allow", updatedInput: d };
      if (
        (e.operation === "write_files" ||
          e.operation === "create_support_js") &&
        !(
          typeof e.arguments?.plan_token === "string" &&
          e.arguments.plan_token.length > 0
        )
      ) {
        if (t.options?.isNonInteractiveSession === !0) {
          let u = {
              behavior: "deny",
              message: `ClaudeDesign ${e.operation}: writing without a plan_token requires a one-time interactive project approval, which is not available in non-interactive sessions \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
              decisionReason: {
                type: "safetyCheck",
                reason:
                  "a durable project write grant requires an interactive approval with a server-verified project identity",
                classifierApprovable: !1,
              },
            },
            g = e.arguments?.project_id;
          if (typeof g !== "string" || g.length === 0 || !G(t) || N4(n, g))
            return u;
          if (_qe(e.operation, e.arguments).outcome !== "pass") return u;
          if (getToolPermissionContext(t).mode === "plan") return u;
          if (Adt(n, g)) return { behavior: "allow", updatedInput: d };
          if ((await ydt(n, g, t.credentials)) === "granted" && !N4(n, g)) {
            if ((Jee(n, g), getToolPermissionContext(t).mode !== "plan"))
              return { behavior: "allow", updatedInput: d };
          }
          return u;
        }
        if (!G(t))
          return {
            behavior: "deny",
            message: `ClaudeDesign ${e.operation}: writing without a plan_token requires a one-time project approval, which is not available in subagent or PermissionRequest-hook sessions \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
            decisionReason: {
              type: "safetyCheck",
              reason:
                "a durable project write grant requires a context where the approval card reaches the user directly",
              classifierApprovable: !1,
            },
          };
        let i = e.arguments?.project_id;
        if (typeof i === "string" && i.length > 0) {
          if (H6n(n, i))
            return {
              behavior: "deny",
              message: `ClaudeDesign ${e.operation}: this project cannot hold a durable write grant for this account (it may be shared from another organization) \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
              decisionReason: {
                type: "safetyCheck",
                reason:
                  "the server refused to mint a durable grant for this project \u2014 per-batch plans only",
                classifierApprovable: !1,
              },
            };
          let u = _qe(e.operation, e.arguments),
            g = getToolPermissionContext(t).mode === "plan";
          if (u.outcome === "pass" && g) {
            if (!(
              Adt(n, i) ||
              (!N4(n, i) &&
                (await ydt(n, i, t.credentials)) === "granted" &&
                !N4(n, i))
            ))
              return {
                behavior: "deny",
                message: `ClaudeDesign ${e.operation}: writing without a plan_token requires a one-time project approval, which is not shown in plan mode \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
                decisionReason: {
                  type: "safetyCheck",
                  reason:
                    "a durable project write grant cannot be minted from plan mode \u2014 per-batch plans only",
                  classifierApprovable: !1,
                },
              };
            Jee(n, i);
          } else if (u.outcome === "pass") {
            if (Adt(n, i)) return { behavior: "allow", updatedInput: d };
            let w = await ydt(n, i, t.credentials);
            if (w === "granted" && !N4(n, i)) {
              if ((Jee(n, i), getToolPermissionContext(t).mode !== "plan"))
                return { behavior: "allow", updatedInput: d };
            } else if (w === "unavailable")
              return {
                behavior: "deny",
                message: `ClaudeDesign ${e.operation}: could not check for a project write grant (this server may not support durable grants) \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
                decisionReason: {
                  type: "safetyCheck",
                  reason:
                    "the grant state could not be verified \u2014 fail toward the per-batch plan flow",
                  classifierApprovable: !1,
                },
              };
            else {
              let C = () =>
                  getToolPermissionContext(t).mode !== "plan"
                    ? null
                    : {
                        behavior: "deny",
                        message: `ClaudeDesign ${e.operation}: writing without a plan_token requires a one-time project approval, which is not shown in plan mode \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
                        decisionReason: {
                          type: "safetyCheck",
                          reason:
                            "a durable project write grant cannot be minted from plan mode \u2014 per-batch plans only",
                          classifierApprovable: !1,
                        },
                      },
                I = C();
              if (I) return I;
              if (!re(t))
                return {
                  behavior: "deny",
                  message: `ClaudeDesign ${e.operation}: writing without a plan_token to a project without a write grant requires a one-time interactive approval, which cannot be shown in this permission mode \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
                  decisionReason: {
                    type: "safetyCheck",
                    reason:
                      "a durable project write grant requires an interactive approval with a server-verified project identity",
                    classifierApprovable: !1,
                  },
                };
              let h = await Te(n, i, t.abortController.signal, t.credentials);
              if (h === null)
                return {
                  behavior: "deny",
                  message: `ClaudeDesign ${e.operation}: a durable project write grant is only offered when the approval dialog can name its target, and the project identity (name, sharing, URL) could not be verified or rendered faithfully. If this is a fresh connection, read the project first (e.g. get_project \u2014 approve the Claude Design connection if prompted) and retry once; otherwise use finalize_plan with writes/deletes and pass the returned plan_token (the per-batch flow), which is always supported.`,
                  decisionReason: {
                    type: "safetyCheck",
                    reason:
                      "a durable project write grant requires a server-verified project identity in the approval card",
                    classifierApprovable: !1,
                  },
                };
              let k = C();
              if (k) return k;
              return {
                behavior: "ask",
                message: `Approving writes the listed files now, and lets Claude write to ANY file in the project "${h.name}" (${h.sharingLabel}) \u2014 ${h.url} \u2014 without asking again. This approval is remembered for this project until you revoke it in settings at claude.ai/design (future writes and file contents are not shown for approval). Deletes and CLAUDE.md/.claude paths still ask every time.`,
                updatedInput: { ...d, __projectGrantAskShown: i },
                localDisplayOnly: !0,
                serverApprovalWatch: {
                  kind: "design_project_grant",
                  projectId: i,
                },
                decisionReason: {
                  type: "safetyCheck",
                  reason:
                    "first write under a project grant \u2014 approval mints a durable write grant for this project, revocable at claude.ai/design settings",
                  classifierApprovable: !1,
                },
              };
            }
          } else {
            if (!(
              $sn(u.targets) &&
              (Adt(n, i) ||
                (!N4(n, i) &&
                  (await ydt(n, i, t.credentials)) === "granted" &&
                  !N4(n, i)))
            )) {
              let I = u.targets !== void 0 && u.targets.length === 0;
              return {
                behavior: "deny",
                message: I
                  ? `ClaudeDesign ${e.operation}: this call names no target paths \u2014 list the files to write, or use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`
                  : `ClaudeDesign ${e.operation}: this batch includes paths that always require per-batch approval \u2014 use finalize_plan with writes/deletes and pass the returned plan_token.`,
                decisionReason: {
                  type: "safetyCheck",
                  reason: I
                    ? "a write batch naming no target paths \u2014 malformed call"
                    : "reserved or unenumerable target paths always require per-batch approval",
                  classifierApprovable: !1,
                },
              };
            }
            return (
              Jee(n, i),
              {
                behavior: "ask",
                message: `Design ${e.operation} writes to claude.ai/design.`,
                updatedInput: { ...d, __reservedTargetsAskShown: !0 },
                localDisplayOnly: !0,
                decisionReason: {
                  type: "safetyCheck",
                  reason: y
                    ? "destructive \u2014 model-generated arguments"
                    : "remote write \u2014 model-generated arguments",
                  classifierApprovable: !1,
                },
              }
            );
          }
        }
      }
      if (e.operation === "finalize_plan")
        return {
          behavior: "ask",
          message: `Design finalize_plan writes to claude.ai/design. ${ge}`,
          updatedInput: { ...d, __finalizePlanAskShown: !0 },
          localDisplayOnly: !0,
          decisionReason: {
            type: "safetyCheck",
            reason:
              "finalize_plan \u2014 the human is the path-review boundary; approval also grants prompt-free writes to these paths for 15 min",
            classifierApprovable: !1,
          },
        };
      if (y)
        return {
          behavior: "ask",
          message: `Design ${e.operation} writes to claude.ai/design.`,
          updatedInput: d,
          decisionReason: {
            type: "safetyCheck",
            reason: p
              ? "destructive \u2014 model-generated arguments"
              : "unknown operation \u2014 fail-closed to destructive write",
            classifierApprovable: !1,
          },
        };
      return {
        behavior: "ask",
        message: `Design ${e.operation} writes to claude.ai/design.`,
        updatedInput: d,
        decisionReason: {
          type: "safetyCheck",
          reason: "remote write \u2014 model-generated arguments",
          classifierApprovable: !1,
        },
      };
    },
    async call(e, t) {
      let n = t.toolState.get(YA),
        r = e.__consentAskCanReachUser ?? !1,
        d = r && re(t);
      if (e.operation === "finalize_plan" && r) {
        let h = (e.arguments ?? {}).project_id;
        if (typeof h === "string" && h.length > 0) Yee(n, h);
      }
      if (Xee.has(e.operation)) {
        let h = (e.arguments ?? {}).project_id;
        if (typeof h === "string" && h.length > 0)
          (Yee(n, h), mbe(n, h), Ice(n, h), gbe(n, h));
      }
      let o = await NPe(t.credentials);
      if (!o.ok)
        throw new R(
          Je(o, {
            isNonInteractiveSession: t.options?.isNonInteractiveSession,
          }),
          "design_tool_auth_failed",
        );
      let p = o.accessToken,
        _ = e.__consentBitShown ?? null,
        y = e.__projectGrantAskShown ?? null,
        i = e.__projectGrantServerObserved === !0,
        u = (() => {
          if (
            e.operation !== "write_files" &&
            e.operation !== "create_support_js"
          )
            return null;
          let h = e.arguments ?? {};
          if (typeof h.plan_token === "string" && h.plan_token.length > 0)
            return null;
          let k = h.project_id;
          return typeof k === "string" && k.length > 0 ? k : null;
        })();
      if (
        e.operation === "copy_files" &&
        !(
          typeof e.arguments?.plan_token === "string" &&
          e.arguments.plan_token.length > 0
        )
      )
        throw new R(
          "copy_files without a plan_token always requires per-batch approval \u2014 use finalize_plan declaring every destination in writes, then pass the returned plan_token.",
          "design_tool_exec_backstop_tokenless_copy",
        );
      if (u !== null) {
        let h = _qe(e.operation, e.arguments),
          k = e.__reservedTargetsAskShown === !0;
        if (h.outcome !== "pass" && !k)
          throw new R(
            `${e.operation} without a plan_token: this batch includes paths that always require per-batch approval \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`,
            "design_tool_exec_backstop_safety_trip",
          );
      }
      let g = t.abortController.signal,
        w = t.agentContext?.agentId ?? null,
        C;
      try {
        if (
          ((C = await I({})),
          e.operation === "finalize_plan" &&
            e.__finalizePlanAskShown === !0 &&
            d &&
            G(t))
        ) {
          let h = e.arguments ?? {},
            k = C.isError !== !0 ? O6n(C.content) : null,
            f = (S) =>
              Array.isArray(S) ? S.filter((D) => typeof D === "string") : [];
          if (
            k !== null &&
            typeof h.project_id === "string" &&
            h.scope !== "project"
          )
            I6n(n, k.token, {
              projectId: h.project_id,
              writes: f(h.writes),
              deletes: f(h.deletes),
              serverExpiresAtMs: k.expiresAtMs ?? void 0,
            });
        }
      } catch (h) {
        if (g.aborted && !(h instanceof Ve)) throw new Ve();
        if (h instanceof ie) {
          let k = await We(t.credentials, {
            isNonInteractiveSession: t.options?.isNonInteractiveSession,
            wasRetried: h.wasRetried,
          });
          if (g.aborted) throw new Ve();
          throw new R(k, "design_tool_auth_401");
        }
        if (h instanceof Q && t.options?.isNonInteractiveSession)
          throw new Q({ isNonInteractiveSession: !0 });
        throw h;
      }
      return { data: C };
      async function I(h) {
        try {
          let k = await Se(n, e.operation, e.arguments, p, g, w, t.credentials);
          if (_ !== null && !g.aborted && k.isError !== !0) C9(n, _, !0);
          if (
            u !== null &&
            !g.aborted &&
            k.isError !== !0 &&
            ((y === u && !i) || !N4(n, u))
          )
            Jee(n, u);
          return k;
        } catch (k) {
          if (k instanceof Y) {
            if ((Ice(n, k.projectId), S6n(n), h.grant === !0)) throw k;
            if (k.projectId !== y || i) {
              if (
                e.operation === "write_files" ||
                e.operation === "create_support_js"
              ) {
                if (t.options?.isNonInteractiveSession === !0)
                  throw new R(
                    "Writing to this project needs a project write grant that is not currently active (it may have been revoked) \u2014 use finalize_plan with writes (and deletes if needed), then pass the returned plan_token. A durable project write grant can be approved from an interactive Claude Code session.",
                    "design_tool_needs_project_grant_non_interactive",
                  );
                throw new R(
                  "Writing to this project needs a one-time approval \u2014 retry the write: you will be shown the approval, or routed to the per-batch finalize_plan flow.",
                  "design_tool_needs_project_grant_not_shown",
                );
              }
              throw new R(
                "This operation needs a plan_token here \u2014 use finalize_plan (listing the destination paths in writes) and pass the returned plan_token. (It can run without one only under an existing project write grant, set up by a write_files to this project.)",
                "design_tool_needs_project_grant_ineligible_op",
              );
            }
            if (!d || !G(t))
              throw new R(
                "Writing to this project needs a one-time approval, which cannot be granted automatically in this permission mode \u2014 use finalize_plan with writes/deletes and pass the returned plan_token.",
                "design_tool_needs_project_grant_no_prompt",
              );
            try {
              await T6n(n, k.projectId, t.credentials);
            } catch (S) {
              if (Ps(S).kind === "auth")
                throw new R(
                  "This session's credential cannot record the project approval \u2014 approve this project from an interactive Claude Code session (run the write there and accept the approval card), then retry here: this session picks the recorded approval up from the server.",
                  "design_tool_grant_mint_bearer_refused",
                );
              throw S;
            }
            return I({ ...h, grant: !0 });
          }
          if (!(k instanceof X)) throw k;
          if (h.consent === !0) throw k;
          let f = k.consent;
          if (f !== _)
            throw (
              C9(n, f, !1),
              new R(
                `${Vee(f)} The user hasn't granted this yet \u2014 ask them to retry (the prompt will show on the next call) or run /design consent.`,
                "design_tool_needs_consent_not_shown",
              )
            );
          if (!d)
            throw (
              C9(n, f, !1),
              new R(
                `${Vee(f)} The user hasn't granted this \u2014 run /design consent to grant it (it can't be approved automatically in this permission mode).`,
                "design_tool_needs_consent_no_prompt",
              )
            );
          return (await Kee(n, f, t.credentials), I({ ...h, consent: !0 }));
        }
      }
    },
    mapToolResultToToolResultBlockParam(e, t) {
      let n = Fe(e.content.flatMap(Pe)),
        r = e.isError
          ? n
              .flatMap((d) => (d.type === "text" ? [d.text] : []))
              .join(
                `
`,
              )
              .trim() || "(error with no message)"
          : null;
      return {
        tool_use_id: t,
        type: "tool_result",
        is_error: e.isError,
        content: r ?? (n.length > 0 ? n : "(empty result)"),
      };
    },
    renderToolUseMessage(e, { verbose: t }) {
      let r = (f, S = 80) => {
          let D = f.replace(/[\x00-\x1f\x7f-\x9f]+/g, " ");
          return D.length > S ? D.slice(0, S).trimEnd() + "\u2026" : D;
        },
        d = e.arguments;
      if (!d || Object.keys(d).length === 0) return "";
      if (!t) {
        let f = {};
        for (let [S, D] of Object.entries(d))
          if (Array.isArray(D)) {
            let A =
              S === "messages"
                ? "message"
                : S === "validators"
                  ? "validator"
                  : "file";
            f[A] = (f[A] ?? 0) + D.length;
          }
        return Object.entries(f)
          .map(([S, D]) => `${D} ${D === 1 ? S : S + "s"}`)
          .join(", ");
      }
      if (
        !Object.hasOwn(V, e.operation ?? "") &&
        !Object.hasOwn(J, e.operation ?? "")
      ) {
        let f = b(d) ?? "";
        return `${r(e.operation ?? "")} (${P(U(f))} of arguments not shown \u2014 operation unknown to this client version)`;
      }
      let o = (f, S) => {
          if (typeof f === "string")
            return f.length > 80 ? `${r(f)} (${P(U(f))})` : r(f);
          if (typeof f === "object" && f !== null) {
            let A = f,
              x = U(b(f) ?? "");
            if (typeof A.path === "string") {
              let E = typeof A.data === "string" ? A.data : "",
                H = ["encoding", "local_path", "if_match"].filter(
                  (F) => typeof A[F] === "string" && A[F],
                ),
                T = `${r(A.path)} (${P(x)})${H.length ? ` [+${H.join(",")}]` : ""}`;
              return S > 0 && E ? `${T}: ${r(E, S)}` : T;
            }
            if (typeof A.content === "string") {
              let E = typeof A.role === "string" ? A.role : "?",
                H = `${r(E, 12)} (${P(x)})`;
              return S > 0 && A.content ? `${H}: ${r(A.content, S)}` : H;
            }
            if (typeof A.src === "string" || typeof A.dest === "string")
              return `${r(String(A.src ?? "?"), 40)} \u2192 ${r(String(A.dest ?? "?"), 40)}${A.src_project_id ? ` [from ${r(String(A.src_project_id), 24)}]` : ""}${typeof A.if_match === "string" && A.if_match ? " [+if_match]" : ""}${x > 256 ? ` (${P(x)})` : ""}`;
          }
          let D = b(f) ?? String(f);
          return `${r(D)} (${P(U(D))})`;
        },
        p = (f) =>
          typeof f === "string"
            ? r(f, 40)
            : typeof f === "object" && f !== null
              ? r(String(f.path ?? f.dest ?? f.role ?? "?"), 40)
              : "?",
        _ = (f) => {
          if (Array.isArray(f) && f.length > 0) {
            let D = f.slice(0, 20),
              A = t
                ? Math.max(0, Math.min(200, Math.floor(1800 / D.length) - 95))
                : 0,
              x =
                t &&
                A === 0 &&
                D.some((T) => {
                  if (typeof T !== "object" || T === null) return !1;
                  let F = T;
                  return (
                    (typeof F.data === "string" && F.data) ||
                    (typeof F.content === "string" && F.content)
                  );
                }),
              E = f.slice(20),
              H =
                E.length > 0
                  ? `, +${E.length} more: ${E.slice(0, 10).map(p).join(", ")}${E.length > 10 ? ", \u2026" : ""}`
                  : "";
            return (
              `[${f.length} ${f.length === 1 ? "entry" : "entries"}: ` +
              D.map((T) => o(T, A)).join(", ") +
              H +
              "]" +
              (x ? " (content previews omitted)" : "")
            );
          }
          let S = b(f) ?? String(f);
          return S.length > 80 ? `${r(S)} (${P(U(S))})` : r(S);
        },
        y = Object.entries(d).sort(
          ([, f], [, S]) => Number(Array.isArray(f)) - Number(Array.isArray(S)),
        ),
        i = y.filter(([, f]) => Array.isArray(f)),
        u =
          i.length >= 2
            ? ` (${i.map(([f, S]) => `${r(f)}: ${S.length}`).join(", ")})`
            : "",
        g = y.map(([f, S]) => `${r(f)}: ${_(S)}`).join(", "),
        w = b(d) ?? "",
        C = U(w),
        h = `${C > 256 ? ` (${P(C)} total)` : ""}${u} ${g}`.trimStart(),
        k = t ? 2000 : 1500;
      return h.length > k ? h.slice(0, k - 1).trimEnd() + "\u2026" : h;
    },
  }),
  ze = /^image\/(png|jpeg|gif|webp)$/,
  we = 130000,
  ae = 130000;
function Pe(e) {
  if (e.type === "text" && typeof e.text === "string")
    return [{ type: "text", text: e.text }];
  if (
    e.type === "image" &&
    typeof e.data === "string" &&
    typeof e.mimeType === "string" &&
    ze.test(e.mimeType)
  ) {
    if (e.data.length > we)
      return [
        {
          type: "text",
          text: `[render_preview image omitted \u2014 ${Math.round(e.data.length / 1024)}KB exceeds ${Math.round(we / 1024)}KB cap]`,
        },
      ];
    return [
      {
        type: "image",
        source: { type: "base64", media_type: e.mimeType, data: e.data },
      },
    ];
  }
  return [{ type: "text", text: b(e) ?? "" }];
}
function He(e) {
  return e.type === "image" && e.source.type === "base64"
    ? e.source.data.length
    : e.type === "text"
      ? e.text.length
      : 0;
}
function Fe(e) {
  let t = ae,
    n = [],
    r = 0,
    d = 0;
  for (let o of e) {
    let p = He(o);
    if (p <= t) ((t -= p), n.push(o));
    else (r++, (d += p));
  }
  if (r > 0)
    n.push({
      type: "text",
      text: `[ClaudeDesign result truncated \u2014 ${r} block(s) (${Math.round(d / 1024)}k chars) omitted; aggregate over ${Math.round(ae / 1024)}k-char cap]`,
    });
  return n;
}
class X extends Error {
  consent;
  constructor(e) {
    super("Claude Design requires consent");
    this.consent = e;
    this.name = "DesignNeedsConsentError";
  }
}
function xe(e) {
  if (e == null || typeof e !== "object" || e.error !== "needs_consent")
    return null;
  let t = e.consent;
  return mqe(t) ? t : null;
}
class Y extends Error {
  projectId;
  constructor(e) {
    super("Claude Design requires a project write grant");
    this.projectId = e;
    this.name = "DesignNeedsProjectGrantError";
  }
}
function Ne(e) {
  if (e == null || typeof e !== "object" || e.error !== "needs_project_grant")
    return null;
  let t = e.project_id;
  if (
    typeof t !== "string" ||
    t.length === 0 ||
    t.length > hqe - 2 ||
    !/^[A-Za-z0-9._-]+$/.test(t)
  )
    return null;
  return t;
}
class Q extends R {
  constructor(e) {
    super(
      e?.isNonInteractiveSession === !0
        ? "Claude Design rejected this session's claude.ai credential (HTTP 403): it does not carry Claude Design access, and /design login cannot run in this non-interactive session. Ask the user to run /design login once from an interactive Claude Code session on this machine \u2014 non-interactive runs here then reuse that authorization. (CI runners and hosted sessions have no interactive session; Claude Design is not reachable from those without a stored /design login credential.)"
        : "Claude Design rejected this session's claude.ai credential (HTTP 403): it does not carry Claude Design access. Run /design login to authorize Claude Design, then retry.",
      "design_tool_needs_design_scopes",
    );
    this.name = "DesignNeedsScopesError";
  }
}
var Le = 64;
function ve(e, t, n) {
  if (
    (e.servedCatalogHashes.delete(t),
    e.servedCatalogHashes.set(t, n),
    e.servedCatalogHashes.size > Le)
  ) {
    let r = e.servedCatalogHashes.keys().next().value;
    if (r !== void 0) e.servedCatalogHashes.delete(r);
  }
}
function Be(e) {
  let t = e.replace(/\s+/g, " ").trim(),
    n = t.indexOf(". "),
    r = n > 0 ? t.slice(0, n + 1) : t;
  return r.length > 140 ? oe(r, 140).trimEnd() + "\u2026" : r;
}
async function Se(e, t, n, r, d, o, p) {
  try {
    let _ = null;
    if (t === lj || pe(t)) _ = await Ue(e, r, d, p);
    if (t === lj) {
      let w = (_ ?? []).map((f) => ({
          name: f.name,
          description: f.description,
          inputSchema: f.inputSchema,
        })),
        C = b({ tools: w }) ?? "",
        I = Tn(C),
        h = n?.full;
      if (
        !(h !== void 0 && h !== !1 && h !== "false" && h !== 0 && h !== "") &&
        o !== null &&
        e.servedCatalogHashes.get(o) === I
      ) {
        ve(e, o, I);
        let f = {
          catalog_unchanged: !0,
          catalog_hash: I,
          note:
            `The operation catalog is unchanged since the earlier "${lj}" result in this conversation (hash ${I}) \u2014 full descriptions and argument schemas are in that result. ` +
            `If it is no longer in context, call ${NV}({operation: "${lj}", arguments: {full: true}}) for the full catalog.`,
          operations: w.map((S) => ({
            name: S.name,
            summary: Be(S.description),
          })),
        };
        return { operation: t, content: [{ type: "text", text: b(f) }] };
      }
      if (o !== null) ve(e, o, I);
      return { operation: t, content: [{ type: "text", text: C }] };
    }
    if (_ && L(t) === void 0)
      return {
        operation: t,
        content: [
          {
            type: "text",
            text: `Unknown Claude Design operation "${t}". Call ${NV}({operation: "${lj}"}) to see the available operations.`,
          },
        ],
        isError: !0,
      };
    let y = (w) =>
        te(
          {
            jsonrpc: "2.0",
            id: 1,
            method: "tools/call",
            params: { name: t, arguments: n },
          },
          r,
          w,
          d,
          p,
        ),
      i = await ee(e, r, d, p),
      u = await y(i);
    if (u.status === 404 && i) (ke(e), (u = await y(await ee(e, r, d, p))));
    if (u.status === 403) {
      let w = xe(u.data);
      if (w !== null) throw new X(w);
      let C = Ne(u.data);
      if (C !== null) throw new Y(C);
    }
    if (u.status < 200 || u.status >= 300)
      throw new R(
        `Claude Design ${t} failed: HTTP ${u.status} ${q(b(u.data) ?? "", r)}`,
        "design_tool_http_error",
      );
    let g = u.data;
    if (g.error)
      return {
        operation: t,
        content: [
          {
            type: "text",
            text: q(
              `${g.error.message}${g.error.data ? ` \u2014 ${b(g.error.data)}` : ""}`,
              r,
            ),
          },
        ],
        isError: !0,
      };
    return {
      operation: t,
      content: g.result?.content ?? [],
      isError: g.result?.isError,
    };
  } catch (_) {
    if (d.aborted) throw new Ve();
    if (_ instanceof R || _ instanceof X || _ instanceof Y) throw _;
    if (Me(_))
      throw new R(
        `Claude Design ${t} was cancelled because a concurrent Claude Design call was interrupted mid-handshake (the first calls of a session share one initialize/discovery round-trip). Retry the operation.`,
        "design_tool_shared_handshake_cancelled",
      );
    throw new R(q(l(_), r), "design_tool_request_failed");
  }
}
function Me(e) {
  if (typeof e !== "object" || e === null) return !1;
  let t = e;
  return (
    t.name === "CanceledError" ||
    t.name === "AbortError" ||
    t.code === "ERR_CANCELED"
  );
}
function Ue(e, t, n, r) {
  if (e.discoverInFlight) return e.discoverInFlight;
  let d = qe(e, t, n, r);
  return (
    (e.discoverInFlight = d),
    d.finally(() => {
      if (e.discoverInFlight === d) e.discoverInFlight = null;
    })
  );
}
async function qe(e, t, n, r) {
  let d = (_) =>
      te(
        { jsonrpc: "2.0", id: 1, method: "tools/list", params: {} },
        t,
        _,
        n,
        r,
      ),
    o = await ee(e, t, n, r),
    p = await d(o);
  if (p.status === 404 && o) (ke(e), (p = await d(await ee(e, t, n, r))));
  if (p.status < 200 || p.status >= 300 || !Array.isArray(p.data.result?.tools))
    throw new R(
      `Claude Design discovery failed: HTTP ${p.status}`,
      "design_tool_discovery_failed",
    );
  return ue(p.data.result.tools);
}
function ke(e) {
  ((e.cachedSessionId = null),
    (e.initialized = !1),
    (e.initializeInFlight = null),
    (e.discoverInFlight = null));
}
async function ee(e, t, n, r) {
  if (e.initialized) return e.cachedSessionId;
  if (e.initializeInFlight) return e.initializeInFlight;
  let d = (async () => {
    let o = await te(
      {
        jsonrpc: "2.0",
        id: 0,
        method: "initialize",
        params: {
          protocolVersion: "2025-03-26",
          capabilities: {},
          clientInfo: { name: "claude-cli-design-tool", version: "1" },
        },
      },
      t,
      null,
      n,
      r,
      "text",
    );
    if (o.status < 200 || o.status >= 300)
      throw new R(
        `Claude Design initialize failed: HTTP ${o.status}`,
        "design_tool_initialize_failed",
      );
    let p = o.response.headers["mcp-session-id"];
    return (
      (e.cachedSessionId = typeof p === "string" && p ? p : null),
      (e.initialized = !0),
      e.cachedSessionId
    );
  })();
  e.initializeInFlight = d;
  try {
    return await d;
  } finally {
    if (e.initializeInFlight === d) e.initializeInFlight = null;
  }
}
class ie extends R {
  wasRetried;
  constructor(e = !1) {
    super(
      "Claude Design authentication failed (HTTP 401). The claude.ai credential is missing or expired \u2014 run /login, or /design login for a separate design credential.",
      "design_tool_auth_401",
    );
    ((this.name = "DesignAuth401Error"), (this.wasRetried = e));
  }
}
var be = 5000;
async function Ge(e, t, n) {
  let r;
  if (M() && n !== void 0) r = await getClaudeAIOAuthTokensAsync(n);
  else r = getClaudeAIOAuthTokens();
  if (e === r?.accessToken && Boolean(r?.refreshToken)) {
    if ((await Promise.race([handleOAuth401Error(e, n).catch(() => !1), Z(be, t)]), t.aborted))
      return null;
  }
  let d = await Promise.race([
    NPe(n).catch(() => null),
    Z(be, t).then(() => null),
  ]);
  return d?.ok === !0 && d.accessToken !== e ? d.accessToken : null;
}
async function We(e, t) {
  let n = t?.isNonInteractiveSession === !0,
    r =
      t?.wasRetried === !0
        ? "Claude Design authentication failed (HTTP 401): a freshly refreshed credential was also rejected \u2014 likely a server-side access problem with this account or credential rather than simple expiry."
        : "Claude Design authentication failed (HTTP 401): the credential was rejected and an automatic refresh did not produce a new one.",
    d;
  if (M() && e !== void 0) d = await getClaudeAIOAuthTokensAsync(e);
  else d = getClaudeAIOAuthTokens();
  let o =
    !!d?.accessToken &&
    !!d.refreshToken &&
    d.scopes?.includes("user:design:read") === !0;
  if (!o && (await b6n(e)))
    return `${r} The design credential (from /design login) is expired or revoked${n ? ", and /design login requires an interactive terminal \u2014 re-authenticate outside this session" : " \u2014 run /design login to re-authenticate"}.`;
  if (!o && d?.accessToken && !d.refreshToken) {
    let { source: p } = M() && e !== void 0 ? await getAuthTokenSourceAsync(e) : getAuthTokenSource();
    if (a.CLAUDE_CODE_REMOTE_SESSION_ID)
      return `${r} This remote session's credential is injected and rotated by the session host \u2014 it usually self-heals within minutes. Retry shortly; if this persists, the host session needs attention.`;
    if (
      (p === "CCR_OAUTH_TOKEN_FILE" ||
        p === "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR") &&
      (!dZ() || isHostManagedProviderAuth())
    )
      return `${r} This session authenticates with an OAuth token injected by the CCR host, which has no refresh token \u2014 it cannot self-heal and has likely expired or been revoked. The credential comes from the host session; check or restart it there.`;
    if (
      p === "CLAUDE_CODE_OAUTH_TOKEN" ||
      (p === "ANTHROPIC_AUTH_TOKEN" && Boolean(a.CLAUDE_CODE_OAUTH_TOKEN))
    )
      return `${r} This session authenticates with the CLAUDE_CODE_OAUTH_TOKEN environment variable, which has no refresh token \u2014 it cannot self-heal and has likely expired or been revoked. Mint a fresh token with \`claude setup-token\` and restart the session with it${n ? "" : ", or unset it and run /login"}.`;
  }
  if (n)
    return `${r} The claude.ai credential is expired or revoked, and /login requires an interactive terminal \u2014 re-authenticate outside this session.`;
  return `${r} Run /login, or /design login for a separate design credential.`;
}
async function te(e, t, n, r, d, o, p = !1) {
  if (!isFirstPartyAnthropicHost(getOauthConfig().BASE_API_URL))
    throw Error(
      "Claude Design is only reachable from api.anthropic.com; the current OAuth base URL is not on the first-party allowlist.",
    );
  let _ = await ht.post("/v1/design/mcp", e, {
    auth: "none",
    headers: {
      ...$e(t),
      Accept: "application/json, text/event-stream",
      "X-Anthropic-Client": "claude-cli-design-tool",
      ...(n && { "Mcp-Session-Id": n }),
    },
    timeout: 60000,
    maxContentLength: 16 * ae,
    validateStatus: () => !0,
    signal: r,
    ...(o && { responseType: o }),
  });
  if (!_.ok)
    throw new R(
      `Claude Design unavailable: ${_.reason}`,
      "design_tool_policy_refused",
    );
  if (_.status === 401) {
    if (!p && !r.aborted) {
      let i = await Ge(t, r, d);
      if (i !== null && !r.aborted)
        try {
          let u = await te(e, i, n, r, d, o, !0);
          if (typeof u.data === "string") {
            if (u.data.includes(i)) u.data = q(u.data, i);
          } else if (u.data !== null && u.data !== void 0) {
            let g = b(u.data);
            if (g !== void 0 && g.includes(i)) u.data = z(q(g, i));
          }
          return u;
        } catch (u) {
          if (u instanceof Error)
            try {
              u.message = q(u.message, i);
            } catch {}
          throw u;
        }
    }
    if (!p && r.aborted) throw new Ve();
    throw new ie(p);
  }
  if (_.status === 403) {
    let i = _.data;
    if (typeof i === "string")
      try {
        i = z(i);
      } catch {
        i = null;
      }
    if (
      i !== null &&
      typeof i === "object" &&
      i.error === "needs_design_scopes"
    )
      throw new Q();
  }
  let y = _.response.headers["content-type"];
  if (typeof y === "string" && y.toLowerCase().startsWith("text/event-stream"))
    throw new R(
      "Claude Design returned a text/event-stream response; this client only handles JSON.",
      "design_tool_sse_unsupported",
    );
  return _;
}
function Je(e, t) {
  let n = e.detail ? ` (${e.detail})` : "";
  switch (e.reason) {
    case "needs_design_login":
      if (t?.isNonInteractiveSession)
        return "Claude Design needs a claude.ai credential, and /design login cannot run in this non-interactive session. Ask the user to run /design login once from an interactive Claude Code session on this machine \u2014 non-interactive runs here then reuse that authorization. (CI runners and hosted sessions have no interactive session; Claude Design is not reachable from those without a stored /design login credential.)";
      return `No design-capable credential${n}. Run /design login to authorize Claude Design.`;
    case "design_refresh_failed":
      return `Design token refresh failed${n}. Retry shortly${t?.isNonInteractiveSession ? "" : ", or run /design login"}.`;
    case "wrong_provider":
      return "Claude Design is only available with claude.ai authentication. It is not supported through Bedrock, Vertex, or other third-party providers.";
    case "essential_traffic_only":
      return "Claude Design is disabled because nonessential network traffic is restricted.";
  }
}
mWn({
  isEnabled: u6n,
  createObserver: (e, t, n) =>
    e.kind === "design_project_grant" ? E6n(t.get(YA), e.projectId, n) : null,
});
export { DesignTool };

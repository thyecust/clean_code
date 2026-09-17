// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 82 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { getOAuthHeaders, httpClient } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Ve, dt, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { getCwd } from "../../01-核心基础设施/核心工具-未归类/cwd-context.js";
import { getToolPermissionContext } from "../权限系统/chunk-fjrcf22x.js";
import { buildTool } from "../权限系统/chunk-qdy0h5k2.js";
import { DesignSessionState, normalizeRelativePath, isClaudeInstructionPath, isGlobPattern, MAX_PATH_LENGTH, isPathAllowedByPatterns, registerPlan, getPlanById } from "../记忆-CLAUDE.md/chunk-9b6sc1gb.js";
import { isDesignConsentBit, getDesignConsentPrompt, seedDesignConsentBit, resolveDesignAuth, wouldNeedDesignConsent, needsDesignAuthorization, postDesignConsent } from "./design-consent-and-grants.js";
import { isDesignOauthClientConfigured, isRemoteSession, startDesignBrowserLogin } from "./design-oauth-credentials.js";
import "../认证-OAuth登录/oauth-login-flow.js";
import { DESIGN_SYNC_TOOL_NAME, DESIGN_SYNC_TOOL_DESCRIPTION, isDesignSyncPolicyAllowed } from "./design-sync-tool-metadata.js";
import { s, T, O, v, c, Qe, Ko, X, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { countMatching } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import { constants } from "fs";
import { open as pe, realpath, stat as he } from "fs/promises";
import { extname, sep as Z, resolve } from "path";
var le = "anthropic.omelette.api.v1alpha.OmeletteService";
async function I(e, t, r, o) {
  let i = await httpClient.post(`/${le}/${e}`, r, {
    auth: "none",
    headers: { ...getOAuthHeaders(t), "X-Anthropic-Client": "claude-cli-design-sync" },
    timeout: 60000,
    maxBodyLength: 33554432,
    validateStatus: () => !0,
    signal: o,
  });
  if (!i.ok) throw new C(e, 0, { error: i.reason });
  if (i.status === 401 || i.status === 403) throw new E(e, i.status, i.data);
  if (i.status < 200 || i.status >= 300) throw new C(e, i.status, i.data);
  return i.data;
}
var R = "PROJECT_TYPE_DESIGN_SYSTEM";
async function M(e, t = {}, r) {
  let o = await I(
    "ListOrgProjects",
    e,
    { ...(t.type && { type: t.type }), ...(t.cursor && { cursor: t.cursor }) },
    r,
  );
  return { items: o.items ?? [], cursor: o.cursor ?? "" };
}
async function L(e, t, r, o = {}, i) {
  return (
    (
      await I(
        "WriteFiles",
        e,
        {
          projectId: t,
          files: r,
          deduplicate: o.deduplicate ?? !1,
          ...(o.deletePaths?.length && { deletePaths: o.deletePaths }),
        },
        i,
      )
    ).files ?? []
  );
}
async function B(e, t, r) {
  return I("GetProject", e, { projectId: t }, r);
}
async function U(e, t, r) {
  let o = [],
    i = 0;
  for (let d = 0; d < 50; d++) {
    let a = await I(
        "ListFiles",
        e,
        { projectId: t, depth: -1, ...(i > 0 && { offset: i }) },
        r,
      ),
      h = a.entries ?? [];
    for (let u of h) o.push(u.path);
    if (!a.truncated || h.length === 0) return o;
    i += h.length;
  }
  throw new C("ListFiles", 0, {
    error: `pagination exceeded 50 pages (${o.length} paths)`,
  });
}
async function W(e, t, r, o = 262144, i) {
  let d = await I("GetFile", e, { projectId: t, path: r, raw: !0 }, i),
    a = d.content ?? "",
    h = d.isBase64 ?? !1,
    u,
    g = !1;
  if (h) {
    if (((u = a), u.length > o)) ((u = u.slice(0, o)), (g = !0));
  } else {
    let p = Buffer.from(a, "base64");
    if (p.byteLength > o) ((p = p.subarray(0, o)), (g = !0));
    u = p.toString("utf8");
  }
  return {
    content: u,
    contentType: d.contentType ?? "",
    isBase64: h,
    truncated: g,
  };
}
async function Y(e, t, r, o) {
  if (r.length === 0) return 0;
  return (
    (await I("DeleteFiles", e, { projectId: t, paths: r }, o)).deleted ?? 0
  );
}
async function q(e, t, r) {
  let o = await I("CreateProject", e, { name: t, type: R }, r);
  if (!o.projectId) throw new C("CreateProject", 200, o);
  return { projectId: o.projectId, name: t };
}
async function J(e, t, r, o) {
  await I(
    "RecordAsset",
    e,
    {
      projectId: t,
      name: r.name,
      path: r.path,
      ...(r.subtitle && { subtitle: r.subtitle }),
      ...(r.viewport && { viewport: r.viewport }),
      ...(r.group && { section: r.group }),
    },
    o,
  );
}
async function H(e, t, r, o) {
  await I("DeleteAsset", e, { projectId: t, path: r }, o);
}
function V(e, t) {
  if (!t) return e;
  return e.split(t).join("[redacted-oauth-token]");
}
class C extends Error {
  method;
  status;
  body;
  telemetryMessage;
  constructor(e, t, r) {
    super(`Design API ${e} failed: HTTP ${t} ${de(r)}`);
    this.method = e;
    this.status = t;
    this.body = r;
    ((this.name = "DesignRpcError"),
      (this.telemetryMessage = `Design API ${e} failed: HTTP ${t}`));
  }
}
class E extends C {
  constructor(e, t, r) {
    super(e, t, r);
    this.name = "DesignAuthError";
  }
}
function de(e) {
  if (e == null) return "";
  if (typeof e === "string") return e.slice(0, 200);
  try {
    return JSON.stringify(e).slice(0, 200);
  } catch {
    return String(e).slice(0, 200);
  }
}
var ge = createLazyValue(() =>
    Qe({
      path: s()
        .min(1)
        .max(MAX_PATH_LENGTH)
        .describe("Path within the project, e.g. components/button/index.html"),
      localPath: s()
        .min(1)
        .optional()
        .describe(
          "Path on disk to read file contents from, relative to the localDir approved at finalize_plan. Preferred for anything you have on disk: the tool reads, encodes, and uploads directly so the contents never enter the model context. Mutually exclusive with data.",
        ),
      data: s()
        .optional()
        .describe(
          "Inline file contents (UTF-8 text, or base64 when encoding is " +
            '"base64"). For small dynamic content only \u2014 anything you have on ' +
            "disk should use localPath instead.",
        ),
      encoding: X(["base64"])
        .optional()
        .describe('Set to "base64" for binary inline data'),
      mimeType: s().optional(),
    }),
  ),
  ue = createLazyValue(() =>
    Qe({
      name: s()
        .min(1)
        .max(255)
        .describe('Short human-readable label ("Primary buttons"), not a path'),
      path: s()
        .min(1)
        .max(MAX_PATH_LENGTH)
        .describe(
          "Project-relative path to the preview/spec file this card renders",
        ),
      subtitle: s()
        .max(255)
        .optional()
        .describe('Variants shown ("Primary / secondary / ghost, 3 sizes")'),
      viewport: Qe({
        width: T().int().positive(),
        height: T().int().positive().optional(),
      })
        .optional()
        .describe("Card dimensions in the Design System pane"),
      group: s()
        .max(64)
        .optional()
        .describe(
          "Free-form section label for the Design System pane (max 64 chars). " +
            "Use the source design system's own categorization if it has one \u2014 " +
            'e.g. Material has Buttons/Cards/Forms/etc., a corporate kit might have Actions/Forms/Navigation. Common foundational labels: "Type", "Colors", "Spacing", "Components", "Brand". The pane groups by the value you send.',
        ),
    }),
  ),
  fe = createLazyValue(() =>
    Qe({
      method: X([
        "list_projects",
        "get_project",
        "list_files",
        "get_file",
        "finalize_plan",
        "write_files",
        "delete_files",
        "register_assets",
        "unregister_assets",
        "create_project",
        "report_validate",
      ]),
      projectId: s()
        .min(1)
        .optional()
        .describe(
          "Required for all methods except list_projects and create_project",
        ),
      path: s().min(1).optional().describe("get_file: file path to read"),
      writes: v(s().min(1).max(MAX_PATH_LENGTH))
        .max(256)
        .optional()
        .describe(
          "finalize_plan: exact paths or glob patterns that will be written. `*` matches within a single segment, `**` matches any depth (e.g. `ui_kits/acme/**/*.html`). Max 3 `*`/`**` wildcards per " +
            "pattern and max 256 entries \u2014 use broader globs to cover more " +
            "files rather than enumerating paths.",
        ),
      deletes: v(s().min(1).max(MAX_PATH_LENGTH))
        .max(256)
        .optional()
        .describe(
          "finalize_plan: exact paths or glob patterns that will be deleted (same syntax and limits as writes).",
        ),
      planId: s()
        .min(1)
        .optional()
        .describe(
          "write_files/delete_files/register_assets/unregister_assets: token from a prior finalize_plan call",
        ),
      files: v(ge())
        .max(256)
        .optional()
        .describe(
          "write_files: file contents to write (max 256 per call \u2014 split " +
            "larger bundles across multiple write_files calls under the same planId).",
        ),
      paths: v(s().min(1).max(MAX_PATH_LENGTH))
        .max(256)
        .optional()
        .describe(
          "delete_files: paths to delete. unregister_assets: paths whose " +
            "Design System pane card should be removed. Max 256 per call \u2014 " +
            "split larger batches across multiple calls under the same planId.",
        ),
      name: s()
        .min(1)
        .max(200)
        .optional()
        .describe("create_project: name for the new design-system project"),
      assets: v(ue())
        .max(256)
        .optional()
        .describe(
          "register_assets: cards to register in the Design System pane. Each path must be in the finalized plan. Run after write_files succeeds. Max 256 per call.",
        ),
      localDir: s()
        .min(1)
        .optional()
        .describe(
          "finalize_plan: directory the bundle was built into. write_files with localPath may only read files inside this directory. Defaults to the current working directory. Resolved to an absolute path and shown in the permission prompt.",
        ),
      counts: c({
        total: T().int().nonnegative(),
        bad: T().int().nonnegative(),
        thin: T().int().nonnegative(),
        variantsIdentical: T().int().nonnegative(),
        iterations: T().int().nonnegative(),
      })
        .optional()
        .describe(
          "report_validate: aggregate from the final .render-check.json \u2014 " +
            "counts only, no component names or paths.",
        ),
    }),
  ),
  we = {
    list_projects: { present: [], nonEmpty: [] },
    get_project: { present: ["projectId"], nonEmpty: [] },
    list_files: { present: ["projectId"], nonEmpty: [] },
    get_file: { present: ["projectId", "path"], nonEmpty: [] },
    finalize_plan: {
      present: ["projectId", "writes", "deletes"],
      nonEmpty: [],
    },
    write_files: { present: ["projectId", "planId"], nonEmpty: ["files"] },
    delete_files: { present: ["projectId", "planId"], nonEmpty: ["paths"] },
    register_assets: { present: ["projectId", "planId"], nonEmpty: ["assets"] },
    unregister_assets: {
      present: ["projectId", "planId"],
      nonEmpty: ["paths"],
    },
    create_project: { present: ["name"], nonEmpty: [] },
    report_validate: { present: ["counts"], nonEmpty: [] },
  };
function ye(e) {
  let t = we[e.method],
    r = t.present.filter((i) => e[i] === void 0),
    o = t.nonEmpty.filter((i) => {
      let d = e[i];
      return d === void 0 || (Array.isArray(d) && d.length === 0);
    });
  return [...r, ...o];
}
var j = { notice: s().optional() },
  _e = createLazyValue(() =>
    Ko("method", [
      c({
        method: k("list_projects"),
        ...j,
        projects: v(
          c({
            projectId: s(),
            name: s(),
            ownerDisplayName: s().optional(),
            isOwned: O().optional(),
            updatedAt: s().optional(),
          }),
        ),
      }),
      c({
        method: k("get_project"),
        ...j,
        projectId: s(),
        name: s(),
        type: s().optional(),
        ownerDisplayName: s().optional(),
        isOwned: O().optional(),
        canEdit: O().optional(),
      }),
      c({ method: k("list_files"), ...j, paths: v(s()) }),
      c({
        method: k("get_file"),
        ...j,
        path: s(),
        content: s(),
        contentType: s(),
        isBase64: O(),
        truncated: O(),
      }),
      c({
        method: k("finalize_plan"),
        ...j,
        planId: s(),
        writes: v(s()),
        deletes: v(s()),
      }),
      c({ method: k("write_files"), ...j, written: T() }),
      c({ method: k("delete_files"), ...j, deleted: T() }),
      c({ method: k("register_assets"), ...j, registered: T() }),
      c({ method: k("unregister_assets"), ...j, unregistered: T() }),
      c({ method: k("create_project"), ...j, projectId: s(), name: s() }),
      c({ method: k("report_validate"), ...j }),
    ]),
  );
function be(e) {
  return (
    e === "list_projects" ||
    e === "get_project" ||
    e === "list_files" ||
    e === "get_file" ||
    e === "report_validate"
  );
}
function ee(e) {
  if (!e) return "?";
  return e.length > 12 ? `${e.slice(0, 8)}\u2026` : e;
}
function F(e) {
  switch (e?.method) {
    case "list_projects":
      return "List design-system projects";
    case "get_project":
      return "Read project metadata";
    case "list_files":
      return "List project files";
    case "get_file":
      return e.path ? `Read ${e.path}` : "Read file";
    case "finalize_plan": {
      let t = e.writes?.length ?? 0,
        r = e.deletes?.length ?? 0;
      return `Upload design system (${r > 0 ? `${t} to upload, ${r} to delete` : `${t} to upload`})`;
    }
    case "write_files": {
      let t = e.files?.length ?? 0,
        r = countMatching(e.files ?? [], (i) => i.localPath !== void 0),
        o =
          r > 0 && r < t
            ? ` (${r} from disk, ${t - r} inline)`
            : r === t && t > 0
              ? " from disk"
              : "";
      return `Write ${t} ${pluralize(t, "file")}${o}`;
    }
    case "delete_files":
      return `Delete ${e.paths?.length ?? 0} ${pluralize(e.paths?.length ?? 0, "file")}`;
    case "register_assets":
      return `Register ${e.assets?.length ?? 0} ${pluralize(e.assets?.length ?? 0, "asset card")}`;
    case "unregister_assets":
      return `Unregister ${e.paths?.length ?? 0} ${pluralize(e.paths?.length ?? 0, "asset card")}`;
    case "create_project":
      return e.name
        ? `Create project "${e.name}"`
        : "Create design-system project";
    case "report_validate":
      return "Report validate metrics";
    default:
      return "Design sync";
  }
}
function se(e, t) {
  switch (e) {
    case "needs_design_login":
      if (t?.isNonInteractiveSession)
        return `DesignSync needs design-system authorization, and /design-login cannot run in this non-interactive session. Ask the user to run /design-login once from an interactive Claude Code session on this machine \u2014 headless and SDK runs here then reuse that authorization. If this is claude.ai/code, ask them instead to use Claude Design's "Send to Claude Code Web" (which seeds the project into the workspace) or to provide the project files directly.`;
      return "DesignSync needs design-system authorization. Run /design-login to authorize it with your claude.ai account \u2014 this works even when this session authenticates with an API key or a provider token.";
    case "design_refresh_failed":
      if (t?.isNonInteractiveSession)
        return "Could not refresh the design access token (transient error). Retry shortly; if the error persists, the stored credential needs re-authorization from an interactive Claude Code terminal (not available here).";
      return "Could not refresh the design access token (transient error). Retry shortly, or run /design-login to re-authorize.";
    case "wrong_provider":
      return "DesignSync is only available with claude.ai authentication. It is not supported through Bedrock, Vertex, or other third-party providers.";
    case "essential_traffic_only":
      return "DesignSync is unavailable while nonessential network traffic is restricted (CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC is set). Unset it to use /design-sync.";
  }
}
class S extends Error {
  constructor(e) {
    super(e);
    this.name = "DesignSyncPreconditionError";
  }
}
var je = new Set(["default", "acceptEdits", "auto"]);
async function ze(e, t) {
  let r = await needsDesignAuthorization(e),
    o = await resolveDesignAuth(e);
  if (
    !o.ok &&
    o.reason === "needs_design_login" &&
    r &&
    (t?.askReachesUserAtDecision ?? !1) &&
    !t?.isNonInteractiveSession &&
    t?.permissionMode !== void 0 &&
    je.has(t.permissionMode)
  ) {
    let i = await startDesignBrowserLogin(t?.signal);
    if (i.ok) return i.accessToken;
    throw new S(`DesignSync needs design-system authorization. ${i.message}`);
  }
  if (!o.ok) {
    let i = o.detail ? ` (${o.detail})` : "";
    throw new S(
      `${se(o.reason, { isNonInteractiveSession: t?.isNonInteractiveSession })}${i}`,
    );
  }
  return o.accessToken;
}
function Ie(e) {
  if (!(e instanceof E) || e.status !== 403) return null;
  let t = e.body;
  if (
    t == null ||
    typeof t !== "object" ||
    t.error !== "needs_consent" ||
    !isDesignConsentBit(t.consent)
  )
    return null;
  return t.consent;
}
function te(e) {
  let t = getToolPermissionContext(e);
  return (
    !e.options?.isNonInteractiveSession &&
    t.mode !== "bypassPermissions" &&
    !(t.mode === "plan" && t.isBypassPermissionsModeAvailable)
  );
}
var DesignSyncTool = buildTool({
  name: DESIGN_SYNC_TOOL_NAME,
  searchHint:
    "sync local design system components to a claude.ai/design project",
  shouldDefer: !0,
  maxResultSizeChars: 300000,
  isEnabled() {
    return isDesignSyncPolicyAllowed();
  },
  async description() {
    return DESIGN_SYNC_TOOL_DESCRIPTION;
  },
  async prompt() {
    return DESIGN_SYNC_TOOL_DESCRIPTION;
  },
  get inputSchema() {
    return fe();
  },
  get outputSchema() {
    return _e();
  },
  isConcurrencySafe() {
    return !1;
  },
  isReadOnly(e) {
    return be(e.method);
  },
  isDestructive(e) {
    return (
      e.method === "write_files" ||
      e.method === "delete_files" ||
      e.method === "unregister_assets"
    );
  },
  userFacingName(e) {
    return `Design: ${F(e)}`;
  },
  getToolUseSummary(e) {
    return e?.method ? F(e) : null;
  },
  toAutoClassifierInput(e) {
    if (e.method === "finalize_plan") {
      let t = (r) => {
        let o = r ?? [],
          i = 50;
        if (o.length <= 50) return o.join(", ");
        return `${o.length} paths (too many to list here; the user's permission prompt shows the full list)`;
      };
      return `project ${e.projectId ?? "?"} from ${resolve(getCwd(), e.localDir ?? ".")}: write ${t(e.writes)}; delete ${t(e.deletes)}`;
    }
    if (e.method === "create_project")
      return `create project "${e.name ?? "?"}"`;
    return e.method;
  },
  renderToolUseMessage(e) {
    if (e.method === "finalize_plan") return ee(e.projectId);
    return F(e);
  },
  async validateInput(e) {
    let t = ye(e);
    if (t.length > 0)
      return {
        result: !1,
        message: `${e.method} requires: ${t.join(", ")}.`,
        errorCode: 1,
      };
    if (
      e.method === "finalize_plan" &&
      (e.writes?.length ?? 0) === 0 &&
      (e.deletes?.length ?? 0) === 0
    )
      return {
        result: !1,
        message: "finalize_plan needs at least one write or delete path.",
        errorCode: 1,
      };
    if (e.method === "write_files")
      for (let r of e.files ?? []) {
        let o = r.data !== void 0,
          i = r.localPath !== void 0;
        if (o === i)
          return {
            result: !1,
            message: `Each file needs exactly one of "data" or "localPath" (offending path: ${r.path}).`,
            errorCode: 1,
          };
        if (i && r.encoding !== void 0)
          return {
            result: !1,
            message: `"encoding" only applies to inline "data"; localPath files are encoded automatically (offending path: ${r.path}).`,
            errorCode: 1,
          };
      }
    return { result: !0 };
  },
  async checkPermissions(e, t) {
    let r = await wouldNeedDesignConsent(t.toolState.get(DesignSessionState), t.credentials),
      o = { ...e, __consentBitShown: r, __consentAskCanReachUser: te(t) },
      i = r !== null ? getDesignConsentPrompt(r) : null,
      d =
        (await needsDesignAuthorization(t.credentials)) && isDesignOauthClientConfigured() && !isRemoteSession()
          ? "DesignSync needs design-system authorization for your claude.ai account. Approving opens your browser to authorize " +
            "access to your org's design-system projects \u2014 this session's " +
            "own authentication is not changed."
          : null,
      a =
        [i, d].filter(Boolean).join(`

`) || null;
    if (
      a &&
      e.method !== "finalize_plan" &&
      e.method !== "create_project" &&
      e.method !== "report_validate"
    )
      return {
        behavior: "ask",
        message: a,
        updatedInput: o,
        localDisplayOnly: !0,
        decisionReason: {
          type: "safetyCheck",
          reason:
            [
              i
                ? "design agent consent \u2014 approving records a server-side grant for Claude agents to write your design projects"
                : null,
              d
                ? "design login \u2014 approving opens a browser OAuth consent and stores a design credential"
                : null,
            ]
              .filter(Boolean)
              .join("; ") || "design credential prompt",
          classifierApprovable: !1,
        },
      };
    if (e.method === "finalize_plan") {
      let h = (e.writes ?? []).map(normalizeRelativePath),
        u = (e.deletes ?? []).map(normalizeRelativePath),
        g;
      try {
        g = await oe(e.localDir);
      } catch (z) {
        return {
          behavior: "deny",
          message: `localDir does not exist or is not accessible: ${e.localDir ?? getCwd()} (${l(z)})`,
          decisionReason: {
            type: "safetyCheck",
            reason: "localDir not found",
            classifierApprovable: !1,
          },
        };
      }
      let p = h.filter(isGlobPattern),
        f = h.filter((z) => !isGlobPattern(z)),
        _ = u.filter(isGlobPattern),
        y = u.filter((z) => !isGlobPattern(z)),
        A = await Promise.all(
          f.map(async (z) => {
            try {
              return (await he(resolve(g, z)), !0);
            } catch {
              return !1;
            }
          }),
        ),
        P = f.filter((z, ae) => !A[ae]),
        ie =
          f.length - P.length > 0 && P.length > 0
            ? `\u26A0 ${P.length} of ${f.length} literal write ${pluralize(f.length, "path")} not found under localDir \u2014 ` +
              `expected if they use a different localPath or inline data, otherwise check for a typo: ${P.slice(0, 5).join(", ")}` +
              (P.length > 5 ? `, \u2026 and ${P.length - 5} more` : "")
            : null;
      return {
        behavior: "ask",
        message: [
          a,
          `To project: ${ee(e.projectId)}`,
          `From folder: ${g}`,
          f.length > 0
            ? `Upload ${f.length} ${pluralize(f.length, "file")}: ${f.join(", ")}`
            : null,
          p.length > 0 ? `Upload files matching: ${p.join(", ")}` : null,
          ie,
          y.length > 0
            ? `Delete ${y.length} ${pluralize(y.length, "file")}: ${y.join(", ")}`
            : null,
          _.length > 0 ? `Delete files matching: ${_.join(", ")}` : null,
        ].filter((z) => z !== null).join(`
`),
        updatedInput: { ...o, localDir: g },
        localDisplayOnly: !0,
        decisionReason: {
          type: "safetyCheck",
          reason: a
            ? "Approving also grants Claude ongoing write access to your design projects."
            : "Review what will be uploaded before continuing.",
          classifierApprovable: !1,
        },
      };
    }
    if (e.method === "create_project")
      return {
        behavior: "ask",
        message: [
          a,
          `Create design-system project "${e.name ?? "?"}" on claude.ai/design. The new project will be visible to your whole org (server default \u2014 you can change this from the Share menu after creation).`,
        ].filter((h) => h !== null).join(`
`),
        updatedInput: o,
        localDisplayOnly: !0,
        decisionReason: {
          type: "safetyCheck",
          reason: a
            ? "Approving also grants Claude ongoing write access to your design projects."
            : "This creates a new project on your claude.ai account.",
          classifierApprovable: !1,
        },
      };
    return { behavior: "allow", updatedInput: o };
  },
  async call(e, t) {
    let r = t.abortController.signal;
    if (e.method === "report_validate")
      return { data: { method: "report_validate" } };
    let o = t.toolState.get(DesignSessionState),
      i = e.__consentBitShown ?? null,
      d = getToolPermissionContext(t),
      a = e.__consentAskCanReachUser ?? !1,
      h = a && te(t),
      u = "";
    try {
      if (
        ((u = await ze(t.credentials, {
          signal: r,
          isNonInteractiveSession: t.options?.isNonInteractiveSession,
          permissionMode: d.mode,
          askReachesUserAtDecision: a,
        })),
        i !== null && h && e.method === "finalize_plan")
      )
        await postDesignConsent(o, i, t.credentials).catch((p) => {
          logForDebugging(
            `Proactive design consent POST for finalize_plan failed (${l(p)}); the next RPC call's 403 intercept will retry.`,
          );
        });
      let g;
      try {
        if (
          ((g = await re(o, e, u, r)),
          i !== null && e.method !== "finalize_plan")
        )
          seedDesignConsentBit(o, i, !0);
      } catch (p) {
        let f = Ie(p);
        if (f === null) {
          if (
            (p instanceof E ? p.body : null)?.error === "insufficient_scope" ||
            (p instanceof E && p.status === 401)
          )
            throw new S(
              se("needs_design_login", {
                isNonInteractiveSession: t.options?.isNonInteractiveSession,
              }),
            );
          throw p;
        } else if (f !== i)
          throw (
            seedDesignConsentBit(o, f, !1),
            new S(
              `${getDesignConsentPrompt(f)} The user hasn't granted this yet \u2014 ask them to retry (the prompt will show on the next call) or run /design consent.`,
            )
          );
        else if (!h)
          throw (
            seedDesignConsentBit(o, f, !1),
            new S(
              `${getDesignConsentPrompt(f)} The user hasn't granted this \u2014 run /design consent to grant it (it can't be approved automatically in this permission mode).`,
            )
          );
        else (await postDesignConsent(o, f, t.credentials), (g = await re(o, e, u, r)));
      }
      return { data: g };
    } catch (g) {
      if (r.aborted) throw new Ve();
      let p = V(l(g), u),
        f = g?.telemetryMessage,
        _ = typeof f === "string" ? f : "DesignSync tool call failed";
      if (g instanceof S) throw dt(new S(p), _);
      throw dt(Error(p), _);
    }
  },
  mapToolResultToToolResultBlockParam(e, t) {
    return { tool_use_id: t, type: "tool_result", content: jsonStringify(e) };
  },
});
function w(e, t, r) {
  if (e === void 0) throw Error(`${r} requires "${t}"`);
  return e;
}
var Pe = new Set([
    "html",
    "css",
    "js",
    "jsx",
    "mjs",
    "cjs",
    "ts",
    "tsx",
    "mts",
    "cts",
    "json",
    "svg",
    "xml",
    "md",
    "txt",
    "csv",
    "yaml",
    "yml",
    "toml",
  ]),
  ne = 12582912;
async function oe(e) {
  return realpath(resolve(getCwd(), e ?? "."));
}
async function Se(e, t) {
  let r = normalizeRelativePath(e.path);
  if (e.localPath === void 0) {
    if (e.data === void 0)
      throw Error(`write_files: ${r} has neither data nor localPath`);
    return {
      path: r,
      data: e.data,
      encoding: e.encoding,
      mimeType: e.mimeType,
    };
  }
  if (e.data !== void 0)
    throw Error(`write_files: ${r} has both data and localPath`);
  if (t === void 0)
    throw Error(
      "write_files with localPath requires a plan finalized with localDir. Re-run finalize_plan with the bundle directory.",
    );
  let o = (_) => (_.endsWith(Z) ? _ : _ + Z),
    i = resolve(t),
    d = resolve(i, e.localPath);
  if (d !== i && !d.startsWith(o(i)))
    throw Error(
      "write_files: localPath must be inside the directory approved at finalize_plan.",
    );
  let [a, h] = await Promise.all([realpath(d), realpath(i)]);
  if (a !== h && !a.startsWith(o(h)))
    throw Error(
      "write_files: localPath resolves outside the directory approved at finalize_plan.",
    );
  let u = constants.O_NOFOLLOW,
    g = await pe(a, constants.O_RDONLY | u),
    p;
  try {
    let _ = await g.stat();
    if (!_.isFile())
      throw Error("write_files: localPath must be a regular file.");
    if (_.size > ne)
      throw Error(
        `write_files: file at localPath exceeds the ${ne} byte limit.`,
      );
    p = await g.readFile();
  } finally {
    await g.close();
  }
  let f = extname(a).slice(1).toLowerCase();
  return Pe.has(f)
    ? { path: r, data: p.toString("utf8"), mimeType: e.mimeType }
    : {
        path: r,
        data: p.toString("base64"),
        encoding: "base64",
        mimeType: e.mimeType,
      };
}
async function re(e, t, r, o) {
  switch (t.method) {
    case "list_projects": {
      let { items: i } = await M(r, { type: R }, o);
      return {
        method: "list_projects",
        projects: i
          .filter(
            (a) =>
              a.callerCanEdit ??
              a.canEdit ??
              (a.isOwned || a.sharing?.teamCanEdit) ??
              !1,
          )
          .map((a) => ({
            projectId: a.projectId,
            name: a.name,
            ownerDisplayName: a.ownerDisplayName,
            isOwned: a.isOwned,
            updatedAt: a.updatedAt,
          })),
      };
    }
    case "get_project": {
      let i = w(t.projectId, "projectId", t.method),
        d = await B(r, i, o);
      return {
        method: "get_project",
        projectId: d.projectId,
        name: d.name,
        type: d.type,
        ownerDisplayName: d.ownerDisplayName,
        isOwned: d.isOwned,
        canEdit: d.callerCanEdit ?? d.canEdit,
      };
    }
    case "list_files": {
      let i = w(t.projectId, "projectId", t.method);
      return { method: "list_files", paths: await U(r, i, o) };
    }
    case "get_file": {
      let i = w(t.projectId, "projectId", t.method),
        d = w(t.path, "path", t.method),
        a = await W(r, i, d, void 0, o);
      return {
        method: "get_file",
        path: d,
        content: a.content,
        contentType: a.contentType,
        isBase64: a.isBase64,
        truncated: a.truncated,
      };
    }
    case "finalize_plan": {
      let i = w(t.projectId, "projectId", t.method),
        d = w(t.writes, "writes", t.method).map(normalizeRelativePath),
        a = w(t.deletes, "deletes", t.method).map(normalizeRelativePath),
        h = await oe(t.localDir);
      return {
        method: "finalize_plan",
        planId: registerPlan(e, { projectId: i, writes: d, deletes: a, localDir: h }),
        writes: d,
        deletes: a,
      };
    }
    case "write_files": {
      let i = w(t.projectId, "projectId", t.method),
        d = w(t.planId, "planId", t.method),
        a = w(t.files, "files", t.method),
        h = getPlanById(e, d);
      if (!h || h.projectId !== i)
        throw Error(
          "Plan token is missing or does not match this project. Call finalize_plan first.",
        );
      let u = a.map((y) => y.path).filter(isClaudeInstructionPath);
      if (u.length > 0)
        throw Error(
          `Cannot write reserved paths: ${u.join(", ")}. CLAUDE.md and .claude/ carry instructions to the design agent and are blocked regardless of the plan.`,
        );
      let g = a.map((y) => normalizeRelativePath(y.path)).filter((y) => !isPathAllowedByPatterns(y, h.writes));
      if (g.length > 0)
        throw Error(
          `Cannot write paths outside the finalized plan: ${g.join(", ")}. Re-run finalize_plan with the full set.`,
        );
      let p = 32,
        f = [];
      for (let y = 0; y < a.length; y += p) {
        if (o.aborted) throw new Ve();
        let A = a.slice(y, y + p);
        f.push(...(await Promise.all(A.map((P) => Se(P, h.localDir)))));
      }
      return {
        method: "write_files",
        written: (await L(r, i, f, {}, o)).length,
      };
    }
    case "delete_files": {
      let i = w(t.projectId, "projectId", t.method),
        d = w(t.planId, "planId", t.method),
        a = w(t.paths, "paths", t.method),
        h = getPlanById(e, d);
      if (!h || h.projectId !== i)
        throw Error(
          "Plan token is missing or does not match this project. Call finalize_plan first.",
        );
      let u = a.filter(isClaudeInstructionPath);
      if (u.length > 0)
        throw Error(
          `Cannot delete reserved paths: ${u.join(", ")}. CLAUDE.md and .claude/ carry instructions to the design agent and are blocked regardless of the plan.`,
        );
      let g = a.map(normalizeRelativePath).filter((f) => !isPathAllowedByPatterns(f, h.deletes));
      if (g.length > 0)
        throw Error(
          `Cannot delete paths outside the finalized plan: ${g.join(", ")}. Re-run finalize_plan with the full set.`,
        );
      return { method: "delete_files", deleted: await Y(r, i, a.map(normalizeRelativePath), o) };
    }
    case "register_assets": {
      let i = w(t.projectId, "projectId", t.method),
        d = w(t.planId, "planId", t.method),
        a = w(t.assets, "assets", t.method),
        h = getPlanById(e, d);
      if (!h || h.projectId !== i)
        throw Error(
          "Plan token is missing or does not match this project. Call finalize_plan first.",
        );
      let u = a.map((p) => normalizeRelativePath(p.path)).filter((p) => !isPathAllowedByPatterns(p, h.writes));
      if (u.length > 0)
        throw Error(
          `Cannot register paths outside the finalized plan: ${u.join(", ")}. Re-run finalize_plan with the full set.`,
        );
      let g = 0;
      for (let p of a) {
        if (o.aborted) throw new Ve();
        (await J(r, i, { ...p, path: normalizeRelativePath(p.path) }, o), g++);
      }
      return { method: "register_assets", registered: g };
    }
    case "unregister_assets": {
      let i = w(t.projectId, "projectId", t.method),
        d = w(t.planId, "planId", t.method),
        a = w(t.paths, "paths", t.method),
        h = getPlanById(e, d);
      if (!h || h.projectId !== i)
        throw Error(
          "Plan token is missing or does not match this project. Call finalize_plan first.",
        );
      let u = a.map(normalizeRelativePath).filter((p) => !isPathAllowedByPatterns(p, h.deletes));
      if (u.length > 0)
        throw Error(
          `Cannot unregister cards for paths outside the finalized plan's deletes: ${u.join(", ")}. Re-run finalize_plan with the full set.`,
        );
      let g = 0;
      for (let p of a.map(normalizeRelativePath)) {
        if (o.aborted) throw new Ve();
        (await H(r, i, p, o), g++);
      }
      return { method: "unregister_assets", unregistered: g };
    }
    case "create_project": {
      let i = w(t.name, "name", t.method),
        d = await q(r, i, o);
      return { method: "create_project", projectId: d.projectId, name: d.name };
    }
    case "report_validate":
      return { method: "report_validate" };
  }
}
export { DesignSyncTool };

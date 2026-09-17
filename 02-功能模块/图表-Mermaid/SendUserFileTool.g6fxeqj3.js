// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 91 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ic } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { H } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { St } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { Eg } from "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import { getAPIProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { SEND_USER_FILE_TOOL_NAME, DESCRIPTION, SEND_USER_FILE_TOOL_PROMPT } from "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import { getSessionFeatureCache } from "../Hooks钩子/session-feature-cache.js";
import { isPolicyAllowed } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { buildTool } from "../权限系统/chunk-qdy0h5k2.js";
import { isBriefEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-1p3batyk.js";
import { ubt, dbt, pbt, fbt } from "../图片-截图-ComputerUse/chunk-0dcnsftb.js";
import { s, T, O, v, c, Qe, X, ai } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var g = createLazyValue(() =>
    Qe({
      files: ai(
        (e) => (typeof e === "string" ? [e] : e),
        v(s()).min(1),
      ).describe(
        "File paths (absolute or relative to cwd) to send to the user. Always pass an array, even for a single file.",
      ),
      caption: s()
        .optional()
        .describe("Optional short caption for the file(s)."),
      status: X(["normal", "proactive"]).describe(
        "Use 'proactive' when you're surfacing a file the user hasn't asked for and needs to see now \u2014 a generated artifact, a completed report. Use 'normal' when replying to something the user just said.",
      ),
      display: X(["render", "attach"])
        .optional()
        .describe(
          "How the client should present the file. 'render' opens it inline in the side panel (for HTML, SVG, Mermaid, images, PDFs \u2014 anything the user wants to look at now). 'attach' shows a download card only, no inline preview (for deliverables the user will save and open elsewhere). Omit to let the client decide by file type \u2014 today that means renderable types render and everything else attaches, same as before this parameter existed.",
        ),
    }),
  ),
  y = createLazyValue(() =>
    c({
      caption: s().optional(),
      display: X(["render", "attach"]).optional(),
      attachments: v(
        c({
          path: s(),
          size: T(),
          isImage: O(),
          file_uuid: s().optional(),
          media_type: s().optional(),
          pathValidated: O().optional(),
          upload_error: s().optional(),
        }),
      ).describe("Resolved file metadata"),
      rendered_locally: O().optional(),
    }),
  );
function _() {
  let e = getSessionFeatureCache();
  return ((e.sendUserFileDeferred ??= !h()), e.sendUserFileDeferred);
}
var SendUserFileTool = buildTool({
  name: SEND_USER_FILE_TOOL_NAME,
  searchHint: "deliver files (screenshots, reports, artifacts) to the user",
  get shouldDefer() {
    return _();
  },
  briefStandalone: !0,
  maxResultSizeChars: 1e5,
  userFacingName() {
    return "";
  },
  get inputSchema() {
    return g();
  },
  get outputSchema() {
    return y();
  },
  isEnabled() {
    if (getAPIProvider() !== "firstParty" || St()) return !1;
    if (!isPolicyAllowed("allow_send_file")) return !1;
    if (!H("tengu_send_user_file", !0)) return !1;
    return (ic() || h()) && !isBriefEnabled();
  },
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  toAutoClassifierInput(e) {
    return e.caption ?? `[${e.files?.length ?? 0} file(s)]`;
  },
  async description() {
    return DESCRIPTION;
  },
  async prompt() {
    return SEND_USER_FILE_TOOL_PROMPT;
  },
  mapToolResultToToolResultBlockParam(e, n) {
    let r = e.attachments.filter((t) => t.upload_error !== void 0),
      o = e.attachments.filter((t) => t.upload_error === void 0),
      l = o
        .filter((t) => t.file_uuid !== void 0)
        .map((t) => `  ${t.path} \u2192 file_uuid: ${t.file_uuid}`),
      d = [];
    if (o.length > 0)
      d.push(
        `${o.length} ${x(o.length, "file")} delivered to user.` +
          (l.length > 0
            ? `
${l.join(`
`)}`
            : ""),
      );
    if (r.length > 0) {
      let t = (p) => `${(p / 1048576).toFixed(1)} MiB`,
        f = r.map((p) => `  ${p.path} (${t(p.size)}): ${p.upload_error}`).join(`
`);
      if (e.rendered_locally)
        d.push(
          `${r.length} ${x(r.length, "file")} NOT delivered to Remote Control (phone/web) viewers \u2014 only visible in the desktop app on this machine:
` +
            f +
            `
Tell the user the ${x(r.length, "file is", "files are")} only visible in the desktop app, and why.`,
        );
      else
        d.push(
          `${r.length} ${x(r.length, "file")} could NOT be delivered to the user:
` +
            f +
            `
Tell the user the ${x(r.length, "file was", "files were")} not delivered and why.`,
        );
    }
    return {
      tool_use_id: n,
      type: "tool_result",
      content: d.join(`
`),
    };
  },
  renderToolUseMessage() {
    return "";
  },
  create(e) {
    return {
      async validateInput({ files: n }) {
        return pbt(n, e.permissions());
      },
      async call({ files: n, caption: r, status: o, display: l }, d) {
        let t = ubt({ replBridgeEnabled: e.replBridgeEnabled() });
        logEvent("tengu_send_user_file", {
          proactive: o === "proactive",
          file_count: n.length,
          display_set: l !== void 0,
          display_attach: l === "attach",
          upload_lane: fromEnum(t),
        });
        let f = await fbt(n, {
          lane: t,
          signal: d.signal,
          credentials: e.credentials,
        });
        return {
          data: {
            caption: r,
            display: l,
            attachments: f,
            ...(dbt(t) && { rendered_locally: !0 }),
          },
        };
      },
    };
  },
});
function h() {
  return (
    !!a.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE || a.CLAUDE_CODE_REMOTE || Eg()
  );
}
export { SendUserFileTool };

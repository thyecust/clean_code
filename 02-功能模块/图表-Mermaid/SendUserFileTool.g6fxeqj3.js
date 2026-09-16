// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ic } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { H } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { St } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { Eg } from "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../权限系统/chunk-ynkf3yy4.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../Teammates团队/chunk-811z9z0t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import { Pe } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../认证-OAuth登录/chunk-7rf7w8yf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h3avap4w.js";
import "../认证-OAuth登录/chunk-y7b7kf5n.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1bqqnyc1.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../Git-Worktree/chunk-bk9696gx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { BT, dkn, pkn } from "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import { Ei } from "../Hooks钩子/chunk-9em0d4k5.js";
import { Mt } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../权限系统/chunk-t3b7pg2x.js";
import "../权限系统/chunk-fjrcf22x.js";
import { Tt } from "../权限系统/chunk-qdy0h5k2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../权限系统/chunk-1y2g140m.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "./chunk-743atbtj.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0qtt3z52.js";
import { YAe } from "../../01-核心基础设施/共享小工具-未细化/chunk-1p3batyk.js";
import { ubt, dbt, pbt, fbt } from "../图片-截图-ComputerUse/chunk-0dcnsftb.js";
import "../工具ToolSearch/chunk-1m51pqtd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jzy6p47z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nfcecy7x.js";
import "../权限系统/chunk-pcxn6gwz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w4swsde7.js";
import "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-v2wxtqf7.js";
import "../Bedrock-Vertex/chunk-p991cddr.js";
import { s, T, O, v, c, Qe, X, ai } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
var g = m(() =>
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
  y = m(() =>
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
  let e = Ei();
  return ((e.sendUserFileDeferred ??= !h()), e.sendUserFileDeferred);
}
var B = Tt({
  name: BT,
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
    if (Pe() !== "firstParty" || St()) return !1;
    if (!Mt("allow_send_file")) return !1;
    if (!H("tengu_send_user_file", !0)) return !1;
    return (ic() || h()) && !YAe();
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
    return dkn;
  },
  async prompt() {
    return pkn;
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
        i("tengu_send_user_file", {
          proactive: o === "proactive",
          file_count: n.length,
          display_set: l !== void 0,
          display_attach: l === "attach",
          upload_lane: u(t),
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
export { B as SendUserFileTool };

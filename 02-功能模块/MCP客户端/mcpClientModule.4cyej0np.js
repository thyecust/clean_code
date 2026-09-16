// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { Dun } from "../../01-核心基础设施/共享小工具-未细化/chunk-p7jm635c.js";
import { qs } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { S, u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { Ol } from "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
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
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
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
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import { xT } from "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
import "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../Bedrock-Vertex/chunk-p991cddr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
function s(e, t) {
  if (!Ol().claim("mcp_tree_id_tripwire")) return;
  Dun(
    qs("tengu_mcp_tripwire", {
      expected: u(e),
      loaded: t === "v1" || t === "v2" ? u(t) : S("other"),
    }).catch(() => {}),
  );
}
function m() {
  if (xT() === "v2") {
    let i = import.meta.require("./LISTEN_REOPEN_DELAYS_MS.h676bx56.js"),
      o = i.MCP_TREE_ID;
    if (o !== "v2")
      throw (
        s("v2", o),
        Error(
          "MCP runtime accessor tripwire: resolved generation is v2 but the loaded client module does not carry MCP_TREE_ID v2",
        )
      );
    return i;
  }
  let e = import.meta.require("./callMCPTool.30v8k2sq.js"),
    t = e.MCP_TREE_ID;
  if (t !== "v1")
    throw (
      s("v1", t),
      Error(
        "MCP runtime accessor tripwire: resolved generation is v1 but the loaded client module does not carry MCP_TREE_ID v1",
      )
    );
  return e;
}
function d() {
  if (xT() === "v2") return import.meta.require("../认证-OAuth登录/ClaudeAuthProvider.rw5extrt.js");
  return import.meta.require("../认证-OAuth登录/ClaudeAuthProvider.163jwjev.js");
}
function l() {
  if (xT() === "v2") return import.meta.require("./registerElicitationHandler.0bnxkzrw.js");
  return import.meta.require("./registerElicitationHandler.n710jq34.js");
}
function y() {
  if (xT() === "v2") return import.meta.require("./MAX_POLL_INTERVAL_MS.pjbd6km2.js");
  return import.meta.require("./MAX_POLL_INTERVAL_MS.dm2c0dwm.js");
}
function _() {
  if (xT() === "v2") return import.meta.require("../../01-核心基础设施/共享小工具-未细化/getMcpErrorCode.gk1snwqh.js");
  return import.meta.require("../../01-核心基础设施/共享小工具-未细化/getMcpErrorCode.zkm67jdf.js");
}
function j() {
  if (xT() === "v2") return import.meta.require("./readMcpDirectory.gnvw0enw.js");
  return import.meta.require("./readMcpDirectory.8gn0ks90.js");
}
function v() {
  if (xT() === "v2") return import.meta.require("../../01-核心基础设施/共享小工具-未细化/isListAuthError.tm2wnzn7.js");
  return import.meta.require("../../01-核心基础设施/共享小工具-未细化/isListAuthError.8jcv253h.js");
}
function M() {
  if (xT() === "v2") return import.meta.require("../../01-核心基础设施/共享小工具-未细化/getCachedIdpIdToken.whq65fek.js");
  return import.meta.require("../../01-核心基础设施/共享小工具-未细化/getCachedIdpIdToken.x86eq6fe.js");
}
function E() {
  return import.meta.require("../../01-核心基础设施/共享小工具-未细化/listMcpSkillPage.drxbt26x.js");
}
export {
  s as emitTripwireEvent,
  d as mcpAuthModule,
  m as mcpClientModule,
  j as mcpDirectoryReadModule,
  l as mcpElicitationHandlerModule,
  v as mcpIsListAuthErrorModule,
  _ as mcpSdkErrorClassificationModule,
  E as mcpSkillsListModule,
  y as mcpTaskWatcherModule,
  M as mcpXaaIdpLoginModule,
};

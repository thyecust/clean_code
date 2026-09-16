// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { qs } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { ki, wn, ul } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { In } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../认证-OAuth登录/chunk-y7b7kf5n.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h3avap4w.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1bqqnyc1.js";
import "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import { i0, pA, Yt, Qi } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../权限系统/chunk-ynkf3yy4.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../Teammates团队/chunk-811z9z0t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import "../认证-OAuth登录/chunk-7rf7w8yf.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../Git-Worktree/chunk-bk9696gx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
import { jV, fY, vE, Uo } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Aa } from "../插件系统/chunk-7s6mt1vg.js";
import "../ClaudeinChrome/chunk-hnp84hf6.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k6pta6f5.js";
import "../Hooks钩子/chunk-z3433nr6.js";
import "../Hooks钩子/chunk-bzqqe6xh.js";
import "../插件系统/chunk-ajtn749s.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../插件系统/chunk-hh8f1qrw.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "./chunk-3kmsshb6.js";
import "../图片-截图-ComputerUse/chunk-b8jsase9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../Teammates团队/chunk-g6nvp9mm.js";
import "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../权限系统/chunk-t3b7pg2x.js";
import "../权限系统/chunk-fjrcf22x.js";
import "../权限系统/chunk-qdy0h5k2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../Bridge-RemoteControl/chunk-9estzwf5.js";
import "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwtsmfpc.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import "../Bridge-RemoteControl/chunk-3j7ezsr7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import "../Teammates团队/chunk-t899nada.js";
import "../后台任务-Shell管理/chunk-9d5wk5b9.js";
import "../Cron-定时任务/chunk-mk3zm4ew.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vtgvbed1.js";
import "../Artifact发布-渲染/chunk-rr78st95.js";
import "../Artifact发布-渲染/chunk-01ymf0ar.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import "../权限系统/chunk-1y2g140m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "../Workflow编排/chunk-0t0sve49.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import "../跨会话消息(UDS)/chunk-9kzxq41e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1945b2ak.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6kad94y1.js";
import "../../01-核心基础设施/HTTP-网络层/chunk-tzqq81r7.js";
import "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../会话-历史-恢复/chunk-m1xj4s02.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import "../Teammates团队/chunk-6b13bhw1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import "../后台任务-Shell管理/chunk-djserjj5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k2rb4dgd.js";
import "../认证-OAuth登录/chunk-x3rm9w4b.js";
import "../Skills技能/chunk-1zy5c8mf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5jqttbex.js";
import "../工具结果持久化/工具结果持久化.jj43r39n.js";
import "../Teammates团队/chunk-3k2smxfn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import "../Bridge-RemoteControl/chunk-tyce0p0b.js";
import "../Bridge-RemoteControl/chunk-mxsfy35q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0f2h3r35.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0qtt3z52.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1p3batyk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ve2h3qad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mvw7xg6n.js";
import "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import "../权限系统/chunk-8rrcddth.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-52kaw3c1.js";
import "../语音-音频/chunk-cfhndstm.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-t76ttx77.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../图片-截图-ComputerUse/chunk-bvxymt09.js";
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import "../Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import "../../01-核心基础设施/设置-配置/chunk-1pbaa558.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0a6nmdka.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kk7p3hsm.js";
import { CF } from "../../01-核心基础设施/共享小工具-未细化/chunk-t31b4117.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-gdyh44zt.js";
import { ys, di, dO } from "../../01-核心基础设施/共享小工具-未细化/chunk-4f55jpqh.js";
import { V0 } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { Qg } from "../../01-核心基础设施/共享小工具-未细化/chunk-awxpn5er.js";
import { zat } from "../../01-核心基础设施/共享小工具-未细化/chunk-k4m00mjj.js";
import { sI } from "../../01-核心基础设施/共享小工具-未细化/chunk-g2fqhcwj.js";
import { TF } from "../../01-核心基础设施/共享小工具-未细化/chunk-jhs1bd0k.js";
import { Gr } from "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../../01-核心基础设施/设置-配置/chunk-5q6f0q9d.js";
import "../Teammates团队/chunk-mrfx53ye.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gyn0kh7v.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rrrsz7e6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1avr3bqa.js";
import "../插件系统/chunk-33bdfgmx.js";
import "./chunk-0mwqsv0r.js";
import "../图片-截图-ComputerUse/chunk-0dcnsftb.js";
import "../DesignSync/chunk-5kyac4wk.js";
import "./chunk-tznd4407.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-anxypace.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-f1stkzph.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qd67kfe4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k1vb7vky.js";
import "../工具Monitor/chunk-kxk3njnj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w8hsca1t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-339z9efw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sp33tdvc.js";
import "../Teammates团队/chunk-eey53z5b.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-bacs4ztm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6eskfcpn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cyyrj58q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-px58ry6q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vp8yvx5r.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../图片-截图-ComputerUse/chunk-6kdvf977.js";
import { createInterface as S } from "readline";
function y() {
  return import.meta.require("./mcpClientModule.4cyej0np.js");
}
function d() {
  return y().mcpAuthModule();
}
function m() {
  return y().mcpClientModule();
}
async function v(t, e, o, u) {
  await V0({ hasDynamicMcpConfig: !1 });
  let {
      servers: a,
      pendingProjectServers: r,
      rejectedProjectServers: i,
    } = await vE({
      includePendingProjectServers: !0,
      includeRejectedProjectServers: !0,
      storageV5: o,
      credentials: u,
    }),
    p = a[t];
  if (!p) {
    await wn(e, "not_found");
    let s = Object.keys(a).filter((n) => !r.has(n) && !i.has(n));
    return di(zat(t, s, r.size > 0));
  }
  if (i.has(t))
    return (
      await wn(e, "rejected"),
      di(
        `"${t}" is from .mcp.json and was rejected. Run \`claude mcp reset-project-choices\` to review it again.`,
      )
    );
  if (r.has(t))
    return (
      await wn(e, "pending_approval"),
      di(
        `"${t}" is from .mcp.json and awaiting approval. Run \`claude\` in this directory to review it first.`,
      )
    );
  if (p.configError)
    return (
      await wn(e, "config_error"),
      di(`"${t}" has a configuration problem: ${p.configError}`)
    );
  return p;
}
async function C(t, e) {
  if (i0(t)) return "static_auth_header";
  if (pA(t.url) && In()) {
    let o;
    if (M() && e !== void 0) o = (await Qi(e))?.accessToken;
    else o = Yt()?.accessToken;
    if (o) return "first_party_auth";
    if (await TF(e)) return "first_party_design_auth";
  }
  return null;
}
function w(t, e) {
  return `${t ? "If the browser didn't open, visit:" : "Visit this URL to authorize:"}
  ${Qg(e, void 0, { assumeSupport: !0 })}

`;
}
async function q(t, e, o, u) {
  await qs("tengu_mcp_login", {});
  let a = await v(t, "cli_mcp_login", o, u),
    r = sI(t, a);
  switch (r.kind) {
    case "claudeai-proxy": {
      let i = fY(r.config);
      if (!i)
        return (
          await wn("cli_mcp_login", "claudeai_no_auth_url"),
          di(
            `Couldn't build the claude.ai authorization link for "${t}". Make sure you're signed in (\`claude login\`).`,
          )
        );
      if ((await qs("tengu_claudeai_mcp_auth_started", {}), e.browser))
        (process.stdout.write(`Opening browser to authorize "${t}"\u2026
`),
          await Gr(i));
      return (
        process.stdout.write(
          w(e.browser, i) +
            `Once authorized on claude.ai, the connector will be available the next time you start Claude Code.
`,
        ),
        await m().removeMcpAuthCacheEntry(t, o),
        await ki("cli_mcp_login"),
        dO()
      );
    }
    case "unsupported-transport":
      return (
        await wn("cli_mcp_login", "unsupported_transport"),
        di(
          `"${t}" doesn't support OAuth login \u2014 it's only available for HTTP and SSE servers.`,
        )
      );
    case "anthropic-hosted":
      return (
        await wn("cli_mcp_login", "anthropic_hosted_blocked"),
        di(r.message)
      );
    case "oauth": {
      let i = await C(r.config, u);
      if (i === "static_auth_header")
        return (
          await wn("cli_mcp_login", "static_auth_header"),
          di(
            `"${t}" authenticates with the \`Authorization\` header in its configuration, so there's no separate login. Update that header to change its credentials.`,
          )
        );
      if (i === "first_party_auth")
        return (
          await wn("cli_mcp_login", "first_party_auth"),
          di(
            `"${t}" authenticates automatically with your Claude login. Run \`claude login\` if you're not signed in.`,
          )
        );
      if (i === "first_party_design_auth")
        return (
          await wn("cli_mcp_login", "first_party_design_auth"),
          di(
            `"${t}" authenticates automatically with your stored /design-login credential. Run /design-login from an interactive session to re-authorize it.`,
          )
        );
      process.stdout.write(`Starting authentication for "${t}"\u2026
`);
      let p = "Or paste the redirect URL here: ",
        s = new AbortController(),
        n,
        g = !1,
        A = setInterval(() => {}, 60000),
        _ = new Promise((c, f) => {
          s.signal.addEventListener(
            "abort",
            () => f(new (d().AuthenticationCancelledError)()),
            { once: !0 },
          );
        });
      _.catch(() => {});
      try {
        (await d().revokeServerTokens(t, r.config, { preserveStepUpState: !0 }),
          await Promise.race([
            _,
            d().performMCPOAuthFlow(
              t,
              r.config,
              (c) => {
                if (
                  (process.stdout.write(
                    w(e.browser, c) +
                      `Waiting for authorization\u2026 (^C to cancel)
`,
                  ),
                  n)
                )
                  n.prompt();
              },
              s.signal,
              {
                skipBrowserOpen: !e.browser,
                onWaitingForCallback: (c) => {
                  if (!process.stdin.isTTY) {
                    ((g = !0), s.abort());
                    return;
                  }
                  if (!process.stdout.isTTY) return;
                  (CF(),
                    (n = S({
                      input: process.stdin,
                      output: process.stdout,
                      prompt: p,
                    })),
                    n.on("SIGINT", () => s.abort()),
                    n.on("close", () => s.abort()),
                    n.on("line", (f) => {
                      let h = f.trim();
                      if (h && c(h)) return;
                      if (h)
                        process.stdout
                          .write(`That doesn't look like a redirect URL \u2014 paste the full address from your browser's address bar.
`);
                      n?.prompt();
                    }));
                },
              },
            ),
          ]));
      } catch (c) {
        if (c instanceof d().AuthenticationCancelledError) {
          if (g)
            return (
              await wn("cli_mcp_login", "no_tty_stdin"),
              di(
                `Couldn't complete authentication for "${t}": stdin isn't a terminal, so authentication can't be completed here. ` +
                  "Re-run in an interactive terminal \u2014 e.g. `ssh -t` \u2014 and paste the redirect URL when prompted.",
              )
            );
          return (await ul("cli_mcp_login", "cancelled"), ys(130));
        }
        return (
          await wn("cli_mcp_login", "oauth_flow_threw"),
          di(`Couldn't complete authentication for "${t}": ${l(c)}`)
        );
      } finally {
        if ((clearInterval(A), n))
          (n.close(),
            process.stdout.write(`
`));
      }
      return (
        await m().removeMcpAuthCacheEntry(t, o),
        await ki("cli_mcp_login"),
        dO(
          Uo(t)
            ? `Authenticated with "${t}", but it's currently disabled. Enable it in /mcp for its tools to load.`
            : `Authenticated with "${t}". Its tools are now available in Claude Code.`,
        )
      );
    }
    default: {
      let i = r;
    }
  }
}
async function G(t, e, o) {
  await qs("tengu_mcp_logout", {});
  let u = await v(t, "cli_mcp_logout", e, o),
    a = sI(t, u);
  switch (a.kind) {
    case "claudeai-proxy":
      return (
        await ul("cli_mcp_logout", "claudeai_proxy"),
        dO(
          `"${t}" is a claude.ai connector \u2014 its credentials live on claude.ai, not this machine. ` +
            `Disconnect it at ${Qg(jV())}`,
        )
      );
    case "unsupported-transport":
      return (
        await wn("cli_mcp_logout", "unsupported_transport"),
        di(
          `"${t}" doesn't use OAuth \u2014 there are no stored credentials to clear.`,
        )
      );
    case "anthropic-hosted":
      return (
        await d().revokeServerTokens(t, a.config),
        await ul("cli_mcp_logout", "anthropic_hosted"),
        dO(`Cleared local credentials for "${t}". ${a.message}`)
      );
    case "oauth": {
      (await d().revokeServerTokens(t, a.config), await ki("cli_mcp_logout"));
      let r = (await C(a.config, o)) === null ? Aa("mcp login", t) : null,
        i = r ? ` Run \`${r}\` to authenticate again.` : "";
      return dO(`Signed out of "${t}".${i}`);
    }
    default: {
      let r = a;
    }
  }
}
export { q as mcpLoginHandler, G as mcpLogoutHandler };

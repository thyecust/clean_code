// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { K, Ec, q1, MA, kL, xL, hae, S_e } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { GPe } from "../../01-核心基础设施/共享小工具-未细化/chunk-t0dp6656.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { S, u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { y, f, g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { bt, ZJ, Rr, rt, Xh, Ue, wt, ix, l0 } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { R, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import { Uge } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import { jo } from "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import { Fe } from "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "./chunk-qe04h4c5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { _c } from "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../认证-OAuth登录/chunk-7rf7w8yf.js";
import "../Git-Worktree/chunk-bk9696gx.js";
import "../认证-OAuth登录/chunk-y7b7kf5n.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h3avap4w.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1bqqnyc1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../权限系统/chunk-ynkf3yy4.js";
import "./chunk-811z9z0t.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "./chunk-thxapyam.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import { _ve } from "../权限系统/chunk-t3b7pg2x.js";
import "../权限系统/chunk-fjrcf22x.js";
import "../权限系统/chunk-qdy0h5k2.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "../权限系统/chunk-8rrcddth.js";
import { Oj, foe, SN } from "../../01-核心基础设施/共享小工具-未细化/chunk-0f2h3r35.js";
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import { MOe } from "./chunk-88ybhavr.js";
import { Ift, a4e, Hun, l4e, c4e } from "./chunk-qy9488g9.js";
import { W$t } from "./chunk-x0by9eq8.js";
import "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import { K4e, apn, U2, kV, sjt } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../Bridge-RemoteControl/chunk-9estzwf5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import { ag, kwt, iwn, DH } from "./chunk-g6nvp9mm.js";
import "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../Artifact发布-渲染/chunk-01ymf0ar.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import { Pc } from "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../Workflow编排/chunk-0t0sve49.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import "../跨会话消息(UDS)/chunk-9kzxq41e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1945b2ak.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6kad94y1.js";
import "../../01-核心基础设施/HTTP-网络层/chunk-tzqq81r7.js";
import "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import "./chunk-3k2smxfn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import "../后台任务-Shell管理/chunk-djserjj5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k6pta6f5.js";
import "../Hooks钩子/chunk-z3433nr6.js";
import "../Hooks钩子/chunk-bzqqe6xh.js";
import "../插件系统/chunk-ajtn749s.js";
import "../插件系统/chunk-hh8f1qrw.js";
import "../图片-截图-ComputerUse/chunk-b8jsase9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5jqttbex.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import { jk, bZn, cCe, vwt, Rwt, Bbn, TK, jbn } from "./chunk-6b13bhw1.js";
import "./chunk-t899nada.js";
import "../Artifact发布-渲染/chunk-rr78st95.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import "../权限系统/chunk-1y2g140m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k2rb4dgd.js";
import "../认证-OAuth登录/chunk-x3rm9w4b.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import "../Skills技能/chunk-1zy5c8mf.js";
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwtsmfpc.js";
import "../Bridge-RemoteControl/chunk-3j7ezsr7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import "../后台任务-Shell管理/chunk-9d5wk5b9.js";
import "../Cron-定时任务/chunk-mk3zm4ew.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vtgvbed1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../工具结果持久化/工具结果持久化.jj43r39n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import "../Bridge-RemoteControl/chunk-tyce0p0b.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../Bridge-RemoteControl/chunk-mxsfy35q.js";
import "../ClaudeinChrome/chunk-hnp84hf6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
import "../会话-历史-恢复/chunk-m1xj4s02.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0qtt3z52.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1p3batyk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ve2h3qad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mvw7xg6n.js";
import { bj, dYn } from "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-52kaw3c1.js";
import "../语音-音频/chunk-cfhndstm.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-t76ttx77.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../图片-截图-ComputerUse/chunk-bvxymt09.js";
import { rd, pD } from "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import "../权限系统/chunk-jsd70b22.js";
import "../图片-截图-ComputerUse/chunk-mk8kjx9c.js";
import "../插件系统/chunk-rbjz1q03.js";
import "../插件系统/chunk-4k4dssd9.js";
import "./chunk-5nnwwahg.js";
import { Cin } from "./chunk-8jtd54px.js";
import { Ain } from "./chunk-sjd69zy5.js";
import { ote, R7 } from "../../01-核心基础设施/共享小工具-未细化/chunk-v599v9yt.js";
import "../../01-核心基础设施/设置-配置/chunk-ekwet1zd.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/chunk-j7khz57p.js";
import "../权限系统/chunk-n4x6jsp3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kdfkgcfn.js";
import "./chunk-4ma81w0c.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-3k9e6gxt.js";
import "../../01-核心基础设施/设置-配置/chunk-5q6f0q9d.js";
import { Dh, Md } from "./chunk-mrfx53ye.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gyn0kh7v.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rrrsz7e6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1avr3bqa.js";
import "../插件系统/chunk-33bdfgmx.js";
import "../MCP客户端/chunk-0mwqsv0r.js";
import "../图片-截图-ComputerUse/chunk-0dcnsftb.js";
import "../DesignSync/chunk-5kyac4wk.js";
import "../MCP客户端/chunk-tznd4407.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-anxypace.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-f1stkzph.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qd67kfe4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k1vb7vky.js";
import "../工具Monitor/chunk-kxk3njnj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w8hsca1t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-339z9efw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sp33tdvc.js";
import "./chunk-eey53z5b.js";
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
import { cp, fs, M6, N6, Tge, Xir } from "./chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-v2wxtqf7.js";
import "../Bedrock-Vertex/chunk-p991cddr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../图片-截图-ComputerUse/chunk-6kdvf977.js";
function V() {
  let t = Pc();
  if (t)
    throw new jk(
      `${t} \u2014 the teammate is not started unwrapped; fix the launcher setting, then retry`,
    );
  let e = process.env[Xir],
    { cmd: o, prefixArgs: i } = e
      ? pD({ cmd: e, prefixArgs: [], target: e })
      : rd({ pinToCurrentBinary: !0 });
  return [o, ...i];
}
function J({ planModeRequired: t, permissionMode: e, proactivityLevel: o }) {
  if (e === void 0) return [];
  let i = e;
  if (t) i = "plan";
  else if (o !== void 0) i = U2(e, o);
  switch (i) {
    case "bypassPermissions":
      return ["--dangerously-skip-permissions"];
    case "acceptEdits":
      return ["--permission-mode acceptEdits"];
    case "auto":
      return ["--permission-mode auto"];
    case "default":
    case "plan":
    case "dontAsk":
    case "bubble":
      return o !== void 0 && apn() ? [`--permission-mode ${_c(i)}`] : [];
  }
}
var oe = [
  "CLAUDE_CODE_USE_BEDROCK",
  "CLAUDE_CODE_USE_VERTEX",
  "CLAUDE_CODE_USE_FOUNDRY",
  "CLAUDE_CODE_USE_ANTHROPIC_AWS",
  "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD",
  "CLAUDE_CODE_USE_MANTLE",
  "CLAUDE_CODE_USE_GATEWAY",
  "ANTHROPIC_AWS_WORKSPACE_ID",
  "ANTHROPIC_AWS_BASE_URL",
  "ANTHROPIC_AWS_API_KEY",
  "CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH",
  "ANTHROPIC_GOOGLE_CLOUD_PROJECT",
  "GOOGLE_CLOUD_PROJECT",
  "ANTHROPIC_GOOGLE_CLOUD_LOCATION",
  "ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID",
  "ANTHROPIC_GOOGLE_CLOUD_BASE_URL",
  "CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH",
  "AWS_BEARER_TOKEN_BEDROCK",
  "ANTHROPIC_BEDROCK_MANTLE_BASE_URL",
  "CLAUDE_CODE_SKIP_MANTLE_AUTH",
  "AWS_REGION",
  "AWS_DEFAULT_REGION",
  "AWS_PROFILE",
  "AWS_CONFIG_FILE",
  "AWS_SHARED_CREDENTIALS_FILE",
  "ANTHROPIC_BEDROCK_SERVICE_TIER",
  "ANTHROPIC_BEDROCK_REGION_PREFIX",
  "CLAUDE_CODE_SUBAGENT_MODEL",
  "CLAUDE_CODE_SUBAGENT_MODEL_FORCE",
  ...[],
  ...[],
  "ANTHROPIC_BASE_URL",
  "CLAUDE_CONFIG_DIR",
  "CLAUDE_CODE_REMOTE",
  "CLAUDE_CODE_REMOTE_MEMORY_DIR",
  "HTTPS_PROXY",
  "https_proxy",
  "HTTP_PROXY",
  "http_proxy",
  "NO_PROXY",
  "no_proxy",
  ...ote,
  ...Object.keys(R7),
  "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC",
  "CLAUDE_CODE_HOST_CREDS_FILE",
  "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST",
  "DISABLE_ERROR_REPORTING",
  "DISABLE_GROWTHBOOK",
  "DISABLE_TELEMETRY",
  "DO_NOT_TRACK",
];
function G() {
  let t = ["CLAUDECODE=1", "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1"],
    e = new Set(Uge(process.env));
  e.delete("CLAUDE_CODE_HOST_CREDS_FILE");
  for (let i of oe) {
    if (e.has(i)) continue;
    let c = process.env[i];
    if (c !== void 0 && c !== "") t.push(`${i}=${jo([c])}`);
  }
  let o = process.env.CLAUDE_SECURESTORAGE_CONFIG_DIR;
  if (o !== void 0) t.push(`CLAUDE_SECURESTORAGE_CONFIG_DIR=${jo([o])}`);
  return t.join(" ");
}
function O(t, e) {
  return bj(e) ? `${t} ${jo([e])}` : `${t}=${jo([e])}`;
}
function F(t) {
  return t ?? rt();
}
function re(t, e) {
  if (a.CLAUDE_CODE_SUBAGENT_MODEL_FORCE) t = void 0;
  if (t === "inherit") return F(e);
  if (t !== void 0) {
    if (!Rr(t)) return Z(t, e);
    if (e !== null && sjt(t, e)) return e;
    return t;
  }
  let o = kV();
  if (o !== "inherit") {
    let i = wt(o);
    if (Rr(i)) return i;
    return Z(o, e);
  }
  return F(e);
}
function Z(t, e) {
  let o = Xh(t);
  return (ie(t, o !== null), o ?? se(e));
}
function se(t) {
  let e = kV();
  if (e !== "inherit") {
    let o = wt(e);
    if (Rr(o)) return o;
    return Xh(e) ?? F(t);
  }
  return F(t);
}
function H(t, e, o = "tool") {
  if (a.CLAUDE_CODE_SUBAGENT_MODEL_FORCE) t = void 0;
  let i = re(t, e),
    c = kV(),
    m = t === void 0 && c !== "inherit" ? c : void 0,
    [r, T] =
      t === "inherit"
        ? [e ?? i, "inherit"]
        : t !== void 0
          ? [t, o]
          : m !== void 0
            ? [m, "env"]
            : [i, "default"],
    _ =
      m !== void 0
        ? !Rr(wt(m))
        : (T === "tool" || T === "frontmatter") && !Rr(r),
    p = _ && Xh(r) !== null,
    d = _ && !p,
    s = ZJ(r, Ue(r)),
    E = ZJ(i, Ue(i)),
    w = {
      source: S("teammate_spawn"),
      precedence: u(T),
      requested_family: u(s),
      resolved_family: u(E),
      requested_model: bt(r) ?? S("none"),
      resolved_model: bt(i) ?? S("none"),
    };
  if (p) g("subagent_model_resolve", "family_alias_stepped_down", w);
  else if (d) g("subagent_model_resolve", "override_dropped", w);
  else if (T !== "default" && s !== "other" && E !== "other" && s !== E)
    g("subagent_model_resolve", "family_mismatch", w);
  else y("subagent_model_resolve", w);
  return i;
}
function ie(t, e) {
  n(
    `Teammate model "${t}" is not in the availableModels allowlist; using the ${e ? "newest allowed model in its family" : "leader's model"} instead`,
    { level: "warn" },
  );
}
async function me(t) {
  return (await Fe(N6, ["has-session", "-t", t])).code === 0;
}
async function de(t) {
  if (!(await me(t))) {
    let o = await Fe(N6, ["new-session", "-d", "-s", t], {
      useCwd: !0,
      useToolMemoryCgroup: !1,
    });
    if (o.code !== 0)
      throw (
        f("subagent_launch", "subagent_teammate_tmux_session_failed"),
        Error(
          `Failed to create tmux session '${t}': ${o.stderr || "Unknown error"}`,
        )
      );
  }
}
function ee(t) {
  let {
      planModeRequired: e,
      permissionMode: o,
      proactivityLevel: i,
      skipModel: c,
      sessionEffort: m,
    } = t || {},
    r = J({ planModeRequired: e, permissionMode: o, proactivityLevel: i });
  if (!c) {
    let s = Ec();
    if (s) r.push(O("--model", s));
  }
  let T = m && _ve(m);
  if (T !== void 0) r.push(`--effort ${T}`);
  let _ = MA() ?? q1();
  if (_) r.push(`--settings ${jo([_])}`);
  let p = kL();
  for (let s of p) r.push(`--plugin-dir ${jo([s])}`);
  for (let s of xL()) r.push(`--plugin-dir-no-mcp ${jo([s])}`);
  for (let s of hae()) r.push(`--plugin-url ${jo([s])}`);
  let d = S_e();
  if (d === !0) r.push("--chrome");
  else if (d === !1) r.push("--no-chrome");
  if (dYn()) r.push("--restricted");
  return r.join(" ");
}
async function W(t, e, o, i, c, m) {
  for (let [p, d] of [
    ["name", t],
    ["team_name", e],
  ])
    if (bZn(d))
      throw (
        f("subagent_launch", "subagent_teammate_control_chars"),
        Error(
          p === "name"
            ? "Invalid name: control characters are not allowed in agent or team names"
            : "Invalid team_name: control characters are not allowed in agent or team names",
        )
      );
  let r = await TK(
    e,
    (p) => {
      let d = le(t, p),
        s = ix(d, e),
        E = i.assign(s);
      return (
        p.members.push({
          agentId: s,
          name: d,
          color: E,
          joinedAt: Date.now(),
          tmuxPaneId: "",
          subscriptions: [],
          ...o,
        }),
        { sanitizedName: d, teammateId: s, teammateColor: E }
      );
    },
    void 0,
    m,
  );
  if (!r)
    throw (
      f("subagent_launch", "subagent_teammate_internal_invariant"),
      Error("reserveTeammateIdentity: updateTeamFile returned undefined")
    );
  let T = !1,
    _;
  try {
    return await c(
      r,
      () => {
        T = !0;
      },
      (p) => {
        _ = p;
      },
    );
  } catch (p) {
    if (!T) {
      if (_)
        try {
          await _();
        } catch (d) {
          n(`[spawnTeammate] pane cleanup failed for ${r.teammateId}: ${l(d)}`);
        }
      await jbn(e, r.teammateId, m);
    } else
      n(
        `[spawnTeammate] post-commit failure for ${r.teammateId}; entry kept (agent already running): ${l(p)}`,
      );
    throw p;
  }
}
async function j(t, e, o, i) {
  await TK(
    t,
    (c) => {
      let m = c.members.find((r) => r.agentId === e);
      if (!m) return !1;
      ((m.tmuxPaneId = o.tmuxPaneId), (m.backendType = o.backendType));
    },
    void 0,
    i,
  );
}
function le(t, e) {
  let o = Bbn(t);
  if (o === cp)
    throw Error(
      '"main" is a reserved recipient name (SendMessage routes it to the main conversation) \u2014 choose another teammate name.',
    );
  if (l0(o))
    throw Error(
      'That teammate name is a reserved recipient ("main" or "team-lead", in any spelling) or has the shape of an agent id, which already addresses an agent directly \u2014 choose another teammate name.',
    );
  let i = new Set(e.members.map((m) => m.name.toLowerCase()));
  if (!i.has(o.toLowerCase())) return o;
  let c = 2;
  while (i.has(`${o}-${c}`.toLowerCase())) c++;
  return `${o}-${c}`;
}
async function pe(t, e) {
  let { setAppState: o, getAppState: i } = e,
    { name: c, prompt: m, agent_type: r, cwd: T, plan_mode_required: _ } = t,
    p = H(t.model, i().mainLoopModel, t.modelSource);
  if (!c || !m)
    throw (
      f("subagent_launch", "subagent_teammate_missing_params"),
      Error("name and prompt are required for spawn operation")
    );
  let d = i(),
    s = d.teamContext?.teamName;
  if (!s)
    throw (
      f("subagent_launch", "subagent_teammate_no_team_name"),
      Error(
        "Internal error: session team not initialized. This should have happened at startup when agent swarms are enabled.",
      )
    );
  let E = T || Q();
  return W(
    c,
    s,
    { agentType: r, model: p, prompt: m, planModeRequired: _, cwd: E },
    e.teammateColors,
    async ({ sanitizedName: w, teammateId: C, teammateColor: h }, k, D) => {
      let I = await Ift();
      if (I.needsIt2Setup && e.requestDialog) {
        let x = await foe(),
          q = await e.requestDialog(GPe, { tmuxAvailable: x });
        if (q === "cancelled")
          throw (
            f("subagent_launch", "subagent_teammate_iterm_cancelled"),
            new jk("Teammate spawn cancelled - iTerm2 setup required")
          );
        if (q === "installed" || q === "use-tmux") (c4e(), (I = await Ift()));
      }
      let P = await Oj(),
        { paneId: A, isFirstTeammate: U } =
          await I.backend.createTeammatePaneInSwarmView(w, h);
      if (
        (D(() => I.backend.killPane(A, !P)),
        await j(
          s,
          C,
          { tmuxPaneId: A, backendType: I.backend.type },
          e.storageV5,
        ),
        U && P)
      )
        await I.backend.enablePaneBorderStatus();
      let M = V(),
        b = [
          O("--agent-id", C),
          O("--agent-name", w),
          O("--team-name", s),
          `--agent-color ${jo([h])}`,
          `--parent-session-id ${jo([K()])}`,
          _ ? "--plan-mode-required" : "",
          r ? O("--agent-type", r) : "",
        ]
          .filter(Boolean)
          .join(" "),
        v = ee({
          planModeRequired: _,
          permissionMode: d.toolPermissionContext.mode,
          proactivityLevel: d.proactivityLevel,
          sessionEffort: d.sessionEffort,
          skipModel: !!p,
        });
      if (p) v = v ? `${v} ${O("--model", p)}` : O("--model", p);
      let B = v ? ` ${v}` : "",
        N = G(),
        Y = `cd ${jo([E])} && env ${N} ${jo(M)} ${b}${B}`;
      if (
        (await kwt(w, s, e.storageV5),
        (await ag(
          w,
          { from: fs, text: m, timestamp: new Date().toISOString() },
          s,
          e.storageV5,
        )) === void 0)
      )
        throw (
          f("subagent_launch", "subagent_teammate_prompt_write_failed"),
          new R(
            `Failed to write initial instructions to ${w}'s inbox \u2014 spawn aborted`,
            "spawnMultiAgent: failed to write initial teammate instructions \u2014 spawn aborted",
          )
        );
      (await I.backend.sendCommandToPane(A, Y, !P), y("swarm_pane_spawn"), k());
      let X = P ? "current" : M6,
        ae = P ? "current" : "swarm-view";
      return (
        o((x) => ({
          ...x,
          teamContext: {
            ...x.teamContext,
            teamName: s ?? x.teamContext?.teamName ?? "default",
            teamFilePath: x.teamContext?.teamFilePath ?? "",
            leadAgentId: x.teamContext?.leadAgentId ?? "",
            teammates: {
              ...(x.teamContext?.teammates || {}),
              [C]: {
                name: w,
                agentType: r,
                color: h,
                tmuxSessionName: X,
                tmuxPaneId: A,
                cwd: E,
                spawnedAt: Date.now(),
              },
            },
          },
        })),
        te(e.taskRegistry, {
          teammateId: C,
          sanitizedName: w,
          teamName: s,
          teammateColor: h,
          prompt: m,
          plan_mode_required: _,
          paneId: A,
          insideTmux: P,
          backendType: I.backend.type,
          toolUseId: e.toolUseId,
          cwd: E,
        }),
        {
          data: {
            teammate_id: C,
            agent_id: C,
            agent_type: r,
            model: p,
            name: w,
            color: h,
            tmux_session_name: X,
            tmux_window_name: ae,
            tmux_pane_id: A,
            team_name: s,
            is_splitpane: !0,
            plan_mode_required: _,
          },
        }
      );
    },
    e.storageV5,
  );
}
async function ue(t, e) {
  let { setAppState: o, getAppState: i } = e,
    { name: c, prompt: m, agent_type: r, cwd: T, plan_mode_required: _ } = t,
    p = H(t.model, i().mainLoopModel, t.modelSource);
  if (!c || !m)
    throw (
      f("subagent_launch", "subagent_teammate_missing_params"),
      Error("name and prompt are required for spawn operation")
    );
  let d = i(),
    s = d.teamContext?.teamName;
  if (!s)
    throw (
      f("subagent_launch", "subagent_teammate_no_team_name"),
      Error(
        "Internal error: session team not initialized. This should have happened at startup when agent swarms are enabled.",
      )
    );
  let E = T || Q();
  return W(
    c,
    s,
    { agentType: r, model: p, prompt: m, planModeRequired: _, cwd: E },
    e.teammateColors,
    async ({ sanitizedName: w, teammateId: C, teammateColor: h }, k, D) => {
      let I = `teammate-${Rwt(w)}`;
      await de(M6);
      let P = await Fe(N6, [
        "new-window",
        "-t",
        M6,
        "-n",
        I,
        "-P",
        "-F",
        "#{pane_id}",
        "--",
        Tge,
      ]);
      if (P.code !== 0)
        throw (
          f("subagent_launch", "subagent_teammate_tmux_window_failed"),
          Error(`Failed to create tmux window: ${P.stderr}`)
        );
      let A = P.stdout.trim();
      (D(() => Fe(N6, ["kill-pane", "-t", A])),
        await j(s, C, { tmuxPaneId: A, backendType: "tmux" }, e.storageV5));
      let U = V(),
        M = [
          O("--agent-id", C),
          O("--agent-name", w),
          O("--team-name", s),
          `--agent-color ${jo([h])}`,
          `--parent-session-id ${jo([K()])}`,
          _ ? "--plan-mode-required" : "",
          r ? O("--agent-type", r) : "",
        ]
          .filter(Boolean)
          .join(" "),
        b = ee({
          planModeRequired: _,
          permissionMode: d.toolPermissionContext.mode,
          proactivityLevel: d.proactivityLevel,
          sessionEffort: d.sessionEffort,
          skipModel: !!p,
        });
      if (p) b = b ? `${b} ${O("--model", p)}` : O("--model", p);
      let v = b ? ` ${b}` : "",
        B = G(),
        N = `cd ${jo([E])} && env ${B} ${jo(U)} ${M}${v}`;
      if (
        (await kwt(w, s, e.storageV5),
        (await ag(
          w,
          { from: fs, text: m, timestamp: new Date().toISOString() },
          s,
          e.storageV5,
        )) === void 0)
      )
        throw (
          f("subagent_launch", "subagent_teammate_prompt_write_failed"),
          new R(
            `Failed to write initial instructions to ${w}'s inbox \u2014 spawn aborted`,
            "spawnMultiAgent: failed to write initial teammate instructions \u2014 spawn aborted",
          )
        );
      try {
        cCe(N);
      } catch (L) {
        throw (f("subagent_launch", "subagent_teammate_control_chars"), L);
      }
      try {
        await W$t([], A, N);
      } catch (L) {
        throw (
          f("subagent_launch", "subagent_teammate_tmux_respawn_failed"),
          L
        );
      }
      return (
        k(),
        o((L) => ({
          ...L,
          teamContext: {
            ...L.teamContext,
            teamName: s ?? L.teamContext?.teamName ?? "default",
            teamFilePath: L.teamContext?.teamFilePath ?? "",
            leadAgentId: L.teamContext?.leadAgentId ?? "",
            teammates: {
              ...(L.teamContext?.teammates || {}),
              [C]: {
                name: w,
                agentType: r,
                color: h,
                tmuxSessionName: M6,
                tmuxPaneId: A,
                cwd: E,
                spawnedAt: Date.now(),
              },
            },
          },
        })),
        te(e.taskRegistry, {
          teammateId: C,
          sanitizedName: w,
          teamName: s,
          teammateColor: h,
          prompt: m,
          plan_mode_required: _,
          paneId: A,
          insideTmux: !1,
          backendType: "tmux",
          toolUseId: e.toolUseId,
          cwd: E,
        }),
        {
          data: {
            teammate_id: C,
            agent_id: C,
            agent_type: r,
            model: p,
            name: w,
            color: h,
            tmux_session_name: M6,
            tmux_window_name: I,
            tmux_pane_id: A,
            team_name: s,
            is_splitpane: !1,
            plan_mode_required: _,
          },
        }
      );
    },
    e.storageV5,
  );
}
function te(
  t,
  {
    teammateId: e,
    sanitizedName: o,
    teamName: i,
    teammateColor: c,
    prompt: m,
    plan_mode_required: r,
    paneId: T,
    insideTmux: _,
    backendType: p,
    toolUseId: d,
    cwd: s,
  },
) {
  let E = Dh("in_process_teammate"),
    w = `${m.substring(0, 50)}${m.length > 50 ? "..." : ""}`,
    C = new AbortController(),
    h,
    k = vwt(p) ? () => (h ??= a4e(p).killPane(T, !_)) : void 0,
    D = {
      ...Md(E, "in_process_teammate", w, d),
      type: "in_process_teammate",
      status: "running",
      cwd: s,
      identity: {
        agentId: e,
        agentName: o,
        teamName: i,
        color: c,
        planModeRequired: r ?? !1,
        parentSessionId: K(),
      },
      prompt: m,
      abortController: C,
      awaitingPlanApproval: !1,
      permissionMode: r ? "plan" : "default",
      isIdle: !1,
      lastReportedToolCount: 0,
      lastReportedTokenCount: 0,
      pendingUserMessages: [],
      paneTeardown: k,
    };
  if ((t.register(D), k))
    C.signal.addEventListener(
      "abort",
      () => {
        k();
      },
      { once: !0 },
    );
}
async function z(t, e) {
  let { setAppState: o, getAppState: i } = e,
    { name: c, prompt: m, agent_type: r, plan_mode_required: T } = t,
    _ = H(t.model, i().mainLoopModel, t.modelSource);
  if (!c || !m)
    throw (
      f("subagent_launch", "subagent_teammate_missing_params"),
      Error("name and prompt are required for spawn operation")
    );
  let d = i().teamContext?.teamName;
  if (!d)
    throw (
      f("subagent_launch", "subagent_teammate_no_team_name"),
      Error(
        "Internal error: session team not initialized. This should have happened at startup when agent swarms are enabled.",
      )
    );
  return W(
    c,
    d,
    { agentType: r, model: _, prompt: m, planModeRequired: T, cwd: Q() },
    e.teammateColors,
    async ({ sanitizedName: s, teammateId: E, teammateColor: w }, C) => {
      await j(
        d,
        E,
        { tmuxPaneId: "in-process", backendType: "in-process" },
        e.storageV5,
      );
      let h;
      if (r) {
        let b = e.options.agentDefinitions.activeAgents.find(
          (v) => v.agentType === r,
        );
        if (b && K4e(b)) h = b;
        n(`[handleSpawnInProcess] agent_type=${r}, found=${!!h}`);
      }
      let k = {
        name: s,
        teamName: d,
        prompt: m,
        color: w,
        planModeRequired: T ?? !1,
        model: _,
      };
      await kwt(s, d, e.storageV5);
      let D = await Ain(k, e);
      if (!D.ok)
        throw (
          f("subagent_launch", "subagent_teammate_inprocess_failed"),
          n(`[handleSpawnInProcess] spawn failed: ${D.error}`),
          Error("Failed to spawn in-process teammate")
        );
      (C(),
        Cin({
          identity: D.identity,
          taskId: D.taskId,
          prompt: m,
          description: t.description,
          model: _,
          agentDefinition: h,
          teammateContext: D.teammateContext,
          toolUseContext: { ...e, messages: [] },
          abortController: D.abortController,
          invokingRequestId: t.invokingRequestId,
        }),
        n(`[handleSpawnInProcess] Started agent execution for ${E}`));
      let I = i().teamContext?.leadAgentId,
        P = !I,
        A = I ?? ix(fs, d),
        U = P ? e.teammateColors.assign(A) : void 0;
      return (
        o((M) => {
          let b = M.teamContext?.teammates || {},
            v = P
              ? {
                  [A]: {
                    name: fs,
                    agentType: fs,
                    color: U,
                    tmuxSessionName: "in-process",
                    tmuxPaneId: "leader",
                    cwd: Q(),
                    spawnedAt: Date.now(),
                  },
                }
              : {};
          return {
            ...M,
            teamContext: {
              ...M.teamContext,
              teamName: d ?? M.teamContext?.teamName ?? "default",
              teamFilePath: M.teamContext?.teamFilePath ?? "",
              leadAgentId: A,
              teammates: {
                ...b,
                ...v,
                [E]: {
                  name: s,
                  agentType: r,
                  color: w,
                  tmuxSessionName: "in-process",
                  tmuxPaneId: "in-process",
                  cwd: Q(),
                  spawnedAt: Date.now(),
                },
              },
            },
          };
        }),
        {
          data: {
            teammate_id: E,
            agent_id: E,
            agent_type: r,
            model: _,
            name: s,
            color: w,
            tmux_session_name: "in-process",
            tmux_window_name: "in-process",
            tmux_pane_id: "in-process",
            team_name: d,
            is_splitpane: !1,
            plan_mode_required: T,
          },
        }
      );
    },
    e.storageV5,
  );
}
async function ce(t, e, o) {
  if (t.prompt && DH(t.prompt))
    throw (
      f("subagent_launch", "subagent_teammate_protocol_frame_prompt"),
      Error(iwn)
    );
  if (l4e()) return z(t, e);
  try {
    await Ift();
  } catch (c) {
    if (MOe() !== "auto")
      throw (f("subagent_launch", "subagent_teammate_pane_unavailable"), c);
    return (
      n(
        `[handleSpawn] No pane backend available, falling back to in-process: ${l(c)}`,
      ),
      Hun(),
      _e(e.toolState.get(ne), o),
      z(t, e)
    );
  }
  if (t.use_splitpane !== !1) return pe(t, e);
  return ue(t, e);
}
class ne {
  shown = !1;
}
function _e(t, e) {
  if (t.shown) return;
  t.shown = !0;
  let o = SN()
    ? 'To force iTerm2 panes, set teammateMode: "iterm2" in settings and enable the iTerm2 Python API (Preferences > General > Magic).'
    : 'To use terminal panes, set teammateMode: "tmux" in settings.';
  e?.({
    type: "notification",
    notification: {
      key: "teammate-auto-fallback",
      text: `Couldn't open a teammate pane \u2014 running in-process instead. ${o}`,
      color: "warning",
      priority: "high",
    },
  });
}
async function ct(t, e, o) {
  return ce(t, e, o);
}
export { ct as spawnTeammate };

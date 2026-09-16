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
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { Po } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { x, kr } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import "../状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../状态栏-主题/chunk-q7ekqy5h.js";
import "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import { Ao } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
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
import "../Teammates团队/chunk-811z9z0t.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../认证-OAuth登录/chunk-s51acx6w.js";
import "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0a6nmdka.js";
import { E9e, A9e } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pw4nttt4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kk7p3hsm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-t31b4117.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-t76ttx77.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z3y2y7w9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k2rb4dgd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ewa397cg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k0wct4tn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-gdyh44zt.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tmxdrqem.js";
import { Se } from "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import { xe } from "../../01-核心基础设施/共享小工具-未细化/chunk-cwpbthvg.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import { OM, PVe, Ngt, Lr } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { YFe, JFe } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../权限系统/chunk-t3b7pg2x.js";
import "../权限系统/chunk-fjrcf22x.js";
import "../权限系统/chunk-qdy0h5k2.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import { Ea } from "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../Artifact发布-渲染/chunk-01ymf0ar.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
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
import "../会话-历史-恢复/chunk-m1xj4s02.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../Teammates团队/chunk-g6nvp9mm.js";
import "../Bridge-RemoteControl/chunk-9estzwf5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k6pta6f5.js";
import "../Hooks钩子/chunk-z3433nr6.js";
import "../Hooks钩子/chunk-bzqqe6xh.js";
import "../插件系统/chunk-ajtn749s.js";
import "../插件系统/chunk-hh8f1qrw.js";
import "../图片-截图-ComputerUse/chunk-b8jsase9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5jqttbex.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import "../后台任务-Shell管理/chunk-djserjj5.js";
import "../Artifact发布-渲染/chunk-rr78st95.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import "../认证-OAuth登录/chunk-x3rm9w4b.js";
import "../Skills技能/chunk-1zy5c8mf.js";
import "../Teammates团队/chunk-6b13bhw1.js";
import "../Teammates团队/chunk-t899nada.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vtgvbed1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwtsmfpc.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import "../Bridge-RemoteControl/chunk-3j7ezsr7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import "../后台任务-Shell管理/chunk-9d5wk5b9.js";
import "../Cron-定时任务/chunk-mk3zm4ew.js";
import "../工具结果持久化/工具结果持久化.jj43r39n.js";
import "../Teammates团队/chunk-3k2smxfn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import "../Bridge-RemoteControl/chunk-tyce0p0b.js";
import "../Bridge-RemoteControl/chunk-mxsfy35q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0f2h3r35.js";
import "../ClaudeinChrome/chunk-hnp84hf6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
import "../权限系统/chunk-1y2g140m.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../图片-截图-ComputerUse/chunk-bvxymt09.js";
import "../Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import "../键位绑定(Keybindings)/chunk-qy43nqgh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdk55p8n.js";
import "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7f3kwdxn.js";
import { Ac, vh, Yd } from "../../03-入口与运行时/会话UI(REPL)/chunk-sn6am10p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0dh9gct8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../语法高亮-Markdown渲染/chunk-hqp2e8nr.js";
import "../Diff引擎/chunk-p2gj9dsf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-05js9xfq.js";
import { Ch } from "../语法高亮-Markdown渲染/chunk-mnn6q099.js";
import { Pg } from "../../03-入口与运行时/会话UI(REPL)/chunk-vpp75aza.js";
import { FB, wWe } from "../Diff引擎/chunk-arr1hvsk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-bhcz98rd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-37xdmryq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
import { Dn, kn, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import "../../01-核心基础设施/设置-配置/chunk-5q6f0q9d.js";
import "../Teammates团队/chunk-mrfx53ye.js";
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
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
import { isAbsolute as je, relative as ee, resolve as Ne } from "path";
function Re(i, a, s = 1 / 0) {
  let l = a <= 0 || !Number.isFinite(a),
    f = 0,
    c = 0;
  while (c <= i.length) {
    let u = i.indexOf(
        `
`,
        c,
      ),
      k = u === -1 ? i.substring(c) : i.substring(c, u);
    if (l) f++;
    else {
      let w = E9e(k);
      f += w === 0 ? 1 : Math.ceil(w / a);
    }
    if (f > s) return f;
    if (u === -1) break;
    c = u + 1;
  }
  return f;
}
function re(i, a, s) {
  return Re(i, a, s) > s;
}
var b = 10,
  R = `
`;
function O(i) {
  let a = i.split(R);
  return i.endsWith(R) ? a.length - 1 : a.length;
}
function me(i, a) {
  let s = A9e(i, a).height;
  return i.endsWith(R) ? s - 1 : s;
}
function N() {
  let mt = _(1),
    Te;
  if (mt[0] === p)
    ((Te = e(t, {
      dimColor: !0,
      children: " \u2014 previous content replaced (no diff shown)",
    })),
      (mt[0] = Te));
  else Te = mt[0];
  return Te;
}
function he(gt) {
  let g = _(37),
    { filePath: D, content: Y, verbose: m, replacedUndiffedContent: Fe } = gt,
    oe = Fe === void 0 ? !1 : Fe,
    { columns: ht } = Se(),
    v = Math.max(1, ht - 12),
    U = Y || "(No content)",
    ke;
  if (g[0] !== Y) ((ke = O(Y)), (g[0] = Y), (g[1] = ke));
  else ke = g[1];
  let M = ke,
    we;
  if (g[2] !== U || g[3] !== v || g[4] !== m)
    ((we = m
      ? U
      : U.split(R)
          .slice(0, b)
          .join(R)
          .slice(0, b * (v + 1))),
      (g[2] = U),
      (g[3] = v),
      (g[4] = m),
      (g[5] = we));
  else we = g[5];
  let ne = we,
    ie = m ? 0 : me(U, v) - b,
    q;
  if (g[6] !== M)
    ((q = e(t, { bold: !0, children: M })), (g[6] = M), (g[7] = q));
  else q = g[7];
  let z;
  if (g[8] !== M) ((z = x(M, "line")), (g[8] = M), (g[9] = z));
  else z = g[9];
  let A;
  if (g[10] !== D || g[11] !== m)
    ((A = m ? D : ee(Q(), D)), (g[10] = D), (g[11] = m), (g[12] = A));
  else A = g[12];
  let G;
  if (g[13] !== A)
    ((G = e(t, { bold: !0, children: A })), (g[13] = A), (g[14] = G));
  else G = g[14];
  let J;
  if (g[15] !== oe) ((J = oe && e(N, {})), (g[15] = oe), (g[16] = J));
  else J = g[16];
  let K;
  if (g[17] !== q || g[18] !== z || g[19] !== G || g[20] !== J)
    ((K = r(t, { children: ["Wrote ", q, " ", z, " to", " ", G, J] })),
      (g[17] = q),
      (g[18] = z),
      (g[19] = G),
      (g[20] = J),
      (g[21] = K));
  else K = g[21];
  const se = m ? void 0 : "hidden",
    ae = m ? void 0 : b;
  let Z;
  if (g[22] !== ne || g[23] !== D || g[24] !== v)
    ((Z = e(Ch, { code: ne, filePath: D, width: v })),
      (g[22] = ne),
      (g[23] = D),
      (g[24] = v),
      (g[25] = Z));
  else Z = g[25];
  let E;
  if (g[26] !== se || g[27] !== ae || g[28] !== Z)
    ((E = e(o, {
      flexDirection: "column",
      overflowY: se,
      maxHeight: ae,
      children: Z,
    })),
      (g[26] = se),
      (g[27] = ae),
      (g[28] = Z),
      (g[29] = E));
  else E = g[29];
  let I;
  if (g[30] !== ie || g[31] !== m)
    ((I = !m && e(vh, { count: ie, expandable: !0 })),
      (g[30] = ie),
      (g[31] = m),
      (g[32] = I));
  else I = g[32];
  let De;
  if (g[33] !== E || g[34] !== I || g[35] !== K)
    ((De = e(xe, {
      children: r(o, { flexDirection: "column", children: [K, E, I] }),
    })),
      (g[33] = E),
      (g[34] = I),
      (g[35] = K),
      (g[36] = De));
  else De = g[36];
  return De;
}
function be({ type: i, content: a, structuredPatch: s, originalFile: l }) {
  return (
    i === "update" &&
    Array.isArray(s) &&
    s.length === 0 &&
    l === null &&
    typeof a === "string" &&
    a !== ""
  );
}
function lt(i, { columns: a }) {
  let { type: s, content: l } = i;
  if (s !== "create" && !be(i)) return !1;
  if (typeof l !== "string") return !1;
  let f = l.endsWith(R) ? b + 1 : b;
  return re(l, Math.max(1, a - 12), f);
}
function ct(i, { verbose: a }) {
  if (!i.file_path) return null;
  if (i.file_path.startsWith(Ea())) return "";
  return e(Pg, {
    filePath: i.file_path,
    children: a ? i.file_path : Ao(i.file_path),
  });
}
function ft({ file_path: i, content: a }, { style: s, verbose: l }) {
  return e(ye, { filePath: i, content: a, style: s, verbose: l });
}
function ye(bt) {
  let H = _(20),
    { filePath: y, content: P, style: le, verbose: W } = bt,
    ve;
  if (H[0] !== P || H[1] !== y)
    ((ve = () => ge(y, P)), (H[0] = P), (H[1] = y), (H[2] = ve));
  else ve = H[2];
  let [ce] = d(ve),
    Ce;
  if (H[3] !== P) ((Ce = kr(P)), (H[3] = P), (H[4] = Ce));
  else Ce = H[4];
  let L = Ce,
    Me;
  if (H[5] !== P || H[6] !== y || H[7] !== L || H[8] !== W)
    ((Me = e(FB, {
      file_path: y,
      operation: "write",
      content: P,
      firstLine: L,
      verbose: W,
    })),
      (H[5] = P),
      (H[6] = y),
      (H[7] = L),
      (H[8] = W),
      (H[9] = Me));
  else Me = H[9];
  let j = Me,
    X;
  if (
    H[10] !== j ||
    H[11] !== ce ||
    H[12] !== y ||
    H[13] !== L ||
    H[14] !== le ||
    H[15] !== W
  )
    ((X = e(te, {
      promise: ce,
      filePath: y,
      firstLine: L,
      createFallback: j,
      style: le,
      verbose: W,
    })),
      (H[10] = j),
      (H[11] = ce),
      (H[12] = y),
      (H[13] = L),
      (H[14] = le),
      (H[15] = W),
      (H[16] = X));
  else X = H[16];
  let We;
  if (H[17] !== j || H[18] !== X)
    ((We = e(Dn, { fallback: j, children: X })),
      (H[17] = j),
      (H[18] = X),
      (H[19] = We));
  else We = H[19];
  return We;
}
function te(yt) {
  let Le = _(8),
    {
      promise: xt,
      filePath: fe,
      firstLine: pe,
      createFallback: Pt,
      style: ue,
      verbose: de,
    } = yt,
    T = kn(xt);
  if (T.type === "create") {
    return Pt;
  }
  if (T.type === "error") {
    let S;
    if (Le[0] === p)
      ((S = e(xe, { children: e(t, { children: "(No changes)" }) })),
        (Le[0] = S));
    else S = Le[0];
    return S;
  }
  let S;
  if (
    Le[1] !== T.oldContent ||
    Le[2] !== T.patch ||
    Le[3] !== fe ||
    Le[4] !== pe ||
    Le[5] !== ue ||
    Le[6] !== de
  )
    ((S = e(FB, {
      file_path: fe,
      operation: "update",
      patch: T.patch,
      firstLine: pe,
      fileContent: T.oldContent,
      style: ue,
      verbose: de,
    })),
      (Le[1] = T.oldContent),
      (Le[2] = T.patch),
      (Le[3] = fe),
      (Le[4] = pe),
      (Le[5] = ue),
      (Le[6] = de),
      (Le[7] = S));
  else S = Le[7];
  return S;
}
async function ge(i, a) {
  try {
    let s = je(i) ? i : Ne(Q(), i),
      l = await PVe(s);
    if (l === null) return { type: "create" };
    let f;
    try {
      f = await Ngt(l);
    } finally {
      await l.close();
    }
    if (f === null) return { type: "create" };
    return {
      type: "update",
      patch: OM({
        filePath: i,
        fileContents: f,
        edits: [{ old_string: f, new_string: a, replace_all: !1 }],
      }),
      oldContent: f,
    };
  } catch (s) {
    if (Po(s))
      n(`Failed to load rejection diff for ${i}: ${s.message}`, {
        level: "error",
      });
    else h(s);
    return { type: "error" };
  }
}
function pt(i, { verbose: a }) {
  if (!a && typeof i === "string" && Lr(i, "tool_use_error"))
    return e(xe, {
      children: e(t, { color: "error", children: "Error writing file" }),
    });
  return e(Yd, { result: i, verbose: a });
}
function ut(i, a, { style: s, verbose: l }) {
  return Pe(i, a, { style: s, verbose: l });
}
function Pe(i, a, { style: s, verbose: l, replacedUndiffedContent: f = !1 }) {
  let {
    filePath: c = "",
    content: u,
    structuredPatch: k,
    type: w,
    originalFile: B,
  } = i;
  if (!c) return null;
  switch (w) {
    case "create": {
      if (c.startsWith(Ea()) && !l) {
        if (s !== "condensed")
          return e(xe, {
            children: e(t, { dimColor: !0, children: "/plan to preview" }),
          });
      } else if (s === "condensed" && !l) {
        let C = O(u);
        return r(t, {
          children: [
            "Wrote ",
            e(t, { bold: !0, children: C }),
            " ",
            x(C, "line"),
            " to",
            " ",
            e(t, { bold: !0, children: ee(Q(), c) }),
            f && e(N, {}),
          ],
        });
      } else if (!l && (YFe(c) || JFe(c))) {
        let C = O(u);
        return e(xe, {
          children: r(t, {
            children: [
              "Wrote ",
              e(t, { bold: !0, children: C }),
              " ",
              x(C, "line"),
              f && e(N, {}),
              " ",
              e(Ac, {}),
            ],
          }),
        });
      }
      return e(he, {
        filePath: c,
        content: u,
        verbose: l,
        replacedUndiffedContent: f,
      });
    }
    case "update": {
      if (be(i))
        return Pe({ ...i, type: "create" }, a, {
          style: s,
          verbose: l,
          replacedUndiffedContent: !0,
        });
      let V = c.startsWith(Ea());
      return e(wWe, {
        filePath: c,
        structuredPatch: k,
        firstLine: kr(u),
        fileContent: B ?? void 0,
        style: s,
        verbose: l,
        previewHint: V ? "/plan to preview" : void 0,
        collapsed: !V && (YFe(c) || JFe(c)),
      });
    }
  }
}
export {
  lt as isResultTruncated,
  ut as renderToolResultMessage,
  pt as renderToolUseErrorMessage,
  ct as renderToolUseMessage,
  ft as renderToolUseRejectedMessage,
};

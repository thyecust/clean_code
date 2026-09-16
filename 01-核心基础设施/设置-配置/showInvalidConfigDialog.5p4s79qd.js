// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../共享小工具-未细化/chunk-h62vxw7j.js";
import "../共享小工具-未细化/chunk-510m1t2d.js";
import "../../02-功能模块/Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "./chunk-zqr5ctyf.js";
import "../../02-功能模块/认证-OAuth登录/chunk-9g2q4bjq.js";
import "../共享小工具-未细化/chunk-w76kejwn.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b, Jhe } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import "../共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../02-功能模块/状态栏-主题/chunk-jz6b76hr.js";
import "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import "../../02-功能模块/状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import "../共享小工具-未细化/chunk-gd42wcxf.js";
import "../../02-功能模块/文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../../02-功能模块/Teammates团队/chunk-qe04h4c5.js";
import "../../02-功能模块/状态栏-主题/chunk-dqyc6kge.js";
import "../安全文件系统(FS加固)/chunk-h64ek850.js";
import "../ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../../02-功能模块/图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../../02-功能模块/状态栏-主题/chunk-q7ekqy5h.js";
import "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../02-功能模块/运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../共享小工具-未细化/chunk-twnwwsbr.js";
import "../共享小工具-未细化/chunk-an83zrbx.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "./设置-配置.aqbb35ee.js";
import "../共享小工具-未细化/chunk-rsr7cnyv.js";
import "../核心工具-路径与平台/chunk-fx8qr1md.js";
import "../../02-功能模块/会话-历史-恢复/chunk-mkmy4cx2.js";
import "../共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../../02-功能模块/Git-Worktree/chunk-9ys1bnqr.js";
import "../共享小工具-未细化/chunk-862jyk0r.js";
import "../安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../核心工具-字符串与文本/chunk-01cse5zg.js";
import "../共享小工具-未细化/chunk-km6n9zrg.js";
import "../共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../共享小工具-未细化/chunk-jjr7hzzf.js";
import "../../02-功能模块/权限系统/chunk-e4pfvp7x.js";
import "../../02-功能模块/工具Bash-Shell/chunk-4pap8y5n.js";
import "../共享小工具-未细化/chunk-24x3spwe.js";
import "../核心工具-路径与平台/chunk-svk2cp17.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../共享小工具-未细化/chunk-0ypv8gq2.js";
import "../共享小工具-未细化/chunk-jj2wxn4x.js";
import "../共享小工具-未细化/chunk-yz7dtpc3.js";
import "../核心工具-进程与信号/chunk-qja3ebvp.js";
import "../../02-功能模块/认证-OAuth登录/chunk-wk0e3dz4.js";
import "../../02-功能模块/认证-OAuth登录/chunk-7rf7w8yf.js";
import "../../02-功能模块/Git-Worktree/chunk-bk9696gx.js";
import "../../02-功能模块/认证-OAuth登录/chunk-y7b7kf5n.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../共享小工具-未细化/chunk-h3avap4w.js";
import "../共享小工具-未细化/chunk-1bqqnyc1.js";
import "../共享小工具-未细化/chunk-q599wyee.js";
import "../核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../共享小工具-未细化/chunk-a5errgr8.js";
import "../../02-功能模块/权限系统/chunk-ynkf3yy4.js";
import "../../02-功能模块/Teammates团队/chunk-811z9z0t.js";
import "../核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../核心工具-进程与信号/chunk-qjqntsq2.js";
import "../共享小工具-未细化/chunk-035vf5et.js";
import "../../02-功能模块/Hooks钩子/chunk-9em0d4k5.js";
import "../../02-功能模块/上下文压缩-Compact/chunk-mxt9bjz3.js";
import "../../02-功能模块/终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import { o, t, J0 } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../../02-功能模块/认证-OAuth登录/chunk-s51acx6w.js";
import "../../02-功能模块/终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../共享小工具-未细化/chunk-0a6nmdka.js";
import "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import "../共享小工具-未细化/chunk-pw4nttt4.js";
import "../共享小工具-未细化/chunk-kk7p3hsm.js";
import "../共享小工具-未细化/chunk-t31b4117.js";
import "../共享小工具-未细化/chunk-6ffbt6s0.js";
import "../ANSI-样式-布局原语/chunk-t76ttx77.js";
import "../共享小工具-未细化/chunk-z3y2y7w9.js";
import "../共享小工具-未细化/chunk-k2rb4dgd.js";
import "../共享小工具-未细化/chunk-ewa397cg.js";
import "../共享小工具-未细化/chunk-k0wct4tn.js";
import "../共享小工具-未细化/chunk-7xabjzfw.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-gdyh44zt.js";
import "../共享小工具-未细化/chunk-tmxdrqem.js";
import { wv } from "../共享小工具-未细化/chunk-ajpjkvdj.js";
import { zm } from "../../02-功能模块/后台任务-Shell管理/chunk-c7mzes79.js";
import "../共享小工具-未细化/chunk-0dh9gct8.js";
import "../共享小工具-未细化/chunk-r3y9qj3r.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-fgcep5na.js";
import "../../02-功能模块/键位绑定(Keybindings)/chunk-qy43nqgh.js";
import "../../02-功能模块/键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../共享小工具-未细化/chunk-z5g6jeny.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../../02-功能模块/工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../02-功能模块/Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../../02-功能模块/策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../../02-功能模块/MCP客户端/chunk-3kmsshb6.js";
import "../../02-功能模块/插件系统/chunk-7s6mt1vg.js";
import "../../02-功能模块/图表-Mermaid/chunk-743atbtj.js";
import "../../02-功能模块/Skills技能/chunk-sapykxw7.js";
import "./chunk-b536v45y.js";
import "../共享小工具-未细化/chunk-15vfjgmh.js";
import "../../02-功能模块/权限系统/chunk-t3b7pg2x.js";
import "../../02-功能模块/权限系统/chunk-fjrcf22x.js";
import "../../02-功能模块/权限系统/chunk-qdy0h5k2.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../../02-功能模块/计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../../02-功能模块/Teammates团队/chunk-thxapyam.js";
import "../核心工具-路径与平台/chunk-2f8axr19.js";
import "../核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../../02-功能模块/Artifact发布-渲染/chunk-01ymf0ar.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-x3txegas.js";
import "../核心工具-进程与信号/chunk-w78brv7j.js";
import "../遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../../02-功能模块/Workflow编排/chunk-0t0sve49.js";
import "../共享小工具-未细化/chunk-rfb3s38d.js";
import "../共享小工具-未细化/chunk-btrgwq6w.js";
import "../../02-功能模块/跨会话消息(UDS)/chunk-ddtmwhn7.js";
import "../../02-功能模块/跨会话消息(UDS)/chunk-9kzxq41e.js";
import "../共享小工具-未细化/chunk-1945b2ak.js";
import "../共享小工具-未细化/chunk-6kad94y1.js";
import "../HTTP-网络层/chunk-tzqq81r7.js";
import "../../02-功能模块/会话-历史-恢复/chunk-m1xj4s02.js";
import "../遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../共享小工具-未细化/chunk-97crm80y.js";
import "../核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../共享小工具-未细化/chunk-n0fk8fsb.js";
import "../提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../共享小工具-未细化/chunk-7dzh4mjq.js";
import "../../02-功能模块/Teammates团队/chunk-g6nvp9mm.js";
import "../../02-功能模块/Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-9estzwf5.js";
import "../共享小工具-未细化/chunk-k6pta6f5.js";
import "../../02-功能模块/Hooks钩子/chunk-z3433nr6.js";
import "../../02-功能模块/Hooks钩子/chunk-bzqqe6xh.js";
import "../../02-功能模块/插件系统/chunk-ajtn749s.js";
import "../../02-功能模块/插件系统/chunk-hh8f1qrw.js";
import "../../02-功能模块/图片-截图-ComputerUse/chunk-b8jsase9.js";
import "../共享小工具-未细化/chunk-sda3j0p4.js";
import "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import "../共享小工具-未细化/chunk-5jqttbex.js";
import "../共享小工具-未细化/chunk-dajvcsw3.js";
import "../共享小工具-未细化/chunk-7wm8t84g.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-djserjj5.js";
import "../../02-功能模块/Artifact发布-渲染/chunk-rr78st95.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import "../../02-功能模块/认证-OAuth登录/chunk-x3rm9w4b.js";
import "../../02-功能模块/Skills技能/chunk-1zy5c8mf.js";
import "../../02-功能模块/Teammates团队/chunk-6b13bhw1.js";
import "../../02-功能模块/Teammates团队/chunk-t899nada.js";
import "../共享小工具-未细化/chunk-vtgvbed1.js";
import "../共享小工具-未细化/chunk-cwtsmfpc.js";
import "../共享小工具-未细化/chunk-x4q0245z.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-3j7ezsr7.js";
import "../共享小工具-未细化/chunk-7fcxwgtq.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-9d5wk5b9.js";
import "../../02-功能模块/Cron-定时任务/chunk-mk3zm4ew.js";
import "../../02-功能模块/工具结果持久化/工具结果持久化.jj43r39n.js";
import "../../02-功能模块/Teammates团队/chunk-3k2smxfn.js";
import "../共享小工具-未细化/chunk-qg9n8r78.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-tyce0p0b.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-mxsfy35q.js";
import "../共享小工具-未细化/chunk-0f2h3r35.js";
import "../../02-功能模块/ClaudeinChrome/chunk-hnp84hf6.js";
import "../共享小工具-未细化/chunk-21sqz10e.js";
import "../../02-功能模块/权限系统/chunk-1y2g140m.js";
import "../共享小工具-未细化/chunk-6dk85bs6.js";
import "../共享小工具-未细化/chunk-0qtt3z52.js";
import "../共享小工具-未细化/chunk-1p3batyk.js";
import "../共享小工具-未细化/chunk-203p0p9a.js";
import "../共享小工具-未细化/chunk-ve2h3qad.js";
import "../共享小工具-未细化/chunk-mvw7xg6n.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-7wsy8vxb.js";
import "../../02-功能模块/权限系统/chunk-8rrcddth.js";
import "../共享小工具-未细化/chunk-52kaw3c1.js";
import "../../02-功能模块/语音-音频/chunk-cfhndstm.js";
import "../共享小工具-未细化/chunk-1kh149yd.js";
import "../../02-功能模块/图片-截图-ComputerUse/chunk-bvxymt09.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../共享小工具-未细化/chunk-6smvq03f.js";
import "../共享小工具-未细化/chunk-0kqw1wf5.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-1yq098a7.js";
import "../共享小工具-未细化/chunk-vke340te.js";
import "../../02-功能模块/MCP客户端/chunk-g4gdwpa0.js";
import "../../02-功能模块/Hooks钩子/chunk-22aft7vr.js";
import "../共享小工具-未细化/chunk-vzqtx1mx.js";
import "../../02-功能模块/工具TodoWrite-Tasks/chunk-5a7p8d2p.js";
import "../共享小工具-未细化/chunk-vz37aa8z.js";
import "../../02-功能模块/Workflow编排/chunk-va9cgbfs.js";
import "../../02-功能模块/Artifact发布-渲染/chunk-5gz5xvw9.js";
import "../../02-功能模块/MCP客户端/chunk-xcbagjx9.js";
import "../共享小工具-未细化/chunk-q8r1ycrr.js";
import "../共享小工具-未细化/chunk-s1hpfa12.js";
import "../共享小工具-未细化/chunk-ejtvp07p.js";
import "../共享小工具-未细化/chunk-cj5z5g82.js";
import "../../02-功能模块/文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import "../共享小工具-未细化/chunk-axrnefsa.js";
import { ve } from "../../02-功能模块/交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import "../共享小工具-未细化/chunk-4ctm4frf.js";
import "../共享小工具-未细化/chunk-mb654mj6.js";
import "../共享小工具-未细化/chunk-dsg6bce8.js";
import "../共享小工具-未细化/chunk-eebsvd7r.js";
import "../共享小工具-未细化/chunk-sdk55p8n.js";
import "../../02-功能模块/键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import "../共享小工具-未细化/chunk-ff1hq6qq.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-dhg42t8r.js";
import "../共享小工具-未细化/chunk-jhstj6d7.js";
import "../共享小工具-未细化/chunk-fafq09h6.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../共享小工具-未细化/chunk-my8s4daz.js";
import "../共享小工具-未细化/chunk-37xdmryq.js";
import "../共享小工具-未细化/chunk-7ejhgecr.js";
import "../共享小工具-未细化/chunk-tw8akhx1.js";
import "../共享小工具-未细化/chunk-951vj555.js";
import "../共享小工具-未细化/chunk-xc85bfby.js";
import "../共享小工具-未细化/chunk-7jfz2w01.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../共享小工具-未细化/chunk-fgegxt0m.js";
import "../共享小工具-未细化/chunk-j4vveza5.js";
import "../../02-功能模块/权限系统/chunk-2ttypdwq.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-nhnqmzyt.js";
import "../../02-功能模块/Teammates团队/chunk-2j84y871.js";
import "../共享小工具-未细化/chunk-tkfrb8jm.js";
import "../../02-功能模块/插件系统/chunk-5ztq0v89.js";
import "../共享小工具-未细化/chunk-5ktz3kp7.js";
import "../../02-功能模块/MCP客户端/chunk-k2gczbnj.js";
import "../核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../../02-功能模块/Workflow编排/chunk-hdhsmge4.js";
import "../共享小工具-未细化/chunk-42mwj027.js";
import "../共享小工具-未细化/chunk-j3qyvdwg.js";
import "../共享小工具-未细化/chunk-28p6k62j.js";
import "./chunk-5q6f0q9d.js";
import "../../02-功能模块/Teammates团队/chunk-mrfx53ye.js";
import "../共享小工具-未细化/chunk-gyn0kh7v.js";
import "../共享小工具-未细化/chunk-rrrsz7e6.js";
import "../共享小工具-未细化/chunk-1avr3bqa.js";
import "../../02-功能模块/插件系统/chunk-33bdfgmx.js";
import "../../02-功能模块/MCP客户端/chunk-0mwqsv0r.js";
import "../../02-功能模块/图片-截图-ComputerUse/chunk-0dcnsftb.js";
import "../../02-功能模块/DesignSync/chunk-5kyac4wk.js";
import "../../02-功能模块/MCP客户端/chunk-tznd4407.js";
import "../共享小工具-未细化/chunk-anxypace.js";
import "../共享小工具-未细化/chunk-f1stkzph.js";
import "../共享小工具-未细化/chunk-qd67kfe4.js";
import "../共享小工具-未细化/chunk-k1vb7vky.js";
import "../../02-功能模块/工具Monitor/chunk-kxk3njnj.js";
import "../共享小工具-未细化/chunk-w8hsca1t.js";
import "../共享小工具-未细化/chunk-339z9efw.js";
import "../共享小工具-未细化/chunk-sp33tdvc.js";
import "../../02-功能模块/Teammates团队/chunk-eey53z5b.js";
import "../共享小工具-未细化/chunk-bacs4ztm.js";
import "../共享小工具-未细化/chunk-6eskfcpn.js";
import "../共享小工具-未细化/chunk-cyyrj58q.js";
import "../共享小工具-未细化/chunk-px58ry6q.js";
import "../共享小工具-未细化/chunk-vp8yvx5r.js";
import "../../02-功能模块/工具ToolSearch/chunk-1m51pqtd.js";
import "../共享小工具-未细化/chunk-jzy6p47z.js";
import "../共享小工具-未细化/chunk-nfcecy7x.js";
import "../../02-功能模块/权限系统/chunk-pcxn6gwz.js";
import "../共享小工具-未细化/chunk-w4swsde7.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../../02-功能模块/Teammates团队/chunk-enjekn9t.js";
import "../共享小工具-未细化/chunk-a7cfts2d.js";
import "../共享小工具-未细化/chunk-v2wxtqf7.js";
import "../../02-功能模块/Bedrock-Vertex/chunk-p991cddr.js";
import "../共享小工具-未细化/chunk-kkf7jbwd.js";
import "../共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../核心工具-路径与平台/chunk-13kdp2ag.js";
import "../../02-功能模块/图片-截图-ComputerUse/chunk-6kdvf977.js";
import { p } from "../共享小工具-未细化/chunk-2c9tjhwd.js";
function C(K) {
  let n = _(19),
    { filePath: R, errorDescription: h, onExit: i, onReset: u } = K,
    O;
  if (n[0] !== i || n[1] !== u)
    ((O = (M) => {
      if (M === "exit") i();
      else u();
    }),
      (n[0] = i),
      (n[1] = u),
      (n[2] = O));
  else O = n[2];
  let E = O,
    m;
  if (n[3] !== R)
    ((m = r(t, {
      children: [
        "The configuration file at ",
        e(t, { bold: !0, children: R }),
        " contains invalid JSON.",
      ],
    })),
      (n[3] = R),
      (n[4] = m));
  else m = n[4];
  let d;
  if (n[5] !== h) ((d = e(t, { children: h })), (n[5] = h), (n[6] = d));
  else d = n[6];
  let c;
  if (n[7] !== m || n[8] !== d)
    ((c = r(o, { flexDirection: "column", gap: 1, children: [m, d] })),
      (n[7] = m),
      (n[8] = d),
      (n[9] = c));
  else c = n[9];
  let x;
  if (n[10] === p)
    ((x = e(t, { bold: !0, children: "Choose an option:" })), (n[10] = x));
  else x = n[10];
  let y;
  if (n[11] === p)
    ((y = [
      { label: "Exit and fix manually", value: "exit" },
      { label: "Reset with default configuration", value: "reset" },
    ]),
      (n[11] = y));
  else y = n[11];
  let g;
  if (n[12] !== E || n[13] !== i)
    ((g = r(o, {
      flexDirection: "column",
      children: [x, e(ve, { options: y, onChange: E, onCancel: i })],
    })),
      (n[12] = E),
      (n[13] = i),
      (n[14] = g));
  else g = n[14];
  let S;
  if (n[15] !== i || n[16] !== c || n[17] !== g)
    ((S = r(de, {
      title: "Configuration error",
      color: "error",
      onCancel: i,
      children: [c, g],
    })),
      (n[15] = i),
      (n[16] = c),
      (n[17] = g),
      (n[18] = S));
  else S = n[18];
  return S;
}
var D = "dark";
async function U({ error: a }) {
  let f = { ...wv(!1), theme: D };
  await new Promise(async (s) => {
    let { unmount: l } = await J0(
      e(zm, {
        session: B(),
        children: e(C, {
          filePath: a.filePath,
          errorDescription: a.message,
          onExit: () => {
            (l(), s(), process.exit(1));
          },
          onReset: () => {
            (Jhe(a.filePath, b(a.defaultConfig, null, 2), {
              flush: !1,
              encoding: "utf8",
            }),
              l(),
              s(),
              process.exit(0));
          },
        }),
      }),
      f,
    );
  });
}
export { U as showInvalidConfigDialog };

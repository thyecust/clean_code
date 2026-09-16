// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../00-第三方库/react/react.zhnvc798.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../键位绑定(Keybindings)/chunk-qy43nqgh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
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
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jhstj6d7.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import "../状态栏-主题/chunk-w5jaj6kg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import "../状态栏-主题/chunk-q7ekqy5h.js";
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import "../认证-OAuth登录/chunk-s51acx6w.js";
import "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0a6nmdka.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fafq09h6.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-my8s4daz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdk55p8n.js";
import "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-vwjrfkgt.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-yhkvt9ba.js";
import { Yit } from "./Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x93xfjz0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7ejhgecr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tw8akhx1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-951vj555.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
import { F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1avr3bqa.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jzy6p47z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w4swsde7.js";
import "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../Bedrock-Vertex/chunk-p991cddr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
F();
function E(i) {
  return (i + 1) % a.length;
}
function U(i_0) {
  return (i_0 + 1) % s.length;
}
function I(i_1) {
  return (i_1 + 1) % u.length;
}
function H(i_2) {
  return (i_2 - 1 + a.length) % a.length;
}
function K(i_3) {
  return (i_3 - 1 + s.length) % s.length;
}
function N(i_4) {
  return (i_4 - 1 + u.length) % u.length;
}
var a = [
    { label: "Off", intervalMinutes: null },
    { label: "Every 5 minutes", intervalMinutes: 5 },
    { label: "Every 15 minutes", intervalMinutes: 15 },
    { label: "Every 30 minutes", intervalMinutes: 30, hint: "(default)" },
    { label: "Every 1 hour", intervalMinutes: 60 },
  ],
  s = [
    { label: "5 minutes", minutes: 5 },
    { label: "10 minutes", minutes: 10, hint: "(default)" },
    { label: "15 minutes", minutes: 15 },
    { label: "30 minutes", minutes: 30 },
  ],
  u = [
    { label: "Off", range: null },
    { label: "22:00 \u2013 07:00", range: { start: "22:00", end: "07:00" } },
    { label: "23:00 \u2013 06:00", range: { start: "23:00", end: "06:00" } },
    { label: "00:00 \u2013 07:00", range: { start: "00:00", end: "07:00" } },
  ];
function z(e, t) {
  if (!e) return 0;
  let n = t ?? 30,
    o = 1,
    r = 1 / 0;
  for (let i = 1; i < a.length; i++) {
    let l = Math.abs(a[i].intervalMinutes - n);
    if (l < r) ((r = l), (o = i));
  }
  return o;
}
function A(e) {
  let t = e ?? Yit,
    n = 0,
    o = 1 / 0;
  for (let r = 0; r < s.length; r++) {
    let i = Math.abs(s[r].minutes - t);
    if (i < o) ((o = i), (n = r));
  }
  return n;
}
function T(e) {
  if (!e.enabled || !e.start || !e.end) return 0;
  for (let t = 1; t < u.length; t++) {
    let n = u[t].range;
    if (n.start === e.start && n.end === e.end) return t;
  }
  return 0;
}
var Y = async (e) => (
  e("Wellbeing settings are not available in this build"),
  null
);
export {
  Y as call,
  z as initialIndexFor,
  T as initialQuietIndexFor,
  A as initialThresholdIndexFor,
};

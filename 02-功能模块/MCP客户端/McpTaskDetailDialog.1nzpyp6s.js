// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { rg } from "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
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
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
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
import "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
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
import { HS } from "../../01-核心基础设施/共享小工具-未细化/chunk-nj1exzcd.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import "../键位绑定(Keybindings)/chunk-qy43nqgh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jhstj6d7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fafq09h6.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-my8s4daz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdk55p8n.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import { Wx } from "../../01-核心基础设施/共享小工具-未细化/chunk-c172f2at.js";
import { mr } from "../../01-核心基础设施/共享小工具-未细化/chunk-e6f86vzh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7ejhgecr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tw8akhx1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-951vj555.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1avr3bqa.js";
import { e1e, y7e } from "./chunk-tznd4407.js";
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
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
function Z(so) {
  let s = _(63),
    { task: n, onDone: K, onKill: d, onBack: m } = so,
    c;
  if (s[0] !== m || s[1] !== d || s[2] !== n.status)
    ((c =
      n.status === "running" && d
        ? () => {
            (d(), m());
          }
        : void 0),
      (s[0] = m),
      (s[1] = d),
      (s[2] = n.status),
      (s[3] = c));
  else c = s[3];
  let Q;
  if (s[4] !== m || s[5] !== K || s[6] !== c)
    ((Q = { onClose: K, onBack: m, onKill: c }),
      (s[4] = m),
      (s[5] = K),
      (s[6] = c),
      (s[7] = Q));
  else Q = s[7];
  let S = Wx(Q),
    b = HS(n.startTime, n.status === "running", 1000, 0, n.endTime),
    U;
  if (s[8] !== n.pollIntervalMs)
    ((U = n.pollIntervalMs === void 0 ? void 0 : y7e(n.pollIntervalMs)),
      (s[8] = n.pollIntervalMs),
      (s[9] = U));
  else U = s[9];
  let V = U,
    a = n.mcpTaskId === n.id ? void 0 : n.mcpTaskId,
    W;
  if (s[10] === p)
    ((W = e(D, { chord: "escape", action: "go back" })), (s[10] = W));
  else W = s[10];
  let f;
  if (s[11] !== d || s[12] !== n.status)
    ((f = n.status === "running" && d && e(D, { chord: "x", action: "stop" })),
      (s[11] = d),
      (s[12] = n.status),
      (s[13] = f));
  else f = s[13];
  let g;
  if (s[14] !== f)
    ((g = r(ue, { children: [W, f] })), (s[14] = f), (s[15] = g));
  else g = s[15];
  let C;
  if (s[16] !== n.serverName)
    ((C = rg(n.serverName) ?? ""), (s[16] = n.serverName), (s[17] = C));
  else C = s[17];
  let v;
  if (s[18] !== n.toolName)
    ((v = rg(n.toolName) ?? ""), (s[18] = n.toolName), (s[19] = v));
  else v = s[19];
  let T;
  if (s[20] !== C || s[21] !== v)
    ((T = r(t, { bold: !0, children: [C, "/", v] })),
      (s[20] = C),
      (s[21] = v),
      (s[22] = T));
  else T = s[22];
  let M;
  if (s[23] !== n.id)
    ((M = r(t, { dimColor: !0, children: [" \xB7 ", n.id] })),
      (s[23] = n.id),
      (s[24] = M));
  else M = s[24];
  let y;
  if (s[25] !== M || s[26] !== T)
    ((y = r(t, { children: [T, M] })), (s[25] = M), (s[26] = T), (s[27] = y));
  else y = s[27];
  let I;
  if (s[28] !== a)
    ((I = a && r(t, { dimColor: !0, children: ["server task ", e1e(a)] })),
      (s[28] = a),
      (s[29] = I));
  else I = s[29];
  let X;
  if (s[30] === p)
    ((X = e(t, { dimColor: !0, children: "status " })), (s[30] = X));
  else X = s[30];
  let x;
  if (s[31] !== n.mcpStatus || s[32] !== n.status)
    ((x = n.status === "killed" ? "stopped" : n.mcpStatus.replace("_", " ")),
      (s[31] = n.mcpStatus),
      (s[32] = n.status),
      (s[33] = x));
  else x = s[33];
  let h;
  if (s[34] !== n.statusMessage)
    ((h =
      n.statusMessage &&
      r(t, { dimColor: !0, children: [" ", "\xB7 ", rg(n.statusMessage)] })),
      (s[34] = n.statusMessage),
      (s[35] = h));
  else h = s[35];
  let w;
  if (s[36] !== x || s[37] !== h)
    ((w = r(t, { children: [X, x, h] })),
      (s[36] = x),
      (s[37] = h),
      (s[38] = w));
  else w = s[38];
  let N;
  if (s[39] !== n.mcpStatus || s[40] !== n.status)
    ((N =
      n.mcpStatus === "input_required" &&
      n.status === "running" &&
      e(t, {
        dimColor: !0,
        children: "waiting for your answer in the elicitation dialog",
      })),
      (s[39] = n.mcpStatus),
      (s[40] = n.status),
      (s[41] = N));
  else N = s[41];
  const z = n.status === "running" ? "running for " : "ran for ",
    A = V !== void 0 && ` \xB7 polls every ${V}`;
  let P;
  if (s[42] !== b || s[43] !== z || s[44] !== A)
    ((P = r(t, { dimColor: !0, children: [z, b, A] })),
      (s[42] = b),
      (s[43] = z),
      (s[44] = A),
      (s[45] = P));
  else P = s[45];
  let R;
  if (s[46] !== n.protocol || s[47] !== n.status)
    ((R =
      n.protocol === "sep2663" &&
      n.status === "running" &&
      e(t, {
        dimColor: !0,
        children: "runs on the server; survives exiting this session",
      })),
      (s[46] = n.protocol),
      (s[47] = n.status),
      (s[48] = R));
  else R = s[48];
  let B;
  if (
    s[49] !== y ||
    s[50] !== I ||
    s[51] !== w ||
    s[52] !== N ||
    s[53] !== P ||
    s[54] !== R
  )
    ((B = r(o, { flexDirection: "column", children: [y, I, w, N, P, R] })),
      (s[49] = y),
      (s[50] = I),
      (s[51] = w),
      (s[52] = N),
      (s[53] = P),
      (s[54] = R),
      (s[55] = B));
  else B = s[55];
  let j;
  if (s[56] !== m || s[57] !== B || s[58] !== g)
    ((j = e(de, {
      onCancel: m,
      title: "MCP task",
      inputGuide: g,
      children: B,
    })),
      (s[56] = m),
      (s[57] = B),
      (s[58] = g),
      (s[59] = j));
  else j = s[59];
  let Y;
  if (s[60] !== S || s[61] !== j)
    ((Y = e(mr, { onKeyDown: S, children: j })),
      (s[60] = S),
      (s[61] = j),
      (s[62] = Y));
  else Y = s[62];
  return Y;
}
export { Z as McpTaskDetailDialog };

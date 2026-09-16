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
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { x, kr } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
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
import { ee } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
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
import { Ot, Pn } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
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
import { et } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import { xe } from "../../01-核心基础设施/共享小工具-未细化/chunk-cwpbthvg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0dh9gct8.js";
import { Os } from "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import { GIt, iZt, KIt, lZt, pWe, $He } from "./chunk-dyq13fbm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
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
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "./chunk-cd542wve.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-xc85bfby.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7jfz2w01.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fgegxt0m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j4vveza5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j3qyvdwg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
import { wSt } from "../Teammates团队/chunk-mrfx53ye.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1avr3bqa.js";
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
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
function we(a, s) {
  let i = GIt(a.map((l) => l.data));
  if (i.agents.length === 0 && i.logs.length === 0) return null;
  let u = Boolean(s?.verbose || s?.isTranscriptMode);
  if (u) {
    let l = s?.terminalSize?.columns ?? 80,
      f = Math.min(80, Math.max(40, l - 10));
    return e(xe, { children: e(iZt, { collected: i, verbose: u, width: f }) });
  }
  return e(xe, { children: e(E, { collected: i }) });
}
function E(Me) {
  let L = _(23),
    { collected: m } = Me,
    q;
  if (L[0] !== m.agents) ((q = $He(m.agents)), (L[0] = m.agents), (L[1] = q));
  else q = L[1];
  let { done: P, failedCount: Ce, running: j, total: z, complete: g } = q,
    F = Ce > 0 ? "failed" : g ? "done" : "running",
    w,
    k,
    T,
    R,
    M,
    C,
    h;
  if (
    L[2] !== m ||
    L[3] !== g ||
    L[4] !== P ||
    L[5] !== F ||
    L[6] !== j ||
    L[7] !== z
  ) {
    let A = lZt(m);
    w = KIt;
    k = P;
    T = z;
    R = j;
    M = g;
    C = F;
    h = A ? pWe(A) : void 0;
    ((L[2] = m),
      (L[3] = g),
      (L[4] = P),
      (L[5] = F),
      (L[6] = j),
      (L[7] = z),
      (L[8] = w),
      (L[9] = k),
      (L[10] = T),
      (L[11] = R),
      (L[12] = M),
      (L[13] = C),
      (L[14] = h));
  } else
    ((w = L[8]),
      (k = L[9]),
      (T = L[10]),
      (R = L[11]),
      (M = L[12]),
      (C = L[13]),
      (h = L[14]));
  let G;
  if (
    L[15] !== w ||
    L[16] !== k ||
    L[17] !== T ||
    L[18] !== R ||
    L[19] !== M ||
    L[20] !== C ||
    L[21] !== h
  )
    ((G = e(w, {
      done: k,
      total: T,
      running: R,
      complete: M,
      dotState: C,
      phaseText: h,
    })),
      (L[15] = w),
      (L[16] = k),
      (L[17] = T),
      (L[18] = R),
      (L[19] = M),
      (L[20] = C),
      (L[21] = h),
      (L[22] = G));
  else G = L[22];
  return G;
}
function ke(a) {
  if (a.error)
    return e(xe, {
      children: r(t, {
        color: "error",
        children: [e(et, { status: "error", withSpace: !0 }), kr(a.error)],
      }),
    });
  if (a.status === "remote_launched")
    return e(xe, {
      children: r(o, {
        flexDirection: "column",
        children: [
          r(t, {
            children: [
              e(t, {
                dimColor: !0,
                children: "Running in cloud session \xB7 ",
              }),
              e(t, { color: "suggestion", children: a.sessionUrl }),
            ],
          }),
          a.warning
            ? r(t, {
                color: "warning",
                children: [
                  e(et, { status: "warning", withSpace: !0 }),
                  a.warning,
                ],
              })
            : null,
        ],
      }),
    });
  return e(K, { taskId: a.taskId });
}
function K(he) {
  let c = _(21),
    { taskId: I } = he,
    J;
  if (c[0] !== I) ((J = (ye) => ye.tasks[I]), (c[0] = I), (c[1] = J));
  else J = c[1];
  let n = Os(J);
  if (
    n?.type === "local_workflow" &&
    (n.status === "completed" || n.status === "failed" || n.status === "killed")
  ) {
    let d;
    if (c[2] !== n.endTime || c[3] !== n.startTime)
      ((d = n.endTime && n.startTime ? Ot(n.endTime - n.startTime) : void 0),
        (c[2] = n.endTime),
        (c[3] = n.startTime),
        (c[4] = d));
    else d = c[4];
    let Q = d;
    let X = n.status === "failed";
    let Y = n.status === "killed";
    const B = X || Y ? "error" : "success";
    let y;
    if (c[5] !== B)
      ((y = e(et, { status: B, withSpace: !0 })), (c[5] = B), (c[6] = y));
    else y = c[6];
    const U = X ? "Failed" : Y ? "Stopped" : "Completed";
    const D = Q && ` in ${Q}`;
    let S;
    if (c[7] !== n.agentCount)
      ((S =
        n.agentCount > 0 &&
        ` \xB7 ${n.agentCount} ${x(n.agentCount, "agent")}`),
        (c[7] = n.agentCount),
        (c[8] = S));
    else S = c[8];
    let b;
    if (c[9] !== n.totalTokens)
      ((b = n.totalTokens > 0 && ` \xB7 ${Pn(n.totalTokens)} tokens`),
        (c[9] = n.totalTokens),
        (c[10] = b));
    else b = c[10];
    let O;
    if (c[11] !== U || c[12] !== D || c[13] !== S || c[14] !== b)
      ((O = r(t, { dimColor: !0, children: [U, D, S, b] })),
        (c[11] = U),
        (c[12] = D),
        (c[13] = S),
        (c[14] = b),
        (c[15] = O));
    else O = c[15];
    let Z;
    if (c[16] !== y || c[17] !== O)
      ((Z = e(xe, { children: r(t, { children: [y, O] }) })),
        (c[16] = y),
        (c[17] = O),
        (c[18] = Z));
    else Z = c[18];
    return Z;
  }
  if (n?.type === "local_workflow") {
    let d;
    if (c[19] === p)
      ((d = e(xe, {
        children: r(t, {
          children: [
            e(t, { dimColor: !0, children: "Running in background \xB7 " }),
            e(t, { color: "suggestion", children: "/workflows" }),
            e(t, { dimColor: !0, children: " to monitor and save" }),
            e(W, {}),
          ],
        }),
      })),
        (c[19] = d));
    else d = c[19];
    return d;
  }
  let d;
  if (c[20] === p)
    ((d = e(xe, {
      children: r(t, {
        children: [
          e(t, { color: "suggestion", children: "/workflows" }),
          e(t, { dimColor: !0, children: " to view dynamic workflow runs" }),
        ],
      }),
    })),
      (c[20] = d));
  else d = c[20];
  return d;
}
function W() {
  let H = _(2),
    oe;
  if (H[0] === p) ((oe = wSt(ee().workflowSizeGuideline)), (H[0] = oe));
  else oe = H[0];
  let { size: te, isDefault: Se } = oe;
  if (!Se || te === "unrestricted") {
    return null;
  }
  let re;
  if (H[1] === p)
    ((re = r(N, {
      children: [
        r(t, { dimColor: !0, children: [" \xB7 ", te, " size ("] }),
        e(t, { color: "suggestion", children: "/config" }),
        e(t, { dimColor: !0, children: ")" }),
      ],
    })),
      (H[1] = re));
  else re = H[1];
  return re;
}
function Te() {
  return e(xe, {
    children: e(t, { dimColor: !0, children: "Dynamic workflow cancelled" }),
  });
}
export {
  ke as renderToolResultMessage,
  we as renderToolUseProgressMessage,
  Te as renderToolUseRejectedMessage,
};

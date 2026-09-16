// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { jc } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
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
import "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
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
import { Ott } from "../权限系统/chunk-e4pfvp7x.js";
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
import { o, t, ko } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
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
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import "../键位绑定(Keybindings)/chunk-qy43nqgh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jhstj6d7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-fafq09h6.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-my8s4daz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdk55p8n.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import { et } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0dh9gct8.js";
import { U } from "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import { m$e, cve, nAn, BEt, uve, dve } from "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import { Rn } from "../../01-核心基础设施/共享小工具-未细化/chunk-p07dva25.js";
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
import { d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
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
import { p, en } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function W(ht) {
  return ht.activeGoal;
}
function Y(Ct) {
  return Ct + 1;
}
function L(ut) {
  let s = _(38),
    { messages: T, onDone: m } = ut,
    i = U(W),
    [, ft] = d(0),
    Q;
  if (s[0] === p) ((Q = () => ft(Y)), (s[0] = Q));
  else Q = s[0];
  if ((ko(Q, i ? 1000 : null), i)) {
    const N = Date.now() - i.setAt;
    let h;
    if (s[1] !== N)
      ((h = Ot(N, { mostSignificantOnly: !0 })), (s[1] = N), (s[2] = h));
    else h = s[2];
    let gt = h;
    const G = jc() - i.tokensAtStart;
    let C;
    if (s[3] !== G) ((C = Pn(G)), (s[3] = G), (s[4] = C));
    else C = s[4];
    let yt = C;
    const k = `running ${gt}`;
    let A;
    if (s[5] !== i.iterations)
      ((A = i.iterations > 0 && `${i.iterations} ${x(i.iterations, "turn")}`),
        (s[5] = i.iterations),
        (s[6] = A));
    else A = s[6];
    const X = `${yt} tokens`;
    let q;
    if (s[7] !== k || s[8] !== A || s[9] !== X)
      ((q = [k, A, X].filter(Boolean)),
        (s[7] = k),
        (s[8] = A),
        (s[9] = X),
        (s[10] = q));
    else q = s[10];
    let Gt = q;
    const B = Gt.join(" \xB7 ");
    let z;
    if (s[11] === p)
      ((z = r(ue, {
        children: [
          e(t, { children: "/goal clear to stop early" }),
          e(D, { chord: "escape", action: "dismiss" }),
        ],
      })),
        (s[11] = z));
    else z = s[11];
    let M;
    if (s[12] !== i.condition)
      ((M = e(S, { label: "Goal", children: i.condition })),
        (s[12] = i.condition),
        (s[13] = M));
    else M = s[13];
    let O;
    if (s[14] !== i.lastReason)
      ((O = i.lastReason
        ? e(S, { label: "Last check", children: kr(i.lastReason.trim()) })
        : null),
        (s[14] = i.lastReason),
        (s[15] = O));
    else O = s[15];
    let R;
    if (s[16] !== M || s[17] !== O)
      ((R = r(o, { flexDirection: "column", children: [M, O] })),
        (s[16] = M),
        (s[17] = O),
        (s[18] = R));
    else R = s[18];
    let K;
    if (s[19] !== m || s[20] !== B || s[21] !== R)
      ((K = e(de, {
        title: `${Ott} Goal active`,
        subtitle: B,
        onCancel: m,
        inputGuide: z,
        children: R,
      })),
        (s[19] = m),
        (s[20] = B),
        (s[21] = R),
        (s[22] = K));
    else K = s[22];
    return K;
  }
  let N;
  if (s[23] !== T || s[24] !== m) {
    N = en;
    bb0: {
      let c = nAn(T);
      if (c) {
        let b = [];
        if (c.durationMs !== void 0)
          b.push(Ot(c.durationMs, { mostSignificantOnly: !0 }));
        if (c.iterations !== void 0)
          b.push(`${c.iterations} ${x(c.iterations, "turn")}`);
        if (c.tokens !== void 0) b.push(`${Pn(c.tokens)} tokens`);
        let h;
        if (s[26] === p)
          ((h = r(t, {
            children: [
              e(et, { status: "success", withSpace: !0 }),
              "Goal achieved",
            ],
          })),
            (s[26] = h));
        else h = s[26];
        const G = b.join(" \xB7 ");
        let C;
        if (s[27] === p)
          ((C = r(ue, {
            children: [
              e(t, { children: "/goal <condition> to set another" }),
              e(D, { chord: "escape", action: "dismiss" }),
            ],
          })),
            (s[27] = C));
        else C = s[27];
        let k;
        if (s[28] !== c)
          ((k = e(S, { label: "Goal", children: c.condition })),
            (s[28] = c),
            (s[29] = k));
        else k = s[29];
        let A;
        if (s[30] !== m || s[31] !== G || s[32] !== k)
          ((A = e(de, {
            title: h,
            subtitle: G,
            color: "success",
            onCancel: m,
            inputGuide: C,
            children: k,
          })),
            (s[30] = m),
            (s[31] = G),
            (s[32] = k),
            (s[33] = A));
        else A = s[33];
        N = A;
        break bb0;
      }
    }
    ((s[23] = T), (s[24] = m), (s[25] = N));
  } else N = s[25];
  if (N !== en) return N;
  let h, G;
  if (s[34] === p)
    ((h = e(D, { chord: "escape", action: "dismiss" })),
      (G = e(Rn, {
        hint: "/goal <condition> to set one",
        children: "No goal set",
      })),
      (s[34] = h),
      (s[35] = G));
  else ((h = s[34]), (G = s[35]));
  let C;
  if (s[36] !== m)
    ((C = e(de, { title: "Goal", onCancel: m, inputGuide: h, children: G })),
      (s[36] = m),
      (s[37] = C));
  else C = s[37];
  return C;
}
function S($t) {
  let j = _(7),
    { label: I, children: P } = $t,
    w;
  if (j[0] !== I)
    ((w = e(o, {
      flexShrink: 0,
      children: r(t, { dimColor: !0, children: [I, ": "] }),
    })),
      (j[0] = I),
      (j[1] = w));
  else w = j[1];
  let v;
  if (j[2] !== P)
    ((v = e(o, { flexGrow: 1, children: e(t, { wrap: "wrap", children: P }) })),
      (j[2] = P),
      (j[3] = v));
  else v = j[3];
  let V;
  if (j[4] !== w || j[5] !== v)
    ((V = r(o, { flexDirection: "row", children: [w, v] })),
      (j[4] = w),
      (j[5] = v),
      (j[6] = V));
  else V = j[6];
  return V;
}
var Rt = async (u, f, l) => {
  let y = l.trim();
  if (y === "")
    return e(L, {
      messages: f.messages,
      onDone: () => u(void 0, { display: "skip" }),
    });
  if (cve(y)) {
    let n = dve(f);
    return (
      u(n === null ? "No goal set" : `Goal cleared: ${n}`, {
        display: "system",
      }),
      null
    );
  }
  if (y.length > m$e)
    return (
      g("goal_set", "too_long"),
      u(`Goal condition is limited to ${m$e} characters (got ${y.length})`, {
        display: "system",
      }),
      null
    );
  let a = uve(y, f);
  if (a !== null) return (u(a, { display: "system" }), null);
  return (
    u(`Goal set: ${y}`, { shouldQuery: !0, metaMessages: [BEt(y)] }),
    null
  );
};
export { Rt as call };

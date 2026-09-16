// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../共享小工具-未细化/chunk-h62vxw7j.js";
import { Dt } from "../共享小工具-未细化/chunk-510m1t2d.js";
import { oa, Dat, aee, Ttn } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import "../../02-功能模块/Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import { PPn, a } from "./chunk-zqr5ctyf.js";
import "../../02-功能模块/认证-OAuth登录/chunk-9g2q4bjq.js";
import "../共享小工具-未细化/chunk-w76kejwn.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-z5vtnzjg.js";
import { os, x } from "../核心工具-字符串与文本/chunk-1wezmyx2.js";
import { h } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import "../共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../02-功能模块/状态栏-主题/chunk-jz6b76hr.js";
import { Av, iDt, j0e } from "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import "../../02-功能模块/状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { _e } from "../共享小工具-未细化/chunk-gd42wcxf.js";
import "../../02-功能模块/文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../../02-功能模块/Teammates团队/chunk-qe04h4c5.js";
import "../../02-功能模块/状态栏-主题/chunk-dqyc6kge.js";
import "../安全文件系统(FS加固)/chunk-h64ek850.js";
import "../ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../../02-功能模块/图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../../02-功能模块/状态栏-主题/chunk-q7ekqy5h.js";
import { Ms } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../02-功能模块/运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../共享小工具-未细化/chunk-twnwwsbr.js";
import { i } from "../共享小工具-未细化/chunk-an83zrbx.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "./设置-配置.aqbb35ee.js";
import "../共享小工具-未细化/chunk-rsr7cnyv.js";
import { Gu } from "../核心工具-路径与平台/chunk-fx8qr1md.js";
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
import { ho, Jt } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
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
import { o, t } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../../02-功能模块/认证-OAuth登录/chunk-s51acx6w.js";
import "../../02-功能模块/终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../共享小工具-未细化/chunk-0a6nmdka.js";
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
import "../共享小工具-未细化/chunk-4ctm4frf.js";
import "../共享小工具-未细化/chunk-mb654mj6.js";
import "../核心工具-进程与信号/chunk-w78brv7j.js";
import "../共享小工具-未细化/chunk-7dzh4mjq.js";
import { Ren } from "../../02-功能模块/文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import { mr } from "../共享小工具-未细化/chunk-e6f86vzh.js";
import { a9e } from "../../02-功能模块/通知(Notifications)/通知(Notifications).g4xng0pg.js";
import { Qr } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../共享小工具-未细化/chunk-951vj555.js";
import "../共享小工具-未细化/chunk-7jfz2w01.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../共享小工具-未细化/chunk-fgegxt0m.js";
import "../共享小工具-未细化/chunk-j4vveza5.js";
import "../共享小工具-未细化/chunk-5ktz3kp7.js";
import "../核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../共享小工具-未细化/chunk-j3qyvdwg.js";
import "../共享小工具-未细化/chunk-28p6k62j.js";
import { E, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import "../共享小工具-未细化/chunk-1avr3bqa.js";
import "../共享小工具-未细化/chunk-cyyrj58q.js";
import "../共享小工具-未细化/chunk-jzy6p47z.js";
import "../共享小工具-未细化/chunk-w4swsde7.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../../02-功能模块/Teammates团队/chunk-enjekn9t.js";
import "../共享小工具-未细化/chunk-a7cfts2d.js";
import "../../02-功能模块/Bedrock-Vertex/chunk-p991cddr.js";
import "../共享小工具-未细化/chunk-kkf7jbwd.js";
import "../共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import { tZ } from "../核心工具-路径与平台/chunk-13kdp2ag.js";
import { p } from "../共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function ut() {
  return process.env[y];
}
var me = 1,
  Pe = 0.25,
  M = 0.25,
  N = 10;
function P(n, s) {
  let w = n < 1 ? Math.round(n / M) * M : Math.round(n);
  return oa(w, s, N);
}
var y = "CLAUDE_CODE_SCROLL_SPEED";
function ae(Rt) {
  let m = _(57),
    { onDone: k, showDemoRuler: Fe, editorSensitivity: Je } = Rt,
    H = Fe === void 0 ? !0 : Fe,
    A = Je === void 0 ? null : Je,
    { storageV5: Se } = _e(),
    [K] = d(ut),
    f,
    Ke;
  if (m[0] === p)
    ((f = Av()),
      (Ke = iDt(f.xtermJs, f.wheelFlood, f.wtSession)),
      (m[0] = f),
      (m[1] = Ke));
  else ((f = m[0]), (Ke = m[1]));
  let R = Ke,
    Ce = f.useDecayCurve ? me : Pe,
    Ge;
  if (m[2] === p) ((Ge = () => P(f.base, Ce)), (m[2] = Ge));
  else Ge = m[2];
  let [c, Ie] = d(Ge),
    [Q, Xe] = d(K !== void 0),
    Ne = C(!1),
    Ue = C(!1),
    Y = C(!1),
    Oe = !f.xtermJs && !f.wheelFlood,
    ze,
    He;
  if (m[3] !== H)
    ((ze = () => {
      Dat(!0, { demoRuler: H });
      let jt = Oe
        ? aee(() => {
            let Qe = Ttn();
            if (!Qe) {
              return;
            }
            if (Qe.wheelMode) Ne.current = !0;
            else Ue.current = !0;
          })
        : void 0;
      return () => {
        (jt?.(), Dat(!1));
      };
    }),
      (He = [H, Oe]),
      (m[3] = H),
      (m[4] = ze),
      (m[5] = He));
  else ((ze = m[4]), (He = m[5]));
  E(ze, He);
  let Ye;
  if (m[6] !== c)
    ((Ye = function j(Vt) {
      let Wt = Vt < 0 ? (c <= 1 ? -M : -1) : c < 1 ? M : 1;
      let De = P(c + Wt, Ce);
      if (De === c) {
        return;
      }
      ((process.env[y] = String(De)), j0e(), Xe(!0), Ie(De));
    }),
      (m[6] = c),
      (m[7] = Ye));
  else Ye = m[7];
  let j = Ye,
    Ze;
  if (m[8] === p)
    ((Ze = function be() {
      (delete process.env[y], j0e(), Ie(P(R, Ce)), Xe(!1));
    }),
      (m[8] = Ze));
  else Ze = m[8];
  let be = Ze,
    qe;
  if (m[9] !== K)
    ((qe = function D() {
      if (K === void 0) delete process.env[y];
      else process.env[y] = K;
      j0e();
    }),
      (m[9] = K),
      (m[10] = qe));
  else qe = m[10];
  let D = qe,
    Be;
  if (m[11] !== k || m[12] !== D)
    ((Be = function G() {
      if (Y.current) {
        return;
      }
      ((Y.current = !0), D(), k("Scroll speed unchanged"));
    }),
      (m[11] = k),
      (m[12] = D),
      (m[13] = Be));
  else Be = m[13];
  let G = Be,
    Le;
  if (
    m[14] !== A?.sensitivity ||
    m[15] !== k ||
    m[16] !== Q ||
    m[17] !== D ||
    m[18] !== c ||
    m[19] !== Se
  )
    ((Le = async function I() {
      if (Y.current) {
        return;
      }
      Y.current = !0;
      let Z = !Q;
      let Ft = { [y]: Z ? void 0 : String(c) };
      let { error: $e } = await Jt("userSettings", { env: Ft }, void 0, Se);
      if ($e) {
        (h($e), D(), k(`Couldn't save scroll speed: ${$e.message}`));
        return;
      }
      i("tengu_scroll_speed_set", {
        scroll_speed: Z ? R : c,
        scroll_speed_auto: R,
        reset_to_auto: Z,
        xterm_js: f.xtermJs,
        wheel_flood: f.wheelFlood,
        wt_session: f.wtSession,
        use_decay_curve: f.useDecayCurve,
        saw_scroll_wheel: Ne.current,
        saw_trackpad: Ue.current,
        editor_wheel_sensitivity: A?.sensitivity ?? void 0,
        term_program: a9e(f.termProgram),
        term_program_version: Ms(f.termProgramVersion),
      });
      let et = `\`${Gu(ho("userSettings") ?? "settings.json")}\``;
      k(
        Z
          ? `Scroll speed reset to auto (${R} ${x(R, "line")} per notch) \xB7 removed from ${et}`
          : `Scroll speed set to ${c} ${x(c, "line")} per notch \xB7 saved to ${et}`,
      );
    }),
      (m[14] = A?.sensitivity),
      (m[15] = k),
      (m[16] = Q),
      (m[17] = D),
      (m[18] = c),
      (m[19] = Se),
      (m[20] = Le));
  else Le = m[20];
  let I = Le,
    tt;
  if (m[21] !== j || m[22] !== G || m[23] !== I)
    ((tt = function X(v) {
      if (v.key === "left") (v.preventDefault(), j(-1));
      else if (v.key === "right") (v.preventDefault(), j(1));
      else if (v.key === "return") (v.preventDefault(), I());
      else if (
        v.key === "escape" ||
        (v.ctrl && (v.key === "c" || v.key === "d"))
      )
        (v.preventDefault(), G());
      else if (v.key === "r") (v.preventDefault(), be());
    }),
      (m[21] = j),
      (m[22] = G),
      (m[23] = I),
      (m[24] = tt));
  else tt = m[24];
  let X = tt,
    V = !Q,
    rt,
    ot;
  if (m[25] === p)
    ((rt = e(t, { bold: !0, children: "Scroll speed" })),
      (ot = e(o, { height: 1 })),
      (m[25] = rt),
      (m[26] = ot));
  else ((rt = m[25]), (ot = m[26]));
  let q;
  if (m[27] !== c) ((q = Me(c)), (m[27] = c), (m[28] = q));
  else q = m[28];
  let B;
  if (m[29] !== q)
    ((B = e(t, { color: "permission", children: q })),
      (m[29] = q),
      (m[30] = B));
  else B = m[30];
  let L;
  if (m[31] !== c) ((L = x(c, "line")), (m[31] = c), (m[32] = L));
  else L = m[32];
  let ee;
  if (m[33] !== c || m[34] !== L)
    ((ee = r(t, { children: ["  ", c, " ", L, " per wheel notch"] })),
      (m[33] = c),
      (m[34] = L),
      (m[35] = ee));
  else ee = m[35];
  let te;
  if (m[36] !== V)
    ((te = V && e(t, { dimColor: !0, children: " (auto)" })),
      (m[36] = V),
      (m[37] = te));
  else te = m[37];
  let re;
  if (m[38] !== V)
    ((re = !V && r(t, { dimColor: !0, children: [" \xB7 auto is ", R] })),
      (m[38] = V),
      (m[39] = re));
  else re = m[39];
  let oe;
  if (m[40] !== B || m[41] !== ee || m[42] !== te || m[43] !== re)
    ((oe = r(o, { children: [B, ee, te, re] })),
      (m[40] = B),
      (m[41] = ee),
      (m[42] = te),
      (m[43] = re),
      (m[44] = oe));
  else oe = m[44];
  let nt;
  if (m[45] === p) ((nt = e(o, { height: 1 })), (m[45] = nt));
  else nt = m[45];
  let st;
  if (m[46] === p)
    ((st = e(W, { label: "Terminal", value: xe(f) })), (m[46] = st));
  else st = m[46];
  let ne;
  if (m[47] !== A)
    ((ne = A && e(W, { label: "Editor", value: Ee(A) })),
      (m[47] = A),
      (m[48] = ne));
  else ne = m[48];
  let it, lt;
  if (m[49] === p)
    ((it = e(o, { height: 1 })),
      (lt = e(t, {
        dimColor: !0,
        children:
          "Scroll to feel it \xB7 \u2190/\u2192 adjust \xB7 r reset to auto \xB7 Enter save \xB7 Esc cancel",
      })),
      (m[49] = it),
      (m[50] = lt));
  else ((it = m[49]), (lt = m[50]));
  let se;
  if (m[51] !== oe || m[52] !== ne)
    ((se = e(Qr, {
      color: "permission",
      children: r(o, {
        flexDirection: "column",
        children: [rt, ot, oe, nt, st, ne, it, lt],
      }),
    })),
      (m[51] = oe),
      (m[52] = ne),
      (m[53] = se));
  else se = m[53];
  let mt;
  if (m[54] !== X || m[55] !== se)
    ((mt = e(mr, { onKeyDown: X, children: se })),
      (m[54] = X),
      (m[55] = se),
      (m[56] = mt));
  else mt = m[56];
  return mt;
}
function W(Kt) {
  let Ae = _(7),
    { label: Te, value: ke } = Kt,
    ie;
  if (Ae[0] !== Te)
    ((ie = e(o, { width: 12, children: e(t, { dimColor: !0, children: Te }) })),
      (Ae[0] = Te),
      (Ae[1] = ie));
  else ie = Ae[1];
  let le;
  if (Ae[2] !== ke) ((le = e(t, { children: ke })), (Ae[2] = ke), (Ae[3] = le));
  else le = Ae[3];
  let at;
  if (Ae[4] !== ie || Ae[5] !== le)
    ((at = r(o, { children: [ie, le] })),
      (Ae[4] = ie),
      (Ae[5] = le),
      (Ae[6] = at));
  else at = Ae[6];
  return at;
}
function Me(n) {
  if (n < 1) return "\u25AA" + os("\xB7", N - 1);
  let s = oa(Math.round(n), me, N);
  return "\u25A0".repeat(s) + os("\xB7", N - s);
}
function xe(n) {
  let s = [ct(n), tZ(n.platform)];
  if (n.wheelFlood) s.push("high-rate wheel events");
  else if (n.xtermJs) s.push("xterm.js");
  else if (n.wtSession) s.push("Windows Terminal");
  return s.join(" \xB7 ");
}
function ct(n) {
  if (process.env.CURSOR_TRACE_ID !== void 0) return "Cursor";
  let s = a.VSCODE_GIT_ASKPASS_MAIN ?? "";
  if (s.includes("cursor")) return "Cursor (remote)";
  if (PPn(s)) return "Devin Desktop";
  if (s.includes("antigravity")) return "Antigravity";
  if (n.termProgram === "vscode")
    return `VS Code${n.termProgramVersion !== "unset" ? ` ${n.termProgramVersion}` : ""}`;
  switch (n.termProgram) {
    case "unset":
      return n.wtSession || n.platform === "win32"
        ? "Windows console"
        : "terminal";
    case "iTerm.app":
      return "iTerm2";
    case "Apple_Terminal":
      return "Terminal.app";
    case "ghostty":
      return "Ghostty";
    case "WezTerm":
      return "WezTerm";
    case "WarpTerminal":
      return "Warp";
    default:
      return n.termProgram;
  }
}
function Ee(n) {
  let s = n.editor === "VSCode" ? "VS Code" : n.editor;
  if (n.sensitivity === null)
    return `${s} wheel sensitivity unset \xB7 /terminal-setup sets it to ${n.recommended}`;
  if (n.sensitivity >= n.recommended)
    return `${s} wheel sensitivity ${n.sensitivity}`;
  return `${s} wheel sensitivity ${n.sensitivity} \xB7 /terminal-setup raises it to ${n.recommended}`;
}
var dt = 20,
  zt = async (n, s) => {
    let w = s.messages.length < dt,
      U = await Dt(
        Ren(s.session.host),
        250,
        "VS Code settings read timed out",
      ).catch(() => null);
    return e(ae, { onDone: n, showDemoRuler: w, editorSensitivity: U });
  };
export { zt as call };

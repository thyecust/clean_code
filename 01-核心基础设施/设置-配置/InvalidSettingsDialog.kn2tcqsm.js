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
import "../共享小工具-未细化/chunk-510m1t2d.js";
import "../../02-功能模块/Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "./chunk-zqr5ctyf.js";
import "../../02-功能模块/认证-OAuth登录/chunk-9g2q4bjq.js";
import "../共享小工具-未细化/chunk-w76kejwn.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
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
import { o, t } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
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
import "../../02-功能模块/文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import "../共享小工具-未细化/chunk-0dh9gct8.js";
import "../共享小工具-未细化/chunk-r3y9qj3r.js";
import "../共享小工具-未细化/chunk-axrnefsa.js";
import { ve } from "../../02-功能模块/交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import "../共享小工具-未细化/chunk-vzqtx1mx.js";
import "../共享小工具-未细化/chunk-4ctm4frf.js";
import "../共享小工具-未细化/chunk-mb654mj6.js";
import "../共享小工具-未细化/chunk-dsg6bce8.js";
import "../../02-功能模块/键位绑定(Keybindings)/chunk-qy43nqgh.js";
import "../共享小工具-未细化/chunk-eebsvd7r.js";
import "../核心工具-路径与平台/chunk-2f8axr19.js";
import "../../02-功能模块/键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../共享小工具-未细化/chunk-sdk55p8n.js";
import "../../02-功能模块/键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import "../共享小工具-未细化/chunk-ff1hq6qq.js";
import "../共享小工具-未细化/chunk-ejtvp07p.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-fgcep5na.js";
import "../核心工具-进程与信号/chunk-w78brv7j.js";
import "../共享小工具-未细化/chunk-7dzh4mjq.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-dhg42t8r.js";
import "../共享小工具-未细化/chunk-jhstj6d7.js";
import "../共享小工具-未细化/chunk-fafq09h6.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../共享小工具-未细化/chunk-my8s4daz.js";
import { fl } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-jjqazdgg.js";
import { Gp } from "../共享小工具-未细化/chunk-c8g7bday.js";
import "../共享小工具-未细化/chunk-37xdmryq.js";
import "../共享小工具-未细化/chunk-7ejhgecr.js";
import "../共享小工具-未细化/chunk-tw8akhx1.js";
import "../共享小工具-未细化/chunk-951vj555.js";
import "../共享小工具-未细化/chunk-xc85bfby.js";
import "../共享小工具-未细化/chunk-7jfz2w01.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../共享小工具-未细化/chunk-fgegxt0m.js";
import "../共享小工具-未细化/chunk-j4vveza5.js";
import "../共享小工具-未细化/chunk-5ktz3kp7.js";
import "../核心工具-路径与平台/chunk-p6wxwtjk.js";
import "../共享小工具-未细化/chunk-j3qyvdwg.js";
import "../共享小工具-未细化/chunk-28p6k62j.js";
import "../共享小工具-未细化/chunk-1avr3bqa.js";
import "../../02-功能模块/图片-截图-ComputerUse/chunk-0dcnsftb.js";
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
import "../核心工具-路径与平台/chunk-13kdp2ag.js";
function X(E, Q) {
  let j = Q.file || "(file not specified)";
  if (!E[j]) E[j] = [];
  return (E[j].push(Q), E);
}
function Y(B, P) {
  if (!B.path && P.path) {
    return -1;
  }
  if (B.path && !P.path) {
    return 1;
  }
  return (B.path || "").localeCompare(P.path || "");
}
function Z(z, ct) {
  let U = A(z);
  return e(
    fl.Node,
    {
      children: U
        ? r(t, {
            children: [U, ": ", e(t, { dimColor: !0, children: z.message })],
          })
        : e(t, { dimColor: !0, children: z.message }),
    },
    ct,
  );
}
function tt(w, mt) {
  return r(
    o,
    {
      flexDirection: "column",
      marginBottom: 1,
      children: [
        w.suggestion &&
          e(t, { dimColor: !0, wrap: "wrap", children: w.suggestion }),
        w.docLink && e(Gp, { url: w.docLink }),
      ],
    },
    `suggestion-pair-${mt}`,
  );
}
function h(ft) {
  let G = _(8),
    { errors: x } = ft;
  if (x.length === 0) {
    return null;
  }
  let y, k, V;
  if (G[0] !== x) {
    let H = x.reduce(X, {});
    let gt = Object.keys(H).sort();
    y = o;
    k = "column";
    V = gt.map((T) => {
      let S = H[T] || [];
      S.sort(Y);
      let C = new Map();
      return (
        S.forEach((g) => {
          if (g.suggestion || g.docLink) {
            let J = `${g.suggestion || ""}|${g.docLink || ""}`;
            if (!C.has(J))
              C.set(J, { suggestion: g.suggestion, docLink: g.docLink });
          }
        }),
        r(
          o,
          {
            flexDirection: "column",
            children: [
              e(t, { children: T }),
              e(fl, { variant: "tree", children: S.map(Z) }),
              C.size > 0 &&
                e(o, {
                  flexDirection: "column",
                  marginTop: 1,
                  children: Array.from(C.values()).map(tt),
                }),
            ],
          },
          T,
        )
      );
    });
    ((G[0] = x), (G[1] = y), (G[2] = k), (G[3] = V));
  } else ((y = G[1]), (k = G[2]), (V = G[3]));
  let K;
  if (G[4] !== y || G[5] !== k || G[6] !== V)
    ((K = e(y, { flexDirection: k, children: V })),
      (G[4] = y),
      (G[5] = k),
      (G[6] = V),
      (G[7] = K));
  else K = G[7];
  return K;
}
function A(s) {
  if (!s.path) return null;
  let u = s.path.split("."),
    p = u[u.length - 1];
  if (
    s.invalidValue !== null &&
    s.invalidValue !== void 0 &&
    p !== void 0 &&
    !isNaN(parseInt(p, 10))
  ) {
    let a =
      typeof s.invalidValue === "string"
        ? `"${s.invalidValue}"`
        : String(s.invalidValue);
    return [...u.slice(0, -1), a].join(".");
  }
  return s.path;
}
function lt(wt) {
  return wt.severity !== "warning";
}
function at(Et) {
  let f = _(21),
    { settingsErrors: c, onContinue: F, onFix: I, onExit: L } = Et,
    it;
  if (f[0] !== F || f[1] !== L || f[2] !== I)
    ((it = function v(et) {
      if (et === "exit") L();
      else if (et === "fix") I();
      else F();
    }),
      (f[0] = F),
      (f[1] = L),
      (f[2] = I),
      (f[3] = it));
  else it = f[3];
  let v = it,
    nt;
  if (f[4] !== c) ((nt = c.some(lt)), (f[4] = c), (f[5] = nt));
  else nt = f[5];
  let m = nt,
    ot;
  if (f[6] !== m)
    ((ot = m
      ? [
          { label: "Fix with Claude", value: "fix" },
          { label: "Exit and fix manually", value: "exit" },
          { label: "Continue without these settings", value: "continue" },
        ]
      : [
          { label: "Continue", value: "continue" },
          { label: "Fix with Claude", value: "fix" },
          { label: "Exit and fix manually", value: "exit" },
        ]),
      (f[6] = m),
      (f[7] = ot));
  else ot = f[7];
  let M = ot;
  const O = m ? "Settings Error" : "Settings Warning",
    W = m ? L : F;
  let R;
  if (f[8] !== c) ((R = e(h, { errors: c })), (f[8] = c), (f[9] = R));
  else R = f[9];
  const q = m
    ? "Files with errors are skipped entirely, not just the invalid settings."
    : "The values listed above were skipped; the rest of the file is in effect.";
  let b;
  if (f[10] !== q)
    ((b = e(t, { dimColor: !0, children: q })), (f[10] = q), (f[11] = b));
  else b = f[11];
  let N;
  if (f[12] !== v || f[13] !== M)
    ((N = e(ve, { options: M, onChange: v })),
      (f[12] = v),
      (f[13] = M),
      (f[14] = N));
  else N = f[14];
  let st;
  if (f[15] !== O || f[16] !== W || f[17] !== R || f[18] !== b || f[19] !== N)
    ((st = r(de, {
      title: O,
      onCancel: W,
      color: "warning",
      children: [R, b, N],
    })),
      (f[15] = O),
      (f[16] = W),
      (f[17] = R),
      (f[18] = b),
      (f[19] = N),
      (f[20] = st));
  else st = f[20];
  return st;
}
export { at as InvalidSettingsDialog };

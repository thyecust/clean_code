// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 286 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { Lwe } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0k3bh4m8.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import "../认证-OAuth登录/chunk-9g86t9bp.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-r2ab1bp6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1phhhgcj.js";
import "../向导(Wizard)UI/向导(Wizard)UI.7xe5wk62.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-2x6t9gq6.js";
import "../Bedrock-Vertex/chunk-g6sqdw6w.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-979tv7jj.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-9jeb00w7.js";
import "../Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwpbthvg.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-8spdkj0k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import "../认证-OAuth登录/chunk-xvt7fc9t.js";
import "../Bedrock-Vertex/chunk-yvs1a1sd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-hxt46tkz.js";
import "../../01-核心基础设施/设置-配置/chunk-tswdb9jt.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-85wxphev.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-csjxh2sy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kp7erqvh.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-nvzk8dj1.js";
import "../Bridge-RemoteControl/chunk-3b6ct3yp.js";
import { lye } from "../../01-核心基础设施/共享小工具-未细化/chunk-g2gg68zp.js";
import { Qae } from "../../01-核心基础设施/共享小工具-未细化/chunk-734z18w7.js";
import "../权限系统/chunk-n5mgv42x.js";
import "../认证-OAuth登录/chunk-dtt2nn79.js";
import "../通知(Notifications)/通知(Notifications).g4xng0pg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1371sqbk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qhcr4b0p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-bg4saywz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dz9yaz9k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-g3h141c1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wst7w7tj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../Bridge-RemoteControl/chunk-2c3z3wjk.js";
import "../成本-Token统计/chunk-f1ehes3v.js";
import "../认证-OAuth登录/chunk-5bg9xwqx.js";
import { d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function x(M) {
  let n = _(15),
    { onDone: a, context: s } = M,
    [h, L] = d(null);
  if (h) {
    return h;
  }
  let R;
  if (n[0] === p)
    ((R = [
      ...(Lwe() ? [] : [{ label: "Upgrade to Max", value: "upgrade" }]),
      {
        label: "Add funds to continue with usage credits",
        value: "extra-usage",
      },
    ]),
      (n[0] = R));
  else R = n[0];
  let U = R,
    D;
  if (n[1] === p)
    ((D = e(o, {
      paddingX: 2,
      children: e(t, {
        color: "error",
        children: "Your Claude Code trial has ended.",
      }),
    })),
      (n[1] = D));
  else D = n[1];
  let f;
  if (n[2] !== a) ((f = () => a()), (n[2] = a), (n[3] = f));
  else f = n[3];
  let u;
  if (n[4] !== a) ((u = () => a()), (n[4] = a), (n[5] = u));
  else u = n[5];
  let C;
  if (n[6] !== s || n[7] !== a)
    ((C = (O) => {
      if (
        (i("tengu_pro_trial_expired_choice", {
          chose_upgrade: O === "upgrade",
        }),
        O === "upgrade")
      )
        Qae(a, s, "pro_trial_expired_dialog").then((W) => L(W));
      else lye(a, s).then((Y) => L(Y));
    }),
      (n[6] = s),
      (n[7] = a),
      (n[8] = C));
  else C = n[8];
  let g;
  if (n[9] !== u || n[10] !== C)
    ((g = e(ve, { options: U, onCancel: u, onChange: C })),
      (n[9] = u),
      (n[10] = C),
      (n[11] = g));
  else g = n[11];
  let P;
  if (n[12] !== f || n[13] !== g)
    ((P = r(o, {
      flexDirection: "column",
      children: [
        D,
        e(de, { title: "What do you want to do?", onCancel: f, children: g }),
      ],
    })),
      (n[12] = f),
      (n[13] = g),
      (n[14] = P));
  else P = n[14];
  return P;
}
async function H(m, c) {
  return e(x, { onDone: m, context: c });
}
export { H as call };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 257 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ie } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t, Un } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { xe } from "../../01-核心基础设施/共享小工具-未细化/chunk-cwpbthvg.js";
import { getToolPermissionContext } from "../权限系统/chunk-fjrcf22x.js";
import { YX, JX } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Hye } from "../权限系统/chunk-sx24y271.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-e6f86vzh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-p07dva25.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qhcr4b0p.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { qlt, L3e } from "../../01-核心基础设施/设置-配置/chunk-m0ds6tjw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sr0ezxnp.js";
import { L } from "../Teammates团队/chunk-mrfx53ye.js";
function D(X) {
  let C = _(7),
    { message: g, args: u, onDone: v } = X;
  Un(v, 0);
  let l;
  if (C[0] !== u)
    ((l = r(t, { dimColor: !0, children: [L.pointer, " /add-dir ", u] })),
      (C[0] = u),
      (C[1] = l));
  else l = C[1];
  let p;
  if (C[2] !== g)
    ((p = e(xe, { children: e(t, { children: g }) })), (C[2] = g), (C[3] = p));
  else p = C[3];
  let k;
  if (C[4] !== l || C[5] !== p)
    ((k = r(o, { flexDirection: "column", children: [l, p] })),
      (C[4] = l),
      (C[5] = p),
      (C[6] = k));
  else k = C[6];
  return k;
}
async function T(s, a, m) {
  let y = (m ?? "").trim(),
    d = getToolPermissionContext(a),
    f = async (n, c = !1) => {
      let A = await qlt(a, n, c);
      s(`${A} ${ie.dim("\xB7 /permissions to manage")}`);
    };
  if (!y)
    return e(Hye, {
      permissionContext: d,
      onAddDirectory: f,
      onAlreadyAccessible: (n) => {
        let c = L3e(a, n);
        if (c === null) return !1;
        return (s(c), !0);
      },
      onCancel: () => {
        s("Did not add a working directory.");
      },
    });
  let i = await YX(y, d);
  if (i.resultType !== "success") {
    let n =
      (i.resultType === "alreadyInWorkingDirectory" ? L3e(a, i) : null) ??
      JX(i);
    return e(D, { message: n, args: m ?? "", onDone: () => s(n) });
  }
  return e(Hye, {
    directoryPath: i.absolutePath,
    permissionContext: d,
    onAddDirectory: f,
    onCancel: () => {
      s(`Did not add ${ie.bold(i.absolutePath)} as a working directory.`);
    },
  });
}
export { T as call };

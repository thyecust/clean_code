// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 236 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { oe } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { Lr } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Ao } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { _i, jd, Oo } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-context.js";
import { Yd } from "../../03-入口与运行时/会话UI(REPL)/chunk-sn6am10p.js";
import { ToolResultRow } from "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import { Pg } from "../../03-入口与运行时/会话UI(REPL)/chunk-vpp75aza.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../../01-核心基础设施/共享小工具-未细化/syntax-highlight-adapter.js";
import { Ch } from "../语法高亮-Markdown渲染/chunk-mnn6q099.js";
import "../语法高亮-Markdown渲染/chunk-hqp2e8nr.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
function M(q) {
  let a = _(23),
    {
      notebook_path: n,
      cell_id: g,
      new_source: b,
      cell_type: k,
      edit_mode: w,
      verbose: B,
    } = q,
    u = w === void 0 ? "replace" : w,
    U = u === "delete" ? "delete" : `${u} cell in`,
    F;
  if (a[0] !== n || a[1] !== B)
    ((F = B ? n : Ao(n)), (a[0] = n), (a[1] = B), (a[2] = F));
  else F = a[2];
  let j = F,
    R;
  if (a[3] !== U)
    ((R = r(t, { color: "subtle", children: ["User rejected ", U, " "] })),
      (a[3] = U),
      (a[4] = R));
  else R = a[4];
  let T;
  if (a[5] !== j || a[6] !== n)
    ((T = e(t, {
      bold: !0,
      color: "subtle",
      children: e(Pg, { filePath: n, children: j }),
    })),
      (a[5] = j),
      (a[6] = n),
      (a[7] = T));
  else T = a[7];
  let y;
  if (a[8] !== g) ((y = g ? jd(Oo(_i(g))) : ""), (a[8] = g), (a[9] = y));
  else y = a[9];
  let P;
  if (a[10] !== y)
    ((P = r(t, { color: "subtle", children: [" at cell ", y] })),
      (a[10] = y),
      (a[11] = P));
  else P = a[11];
  let h;
  if (a[12] !== R || a[13] !== T || a[14] !== P)
    ((h = r(o, { flexDirection: "row", children: [R, T, P] })),
      (a[12] = R),
      (a[13] = T),
      (a[14] = P),
      (a[15] = h));
  else h = a[15];
  let x;
  if (a[16] !== k || a[17] !== u || a[18] !== b)
    ((x =
      u !== "delete" &&
      e(o, {
        marginTop: 1,
        flexDirection: "column",
        children: e(Ch, {
          code: _i(b),
          filePath: k === "markdown" ? "file.md" : "file.py",
          dim: !0,
        }),
      })),
      (a[16] = k),
      (a[17] = u),
      (a[18] = b),
      (a[19] = x));
  else x = a[19];
  let L;
  if (a[20] !== h || a[21] !== x)
    ((L = e(ToolResultRow, {
      children: r(o, { flexDirection: "column", children: [h, x] }),
    })),
      (a[20] = h),
      (a[21] = x),
      (a[22] = L));
  else L = a[22];
  return L;
}
function renderToolUseMessage(
  { notebook_path: s, cell_id: i, new_source: l, cell_type: c, edit_mode: m },
  { verbose: p },
) {
  if (!s || !l || !c) return null;
  let f = p ? s : Ao(s),
    d = jd(Oo(_i(`${i}`)));
  if (p) {
    let v = Oo(_i(oe(l, 30)));
    return r(N, {
      children: [
        e(Pg, { filePath: s, children: f }),
        `@${d}, content: ${v}\u2026, cell_type: ${c}, edit_mode: ${m ?? "replace"}`,
      ],
    });
  }
  return r(N, { children: [e(Pg, { filePath: s, children: f }), `@${d}`] });
}
function renderToolUseRejectedMessage(s, { verbose: i }) {
  return e(M, {
    notebook_path: s.notebook_path,
    cell_id: s.cell_id,
    new_source: s.new_source,
    cell_type: s.cell_type,
    edit_mode: s.edit_mode,
    verbose: i,
  });
}
function renderToolUseErrorMessage(s, { verbose: i }) {
  if (!i && typeof s === "string" && Lr(s, "tool_use_error"))
    return e(ToolResultRow, {
      children: e(t, { color: "error", children: "Error editing notebook" }),
    });
  return e(Yd, { result: s, verbose: i });
}
function renderToolResultMessage({ cell_id: s, new_source: i, error: l }) {
  if (l) return e(ToolResultRow, { children: e(t, { color: "error", children: _i(l) }) });
  return e(ToolResultRow, {
    children: r(o, {
      flexDirection: "column",
      children: [
        r(t, {
          children: [
            "Updated cell",
            " ",
            e(t, { bold: !0, children: s ? jd(Oo(_i(s))) : "" }),
            ":",
          ],
        }),
        e(o, {
          marginLeft: 2,
          children: e(Ch, { code: _i(i), filePath: "notebook.py" }),
        }),
      ],
    }),
  });
}
export {
  renderToolResultMessage,
  renderToolUseErrorMessage,
  renderToolUseMessage,
  renderToolUseRejectedMessage,
};

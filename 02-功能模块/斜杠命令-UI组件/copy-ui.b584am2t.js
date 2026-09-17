// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 243 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { _u } from "../Artifact发布-渲染/chunk-01ymf0ar.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { os, kr, ln } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { _e } from "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import { Te, ee } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { wb } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { te } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { USt, z_ } from "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { bl } from "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { rre, xr } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Td } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { mr } from "../../01-核心基础设施/共享小工具-未细化/chunk-e6f86vzh.js";
import { ci } from "../../01-核心基础设施/共享小工具-未细化/chunk-bg4saywz.js";
import { Qr } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { C, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
import { mkdir } from "fs/promises";
F();
import { join as we } from "path";
function Re(q, it) {
  let he =
    ln(
      q.code,
      `
`,
    ) + 1;
  return {
    label: H(q.code, 60),
    value: it,
    description:
      [q.lang, he > 1 ? `${he} lines` : void 0].filter(Boolean).join(", ") ||
      void 0,
  };
}
function Ae(at) {
  return { ...at, copyFullResponse: !0 };
}
var X = "response.md",
  be = 20;
function Ce(n) {
  let o = _u.lexer(rre(n)),
    a = [];
  for (let s of o)
    if (s.type === "code") {
      let c = s;
      a.push({ code: c.text, lang: c.lang });
    }
  return a;
}
function Q(n) {
  return n.tokens.map((o) => o.raw).join("");
}
function tableTokenToMarkdown(n) {
  let o = [n.header.map(Q), ...n.rows.map((m) => m.map(Q))].map((m) =>
      m.map((g) => g.replace(/\|/g, "\\|").replace(/[\r\n]/g, " ")),
    ),
    a = o[0].map((m, g) => Math.max(3, ...o.map((T) => te(T[g] ?? "")))),
    s = (m) =>
      `| ${m.map((g, T) => g + " ".repeat(Math.max(0, a[T] - te(g)))).join(" | ")} |`,
    c = (m, g) => {
      switch (g) {
        case "center":
          return `:${os("-", m - 2)}:`;
        case "right":
          return `${os("-", m - 1)}:`;
        case "left":
          return `:${os("-", m - 1)}`;
        default:
          return "-".repeat(m);
      }
    },
    l = `| ${a.map((m, g) => c(m, n.align[g] ?? null)).join(" | ")} |`,
    [f, ...d] = o;
  return [s(f), l, ...d.map(s)].join(`
`);
}
function normalizeTablesInMarkdown(n) {
  let o = _u.lexer(n),
    a = n,
    s = 0,
    c = 0;
  for (let l of o) {
    let f = n.indexOf(l.raw, s);
    if (f === -1) continue;
    if (((s = f + l.raw.length), l.type !== "table")) continue;
    let d = l.raw.match(/\n*$/)?.[0] ?? "",
      m = tableTokenToMarkdown(l) + d;
    ((a = a.slice(0, f + c) + m + a.slice(f + l.raw.length + c)),
      (c += m.length - l.raw.length));
  }
  return a;
}
function collectRecentAssistantTexts(n) {
  let o = [];
  for (let a = n.length - 1; a >= 0 && o.length < be; a--) {
    let s = n[a];
    if (s?.type !== "assistant" || s.isApiErrorMessage) continue;
    let c = s.message.content;
    if (!Array.isArray(c)) continue;
    let l = xr(
      c,
      `

`,
    );
    if (l) o.push(l);
  }
  return o;
}
function fileExtension(n) {
  if (n) {
    let o = n.replace(/[^a-zA-Z0-9]/g, "");
    if (o && o !== "plaintext") return `.${o}`;
  }
  return ".txt";
}
async function z(n, o) {
  let a = bl(),
    s = we(a, o);
  return (
    await mkdir(a, { recursive: !0, mode: 448 }),
    await wb(s, n, { encoding: "utf-8" }),
    s
  );
}
async function v(n, o) {
  let a = await z_(n);
  if (a) process.stdout.write(a);
  let s =
      ln(
        n,
        `
`,
      ) + 1,
    l = `Copied to clipboard (${n.length} characters, ${s} lines)`,
    f = USt(n);
  try {
    let d = await z(n, o),
      m = f
        ? `
\u26A0 ${f}; the file below is unaffected`
        : "";
    return `${l}${m}
Also written to ${d}`;
  } catch {
    let d = f
      ? `
\u26A0 ${f}`
      : "";
    return `${l}${d}`;
  }
}
function H(n, o) {
  let a = kr(n);
  if (te(a) <= o) return a;
  let s = "",
    c = 0,
    l = o - 1;
  for (let f of a) {
    let d = te(f);
    if (c + d > l) break;
    ((s += f), (c += d));
  }
  return s + "\u2026";
}
function ne(He) {
  let h = _(36),
    { fullText: R, codeBlocks: k, messageAge: P, onDone: b } = He,
    se = C("full"),
    { storageV5: U } = _e();
  const E = `${R.length} chars, ${
    ln(
      R,
      `
`,
    ) + 1
  } lines`;
  let B;
  if (h[0] !== E)
    ((B = { label: "Full response", value: "full", description: E }),
      (h[0] = E),
      (h[1] = B));
  else B = h[1];
  let ie;
  if (h[2] !== k || h[3] !== B) {
    let A;
    if (h[5] === p)
      ((A = {
        label: "Always copy full response",
        value: "always",
        description: "Skip this picker in the future (revert via /config)",
      }),
        (h[5] = A));
    else A = h[5];
    ie = [B, ...k.map(Re), A];
    ((h[2] = k), (h[3] = B), (h[4] = ie));
  } else ie = h[4];
  let G = ie,
    A;
  if (h[6] !== k || h[7] !== R)
    ((A = function x(W) {
      if (W === "full" || W === "always") {
        return { text: R, filename: X };
      }
      let ae = k[W];
      return { text: ae.code, filename: `copy${fileExtension(ae.lang)}`, blockIndex: W };
    }),
      (h[6] = k),
      (h[7] = R),
      (h[8] = A));
  else A = h[8];
  let x = A,
    ce;
  if (
    h[9] !== k.length ||
    h[10] !== x ||
    h[11] !== P ||
    h[12] !== b ||
    h[13] !== U
  )
    ((ce = async function S(le) {
      let M = x(le);
      if (le === "always") {
        if (!ee().copyFullResponse) await Te(Ae, U);
        i("tengu_copy", { block_count: k.length, always: !0, message_age: P });
        let et = await v(M.text, M.filename);
        b(`${et}
Preference saved. Use /config to change copyFullResponse`);
        return;
      }
      i("tengu_copy", {
        selected_block: M.blockIndex,
        block_count: k.length,
        message_age: P,
      });
      let tt = await v(M.text, M.filename);
      b(tt);
    }),
      (h[9] = k.length),
      (h[10] = x),
      (h[11] = P),
      (h[12] = b),
      (h[13] = U),
      (h[14] = ce));
  else ce = h[14];
  let S = ce,
    pe;
  if (h[15] !== k.length || h[16] !== x || h[17] !== P || h[18] !== b) {
    let Z = async function Z(nt) {
      let J = x(nt);
      i("tengu_copy", {
        selected_block: J.blockIndex,
        block_count: k.length,
        message_age: P,
        write_shortcut: !0,
      });
      try {
        let ot = await z(J.text, J.filename);
        b(`Written to ${ot}`);
      } catch (I) {
        let V = I;
        b(`Failed to write file: ${V instanceof Error ? V.message : V}`);
      }
    };
    pe = function j(L) {
      if (L.key === "w" && !L.ctrl && !L.meta)
        (L.preventDefault(), Z(se.current));
    };
    ((h[15] = k.length), (h[16] = x), (h[17] = P), (h[18] = b), (h[19] = pe));
  } else pe = h[19];
  let j = pe,
    I;
  if (h[20] === p)
    ((I = e(t, { dimColor: !0, children: "Select content to copy:" })),
      (h[20] = I));
  else I = h[20];
  let me;
  if (h[21] === p)
    ((me = (rt) => {
      se.current = rt;
    }),
      (h[21] = me));
  else me = h[21];
  let N;
  if (h[22] !== S)
    ((N = (st) => {
      S(st);
    }),
      (h[22] = S),
      (h[23] = N));
  else N = h[23];
  let O;
  if (h[24] !== b)
    ((O = () => {
      b("Copy cancelled", { display: "system" });
    }),
      (h[24] = b),
      (h[25] = O));
  else O = h[25];
  let K;
  if (h[26] !== G || h[27] !== O || h[28] !== N)
    ((K = e(ve, {
      options: G,
      hideIndexes: !1,
      onFocus: me,
      onChange: N,
      onCancel: O,
    })),
      (h[26] = G),
      (h[27] = O),
      (h[28] = N),
      (h[29] = K));
  else K = h[29];
  let fe, ge;
  if (h[30] === p)
    ((fe = e(D, {
      chord: "enter",
      action: "copy",
      format: { keyCase: "lower" },
    })),
      (ge = e(D, { chord: "w", action: "write to file" })),
      (h[30] = fe),
      (h[31] = ge));
  else ((fe = h[30]), (ge = h[31]));
  let de;
  if (h[32] === p)
    ((de = e(ci, {
      children: r(ue, {
        children: [
          fe,
          ge,
          e(D, {
            chord: "escape",
            action: "cancel",
            format: { keyCase: "lower" },
          }),
        ],
      }),
    })),
      (h[32] = de));
  else de = h[32];
  let ye;
  if (h[33] !== j || h[34] !== K)
    ((ye = e(Qr, {
      children: r(mr, { gap: 1, onKeyDown: j, children: [I, K, de] }),
    })),
      (h[33] = j),
      (h[34] = K),
      (h[35] = ye));
  else ye = h[35];
  return ye;
}
var Qe = async (n, o, a) => {
  let s = collectRecentAssistantTexts(o.messages);
  if (s.length === 0) return (n("No assistant message to copy"), null);
  let c = 0,
    l = a?.trim();
  if (l) {
    let g = Number(l);
    if (!Number.isInteger(g) || g < 1)
      return (
        n(`Usage: /copy [N] where N is 1 (latest), 2, 3, \u2026 Got: ${l}`),
        null
      );
    if (g > s.length)
      return (
        n(
          `Only ${s.length} assistant ${s.length === 1 ? "message" : "messages"} available to copy`,
        ),
        null
      );
    c = g - 1;
  }
  let f = normalizeTablesInMarkdown(Td(s[c])),
    d = Ce(f),
    m = ee();
  if (d.length === 0 || m.copyFullResponse) {
    i("tengu_copy", {
      always: m.copyFullResponse,
      block_count: d.length,
      message_age: c,
    });
    let g = await v(f, X);
    return (n(g), null);
  }
  return e(ne, { fullText: f, codeBlocks: d, messageAge: c, onDone: n });
};
export {
  Qe as call,
  collectRecentAssistantTexts,
  fileExtension,
  normalizeTablesInMarkdown,
  tableTokenToMarkdown,
};

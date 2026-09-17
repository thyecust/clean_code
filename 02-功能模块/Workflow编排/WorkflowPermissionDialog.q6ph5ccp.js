// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 248 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { he } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { truncateToCodeUnits } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { Hn } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { truncate } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import { an } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/syntax-highlight-adapter.js";
import { CodeBlock } from "../语法高亮-Markdown渲染/code-block.js";
import "../语法高亮-Markdown渲染/chunk-hqp2e8nr.js";
import { ps, _i, Rm, aA, Us, OD, km, Jk, Oo } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { Fs, Hg, qw, Ig, XW, Wst } from "../权限系统/chunk-0hcqee2w.js";
import { WORKFLOW_TOOL_NAME } from "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import { parseWorkflowScript } from "./workflow-script.js";
import { editTextInExternalEditor } from "../../03-入口与运行时/会话UI(REPL)/external-editor.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-use-message-renderers.js";
import "../../01-核心基础设施/共享小工具-未细化/use-answer-refusal-state.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-context.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-content.js";
import "../../01-核心基础设施/共享小工具-未细化/use-hyperlink-support.js";
import { PermissionDialogFrame } from "../权限系统/permission-dialog.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/slack-send-tool.js";
import { Nl, V, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
F();
var Ve = 100,
  U = 5000;
function fn(n, y) {
  let s = y;
  while (s < n.length && /\s/.test(n[s])) s++;
  let l = n[s];
  if (l !== '"' && l !== "'" && l !== "`") {
    let c = Math.min(n.length, s + U),
      k = 0,
      P = s;
    while (P < c) {
      let b = n[P];
      if (b === "(" || b === "[" || b === "{") k++;
      else if (b === ")" || b === "]" || b === "}") {
        if (k === 0) break;
        k--;
      } else if (b === "," && k === 0) break;
      else if (b === '"' || b === "'" || b === "`") {
        P++;
        while (P < c && n[P] !== b) {
          if (n[P] === "\\") P++;
          P++;
        }
      }
      P++;
    }
    return truncate(n.slice(s, P).trim(), Ve);
  }
  s++;
  let a = [];
  while (s < n.length) {
    let c = n[s];
    if (c === "\\") {
      (a.push(n[s + 1] ?? ""), (s += 2));
      continue;
    }
    if (c === l) break;
    if (l === "`" && c === "$" && n[s + 1] === "{") {
      a.push("${\u2026}");
      let k = 1;
      s += 2;
      while (s < n.length && k > 0) {
        if (n[s] === "{") k++;
        if (n[s] === "}") k--;
        s++;
      }
      continue;
    }
    (a.push(c), s++);
  }
  let f = a.join("").replace(/\s+/g, " ").trim();
  return truncate(f, Ve);
}
function Be(n, y, s) {
  if (n[y] !== "(") return;
  let l = Math.min(n.length, y + U),
    a = 0,
    f = y;
  while (f < l) {
    let c = n[f];
    if (c === "(") a++;
    else if (c === ")") {
      if ((a--, a === 0)) return n.slice(y + 1, f);
    } else if (s && c === ";" && a === 1) return n.slice(y + 1, f);
    f++;
  }
  return;
}
function dn(n, y, s) {
  let l = 0,
    a = y;
  while (a < s) {
    let f = n[a];
    if (f === "(" || f === "[" || f === "{") l++;
    else if (f === ")" || f === "]" || f === "}") {
      if (l === 0) return a;
      l--;
    } else if (l === 0 && f === ";") return a + 1;
    else if (
      l === 0 &&
      f ===
        `
`
    ) {
      let c = a + 1;
      while (c < s && /\s/.test(n[c] ?? "")) c++;
      if (n[c] !== "{") return a + 1;
    }
    a++;
  }
  return -1;
}
function G(n) {
  return n != null && /[A-Za-z0-9_]/.test(n);
}
function de(n) {
  try {
    let y = [],
      s = 0,
      l = 0,
      a = !1,
      f,
      c = -1,
      k = [],
      P = [],
      b = n.length,
      i = 0;
    while (i < b) {
      if (c >= 0 && i >= c) ((a = !1), (f = void 0), (c = -1));
      let h = n[i];
      if (h === "/" && n[i + 1] === "/")
        while (
          i < b &&
          n[i] !==
            `
`
        )
          i++;
      else if (h === "/" && n[i + 1] === "*") {
        i += 2;
        while (i < b && !(n[i] === "*" && n[i + 1] === "/")) i++;
        i++;
      } else if (h === '"' || h === "'" || h === "`") {
        i++;
        while (i < b && n[i] !== h) {
          if (n[i] === "\\") i++;
          i++;
        }
      } else if (h === "{") {
        if ((s++, a && l === 0))
          (k.push({ braceDepth: s, cond: f }),
            (a = !1),
            (f = void 0),
            (c = -1));
      } else if (h === "}") {
        let u = k.at(-1);
        if (u && u.braceDepth === s) k.pop();
        s--;
      } else if (h === "(") l++;
      else if (h === ")") {
        let u = P.at(-1);
        if (u !== void 0 && u === l) P.pop();
        if ((l--, a && l === 0 && c < 0)) {
          let R = i + 1,
            X = Math.min(b, R + U);
          while (R < X && /\s/.test(n[R] ?? "")) R++;
          if (n[R] !== "{") {
            let M = dn(n, R, Math.min(b, R + U));
            if (M >= 0) c = M;
          }
        }
      } else if (
        h === "w" &&
        n.startsWith("while", i) &&
        l === 0 &&
        !G(n[i - 1]) &&
        !G(n[i + 5])
      ) {
        let u = n.indexOf("(", i);
        if (u === -1 || u - i > U) {
          i++;
          continue;
        }
        ((a = !0), (c = -1), (f = Be(n, u, !1)));
      } else if (
        h === "f" &&
        n.startsWith("for", i) &&
        l === 0 &&
        !G(n[i - 1]) &&
        !G(n[i + 3])
      ) {
        let u = n.indexOf("(", i);
        if (u === -1 || u - i > U) {
          i++;
          continue;
        }
        ((a = !0), (c = -1), (f = Be(n, u, !0)));
      } else if (h === "p" && n.startsWith("parallel(", i) && !G(n[i - 1]))
        (P.push(l + 1), (i += 7));
      else if (h === "a" && n.startsWith("agent", i) && !G(n[i - 1])) {
        let u = i + 5;
        while (u < b && /\s/.test(n[u] ?? "")) u++;
        if (n[u] === "(") {
          let R =
              P.length > 0
                ? "parallel"
                : a || k.length > 0
                  ? "loop"
                  : "sequential",
            X = a ? f : k.at(-1)?.cond,
            M =
              R === "loop"
                ? X?.trim().slice(0, 40)
                : R === "parallel"
                  ? "\xD7 N"
                  : void 0;
          y.push({ prompt: fn(n, u + 1), kind: R, annotation: M });
        }
      }
      i++;
    }
    if (y.length === 0) return null;
    let A = [];
    for (let h of y) {
      let u = A.at(-1);
      if (u && u.kind === h.kind && u.annotation === h.annotation)
        u.agents.push({ prompt: h.prompt });
      else
        A.push({
          kind: h.kind,
          agents: [{ prompt: h.prompt }],
          annotation: h.annotation,
        });
    }
    let I = 0;
    for (let h of A) {
      let u = h.agents.length;
      I += h.kind === "sequential" ? u : u * 3;
    }
    return { phases: A, estimatedAgents: I, hasReturn: /\breturn\b/.test(n) };
  } catch {
    return null;
  }
}
function An(pt) {
  return Us(pt).text;
}
function Tn(ct) {
  return !ct;
}
function Mn(Je) {
  return `\xB7 "${ps(Je.length > 60 ? truncateToCodeUnits(Je, 59) + "\u2026" : Je)}"`;
}
function On(H, ht) {
  return r(N, {
    children: [
      r(t, {
        children: [
          "  ",
          ht + 1,
          ". ",
          H.title,
          H.detail
            ? r(t, { dimColor: !0, children: [" \u2014 ", H.detail] })
            : "",
        ],
      }),
      H.prompts.length > 0 &&
        r(t, {
          dimColor: !0,
          children: [
            "     ",
            H.prompts.slice(0, 2).map(Mn).join("  "),
            H.prompts.length > 2 ? `  +${H.prompts.length - 2} more` : "",
          ],
        }),
    ],
  });
}
var Qe = 200000,
  en =
    "Dynamic workflows can use a lot of tokens quickly by running many " +
    "subagents in parallel \u2014 which counts against your usage limit. Stop a " +
    "running workflow at any time with /workflows, or disable dynamic workflows in /config.",
  nn = { loop: "loop", parallel: "parallel", sequential: "step" };
function tn(n, y, s, l, a) {
  switch (n) {
    case "yes":
      return {
        behavior: "allow",
        updatedInput: { ...y.input, script: s },
        ...(a && { feedback: a }),
      };
    case "yes-always": {
      if (l === null || !Hg(l))
        return { behavior: "allow", updatedInput: { ...y.input, script: s } };
      return {
        behavior: "allow",
        updatedInput: { ...y.input, script: s },
        permissionUpdates: l.applies,
      };
    }
    case "no":
      return { behavior: "deny", ...(a && { feedback: a }) };
  }
}
var Wn = new Set(["addRules"]);
function on(n) {
  let y = n.workflowName;
  if (y === void 0) return null;
  return qw(
    [
      {
        type: "addRules",
        rules: [{ toolName: WORKFLOW_TOOL_NAME, ruleContent: y }],
        behavior: "allow",
        destination: "localSettings",
      },
    ],
    {
      displayedTypes: Wn,
      renderLabel: (s) => {
        let l = s.length === 1 ? s[0] : void 0;
        if (
          l === void 0 ||
          l.type !== "addRules" ||
          l.rules.length !== 1 ||
          l.rules[0]?.toolName !== WORKFLOW_TOOL_NAME ||
          l.rules[0]?.ruleContent !== y
        )
          return null;
        let a = OD(l.rules[0].ruleContent);
        if (a === null) return null;
        return r(t, {
          children: [
            "Yes, and don't ask again for ",
            e(t, { bold: !0, children: a.display }),
            " ",
            "in",
            " ",
            e(t, { bold: !0, children: an(he()) }),
          ],
        });
      },
    },
  );
}
function WorkflowPermissionDialog(it) {
  let g = _(120),
    { payload: m, answer: J, wouldTakeAnswer: Q } = it,
    [x, rt] = d(m.script),
    ee = x.length > Qe || m.scriptForged,
    mn;
  if (g[0] !== x || g[1] !== ee)
    ((mn = ee ? "" : _i(x)), (g[0] = x), (g[1] = ee), (g[2] = mn));
  else mn = g[2];
  let Ee = mn,
    pn;
  if (g[3] !== x || g[4] !== ee)
    ((pn = ee || Jk(x)), (g[3] = x), (g[4] = ee), (g[5] = pn));
  else pn = g[5];
  let S = pn,
    $e;
  bb0: {
    if (S) {
      $e = null;
      break bb0;
    }
    let ie;
    if (g[6] !== x) ((ie = parseWorkflowScript(x)), (g[6] = x), (g[7] = ie));
    else ie = g[7];
    let cn = ie;
    $e = "error" in cn ? null : cn;
  }
  let B = $e,
    Ie = S ? "" : (B?.scriptBody ?? x),
    ie;
  if (g[8] !== Ie) ((ie = de(Ie)), (g[8] = Ie), (g[9] = ie));
  else ie = g[9];
  let L = ie,
    re;
  if (g[10] !== L || g[11] !== B?.meta.phases) {
    bb1: {
      let lt = An;
      let me = (st) => Oo(lt(st)).replace(/\s+/g, " ").trim();
      let wn = (at) => {
        let hn = new Set();
        let gn = [];
        for (const pe of at?.agents ?? []) {
          if (pe.prompt && !hn.has(pe.prompt))
            (hn.add(pe.prompt), gn.push(me(pe.prompt)));
        }
        return gn;
      };
      let kn = (ce) => ({
        title: me(nn[ce.kind] + (ce.annotation ? ` ${ce.annotation}` : "")),
        prompts: wn(ce),
      });
      let ge = B?.meta.phases;
      if (ge && ge.length > 0) {
        let ft = ge.map((Xe, ut) => ({
          title: me(Xe.title),
          detail: Xe.detail !== void 0 ? me(Xe.detail) : void 0,
          prompts: wn(L?.phases[ut]),
        }));
        let le;
        if (g[13] !== L?.phases)
          ((le = L?.phases ?? []), (g[13] = L?.phases), (g[14] = le));
        else le = g[14];
        let dt = le.slice(ge.length).map(kn);
        re = [...ft, ...dt];
        break bb1;
      }
      if (L && L.phases.length > 0) {
        re = L.phases.map(kn);
        break bb1;
      }
      re = null;
    }
    ((g[10] = L), (g[11] = B?.meta.phases), (g[12] = re));
  } else re = g[12];
  let j = re,
    [E, yn] = d(j === null),
    le;
  if (g[15] !== x || g[16] !== Q)
    ((le = function se(Ye) {
      if (Ye.ctrl && Ye.key === "g") {
        if ((Ye.preventDefault(), !Q())) {
          return;
        }
        let ze = editTextInExternalEditor(x);
        if (ze.content !== null && ze.content !== x) (rt(ze.content), yn(!1));
      }
    }),
      (g[15] = x),
      (g[16] = Q),
      (g[17] = le));
  else le = g[17];
  let se = le,
    bn;
  if (g[18] !== m.args)
    ((bn =
      m.args === void 0 ? void 0 : km(m.args, { scrub: "key", maxUnits: Rm })),
      (g[18] = m.args),
      (g[19] = bn));
  else bn = g[19];
  let T = bn,
    we = T === void 0 ? void 0 : T.kind === "full" ? T.text : T.marker,
    Pn;
  if (g[20] !== T?.kind || g[21] !== m || g[22] !== S)
    ((Pn = Wst(m) && T?.kind !== "withheld" && !S ? on(m) : null),
      (g[20] = T?.kind),
      (g[21] = m),
      (g[22] = S),
      (g[23] = Pn));
  else Pn = g[23];
  let O = Pn,
    Rn;
  if (
    g[24] !== O ||
    g[25] !== J ||
    g[26] !== m ||
    g[27] !== x ||
    g[28] !== S ||
    g[29] !== Q
  )
    ((Rn = (Ge, mt) => {
      if (Ge === "toggle") {
        if (!Q()) {
          return !1;
        }
        yn(Tn);
        return;
      }
      if (Ge !== "no" && S) {
        return !1;
      }
      return J(tn(Ge, m, x, O, mt));
    }),
      (g[24] = O),
      (g[25] = J),
      (g[26] = m),
      (g[27] = x),
      (g[28] = S),
      (g[29] = Q),
      (g[30] = Rn));
  else Rn = g[30];
  let Ue = Rn,
    xn;
  if (g[31] !== J)
    ((xn = () => J({ behavior: "deny" })), (g[31] = J), (g[32] = xn));
  else xn = g[32];
  let Ze = xn,
    ke,
    ye,
    be,
    Pe,
    Re,
    xe,
    Ce,
    De,
    Se,
    We,
    ve,
    Ae,
    Te,
    Oe,
    ae,
    Me,
    Ne,
    _e,
    je;
  if (
    g[33] !== O ||
    g[34] !== j ||
    g[35] !== se ||
    g[36] !== B ||
    g[37] !== m ||
    g[38] !== S ||
    g[39] !== E
  ) {
    let He =
      B?.meta.description !== void 0 ? Us(B.meta.description).text : void 0;
    let Z;
    if (g[59] !== O || g[60] !== j || g[61] !== S || g[62] !== E) {
      let ue = [];
      if (!S) {
        let C;
        if (g[64] === MEMO_CACHE_SENTINEL)
          ((C = {
            label: "Yes, run it",
            value: "yes",
            feedbackConfig: { type: "accept" },
          }),
            (g[64] = C));
        else C = g[64];
        ue.push(C);
      }
      if (O !== null) {
        let C;
        if (g[65] !== O.node)
          ((C = { label: O.node, value: "yes-always" }),
            (g[65] = O.node),
            (g[66] = C));
        else C = g[66];
        ue.push(C);
      }
      if (j && !S) {
        const C = E ? "View workflow summary" : "View raw script";
        let q;
        if (g[67] !== C)
          ((q = { label: C, value: "toggle" }), (g[67] = C), (g[68] = q));
        else q = g[68];
        ue.push(q);
      }
      Z =
        (ue.push({
          label: "No",
          value: "no",
          feedbackConfig: { type: "reject" },
        }),
        ue);
      ((g[59] = O), (g[60] = j), (g[61] = S), (g[62] = E), (g[63] = Z));
    } else Z = g[63];
    Pe = Z;
    let C;
    if (g[69] !== m.toolName)
      ((C = Hn(m.toolName)), (g[69] = m.toolName), (g[70] = C));
    else C = g[70];
    let q;
    if (g[71] !== m.isMcp || g[72] !== C)
      ((q = { toolName: C, isMcp: m.isMcp }),
        (g[71] = m.isMcp),
        (g[72] = C),
        (g[73] = q));
    else q = g[73];
    je = q;
    be = PermissionDialogFrame;
    Me = "permission";
    Ne = "Run a dynamic workflow?";
    _e = m.requestSource;
    ye = o;
    We = "column";
    ve = 1;
    Ae = 0;
    Te = !0;
    Oe = se;
    if (g[74] !== m.permissionResult)
      ((ae =
        m.permissionResult.denialLimitFallback !== void 0 &&
        e(Ig, { permissionResult: m.permissionResult, toolType: "tool" })),
        (g[74] = m.permissionResult),
        (g[75] = ae));
    else ae = g[75];
    ke = o;
    Re = "column";
    xe = 1;
    Ce = 1;
    De = "hidden";
    Se =
      He &&
      e(o, {
        marginBottom: 1,
        children: e(Fs, {
          multiline: aA(He),
          children: e(t, { bold: !0, children: He }),
        }),
      });
    ((g[33] = O),
      (g[34] = j),
      (g[35] = se),
      (g[36] = B),
      (g[37] = m),
      (g[38] = S),
      (g[39] = E),
      (g[40] = ke),
      (g[41] = ye),
      (g[42] = be),
      (g[43] = Pe),
      (g[44] = Re),
      (g[45] = xe),
      (g[46] = Ce),
      (g[47] = De),
      (g[48] = Se),
      (g[49] = We),
      (g[50] = ve),
      (g[51] = Ae),
      (g[52] = Te),
      (g[53] = Oe),
      (g[54] = ae),
      (g[55] = Me),
      (g[56] = Ne),
      (g[57] = _e),
      (g[58] = je));
  } else
    ((ke = g[40]),
      (ye = g[41]),
      (be = g[42]),
      (Pe = g[43]),
      (Re = g[44]),
      (xe = g[45]),
      (Ce = g[46]),
      (De = g[47]),
      (Se = g[48]),
      (We = g[49]),
      (ve = g[50]),
      (Ae = g[51]),
      (Te = g[52]),
      (Oe = g[53]),
      (ae = g[54]),
      (Me = g[55]),
      (Ne = g[56]),
      (_e = g[57]),
      (je = g[58]));
  let Z;
  if (
    g[76] !== j ||
    g[77] !== m.scriptForged ||
    g[78] !== Ee ||
    g[79] !== x.length ||
    g[80] !== S ||
    g[81] !== E
  )
    ((Z = S
      ? e(o, {
          marginBottom: 1,
          children: e(t, {
            dimColor: !0,
            children: m.scriptForged
              ? "(the workflow script could not be read from this request \u2014 approval is unavailable; deny or send feedback)"
              : `(script of ${x.length.toLocaleString()} characters cannot be shown in full \u2014 approval is unavailable; deny or send feedback)`,
          }),
        })
      : E || !j
        ? e(o, {
            borderStyle: "dashed",
            borderColor: "subtle",
            paddingX: 1,
            children: e(CodeBlock, { code: Ee, filePath: "workflow.js" }),
          })
        : r(o, {
            flexDirection: "column",
            children: [
              e(t, {
                children:
                  "This dynamic workflow will spin up multiple subagents across the following phases:",
              }),
              j.map(On),
            ],
          })),
      (g[76] = j),
      (g[77] = m.scriptForged),
      (g[78] = Ee),
      (g[79] = x.length),
      (g[80] = S),
      (g[81] = E),
      (g[82] = Z));
  else Z = g[82];
  let C;
  if (g[83] !== we || g[84] !== T)
    ((C =
      we &&
      e(o, {
        marginTop: 1,
        children: e(Fs, {
          multiline: T?.kind === "full" && T.needsGutter,
          children: r(t, {
            children: [
              r(t, { bold: !0, dimColor: !0, children: ["args:", " "] }),
              e(t, { dimColor: !0, children: we }),
            ],
          }),
        }),
      })),
      (g[83] = we),
      (g[84] = T),
      (g[85] = C));
  else C = g[85];
  let q;
  if (
    g[86] !== ke ||
    g[87] !== Re ||
    g[88] !== xe ||
    g[89] !== Ce ||
    g[90] !== De ||
    g[91] !== Se ||
    g[92] !== Z ||
    g[93] !== C
  )
    ((q = r(ke, {
      flexDirection: Re,
      paddingX: xe,
      marginBottom: Ce,
      overflow: De,
      children: [Se, Z, C],
    })),
      (g[86] = ke),
      (g[87] = Re),
      (g[88] = xe),
      (g[89] = Ce),
      (g[90] = De),
      (g[91] = Se),
      (g[92] = Z),
      (g[93] = C),
      (g[94] = q));
  else q = g[94];
  let Cn;
  if (g[95] === MEMO_CACHE_SENTINEL)
    ((Cn = e(o, {
      marginBottom: 1,
      children: e(t, { color: "warning", children: en }),
    })),
      (g[95] = Cn));
  else Cn = g[95];
  let qe;
  if (g[96] !== Ze || g[97] !== Ue || g[98] !== Pe || g[99] !== je)
    ((qe = e(XW, {
      options: Pe,
      onSelect: Ue,
      onCancel: Ze,
      question: Cn,
      toolAnalyticsContext: je,
    })),
      (g[96] = Ze),
      (g[97] = Ue),
      (g[98] = Pe),
      (g[99] = je),
      (g[100] = qe));
  else qe = g[100];
  let Dn;
  if (g[101] === MEMO_CACHE_SENTINEL)
    ((Dn = e(t, {
      dimColor: !0,
      children: e(KeybindingHint, { chord: "ctrl+g", action: "edit script in $EDITOR" }),
    })),
      (g[101] = Dn));
  else Dn = g[101];
  let Fe;
  if (g[102] !== qe)
    ((Fe = r(o, { flexDirection: "column", paddingX: 1, children: [qe, Dn] })),
      (g[102] = qe),
      (g[103] = Fe));
  else Fe = g[103];
  let Ke;
  if (
    g[104] !== ye ||
    g[105] !== We ||
    g[106] !== ve ||
    g[107] !== Ae ||
    g[108] !== Te ||
    g[109] !== Oe ||
    g[110] !== ae ||
    g[111] !== q ||
    g[112] !== Fe
  )
    ((Ke = r(ye, {
      flexDirection: We,
      marginTop: ve,
      tabIndex: Ae,
      autoFocus: Te,
      onKeyDown: Oe,
      children: [ae, q, Fe],
    })),
      (g[104] = ye),
      (g[105] = We),
      (g[106] = ve),
      (g[107] = Ae),
      (g[108] = Te),
      (g[109] = Oe),
      (g[110] = ae),
      (g[111] = q),
      (g[112] = Fe),
      (g[113] = Ke));
  else Ke = g[113];
  let Sn;
  if (
    g[114] !== be ||
    g[115] !== Me ||
    g[116] !== Ne ||
    g[117] !== _e ||
    g[118] !== Ke
  )
    ((Sn = e(be, { color: Me, title: Ne, requestSource: _e, children: Ke })),
      (g[114] = be),
      (g[115] = Me),
      (g[116] = Ne),
      (g[117] = _e),
      (g[118] = Ke),
      (g[119] = Sn));
  else Sn = g[119];
  return Sn;
}
export { WorkflowPermissionDialog };

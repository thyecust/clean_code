// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { replaceControlChars } from "../../01-核心基础设施/核心工具-字符串与文本/text-sanitization.js";
import { formatMcpScopeLocation, formatMcpScopeDescription, getMcpServerApprovalStatus, getMcpScopeConflicts, isOrganizationProvidedMcpScope, getMcpConfigsByScope, doesEnterpriseMcpConfigExist } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isRestrictedToPluginOnly } from "../Skills技能/chunk-sapykxw7.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Box, Text, Link } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { StatusIndicator } from "../../01-核心基础设施/UI组件-TUI/chunk-dsg6bce8.js";
import { fl } from "../../01-核心基础设施/UI组件-TUI/chunk-jjqazdgg.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
F();
function A(Te) {
  let L = _(10),
    { title: Q, status: U, detail: j } = Te,
    b;
  if (L[0] !== Q)
    ((b = e(Text, { bold: !0, children: Q })), (L[0] = Q), (L[1] = b));
  else b = L[1];
  let D;
  if (L[2] !== U) ((D = e(StatusIndicator, { status: U })), (L[2] = U), (L[3] = D));
  else D = L[3];
  let M;
  if (L[4] !== j)
    ((M = j ? r(Text, { dimColor: !0, children: [" \xB7 ", j] }) : null),
      (L[4] = j),
      (L[5] = M));
  else M = L[5];
  let te;
  if (L[6] !== b || L[7] !== D || L[8] !== M)
    ((te = r(Text, { children: [b, " ", D, M] })),
      (L[6] = b),
      (L[7] = D),
      (L[8] = M),
      (L[9] = te));
  else te = L[9];
  return te;
}
function he(Ke) {
  return Ke.file;
}
function Ne(Ue) {
  return !isOrganizationProvidedMcpScope(Ue.scope);
}
function Se(ee) {
  return {
    scope: ee.scope,
    servers: ee.config.servers,
    displayServers: getMcpConfigsByScope(ee.scope, { expandVars: !1 }).servers,
  };
}
function ye(Xe) {
  return getMcpServerApprovalStatus(Xe) === "approved";
}
function Ee(S) {
  let { config: Ye } = S;
  return v(Ye.errors, "fatal").length > 0;
}
function Pe(S) {
  let { config: Ze } = S;
  return v(Ze.errors, "warning").length > 0;
}
function Re(S) {
  let { scope: ue, config: ve } = S;
  return e(
    O,
    {
      scope: ue,
      parsingErrors: v(ve.errors, "fatal"),
      warnings: v(ve.errors, "warning"),
    },
    ue,
  );
}
function xe(oe, _e) {
  return r(
    fl.Group,
    {
      children: [
        e(fl.Node, { color: "warning", children: replaceControlChars(oe.message) }),
        oe.suggestion &&
          e(fl.Node, { dimColor: !0, children: replaceControlChars(oe.suggestion) }),
      ],
    },
    `conflict-${_e}`,
  );
}
function O(ze) {
  let c = _(38),
    { scope: w, parsingErrors: y, warnings: E } = ze,
    T = y.length > 0,
    G = E.length > 0;
  if (!T && !G) {
    return null;
  }
  let ie;
  if (c[0] !== w) ((ie = formatMcpScopeLocation(w)), (c[0] = w), (c[1] = ie));
  else ie = c[1];
  let X = ie,
    ne;
  if (c[2] !== y || c[3] !== E)
    ((ne = new Set([...y, ...E].map(he).filter(Boolean))),
      (c[2] = y),
      (c[3] = E),
      (c[4] = ne));
  else ne = c[4];
  let I = ne,
    se;
  if (c[5] !== X || c[6] !== I)
    ((se = I.size === 1 ? [...I][0] : X), (c[5] = X), (c[6] = I), (c[7] = se));
  else se = c[7];
  let d = se,
    z;
  if (c[8] !== T || c[9] !== G)
    ((z =
      (T || G) &&
      r(Text, {
        color: T ? "error" : "warning",
        children: ["[", T ? "Failed to parse" : "Contains warnings", "]", " "],
      })),
      (c[8] = T),
      (c[9] = G),
      (c[10] = z));
  else z = c[10];
  let q;
  if (c[11] !== w) ((q = formatMcpScopeDescription(w)), (c[11] = w), (c[12] = q));
  else q = c[12];
  let C;
  if (c[13] !== q) ((C = e(Text, { children: q })), (c[13] = q), (c[14] = C));
  else C = c[14];
  let H;
  if (c[15] !== z || c[16] !== C)
    ((H = r(Box, { children: [z, C] })), (c[15] = z), (c[16] = C), (c[17] = H));
  else H = c[17];
  let ae;
  if (c[18] === MEMO_CACHE_SENTINEL)
    ((ae = e(Text, { dimColor: !0, children: "Location: " })), (c[18] = ae));
  else ae = c[18];
  let J;
  if (c[19] !== d)
    ((J = r(Box, { children: [ae, e(Text, { dimColor: !0, children: d })] })),
      (c[19] = d),
      (c[20] = J));
  else J = c[20];
  let K;
  if (c[21] !== d || c[22] !== y) {
    let P;
    if (c[24] !== d)
      ((P = (h, qe) => {
        let ce = h.mcpErrorMetadata?.serverName;
        let Ce = h.file && h.file !== d;
        return e(
          fl.Node,
          {
            children: r(Text, {
              children: [
                e(Text, { color: "error", children: "[Error]" }),
                r(Text, {
                  dimColor: !0,
                  children: [
                    " ",
                    Ce && `(${h.file}) `,
                    ce && `[${replaceControlChars(ce)}] `,
                    h.path && h.path !== "" ? `${replaceControlChars(h.path)}: ` : "",
                    replaceControlChars(h.message),
                  ],
                }),
              ],
            }),
          },
          `error-${qe}`,
        );
      }),
        (c[24] = d),
        (c[25] = P));
    else P = c[25];
    K = y.map(P);
    ((c[21] = d), (c[22] = y), (c[23] = K));
  } else K = c[23];
  let P;
  if (c[26] !== d || c[27] !== E) {
    let R;
    if (c[29] !== d)
      ((R = (N, He) => {
        let pe = N.mcpErrorMetadata?.serverName;
        let Je = N.file && N.file !== d;
        return e(
          fl.Node,
          {
            children: r(Text, {
              children: [
                e(Text, { color: "warning", children: "[Warning]" }),
                r(Text, {
                  dimColor: !0,
                  children: [
                    " ",
                    Je && `(${N.file}) `,
                    pe && `[${replaceControlChars(pe)}] `,
                    N.path && N.path !== "" ? `${replaceControlChars(N.path)}: ` : "",
                    replaceControlChars(N.message),
                  ],
                }),
              ],
            }),
          },
          `warning-${He}`,
        );
      }),
        (c[29] = d),
        (c[30] = R));
    else R = c[30];
    P = E.map(R);
    ((c[26] = d), (c[27] = E), (c[28] = P));
  } else P = c[28];
  let R;
  if (c[31] !== K || c[32] !== P)
    ((R = e(Box, {
      marginLeft: 1,
      children: r(fl, { variant: "tree", children: [K, P] }),
    })),
      (c[31] = K),
      (c[32] = P),
      (c[33] = R));
  else R = c[33];
  let me;
  if (c[34] !== R || c[35] !== H || c[36] !== J)
    ((me = r(Box, {
      flexDirection: "column",
      marginTop: 1,
      children: [H, J, R],
    })),
      (c[34] = R),
      (c[35] = H),
      (c[36] = J),
      (c[37] = me));
  else me = c[37];
  return me;
}
function McpConfigDiagnostics() {
  let Y = _(3),
    S;
  if (Y[0] === MEMO_CACHE_SENTINEL) {
    let fe = [
      { scope: "user", config: getMcpConfigsByScope("user") },
      { scope: "project", config: getMcpConfigsByScope("project") },
      { scope: "local", config: getMcpConfigsByScope("local") },
      { scope: "managed", config: getMcpConfigsByScope("managed") },
      { scope: "enterprise", config: getMcpConfigsByScope("enterprise") },
    ];
    let Oe = getMcpScopeConflicts(fe.filter(Ne).map(Se));
    S = {
      scopes: re(fe, {
        enterpriseActive: doesEnterpriseMcpConfigExist(),
        mcpLocked: isRestrictedToPluginOnly("mcp"),
        isProjectServerApproved: ye,
      }),
      conflicts: Oe,
    };
    Y[0] = S;
  } else S = Y[0];
  let { scopes: Z, conflicts: B } = S,
    le = Z.some(Ee),
    Qe = B.length > 0 || Z.some(Pe);
  if (!le && !Qe) {
    return null;
  }
  let de;
  if (Y[1] === MEMO_CACHE_SENTINEL)
    ((de = e(A, {
      title: "MCP config diagnostics",
      status: le ? "error" : "warning",
    })),
      (Y[1] = de));
  else de = Y[1];
  let ge;
  if (Y[2] === MEMO_CACHE_SENTINEL)
    ((ge = r(Box, {
      flexDirection: "column",
      marginTop: 1,
      marginBottom: 1,
      children: [
        de,
        e(Box, {
          marginTop: 1,
          children: r(Text, {
            dimColor: !0,
            children: [
              "For help configuring MCP servers, see:",
              " ",
              e(Link, {
                url: "https://code.claude.com/docs/en/mcp",
                children: "https://code.claude.com/docs/en/mcp",
              }),
            ],
          }),
        }),
        Z.map(Re),
        B.length > 0 &&
          r(Box, {
            flexDirection: "column",
            marginTop: 1,
            children: [
              e(Text, { color: "warning", children: "[Conflicting scopes]" }),
              e(fl, { variant: "tree", children: B.map(xe) }),
            ],
          }),
      ],
    })),
      (Y[2] = ge));
  else ge = Y[2];
  return ge;
}
function v(m, s) {
  return m.filter((f) => f.mcpErrorMetadata?.severity === s);
}
function re(m, s) {
  let f = (a, n) => {
    if (!(n in a.config.servers)) return !1;
    if (a.scope === "project") return s.isProjectServerApproved(n);
    return !0;
  };
  return m.map((a, n) => {
    let g = !isOrganizationProvidedMcpScope(a.scope) && (s.enterpriseActive || s.mcpLocked),
      l = m.slice(n + 1),
      x = (i) => l.some((u) => f(u, i));
    return {
      ...a,
      config: {
        ...a.config,
        errors: a.config.errors.filter((i) => {
          if (i.mcpErrorMetadata?.severity !== "warning") return !0;
          if (g) return !1;
          let u = i.mcpErrorMetadata.serverName;
          return !u || !x(u);
        }),
      },
    };
  });
}
export { McpConfigDiagnostics };

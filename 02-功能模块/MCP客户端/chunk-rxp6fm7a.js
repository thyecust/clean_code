// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Sn } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { cw, qLe, Bne, getMcpScopeConflicts as LWt, isOrganizationProvidedMcpScope as mY, getMcpConfigsByScope as nd, doesEnterpriseMcpConfigExist as Zm } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isRestrictedToPluginOnly as Uu } from "../Skills技能/chunk-sapykxw7.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t, ct } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { et } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { fl } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-jjqazdgg.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { V, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function A(Te) {
  let L = _(10),
    { title: Q, status: U, detail: j } = Te,
    b;
  if (L[0] !== Q)
    ((b = e(t, { bold: !0, children: Q })), (L[0] = Q), (L[1] = b));
  else b = L[1];
  let D;
  if (L[2] !== U) ((D = e(et, { status: U })), (L[2] = U), (L[3] = D));
  else D = L[3];
  let M;
  if (L[4] !== j)
    ((M = j ? r(t, { dimColor: !0, children: [" \xB7 ", j] }) : null),
      (L[4] = j),
      (L[5] = M));
  else M = L[5];
  let te;
  if (L[6] !== b || L[7] !== D || L[8] !== M)
    ((te = r(t, { children: [b, " ", D, M] })),
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
  return !mY(Ue.scope);
}
function Se(ee) {
  return {
    scope: ee.scope,
    servers: ee.config.servers,
    displayServers: nd(ee.scope, { expandVars: !1 }).servers,
  };
}
function ye(Xe) {
  return Bne(Xe) === "approved";
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
        e(fl.Node, { color: "warning", children: Sn(oe.message) }),
        oe.suggestion &&
          e(fl.Node, { dimColor: !0, children: Sn(oe.suggestion) }),
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
  if (c[0] !== w) ((ie = cw(w)), (c[0] = w), (c[1] = ie));
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
      r(t, {
        color: T ? "error" : "warning",
        children: ["[", T ? "Failed to parse" : "Contains warnings", "]", " "],
      })),
      (c[8] = T),
      (c[9] = G),
      (c[10] = z));
  else z = c[10];
  let q;
  if (c[11] !== w) ((q = qLe(w)), (c[11] = w), (c[12] = q));
  else q = c[12];
  let C;
  if (c[13] !== q) ((C = e(t, { children: q })), (c[13] = q), (c[14] = C));
  else C = c[14];
  let H;
  if (c[15] !== z || c[16] !== C)
    ((H = r(o, { children: [z, C] })), (c[15] = z), (c[16] = C), (c[17] = H));
  else H = c[17];
  let ae;
  if (c[18] === p)
    ((ae = e(t, { dimColor: !0, children: "Location: " })), (c[18] = ae));
  else ae = c[18];
  let J;
  if (c[19] !== d)
    ((J = r(o, { children: [ae, e(t, { dimColor: !0, children: d })] })),
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
            children: r(t, {
              children: [
                e(t, { color: "error", children: "[Error]" }),
                r(t, {
                  dimColor: !0,
                  children: [
                    " ",
                    Ce && `(${h.file}) `,
                    ce && `[${Sn(ce)}] `,
                    h.path && h.path !== "" ? `${Sn(h.path)}: ` : "",
                    Sn(h.message),
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
            children: r(t, {
              children: [
                e(t, { color: "warning", children: "[Warning]" }),
                r(t, {
                  dimColor: !0,
                  children: [
                    " ",
                    Je && `(${N.file}) `,
                    pe && `[${Sn(pe)}] `,
                    N.path && N.path !== "" ? `${Sn(N.path)}: ` : "",
                    Sn(N.message),
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
    ((R = e(o, {
      marginLeft: 1,
      children: r(fl, { variant: "tree", children: [K, P] }),
    })),
      (c[31] = K),
      (c[32] = P),
      (c[33] = R));
  else R = c[33];
  let me;
  if (c[34] !== R || c[35] !== H || c[36] !== J)
    ((me = r(o, {
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
function i9e() {
  let Y = _(3),
    S;
  if (Y[0] === p) {
    let fe = [
      { scope: "user", config: nd("user") },
      { scope: "project", config: nd("project") },
      { scope: "local", config: nd("local") },
      { scope: "managed", config: nd("managed") },
      { scope: "enterprise", config: nd("enterprise") },
    ];
    let Oe = LWt(fe.filter(Ne).map(Se));
    S = {
      scopes: re(fe, {
        enterpriseActive: Zm(),
        mcpLocked: Uu("mcp"),
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
  if (Y[1] === p)
    ((de = e(A, {
      title: "MCP config diagnostics",
      status: le ? "error" : "warning",
    })),
      (Y[1] = de));
  else de = Y[1];
  let ge;
  if (Y[2] === p)
    ((ge = r(o, {
      flexDirection: "column",
      marginTop: 1,
      marginBottom: 1,
      children: [
        de,
        e(o, {
          marginTop: 1,
          children: r(t, {
            dimColor: !0,
            children: [
              "For help configuring MCP servers, see:",
              " ",
              e(ct, {
                url: "https://code.claude.com/docs/en/mcp",
                children: "https://code.claude.com/docs/en/mcp",
              }),
            ],
          }),
        }),
        Z.map(Re),
        B.length > 0 &&
          r(o, {
            flexDirection: "column",
            marginTop: 1,
            children: [
              e(t, { color: "warning", children: "[Conflicting scopes]" }),
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
    let g = !mY(a.scope) && (s.enterpriseActive || s.mcpLocked),
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
export { i9e };

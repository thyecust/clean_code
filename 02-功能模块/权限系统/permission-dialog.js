// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { tryFormatShortLabel } from "../策略限制-PolicyLimits/chunk-8sw91yn5.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
function p(l) {
  let s = tryFormatShortLabel(l);
  return s === null ? void 0 : String(s);
}
function PermissionRequestHeader(V) {
  let f = _(20),
    { title: b, subtitle: u, color: A, requestSource: a, srPrefix: E } = V,
    T = A === void 0 ? "permission" : A,
    d;
  bb0: switch (a?.type) {
    case "workflow-agent": {
      let n;
      if (f[0] !== a.workflowName)
        ((n = p(a.workflowName)), (f[0] = a.workflowName), (f[1] = n));
      else n = f[1];
      let F = n;
      d = F !== void 0 ? `from the "${F}" workflow` : "from a workflow";
      break bb0;
    }
    case "subagent": {
      let n;
      if (f[2] !== a.agentName)
        ((n = p(a.agentName)), (f[2] = a.agentName), (f[3] = n));
      else n = f[3];
      let G = n;
      d = G !== void 0 ? `from the ${G} agent` : "from a subagent";
      break bb0;
    }
    case "remote-agent": {
      d = "from a remote cloud agent";
      break bb0;
    }
    case "plugin": {
      let n;
      if (f[4] !== a.pluginName)
        ((n = p(a.pluginName)), (f[4] = a.pluginName), (f[5] = n));
      else n = f[5];
      let H = n;
      d = H === void 0 ? "from a plugin" : `from the ${H} plugin`;
    }
  }
  const n = E !== void 0 ? `${E} ${b}` : void 0;
  let y;
  if (f[6] !== T || f[7] !== n || f[8] !== b)
    ((y = e(Text, { "aria-label": n, bold: !0, color: T, children: b })),
      (f[6] = T),
      (f[7] = n),
      (f[8] = b),
      (f[9] = y));
  else y = f[9];
  let h;
  if (f[10] !== d)
    ((h =
      d !== void 0 &&
      r(Text, { children: [e(Text, { dimColor: !0, children: "\xB7 " }), d] })),
      (f[10] = d),
      (f[11] = h));
  else h = f[11];
  let w;
  if (f[12] !== y || f[13] !== h)
    ((w = r(Box, { flexDirection: "row", gap: 1, children: [y, h] })),
      (f[12] = y),
      (f[13] = h),
      (f[14] = w));
  else w = f[14];
  let P;
  if (f[15] !== u)
    ((P =
      u != null &&
      (typeof u === "string"
        ? e(Text, { dimColor: !0, wrap: "truncate-start", children: u })
        : u)),
      (f[15] = u),
      (f[16] = P));
  else P = f[16];
  let I;
  if (f[17] !== w || f[18] !== P)
    ((I = r(Box, { flexDirection: "column", children: [w, P] })),
      (f[17] = w),
      (f[18] = P),
      (f[19] = I));
  else I = f[19];
  return I;
}
function PermissionDialogFrame(te) {
  let k = _(15),
    {
      title: q,
      subtitle: C,
      color: J,
      titleColor: D,
      innerPaddingX: K,
      requestSource: j,
      titleRight: B,
      children: L,
    } = te,
    X = J === void 0 ? "permission" : J,
    v = K === void 0 ? 1 : K,
    x;
  if (k[0] !== j || k[1] !== C || k[2] !== q || k[3] !== D)
    ((x = e(PermissionRequestHeader, {
      title: q,
      subtitle: C,
      color: D,
      requestSource: j,
      srPrefix: "Permission Required:",
    })),
      (k[0] = j),
      (k[1] = C),
      (k[2] = q),
      (k[3] = D),
      (k[4] = x));
  else x = k[4];
  let N;
  if (k[5] !== x || k[6] !== B)
    ((N = e(Box, {
      paddingX: 1,
      flexDirection: "column",
      children: r(Box, { justifyContent: "space-between", children: [x, B] }),
    })),
      (k[5] = x),
      (k[6] = B),
      (k[7] = N));
  else N = k[7];
  let S;
  if (k[8] !== L || k[9] !== v)
    ((S = e(Box, { flexDirection: "column", paddingX: v, children: L })),
      (k[8] = L),
      (k[9] = v),
      (k[10] = S));
  else S = k[10];
  let M;
  if (k[11] !== X || k[12] !== N || k[13] !== S)
    ((M = r(Box, {
      flexDirection: "column",
      borderStyle: "round",
      borderColor: X,
      borderLeft: !1,
      borderRight: !1,
      borderBottom: !1,
      marginTop: 1,
      children: [N, S],
    })),
      (k[11] = X),
      (k[12] = N),
      (k[13] = S),
      (k[14] = M));
  else M = k[14];
  return M;
}
export { PermissionRequestHeader, PermissionDialogFrame };

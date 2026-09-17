// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Se } from "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { truncateToWidth as Xe } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { o, t, ko } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { U } from "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import { yo } from "../../02-功能模块/状态栏-主题/chunk-jrr487ty.js";
import { CZ, Fot, aHe } from "../../02-功能模块/输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { L } from "../../02-功能模块/Teammates团队/chunk-mrfx53ye.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function re(ye) {
  return ye.remoteBootstrap;
}
function se() {
  return Date.now();
}
function cIt() {
  let D = _(22),
    u = U(re),
    { columns: O } = Se(),
    [Y, xe] = d(se),
    W;
  if (D[0] === p) ((W = () => xe(Date.now())), (D[0] = W));
  else W = D[0];
  if ((ko(W, 1000), u === null)) {
    return null;
  }
  let k = u.queuedCount,
    E;
  if (D[1] !== u.sessionMode)
    ((E = Fot(u.sessionMode)), (D[1] = u.sessionMode), (D[2] = E));
  else E = D[2];
  let G;
  if (D[3] !== E)
    ((G = r(t, { bold: !0, children: [E, "\u2026"] })), (D[3] = E), (D[4] = G));
  else G = D[4];
  let H;
  if (D[5] !== O || D[6] !== Y || D[7] !== u.sessionMode || D[8] !== u.steps) {
    let q;
    if (D[10] !== O || D[11] !== Y || D[12] !== u.sessionMode)
      ((q = (K) =>
        K.status === "skipped"
          ? null
          : e(
              J,
              { step: K, sessionMode: u.sessionMode, now: Y, columns: O },
              K.id,
            )),
        (D[10] = O),
        (D[11] = Y),
        (D[12] = u.sessionMode),
        (D[13] = q));
    else q = D[13];
    H = u.steps.map(q);
    ((D[5] = O),
      (D[6] = Y),
      (D[7] = u.sessionMode),
      (D[8] = u.steps),
      (D[9] = H));
  } else H = D[9];
  let q;
  if (D[14] !== k)
    ((q =
      k > 0
        ? `${k} ${x(k, "message")} queued \xB7 sends once the session is ready`
        : "You can start typing \u2014 messages send once the session is ready"),
      (D[14] = k),
      (D[15] = q));
  else q = D[15];
  let I;
  if (D[16] !== q)
    ((I = e(o, {
      marginTop: 1,
      children: e(t, { dimColor: !0, children: q }),
    })),
      (D[16] = q),
      (D[17] = I));
  else I = D[17];
  let X;
  if (D[18] !== G || D[19] !== H || D[20] !== I)
    ((X = r(o, { flexDirection: "column", marginTop: 1, children: [G, H, I] })),
      (D[18] = G),
      (D[19] = H),
      (D[20] = I),
      (D[21] = X));
  else X = D[21];
  return X;
}
function J(Re) {
  let T = _(23),
    { step: s, sessionMode: P, now: C, columns: S } = Re,
    Z;
  if (T[0] !== P || T[1] !== s)
    ((Z = CZ(s, P)), (T[0] = P), (T[1] = s), (T[2] = Z));
  else Z = T[2];
  let m = Z;
  switch (s.status) {
    case "completed": {
      let i;
      if (T[3] !== C || T[4] !== s)
        ((i = aHe(s, C)), (T[3] = C), (T[4] = s), (T[5] = i));
      else i = T[5];
      let z;
      if (T[6] !== m || T[7] !== i)
        ((z = e(PB, { status: "completed", label: m, annotation: i })),
          (T[6] = m),
          (T[7] = i),
          (T[8] = z));
      else z = T[8];
      return z;
    }
    case "running": {
      let i;
      if (T[9] !== C || T[10] !== s)
        ((i = aHe(s, C)), (T[9] = C), (T[10] = s), (T[11] = i));
      else i = T[11];
      let z;
      if (T[12] !== S || T[13] !== m || T[14] !== s.detail || T[15] !== i)
        ((z = e(PB, {
          status: "running",
          label: m,
          annotation: i,
          detail: s.detail,
          columns: S,
        })),
          (T[12] = S),
          (T[13] = m),
          (T[14] = s.detail),
          (T[15] = i),
          (T[16] = z));
      else z = T[16];
      return z;
    }
    case "failed": {
      let i;
      if (T[17] !== S || T[18] !== m || T[19] !== s.error)
        ((i = e(PB, {
          status: "failed",
          label: m,
          detail: s.error,
          columns: S,
        })),
          (T[17] = S),
          (T[18] = m),
          (T[19] = s.error),
          (T[20] = i));
      else i = T[20];
      return i;
    }
    case "pending": {
      let i;
      if (T[21] !== m)
        ((i = e(PB, { status: "pending", label: m })),
          (T[21] = m),
          (T[22] = i));
      else i = T[22];
      return i;
    }
    case "skipped": {
      return null;
    }
  }
}
function PB(be) {
  let c = _(31),
    {
      status: Be,
      label: y,
      annotation: j,
      detail: A,
      columns: ee,
      detailOverflow: oe,
    } = be,
    v = j === void 0 ? "" : j,
    Q = ee === void 0 ? 80 : ee,
    V = oe === void 0 ? "truncate" : oe,
    te;
  if (c[0] !== Q || c[1] !== A || c[2] !== V)
    ((te = A === void 0 || V === "wrap" ? A : Xe(A, Math.max(20, Q - 8))),
      (c[0] = Q),
      (c[1] = A),
      (c[2] = V),
      (c[3] = te));
  else te = c[3];
  let R = te;
  switch (Be) {
    case "completed": {
      let l;
      if (c[4] === p)
        ((l = e(t, { color: "success", children: `  ${L.tick} ` })),
          (c[4] = l));
      else l = c[4];
      let n;
      if (c[5] !== v)
        ((n = e(t, { dimColor: !0, children: v })), (c[5] = v), (c[6] = n));
      else n = c[6];
      let f;
      if (c[7] !== y || c[8] !== n)
        ((f = r(o, { children: [l, r(t, { children: [y, n] })] })),
          (c[7] = y),
          (c[8] = n),
          (c[9] = f));
      else f = c[9];
      return f;
    }
    case "running": {
      let l;
      if (c[10] === p)
        ((l = e(o, { width: 4, paddingLeft: 2, children: e(yo, {}) })),
          (c[10] = l));
      else l = c[10];
      let n;
      if (c[11] !== v)
        ((n = e(t, { dimColor: !0, children: v })), (c[11] = v), (c[12] = n));
      else n = c[12];
      let f;
      if (c[13] !== y || c[14] !== n)
        ((f = r(o, { children: [l, r(t, { children: [y, "\u2026", n] })] })),
          (c[13] = y),
          (c[14] = n),
          (c[15] = f));
      else f = c[15];
      let h;
      if (c[16] !== R)
        ((h =
          R !== void 0 &&
          R !== "" &&
          e(o, {
            paddingLeft: 6,
            children: e(t, { dimColor: !0, children: R }),
          })),
          (c[16] = R),
          (c[17] = h));
      else h = c[17];
      let ne;
      if (c[18] !== f || c[19] !== h)
        ((ne = r(o, { flexDirection: "column", children: [f, h] })),
          (c[18] = f),
          (c[19] = h),
          (c[20] = ne));
      else ne = c[20];
      return ne;
    }
    case "failed": {
      let l;
      if (c[21] === p)
        ((l = e(t, { color: "error", children: `  ${L.cross} ` })),
          (c[21] = l));
      else l = c[21];
      let n;
      if (c[22] !== y)
        ((n = r(o, { children: [l, e(t, { children: y })] })),
          (c[22] = y),
          (c[23] = n));
      else n = c[23];
      let f;
      if (c[24] !== R)
        ((f =
          R !== void 0 &&
          R !== "" &&
          e(o, {
            paddingLeft: 6,
            children: e(t, { color: "error", children: R }),
          })),
          (c[24] = R),
          (c[25] = f));
      else f = c[25];
      let h;
      if (c[26] !== n || c[27] !== f)
        ((h = r(o, { flexDirection: "column", children: [n, f] })),
          (c[26] = n),
          (c[27] = f),
          (c[28] = h));
      else h = c[28];
      return h;
    }
    case "pending": {
      const l = `  ${L.circle} ${y}`;
      let n;
      if (c[29] !== l)
        ((n = e(o, { children: e(t, { dimColor: !0, children: l }) })),
          (c[29] = l),
          (c[30] = n));
      else n = c[30];
      return n;
    }
  }
}
export { cIt, PB };

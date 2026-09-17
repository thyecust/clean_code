// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 120 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { eI } from "../../00-第三方库/_未识别/第三方库-其他/chunk-x46ksw6d.js";
import { Box, Text, useIsScreenReaderEnabled } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useKeybinding } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { isRemoteActive, hasRemoteCapability } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { useAppStateSelector } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import { InputGuide } from "../../01-核心基础设施/共享小工具-未细化/input-guide.js";
import { Qr } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { Dn, kn, V, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function x(ro) {
  return ro.remoteSessionUrl;
}
function X(no) {
  return no.length > 0;
}
function G(to) {
  return to
    .split(
      `
`,
    )
    .filter(X);
}
function J(io) {
  return (logForDebugging(`QR code generation failed: ${io}`), []);
}
function I(ao, co) {
  return e(Text, { children: ao }, co);
}
function P(oo) {
  let i = _(17),
    { onDone: eo } = oo,
    m = useAppStateSelector(x),
    w = useIsScreenReaderEnabled(),
    L;
  if (i[0] !== m)
    ((L = m
      ? eI(m, { type: "utf8", errorCorrectionLevel: "L", margin: 0 })
          .then(G)
          .catch(J)
      : null),
      (i[0] = m),
      (i[1] = L));
  else L = i[1];
  let h = L,
    k;
  if (i[2] === MEMO_CACHE_SENTINEL) ((k = { context: "Confirmation" }), (i[2] = k));
  else k = i[2];
  if ((useKeybinding("confirm:no", eo, k), !m)) {
    let f, u;
    if (i[3] === MEMO_CACHE_SENTINEL)
      ((f = e(Box, {
        marginBottom: 1,
        children: e(Text, { bold: !0, children: "Cloud session" }),
      })),
        (u = isRemoteActive()
          ? e(Text, {
              children: hasRemoteCapability("fanout")
                ? "This session's browser link isn't available from this view."
                : "This session is connected directly and has no browser link \u2014 only sessions started with `claude --cloud` can be opened in the browser.",
            })
          : e(Text, {
              color: "warning",
              children:
                "Not in remote mode. Start with `claude --cloud` to use this command.",
            })),
        (i[3] = f),
        (i[4] = u));
    else ((f = i[3]), (u = i[4]));
    let a;
    if (i[5] === MEMO_CACHE_SENTINEL)
      ((a = r(Qr, {
        children: [
          f,
          u,
          e(Box, {
            marginTop: 1,
            children: e(InputGuide, {
              children: e(KeybindingHint, { chord: "escape", action: "close" }),
            }),
          }),
        ],
      })),
        (i[5] = a));
    else a = i[5];
    return a;
  }
  let f;
  if (i[6] === MEMO_CACHE_SENTINEL)
    ((f = e(Box, {
      marginBottom: 1,
      children: e(Text, { bold: !0, children: "Cloud session" }),
    })),
      (i[6] = f));
  else f = i[6];
  let u;
  if (i[7] === MEMO_CACHE_SENTINEL)
    ((u = e(Text, { dimColor: !0, children: "Open in browser: " })), (i[7] = u));
  else u = i[7];
  let a;
  if (i[8] !== m)
    ((a = r(Box, { children: [u, e(Text, { color: "ide", children: m })] })),
      (i[8] = m),
      (i[9] = a));
  else a = i[9];
  let v;
  if (i[10] === MEMO_CACHE_SENTINEL)
    ((v = e(Box, {
      marginBottom: 1,
      children: e(InputGuide, {
        children: e(KeybindingHint, { chord: "escape", action: "cancel", parens: !0 }),
      }),
    })),
      (i[10] = v));
  else v = i[10];
  let C;
  if (i[11] !== w || i[12] !== h)
    ((C =
      !w &&
      h &&
      e(Dn, {
        fallback: e(Text, { dimColor: !0, children: "Generating QR code\u2026" }),
        children: e(b, { qrLinesPromise: h }),
      })),
      (i[11] = w),
      (i[12] = h),
      (i[13] = C));
  else C = i[13];
  let B;
  if (i[14] !== a || i[15] !== C)
    ((B = r(Qr, { children: [f, a, v, C] })),
      (i[14] = a),
      (i[15] = C),
      (i[16] = B));
  else B = i[16];
  return B;
}
function b(so) {
  let T = _(4),
    { qrLinesPromise: mo } = so,
    y = kn(mo);
  if (y.length === 0) {
    return null;
  }
  let R;
  if (T[0] !== y) ((R = y.map(I)), (T[0] = y), (T[1] = R));
  else R = T[1];
  let q;
  if (T[2] !== R) ((q = e(N, { children: R })), (T[2] = R), (T[3] = q));
  else q = T[3];
  return q;
}
var H = async (c) => e(P, { onDone: c });
export { H as call };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Bat } from "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import { stripAnsi } from "./text-sanitization.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useApp, render } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { N, e } from "../../00-第三方库/react/react.kwtapczy.js";
import { Qt, dn, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
F();
import { PassThrough } from "stream";
function l() {}
var StaticFrameContext = Qt(!1);
function RenderOnceAndExit(k) {
  let u = _(5),
    { children: s } = k,
    { exit: a } = useApp(),
    m,
    p;
  if (u[0] !== a)
    ((m = () => {
      let y = setTimeout(a, 0);
      return () => clearTimeout(y);
    }),
      (p = [a]),
      (u[0] = a),
      (u[1] = m),
      (u[2] = p));
  else ((m = u[1]), (p = u[2]));
  dn(m, p);
  let f;
  if (u[3] !== s) ((f = e(N, { children: s })), (u[3] = s), (u[4] = f));
  else f = u[4];
  return f;
}
async function renderAndWaitForExit(r, t) {
  (r.render(e(RenderOnceAndExit, { children: t })), await r.waitUntilExit());
}
async function renderToAnsiText(r, { columns: t, storageV5: n }) {
  let i = "",
    c = !1,
    o = new PassThrough();
  if (t !== void 0) o.columns = t;
  return (
    o.on("data", (d) => {
      if (c) return;
      ((c = !0), (i = d.toString()));
    }),
    await (
      await render(
        e(RenderOnceAndExit, {
          children: e(StaticFrameContext.Provider, {
            value: !0,
            children: e(Bat, { value: l, children: r }),
          }),
        }),
        { stdout: o, patchConsole: !1 },
        { storageV5: n },
      )
    ).waitUntilExit(),
    i
  );
}
async function renderToPlainText(r, t) {
  let n = await renderToAnsiText(r, t);
  return stripAnsi(n);
}
export { StaticFrameContext, RenderOnceAndExit, renderAndWaitForExit, renderToAnsiText, renderToPlainText };

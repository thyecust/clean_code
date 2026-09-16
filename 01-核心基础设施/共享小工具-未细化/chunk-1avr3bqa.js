// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { On } from "../安全文件系统(FS加固)/chunk-h64ek850.js";
import { b, z, n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { mkdir as v, readFile as g } from "fs/promises";
import { dirname as P } from "path";
function T$(e, f, c) {
  let {
    defaultValue: a,
    mode: T,
    ensureDir: s = !1,
    indent: p,
    trailingNewline: w = !1,
  } = c;
  function u() {
    return S(a) ? a() : a;
  }
  async function m() {
    let t;
    try {
      t = await g(e, "utf8");
    } catch (i) {
      if (W(i)) return u();
      throw i;
    }
    let r;
    try {
      r = z(t);
    } catch (i) {
      return (
        n(`jsonStore: ${e} is not valid JSON: ${i}`, { level: "warn" }),
        u()
      );
    }
    let o = f().safeParse(r);
    if (!o.success)
      return (
        n(`jsonStore: ${e} failed schema validation: ${o.error.message}`, {
          level: "warn",
        }),
        u()
      );
    return o.data;
  }
  async function d(t) {
    if (s !== !1)
      await v(P(e), { recursive: !0, mode: s === !0 ? void 0 : s.mode });
    let r =
      b(t, null, p) +
      (w
        ? `
`
        : "");
    await On(e, r, T);
  }
  let l = Promise.resolve();
  function y(t) {
    let r = l.then(async () => {
      let o = t(await m());
      return (await d(o), o);
    });
    return (
      (l = r.then(
        () => {
          return;
        },
        () => {
          return;
        },
      )),
      r
    );
  }
  return {
    path() {
      return e;
    },
    read: m,
    write: d,
    update: y,
  };
}
function S(e) {
  return typeof e === "function";
}
export { T$ };

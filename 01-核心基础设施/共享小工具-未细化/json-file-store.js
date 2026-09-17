// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { writeFileAtomic } from "../安全文件系统(FS加固)/atomic-file-write.js";
import { jsonStringify, jsonParse, logForDebugging } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { mkdir, readFile } from "fs/promises";
import { dirname } from "path";
function createJsonFileStore(e, f, c) {
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
      t = await readFile(e, "utf8");
    } catch (i) {
      if (W(i)) return u();
      throw i;
    }
    let r;
    try {
      r = jsonParse(t);
    } catch (i) {
      return (
        logForDebugging(`jsonStore: ${e} is not valid JSON: ${i}`, { level: "warn" }),
        u()
      );
    }
    let o = f().safeParse(r);
    if (!o.success)
      return (
        logForDebugging(`jsonStore: ${e} failed schema validation: ${o.error.message}`, {
          level: "warn",
        }),
        u()
      );
    return o.data;
  }
  async function d(t) {
    if (s !== !1)
      await mkdir(dirname(e), { recursive: !0, mode: s === !0 ? void 0 : s.mode });
    let r =
      jsonStringify(t, null, p) +
      (w
        ? `
`
        : "");
    await writeFileAtomic(e, r, T);
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
export { createJsonFileStore };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { l, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify, jsonParse } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getCwd } from "./cwd-context.js";
import { bgSupervisorNoun, daemonHint } from "./agent-view-feature-gates.js";
import { redactDaemonNonce, getControlSocketPath } from "../../02-功能模块/后台任务-Shell管理/chunk-djserjj5.js";
import { BG_PROTO } from "../../02-功能模块/后台任务-Shell管理/chunk-7wsy8vxb.js";
import { readStreamLines } from "./read-stream-lines.js";
import { connect } from "net";
import { StringDecoder } from "string_decoder";
async function controlRequest(f, a) {
  let r;
  try {
    r = connect(getControlSocketPath());
  } catch (t) {
    return { ok: !1, code: "ENOCONN", error: redactDaemonNonce(l(t)), errno: A(t) };
  }
  let o = a?.timeoutMs ?? 5000,
    e,
    s = new Promise((t) => {
      e = t;
    }),
    u = !1,
    n = !1,
    d = (t) => {
      if (u) return;
      ((u = !0), r.destroy(), e(t));
    };
  (r.setTimeout(o, () =>
    d({
      ok: !1,
      code: "ETIMEOUT",
      error: "control socket timeout",
      connected: n,
    }),
  ),
    r.on("error", (t) =>
      d({
        ok: !1,
        code: "ENOCONN",
        error: redactDaemonNonce(l(t)),
        connected: n,
        errno: A(t),
      }),
    ),
    r.once("connect", () => {
      ((n = !0),
        r.write(
          jsonStringify(f) +
            `
`,
        ));
    }));
  let c = new StringDecoder("utf8"),
    i = "";
  return (
    r.on("data", (t) => {
      i += c.write(t);
      let p = i.indexOf(`
`);
      if (p < 0) return;
      let C = i.slice(0, p);
      try {
        d(jsonParse(C));
      } catch (y) {
        d({ ok: !1, code: "ENOCONN", error: redactDaemonNonce(l(y)), connected: n });
      }
    }),
    r.once("close", () => {
      if (!u)
        d({
          ok: !1,
          code: "ENOCONN",
          error:
            "connection dropped mid-request \u2014 it may have restarted; retry",
          connected: n,
        });
    }),
    s
  );
}
function openDaemonLease(f) {
  let a = { label: f, cwd: getCwd(), pid: process.pid },
    r = !1,
    o = null,
    e = null,
    s = () => {
      if (r) return;
      try {
        o = connect(getControlSocketPath());
      } catch {
        ((o = null), (e = setTimeout(s, 1000)), e.unref());
        return;
      }
      (o.on("error", () => o?.destroy()),
        o.once("connect", () =>
          o?.write(
            jsonStringify({ proto: BG_PROTO, op: "lease", client: a }) +
              `
`,
          ),
        ),
        o.on("data", () => {}),
        o.once("close", () => {
          if (((o = null), r)) return;
          ((e = setTimeout(s, 1000)), e.unref());
        }),
        o.unref());
    };
  return (
    s(),
    () => {
      if (((r = !0), e)) clearTimeout(e);
      o?.destroy();
    }
  );
}
function subscribeControl(f, a, r, o) {
  let e;
  try {
    e = connect(getControlSocketPath());
  } catch (c) {
    return (queueMicrotask(() => o(redactDaemonNonce(l(c)))), () => {});
  }
  let s = !1,
    u = !1,
    n = (c) => {
      if (s) return;
      ((s = !0), o(c));
    };
  (e.setTimeout(1e4, () => {
    if (!u)
      (n(`${bgSupervisorNoun()} did not respond \u2014 it may be stalled${daemonHint("restart")}`),
        e.destroy());
  }),
    e.on("error", (c) => n(redactDaemonNonce(l(c)))),
    e.on("close", () => n("control socket closed")),
    e.on("connect", () =>
      e.write(
        jsonStringify({ proto: BG_PROTO, op: "subscribe", short: f, tail: a }) +
          `
`,
      ),
    ));
  let d = readStreamLines(e, (c) => {
    if (!u) ((u = !0), e.setTimeout(0));
    try {
      let i = jsonParse(c);
      if ("ok" in i && i.ok === !1) n(i.error);
      else r(i);
    } catch {}
  });
  return () => {
    ((s = !0), d(), e.destroy());
  };
}
export { controlRequest, openDaemonLease, subscribeControl };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import {
  _Rt,
  yRt,
  Met,
  zxn,
  Iar,
  Par,
  Oar,
  q5t,
  Dar,
  xBe,
  Lar,
} from "../共享小工具-未细化/chunk-24x3spwe.js";
import { execFile as S } from "child_process";
import {
  accessSync as p,
  closeSync as k,
  constants as w,
  openSync as E,
  readSync as y,
} from "fs";
class f {
  promise = null;
  start() {
    if (this.promise) return;
    this.promise = hRt();
  }
  reset() {
    this.promise = null;
  }
}
var g = new f();
function _(t) {
  if (!t) return { status: "ok", exitCode: 0, errno: null, signal: null };
  let n = t,
    e = typeof n.signal === "string" && n.signal ? n.signal : null;
  if (typeof n.code === "string")
    return {
      status: "spawn_error",
      exitCode: null,
      errno: n.code,
      signal: null,
    };
  if (n.killed === !0)
    return { status: "timeout", exitCode: null, errno: null, signal: e };
  if (e) return { status: "killed", exitCode: null, errno: null, signal: e };
  return {
    status: "exited",
    exitCode: typeof n.code === "number" ? n.code : null,
    errno: null,
    signal: null,
  };
}
function a(t, n, e) {
  let u = Date.now();
  return new Promise((o) => {
    try {
      S(
        t,
        n,
        {
          encoding: "utf-8",
          timeout: Oar,
          windowsHide: !0,
          ...(e !== void 0 && { maxBuffer: e }),
        },
        (s, r) => {
          o({ stdout: r ?? "", ..._(s), durationMs: Date.now() - u });
        },
      );
    } catch (s) {
      let r = s.code;
      o({
        stdout: "",
        status: "spawn_error",
        exitCode: null,
        errno: typeof r === "string" ? r : null,
        signal: null,
        durationMs: Date.now() - u,
      });
    }
  });
}
function m(t) {
  return {
    status: t.status,
    exitCode: t.exitCode,
    errno: t.errno,
    signal: t.signal,
    durationMs: t.durationMs,
  };
}
function R(t) {
  return t.status === "ok" || (t.status === "exited" && t.exitCode !== null);
}
function x(t) {
  return (
    t.status === "spawn_error" &&
    t.errno === "ERR_CHILD_PROCESS_STDIO_MAXBUFFER"
  );
}
function O(t) {
  let n;
  try {
    return ((n = E(t, "r")), y(n, Buffer.alloc(1), 0, 1, 0), null);
  } catch (e) {
    return {
      code: e && typeof e === "object" && "code" in e ? e.code : void 0,
      message: e instanceof Error ? e.message : String(e),
    };
  } finally {
    if (n !== void 0)
      try {
        k(n);
      } catch {}
  }
}
function hRt() {
  return (async () => {
    {
      let t = Lar(),
        e = (
          await Promise.all(
            t.map(async ({ path: o, ...s }) => {
              try {
                p(o, w.R_OK);
              } catch (l) {
                let c =
                  l && typeof l === "object" && "code" in l ? l.code : void 0;
                if (c === "ENOENT" || c === "ENOTDIR") return null;
                return {
                  stdout: null,
                  unreadReason: l instanceof Error ? l.message : String(l),
                  ...s,
                };
              }
              let r = await a(zxn, [...Iar, o], q5t);
              if (!R(r))
                return {
                  stdout: null,
                  unreadReason: "plutil did not finish converting it",
                  ...s,
                };
              if (r.status === "ok") return { stdout: r.stdout, ...s };
              let d = await a(zxn, [...Par, o]);
              if (!R(d))
                return {
                  stdout: null,
                  unreadReason: "plutil did not finish checking it",
                  ...s,
                };
              if (d.status === "ok")
                return {
                  stdout: null,
                  unreadReason:
                    "it holds a value plutil cannot convert to JSON (a date or data value)",
                  ...s,
                };
              let i = O(o);
              if (i !== null) {
                if (i.code === "ENOENT" || i.code === "ENOTDIR") return null;
                return { stdout: null, unreadReason: i.message, ...s };
              }
              return { stdout: "", ...s };
            }),
          )
        ).filter((o) => o !== null),
        u = e.findIndex((o) => o.stdout !== null);
      return {
        plistStdouts: u === -1 ? e : e.slice(0, u + 1),
        hklmStdout: null,
        hkcuStdout: null,
        outcomes: { hklm: null, hkcu: null },
      };
    }
    if (xBe()) return h(Dar);
    return {
      plistStdouts: null,
      hklmStdout: null,
      hkcuStdout: null,
      outcomes: { hklm: null, hkcu: null },
    };
  })();
}
async function h(t) {
  let n = (o) => a(t, ["query", o, "/v", Met], q5t),
    [e, u] = await Promise.all([n(_Rt), n(yRt)]);
  return {
    plistStdouts: null,
    hklmStdout: e.status === "ok" ? e.stdout : null,
    ...(x(e) && { hklmUnreadReason: `the value exceeds ${q5t / 1048576} MiB` }),
    hkcuStdout: u.status === "ok" ? u.stdout : null,
    outcomes: { hklm: m(e), hkcu: m(u) },
  };
}
function Gxn() {
  g.start();
}
function qxn() {
  return g.promise;
}
export { hRt, Gxn, qxn };

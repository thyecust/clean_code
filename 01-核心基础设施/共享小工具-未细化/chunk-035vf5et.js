// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { z } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { uir } from "./chunk-z36ns74j.js";
import { P } from "../核心工具-路径与平台/chunk-13kdp2ag.js";
import { hostname as e } from "os";
class o {
  pidSpace = null;
  pidDomain = void 0;
  uidsCollapse = null;
}
var zse = new o();
function UZe() {
  if (zse.pidSpace === null) {
    let n = "";
    zse.pidSpace = `${e()}${n === "" ? "" : "#" + n}`;
  }
  return zse.pidSpace;
}
function wq() {
  return (
    (zse.pidDomain ??= (async () => uir(P()))().catch((n) => {
      throw ((zse.pidDomain = void 0), n);
    })),
    zse.pidDomain
  );
}
import { timingSafeEqual as u } from "crypto";
import { readFile as a } from "fs/promises";
async function RRe(n) {
  try {
    let t = z(await a(n, "utf8"));
    if (t === null || typeof t !== "object") return;
    let i = {};
    if ("rvAuth" in t && typeof t.rvAuth === "string") i.rvAuth = t.rvAuth;
    if ("ptyAuth" in t && typeof t.ptyAuth === "string") i.ptyAuth = t.ptyAuth;
    if ("claimAuth" in t && typeof t.claimAuth === "string")
      i.claimAuth = t.claimAuth;
    return i;
  } catch {
    return;
  }
}
function $R(n, t) {
  if (typeof n !== "string" || !t || n.length === 0) return !1;
  let i = Buffer.from(n),
    r = Buffer.from(t);
  if (i.length !== r.length) return !1;
  return u(i, r);
}
export { zse, UZe, wq, RRe, $R };

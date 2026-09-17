// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { jsonParse } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getPidDomain } from "./process-record.js";
import { getCurrentPlatform } from "../核心工具-路径与平台/platform-detection.js";
import { hostname } from "os";
class o {
  pidSpace = null;
  pidDomain = void 0;
  uidsCollapse = null;
}
var processIdentity = new o();
function ownPidSpace() {
  if (processIdentity.pidSpace === null) {
    let n = "";
    processIdentity.pidSpace = `${hostname()}${n === "" ? "" : "#" + n}`;
  }
  return processIdentity.pidSpace;
}
function ownPidDomain() {
  return (
    (processIdentity.pidDomain ??= (async () => getPidDomain(getCurrentPlatform()))().catch((n) => {
      throw ((processIdentity.pidDomain = void 0), n);
    })),
    processIdentity.pidDomain
  );
}
import { timingSafeEqual } from "crypto";
import { readFile } from "fs/promises";
async function readSocketTokenFile(n) {
  try {
    let t = jsonParse(await readFile(n, "utf8"));
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
function timingSafeStringEqual(n, t) {
  if (typeof n !== "string" || !t || n.length === 0) return !1;
  let i = Buffer.from(n),
    r = Buffer.from(t);
  if (i.length !== r.length) return !1;
  return timingSafeEqual(i, r);
}
export { processIdentity, ownPidSpace, ownPidDomain, readSocketTokenFile, timingSafeStringEqual };

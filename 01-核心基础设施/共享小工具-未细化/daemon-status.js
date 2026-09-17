// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { getFileStorage } from "./file-storage.js";
import { STORAGE_KEYS } from "../../02-功能模块/Teammates团队/storage-keys.js";
import { isHoverRestEnabled } from "./chunk-h62vxw7j.js";
import { jsonStringify, logForDebugging } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getClaudeConfigDir } from "../../02-功能模块/模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js";
import { isSameProcessAsync, ownProcStart } from "../核心工具-进程与信号/process-identity.js";
import { xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { join as u } from "path";
function getDaemonStatusPath() {
  return u(getClaudeConfigDir(), "daemon.status.json");
}
function getDaemonStatusStateKey() {
  return STORAGE_KEYS.state("daemon-status");
}
async function writeDaemonStatus(e, r) {
  let o = {
    supervisorPid: process.pid,
    supervisorProcStart: ownProcStart(),
    writtenAt: Date.now(),
    workers: e,
  };
  if (isHoverRestEnabled() && r !== void 0) {
    try {
      let t = await r.write(getDaemonStatusStateKey(), jsonStringify(o, null, 2), {
        mode: 438 & ~process.umask(),
      });
      if (!t.ok) logForDebugging(`writeDaemonStatus: ${t.error.code}`);
    } catch (t) {
      logForDebugging(`writeDaemonStatus: ${l(t)}`);
    }
    return;
  }
  try {
    await getFileStorage().atomicWrite(getDaemonStatusPath(), jsonStringify(o, null, 2));
  } catch {}
}
async function removeDaemonStatus(e) {
  if (isHoverRestEnabled() && e !== void 0) {
    try {
      let r = await e.delete(getDaemonStatusStateKey());
      if (!r.ok) logForDebugging(`removeDaemonStatus: ${r.error.code}`);
    } catch (r) {
      logForDebugging(`removeDaemonStatus: ${l(r)}`);
    }
    return;
  }
  try {
    await getFileStorage().delete(getDaemonStatusPath());
  } catch {}
}
async function readDaemonStatus(e) {
  let r;
  if (isHoverRestEnabled() && e !== void 0) {
    let a;
    try {
      a = await e.readText([getDaemonStatusStateKey()]);
    } catch {
      return null;
    }
    if (!a.ok) return null;
    let s = a.value.items[0];
    if (!s.found) return null;
    r = s.value;
  } else
    try {
      r = await getFileStorage().read(getDaemonStatusPath());
    } catch {
      return null;
    }
  let o = xt(r, !1);
  if (!o || typeof o !== "object") return null;
  let t = o;
  if (
    typeof t.supervisorPid !== "number" ||
    typeof t.workers !== "object" ||
    t.workers === null
  )
    return null;
  try {
    process.kill(t.supervisorPid, 0);
  } catch {
    return null;
  }
  let i =
    typeof t.supervisorProcStart === "string" ? t.supervisorProcStart : void 0;
  if (!(await isSameProcessAsync(t.supervisorPid, i))) return null;
  return o;
}
export { getDaemonStatusPath, getDaemonStatusStateKey, writeDaemonStatus, removeDaemonStatus, readDaemonStatus };

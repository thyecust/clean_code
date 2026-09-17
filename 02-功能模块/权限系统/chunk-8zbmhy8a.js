// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { invalidateJobStateCache, readJobState, syncRespawnFlag } from "../后台任务-Shell管理/chunk-7wsy8vxb.js";
var r = "--inherit-permission-mode";
function s(e) {
  return e === r || e.startsWith(`${r}=`);
}
class m {
  mode;
}
var u = new j(() => new m());
function f() {
  return u.of(B().host);
}
function v3n({ inheritPermissionModeCli: e, resolvedMode: n, storageV5: i }) {
  if (!e) return;
  ((f().mode = n),
    syncRespawnFlag("--permission-mode", [r], n, void 0, i).catch((o) => logError(o)));
}
async function R3n(e) {
  let n = f(),
    i = n.mode;
  if (i === void 0) return;
  let o = a.CLAUDE_JOB_DIR;
  if (!o || a.CLAUDE_CODE_SESSION_KIND !== "bg") {
    n.mode = void 0;
    return;
  }
  let t = await readJobState(o, e);
  if (!t?.respawnFlags) return;
  if (!t.respawnFlags.some(s)) {
    n.mode = void 0;
    return;
  }
  (await syncRespawnFlag("--permission-mode", [r], i, void 0, e, void 0, (p) => p.some(s)),
    invalidateJobStateCache(o));
  let d = await readJobState(o, e);
  if (d?.respawnFlags && !d.respawnFlags.some(s)) n.mode = void 0;
}
export { v3n, R3n };

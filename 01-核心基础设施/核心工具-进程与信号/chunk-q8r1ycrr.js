// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logEvent } from "../遥测-OpenTelemetry/analytics-event-queue.js";
import { fromEnum } from "../遥测-OpenTelemetry/analytics-fields.js";
import { getProcessStartTimeAsync } from "./process-identity.js";
import { killProcessTree } from "./kill-process-tree.js";
import { readFile } from "fs/promises";
class n {
  firedSites = new Set();
  fire(e) {
    if (this.firedSites.has(e)) return;
    (this.firedSites.add(e),
      logEvent("tengu_dead_probe_adopt_ticks_token", { site: fromEnum(e) }));
  }
  reset() {
    this.firedSites.clear();
  }
}
var l = new j(() => new n());
function f() {
  return l.of(B().host);
}
function fireDeadProbeAdoptTick(e) {
  f().fire(e);
}
async function getProcessStartTimeTicksAsync(e) {
  return null;
}
async function killIfSameProcess(e, t, r) {
  if (r !== void 0) {
    if ((await getProcessStartTimeAsync(e, { skipCache: !0 })) !== r) return;
  } else if (t !== void 0) {
    if ((fireDeadProbeAdoptTick("kill_gate"), (await getProcessStartTimeTicksAsync(e)) !== t)) return;
  } else return;
  await killProcessTree(e, "SIGTERM").catch(() => {});
}
export { fireDeadProbeAdoptTick, getProcessStartTimeTicksAsync, killIfSameProcess };

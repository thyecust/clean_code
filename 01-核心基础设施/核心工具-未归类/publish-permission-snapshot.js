// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
var e = {
  allowRules: [],
  denyRules: [],
  sessionDenyRules: [],
  toolsNarrowingDenyRules: [],
  additionalWorkingDirectories: new Map(),
  launchedInAutoMode: !1,
};
class PermissionSnapshot {
  snapshot = e;
  get() {
    return this.snapshot;
  }
  publish(o) {
    let s = a.CLAUDE_CODE_SESSION_KIND === "bg";
    this.snapshot = {
      allowRules: s ? [] : [...(o.alwaysAllowRules.cliArg ?? [])],
      denyRules: [...(o.alwaysDenyRules.cliArg ?? [])],
      sessionDenyRules: [...(o.alwaysDenyRules.session ?? [])],
      toolsNarrowingDenyRules: [...(o.alwaysDenyRules.toolsNarrowing ?? [])],
      additionalWorkingDirectories: new Map(
        s
          ? [...o.additionalWorkingDirectories].filter(
              ([, n]) => n.source === "session",
            )
          : o.additionalWorkingDirectories,
      ),
      launchedInAutoMode: o.mode === "auto",
    };
  }
  reset() {
    this.snapshot = e;
  }
}
var permissionSnapshotsByHost = new j(() => new PermissionSnapshot());
function r() {
  return permissionSnapshotsByHost.of(B().host);
}
function publishPermissionSnapshot(o) {
  r().publish(o);
}
export { publishPermissionSnapshot };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
class t {
  inFlightSnapshot = { tasks: 0, queued: 0, kinds: [], items: [] };
  inFlightSnapshotChanged = Le();
  pendingStructuredResult = void 0;
  relocatedCwd = void 0;
  ownStateWriteDepth = 0;
  warnedUnknownDisabledSurface = !1;
  publishInFlightSnapshot(n) {
    this.inFlightSnapshot = n;
    try {
      this.inFlightSnapshotChanged.emit();
    } catch {}
  }
  reset() {
    ((this.pendingStructuredResult = void 0),
      (this.relocatedCwd = void 0),
      (this.warnedUnknownDisabledSurface = !1),
      this.publishInFlightSnapshot({
        tasks: 0,
        queued: 0,
        kinds: [],
        items: [],
      }));
  }
}
var e = new j(() => new t());
function KI() {
  return e.of(B().host);
}
export { KI };

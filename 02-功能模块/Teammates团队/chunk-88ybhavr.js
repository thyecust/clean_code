// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { Eo } from "../上下文压缩-Compact/chunk-mxt9bjz3.js";
var Pft = "in-process";
class wGn {
  captured = null;
  cliOverride = null;
  setCliOverride(e) {
    this.cliOverride = e;
  }
  capture(e) {
    this.captured = e;
  }
  replaceWith(e) {
    ((this.captured = e), (this.cliOverride = null));
  }
}
var bpr = new j(() => new wGn());
function t() {
  return bpr.of(B().host);
}
function d_r(e) {
  t().setCliOverride(e);
}
function Iun() {
  return t().cliOverride;
}
function Pun(e) {
  (t().replaceWith(e),
    n(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`));
}
function Oun() {
  return t().captured !== null;
}
function q$t() {
  let e = t();
  if (e.cliOverride)
    (e.capture(e.cliOverride),
      n(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`));
  else
    (e.capture(Eo("teammateMode", Pft).value),
      n(`[TeammateModeSnapshot] Captured from config: ${e.captured}`));
}
function MOe() {
  let e = t();
  if (e.captured === null)
    (h(
      Error(
        "getTeammateModeFromSnapshot called before capture - this indicates an initialization bug",
      ),
    ),
      q$t());
  return e.captured ?? Pft;
}
export { Pft, wGn, bpr, d_r, Iun, Pun, Oun, q$t, MOe };

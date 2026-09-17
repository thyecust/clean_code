// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Gt } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { ge } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError as h } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { Ger } from "./chunk-px58ry6q.js";
class o {
  active = void 0;
  transportPersists = void 0;
  setActive(r) {
    ((this.active = r), (this.transportPersists = r?.persistsOutboundFrames));
  }
  remoteBridgeLive = null;
  bridgeMayBeLive() {
    return this.remoteBridgeLive === null || this.remoteBridgeLive();
  }
  markLocalTransport() {
    this.transportPersists = !1;
  }
}
var LE = new Gt(() => new o());
function ME(r) {
  return Ger() && LE.of(r).transportPersists !== !1;
}
function lo(r) {
  return ME(r) || LE.of(r).bridgeMayBeLive();
}
function Nyn(r, e) {
  if (!ME(r)) return e;
  return e.map((t) => ({ name: t.name, status: t.status }));
}
function OYn(r, e) {
  return ME(r) ? [] : e;
}
function E3t(r, e, t, i = "last") {
  try {
    if (!ME(r)) return i === "first" ? [e, ...t] : [...t, e];
    for (let s of t)
      n(`error_during_execution detail: ${s}`, { level: "error" });
    return [e];
  } catch (s) {
    return (h(ge(s)), [e]);
  }
}
function UI(r, e, t) {
  return ME(r) ? t : e;
}
export { LE, ME, lo, Nyn, OYn, E3t, UI };

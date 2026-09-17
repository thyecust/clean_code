// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { MCP_ELICITATION_DIALOG, MCP_ELICITATION_WAITING_DIALOG } from "../../01-核心基础设施/共享小工具-未细化/mcp-elicitation-dialogs.js";
import { logMCPError, logMCPDebug } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { jsonStringify } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
class g {
  urlFlows = new Map();
  deps;
  constructor(e) {
    this.deps = e;
  }
  rebind(e) {
    this.deps = e;
  }
  handle = async (e, t) => {
    let { signal: o } = t,
      { serverName: r } = this.deps,
      s =
        "transportErrorState" in t
          ? t.transportErrorState
          : this.deps.transportErrorState;
    if (s) s.pendingElicitations++;
    logMCPDebug(r, `Received elicitation request: ${jsonStringify(e)}`);
    let { params: a } = e,
      c = w(a);
    logEvent("tengu_mcp_elicitation_shown", { mode: fromEnum(c) });
    try {
      let n = await this.deps.runElicitationHooks(r, a, o);
      if (n)
        return (
          logMCPDebug(r, `Elicitation resolved by hook: ${jsonStringify(n)}`),
          logEvent("tengu_mcp_elicitation_response", {
            mode: fromEnum(c),
            action: fromEnum(n.action),
          }),
          logFeatureOk("mcp_elicitation_handle"),
          n
        );
      let l = a.mode === "url" ? a.elicitationId : void 0,
        { result: d, flow: E } = await this.ask(a, o, c, l, s);
      logMCPDebug(r, `Elicitation response: ${jsonStringify(d)}`);
      let p = await this.deps.runElicitationResultHooks(r, d, o, c, l);
      if (a.mode === "url" && d.action === "accept" && p.action !== "accept")
        this.abandonWaiting(l, E);
      return (logFeatureOk("mcp_elicitation_handle"), p);
    } catch (n) {
      return (
        logMCPError(r, `Elicitation error: ${n}`),
        logFeatureBad("mcp_elicitation_handle", "handler_error"),
        { action: "cancel" }
      );
    } finally {
      if (s)
        (s.pendingElicitations--, (s.lastElicitationClosedAt = Date.now()));
    }
  };
  complete = (e) => {
    let t = this.urlFlows.get(e);
    if (!t || t.size === 0) return !1;
    for (let o of t) ((o.completed = !0), o.closeWaiting?.());
    return !0;
  };
  abandonWaiting(e, t) {
    (t?.closeWaiting?.(), this.forget(e, t));
  }
  async ask(e, t, o, r, s) {
    if (t.aborted) return { result: { action: "cancel" }, flow: void 0 };
    let { serverName: a, requestDialog: c } = this.deps,
      n;
    if (r !== void 0) {
      n = { completed: !1, closeWaiting: void 0 };
      let d = this.urlFlows.get(r);
      if (d) d.add(n);
      else this.urlFlows.set(r, new Set([n]));
    }
    let l = await c(
      MCP_ELICITATION_DIALOG,
      { serverName: a, params: e },
      { place: "under", signal: t },
    );
    if (!t.aborted)
      logEvent("tengu_mcp_elicitation_response", { mode: fromEnum(o), action: fromEnum(l.action) });
    if (e.mode === "url" && l.action === "accept")
      if (n?.completed) this.forget(r, n);
      else this.showWaiting(e, r, n, t, s);
    else this.forget(r, n);
    return { result: l, flow: n };
  }
  async showWaiting(e, t, o, r, s) {
    let a = new AbortController();
    if (o) o.closeWaiting = () => a.abort();
    if (s) s.pendingElicitations++;
    try {
      await this.deps.requestDialog(
        MCP_ELICITATION_WAITING_DIALOG,
        {
          serverName: this.deps.serverName,
          params: e,
          waitingState:
            t !== void 0 ? { actionLabel: "Skip confirmation" } : void 0,
        },
        { signal: AbortSignal.any([a.signal, r]), succeeds: !0 },
      );
    } finally {
      if (s)
        (s.pendingElicitations--, (s.lastElicitationClosedAt = Date.now()));
    }
    this.forget(t, o);
  }
  forget(e, t) {
    if (e === void 0 || t === void 0) return;
    let o = this.urlFlows.get(e);
    if (!o) return;
    if ((o.delete(t), o.size === 0)) this.urlFlows.delete(e);
  }
}
function w(e) {
  return e.mode === "url" ? "url" : "form";
}
var m = new WeakMap();
function getOrCreateElicitationHandler(e, t) {
  let o = m.get(e);
  if (o) return (o.rebind(t), o);
  let r = new g(t);
  return (m.set(e, r), r);
}
export { getOrCreateElicitationHandler };

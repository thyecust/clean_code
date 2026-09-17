// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { l0 } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Qs } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { hd, G2, GS } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { xs } from "./chunk-mrfx53ye.js";
function f(r, i) {
  if (Object.hasOwn(r, i)) return r[i];
  return Object.values(r).find(
    (t) => hd(t) && t.identity.resumableAgentId === i,
  );
}
function pruneAgentNameRegistry(r, i) {
  return new Map(
    [...r].filter(([, t]) => {
      let e = f(i, t);
      if (e === void 0) return !1;
      if (!xs(e.status)) return !0;
      return (
        GS(e) &&
        "keepaliveReasons" in e &&
        e.keepaliveReasons !== void 0 &&
        [...e.keepaliveReasons].some((s) => s !== G2)
      );
    }),
  );
}
var noopAgentLifecycle = {
  markTypeInvoked() {},
  registerName() {},
  allocateName(r) {
    return r;
  },
  clearTodos() {},
  setTeammate() {},
  setSendMessagePin() {},
};
function createAgentLifecycle(r, i) {
  return {
    markTypeInvoked(t) {
      i((e) =>
        e.agentTypesInvokedThisSession.has(t)
          ? e
          : {
              ...e,
              agentTypesInvokedThisSession: new Set(
                e.agentTypesInvokedThisSession,
              ).add(t),
            },
      );
    },
    registerName(t, e) {
      if (l0(t)) {
        n(
          `[registerName] refused reserved or agent-id-shaped name "${t}" for ${e}`,
        );
        return;
      }
      i((s) => {
        if (s.agentNameRegistry.get(t) === e) return s;
        let a = new Map(s.agentNameRegistry);
        return (a.set(t, e), { ...s, agentNameRegistry: a });
      });
    },
    allocateName(t) {
      let e = c(t),
        s = r(),
        a = s.agentNameRegistry,
        g = new Set(
          Object.values(s.teamContext?.teammates ?? {}).map((o) => o.name),
        );
      for (let o = 1; ; o++) {
        let m = o === 1 ? e : `${e}-${o}`;
        if (l0(m) || g.has(m)) continue;
        let d = a.get(m);
        if (d === void 0 || f(s.tasks, d) === void 0) return m;
      }
    },
    clearTodos(t) {
      i((e) => {
        if (!(t in e.todos)) return e;
        let { [t]: s, ...a } = e.todos;
        return { ...e, todos: a };
      });
    },
    setSendMessagePin(t, e) {
      i((s) => {
        let a = Object.hasOwn(s.sendMessagePins, t)
          ? s.sendMessagePins[t]
          : void 0;
        if (Qs(a, e)) return s;
        return { ...s, sendMessagePins: { ...s.sendMessagePins, [t]: e } };
      });
    },
    setTeammate(t, e) {
      if (e !== void 0 && l0(e.name)) {
        n(
          `[setTeammate] refused reserved or agent-id-shaped teammate name "${e.name}" for ${t}`,
        );
        return;
      }
      i((s) => {
        let a = s.teamContext;
        if (!a) return s;
        let g = a.teammates?.[t];
        if (e === void 0) {
          if (!g) return s;
          let { [t]: o, ...m } = a.teammates;
          return { ...s, teamContext: { ...a, teammates: m } };
        }
        if (g === e) return s;
        return {
          ...s,
          teamContext: { ...a, teammates: { ...a.teammates, [t]: e } },
        };
      });
    },
  };
}
function c(r) {
  let i = r
    .replace(/[^A-Za-z0-9_-]+/g, "-")
    .replace(/^-+/, "")
    .slice(0, 64);
  return i.length > 0 ? i : "agent";
}
export { pruneAgentNameRegistry, noopAgentLifecycle, createAgentLifecycle };

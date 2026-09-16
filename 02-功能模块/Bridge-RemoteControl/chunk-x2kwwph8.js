// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { S } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { f } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import {
  qo,
  zp,
  Di,
  oV,
  WF,
  I2,
  Re,
  em,
  LI,
  cAe,
  uAe,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { kbe, tH, xbe } from "../用量额度-限额/chunk-1bfn62xh.js";
import { Mu } from "../MCP客户端/chunk-0mwqsv0r.js";
function bgr(l) {
  let { inputString: t, context: n, uuid: r, origin: m } = l,
    a = p(t, n.options.commands);
  if (a === void 0) return { kind: "none" };
  let { parsed: s, cmd: e, folded: o, effectiveCmd: d } = a;
  if (cAe(d))
    return {
      kind: "updated",
      effectiveSkipSlash: !1,
      effectiveInput: t,
      effectiveContext: n,
    };
  let c = uAe(d);
  if (c && zp(d))
    return {
      kind: "updated",
      effectiveSkipSlash: !1,
      effectiveInput: o
        ? `/${c.name}${o.args ? ` ${o.args}` : ""}`
        : t.replace(/^\/\S+/, `/${c.name}`),
      effectiveContext: {
        ...n,
        options: {
          ...n.options,
          commands: [{ ...c, isEnabled: () => zp(d) }, ...n.options.commands],
        },
      },
    };
  let { sanitizedName: g, skillNameHash: v } = WF({
    rawName: e.name,
    canonicalName: e.name,
    isMcp: e.loadedFrom === "mcp",
    isBuiltIn: LI().has(e.name),
    isBundled: e.type === "prompt" && e.source === "bundled",
    isOfficial: e.type === "prompt" && I2(e),
  });
  (i("tengu_slash_command_unavailable", {
    command_name: g,
    ...v,
    surface: S("bridge"),
    reason: S("unavailable_over_remote_control"),
  }),
    f("cmd_dispatch", "cmd_unavailable_bridge"));
  let u = o
      ? `/${qo(e)} ${o.consumedToken} isn't available over Remote Control.`
      : `/${qo(d)} isn't available over Remote Control.`,
    C =
      oV(e, s.args) || oV(d, o ? o.args : s.args) ? `/${s.commandName} ***` : t;
  return {
    kind: "blocked",
    result: {
      messages: [
        Re({ content: C, uuid: r, origin: m }),
        em(`<local-command-stdout>${u}</local-command-stdout>`),
      ],
      shouldQuery: !1,
      resultText: u,
    },
  };
}
function p(l, t) {
  let n = tH(l);
  if (n === null) return;
  let r = n.commandName;
  if (Mu()) {
    let o = kbe(r, t);
    if (o) r = o.commandName;
  }
  let m = Di(r, t);
  if (!m) return;
  let a = xbe(m, n.args),
    s = a ? Di(a.targetName, t) : void 0,
    e =
      a && s && zp(s)
        ? { command: s, consumedToken: a.consumedToken, args: a.remainingArgs }
        : void 0;
  return { parsed: n, cmd: m, folded: e, effectiveCmd: e ? e.command : m };
}
function cen(l, t) {
  let n = p(l, t);
  if (n === void 0) return !0;
  let { effectiveCmd: r } = n;
  return r.type === "prompt" && cAe(r);
}
export { bgr, cen };

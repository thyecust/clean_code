// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ym } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Vhe } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { gt, qn } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { ye } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { Pe } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { go, YRe } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import { O1t, R9 } from "./chunk-rbjz1q03.js";
import { Abe } from "../../01-核心基础设施/共享小工具-未细化/chunk-4bx97hcx.js";
import { og } from "./chunk-33bdfgmx.js";
import { s, c, fe, X, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var VPe = m(() =>
    c({
      method: k("notifications/claude/channel"),
      params: c({ content: s(), meta: fe(s(), s()).optional() }),
    }),
  ),
  P1t = "notifications/claude/channel/permission",
  Hin = m(() =>
    c({
      method: k(P1t),
      params: c({ request_id: s(), behavior: X(["allow", "deny"]) }),
    }),
  ),
  Iin = "notifications/claude/channel/permission_request",
  f = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
function KPe(e, r, i) {
  let o = Object.entries(i ?? {}),
    [a, t] = g(o, ([l]) => f.test(l));
  if (t.length > 0)
    n(
      `[channel] ${e}: dropped ${t.length} meta key(s) that don't match ${f.source}: ${t.map(([l]) => l).join(", ")}`,
      { level: "warn" },
    );
  let p = a.map(([l, d]) => ` ${l}="${go(d)}"`).join(""),
    u = YRe(Vhe, r);
  return `<${Vhe} source="${go(e)}"${p}>
${u}
</${Vhe}>`;
}
function g(e, r) {
  let i = [],
    o = [];
  for (let a of e) (r(a) ? i : o).push(a);
  return [i, o];
}
function Ydt(e) {
  if (e) return { entries: e, source: "org" };
  return { entries: O1t(), source: "ledger" };
}
function Pin(e) {
  return (
    e === "provider" || e === "disabled" || e === "capability" || e === "era"
  );
}
function Ebe(e) {
  if (gt()) {
    let r = qn();
    return (r === "team" || r === "enterprise") && e?.channelsEnabled !== !0;
  }
  return e !== null && e.channelsEnabled !== !0;
}
function ste(e, r) {
  let i = e.split(":");
  return r.find((o) =>
    o.kind === "server" ? e === o.name : i[0] === "plugin" && i[1] === o.name,
  );
}
function XPe(e, r, i, o) {
  if (!Abe(r))
    return {
      action: "skip",
      kind: "capability",
      reason: "server did not declare claude/channel capability",
    };
  if (o === "modern")
    return {
      action: "skip",
      kind: "era",
      reason:
        "connection negotiated a modern protocol revision with no unsolicited notification path",
    };
  if (Pe() !== "firstParty")
    return {
      action: "skip",
      kind: "provider",
      reason: "channels are not available on third-party providers",
    };
  if (!R9())
    return {
      action: "skip",
      kind: "disabled",
      reason: "channels feature is not currently available",
    };
  let a = ye("policySettings");
  if (Ebe(a))
    return {
      action: "skip",
      kind: "policy",
      reason:
        "channels not enabled by org policy (set channelsEnabled: true in managed settings)",
    };
  let t = ste(e, ym());
  if (!t)
    return {
      action: "skip",
      kind: "session",
      reason: `server ${e} not in --channels list for this session`,
    };
  if (t.kind === "plugin") {
    let p = i ? og(i).marketplace : void 0;
    if (p !== t.marketplace)
      return {
        action: "skip",
        kind: "marketplace",
        reason: `you asked for plugin:${t.name}@${t.marketplace} but the installed ${t.name} plugin is from ${p ?? "an unknown source"}`,
      };
    if (!t.dev) {
      let { entries: u, source: l } = Ydt(a?.allowedChannelPlugins);
      if (
        !u.some((d) => d.plugin === t.name && d.marketplace === t.marketplace)
      )
        return {
          action: "skip",
          kind: "allowlist",
          reason:
            l === "org"
              ? `plugin ${t.name}@${t.marketplace} is not on your org's approved channels list (set allowedChannelPlugins in managed settings)`
              : `plugin ${t.name}@${t.marketplace} is not on the approved channels allowlist (use --dangerously-load-development-channels for local dev)`,
        };
    }
  } else if (!t.dev)
    return {
      action: "skip",
      kind: "allowlist",
      reason: `server ${t.name} is not on the approved channels allowlist (use --dangerously-load-development-channels for local dev)`,
    };
  return { action: "register" };
}
export { VPe, P1t, Hin, Iin, KPe, Ydt, Pin, Ebe, ste, XPe };

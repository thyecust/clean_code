// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 92 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ke } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { sleep } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { mi, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { fromEnum } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { HELP_FLAGS, INFO_SUBCOMMAND_ALIASES } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { mayHaveRemoteClient } from "../远程控制-Bridge/chunk-dajvcsw3.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { isConnectedMcpServer, parseMcpToolName, getMcpToolPrefix } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { REMOTE_DEVICES_MCP_SERVER_NAME } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getStringWidth } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { isValidCliNameToken } from "../插件系统/plugin-system-core.js";
import { sanitizeDisplayTextWithoutRedaction, sanitizeDisplayText, isUnconfiguredMcpServer, ToolHostRegistry } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../远程工具执行/remote-tool-protocol.js";
import "../设备注册-Cowork/device-passthrough-meta.js";
import { refreshRemoteToolHosts } from "../远程控制-Bridge/device-bridge-remote-tools.js";
import "../远程控制-Bridge/session-event-transport.js";
import "../远程控制-Bridge/remote-session-host-registry.js";
import "../../01-核心基础设施/核心工具-未归类/request-delivery-errors.js";
import "../../01-核心基础设施/核心工具-未归类/remote-tools-logger.js";
import { getReconnectMcpServer, getToggleMcpServer, getIsMcpServerDisabled } from "../../01-核心基础设施/核心工具-未归类/mcp-control-handlers.js";
import { getMcpServerType, getBlockingMcpServerState, formatDisabledElsewhereMessage, formatDisableNotPersistedMessage, formatBulkTogglePersistWarning, formatStaleDisableMessage } from "./mcp-server-state-messages.js";
import { sanitizeForRelay } from "../远程控制-Bridge/chunk-5ne99rq3.js";
import { countMatching, dedupe } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
function U(t) {
  let c = new Map(),
    g = new Map();
  for (let r of t) {
    if (r.kind !== "remote") continue;
    let S = r.rejectedPassthroughTools?.size ?? 0;
    if (S > 0) g.set(r.name, S);
    for (let w of r.passthroughTools?.values() ?? []) {
      let C = parseMcpToolName(w.localName);
      if (C === null) continue;
      let e = `${r.name}\x00${C.serverName}`,
        d = c.get(e);
      c.set(
        e,
        d === void 0
          ? {
              hostName: r.name,
              hostStatus: Q(r),
              serverName: C.serverName,
              toolCount: 1,
            }
          : { ...d, toolCount: d.toolCount + 1 },
      );
    }
  }
  return {
    servers: [...c.values()].sort(
      (r, S) =>
        r.hostName.localeCompare(S.hostName) ||
        r.serverName.localeCompare(S.serverName),
    ),
    rejectedCounts: g,
  };
}
function Q(t) {
  if (t.protocol.kind === "incompatible") return "incompatible";
  return t.status;
}
var B = {
    connected: "connected",
    cached: "cached (connects on first use)",
    pending: "connecting",
    disabled: "disabled",
    failed: "not connected",
    "needs-auth": "needs authentication",
    "needs-approval": "pending approval",
  },
  j =
    "Usage: /mcp [reconnect|enable|disable [<server>|all]]. With no server name, applies to all.",
  ee = 2500;
async function Oe(t, c) {
  let g = t.trim(),
    r = c.getMcp().clients.filter((o) => o.name !== "ide"),
    S = g.toLowerCase();
  if (!g || INFO_SUBCOMMAND_ALIASES.includes(S)) {
    let o = ke();
    if (o && Boolean(a.CLAUDE_CODE_REMOTE) && !mayHaveRemoteClient(c.session)) {
      let v = c.toolState.get(ToolHostRegistry);
      if (
        (await Promise.race([
          refreshRemoteToolHosts(c, v, "resolve"),
          sleep(ee, c.abortController.signal),
        ]),
        !mayHaveRemoteClient(c.session))
      )
        return s(ne(r, c.getMcp().tools, v));
    }
    if (r.length === 0)
      return s(`No MCP servers are configured. Add one with \`claude mcp add\`.
${j}`);
    let R = countMatching(r, (v) => v.type === "connected"),
      P = countMatching(r, (v) => v.type === "cached"),
      E = countMatching(r, (v) => v.type === "pending"),
      k = countMatching(r, isUnconfiguredMcpServer),
      h = countMatching(r, I),
      M = countMatching(r, (v) => v.type === "disabled"),
      O = r.length - R - P - E - M - k;
    return s(
      `${r.length} MCP server(s): ${R} connected, ` +
        (P > 0 ? `${P} cached, ` : "") +
        (E > 0 ? `${E} connecting, ` : "") +
        `${O} not connected, ` +
        (k > 0 ? `${k} not configured, ` : "") +
        `${M} disabled.` +
        (h > 0 && !o ? " Reply `/mcp reconnect all` here to retry." : "") +
        (o
          ? " Use `/mcp` in the terminal for details."
          : ` Use \`/mcp\` in the terminal for details.
${j}`),
    );
  }
  if (HELP_FLAGS.includes(S)) return s(j);
  let w = /^(\S+)\s*(.*)$/.exec(g),
    C = (w?.[1] ?? "").toLowerCase(),
    e = w?.[2] || "all";
  if (C !== "reconnect" && C !== "enable" && C !== "disable")
    return s(
      `"${m(C)}" isn't a recognized /mcp action. Try reconnect, enable, or disable.`,
    );
  logEvent("tengu_mcp_command_inline", { action: fromEnum(C) });
  let d = e === "all" ? r : r.filter((o) => o.name === e);
  if (d.length === 0)
    return s(
      e === "all"
        ? "No MCP servers are configured. Add one with `claude mcp add`."
        : `There's no MCP server named "${m(e)}". Run \`/mcp\` in the terminal to see configured servers.`,
    );
  let p = getReconnectMcpServer(),
    N = getToggleMcpServer(),
    b = getIsMcpServerDisabled();
  if (!p || !N || !b) {
    if (ke())
      return s(
        "Reconnect, enable, and disable aren't available in this session.",
      );
    return s(
      "MCP controls aren't available right now \u2014 the terminal is still starting up or is showing another view.",
    );
  }
  if (C === "reconnect") {
    let o = e !== "all" ? d[0] : void 0,
      y = o && getBlockingMcpServerState(o);
    if (y === "disabled")
      return s(
        W(
          `"${m(e)}" is disabled.`,
          ` Run \`/mcp enable ${e}\` to bring it back.`,
          e,
        ),
      );
    if (y === "pending")
      return s(
        `"${m(e)}" is already reconnecting \u2014 retries can take a few minutes when a server keeps failing.`,
      );
    if (y === "needs-approval")
      return s(
        `"${m(e)}" is pending approval. Approve it with \`/mcp\` in the terminal first.`,
      );
    let R = e === "all" ? d.filter((h) => J(h, b)) : d,
      P = e === "all" ? formatBulkTogglePersistWarning(d, !0, b) : null;
    if (R.length === 0) {
      let h = countMatching(d, (v) => v.type === "disabled"),
        M = countMatching(d, (v) => isUnconfiguredMcpServer(v) && !b(v.name));
      if (h === 0 && P === null && M > 0)
        return s(
          `${M} MCP server(s) aren't configured yet, so there's nothing to reconnect. The rest are already connected or connecting.`,
        );
      let O = [
        ...(h > 0
          ? [
              `${h} MCP server(s) are disabled. Run \`/mcp enable all\` to bring them back.`,
            ]
          : []),
        ...(P !== null ? [P] : []),
        ...(M > 0
          ? [
              `${M} MCP server(s) aren't configured yet, so there's nothing to reconnect.`,
            ]
          : []),
      ];
      if (O.length > 0) return s(O.join(" "));
      return s("All enabled MCP servers are already connected or connecting.");
    }
    let E = await Promise.allSettled(R.map((h) => p(h.name))),
      k = countMatching(
        E,
        (h) => h.status === "fulfilled" && h.value.client.type === "connected",
      );
    if (e !== "all") {
      let h = E[0];
      if (h?.status !== "fulfilled")
        return z("reconnect", e, h?.reason, { persistsOffBox: mayHaveRemoteClient(c.session) });
      let M = h.value.client.type,
        O =
          M === "needs-auth"
            ? "Authenticate with `/mcp` in the terminal."
            : "Check its config with `/mcp` in the terminal.";
      return s(
        M === "connected"
          ? `Reconnected "${m(e)}".`
          : `Couldn't reconnect "${m(e)}" (${B[M]}). ${O}`,
      );
    }
    return s(
      `Reconnected ${k} of ${R.length} MCP server(s).` +
        (P !== null ? ` ${P}` : "") +
        " Run `/mcp` in the terminal to see status.",
    );
  }
  let f = C === "enable";
  if (e !== "all" && d.some((o) => getMcpServerType(o) === "needs-approval"))
    return s(
      `"${m(e)}" is pending approval. Approve it with \`/mcp\` in the terminal first.`,
    );
  let A = d.filter((o) =>
    f
      ? o.type === "disabled"
      : o.type !== "disabled" && getMcpServerType(o) !== "needs-approval",
  );
  if (A.length === 0) {
    if (f && e !== "all" && b(e)) {
      if (d.some(isConnectedMcpServer)) return s(formatStaleDisableMessage(e));
      return s(formatDisabledElsewhereMessage(e));
    }
    if (!f && e !== "all" && !b(e)) return s(formatDisableNotPersistedMessage(e));
    if (e === "all") {
      let o = formatBulkTogglePersistWarning(d, f, b);
      if (o !== null) {
        let y = f ? countMatching(d, (R) => J(R, b)) : 0;
        return s(y > 0 ? `${o} ${V(y)}` : o);
      }
    }
    if (f) {
      let o = countMatching(d, I);
      if (o > 0)
        return s(
          e === "all"
            ? `All MCP servers are already enabled, but ${V(o)}`
            : W(
                `"${m(e)}" is already enabled but not connected.`,
                ` Run \`/mcp reconnect ${e}\` to retry.`,
                e,
              ),
        );
    }
    return s(
      e === "all"
        ? `All MCP servers are already ${f ? "enabled" : "disabled"}.`
        : `"${m(e)}" is already ${f ? "enabled" : "disabled"}.`,
    );
  }
  let D = e === "all" ? formatBulkTogglePersistWarning(d, f, b) : null,
    L = await Promise.allSettled(A.map((o) => N(o.name))),
    T = countMatching(L, (o) => o.status === "fulfilled"),
    H = f
      ? countMatching(L, (o) => o.status === "fulfilled" && o.value.type === "connected")
      : T,
    q = f ? "Enabled" : "Disabled",
    K = f && H < T ? ` (${T - H} enabled but not yet connected)` : "";
  if (e !== "all") {
    if (!f)
      return s(
        T > 0
          ? `Disabled "${m(e)}".`
          : `Couldn't disable "${m(e)}" \u2014 it may have been removed, or its configuration couldn't be read. Run \`/mcp\` in the terminal to check.`,
      );
    let o = L[0];
    if (o?.status !== "fulfilled")
      return z("enable", e, o?.reason, { persistsOffBox: mayHaveRemoteClient(c.session) });
    let y = o.value.type,
      R =
        y === "needs-auth"
          ? "Authenticate with `/mcp` in the terminal."
          : "Check its config with `/mcp` in the terminal.";
    return s(
      y === "connected"
        ? `Enabled "${m(e)}".`
        : `Enabled "${m(e)}", but it isn't connected yet${y !== "failed" ? ` (${B[y]})` : ""}. ${R}`,
    );
  }
  let F = A.length - T;
  return s(
    `${q} ${T} MCP server(s)${K}` +
      (F > 0 ? ` (${F} couldn't be changed)` : "") +
      "." +
      (D !== null ? ` ${D}` : "") +
      " Run `/mcp` in the terminal to see status.",
  );
}
function m(t) {
  return sanitizeDisplayTextWithoutRedaction(t);
}
function W(t, c, g) {
  let r = `${t}${c}`;
  return isValidCliNameToken(g) && [...r].length <= 1024 ? r : t;
}
function s(t) {
  return { type: "text", value: t };
}
function ne(t, c, g) {
  let { servers: r, rejectedCounts: S } = U(g.hosts()),
    w = dedupe([...r.map((p) => p.hostName), ...S.keys()]),
    C =
      t.length === 0
        ? ["  (none configured)"]
        : [...t]
            .sort((p, N) => p.name.localeCompare(N.name))
            .map((p) => {
              let N = getMcpToolPrefix(p.name),
                b = countMatching(c, (A) => A.name.startsWith(N)),
                f = isUnconfiguredMcpServer(p) ? "not configured" : B[getMcpServerType(p)];
              return `  ${_(m(p.name))}  ${_(f)}  ${p.config.type ?? "stdio"}${X(b)}`;
            }),
    e = w.map((p) => {
      let N = r.filter((f) => f.hostName === p),
        b = S.get(p) ?? 0;
      return [
        "",
        `On ${m(p)} (attached):`,
        ...N.map(re),
        ...(b > 0
          ? [
              `  (${b} more of its MCP ${pluralize(b, "tool")} couldn't be read \u2014 likely a Claude Code version mismatch between this session and that machine)`,
            ]
          : []),
      ].join(`
`);
    }),
    d =
      w.length > 0
        ? `

Servers on ${w.map(m).join(", ")} are managed there \u2014 run \`/mcp\` in a local terminal on that machine. A server that's failed or disabled there won't appear here, and its transport type isn't reported to the cloud session.`
        : "";
  return (
    ["This cloud session's MCP servers:", ...C, ...e].join(`
`) + d
  );
}
var oe = {
  online: "connected",
  offline: "unreachable",
  incompatible: "unreachable (version mismatch)",
};
function re(t) {
  return `  ${_(m(t.serverName))}  ${_(oe[t.hostStatus])}  via ${REMOTE_DEVICES_MCP_SERVER_NAME}${X(t.toolCount)}`;
}
function _(t) {
  return t + " ".repeat(Math.max(0, 28 - getStringWidth(t)));
}
function X(t) {
  return t > 0 ? ` \xB7 ${t} ${pluralize(t, "tool")}` : "";
}
function z(t, c, g, r) {
  if (g instanceof mi) return s(sanitizeDisplayText(l(g), void 0, "none"));
  if (r.persistsOffBox)
    return (
      logForDebugging(`mcp ${t} refused for ${sanitizeForRelay(c)}: ${l(g)}`, { level: "error" }),
      s(
        `Couldn't ${t} "${m(c)}" (detail withheld on this connection). Run \`/mcp\` in the terminal to check.`,
      )
    );
  return s(
    `Couldn't ${t} "${m(c)}" \u2014 ${sanitizeDisplayText(l(g))}. Run \`/mcp\` in the terminal to check.`,
  );
}
function I(t) {
  return (t.type === "failed" && !isUnconfiguredMcpServer(t)) || t.type === "needs-auth";
}
function J(t, c) {
  return I(t) && !c(t.name);
}
function V(t) {
  return `${t} ${t === 1 ? "isn't" : "aren't"} connected \u2014 reply \`/mcp reconnect all\` here to retry.`;
}
export { Oe as call };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ke } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { logError } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { getRemoteTransport, hasRemoteControlChannel } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { getMainLoopModel } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import {
  XHIGH_CAPABLE_MODELS_LABEL,
  MAX_CAPABLE_MODELS_LABEL,
  modelSupportsXHighEffort,
  modelSupportsUltracode,
  isUltracodeActive,
  getOrgDefaultEffortLevelForModel,
  isEffortAllowedByOrg,
  getAllowedEffortLevels,
  clampEffortToOrgLimit,
  formatEffortLevel,
  parseEffortLevelAlias,
  toPersistableEffortLevel,
  getEnvEffortLevelOverride,
  isLaunchEffortPinned,
  createEffortLevelOrDefault,
  isSameEffortSelection,
  releaseLaunchEffortPins,
  resolveModelEffortLevel,
  getDefaultEffortLevelForModel,
  applyEffortLevelChange,
  getModelEffortLevelOrDefault,
  getEffortLevelDescription,
} from "../权限系统/chunk-t3b7pg2x.js";
var _ = {
  low: "Quick, straightforward implementation",
  medium: "Balanced approach with standard testing",
  high: "Comprehensive implementation with extensive testing",
  xhigh: `Extended reasoning with thorough analysis (${XHIGH_CAPABLE_MODELS_LABEL})`,
  max: `Maximum capability with deepest reasoning (${MAX_CAPABLE_MODELS_LABEL})`,
};
function formatEffortUsageText() {
  let t = getMainLoopModel(),
    o = modelSupportsUltracode(t),
    n = getAllowedEffortLevels(t);
  return (
    `Usage: /effort [${n.join("|")}${o ? "|ultracode" : ""}|auto]

Effort levels:
` +
    n
      .map(
        (r) => `- ${r}: ${_[r]}
`,
      )
      .join("") +
    (o
      ? `- ultracode: xhigh + dynamic workflow orchestration (this session only)
`
      : "") +
    "- auto: Use the default effort level for your model"
  );
}
function E(t) {
  let o = getAllowedEffortLevels(t),
    n = modelSupportsUltracode(t) ? ", ultracode" : "";
  return `${o.join(", ")}${n}, auto`;
}
function parseEffortArgument(t, o) {
  let n = t.toLowerCase();
  if (n === "auto" || n === "unset") return { value: void 0 };
  if (n === "ultracode" && modelSupportsUltracode(o)) return { value: "xhigh" };
  let r = parseEffortLevelAlias(t);
  return r ? { value: r } : null;
}
function g(t, o = !1) {
  if (!getRemoteTransport()) return null;
  if (!hasRemoteControlChannel())
    return " (applied locally \u2014 this remote transport can\u2019t change server effort)";
  return (
    getRemoteTransport()
      ?.sendControlRequest({
        subtype: "apply_flag_settings",
        settings: { effortLevel: t ?? null, ultracode: o },
      })
      .catch(logError),
    null
  );
}
async function x(t, o, n, r) {
  let s = getMainLoopModel(),
    e = typeof t === "string" ? clampEffortToOrgLimit(t, s) : t,
    l = e !== t,
    f = toPersistableEffortLevel(e);
  if (hasRemoteControlChannel() && f === void 0)
    return {
      message: `${e} is session-scoped and won't reach the remote process. Use low, medium, high, or xhigh instead.`,
    };
  let c = applyEffortLevelChange(e, s, o, r);
  n?.({ value: e, ultracode: !1 });
  let m = g(f),
    d = await c;
  if (d) return { message: `Failed to set effort level: ${d.message}` };
  logEvent("tengu_effort_command", {
    effort: typeof e === "number" ? e : fromEnum(e),
    is_remote: getRemoteTransport() !== null,
  });
  let p = getRemoteTransport() ? void 0 : getEnvEffortLevelOverride();
  if (p !== void 0 && p !== e) {
    let y = a.CLAUDE_CODE_EFFORT_LEVEL;
    if (f === void 0)
      return {
        message: `Not applied: CLAUDE_CODE_EFFORT_LEVEL=${y} overrides effort this session, and ${formatEffortLevel(e)} is session-only (nothing saved)`,
        effortUpdate: { value: e, ultracode: !1 },
      };
    return {
      message: `CLAUDE_CODE_EFFORT_LEVEL=${y} overrides this session \u2014 clear it and ${formatEffortLevel(e)} takes over`,
      effortUpdate: { value: e, ultracode: !1 },
    };
  }
  if (!o && ke() && isLaunchEffortPinned(s))
    return {
      message: `Not applied: the launch-effort pin holds effort at ${getDefaultEffortLevelForModel(s)} this session. Run /effort ${formatEffortLevel(e)} in an interactive terminal to release the pin.`,
      effortUpdate: { value: e, ultracode: !1 },
    };
  let v = getEffortLevelDescription(e),
    L =
      f !== void 0 && o && !getRemoteTransport()
        ? " (saved as your default for new sessions)"
        : " (this session only)";
  if (l)
    return {
      message: `Effort '${t}' exceeds your organization's limit for ${s}; set to '${e}' instead${L}: ${v}${m ?? ""}`,
      effortUpdate: { value: e, ultracode: !1 },
    };
  return {
    message: `Set effort level to ${formatEffortLevel(e)}${L}: ${v}${m ?? ""}`,
    effortUpdate: { value: e, ultracode: !1 },
  };
}
function formatEffortStatus(t, o, n) {
  if (isUltracodeActive(o, t, n))
    return {
      message:
        "Current effort level: ultracode (xhigh + dynamic workflow orchestration; this session only)",
    };
  let r = getRemoteTransport() ? void 0 : getEnvEffortLevelOverride(),
    s = isLaunchEffortPinned(o) ? void 0 : t,
    e = r === null ? void 0 : (r ?? s);
  if (e === void 0) {
    let f = getModelEffortLevelOrDefault(o, t),
      c =
        getOrgDefaultEffortLevelForModel(o) !== null && resolveModelEffortLevel(o, t) !== void 0
          ? ", set by your organization"
          : "";
    return { message: `Effort level: auto (currently ${formatEffortLevel(f)}${c})` };
  }
  let l = getEffortLevelDescription(e);
  return { message: `Current effort level: ${formatEffortLevel(e)} (${l})` };
}
async function C(t, o, n) {
  o?.({ value: void 0, ultracode: !1 });
  let r = g(void 0),
    s = await applyEffortLevelChange(void 0, getMainLoopModel(), t, n);
  if (s) return { message: `Failed to set effort level: ${s.message}` };
  logEvent("tengu_effort_command", { effort: S("auto"), is_remote: getRemoteTransport() !== null });
  let e = t ? "" : " (this session only)",
    l = getRemoteTransport() ? void 0 : getEnvEffortLevelOverride();
  if (l !== void 0 && l !== null) {
    let f = a.CLAUDE_CODE_EFFORT_LEVEL;
    return {
      message: `${t ? "Cleared effort from settings, but" : "Effort set to auto for this session, but"} CLAUDE_CODE_EFFORT_LEVEL=${f} still controls this session`,
      effortUpdate: { value: void 0, ultracode: !1 },
    };
  }
  return {
    message: `Effort level set to auto${e}${r ?? ""}`,
    effortUpdate: { value: void 0, ultracode: !1 },
  };
}
function U(t, o, n) {
  let r = getMainLoopModel();
  if (!modelSupportsUltracode())
    return {
      message: `Ultracode needs dynamic workflows enabled (see /config). Valid options are: ${E(r)}`,
    };
  if (modelSupportsXHighEffort(r) && !isEffortAllowedByOrg("xhigh", r))
    return {
      message: `Ultracode runs at xhigh effort, which is restricted by your organization for ${r}. Valid options are: ${E(r)}`,
    };
  if (!modelSupportsUltracode(r))
    return {
      message: `Ultracode runs at xhigh effort, which ${r} doesn't support \u2014 switch to an xhigh-capable model (${XHIGH_CAPABLE_MODELS_LABEL}). Valid options are: ${E(r)}`,
    };
  if (!t && ke() && isLaunchEffortPinned(r))
    return {
      message: `Not applied: the launch-effort pin holds effort at ${getDefaultEffortLevelForModel(r)} this session, and ultracode needs xhigh. Run /effort ultracode in an interactive terminal to release the pin.`,
    };
  (releaseLaunchEffortPins(t, n), o?.({ value: "xhigh", ultracode: !0 }));
  let s = g("xhigh", !0);
  logEvent("tengu_effort_command", {
    effort: S("ultracode"),
    is_remote: getRemoteTransport() !== null,
  });
  let e = getRemoteTransport() ? void 0 : getEnvEffortLevelOverride();
  if (e !== void 0 && e !== "xhigh")
    return {
      message: `CLAUDE_CODE_EFFORT_LEVEL=${a.CLAUDE_CODE_EFFORT_LEVEL} overrides effort this session \u2014 clear it and ultracode takes over`,
      effortUpdate: { value: "xhigh", ultracode: !0 },
    };
  return {
    message: `Set effort level to ultracode (this session only): xhigh + dynamic workflow orchestration${s ?? ""}`,
    effortUpdate: { value: "xhigh", ultracode: !0 },
  };
}
async function w(t, o = !0, n, r) {
  let s = t.toLowerCase();
  if (s === "auto" || s === "unset") return C(o, n, r);
  if (s === "ultracode") return U(o, n, r);
  let e = parseEffortLevelAlias(t);
  if (!e)
    return { message: `Invalid argument: ${t}. Valid options are: ${E(getMainLoopModel())}` };
  return x(e, o, n, r);
}
async function runEffortCommand(t, o, n = !0, r) {
  let s = !1,
    e = null,
    l = await w(
      t,
      n,
      (f) => {
        s = !0;
        let c = createEffortLevelOrDefault(f.value),
          m = f.ultracode ?? !1;
        o((d) => {
          if (
            ((e ??= {
              sessionEffort: d.sessionEffort,
              ultracode: d.ultracode ?? !1,
            }),
            isSameEffortSelection(d.sessionEffort, c) && (d.ultracode ?? !1) === m)
          )
            return d;
          return { ...d, sessionEffort: c, ultracode: m };
        });
      },
      r,
    );
  if (s && !l.effortUpdate)
    o((f) => {
      if (e === null) return f;
      if (
        isSameEffortSelection(f.sessionEffort, e.sessionEffort) &&
        (f.ultracode ?? !1) === e.ultracode
      )
        return f;
      return { ...f, sessionEffort: e.sessionEffort, ultracode: e.ultracode };
    });
  return l;
}
export { formatEffortUsageText, parseEffortArgument, formatEffortStatus, runEffortCommand };

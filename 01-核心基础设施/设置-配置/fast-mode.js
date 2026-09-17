// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { withDeadline } from "../共享小工具-未细化/async-timeout-utils.js";
import { RL, cZ } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { fromEnum } from "../共享小工具-未细化/analytics-fields.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { chalk } from "../ANSI-样式-布局原语/chalk-ansi.js";
import { FAST_MODE_GLYPH } from "../../02-功能模块/权限系统/chunk-e4pfvp7x.js";
import {
  dU,
  RR,
  Q$e,
  af,
  QH,
  Gve,
  Ese,
  getMainLoopModel,
  getDefaultMainLoopModelSetting,
  getCanonicalName,
  parseUserSpecifiedModel,
} from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logEvent } from "../共享小工具-未细化/analytics-event-queue.js";
import { jn, Ks } from "../安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { updateSettingsForSource } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { resolveSetting } from "../../02-功能模块/上下文压缩-Compact/resolve-user-intent-setting.js";
import { getConfiguredSessionModel, hasPreModelSwitchHooks, recordModelSwitchIfChanged, enqueueSessionTask, formatInlineCode, FAST_MODE_ON_LABEL, MODEL_SET_SUFFIX, ControlRequestTimeoutError } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { applyFlagSettingsPatch } from "../../02-功能模块/上下文压缩-Compact/apply-flag-settings.js";
import { getThemeColor } from "../共享小工具-未细化/theme-color.js";
import { P_, Rl, rI } from "../模型目录-ModelCatalog/chunk-qgx6a5a0.js";
import { resolveThemePalette } from "../共享小工具-未细化/theme-resolution.js";
function renderFastModeIndicator(t = !0, e = !1) {
  if (!t) return FAST_MODE_GLYPH;
  let o = resolveThemePalette(resolveSetting("theme", "dark").value);
  if (e) return chalk.dim(getThemeColor("promptBorder", o)(FAST_MODE_GLYPH));
  return getThemeColor("fastMode", o)(FAST_MODE_GLYPH);
}
var FAST_MODE_HOOK_TIMEOUT_MS = 8000,
  FAST_MODE_CANCELLED_MESSAGE = "Fast mode unchanged (cancelled)";
function getFastModeTargetModel(t) {
  if (af(getConfiguredSessionModel({ ...t, toolPermissionContext: { mode: "default" } }))) return;
  let e = Q$e();
  return parseUserSpecifiedModel(e) === parseUserSpecifiedModel(getDefaultMainLoopModelSetting()) ? null : e;
}
async function vetFastModeTargetModel(t, e, o) {
  let m = getFastModeTargetModel(e());
  if (m === void 0 || Ks() || !hasPreModelSwitchHooks(t)) return { vetted: UNVETTED_FAST_MODE_TARGET, messages: [] };
  let a = await P_(t, e, m, "command", { signal: o });
  if (a.decision === "proceed")
    return { vetted: { target: m }, messages: a.messages };
  return {
    refusal: rI(
      m,
      a.decision === "ask"
        ? `${a.reason ?? "confirmation required"} (use /model to switch, then /fast)`
        : a.reason,
      a.messages,
    ),
  };
}
var UNVETTED_FAST_MODE_TARGET = { unvetted: !0 };
function formatFastModeRemoteResult(t, e) {
  let o = e ? "enabled" : "disabled";
  switch (t.kind) {
    case "timeout":
      return `No response from the workspace \u2014 fast mode may still have been ${o} there`;
    case "stale":
      return `Fast mode was not ${o}: the model changed while PreModelSwitch hooks ran; try again`;
    case "refused":
      return `Fast mode was not ${o} on the workspace: ${t.reason}`;
  }
}
function applyFastModeSetting(t, e, o, m = !0, a, f = UNVETTED_FAST_MODE_TARGET) {
  QH();
  let S = () => {
      if (m) return;
      cZ({ ...(RL() ?? {}), fastMode: e });
    },
    c = () => {
      if ((applyFlagSettingsPatch({ fastMode: e }, o), e))
        o((r) => {
          let s = getFastModeTargetModel(r);
          if (s === void 0) return r;
          if (!("unvetted" in f) && f.target !== s) return r;
          return (
            recordModelSwitchIfChanged(t, r, s, "command"),
            { ...r, mainLoopModel: s, mainLoopModelForSession: null }
          );
        });
    };
  if (Ks()) {
    S();
    let r = jn()?.sendControlRequest({
      subtype: "apply_flag_settings",
      settings: { fastMode: e ? !0 : null, ...(e && { model: Q$e() }) },
    });
    if (!r) return (c(), Promise.resolve(void 0));
    return r.then(
      () => {
        c();
        return;
      },
      (s) => (
        n(`fast mode: workspace did not accept apply_flag_settings: ${l(s)}`, {
          level: "error",
        }),
        s instanceof ControlRequestTimeoutError
          ? { kind: "timeout" }
          : { kind: "refused", reason: Rl(l(s)) }
      ),
    );
  }
  if (e && !("unvetted" in f)) {
    let r = !1;
    if (
      (o((s) => {
        let d = getFastModeTargetModel(s);
        return ((r = d !== void 0 && d !== f.target), s);
      }),
      r)
    )
      return Promise.resolve({ kind: "stale" });
  }
  if ((S(), m)) updateSettingsForSource("userSettings", { fastMode: e ? !0 : void 0 }, void 0, a);
  return (c(), Promise.resolve(void 0));
}
async function runFastModeToggle(t, e, o, m, a, f = !0, S, c, r, s) {
  let d = await enqueueSessionTask(t, async () => {
    if (c) await withDeadline(c(), FAST_MODE_HOOK_TIMEOUT_MS);
    if (r?.aborted) return { kind: "refused", refusal: FAST_MODE_CANCELLED_MESSAGE };
    let M = dU();
    if (M) return { kind: "refused", refusal: `Fast mode unavailable: ${M}` };
    let F = UNVETTED_FAST_MODE_TARGET,
      p = [];
    if (e) {
      let g = await vetFastModeTargetModel(t, o, r);
      if (r?.aborted) return { kind: "refused", refusal: FAST_MODE_CANCELLED_MESSAGE };
      if (g.refusal !== void 0) return { kind: "refused", refusal: g.refusal };
      ((F = g.vetted), (p = g.messages));
    }
    let h = e && getFastModeTargetModel(o()) !== void 0;
    return (
      s?.(),
      {
        kind: "applied",
        remote: await applyFastModeSetting(t, e, m, f, S, F),
        willPromote: h,
        hookMessages: p,
      }
    );
  });
  if (d.kind === "refused") return d.refusal;
  if (d.remote !== void 0) return formatFastModeRemoteResult(d.remote, e);
  if (
    (logEvent("tengu_fast_mode_toggled", { enabled: e, source: fromEnum(a), remote: Ks() }),
    e)
  ) {
    let M = renderFastModeIndicator(!0),
      F = d.willPromote ? `${MODEL_SET_SUFFIX}${formatInlineCode(RR())}` : "",
      p = getMainLoopModel(),
      h = af(p) ? getCanonicalName(p) : "claude-opus-5",
      k = Ese(Gve(h)),
      g = f ? "" : " (this session only)",
      w =
        d.hookMessages.length > 0
          ? `
${d.hookMessages.map(Rl).join(`
`)}`
          : "";
    return `${M} ${FAST_MODE_ON_LABEL}${F} \xB7 ${k}${g}${w}`;
  } else return `Fast mode OFF${f ? "" : " (this session only)"}`;
}
export { renderFastModeIndicator, FAST_MODE_HOOK_TIMEOUT_MS, FAST_MODE_CANCELLED_MESSAGE, getFastModeTargetModel, vetFastModeTargetModel, UNVETTED_FAST_MODE_TARGET, formatFastModeRemoteResult, applyFastModeSetting, runFastModeToggle };

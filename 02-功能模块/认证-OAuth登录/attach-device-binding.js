// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { isUnboundCreateReason, formatCreatedUnboundNotice, formatUnboundNotice } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { unboundCreateReason, productionUnboundCreatesDeps } from "../../01-核心基础设施/核心工具-未归类/chunk-rds75sre.js";
import { isViolinWoodEnabled } from "../目录同步-dir-sync/chunk-97crm80y.js";
import { startDeviceRegistration } from "../远程控制-Bridge/device-bridge-registration.js";
import { NOT_HELD_STATE } from "../../01-核心基础设施/终端与时钟/chunk-hkdjw6ht.js";
import { readLocalDeviceId } from "../设备注册-Cowork/设备注册-Cowork.9r92qaht.js";
import { resolveAccountIdentity, isEgressAllowed } from "../设备注册-Cowork/chunk-d4kaq0ds.js";
async function resolveAttachDeviceBinding(e) {
  let s = e.session.then(
    (o) => ({ read: !0, session: o }),
    (o) => ({ read: !1, error: o }),
  );
  if (!(await (e.isEnabled ?? isViolinWoodEnabled)().catch(() => !1)))
    return { status: "disabled" };
  let r = await s;
  if (!r.read) return v("session_unreadable", r.error);
  if (r.session.archived) return { status: "disabled" };
  if (r.session.boundDeviceId === void 0) {
    let o = await (
      e.readUnboundCreateReason ?? ((b) => unboundCreateReason(b, isUnboundCreateReason, productionUnboundCreatesDeps(e.storageV5)))
    )(e.sessionId).catch(() => {
      return;
    });
    return (
      logEvent("tengu_device_bind_attach", {
        outcome: S("session_unbound"),
        created_here: o !== void 0,
      }),
      o === void 0
        ? { status: "not_applicable" }
        : { status: "created_unbound", reason: o }
    );
  }
  let d;
  try {
    d = (e.isEgressAllowed ?? isEgressAllowed)();
  } catch {
    d = !1;
  }
  if (!d) return c("egress");
  let t = await (e.getAccount ?? resolveAccountIdentity)();
  if (t.status === "missing") return c("account");
  if (t.status === "mismatch") return c("account_mismatch");
  let a = await (e.readLocalDeviceId ?? readLocalDeviceId)(t.accountUuid).then(
    (o) => ({ read: !0, deviceId: o?.toLowerCase() }),
    (o) => ({ read: !1, error: o }),
  );
  if (!a.read) return v("local_device_unreadable", a.error);
  if (a.deviceId === void 0) return c("no_device_here");
  if (a.deviceId !== r.session.boundDeviceId.toLowerCase())
    return c("other_device");
  return (
    logEvent("tengu_device_bind_attach", { outcome: S("bound") }),
    logFeatureOk("device_bind_attach"),
    { status: "bound", deviceId: a.deviceId }
  );
}
function pullsBackToThisMachine(e) {
  return e.then(
    (s) => s.status === "bound",
    () => !1,
  );
}
async function servedToolsForAttach({ sessionId: e, binding: s, deviceBridge: r, onNotice: d }) {
  return;
}
function registerAttachedDevice(e) {
  let s = e.binding.catch(
      (t) => (
        logForDebugging(`[deviceBind] attach binding failed unexpectedly: ${l(t)}`),
        { status: "disabled" }
      ),
    ),
    r = !1,
    d;
  return (
    s
      .then((t) => {
        if (r || t.status !== "bound") return;
        d = (e.startRegistration ?? startDeviceRegistration)({
          sessionId: e.sessionId,
          getAccessToken: e.getAccessToken,
          orgUuid: e.orgUuid,
          getDeviceId: () => t.deviceId,
          storageV5: e.storageV5,
          ...(e.dirSync !== void 0 && { dirSync: e.dirSync }),
          ...(e.onNotice && { onNotice: e.onNotice }),
          ...(e.servedSettingsChanged && {
            servedSettingsChanged: e.servedSettingsChanged,
          }),
        });
      })
      .catch((t) => {
        logForDebugging(
          `[deviceBind] attach could not start the device registration: ${l(t)}`,
        );
      }),
    {
      announceSettled: (t) => d?.announceSettled(t),
      serving: s.then(() => d?.serving),
      notice: s.then((t) =>
        t.status === "unbound"
          ? formatUnboundNotice(t.reason)
          : t.status === "created_unbound"
            ? formatCreatedUnboundNotice(t.reason)
            : void 0,
      ),
      stop: async () => {
        ((r = !0), await d?.stop());
      },
      heldServedCall: (t) => d?.heldServedCall(t) ?? NOT_HELD_STATE,
    }
  );
}
function c(e) {
  return (
    logEvent("tengu_device_bind_attach", { outcome: fromEnum(e) }),
    logFeatureSad("device_bind_attach", e),
    { status: "unbound", reason: e }
  );
}
function v(e, s) {
  if (
    (logEvent("tengu_device_bind_attach", { outcome: fromEnum(e) }),
    e === "session_unreadable")
  )
    logFeatureSad("device_bind_attach", e);
  else logFeatureBad("device_bind_attach", e);
  return (
    logForDebugging(
      `[deviceBind] attach could not check the session's binding (${e}): ${l(s)}`,
    ),
    { status: "unbound", reason: e }
  );
}
export { resolveAttachDeviceBinding, pullsBackToThisMachine, servedToolsForAttach, registerAttachedDevice };

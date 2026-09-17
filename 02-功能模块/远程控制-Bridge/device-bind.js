// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Xn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { fromEnum } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { logFeatureOk, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { R } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { createOkResult, createErrorResult, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { isViolinWoodEnabled } from "../目录同步-dir-sync/chunk-97crm80y.js";
import { launchedFromHome } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { registerDevice, DeviceLimitReachedError, DeviceRegistrationUnavailableError, clearCachedDeviceRegistration, buildDefaultDeviceDisplayName } from "../设备注册-Cowork/设备注册-Cowork.9r92qaht.js";
import { compareAccountUuids, getHostAccountUuidFromEnv, isEgressAllowed } from "../设备注册-Cowork/chunk-d4kaq0ds.js";
import { sign as v } from "crypto";
var DEVICE_REGISTRY_KID_PREFIX = "creg_",
  m = Buffer.from("anthropic.ccr.create_session_bind.v1", "utf8");
function l(e) {
  if (!Xn(e))
    throw new R(
      `deviceBind: malformed UUID '${e}'`,
      "deviceBind: malformed UUID",
    );
  return Buffer.from(e.replace(/-/g, ""), "hex");
}
function p(e, t, r, a) {
  let c = Buffer.alloc(m.length + 48 + 8),
    o = 0;
  return (
    (o += m.copy(c, o)),
    (o += l(e).copy(c, o)),
    (o += l(t).copy(c, o)),
    (o += l(r).copy(c, o)),
    c.writeBigUInt64BE(BigInt(a), o),
    c
  );
}
function B(e, t, r, a) {
  let c = Date.now(),
    o = p(e, t, r, c),
    d = v("sha256", o, { key: a, dsaEncoding: "ieee-p1363" });
  return {
    deviceUUID: r,
    kid: DEVICE_REGISTRY_KID_PREFIX + r,
    signature: d.toString("base64"),
    issuedAt: new Date(c).toISOString(),
  };
}
async function D() {
  let { ensureTrustedDeviceTokenForBind: e } =
    await import("./chunk-tyce0p0b.js");
  return e(void 0);
}
async function localBindIdentity(e) {
  if ((e.launchedFromHome ?? launchedFromHome)()) return createErrorResult("launched_from_home");
  let t;
  try {
    t = (e.isEgressAllowed ?? isEgressAllowed)();
  } catch {
    t = !1;
  }
  if (!t) return createErrorResult("egress");
  let r = compareAccountUuids({
    storedAccountUuid: e.accountUuid,
    hostAccountUuid: await (e.getHostAccountUuid
      ? e.getHostAccountUuid()
      : getHostAccountUuidFromEnv(e.credentials)),
  });
  if (r.status === "missing") return createErrorResult("account");
  if (r.status === "mismatch") return createErrorResult("account_mismatch");
  return (await (e.hasDeviceProof ?? D)().catch(() => !1))
    ? createOkResult({ accountUuid: r.accountUuid, source: r.source })
    : createErrorResult("no_device_proof");
}
async function prepareDeviceBinder(e) {
  let t = e.isEnabled ?? isViolinWoodEnabled;
  try {
    if (!(await t())) return createErrorResult("gate");
  } catch (s) {
    return createErrorResult(f("gate", s));
  }
  let r = await localBindIdentity(e);
  if (!r.ok) return _(r.error);
  logEvent("tengu_device_bind_account", { source: fromEnum(r.value.source) });
  let { accountUuid: a } = r.value,
    c;
  try {
    c = await registerDevice(a, e.displayName ?? buildDefaultDeviceDisplayName(), e.credentials);
  } catch (s) {
    return createErrorResult(f("register", s));
  }
  let { deviceUUID: o, priv: d } = c;
  return createOkResult({
    deviceUUID: o,
    sign: () => {
      try {
        let s = B(e.orgUuid, a, o, d);
        return (logFeatureOk("device_bind"), s);
      } catch (s) {
        f("sign", s);
        return;
      }
    },
    clearRegistration: () =>
      clearCachedDeviceRegistration(a, e.credentials).catch((s) => {
        logForDebugging(
          `[deviceBind] could not forget the cached device id: ${s instanceof Error ? s.message : String(s)}`,
        );
      }),
  });
}
function _(e) {
  return (logEvent("tengu_device_bind_skipped", { reason: fromEnum(e) }), createErrorResult(e));
}
function f(e, t) {
  return (
    logEvent("tengu_device_bind_failed", {
      phase: fromEnum(e),
      limit_reached: t instanceof DeviceLimitReachedError,
      registration_unavailable: t instanceof DeviceRegistrationUnavailableError,
    }),
    logFeatureSad("device_bind", (t instanceof R && t.errorClass) || e),
    logForDebugging(
      `[deviceBind] continuing unbound: ${t instanceof Error ? t.message : String(t)}`,
    ),
    t instanceof DeviceLimitReachedError
      ? "limit_reached"
      : t instanceof DeviceRegistrationUnavailableError
        ? "registration_unavailable"
        : e
  );
}
export { DEVICE_REGISTRY_KID_PREFIX, localBindIdentity, prepareDeviceBinder };

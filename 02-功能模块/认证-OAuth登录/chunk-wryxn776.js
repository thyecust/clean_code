// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { LKn, Xht, Yht } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { unboundCreateReason, productionUnboundCreatesDeps } from "../../01-核心基础设施/共享小工具-未细化/chunk-rds75sre.js";
import { isViolinWoodEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import { c6e } from "../Bridge-RemoteControl/chunk-2m80582f.js";
import { qz } from "../../01-核心基础设施/共享小工具-未细化/chunk-hkdjw6ht.js";
import { T9n } from "../Cowork远程设备注册/Cowork远程设备注册.9r92qaht.js";
import { cte, O7 } from "../../01-核心基础设施/共享小工具-未细化/chunk-d4kaq0ds.js";
async function LJt(e) {
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
      e.readUnboundCreateReason ?? ((b) => unboundCreateReason(b, LKn, productionUnboundCreatesDeps(e.storageV5)))
    )(e.sessionId).catch(() => {
      return;
    });
    return (
      i("tengu_device_bind_attach", {
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
    d = (e.isEgressAllowed ?? O7)();
  } catch {
    d = !1;
  }
  if (!d) return c("egress");
  let t = await (e.getAccount ?? cte)();
  if (t.status === "missing") return c("account");
  if (t.status === "mismatch") return c("account_mismatch");
  let a = await (e.readLocalDeviceId ?? T9n)(t.accountUuid).then(
    (o) => ({ read: !0, deviceId: o?.toLowerCase() }),
    (o) => ({ read: !1, error: o }),
  );
  if (!a.read) return v("local_device_unreadable", a.error);
  if (a.deviceId === void 0) return c("no_device_here");
  if (a.deviceId !== r.session.boundDeviceId.toLowerCase())
    return c("other_device");
  return (
    i("tengu_device_bind_attach", { outcome: S("bound") }),
    logFeatureOk("device_bind_attach"),
    { status: "bound", deviceId: a.deviceId }
  );
}
function MJt(e) {
  return e.then(
    (s) => s.status === "bound",
    () => !1,
  );
}
async function qmr({ sessionId: e, binding: s, deviceBridge: r, onNotice: d }) {
  return;
}
function NJt(e) {
  let s = e.binding.catch(
      (t) => (
        n(`[deviceBind] attach binding failed unexpectedly: ${l(t)}`),
        { status: "disabled" }
      ),
    ),
    r = !1,
    d;
  return (
    s
      .then((t) => {
        if (r || t.status !== "bound") return;
        d = (e.startRegistration ?? c6e)({
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
        n(
          `[deviceBind] attach could not start the device registration: ${l(t)}`,
        );
      }),
    {
      announceSettled: (t) => d?.announceSettled(t),
      serving: s.then(() => d?.serving),
      notice: s.then((t) =>
        t.status === "unbound"
          ? Yht(t.reason)
          : t.status === "created_unbound"
            ? Xht(t.reason)
            : void 0,
      ),
      stop: async () => {
        ((r = !0), await d?.stop());
      },
      heldServedCall: (t) => d?.heldServedCall(t) ?? qz,
    }
  );
}
function c(e) {
  return (
    i("tengu_device_bind_attach", { outcome: fromEnum(e) }),
    logFeatureSad("device_bind_attach", e),
    { status: "unbound", reason: e }
  );
}
function v(e, s) {
  if (
    (i("tengu_device_bind_attach", { outcome: fromEnum(e) }),
    e === "session_unreadable")
  )
    logFeatureSad("device_bind_attach", e);
  else logFeatureBad("device_bind_attach", e);
  return (
    n(
      `[deviceBind] attach could not check the session's binding (${e}): ${l(s)}`,
    ),
    { status: "unbound", reason: e }
  );
}
export { LJt, MJt, qmr, NJt };

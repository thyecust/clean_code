// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { OAUTH_BETA_HEADER } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { Xn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { R, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { us, oe } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { ht } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getSecureStorage } from "../认证-OAuth登录/chunk-y7b7kf5n.js";
import { isEgressAllowed } from "../../01-核心基础设施/共享小工具-未细化/chunk-d4kaq0ds.js";
import { tZ } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import {
  createPrivateKey,
  createPublicKey,
  generateKeyPairSync,
} from "crypto";
import { hostname } from "os";
var P = "/api/organizations/:orgUUID/cowork/remote_devices",
  h = "cowork_remote_device_limit_reached",
  C = "account_session_invalid";
async function g(e, i) {
  return (await getSecureStorage().readAsync(i))?.coworkRemoteDevice?.[e];
}
async function readLocalDeviceId(e) {
  return Xn((await g(e, void 0))?.rowPk)?.toLowerCase();
}
async function loadDeviceKey(e, i) {
  let r = await g(e, i),
    t = Xn(r?.rowPk)?.toLowerCase(),
    s = r && v(r);
  return r && t && s ? { rowPk: t, key: s } : void 0;
}
function v(e) {
  try {
    let i = createPrivateKey({
      key: Buffer.from(e.privateKeyPkcs8B64, "base64"),
      format: "der",
      type: "pkcs8",
    });
    return i.asymmetricKeyType === "ec" &&
      i.asymmetricKeyDetails?.namedCurve === "prime256v1"
      ? i
      : void 0;
  } catch {
    return;
  }
}
async function K(e, i) {
  let r = await g(e, i);
  if (r) {
    let a = v(r);
    if (a) return { priv: a, stored: r };
    (n("[deviceRegistry] stored device key is unreadable; minting a new one"),
      await w(e, r.privateKeyPkcs8B64, i).catch((u) => {
        n(
          `[deviceRegistry] could not retire the unreadable device key: ${l(u)}`,
        );
      }));
  }
  let { privateKey: t } = generateKeyPairSync("ec", { namedCurve: "P-256" }),
    s = {
      privateKeyPkcs8B64: t
        .export({ type: "pkcs8", format: "der" })
        .toString("base64"),
    };
  await getSecureStorage()
    .mutate((a) => {
      if (a.coworkRemoteDevice?.[e]) return a;
      return { ...a, coworkRemoteDevice: { ...a.coworkRemoteDevice, [e]: s } };
    }, i)
    .catch((a) => {
      throw new R(
        `deviceRegistry: device key could not be persisted to secure storage (${l(a)})`,
        "deviceRegistry: device key not persisted",
        "key_not_persisted",
      );
    });
  let c = await g(e, i),
    o = c && v(c);
  if (!c || !o)
    throw new R(
      "deviceRegistry: device key could not be persisted to secure storage",
      "deviceRegistry: device key not persisted",
      "key_not_persisted",
    );
  return { priv: o, stored: c };
}
async function m(e, i, r) {
  await getSecureStorage().mutate((t) => {
    let s = t.coworkRemoteDevice?.[e];
    if (!s) return t;
    let c = i(s);
    if (c === s) return t;
    return { ...t, coworkRemoteDevice: { ...t.coworkRemoteDevice, [e]: c } };
  }, r);
}
function x() {
  return "darwin";
}
function E(e) {
  return us(e.trim(), 255) || us(buildDefaultDeviceDisplayName().trim(), 255);
}
async function registerDevice(e, i, r) {
  try {
    if (!isEgressAllowed()) throw new DeviceRegistrationUnavailableError("client egress policy");
    return await H(e, i, r);
  } catch (t) {
    throw (
      logFeatureBad(
        "device_registry_register",
        (t instanceof R && t.errorClass) || "unexpected_error",
      ),
      t
    );
  }
}
async function H(e, i, r) {
  let { priv: t, stored: s } = await K(e, r);
  if (s.rowPk)
    return (logFeatureOk("device_registry_register"), { deviceUUID: s.rowPk, priv: t });
  let c = createPublicKey(t).export({ type: "spki", format: "der" }).toString("base64"),
    o = await ht
      .post(
        P,
        { display_name: E(i), platform: x(), public_key: c },
        {
          auth: "teleport-org",
          headers: { "anthropic-beta": OAUTH_BETA_HEADER },
          timeout: 1e4,
          validateStatus: () => !0,
          credentials: r,
        },
      )
      .catch((d) => {
        throw new R(
          `deviceRegistry: register request failed (${l(d)})`,
          "deviceRegistry: register request failed",
          "request_failed",
        );
      });
  if (!o.ok)
    throw new R(
      `deviceRegistry: register not sent (${o.reason})`,
      "deviceRegistry: register not sent",
      "not_sent",
    );
  if (
    (n(
      `[deviceRegistry] register status=${o.status} request_id=${String(o.response.headers?.["request-id"] ?? "")}`,
    ),
    o.status === 400 && o.data?.error?.details?.error_code === h)
  )
    throw new DeviceLimitReachedError();
  if (
    (o.status === 403 && o.data?.error?.details?.error_code !== C) ||
    o.status === 404
  )
    throw new DeviceRegistrationUnavailableError(`HTTP ${o.status}`);
  let a = Xn(o.data?.id);
  if (o.status !== 201 || a === null)
    throw new R(
      `deviceRegistry: register ${o.status}: ${oe(String(b(o.data) ?? ""), 200)}`,
      "deviceRegistry: register HTTP error",
      "http_error",
    );
  if (o.data?.revoked_at !== null && o.data?.revoked_at !== void 0)
    throw (
      await w(e, s.privateKeyPkcs8B64, r).catch((d) => {
        n(`[deviceRegistry] could not retire the revoked device key: ${l(d)}`);
      }),
      new p()
    );
  let u = a.toLowerCase();
  return (
    await m(
      e,
      (d) =>
        d.privateKeyPkcs8B64 === s.privateKeyPkcs8B64 ? { ...d, rowPk: u } : d,
      r,
    ).catch((d) => {
      n(
        `[deviceRegistry] registered device row=${u} but could not cache it: ${l(d)}`,
      );
    }),
    n(`[deviceRegistry] registered device row=${u}`),
    logFeatureOk("device_registry_register"),
    { deviceUUID: u, priv: t }
  );
}
class DeviceLimitReachedError extends R {
  constructor() {
    super(
      "deviceRegistry: account device limit reached",
      "deviceRegistry: account device limit reached",
      "limit_reached",
    );
  }
}
class DeviceRegistrationUnavailableError extends R {
  constructor(e) {
    super(
      `deviceRegistry: device registration unavailable for this account or organization (${e})`,
      "deviceRegistry: device registration unavailable for this account or organization",
      "registration_unavailable",
    );
  }
}
class p extends R {
  constructor() {
    super(
      "deviceRegistry: device key revoked server-side; a new key will be minted on the next registration",
      "deviceRegistry: device key revoked",
      "key_revoked",
    );
  }
}
async function w(e, i, r) {
  await getSecureStorage().mutate((t) => {
    if (t.coworkRemoteDevice?.[e]?.privateKeyPkcs8B64 !== i) return t;
    let { [e]: s, ...c } = t.coworkRemoteDevice;
    return { ...t, coworkRemoteDevice: c };
  }, r);
}
async function clearCachedDeviceRegistration(e, i) {
  await m(
    e,
    (r) => {
      if (r.rowPk === void 0) return r;
      let { rowPk: t, ...s } = r;
      return s;
    },
    i,
  );
}
function buildDefaultDeviceDisplayName() {
  return `Claude Code on ${hostname()} \xB7 ${tZ("darwin")}`;
}
export { readLocalDeviceId, loadDeviceKey, registerDevice, DeviceLimitReachedError, DeviceRegistrationUnavailableError, clearCachedDeviceRegistration, buildDefaultDeviceDisplayName };

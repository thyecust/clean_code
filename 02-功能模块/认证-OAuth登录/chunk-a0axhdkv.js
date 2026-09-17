// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Tc, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { J1t } from "../Bridge-RemoteControl/chunk-b9tbevd9.js";
import { E9n } from "../Cowork远程设备注册/Cowork远程设备注册.9r92qaht.js";
import { cte } from "../../01-核心基础设施/共享小工具-未细化/chunk-d4kaq0ds.js";
import { createHash, sign as m } from "crypto";
var S = "anthropic.ccr.client_event.v1",
  w = "claude-code-jcs@1";
function h(r) {
  let t = [],
    i = [],
    s = (e) => {
      if (e === null || typeof e === "boolean" || typeof e === "string")
        t.push(Tc(e));
      else if (typeof e === "number") {
        if (!Number.isFinite(e))
          throw Error("canonicalJson: non-finite number");
        t.push(String(e));
      } else if (Array.isArray(e))
        (t.push("["),
          i.push({
            values: Array.from(e, (o) => (o === void 0 ? null : o)),
            next: 0,
          }));
      else if (typeof e === "object") {
        let o = e,
          a = Object.keys(o)
            .filter((c) => o[c] !== void 0)
            .sort();
        (t.push("{"),
          i.push({ names: a, values: a.map((c) => o[c]), next: 0 }));
      } else throw Error("canonicalJson: a value with no JSON form");
    };
  s(r);
  while (i.length > 0) {
    let e = i.at(-1);
    if (e.next === e.values.length) {
      (t.push(e.names ? "}" : "]"), i.pop());
      continue;
    }
    if (e.next > 0) t.push(",");
    if (e.names) t.push(`${Tc(e.names[e.next])}:`);
    let o = e.values[e.next];
    ((e.next += 1), s(o));
  }
  return t.join("");
}
function E(r, t) {
  let { uuid: i, type: s, ...e } = t,
    o = createHash("sha256").update(h(e), "utf8").digest();
  return Buffer.concat([
    Buffer.from(S, "utf8"),
    u,
    Buffer.from(r, "utf8"),
    u,
    Buffer.from(i, "utf8"),
    u,
    Buffer.from(s, "utf8"),
    u,
    o,
  ]);
}
var u = Buffer.from([0]);
function g(r, t) {
  let i = J1t + r,
    s = !1;
  return {
    noteSignFailure: () => {
      if (s) return !1;
      return ((s = !0), !0);
    },
    sign: (e, o) => ({
      kid: i,
      signature: m("sha256", E(e, o), {
        key: t,
        dsaEncoding: "ieee-p1363",
      }).toString("base64"),
      jcs_lib: w,
    }),
  };
}
async function _({ accountUuid: r, boundDeviceUuid: t, credentials: i }) {
  return v(await d(r, i), t);
}
async function Ghr(r, t) {
  let i = await cte(t).catch(() => {
    return;
  });
  if (i?.status !== "resolved") return;
  let s = await d(i.accountUuid, t),
    e;
  return (
    r.then(
      (o) => {
        e = o === void 0 ? void 0 : v(s, o);
      },
      () => {},
    ),
    s.status === "loaded"
      ? {
          sign: (o, a) => e?.sign(o, a),
          noteSignFailure: () => e?.noteSignFailure() ?? !1,
        }
      : void 0
  );
}
async function Y1t(r, t) {
  let i = await cte(t).catch(() => {
    return;
  });
  return i?.status === "resolved"
    ? _({ accountUuid: i.accountUuid, boundDeviceUuid: r, credentials: t })
    : void 0;
}
async function qhr(r, t) {
  let i = await cte(t).catch(() => {
    return;
  });
  if (i?.status !== "resolved") return;
  let s = await d(i.accountUuid, t);
  if (s.status !== "loaded" || s.rowPk !== r.toLowerCase()) return;
  return (logFeatureOk("client_event_signer"), g(s.rowPk, s.key));
}
async function d(r, t) {
  try {
    let i = await E9n(r, t);
    return i === void 0
      ? { status: "no_device_key" }
      : { status: "loaded", rowPk: i.rowPk, key: i.key };
  } catch (i) {
    return (
      n(`[clientEventSigner] could not load the device key: ${l(i)}`),
      { status: "load_failed" }
    );
  }
}
function v(r, t) {
  switch (r.status) {
    case "no_device_key":
    case "load_failed":
      logFeatureBad("client_event_signer", r.status);
      return;
    case "loaded":
      if (r.rowPk !== t.toLowerCase()) {
        logFeatureBad("client_event_signer", "bound_elsewhere");
        return;
      }
      return (logFeatureOk("client_event_signer"), g(r.rowPk, r.key));
  }
}
export { Ghr, Y1t, qhr };

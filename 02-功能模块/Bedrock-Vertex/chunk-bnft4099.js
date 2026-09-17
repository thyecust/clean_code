// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ad, gDn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { Xt, to, getAPIProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { getUserSpecifiedModelSetting, vetUserSpecifiedModel, DEFAULT_MANTLE_OPUS_KEY, getEnvDefaultModel, isEnvDefaultModelGoverning, getCanonicalName } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
function _(t, r) {
  if (t === "ANTHROPIC_DEFAULT_SONNET_MODEL")
    a.set("CLAUDE_CODE_3P_PROBE_WROTE_SONNET_DEFAULT", r);
  else if (t === "ANTHROPIC_DEFAULT_OPUS_MODEL")
    a.set("CLAUDE_CODE_3P_PROBE_WROTE_OPUS_DEFAULT", r);
}
function d7(t) {
  let r =
      t === "sonnet"
        ? a.ANTHROPIC_DEFAULT_SONNET_MODEL
        : a.ANTHROPIC_DEFAULT_OPUS_MODEL,
    f =
      t === "sonnet"
        ? a.CLAUDE_CODE_3P_PROBE_WROTE_SONNET_DEFAULT
        : a.CLAUDE_CODE_3P_PROBE_WROTE_OPUS_DEFAULT;
  return r !== void 0 && r === f;
}
var TIER_LABELS = { fable: "Fable", sonnet: "Sonnet", opus: "Opus", haiku: "Haiku" },
  O = 20000;
async function withProbeDeadline(t, r) {
  let f;
  try {
    return await Promise.race([
      r,
      new Promise((l) => {
        f = setTimeout(
          (o, s) => {
            (n(`[3p-probe] ${s} hit ${O}ms deadline; proceeding without it`),
              o([]));
          },
          O,
          l,
          t,
        );
      }),
    ]);
  } finally {
    clearTimeout(f);
  }
}
function d(t) {
  switch (t) {
    case "ANTHROPIC_DEFAULT_SONNET_MODEL":
      return a.ANTHROPIC_DEFAULT_SONNET_MODEL !== void 0 && !d7("sonnet");
    case "ANTHROPIC_DEFAULT_OPUS_MODEL":
      return a.ANTHROPIC_DEFAULT_OPUS_MODEL !== void 0 && !d7("opus");
    case "ANTHROPIC_DEFAULT_HAIKU_MODEL":
      return a.ANTHROPIC_DEFAULT_HAIKU_MODEL !== void 0;
    case "ANTHROPIC_SMALL_FAST_MODEL":
      return a.ANTHROPIC_SMALL_FAST_MODEL !== void 0;
    default:
      return !1;
  }
}
function T(t, r) {
  switch (t) {
    case "ANTHROPIC_DEFAULT_SONNET_MODEL":
      a.set("ANTHROPIC_DEFAULT_SONNET_MODEL", r);
      break;
    case "ANTHROPIC_DEFAULT_OPUS_MODEL":
      a.set("ANTHROPIC_DEFAULT_OPUS_MODEL", r);
      break;
    default:
      return;
  }
  _(t, r);
}
function captureAdmin3PSteeringSnapshot() {
  gDn({
    sonnet: a.ANTHROPIC_DEFAULT_SONNET_MODEL !== void 0 && !d7("sonnet"),
    opus: a.ANTHROPIC_DEFAULT_OPUS_MODEL !== void 0 && !d7("opus"),
  });
}
async function apply3PDefaultFallbacks(t) {
  captureAdmin3PSteeringSnapshot();
  let r = t?.pendingUserModel?.trim(),
    l = vetUserSpecifiedModel(
      r === "default" || r === "inherit" || r === "" ? void 0 : (r ?? void 0),
    ),
    o = getEnvDefaultModel(),
    s =
      l != null && l !== ""
        ? l
        : r !== void 0 && l == null
          ? (o ?? void 0)
          : (getUserSpecifiedModelSetting() ?? o ?? void 0);
  switch (getAPIProvider()) {
    case "bedrock":
      return { lines: await m(s), hasHardFailure: !1 };
    case "vertex":
      return { lines: await k(s), hasHardFailure: !1 };
    case "mantle": {
      let e = !1;
      if (o !== null) {
        let E = Xt(o.trim().toLowerCase());
        e =
          !(E === "opus" || E === "best" || getCanonicalName(E) === getCanonicalName(to[DEFAULT_MANTLE_OPUS_KEY].firstParty)) &&
          isEnvDefaultModelGoverning();
      }
      let c = (l != null && l !== "") || getUserSpecifiedModelSetting() != null || e;
      return D(c);
    }
    default:
      return { lines: [], hasHardFailure: !1 };
  }
}
async function m(t) {
  let { checkBedrockDefaultAvailability: r, seedEnvDefaultForUserPin: f } =
      await import("./seedEnvDefaultForUserPin.qgx0v22d.js"),
    l = f(t);
  if (l && !d(l.envVar)) T(l.envVar, l.value);
  let o = await withProbeDeadline("bedrock-fallback", r()),
    s = [];
  for (let e of o) {
    if (d(e.envVar)) continue;
    if (
      ((process.env[e.envVar] = e.fallbackBedrockId),
      _(e.envVar, e.fallbackBedrockId),
      e.tier === "haiku")
    ) {
      if (!d("ANTHROPIC_DEFAULT_HAIKU_MODEL"))
        process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL = e.fallbackBedrockId;
    }
    if (e.crossTier)
      ((process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_NAME = e.fallbackName),
        (process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION = `Opus unavailable \u2014 using ${e.fallbackName}`));
    (i("tengu_bedrock_default_fallback", {
      tier: fromEnum(e.tier),
      default_key: fromEnum(e.defaultKey),
      fallback_key: fromEnum(e.fallbackKey),
      cross_tier: S(e.crossTier ? "true" : "false"),
    }),
      s.push(
        e.crossTier
          ? `${TIER_LABELS[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName}. Enable ${e.defaultName} in the Bedrock console to upgrade.`
          : `${TIER_LABELS[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName} for this session`,
      ));
  }
  return s;
}
async function k(t) {
  let { checkVertexDefaultAvailability: r, seedEnvDefaultForUserPin: f } =
      await import("./seedEnvDefaultForUserPin.jmem3wk1.js"),
    l = f(t);
  if (l && !d(l.envVar)) T(l.envVar, l.value);
  let o = await withProbeDeadline("vertex-fallback", r()),
    s = [];
  for (let e of o) {
    if (d(e.envVar)) continue;
    if (
      ((process.env[e.envVar] = e.fallbackVertexId),
      _(e.envVar, e.fallbackVertexId),
      e.tier === "haiku")
    ) {
      if (!d("ANTHROPIC_DEFAULT_HAIKU_MODEL"))
        process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL = e.fallbackVertexId;
    }
    if (e.crossTier)
      ((process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_NAME = e.fallbackName),
        (process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION = `Opus unavailable \u2014 using ${e.fallbackName}`));
    (i("tengu_vertex_default_fallback", {
      tier: fromEnum(e.tier),
      default_key: fromEnum(e.defaultKey),
      fallback_key: fromEnum(e.fallbackKey),
      cross_tier: S(e.crossTier ? "true" : "false"),
    }),
      s.push(
        e.crossTier
          ? `${TIER_LABELS[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName}. Enable ${e.defaultName} in Model Garden to upgrade.`
          : `${TIER_LABELS[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName} for this session`,
      ));
  }
  return s;
}
async function D(t) {
  let { checkMantleDefaultAvailability: r } =
      await import("./checkMantleDefaultAvailability.n2v4aa82.js"),
    f = await withProbeDeadline("mantle-fallback", r(void 0, { userPinned: t })),
    l = [],
    o = !1,
    s;
  for (let e of f)
    if (e.kind === "adminPin") {
      if (!t) (ad(e.adminMantleId), (s = e.adminMantleId));
    } else if (e.kind === "pinRefuted") {
      if (!t)
        (ad(e.workingMantleId),
          (s = e.workingMantleId),
          i("tengu_mantle_default_fallback", {
            default_key: fromEnum(e.defaultKey),
            fallback_key: fromEnum(e.workingKey),
            admin_pin_refuted: S("true"),
          }),
          l.push(
            `${TIER_LABELS[e.tier]}: the admin-configured Opus model is not available on this account \u2014 using ${e.workingName} for this session`,
          ));
    } else if (e.kind === "fallback") {
      let c = !1;
      if (!d(e.envVar))
        ((process.env[e.envVar] = e.fallbackMantleId),
          _(e.envVar, e.fallbackMantleId),
          (c = !0));
      if (!t) (ad(e.fallbackMantleId), (s = e.fallbackMantleId), (c = !0));
      if (c)
        (i("tengu_mantle_default_fallback", {
          default_key: fromEnum(e.defaultKey),
          fallback_key: fromEnum(e.fallbackKey),
        }),
          l.push(
            `${TIER_LABELS[e.tier]}: ${e.defaultName} not available \u2014 using ${e.fallbackName} for this session`,
          ));
    } else
      ((o = !0),
        i("tengu_mantle_default_fallback", { default_key: S("exhausted") }),
        l.push(
          `${TIER_LABELS[e.tier]}: no accessible model (tried ${e.triedNames.join(", ")}). Enable ${e.defaultName} in Amazon Bedrock (Mantle).`,
        ));
  return { lines: l, hasHardFailure: o, mantleOverride: s };
}
export { d7, TIER_LABELS, withProbeDeadline, captureAdmin3PSteeringSnapshot, apply3PDefaultFallbacks };

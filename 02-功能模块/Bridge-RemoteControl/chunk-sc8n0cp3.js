// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { l, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { qt } from "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import { Ce } from "../Teammates团队/chunk-qe04h4c5.js";
import { be } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { b, Tc, z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { Lhe } from "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import { io } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { yi, ms, Ow, B5, SHn, gke, wx, XT, NQ } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { y, f, g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { ye } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { wo } from "../../01-核心基础设施/共享小工具-未细化/chunk-k6pta6f5.js";
import { uD } from "../Hooks钩子/chunk-z3433nr6.js";
import { YC } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { toe, ig } from "../插件系统/chunk-ajtn749s.js";
import { bK, T1e, Hc } from "../插件系统/chunk-hh8f1qrw.js";
import { iH, m3, AV, pT, an, wEe, Ql, pY, tD, nD } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Qz, SWe } from "../插件系统/chunk-55xj4ev5.js";
import { ale, eUn } from "../../01-核心基础设施/共享小工具-未细化/chunk-400h8hta.js";
import { L } from "../Teammates团队/chunk-mrfx53ye.js";
import { np, Xc, $g, Lu } from "../插件系统/chunk-33bdfgmx.js";
import { s, T, v, c, X, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { me } from "../../01-核心基础设施/共享小工具-未细化/chunk-6rcgxa93.js";
import { G, Y } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { hostname as fn } from "os";
import { dirname as gn, join as hn } from "path";
var mn = m(() =>
    c({
      version: k(1),
      choice: X(["accepted", "declined"]),
      decidedAt: s(),
      hostname: s(),
    }),
  ),
  xe = "cloud-plugins-consent";
function De() {
  return Ce.state(xe);
}
function WZ() {
  return hn(be(), "state", `${xe}.json`);
}
async function Ne(e) {
  let t;
  try {
    t = await e.readText();
  } catch (o) {
    return (
      n(`cloud-plugins consent: store unreadable (${l(o)})`, { level: "warn" }),
      "unreadable"
    );
  }
  if (t === void 0) return "unset";
  try {
    let o = mn().safeParse(z(t));
    return o.success && o.data.hostname === e.hostname()
      ? o.data.choice
      : "unset";
  } catch {
    return "unset";
  }
}
async function _n(e) {
  let t = await Ne(e);
  return t === "unreadable" ? "unset" : t;
}
function wn(e, t) {
  return t === "declined" || (t === "unset" && e) ? "declined" : "accepted";
}
async function v$n(e, t) {
  try {
    return (
      await t.writeText(
        b(
          {
            version: 1,
            choice: e,
            decidedAt: t.now().toISOString(),
            hostname: t.hostname(),
          },
          null,
          2,
        ) +
          `
`,
      ),
      !0
    );
  } catch (o) {
    return (
      n(`cloud-plugins consent: answer not saved (${l(o)})`, { level: "warn" }),
      !1
    );
  }
}
function WHe(e) {
  return {
    readText: async () => {
      if (e) {
        let t = await e.readText([De()]);
        if (!t.ok) throw Error("cloud-plugins consent read failed");
        let o = t.value.items[0];
        return o.found ? o.value : void 0;
      }
      try {
        return await qt().read(WZ());
      } catch (t) {
        if (W(t)) return;
        throw t;
      }
    },
    writeText: async (t) => {
      if (e) {
        if (!(await e.write(De(), t, { mode: 384 })).ok)
          throw Error("cloud-plugins consent write failed");
        return;
      }
      let o = WZ();
      (await qt().mkdir(gn(o), 448), await qt().atomicWrite(o, t, 384));
    },
    now: () => new Date(),
    hostname: fn,
  };
}
function R$n() {
  return { value: null, persisted: !1, given: !1 };
}
async function _ye(e, t, o) {
  let { answer: r, given: d } = await yn(e, t);
  if (
    r !== "accepted" ||
    d ||
    o === void 0 ||
    !(await o.storeUntrusted().catch(() => !0))
  )
    return r;
  return (Pn(o.onUntrusted), "unset");
}
async function yn(e, t) {
  let o = !1;
  if (e.value === null)
    ((o = !0),
      (e.value = _n(t).then((H) => ((e.persisted = H !== "unset"), H))),
      (e.given = !1));
  let { value: r, given: d } = e,
    w = await r;
  if (w !== "accepted" || o) return { answer: w, given: d };
  let O = await Ne(t),
    { value: S, given: a } = e;
  if (S !== null && S !== r) return { answer: await S, given: a };
  if (O === "accepted") e.persisted = !0;
  let E = wn(e.persisted, O);
  if (E === "declined")
    return (
      (e.value = Promise.resolve(E)),
      (e.given = !1),
      { answer: E, given: !1 }
    );
  return { answer: E, given: d };
}
function Pn(e) {
  try {
    e?.();
  } catch (t) {
    n(`cloud-plugins consent: callback failed (${l(t)})`, { level: "warn" });
  }
}
var Ue = ["userSettings", "projectSettings", "localSettings", "flagSettings"],
  kn = new Set(["userSettings", "flagSettings"]),
  Sn = yi.toReversed(),
  bn = 200,
  Rn = 32,
  ve = 2000,
  Cn = 256,
  vn = 1024,
  En = 140,
  An = 128,
  Fn = 256,
  Tn = 16,
  On = 128,
  Dn = 262144,
  xn = new Set([ig, "claude-code-marketplace"]),
  Nn = new Set(["https:", "ssh:", "git+ssh:", "git+https:"]),
  Le = new Set(["http:", "git:", "git+http:"]),
  Ln = new Set(["ssh:", "git+ssh:"]),
  Mn = new Set(["https:"]),
  In = /^[\x21-\x7e]+$/,
  Un = /^[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\/[A-Za-z0-9._-]+$/,
  Wn =
    /^(?:([A-Za-z0-9][A-Za-z0-9._-]*)@)?(\[[0-9A-Fa-f:.]+\]|[A-Za-z0-9][A-Za-z0-9._-]*):(.*)$/,
  jn = /^[A-Za-z0-9][A-Za-z0-9+.-]*::/,
  $n = /^[A-Za-z0-9._/@+][A-Za-z0-9._/@+-]*$/,
  Bn = /^[A-Za-z0-9._/@+][A-Za-z0-9._/@+ -]*$/,
  We = /(?:^|[/:])\.\.(?:$|[/?#;])/,
  je = /%2e|%2f|%5c|%3b|%3f|%23|\\/i,
  Kn = /^[^:]*:\/\/[^/?#]*%/,
  Hn = [
    "invalid_id",
    "invalid_value",
    "directory_loaded",
    "unknown_builtin",
    "ambiguous_marketplace",
    "blocked_by_policy",
    "not_installed_here",
    "unknown_marketplace",
    "untrusted_for_folder",
    "reserved_name_conflict",
    "not_provided_by_container",
    "local_marketplace",
    "needs_credentials",
    "insecure_transport",
    "invalid_marketplace",
    "over_cap",
    "guard_builtin_not_own_choice",
  ];
function yWe(e) {
  let t = ct(),
    o = [],
    r = new Map(),
    d = [],
    w = Xn(e),
    O = {
      byPolicy: Me(e.policyRefusedMarketplaces),
      asReserved: Me(e.reservedNameConflicts),
    };
  for (let [A, R] of [...Yn(e, t)].sort(([V], [Z]) => we(V, Z))) {
    let V = Lu(A) ?? "",
      Z = r.get(V) ?? Jn(V, e, O);
    r.set(V, Z);
    let N = qn(A, R, V, Z, w, e);
    if (N !== void 0) {
      if ((t[N]++, N !== "directory_loaded")) o.push({ id: A, reason: N });
      continue;
    }
    d.push({
      id: A,
      value: R.value === !0,
      ownMention: R.ownMention,
      marketplace: V,
      declaration: Z.kind === "declare" && R.value === !0 ? Z.source : void 0,
    });
  }
  let S = lt(dt(d, t, o), t, o),
    a = {
      enabledPlugins: Object.fromEntries(
        S.map(({ id: A, value: R }) => [A, R]),
      ),
      extraKnownMarketplaces: Object.fromEntries(
        S.flatMap(({ marketplace: A, declaration: R }) =>
          R === void 0 ? [] : [[A, { source: R }]],
        ).sort(([A], [R]) => we(A, R)),
      ),
    },
    E = {
      forwarded: S.length,
      forwardedDisabled: G(S, ({ value: A }) => !A),
      marketplacesDeclared: Object.keys(a.extraKnownMarketplaces).length,
      dropped: t,
    };
  o.sort((A, R) => we(A.id, R.id));
  let H = Vn(e)
    ? "over_read_cap"
    : !XT().safeParse(a).success
      ? "schema_rejected"
      : Buffer.byteLength(Gn(a), "utf8") > Dn
        ? "too_large"
        : void 0;
  if (H !== void 0)
    return {
      patch: { enabledPlugins: {}, extraKnownMarketplaces: {} },
      dropped: [
        ...o,
        ...S.map(({ id: A }) => ({ id: A, reason: "over_cap" })),
      ].sort((A, R) => we(A.id, R.id)),
      counts: {
        forwarded: 0,
        forwardedDisabled: 0,
        marketplacesDeclared: 0,
        dropped: { ...t, over_cap: t.over_cap + S.length },
      },
      refusedWhole: H,
    };
  return { patch: a, dropped: o, counts: E };
}
function Gn(e) {
  return b(NQ(e));
}
function $e(e) {
  return {
    forwarded: e.forwarded,
    forwarded_disabled: e.forwardedDisabled,
    marketplaces_declared: e.marketplacesDeclared,
    ...Object.fromEntries(Hn.map((t) => [`dropped_${t}`, e.dropped[t]])),
  };
}
function zn(e, t) {
  if (!me(t)) return { kind: "drop", reason: "invalid_marketplace" };
  switch (Q(t, "source")) {
    case "github":
      return nt(e, t);
    case "git":
      return tt(e, t);
    case "url":
      return ot(e, t);
    case "directory":
    case "file":
    case "npm":
    case "settings":
      return { kind: "drop", reason: "local_marketplace" };
    default:
      return { kind: "drop", reason: "invalid_marketplace" };
  }
}
function Yn(e, t) {
  let o = new Map(),
    r = new Set();
  for (let d of Ue) {
    let w = e.enabledPluginsByTier[d];
    if (!me(w)) continue;
    let O = kn.has(d) || (d === "localSettings" && e.localSettingsAreOwnChoice),
      S = Object.keys(w);
    t.over_cap += Math.max(0, S.length - ve);
    for (let a of S.slice(0, ve)) {
      let E = w[a];
      if (E === void 0) continue;
      if (!uD.includes(d) && e.trustedOnlyBuiltinIds.has(a.toLowerCase())) {
        t.guard_builtin_not_own_choice++;
        continue;
      }
      if (!Zn(a)) {
        r.add(a);
        continue;
      }
      let H = o.get(a);
      o.set(a, {
        value: E,
        ownChoice: (H?.ownChoice ?? !1) || (O && E === !0),
        ownMention: (H?.ownMention ?? !1) || (O && typeof E === "boolean"),
      });
    }
  }
  return ((t.invalid_id += r.size), o);
}
function Vn(e) {
  return Ue.some((t) => {
    let o = e.enabledPluginsByTier[t];
    return me(o) && Object.keys(o).length > ve;
  });
}
function Zn(e) {
  return e.length <= Cn && wx().safeParse(e).success;
}
function qn(
  e,
  t,
  o,
  r,
  d,
  {
    installedPluginIds: w,
    builtinPluginIds: O,
    directoryPluginsAllowedByPolicy: S,
  },
) {
  let a = o.toLowerCase();
  if (a === np) return "directory_loaded";
  if (typeof t.value !== "boolean") return "invalid_value";
  if (a === Xc && !S) return "blocked_by_policy";
  if (a === $g && !O.has(e)) return "unknown_builtin";
  if (t.value && d.has(e.toLowerCase())) return "blocked_by_policy";
  if (r.kind === "drop" && t.value) return r.reason;
  if (t.value && !t.ownChoice && !w.has(e) && a !== $g && a !== Xc)
    return "not_installed_here";
  return;
}
function Xn({ enabledPluginsByTier: e }) {
  let t = e.policySettings;
  return new Set(
    me(t)
      ? Object.keys(t)
          .filter((o) => t[o] === !1)
          .map((o) => o.toLowerCase())
      : [],
  );
}
function Me(e) {
  return new Set([...e].map((t) => t.toLowerCase()));
}
function Jn(e, t, o) {
  let r = e.toLowerCase();
  if (r === $g || r === Xc) return { kind: "reserved" };
  if (o.byPolicy.has(r)) return { kind: "drop", reason: "blocked_by_policy" };
  let d = Qn(e, t),
    w = B5.has(r);
  if (d === void 0 && t.marketplaceRestrictionPolicyActive && r !== ig)
    return { kind: "drop", reason: w ? "blocked_by_policy" : Ie(e, t) };
  if (w)
    return o.asReserved.has(r)
      ? { kind: "drop", reason: "reserved_name_conflict" }
      : xn.has(r)
        ? { kind: "reserved" }
        : { kind: "drop", reason: "not_provided_by_container" };
  if (SHn(e)) return { kind: "drop", reason: "reserved_name_conflict" };
  if (d === void 0) return { kind: "drop", reason: Ie(e, t) };
  return zn(e, d);
}
function Ie(e, t) {
  return et(e, t) ? "untrusted_for_folder" : "unknown_marketplace";
}
function Qn(e, t) {
  let o = me(t.registeredMarketplaces)
    ? Q(t.registeredMarketplaces, e)
    : void 0;
  if (o !== void 0) return me(o) ? (Q(o, "source") ?? null) : null;
  for (let r of Sn) {
    if (Ow.has(r) && !t.folderTrustedForProjectPlugins) continue;
    let d = Be(t, r, e);
    if (d !== void 0) return me(d) ? (Q(d, "source") ?? null) : null;
  }
  return;
}
function et(e, t) {
  return (
    !t.folderTrustedForProjectPlugins &&
    [...Ow].some((o) => Be(t, o, e) !== void 0)
  );
}
function Be(e, t, o) {
  let r = e.declaredMarketplacesByTier[t];
  return me(r) ? Q(r, o) : void 0;
}
function nt(e, t) {
  let o = Q(t, "repo");
  if (
    typeof o !== "string" ||
    o.length > En ||
    !Un.test(o) ||
    o.split("/").some(ze)
  )
    return { kind: "drop", reason: "invalid_marketplace" };
  let r = He(t);
  return r === void 0
    ? { kind: "drop", reason: "invalid_marketplace" }
    : Ee(e, { source: "github", repo: o, ...r });
}
function tt(e, t) {
  let o = Q(t, "url"),
    r = Ke(o);
  if (r === void 0) return { kind: "drop", reason: "invalid_marketplace" };
  let d = at(r);
  if (d !== "network") return { kind: "drop", reason: d };
  let w = He(t);
  return w === void 0
    ? { kind: "drop", reason: "invalid_marketplace" }
    : Ee(e, { source: "git", url: r, ...w });
}
function ot(e, t) {
  let o = Ke(Q(t, "url"));
  if (o === void 0) return { kind: "drop", reason: "invalid_marketplace" };
  let r = Q(t, "headers");
  if (
    Q(t, "headersHelper") !== void 0 ||
    (r !== void 0 && !(me(r) && Object.keys(r).length === 0))
  )
    return { kind: "drop", reason: "needs_credentials" };
  let d = Ye(o, Mn);
  return d === "network"
    ? Ee(e, { source: "url", url: o })
    : { kind: "drop", reason: d };
}
function Ke(e) {
  return typeof e === "string" && e.length > 0 && e.length <= vn && In.test(e)
    ? e
    : void 0;
}
function He(e) {
  let t = Q(e, "ref"),
    o = Q(e, "path"),
    r = Q(e, "sparsePaths"),
    d = Q(e, "skipLfs");
  if (
    (t !== void 0 && !rt(t)) ||
    (o !== void 0 && !st(o)) ||
    (r !== void 0 && !it(r)) ||
    (d !== void 0 && typeof d !== "boolean")
  )
    return;
  return {
    ...(t !== void 0 && { ref: t }),
    ...(o !== void 0 && { path: o }),
    ...(r !== void 0 && { sparsePaths: r }),
    ...(d !== void 0 && { skipLfs: d }),
  };
}
function rt(e) {
  return (
    typeof e === "string" &&
    e.length <= An &&
    $n.test(e) &&
    !e.split("/").some(ze)
  );
}
function st(e) {
  return typeof e === "string" && e.length <= Fn && Ge(e);
}
function it(e) {
  return (
    Array.isArray(e) &&
    e.length <= Tn &&
    e.every((t) => typeof t === "string" && t.length <= On && Ge(t))
  );
}
function Ge(e) {
  return (
    Bn.test(e) && !e.startsWith("/") && !e.split("/").some((t) => t === "..")
  );
}
function ze(e) {
  return e === "." || e === "..";
}
function Ee(e, t) {
  return XT().shape.extraKnownMarketplaces.safeParse({ [e]: { source: t } })
    .success
    ? { kind: "declare", source: t }
    : { kind: "drop", reason: "invalid_marketplace" };
}
function at(e) {
  if (e.startsWith("-") || jn.test(e) || Lhe(e)) return "invalid_marketplace";
  if (e.includes("://")) return Ye(e, Nn);
  if (/^[A-Za-z]:[\\/]/.test(e) || /^[./~]/.test(e)) return "local_marketplace";
  let t = Wn.exec(e);
  if (t === null) return "invalid_marketplace";
  let [, , o = "", r = ""] = t;
  if (r.length === 0 || /^[-:]/.test(r) || We.test(r) || je.test(r))
    return "invalid_marketplace";
  if (/[?#]/.test(r)) return "needs_credentials";
  return Ve(o) ? "local_marketplace" : "network";
}
function Ye(e, t) {
  let o;
  try {
    o = new URL(e);
  } catch {
    return "invalid_marketplace";
  }
  if (o.protocol === "file:") return "local_marketplace";
  if (
    !(t.has(o.protocol) || Le.has(o.protocol)) ||
    Kn.test(e) ||
    o.hostname === "" ||
    /^\[?-/.test(o.hostname) ||
    o.username.startsWith("-")
  )
    return "invalid_marketplace";
  if (
    o.password !== "" ||
    (o.username !== "" && !Ln.has(o.protocol)) ||
    o.search !== "" ||
    o.hash !== "" ||
    e.includes("?") ||
    e.includes("#")
  )
    return "needs_credentials";
  if (Ve(o.hostname)) return "local_marketplace";
  if (We.test(e) || je.test(e)) return "invalid_marketplace";
  return Le.has(o.protocol) ? "insecure_transport" : "network";
}
function Ve(e) {
  return eUn(e, "address") || ale(e) || !/[.:]/.test(e.replace(/\.+$/, ""));
}
function dt(e, t, o) {
  let r = new Map();
  for (let { marketplace: d, declaration: w } of e)
    if (w !== void 0) {
      let O = d.toLowerCase(),
        S = r.get(O) ?? new Set();
      (S.add(Tc(NQ(w))), r.set(O, S));
    }
  return e.filter(({ id: d, marketplace: w, declaration: O }) => {
    if (O === void 0 || (r.get(w.toLowerCase())?.size ?? 0) <= 1) return !0;
    return (
      t.ambiguous_marketplace++,
      o.push({ id: d, reason: "ambiguous_marketplace" }),
      !1
    );
  });
}
function lt(e, t, o) {
  let r = new Set(ut(e).slice(0, Rn)),
    d = e.filter(
      ({ declaration: S, marketplace: a }) => S === void 0 || r.has(a),
    ),
    w = [
      ...d.filter(({ value: S, ownMention: a }) => a && !S),
      ...d.filter(({ value: S, ownMention: a }) => a && S),
      ...d.filter(({ value: S, ownMention: a }) => !a && S),
      ...d.filter(({ value: S, ownMention: a }) => !a && !S),
    ]
      .slice(0, bn)
      .sort((S, a) => we(S.id, a.id)),
    O = new Set(w.map(({ id: S }) => S));
  for (let { id: S } of e)
    if (!O.has(S)) (t.over_cap++, o.push({ id: S, reason: "over_cap" }));
  return w;
}
function ut(e) {
  let t = e.filter(({ declaration: d }) => d !== void 0),
    o = Y(
      t.filter(({ ownMention: d }) => d).map(({ marketplace: d }) => d),
    ).sort(),
    r = new Set(o);
  return [
    ...o,
    ...Y(t.map(({ marketplace: d }) => d))
      .filter((d) => !r.has(d))
      .sort(),
  ];
}
function we(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function ct() {
  return {
    invalid_id: 0,
    invalid_value: 0,
    directory_loaded: 0,
    unknown_builtin: 0,
    ambiguous_marketplace: 0,
    blocked_by_policy: 0,
    not_installed_here: 0,
    unknown_marketplace: 0,
    untrusted_for_folder: 0,
    reserved_name_conflict: 0,
    not_provided_by_container: 0,
    local_marketplace: 0,
    needs_credentials: 0,
    insecure_transport: 0,
    invalid_marketplace: 0,
    over_cap: 0,
    guard_builtin_not_own_choice: 0,
  };
}
function Q(e, t) {
  return Object.hasOwn(e, t) ? e[t] : void 0;
}
async function rPt(e) {
  let t = ms().map((a) => [a, ye(a)]),
    [o, r] = await Promise.all([Ql(e), tD(e)]),
    d = wEe(),
    w = t
      .filter(([a]) => d || !Ow.has(a))
      .flatMap(([, a]) =>
        Object.entries(a?.extraKnownMarketplaces ?? {}).map(
          ([E, { source: H }]) => [E, H],
        ),
      ),
    O = [
      ...w,
      ...Object.entries(o).map(([a, { source: E }]) => [a, E]),
      [ig, toe],
    ],
    S = t.find(([a]) => a === "localSettings")?.[1]?.enabledPlugins;
  return {
    enabledPluginsByTier: Object.fromEntries(
      t.map(([a, E]) => [a, E?.enabledPlugins]),
    ),
    declaredMarketplacesByTier: Object.fromEntries(
      t.map(([a, E]) => [a, E?.extraKnownMarketplaces]),
    ),
    registeredMarketplaces: o,
    folderTrustedForProjectPlugins: d,
    localSettingsAreOwnChoice:
      !(me(S) && Object.keys(S).length > 0) ||
      !YC({ onIndeterminate: "tracked" }),
    directoryPluginsAllowedByPolicy: bK(),
    builtinPluginIds: new Set(
      [...wo().builtinPlugins.keys()].map((a) => `${a}@${$g}`),
    ),
    trustedOnlyBuiltinIds: new Set(
      [...wo().builtinPlugins.keys()]
        .map((a) => `${a}@${$g}`)
        .filter(iH)
        .map((a) => a.toLowerCase()),
    ),
    installedPluginIds: new Set(
      Object.entries(r.plugins)
        .filter(([, a]) => a.some(nD))
        .map(([a]) => a),
    ),
    policyRefusedMarketplaces: new Set(
      O.filter(([, a]) => !Hc(a)).map(([a]) => a),
    ),
    marketplaceRestrictionPolicyActive: T1e(),
    reservedNameConflicts: new Set([
      ...Object.entries(o)
        .filter(([a, E]) => pY(a, E) !== null)
        .map(([a]) => a),
      ...w
        .filter(([a, E]) => !Object.hasOwn(o, a) && gke(a, E) !== null)
        .map(([a]) => a),
    ]),
  };
}
function Ze({
  admission: e,
  readChoices: t,
  transport: o,
  clock: r,
  bound: d,
  onNotice: w,
  onOutcome: O,
  onState: S,
}) {
  let a = d === void 0 ? {} : { bound: d },
    E = "idle",
    H = null,
    A = (p) => {
      if (((E = p), p !== "skipped")) H = null;
      le(() => S?.(p), ke);
    },
    R = null,
    V = null,
    Z = !1,
    N = null,
    ie = !1,
    U = null,
    K = null,
    ge = !1;
  function ee(p, P) {
    if (P === "read_failed" || P === "internal_error" || P === "refused_whole")
      f("ccr_cloud_plugins_forward", P, a);
    ((H = P),
      A("skipped"),
      i("tengu_cloud_plugins_skipped", {
        reason: u(P),
        ...a,
        reattach: p.reattach,
      }));
  }
  function ae(p) {
    le(() => O?.(p), ke);
    let P = b(
      p.refusedByWorker === void 0
        ? [p.forwarded, p.forwardedDisabled, p.loaded, p.notApplied, p.stayed]
        : ["refused", p.refusedByWorker, p.stayed],
    );
    if (P !== N || (p.messageWentFirst && !ie))
      le(() => {
        (w(p), (N = P), (ie = p.messageWentFirst));
      }, ke);
  }
  function ue(p, P, C, j) {
    let B = U !== null;
    return {
      forwarded: P.forwarded,
      forwardedDisabled: P.forwardedDisabled,
      loaded: B ? null : C,
      stayed: P.stayed,
      notApplied: j || B,
      messageWentFirst: !B && !j && p.messageWentFirst,
      ...(U !== null && { refusedByWorker: U.reason }),
    };
  }
  function oe(p) {
    return le(() => o.post(p), ht);
  }
  function ne(p, P, C, j) {
    Z = !0;
    let B = oe({ subtype: "apply_flag_settings", settings: { [Qz]: P.patch } }),
      se = () => Ae(p, j) === "current";
    return (
      B.response.then(
        () => {
          if (se()) U = null;
        },
        (_e) => {
          let te = gt(_e);
          if (
            (i("tengu_cloud_plugins_apply_unconfirmed", {
              at: u(C),
              ...a,
              standing: u(Ae(p, j)),
              ...(te !== null && { refused_by_worker: u(te) }),
            }),
            te !== null && se())
          )
            ((U = { reason: te, generation: j }), ae(ue(p, P, null, !0)));
        },
      ),
      B
    );
  }
  function he(p, P) {
    let C = yWe(P);
    if (
      (i("tengu_cloud_plugins_forwarded", {
        ...$e(C.counts),
        refused_whole: C.refusedWhole !== void 0,
        ...a,
        reattach: p.reattach,
      }),
      C.refusedWhole !== void 0)
    ) {
      (ae({
        forwarded: 0,
        forwardedDisabled: 0,
        loaded: null,
        stayed: C.dropped,
        notApplied: !0,
        messageWentFirst: !1,
      }),
        ee(p, "refused_whole"));
      return;
    }
    if (
      C.counts.forwarded === 0 &&
      C.counts.marketplacesDeclared === 0 &&
      !p.reattach &&
      !p.workerKnownAtConnect &&
      !Z
    ) {
      if (C.dropped.length > 0)
        ae({
          forwarded: 0,
          forwardedDisabled: 0,
          loaded: null,
          stayed: C.dropped,
          notApplied: !1,
          messageWentFirst: !1,
        });
      ee(p, "nothing_to_forward");
      return;
    }
    let j = {
      patch: C.patch,
      patchKey: b(C.patch),
      forwardedEnabledIds: new Set(
        Object.entries(C.patch.enabledPlugins)
          .filter(([, B]) => B)
          .map(([B]) => B.toLowerCase()),
      ),
      forwarded: C.counts.forwarded,
      forwardedDisabled: C.counts.forwardedDisabled,
      stayed: C.dropped,
    };
    if (((p.plan = j), A("waiting_for_worker"), p.generation !== null))
      ((p.earlyApply = "skipped"), M(p, j, p.generation, "connect"));
    else
      Fe(ne(p, j, "connect", null)).then((B) => {
        p.earlyApply = B;
      });
  }
  function M(p, P, C, j) {
    if (p.handledGeneration !== null && C <= p.handledGeneration) return;
    let B = p.handledGeneration !== null;
    ((p.handledGeneration = C),
      (p.reloadTaken = !1),
      (U = pt(C, p, U)),
      (ie = !1));
    let se = () => Ae(p, C),
      _e = (q) => {
        i("tengu_cloud_plugins_reload", {
          early_apply: u(p.earlyApply),
          generation_changed: B,
          install_frames_seen: p.installFrames,
          forwarded_enabled: P.forwardedEnabledIds.size,
          ...a,
          reattach: p.reattach,
          ...q,
        });
      };
    A("posted");
    let te = null,
      Pe = (q, _, I) => {
        let D = q === "accepted" && _ === "accepted";
        if (se() === "current") {
          if (((p.reloadTaken = D), D && U === null))
            K = { generation: C, patchKey: P.patchKey };
          let J = q === "session_inactive" || _ === "session_inactive";
          if (!D) {
            if (J) g("ccr_cloud_plugins_forward", "session_inactive", { ...a });
            else f("ccr_cloud_plugins_forward", "posts_refused", { ...a });
            ae(ue(p, P, null, !0));
          } else if (U !== null)
            g("ccr_cloud_plugins_forward", "refused_by_worker", { ...a });
          else
            y("ccr_cloud_plugins_forward", {
              ...a,
              message_went_first: p.messageWentFirst,
            });
          A(D ? "settled" : "failed");
        }
        I.then((J) => {
          if (
            (_e({
              apply_outcome: u(q),
              reload_outcome: u(_),
              standing: u(se()),
              message_went_first: p.messageWentFirst,
              reload_rtt_ms: te === null ? -1 : r.now() - te,
              answered: J !== null,
              loaded_of_forwarded: J?.loaded ?? -1,
              worker_error_count: J?.workerErrors ?? -1,
            }),
            se() === "current" && (D || J !== null))
          ) {
            if (
              (ae(ue(p, P, J?.loaded ?? null, !1)),
              (p.messageWentFirst = !1),
              J !== null)
            ) {
              if (((p.reloadTaken = !0), U === null))
                K = { generation: C, patchKey: P.patchKey };
              A("settled");
            }
          }
        });
      };
    Fe(ne(p, P, j, C)).then((q) => {
      if (q !== "accepted" || se() !== "current") {
        Pe(q, "not_posted", Promise.resolve(null));
        return;
      }
      te = r.now();
      let _ = oe({ subtype: "reload_plugins" }),
        I = _.response.then(
          (D) => _t(P, D),
          () => null,
        );
      Fe(_).then((D) => {
        Pe(q, D, I);
      });
    });
  }
  function de(p) {
    return (
      K !== null &&
      p.generation === K.generation &&
      (p.plan === null || p.plan.patchKey === K.patchKey)
    );
  }
  function re(p) {
    let P = ge && !(K !== null && V === K.generation);
    return (
      (ge = !1),
      {
        reattach: p,
        workerKnownAtConnect: V !== null,
        reloadTaken: !1,
        messageWentFirst: P,
        closed: !1,
        plan: null,
        generation: V,
        handledGeneration: null,
        earlyApply: "pending",
        installFrames: 0,
      }
    );
  }
  return {
    connected({ reattach: p }) {
      if (R !== null) R.closed = !0;
      let P = re(p);
      R = P;
      let C = le(e, () => "internal_error");
      if (C !== "admitted") {
        ee(P, C);
        return;
      }
      (A("reading"),
        Promise.resolve()
          .then(t)
          .then(
            (j) => {
              if (!P.closed)
                le(
                  () => he(P, j),
                  () => ee(P, "internal_error"),
                );
            },
            () => {
              if (!P.closed) ee(P, "read_failed");
            },
          ));
    },
    workerUp(p) {
      if (V !== null && p < V) return;
      if (((V = p), R === null || (R.generation !== null && p <= R.generation)))
        return;
      R.generation = p;
      let P = R,
        C = P.plan;
      if (C !== null)
        le(
          () => M(P, C, p, "worker_up"),
          () => ee(P, "internal_error"),
        );
    },
    pluginInstallFrame() {
      if (R !== null) R.installFrames++;
    },
    messageSent() {
      if (R === null) {
        ge = !0;
        return;
      }
      if (!R.reloadTaken && E !== "skipped" && !de(R)) R.messageWentFirst = !0;
    },
    disconnected() {
      if (R !== null) ((R.closed = !0), (R = null));
      A("idle");
    },
    state: () => E,
    skipped: () => (E === "skipped" ? H : null),
  };
}
function Ae(e, t) {
  return e.closed
    ? "disconnected"
    : e.handledGeneration === t
      ? "current"
      : "superseded";
}
function pt(e, t, o) {
  if (o === null || o.generation === e) return o;
  return o.generation === null && !t.workerKnownAtConnect
    ? { ...o, generation: e }
    : null;
}
function le(e, t) {
  try {
    return e();
  } catch (o) {
    return (h(o), t(o));
  }
}
function ke() {}
var ft = [
  "not_managed_cloud_worker",
  "entrypoint",
  "disabled",
  "hermetic",
  "not_admitted",
  "flag_off",
  "flag_unsettled",
  "malformed",
  "other",
];
function gt(e) {
  let t = e instanceof Error ? e.message : typeof e === "string" ? e : "";
  if (t === SWe) return "other";
  let o = `${SWe}: `;
  if (!t.startsWith(o)) return null;
  let r = t.slice(o.length).trim();
  return ft.find((d) => d === r) ?? "other";
}
function ht(e) {
  let t = Promise.reject(e);
  return (t.catch(ke), { posted: Promise.resolve("failed"), response: t });
}
function Fe(e) {
  return e.posted.catch(() => "failed");
}
var mt = m(() =>
  c({ plugins: v(c({ source: s().optional() })), error_count: T().int() }),
);
function _t(e, t) {
  let o = mt().safeParse(t);
  if (!o.success) return { loaded: null, workerErrors: -1 };
  return {
    loaded: new Set(
      o.data.plugins.flatMap(({ source: r }) =>
        r !== void 0 && e.forwardedEnabledIds.has(r.toLowerCase())
          ? [r.toLowerCase()]
          : [],
      ),
    ).size,
    workerErrors: o.data.error_count,
  };
}
var SZt = 5000,
  Te = 6;
function oPt(e) {
  if (e === void 0) return;
  if (e.refusedByWorker !== void 0) return "refused_by_worker";
  if (e.notApplied) return "not_applied";
  let t = e.forwarded - e.forwardedDisabled;
  if (e.forwarded === 0) return e.stayed.length > 0 ? "none_to_send" : void 0;
  if (t === 0) return;
  if (e.loaded === null) return "not_confirmed";
  if (e.loaded < t)
    return e.loaded === 0 ? "not_installed" : "some_not_installed";
  return;
}
function wt(e) {
  return e === "skipped" || e === "failed";
}
function yt(e) {
  return e === "reading" || e === "posted";
}
function Pt(e) {
  return e === "read_failed" || e === "internal_error" ? e : void 0;
}
var bZt = {
  now: () => Date.now(),
  setTimeout(e, t) {
    let o = setTimeout(e, t);
    return () => clearTimeout(o);
  },
};
function _it(e) {
  let { sessionId: t, reattach: o, manager: r, memory: d } = e,
    w = (_) => {
      try {
        e.say(_);
      } catch (I) {
        h(I);
      }
    },
    O = e.readChoices ?? (() => rPt(e.storageV5)),
    S = e.clock ?? bZt,
    a = e.muted ?? m3,
    E = (_) =>
      new Promise((I, D) => {
        let J = S.setTimeout(
          () => D(Error("a local read for plugin forwarding timed out")),
          SZt,
        );
        Promise.resolve().then(_).then(I, D).finally(J);
      }),
    H = () => E(O),
    A = e.consentDeps ?? WHe(e.storageV5),
    R = e.distrust ?? wZt(e.reach),
    V = () => E(() => _ye(d.consentPin, A, R)),
    Z = new AbortController(),
    N = "no_consent",
    ie,
    U,
    K = () => {
      try {
        e.onChange?.();
      } catch (_) {
        h(_);
      }
    },
    ge = (_) => {
      ((U = _), qe(_, w), K());
    },
    ee = !1,
    ae = !1,
    ue = !1,
    oe = a(),
    ne = !1,
    he = !1,
    M = Ze({
      admission: () => N,
      readChoices: () =>
        H().then(
          (_) => ((ee = !1), _),
          (_) => {
            throw ((ee = !0), _);
          },
        ),
      transport: {
        post(_) {
          let { posted: I, response: D } = r.postControlRequest(_, {
            answerExpected: !1,
          });
          return { posted: I.then(({ outcome: J }) => J), response: D };
        },
      },
      clock: S,
      ...(e.bound !== void 0 && { bound: e.bound }),
      onNotice: (_) => {
        if (
          _.forwarded > _.forwardedDisabled &&
          _.loaded !== 0 &&
          !_.notApplied &&
          _.refusedByWorker === void 0
        )
          ae = !0;
        qe(_, w);
      },
      onOutcome: (_) => {
        ((U = _), K());
      },
      onState: () => K(),
    }),
    de = !1,
    re = null,
    p = () => {
      if (!he) ((he = !0), w({ line: kt, level: "notice" }));
    },
    P = () => {
      if (ne) return;
      ((ne = !0),
        (U = void 0),
        M.disconnected(),
        p(),
        i("tengu_cloud_plugins_admission", {
          admission: u("flag_off"),
          source: u("muted"),
          reattach: o,
        }),
        K());
    },
    C = () => {
      if (
        ((ne = !1),
        (U = void 0),
        w({ line: St, level: "notice" }),
        M.connected({ reattach: o }),
        B)
      )
        M.messageSent();
      K();
    },
    j = (_) => {
      if (Z.signal.aborted) return;
      if ((d.setAsideSessions.delete(t), !de)) {
        re = _;
        return;
      }
      let I = _ === "accepted" ? "admitted" : "opted_out";
      if (I === N && !ee) return;
      let D = "decided";
      if (
        ((N = I),
        (ie = D),
        (U = void 0),
        K(),
        i("tengu_cloud_plugins_admission", {
          admission: u(I),
          source: u(D),
          reattach: o,
        }),
        I === "admitted" && oe)
      ) {
        P();
        return;
      }
      if (((ne = !1), M.disconnected(), M.connected({ reattach: o }), B))
        M.messageSent();
    },
    B = !1,
    se = d.decided.subscribe((_) => {
      try {
        j(_);
      } catch (I) {
        h(I);
      }
    }),
    _e = (e.onMuteRecheck ?? AV)(() => {
      try {
        let _ = a();
        if (Z.signal.aborted || _ === oe) return;
        if (((oe = _), _)) {
          if (N === "admitted" && de && yt(M.state())) {
            P();
            return;
          }
          K();
          return;
        }
        if (((he = !1), ne)) {
          C();
          return;
        }
        K();
      } catch (_) {
        h(_);
      }
    }),
    te = () => {
      if (N !== "admitted") return;
      _ye(d.consentPin, A, R).then(
        (_) => {
          if (_ !== "accepted") j("declined");
        },
        () => {},
      );
    };
  Pe()
    .catch(
      (_) => (
        h(_),
        { admission: "no_consent", source: "internal_error", unsent: [] }
      ),
    )
    .then((_) => {
      if (
        (i("tengu_cloud_plugins_admission", {
          admission: u(_.admission),
          source: u(_.source),
          reattach: o,
        }),
        Z.signal.aborted)
      )
        return;
      if (_.source === "read_failed" || _.source === "internal_error") {
        if (
          (f("ccr_cloud_plugins_forward", _.source),
          (ie = _.source),
          (de = !0),
          K(),
          re !== null)
        )
          j(re);
        return;
      }
      if (
        ((N = _.admission), (ie = _.source), (de = !0), N === "admitted" && oe)
      )
        P();
      else (M.connected({ reattach: o }), K());
      if (_.unsent.length > 0) ge(vt(_.unsent));
      if (re !== null) j(re);
    })
    .catch((_) => {
      h(_);
    });
  async function Pe() {
    let _ = await V().catch(() => null);
    if (_ === null)
      return { admission: "no_consent", source: "read_failed", unsent: [] };
    if (_ !== "unset")
      return {
        admission: _ === "accepted" ? "admitted" : "opted_out",
        source: "stored",
        unsent: [],
      };
    let I = await H().then(
      (cn) => cn,
      () => null,
    );
    if (I === null)
      return { admission: "no_consent", source: "read_failed", unsent: [] };
    let D = yWe(I);
    if (D.counts.forwarded === 0 && D.counts.marketplacesDeclared === 0)
      return {
        admission: "no_consent",
        source: "not_asked",
        unsent: D.dropped,
      };
    if (Z.signal.aborted)
      return { admission: "no_consent", source: "detached", unsent: [] };
    let J = R.withheld();
    if (J !== null) {
      if ((d.setAsideSessions.add(t), re === null))
        w({ line: Rt(J), level: "warning" });
      return { admission: "no_consent", source: "untrusted_store", unsent: [] };
    }
    if (!d.pointedToCommand.shown && re === null)
      ((d.pointedToCommand.shown = !0),
        w({
          line: Ct(
            D.counts.forwarded - D.counts.forwardedDisabled,
            D.counts.forwarded,
          ),
          level: "debug",
        }));
    return { admission: "no_consent", source: "undecided", unsent: [] };
  }
  let q = (_) => () => {
    try {
      _();
    } catch (I) {
      h(I);
    }
  };
  return {
    workerKnownUp: q(() => {
      if (N === "admitted" && oe) P();
      M.workerUp(d.generations.known(t));
    }),
    workerCameUp: q(() => {
      if (N === "opted_out" && ae && !ue)
        ((ue = !0), w({ line: bt, level: "notice" }));
      te();
      let _ = d.generations.next(t);
      if (N === "admitted" && oe) P();
      else if (N === "admitted" && de && ee) {
        if (((U = void 0), M.disconnected(), M.connected({ reattach: o }), B))
          M.messageSent();
      }
      M.workerUp(_);
    }),
    pluginInstallFrame: q(() => M.pluginInstallFrame()),
    messageSent: q(() => {
      ((B = !0), M.messageSent());
    }),
    teardown: q(() => {
      if (Z.signal.aborted) return;
      (d.setAsideSessions.delete(t), Z.abort(), _e(), se(), M.disconnected());
    }),
    state: () => ({
      settled: de,
      admission: N,
      source: ie,
      notice: U,
      muted: ne,
      answerPending: N === "admitted" && !ne && U === void 0 && !wt(M.state()),
      gaveUp: Pt(M.skipped()),
    }),
  };
}
var kt =
    "Remote tool serving was turned off by Anthropic (emergency switch). Your plugins are not sent from this computer while it is off; they are sent again once it is back on.",
  St =
    "Remote tool serving was turned back on by Anthropic. Your plugins are sent to this cloud session again from this computer.",
  bt =
    "This cloud session restarted without your plugins: they are no longer sent from this machine, because the saved Yes was withdrawn (a No in /cloud-plugins, or the answer was removed). Run /cloud-plugins to change that.";
function wZt(e) {
  let t = null,
    o = null,
    r = null,
    d = () =>
      (t ??= Promise.resolve()
        .then(() => e.judge())
        .catch(() => "unknown")
        .then((w) => ((o = w), w)));
  return {
    storeUntrusted: () => d().then((w) => w !== "outside"),
    onUntrusted: () => {
      r = o === null || o === "outside" ? "unknown" : o;
    },
    withheld: () => r,
  };
}
function Rt(e) {
  let t = an(WZ());
  return `The saved answer about your plugins is not used for this cloud session, because ${e === "in_launch_dir" ? `the session itself can change ${t} from the folder or repository it runs in` : e === "in_sync_root" ? `the session itself can change ${t} through the folder it syncs` : e === "in_other_root" ? `the session itself can change ${t} through a folder it may write on this machine (an added directory or a settings write grant)` : `it could not be checked that the session cannot change ${t}`}; run /cloud-plugins to decide for this session.`;
}
function Ct(e, t) {
  return `${e > 0 ? `Your ${e} enabled ${x(e, "plugin")} can be used in` : `Your ${t} plugin ${x(t, "choice")} can apply to`} your cloud sessions from this machine \u2014 run /cloud-plugins to decide (nothing is sent until you do).`;
}
function vt(e) {
  return {
    forwarded: 0,
    forwardedDisabled: 0,
    loaded: null,
    stayed: e,
    notApplied: !1,
    messageWentFirst: !1,
  };
}
function qe(e, t) {
  Et(e).forEach(t);
}
function Et(e) {
  return [...At(e), ...Ft(e.stayed, e.forwarded === 0)];
}
function At(e) {
  if (e.forwarded === 0 && e.refusedByWorker === void 0 && !e.notApplied)
    return [];
  if (e.refusedByWorker !== void 0)
    return [
      {
        line: `This cloud session did not take your plugins: ${Ot[e.refusedByWorker]}. Your plugins on this machine are unchanged.`,
        level: "warning",
      },
    ];
  if (e.notApplied)
    return [
      {
        line: "Your plugins may not have reached this cloud session: it did not accept the request. They will be sent again if the session restarts or you reconnect to it; /reload-plugins shows what is loaded there now.",
        level: "warning",
      },
    ];
  let t = e.forwarded - e.forwardedDisabled,
    o = e.forwardedDisabled,
    r =
      o > 0
        ? ` (${o} you turned off here ${x(o, "stays", "stay")} off there)`
        : "";
  if (t === 0)
    return [
      {
        line: `The ${o} ${x(o, "plugin")} you turned off here ${x(o, "is", "are")} off in this cloud session too.`,
        level: "debug",
      },
    ];
  let d = e.loaded !== null && e.loaded >= t,
    w =
      e.loaded === null
        ? `Sent your ${t} enabled ${x(t, "plugin")} to this cloud session${r}; it has not confirmed them \u2014 /reload-plugins shows what loaded.`
        : e.loaded >= t
          ? `Using your ${t} ${x(t, "plugin")} in this cloud session${r}.`
          : e.loaded === 0
            ? `${t === 1 ? "Your enabled plugin could not" : `None of your ${t} enabled plugins could`} be installed in this cloud session yet${r} \u2014 the session is still fetching ${t === 1 ? "it" : "them"} or cannot reach ${t === 1 ? "its" : "their"} marketplace; /reload-plugins shows what loaded.`
            : `Using ${e.loaded} of your ${t} plugins in this cloud session${r}; the other ${t - e.loaded} could not be installed there yet \u2014 the session is still fetching ${t - e.loaded === 1 ? "it" : "them"} or cannot reach ${t - e.loaded === 1 ? "its" : "their"} marketplace; /reload-plugins shows what loaded.`,
    O = !e.messageWentFirst
      ? ""
      : e.loaded === null
        ? " If they loaded, they apply from your next prompt; the one already sent may have run without them."
        : " They apply from your next prompt; the one already sent may have run without them.";
  return [
    { line: `${w}${O}`, level: d && !e.messageWentFirst ? "debug" : "notice" },
  ];
}
function Ft(e, t) {
  if (e.length === 0) return [];
  let o = e
      .slice(0, Te)
      .map(
        ({ id: w, reason: O }) => `${io(w, { maxCodeUnits: 80 })} (${Tt[O]})`,
      )
      .join("; "),
    r = e.length > Te ? `; and ${e.length - Te} more` : "";
  return [
    {
      line: `${t ? `Not using your plugins in this cloud session; ${e.length} ${x(e.length, "stays", "stay")} on this machine` : `${e.length} of your plugin choices ${x(e.length, "stays", "stay")} on this machine`}: ${o}${r}.`,
      level: "debug",
    },
  ];
}
var Tt = {
    invalid_id: "not a plugin@marketplace id",
    invalid_value: "its setting is not true or false",
    directory_loaded:
      "loaded with --plugin-dir, which exists only on this machine",
    unknown_builtin: "this build has no such built-in plugin",
    ambiguous_marketplace:
      "its marketplace name is spelled in conflicting ways here",
    blocked_by_policy: "your organization's policy does not allow it",
    not_installed_here:
      "only the repository\u2019s settings enable it and it is not installed on this machine; the cloud session goes by its own copy of the repository for that",
    unknown_marketplace: "its marketplace is not known on this machine",
    untrusted_for_folder:
      "its marketplace is declared by this folder's files, which you have not trusted for plugins",
    reserved_name_conflict:
      "its marketplace name is reserved for an official marketplace it does not match",
    not_provided_by_container:
      "its marketplace name is reserved for an official marketplace that cloud sessions do not have",
    local_marketplace: "its marketplace lives on this machine or your network",
    needs_credentials:
      "its marketplace needs credentials, which are never sent",
    insecure_transport:
      "its marketplace is fetched over an unencrypted connection",
    invalid_marketplace: "its marketplace source is malformed",
    over_cap: "over the limit of plugins one cloud session is sent",
    guard_builtin_not_own_choice:
      "a repository set it, and only your own settings may decide this one",
  },
  Ot = {
    disabled: "plugin forwarding is switched off in that container",
    not_managed_cloud_worker:
      "that kind of cloud session does not take plugins from your machine",
    entrypoint:
      "that kind of cloud session does not take plugins from your machine",
    hermetic: "that cloud session runs sealed off from outside configuration",
    not_admitted: "plugin forwarding is not available there",
    flag_off: "plugin forwarding is not switched on for your account there",
    flag_unsettled:
      "it could not confirm in time that plugin forwarding is on for your account",
    malformed: "it did not accept the request",
    other: "it did not accept the request",
  };
var Xe = {
  files: "some files were skipped there",
  settings: "your settings file was not applied there",
  part: "part of it was not applied there",
};
var sPt = "Synced from this computer:",
  yye = {
    projectFiles: "Project files",
    settings: "Settings",
    plugins: "Plugins",
  },
  nn = ["projectFiles", "settings", "plugins"],
  Dt = L.tick,
  iPt = L.cross,
  xt = "\u2026",
  pe = { mark: "synced" },
  fe = { mark: "pending" };
function F(e) {
  return { mark: "not_synced", words: e };
}
function Nt(e) {
  switch (e.mark) {
    case "synced":
      return Dt;
    case "pending":
      return xt;
    case "not_synced":
      return iPt;
  }
}
function Oe(e, t) {
  let o = `${Nt(t)} ${e}`;
  switch (t.mark) {
    case "synced":
      return t.note === void 0 ? o : `${o} (${t.note})`;
    case "pending":
      return o;
    case "not_synced":
      return `${o} \u2014 ${t.words}`;
  }
}
function Lt(e) {
  return [sPt, ...nn.map((t) => Oe(yye[t], e[t]))];
}
function k$n(e) {
  let [t, ...o] = Lt(e),
    r = `${t} ${o.join(" \xB7 ")}`,
    d = aPt(e);
  return d === void 0 ? r : `${r}. ${d}`;
}
function aPt(e) {
  return e.whileClosed === void 0
    ? void 0
    : pT[`while_closed.${e.whileClosed}`];
}
function x$n(e, t) {
  return e.whileClosed === t.whileClosed && nn.every((o) => Mt(e[o], t[o]));
}
function Mt(e, t) {
  return Oe("", e) === Oe("", t);
}
function H$n(e, t) {
  switch (e.state) {
    case "seeding":
      return fe;
    case "armed":
      return on({
        otherWindow: e.writerElsewhere,
        firstUploadPending: e.firstUpload === "pending",
        syncedFiles: e.syncedFiles,
        uploadOnly: e.direction === "upload_only",
      });
    case "absent":
    case "off":
    case "stopped":
      return F(rn(e.state, e.reason, t));
  }
}
function TZt(e, t) {
  switch (e.state) {
    case "armed":
      if (e.firstUpload === "pending" || e.direction === "pending") return;
      return e.direction;
    case "seeding":
      return;
    case "absent":
    case "off":
    case "stopped":
      return t.serves === !0 && tn.some((o) => o === e.reason)
        ? "through_this_computer"
        : void 0;
  }
}
var tn = [
  "refused",
  "too_large",
  "start_failed",
  "withdrawn",
  "switched_off",
  "lane_unavailable",
];
function I$n(e) {
  let t = e.directory_sync;
  if (t.state === "armed") return t.direction === void 0;
  return (
    t.state === "stopped" &&
    tn.some((o) => o === t.reason) &&
    e.device.status === "bound" &&
    e.serving?.state === "pending"
  );
}
function yit(e) {
  return { fromUpload: e?.kind === "bundle" || e?.kind === "folder" };
}
var It = [
  "arm_failed",
  "internal_error",
  "seed_incomplete",
  "engine_unavailable",
  "layout_unserved",
];
function on(e) {
  if (e.otherWindow) return F("another window here is already syncing them");
  if (e.firstUploadPending) return fe;
  if (e.syncedFiles === 0)
    return F("none of this folder's files are in the session");
  let t = [
    ...(e.syncedFiles === null
      ? []
      : [`${e.syncedFiles} ${x(e.syncedFiles, "file")}`]),
    ...(e.uploadOnly ? ["upload only"] : []),
  ];
  return t.length === 0 ? pe : { mark: "synced", note: t.join(", ") };
}
var Se = {
    not_opted_in: "this folder is not set to sync",
    not_from_here: "this session was not started from this folder",
    not_set_up: "not set up for this session",
    internal_error: "sync could not be set up",
    arm_failed: "sync could not be set up",
    shut_down: "sync has ended for this session",
    not_armed: "this session did not start from this folder's files",
    seed_incomplete: "the first upload did not complete",
    withdrawn: "this folder is no longer set to sync",
    switched_off: "sync is switched off on this machine",
    engine_declined: "sync is switched off on this machine",
    engine_unsupported: "sync is not available for this session",
    engine_unavailable: "sync is not available for this session",
    layout_unserved: "sync is not available for this session",
    lane_unavailable: "sync is not available for this session",
    other_writer: "another window or computer is already syncing them",
    unauthorized: "this machine is not signed in for it",
    peer_silent: "the cloud session never answered",
    repeated_errors: "sync kept failing here",
    store_unreadable: "this machine's record of the session was lost",
    store_removed: "this machine's record of the session was lost",
    store_unwritable: "this machine's record of the session was lost",
    writer_lock_lost: "this window lost its hold on the session",
    gave_up:
      "your changes could not reach the cloud session after repeated tries; sync gave up in this window \u2014 re-open the session to sync again",
    refused:
      "this folder holds something sync cannot carry; Claude works on this machine directly",
    too_large:
      "the changes here are too large to sync; Claude works on this machine directly",
    start_failed:
      "the cloud session could not start from this machine's files; Claude works on this machine directly",
    ended_earlier:
      "sync ended earlier in this session; Claude works on this machine directly",
    offline:
      "this folder's changes could not be synced to the cloud; Claude works on this machine directly",
  },
  Je = {
    ...Se,
    seeded_elsewhere: Se.not_from_here,
    not_seeded: Se.not_set_up,
    lookup_failed: Se.internal_error,
  };
function rn(e, t, o) {
  if (o.fromUpload && It.some((d) => d === t))
    return "uploaded once at start; later changes won't sync";
  return (
    (t !== void 0 && Object.hasOwn(Je, t) ? Je[t] : void 0) ??
    (e === "stopped"
      ? "sync stopped for this session"
      : "sync is off for this session")
  );
}
function P$n(e) {
  if (e.kind === "absent") return F(ce[e.reason]);
  let { outcome: t, readBack: o } = e;
  if (t === void 0) return fe;
  if (t.kind === "none") return F(Ut(t.reason));
  let r = t.settingsRefused === void 0 ? void 0 : F(sn[t.settingsRefused]);
  switch (t.outcome) {
    case "sent":
    case "unchanged":
    case "conflict_resolved":
      return r ?? (o === void 0 ? pe : Qe(o));
    case "deadline":
      return r ?? (o === void 0 ? F("the upload took too long") : Qe(o));
    case "raced":
      return F("another launch of this session sent its settings first");
    case "not_forwarded_at_create":
    case "no_standing_pack":
      return F("this session was started without them");
    case "lane_full":
      return F("the session holds as many synced files as it may");
    case "unavailable":
      return F("not available for this session");
    case "unauthorized":
      return F("this machine is not signed in for it");
    case "failed":
      return F("the upload failed");
    case "aborted":
      return F("the upload was cancelled");
  }
}
function Qe(e) {
  switch (e.verdict) {
    case "applied_before_first_ask":
    case "applied_late":
      return e.left === null ? pe : F(Xe[e.left]);
    case "behind":
      return pe;
    case "not_applied":
      return F("the cloud session could not apply them");
    case "stale":
      return F("the cloud session holds a different copy");
    case "not_seen":
      return F("the cloud session has not confirmed them");
    case "unreadable":
      return F("the cloud session's answer could not be read");
  }
}
var sn = {
    schema_rejected: "your settings file has errors",
    settings_too_large: "your settings file is too large",
    settings_unreadable: "your settings file could not be read",
  },
  Re = "turned off by Anthropic for now (emergency switch)",
  ce = {
    not_enabled: "not enabled for this account",
    kept_on_this_machine: "you chose not to send them",
    not_decided: "not decided on this machine yet (/config, for new sessions)",
    launch_keeps_them: "this launch keeps them on this machine",
    not_sent: "not sent with this session",
  };
function Ut(e) {
  switch (e) {
    case "flag_off":
      return ce.not_enabled;
    case "no_consent":
      return "kept on this machine (see /config)";
    case "user_settings_disabled":
      return "this launch does not load your user settings";
    case "muted":
      return Re;
    case "unbound":
      return "this session is not bound to this machine";
    case "aborted":
      return "the upload was cancelled";
    case "failed":
      return "preparing them failed";
    case "too_slow":
      return "preparing them took too long";
    case "home_unvettable":
      return "your settings folder could not be fully examined";
    case "nothing_to_send":
      return "nothing to send from this machine";
    case "rules_unreadable":
      return "a settings file here has errors";
  }
}
function O$n(e, t, o) {
  return e === void 0
    ? { kind: "absent", reason: t }
    : { kind: "seed", outcome: e.outcome(), readBack: o };
}
var Wt = {
  not_enabled: "not enabled for this account",
  switched_off: "switched off on this machine",
  attach_failed: "could not be sent from this machine",
};
function D$n(e) {
  if (e.kind === "pending") return fe;
  if (e.kind === "absent") return F(Wt[e.reason]);
  let { state: t } = e;
  if (t.muted) return F(Re);
  if (!t.settled || t.answerPending) return fe;
  switch (t.admission) {
    case "flag_off":
      return F("not enabled for this account");
    case "opted_out":
      return F("you chose not to send them");
    case "no_consent":
      return F(dn(t.source));
    case "admitted":
      return jt(t);
  }
}
function dn(e) {
  switch (e) {
    case "not_asked":
      return "no plugins to send from this machine";
    case "read_failed":
      return "your plugin choices here could not be read";
    case "detached":
    case "internal_error":
      return "they could not be sent this time";
    case "not_bound":
      return "this session is not bound to this machine";
    case "muted":
      return Re;
    case "untrusted_store":
      return "the saved answer here could be changed by this session; run /cloud-plugins to decide for it";
    case void 0:
    case "undecided":
    case "stored":
    case "decided":
      return "run /cloud-plugins to send them";
  }
}
function jt(e) {
  let t = oPt(e.notice);
  if (t !== void 0) return F(ln[t]);
  return e.notice === void 0 && e.gaveUp !== void 0 ? F(dn(e.gaveUp)) : pe;
}
var ln = {
  refused_by_worker: "this cloud session does not take plugins",
  not_applied: "the cloud session did not accept them",
  none_to_send: "no plugins to send from this machine",
  not_confirmed: "sent, not confirmed by the session",
  not_installed: "they could not be installed there",
  some_not_installed: "some could not be installed there",
};
function L$n(e) {
  let t = e.directory_sync;
  return {
    projectFiles:
      t.state === "seeding"
        ? fe
        : t.state === "armed"
          ? on({
              otherWindow: t.other_window === !0,
              firstUploadPending:
                t.first_upload !== void 0 && t.first_upload !== "landed",
              syncedFiles: t.synced_files ?? null,
              uploadOnly: t.direction === "upload_only",
            })
          : F(
              rn(t.state, t.reason, {
                fromUpload: t.started_from_upload === !0,
              }),
            ),
    settings: en(e.settings),
    plugins: en(e.plugins),
    ...Bt(t, $t(e)),
  };
}
function $t(e) {
  if (e.serving === void 0) return;
  return e.device.status === "bound" && e.serving.state === "on";
}
function Bt(e, t) {
  let o = TZt(
    e.state === "armed"
      ? {
          state: "armed",
          direction: e.direction ?? "pending",
          firstUpload:
            e.first_upload === void 0
              ? null
              : e.first_upload === "landed"
                ? "landed"
                : "pending",
        }
      : { state: e.state, reason: e.reason },
    { serves: t },
  );
  return o === void 0 ? {} : { whileClosed: o };
}
function en(e) {
  if (e === void 0) return F("not enabled for this launch");
  if (e.state === "forwarded") return pe;
  return F(
    e.reason !== void 0 && Kt(e.reason)
      ? un[e.reason]
      : "not sent from this machine",
  );
}
function Kt(e) {
  return Object.hasOwn(un, e);
}
var un = {
  flag_off: ce.not_enabled,
  launch_flag: ce.launch_keeps_them,
  declined: ce.kept_on_this_machine,
  no_consent: "not decided yet on this machine",
  unbound: "this session is not bound to this machine",
  not_bound: "this session is not bound to this machine",
  not_seeded: ce.not_sent,
  nothing_to_forward: "nothing to send from this machine",
  nothing_to_send: "nothing to send from this machine",
  rules_unreadable: "a settings file here has errors",
  plan_failed: "preparing them failed",
  user_settings_disabled: "this launch does not load your user settings",
  muted: Re,
  too_slow: "preparing them took too long",
  home_unvettable: "your settings folder could not be fully examined",
  aborted: "the upload was cancelled",
  deadline: "the upload took too long",
  raced: "another launch of this session sent its settings first",
  not_forwarded_at_create: "this session was started without them",
  no_standing_pack: "this session was started without them",
  lane_full: "the session holds as many synced files as it may",
  unavailable: "not available for this session",
  unauthorized: "this machine is not signed in for it",
  failed: "the upload failed",
  ...sn,
  ...ln,
  unreadable: "your plugin choices here could not be read",
  could_not_send: "they could not be sent this time",
};
export {
  WZ,
  v$n,
  WHe,
  R$n,
  _ye,
  yWe,
  rPt,
  SZt,
  oPt,
  bZt,
  _it,
  wZt,
  sPt,
  yye,
  iPt,
  k$n,
  aPt,
  x$n,
  H$n,
  TZt,
  I$n,
  yit,
  P$n,
  O$n,
  D$n,
  L$n,
};

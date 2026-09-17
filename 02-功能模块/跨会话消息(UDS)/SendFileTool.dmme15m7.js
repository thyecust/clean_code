// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 187 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Dr } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { lit as S, fromEnum as u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { Ve, l, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { St } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { Xme, uf, GCt, yr, jD, eZe } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { BU } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { ot } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { mn } from "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import { hasIsolatePeerMachines as gie } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { getAPIProvider as Pe } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { ps, isPolicyAllowed as Mt } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { getToolPermissionContext as ce } from "../权限系统/chunk-fjrcf22x.js";
import { Kt, Tt } from "../权限系统/chunk-qdy0h5k2.js";
import { qNe, $re, abt } from "../Bridge-RemoteControl/chunk-1yq098a7.js";
import {
  tdt,
  bPe,
  Uee,
  qGe,
  zGe,
  Ace,
  f2,
  Yb,
  wPe,
  TPe,
  EPe,
  SF,
} from "../Teammates团队/chunk-sr4920wy.js";
import { ni, sm, READ_PATH_PROBE as Gy, readPermissionDecisionForPath as ww } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { Ds, i3, gzn, hzn, x3, getCurrentSessionPeerNameFor as n8e } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { $Ae, UAe, z3t, BAe, xSn, mD } from "./chunk-ddtmwhn7.js";
import { $i } from "../Teammates团队/chunk-t899nada.js";
import { hO, uI, rOe, Lpt } from "../../01-核心基础设施/共享小工具-未细化/chunk-y2pwa8n5.js";
import { xpt, Ean, Aan } from "./chunk-qvnte9zp.js";
import {
  IGe,
  XSe,
  wNt,
  _ce,
  Aut,
  TNt,
  uPe,
  Cut,
  dPe,
  OGe,
} from "../Teammates团队/chunk-wsyjx2r0.js";
import { d7e, YNe, _Sn } from "../图片-截图-ComputerUse/chunk-0dcnsftb.js";
import { Vr } from "../../01-核心基础设施/共享小工具-未细化/chunk-9mfwkyac.js";
import { cp } from "../Teammates团队/chunk-enjekn9t.js";
import { s, T, O, v, c, Qe, ai } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { realpath as ue, unlink as me } from "fs/promises";
import { basename as J } from "path";
var Q = m(() =>
    Qe({
      to: s().describe(
        `Recipient: a peer session name from ${$i}, or an explicit uds:<socket> / bridge:<session id> address`,
      ),
      files: ai(
        (e) => (typeof e === "string" ? [e] : e),
        v(s()).min(1).max(uI),
      ).describe(
        "File paths (absolute or relative to cwd) to send. Always pass an array, even for a single file.",
      ),
      message: s()
        .optional()
        .describe("Optional short message delivered alongside the files"),
    }),
  ),
  he = m(() =>
    c({
      success: O(),
      message: s(),
      msg_id: s().optional(),
      files: v(
        c({
          path: s(),
          size: T().optional(),
          sha256: s().optional(),
          file_uuid: s().optional(),
          error: s().optional(),
        }),
      ).describe("Per-file transfer outcome"),
    }),
  ),
  Z = "Cross-session file transfer is not available in this session.",
  ne = 4,
  pe = Ds(ne, (e) => e()),
  ge = Ds(ne, (e) => e());
function ee(e) {
  if (e === void 0 || e === 0) return;
  return ` (note: ${e} other live ${x(e, "agent now shares", "agents now share")} this name)`;
}
var G = `use ${Vr} to "${cp}" and reference the file as @<path>`,
  ye = {
    unreachable_elevated:
      "target is an elevated-security session unreachable from a cloud session",
    recipient_gate_off:
      "target session reports it cannot receive cross-session messages",
    self: tdt,
    impersonation:
      "target record advertises this session's own token \u2014 refused as impersonation",
  };
async function se(e, o, a) {
  let f = uf(e);
  if (f.scheme === "uds") {
    if (Uee(f.target))
      return { kind: "refused", reason: "self", message: Ace(e) };
    return { kind: "uds", sock: f.target, label: e, byName: !1 };
  }
  if (f.scheme === "bridge") {
    if (f2(f.target))
      return { kind: "refused", reason: "self", message: Ace(e) };
    let p = qNe(a.session, f.target, e);
    if (p)
      return { kind: "refused", reason: "unreachable_elevated", message: p };
    let b = $re(a.session, f.target, e);
    if (b) return { kind: "refused", reason: "recipient_gate_off", message: b };
    return {
      kind: "bridge",
      sessionId: f.target,
      label: e,
      byName: !1,
      ...(abt(a.session, f.target) && { identityNote: TNt }),
    };
  }
  if (f.scheme === "did")
    return {
      kind: "refused",
      message: `DID peers accept text only \u2014 use ${Vr} to send to '${e}'.`,
    };
  let t = await OGe(
    a.session,
    e,
    o,
    a.getAppState(),
    a.storageV5,
    a.credentials,
  );
  switch (t.kind) {
    case "local-session":
      if (bPe(t.sock))
        return { kind: "refused", reason: "self", message: Ace(e) };
      if (qGe(e, t.sock))
        return { kind: "refused", reason: "impersonation", message: zGe(e) };
      if (Uee(t.sock))
        return { kind: "refused", reason: "self", message: Ace(e) };
      return {
        kind: "uds",
        sock: t.sock,
        label: t.displayName,
        byName: !0,
        contestedNote: ee(t.sameNamedSiblings),
        identityNote: ` (${_ce}${uPe(t)})${
          t.previouslyPinned
            ? `
${wNt}`
            : ""
        }`,
        pin: { displayName: t.displayName, kind: "session", id: t.sock },
      };
    case "cloud-session": {
      if (f2(t.sessionId))
        return { kind: "refused", reason: "self", message: Ace(e) };
      let {
        isRemoteControlPeerUnreachableFromHere: p,
        formatUnreachableElevatedRefusal: b,
      } = import.meta.require("../Bridge-RemoteControl/chunk-tyce0p0b.js");
      if (t.via === "remote-control" && p())
        return {
          kind: "refused",
          reason: "unreachable_elevated",
          message: b(t.displayName),
        };
      let k = $re(a.session, t.sessionId, t.displayName);
      if (k)
        return { kind: "refused", reason: "recipient_gate_off", message: k };
      return {
        kind: "bridge",
        sessionId: t.sessionId,
        label: t.displayName,
        byName: !0,
        via: t.via,
        contestedNote: ee(t.sameNamedSiblings),
        identityNote: ` (${Aut(t.via)}${t.via === "remote-control" && !t.reportsInbound && !t.inboundReportUnavailable ? TNt : ""}${Cut(t)})${
          t.previouslyPinned
            ? `
${wNt}`
            : ""
        }`,
        pin: { displayName: t.displayName, kind: t.refKind, id: t.sessionId },
      };
    }
    case "ambiguous": {
      let p = EPe(e);
      if (p === "categorical" && t.matchedBy === "prefix" && TPe(t))
        return { kind: "refused", reason: "self", message: SF(e, Yb(a), G) };
      let b = Date.now(),
        k = t.candidates.filter((C) => C.where !== "in-process"),
        _ = k.map((C) => `  ${eZe(C, b)}`).join(`
`),
        h = t.bridgeUnavailable
          ? `
Your account's other sessions (Remote Control and cloud) could not be checked just now, so this list may be missing one; retry if you meant one of them.`
          : "";
      if (t.cloudUnavailable)
        h += `
The cloud session list could not be fetched just now, so this list may be missing a cloud session; retry if you meant one.`;
      if (t.localUnavailable)
        h += `
The sessions on this machine could not be listed just now, so this list may be missing one here; retry if you meant a session on this machine.`;
      if (t.searchTruncated) h += dPe;
      if (t.pinnedIdentityClaimedLocally)
        h += `
Note: '${t.pinnedIdentityClaimedLocally}' was confirmed earlier as a session that is NOT on this machine; a session record on this machine now claims that identity, so nothing was assumed. A session on this machine claiming that identity, that your user did not set up, is suspicious: ask the user before confirming anyone.`;
      return {
        kind: "refused",
        message:
          k.length > 0
            ? `'${e}' matches ${k.length} peer session(s). Re-send with the ref:
${_}${h}${p !== "no" ? wPe(e, Yb(a), G) : ""}`
            : `'${e}' matches only agents in this session \u2014 use ${Vr} and reference the file as @<path> instead.${h}`,
      };
    }
    case "not-found": {
      let p = EPe(e),
        b = t.closest.some((w) => yr(w.name) === yr(jD(e)?.name ?? e));
      if (p === "categorical" && !b && TPe(t))
        return { kind: "refused", reason: "self", message: SF(e, Yb(a), G) };
      let k = a.options.tools.some((w) => Kt(w, $i)),
        _ = t.closest.filter((w) => w.where !== "in-process"),
        h =
          _.length > 0
            ? ` Did you mean: ${_.map((w) => w.name).join(", ")}?`
            : "",
        C = k
          ? `Use ${$i} to see the sessions you can send files to.`
          : "Check the spelling.",
        d = t.cloudUnavailable
          ? `
The cloud session list could not be fetched just now, so cloud sessions were not searched.`
          : "",
        z = t.bridgeUnavailable
          ? `
Your account's other sessions (Remote Control and cloud) could not be checked just now, so they were not searched. If '${e}' is one, retry${k ? ` (or run ${$i} first)` : ""}.`
          : "",
        M = t.pinnedIdentityClaimedLocally
          ? `
Note: '${t.pinnedIdentityClaimedLocally}' was confirmed earlier as a session that is NOT on this machine; a session record on this machine now claims that identity, which hides it here \u2014 nothing was sent.${k ? ` ${$i} will not show it while that claim stands.` : ""} A session on this machine impersonating it is suspicious: ask the user.`
          : "",
        B = t.localUnavailable
          ? `
The sessions on this machine could not be listed just now, so they were not searched; retry if you meant a session on this machine.`
          : "";
      return {
        kind: "refused",
        message: `No peer session named '${e}' is reachable.${h}${d}${z}${B}${t.searchTruncated ? dPe : ""}${M}${p !== "no" ? wPe(e, Yb(a), G) : ""}
${C}`,
      };
    }
    default:
      return {
        kind: "refused",
        message: `'${e}' is an agent in this session \u2014 it already shares your filesystem, so there is nothing to transfer. Use ${Vr} and reference the file as @<path> instead. ${i3} is for OTHER Claude Code sessions (a peer session on this machine, or a Remote Control / cloud session).`,
      };
  }
}
class V extends x3 {}
class q extends x3 {}
function K(e) {
  return [e.to, e.message ?? null, e.files.toSorted()];
}
function re({ toolUseId: e, toolState: o }, a) {
  if (!e) return;
  o.get(V).set(e, K(a), !0);
}
function be({ toolUseId: e, toolState: o }, a) {
  if (!e) return !1;
  let f = o.get(V),
    t = f.take(e, K(a)) === !0;
  return (f.dropToolUse(e), t);
}
var oe =
  "If the recipient is a Remote Control or cloud session, the file contents travel via Anthropic's servers to another machine.";
function te(e, o, a) {
  if (!gie() || e.behavior !== "ask") return e;
  return (
    re(o, a),
    {
      ...e,
      message: ps(
        `${e.message ?? `Send ${a.files.length} ${x(a.files.length, "file")} to '${a.to}'?`} ${oe} (isolatePeerMachines is enabled.)`,
      ),
    }
  );
}
function _e({ toolUseId: e, toolState: o }, a, f) {
  if (!e || f.kind === "refused") return;
  o.get(q).set(e, K(a), f);
}
function Se({ toolUseId: e, toolState: o }, a) {
  if (!e) return;
  let f = o.get(q),
    t = f.take(e, K(a));
  return (f.dropToolUse(e), t);
}
function Ne(e) {
  return e?.type === "rule" && e.rule?.ruleBehavior === "ask";
}
var $e = Tt({
  name: i3,
  searchHint: "send files to another Claude Code session",
  ruleContentField: "files",
  maxResultSizeChars: 1e5,
  shouldDefer: !0,
  userFacingName() {
    return "SendFile";
  },
  get inputSchema() {
    return Q();
  },
  get outputSchema() {
    return he();
  },
  isEnabled() {
    return rOe();
  },
  isConcurrencySafe() {
    return !1;
  },
  isReadOnly() {
    return !1;
  },
  toAutoClassifierInput(e) {
    let o = Array.isArray(e.files)
        ? e.files.join(", ")
        : typeof e.files === "string"
          ? e.files
          : "[no files]",
      a =
        typeof e.message === "string" && e.message.length > 0
          ? ` \u2014 message: ${e.message}`
          : "";
    return `to ${e.to}: ${o}${a}`;
  },
  async checkPermissions(e, o) {
    let a = ce(o),
      f = ni(a, Gy);
    if (f)
      return {
        behavior: "deny",
        message: "SendFile reads file contents; that action is disabled.",
        decisionReason: { type: "rule", rule: f },
      };
    let t,
      p,
      b = e.files.map((h) => ww(ot(h), a)),
      k = b.find((h) => h.behavior === "deny");
    if (k) return k;
    for (let h of b)
      if (h.behavior !== "allow") {
        if (Ne(h.decisionReason)) {
          p ??= h;
          continue;
        }
        if (t === void 0) t = h;
      }
    if (p !== void 0) return te(p, o, e);
    let _ = sm(a, Gy);
    if (_)
      return te(
        {
          behavior: "ask",
          message: ps(
            `Send ${e.files.length} ${x(e.files.length, "file")} to '${e.to}'? SendFile reads file contents.`,
          ),
          decisionReason: { type: "rule", rule: _ },
        },
        o,
        e,
      );
    if (gie()) {
      let h;
      try {
        ((h = await se(e.to, e.message ?? "", o)), _e(o, e, h));
      } catch (C) {
        n(
          `[SendFile] up-front resolve failed (${BU(l(C))}) \u2014 asking as usual`,
          { level: "warn" },
        );
      }
      if (h?.kind === "refused" && h.reason !== void 0)
        return (
          i("tengu_send_file", {
            transport: S("refused"),
            file_count: e.files.length,
            delivered_count: 0,
            success: !1,
          }),
          {
            behavior: "deny",
            message: ps(h.message),
            decisionReason: { type: "other", reason: ye[h.reason] },
          }
        );
      return (
        re(o, e),
        {
          behavior: "ask",
          message: ps(
            `Send ${e.files.length} ${x(e.files.length, "file")} to '${e.to}'? ${oe}`,
          ),
          decisionReason: {
            type: "safetyCheck",
            reason:
              "isolatePeerMachines is enabled \u2014 file transfer to another session requires explicit approval",
            classifierApprovable: !1,
            circuitBreaker: "isolatePeerMachines",
          },
        }
      );
    }
    if (t !== void 0) return t;
    if (a.mode === "plan")
      return {
        behavior: "ask",
        message: `${i3} would send file contents to another session \u2014 approve the plan first.`,
        decisionReason: { type: "mode", mode: "plan" },
      };
    if (a.mode === "auto")
      return {
        behavior: "passthrough",
        message: "SendFile requires classifier review.",
      };
    return { behavior: "allow", updatedInput: e };
  },
  async validateInput({ to: e, files: o }, a) {
    if (!rOe())
      return (
        i("tengu_send_file", {
          transport: S("gated_off"),
          file_count: o.length,
          delivered_count: 0,
          success: !1,
        }),
        { result: !1, message: Z, errorCode: 9 }
      );
    let f = GCt(e, $i);
    if (f !== void 0) return { result: !1, message: f, errorCode: 9 };
    let t = uf(e);
    if (
      (t.scheme === "uds" && Uee(t.target)) ||
      (t.scheme === "bridge" && f2(t.target))
    )
      return { result: !1, message: Ace(e), errorCode: 9 };
    for (let p of o) {
      let b = _Sn(p);
      if (b !== void 0) return b;
      if (Dr(ot(p)))
        return {
          result: !1,
          message: `Attachment "${p}" is a /net autofs -hosts path, which is not supported.`,
          errorCode: 1,
        };
    }
    return { result: !0 };
  },
  async description() {
    return gzn;
  },
  async prompt() {
    return hzn(uI, hO / 1048576);
  },
  mapToolResultToToolResultBlockParam(e, o) {
    let a = e.files.filter((t) => t.error !== void 0),
      f = [e.message];
    if (a.length > 0)
      f.push(
        `${a.length} ${x(a.length, "file")} could NOT be sent:
` +
          a.map((t) => `  ${t.path}: ${t.error}`).join(`
`),
      );
    return {
      tool_use_id: o,
      type: "tool_result",
      content: f.join(`
`),
    };
  },
  renderToolUseMessage(e) {
    if (typeof e.to !== "string") return null;
    return `${Array.isArray(e.files) ? e.files.join(", ") : ""} \u2192 ${e.to}`;
  },
  async call(e, o, a, f) {
    let { to: t } = e,
      { message: p } = e,
      b = e.files,
      k = be(o, e),
      _ = Se(o, e),
      h = o.abortController.signal,
      C = ce(o);
    if (!rOe())
      return (
        i("tengu_send_file", {
          transport: S("gated_off"),
          file_count: b.length,
          delivered_count: 0,
          success: !1,
        }),
        { data: { success: !1, message: Z, files: [] } }
      );
    let d = _ ?? (await se(t, p ?? "", o));
    if (_?.kind === "bridge") {
      let {
          isRemoteControlPeerUnreachableFromHere: r,
          formatUnreachableElevatedRefusal: y,
        } = import.meta.require("../Bridge-RemoteControl/chunk-tyce0p0b.js"),
        N =
          qNe(o.session, _.sessionId, _.label) ??
          (_.via === "remote-control" && r() ? y(_.label) : void 0);
      if (N)
        d = { kind: "refused", reason: "unreachable_elevated", message: N };
      else {
        let E = $re(o.session, _.sessionId, _.label);
        if (E)
          d = { kind: "refused", reason: "recipient_gate_off", message: E };
      }
    }
    if (d.kind === "uds" && bPe(d.sock))
      d = { kind: "refused", reason: "self", message: Ace(t) };
    else if (d.kind === "uds" && qGe(t, d.sock))
      d = { kind: "refused", reason: "impersonation", message: zGe(t) };
    else if (
      (d.kind === "uds" && Uee(d.sock)) ||
      (d.kind === "bridge" && f2(d.sessionId))
    )
      d = { kind: "refused", reason: "self", message: Ace(t) };
    if (d.kind === "refused")
      return (
        i("tengu_send_file", {
          transport: S("refused"),
          file_count: b.length,
          delivered_count: 0,
          success: !1,
        }),
        { data: { success: !1, message: d.message, files: [] } }
      );
    let z = n8e(d.kind),
      M = (r) =>
        p?.trim()
          ? p
          : `Sent you ${r.length} ${x(r.length, "file")}: ${r.join(", ")}`,
      B = (r, y) => {
        i("tengu_send_file", {
          transport: u(d.kind),
          file_count: b.length,
          delivered_count: y,
          success: r,
        });
      },
      w = (r, y = []) => (
        B(!1, 0),
        { data: { success: !1, message: r, files: y } }
      );
    async function W(r) {
      let y;
      try {
        y = await ue(r);
      } catch {
        return !0;
      }
      if (y === r) return !0;
      if (ww(y, C).behavior === "allow") return !0;
      return `resolves to '${y}', which is not readable under this session's permissions`;
    }
    let U = b.map((r) => ot(r)),
      j = U.map((r) => J(r));
    if (d.kind === "uds") {
      let r = Array(U.length),
        y = await Promise.all(
          U.map((g, R) =>
            pe(async () => {
              if (h.aborted) {
                r[R] = { path: g, error: "aborted" };
                return;
              }
              let Y = await W(g);
              if (Y !== !0) {
                r[R] = { path: g, error: Y };
                return;
              }
              try {
                let P = await Ean(g);
                return (
                  (r[R] = { path: g, size: P.file_size, sha256: P.sha256 }),
                  P
                );
              } catch (P) {
                r[R] = { path: g, error: l(P) };
                return;
              }
            }),
          ),
        );
      Aan();
      let N = y.filter((g) => g !== void 0),
        E = () => {
          for (let g of N) me(g.path).catch(() => {});
        };
      if (h.aborted) throw (E(), new Ve());
      if (N.length === 0)
        return w(`No files could be staged for transfer to ${d.label}.`, r);
      let { sendToUdsSocket: X } = import.meta.require("./chunk-ddtmwhn7.js");
      try {
        let { msgId: g } = await X(
          d.sock,
          M(N.map((R) => R.file_name)),
          o.storageV5,
          z,
          N,
          Xme(o.messages),
        );
        if ((B(!0, N.length), d.pin))
          XSe(o.setAppState, d.pin.displayName, d.pin);
        return {
          data: {
            success: !0,
            message: `${N.length} ${x(N.length, "file")} \u2192 ${d.label}${d.identityNote ?? ""}${d.contestedNote ?? ""}`,
            msg_id: g,
            files: r,
          },
        };
      } catch (g) {
        let R = A(g),
          Y = z3t(g);
        if (mD(g)) E();
        let P = Y ? BAe($i) : R === "EBUSY" ? xSn : "",
          fe = UAe(g) || $Ae(g) ? `: ${l(g)}` : P || ".";
        return w(
          d.byName
            ? `Failed to send to ${d.label}${R ? ` (${R})` : ""}${fe}`
            : `Failed to send to ${d.label}: ${l(g)}${P}`,
          r,
        );
      }
    }
    if (Pe() !== "firstParty" || St() || !Mt("allow_send_file"))
      return w(
        "Cross-machine file transfer is unavailable: it uploads file contents through Anthropic servers, which this provider/privacy configuration does not allow. Same-machine (uds:) transfers still work.",
      );
    let F = await IGe({
      tool: $e,
      input: { to: t, files: b, message: p },
      context: o,
      canUseTool: a,
      assistantMessage: f,
      permissionPhaseRan: k,
      recipientLabel: `'${d.label}'`,
      parse: (r) => Q().safeParse(r),
    });
    if (!F.proceed) return w(F.message);
    if (F.input.files !== b || F.input.message !== p)
      ((p = F.input.message),
        (b = F.input.files),
        (U = b.map((r) => ot(r))),
        (j = U.map((r) => J(r))));
    let { uploadBytesToBridgeStore: ie } = await import("../Bridge-RemoteControl/uploadBytesToBridgeStore.rrjdccq9.js"),
      D = Array(U.length),
      ae = await Promise.all(
        U.map((r, y) =>
          ge(async () => {
            if (h.aborted) {
              D[y] = { path: r, error: "aborted" };
              return;
            }
            let N = await W(r);
            if (N !== !0) {
              D[y] = { path: r, error: N };
              return;
            }
            let E = await xpt(r, hO);
            if (E === null) {
              D[y] = { path: r, error: Lpt };
              return;
            }
            let X = mn(E),
              g = await ie(
                E,
                j[y],
                "application/octet-stream",
                h,
                void 0,
                o.credentials,
              );
            if (typeof g !== "string") {
              D[y] = { path: r, size: E.length, error: g.error };
              return;
            }
            return (
              (D[y] = { path: r, size: E.length, sha256: X, file_uuid: g }),
              {
                file_uuid: g,
                file_name: j[y],
                is_image: d7e.test(r),
                file_size: E.length,
                sha256: X,
                media_type: YNe(j[y]),
              }
            );
          }),
        ),
      );
    if (h.aborted) throw new Ve();
    let L = ae.filter((r) => r !== void 0);
    if (L.length === 0)
      return w(`No files could be uploaded for transfer to ${d.label}.`, D);
    let { postInterClaudeMessage: le, isLikelyStaleBridgeError: de } =
        import.meta.require("../Bridge-RemoteControl/listBridgePeerSessions.g159fp6a.js"),
      H = await le(
        d.sessionId,
        M(L.map((r) => r.file_name)),
        z,
        L,
        Xme(o.messages),
        void 0,
        o.credentials,
      );
    if (!H.ok) {
      let y = o.options.tools.some((E) => Kt(E, $i))
          ? ` Call ${$i} to see who is reachable now.`
          : "",
        N = de(H.error)
          ? d.byName
            ? ` \u2014 that session may have ended, been archived, or disconnected.${y}`
            : ` \u2014 the peer session may have ended or restarted, so this bridge ID is stale.${y}`
          : "";
      return w(`Failed to send to ${d.label}: ${H.error ?? "unknown"}${N}`, D);
    }
    if ((B(!0, L.length), d.pin)) XSe(o.setAppState, d.pin.displayName, d.pin);
    return {
      data: {
        success: !0,
        message: `${L.length} ${x(L.length, "file")} \u2192 ${d.label}${d.identityNote ?? ""}${d.contestedNote ?? ""}`,
        msg_id: H.msgId,
        files: D,
      },
    };
  },
});
export { $e as SendFileTool };

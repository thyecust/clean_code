// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 10 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { registerDeviceHooksRequestSchema, registerDeviceHooksResponseSchema, uploadDeviceHookTemplateRequestSchema } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { z1 } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { withDeadline } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { Tc, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { formatSingleLineText, MAX_LABEL_LENGTH } from "../../01-核心基础设施/共享小工具-未细化/text-sanitization.js";
import { isSupportedDeviceHookEvent, HOOK_MATCHER_PATTERN, parseDeviceHookId } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isPreToolUseHook } from "./hook-template-catalog.js";
import { countMatching } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
var ee = 65536,
  te = 600,
  J = 200,
  oe = 5000;
function Q(t) {
  return Math.min(600, Math.max(5, Math.round(t ?? 60)));
}
function re(t, m) {
  if (t === void 0) return "unknown_template";
  if (!t.digests.some((_) => _.sha256 === m.digest)) return "version_mismatch";
  if (m.event !== t.event || !isSupportedDeviceHookEvent(m.event)) return "event_not_allowed";
  return "awaiting_upload";
}
function createDeviceHooksWorker(t) {
  let m = null,
    _ = new Map(),
    h = new Map();
  t.registry.onLeaseExpired((l) => t.forwarder.removeForOwner(l.instanceId));
  let D = () =>
      t.policy.pluginOnly() ||
      t.policy.customizationDisabled() ||
      t.policy.managedOnly() ||
      t.policy.allDisabled(),
    w = () => {
      let l = t.registry.current();
      if (l !== null)
        (t.forwarder.removeForOwner(l.instanceId),
          t.templateRunner.remove(l.instanceId));
      (t.registry.clear(), h.clear(), t.templates.clear());
    },
    C = async () => {
      let l = m !== null && !m.settled;
      if (m === null || m.settled) {
        let i = {
          promise: t.readAccountFlags(),
          startedAt: t.now(),
          settled: !1,
        };
        (i.promise.then(
          () => (i.settled = !0),
          () => (i.settled = !0),
        ),
          (m = i));
      }
      let s = m,
        r = t.now(),
        c = Math.max(0, t.flagWaitCapMs - (r - s.startedAt));
      return {
        state:
          (await withDeadline(
            s.promise.then(
              (i) => (i ? "on" : "off"),
              () => "pending",
            ),
            c,
          )) ?? "pending",
        waitMs: t.now() - r,
        shared: l,
      };
    },
    S = async () => {
      let l = { flagWaitMs: 0, sharedFlagRead: !1 };
      if (D())
        return (
          w(),
          {
            ok: !1,
            error: "hook_forwarding_disabled: policy",
            outcome: "disabled_policy",
            ...l,
          }
        );
      let s = await C(),
        r = { flagWaitMs: s.waitMs, sharedFlagRead: s.shared };
      if (s.state === "pending")
        return {
          ok: !1,
          error:
            "hook_forwarding_not_ready: feature flags not yet available; retry",
          outcome: "not_ready",
          ...r,
        };
      if (s.state === "off")
        return (
          w(),
          {
            ok: !1,
            error: "hook_forwarding_disabled: flag_off",
            outcome: "disabled_flag_off",
            ...r,
          }
        );
      if (D())
        return (
          w(),
          {
            ok: !1,
            error: "hook_forwarding_disabled: policy",
            outcome: "disabled_policy",
            ...r,
          }
        );
      return { ok: !0, ...r };
    },
    A = async (l) => {
      let s = { flagWaitMs: 0, sharedFlagRead: !1 };
      if (Tc(l).length > ee)
        return {
          ok: !1,
          error: "invalid_registration: request larger than 64 KiB",
          outcome: "invalid",
          ...s,
        };
      let r = registerDeviceHooksRequestSchema().safeParse(l.request);
      if (!r.success)
        return {
          ok: !1,
          error: `invalid_registration: ${formatSingleLineText(r.error.issues[0]?.message ?? "malformed", { maxCodeUnits: J })}`,
          outcome: "invalid",
          ...s,
        };
      if (
        r.data.worker_epoch !== void 0 &&
        r.data.worker_epoch !== t.workerEpoch
      )
        return {
          ok: !1,
          error: `stale_worker_epoch: worker epoch is ${t.workerEpoch}`,
          outcome: "stale_epoch",
          ...s,
        };
      let c = await S();
      return c.ok
        ? {
            ok: !0,
            parsed: r.data,
            flagWaitMs: c.flagWaitMs,
            sharedFlagRead: c.sharedFlagRead,
          }
        : c;
    },
    I = async (l) => {
      let s = await A(l);
      if (!s.ok)
        return (
          t.telemetry.register({
            outcome: s.outcome,
            accepted: 0,
            ignored: 0,
            templatesAwaitingUpload: 0,
            templatesRefused: 0,
            flagWaitMs: s.flagWaitMs,
            sharedFlagRead: s.sharedFlagRead,
          }),
          { kind: "error", error: s.error }
        );
      let r = s.parsed,
        c = t.projectRoot(),
        d = t.cwd(),
        i = registerDeviceHooksResponseSchema().safeParse({
          status: "unregistered",
          project_dir: c,
          cwd: d,
          worker_epoch: t.workerEpoch,
        }).success,
        v = { project_dir: c, cwd: i ? d : c, worker_epoch: t.workerEpoch },
        R = (e, a) => {
          if (t.registry.removeOwner(r.instance_id))
            (t.forwarder.removeForOwner(r.instance_id),
              t.templateRunner.remove(r.instance_id));
          return (
            h.delete(r.instance_id),
            t.telemetry.register({
              outcome: "unregistered",
              accepted: 0,
              ignored: e.length,
              templatesAwaitingUpload: 0,
              templatesRefused: a.length,
              flagWaitMs: s.flagWaitMs,
              sharedFlagRead: s.sharedFlagRead,
            }),
            {
              kind: "success",
              response: {
                status: "unregistered",
                ...v,
                ...(e.length > 0 && { ignored_ids: e.slice(0, 128) }),
                ...(a.length > 0 && { templates: [...a] }),
              },
            }
          );
        };
      if (r.hooks.length === 0 && r.templates.length === 0) return R([], []);
      let g = [],
        p = [],
        F = new Set();
      for (let e of r.hooks) {
        let a = parseDeviceHookId(e.id),
          u =
            e.matcher === void 0 ||
            e.matcher === "" ||
            e.matcher === "*" ||
            HOOK_MATCHER_PATTERN.test(e.matcher),
          T = F.has(e.id);
        if (
          (F.add(e.id),
          T ||
            a === null ||
            a.instanceId !== r.instance_id ||
            a.event !== e.event ||
            !isSupportedDeviceHookEvent(e.event) ||
            !u)
        ) {
          p.push(e.id);
          continue;
        }
        g.push({
          id: e.id,
          event: e.event,
          ...(e.matcher !== void 0 &&
            e.matcher !== "" &&
            e.matcher !== "*" && { matcher: e.matcher }),
          kind: e.kind,
          ...(e.timeout_s !== void 0 && { timeoutS: e.timeout_s }),
          source: e.source,
          hasCondition: e.has_condition === !0,
          targetPinned: e.target_pinned === !0,
        });
      }
      let o = {},
        y = new Map(),
        f = new Map(),
        E = new Set(),
        Z = h.get(r.instance_id) ?? new Map(),
        H = new Map(),
        x = (e) => {
          let a = Z.get(e);
          if (a === void 0) return !1;
          return (
            y.set(a.matcher, e),
            (o[a.event] = [...(o[a.event] ?? []), a.matcher]),
            H.set(e, a),
            E.add(e),
            !0
          );
        },
        U = (e, a) => {
          if (!isPreToolUseHook(e) || !_.get(r.instance_id)?.has(e.id)) return;
          let u = {
            matcher: e.matcher,
            hooks: [
              {
                type: "callback",
                timeout: a,
                callback: async () => (
                  t.telemetry.templateStandInBlocked?.({ template: e.id }),
                  {
                    decision: "block",
                    reason: `cloud template ${e.id} could not be installed on this worker; matching calls are blocked until it is (register again to retry)`,
                  }
                ),
              },
            ],
          };
          (y.set(u, e.id),
            (o[e.event] = [...(o[e.event] ?? []), u]),
            H.set(e.id, { event: e.event, matcher: u }),
            E.add(e.id));
        },
        B = new Map(r.templates.map((e) => [e.template, e]));
      for (let e of B.values()) {
        let a = t.templates.template(e.template),
          u = re(a, e),
          T = u === "awaiting_upload" ? t.templates.bytesFor(e.digest) : void 0;
        if (a === void 0 || T === void 0) {
          if (
            (f.set(e.template, { template: e.template, status: u }),
            !x(e.template) && a !== void 0)
          )
            U(a, Q(e.timeout_s));
          continue;
        }
        let W = Q(e.timeout_s);
        if ((await t.templateRunner.resolveInterpreter()) === null) {
          if (
            (f.set(e.template, {
              template: e.template,
              status: "interpreter_unavailable",
            }),
            !x(e.template))
          )
            U(a, W);
          continue;
        }
        let q;
        try {
          if (
            ((q = await withDeadline(t.templateRunner.prepare(a, e.digest, T, W), oe)),
            q === void 0)
          )
            throw Error("template prepare timed out");
        } catch (j) {
          if (
            (n(
              `[deviceHooks] template ${e.template} install failed: ${j instanceof Error ? j.message : String(j)}`,
              { level: "error" },
            ),
            f.set(e.template, {
              template: e.template,
              status: "install_failed",
            }),
            !x(e.template))
          )
            U(a, W);
          continue;
        }
        let K = {
          matcher: a.matcher,
          hooks: [{ type: "callback", timeout: W, callback: q }],
        };
        (y.set(K, a.id),
          (o[a.event] = [...(o[a.event] ?? []), K]),
          H.set(a.id, { event: a.event, matcher: K }),
          f.set(e.template, { template: e.template, status: "installed" }));
      }
      let M = [...f.values()];
      if (D())
        return (
          w(),
          t.telemetry.register({
            outcome: "disabled_policy",
            accepted: 0,
            ignored: 0,
            templatesAwaitingUpload: 0,
            templatesRefused: 0,
            flagWaitMs: s.flagWaitMs,
            sharedFlagRead: s.sharedFlagRead,
          }),
          { kind: "error", error: "hook_forwarding_disabled: policy" }
        );
      let L = r.lease_s ?? te,
        N = t.now() + L * 1000,
        k = {
          instanceId: r.instance_id,
          displayName:
            formatSingleLineText(r.display_name ?? "", { maxCodeUnits: MAX_LABEL_LENGTH }) || r.instance_id,
          epoch: t.workerEpoch,
          leaseExpiresAt: N,
          entries: g,
          templates: [...B.values()].flatMap((e) => {
            let a = f.get(e.template)?.status,
              u = E.has(e.template)
                ? (H.get(e.template)?.event ?? e.event)
                : e.event;
            return (a === "awaiting_upload" ||
              a === "installed" ||
              E.has(e.template)) &&
              isSupportedDeviceHookEvent(u)
              ? [
                  {
                    template: e.template,
                    digest: e.digest,
                    event: u,
                    ...(e.timeout_s !== void 0 && { timeoutS: e.timeout_s }),
                  },
                ]
              : [];
          }),
        };
      if (k.entries.length === 0 && k.templates.length === 0) return R(p, M);
      let { replaced: b, awaySince: z } = t.registry.replaceOwner(k);
      if (b !== void 0)
        (t.forwarder.removeForOwner(b),
          t.templateRunner.remove(b),
          h.delete(b));
      (t.forwarder.installForOwner(k),
        t.templateRunner.install(
          k.instanceId,
          o,
          (e, a) => y.get(a) ?? "template",
        ),
        h.set(k.instanceId, H));
      let X = _.get(k.instanceId) ?? new Set();
      for (let e of f.values()) if (e.status === "installed") X.add(e.template);
      _.set(k.instanceId, X);
      let V = countMatching(M, (e) => e.status === "awaiting_upload"),
        Y = countMatching(M, (e) => e.status === "installed");
      return (
        t.telemetry.register({
          outcome: "accepted",
          accepted: g.length,
          ignored: p.length,
          templatesAwaitingUpload: V,
          templatesInstalled: Y,
          templatesRefused: M.length - V - Y,
          flagWaitMs: s.flagWaitMs,
          sharedFlagRead: s.sharedFlagRead,
        }),
        {
          kind: "success",
          response: {
            status: "registered",
            ...v,
            lease_s: L,
            lease_expires_at: new Date(N).toISOString(),
            accepted: g.length,
            ignored: p.length,
            ...(p.length > 0 && { ignored_ids: p.slice(0, 128) }),
            templates: M,
            ...(b !== void 0 && { replaced_owner: b }),
            ...(z !== void 0 && { away_since: new Date(z).toISOString() }),
          },
        }
      );
    },
    O = 400000,
    P = async (l) => {
      let s = (v, R = "unknown", g = 0) =>
        t.telemetry.upload({ outcome: v, template: R, bytes: g });
      if (Tc(l).length > O)
        return (
          s("invalid"),
          { kind: "error", error: "invalid_upload: request larger than 400 KB" }
        );
      let r = uploadDeviceHookTemplateRequestSchema().safeParse(l.request);
      if (!r.success)
        return (
          s("invalid"),
          {
            kind: "error",
            error: `invalid_upload: ${formatSingleLineText(r.error.issues[0]?.message ?? "malformed", { maxCodeUnits: J })}`,
          }
        );
      let c = r.data;
      if (c.worker_epoch !== void 0 && c.worker_epoch !== t.workerEpoch)
        return (
          s("stale_epoch", c.template),
          {
            kind: "error",
            error: `stale_worker_epoch: worker epoch is ${t.workerEpoch}`,
          }
        );
      let d = await S();
      if (!d.ok)
        return (s(d.outcome, c.template), { kind: "error", error: d.error });
      let i = t.templates.accept({
        template: c.template,
        digest: c.digest,
        contentBase64: c.content_base64,
      });
      if (!i.ok)
        return (s(i.kind, c.template), { kind: "error", error: i.error });
      return (
        s(i.status, i.template.id, i.bytes),
        {
          kind: "success",
          response: {
            template: i.template.id,
            digest: c.digest,
            status: i.status,
          },
        }
      );
    };
  return {
    async handle(l) {
      switch (l.request.subtype) {
        case "register_device_hooks":
          return I(l);
        case "upload_device_hook_template":
          return P(l);
        default:
          return {
            kind: "error",
            error: `Unsupported control request subtype: ${l.request.subtype}`,
          };
      }
    },
  };
}
function ae(t) {
  return t !== void 0 && Number.isInteger(t) && t >= 1 ? t : 1;
}
async function productionDeviceHooksWorkerDeps(t) {
  let [
      { isRestrictedToPluginOnly: m },
      { isCustomizationDisabled: _ },
      {
        shouldHoldDeviceHooksByPolicy: h,
        shouldDisableAllHooksIncludingManaged: D,
      },
      {
        isAccountGateServed: w,
        isViolinAmatiEnabled: C,
        isViolinWoodEnabled: S,
      },
      { refreshGrowthBookFeatures: A },
      { createDeviceHookRegistry: I, productionRegistryTimer: O },
      { createDeviceHookForwarder: P, productionForwarderTimer: l },
      { createDeviceHookTemplateStore: s },
      { productionDeviceHookTemplateRunner: r, telemetryTemplateId: c },
      { logEvent: d },
      { fromEnum: i },
      { logFeatureBad: v, logFeatureOk: R, logFeatureSad: g },
    ] = await Promise.all([
      import("../Skills技能/chunk-sapykxw7.js"),
      import("../状态栏-主题/chunk-dqyc6kge.js"),
      import("../Skills技能/chunk-sapykxw7.js"),
      import("../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js"),
      import("../../01-核心基础设施/共享小工具-未细化/ATIS_REQUEST_HEADER.9bwp2jqb.js"),
      import("./createDeviceHookRegistry.hghdtq54.js"),
      import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
      import("./createDeviceHookTemplateStore.947t9qjd.js"),
      import("./productionDeviceHookTemplateRunner.z0gca878.js"),
      import("../../01-核心基础设施/共享小工具-未细化/logEvent.q8d8f1jd.js"),
      import("../../01-核心基础设施/共享小工具-未细化/analytics-fields.js"),
      import("../../00-第三方库/lodash/lodash.0vqzb8ad.js"),
    ]),
    p = I({
      now: Date.now,
      setTimer: O,
      onLeaseExpired: () => d("tengu_device_hooks_lease_expired", {}),
    }),
    F = P({
      registry: p,
      sender: t.sender,
      toolAliases: t.toolAliases,
      now: Date.now,
      setTimer: l,
      telemetry: {
        forwarded: (o) =>
          d("tengu_device_hook_forwarded", {
            event: i(o.event),
            outcome: i(o.outcome),
            fields_dropped: o.fieldsDropped,
            blocked: o.blocked,
            rtt_ms: o.rttMs,
            error_replies_ignored: o.errorRepliesIgnored,
            malformed_replies_ignored: o.malformedRepliesIgnored,
          }),
      },
    });
  return {
    policy: {
      pluginOnly: () => m("hooks"),
      customizationDisabled: () => _("hooks"),
      managedOnly: h,
      allDisabled: D,
    },
    readAccountFlags: async () => {
      let [o, y] = await Promise.all([S(), C()]);
      if (o && y) return !0;
      if (!((!o && w("tengu_violin_wood")) || (!y && w("tengu_violin_amati"))))
        throw (A().catch(() => {}), Error("account flags not served yet"));
      return !1;
    },
    flagWaitCapMs: 5000,
    now: Date.now,
    workerEpoch: ae(t.workerEpoch),
    projectRoot: t.projectRoot,
    cwd: t.cwd,
    registry: p,
    forwarder: F,
    templates: s(),
    templateRunner: z1()
      ? {
          resolveInterpreter: async () => null,
          prepare: async () => {
            throw Error("no device hook templates in a diskless session");
          },
          install: () => {},
          remove: () => {},
        }
      : r(t.projectRoot),
    telemetry: {
      templateStandInBlocked: (o) =>
        d("tengu_device_hook_template_run", {
          template: i(c(o.template)),
          outcome: i("stand_in_blocked"),
          duration_ms: 0,
        }),
      upload: (o) =>
        d("tengu_device_hook_template_upload", {
          outcome: i(o.outcome),
          template: i(c(o.template)),
          bytes: o.bytes,
        }),
      register: (o) => {
        if (
          (d("tengu_device_hooks_register", {
            outcome: i(o.outcome),
            accepted: o.accepted,
            ignored: o.ignored,
            templates_awaiting_upload: o.templatesAwaitingUpload,
            templates_installed: o.templatesInstalled ?? 0,
            templates_refused: o.templatesRefused,
            flag_wait_ms: o.flagWaitMs,
            shared_flag_read: o.sharedFlagRead,
          }),
          o.outcome === "accepted" || o.outcome === "unregistered")
        )
          R("device_hooks_register", { accepted: o.accepted });
        else if (o.outcome === "not_ready")
          g("device_hooks_register", o.outcome);
        else v("device_hooks_register", o.outcome);
      },
    },
  };
}
export { createDeviceHooksWorker, productionDeviceHooksWorkerDeps };

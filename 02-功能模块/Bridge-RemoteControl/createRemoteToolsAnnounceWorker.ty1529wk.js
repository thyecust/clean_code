// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 83 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ECt } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { kt } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { Tc, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { io } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { _Ie, Alt, Clt, d2n } from "../远程工具执行/chunk-66axrkvh.js";
import { j6e } from "./chunk-etbwf1s8.js";
import { u9 } from "./chunk-h5053szy.js";
import { Ay } from "../../01-核心基础设施/共享小工具-未细化/chunk-txc6d085.js";
var _ = 1048576,
  w = 32,
  k = 200;
function createRemoteToolsAnnounceWorker(e) {
  let u = { served: 0, ignored: 0, passthrough: 0, plumbing: 0, displaced: !1 },
    a = (i, o) => (
      e.telemetry.announce({ outcome: i, ...u }),
      { kind: "error", error: o }
    ),
    m = (i, o) => {
      let s = e.abandonCalls?.(i, o) ?? 0,
        d = e.forwardedCalls.addressedTo(i),
        t = 0;
      for (let c of d) {
        if (!c.askOutstanding) continue;
        (c.endAsk(_Ie(o)), (t += 1));
      }
      Ay(void 0, "serving instance gone", {
        host_inst: i,
        why: o,
        legs_abandoned: s,
        calls_addressed: d.length,
        asks_ended: t,
      });
    };
  return {
    async handle(i) {
      if (!Alt(i, w))
        return a("invalid", "invalid_announce: request nested too deep");
      if (Tc(i).length > _)
        return a("invalid", "invalid_announce: request larger than 1 MiB");
      let o = ECt().safeParse(i);
      if (!o.success) {
        let h = o.error.issues[0];
        return a(
          "invalid",
          `invalid_announce: ${io(`${h?.path.join(".") ?? ""} ${h?.message ?? "malformed"}`, { maxCodeUnits: k })}`,
        );
      }
      let s = d2n(o.data);
      if (s === void 0)
        return a(
          "invalid",
          typeof o.data.host.epoch !== "string" && Clt(o.data.host) !== void 0
            ? "invalid_announce: host.epoch is required on this channel"
            : "invalid_announce: host is not a readable machine description (name a lowercase slug other than container/this-machine, an epoch, kind, platform, working_dir and limits)",
        );
      if (
        o.data.worker_epoch !== void 0 &&
        o.data.worker_epoch !== e.workerEpoch
      )
        return a(
          "stale_epoch",
          `stale_worker_epoch: worker epoch is ${e.workerEpoch}`,
        );
      switch (e.switches()) {
        case "channel_off":
          return (
            e.registry.clear(),
            a(
              "disabled_channel_off",
              "remote_tools_disabled: session_channel_off",
            )
          );
        case "switch_off":
          return (
            e.registry.clear(),
            a("disabled_switch_off", "remote_tools_disabled: switch_off")
          );
        case "on":
          break;
      }
      switch (
        (await kt(
          e.readAccountFlag().catch(() => "pending"),
          e.flagWaitCapMs,
        )) ??
        "pending"
      ) {
        case "pending":
          return a(
            "not_ready",
            "remote_tools_not_ready: feature flags not yet available; retry",
          );
        case "off":
          return (
            e.registry.clear(),
            a("disabled_flag_off", "remote_tools_disabled: flag_off")
          );
        case "on":
          break;
      }
      let t = e.registry.accept(s, {
          instanceId: o.data.instance_id,
          now: e.now(),
          transport: e.transportFor(s.host.name),
        }),
        c = {
          ignored: t.ignoredTools.length,
          passthrough: s.passthrough.length,
          plumbing: s.plumbing.length,
        },
        l =
          t.ignoredTools.length > 0
            ? { ignored_tools: t.ignoredTools.slice(0, 32) }
            : {};
      switch (t.status) {
        case "withdrawn":
          if (t.heldByAnother)
            n(
              `[remote-tools] ${s.host.name}: a withdrawal from client instance ${o.data.instance_id} names a machine another instance announced since; kept`,
            );
          if (t.removed.length > 0) m(o.data.instance_id, "withdrawn");
          return (
            e.telemetry.announce({
              outcome: "withdrawn",
              served: 0,
              ...c,
              displaced: !1,
            }),
            {
              kind: "success",
              response: {
                status: "withdrawn",
                worker_epoch: e.workerEpoch,
                protocol_version: null,
                ...l,
              },
            }
          );
        case "announced":
          if (t.displaced !== void 0)
            (n(
              `[remote-tools] ${s.host.name}: client instance ${o.data.instance_id} now announces this machine (was ${t.displaced}); calls go to the newcomer`,
            ),
              m(t.displaced, "displaced"));
          if (c.passthrough > 0)
            n(
              `[remote-tools] ${s.host.name} announced ${c.passthrough} MCP tool(s) this worker does not take over the session channel yet`,
            );
          return (
            e.telemetry.announce({
              outcome: "announced",
              served: t.served,
              ...c,
              displaced: t.displaced !== void 0,
            }),
            {
              kind: "success",
              response: {
                status: "announced",
                worker_epoch: e.workerEpoch,
                protocol_version: t.protocolVersion,
                ...l,
              },
            }
          );
      }
    },
  };
}
async function productionRemoteToolsAnnounceDeps(e) {
  let u = e.toolState.get(u9),
    [
      { isAccountGateServed: a, isViolinWoodEnabled: m },
      { refreshGrowthBookFeatures: i },
      { isRemoteToolForwardingSwitchOn: o, isSessionChannelDisabled: s },
      { createSessionEventTransport: d },
      { logEvent: t },
      { fromEnum: c, lit: l },
      { logFeatureBad: h, logFeatureOk: p, logFeatureSad: f },
    ] = await Promise.all([
      import("../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js"),
      import("../../01-核心基础设施/共享小工具-未细化/ATIS_REQUEST_HEADER.9bwp2jqb.js"),
      import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
      import("./SESSION_TRANSPORT_LIMITS.04hfp4jb.js"),
      import("../../01-核心基础设施/共享小工具-未细化/logEvent.q8d8f1jd.js"),
      import("../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js"),
      import("../../00-第三方库/lodash/lodash.0vqzb8ad.js"),
    ]);
  return {
    readAccountFlag: async () => {
      if (await m()) return "on";
      if (a("tengu_violin_wood")) return "off";
      return (i().catch(() => {}), "pending");
    },
    flagWaitCapMs: 5000,
    switches: () => (s() ? "channel_off" : o() ? "on" : "switch_off"),
    now: Date.now,
    workerEpoch:
      e.workerEpoch !== void 0 &&
      Number.isInteger(e.workerEpoch) &&
      e.workerEpoch >= 1
        ? e.workerEpoch
        : 1,
    registry: u,
    forwardedCalls: e.toolState.get(j6e),
    transportFor: (r) => d({ host: () => u.handleFor(r), sender: e.sender }),
    ...(e.sender.abandonServedCalls !== void 0 && {
      abandonCalls: (r, g) => e.sender.abandonServedCalls?.(r, g) ?? 0,
    }),
    telemetry: {
      announce: (r) => {
        if (
          (t("tengu_remote_tools_announce", {
            outcome: c(r.outcome),
            served: r.served,
            ignored: r.ignored,
            passthrough: r.passthrough,
            plumbing: r.plumbing,
            displaced: r.displaced,
          }),
          r.displaced)
        )
          t("tengu_remote_tool_targets", {
            event: l("displaced"),
            source: l("session"),
          });
        switch (r.outcome) {
          case "announced":
          case "withdrawn":
            p("remote_tools_announce");
            break;
          case "not_ready":
            f("remote_tools_announce", r.outcome);
            break;
          default:
            h("remote_tools_announce", r.outcome);
        }
      },
    },
  };
}
export {
  createRemoteToolsAnnounceWorker,
  productionRemoteToolsAnnounceDeps,
};

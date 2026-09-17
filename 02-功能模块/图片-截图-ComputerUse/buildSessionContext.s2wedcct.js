// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 76 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import "../MCP客户端/chunk-tv3jbp8f.js";
import "../MCP客户端/chunk-98spw152.js";
import "../MCP客户端/chunk-j8556pzt.js";
import { K } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { oPe } from "./chunk-1c6fx285.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { UYn, BYn, VSt, jYn, J8e } from "./chunk-b8jsase9.js";
import { Zp, JJn } from "./chunk-bvxymt09.js";
import { truncateToWidth as Xe } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "./chunk-w5bhde2m.js";
import { con, put } from "./chunk-v76f8dbx.js";
import { GSe } from "../../01-核心基础设施/共享小工具-未细化/chunk-4p4f6hsz.js";
import { hF } from "../../01-核心基础设施/共享小工具-未细化/chunk-j66gwpg8.js";
import "./chunk-jeefwg1w.js";
function c(t) {
  return t ? `(${t[0]}, ${t[1]})` : "";
}
function C(t) {
  return {
    userFacingName() {
      return `Computer Use[${t}]`;
    },
    renderToolUseMessage(e) {
      switch (t) {
        case "screenshot":
        case "left_mouse_down":
        case "left_mouse_up":
        case "cursor_position":
        case "list_granted_applications":
        case "read_clipboard":
          return "";
        case "left_click":
        case "right_click":
        case "middle_click":
        case "double_click":
        case "triple_click":
        case "mouse_move":
          return c(e.coordinate);
        case "left_click_drag":
          return e.start_coordinate
            ? `${c(e.start_coordinate)} \u2192 ${c(e.coordinate)}`
            : `to ${c(e.coordinate)}`;
        case "type":
          return typeof e.text === "string" ? `"${Xe(e.text, 40)}"` : "";
        case "key":
        case "hold_key":
          return typeof e.text === "string" ? e.text : "";
        case "scroll":
          return [
            e.direction,
            e.amount && `\xD7${e.amount}`,
            e.coordinate && `at ${c(e.coordinate)}`,
          ]
            .filter(Boolean)
            .join(" ");
        case "zoom": {
          let r = e.region;
          return Array.isArray(r) && r.length === 4
            ? `[${r[0]}, ${r[1]}, ${r[2]}, ${r[3]}]`
            : "";
        }
        case "wait":
          return typeof e.duration === "number" ? `${e.duration}s` : "";
        case "write_clipboard":
          return typeof e.text === "string" ? `"${Xe(e.text, 40)}"` : "";
        case "open_application":
          return typeof e.bundle_id === "string" ? String(e.bundle_id) : "";
        case "request_access": {
          let r = e.apps;
          if (!Array.isArray(r)) return "";
          return r
            .map((s) =>
              typeof s?.displayName === "string" ? s.displayName : "",
            )
            .filter(Boolean)
            .join(", ");
        }
        case "computer_batch": {
          let r = e.actions;
          return Array.isArray(r) ? `${r.length} actions` : "";
        }
        default:
          return "";
      }
    },
  };
}
function p() {
  return Zp().currentToolUseContext;
}
function l() {
  return J8e(p().session)?.get();
}
function d(t) {
  J8e(p().session)?.update(t);
}
function h(t) {
  return `Computer use is in use by another Claude session (${t.slice(0, 8)}\u2026). Wait for that session to finish or run /exit there.`;
}
function b() {
  return {
    isAborted: () => p().abortController.signal.aborted,
    getAllowedApps: () => l()?.allowedApps ?? [],
    getGrantFlags: () => l()?.grantFlags ?? hF,
    getUserDeniedBundleIds: () => [],
    getSelectedDisplayId: () => l()?.selectedDisplayId,
    getDisplayPinnedByModel: () => l()?.displayPinnedByModel ?? !1,
    getDisplayResolvedForApps: () => l()?.displayResolvedForApps,
    getLastScreenshotDims: () => {
      let t = l()?.lastScreenshotDims;
      return t
        ? {
            ...t,
            displayId: t.displayId ?? 0,
            originX: t.originX ?? 0,
            originY: t.originY ?? 0,
          }
        : void 0;
    },
    onPermissionRequest: (t, e) => U(t),
    onAllowedAppsChanged: (t, e) =>
      d((r) => {
        let o = r?.allowedApps,
          s = r?.grantFlags,
          y =
            o?.length === t.length &&
            t.every((a, u) => o[u]?.bundleId === a.bundleId),
          g =
            s?.clipboardRead === e.clipboardRead &&
            s?.clipboardWrite === e.clipboardWrite &&
            s?.systemKeyCombos === e.systemKeyCombos;
        return y && g ? r : { ...r, allowedApps: [...t], grantFlags: e };
      }),
    onAppsHidden: (t) => {
      if (t.length === 0) return;
      d((e) => {
        let r = e?.hiddenDuringTurn;
        if (r && t.every((o) => r.has(o))) return e;
        return { ...e, hiddenDuringTurn: new Set([...(r ?? []), ...t]) };
      });
    },
    onResolvedDisplayUpdated: (t) =>
      d((e) => {
        if (
          e?.selectedDisplayId === t &&
          !e.displayPinnedByModel &&
          e.displayResolvedForApps === void 0
        )
          return e;
        return {
          ...e,
          selectedDisplayId: t,
          displayPinnedByModel: !1,
          displayResolvedForApps: void 0,
        };
      }),
    onDisplayPinned: (t) =>
      d((e) => {
        let r = t !== void 0,
          o = r ? e?.displayResolvedForApps : void 0;
        if (
          e?.selectedDisplayId === t &&
          e?.displayPinnedByModel === r &&
          e?.displayResolvedForApps === o
        )
          return e;
        return {
          ...e,
          selectedDisplayId: t,
          displayPinnedByModel: r,
          displayResolvedForApps: o,
        };
      }),
    onDisplayResolvedForApps: (t) =>
      d((e) => {
        if (e?.displayResolvedForApps === t) return e;
        return { ...e, displayResolvedForApps: t };
      }),
    onScreenshotCaptured: (t) =>
      d((e) => {
        let r = e?.lastScreenshotDims;
        return r?.width === t.width &&
          r?.height === t.height &&
          r?.displayWidth === t.displayWidth &&
          r?.displayHeight === t.displayHeight &&
          r?.displayId === t.displayId &&
          r?.originX === t.originX &&
          r?.originY === t.originY
          ? e
          : { ...e, lastScreenshotDims: t };
      }),
    checkCuLock: async () => {
      let t = await UYn(Zp().currentToolUseContext?.storageV5);
      switch (t.kind) {
        case "free":
          return { holder: void 0, isSelf: !1 };
        case "held_by_self":
          if (VSt()) return { holder: K(), isSelf: !0 };
          return { holder: void 0, isSelf: !1 };
        case "blocked":
          return { holder: t.by, isSelf: !1 };
      }
    },
    acquireCuLock: async () => {
      let t = await BYn(Zp().currentToolUseContext?.storageV5);
      if (t.kind === "blocked") throw Error(h(t.by));
      if (jYn()) {
        let e = JJn(() => {
          if (Zp().callsInFlight === 0) {
            n("[cu-esc] user escape with no CU call in flight; consumed only");
            return;
          }
          (n("[cu-esc] user escape, aborting turn"),
            p().abortController.abort());
        });
        Zp().currentOnProgress?.({
          type: "os_notification",
          message: e
            ? "Claude is using your computer \xB7 press Esc to stop"
            : "Claude is using your computer \xB7 press Ctrl+C to stop",
          notificationType: "computer_use_enter",
        });
      }
    },
    formatLockHeldMessage: h,
  };
}
function _() {
  let t = Zp();
  if (t.binding) return t.binding;
  let e = b();
  return ((t.binding = { ctx: e, dispatch: con(put(), GSe(), e) }), t.binding);
}
function B(t) {
  let e = async (r, o, s, y, g) => {
    let a = Zp();
    ((a.currentToolUseContext = o),
      (a.currentOnProgress = g),
      a.callsInFlight++);
    let u;
    try {
      let { dispatch: i } = _();
      u = await i(t, r);
    } finally {
      a.callsInFlight--;
    }
    let { telemetry: f, ...m } = u;
    if (f?.error_kind) n(`[Computer Use MCP] ${t} error_kind=${f.error_kind}`);
    return {
      data: Array.isArray(m.content)
        ? m.content.map((i) =>
            i.type === "image"
              ? {
                  type: "image",
                  source: {
                    type: "base64",
                    media_type: i.mimeType ?? "image/jpeg",
                    data: i.data,
                  },
                }
              : { type: "text", text: i.type === "text" ? i.text : "" },
          )
        : m.content,
    };
  };
  return { ...C(t), call: e };
}
async function U(t) {
  let e = p(),
    r = e.requestDialog;
  if (!r) return { granted: [], denied: [], flags: hF };
  return r(oPe, t, { signal: e.abortController.signal });
}
export { b as buildSessionContext, B as getComputerUseMCPToolOverrides };

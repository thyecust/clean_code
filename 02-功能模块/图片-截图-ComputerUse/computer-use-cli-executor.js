// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { sleep, withTimeout } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { execFileNoThrow } from "../Git-Worktree/git-exec-hardening.js";
import { getComputerUseSession, getComputerUseNativeModule, runComputerUseNativeCall, notifyExpectedEscape } from "./computer-use-session.js";
import { getComputerUseInputNativeModule } from "./computer-use-input-native.js";
import { IMAGE_TOKEN_BUDGET, fitSizeToTokenBudget } from "../../01-核心基础设施/共享小工具-未细化/image-scaling.js";
import { DEFAULT_HOST_BUNDLE_ID, getHostBundleIdentifier, DEFAULT_COMPUTER_USE_CAPABILITIES } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { commonJS, importMetaRequire } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var M = commonJS(function (k, E) {
  var H = importMetaRequire("path");
  {
    let o = getComputerUseInputNativeModule();
    E.exports = { isSupported: !0, ...o };
  }
});
function c() {
  let o = getComputerUseSession();
  if (o.inputModule) return o.inputModule;
  let t = M();
  if (!t.isSupported)
    throw Error("@ant/computer-use-input is not supported on this platform");
  return (o.inputModule = t);
}
var P = 0.75,
  x = 5000;
function v(o, t, a) {
  let f = Math.round(o * a),
    d = Math.round(t * a);
  return fitSizeToTokenBudget(f, d, IMAGE_TOKEN_BUDGET);
}
async function C() {
  let { stdout: o, code: t } = await execFileNoThrow("pbpaste", [], { useCwd: !1 });
  if (t !== 0) throw Error(`pbpaste exited with code ${t}`);
  return o;
}
async function A(o) {
  let { code: t } = await execFileNoThrow("pbcopy", [], { input: o, useCwd: !1 });
  if (t !== 0) throw Error(`pbcopy exited with code ${t}`);
}
function U(o) {
  if (o.length !== 1) return !1;
  let t = o[0].toLowerCase();
  return t === "escape" || t === "esc";
}
var S = 50,
  D = 50;
async function g(o, t, a) {
  (await o.moveMouse(t, a, !1), await sleep(S));
}
async function _(o, t) {
  let a;
  while ((a = t.pop()) !== void 0)
    try {
      await o.key(a, "release");
    } catch {}
}
async function R(o, t, a) {
  let f = [];
  try {
    for (let d of t) (await o.key(d, "press"), f.push(d));
    return await a();
  } finally {
    await _(o, f);
  }
}
async function T(o, t) {
  let a;
  try {
    a = await C();
  } catch {
    logForDebugging("[computer-use] pbpaste before paste failed; proceeding without restore");
  }
  try {
    if ((await A(t), (await C()) !== t))
      throw Error("Clipboard write did not round-trip.");
    (await o.keys(["command", "v"]), await sleep(100));
  } finally {
    if (typeof a === "string")
      try {
        await A(a);
      } catch {
        logForDebugging("[computer-use] clipboard restore after paste failed");
      }
  }
}
async function B(o, t, a, f) {
  if (!f) {
    await g(o, t, a);
    return;
  }
  let d = await o.mouseLocation(),
    y = t - d.x,
    b = a - d.y,
    h = Math.hypot(y, b);
  if (h < 1) return;
  let e = Math.min(h / 2000, 0.5);
  if (e < 0.03) {
    await g(o, t, a);
    return;
  }
  let r = 60,
    s = 1000 / r,
    i = Math.floor(e * r);
  for (let u = 1; u <= i; u++) {
    let p = u / i,
      m = 1 - Math.pow(1 - p, 3);
    if (
      (await o.moveMouse(Math.round(d.x + y * m), Math.round(d.y + b * m), !1),
      u < i)
    )
      await sleep(s);
  }
  await sleep(S);
}
function createCliExecutor(o) {
  let t = getComputerUseNativeModule(),
    a = !1,
    { getMouseAnimationEnabled: f, getHideBeforeActionEnabled: d } = o,
    y = getHostBundleIdentifier(),
    b = y ?? DEFAULT_HOST_BUNDLE_ID,
    h = (e) => (y === null ? [...e] : e.filter((r) => r !== y));
  return (
    logForDebugging(
      y
        ? `[computer-use] terminal ${y} \u2192 surrogate host (hide-exempt, activate-skip, screenshot-excluded)`
        : "[computer-use] terminal not detected; falling back to sentinel host",
    ),
    {
      capabilities: { ...DEFAULT_COMPUTER_USE_CAPABILITIES, hostBundleId: DEFAULT_HOST_BUNDLE_ID },
      async prepareForAction(e, r) {
        if (!d()) return [];
        return runComputerUseNativeCall(async () => {
          try {
            let s = await t.apps.prepareDisplay(e, b, r);
            if (s.activated)
              logForDebugging(`[computer-use] prepareForAction: activated ${s.activated}`);
            return s.hidden;
          } catch (s) {
            return (
              logForDebugging(
                `[computer-use] prepareForAction failed; continuing to action: ${l(s)}`,
                { level: "warn" },
              ),
              []
            );
          }
        });
      },
      async previewHideSet(e, r) {
        return t.apps.previewHideSet([...e, b], r);
      },
      async getDisplaySize(e) {
        return t.display.getSize(e);
      },
      async listDisplays() {
        return t.display.listAll();
      },
      async findWindowDisplays(e) {
        return t.apps.findWindowDisplays(e);
      },
      async resolvePrepareCapture(e) {
        let r = t.display.getSize(e.preferredDisplayId),
          [s, i] = v(r.width, r.height, r.scaleFactor);
        return runComputerUseNativeCall(() =>
          t.resolvePrepareCapture(
            h(e.allowedBundleIds),
            b,
            P,
            s,
            i,
            e.preferredDisplayId,
            e.autoResolve,
            e.doHide,
          ),
        );
      },
      async screenshot(e) {
        let r = t.display.getSize(e.displayId),
          [s, i] = v(r.width, r.height, r.scaleFactor);
        return withTimeout(
          t.screenshot.captureExcluding(
            h(e.allowedBundleIds),
            P,
            s,
            i,
            e.displayId,
          ),
          x,
          "CU screenshot backstop",
        );
      },
      async zoom(e, r, s) {
        let i = t.display.getSize(s),
          [u, p] = v(e.w, e.h, i.scaleFactor);
        return withTimeout(
          t.screenshot.captureRegion(h(r), e.x, e.y, e.w, e.h, u, p, P, s),
          x,
          "CU zoom backstop",
        );
      },
      async key(e, r) {
        let s = c(),
          i = e.split("+").filter((m) => m.length > 0),
          u = U(i),
          p = r ?? 1;
        await runComputerUseNativeCall(async () => {
          for (let m = 0; m < p; m++) {
            if (m > 0) await sleep(8);
            if (u) notifyExpectedEscape();
            await s.keys(i);
          }
        });
      },
      async holdKey(e, r, s) {
        let i = c(),
          u = [],
          p = !1;
        try {
          await runComputerUseNativeCall(async () => {
            for (let I of e) {
              if (p) return;
              if (U([I])) notifyExpectedEscape();
              (await i.key(I, "press"), u.push(I));
            }
          });
          let m = Date.now() + r;
          while (Date.now() < m) {
            if (s?.()) return;
            await sleep(Math.min(D, m - Date.now()));
          }
        } finally {
          ((p = !0), await runComputerUseNativeCall(() => _(i, u)));
        }
      },
      async type(e, r) {
        let s = c();
        if (r.viaClipboard) {
          await runComputerUseNativeCall(() => T(s, e));
          return;
        }
        await s.typeText(e);
      },
      readClipboard: C,
      writeClipboard: A,
      async moveMouse(e, r) {
        await g(c(), e, r);
      },
      async click(e, r, s, i, u) {
        let p = c();
        if ((await g(p, e, r), u && u.length > 0))
          await runComputerUseNativeCall(() => R(p, u, () => p.mouseButton(s, "click", i)));
        else await p.mouseButton(s, "click", i);
      },
      async mouseDown() {
        await c().mouseButton("left", "press");
      },
      async mouseUp() {
        await c().mouseButton("left", "release");
      },
      async getCursorPosition() {
        return c().mouseLocation();
      },
      async drag(e, r) {
        let s = c();
        if (e !== void 0) await g(s, e.x, e.y);
        (await s.mouseButton("left", "press"), await sleep(S));
        try {
          await B(s, r.x, r.y, f());
        } finally {
          await s.mouseButton("left", "release");
        }
      },
      async scroll(e, r, s, i) {
        let u = c();
        if ((await g(u, e, r), i !== 0)) await u.mouseScroll(i, "vertical");
        if (s !== 0) await u.mouseScroll(s, "horizontal");
      },
      async getFrontmostApp() {
        let e = c().getFrontmostAppInfo();
        if (!e || !e.bundleId) return null;
        return { bundleId: e.bundleId, displayName: e.appName };
      },
      async appUnderPoint(e, r) {
        return t.apps.appUnderPoint(e, r);
      },
      async listInstalledApps() {
        let { apps: e, spotlightIncomplete: r } = await runComputerUseNativeCall(() =>
          t.apps.listInstalled(),
        );
        return ((a = r), e);
      },
      isAppIndexIncomplete() {
        return a;
      },
      async getAppIcon(e) {
        return t.apps.iconDataUrl(e) ?? void 0;
      },
      async listRunningApps() {
        return t.apps.listRunning();
      },
      async openApp(e, r) {
        return t.apps.open(e, r?.activates ?? !0);
      },
    }
  );
}
async function unhideComputerUseApps(o) {
  if (o.length === 0) return;
  await getComputerUseNativeModule().apps.unhide([...o]);
}
export { createCliExecutor, unhideComputerUseApps };

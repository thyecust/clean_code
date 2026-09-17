// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { getComputerUseSwiftNativeModule } from "./computer-use-swift-native.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logFeatureOk, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { commonJS, importMetaRequire } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
var p = commonJS(function (S, u) {
  var x = importMetaRequire("path"),
    C = getComputerUseSwiftNativeModule();
  u.exports = C.computerUse;
});
class s {
  binding = void 0;
  currentToolUseContext = void 0;
  currentOnProgress = void 0;
  callsInFlight = 0;
  unregisterLockCleanup = void 0;
  activeThisTurn = !1;
  runLoopPump = void 0;
  runLoopPumpRetainCount = 0;
  escHotkeyRegistered = !1;
  frozenCoordinateMode = void 0;
  hostAdapter = void 0;
  swiftModule = void 0;
  inputModule = void 0;
  reset() {
    if (
      this.unregisterLockCleanup !== void 0 ||
      this.escHotkeyRegistered ||
      this.runLoopPump !== void 0
    )
      throw Error(
        "ComputerUseSession.reset() called while the lock cleanup, Esc hotkey, or run-loop pump is still registered",
      );
    ((this.binding = void 0),
      (this.currentToolUseContext = void 0),
      (this.currentOnProgress = void 0),
      (this.callsInFlight = 0),
      (this.activeThisTurn = !1),
      (this.runLoopPumpRetainCount = 0),
      (this.frozenCoordinateMode = void 0),
      (this.hostAdapter = void 0),
      (this.swiftModule = void 0),
      (this.inputModule = void 0));
  }
}
var l = new j(() => new s());
function getComputerUseSession() {
  return l.of(B().host);
}
function getComputerUseNativeModule() {
  return (getComputerUseSession().swiftModule ??= p());
}
function P(e) {
  e._drainMainRunLoop();
}
function d() {
  let e = getComputerUseSession();
  if ((e.runLoopPumpRetainCount++, e.runLoopPump === void 0))
    ((e.runLoopPump = setInterval(P, 1, getComputerUseNativeModule())),
      logForDebugging("[drainRunLoop] pump started", { level: "verbose" }));
}
function m() {
  let e = getComputerUseSession();
  if (
    (e.runLoopPumpRetainCount--,
    e.runLoopPumpRetainCount <= 0 && e.runLoopPump !== void 0)
  )
    (clearInterval(e.runLoopPump),
      (e.runLoopPump = void 0),
      logForDebugging("[drainRunLoop] pump stopped", { level: "verbose" }),
      (e.runLoopPumpRetainCount = 0));
}
var U = 30000;
class c extends Error {
  constructor(e) {
    super(`computer-use native call exceeded ${e}ms`);
  }
}
function h(e, o) {
  e(new c(o));
}
var f = d,
  a = m;
async function runComputerUseNativeCall(e, o = U) {
  d();
  let t;
  try {
    let r = e();
    r.catch(() => {});
    let i = Promise.withResolvers();
    return (
      (t = setTimeout(h, o, i.reject, o)),
      await Promise.race([r, i.promise])
    );
  } finally {
    (clearTimeout(t), m());
  }
}
function registerComputerUseEscapeHotkey(e) {
  if (getComputerUseSession().escHotkeyRegistered) return !0;
  if (!getComputerUseNativeModule().hotkey.registerEscape(e))
    return (
      logForDebugging("[cu-esc] registerEscape returned false", { level: "warn" }),
      logFeatureSad("computeruse_esc_register", "tap_create_failed"),
      !1
    );
  return (
    f(),
    (getComputerUseSession().escHotkeyRegistered = !0),
    logForDebugging("[cu-esc] registered"),
    logFeatureOk("computeruse_esc_register"),
    !0
  );
}
function unregisterComputerUseEscapeHotkey() {
  if (!getComputerUseSession().escHotkeyRegistered) return;
  try {
    getComputerUseNativeModule().hotkey.unregister();
  } finally {
    (a(), (getComputerUseSession().escHotkeyRegistered = !1), logForDebugging("[cu-esc] unregistered"));
  }
}
function notifyExpectedEscape() {
  if (!getComputerUseSession().escHotkeyRegistered) return;
  getComputerUseNativeModule().hotkey.notifyExpectedEscape();
}
export { getComputerUseSession, getComputerUseNativeModule, runComputerUseNativeCall, registerComputerUseEscapeHotkey, unregisterComputerUseEscapeHotkey, notifyExpectedEscape };

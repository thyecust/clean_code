// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B, g_e } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../共享小工具-未细化/chunk-h62vxw7j.js";
import { shouldForceGatewayLogin, getGlobalConfig, enableConfigs } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getHostSettingsStore } from "./设置-配置.aqbb35ee.js";
import { awaitMdmSettingsLoaded, runPolicyHelperPass, hasActivePolicyHelper, getBasePolicySettings, getBasePolicySettingsOrigin, getPolicyHelperSourceLoadErrors } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { KEYCHAIN_PREFETCH_FASTPATH_BUDGET_MS, ensureKeychainPrefetchCompleted } from "../共享小工具-未细化/keychain-prefetch.js";
import { applySafeConfigEnvironmentVariables } from "../遥测-OpenTelemetry/settings-env-application.js";
import { checkVersionPolicy } from "../共享小工具-未细化/version-policy.js";
class s {
  settingsLoaded = !1;
  helperResult = null;
  claimSettingsLoad() {
    if (this.settingsLoaded) return !1;
    return ((this.settingsLoaded = !0), !0);
  }
  beginHelperRun() {
    return ((this.helperResult = { error: null }), this.helperResult);
  }
}
var p = new j(() => new s());
function l() {
  return p.of(B().host);
}
async function ensureFastPathSettingsLoaded(t) {
  if (!l().claimSettingsLoad()) return;
  let e = isHoverRestEnabled() ? t?.backend : void 0;
  if (isHoverRestEnabled() && e !== void 0) {
    let [
      { seedUserSettings: o },
      { primeWindowsCredManBackendEnabled: i },
      { primeRemoteManagedSettingsCache: a },
      { primeWorkspaceRoots: r },
    ] = await Promise.all([
      import("./chunk-b536v45y.js"),
      import("../../02-功能模块/认证-OAuth登录/secure-storage.js"),
      import("./设置-配置.aqbb35ee.js"),
      import("../共享小工具-未细化/chunk-bgf8jybv.js"),
    ]);
    (await r(e),
      await Promise.all([enableConfigs(e), o(e, getHostSettingsStore())]),
      i(getGlobalConfig().cachedGrowthBookFeatures?.tengu_windows_credman === !0),
      await a(e));
  } else await enableConfigs();
  if ((await awaitMdmSettingsLoaded(), await ensureKeychainPrefetchCompleted(KEYCHAIN_PREFETCH_FASTPATH_BUDGET_MS), isHoverRestEnabled() && e !== void 0)) {
    let [
        { credentialsStoreFor: o },
        { primeFileDescriptorCredentials: i },
        { primeStoredLoginCopy: a },
      ] = await Promise.all([
        import("../共享小工具-未细化/credentialsStoreFor.r7prg4pg.js"),
        import("../共享小工具-未细化/chunk-fpak7ean.js"),
        import("../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js"),
      ]),
      r = o(e);
    if (r !== void 0) (await i(r, { bgAuthSnapshot: "leave" }), await a(r));
  }
  (g_e(shouldForceGatewayLogin), applySafeConfigEnvironmentVariables());
  let n = checkVersionPolicy();
  if (n)
    (process.stderr.write(`${n}
`),
      process.exit(1));
}
async function runFastPathPolicyHelper() {
  let t = l();
  if (t.helperResult) return t.helperResult.error;
  let e = t.beginHelperRun();
  if (((e.error = await runPolicyHelperPass(getBasePolicySettings(), getBasePolicySettingsOrigin(), getPolicyHelperSourceLoadErrors())), hasActivePolicyHelper())) applySafeConfigEnvironmentVariables();
  return e.error;
}
async function loadFastPathPolicy(t) {
  return (await ensureFastPathSettingsLoaded(t), runFastPathPolicyHelper());
}
export { ensureFastPathSettingsLoaded, runFastPathPolicyHelper, loadFastPathPolicy };

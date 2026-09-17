// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { identity as _m, $p, irt, cOn, uLn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { jsonParse, changeWorkingDirectory, resetDebugCaches } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { resetUserData, resetEnvDerivedAuthCaches, resetGrowthBook, resetTrustDialogAcceptedCache, clearProjectPathForConfigCache } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { canonicalizePath } from "../会话-历史-恢复/chunk-mkmy4cx2.js";
import { invalidateAllSettings, isManagedOnlyEnvVar, isProxyEnvVar, isTlsClientCertEnvVar } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { addStartupContext } from "../../03-入口与运行时/CLI入口-Commander/startup-profiler.js";
import { configureGlobalAgents, clearProxyCache } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { resetProfileAuthCache } from "../认证-OAuth登录/chunk-wk0e3dz4.js";
import { timingSafeStringEqual } from "./chunk-035vf5et.js";
import { dropPreSettingsEnvSnapshot } from "../../01-核心基础设施/遥测-OpenTelemetry/settings-env-application.js";
import { markWarmSpareClaimed } from "../../01-核心基础设施/遥测-OpenTelemetry/startup-timing-telemetry.js";
import { waitForSessionIngressToken } from "./session-ingress-token.js";
import { resetRemoteSettingsSyncCache } from "../../01-核心基础设施/设置-配置/remote-settings-eligibility.js";
import { createServer } from "net";
function receiveSpareClaim(e, m, o) {
  return new Promise((n, c) => {
    let t = (r) => {
        (i.close(), c(r));
      },
      i = createServer((r) => {
        let a = "";
        (r.setEncoding("utf8"),
          r.on("data", (d) => {
            if (((a += d), o && a.length > 8388608)) {
              r.destroy();
              return;
            }
            let p = a.indexOf(`
`);
            if (p < 0) return;
            if (o) {
              let s;
              try {
                s = jsonParse(a.slice(0, p));
              } catch {
                s = void 0;
              }
              if (!s || !timingSafeStringEqual(s.auth, o)) {
                r.destroy();
                return;
              }
              (i.close(), n(s));
              return;
            }
            i.close();
            try {
              n(jsonParse(a.slice(0, p)));
            } catch (s) {
              c(s);
            }
          }),
          r.on("error", o ? () => r.destroy() : t));
      });
    if ((i.on("error", t), m))
      i.once("listening", () => {
        try {
          m();
        } catch (r) {
          t(r);
        }
      });
    i.listen(e);
  });
}
async function bootClaimedSpare(e, m) {
  let o = await canonicalizePath(e.cwd, void 0);
  changeWorkingDirectory(o);
  let n = { originalCwd: o, projectRoot: o, cwd: o };
  if (e.sessionId) $p(_m(e.sessionId), "spare_claim", null, n);
  else irt(n);
  if (
    (invalidateAllSettings(),
    clearProjectPathForConfigCache(),
    resetTrustDialogAcceptedCache(),
    cOn(),
    markWarmSpareClaimed(),
    addStartupContext({ warm_spare_claimed: 1 }),
    Ie(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST))
  ) {
    for (let t of Object.keys(process.env))
      if (isManagedOnlyEnvVar(t) || t === "ANTHROPIC_CUSTOM_HEADERS" || isProxyEnvVar(t) || isTlsClientCertEnvVar(t))
        delete process.env[t];
  }
  (delete process.env.ANTHROPIC_AUTH_TOKEN,
    delete process.env.ANTHROPIC_API_KEY,
    delete process.env.CLAUDE_CODE_OAUTH_TOKEN,
    Object.assign(process.env, e.env),
    (process.argv = [process.argv[0], process.argv[1], ...e.argv]),
    resetDebugCaches(),
    await waitForSessionIngressToken(e.argv),
    uLn(),
    resetEnvDerivedAuthCaches(),
    resetProfileAuthCache(),
    resetRemoteSettingsSyncCache(),
    resetGrowthBook({ preservePendingExposures: !0, preserveLoggedExposures: !0 }),
    resetUserData(),
    dropPreSettingsEnvSnapshot(),
    clearProxyCache(),
    configureGlobalAgents());
  let { main: c } = await m;
  await c();
}
export { receiveSpareClaim, bootClaimedSpare };

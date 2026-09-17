// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { logFeatureSad as g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { ee } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { Hd } from "../../02-功能模块/运行宿主探测/运行宿主探测.ysz9apmz.js";
import { Nr, uke } from "../设置-配置/设置-配置.aqbb35ee.js";
import { getSettingsForSource as ye } from "../核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
function wot() {
  if (a.NODE_EXTRA_CA_CERTS) return;
  let e = i();
  if (e)
    ((process.env.NODE_EXTRA_CA_CERTS = e),
      n(
        `CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${e}`,
      ));
}
function i() {
  try {
    if (
      a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST &&
      !Hd() &&
      uke("NODE_EXTRA_CA_CERTS")
    ) {
      n(
        "CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider",
      );
      return;
    }
    let t = ee()?.env,
      o = (Nr("userSettings") ? ye("userSettings") : void 0)?.env;
    n(
      `CA certs: Config fallback - globalEnv keys: ${t ? Object.keys(t).join(",") : "none"}, settingsEnv keys: ${o ? Object.keys(o).join(",") : "none"}`,
    );
    let r = o?.NODE_EXTRA_CA_CERTS || t?.NODE_EXTRA_CA_CERTS;
    if (r) n(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);
    return r;
  } catch (e) {
    (n(`CA certs: Config fallback failed: ${e}`, { level: "error" }),
      g("ca_certs_load", "config_read_failed"));
    return;
  }
}
export { wot };

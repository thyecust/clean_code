// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 24 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { bQ } from "../../02-功能模块/认证-OAuth登录/chunk-wk0e3dz4.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Et, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { SESSION_INGRESS_TOKEN_WELL_KNOWN_PATH, MAX_CREDENTIAL_BYTES } from "../../02-功能模块/认证-OAuth登录/credential-file-descriptors.js";
import { startGuestVitalsEmitter } from "../../02-功能模块/自托管Runner/guest-vitals-emitter.js";
import { readBoundedFile } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
async function startHostedWorkerVitalsEmitter({ sessionId: o, sdkUrl: i }) {
  try {
    let t = a.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? SESSION_INGRESS_TOKEN_WELL_KNOWN_PATH;
    if (!(await readBoundedFile(t, MAX_CREDENTIAL_BYTES))?.trim()) {
      n("[vitals] no session token file on this worker; guest vitals disabled");
      return;
    }
    let r = await startGuestVitalsEmitter({
      sessionId: o,
      apiBaseUrl: bQ(new URL(i)).origin,
      tokenFilePath: t,
      binaryResolution: "search",
      log: n,
    });
    if (r) Et(() => r.stop());
  } catch (t) {
    n(`[vitals] not started: ${l(t)}`);
  }
}
export { startHostedWorkerVitalsEmitter };

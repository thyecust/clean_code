// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { isSimpleMode } from "../../02-功能模块/模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { consumeBgAuthSnapshotAsync, getOAuthTokenAsync, getApiKeyAsync, getSessionIngressTokenAsync } from "../../02-功能模块/认证-OAuth登录/credential-file-descriptors.js";
async function primeFileDescriptorCredentials(e, r = {}) {
  try {
    if (!isSimpleMode()) {
      if (!a.CLAUDE_CODE_OAUTH_TOKEN && r.bgAuthSnapshot !== "leave")
        await consumeBgAuthSnapshotAsync(e);
      (await getOAuthTokenAsync(e), await getApiKeyAsync(e));
    }
    await getSessionIngressTokenAsync(e);
  } catch (o) {
    logForDebugging(`Descriptor credential prime failed (non-fatal): ${l(o)}`, {
      level: "error",
    });
  }
}
export { primeFileDescriptorCredentials };

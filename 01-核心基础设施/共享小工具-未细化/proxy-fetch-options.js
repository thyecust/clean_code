// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getUsableProxyUrl, getProxyFetchOptions } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { agentProxyEnv } from "../核心工具-进程与信号/chunk-ckrdhhqd.js";
import { readFile } from "fs/promises";
async function resolveProxyFetchOptions(t) {
  if (!getUsableProxyUrl()) {
    let r = agentProxyEnv();
    if (r.HTTPS_PROXY && URL.parse(t)?.protocol === "https:") {
      let o;
      if (r.SSL_CERT_FILE)
        try {
          o = await readFile(r.SSL_CERT_FILE, "utf8");
        } catch (e) {
          n(
            `MCP agent-proxy fallback: failed to read CA bundle: ${e instanceof Error ? e.message : String(e)}`,
            { level: "warn" },
          );
        }
      return getProxyFetchOptions({
        url: t,
        fallbackProxy: { url: r.HTTPS_PROXY, noProxy: r.NO_PROXY, ca: o },
      });
    }
  }
  return getProxyFetchOptions({ url: t });
}
export { resolveProxyFetchOptions };
